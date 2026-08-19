import { createHmac } from 'node:crypto'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const REVIEWERS = new Set([
  'My team',
  'Customer',
  'Partner',
  'Security',
  'Auditor / compliance',
  'Another system',
  'Other',
])

const MAX_BODY_BYTES = 16 * 1024
const MAX_FIELD = 4000
const MAX_COMPANY = 200
const ALLOWED_ORIGINS = new Set(['https://www.originary.xyz', 'https://originary.xyz'])

// In-memory fixed-window rate limit. Best-effort per warm instance; a shared
// store (Upstash/Redis) would be needed for multi-instance deployments.
const RATE = new Map<string, { count: number; reset: number }>()
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5

function rateLimited(key: string): boolean {
  const now = Date.now()
  const e = RATE.get(key)
  if (!e || now > e.reset) {
    RATE.set(key, { count: 1, reset: now + WINDOW_MS })
    return false
  }
  e.count += 1
  return e.count > MAX_PER_WINDOW
}

/** Reject anything that looks like a record payload, JWS, or key material. */
function looksLikeSensitiveArtifact(text: string): boolean {
  return (
    /eyJ[A-Za-z0-9_-]{16,}\.[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}/.test(text) ||
    /-----BEGIN [A-Z ]*KEY-----/.test(text) ||
    /"d"\s*:\s*"[A-Za-z0-9_-]{20,}"/.test(text)
  )
}

export async function POST(request: Request) {
  // Content-type check.
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return NextResponse.json({ ok: false, error: 'invalid_content_type' }, { status: 415 })
  }

  // Same-origin check (Origin header is set by browsers on POST).
  const origin = request.headers.get('origin')
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return NextResponse.json({ ok: false, error: 'forbidden_origin' }, { status: 403 })
  }

  // Body-size rejection before parsing.
  const raw = await request.text()
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: 'payload_too_large' }, { status: 413 })
  }

  // Rate limit by client IP.
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 })
  }

  let body: Record<string, unknown>
  try {
    body = JSON.parse(raw)
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  // Honeypot: silently accept and drop.
  if (typeof body.website === 'string' && body.website.length > 0) {
    return NextResponse.json({ ok: true })
  }

  const email = String(body.email ?? '').trim()
  const company = String(body.company ?? '').trim()
  const message = String(body.message ?? '').trim()
  const workflow = String(body.workflow ?? '').trim()
  const reviewer = String(body.reviewer ?? '').trim()
  const currentTool = String(body.current_tool ?? '').trim()

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 })
  }
  if (company.length > MAX_COMPANY) {
    return NextResponse.json({ ok: false, error: 'invalid_company' }, { status: 400 })
  }
  if (!message || message.length > MAX_FIELD) {
    return NextResponse.json({ ok: false, error: 'invalid_message' }, { status: 400 })
  }
  if (reviewer && !REVIEWERS.has(reviewer)) {
    return NextResponse.json({ ok: false, error: 'invalid_reviewer' }, { status: 400 })
  }
  const combined = [company, message, workflow, reviewer, currentTool].join('\n')
  if (looksLikeSensitiveArtifact(combined)) {
    return NextResponse.json(
      { ok: false, error: 'sensitive_artifact', detail: 'Do not submit records, JWS strings, or keys.' },
      { status: 400 },
    )
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL
  if (!webhook) {
    // Not configured yet: tell the client to fall back to the email path.
    return NextResponse.json({ ok: false, error: 'unconfigured' }, { status: 503 })
  }

  // Idempotency key: stable per (email, workflow, message) so retries de-dup.
  const idempotencyKey = createHmac('sha256', process.env.CONTACT_WEBHOOK_SECRET ?? 'unsigned')
    .update(`${email}|${workflow}|${message}`)
    .digest('hex')
    .slice(0, 32)

  // Log delivery metadata only, never message contents or PII.
  const payload = {
    source: 'originary.xyz/contact',
    email,
    company,
    workflow,
    reviewer,
    current_tool: currentTool,
    message,
    idempotency_key: idempotencyKey,
  }
  const bodyStr = JSON.stringify(payload)

  const headers: Record<string, string> = {
    'content-type': 'application/json',
    'idempotency-key': idempotencyKey,
  }
  const secret = process.env.CONTACT_WEBHOOK_SECRET
  if (secret) {
    const ts = String(Math.floor(Date.now() / 1000))
    headers['x-originary-timestamp'] = ts
    headers['x-originary-signature'] = createHmac('sha256', secret).update(`${ts}.${bodyStr}`).digest('hex')
  }

  try {
    const res = await fetch(webhook, {
      method: 'POST',
      headers,
      body: bodyStr,
      signal: AbortSignal.timeout(8000),
    })
    if (!res.ok) throw new Error(`webhook ${res.status}`)
  } catch {
    console.error(`contact delivery failed workflow=${workflow} idem=${idempotencyKey}`)
    return NextResponse.json({ ok: false, error: 'delivery_failed' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}

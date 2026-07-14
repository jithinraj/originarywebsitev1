import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const INTENTS = new Set([
  'pilot',
  'security_procurement',
  'protocol_standards',
  'integration_partnership',
  'press_speaking',
])

const MAX_LEN = 4000

/** Reject anything that looks like a record payload, JWS, or key material. */
function looksLikeSensitiveArtifact(text: string): boolean {
  return (
    /eyJ[A-Za-z0-9_-]{16,}\.[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}/.test(text) ||
    /-----BEGIN [A-Z ]*KEY-----/.test(text) ||
    /"d"\s*:\s*"[A-Za-z0-9_-]{20,}"/.test(text)
  )
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  // Honeypot: silently accept and drop.
  if (typeof body.website === 'string' && body.website.length > 0) {
    return NextResponse.json({ ok: true })
  }

  const intent = String(body.intent ?? '')
  const email = String(body.email ?? '').trim()
  const company = String(body.company ?? '').trim()
  const message = String(body.message ?? '').trim()
  const workflow = String(body.workflow ?? '').trim()
  const deployment = String(body.deployment ?? '').trim()

  if (!INTENTS.has(intent)) {
    return NextResponse.json({ ok: false, error: 'invalid_intent' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 })
  }
  const combined = [company, message, workflow, deployment].join('\n')
  if (combined.length > MAX_LEN) {
    return NextResponse.json({ ok: false, error: 'too_long' }, { status: 400 })
  }
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

  const payload = {
    source: 'originary.xyz/contact',
    intent,
    email,
    company,
    workflow,
    deployment,
    message,
    submitted_at: new Date().toISOString(),
  }

  try {
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) throw new Error(`webhook ${res.status}`)
  } catch {
    return NextResponse.json({ ok: false, error: 'delivery_failed' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}

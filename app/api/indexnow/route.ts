import { NextRequest, NextResponse } from 'next/server'
import { CANONICAL_PATHS } from '@/lib/routes'

export const runtime = 'nodejs'

const INDEXNOW_KEY = process.env.INDEXNOW_KEY ?? ''
const TRIGGER_SECRET = process.env.INDEXNOW_TRIGGER_SECRET ?? ''
const SITE_HOST = 'www.originary.xyz'
const MAX_URLS = 50

// IndexNow: Bing, Yandex, Seznam, Naver. Google uses Search Console + sitemap.
//
// This endpoint is protected: it requires the INDEXNOW_TRIGGER_SECRET bearer
// token and only accepts canonical, indexable, same-host https URLs from the
// route registry. There is no public GET trigger.

function normalize(input: string): string | null {
  let path: string
  try {
    if (input.startsWith('http')) {
      const u = new URL(input)
      if (u.protocol !== 'https:' || u.host !== SITE_HOST) return null
      path = u.pathname
    } else if (input.startsWith('/')) {
      path = input
    } else {
      return null
    }
  } catch {
    return null
  }
  const clean = path.replace(/\/+$/, '') || '/'
  return CANONICAL_PATHS.has(clean) ? clean : null
}

export async function POST(request: NextRequest) {
  const auth = request.headers.get('authorization') ?? ''
  if (!TRIGGER_SECRET || auth !== `Bearer ${TRIGGER_SECRET}`) {
    return NextResponse.json({ success: false, error: 'unauthorized' }, { status: 401 })
  }
  if (request.headers.get('content-type')?.includes('application/json') !== true) {
    return NextResponse.json({ success: false, error: 'invalid_content_type' }, { status: 415 })
  }
  if (!INDEXNOW_KEY) {
    return NextResponse.json({ success: false, error: 'not_configured' }, { status: 503 })
  }

  let body: { urls?: unknown }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: 'invalid_json' }, { status: 400 })
  }

  const raw = Array.isArray(body.urls) ? body.urls : []
  const normalized = raw.map((u) => (typeof u === 'string' ? normalize(u) : null)).filter((p): p is string => p !== null)
  const valid = normalized.filter((p, i) => normalized.indexOf(p) === i)
  if (valid.length === 0) {
    return NextResponse.json({ success: false, error: 'no_valid_canonical_urls' }, { status: 400 })
  }
  if (valid.length > MAX_URLS) {
    return NextResponse.json({ success: false, error: 'too_many_urls', limit: MAX_URLS }, { status: 400 })
  }

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(8000),
      body: JSON.stringify({
        host: SITE_HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
        urlList: valid.map((p) => `https://${SITE_HOST}${p === '/' ? '' : p}`),
      }),
    })
    const ok = res.ok || res.status === 202
    return NextResponse.json(
      { success: ok, submitted: valid.length, indexnow: ok },
      { status: ok ? 200 : 502 },
    )
  } catch {
    return NextResponse.json({ success: false, error: 'submission_failed' }, { status: 502 })
  }
}

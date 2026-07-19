#!/usr/bin/env node
/**
 * Redirect integration test.
 *
 * Unlike scripts/check-redirects.mjs (which validates the next.config.js object
 * statically), this exercises a RUNNING server (dev or `next start`) and
 * asserts the retired-route quarantine end to end:
 *   - the retired source returns a permanent 308
 *   - the Location is exactly the intended destination
 *   - the destination resolves in one hop (returns 200 directly, no chain)
 *   - the retired source does not appear in /sitemap.xml
 *
 * Set BASE_URL to target a preview/production origin (default localhost:3000).
 * Skips cleanly (exit 0) when no server is reachable, so it is safe to run in
 * environments without a booted server.
 */
const BASE = (process.env.BASE_URL || 'http://localhost:3000').replace(/\/+$/, '')

const REQUIRED = {
  '/ai': '/records#agent',
  '/system-of-record': '/how-it-works',
  '/originary-ai': '/product',
}

const errors = []
const norm = (loc) => (loc || '').replace(BASE, '') || null

async function main() {
  try {
    await fetch(BASE + '/', { redirect: 'manual' })
  } catch {
    console.log(`redirect integration test SKIPPED (no server at ${BASE})`)
    process.exit(0)
  }

  const sitemap = await fetch(BASE + '/sitemap.xml').then((r) => r.text()).catch(() => '')

  for (const [src, dest] of Object.entries(REQUIRED)) {
    const res = await fetch(BASE + src, { redirect: 'manual' })
    if (res.status !== 308) errors.push(`${src}: expected 308, got ${res.status}`)

    const loc = norm(res.headers.get('location'))
    if (loc !== dest) errors.push(`${src}: Location expected ${dest}, got ${loc}`)

    // One hop: the destination path (minus #fragment) returns 200 directly.
    const destPath = dest.replace(/#.*$/, '')
    const d = await fetch(BASE + destPath, { redirect: 'manual' })
    if (d.status !== 200) errors.push(`${src} -> ${destPath}: destination expected 200, got ${d.status}`)

    // Retired source must not be advertised in the sitemap.
    if (sitemap.includes(`${src}</loc>`) || sitemap.includes(`${BASE}${src}<`)) {
      errors.push(`${src}: present in sitemap`)
    }
  }

  if (errors.length) {
    console.error(`redirect integration test FAILED (${errors.length}):`)
    errors.forEach((e) => console.error('  ' + e))
    process.exit(1)
  }
  console.log(`redirect integration test passed (${Object.keys(REQUIRED).length} redirects, base ${BASE})`)
}

main()

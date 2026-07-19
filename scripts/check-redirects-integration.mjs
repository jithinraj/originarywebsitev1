#!/usr/bin/env node
/**
 * Redirect integration test (STRICT).
 *
 * Exercises a RUNNING server (dev or `next start`) and asserts the retired-route
 * quarantine end to end. The map is NOT duplicated here: it is imported from the
 * single contract in lib/retired-routes.mjs (also consumed by next.config.js and
 * scripts/check-redirects.mjs).
 *
 * This is a real gate: it FAILS (exit 1) if the server cannot be reached or the
 * sitemap cannot be fetched. It must be run against a running server (locally,
 * or in CI after `next build && next start`). It is intentionally NOT part of
 * the server-less prebuild `check:all`. Set BASE_URL to target another origin
 * (default http://localhost:3000).
 *
 * Per retired route it asserts:
 *   - bare source: 308, exact Location, one hop (destination returns 200 directly)
 *   - trailing-slash variant resolves (following redirects) to the destination 200
 *   - query variant: 308, Location path is the destination and the query is preserved
 *   - the source does not appear in /sitemap.xml
 *   - the source is not linked from the homepage
 *   - the destination page self-canonicalizes
 */
import { RETIRED_ROUTES } from '../lib/retired-routes.mjs'

const BASE = (process.env.BASE_URL || 'http://localhost:3000').replace(/\/+$/, '')
const errors = []
const norm = (loc) => (loc || '').replace(BASE, '') || null
// Pathname from a relative or absolute URL (canonicals use the production host).
const pathOf = (u) => {
  try {
    return new URL(u, BASE).pathname
  } catch {
    return (u || '').replace(/[?#].*$/, '') || '/'
  }
}

async function main() {
  try {
    const root = await fetch(BASE + '/', { redirect: 'manual' })
    if (!root.ok && root.status !== 308) throw new Error(`root status ${root.status}`)
  } catch (err) {
    console.error(`redirect integration test FAILED: cannot reach ${BASE} (${err.message})`)
    process.exit(1)
  }

  const sitemapRes = await fetch(BASE + '/sitemap.xml')
  if (!sitemapRes.ok) {
    console.error(`redirect integration test FAILED: sitemap fetch ${sitemapRes.status}`)
    process.exit(1)
  }
  const sitemap = await sitemapRes.text()

  const home = await fetch(BASE + '/').then((r) => r.text()).catch(() => '')

  const destinations = new Set()

  for (const { source, destination } of RETIRED_ROUTES) {
    destinations.add(destination.replace(/#.*$/, ''))
    const destPath = destination.replace(/#.*$/, '')

    // Bare source: 308 + exact Location + one hop.
    const res = await fetch(BASE + source, { redirect: 'manual' })
    if (res.status !== 308) errors.push(`${source}: expected 308, got ${res.status}`)
    if (norm(res.headers.get('location')) !== destination) {
      errors.push(`${source}: Location expected ${destination}, got ${norm(res.headers.get('location'))}`)
    }
    const dest = await fetch(BASE + destPath, { redirect: 'manual' })
    if (dest.status !== 200) errors.push(`${source} -> ${destPath}: destination expected 200 (one hop), got ${dest.status}`)

    // Trailing-slash variant: must resolve to the destination.
    const slash = await fetch(BASE + source + '/', { redirect: 'follow' })
    if (!slash.ok) errors.push(`${source}/ : did not resolve, status ${slash.status}`)
    if (pathOf(slash.url) !== destPath) errors.push(`${source}/ : resolved to ${pathOf(slash.url)}, expected ${destPath}`)

    // Query variant: 308, destination path preserved, query preserved.
    const q = await fetch(BASE + source + '?utm_source=test', { redirect: 'manual' })
    if (q.status !== 308) errors.push(`${source}?utm_source=test: expected 308, got ${q.status}`)
    const qloc = norm(q.headers.get('location')) || ''
    if (pathOf(BASE + qloc) !== destPath) errors.push(`${source}?...: Location path ${pathOf(BASE + qloc)}, expected ${destPath}`)
    if (!qloc.includes('utm_source=test')) errors.push(`${source}?...: query not preserved (Location ${qloc})`)

    // Not advertised in the sitemap.
    if (sitemap.includes(`${source}</loc>`) || sitemap.includes(`${BASE}${source}<`)) {
      errors.push(`${source}: present in sitemap`)
    }
    // Not linked from the homepage.
    if (home.includes(`href="${source}"`) || home.includes(`href='${source}'`)) {
      errors.push(`${source}: linked from homepage`)
    }
  }

  // Destinations self-canonicalize.
  for (const d of destinations) {
    const html = await fetch(BASE + d).then((r) => r.text()).catch(() => '')
    const m = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i) || html.match(/<link[^>]+href="([^"]+)"[^>]+rel="canonical"/i)
    if (!m) {
      errors.push(`${d}: no canonical link found`)
    } else if (pathOf(m[1]) !== d) {
      errors.push(`${d}: canonical is ${pathOf(m[1])}, expected self (${d})`)
    }
  }

  if (errors.length) {
    console.error(`redirect integration test FAILED (${errors.length}):`)
    errors.forEach((e) => console.error('  ' + e))
    process.exit(1)
  }
  console.log(`redirect integration test passed (${RETIRED_ROUTES.length} routes x {bare, slash, query} + sitemap + homepage + self-canonical, base ${BASE})`)
}

main()

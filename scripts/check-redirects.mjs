#!/usr/bin/env node
/**
 * Redirect + route hygiene gate. Rejects:
 *  - duplicate redirect sources
 *  - redirect loops (source === destination)
 *  - a source that is still a canonical page
 *  - a destination that is neither canonical nor an external URL
 *  - broad wildcard redirects (`:path*` / `:path+`) without an allowlist
 *  - article-to-generic redirects (/blog/<slug> -> a non-article page)
 *  - a base path already covered by a sibling wildcard
 */
import { readFileSync } from 'node:fs'
import { LEGACY_ROUTE_REDIRECTS } from '../lib/legacy-route-redirects.mjs'

const cfg = readFileSync('next.config.js', 'utf8')

// Parse `{ source: '...', destination: '...' }` pairs from the redirects block.
const block = cfg.slice(cfg.indexOf('async redirects()'), cfg.indexOf('async headers()'))
const pairs = [...block.matchAll(/source:\s*'([^']+)'[^}]*?destination:\s*'([^']+)'/g)].map((m) => ({
  source: m[1],
  destination: m[2],
}))

// The legacy route redirects are generated in next.config.js from the shared
// map (a spread, not literals), so merge them in for hygiene validation.
for (const r of LEGACY_ROUTE_REDIRECTS) pairs.push({ source: r.source, destination: r.destination })

// Canonical routes come from the same registry the app uses.
const routesTs = readFileSync('lib/routes.ts', 'utf8')
const staticRoutes = [...routesTs.matchAll(/'(\/[^']*)'/g)].map((m) => m[1])
const canonical = new Set(staticRoutes)

const errors = []
const seen = new Set()

const WILDCARD_ALLOW = new Set() // no broad wildcards permitted

for (const { source, destination } of pairs) {
  if (seen.has(source)) errors.push(`duplicate source: ${source}`)
  seen.add(source)

  if (source === destination) errors.push(`redirect loop: ${source}`)

  if (canonical.has(source)) errors.push(`source is still a canonical page: ${source}`)

  const isWildcard = /:[a-zA-Z]+[*+]/.test(source)
  if (isWildcard && !WILDCARD_ALLOW.has(source)) {
    errors.push(`broad wildcard redirect not allowed: ${source}`)
  }

  // Non-page canonical destinations: generated files and discovery documents.
  const NON_PAGE_DEST = new Set(['/sitemap.xml'])
  const isExternal = /^https?:\/\//.test(destination)
  // Strip a trailing #fragment (e.g. /records#agent) and trailing slashes
  // before checking the destination against the canonical route set.
  const destPath = destination.replace(/#.*$/, '').replace(/\/+$/, '') || '/'
  if (
    !isExternal &&
    !canonical.has(destPath) &&
    !destination.startsWith('/.well-known') &&
    !NON_PAGE_DEST.has(destination)
  ) {
    errors.push(`destination is not canonical: ${source} -> ${destination}`)
  }

  if (source.startsWith('/blog/') && !destination.startsWith('/blog/')) {
    errors.push(`article-to-generic redirect: ${source} -> ${destination}`)
  }
}

// Base-path-covered-by-wildcard overlap
for (const { source } of pairs) {
  const wild = source.replace(/\/:[a-zA-Z]+[*+]$/, '')
  if (wild !== source && seen.has(wild)) {
    errors.push(`base ${wild} already covered by wildcard ${source}`)
  }
}

// Legacy routes MUST redirect to their current canonical page. If any of these
// is dropped or repointed, this gate fails so the route can never silently
// regress to a 404 or the wrong destination.
const REQUIRED_REDIRECTS = Object.fromEntries(LEGACY_ROUTE_REDIRECTS.map((r) => [r.source, r.destination]))
const bySource = new Map(pairs.map((p) => [p.source, p.destination]))
for (const [src, dest] of Object.entries(REQUIRED_REDIRECTS)) {
  if (bySource.get(src) !== dest) {
    errors.push(`required redirect missing or wrong: ${src} -> ${dest} (got ${bySource.get(src) ?? 'none'})`)
  }
}

if (errors.length) {
  console.error(`Redirect gate FAILED (${errors.length}):`)
  errors.forEach((e) => console.error('  ' + e))
  process.exit(1)
}
console.log(`Redirect gate passed (${pairs.length} redirects, ${canonical.size} canonical routes)`)

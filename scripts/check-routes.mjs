#!/usr/bin/env node
/**
 * Route registry gate. Confirms every canonical route in lib/routes.ts has a
 * real App Router page on disk, and that nav links resolve to canonical routes.
 * Fails closed on a registry route with no page or a nav link to nowhere.
 */
import { readFileSync, existsSync } from 'node:fs'

const routesTs = readFileSync('lib/routes.ts', 'utf8')
const block = routesTs.slice(routesTs.indexOf('STATIC_ROUTES'), routesTs.indexOf('ARTICLE_ROUTES'))
const staticRoutes = [...block.matchAll(/'(\/[^']*)'/g)].map((m) => m[1])

const errors = []
for (const route of staticRoutes) {
  const seg = route === '/' ? '' : route
  const candidates = [`app${seg}/page.tsx`, `app${seg}/page.mdx`, `app${seg}/page.ts`]
  if (!candidates.some((c) => existsSync(c))) errors.push(`registry route has no page: ${route}`)
}

// Nav links must be canonical (or a known fragment/external).
const nav = readFileSync('components/home/Nav.tsx', 'utf8')
const canonical = new Set(staticRoutes)
const navHrefs = [...nav.matchAll(/href:\s*'([^']+)'/g)].map((m) => m[1])
for (const href of navHrefs) {
  if (/^https?:\/\//.test(href)) continue
  const clean = href.split('#')[0].replace(/\/+$/, '') || '/'
  if (!canonical.has(clean) && clean !== '/blog') errors.push(`nav links to unknown route: ${href}`)
}

if (errors.length) {
  console.error(`Route gate FAILED (${errors.length}):`)
  errors.forEach((e) => console.error('  ' + e))
  process.exit(1)
}
console.log(`Route gate passed (${staticRoutes.length} routes, ${navHrefs.length} nav links)`)

#!/usr/bin/env node
/**
 * Footer link gate. Parses the real current footer (components/home/Footer.tsx),
 * extracts every href, and validates internal routes against the canonical
 * route registry (lib/routes.ts). External URLs must be absolute https. Fails
 * closed: a missing footer file or an unknown internal route is an error.
 */
import { readFileSync } from 'node:fs'

const FOOTER = 'components/home/Footer.tsx'
let footer
try {
  footer = readFileSync(FOOTER, 'utf8')
} catch {
  console.error(`Footer gate FAILED: cannot read ${FOOTER}`)
  process.exit(1)
}

const routesTs = readFileSync('lib/routes.ts', 'utf8')
const staticRoutes = [...routesTs.matchAll(/'(\/[^']*)'/g)].map((m) => m[1])
const canonical = new Set(staticRoutes)
const allowInternal = (path) => {
  const clean = path.split('#')[0].replace(/\/+$/, '') || '/'
  return canonical.has(clean) || clean.startsWith('/blog/') || clean === '/blog'
}

const hrefs = [...footer.matchAll(/href:\s*'([^']+)'/g)].map((m) => m[1])
if (hrefs.length === 0) {
  console.error('Footer gate FAILED: no hrefs found (footer shape changed?)')
  process.exit(1)
}

const errors = []
for (const href of hrefs) {
  if (/^https:\/\//.test(href)) continue
  if (/^(mailto:|tel:)/.test(href)) continue
  if (!href.startsWith('/')) {
    errors.push(`non-absolute / non-https href: ${href}`)
    continue
  }
  if (!allowInternal(href)) errors.push(`footer links to unknown route: ${href}`)
}

if (errors.length) {
  console.error(`Footer gate FAILED (${errors.length}):`)
  errors.forEach((e) => console.error('  ' + e))
  process.exit(1)
}
console.log(`Footer gate passed (${hrefs.length} links checked)`)

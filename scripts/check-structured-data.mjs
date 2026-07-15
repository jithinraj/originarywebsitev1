#!/usr/bin/env node
/**
 * Structured-data gate. Enforces the canonical entity model:
 *  - exactly one canonical site Organization (@id .../#organization), named Originary
 *  - Poem only as legalName (or inside legal-page JSON-LD)
 *  - no stale SearchAction / SiteNavigationElement / artificial alternateName
 *  - no PEAC GitHub/npm links inside an Organization sameAs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const LEGAL = /app\/(terms|privacy|legal|trademark)/

const files = []
const walk = (d) => {
  for (const n of readdirSync(d)) {
    const p = join(d, n)
    const st = statSync(p)
    if (st.isDirectory()) { if (!n.startsWith('.') && n !== 'node_modules') walk(p) }
    else if (n.endsWith('.tsx') || n.endsWith('.ts')) files.push(p)
  }
}
walk('app'); walk('lib')

const errors = []
let canonicalOrgs = 0

for (const f of files) {
  const t = readFileSync(f, 'utf8')
  // Canonical site Organization definitions.
  // Canonical org: an Organization named Originary with Poem as legalName.
  if (/'@type':\s*'Organization'/.test(t) && /name:\s*'Originary'/.test(t) && /legalName:\s*'Poem, Inc\.'/.test(t)) canonicalOrgs += 1
  if (/potentialAction[\s\S]{0,120}SearchAction/.test(t)) errors.push(`${f}: stale SearchAction`)
  if (/SiteNavigationElement/.test(t)) errors.push(`${f}: stale SiteNavigationElement graph`)
  if (/Originary AI|Originary Protocol|Originary Receipts/.test(t) && /alternateName/.test(t)) {
    errors.push(`${f}: artificial alternateName SEO aliases`)
  }
  const same = t.match(/sameAs:\s*\[[\s\S]*?\]/)
  if (same && /github\.com\/peacprotocol|npmjs\.com\/org\/peac/.test(same[0])) {
    errors.push(`${f}: PEAC repo/npm inside an Organization sameAs`)
  }
  // Poem-as-name outside legal pages/entities legalName.
  if (!LEGAL.test(f) && /'@type':\s*'Organization'/.test(t) && /name:\s*'Poem, Inc\.'/.test(t)) {
    errors.push(`${f}: Organization named Poem, Inc. outside a legal page`)
  }
}

if (canonicalOrgs !== 1) errors.push(`expected exactly 1 canonical Organization (#organization), found ${canonicalOrgs}`)

if (errors.length) {
  console.error(`Structured-data gate FAILED (${errors.length}):`)
  errors.forEach((e) => console.error('  ' + e))
  process.exit(1)
}
console.log(`Structured-data gate passed (1 canonical Organization, ${files.length} files scanned)`)

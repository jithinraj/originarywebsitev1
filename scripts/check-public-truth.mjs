#!/usr/bin/env node
/**
 * check:public-truth
 *
 * Machine-readable public surfaces (llms.txt, humans.txt, manifest.json, and
 * the site/social constants) must not reassert retired products, uncertified
 * compliance claims, dead routes, or stale protocol versions. These files are
 * read by crawlers and model ingesters, so drift here is invisible in the UI
 * but still public. This gate fails the build on any known-stale phrase.
 */
import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const ROOT = resolve(process.cwd())

// Files that describe the company/product to machines. Each must be current.
const FILES = [
  'public/llms.txt',
  'public/humans.txt',
  'public/manifest.json',
  'lib/social.ts',
  'lib/config.ts',
]

// Retired products, uncertified claims, and old framing that must never return.
const FORBIDDEN = [
  { re: /receipts for the agentic web/i, why: 'retired tagline' },
  { re: /receipt rail/i, why: 'retired framing' },
  { re: /gateway\s*\(?402\)?/i, why: 'Gateway 402 is not a current product' },
  { re: /\bStudio\b/, why: 'Studio is not a current product' },
  { re: /\bSOC\s*2\b/i, why: 'SOC 2 is not certified' },
  { re: /PIPEDA/i, why: 'no blanket compliance claim' },
  { re: /enterprise-grade encryption/i, why: 'unverifiable claim' },
  { re: /24\/7 (security|monitoring)/i, why: 'unverifiable operations claim' },
  { re: /apply policy/i, why: 'implies a policy engine Originary does not run' },
  { re: /prove what agents did/i, why: 'overclaim' },
  { re: /\bemerging standard\b/i, why: 'overclaim' },
  { re: /provable compliance/i, why: 'overclaim' },
]

// Routes that redirect or 410; they must not be advertised as live.
const DEAD_ROUTES = ['/demo', '/trace', '/receipts', '/developers', '/search', '/learn']

// Protocol version strings that are stale. Wire is frozen at 0.2; release 0.16.2.
const STALE_VERSIONS = [/\bv?0\.9\.\d+\b/, /wire version:\s*0\.9/i, /\bv?0\.15\.\d+\b/]

let failures = 0
const fail = (file, msg) => {
  console.error(`  [FAIL] ${file}: ${msg}`)
  failures++
}

for (const rel of FILES) {
  const abs = resolve(ROOT, rel)
  if (!existsSync(abs)) {
    // llms/humans/manifest are required; lib constants are required.
    fail(rel, 'expected file is missing')
    continue
  }
  const text = readFileSync(abs, 'utf8')
  for (const { re, why } of FORBIDDEN) {
    if (re.test(text)) fail(rel, `forbidden phrase (${why}): ${re}`)
  }
  for (const re of STALE_VERSIONS) {
    if (re.test(text)) fail(rel, `stale protocol version: ${re}`)
  }
  for (const route of DEAD_ROUTES) {
    // Match the route as a path segment inside a URL or bare href.
    const re = new RegExp(`(https?://[^\\s"']*)?${route}(?![\\w-])`, 'i')
    if (re.test(text)) fail(rel, `references dead route: ${route}`)
  }
}

// Legacy files that must stay deleted (single source of truth elsewhere).
const MUST_BE_ABSENT = ['humans.txt', 'public/sw.js', 'public/sitemap-data.json']
for (const rel of MUST_BE_ABSENT) {
  if (existsSync(resolve(ROOT, rel))) {
    fail(rel, 'legacy file must stay removed (superseded)')
  }
}

if (failures > 0) {
  console.error(`\ncheck:public-truth FAILED with ${failures} issue(s).`)
  process.exit(1)
}
console.log('check:public-truth OK - machine surfaces are current and consistent.')

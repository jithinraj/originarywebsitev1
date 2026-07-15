#!/usr/bin/env node
/**
 * Identity + verification-language gate. Enforces the canonical hierarchy and
 * blocks overclaiming language on public surfaces:
 *   Poem, Inc. = legal entity; Originary = brand; Originary Verify = product;
 *   PEAC Protocol = Apache-2.0 open-source protocol project.
 *
 * Canonical verification principle: a record authenticates issuer-reported
 * claims and binds exact signed bytes and supplied digests. It does not
 * independently establish complete real-world truth. Language that says
 * otherwise ("prove what happened", "portable proof") is blocked.
 *
 * Whitespace is normalized before matching so a phrase split across line breaks
 * cannot evade the gate.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = process.cwd()
const SCAN_DIRS = ['app', 'components', 'lib']
const EXTRA_FILES = ['public/llms.txt', 'public/humans.txt', 'README.md', 'DESIGN_SYSTEM.md']
const EXT = new Set(['.tsx', '.ts', '.mdx', '.md'])

// Archived/legal surfaces may quote legacy phrasing in a labeled context.
const EXEMPT = (rel, text) =>
  rel.includes('/blog/') && /status="archived"|Archive|Archived|legacy|Legacy/.test(text)

const FORBIDDEN = [
  // Identity hierarchy
  { re: /\bopen standard\b/i, why: 'use "open-source protocol" / "open protocol project"' },
  { re: /\bindustry standard\b/i, why: 'unsupported standards claim' },
  { re: /\bneutral standard\b/i, why: 'unsupported standards claim' },
  { re: /\bemerging standard\b/i, why: 'unsupported standards claim' },
  { re: /\bopen governance\b/i, why: 'unsupported governance claim' },
  { re: /Originary is the company/i, why: 'Originary is the brand, not the legal company' },
  { re: /Originary is a product of/i, why: 'Originary is the brand, not a product' },
  // Verification-language table (record authenticates issuer-reported claims;
  // it does not independently establish complete real-world truth)
  { re: /made provable/i, why: 'use "made verifiable"' },
  { re: /\bportable proof\b/i, why: 'use "portable signed evidence"' },
  { re: /\bsigned proof\b/i, why: 'use "signed record"' },
  { re: /prove what happened/i, why: 'use "verify what the issuer recorded"' },
  { re: /what verification proves/i, why: 'use "what verification checks"' },
  { re: /no trust required/i, why: 'use "no private-log access required"' },
  { re: /policy that applied/i, why: 'use "policy/context the issuer recorded as applicable"' },
  { re: /make(?:s)? the decision provable/i, why: 'use "makes the reported decision verifiable"' },
  { re: /proves value moved/i, why: 'use "reports or establishes value movement according to that rail"' },
  { re: /record proves payment context/i, why: 'use "record binds the supplied payment-workflow context"' },
  { re: /provable compliance/i, why: 'unsupported compliance claim' },
]

const files = []
const walk = (d) => {
  for (const n of readdirSync(d)) {
    const p = join(d, n)
    const st = statSync(p)
    if (st.isDirectory()) {
      if (n === 'node_modules' || n.startsWith('.')) continue
      walk(p)
    } else if ([...EXT].some((e) => n.endsWith(e))) files.push(p)
  }
}
for (const d of SCAN_DIRS) {
  try {
    walk(join(ROOT, d))
  } catch {
    /* directory may not exist */
  }
}
for (const f of EXTRA_FILES) {
  const p = join(ROOT, f)
  if (existsSync(p)) files.push(p)
}

const errors = []
for (const file of files) {
  const rel = relative(ROOT, file)
  const raw = readFileSync(file, 'utf8')
  if (EXEMPT(rel, raw)) continue
  // Normalize whitespace so a phrase broken across lines is still caught.
  const text = raw.replace(/\s+/g, ' ')
  for (const { re, why } of FORBIDDEN) {
    if (re.test(text)) errors.push(`${rel}: "${(text.match(re) || [''])[0]}" - ${why}`)
  }
}

if (errors.length) {
  console.error(`Identity gate FAILED (${errors.length}):`)
  errors.forEach((e) => console.error('  ' + e))
  process.exit(1)
}
console.log(`Identity gate passed (${files.length} files scanned)`)

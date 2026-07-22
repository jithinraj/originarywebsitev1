#!/usr/bin/env node
/**
 * Protocol truth gate.
 *
 * Fails the build when:
 * 1. The forbidden wire identifier `peac-receipt/0.2` appears anywhere.
 * 2. A stale release metric from an earlier release appears in page source.
 * 3. `peac-receipt/0.1` appears outside an approved legacy-compatibility context.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = process.cwd()
const SCAN_DIRS = ['app', 'components', 'lib', 'public']
const EXTENSIONS = new Set(['.tsx', '.ts', '.mdx', '.md', '.json', '.txt', '.css'])

const FORBIDDEN = [
  { pattern: /peac-receipt\/0\.2/, reason: 'peac-receipt/0.2 does not exist; Wire 0.2 is interaction-record+jwt' },
  { pattern: /11,975|11975/, reason: 'stale test count from an earlier release' },
  { pattern: /12,662|(?<!\d)12662(?!\d)/, reason: 'incorrect test count; use the value in the facts registry' },
  { pattern: /12,666|(?<!\d)12666(?!\d)/, reason: 'stale test count; use the value in the facts registry' },
]

// Files allowed to mention legacy identifiers in a compatibility context.
const LEGACY_ALLOWED = new Set([
  'app/peac/page.tsx',
  'public/.well-known/peac.txt',
  'lib/facts.ts',
  'scripts/check-protocol-truth.mjs',
])

const files = []
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    const st = statSync(p)
    if (st.isDirectory()) {
      if (name === 'node_modules' || name.startsWith('.')) continue
      walk(p)
    } else if ([...EXTENSIONS].some((e) => name.endsWith(e))) {
      files.push(p)
    }
  }
}
for (const d of SCAN_DIRS) {
  try {
    walk(join(ROOT, d))
  } catch {
    /* missing dir */
  }
}

const errors = []
for (const file of files) {
  const rel = relative(ROOT, file)
  const text = readFileSync(file, 'utf8')
  for (const { pattern, reason } of FORBIDDEN) {
    if (pattern.test(text)) errors.push(`${rel}: ${reason}`)
  }
  if (/peac-receipt\/0\.1/.test(text) && !LEGACY_ALLOWED.has(rel)) {
    const legacyContext = /legacy|Legacy|compatibility|Compatibility/.test(text)
    if (!legacyContext) errors.push(`${rel}: peac-receipt/0.1 outside a labeled legacy-compatibility context`)
  }
}

if (errors.length) {
  console.error(`Protocol truth gate FAILED (${errors.length}):`)
  errors.forEach((e) => console.error('  ' + e))
  process.exit(1)
}
console.log(`Protocol truth gate passed (${files.length} files scanned)`)

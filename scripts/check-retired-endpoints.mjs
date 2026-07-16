#!/usr/bin/env node
/**
 * Regression gate for issuer-discovery endpoints intentionally retired with HTTP 410.
 *
 * The two retired paths ("/.well-known/jwks.json", "/.well-known/peac-issuer.json") may appear ONLY in the
 * retirement mechanism (proxy.ts) and its test. A reference on any other page or machine surface fails this gate.
 *
 * This targets the discovery ENDPOINTS, not the "--public-key ./jwks.json" CLI flag, which names a local file
 * the operator supplies and is unaffected.
 */
import { readdirSync, lstatSync, readFileSync } from 'node:fs'
import { join, relative, extname } from 'node:path'

const ROOT = process.cwd()
const RETIRED = [/\/\.well-known\/jwks\.json/, /\/\.well-known\/peac-issuer\.json/]
const ALLOW = new Set(['proxy.ts', 'scripts/proxy-gone.test.mjs', 'scripts/check-retired-endpoints.mjs', 'scripts/check-retired-endpoints.test.mjs'])
const ROOTS = ['app', 'components', 'lib', 'public', 'scripts', '.github']
const SCAN_EXT = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.json', '.txt', '.md', '.yml', '.yaml'])
const SKIP_DIR = new Set(['node_modules', '.next', '.git', '.turbo', 'out', 'dist'])

const found = []

function scanFile(abs) {
  const rel = relative(ROOT, abs).split('\\').join('/')
  if (ALLOW.has(rel)) return
  if (!SCAN_EXT.has(extname(abs))) return
  const text = readFileSync(abs, 'utf8')
  for (const re of RETIRED) {
    if (re.test(text)) found.push(`${rel}: references a retired issuer-discovery endpoint (${re.source})`)
  }
}

// lstat everywhere: symlinks are never followed or scanned, so a link cannot pull the scan outside the repo.
function walk(dir) {
  let entries
  try {
    entries = readdirSync(dir)
  } catch {
    return
  }
  for (const name of entries) {
    if (SKIP_DIR.has(name)) continue
    const p = join(dir, name)
    let lst
    try {
      lst = lstatSync(p)
    } catch {
      continue
    }
    if (lst.isSymbolicLink()) continue
    if (lst.isDirectory()) walk(p)
    else if (lst.isFile()) scanFile(p)
  }
}

for (const r of ROOTS) walk(join(ROOT, r))

// Root-level files (README, next.config.js, other root docs/config).
let rootEntries
try {
  rootEntries = readdirSync(ROOT)
} catch {
  rootEntries = []
}
for (const name of rootEntries) {
  const p = join(ROOT, name)
  let lst
  try {
    lst = lstatSync(p)
  } catch {
    continue
  }
  if (lst.isSymbolicLink()) continue
  if (lst.isFile()) scanFile(p)
}

if (found.length) {
  console.error('Retired issuer-discovery endpoints are still referenced:')
  for (const f of found) console.error(`  ${f}`)
  console.error('\nThese endpoints return 410. Remove the reference; the retirement mechanism lives only in proxy.ts and its test.')
  process.exit(1)
}
console.log('check:retired-endpoints OK - no page or machine surface references the retired issuer chain.')

#!/usr/bin/env node
/**
 * Regression gate: the site must not advertise the retired issuer-discovery endpoints anywhere except the
 * mechanism that retires them. Originary published an Ed25519 issuer chain at these paths and has withdrawn it;
 * every public page and machine surface that still points a client there is a truthfulness bug.
 *
 * The two retired paths may appear ONLY in the retirement mechanism (proxy.ts, which returns 410) and its test.
 * A reference anywhere else - a page, a well-known file, humans.txt, a blog snippet - fails this gate.
 *
 * Note: this targets the discovery ENDPOINTS ("/.well-known/jwks.json", "/.well-known/peac-issuer.json"), not the
 * "--public-key ./jwks.json" CLI flag, which names a local file the operator supplies and is unaffected.
 */
import { readdirSync, statSync, readFileSync } from 'node:fs'
import { join, relative, extname } from 'node:path'

const ROOT = process.cwd()
const RETIRED = [/\/\.well-known\/jwks\.json/, /\/\.well-known\/peac-issuer\.json/]
const ALLOW = new Set(['proxy.ts', 'scripts/proxy-gone.test.mjs', 'scripts/check-retired-endpoints.mjs', 'scripts/check-retired-endpoints.test.mjs'])
const ROOTS = ['app', 'components', 'lib', 'public', 'scripts']
const ROOT_FILES = ['next.config.js', 'proxy.ts']
const SCAN_EXT = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.json', '.txt', '.md'])
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
    let st
    try {
      st = statSync(p)
    } catch {
      continue
    }
    if (st.isDirectory()) walk(p)
    else if (st.isFile()) scanFile(p)
  }
}

for (const r of ROOTS) walk(join(ROOT, r))
for (const f of ROOT_FILES) {
  const p = join(ROOT, f)
  try {
    if (statSync(p).isFile()) scanFile(p)
  } catch {
    /* absent is fine */
  }
}

if (found.length) {
  console.error('Retired issuer-discovery endpoints are still referenced:')
  for (const f of found) console.error(`  ${f}`)
  console.error('\nThese endpoints return 410. Remove the reference, or (only in proxy.ts / its test) keep the retirement mechanism.')
  process.exit(1)
}
console.log('check:retired-endpoints OK - no page or machine surface references the retired issuer chain.')

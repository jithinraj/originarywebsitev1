#!/usr/bin/env node
/**
 * check:claims
 *
 * No public page may render a claim the capability registry does not permit.
 * This gate reads the prohibited-claim vocabulary from lib/capabilities.ts and
 * scans every page/component/machine surface for those phrases. Whitespace is
 * normalized so a claim split across lines is still caught.
 *
 * The registry is the single source of truth for what Originary offers today;
 * managed hosting, KMS, storage, dashboards, formal SLAs, and certifications
 * are marked not_offered and their phrasings are prohibited until backed by
 * evidence.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { resolve, join, extname } from 'node:path'

const ROOT = resolve(process.cwd())

// Parse PROHIBITED_CLAIMS out of the TS registry without a build step: collect
// every prohibitedClaims: [...] array literal from lib/capabilities.ts.
function loadProhibitedClaims() {
  const src = readFileSync(resolve(ROOT, 'lib/capabilities.ts'), 'utf8')
  const claims = new Set()
  const arrayRe = /prohibitedClaims:\s*\[([^\]]*)\]/g
  let m
  while ((m = arrayRe.exec(src)) !== null) {
    const inner = m[1]
    const strRe = /'([^']+)'|"([^"]+)"/g
    let s
    while ((s = strRe.exec(inner)) !== null) {
      claims.add((s[1] ?? s[2]).toLowerCase().replace(/\s+/g, ' '))
    }
  }
  return Array.from(claims)
}

const PROHIBITED = loadProhibitedClaims()
if (PROHIBITED.length === 0) {
  console.error('check:claims: no prohibited claims parsed from lib/capabilities.ts')
  process.exit(1)
}

// Registry files themselves legitimately contain the prohibited strings.
const SKIP_FILES = new Set(['lib/capabilities.ts', 'lib/public-claims.ts'])
const SKIP_DIRS = new Set(['node_modules', '.next', '.git', 'scripts'])
const EXTS = new Set(['.tsx', '.ts', '.md', '.json', '.txt'])

function walk(dir, out) {
  for (const name of readdirSync(dir)) {
    const abs = join(dir, name)
    const rel = abs.slice(ROOT.length + 1)
    if (SKIP_DIRS.has(name)) continue
    const st = statSync(abs)
    if (st.isDirectory()) walk(abs, out)
    else if (EXTS.has(extname(name)) && !SKIP_FILES.has(rel)) out.push(abs)
  }
}

const files = []
for (const top of ['app', 'components', 'lib', 'public']) {
  const abs = resolve(ROOT, top)
  try {
    walk(abs, files)
  } catch {
    /* directory may not exist */
  }
}

// A prohibited phrase is only an overclaim when it is asserted. Skip it when it
// is negated ("does not host verification", "no managed signing") or when it is
// part of an offered, self-prefixed capability ("self-hosted verification",
// "self-managed signing keys").
const NEGATION = /(?:\bno\b|\bnot\b|\bnever\b|\bwithout\b|\bcannot\b|\bdoes not\b|\bdo not\b|\bdoesn't\b|\bdon't\b|\bisn't\b|\bno longer\b|\bself[- ])[\w\s,'-]{0,24}$/

let failures = 0
for (const abs of files) {
  const rel = abs.slice(ROOT.length + 1)
  const text = readFileSync(abs, 'utf8').toLowerCase().replace(/\s+/g, ' ')
  for (const claim of PROHIBITED) {
    let idx = text.indexOf(claim)
    while (idx !== -1) {
      const before = text.slice(Math.max(0, idx - 30), idx)
      const selfPrefixed = /self[- ]$/.test(before)
      const negated = NEGATION.test(before)
      if (!selfPrefixed && !negated) {
        console.error(`  [FAIL] ${rel}: prohibited claim "${claim}" (not permitted by capability registry)`)
        failures++
        break // one report per phrase per file is enough
      }
      idx = text.indexOf(claim, idx + claim.length)
    }
  }
}

if (failures > 0) {
  console.error(`\ncheck:claims FAILED with ${failures} unpermitted claim(s).`)
  process.exit(1)
}
console.log(`check:claims OK - ${files.length} files scanned, ${PROHIBITED.length} prohibited claims enforced.`)

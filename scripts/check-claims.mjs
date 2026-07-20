#!/usr/bin/env node
/**
 * Claims-boundary gate.
 *
 * A signed record establishes that an identified issuer signed a statement and
 * that its bound fields and digests are internally consistent under the supplied
 * verification material. It does not independently establish omitted events,
 * issuer authorization outside the configured trust policy, policy correctness,
 * or external real-world truth.
 *
 * This gate fails when public copy asserts more than that. It bans a small set
 * of phrases that are overclaims regardless of context (they cannot be a correct
 * verification outcome). Reviewed exceptions go in ALLOWLIST with a reason and
 * an expiry date. Generic words like "prove"/"proof" are intentionally NOT
 * banned: they appear in correct hedges ("does not prove...") and domain terms
 * ("proof of payment"); only the specific overclaim phrases below fail.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOTS = ['app', 'components', 'lib']
const EXT = /\.(tsx?|mjs)$/

export const BANNED = [
  'anyone can prove',
  'structurally impossible',
  'structurally excluded',
  'ran exactly as approved',
  'exact response was served',
  'make each decision provable',
  'signed, reasoned, and provable',
  'impossible by construction',
  'no trust required',
  'independently proves',
]

// { file, phrase, reason, expires: 'YYYY-MM-DD' }
export const ALLOWLIST = []

/** Return the banned phrases present in `text` (case-insensitive). */
export function findBanned(text) {
  const lower = text.toLowerCase()
  return BANNED.filter((p) => lower.includes(p))
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) walk(p, out)
    else if (EXT.test(entry.name)) out.push(p)
  }
  return out
}

function main() {
  const files = ROOTS.flatMap((r) => walk(r))
  const today = new Date().toISOString().slice(0, 10)
  const errors = []

  for (const file of files) {
    const text = readFileSync(file, 'utf8')
    for (const phrase of findBanned(text)) {
      const allow = ALLOWLIST.find((a) => a.file === file && a.phrase === phrase)
      if (allow && allow.expires >= today) continue
      errors.push(`${file}: banned overclaim phrase "${phrase}"`)
    }
  }

  if (errors.length) {
    console.error(`Claims gate FAILED (${errors.length}):`)
    errors.forEach((e) => console.error('  ' + e))
    process.exit(1)
  }
  console.log(`Claims gate passed (${files.length} files, ${BANNED.length} banned phrases)`)
}

if (process.argv[1] && process.argv[1].endsWith('check-claims.mjs')) main()

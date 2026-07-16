#!/usr/bin/env node
/**
 * Machine-surface integrity gate.
 *
 * The machine-readable public files are read by crawlers and model ingesters, so a missing file, an unparseable
 * manifest, a stale version string, or a leftover placeholder is publicly visible even when the UI looks fine.
 * This gate enforces observable correctness only: presence, parseability, version currency, and no placeholders.
 */
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const REQUIRED = ['public/llms.txt', 'public/humans.txt', 'public/manifest.json']
// Current release is 0.16.2 (wire 0.2). Any 0.9.x through 0.15.x string on a machine surface is stale.
const STALE = [/\bv?0\.(9|1[0-5])\.\d+\b/, /wire version:\s*0\.(9|1[0-5])\b/i]
const PLACEHOLDER = /REPLACE_WITH|PLACEHOLDER|CHANGE_ME|YOUR_KEY|XXXX|lorem ipsum/i

const errors = []
for (const rel of REQUIRED) {
  const abs = join(ROOT, rel)
  if (!existsSync(abs)) {
    errors.push(`${rel}: required machine file is missing`)
    continue
  }
  const text = readFileSync(abs, 'utf8')
  if (rel.endsWith('.json')) {
    try {
      const parsed = JSON.parse(text)
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) errors.push(`${rel}: not a JSON object`)
    } catch {
      errors.push(`${rel}: invalid JSON`)
    }
  }
  for (const re of STALE) if (re.test(text)) errors.push(`${rel}: stale version string (${re.source})`)
  if (PLACEHOLDER.test(text)) errors.push(`${rel}: placeholder marker present`)
}

if (errors.length) {
  console.error('Machine-surface integrity check failed:')
  for (const e of errors) console.error(`  ${e}`)
  process.exit(1)
}
console.log(`check:machine-integrity OK - ${REQUIRED.length} machine surfaces present, parseable, and current.`)

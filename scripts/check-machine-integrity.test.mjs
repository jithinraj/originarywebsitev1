#!/usr/bin/env node
/** Committed regression tests for the machine-surface integrity gate. */
import { mkdtempSync, mkdirSync, writeFileSync, cpSync, rmSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { tmpdir } from 'node:os'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const GATE = join(dirname(fileURLToPath(import.meta.url)), 'check-machine-integrity.mjs')
const OK = { 'public/llms.txt': '# Originary\nCurrent release 0.16.2.\n', 'public/humans.txt': 'Team\n', 'public/manifest.json': '{"name":"Originary"}\n' }

// each case = files map (missing keys omit that file), expectPass
const CASES = [
  ['clean machine surfaces', OK, true],
  ['missing llms.txt', { 'public/humans.txt': OK['public/humans.txt'], 'public/manifest.json': OK['public/manifest.json'] }, false],
  ['missing manifest.json', { 'public/llms.txt': OK['public/llms.txt'], 'public/humans.txt': OK['public/humans.txt'] }, false],
  ['invalid manifest JSON', { ...OK, 'public/manifest.json': '{ not json' }, false],
  ['manifest not an object', { ...OK, 'public/manifest.json': '[]' }, false],
  ['stale 0.15.x version in llms.txt', { ...OK, 'public/llms.txt': 'Current release 0.15.3.\n' }, false],
  ['stale 0.9.x wire version in humans.txt', { ...OK, 'public/humans.txt': 'PEAC wire version: 0.9\n' }, false],
  ['placeholder in llms.txt', { ...OK, 'public/llms.txt': 'Key: REPLACE_WITH_KEY\n' }, false],
  ['current 0.16.2 is fine', { ...OK, 'public/llms.txt': 'Release 0.16.2, wire 0.2.\n' }, true],
]

let failures = 0
for (const [name, files, expectPass] of CASES) {
  const dir = mkdtempSync(join(tmpdir(), 'machint-'))
  mkdirSync(join(dir, 'public'), { recursive: true })
  mkdirSync(join(dir, 'scripts'), { recursive: true })
  cpSync(GATE, join(dir, 'scripts', 'check-machine-integrity.mjs'))
  for (const [rel, content] of Object.entries(files)) writeFileSync(join(dir, rel), content)
  let pass
  try {
    execFileSync(process.execPath, ['scripts/check-machine-integrity.mjs'], { cwd: dir, stdio: 'pipe' })
    pass = true
  } catch {
    pass = false
  }
  rmSync(dir, { recursive: true, force: true })
  const ok = pass === expectPass
  if (!ok) failures++
  console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${name} (expected ${expectPass ? 'pass' : 'fail'}, got ${pass ? 'pass' : 'fail'})`)
}

if (failures) {
  console.error(`\ncheck-machine-integrity tests FAILED: ${failures} case(s).`)
  process.exit(1)
}
console.log(`\ncheck-machine-integrity tests OK - ${CASES.length} cases.`)

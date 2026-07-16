#!/usr/bin/env node
/**
 * Committed regression tests for the retired-endpoint gate.
 * Runs the gate against temporary trees and asserts pass/fail.
 */
import { mkdtempSync, mkdirSync, writeFileSync, cpSync, rmSync, symlinkSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { tmpdir } from 'node:os'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const GATE = join(dirname(fileURLToPath(import.meta.url)), 'check-retired-endpoints.mjs')

// [name, files{relpath: content}, expectPass]
const CASES = [
  ['clean tree', { 'app/page.tsx': 'export default function P(){return null}\n' }, true],
  ['page references jwks.json', { 'app/verify/page.tsx': 'const u = "https://www.originary.xyz/.well-known/jwks.json"\n' }, false],
  ['page references peac-issuer.json', { 'app/peac/page.tsx': 'const u = "/.well-known/peac-issuer.json"\n' }, false],
  ['machine file references issuer', { 'public/humans.txt': 'JWKS: https://www.originary.xyz/.well-known/jwks.json\n' }, false],
  ['proxy.ts may keep the retirement mechanism', { 'proxy.ts': "const GONE = ['/.well-known/jwks.json', '/.well-known/peac-issuer.json']\n" }, true],
  ['proxy test may reference them', { 'scripts/proxy-gone.test.mjs': "const RETIRED = ['/.well-known/jwks.json']\n" }, true],
  ['--public-key ./jwks.json CLI flag is fine', { 'app/records/page.tsx': 'const c = "npx @peac/cli verify ./record.jws --public-key ./jwks.json"\n' }, true],
  ['blog snippet references issuer', { 'app/blog/x/page.tsx': "const s = 'verify_with: https://www.originary.xyz/.well-known/peac-issuer.json'\n" }, false],
  ['root README references endpoint', { 'README.md': 'Resolve keys at https://www.originary.xyz/.well-known/jwks.json\n' }, false],
  ['.github workflow references endpoint', { '.github/workflows/ci.yml': 'run: curl https://www.originary.xyz/.well-known/peac-issuer.json\n' }, false],
]

let failures = 0
for (const [name, files, expectPass] of CASES) {
  const dir = mkdtempSync(join(tmpdir(), 'retired-'))
  mkdirSync(join(dir, 'scripts'), { recursive: true })
  cpSync(GATE, join(dir, 'scripts', 'check-retired-endpoints.mjs'))
  for (const [rel, content] of Object.entries(files)) {
    const abs = join(dir, rel)
    mkdirSync(dirname(abs), { recursive: true })
    writeFileSync(abs, content)
  }
  let pass
  try {
    execFileSync(process.execPath, ['scripts/check-retired-endpoints.mjs'], { cwd: dir, stdio: 'pipe' })
    pass = true
  } catch {
    pass = false
  }
  rmSync(dir, { recursive: true, force: true })
  const ok = pass === expectPass
  if (!ok) failures++
  console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${name} (expected ${expectPass ? 'pass' : 'fail'}, got ${pass ? 'pass' : 'fail'})`)
}

// symlink not followed: a symlinked dir with an external stale reference must not fail the gate (no external scan)
{
  const dir = mkdtempSync(join(tmpdir(), 'retired-sym-'))
  mkdirSync(join(dir, 'scripts'), { recursive: true })
  mkdirSync(join(dir, 'app'), { recursive: true })
  cpSync(GATE, join(dir, 'scripts', 'check-retired-endpoints.mjs'))
  const external = mkdtempSync(join(tmpdir(), 'retired-ext-'))
  writeFileSync(join(external, 'page.tsx'), 'const u = "https://www.originary.xyz/.well-known/jwks.json"\n')
  symlinkSync(external, join(dir, 'app', 'linked'))
  let pass
  try {
    execFileSync(process.execPath, ['scripts/check-retired-endpoints.mjs'], { cwd: dir, stdio: 'pipe' })
    pass = true
  } catch {
    pass = false
  }
  rmSync(dir, { recursive: true, force: true })
  rmSync(external, { recursive: true, force: true })
  const ok = pass === true
  if (!ok) failures++
  console.log(`  ${ok ? 'PASS' : 'FAIL'}  symlinked dir is not followed (external ref not scanned) (expected pass, got ${pass ? 'pass' : 'fail'})`)
}

if (failures) {
  console.error(`\ncheck-retired-endpoints tests FAILED: ${failures} case(s).`)
  process.exit(1)
}
console.log(`\ncheck-retired-endpoints tests OK - ${CASES.length + 1} cases.`)

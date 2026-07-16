#!/usr/bin/env node
/** Committed regression tests for the @peac install/run pinning gate. */
import { mkdtempSync, mkdirSync, writeFileSync, cpSync, rmSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { tmpdir } from 'node:os'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const GATE = join(dirname(fileURLToPath(import.meta.url)), 'check-cli-pinning.mjs')

const CASES = [
  ['pinned npx command', { 'app/p.tsx': 'const c = "npx -y @peac/cli@0.16.2 verify ./r.jws --public-key ./j.json"\n' }, true],
  ['pinned pnpm dlx command', { 'app/p.tsx': 'const c = "pnpm dlx @peac/cli@0.16.2 samples generate"\n' }, true],
  ['fully pinned multi-package install', { 'app/p.tsx': 'const c = "npm i @peac/protocol@0.16.2 @peac/crypto@0.16.2 @peac/schema@0.16.2"\n' }, true],
  ['npm registry link is fine', { 'app/p.tsx': 'const u = "https://www.npmjs.com/package/@peac/cli"\n' }, true],
  ['prose mention is not a command', { 'public/llms.txt': 'The @peac/cli package verifies records.\n' }, true],
  ['unversioned global install rejected', { 'app/p.tsx': 'const c = "npm i -g @peac/cli"\n' }, false],
  ['unversioned npx rejected', { 'app/p.tsx': 'const c = "npx -y @peac/cli verify ./r.jws"\n' }, false],
  ['mixed: pinned cli + floating protocol rejected', { 'app/p.tsx': 'const c = "npm i @peac/protocol @peac/crypto"\n' }, false],
  ['floating mcp-server install rejected', { 'app/p.tsx': 'const c = "npm i @peac/mcp-server"\n' }, false],
]

let failures = 0
for (const [name, files, expectPass] of CASES) {
  const dir = mkdtempSync(join(tmpdir(), 'clipin-'))
  mkdirSync(join(dir, 'scripts'), { recursive: true })
  cpSync(GATE, join(dir, 'scripts', 'check-cli-pinning.mjs'))
  for (const [rel, content] of Object.entries(files)) {
    const abs = join(dir, rel)
    mkdirSync(dirname(abs), { recursive: true })
    writeFileSync(abs, content)
  }
  let pass
  try {
    execFileSync(process.execPath, ['scripts/check-cli-pinning.mjs'], { cwd: dir, stdio: 'pipe' })
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
  console.error(`\ncheck-cli-pinning tests FAILED: ${failures} case(s).`)
  process.exit(1)
}
console.log(`\ncheck-cli-pinning tests OK - ${CASES.length} cases.`)

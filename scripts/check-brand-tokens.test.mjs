#!/usr/bin/env node
/** Committed regression tests for the v17 design-token gate. */
import { mkdtempSync, mkdirSync, writeFileSync, cpSync, rmSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { tmpdir } from 'node:os'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const GATE = join(dirname(fileURLToPath(import.meta.url)), 'check-brand-tokens.mjs')
const TOKENS = 'app/originary-tokens.css'
const TOKEN_CSS = ':root { --ink: #0B0B0C; --accent: #2B3FE6; --hairline: rgba(11, 11, 12, 0.10); }\n'

const CASES = [
  ['tokens file may hold literals', { [TOKENS]: TOKEN_CSS }, true],
  ['token reference passes', { [TOKENS]: TOKEN_CSS, 'app/p.tsx': "const s = { color: 'var(--ink)' }\n" }, true],
  ['color-mix with a token passes', { [TOKENS]: TOKEN_CSS, 'app/a.css': '.a { border-color: color-mix(in srgb, var(--ink) 8%, transparent); }\n' }, true],
  ['locally defined custom property passes', { [TOKENS]: TOKEN_CSS, 'app/a.css': '.a { --fp-dur: 900ms; transition: opacity var(--fp-dur); }\n' }, true],
  ['next/font variable passes', { [TOKENS]: TOKEN_CSS, 'app/layout.tsx': "const f = X({ variable: '--font-plex-sans' })\nconst s = 'var(--font-plex-sans)'\n" }, true],
  ['url fragment is not a colour', { [TOKENS]: TOKEN_CSS, 'app/p.tsx': 'const h = "/pricing#faq"\nconst g = "/docs#add"\n' }, true],
  ['marked code sample passes', { [TOKENS]: TOKEN_CSS, 'app/p.tsx': 'const sample = \'{ "theme": "#ffffff" }\' // brand-allow: content\n' }, true],
  ['raw hex in tsx rejected', { [TOKENS]: TOKEN_CSS, 'app/p.tsx': "const s = { color: '#14110a' }\n" }, false],
  ['raw hex in css rejected', { [TOKENS]: TOKEN_CSS, 'components/a.css': '.a { color: #22b8ff; }\n' }, false],
  ['rgba literal rejected', { [TOKENS]: TOKEN_CSS, 'components/a.css': '.a { border: 1px solid rgba(20, 17, 10, 0.18); }\n' }, false],
  ['data-URI colour rejected', { [TOKENS]: TOKEN_CSS, 'components/a.css': ".a { background-image: url(\"data:image/svg+xml;utf8,<svg><path stroke='%236b6458'/></svg>\"); }\n" }, false],
  ['gradient rejected', { [TOKENS]: TOKEN_CSS, 'app/a.css': '.a { background: linear-gradient(180deg, var(--ink), transparent); }\n' }, false],
  ['svg gradient element rejected', { [TOKENS]: TOKEN_CSS, 'components/f.tsx': 'const g = <radialGradient id="g" />\n' }, false],
  ['glass rejected', { [TOKENS]: TOKEN_CSS, 'app/p.tsx': "const s = { backdropFilter: 'blur(20px)' }\n" }, false],
  ['legacy font rejected', { [TOKENS]: TOKEN_CSS, 'app/a.css': ".a { font-family: 'Inter', sans-serif; }\n" }, false],
  ['undefined legacy token rejected', { [TOKENS]: TOKEN_CSS, 'app/p.tsx': "const s = { color: 'var(--text-primary)' }\n" }, false],
  ['undefined token with fallback rejected', { [TOKENS]: TOKEN_CSS, 'app/a.css': '.a { color: var(--accent-brand, var(--ink)); }\n' }, false],
]

let failures = 0
for (const [name, files, expectPass] of CASES) {
  const dir = mkdtempSync(join(tmpdir(), 'brandtok-'))
  mkdirSync(join(dir, 'scripts'), { recursive: true })
  cpSync(GATE, join(dir, 'scripts', 'check-brand-tokens.mjs'))
  for (const [rel, content] of Object.entries(files)) {
    const abs = join(dir, rel)
    mkdirSync(dirname(abs), { recursive: true })
    writeFileSync(abs, content)
  }
  let pass
  try {
    execFileSync(process.execPath, ['scripts/check-brand-tokens.mjs'], { cwd: dir, stdio: 'pipe' })
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
  console.error(`\ncheck-brand-tokens tests FAILED: ${failures} case(s).`)
  process.exit(1)
}
console.log(`\ncheck-brand-tokens tests OK - ${CASES.length} cases.`)

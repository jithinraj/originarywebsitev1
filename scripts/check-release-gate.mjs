#!/usr/bin/env node
/**
 * Asserts the named release gate is self-contained: verify:release must run lint, typecheck, build, and the
 * proxy integration test, in that order, so the release command does not depend on the operator remembering
 * to run lint and typecheck separately.
 */
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const pkg = JSON.parse(readFileSync(join(process.cwd(), 'package.json'), 'utf8'))
const vr = (pkg.scripts && pkg.scripts['verify:release']) || ''
const required = ['npm run lint', 'npm run typecheck', 'npm run build', 'npm run test:proxy']

let pos = -1
let ok = true
for (const step of required) {
  const i = vr.indexOf(step)
  if (i === -1 || i < pos) {
    ok = false
    break
  }
  pos = i
}

if (!ok) {
  console.error(`check:release-gate FAILED: verify:release must run, in order: ${required.join(' && ')}`)
  console.error(`  got: ${vr}`)
  process.exit(1)
}
console.log('check:release-gate OK - verify:release runs lint, typecheck, build, test:proxy in order.')

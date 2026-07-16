#!/usr/bin/env node
/**
 * Asserts the named release gate is self-contained: verify:release must run lint, typecheck, build, and the
 * proxy integration test, in that order, so the release command does not depend on the operator remembering
 * to run lint and typecheck separately.
 */
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const pkg = JSON.parse(readFileSync(join(process.cwd(), 'package.json'), 'utf8'))
const scripts = pkg.scripts || {}

// Exact-match, so no extra command, `|| true`, backgrounding, or alternate construction can slip in.
const EXPECT = {
  prebuild: 'npm run check:all',
  'verify:release': 'npm run lint && npm run typecheck && npm run build && npm run test:proxy',
}

const errors = []
for (const [name, value] of Object.entries(EXPECT)) {
  if (scripts[name] !== value) errors.push(`${name} must be exactly "${value}" (got "${scripts[name] ?? '(missing)'}")`)
}

if (errors.length) {
  console.error('check:release-gate FAILED:')
  for (const e of errors) console.error(`  ${e}`)
  process.exit(1)
}
console.log('check:release-gate OK - prebuild and verify:release match the required release commands exactly.')

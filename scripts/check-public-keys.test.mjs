#!/usr/bin/env node
/**
 * Committed regression tests for the public-key publication-hygiene gate.
 * Runs the gate against temporary public/ trees and asserts pass/fail per case.
 * A case's content is either one JWKS (written to the public well-known JWKS file) or
 * { files: { name: content } } to exercise GLOBAL (cross-file) duplicate detection.
 * The VALID Ed25519 fixture below is a real generated public key (not a length-correct random string).
 */
import { mkdtempSync, mkdirSync, writeFileSync, cpSync, rmSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { tmpdir } from 'node:os'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const GATE = join(dirname(fileURLToPath(import.meta.url)), 'check-public-keys.mjs')
// Real generated Ed25519 public key (@peac/cli samples), authoritative valid fixture.
const VALID_ED = { kty: 'OKP', crv: 'Ed25519', x: 'BYCjX07nCGmeRexvtdihzM_RZT5oeIOMYe7wofVI3KA', kid: 'k1', use: 'sig', alg: 'EdDSA' }
// A second, distinct real Ed25519 public key.
const VALID_ED_2 = { kty: 'OKP', crv: 'Ed25519', x: 'R3qVX4P9YbIYudLHGgN2gvogkqfqoqz7_wkkFCG2ePE', kid: 'k2', use: 'sig', alg: 'EdDSA' }

const CASES = [
  ['valid Ed25519', { keys: [VALID_ED] }, true],
  ['valid Ed25519 without alg', { keys: [{ kty: 'OKP', crv: 'Ed25519', x: VALID_ED.x, kid: 'k1' }] }, true],
  ['valid Ed25519 key_ops ["verify"]', { keys: [{ ...VALID_ED, key_ops: ['verify'] }] }, true],
  ['no key files at all', null, true],
  ['RFC 8037 example key', { keys: [{ ...VALID_ED, x: '11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo' }] }, false],
  ['placeholder coordinate', { keys: [{ ...VALID_ED, x: 'REPLACE_WITH_ACTUAL_PUBLIC_KEY_X' }] }, false],
  ['private d present', { keys: [{ ...VALID_ED, d: 'nWGxne_9WmC6hEr0kuwsxERJxWl7MmkZcDusAxyuf2A' }] }, false],
  ['empty JWKS', { keys: [] }, false],
  ['duplicate kid (one file)', { keys: [VALID_ED, { ...VALID_ED_2, kid: 'k1' }] }, false],
  ['duplicate material (one file)', { keys: [VALID_ED, { ...VALID_ED, kid: 'k2' }] }, false],
  ['duplicate kid ACROSS files', { files: { 'a-jwks.json': { keys: [VALID_ED] }, 'b-jwks.json': { keys: [{ ...VALID_ED_2, kid: 'k1' }] } } }, false],
  ['duplicate material ACROSS files', { files: { 'a-jwks.json': { keys: [VALID_ED] }, 'b-jwks.json': { keys: [{ ...VALID_ED, kid: 'k9' }] } } }, false],
  ['two distinct keys across files ok', { files: { 'a-jwks.json': { keys: [VALID_ED] }, 'b-jwks.json': { keys: [VALID_ED_2] } } }, true],
  ['absent kid', { keys: [{ kty: 'OKP', crv: 'Ed25519', x: VALID_ED.x }] }, false],
  ['non-canonical base64url (padding)', { keys: [{ ...VALID_ED, x: VALID_ED.x + '=' }] }, false],
  ['wrong coordinate length', { keys: [{ ...VALID_ED, x: 'AAAA' }] }, false],
  ['EC key rejected (Ed25519-only)', { keys: [{ kty: 'EC', crv: 'P-256', x: VALID_ED.x, y: VALID_ED.x, kid: 'k1' }] }, false],
  ['OKP wrong crv', { keys: [{ kty: 'OKP', crv: 'X25519', x: VALID_ED.x, kid: 'k1' }] }, false],
  ['OKP y present', { keys: [{ ...VALID_ED, y: VALID_ED.x }] }, false],
  ['alg mismatch EdDSA+ES256', { keys: [{ ...VALID_ED, alg: 'ES256' }] }, false],
  ['wrong use', { keys: [{ ...VALID_ED, use: 'enc' }] }, false],
  ['empty key_ops []', { keys: [{ ...VALID_ED, key_ops: [] }] }, false],
  ['repeated key_ops ["verify","verify"]', { keys: [{ ...VALID_ED, key_ops: ['verify', 'verify'] }] }, false],
  ['dangerous key_ops ["sign"]', { keys: [{ ...VALID_ED, key_ops: ['sign'] }] }, false],
  ['malformed JSON named jwks', '{ not json', false],
  ['non-object key entry', { keys: ['not-an-object'] }, false],
]

let failures = 0
for (const [name, content, expectPass] of CASES) {
  const dir = mkdtempSync(join(tmpdir(), 'keygate-'))
  mkdirSync(join(dir, 'public', '.well-known'), { recursive: true })
  mkdirSync(join(dir, 'scripts'), { recursive: true })
  cpSync(GATE, join(dir, 'scripts', 'check-public-keys.mjs'))
  if (content !== null) {
    const asStr = (c) => (typeof c === 'string' ? c : JSON.stringify(c))
    if (content && typeof content === 'object' && content.files) {
      for (const [fname, fcontent] of Object.entries(content.files)) {
        writeFileSync(join(dir, 'public', '.well-known', fname), asStr(fcontent))
      }
    } else {
      writeFileSync(join(dir, 'public', '.well-known', 'jwks.json'), asStr(content))
    }
  }
  let pass
  try {
    execFileSync(process.execPath, ['scripts/check-public-keys.mjs'], { cwd: dir, stdio: 'pipe' })
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
  console.error(`\ncheck-public-keys tests FAILED: ${failures} case(s).`)
  process.exit(1)
}
console.log(`\ncheck-public-keys tests OK - ${CASES.length} cases.`)

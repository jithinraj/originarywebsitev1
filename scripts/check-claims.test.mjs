#!/usr/bin/env node
/** Tests for the claims-boundary gate: it must catch overclaims and pass clean copy. */
import assert from 'node:assert'
import { findBanned } from './check-claims.mjs'

let pass = 0
let fail = 0
const t = (name, fn) => {
  try {
    fn()
    pass++
    console.log('  PASS ' + name)
  } catch (e) {
    fail++
    console.error('  FAIL ' + name + ': ' + e.message)
  }
}

t('catches "structurally impossible"', () =>
  assert(findBanned('a leak through the evidence layer is structurally impossible').includes('structurally impossible')))
t('catches "anyone can prove"', () =>
  assert(findBanned('Later, anyone can prove: the response was served').includes('anyone can prove')))
t('catches "ran exactly as approved"', () =>
  assert(findBanned('every action ran exactly as approved, or it did not run').includes('ran exactly as approved')))
t('is case-insensitive', () => assert.equal(findBanned('STRUCTURALLY EXCLUDED').length, 1))
t('passes clean boundary copy', () =>
  assert.equal(findBanned('A verifier can confirm the issuer signed a record binding the digests.').length, 0))
t('does not flag correct hedges or domain terms', () =>
  assert.equal(findBanned('This does not prove external truth; proof of payment travels in the record.').length, 0))

console.log(`claims gate test: ${pass} passed, ${fail} failed`)
process.exit(fail ? 1 : 0)

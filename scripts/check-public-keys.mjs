#!/usr/bin/env node
/**
 * Public-key PUBLICATION-HYGIENE gate.
 *
 * This is NOT a cryptographic verifier. Runtime cryptographic validation belongs to PEAC (@peac/crypto). This
 * gate only catches unsafe things to PUBLISH under public/: placeholder material, private key parameters, known
 * public example keys, malformed/duplicate key files, and mismatched publication mistakes.
 *
 * This site publishes Ed25519 verification keys only. Any other key type is a publication mistake here.
 *
 * Public output is generic ("Public signing material is invalid."). Detailed per-item diagnostics print only when
 * CHECK_PUBLIC_KEYS_DEBUG is set, so CI shows what to fix without turning the gate into documentation.
 */
import { readdirSync, lstatSync, readFileSync, realpathSync } from 'node:fs'
import { join, extname, sep } from 'node:path'

const ROOT = process.cwd()
const PUBLIC = join(ROOT, 'public')
const DEBUG = process.env.CHECK_PUBLIC_KEYS_DEBUG !== undefined

const ED_COORD_BYTES = 32
// Known PUBLIC example/test keys that must never be published as real key material.
const KNOWN_TEST_KEYS = new Set(['11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo']) // RFC 8037 A.1 Ed25519 example
const PLACEHOLDER = /REPLACE_WITH|PLACEHOLDER|EXAMPLE_|COORDINATE|YOUR_|CHANGE_ME|TODO|XXXX/i
const KEYFILE = /jwks|jwk/i

const errors = []

/** Strict canonical base64url decode; byte length or -1 if non-canonical/invalid. */
function b64uBytes(s) {
  if (typeof s !== 'string' || s.length === 0) return -1
  if (!/^[A-Za-z0-9_-]+$/.test(s)) return -1 // padding / +,/ are non-canonical
  const bytes = Buffer.from(s, 'base64url')
  if (bytes.toString('base64url') !== s) return -1 // non-canonical trailing bits
  return bytes.length
}

/** True if `abs` (after resolving symlinks) is contained within `baseReal`. */
function contained(abs, baseReal) {
  const r = realpathSync(abs)
  return r === baseReal || r.startsWith(baseReal + sep)
}

function walk(dir, out) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    const st = lstatSync(p)
    if (st.isSymbolicLink()) {
      // A symlinked KEY-MATERIAL file, or a symlinked directory that could smuggle one in, is a hygiene concern.
      if (extname(name) === '.json' && KEYFILE.test(name)) errors.push(`${p.slice(ROOT.length + 1)}: symlinked key file not allowed`)
      else if (!extname(name)) errors.push(`${p.slice(ROOT.length + 1)}: symlinked directory under public/ not allowed`)
      continue
    }
    if (st.isDirectory()) walk(p, out)
    else if (extname(name) === '.json') out.push(p)
  }
}

const files = []
try {
  walk(PUBLIC, files)
} catch {
  /* public/ may not exist */
}

// Duplicate detection is GLOBAL across every published key file, not per-file.
const kids = new Set()
const material = new Set()
const PUBLIC_REAL = files.length ? realpathSync(PUBLIC) : PUBLIC

for (const abs of files) {
  const rel = abs.slice(ROOT.length + 1)
  let json
  try {
    json = JSON.parse(readFileSync(abs, 'utf8'))
  } catch {
    if (KEYFILE.test(rel)) errors.push(`${rel}: malformed JSON for a key file`)
    continue
  }
  const isJwks = KEYFILE.test(rel) || (json && (Array.isArray(json.keys) || json.kty))
  if (!isJwks) continue
  if (!contained(abs, PUBLIC_REAL)) {
    errors.push(`${rel}: resolves outside public/`)
    continue
  }

  const keys = Array.isArray(json.keys) ? json.keys : json.kty ? [json] : null
  if (!Array.isArray(keys) || keys.length === 0) {
    errors.push(`${rel}: empty or malformed JWKS`)
    continue
  }

  for (const k of keys) {
    if (k === null || typeof k !== 'object' || Array.isArray(k)) {
      errors.push(`${rel}: key entry is not a plain object`)
      continue
    }
    if (PLACEHOLDER.test(JSON.stringify(k))) errors.push(`${rel}: placeholder key material`)
    for (const priv of ['d', 'p', 'q', 'dp', 'dq', 'qi', 'k']) if (k[priv] !== undefined) errors.push(`${rel}: private key parameter (${priv}) present`)

    // Ed25519 verification keys only.
    if (k.kty !== 'OKP') errors.push(`${rel}: kty must be "OKP" (Ed25519), got ${JSON.stringify(k.kty)}`)
    else if (k.crv !== 'Ed25519') errors.push(`${rel}: crv must be "Ed25519", got ${JSON.stringify(k.crv)}`)
    else {
      if (k.alg !== undefined && k.alg !== 'EdDSA') errors.push(`${rel}: alg must be absent or "EdDSA", got ${JSON.stringify(k.alg)}`)
      if (b64uBytes(k.x) !== ED_COORD_BYTES) errors.push(`${rel}: x missing/non-canonical/wrong length for Ed25519`)
      if (k.y !== undefined) errors.push(`${rel}: y must not be present for an OKP key`)
      if (KNOWN_TEST_KEYS.has(k.x)) errors.push(`${rel}: known public example key must not be published`)
    }

    if (k.use !== undefined && k.use !== 'sig') errors.push(`${rel}: use must be "sig" if present`)
    if (k.key_ops !== undefined && !(Array.isArray(k.key_ops) && k.key_ops.length === 1 && k.key_ops[0] === 'verify')) {
      errors.push(`${rel}: key_ops, if present, must be exactly ["verify"]`)
    }

    if (k.kid === undefined || typeof k.kid !== 'string' || k.kid.length === 0) errors.push(`${rel}: a non-empty string kid is required`)
    else if (kids.has(k.kid)) errors.push(`${rel}: duplicate kid ${k.kid} (already published)`)
    else kids.add(k.kid)

    const mat = `OKP:Ed25519:${k.x}`
    if (material.has(mat)) errors.push(`${rel}: identical key material published under more than one entry`)
    material.add(mat)
  }
}

if (errors.length) {
  console.error('Public signing material is invalid.')
  if (DEBUG) for (const e of errors) console.error(`  ${e}`)
  process.exit(1)
}
console.log(`check:public-keys OK - ${files.length} JSON file(s) scanned, key material publishable.`)

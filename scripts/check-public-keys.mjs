#!/usr/bin/env node
/**
 * Public-key PUBLICATION-HYGIENE gate.
 *
 * This is NOT a cryptographic verifier. Runtime cryptographic validation belongs to PEAC (@peac/crypto). This
 * gate only catches unsafe things to PUBLISH under public/: placeholder material, private key parameters, known
 * public example keys, malformed/duplicate key files, symlink smuggling, and mismatched publication mistakes.
 *
 * This site publishes Ed25519 verification keys only. Any other key type is a publication mistake here.
 *
 * Public output is generic ("Public signing material is invalid."). Detailed per-item diagnostics print only when
 * CHECK_PUBLIC_KEYS_DEBUG is set, so CI shows what to fix without turning the gate into documentation.
 */
import { readdirSync, lstatSync, statSync, readFileSync, realpathSync } from 'node:fs'
import { join, extname, sep } from 'node:path'

const ROOT = process.cwd()
const PUBLIC = join(ROOT, 'public')
const DEBUG = process.env.CHECK_PUBLIC_KEYS_DEBUG !== undefined

const ED_COORD_BYTES = 32
const KID_MAX_BYTES = 256
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

let PUBLIC_REAL = PUBLIC
try {
  PUBLIC_REAL = realpathSync(PUBLIC)
} catch {
  /* public/ may not exist */
}

/** True if `abs` (after resolving symlinks) is contained within PUBLIC_REAL. */
function contained(abs) {
  let r
  try {
    r = realpathSync(abs)
  } catch {
    return false
  }
  return r === PUBLIC_REAL || r.startsWith(PUBLIC_REAL + sep)
}

// Walk public/ with lstat (never following a link). Symlinks are rejected, never traversed:
//   - any symlink under public/.well-known;
//   - any symlinked .json anywhere under public/;
//   - any symlink whose target is a directory (would smuggle key files in);
//   - any symlink resolving outside public/.
function walk(dir, out, inWellKnown) {
  let entries
  try {
    entries = readdirSync(dir)
  } catch {
    return
  }
  for (const name of entries) {
    const p = join(dir, name)
    const rel = p.slice(ROOT.length + 1)
    let lst
    try {
      lst = lstatSync(p)
    } catch {
      continue
    }
    if (lst.isSymbolicLink()) {
      if (inWellKnown) {
        errors.push(`${rel}: symlink under public/.well-known not allowed`)
      } else if (extname(name) === '.json') {
        errors.push(`${rel}: symlinked JSON file not allowed under public/`)
      } else if (!contained(p)) {
        errors.push(`${rel}: symlink resolves outside public/`)
      } else {
        let target
        try {
          target = statSync(p)
        } catch {
          errors.push(`${rel}: broken symlink not allowed under public/`)
          continue
        }
        if (target.isDirectory()) errors.push(`${rel}: symlinked directory not allowed under public/`)
      }
      continue // never traverse or scan through a symlink
    }
    if (lst.isDirectory()) walk(p, out, inWellKnown || name === '.well-known')
    else if (extname(name) === '.json') out.push(p)
  }
}

const files = []
walk(PUBLIC, files, false)

// Duplicate detection is GLOBAL across every published key file, not per-file.
const kids = new Set()
const material = new Set()
let keyFiles = 0
let keyEntries = 0

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
  if (!contained(abs)) {
    errors.push(`${rel}: resolves outside public/`)
    continue
  }

  const keys = Array.isArray(json.keys) ? json.keys : json.kty ? [json] : null
  if (!Array.isArray(keys) || keys.length === 0) {
    errors.push(`${rel}: empty or malformed JWKS`)
    continue
  }
  keyFiles++
  keyEntries += keys.length

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

    if (k.kid === undefined || typeof k.kid !== 'string' || k.kid.trim().length === 0) {
      errors.push(`${rel}: a non-empty string kid is required`)
    } else if (Buffer.byteLength(k.kid, 'utf8') > KID_MAX_BYTES) {
      errors.push(`${rel}: kid exceeds ${KID_MAX_BYTES} bytes`)
    } else if (kids.has(k.kid)) {
      errors.push(`${rel}: duplicate kid ${k.kid} (already published)`)
    } else {
      kids.add(k.kid)
    }

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
if (keyFiles === 0) {
  console.log(`check:public-keys OK - ${files.length} JSON file(s) scanned; 0 key files found; no public signing material present.`)
} else {
  console.log(`check:public-keys OK - ${files.length} JSON file(s) scanned; ${keyFiles} key file(s); ${keyEntries} key ${keyEntries === 1 ? 'entry' : 'entries'}; key material publishable.`)
}

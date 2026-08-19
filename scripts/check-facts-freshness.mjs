#!/usr/bin/env node
/**
 * Facts freshness check.
 *
 * Compares the release facts hardcoded in lib/facts.ts against the
 * canonical docs/releases/facts.json published in the peacprotocol/peac
 * GitHub repository. Run this after every PEAC protocol release to catch
 * drift before it ships to the site.
 *
 * Usage: node scripts/check-facts-freshness.mjs
 *
 * Exit codes:
 *   0 - everything matched, or the check itself was skipped (network
 *       failure, missing field, etc.) - a skip is never a failure.
 *   1 - at least one field genuinely drifted between local and remote.
 */
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const FACTS_TS_PATH = join(__dirname, '..', 'lib', 'facts.ts')
const CONTENTS_API_URL =
  'https://api.github.com/repos/peacprotocol/peac/contents/docs/releases/facts.json'

/** Strip an optional leading "v" so "v0.16.4" and "0.16.4" compare equal. */
function normalizeVersion(v) {
  return typeof v === 'string' ? v.replace(/^v/, '') : v
}

/** Pull a single `key: 'value'` or `key: 123` assignment out of facts.ts source text. */
function extractLocalField(source, key) {
  const stringMatch = source.match(new RegExp(`${key}:\\s*'([^']*)'`))
  if (stringMatch) return stringMatch[1]
  const numberMatch = source.match(new RegExp(`${key}:\\s*(-?\\d+(?:\\.\\d+)?)`))
  if (numberMatch) return Number(numberMatch[1])
  return undefined
}

function readLocalFacts() {
  const source = readFileSync(FACTS_TS_PATH, 'utf8')
  return {
    currentVersion: extractLocalField(source, 'currentVersion'),
    testsCount: extractLocalField(source, 'testsCount'),
    testFilesCount: extractLocalField(source, 'testFilesCount'),
    publishedPackageCount: extractLocalField(source, 'publishedPackageCount'),
  }
}

/** Safely read a dotted path out of an object, e.g. "metrics.tests". */
function getPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && typeof acc === 'object' ? acc[key] : undefined), obj)
}

async function fetchRemoteFacts() {
  const res = await fetch(CONTENTS_API_URL, {
    headers: {
      // Deliberately the default (non-"raw") Contents API media type: it
      // returns file metadata with a base64 `content` field, which is what
      // we decode below. The "raw" media type would return the file body
      // directly and skip decoding entirely - not what this expects.
      Accept: 'application/vnd.github+json',
      'User-Agent': 'originary-website-facts-freshness-check',
    },
  })
  if (!res.ok) {
    throw new Error(`GitHub Contents API responded ${res.status} ${res.statusText}`)
  }
  const body = await res.json()
  if (typeof body.content !== 'string') {
    throw new Error('GitHub Contents API response had no "content" field')
  }
  const decoded = Buffer.from(body.content, 'base64').toString('utf8')
  return JSON.parse(decoded)
}

/**
 * Compare one field. `remotePath` is a dotted path into the remote JSON;
 * if it does not resolve, the comparison is reported as skipped rather
 * than treated as drift or a crash.
 */
function compareField(report, label, localValue, remoteJson, remotePath, { normalize } = {}) {
  const rawRemoteValue = getPath(remoteJson, remotePath)
  if (rawRemoteValue === undefined) {
    report.push({ label, status: 'SKIP', detail: `field not found at "${remotePath}", skipped` })
    return
  }
  const localNorm = normalize ? normalize(localValue) : localValue
  const remoteNorm = normalize ? normalize(rawRemoteValue) : rawRemoteValue
  if (String(localNorm) === String(remoteNorm)) {
    report.push({ label, status: 'MATCH' })
  } else {
    report.push({
      label,
      status: 'DRIFT',
      detail: `local=${JSON.stringify(localValue)} remote=${JSON.stringify(rawRemoteValue)}`,
    })
  }
}

async function main() {
  const local = readLocalFacts()

  let remote
  try {
    remote = await fetchRemoteFacts()
  } catch (err) {
    console.log('Could not reach GitHub API, skipping freshness check.')
    console.log(`  (${err.message})`)
    process.exit(0)
    return
  }

  const report = []
  compareField(report, 'version', local.currentVersion, remote, 'version', {
    normalize: normalizeVersion,
  })
  compareField(report, 'testsCount', local.testsCount, remote, 'metrics.tests')
  compareField(report, 'testFilesCount', local.testFilesCount, remote, 'metrics.test_files')
  compareField(report, 'publishedPackageCount', local.publishedPackageCount, remote, 'metrics.published_packages')

  console.log('Facts freshness report (lib/facts.ts vs peacprotocol/peac docs/releases/facts.json)')
  console.log('---------------------------------------------------------------------------------')
  let hasDrift = false
  for (const row of report) {
    if (row.status === 'MATCH') {
      console.log(`  ${row.label}: MATCH`)
    } else if (row.status === 'SKIP') {
      console.log(`  ${row.label}: SKIP (${row.detail})`)
    } else {
      hasDrift = true
      console.log(`  ${row.label}: DRIFT ${row.detail}`)
    }
  }
  console.log('---------------------------------------------------------------------------------')

  if (hasDrift) {
    console.log('Result: DRIFT detected. Update lib/facts.ts to match the released facts.json.')
    process.exit(1)
  }

  console.log('Result: no drift (matches and skips only).')
  process.exit(0)
}

main()

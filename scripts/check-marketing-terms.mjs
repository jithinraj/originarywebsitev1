#!/usr/bin/env node

/**
 * Marketing Terms Regression Gate
 * Fails CI if banned terms appear in marketing pages or components.
 *
 * Checks ALL pages under app/ and ALL components under components/.
 * Excludes glossary, blog, and learn pages where educational context
 * may legitimately use otherwise-banned terms.
 *
 * Run: node scripts/check-marketing-terms.mjs
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'fs'
import { join, dirname, relative } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

// Recursively find all .tsx files under a directory
function findTsxFiles(dir, files = []) {
  if (!existsSync(dir)) return files
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      findTsxFiles(full, files)
    } else if (entry.endsWith('.tsx')) {
      files.push(full)
    }
  }
  return files
}

// Directories to exclude (educational, technical, and legal content
// may legitimately use otherwise-banned terms in context)
const EXCLUDE_PREFIXES = [
  'app/glossary/',
  'app/blog/',
  'app/learn/',
  'app/docs/',
  'app/guides/',
  'app/integrations/',
  'app/legal/',
  'app/terms/',
  'app/trademark/',
  'app/shipping/',
  'app/resources/',
  'app/context-graphs/',
]

function isExcluded(relPath) {
  return EXCLUDE_PREFIXES.some(prefix => relPath.startsWith(prefix))
}

// Gather all files to check
const allFiles = [
  ...findTsxFiles(join(ROOT, 'app')),
  ...findTsxFiles(join(ROOT, 'components')),
]
const filesToCheck = allFiles
  .map(f => relative(ROOT, f))
  .filter(rel => !isExcluded(rel))

// --- Banned term categories ---

// Crypto/blockchain terms that misposition the protocol
const BANNED_ABOVE_FOLD = [
  'stablecoin',
  'stablecoins',
  'on-chain',
  'onchain',
  'cryptographic proof',
  'cryptographic certainty',
  'cryptographic receipts',
  'cryptographically signed',
  'blockchain'
]

// Unverifiable trust/scale claims
const UNVERIFIABLE_CLAIMS = [
  'trusted by',
  'used by',
  'industry standard',
  'industry-leading',
  'market-leading',
  'best in class',
  'best-in-class',
  'world-class',
  'we guarantee',
  'uptime guarantee',
  'money-back guarantee',
  'proven track record',
  'proven solution',
  'proven process',
  'billions of',
  'millions of customers',
  'market size',
  'total addressable market',
  'white-glove',
  'production SLAs',
  'enterprise customers',
]

// Compliance claims that require proof
const COMPLIANCE_CLAIMS = [
  'SOC2',
  'SOC 2',
  'ISO 27001',
  'ISO27001',
  'GDPR compliant',
  'HIPAA compliant',
  'PCI compliant',
  'PCI DSS'
]

// Integrity landmines -- terms that imply operational hosted service
const INTEGRITY_BANNED = [
  'OPERATIONAL',
  'All systems operational',
  'No incidents to report',
  '99.99%',
]

// Unsourced projections
const UNSOURCED_PROJECTIONS = [
  /\$\d+T\+?/gi,
  /projected by \d{4}/gi,
  /\d+\s*trillion/gi,
  /\d+%\s*(market share|growth)/gi
]

// Wire type format check
const WRONG_WIRE_TYPE_PATTERNS = [
  /peac\.receipt\/\d+\.\d+/gi,
  /peac\.policy\/\d+\.\d+/gi
]

// Integrity terms ALWAYS fail the build (hard errors)
// Language terms are warnings unless --strict is passed
const isStrict = process.argv.includes('--strict')

let hardErrors = []
let warnings = []

console.log(`Checking ${filesToCheck.length} files for banned marketing terms...\n`)

for (const route of filesToCheck) {
  const filePath = join(ROOT, route)

  if (!existsSync(filePath)) continue

  const content = readFileSync(filePath, 'utf-8')
  const contentLower = content.toLowerCase()

  // HARD ERRORS: integrity landmines, compliance, wire format
  for (const term of INTEGRITY_BANNED) {
    if (content.includes(term)) {
      hardErrors.push(`  [integrity] "${term}" in ${route}`)
    }
  }

  for (const term of COMPLIANCE_CLAIMS) {
    if (content.includes(term)) {
      hardErrors.push(`  [compliance] "${term}" in ${route} (must link to certification)`)
    }
  }

  for (const pattern of WRONG_WIRE_TYPE_PATTERNS) {
    const matches = content.match(pattern)
    if (matches) {
      hardErrors.push(`  [wire-format] "${matches[0]}" in ${route} (use peac-receipt/0.1)`)
    }
  }

  for (const pattern of UNSOURCED_PROJECTIONS) {
    const matches = content.match(pattern)
    if (matches) {
      hardErrors.push(`  [projection] "${matches[0]}" in ${route}`)
    }
  }

  // WARNINGS (hard errors in --strict mode): language refinements
  const target = isStrict ? hardErrors : warnings

  for (const term of BANNED_ABOVE_FOLD) {
    if (contentLower.includes(term.toLowerCase())) {
      target.push(`  [banned-term] "${term}" in ${route}`)
    }
  }

  for (const term of UNVERIFIABLE_CLAIMS) {
    if (contentLower.includes(term.toLowerCase())) {
      target.push(`  [unverifiable] "${term}" in ${route}`)
    }
  }
}

if (warnings.length > 0) {
  console.log(`WARNINGS (${warnings.length} language issues, use --strict to fail):\n`)
  warnings.forEach(w => console.log(w))
  console.log('')
}

if (hardErrors.length > 0) {
  console.log('FAILED - Found integrity violations:\n')
  hardErrors.forEach(e => console.log(e))
  console.log('\nFix these issues before committing.')
  console.log('\nAllowed alternatives:')
  console.log('  - "OPERATIONAL" -> "Available" or "Reference Implementation"')
  console.log('  - "99.99%" -> remove or link to SLA document')
  console.log('  - "SOC2/ISO/compliance" -> link to actual certification or remove')
  console.log('  - "enterprise customers" -> "enterprise teams" or "enterprise deployments"')
  console.log('  - "white-glove" -> "dedicated support"')
  process.exit(1)
} else {
  console.log(`${filesToCheck.length} files pass integrity checks${warnings.length > 0 ? ` (${warnings.length} language warnings)` : ''}`)
  process.exit(0)
}

#!/usr/bin/env node

/**
 * Snippet Compilation Gate
 * Extracts code blocks from dev/docs pages and validates they compile
 *
 * Run: node scripts/check-snippets.mjs
 */

import { readFileSync, existsSync, writeFileSync, unlinkSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const TEMP_DIR = join(ROOT, '.snippet-check')

// Pages that contain code snippets to validate
const SNIPPET_PAGES = [
  'app/developers/page.tsx',
  'app/docs/page.tsx',
  'app/docs/quickstart/page.tsx',
  'app/docs/receipts/page.tsx',
  'app/docs/payments/page.tsx',
  'app/docs/payments/x402/page.tsx'
]

// Regex to extract code blocks from JSX
// Matches: ```typescript ... ```, ```javascript ... ```, ```tsx ... ```, ```js ... ```
const CODE_BLOCK_REGEX = /```(typescript|javascript|tsx?|jsx?)\n([\s\S]*?)```/gi

// Also match template literals with code
const TEMPLATE_CODE_REGEX = /`(const|let|var|function|import|export|interface|type|class)\s[^`]+`/g

let hasErrors = false
const errors = []
const snippets = []

console.log('Checking code snippets in documentation...\n')

// Create temp directory
if (!existsSync(TEMP_DIR)) {
  mkdirSync(TEMP_DIR, { recursive: true })
}

for (const route of SNIPPET_PAGES) {
  const filePath = join(ROOT, route)

  if (!existsSync(filePath)) {
    console.log(`  ⚠ Skipping (not found): ${route}`)
    continue
  }

  const content = readFileSync(filePath, 'utf-8')

  // Extract code blocks
  let match
  while ((match = CODE_BLOCK_REGEX.exec(content)) !== null) {
    const lang = match[1]
    const code = match[2].trim()

    // Skip very short snippets or shell commands
    if (code.length < 20 || code.startsWith('npm ') || code.startsWith('curl ')) {
      continue
    }

    snippets.push({
      file: route,
      lang,
      code
    })
  }
}

console.log(`Found ${snippets.length} code snippets to validate\n`)

// Validate TypeScript/JavaScript snippets
let passCount = 0
let skipCount = 0

for (const snippet of snippets) {
  const isTypeScript = ['typescript', 'ts', 'tsx'].includes(snippet.lang.toLowerCase())
  const ext = isTypeScript ? '.ts' : '.js'
  const tempFile = join(TEMP_DIR, `snippet-${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`)

  try {
    // Add necessary imports for common patterns
    let code = snippet.code

    // Skip snippets that are clearly partial/examples
    if (code.includes('...') || code.includes('// ...') || code.startsWith('// ')) {
      skipCount++
      continue
    }

    // Write temp file
    writeFileSync(tempFile, code)

    // Try to parse/compile
    if (isTypeScript) {
      // Use tsc to check syntax (no emit)
      execSync(`npx tsc --noEmit --skipLibCheck --allowJs --target ES2020 --module ESNext --moduleResolution node "${tempFile}" 2>&1`, {
        cwd: ROOT,
        encoding: 'utf-8',
        timeout: 10000
      })
    } else {
      // Use node to check syntax
      execSync(`node --check "${tempFile}" 2>&1`, {
        cwd: ROOT,
        encoding: 'utf-8',
        timeout: 5000
      })
    }

    passCount++
  } catch (error) {
    // Check if it's a real error or just missing imports
    const errorMsg = error.message || error.toString()

    // Ignore common "missing module" errors since snippets don't have full context
    if (
      errorMsg.includes('Cannot find module') ||
      errorMsg.includes('Cannot find name') ||
      errorMsg.includes('is not defined') ||
      errorMsg.includes("has no exported member")
    ) {
      skipCount++
      continue
    }

    hasErrors = true
    errors.push({
      file: snippet.file,
      code: snippet.code.slice(0, 100) + (snippet.code.length > 100 ? '...' : ''),
      error: errorMsg.split('\n')[0]
    })
  } finally {
    // Cleanup temp file
    try {
      unlinkSync(tempFile)
    } catch {
      // Ignore cleanup errors
    }
  }
}

// Cleanup temp directory
try {
  execSync(`rm -rf "${TEMP_DIR}"`, { cwd: ROOT })
} catch {
  // Ignore cleanup errors
}

if (hasErrors) {
  console.log('FAILED - Found invalid code snippets:\n')
  for (const err of errors) {
    console.log(`  ✗ ${err.file}`)
    console.log(`    Code: ${err.code}`)
    console.log(`    Error: ${err.error}\n`)
  }
  console.log('Fix these snippets before committing.')
  process.exit(1)
} else {
  console.log(`✓ ${passCount} snippets validated successfully`)
  console.log(`  ${skipCount} snippets skipped (partial examples or missing context)`)
  process.exit(0)
}

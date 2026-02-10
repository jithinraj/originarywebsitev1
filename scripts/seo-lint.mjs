#!/usr/bin/env node
/**
 * SEO Lint Script
 * Validates metadata across all pages to prevent regressions
 * Run: node scripts/seo-lint.mjs
 */

import { readFileSync, readdirSync, statSync } from 'fs'
import { join, relative } from 'path'

const SITE_URL = 'https://www.originary.xyz'
const MAX_TITLE_LENGTH = 60
const MAX_DESCRIPTION_LENGTH = 160
const MIN_DESCRIPTION_LENGTH = 80

const errors = []
const warnings = []

function walkDir(dir, callback) {
  const files = readdirSync(dir)
  for (const file of files) {
    const filepath = join(dir, file)
    const stat = statSync(filepath)
    if (stat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules') {
        walkDir(filepath, callback)
      }
    } else if (file.endsWith('.tsx')) {
      callback(filepath)
    }
  }
}

function extractMetadata(content) {
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/)
  const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/)
  const ogUrlMatch = content.match(/openGraph:\s*\{[^}]*url:\s*['"`]([^'"`]+)['"`]/)

  return {
    title: titleMatch ? titleMatch[1] : null,
    description: descMatch ? descMatch[1] : null,
    ogUrl: ogUrlMatch ? ogUrlMatch[1] : null,
  }
}

function checkFile(filepath) {
  const content = readFileSync(filepath, 'utf8')
  const relPath = relative(process.cwd(), filepath)

  // Skip non-page files
  if (!content.includes('export const metadata')) return

  const meta = extractMetadata(content)

  // Check title length
  if (meta.title) {
    if (meta.title.length > MAX_TITLE_LENGTH) {
      errors.push(`${relPath}: Title too long (${meta.title.length} chars, max ${MAX_TITLE_LENGTH})`)
    }
  }

  // Check description length
  if (meta.description) {
    if (meta.description.length > MAX_DESCRIPTION_LENGTH) {
      errors.push(`${relPath}: Description too long (${meta.description.length} chars, max ${MAX_DESCRIPTION_LENGTH})`)
    }
    if (meta.description.length < MIN_DESCRIPTION_LENGTH) {
      warnings.push(`${relPath}: Description may be too short (${meta.description.length} chars, recommend ${MIN_DESCRIPTION_LENGTH}+)`)
    }
  }

  // Check for version pins in metadata
  if (meta.title && /v\d+\.\d+\.\d+/.test(meta.title)) {
    warnings.push(`${relPath}: Version number in title may become stale`)
  }
  if (meta.description && /v\d+\.\d+\.\d+/.test(meta.description)) {
    warnings.push(`${relPath}: Version number in description may become stale`)
  }

  // Check OG URL consistency (should be relative with metadataBase, or match SITE_URL)
  if (meta.ogUrl) {
    if (meta.ogUrl.startsWith('http') && !meta.ogUrl.startsWith(SITE_URL)) {
      errors.push(`${relPath}: OG URL domain mismatch (${meta.ogUrl} should use ${SITE_URL})`)
    }
  }
}

console.log('SEO Lint: Checking metadata...\n')

walkDir(join(process.cwd(), 'app'), checkFile)

if (warnings.length > 0) {
  console.log('Warnings:')
  warnings.forEach(w => console.log(`  ⚠️  ${w}`))
  console.log('')
}

if (errors.length > 0) {
  console.log('Errors:')
  errors.forEach(e => console.log(`  ❌ ${e}`))
  console.log(`\n${errors.length} error(s) found.`)
  process.exit(1)
} else {
  console.log(`✅ SEO lint passed (${warnings.length} warning(s))`)
  process.exit(0)
}

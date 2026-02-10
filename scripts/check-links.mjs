#!/usr/bin/env node

/**
 * Internal Link Checker
 * Verifies all internal hrefs in navigation, footer, and key pages resolve to actual routes
 *
 * Run: node scripts/check-links.mjs
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

// Collect all valid routes from app directory
function getAllRoutes(dir, basePath = '') {
  const routes = new Set()
  const items = readdirSync(dir)

  for (const item of items) {
    const fullPath = join(dir, item)
    const stat = statSync(fullPath)

    if (stat.isDirectory()) {
      // Skip route groups (parentheses) and special dirs
      if (item.startsWith('(') || item.startsWith('_') || item === 'api') {
        const subRoutes = getAllRoutes(fullPath, basePath)
        subRoutes.forEach(r => routes.add(r))
      } else {
        const subRoutes = getAllRoutes(fullPath, `${basePath}/${item}`)
        subRoutes.forEach(r => routes.add(r))
      }
    } else if (item === 'page.tsx' || item === 'page.js') {
      routes.add(basePath || '/')
    }
  }

  return routes
}

// Extract internal hrefs from a file
function extractHrefs(content) {
  const hrefs = []
  // Match href="/..." or href='/...'
  const regex = /href=["'](\/?[^"'#?]+)["']/g
  let match
  while ((match = regex.exec(content)) !== null) {
    const href = match[1]
    // Only internal links starting with /
    if (href.startsWith('/') && !href.startsWith('//')) {
      hrefs.push(href)
    }
  }
  return hrefs
}

// Files to check for internal links
const FILES_TO_CHECK = [
  'components/NavigationHeader.tsx',
  'components/footer/footer.links.ts',
  'components/footer/Footer.tsx',
  'app/page.tsx',
  'app/products/page.tsx',
  'app/developers/page.tsx',
  'app/trust/page.tsx'
]

console.log('Checking internal links...\n')

const appDir = join(ROOT, 'app')
const validRoutes = getAllRoutes(appDir)

// Add well-known files as valid
validRoutes.add('/.well-known/peac.txt')
validRoutes.add('/.well-known/aipref.json')
validRoutes.add('/.well-known/jwks.json')
validRoutes.add('/.well-known/security.txt')

let hasErrors = false
const errors = []
const checkedLinks = new Set()

for (const file of FILES_TO_CHECK) {
  const filePath = join(ROOT, file)

  if (!existsSync(filePath)) {
    console.log(`  ⚠ Skipping (not found): ${file}`)
    continue
  }

  const content = readFileSync(filePath, 'utf-8')
  const hrefs = extractHrefs(content)

  for (const href of hrefs) {
    if (checkedLinks.has(href)) continue
    checkedLinks.add(href)

    // Normalize href (remove trailing slash)
    const normalizedHref = href.replace(/\/$/, '') || '/'

    // Check if route exists
    if (!validRoutes.has(normalizedHref)) {
      // Check if it's a well-known or public file
      const publicPath = join(ROOT, 'public', normalizedHref)
      if (!existsSync(publicPath)) {
        hasErrors = true
        errors.push(`  ✗ Broken link "${href}" in ${file}`)
      }
    }
  }
}

if (hasErrors) {
  console.log('FAILED - Found broken internal links:\n')
  errors.forEach(e => console.log(e))
  console.log('\nFix these links or create the missing pages.')
  process.exit(1)
} else {
  console.log(`✓ All ${checkedLinks.size} internal links verified`)
  process.exit(0)
}

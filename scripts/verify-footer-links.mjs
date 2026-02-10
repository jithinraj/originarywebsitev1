#!/usr/bin/env node

/**
 * Footer Link Verifier
 *
 * Validates that all internal footer links point to existing pages.
 * Run: node scripts/verify-footer-links.mjs
 * Add to CI: npm run verify:footer
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = join(__dirname, '..')

// ============================================================================
// Configuration
// ============================================================================

// Allowlisted endpoints that don't need app/**/page.tsx verification
const ALLOWLISTED_ENDPOINTS = [
  '/.well-known/peac.txt',
  '/.well-known/aipref.json',
  '/.well-known/jwks.json',
  '/.well-known/security.txt',
  '/sitemap.xml',
  '/robots.txt',
  '/manifest.json',
  '/status', // Has a page
]

// External link prefixes to skip
const EXTERNAL_PREFIXES = ['http://', 'https://', 'mailto:', 'tel:']

// ============================================================================
// Parse footer links from source
// ============================================================================

function extractFooterLinks() {
  const linksFilePath = join(projectRoot, 'components/footer/footer.links.ts')

  if (!existsSync(linksFilePath)) {
    console.error('❌ Footer links file not found:', linksFilePath)
    process.exit(1)
  }

  const content = readFileSync(linksFilePath, 'utf-8')

  // Extract all href values from the file
  const hrefPattern = /href:\s*['"]([^'"]+)['"]/g
  const links = []
  let match

  while ((match = hrefPattern.exec(content)) !== null) {
    links.push(match[1])
  }

  return links
}

// ============================================================================
// Discover all page routes in app directory
// ============================================================================

function discoverAppRoutes(dir = join(projectRoot, 'app'), basePath = '') {
  const routes = []

  if (!existsSync(dir)) {
    return routes
  }

  const entries = readdirSync(dir)

  for (const entry of entries) {
    const fullPath = join(dir, entry)
    const stat = statSync(fullPath)

    if (stat.isDirectory()) {
      // Skip special Next.js directories
      if (entry.startsWith('_') || entry.startsWith('.') || entry === 'api') {
        continue
      }

      // Handle dynamic routes - convert [param] to wildcard
      const routeSegment = entry.startsWith('[') ? '*' : entry
      const newBasePath = basePath + '/' + routeSegment

      routes.push(...discoverAppRoutes(fullPath, newBasePath))
    } else if (entry === 'page.tsx' || entry === 'page.ts' || entry === 'page.jsx' || entry === 'page.js') {
      // This directory has a page, add the route
      routes.push(basePath || '/')
    }
  }

  return routes
}

// ============================================================================
// Verify well-known files exist
// ============================================================================

function verifyWellKnownFiles() {
  const wellKnownFiles = [
    { path: 'public/.well-known/peac.txt', link: '/.well-known/peac.txt' },
    { path: 'public/.well-known/aipref.json', link: '/.well-known/aipref.json' },
    { path: 'public/sitemap.xml', link: '/sitemap.xml' },
    { path: 'app/robots.ts', link: '/robots.txt' }, // Next.js generated
    { path: 'public/manifest.json', link: '/manifest.json' },
  ]

  const missing = []

  for (const file of wellKnownFiles) {
    const fullPath = join(projectRoot, file.path)
    if (!existsSync(fullPath)) {
      missing.push(file)
    }
  }

  return missing
}

// ============================================================================
// Main verification
// ============================================================================

function main() {
  console.log('🔍 Verifying footer links...\n')

  // Extract links from footer
  const footerLinks = extractFooterLinks()
  console.log(`📋 Found ${footerLinks.length} links in footer\n`)

  // Discover app routes
  const appRoutes = discoverAppRoutes()
  const routeSet = new Set(appRoutes)
  console.log(`📂 Found ${appRoutes.length} page routes in app/\n`)

  // Verify well-known files
  const missingFiles = verifyWellKnownFiles()

  // Filter and verify internal links
  const internalLinks = footerLinks.filter(link => {
    // Skip external links
    if (EXTERNAL_PREFIXES.some(prefix => link.startsWith(prefix))) {
      return false
    }
    // Skip allowlisted endpoints
    if (ALLOWLISTED_ENDPOINTS.includes(link)) {
      return false
    }
    return true
  })

  console.log(`🔗 Verifying ${internalLinks.length} internal links...\n`)

  // Check each internal link
  const missingRoutes = []
  const validRoutes = []

  for (const link of internalLinks) {
    // Normalize the link (remove trailing slash)
    const normalizedLink = link === '/' ? '/' : link.replace(/\/$/, '')

    if (routeSet.has(normalizedLink)) {
      validRoutes.push(link)
    } else {
      missingRoutes.push(link)
    }
  }

  // Report results
  console.log('─'.repeat(60))

  if (validRoutes.length > 0) {
    console.log(`\n✅ Valid routes (${validRoutes.length}):`)
    validRoutes.forEach(route => console.log(`   ${route}`))
  }

  let hasErrors = false

  if (missingRoutes.length > 0) {
    hasErrors = true
    console.log(`\n❌ Missing routes (${missingRoutes.length}):`)
    missingRoutes.forEach(route => console.log(`   ${route}`))
    console.log('\n   These links exist in the footer but have no corresponding page.tsx')
  }

  if (missingFiles.length > 0) {
    console.log(`\n⚠️  Missing well-known files (${missingFiles.length}):`)
    missingFiles.forEach(f => console.log(`   ${f.link} (expected at ${f.path})`))
    // Don't fail on missing well-known files, just warn
  }

  console.log('\n' + '─'.repeat(60))

  if (hasErrors) {
    console.log('\n❌ Footer link verification FAILED\n')
    console.log('To fix:')
    console.log('1. Create the missing pages in app/')
    console.log('2. Or remove the broken links from components/footer/footer.links.ts')
    console.log('3. Or add them to ALLOWLISTED_ENDPOINTS if they are generated/special routes\n')
    process.exit(1)
  } else {
    console.log('\n✅ Footer link verification PASSED\n')
    console.log(`   ${validRoutes.length} internal links verified`)
    console.log(`   ${footerLinks.length - internalLinks.length} external/allowlisted links skipped`)
    process.exit(0)
  }
}

main()

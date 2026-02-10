#!/usr/bin/env node

import { chromium } from 'playwright'
import { createHash } from 'crypto'
import { writeFileSync, mkdirSync, statSync } from 'fs'
import { join } from 'path'

const routes = [
  '/',
  '/product',
  '/pricing',
  '/developers',
  '/downloads',
  '/originary-ai/',
  '/trademark',
  '/brand',
  '/press'
]

const baseUrl = process.env.BASE_URL || 'http://localhost:3000'
const timestamp = new Date().toISOString().split('T')[0] // YYYY-MM-DD
const evidenceDir = join(process.cwd(), 'evidence', timestamp)

// Ensure evidence directory exists
mkdirSync(evidenceDir, { recursive: true })

async function captureSpecimens() {
  console.log(`🔍 Capturing specimens for ${routes.length} routes...`)
  console.log(`📁 Saving to: ${evidenceDir}`)

  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    viewport: { width: 1366, height: 900 },
    locale: 'en-US',
    colorScheme: 'no-preference'
  })

  const page = await context.newPage()
  const csvRows = ['path,sha256,bytes,captured_at']

  for (const route of routes) {
    try {
      console.log(`📸 Capturing: ${route}`)

      const url = `${baseUrl}${route}`
      await page.goto(url, { waitUntil: 'networkidle' })

      // Wait for any dynamic content to load
      await page.waitForTimeout(2000)

      // Wait for checksum text to render (for downloads page)
      if (route === '/downloads') {
        await page.waitForSelector('code', { timeout: 5000 }).catch(() => {
          console.log('⚠️  No checksum element found on downloads page')
        })
      }

      // Generate safe filename from route
      const safeRoute = route === '/' ? 'home' : route.replace(/\//g, '-').replace(/^-/, '')

      // Capture PDF
      const pdfPath = join(evidenceDir, `${safeRoute}.pdf`)
      await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        margin: { top: '1in', bottom: '1in', left: '1in', right: '1in' }
      })

      // Capture PNG screenshot
      const pngPath = join(evidenceDir, `${safeRoute}.png`)
      await page.screenshot({
        path: pngPath,
        fullPage: true
      })

      // Calculate SHA-256 hashes and file sizes
      const pdfStats = statSync(pdfPath)
      const pngStats = statSync(pngPath)

      const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: { top: '1in', bottom: '1in', left: '1in', right: '1in' }
      })
      const pngBuffer = await page.screenshot({ fullPage: true })

      const pdfHash = createHash('sha256').update(pdfBuffer).digest('hex')
      const pngHash = createHash('sha256').update(pngBuffer).digest('hex')

      const capturedAt = new Date().toISOString()

      // Add to CSV
      csvRows.push(`${safeRoute}.pdf,${pdfHash},${pdfStats.size},${capturedAt}`)
      csvRows.push(`${safeRoute}.png,${pngHash},${pngStats.size},${capturedAt}`)

      console.log(`✅ ${route} captured (PDF: ${pdfStats.size}B, PNG: ${pngStats.size}B)`)

    } catch (error) {
      console.error(`❌ Failed to capture ${route}:`, error.message)
    }
  }

  // Write CSV index
  const csvPath = join(evidenceDir, 'index.csv')
  writeFileSync(csvPath, csvRows.join('\n'))

  await browser.close()

  console.log(`\n🎉 Specimen capture complete!`)
  console.log(`📊 Captured ${csvRows.length - 1} files`)
  console.log(`📄 Index written to: ${csvPath}`)
}

// Handle CLI usage
if (import.meta.url === `file://${process.argv[1]}`) {
  captureSpecimens().catch(console.error)
}

export { captureSpecimens }
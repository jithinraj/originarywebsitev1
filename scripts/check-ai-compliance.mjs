#!/usr/bin/env node
/**
 * Structural gate for the AI compliance evidence page.
 *
 * Keeps the route discoverable and its metadata pinned, so a rename or an
 * accidental noindex cannot ship silently. Claim-wording review is handled
 * separately and is not part of this repository.
 */
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.argv[2] || process.cwd()
const PAGE = join(ROOT, 'app/ai-compliance/page.tsx')
const ROUTES = join(ROOT, 'lib/routes.ts')
const LLMS = join(ROOT, 'public/llms.txt')

const TITLE = 'AI Compliance Evidence for Agents & APIs | Originary'
const DESCRIPTION =
  'Turn AI agent actions, API calls, gateway decisions and approvals into portable signed records that compliance and audit teams can verify independently.'
const CANONICAL = '/ai-compliance'

const errors = []

if (!existsSync(PAGE)) {
  errors.push('app/ai-compliance/page.tsx is missing')
} else {
  const src = readFileSync(PAGE, 'utf8')
  if (!src.includes(TITLE)) errors.push('page title does not match the approved title')
  if (!src.includes(DESCRIPTION)) errors.push('meta description does not match the approved description')
  if (!src.includes(`canonical: '${CANONICAL}'`)) errors.push(`canonical is not '${CANONICAL}'`)
  if (!src.includes('openGraph')) errors.push('Open Graph metadata is missing')
  if (!src.includes("'@type': 'WebPage'")) errors.push('WebPage JSON-LD is missing')
  if (!src.includes("'@type': 'BreadcrumbList'")) errors.push('BreadcrumbList JSON-LD is missing')
  if (/noindex/i.test(src)) errors.push('page must not be noindex')
}

if (!existsSync(ROUTES) || !readFileSync(ROUTES, 'utf8').includes(`'${CANONICAL}'`)) {
  errors.push(`${CANONICAL} is not registered in lib/routes.ts (sitemap would omit it)`)
}

if (!existsSync(LLMS) || !readFileSync(LLMS, 'utf8').includes(CANONICAL)) {
  errors.push(`${CANONICAL} is not listed in public/llms.txt`)
}

if (errors.length) {
  console.error('check:ai-compliance FAILED')
  for (const e of errors) console.error(`  - ${e}`)
  process.exit(1)
}

console.log('check:ai-compliance OK - metadata pinned and route discoverable.')

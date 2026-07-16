#!/usr/bin/env node
/**
 * Internal link checker.
 *
 * Scans every source file under app/, components/, and lib/ (no hardcoded
 * allowlist, no silent skips) and verifies that each internal href resolves to
 * a real route, route handler, well-known file, or public asset. Dynamic
 * segments ([slug], [...rest]) are matched as patterns. Any unresolved internal
 * link fails the build.
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join, dirname, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SCAN_DIRS = ['app', 'components', 'lib']
const SRC_EXT = new Set(['.tsx', '.ts', '.jsx', '.js', '.mdx', '.md'])

// Build the set of real routes from app/. page.* -> a page route; route.* -> a
// route handler (API/OG/etc). Route groups (…) and private _dirs collapse.
function collectRoutes(dir, base = '') {
  const staticRoutes = new Set()
  const dynamicRoutes = [] // regexes
  const add = (routePath) => {
    if (/\[/.test(routePath)) {
      const rx =
        '^' +
        routePath
          .replace(/\[\.\.\..+?\]/g, '.+') // [...catchAll]
          .replace(/\[.+?\]/g, '[^/]+') // [slug]
          .replace(/\//g, '\\/') +
        '$'
      dynamicRoutes.push(new RegExp(rx))
    } else {
      staticRoutes.add(routePath || '/')
    }
  }
  const walk = (d, b) => {
    for (const item of readdirSync(d)) {
      const full = join(d, item)
      const st = statSync(full)
      if (st.isDirectory()) {
        const grouped = item.startsWith('(') || item.startsWith('_') || item.startsWith('@')
        walk(full, grouped ? b : `${b}/${item}`)
      } else if (/^page\.(tsx|ts|jsx|js|mdx)$/.test(item)) {
        add(b || '/')
      } else if (/^route\.(tsx|ts|jsx|js)$/.test(item)) {
        add(b || '/')
      }
    }
  }
  walk(dir, base)
  return { staticRoutes, dynamicRoutes }
}

function listFiles(dir, out) {
  for (const item of readdirSync(dir)) {
    if (item === 'node_modules' || item.startsWith('.')) continue
    const full = join(dir, item)
    const st = statSync(full)
    if (st.isDirectory()) listFiles(full, out)
    else if (SRC_EXT.has(extname(item))) out.push(full)
  }
}

function extractInternalHrefs(content) {
  const hrefs = []
  // href="/..." | href='/...' | href={'/...'} | href={"/..."}
  const re = /href=\{?["'](\/[^"'`]*)["']\}?/g
  let m
  while ((m = re.exec(content)) !== null) {
    let href = m[1]
    if (href.startsWith('//')) continue // protocol-relative external
    href = href.split('#')[0].split('?')[0] // drop fragment/query
    if (href === '') continue // pure fragment link like "/#foo" -> "/"? keep "/" below
    hrefs.push(href)
  }
  return hrefs
}

const { staticRoutes, dynamicRoutes } = collectRoutes(join(ROOT, 'app'))
for (const wk of [
  '/.well-known/peac.txt',
  '/.well-known/aipref.json',
  '/.well-known/security.txt',
]) {
  staticRoutes.add(wk)
}

function resolves(href) {
  const norm = href.replace(/\/+$/, '') || '/'
  if (staticRoutes.has(norm) || staticRoutes.has(href)) return true
  if (dynamicRoutes.some((rx) => rx.test(norm))) return true
  // A static public asset (e.g. /og-image.png, /icons/x.svg, /robots.txt).
  if (existsSync(join(ROOT, 'public', norm))) return true
  return false
}

const files = []
for (const d of SCAN_DIRS) {
  const abs = join(ROOT, d)
  if (existsSync(abs)) listFiles(abs, files)
}

const errors = []
let checked = 0
for (const file of files) {
  const rel = file.slice(ROOT.length + 1)
  const content = readFileSync(file, 'utf8')
  for (const href of extractInternalHrefs(content)) {
    checked++
    if (!resolves(href)) errors.push(`  broken link "${href}" in ${rel}`)
  }
}

if (errors.length) {
  console.error(`check:links FAILED - ${errors.length} broken internal link(s):`)
  // De-duplicate identical messages.
  Array.from(new Set(errors)).forEach((e) => console.error(e))
  process.exit(1)
}
console.log(`check:links OK - ${checked} internal href(s) across ${files.length} files resolve.`)

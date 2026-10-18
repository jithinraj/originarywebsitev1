#!/usr/bin/env node
/**
 * One design system: Originary brand guidelines v17, locked 18 Oct 2026. See DESIGN_SYSTEM.md.
 *
 * Fails when site code outside the token files:
 *   - writes a raw colour (#hex, rgb(), rgba(), hsl(), hsla()),
 *   - uses a gradient or backdrop-filter (no gradients, glass or glows),
 *   - sets a font family other than IBM Plex (Inter, Fraunces, Geist),
 *   - references a CSS custom property that nothing defines (a leftover legacy token),
 *   - sets on-screen text below 12 px (font-size, fontSize, <Mono size>),
 *   - draws the wordmark below its 96 px absolute minimum.
 *
 * SVG figures sized in viewBox units (components/blog/figures/) are exempt from the 12 px rule.
 *
 * Colour lives only in app/originary-tokens.css; lib/brand-tokens.ts mirrors it for OG images and canvas.
 * A line that must show a literal colour as content (a code sample) can carry the marker `brand-allow`.
 */
import { readdirSync, statSync, readFileSync } from 'node:fs'
import { join, extname, relative } from 'node:path'

const ROOT = process.cwd()
const ROOTS = ['app', 'components', 'lib']
const EXT = new Set(['.tsx', '.ts', '.jsx', '.js', '.mjs', '.css'])
const SKIP = new Set(['node_modules', '.next', '.git', 'out', 'dist'])
const TOKEN_FILES = new Set(['app/originary-tokens.css', 'lib/brand-tokens.ts'])
const MARKER = 'brand-allow'

const RAW_HEX = /(^|[\s'"`:(,=\[{])#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})(?![0-9a-zA-Z_-])/
const RAW_URI_HEX = /%23[0-9a-fA-F]{3,8}\b/
const RAW_FN = /\b(?:rgba?|hsla?)\(/
const GRADIENT = /\b(?:linear|radial|conic|repeating-linear|repeating-radial)-gradient\(|<(?:linear|radial)Gradient\b/
const GLASS = /backdrop-?filter|backdropFilter|WebkitBackdropFilter/
const LEGACY_FONT = /(?:font-family|fontFamily|next\/font\/google)[^\n]*\b(?:Inter|Fraunces|Geist)\b/
const VAR_USE = /var\(\s*--([a-zA-Z0-9_-]+)/g
const VAR_DEF = /(?:^|[\s{;'"`(,])--([a-zA-Z0-9_-]+)['"`]?\s*:/g
const FONT_VAR = /variable:\s*['"]--([a-zA-Z0-9_-]+)['"]/g
// Text below 12 px: CSS px, inline numbers or px strings, and the Mono atom's size prop.
const SMALL_TEXT = /(?:font-size:\s*|fontSize:\s*['"]?|<Mono\b[^>]*\bsize=\{)(?:[0-9]|1[01])(?:\.\d+)?(?![0-9.])(?!\s*(?:rem|em|%|vw|vh))/
const SMALL_WORDMARK = /<OriginaryWordmark\b[^>]*\bwidth=\{\s*(?:[0-9]|[1-8][0-9]|9[0-5])(?:\.\d+)?\s*\}/
const SVG_UNIT_DIRS = ['components/blog/figures/']

const files = []
function walk(d) {
  let entries
  try {
    entries = readdirSync(d)
  } catch {
    return
  }
  for (const n of entries) {
    if (SKIP.has(n)) continue
    const p = join(d, n)
    let st
    try {
      st = statSync(p)
    } catch {
      continue
    }
    if (st.isDirectory()) walk(p)
    else if (st.isFile() && EXT.has(extname(p))) files.push(p)
  }
}
for (const r of ROOTS) walk(join(ROOT, r))

const sources = files.map((abs) => ({
  rel: relative(ROOT, abs).split('\\').join('/'),
  text: readFileSync(abs, 'utf8'),
}))

// Every custom property defined anywhere (CSS declarations, inline style objects, next/font variables).
const defined = new Set()
for (const { text } of sources) {
  for (const m of text.matchAll(VAR_DEF)) defined.add(m[1])
  for (const m of text.matchAll(FONT_VAR)) defined.add(m[1])
}

const found = []
for (const { rel, text } of sources) {
  const isTokenFile = TOKEN_FILES.has(rel)
  const svgUnits = SVG_UNIT_DIRS.some((d) => rel.startsWith(d))
  text.split('\n').forEach((line, i) => {
    if (line.includes(MARKER)) return
    const at = `${rel}:${i + 1}`
    if (!isTokenFile) {
      if (RAW_HEX.test(line)) found.push(`${at}: raw hex colour (use a token from app/originary-tokens.css)`)
      if (RAW_URI_HEX.test(line)) found.push(`${at}: raw colour inside a data URI (define it as a token)`)
      if (RAW_FN.test(line)) found.push(`${at}: raw rgb/hsl colour (use a token or color-mix with a token)`)
    }
    if (GRADIENT.test(line)) found.push(`${at}: gradient (v17 uses flat fills and hairlines)`)
    if (GLASS.test(line)) found.push(`${at}: backdrop-filter (no glass effects)`)
    if (LEGACY_FONT.test(line)) found.push(`${at}: non-Plex font family (IBM Plex Sans / Mono only)`)
    if (!svgUnits && SMALL_TEXT.test(line)) found.push(`${at}: text below 12 px (mono labels are 12 px or more)`)
    if (SMALL_WORDMARK.test(line)) found.push(`${at}: wordmark below 96 px wide (use the app icon instead)`)
    for (const m of line.matchAll(VAR_USE)) {
      if (!defined.has(m[1])) found.push(`${at}: var(--${m[1]}) is not defined by any token or component`)
    }
  })
}

if (found.length) {
  console.error('Design system violations (see DESIGN_SYSTEM.md):')
  for (const f of found) console.error(`  ${f}`)
  console.error(`\n${found.length} violation(s).`)
  process.exit(1)
}
console.log(`check:brand OK - ${sources.length} files use only v17 design tokens.`)

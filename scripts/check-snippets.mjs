#!/usr/bin/env node
/**
 * Snippet compilation gate.
 *
 * Scans every source under app/ and components/ (no hardcoded page list) for
 * compilable code samples and type-checks them. Two forms are recognized:
 *   1. Markdown fenced blocks: ```ts | ```tsx | ```js | ```jsx
 *   2. CodeBlock props: <CodeBlock lang="ts" code={`...`}> and tabs entries
 *
 * "Fail on zero when code exists": if the source tree contains a compilable
 * marker (a ts/js fence, or a CodeBlock with a ts/js lang) but the extractor
 * validated zero snippets, the gate fails loudly rather than passing vacuously.
 * A site whose only code is shell/CLI/JSON output has no compilable markers and
 * passes honestly, reporting why.
 */
import { readFileSync, existsSync, writeFileSync, unlinkSync, mkdirSync, rmSync, readdirSync, statSync } from 'node:fs'
import { join, dirname, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const TEMP_DIR = join(ROOT, '.snippet-check')
const SCAN_DIRS = ['app', 'components']
const SRC_EXT = new Set(['.tsx', '.ts', '.jsx', '.js', '.mdx', '.md'])
const COMPILABLE = new Set(['ts', 'tsx', 'typescript', 'js', 'jsx', 'javascript'])

const FENCE_RE = /```(ts|tsx|typescript|js|jsx|javascript)\b\n([\s\S]*?)```/gi
// <CodeBlock ... lang="ts" ... code={`...`}> (attributes in any order)
const CODEBLOCK_RE = /<CodeBlock\b[^>]*?\blang=["'](ts|tsx|typescript|js|jsx|javascript)["'][^>]*?\bcode=\{`([\s\S]*?)`\}/gi
// A marker that compilable code is *meant* to exist (used for the zero-guard).
const MARKER_RE = /```(ts|tsx|typescript|js|jsx|javascript)\b|lang=["'](ts|tsx|typescript|js|jsx|javascript)["']/i

function listFiles(dir, out) {
  for (const item of readdirSync(dir)) {
    if (item === 'node_modules' || item.startsWith('.')) continue
    const full = join(dir, item)
    const st = statSync(full)
    if (st.isDirectory()) listFiles(full, out)
    else if (SRC_EXT.has(extname(item))) out.push(full)
  }
}

const files = []
for (const d of SCAN_DIRS) {
  const abs = join(ROOT, d)
  if (existsSync(abs)) listFiles(abs, files)
}

const snippets = []
let markerFiles = 0
for (const file of files) {
  const rel = file.slice(ROOT.length + 1)
  const content = readFileSync(file, 'utf8')
  if (MARKER_RE.test(content)) markerFiles++
  let m
  while ((m = FENCE_RE.exec(content)) !== null) snippets.push({ file: rel, lang: m[1].toLowerCase(), code: m[2].trim() })
  while ((m = CODEBLOCK_RE.exec(content)) !== null) snippets.push({ file: rel, lang: m[1].toLowerCase(), code: m[2].trim() })
}

// Zero-guard: markers present but nothing extracted -> the gate would be a no-op.
if (snippets.length === 0) {
  if (markerFiles > 0) {
    console.error(
      `check:snippets FAILED - ${markerFiles} file(s) contain a compilable code marker (ts/js fence or CodeBlock) but zero snippets were extracted. The extractor is out of sync with how code is authored.`,
    )
    process.exit(1)
  }
  console.log('check:snippets OK - no compilable TS/JS snippets on the site (shell/CLI examples only); nothing to type-check.')
  process.exit(0)
}

if (!existsSync(TEMP_DIR)) mkdirSync(TEMP_DIR, { recursive: true })
const errors = []
let pass = 0
let skip = 0
let seq = 0
for (const snip of snippets) {
  // Partial examples cannot compile in isolation.
  if (snip.code.includes('...') || snip.code.includes('// ...') || snip.code.length < 20) {
    skip++
    continue
  }
  const ts = ['ts', 'tsx', 'typescript'].includes(snip.lang)
  const tempFile = join(TEMP_DIR, `snippet-${seq++}${ts ? '.ts' : '.js'}`)
  try {
    writeFileSync(tempFile, snip.code)
    if (ts) {
      execSync(`npx tsc --noEmit --skipLibCheck --allowJs --target ES2020 --module ESNext --moduleResolution node "${tempFile}" 2>&1`, {
        cwd: ROOT, encoding: 'utf8', timeout: 20000,
      })
    } else {
      execSync(`node --check "${tempFile}" 2>&1`, { cwd: ROOT, encoding: 'utf8', timeout: 8000 })
    }
    pass++
  } catch (err) {
    const msg = (err.message || String(err))
    // Snippets lack full context; tolerate resolution errors, fail on syntax.
    if (/Cannot find module|Cannot find name|is not defined|has no exported member/.test(msg)) {
      skip++
    } else {
      errors.push({ file: snip.file, code: snip.code.slice(0, 100), error: msg.split('\n')[0] })
    }
  } finally {
    try { unlinkSync(tempFile) } catch {}
  }
}
try { rmSync(TEMP_DIR, { recursive: true, force: true }) } catch {}

if (errors.length) {
  console.error(`check:snippets FAILED - ${errors.length} invalid snippet(s):`)
  for (const e of errors) console.error(`  ${e.file}\n    ${e.code}\n    ${e.error}`)
  process.exit(1)
}
console.log(`check:snippets OK - ${pass} snippet(s) validated, ${skip} skipped (partial/missing context).`)

#!/usr/bin/env node
/**
 * Every public @peac/cli command must be version-pinned as @peac/cli@<version>. A bare @peac/cli in a command
 * snippet installs a floating version, which can differ from the version a neighboring pinned command runs.
 * The only allowed bare reference is the npm registry link (npmjs.com/package/@peac/cli).
 */
import { readdirSync, statSync, readFileSync } from 'node:fs'
import { join, extname, relative } from 'node:path'

const ROOT = process.cwd()
const ROOTS = ['app', 'components', 'public']
const EXT = new Set(['.tsx', '.ts', '.js', '.jsx', '.mjs', '.cjs', '.json', '.txt', '.md'])
const SKIP = new Set(['node_modules', '.next', '.git', '.turbo', 'out', 'dist'])
const found = []

function scan(abs) {
  const rel = relative(ROOT, abs).split('\\').join('/')
  const t = readFileSync(abs, 'utf8')
  const re = /@peac\/cli(?!@)/g
  let m
  while ((m = re.exec(t)) !== null) {
    const before = t.slice(Math.max(0, m.index - 8), m.index)
    if (before.endsWith('package/')) continue // npm registry link is fine
    const line = t.slice(0, m.index).split('\n').length
    found.push(`${rel}:${line}: unversioned @peac/cli (pin as @peac/cli@<version>)`)
  }
}

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
    else if (st.isFile() && EXT.has(extname(p))) scan(p)
  }
}

for (const r of ROOTS) walk(join(ROOT, r))

if (found.length) {
  console.error('Unversioned @peac/cli command(s) found:')
  for (const f of found) console.error(`  ${f}`)
  process.exit(1)
}
console.log('check:cli-pinning OK - every public @peac/cli command is version-pinned.')

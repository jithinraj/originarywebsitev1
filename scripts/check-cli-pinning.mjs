#!/usr/bin/env node
/**
 * Every public @peac/* package named in an install or run COMMAND must be version-pinned as @peac/<name>@<version>.
 * A bare @peac/<name> in a command installs a floating version, which can differ from the version a neighboring
 * pinned command runs. Prose that merely names a package is not a command and is not flagged; the npm registry
 * link (npmjs.com/package/@peac/...) is also fine because it is not a command line.
 */
import { readdirSync, statSync, readFileSync } from 'node:fs'
import { join, extname, relative } from 'node:path'

const ROOT = process.cwd()
const ROOTS = ['app', 'components', 'public']
const EXT = new Set(['.tsx', '.ts', '.js', '.jsx', '.mjs', '.cjs', '.json', '.txt', '.md'])
const SKIP = new Set(['node_modules', '.next', '.git', '.turbo', 'out', 'dist'])
// A line is an install/run command when it invokes a package manager or a global install of a @peac package.
const CMD = /\b(npm\s+i(nstall)?|pnpm\s+(add|dlx)|yarn\s+(add|dlx)|npx)\b|-g\s+@peac\//
// Match a full @peac/<name> token NOT already pinned (@peac/cli@... is fine; @peac/cli followed by space is not).
const UNPINNED = /@peac\/[a-z0-9-]+(?![a-z0-9@-])/g
const found = []

function scan(abs) {
  const rel = relative(ROOT, abs).split('\\').join('/')
  const lines = readFileSync(abs, 'utf8').split('\n')
  lines.forEach((line, i) => {
    if (!CMD.test(line)) return
    let m
    while ((m = UNPINNED.exec(line)) !== null) {
      const before = line.slice(Math.max(0, m.index - 8), m.index)
      if (before.endsWith('package/')) continue // npm registry link
      found.push(`${rel}:${i + 1}: unversioned ${m[0]} in an install/run command (pin as ${m[0]}@<version>)`)
    }
  })
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
  console.error('Unversioned @peac/* command(s) found:')
  for (const f of found) console.error(`  ${f}`)
  process.exit(1)
}
console.log('check:cli-pinning OK - every public @peac/* install/run command is version-pinned.')

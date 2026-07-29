#!/usr/bin/env node
/** Committed regression tests for the AI compliance evidence gate. */
import { mkdtempSync, mkdirSync, writeFileSync, cpSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { tmpdir } from 'node:os'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const GATE = join(HERE, 'check-ai-compliance.mjs')

const TITLE = 'AI Compliance Evidence for Agents & APIs | Originary'
const DESCRIPTION =
  'Turn AI agent actions, API calls, gateway decisions and approvals into portable signed records that compliance and audit teams can verify independently.'

const OK_PAGE = `
const TITLE = '${TITLE}'
const DESCRIPTION = '${DESCRIPTION}'
export const metadata = {
  alternates: { canonical: '/ai-compliance' },
  openGraph: { title: TITLE },
}
const jsonLd = { '@graph': [{ '@type': 'WebPage' }, { '@type': 'BreadcrumbList' }] }
`
const OK_ROUTES = `export const STATIC_ROUTES = ['/', '/ai-compliance']\n`
const OK_LLMS = `# Originary\n- [AI compliance evidence](https://www.originary.xyz/ai-compliance): evidence.\n`
const OK = { 'app/ai-compliance/page.tsx': OK_PAGE, 'lib/routes.ts': OK_ROUTES, 'public/llms.txt': OK_LLMS }

const CASES = [
  ['complete page passes', OK, true],
  ['missing page', { 'lib/routes.ts': OK_ROUTES, 'public/llms.txt': OK_LLMS }, false],
  ['route not registered', { ...OK, 'lib/routes.ts': "export const STATIC_ROUTES = ['/']\n" }, false],
  ['not in llms.txt', { ...OK, 'public/llms.txt': '# Originary\n' }, false],
  ['wrong canonical', { ...OK, 'app/ai-compliance/page.tsx': OK_PAGE.replace("'/ai-compliance'", "'/ai'") }, false],
  ['noindex present', { ...OK, 'app/ai-compliance/page.tsx': OK_PAGE + '\nconst r = { robots: "noindex" }\n' }, false],
  ['missing breadcrumb entirely', { ...OK, 'app/ai-compliance/page.tsx': OK_PAGE.replace("{ '@type': 'BreadcrumbList' }", '{}') }, false],
  ['breadcrumb via shared component', { ...OK, 'app/ai-compliance/page.tsx': OK_PAGE.replace("{ '@type': 'BreadcrumbList' }", '{}') + '\nconst x = <Breadcrumbs current="AI Compliance Evidence" href="/ai-compliance" />\n' }, true],
]

let failures = 0
for (const [name, files, expectPass] of CASES) {
  const dir = mkdtempSync(join(tmpdir(), 'aicomp-'))
  mkdirSync(join(dir, 'scripts'), { recursive: true })
  cpSync(GATE, join(dir, 'scripts', 'check-ai-compliance.mjs'))
  for (const [rel, content] of Object.entries(files)) {
    mkdirSync(join(dir, dirname(rel)), { recursive: true })
    writeFileSync(join(dir, rel), content)
  }
  let pass
  try {
    execFileSync(process.execPath, [join(dir, 'scripts', 'check-ai-compliance.mjs'), dir], { stdio: 'pipe' })
    pass = true
  } catch {
    pass = false
  }
  const ok = pass === expectPass
  if (!ok) failures++
  console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${name} (expected ${expectPass ? 'pass' : 'fail'}, got ${pass ? 'pass' : 'fail'})`)
}

if (failures) {
  console.error(`check-ai-compliance tests FAILED - ${failures} case(s).`)
  process.exit(1)
}
console.log(`check-ai-compliance tests OK - ${CASES.length} cases.`)

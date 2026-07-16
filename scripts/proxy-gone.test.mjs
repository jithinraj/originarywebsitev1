#!/usr/bin/env node
/**
 * Committed integration test for the retired issuer-discovery 410 responses. Requires a prior `next build`.
 * Boots the repository-local Next binary on an ephemeral port and asserts the retirement contract.
 * Run via `npm run test:proxy` (invoked by `npm run verify:release`).
 */
import { spawn } from 'node:child_process'
import { createServer } from 'node:net'
import { setTimeout as sleep } from 'node:timers/promises'
import { existsSync } from 'node:fs'
import { join } from 'node:path'

const RETIRED = ['/.well-known/jwks.json', '/.well-known/peac-issuer.json']

async function freePort() {
  return await new Promise((resolve, reject) => {
    const srv = createServer()
    srv.on('error', reject)
    srv.listen(0, () => {
      const port = srv.address().port
      srv.close(() => resolve(port))
    })
  })
}

const NEXT_BIN = join(process.cwd(), 'node_modules', '.bin', 'next')
if (!existsSync(NEXT_BIN)) {
  console.error(`proxy-gone test: repository-local Next binary not found at ${NEXT_BIN}. Run npm ci + npm run build first.`)
  process.exit(1)
}

const PORT = await freePort()
const BASE = `http://localhost:${PORT}`
const srv = spawn(NEXT_BIN, ['start', '-p', String(PORT)], { stdio: ['ignore', 'pipe', 'pipe'] })

// Capture child output so a startup failure is diagnosable instead of silent.
let childOut = ''
srv.stdout.on('data', (d) => { childOut += d.toString() })
srv.stderr.on('data', (d) => { childOut += d.toString() })
const exited = new Promise((resolve) => srv.on('exit', (code, signal) => resolve({ code, signal })))
let srvExited = null
srv.on('exit', (code, signal) => { srvExited = { code, signal } })

let failures = 0
const check = (cond, msg) => {
  console.log(`  ${cond ? 'PASS' : 'FAIL'}  ${msg}`)
  if (!cond) failures++
}

async function teardown() {
  if (srvExited === null) {
    srv.kill('SIGTERM')
    const raced = await Promise.race([exited, sleep(2000).then(() => 'timeout')])
    if (raced === 'timeout') {
      srv.kill('SIGKILL')
      await exited
    }
  }
}

try {
  // readiness: fail if the server never comes up
  let ready = false
  for (let i = 0; i < 60; i++) {
    if (srvExited !== null) break
    try {
      await fetch(`${BASE}/`)
      ready = true
      break
    } catch {
      await sleep(500)
    }
  }
  if (!ready) {
    console.error(`proxy-gone test: server never became ready (exit=${JSON.stringify(srvExited)}).`)
    console.error('--- child output ---')
    console.error(childOut || '(no output captured)')
    await teardown()
    process.exit(1)
  }

  for (const p of RETIRED) {
    const g = await fetch(`${BASE}${p}`)
    check(g.status === 410, `${p} GET -> 410 (got ${g.status})`)
    check((await g.text()) === 'Gone.\n', `${p} GET body is exactly "Gone.\\n"`)
    check(g.headers.get('cache-control') === 'no-store', `${p} Cache-Control: no-store`)
    check(g.headers.get('x-robots-tag') === 'noindex', `${p} X-Robots-Tag: noindex`)
    check((g.headers.get('content-type') || '').startsWith('text/plain'), `${p} Content-Type text/plain`)
    check(g.headers.get('access-control-allow-origin') === '*', `${p} Access-Control-Allow-Origin: *`)

    const h = await fetch(`${BASE}${p}`, { method: 'HEAD' })
    check(h.status === 410 && (await h.text()) === '', `${p} HEAD -> 410, no body`)

    const o = await fetch(`${BASE}${p}`, { method: 'OPTIONS' })
    check(o.status === 410, `${p} OPTIONS -> 410 (retired for all methods) (got ${o.status})`)

    const q = await fetch(`${BASE}${p}?x=1`)
    check(q.status === 410, `${p}?x=1 -> 410 (no query bypass)`)
  }

  for (const p of ['/.well-known/security.txt', '/.well-known/peac.txt']) {
    const n = await fetch(`${BASE}${p}`)
    check(n.status === 200, `${p} still 200 (got ${n.status})`)
  }
} finally {
  await teardown()
}

if (failures) {
  console.error(`\nproxy-gone test FAILED: ${failures} assertion(s).`)
  process.exit(1)
}
console.log('\nproxy-gone test OK.')

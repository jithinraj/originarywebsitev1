'use client'

import { useEffect, useState } from 'react'

/**
 * LogStream: the "your system" side of the Share diagram. New illustrative
 * log lines tick in at the top while the section is on screen; the oldest
 * fades out at the bottom. Static under reduced motion.
 */
const EVENTS = [
  'POST /v1/search 200 {ms}ms',
  'span {id} parent=a4f1d svc=search',
  'cache miss key=q:refund-policy',
  'db.query crm.customers rows=1',
  'metric usage.api +1 tenant=t_91',
  'tool.call crm.update status=ok',
  'retry=0 upstream=payments-v2',
  'span {id} end latency={ms}ms',
  'audit.local actor=support-agent',
  'POST /v1/refunds 201 {ms}ms',
  'gc pause={ms}ms heap=412mb',
  'queue.ack refunds-q depth=3',
]

const VISIBLE = 10

function lineAt(n: number) {
  // Deterministic, so server and client render the same first frame.
  const ms = 11 + ((n * 37) % 380)
  const id = ((n * 2654435761) >>> 0).toString(16).slice(0, 4)
  const t = 8 * 3600 * 1000 + 491204 + n * 23
  const hh = String(Math.floor(t / 3600000) % 24 + 6).padStart(2, '0')
  const mm = String(Math.floor(t / 60000) % 60).padStart(2, '0')
  const ss = String(Math.floor(t / 1000) % 60).padStart(2, '0')
  const mmm = String(t % 1000).padStart(3, '0')
  const ev = EVENTS[n % EVENTS.length].replace('{ms}', String(ms)).replace('{id}', id)
  return `${hh}:${mm}:${ss}.${mmm} ${ev}`
}

export function LogStream() {
  const [head, setHead] = useState(VISIBLE)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let timer = 0
    const io = new IntersectionObserver(([e]) => {
      window.clearInterval(timer)
      if (e.isIntersecting) timer = window.setInterval(() => setHead((h) => h + 1), 1300)
    })
    const el = document.querySelector('.lsp-stream')
    if (el) io.observe(el)
    return () => {
      io.disconnect()
      window.clearInterval(timer)
    }
  }, [])

  const rows = Array.from({ length: VISIBLE }, (_, k) => head - 1 - k)
  return (
    <ul className="lsp-stream" role="list">
      {rows.map((n, k) => (
        <li key={n} className={k === 0 && head > VISIBLE ? 'lsp-new' : undefined}>
          {lineAt(n)}
        </li>
      ))}
    </ul>
  )
}

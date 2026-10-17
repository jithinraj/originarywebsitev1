'use client'

import { useId, useRef, useState, type KeyboardEvent } from 'react'
import Link from 'next/link'
import { MAX_W, PAGE_PAD } from './palette'
import { SectionHead } from './atoms/SectionHead'

/**
 * Record explorer: the six record families as tabs, each showing its example
 * record. Field values are the illustrative examples from /records, so the
 * two pages always show the same records. Nothing here is verified.
 */
type Field = { label: string; value: string; dim?: string }
type Family = { type: string; why: string; href: string; title: string; fields: Field[] }

const FAMILIES: Family[] = [
  {
    type: 'Tool call',
    why: 'What tool ran, and what result did it report?',
    href: '/records#mcp',
    title: 'MCP tool run',
    fields: [
      { label: 'Issuer', value: 'https://mcp.vendor.example' },
      { label: 'Tool', value: 'tools.call search_docs' },
      { label: 'Policy', value: 'tool-policy:v2', dim: 'sha256:4e21b8...' },
      { label: 'Result', value: 'ok', dim: 'sha256:9a3c1d...' },
      { label: 'Time', value: '2026-06-12T14:08:11Z' },
      { label: 'Signature', value: 'Ed25519 7d40e2c9...' },
    ],
  },
  {
    type: 'API call',
    why: 'What did the API report receiving and returning?',
    href: '/records#api',
    title: 'API call',
    fields: [
      { label: 'Issuer', value: 'https://api.vendor.example' },
      { label: 'Action', value: 'POST /v1/market-data/search' },
      { label: 'Policy', value: 'terms:v3', dim: 'sha256:81af2c...' },
      { label: 'Result', value: '200', dim: 'sha256:9a3c1d...' },
      { label: 'Time', value: '2026-06-12T14:08:11Z' },
      { label: 'Signature', value: 'Ed25519 b2c1a4e8...' },
    ],
  },
  {
    type: 'Agent action',
    why: 'What action did the agent report taking?',
    href: '/records#agent',
    title: 'Agent action',
    fields: [
      { label: 'Issuer', value: 'https://runtime.vendor.example' },
      { label: 'Agent', value: 'research-agent-v3' },
      { label: 'Action', value: 'summarize_filing' },
      { label: 'Policy', value: 'mandate:v2', dim: 'sha256:5fe013...' },
      { label: 'Time', value: '2026-06-12T14:09:02Z' },
      { label: 'Signature', value: 'Ed25519 91bc44a0...' },
    ],
  },
  {
    type: 'Gateway decision',
    why: 'Was the request allowed, blocked, redacted or reviewed?',
    href: '/records#gateway',
    title: 'Gateway decision',
    fields: [
      { label: 'Issuer', value: 'https://gateway.vendor.example' },
      { label: 'Request', value: 'tools.call export_billing' },
      { label: 'Policy', value: 'tool-policy:v2', dim: 'sha256:4e21b8...' },
      { label: 'Result', value: 'denied - policy_violation' },
      { label: 'Time', value: '2026-06-12T14:10:40Z' },
      { label: 'Signature', value: 'Ed25519 e02d7f15...' },
    ],
  },
  {
    type: 'Payment',
    why: 'What did the payment system report?',
    href: '/records#payment',
    title: 'Payment event',
    fields: [
      { label: 'Issuer', value: 'https://api.vendor.example' },
      { label: 'Event', value: 'authorized' },
      { label: 'Action', value: 'POST /v1/market-data/search' },
      { label: 'Mandate', value: '', dim: 'sha256:77ab90...' },
      { label: 'Time', value: '2026-06-12T14:08:12Z' },
      { label: 'Signature', value: 'Ed25519 30cf81d6...' },
    ],
  },
  {
    type: 'Provisioning',
    why: 'What account, credential or resource changed?',
    href: '/records#provisioning',
    title: 'Provisioning event',
    fields: [
      { label: 'Issuer', value: 'https://ci.vendor.example' },
      { label: 'Event', value: 'credential.rotated' },
      { label: 'Resource', value: 'deploy-key-7' },
      { label: 'Actor', value: 'release-pipeline' },
      { label: 'Time', value: '2026-06-12T03:00:00Z' },
      { label: 'Signature', value: 'Ed25519 4ab2c7e1...' },
    ],
  },
]

export function RecordGallery() {
  const [active, setActive] = useState(0)
  const tabs = useRef<Array<HTMLButtonElement | null>>([])
  const uid = useId()
  const f = FAMILIES[active]

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = FAMILIES.length
    const next =
      e.key === 'ArrowDown' || e.key === 'ArrowRight'
        ? (i + 1) % n
        : e.key === 'ArrowUp' || e.key === 'ArrowLeft'
          ? (i - 1 + n) % n
          : e.key === 'Home'
            ? 0
            : e.key === 'End'
              ? n - 1
              : -1
    if (next < 0) return
    e.preventDefault()
    setActive(next)
    tabs.current[next]?.focus()
  }

  return (
    <section
      className="hx-section"
      style={{ maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`, margin: '0 auto', paddingLeft: PAGE_PAD, paddingRight: PAGE_PAD }}
    >
      <SectionHead
        eyebrow="Record types"
        title="One record model"
        qualifier="for every important action."
        stack
        body="Tool calls, API calls, agent actions, gateway decisions, payments and provisioning all share six parts: facts, policy, result, time, issuer and signature."
      />
      <div className="rix">
        <div className="rix-tabs" role="tablist" aria-label="Record types" aria-orientation="vertical">
          {FAMILIES.map((fam, i) => (
            <button
              key={fam.type}
              ref={(el) => {
                tabs.current[i] = el
              }}
              type="button"
              role="tab"
              id={`${uid}-tab-${i}`}
              aria-selected={i === active}
              aria-controls={`${uid}-panel`}
              tabIndex={i === active ? 0 : -1}
              className="rix-tab"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <span className="rix-n">{String(i + 1).padStart(2, '0')}</span>
              <span className="rix-type">{fam.type}</span>
              <span className="rix-why">{fam.why}</span>
            </button>
          ))}
        </div>

        <div className="rix-stage" role="tabpanel" id={`${uid}-panel`} aria-labelledby={`${uid}-tab-${active}`}>
          <div className="rc rix-card" key={f.type}>
            <div className="rc-head">
              <span className="rc-issuer">{f.title}</span>
              <span className="rc-tag">Example record</span>
            </div>
            <dl className="rc-fields rc-fields-1">
              {f.fields.map((x) => (
                <div key={x.label}>
                  <dt>{x.label}</dt>
                  <dd>
                    {x.value}
                    {x.dim ? <span className="rc-dim"> {x.dim}</span> : null}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="rix-card-foot">
              <span>One verifier checks all six.</span>
              <Link href={f.href} className="rix-go">
                Open this example
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="rix-foot">
        Reviewing a whole incident or transaction?{' '}
        <Link href="/evidence-case" className="hx-textlink">
          See how related records come together
        </Link>
      </p>
    </section>
  )
}

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M1.5 6h9M7 2.5 10.5 6 7 9.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

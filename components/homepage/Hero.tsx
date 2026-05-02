import Link from 'next/link'
import type { CSSProperties } from 'react'

import { AmbientRecordField } from '@/components/visuals/AmbientRecordField'

const eventCards = [
  { label: 'API call', meta: 'policy + result', tone: 'blue' },
  { label: 'MCP tool call', meta: 'params + output', tone: 'teal' },
  { label: 'Payment event', meta: 'terms + access', tone: 'purple' },
  { label: 'Runtime decision', meta: 'approval + reason', tone: 'mint' },
]

const verifierFields = [
  ['Signature', 'valid'],
  ['Issuer', 'verified'],
  ['Policy', 'matched'],
  ['Terms', 'matched'],
  ['Record', 'portable'],
]

const recordFields = [
  ['issuer', 'api.company.com'],
  ['timestamp', '2026-04-24T12:21Z'],
  ['policy binding', 'verified'],
  ['terms digest', 'matched'],
  ['result hash', 'sha256:b7f4...91ac'],
  ['Signature', 'valid'],
]

const worksWith = [
  {
    name: 'x402',
    src: '/logos/x402-org.png',
    className: 'hp-story-logo-x402',
  },
  {
    name: 'MCP',
    src: '/logos/mcp-algorand.png',
    className: 'hp-story-logo-mcp',
  },
  {
    name: 'MPP',
    src: '/logos/mpp-logo-dark.svg',
    className: 'hp-story-logo-mpp',
  },
  {
    name: 'Stripe',
    src: '/logos/stripe-wordmark-slate.svg',
    className: 'hp-story-logo-stripe',
  },
  {
    name: 'A2A',
    src: '/logos/a2a-algorand.svg',
    className: 'hp-story-logo-a2a',
  },
  {
    name: 'AP2',
    src: '/logos/ap2-algorand.svg',
    className: 'hp-story-logo-ap2',
  },
  {
    name: 'Cloudflare',
    src: '/logos/cloudflare-wordmark.png',
    className: 'hp-story-logo-cloudflare',
  },
  {
    name: 'Vercel',
    src: '/logos/vercel-logotype-light.png',
    className: 'hp-story-logo-vercel',
  },
  {
    name: 'Visa',
    src: '/logos/visa.svg',
    className: 'hp-story-logo-visa',
  },
  {
    name: 'Mastercard',
    src: '/logos/mastercard-symbol.svg',
    className: 'hp-story-logo-mastercard',
  },
  {
    name: 'OpenAI',
    src: '/logos/openai.png',
    className: 'hp-story-logo-openai',
  },
  {
    name: 'OpenTelemetry',
    src: '/logos/opentelemetry.svg',
    className: 'hp-story-logo-opentelemetry',
  },
  {
    name: 'LangChain',
    src: '/logos/langchain-lockup-black.svg',
    className: 'hp-story-logo-langchain',
  },
  {
    name: 'Microsoft Agent Governance Toolkit',
    src: '/logos/microsoft-agentic-governance-toolkit.svg',
    className: 'hp-story-logo-agent-governance',
    label: 'Agent Governance Toolkit',
  },
  {
    name: 'Claude Managed Agents',
    src: '/logos/claude-managed-agents.svg',
    className: 'hp-story-logo-claude-managed-agents',
    label: 'Claude Managed Agents',
  },
]

export function Hero() {
  return (
    <section className="hp-hero-verify">
      <AmbientRecordField />
      <div className="hp-hero-corner hp-hero-corner-left" aria-hidden="true" />
      <div className="hp-hero-corner hp-hero-corner-right" aria-hidden="true" />

      <div className="hp-container hp-hero-verify-inner">
        <div className="hp-hero-verify-copy">
          <div className="hp-hero-verify-kicker">
            <span className="hp-hero-verify-kicker-dot" />
            For AI agents, APIs, tools, and MCP servers
          </div>

          <h1 className="hp-hero-verify-title">Prove what AI agents and APIs did.</h1>

          <p className="hp-hero-verify-subtitle">
            Originary turns API calls, MCP tool use, runtime decisions, and payment events into signed records another party can verify.
          </p>

          <p className="hp-hero-protocol-line">
            Built on{' '}
            <a href="https://github.com/peacprotocol/peac" target="_blank" rel="noopener noreferrer">
              PEAC Protocol
            </a>
            , the open standard for portable signed interaction records.
          </p>

          <div className="hp-hero-verify-actions hp-hero-verify-actions-dual">
            <Link href="#pilot" className="hp-hero-verify-cta">
              Start a pilot
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path d="M7 17L17 7" />
                <path d="M9 7H17V15" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/verify" className="hp-hero-verify-cta-secondary">
              Verify a sample record
            </Link>
            <Link href="#how-it-works" className="hp-hero-architecture-link">
              See architecture
            </Link>
          </div>

          <div className="hp-hero-trust-strip" aria-label="Platform trust signals">
            <span>Offline verification</span>
            <span>Signed records</span>
            <span>Self-hostable</span>
            <span>
              <Link href="/downloads" className="hp-hero-download-link">Downloads</Link>
            </span>
            <span>Open standard</span>
            <span>No vendor callback</span>
          </div>
        </div>

        <div className="hp-artifact-flow" aria-label="Input event to signed interaction record to independent verification">
          <div className="hp-artifact-events">
            <div className="hp-artifact-column-label">Input event</div>
            {eventCards.map((card, index) => (
              <div
                key={card.label}
                className={`hp-artifact-event hp-artifact-event-${card.tone}`}
                style={{ '--hp-artifact-delay': `${index * 0.35}s` } as CSSProperties}
              >
                <span className="hp-artifact-event-dot" />
                <span>
                  <strong>{card.label}</strong>
                  <small>{card.meta}</small>
                </span>
              </div>
            ))}
          </div>

          <div className="hp-artifact-connector hp-artifact-connector-left" aria-hidden="true" />

          <div className="hp-artifact-record-card">
            <div className="hp-artifact-record-top">
              <div>
                <div className="hp-artifact-card-kicker">Signed interaction record</div>
                <h2>Signed record</h2>
              </div>
              <div className="hp-artifact-record-seal" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 3.5 18.5 6v5.3c0 4.2-2.6 7.4-6.5 9.2-3.9-1.8-6.5-5-6.5-9.2V6L12 3.5Z" />
                  <path d="m8.9 12.1 2.1 2.1 4.2-4.6" />
                </svg>
              </div>
            </div>

            <div className="hp-artifact-record-identity" aria-hidden="true">
              <span>issuer</span>
              <strong>api.company.com</strong>
              <i />
              <span>format</span>
              <strong>peac.record/0.1</strong>
            </div>

            <div className="hp-artifact-record-fields">
              {recordFields.map(([label, value]) => (
                <div key={label} className="hp-artifact-record-field">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>

            <div className="hp-artifact-record-footer" aria-hidden="true">
              <span>canonical digest</span>
              <strong>sha256:b7f4...91ac</strong>
            </div>
          </div>

          <div className="hp-artifact-connector hp-artifact-connector-right" aria-hidden="true" />

          <div className="hp-artifact-verifier">
            <div className="hp-artifact-verifier-top">
              <span className="hp-artifact-status-dot" />
              <span>Verifier report</span>
              <strong>Verified</strong>
            </div>
            <div className="hp-artifact-verifier-body">
              {verifierFields.map(([label, value]) => (
                <div key={label} className="hp-artifact-verifier-row">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hp-logo-strip hp-hero-logo-strip" aria-label="Supported commerce and infrastructure surfaces">
          <div className="hp-logo-strip-viewport">
            <div className="hp-story-logo-grid hp-logo-strip-grid">
              {[...worksWith, ...worksWith].map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="hp-story-logo-card hp-logo-strip-card"
                  aria-hidden={index >= worksWith.length ? 'true' : undefined}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.src} alt={index >= worksWith.length ? '' : item.name} className={item.className} />
                  {item.label ? <span className="hp-logo-strip-card-label">{item.label}</span> : null}
                </div>
              ))}
            </div>
          </div>
          <p className="hp-logo-strip-note">
            Works with x402, MCP, MPP, Stripe, A2A, AP2, Cloudflare, Vercel, Visa, Mastercard, OpenAI, OpenTelemetry, LangChain, Microsoft Agent Governance Toolkit, and Claude Managed Agents.
          </p>
        </div>
      </div>
    </section>
  )
}

import type { ReactNode } from 'react'
import Link from 'next/link'
import { PilotForm } from '@/components/homepage/PilotForm'
import { COMPANY_EMAIL } from '@/lib/config'

const boundaryFields = [
  ['Issuer', 'api.company-b.com'],
  ['Action', 'priced API response'],
  ['Policy', 'policy:v42'],
  ['Timestamp', '2026-04-29T04:41Z'],
  ['Verification', 'offline-capable'],
  ['Signature', 'ed25519:valid'],
]

const comparisonRows = [
  ['Debug system behavior', 'Yes', 'Partial'],
  ['Verify policy and signature', 'No', 'Yes'],
  ['Share with another party', 'Weak', 'Yes'],
  ['Use in dispute or audit', 'Weak', 'Yes'],
  ['Verify offline', 'No', 'Yes'],
]

const productCards = [
  {
    title: 'Verify API',
    body: 'Validate signed records, policy bindings, issuer keys, and verification reports.',
  },
  {
    title: 'Issuer operations',
    body: 'Key rotation, revocation, policy binding, and production-safe record issuance.',
  },
  {
    title: 'Audit bundles',
    body: 'Export a package a counterparty, auditor, or customer can verify independently.',
  },
  {
    title: 'Dispute workflows',
    body: 'Turn signed records into reviewable proof for billing, procurement, incident, and compliance questions.',
  },
]

const mechanismSteps = [
  'Service publishes policy or terms.',
  'Automated action happens.',
  'Signed record is issued.',
  'Counterparty verifies offline.',
  'Audit bundle exports when needed.',
]

const trustCards = [
  'Self-hostable',
  'Offline verification',
  'Exportable records',
  'Apache-2.0 standard',
  'Ed25519 signatures',
  'Audit and dispute ready',
]

const buyerCards = [
  {
    title: 'API operators',
    body: 'Prove usage, policy, and authorization when customers dispute automated traffic.',
  },
  {
    title: 'MCP server hosts',
    body: 'Export signed records for tool calls, production changes, and delegated actions.',
  },
  {
    title: 'AI platform teams',
    body: 'Give security, procurement, and audit teams records they can verify independently.',
  },
  {
    title: 'Security and compliance teams',
    body: 'Review what happened without relying on screenshots, vendor portals, or private logs.',
  },
]

const originaryAdds = [
  'Issue records when automated actions happen.',
  'Verify records independently, including offline.',
  'Export records for disputes, audits, procurement, and incident review.',
  'Gateway integrations that emit records from existing decisions.',
]

const workflowChecklist = [
  'Usage dispute',
  'Customer audit request',
  'MCP tool-call review',
  'Procurement proof',
  'Incident reconstruction',
]

const reportFields = [
  ['Status', 'verified'],
  ['Issuer', 'valid'],
  ['Signature', 'valid'],
  ['Policy binding', 'verified'],
  ['Terms digest', 'matched'],
  ['Record format', 'PEAC'],
  ['Verification mode', 'offline-capable'],
]

const faqs = [
  {
    q: 'Is this observability?',
    a: 'No. Observability helps your team understand system behavior. Originary creates records another party can verify independently.',
  },
  {
    q: 'Do I need Originary to verify a record?',
    a: 'No. Verification should work offline with issuer public keys. Originary helps teams run issuance, verification, and export workflows in production.',
  },
  {
    q: 'What happens if I stop using Originary?',
    a: 'Your records remain portable. PEAC is open, and verification does not require a callback to Originary.',
  },
  {
    q: 'Is this only for AI agents?',
    a: 'No. It is for automated actions across APIs, MCP servers, tools, gateways, and agent workflows.',
  },
]

function StoryEyebrow({ children }: { children: ReactNode }) {
  return <div className="hp-story-eyebrow">{children}</div>
}

function StoryList({ items }: { items: string[] }) {
  return (
    <ul className="hp-story-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function CheckIcon() {
  return (
    <span className="hp-story-check" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  )
}

export function SinglePageHome() {
  return (
    <>
      <section id="problem" className="hp-section hp-story-section">
        <div className="hp-container">
          <div className="hp-story-head">
            <div className="hp-story-head-copy">
              <StoryEyebrow>Problem</StoryEyebrow>
              <h2 className="hp-story-title">The action crossed companies. The proof did not.</h2>
            </div>
            <div className="hp-story-head-body">
              <p className="hp-story-text">
                An agent running on Company A&apos;s infrastructure calls Company B&apos;s API. The API returns a signed record showing the action, policy, issuer, timestamp, and verification status. Three weeks later, when a billing dispute or audit question appears, both sides can verify the same record offline. No dashboard access. No screenshot. No phone call.
              </p>
            </div>
          </div>

          <div className="hp-proof-stage" aria-label="Signed record crossing a company boundary">
            <div className="hp-proof-record-panel">
              <div className="hp-proof-panel-top">
                <span>Company B API</span>
                <strong>Signed record</strong>
              </div>
              <div className="hp-proof-record-body">
                <div>
                  <span className="hp-proof-mini-label">Boundary event</span>
                  <h3>Company A agent called a priced API.</h3>
                  <p>The record carries the action, policy, issuer, timestamp, verification status, and signature beyond either party&apos;s dashboard.</p>
                </div>
                <div className="hp-proof-ledger">
                  {boundaryFields.map(([label, value]) => (
                    <div key={label} className="hp-proof-ledger-row">
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hp-proof-verifier-panel">
              <div className="hp-proof-panel-top">
                <span>Counterparty verifier</span>
                <strong>No callback</strong>
              </div>
              <div className="hp-proof-verifier-grid">
                {[
                  ['Same record', 'both sides inspect one artifact'],
                  ['Issuer key', 'checked against trusted keys'],
                  ['Policy binding', 'same terms the action used'],
                  ['Offline mode', 'verification does not phone home'],
                ].map(([label, value]) => (
                  <div key={label} className="hp-proof-verifier-item">
                    <CheckIcon />
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proof-gallery" className="hp-section hp-story-section hp-proof-section">
        <div className="hp-container">
          <div className="hp-story-head hp-proof-head">
            <div className="hp-story-head-copy">
              <StoryEyebrow>Logs vs Records</StoryEyebrow>
              <h2 className="hp-story-title">Logs explain behavior. Records prove what crossed the boundary.</h2>
            </div>
            <div className="hp-story-head-body">
              <p className="hp-story-text">
                A signed record can show who issued it, what action happened, what policy applied, when it happened, and whether the record verifies offline.
              </p>
            </div>
          </div>

          <div className="hp-proof-mode-grid hp-proof-mode-grid-two">
            <article className="hp-proof-mode-card">
              <div className="hp-proof-mode-card-top">
                <span>Internal logs</span>
              </div>
              <p>Useful for debugging. Weak as counterparty proof.</p>
            </article>
            <article className="hp-proof-mode-card">
              <div className="hp-proof-mode-card-top">
                <span>Signed record</span>
                <CheckIcon />
              </div>
              <p>Portable, signed, independently verifiable.</p>
            </article>
          </div>

          <div className="hp-story-compare-table" aria-label="Logs and signed records comparison">
            <div className="hp-story-compare-row hp-story-compare-head">
              <span>Question</span>
              <span>Logs</span>
              <span>Records</span>
            </div>
            {comparisonRows.map(([question, logs, records]) => (
              <div key={question} className="hp-story-compare-row">
                <span>{question}</span>
                <strong>{logs}</strong>
                <strong>{records}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="hp-section hp-story-section hp-story-section-product">
        <div className="hp-container">
          <div className="hp-story-head hp-story-head-centered">
            <div className="hp-story-head-copy">
              <StoryEyebrow>Product</StoryEyebrow>
              <h2 className="hp-story-title">Originary helps teams issue, verify, and export signed records.</h2>
              <p className="hp-story-text hp-story-text-centered">
                PEAC defines the open standard. Originary helps teams run it in production.
              </p>
            </div>
          </div>

          <div className="hp-story-card-grid-three hp-story-card-grid-four">
            {productCards.map((card) => (
              <article key={card.title} className="hp-story-card hp-story-product-card">
                <CheckIcon />
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>

          <div className="hp-story-inline-callout">
            <strong>Originary adds:</strong>
            <StoryList items={originaryAdds} />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="hp-section hp-story-section hp-story-section-soft">
        <div className="hp-container">
          <div className="hp-story-head hp-story-head-centered">
            <div className="hp-story-head-copy">
              <StoryEyebrow>Architecture</StoryEyebrow>
              <h2 className="hp-story-title">A record that survives the boundary.</h2>
            </div>
          </div>

          <div className="hp-story-steps-shell">
            <div className="hp-story-steps-line" aria-hidden="true" />
            <div className="hp-story-steps-grid hp-story-steps-grid-five">
              {mechanismSteps.map((step, index) => (
                <article key={step} className="hp-story-card hp-story-step-card">
                  <span className="hp-story-step-index">0{index + 1}</span>
                  <p>{step}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hp-story-inline-callout hp-story-inline-callout-strong">
            <strong>The key property is not signing alone. It is independent verification across company boundaries.</strong>
          </div>
        </div>
      </section>

      <section id="trust" className="hp-section hp-story-section hp-story-section-dark">
        <div className="hp-container">
          <div className="hp-story-dark-grid">
            <div className="hp-story-dark-copy">
              <StoryEyebrow>Trust</StoryEyebrow>
              <h2 className="hp-story-title hp-story-title-inverse">Built to be verified without us.</h2>
              <p className="hp-story-text hp-story-text-inverse">
                Originary can help issue, manage, and export records in production. Verification remains local, offline, and independent.
              </p>
            </div>

            <div className="hp-story-dark-panel">
              <div className="hp-story-outcome-grid">
                {trustCards.map((item) => (
                  <div key={item} className="hp-story-outcome-card">
                    {item}
                  </div>
                ))}
              </div>
              <div className="hp-story-peac-actions">
                <a
                  href="https://github.com/peacprotocol/peac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hp-story-peac-github"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <span>View PEAC on GitHub</span>
                </a>
                <Link href="/downloads" className="hp-story-peac-download">
                  Downloads
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="hp-section hp-story-section">
        <div className="hp-container">
          <div className="hp-story-head hp-story-head-centered">
            <div className="hp-story-head-copy">
              <StoryEyebrow>Who It Is For</StoryEyebrow>
              <h2 className="hp-story-title">Built for the systems agents touch.</h2>
            </div>
          </div>

          <div className="hp-story-audience-grid hp-story-use-case-grid">
            {buyerCards.map((card) => (
              <article key={card.title} className="hp-story-card hp-story-audience-card is-wide">
                <CheckIcon />
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sample-report" className="hp-section hp-story-section hp-story-section-report">
        <div className="hp-container">
          <div className="hp-story-report-layout">
            <div className="hp-story-report-copy">
              <StoryEyebrow>Verifier Report</StoryEyebrow>
              <h2 className="hp-story-title hp-story-title-inverse">A signed record becomes a report another party can inspect.</h2>
              <p className="hp-story-text hp-story-text-inverse">
                The report is concrete: issuer, signature, policy binding, terms, record format, and verification mode are visible without relying on your internal dashboard.
              </p>
            </div>
            <div className="hp-artifact-verifier hp-story-report-panel">
              <div className="hp-artifact-verifier-top">
                <span className="hp-artifact-status-dot" />
                <span>Verification report</span>
                <strong>Verified</strong>
              </div>
              <div className="hp-artifact-verifier-body">
                {reportFields.map(([label, value]) => (
                  <div key={label} className="hp-artifact-verifier-row">
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pilot" className="hp-section hp-story-section hp-story-section-product">
        <div className="hp-container">
          <div className="hp-story-pilot-shell">
            <div className="hp-story-pilot-copy">
              <StoryEyebrow>Pilot</StoryEyebrow>
              <h2 className="hp-story-title hp-story-title-inverse">Start with one workflow where logs already fail.</h2>
              <p className="hp-story-text hp-story-text-inverse">
                Bring one API, MCP, commerce, or runtime flow. Originary will help make it signed, verifiable, and exportable without replacing your stack.
              </p>
              <div className="hp-story-business-divider" />
              <StoryList items={workflowChecklist} />
              <div className="hp-story-actions">
                <Link href="/contact" className="hp-hero-verify-cta">
                  Start a pilot
                </Link>
                <Link href="/verify" className="hp-hero-verify-cta-secondary hp-story-cta-ghost">
                  Verify a sample record
                </Link>
              </div>
            </div>

            <PilotForm destinationEmail={COMPANY_EMAIL} />
          </div>
        </div>
      </section>

      <section id="faq" className="hp-section hp-story-section">
        <div className="hp-container">
          <div className="hp-story-head hp-story-head-centered">
            <div className="hp-story-head-copy">
              <StoryEyebrow>FAQ</StoryEyebrow>
              <h2 className="hp-story-title">Frequently asked questions.</h2>
            </div>
          </div>
          <div className="hp-story-faq-list hp-story-faq-list-light">
            {faqs.map((item) => (
              <details key={item.q} className="hp-story-faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="hp-section hp-story-section">
        <div className="hp-container">
          <div className="hp-story-final-shell">
            <StoryEyebrow>Next Step</StoryEyebrow>
            <h2 className="hp-story-title hp-story-title-inverse">If one flow needs stronger proof, start there.</h2>
            <p className="hp-story-text hp-story-text-inverse">
              Logs stay local. Records cross boundaries. Bring one API, MCP, commerce, or runtime flow and start there.
            </p>
            <div className="hp-story-actions hp-story-actions-centered">
              <Link href="/contact" className="hp-hero-verify-cta">
                Start a pilot
              </Link>
              <Link href="/verify" className="hp-hero-verify-cta-secondary hp-story-cta-ghost">
                Verify a sample record
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

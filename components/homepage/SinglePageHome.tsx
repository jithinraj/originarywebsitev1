import type { ReactNode } from 'react'
import Link from 'next/link'
import { PilotForm } from '@/components/homepage/PilotForm'
import { COMPANY_EMAIL } from '@/lib/config'

const painCards = [
  {
    title: 'API result dispute',
    body: 'Prove which policy, terms, and result applied to one API interaction.',
  },
  {
    title: 'Agent action review',
    body: 'Inspect a tool call, runtime decision, or approval after the fact.',
  },
  {
    title: 'Payment or access proof',
    body: 'Bind payment terms, access decisions, and results into a verifiable artifact.',
  },
  {
    title: 'Partner or audit handoff',
    body: 'Export a review-ready record without exposing internal systems.',
  },
]

const productCards = [
  {
    title: 'Issue',
    body: 'Create a signed record from an API call, MCP tool call, runtime event, or payment flow.',
    meta: ['record', 'issuer', 'signature'],
  },
  {
    title: 'Verify',
    body: 'Check issuer, timestamp, signature, policy binding, terms digest, and result hash independently.',
    meta: ['policy', 'terms', 'signature'],
  },
  {
    title: 'Export',
    body: 'Share a verifier report or evidence bundle with a customer, partner, auditor, or internal reviewer.',
    meta: ['report', 'artifact', 'review'],
  },
]

const proofGallery = [
  {
    title: 'API call proof',
    happened: 'A pricing API returned a result under specific terms.',
    signer: 'The issuer responsible for the API response.',
    verifies: 'Issuer, timestamp, policy digest, and result hash.',
    limit: 'Does not decide whether the policy was commercially fair.',
  },
  {
    title: 'MCP tool call proof',
    happened: 'An MCP server ran a tool with specific parameters.',
    signer: 'The tool server, gateway, or issuing system.',
    verifies: 'Tool reference, parameters digest, output digest, and issuer signature.',
    limit: 'Does not claim the tool output was objectively correct.',
  },
  {
    title: 'Commerce proof',
    happened: 'An x402, MPP, AP2, Stripe, Visa, or Mastercard-linked access event was bound to transaction-local terms.',
    signer: 'The commerce service or access gateway.',
    verifies: 'Terms digest, access decision, payment reference, and settlement context where provided.',
    limit: 'Does not claim payment finality beyond the included record data.',
  },
  {
    title: 'Runtime decision proof',
    happened: 'A runtime, gateway, or approval system attested a decision.',
    signer: 'The runtime or approval system that issued the record.',
    verifies: 'Decision source, policy reference, action, and timestamp.',
    limit: 'Does not replace your runtime controller or observability stack.',
  },
]

const useCases = [
  {
    title: 'Verifiable API responses',
    body: 'For high-value API results where a customer may later ask what policy, terms, or result applied.',
  },
  {
    title: 'MCP and agent tool calls',
    body: 'For tool calls, parameters, outputs, approvals, and runtime decisions that need review outside the original system.',
  },
  {
    title: 'Commerce and x402 flows',
    body: 'For x402, MPP, AP2, Stripe, card-network, terms, access, and dispute evidence across agentic commerce flows.',
  },
  {
    title: 'Runtime governance and audit',
    body: 'For managed runtimes, policy systems, and approval paths that need exportable records.',
  },
]

const howItWorks = [
  'Your system emits an important API call, tool call, payment event, or runtime decision.',
  'Originary binds relevant policy, terms, result, and metadata.',
  'A signed interaction record is issued.',
  'Another party verifies it independently.',
]

const peacCards = [
  'Open record format',
  'Offline verification',
  'Self-hostable reference path',
  'Hosted operation available',
  'No proprietary lock-in',
]

const capabilities = [
  {
    title: 'Verification',
    body: 'Hosted and local verification for signed records.',
  },
  {
    title: 'Review artifacts',
    body: 'Verifier reports and exportable evidence packages for customers, partners, and auditors.',
  },
  {
    title: 'Commerce proof',
    body: 'Payment, terms, and access proof for x402, MPP, AP2, Stripe, and card-network commerce flows.',
  },
  {
    title: 'Runtime records',
    body: 'Records for agent, API, MCP, and managed-runtime events.',
  },
]

const trustPoints = [
  'Records remain useful outside Originary.',
  'Verification can happen independently.',
  'Self-hosted and local verification paths remain available.',
  'Records can be shared without exposing internal logs.',
  'Privacy-aware verification avoids raw secret and personal-data leakage.',
]

const goodFit = [
  'You have one API, MCP, agent, runtime, or commerce flow where logs are not enough.',
  'Another party needs to verify what happened.',
  'You need a hosted or self-hosted path.',
  'You want evidence that can travel beyond one dashboard.',
]

const notFit = [
  'You only need internal debugging.',
  'No customer, partner, auditor, or second team needs the evidence.',
  'You are not ready to instrument one concrete flow.',
  'You need a policy engine, runtime controller, trust score, or observability dashboard.',
]

const pilotIncludes = [
  'One scoped flow',
  'Record issuance path',
  'Verification path',
  'Exportable review artifact',
  'Deployment recommendation',
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
    q: 'Do we need to replace our stack?',
    a: 'No. Originary is designed to sit around one concrete flow that already exists.',
  },
  {
    q: 'Is verification tied to Originary?',
    a: 'No. Records remain portable, and verification can stay independent.',
  },
  {
    q: 'Can we self-host?',
    a: 'Yes. Hosted and self-hosted deployment paths remain available.',
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
              <h2 className="hp-story-title">Automation crosses boundaries. Your proof usually does not.</h2>
            </div>
            <div className="hp-story-head-body">
              <p className="hp-story-text">
                Logs, dashboards, screenshots, and CSV exports work while everyone trusts the same system. They break down when a customer, partner, auditor, or another team needs to verify what happened independently.
              </p>
              <p className="hp-story-text">Originary is for the moment when someone asks: "Can you prove it?"</p>
            </div>
          </div>

          <div className="hp-story-problem-grid">
            {painCards.map((card) => (
              <article key={card.title} className="hp-story-card hp-story-card-tight">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>

          <div className="hp-story-inline-callout hp-story-inline-callout-strong">
            <strong>Built for API platform teams, MCP and agent infrastructure teams, commerce/payment owners, and security or compliance reviewers.</strong>
          </div>
        </div>
      </section>

      <section id="product" className="hp-section hp-story-section hp-story-section-product">
        <div className="hp-container">
          <div className="hp-story-head hp-story-head-centered">
            <div className="hp-story-head-copy">
              <StoryEyebrow>Product</StoryEyebrow>
              <h2 className="hp-story-title">Originary turns important events into records another party can inspect.</h2>
            </div>
          </div>

          <div className="hp-story-card-grid-three">
            {productCards.map((card, index) => (
              <article key={card.title} className="hp-story-card hp-story-product-card">
                <span className="hp-story-step-index">0{index + 1}</span>
                <div className="hp-story-micro-row" aria-hidden="true">
                  {card.meta.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proof-gallery" className="hp-section hp-story-section hp-proof-section">
        <div className="hp-container">
          <div className="hp-story-head hp-proof-head">
            <div className="hp-story-head-copy">
              <StoryEyebrow>Proof Gallery</StoryEyebrow>
              <h2 className="hp-story-title">A record should show exactly what can be trusted.</h2>
            </div>
            <div className="hp-story-head-body">
              <p className="hp-story-text">
                Originary packages the parts another party needs to verify independently: who issued the record, what policy and terms applied, what result was returned, and what the record does not claim.
              </p>
            </div>
          </div>

          <div className="hp-proof-stage" aria-label="Example signed record and verification details">
            <div className="hp-proof-record-panel">
              <div className="hp-proof-panel-top">
                <span>Signed interaction record</span>
                <strong>Verified</strong>
              </div>
              <div className="hp-proof-record-body">
                <div>
                  <span className="hp-proof-mini-label">Scenario</span>
                  <h3>Paid API access event</h3>
                  <p>x402 payment, access decision, policy version, terms digest, and API result are bound into one portable record.</p>
                </div>
                <div className="hp-proof-ledger">
                  {[
                    ['Issuer', 'api.company.com'],
                    ['Policy', 'policy:v42'],
                    ['Terms digest', 'sha256:93af...12d8'],
                    ['Payment reference', 'x402:settled'],
                    ['Result hash', 'sha256:b7f4...91ac'],
                    ['Signature', 'ed25519:valid'],
                  ].map(([label, value]) => (
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
                <span>Independent verifier</span>
                <strong>Offline-capable</strong>
              </div>
              <div className="hp-proof-verifier-grid">
                {[
                  ['Issuer key', 'matches trusted JWKS'],
                  ['Policy binding', 'same policy the requester saw'],
                  ['Terms binding', 'same price and access terms'],
                  ['Result integrity', 'response hash matches record'],
                ].map(([label, value]) => (
                  <div key={label} className="hp-proof-verifier-item">
                    <CheckIcon />
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
              <div className="hp-proof-boundary">
                <span>Boundary</span>
                The record proves what was signed and bound. It does not claim the policy was fair, the output was correct, or payment finality beyond included settlement data.
              </div>
            </div>
          </div>

          <div className="hp-proof-mode-grid">
            {proofGallery.map((item) => (
              <article key={item.title} className="hp-proof-mode-card">
                <div className="hp-proof-mode-card-top">
                  <span>{item.title}</span>
                  <CheckIcon />
                </div>
                <dl>
                  <div>
                    <dt>What happened</dt>
                    <dd>{item.happened}</dd>
                  </div>
                  <div>
                    <dt>Who signed it</dt>
                    <dd>{item.signer}</dd>
                  </div>
                  <div>
                    <dt>Verifiable offline</dt>
                    <dd>{item.verifies}</dd>
                  </div>
                  <div>
                    <dt>Does not claim</dt>
                    <dd>{item.limit}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

          <div className="hp-story-actions hp-story-actions-centered hp-story-proof-gallery-actions">
            <Link href="/verify" className="hp-hero-verify-cta">
              View sample records
            </Link>
            <Link href="/downloads" className="hp-hero-verify-cta-secondary">
              Verify one locally
            </Link>
          </div>
        </div>
      </section>

      <section id="use-cases" className="hp-section hp-story-section">
        <div className="hp-container">
          <div className="hp-story-head hp-story-head-centered">
            <div className="hp-story-head-copy">
              <StoryEyebrow>Where Originary Fits</StoryEyebrow>
              <h2 className="hp-story-title">When another party needs proof, not just logs.</h2>
            </div>
          </div>

          <div className="hp-story-audience-grid hp-story-use-case-grid">
            {useCases.map((card) => (
              <article key={card.title} className="hp-story-card hp-story-audience-card is-wide">
                <CheckIcon />
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="hp-section hp-story-section hp-story-section-soft">
        <div className="hp-container">
          <div className="hp-story-head hp-story-head-centered">
            <div className="hp-story-head-copy">
              <StoryEyebrow>How It Works</StoryEyebrow>
              <h2 className="hp-story-title">A record travels where logs cannot.</h2>
            </div>
          </div>

          <div className="hp-story-steps-shell">
            <div className="hp-story-steps-line" aria-hidden="true" />
            <div className="hp-story-steps-grid">
              {howItWorks.map((step, index) => (
                <article key={step} className="hp-story-card hp-story-step-card">
                  <span className="hp-story-step-index">0{index + 1}</span>
                  <p>{step}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="peac" className="hp-section hp-story-section hp-story-section-dark">
        <div className="hp-container">
          <div className="hp-story-dark-grid">
            <div className="hp-story-dark-copy">
              <StoryEyebrow>PEAC</StoryEyebrow>
              <h2 className="hp-story-title hp-story-title-inverse">Built on PEAC. Usable through Originary.</h2>
              <p className="hp-story-text hp-story-text-inverse">
                PEAC is the open standard for portable signed interaction records. Originary gives teams a production path to issue, verify, and export those records for real deployments.
              </p>
              <p className="hp-story-text hp-story-text-inverse">The standard stays open. Verification can remain independent. Records do not require trusting Originary's dashboard.</p>
            </div>

            <div className="hp-story-dark-panel">
              <div className="hp-story-outcome-grid">
                {peacCards.map((item) => (
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

      <section id="capabilities" className="hp-section hp-story-section">
        <div className="hp-container">
          <div className="hp-story-head hp-story-head-centered">
            <div className="hp-story-head-copy">
              <StoryEyebrow>Capabilities</StoryEyebrow>
              <h2 className="hp-story-title">Use only the capability you need.</h2>
            </div>
          </div>

          <div className="hp-story-audience-grid hp-story-use-case-grid">
            {capabilities.map((layer) => (
              <article key={layer.title} className="hp-story-card hp-story-audience-card is-wide">
                <div className="hp-story-card-topline">
                  <h3>{layer.title}</h3>
                </div>
                <p>{layer.body}</p>
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

      <section id="trust" className="hp-section hp-story-section hp-story-section-soft">
        <div className="hp-container">
          <div className="hp-story-trust-layout">
            <div className="hp-story-trust-copy">
              <StoryEyebrow>Trust</StoryEyebrow>
              <h2 className="hp-story-title">Designed for proof without lock-in.</h2>
              <p className="hp-story-text">
                Trust scores change. Signed records travel. Anyone can verify what happened without trusting your dashboard.
              </p>
            </div>

            <div className="hp-story-principles">
              {trustPoints.map((point, index) => (
                <article key={point} className="hp-story-card hp-story-principle-card">
                  <span className="hp-story-principle-index">0{index + 1}</span>
                  <p>{point}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="fit" className="hp-section hp-story-section">
        <div className="hp-container">
          <div className="hp-story-business-grid">
            <article className="hp-story-card hp-story-fit-card">
              <span className="hp-story-label">Good fit</span>
              <StoryList items={goodFit} />
            </article>
            <article className="hp-story-card hp-story-fit-card hp-story-fit-card-warn">
              <span className="hp-story-label">Not a fit</span>
              <StoryList items={notFit} />
            </article>
          </div>
        </div>
      </section>

      <section id="pilot" className="hp-section hp-story-section hp-story-section-product">
        <div className="hp-container">
          <div className="hp-story-pilot-shell">
            <div className="hp-story-pilot-copy">
              <StoryEyebrow>Pilot</StoryEyebrow>
              <h2 className="hp-story-title hp-story-title-inverse">Start with one workflow.</h2>
              <p className="hp-story-text hp-story-text-inverse">
                Bring one API, MCP, commerce, or runtime flow. Originary will help make it signed, verifiable, and exportable without replacing your stack.
              </p>
              <div className="hp-story-business-divider" />
              <span className="hp-story-label">Pilot includes</span>
              <StoryList items={pilotIncludes} />
              <div className="hp-story-actions">
                <Link href="/contact" className="hp-hero-verify-cta">
                  Start with one workflow
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
                Start with one workflow
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

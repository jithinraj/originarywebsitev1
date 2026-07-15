import Link from 'next/link'
import type { Metadata } from 'next'
import { FACTS } from '@/lib/facts'
import { Nav, HomeFooter, InViewClass, PALETTE, MAX_W, PAGE_PAD } from '@/components/home'
import { WordmarkStream } from '@/components/home/motion/WordmarkStream'
import { Mono } from '@/components/home/atoms/Mono'

export const metadata: Metadata = {
  title: { absolute: 'PEAC open source and Originary implementation support' },
  description:
    'Use PEAC free and self-hosted, or engage Originary for a scoped verification pilot and implementation support.',
  authors: [{ name: 'Originary', url: 'https://www.originary.xyz' }],
  alternates: { canonical: '/pricing' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'PEAC open source and Originary implementation support',
    description:
      'Use PEAC free and self-hosted, or engage Originary for a scoped verification pilot and implementation support.',
    url: '/pricing',
    type: 'website',
    siteName: 'Originary',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary Pricing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PEAC open source and Originary implementation support',
    description:
      'Use PEAC free and self-hosted, or engage Originary for a scoped verification pilot and implementation support.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
}

const sans = 'var(--font-plex-sans), "IBM Plex Sans", system-ui, sans-serif'
const mono = 'var(--font-plex-mono), "IBM Plex Mono", ui-monospace, monospace'

const ossFeatures = [
  'Full protocol specification',
  'Verifiable interaction records (JWS)',
  'Interaction Record format (current stable)',
  'Policy discovery (peac.txt)',
  'MCP server - 5 verification tools',
  'CLI and SDK packages',
  'Self-managed signing keys',
  'Offline verification - no Originary dependency',
  'Ed25519 signature verification',
  'Record bundles for review',
  'A2A and HTTP carrier support',
  'Community support via GitHub',
]

const enterpriseFeatures = [
  {
    feature: 'Guided integration and deployment support',
    detail: 'Architecture review, environment setup, and production rollout guidance',
  },
  {
    feature: 'Signing-key and issuer setup guidance',
    detail: 'Help wiring your own signing keys and issuer configuration into your environment',
  },
  {
    feature: 'Record export and bundle assistance',
    detail: 'Help assembling signed records into portable, independently verifiable bundles',
  },
  {
    feature: 'Direct engineering access during the engagement',
    detail: 'A direct channel to the engineering team while the pilot is running',
  },
]

const comparisonRows: Array<[string, string, string]> = [
  ['Price', '$0 forever', 'Custom, scoped'],
  ['License', 'Apache-2.0', 'Apache-2.0 + support terms'],
  ['Signing keys', 'Self-managed', 'Self-managed, with setup guidance'],
  ['Deployment', 'Self-hosted', 'Self-hosted, with guidance'],
  ['Verification', 'Offline, no dependency', 'Offline, no dependency'],
  ['Support', 'GitHub issues', 'Direct engineering during the engagement'],
  ['Record exports', 'Self-assembled', 'Assembly guidance'],
  ['Architecture review', 'Community docs', 'Guided integration review'],
]

const faqs = [
  {
    q: 'Can I self-host everything?',
    a: `Yes. PEAC Protocol and all core packages are ${FACTS.license} licensed and free to self-host. Verification does not require Originary to be online. No data is sent to any Originary service.`,
  },
  {
    q: 'Is the protocol truly open?',
    a: 'Yes. The protocol specification, all reference implementations, and core tooling are published on GitHub under Apache-2.0. You can build your own conformant implementation without an Originary account or managed service.',
  },
  {
    q: 'What payment rails are supported?',
    a: 'PEAC is rail-neutral. It produces verifiable records of interactions, not payment mandates. HTTP 402 adapters are available for teams that need challenge/response payment flows.',
  },
  {
    q: 'Who should contact you about Originary implementation support?',
    a: 'API platform teams, MCP server operators, gateway and agent-infrastructure teams, and security or engineering reviewers who need help issuing and verifying signed records in a specific production workflow.',
  },
]

const btnPrimary = {
  display: 'inline-flex' as const,
  alignItems: 'center' as const,
  gap: 8,
  padding: '12px 18px',
  fontFamily: sans,
  fontSize: 14,
  fontWeight: 500,
  letterSpacing: '-0.005em',
  textDecoration: 'none' as const,
  color: PALETTE.paper,
  background: PALETTE.ink,
  border: `1px solid ${PALETTE.ink}`,
}

const btnSecondary = {
  ...btnPrimary,
  color: PALETTE.ink,
  background: 'transparent',
  border: `1px solid ${PALETTE.rule}`,
}

const pill = {
  fontFamily: sans,
  fontSize: 12,
  color: PALETTE.muted,
  padding: '4px 10px',
  background: PALETTE.paper,
  border: `1px solid ${PALETTE.hairline}`,
}

const sectionHead = {
  fontFamily: sans,
  fontSize: 28,
  lineHeight: 1.14,
  letterSpacing: '-0.02em',
  fontWeight: 500,
  color: PALETTE.ink,
  margin: 0,
  textWrap: 'pretty' as const,
}

export default function PricingPage() {
  return (
    <div
      style={{
        background: PALETTE.bg,
        color: PALETTE.ink,
        fontFamily: sans,
        minHeight: '100vh',
      }}
    >
      <Nav />
      <main id="main-content" role="main">
        {/* Hero */}
        <section
          className="home-section"
          style={{
            maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
            margin: '0 auto',
            padding: `clamp(64px, 9vh, 112px) ${PAGE_PAD} clamp(40px, 6vh, 64px) ${PAGE_PAD}`,
          }}
        >
          <InViewClass className="home-eyebrow-rule" as="div">
            <span className="home-about-eyebrow">pricing</span>
          </InViewClass>
          <h1 className="home-about-h1">Start with the open protocol.</h1>
          <p className="home-about-lede" style={{ marginTop: 22 }}>
            Add support when the workflow matters.
          </p>
          <p className="home-about-body" style={{ marginTop: 14, maxWidth: 640 }}>
            Use PEAC Protocol by Originary freely under Apache-2.0. Engage
            Originary for a scoped verification pilot and implementation support
            when another party needs verification your logs cannot provide.
          </p>
        </section>

        <InViewClass
          className="home-about-divider"
          as="div"
          style={{ maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`, margin: '0 auto', padding: `0 ${PAGE_PAD}` }}
        />

        <section
          className="home-section"
          style={{
            maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
            margin: '0 auto',
            padding: `clamp(32px, 5vh, 56px) ${PAGE_PAD} 0 ${PAGE_PAD}`,
          }}
        >

          <div
            className="home-card"
            style={{
              maxWidth: 760,
              margin: '40px auto 0 auto',
              padding: 28,
              background: PALETTE.paper,
              border: `1px solid ${PALETTE.hairline}`,
            }}
          >
            <Mono
              size={11}
              color={PALETTE.faint}
              style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}
            >
              most teams start with one workflow
            </Mono>
            <p style={{ fontFamily: sans, fontSize: 16, lineHeight: 1.7, color: PALETTE.ink, marginTop: 12, marginBottom: 14 }}>
              A pilot usually means one API, MCP server, gateway, payment flow, or agent handoff; one signed-record profile; one verifier report or bundle; one integration review; and one rollout recommendation.
            </p>
            <p style={{ fontFamily: sans, fontSize: 15, lineHeight: 1.7, color: PALETTE.muted, margin: 0 }}>
              You should contact us if another party already asked for verification your logs cannot provide.
            </p>
            <div style={{ marginTop: 22 }}>
              <a
                href="https://github.com/peacprotocol/peac"
                target="_blank"
                rel="noopener noreferrer"
                style={btnPrimary}
              >
                Get started on GitHub
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 5h8M5.5 1.5L9 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* OSS feature card */}
        <section
          className="home-section"
          style={{
            maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
            margin: '0 auto',
            padding: `0 ${PAGE_PAD} 80px ${PAGE_PAD}`,
          }}
        >
          <div
            className="home-card"
            style={{
              maxWidth: 760,
              margin: '0 auto',
              padding: 40,
              background: PALETTE.paper,
              border: `1px solid ${PALETTE.rule}`,
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <Mono
                size={11}
                color={PALETTE.muted}
                style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}
              >
                open source / {FACTS.license}
              </Mono>
              <span
                style={{
                  fontFamily: mono,
                  fontSize: 11,
                  color: PALETTE.faint,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                free and open source
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 6, marginBottom: 4 }}>
              <span
                style={{
                  fontFamily: sans,
                  fontSize: 'clamp(56px, 8vw, 72px)',
                  fontWeight: 500,
                  color: PALETTE.ink,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                $0
              </span>
              <span style={{ fontFamily: sans, fontSize: 17, color: PALETTE.muted }}>forever</span>
            </div>
            <p style={{ fontFamily: mono, fontSize: 12, color: PALETTE.faint, marginBottom: 28 }}>
              Apache-2.0
            </p>
            <div
              className="home-pricing-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
              }}
            >
              {ossFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                    fontFamily: sans,
                    fontSize: 14,
                    color: PALETTE.ink,
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: 4,
                      height: 4,
                      marginTop: 8,
                      background: PALETTE.ink,
                      flexShrink: 0,
                    }}
                  />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What stays free / What Originary adds */}
        <section
          className="home-section"
          style={{
            maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
            margin: '0 auto',
            padding: `0 ${PAGE_PAD} 80px ${PAGE_PAD}`,
          }}
        >
          <div
            className="home-pricing-grid"
            style={{
              maxWidth: 760,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 0,
              border: `1px solid ${PALETTE.hairline}`,
              background: PALETTE.paper,
            }}
          >
            <div className="home-card" style={{ padding: 28, borderRight: `1px solid ${PALETTE.hairline}` }}>
              <Mono
                size={11}
                color={PALETTE.faint}
                style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}
              >
                what stays free
              </Mono>
              <h3 style={{ ...sectionHead, fontSize: 20, marginTop: 12 }}>PEAC Protocol</h3>
              <p style={{ fontFamily: sans, fontSize: 14, color: PALETTE.muted, lineHeight: 1.7, marginTop: 10, marginBottom: 0 }}>
                PEAC Protocol, self-hosted verification, open-source packages, and conformant implementations remain free and portable.
              </p>
            </div>
            <div className="home-card" style={{ padding: 28 }}>
              <Mono
                size={11}
                color={PALETTE.faint}
                style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}
              >
                what originary adds
              </Mono>
              <h3 style={{ ...sectionHead, fontSize: 20, marginTop: 12 }}>Originary Verify</h3>
              <p style={{ fontFamily: sans, fontSize: 14, color: PALETTE.muted, lineHeight: 1.7, marginTop: 10, marginBottom: 0 }}>
                A scoped verification pilot, deployment and integration support, and help assembling portable record bundles for teams moving one workflow into production.
              </p>
            </div>
          </div>
        </section>

        {/* Enterprise support */}
        <section
          className="home-section"
          style={{
            maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
            margin: '0 auto',
            padding: `0 ${PAGE_PAD} 80px ${PAGE_PAD}`,
          }}
        >
          <div
            className="home-card"
            style={{
              maxWidth: 760,
              margin: '0 auto',
              padding: 40,
              background: PALETTE.paper,
              border: `1px solid ${PALETTE.hairline}`,
            }}
          >
            <Mono
              size={11}
              color={PALETTE.muted}
              style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}
            >
              implementation support
            </Mono>
            <h2 style={{ ...sectionHead, marginTop: 14 }}>Originary Verify and implementation support</h2>
            <p style={{ fontFamily: mono, fontSize: 12, color: PALETTE.faint, marginTop: 8, marginBottom: 24 }}>
              Scoped pilots and deployment support for self-hosted verification
            </p>
            <p style={{ fontFamily: sans, fontSize: 15, color: PALETTE.ink, lineHeight: 1.7, marginBottom: 14 }}>
              For teams that need help issuing and verifying signed records in a specific production workflow. If another party has already asked for verification your logs cannot provide, this is the right path.
            </p>
            <p style={{ fontFamily: sans, fontSize: 14, color: PALETTE.muted, lineHeight: 1.7, marginBottom: 28 }}>
              Best fit: API platforms handling agent traffic, MCP server operators, gateway and agent-infrastructure teams, and security or engineering reviewers.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
              {enterpriseFeatures.map(({ feature, detail }, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span
                    style={{
                      display: 'inline-block',
                      width: 4,
                      height: 4,
                      marginTop: 8,
                      background: PALETTE.ink,
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div style={{ fontFamily: sans, fontSize: 14, fontWeight: 500, color: PALETTE.ink }}>{feature}</div>
                    <div style={{ fontFamily: sans, fontSize: 13, color: PALETTE.muted, marginTop: 4 }}>{detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                padding: 20,
                background: PALETTE.bg,
                border: `1px solid ${PALETTE.hairline}`,
                marginBottom: 16,
              }}
            >
              <Mono
                size={11}
                color={PALETTE.faint}
                style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}
              >
                best for
              </Mono>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
                {[
                  'API platform teams',
                  'MCP server operators',
                  'Gateway and agent-infrastructure teams',
                  'Security and engineering reviewers',
                ].map((item) => (
                  <span key={item} style={pill}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                padding: 20,
                background: PALETTE.bg,
                border: `1px solid ${PALETTE.hairline}`,
                marginBottom: 24,
              }}
            >
              <Mono
                size={11}
                color={PALETTE.faint}
                style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}
              >
                deployment model
              </Mono>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
                {[
                  'Self-hosted (your infrastructure)',
                  'Supported self-host',
                ].map((item) => (
                  <span key={item} style={pill}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <p style={{ fontFamily: sans, fontSize: 13, color: PALETTE.muted, lineHeight: 1.7, marginBottom: 24 }}>
              Not the right fit yet: If you are still evaluating, start with the open-source packages. They are free and unlimited.
            </p>

            <a
              href="mailto:contact@originary.xyz?subject=Implementation%20support"
              style={btnPrimary}
            >
              Discuss a pilot
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 5h8M5.5 1.5L9 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" />
              </svg>
            </a>
          </div>
        </section>

        {/* Comparison table */}
        <section
          className="home-section"
          style={{
            maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
            margin: '0 auto',
            padding: `0 ${PAGE_PAD} 80px ${PAGE_PAD}`,
          }}
        >
          <div id="pilot" style={{ maxWidth: 760, margin: '0 auto 72px', scrollMarginTop: 96 }}>
            <h2 style={{ ...sectionHead, textAlign: 'center', marginBottom: 12 }}>Originary Verification Pilot</h2>
            <p style={{ textAlign: 'center', fontSize: 15, lineHeight: 1.6, color: PALETTE.muted, margin: '0 0 28px' }}>
              A fixed-scope engagement that instruments one production workflow end to end. Scoped quote.
            </p>
            <div className="home-card" style={{ background: PALETTE.paper, border: `1px solid ${PALETTE.hairline}`, padding: '26px 28px' }}>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px 28px' }}>
                {[
                  'One production workflow',
                  'One signed-record profile',
                  'One issuer and key model',
                  'One verifier or evidence bundle',
                  'Integration and threat-boundary review',
                  'Deployment recommendation',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'baseline', fontSize: 14.5, lineHeight: 1.55, color: PALETTE.ink }}>
                    <span aria-hidden style={{ color: PALETTE.success, fontFamily: 'var(--font-plex-mono)', fontSize: 13 }}>+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center', marginTop: 24, paddingTop: 20, borderTop: `1px solid ${PALETTE.hairline}` }}>
                <a
                  href="/contact"
                  className="home-arrow-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 18px', background: PALETTE.ink, color: PALETTE.paper, textDecoration: 'none', fontSize: 14, fontWeight: 500 }}
                >
                  Start a pilot
                </a>
                <span style={{ fontFamily: 'var(--font-plex-mono)', fontSize: 12, color: PALETTE.faint }}>
                  scoped quote · your infrastructure or supported deployment
                </span>
              </div>
            </div>
          </div>

          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2 style={{ ...sectionHead, textAlign: 'center', marginBottom: 32 }}>Two ways to deploy</h2>
            <div
              className="home-card"
              style={{
                background: PALETTE.paper,
                border: `1px solid ${PALETTE.hairline}`,
                overflowX: 'auto',
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: sans, fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: `1px solid ${PALETTE.rule}` }}>
                    <th style={{ textAlign: 'left', padding: 14, color: PALETTE.muted, fontWeight: 500 }}>&nbsp;</th>
                    <th style={{ textAlign: 'center', padding: 14, color: PALETTE.ink, fontWeight: 500 }}>OSS only</th>
                    <th style={{ textAlign: 'center', padding: 14, color: PALETTE.ink, fontWeight: 500 }}>With Originary support</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([feature, oss, supported], idx) => (
                    <tr key={idx} style={{ borderBottom: idx < comparisonRows.length - 1 ? `1px solid ${PALETTE.hairline}` : 'none' }}>
                      <td style={{ padding: 14, color: PALETTE.ink, fontWeight: 500 }}>{feature}</td>
                      <td style={{ padding: 14, textAlign: 'center', color: PALETTE.muted }}>{oss}</td>
                      <td style={{ padding: 14, textAlign: 'center', color: PALETTE.muted }}>{supported}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="home-section"
          style={{
            maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
            margin: '0 auto',
            padding: `0 ${PAGE_PAD} 80px ${PAGE_PAD}`,
          }}
        >
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2 style={{ ...sectionHead, marginBottom: 28 }}>Common questions</h2>
            <div
              style={{
                border: `1px solid ${PALETTE.hairline}`,
                background: PALETTE.paper,
              }}
            >
              {faqs.map(({ q, a }, idx) => (
                <details
                  key={q}
                  style={{
                    padding: '22px 28px',
                    borderBottom: idx < faqs.length - 1 ? `1px solid ${PALETTE.hairline}` : 'none',
                  }}
                >
                  <summary
                    style={{
                      fontFamily: sans,
                      fontSize: 16,
                      fontWeight: 500,
                      cursor: 'pointer',
                      color: PALETTE.ink,
                      listStyle: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 16,
                    }}
                  >
                    {q}
                    <span style={{ fontFamily: mono, color: PALETTE.faint, fontSize: 16, flexShrink: 0 }}>+</span>
                  </summary>
                  <p style={{ fontFamily: sans, fontSize: 14, color: PALETTE.muted, lineHeight: 1.7, margin: '14px 0 0 0' }}>
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* OSS commitment */}
        <section
          className="home-section"
          style={{
            maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
            margin: '0 auto',
            padding: `0 ${PAGE_PAD} 112px ${PAGE_PAD}`,
          }}
        >
          <div
            className="home-card"
            style={{
              maxWidth: 760,
              margin: '0 auto',
              padding: 36,
              background: PALETTE.paper,
              border: `1px solid ${PALETTE.rule}`,
              textAlign: 'center',
            }}
          >
            <Mono
              size={11}
              color={PALETTE.muted}
              style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}
            >
              open source, no exceptions
            </Mono>
            <h3 style={{ ...sectionHead, fontSize: 24, marginTop: 14 }}>
              The protocol stays open.
            </h3>
            <p
              style={{
                fontFamily: sans,
                fontSize: 15,
                color: PALETTE.muted,
                lineHeight: 1.7,
                maxWidth: 560,
                margin: '14px auto 24px auto',
              }}
            >
              The protocol specification, reference implementations, and all core tooling are {FACTS.license} licensed. Originary provides commercial tools and support around the open protocol.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <a
                href="https://github.com/peacprotocol/peac"
                target="_blank"
                rel="noopener noreferrer"
                style={btnPrimary}
              >
                View on GitHub
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 5h8M5.5 1.5L9 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" />
                </svg>
              </a>
              <Link href="/peac" style={btnSecondary}>
                Protocol spec
              </Link>
            </div>
          </div>
        </section>
      </main>
      <HomeFooter />
      <WordmarkStream />
    </div>
  )
}

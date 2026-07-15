import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { FACTS } from '@/lib/facts'
import {
  PageShell,
  PageSection,
  Reveal,
  Stagger,
  CountUp,
  InViewClass,
  PALETTE,
  MAX_W,
  PAGE_PAD,
} from '@/components/home'
export const metadata: Metadata = {
  title: { absolute: 'About Originary | Verifiable Infrastructure for Machine Actions' },
  description:
    'Originary builds verification software for machine actions that cross company, vendor, and runtime boundaries. Publishes PEAC Protocol.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | Originary',
    description:
      'Originary builds verification software for machine actions that cross company, vendor, and runtime boundaries.',
    url: '/about',
    siteName: 'Originary',
    images: [{ url: '/og' }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About | Originary',
    description:
      'Originary builds verification software for machine actions that cross company, vendor, and runtime boundaries.',
    site: '@originaryx',
    creator: '@originaryx',
  },
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Originary',
  url: 'https://www.originary.xyz/about',
  publisher: {
    '@type': 'Organization',
    name: 'Originary',
    url: 'https://www.originary.xyz',
    description:
      'Originary builds verification software for machine actions that cross company, vendor, and runtime boundaries.',
    foundingLocation: 'Delaware, USA',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Poem, Inc.',
      legalName: 'Poem, Inc.',
    },
  },
}

const linkStyle = {
  color: PALETTE.ink,
  fontWeight: 500 as const,
}

export default function About() {
  return (
    <>
      <Script id="about-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(webPageJsonLd)}
      </Script>
      <PageShell>
        {/* Hero */}
        <section
          className="home-section"
          style={{
            maxWidth: MAX_W,
            margin: '0 auto',
            padding: `clamp(64px, 9vh, 112px) ${PAGE_PAD} clamp(48px, 7vh, 80px) ${PAGE_PAD}`,
          }}
        >
          <Reveal>
            <InViewClass className="home-eyebrow-rule" as="div">
              <span className="home-about-eyebrow">company</span>
            </InViewClass>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="home-about-h1">
              Verification software for machine actions that cross boundaries.
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="home-about-lede">
              Logs help inside one system. Counterparties need records they can
              verify independently.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <p className="home-about-body">
              Originary helps teams issue, inspect, export, and verify portable
              signed records for API calls, MCP tool runs, gateway decisions,
              provisioning events, payment workflows, and agent handoffs.
            </p>
          </Reveal>
        </section>

        <InViewClass className="home-about-divider" as="div" style={dividerWrap} />

        {/* What we build */}
        <PageSection paddingTop={32} paddingBottom={64}>
          <div className="home-about-twocol">
            <Reveal>
              <InViewClass className="home-eyebrow-rule" as="div">
                <span className="home-about-eyebrow">what we build</span>
              </InViewClass>
              <h2 className="home-about-section-title" style={{ marginTop: 16 }}>
                A record that survives the boundary.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <p className="home-about-body" style={{ marginTop: 0 }}>
                  We build the software, fixtures, and reference services
                  teams use to issue and verify signed records across vendor,
                  runtime, and organizational boundaries.
                </p>
                <p className="home-about-body">
                  Records are signed with Ed25519, carried as compact JWS
                  strings, and verified offline. Issuers stay in control of
                  their data. Verifiers do not need to call back to the
                  originating system.
                </p>
                <p style={{ marginTop: 18 }}>
                  <Link
                    href="/peac"
                    className="home-link-underline home-arrow-link"
                    style={linkAction}
                  >
                    Learn about PEAC Protocol
                    <ArrowGlyph />
                  </Link>
                </p>
              </div>
            </Reveal>
          </div>
        </PageSection>

        <InViewClass className="home-about-divider" as="div" style={dividerWrap} />

        {/* Pull quote */}
        <PageSection paddingTop={32} paddingBottom={64}>
          <Reveal>
            <p className="home-about-pull" style={{ maxWidth: 820, margin: '0 auto' }}>
              Record locally. Verify across boundaries.
            </p>
          </Reveal>
        </PageSection>

        <InViewClass className="home-about-divider" as="div" style={dividerWrap} />

        {/* PEAC Protocol */}
        <PageSection paddingTop={32} paddingBottom={64}>
          <div className="home-about-twocol">
            <Reveal>
              <InViewClass className="home-eyebrow-rule" as="div">
                <span className="home-about-eyebrow">open source</span>
              </InViewClass>
              <h2 className="home-about-section-title" style={{ marginTop: 16 }}>
                Originary publishes PEAC Protocol.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <p className="home-about-body" style={{ marginTop: 0 }}>
                  PEAC is an open-source protocol for verifiable interaction records.
                  Apache-2.0 licensed and implementation-independent. Anyone
                  can self-host, issue, and verify records without an
                  Originary account or managed service.
                </p>
                <p className="home-about-body">
                  Originary builds practical software, services, and support
                  around the protocol for teams that need production
                  deployment, verification workflows, and audit-ready
                  exports.
                </p>

                <div className="home-stat-strip" aria-label="Current PEAC release facts">
                  <div className="home-stat-cell">
                    <div className="home-stat-num">{FACTS.currentVersion}</div>
                    <div className="home-stat-label">latest release</div>
                    <div className="home-stat-note">on npm {FACTS.currentDistTag}</div>
                  </div>
                  <div className="home-stat-cell">
                    <div className="home-stat-num">
                      <CountUp value={FACTS.testsCount} />
                    </div>
                    <div className="home-stat-label">tests passing</div>
                    <div className="home-stat-note">across all packages</div>
                  </div>
                  <div className="home-stat-cell">
                    <div className="home-stat-num">
                      <CountUp value={FACTS.conformanceRequirements} />
                    </div>
                    <div className="home-stat-label">conformance ids</div>
                    <div className="home-stat-note">across 32 sections</div>
                  </div>
                  <div className="home-stat-cell">
                    <div className="home-stat-num">
                      <CountUp value={FACTS.publishedPackageCount} />
                    </div>
                    <div className="home-stat-label">published packages</div>
                    <div className="home-stat-note">on npm</div>
                  </div>
                </div>

                <p style={{ marginTop: 22, display: 'flex', gap: 18, flexWrap: 'wrap' }}>
                  <a
                    href="https://github.com/peacprotocol/peac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home-link-underline home-arrow-link"
                    style={linkAction}
                  >
                    View on GitHub
                    <ArrowGlyph />
                  </a>
                  <Link
                    href="/downloads"
                    className="home-link-underline home-arrow-link"
                    style={linkAction}
                  >
                    Downloads
                    <ArrowGlyph />
                  </Link>
                </p>
              </div>
            </Reveal>
          </div>
        </PageSection>

        <InViewClass className="home-about-divider" as="div" style={dividerWrap} />

        {/* Company */}
        <PageSection paddingTop={32} paddingBottom={64}>
          <div className="home-about-twocol">
            <Reveal>
              <InViewClass className="home-eyebrow-rule" as="div">
                <span className="home-about-eyebrow">company</span>
              </InViewClass>
              <h2 className="home-about-section-title" style={{ marginTop: 16 }}>
                Poem, Inc.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <p className="home-about-body" style={{ marginTop: 0 }}>
                  Poem, Inc. is a Delaware corporation. Originary is a brand of
                  Poem, Inc. Under the Originary brand, Poem develops Originary
                  Verify and maintains PEAC Protocol, an Apache-2.0 open-source
                  project.
                </p>
                <p className="home-about-body">
                  We are a small team. We work in the open where possible and
                  publish software under permissive licenses.
                </p>
              </div>
            </Reveal>
          </div>
        </PageSection>

        <InViewClass className="home-about-divider" as="div" style={dividerWrap} />

        {/* Contact */}
        <PageSection paddingTop={32} paddingBottom={112}>
          <div className="home-about-twocol">
            <Reveal>
              <InViewClass className="home-eyebrow-rule" as="div">
                <span className="home-about-eyebrow">contact</span>
              </InViewClass>
              <h2 className="home-about-section-title" style={{ marginTop: 16 }}>
                Pilots, partnerships, security, protocol.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <p className="home-about-body" style={{ marginTop: 0 }}>
                  For pilots, partnerships, security questions, or protocol
                  work, contact us at{' '}
                  <Link
                    href="mailto:contact@originary.xyz"
                    className="home-link-underline"
                    style={linkStyle}
                  >
                    contact@originary.xyz
                  </Link>
                  .
                </p>

                <Stagger
                  step={70}
                  baseDelay={60}
                  style={{ marginTop: 22, display: 'flex', flexWrap: 'wrap', gap: 20 }}
                >
                  <Link
                    href="/peac"
                    className="home-link-underline home-arrow-link"
                    style={linkAction}
                  >
                    PEAC Protocol
                    <ArrowGlyph />
                  </Link>
                  <Link
                    href="/downloads"
                    className="home-link-underline home-arrow-link"
                    style={linkAction}
                  >
                    Downloads
                    <ArrowGlyph />
                  </Link>
                  <Link
                    href="/pricing"
                    className="home-link-underline home-arrow-link"
                    style={linkAction}
                  >
                    Pricing
                    <ArrowGlyph />
                  </Link>
                  <Link
                    href="/contact"
                    className="home-link-underline home-arrow-link"
                    style={linkAction}
                  >
                    Contact
                    <ArrowGlyph />
                  </Link>
                </Stagger>
              </div>
            </Reveal>
          </div>
        </PageSection>
      </PageShell>
    </>
  )
}

const dividerWrap = { maxWidth: MAX_W, margin: '0 auto', padding: `0 ${PAGE_PAD}` }
const linkAction = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  color: PALETTE.ink,
  fontFamily: 'var(--font-plex-sans), "IBM Plex Sans", system-ui, sans-serif',
  fontSize: 15,
  fontWeight: 500,
  letterSpacing: '-0.005em',
}

function ArrowGlyph() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path
        d="M1 5h8M5.5 1.5L9 5l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  )
}

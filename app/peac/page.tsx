import type { Metadata } from 'next'
import Link from 'next/link'
import { FACTS } from '@/lib/facts'
import {
  PageShell,
  PageSection,
  SectionHeading,
  Card,
  BulletList,
  Pill,
  Button,
  CountUp,
  InViewClass,
  PALETTE,
  MAX_W,
  PAGE_PAD,
} from '@/components/home'
import { Mono } from '@/components/home/atoms/Mono'
import { VerificationBoundary } from '@/components/specimens/parts'

export const metadata: Metadata = {
  title: { absolute: 'PEAC Protocol | Open-Source Protocol for Verifiable Interaction Records' },
  description:
    'PEAC is an open-source protocol for portable signed interaction records. Issue records another party can verify without trusting the original dashboard.',
  authors: [{ name: 'Originary', url: 'https://www.originary.xyz' }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: '/peac' },
  openGraph: {
    title: 'PEAC Protocol | Originary',
    description:
      'PEAC is an open-source protocol for portable signed interaction records. Apache-2.0. Self-hostable. Offline-verifiable.',
    url: '/peac',
    siteName: 'Originary',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'PEAC Protocol | Open-source protocol for portable signed interaction records',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PEAC Protocol | Originary',
    description:
      'PEAC is an open-source protocol for portable signed interaction records. Apache-2.0. Self-hostable. Offline-verifiable.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
}

const sans = 'var(--font-plex-sans), "IBM Plex Sans", system-ui, sans-serif'
const mono = 'var(--font-plex-mono), "IBM Plex Mono", ui-monospace, monospace'

export default function PeacPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    '@id': 'https://www.originary.xyz/peac#protocol',
    name: 'PEAC Protocol',
    description:
      'Open-source protocol for portable signed interaction records. Issue, verify, and export records of automated actions across boundaries. Apache-2.0.',
    codeRepository: 'https://github.com/peacprotocol/peac',
    programmingLanguage: ['TypeScript', 'JavaScript'],
    license: 'https://www.apache.org/licenses/LICENSE-2.0',
    isAccessibleForFree: true,
    version: FACTS.currentVersion,
    author: {
      '@type': 'Organization',
      '@id': 'https://www.originary.xyz/#org',
      name: 'Originary',
      url: 'https://www.originary.xyz',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageShell>
        {/* Editorial hero: asymmetric two-column layout */}
        <section
          className="home-section"
          style={{
            maxWidth: MAX_W,
            margin: '0 auto',
            padding: `clamp(64px, 9vh, 112px) ${PAGE_PAD} clamp(40px, 6vh, 64px) ${PAGE_PAD}`,
          }}
        >
          <div className="home-peac-hero-grid" style={peacHeroGrid}>
            <div>
              <InViewClass className="home-eyebrow-rule" as="div">
                <span className="home-about-eyebrow">open source</span>
              </InViewClass>
              <h1 className="home-about-h1" style={{ marginTop: 18 }}>
                PEAC Protocol.
              </h1>
              <p
                style={{
                  fontFamily: mono,
                  fontSize: 12,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: PALETTE.muted,
                  margin: '12px 0 0 0',
                }}
              >
                by Originary
              </p>
              <p className="home-about-lede" style={{ marginTop: 24 }}>
                The open-source protocol for portable signed interaction records.
              </p>
              <p className="home-about-body" style={{ marginTop: 14, maxWidth: 560 }}>
                Systems use PEAC to issue records another party can verify
                without trusting the original dashboard. Apache-2.0,
                self-hostable, and offline-verifiable. No Originary account
                required to issue, verify, or self-host.
              </p>

              <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Button href="/#demo" primary>
                  Start a pilot
                </Button>
                <Button href="https://github.com/peacprotocol/peac" external>
                  View on GitHub
                </Button>
              </div>
              <div style={{ marginTop: 28, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Pill>Apache-2.0</Pill>
                <Pill>Self-hostable</Pill>
                <Pill>Offline-verifiable</Pill>
                <Pill>No Originary account required</Pill>
              </div>
            </div>

            {/* Right column: record-shape preview card */}
            <aside style={peacHeroAside}>
              <div className="home-card" style={peacHeroCard}>
                <div style={peacHeroCardLabel}>wire 0.2 · interaction-record+jwt</div>
                <div style={peacHeroCardLine}>
                  <span style={peacHeroCardKey}>iss</span>
                  <span style={peacHeroCardVal}>https://api.example.com</span>
                </div>
                <div style={peacHeroCardLine}>
                  <span style={peacHeroCardKey}>typ</span>
                  <span style={peacHeroCardVal}>api.request</span>
                </div>
                <div style={peacHeroCardLine}>
                  <span style={peacHeroCardKey}>policy</span>
                  <span style={peacHeroCardVal}>sha256:7c1a&hellip;</span>
                </div>
                <div style={peacHeroCardLine}>
                  <span style={peacHeroCardKey}>result</span>
                  <span style={peacHeroCardVal}>{'{ status: 200 }'}</span>
                </div>
                <div style={peacHeroCardLine}>
                  <span style={peacHeroCardKey}>sig</span>
                  <span style={peacHeroCardVal}>Ed25519:8b3e&hellip;</span>
                </div>
                <div style={peacHeroCardFoot}>
                  <span style={peacHeroCardDot} className="home-active-dot" />
                  verified offline · {FACTS.currentVersion}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <InViewClass
          className="home-about-divider"
          as="div"
          style={{ maxWidth: MAX_W, margin: '0 auto', padding: `0 ${PAGE_PAD}` }}
        />

        <PageSection paddingTop={24} paddingBottom={48}>
          <p
            style={{
              fontFamily: sans,
              fontSize: 15,
              lineHeight: 1.65,
              color: PALETTE.muted,
              margin: 0,
              maxWidth: 720,
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
              textWrap: 'pretty',
            }}
          >
            PEAC Protocol is published by Originary and distributed through GitHub and package
            registries under Apache-2.0.
          </p>
        </PageSection>

        <InViewClass
          className="home-about-divider"
          as="div"
          style={{ maxWidth: MAX_W, margin: '0 auto', padding: `0 ${PAGE_PAD}` }}
        />

        {/* 1. What PEAC is */}
        <PageSection>
          <SectionHeading
            eyebrow="what peac is"
            title="A record that survives the boundary."
            sub="PEAC defines how a system issues a signed record for an automated action so another party can verify what the issuer recorded, without trusting the original system or its dashboard."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            <Card>
              <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                signed
              </Mono>
              <h3 style={subHead}>One artifact, many signers</h3>
              <p style={body}>
                Every record is signed with Ed25519. Issuers publish their public key once. Verifiers check the
                signature offline against that key.
              </p>
            </Card>
            <Card>
              <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                portable
              </Mono>
              <h3 style={subHead}>Travels across systems</h3>
              <p style={body}>
                Records are carried as compact JWS strings or exported as bundles. They do not depend on the
                issuer&apos;s dashboard, database, or API to stay verifiable.
              </p>
            </Card>
            <Card>
              <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                open
              </Mono>
              <h3 style={subHead}>Apache-2.0</h3>
              <p style={body}>
                Originary publishes the protocol specification, reference implementations, and core tooling
                publicly on GitHub. Anyone can self-host, issue, and verify records without an Originary account
                or managed service.
              </p>
            </Card>
          </div>
        </PageSection>

        {/* 2. Current state */}
        <PageSection background={PALETTE.paper} paddingTop={80} paddingBottom={80}>
          <SectionHeading
            eyebrow="current state"
            title={`${FACTS.currentVersion} on npm ${FACTS.currentDistTag}.`}
            sub={`Released ${FACTS.currentReleaseDate}. Reference implementation, conformance fixtures, and signed-record adapters published in the open.`}
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 0,
              border: `1px solid ${PALETTE.hairline}`,
              background: PALETTE.bg,
            }}
          >
            <Stat label="latest release" value={FACTS.currentVersion} note={`released ${FACTS.currentReleaseDate}`} />
            <Stat label="tests passing" value={<CountUp value={FACTS.testsCount} />} note="across all packages" border />
            <Stat label="conformance ids" value={<CountUp value={FACTS.conformanceRequirements} />} note="across 32 sections" border />
            <Stat label="published packages" value={<CountUp value={FACTS.publishedPackageCount} />} note={`on npm ${FACTS.currentDistTag}`} border />
          </div>
        </PageSection>


        <InViewClass
          className="home-about-divider"
          as="div"
          style={{ maxWidth: MAX_W, margin: '0 auto', padding: `0 ${PAGE_PAD}` }}
        />

        {/* 3. What a record contains */}
        <PageSection>
          <SectionHeading
            eyebrow="what a record contains"
            title="One signed artifact. Six fields."
            sub="Every record carries the same skeleton: facts, policy, result, time, issuer, signature. The issuer asserts the first four; the last two prove who said so and let anyone check it."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            <Card>
              <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                action
              </Mono>
              <h3 style={subHead}>What happened</h3>
              <p style={body}>
                The boundary action. An API call, MCP tool run, gateway decision, provisioning event, or payment-related
                machine action, captured as a typed signed record with its selected facts.
              </p>
            </Card>
            <Card>
              <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                policy
              </Mono>
              <h3 style={subHead}>Under what terms</h3>
              <p style={body}>
                A digest of the policy or terms that applied at issue time. Verifiers can prove a record was issued
                under a specific version of <code style={code}>peac.txt</code> or another published policy document.
              </p>
            </Card>
            <Card>
              <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                result
              </Mono>
              <h3 style={subHead}>What returned</h3>
              <p style={body}>
                Status, digests, observed outcome. The record commits to what the issuer says happened, so a later
                review does not depend on log retention.
              </p>
            </Card>
            <Card>
              <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                time
              </Mono>
              <h3 style={subHead}>When it happened</h3>
              <p style={body}>
                Issue time and, where relevant, the observed event time. A record is datable evidence: a later review
                can place the action on a timeline without trusting anyone&apos;s clock retroactively.
              </p>
            </Card>
            <Card>
              <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                issuer
              </Mono>
              <h3 style={subHead}>Who issued it</h3>
              <p style={body}>
                The system that observed the action and signed the record, identified by its issuer URL. Keys resolve
                from the issuer&apos;s published configuration, so identity is checkable, not asserted.
              </p>
            </Card>
            <Card>
              <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                signature
              </Mono>
              <h3 style={subHead}>Who asserted it</h3>
              <p style={body}>
                Ed25519 signature over the canonical JWS signing input. Verification is offline with a public key you supply.
              </p>
            </Card>
          </div>
        </PageSection>


        <InViewClass
          className="home-about-divider"
          as="div"
          style={{ maxWidth: MAX_W, margin: '0 auto', padding: `0 ${PAGE_PAD}` }}
        />

        {/* 4. Workflows */}
        <PageSection background={PALETTE.paper} paddingTop={80} paddingBottom={80}>
          <SectionHeading
            eyebrow="workflows"
            title="One primitive, many record workflows."
            sub="PEAC composes with the systems your stack already uses. Each profile maps an existing surface to a portable signed record without replacing the runtime that produced it."
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 0,
              border: `1px solid ${PALETTE.hairline}`,
              background: PALETTE.bg,
            }}
          >
            {[
              ['API requests', 'POST / GET / scoped calls behind an issuer'],
              ['MCP tool calls', 'Tool name, policy, result digest'],
              ['A2A handoffs', 'Task ids, parent task, signature observation'],
              ['Gateway decisions', 'Routed / blocked / decided records'],
              ['Provisioning lifecycle', '10 observed event kinds'],
              ['Runtime governance', 'AGT mapper and lifecycle observation'],
              ['HTTP 402', 'Challenge / response for paid surfaces'],
              ['Commerce', 'paymentauth / MPP / ACP / x402 observations'],
            ].map(([title, sub], i) => (
              <ProfileCell key={i} title={title} sub={sub} />
            ))}
          </div>
        </PageSection>


        <InViewClass
          className="home-about-divider"
          as="div"
          style={{ maxWidth: MAX_W, margin: '0 auto', padding: `0 ${PAGE_PAD}` }}
        />

        {/* Verification boundary */}
        <PageSection>
          <SectionHeading
            eyebrow="the boundary"
            title="What a verified record does and does not establish."
          />
          <VerificationBoundary />
        </PageSection>

        <InViewClass
          className="home-about-divider"
          as="div"
          style={{ maxWidth: MAX_W, margin: '0 auto', padding: `0 ${PAGE_PAD}` }}
        />

        {/* 5. Use standalone or with Originary */}
        <PageSection>
          <SectionHeading
            eyebrow="how to adopt"
            title="Self-host the protocol or use it with Originary."
            sub="Anyone can self-host PEAC Protocol, issue records, and verify them without an Originary account or managed service. Originary publishes and maintains PEAC Protocol and also offers commercial tools and implementation support for teams running it in production."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            <Card>
              <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                self-host
              </Mono>
              <h3 style={subHead}>Apache-2.0</h3>
              <BulletList
                items={[
                  'Full protocol specification',
                  'Reference TypeScript implementation',
                  'CLI for issuance and verification',
                  'MCP server for tool-call records',
                  'No Originary account or managed service required',
                ]}
              />
              <div style={{ marginTop: 18 }}>
                <Button href="/downloads">Get the tools</Button>
              </div>
            </Card>
            <Card emphasis>
              <Mono size={11} color={PALETTE.muted} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                commercial
              </Mono>
              <h3 style={subHead}>Originary Verify</h3>
              <BulletList
                items={[
                  'Supported self-hosted issuance and verification',
                  'Bring-your-own-key signing (local or your KMS)',
                  'Audit bundle export',
                  'Implementation and rollout support',
                  'Procurement-ready record artifacts',
                ]}
              />
              <div style={{ marginTop: 18 }}>
                <Button href="/#demo" primary>
                  Start a pilot
                </Button>
              </div>
            </Card>
          </div>
        </PageSection>


        <InViewClass
          className="home-about-divider"
          as="div"
          style={{ maxWidth: MAX_W, margin: '0 auto', padding: `0 ${PAGE_PAD}` }}
        />

        {/* 6. Install */}
        <PageSection paddingBottom={112}>
          <SectionHeading
            eyebrow="install"
            title="Two lines to a verifier."
            sub="Install the public packages from the npm latest dist-tag and verify a signed record locally."
            align="center"
          />
          <Card padding={36} style={{ maxWidth: 760, margin: '0 auto' }}>
            <pre className="home-code" style={{ margin: 0 }}>
{`npx -y @peac/cli@0.16.3 verify ./record.jws --public-key ./jwks.json`}
            </pre>
            <p
              style={{
                fontFamily: sans,
                fontSize: 13,
                color: PALETTE.muted,
                margin: '18px 0 0 0',
                lineHeight: 1.6,
              }}
            >
              Or install the libraries:{' '}
              <code style={code}>@peac/protocol</code>{' '}
              <code style={code}>@peac/crypto</code>{' '}
              <code style={code}>@peac/schema</code>{' '}
              <code style={code}>@peac/mcp-server</code>
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
              <Button href="https://github.com/peacprotocol/peac" external primary>
                View on GitHub
              </Button>
              <Button href="/downloads">Downloads page</Button>
              <Link
                href="https://github.com/peacprotocol/peac/releases"
                style={{
                  fontFamily: mono,
                  fontSize: 12,
                  color: PALETTE.muted,
                  textDecoration: 'underline',
                  textDecorationColor: 'rgba(20, 17, 10, 0.30)',
                  textUnderlineOffset: 3,
                  alignSelf: 'center',
                }}
              >
                {FACTS.currentVersion} release notes
              </Link>
            </div>
          </Card>
        </PageSection>
      </PageShell>
    </>
  )
}

const subHead = {
  fontFamily: sans,
  fontSize: 18,
  fontWeight: 500,
  letterSpacing: '-0.01em',
  color: PALETTE.ink,
  margin: '12px 0 8px 0',
}

const body = {
  fontFamily: sans,
  fontSize: 14,
  lineHeight: 1.65,
  color: PALETTE.muted,
  margin: 0,
}

const code = {
  fontFamily: mono,
  fontSize: 13,
  color: PALETTE.ink,
  background: 'rgba(20, 17, 10, 0.04)',
  padding: '2px 6px',
  border: `1px solid ${PALETTE.hairline}`,
}

const peacHeroGrid = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)',
  gap: 56,
  alignItems: 'start',
} as const

const peacHeroAside = {
  position: 'relative' as const,
  minWidth: 0,
}

const peacHeroCard = {
  position: 'relative' as const,
  padding: 24,
  background: PALETTE.paper,
  border: `1px solid ${PALETTE.rule}`,
  fontFamily: mono,
  fontSize: 13,
  lineHeight: 1.7,
  color: PALETTE.ink,
}

const peacHeroCardLabel = {
  fontFamily: mono,
  fontSize: 11,
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  color: PALETTE.faint,
  paddingBottom: 14,
  marginBottom: 14,
  borderBottom: `1px solid ${PALETTE.hairline}`,
}

const peacHeroCardLine = {
  display: 'grid',
  gridTemplateColumns: '64px 1fr',
  gap: 14,
  fontFamily: mono,
  fontSize: 13,
  lineHeight: 1.75,
}

const peacHeroCardKey = {
  color: PALETTE.muted,
}

const peacHeroCardVal = {
  color: PALETTE.ink,
  overflow: 'hidden' as const,
  textOverflow: 'ellipsis' as const,
  whiteSpace: 'nowrap' as const,
}

const peacHeroCardFoot = {
  marginTop: 18,
  paddingTop: 14,
  borderTop: `1px solid ${PALETTE.hairline}`,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  fontFamily: mono,
  fontSize: 11,
  letterSpacing: '0.08em',
  textTransform: 'uppercase' as const,
  color: PALETTE.muted,
}

const peacHeroCardDot = {
  width: 6,
  height: 6,
  background: PALETTE.ink,
  borderRadius: '50%' as const,
  display: 'inline-block',
}

function Stat({
  label,
  value,
  note,
  border,
}: {
  label: string
  value: React.ReactNode
  note?: string
  border?: boolean
}) {
  return (
    <div
      style={{
        padding: '24px 24px 22px 24px',
        borderLeft: border ? `1px solid ${PALETTE.hairline}` : 'none',
      }}
    >
      <Mono size={10} color={PALETTE.faint} style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}>
        {label}
      </Mono>
      <div
        style={{
          fontFamily: sans,
          fontSize: 32,
          fontWeight: 500,
          letterSpacing: '-0.025em',
          color: PALETTE.ink,
          margin: '10px 0 4px 0',
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      {note ? (
        <div style={{ fontFamily: sans, fontSize: 12, color: PALETTE.muted }}>{note}</div>
      ) : null}
    </div>
  )
}

function ProfileCell({ title, sub }: { title: string; sub: string }) {
  return (
    <div
      className="home-tile"
      style={{
        padding: '20px 22px',
        borderRight: `1px solid ${PALETTE.hairline}`,
        borderBottom: `1px solid ${PALETTE.hairline}`,
        minHeight: 110,
        background: PALETTE.paper,
      }}
    >
      <div style={{ fontFamily: sans, fontSize: 14, fontWeight: 500, color: PALETTE.ink, marginBottom: 6 }}>
        {title}
      </div>
      <div style={{ fontFamily: mono, fontSize: 11, color: PALETTE.muted, lineHeight: 1.5 }}>
        {sub}
      </div>
    </div>
  )
}

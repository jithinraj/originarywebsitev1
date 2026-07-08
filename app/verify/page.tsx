import type { Metadata } from 'next'
import { PageShell, PageHero, PageSection, SectionHeading, Card } from '@/components/home/page-kit'
import { PALETTE } from '@/components/home/palette'
import { FACTS } from '@/lib/facts'
import {
  CodeBlock,
  StepLabel,
  CompareColumns,
  DataTable,
  InkBand,
  InkHeading,
  InkButton,
  AnchorLine,
  Terminal,
} from '@/components/specimens/parts'
import { VerifyConsole } from '@/components/specimens/VerifyConsole'

const TITLE = 'Verify a signed record: offline, no account | Originary'
const DESCRIPTION =
  "Paste a signed record and verify it in your browser. Ed25519 signature check against the issuer's key, offline by design, nothing stored. Try a sample."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'verify signed record',
    'Ed25519 signature verification',
    'JWS verification tool',
    'offline signature check',
    'verify AI agent record',
    'record verifier',
    'signed receipt verification',
  ],
  alternates: { canonical: '/verify' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.originary.xyz/verify',
    type: 'website',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary verifier' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.originary.xyz/verify#webpage',
      url: 'https://www.originary.xyz/verify',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@id': 'https://www.originary.xyz/#website' },
      breadcrumb: { '@id': 'https://www.originary.xyz/verify#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.originary.xyz/verify#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.originary.xyz' },
        { '@type': 'ListItem', position: 2, name: 'Verify', item: 'https://www.originary.xyz/verify' },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://www.originary.xyz/verify#app',
      name: 'Originary record verifier',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web',
      url: 'https://www.originary.xyz/verify',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  ],
}

const SAMPLES: Array<{ name: string; status: string; tone: 'ok' | 'deny' | 'fail'; href: string }> = [
  { name: 'api-call.jws', status: 'valid', tone: 'ok', href: '/records#api' },
  { name: 'mcp-tool-run.jws', status: 'valid', tone: 'ok', href: '/mcp#specimen' },
  { name: 'gateway-deny.jws', status: 'denied', tone: 'deny', href: '/records#gateway' },
  { name: 'payment-event.jws', status: 'valid', tone: 'ok', href: '/agentic-commerce#example' },
  { name: 'provisioning.jws', status: 'valid', tone: 'ok', href: '/records#provisioning' },
  { name: 'tampered.jws', status: 'fails', tone: 'fail', href: '/records#api' },
]

const toneColor = (t: 'ok' | 'deny' | 'fail') =>
  t === 'ok' ? PALETTE.success : t === 'deny' ? PALETTE.warn : '#9a3b2e'

export default function VerifyPage() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Verify"
        title="Check a record. No account, no chain."
        sub="Paste a record or upload a file. Verification runs against the issuer's published key: it confirms the signature, decodes the claims, and tells you exactly what passed and what it does not prove. Nothing is stored."
        display
        aside={
          <Terminal
            lines={[
              { kind: 'out', text: '$ npx -y @peac/cli verify ./record.jws --public-key ./jwks.json' },
              { kind: 'ok', text: 'Signature valid (offline)' },
              { kind: 'out', text: 'issuer  https://api.vendor.example' },
              { kind: 'out', text: 'record  POST /v1/market-data/search - 200' },
            ]}
          />
        }
        strip={['Public verifier', 'Offline by design', 'Nothing stored', 'PEAC ' + FACTS.currentVersion]}
      >
        <AnchorLine style={{ marginTop: 8 }}>Logs stay local. Signed records travel.</AnchorLine>
      </PageHero>

      {/* Console */}
      <PageSection paddingTop={8} paddingBottom={56}>
        <VerifyConsole />
      </PageSection>

      {/* Samples */}
      <PageSection paddingTop={0} paddingBottom={56}>
        <SectionHeading eyebrow="Try a sample" title="Don't have a record yet? Verify one of ours." />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 12,
          }}
        >
          {SAMPLES.map((s) => (
            <a
              key={s.name + s.href}
              href={s.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 12,
                padding: '14px 16px',
                background: PALETTE.paper,
                border: `1px solid ${PALETTE.hairline}`,
                textDecoration: 'none',
              }}
            >
              <span style={{ fontFamily: 'var(--font-plex-mono)', fontSize: 13, color: PALETTE.ink }}>{s.name}</span>
              <span
                style={{
                  fontFamily: 'var(--font-plex-mono)',
                  fontSize: 11,
                  letterSpacing: '0.04em',
                  color: toneColor(s.tone),
                }}
              >
                {s.status}
              </span>
            </a>
          ))}
        </div>
        <StepLabel>Prefer the command line?</StepLabel>
        <CodeBlock>{`pnpm dlx @peac/cli samples generate -o ./s
pnpm dlx @peac/cli verify ./s/valid/basic-record.jws --public-key ./s/bundles/sandbox-jwks.json`}</CodeBlock>
      </PageSection>

      {/* What this proves */}
      <PageSection paddingTop={56} paddingBottom={56} background={PALETTE.paper}>
        <div id="proves" style={{ scrollMarginTop: 96 }}>
          <SectionHeading eyebrow="What this proves" title="A green check is a precise claim." />
          <CompareColumns
            columns={[
              {
                heading: 'A valid result means',
                tone: 'verified',
                items: [
                  'The issuer signed these exact claims.',
                  'The record was not changed after signing.',
                  "The signing key resolves to the issuer's published keys.",
                  'Any bound digest matches the content it covers.',
                ],
              },
              {
                heading: 'It still does not mean',
                tone: 'denied',
                items: [
                  'That the issuer told the truth.',
                  'That the policy was correct or legally sufficient.',
                  'That you have seen the full payload.',
                  'That every related event was shared.',
                ],
              },
            ]}
          />
        </div>
      </PageSection>

      {/* Network behaviour */}
      <PageSection paddingTop={56} paddingBottom={80}>
        <SectionHeading
          eyebrow="Network behaviour, precisely"
          title="Three ways to verify. Different network rules."
        />
        <DataTable
          head={['How', 'Network', 'What it does']}
          rows={[
            [
              'verify --public-key',
              <span style={{ color: PALETTE.success, fontFamily: 'var(--font-plex-mono)', fontSize: 12 }}>none</span>,
              'You supply the key. The signature is checked entirely offline. No fetch, no callback.',
            ],
            [
              'verify (default)',
              <span style={{ color: PALETTE.warn, fontFamily: 'var(--font-plex-mono)', fontSize: 12 }}>may resolve key</span>,
              "Resolves the issuer's published key from its well-known config, then verifies. URL fields are locator hints only; nothing else is fetched.",
            ],
            [
              'this hosted page',
              <span style={{ color: PALETTE.warn, fontFamily: 'var(--font-plex-mono)', fontSize: 12 }}>explicit only</span>,
              'Runs in your browser. It only acts on what you paste or upload. Records are not sent to a server or stored.',
            ],
          ]}
        />
      </PageSection>

      {/* Verification profile (capabilities) */}
      <PageSection paddingTop={0} paddingBottom={80}>
        <SectionHeading
          eyebrow="Verification profile"
          title="What the verifier checks."
          sub={`Current release: PEAC ${FACTS.currentVersion}. These checks compose; the wire format (0.2) and public schema are unchanged.`}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {[
            {
              name: 'Offline by public key',
              tag: 'v0.15.1',
              body: "Verify a record with only the issuer's public key. The signature is checked entirely offline: no fetch, no callback, no account.",
            },
            {
              name: 'Ed25519 verification profile',
              tag: 'v0.16.0',
              body: 'Signatures use Ed25519 (RFC 8032) over compact JWS (RFC 7515), checked with a shared small-order denylist. Runtimes without stable Ed25519 fail closed rather than guess.',
            },
            {
              name: 'Deterministic input (I-JSON)',
              tag: 'v0.16.0',
              body: 'The JWS header and payload are validated as I-JSON (RFC 7493) before parsing. Duplicate member names, out-of-range numbers, and invalid strings are rejected, so two verifiers read the same bytes the same way.',
            },
            {
              name: 'Optional replay guard',
              tag: 'v0.16.0',
              body: 'A bounded, opt-in guard classifies an already-verified record as fresh, replayed, or outside its acceptance window. Composable; it is not wired into stateless verification.',
            },
            {
              name: 'HTTP Message Signatures',
              tag: 'v0.15.2',
              body: 'For request-shaped flows, Originary composes with RFC 9421 HTTP Message Signatures and RFC 9530 content digests computed over the raw body bytes.',
            },
            {
              name: 'Inclusion proofs',
              tag: 'v0.16.2',
              body: 'A Merkle-style set commitment over a batch of records lets a verifier check inclusion: confirm a record belongs to a published, sealed run without re-checking every other record in the set. A missing record becomes detectable too.',
            },
          ].map((c) => (
            <Card key={c.name}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
                <span style={{ fontFamily: 'var(--font-plex-sans)', fontSize: 16, fontWeight: 500, color: PALETTE.ink, letterSpacing: '-0.01em' }}>
                  {c.name}
                </span>
                <span style={{ fontFamily: 'var(--font-plex-mono)', fontSize: 10.5, letterSpacing: '0.04em', color: PALETTE.faint, whiteSpace: 'nowrap' }}>
                  {c.tag}
                </span>
              </div>
              <p style={{ fontFamily: 'var(--font-plex-sans)', fontSize: 14, lineHeight: 1.6, color: PALETTE.muted, margin: '10px 0 0' }}>
                {c.body}
              </p>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* Closing */}
      <InkBand>
        <InkHeading maxWidth="24ch">Hand a verifier link to anyone who asks for proof.</InkHeading>
        <div style={{ marginTop: 30, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <InkButton href="/records" primary>
            Browse sample records
          </InkButton>
          <InkButton href="/downloads">Get the CLI</InkButton>
        </div>
        <AnchorLine onInk style={{ marginTop: 36 }}>Logs stay local. Signed records travel.</AnchorLine>
      </InkBand>
    </PageShell>
  )
}

import type { Metadata } from 'next'
import { PageShell, PageHero, PageSection, SectionHeading, Card, PullLine, Button } from '@/components/home/page-kit'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
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
import { FlowPanel } from '@/components/specimens/FlowPanel'
import { VerifyConsole } from '@/components/specimens/VerifyConsole'

const TITLE = 'Verify a Signed Record | Originary'
const DESCRIPTION =
  'Verify an Ed25519-signed PEAC interaction record with a public key you supply. No upload, account, callback, or Originary dependency.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/verify' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.originary.xyz/verify',
    type: 'website',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary offline verification guide' }],
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
  ],
}

const SAMPLES: Array<{ name: string; href: string }> = [
  { name: 'API call record', href: '/records#api' },
  { name: 'MCP tool-run record', href: '/mcp#specimen' },
  { name: 'AI gateway decision record', href: '/records#gateway' },
  { name: 'Payment event record', href: '/agentic-commerce#example' },
  { name: 'Provisioning record', href: '/records#provisioning' },
]

export default function VerifyPage() {
  const v = FACTS.currentVersion.replace(/^v/, '')
  return (
    <PageShell>
      <Breadcrumbs current="Verify a Record" href="/verify" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Local verification"
        title="Verify a Signed Record"
        sub="Verify a signed record locally. Supply a PEAC record and the public key or JWKS you intend to trust. The verifier checks the signature and record profile without uploading the record to Originary."
        display
        aside={
          <Terminal
            lines={[
              { kind: 'out', text: `$ pnpm dlx @peac/cli@${v} verify ./record.jws --public-key ./jwks.json` },
              { kind: 'ok', text: 'Signature valid (offline).' },
            ]}
          />
        }
        strip={['Supplied key', 'Offline by design', 'Nothing uploaded', 'PEAC ' + FACTS.currentVersion]}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="#console" primary>
            Generate and verify a sample
          </Button>
          <Button href="#proves">Read the verification model</Button>
        </div>
        <AnchorLine style={{ marginTop: 20 }}>Logs stay local. Signed records travel.</AnchorLine>
      </PageHero>

      {/* Console */}
      <PageSection paddingTop={8} paddingBottom={56}>
        <div id="console" style={{ scrollMarginTop: 96 }}>
          <VerifyConsole />
        </div>
      </PageSection>

      {/* Samples */}
      <PageSection paddingTop={0} paddingBottom={56} background={PALETTE.paper}>
        <SectionHeading index="01" eyebrow="Record types" title="Browse a record type, then generate a sample to verify." />
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
              <span style={{ fontFamily: 'var(--font-plex-sans)', fontSize: 14, color: PALETTE.ink }}>{s.name}</span>
              <span style={{ fontFamily: 'var(--font-plex-mono)', fontSize: 12, color: PALETTE.faint }}>-&gt;</span>
            </a>
          ))}
        </div>
        <StepLabel>Prefer the command line?</StepLabel>
        <CodeBlock>{`pnpm dlx @peac/cli@${v} samples generate -o ./s
pnpm dlx @peac/cli@${v} verify ./s/valid/basic-record.jws --public-key ./s/bundles/sandbox-jwks.json`}</CodeBlock>
      </PageSection>

      <PullLine accent="Nothing stored.">
        No account. No callback.
      </PullLine>

      {/* What this proves */}
      <PageSection paddingTop={56} paddingBottom={56}>
        <div id="proves" style={{ scrollMarginTop: 96 }}>
          <SectionHeading index="02" eyebrow="What verification checks" title="What the verifier checked." mark="sealCheck" />
          <FlowPanel
            label="Sequence diagram: you supply a public key, the CLI checks the Ed25519 signature offline, and the result is a precise pass or a deterministic failure."
            actors={['you', 'verifier']}
            beats={[
              { kind: 'msg', dir: 'ltr', slot: 1, label: 'run the CLI with a record and a public key you supply' },
              { kind: 'evt', slot: 2, label: 'you supply the public key - offline, nothing fetched' },
              { kind: 'evt', slot: 3, label: 'Ed25519 signature and declared record structure checked - nothing stored' },
              { kind: 'rec', slot: 4, label: 'valid - the signature verifies under the public key you supplied' },
              { kind: 'chk', slot: 5, label: 'precise claim: unchanged since signing' },
            ]}
            style={{ marginBottom: 22 }}
          />
          <CompareColumns
            columns={[
              {
                heading: 'A valid result means',
                tone: 'verified',
                items: [
                  'The signature is valid under the public key you supplied.',
                  'The record was not altered after signing.',
                  'The claims decode exactly as they were signed.',
                ],
              },
              {
                heading: 'It still does not mean',
                tone: 'denied',
                items: [
                  'That the supplied key is authorized by the declared issuer.',
                  'That the policy was correct or legally sufficient.',
                  'That you have seen the full payload.',
                  'That every related event was shared.',
                ],
              },
            ]}
          />
        </div>
      </PageSection>

      {/* Network behavior */}
      <PageSection paddingTop={56} paddingBottom={80} background={PALETTE.paper}>
        <SectionHeading
          index="03"
          eyebrow="Network behavior, precisely"
          title="Supplied-key verification is offline."
        />
        <DataTable
          head={['How', 'Network', 'What it does']}
          rows={[
            [
              'verify --public-key',
              <span key="net" style={{ color: PALETTE.success, fontFamily: 'var(--font-plex-mono)', fontSize: 12 }}>none</span>,
              'You supply the public key. The signature is checked entirely offline. No fetch, no callback, nothing uploaded to Originary.',
            ],
          ]}
        />
      </PageSection>

      {/* Verification profile (capabilities) */}
      <PageSection paddingTop={0} paddingBottom={80}>
        <SectionHeading
          index="04"
          eyebrow="Verification profile"
          title="PEAC verification capabilities."
          sub={`Current release: PEAC ${FACTS.currentVersion}. These checks compose; the wire format (0.2) and public schema are unchanged.`}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
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
          <InkButton href="/contact">Start a pilot</InkButton>
        </div>
        <AnchorLine onInk style={{ marginTop: 36 }}>Logs stay local. Signed records travel.</AnchorLine>
      </InkBand>
    </PageShell>
  )
}

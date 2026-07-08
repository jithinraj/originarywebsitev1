import type { Metadata } from 'next'
import { PageShell, PageHero, PageSection, SectionHeading, Card, Pill, Button } from '@/components/home/page-kit'
import { PALETTE } from '@/components/home/palette'
import {
  RecordCard,
  CodeBlock,
  Terminal,
  StepLabel,
  SpecimenGrid,
  MarkerList,
  InkBand,
  InkHeading,
  InkButton,
  AnchorLine,
  Dim,
} from '@/components/specimens/parts'
import { FlowPanel } from '@/components/specimens/FlowPanel'

const TITLE = 'Agentic commerce records: verify agent payments | Originary'
const DESCRIPTION =
  'Payment rails prove value moved. Signed records prove what an AI agent payment was for: the action, mandate, result, and time, verifiable offline by any counterparty.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'agentic commerce',
    'AI agent payments',
    'x402',
    'agent payment receipts',
    'verify agent purchases',
    'payment evidence records',
    'usage billing disputes',
    'AI commerce audit trail',
  ],
  alternates: { canonical: '/agentic-commerce' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.originary.xyz/agentic-commerce',
    type: 'website',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary agentic commerce records' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.originary.xyz/agentic-commerce#webpage',
      url: 'https://www.originary.xyz/agentic-commerce',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@id': 'https://www.originary.xyz/#website' },
      breadcrumb: { '@id': 'https://www.originary.xyz/agentic-commerce#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.originary.xyz/agentic-commerce#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.originary.xyz' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Agentic commerce',
          item: 'https://www.originary.xyz/agentic-commerce',
        },
      ],
    },
  ],
}

const FITS = [
  'x402 paid API calls',
  'Usage-billed API events',
  'AP2 or MPP payment flows',
  'Gateway allow, deny, route, or throttle decisions',
  'Agent-to-agent commerce handoffs',
  'Refunds, disputes, and settlement observations',
  'Mandate and terms-version binding',
  'Procurement and audit-review bundles',
  'Counterparty acknowledgment records',
  'Agent spend attribution for finance and audit review',
]

export default function AgenticCommercePage() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Agentic commerce records"
        title="Payment rails prove value moved. Signed records prove what it was for."
        sub="AI agents call paid APIs, buy data, trigger usage charges, settle invoices, and delegate work. A payment confirmation shows value moved. It rarely shows what the agent was allowed to do, which policy applied, or what result came back. Originary turns those events into signed records another party can verify without your logs."
        display
        aside={
          <RecordCard
            type="payment-event"
            badge={{ kind: 'verified', label: 'verified offline' }}
            rows={[
              { label: 'Issuer', value: 'https://api.vendor.example' },
              { label: 'Event', value: 'authorized' },
              { label: 'Action', value: 'POST /v1/market-data/search' },
              { label: 'Signature', value: 'Ed25519 30cf81d6...' },
            ]}
            foot="observation record - not a payment instruction"
          />
        }
        strip={['Payment context', 'Observed settlement', 'Counterparty acknowledgment', 'Verifies offline']}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="#example" primary>
            See a paid-call record
          </Button>
          <Button href="/records">All record types</Button>
        </div>
      </PageHero>

      {/* Two truths */}
      <PageSection paddingBottom={64}>
        <SectionHeading index="01" eyebrow="Two different facts" title="The rail proves the payment. The record proves the context." />
        <SpecimenGrid>
          <Card>
            <div style={{ fontFamily: 'var(--font-plex-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: PALETTE.faint }}>
              The payment rail proves
            </div>
            <div style={{ fontFamily: 'var(--font-plex-sans)', fontSize: 26, fontWeight: 500, letterSpacing: '-0.02em', color: PALETTE.ink, margin: '10px 0 8px' }}>
              Value moved.
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: PALETTE.muted, margin: 0 }}>
              A charge was authorized, captured, or settled between two parties.
            </p>
          </Card>
          <Card emphasis style={{ borderColor: PALETTE.accent }}>
            <div style={{ fontFamily: 'var(--font-plex-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: PALETTE.accent }}>
              The signed record proves
            </div>
            <div style={{ fontFamily: 'var(--font-plex-sans)', fontSize: 26, fontWeight: 500, letterSpacing: '-0.02em', color: PALETTE.ink, margin: '10px 0 8px' }}>
              What it was for.
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: PALETTE.muted, margin: 0 }}>
              The action, the policy or mandate, the result, the issuer, and the time, bound into one verifiable artifact.
            </p>
          </Card>
        </SpecimenGrid>
      </PageSection>

      {/* The real questions */}
      <PageSection paddingTop={0} paddingBottom={64} background={PALETTE.paper}>
        <SectionHeading index="02" eyebrow="The real questions" title={'When an agent pays, "did money move?" is the easy part.'} />
        <MarkerList
          marker="check"
          items={[
            'What was requested, and which policy or mandate applied?',
            'Who or what authorized the action?',
            'What result did the vendor return?',
            'Was the action allowed, denied, captured, refunded, or disputed?',
            'Can a customer, auditor, or partner verify the record later, without your systems?',
          ]}
        />
      </PageSection>

      {/* Worked example */}
      <PageSection paddingTop={56} paddingBottom={56}>
        <div id="example" style={{ scrollMarginTop: 96 }}>
          <SectionHeading index="03" eyebrow="Worked example" title="A research agent calls a paid market-data API." />
          <FlowPanel
            label="Sequence diagram: a buyer agent calls a paid API, receives a 402 payment challenge, settlement is observed on the rail, and a signed payment-event record binds the action, terms, and payment context for later verification."
            actors={['buyer agent', 'seller api']}
            beats={[
              { kind: 'msg', dir: 'ltr', slot: 1, label: 'POST /v1/market-data/search' },
              { kind: 'msg', dir: 'rtl', slot: 2, label: '402 payment required - terms:v3' },
              { kind: 'evt', slot: 3, label: 'settlement observed on the rail - x402-style reference' },
              { kind: 'rec', slot: 4, label: 'payment-event record - action + terms + rail reference + result' },
              { kind: 'chk', slot: 5, label: 'counterparty verifies what it was for - offline' },
            ]}
            style={{ marginBottom: 22 }}
          />
          <SpecimenGrid>
            <div>
              <p style={{ fontSize: 16.5, lineHeight: 1.6, color: PALETTE.muted, margin: 0, maxWidth: '52ch' }}>
                The payment rail shows a charge was authorized. The signed record shows the endpoint, the terms that
                applied, the payment reference, the result digest, the issuer, the time, and the signature a counterparty
                can check.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: PALETTE.muted, marginTop: 14, maxWidth: '52ch' }}>
                The record preserves the payment artifact as evidence: a signed settlement receipt travels in the
                record's proofs, and settlement metadata is carried as a digest by default so raw payment headers never
                enter the signed payload.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: PALETTE.muted, marginTop: 14, maxWidth: '52ch' }}>
                x402 owns the payment flow and its payment-native signed artifacts. Originary preserves those
                artifacts inside portable records and evidence bundles that verify offline.
              </p>
              <StepLabel>Verify it</StepLabel>
              <CodeBlock>npx -y @peac/cli verify ./payment-event.jws --public-key ./jwks.json</CodeBlock>
              <StepLabel>Expected</StepLabel>
              <Terminal
                lines={[
                  { kind: 'ok', text: 'Signature valid (offline)' },
                  { kind: 'out', text: 'event: authorized - bound to POST /v1/market-data/search' },
                ]}
              />
            </div>
            <RecordCard
              type="payment-event"
              badge={{ kind: 'verified', label: 'verified offline' }}
              rows={[
                { label: 'Issuer', value: 'https://api.vendor.example' },
                { label: 'Event', value: 'authorized' },
                { label: 'Action', value: 'POST /v1/market-data/search' },
                { label: 'Agent', value: 'research-agent-v3' },
                { label: 'Policy', value: <>terms:v3 <Dim>sha256:81af2c...</Dim></> },
                { label: 'Ref', value: <Dim>rail reference - x402-style</Dim> },
                { label: 'Result', value: <>200 <Dim>sha256:9a3c1d...</Dim></> },
                { label: 'Time', value: '2026-06-12T14:08:12Z' },
                { label: 'Signature', value: 'Ed25519 30cf81d6...' },
              ]}
              foot="observation record - not a payment instruction"
              style={{ background: PALETTE.bg }}
            />
          </SpecimenGrid>
        </div>
      </PageSection>

      {/* Where it fits */}
      <PageSection paddingTop={56} paddingBottom={56} background={PALETTE.paper}>
        <SectionHeading index="04" eyebrow="Where it fits" title="Records can sit around commerce workflows you already run." />
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {FITS.map((f) => (
            <Pill key={f}>{f}</Pill>
          ))}
        </div>
        <p style={{ fontSize: 12.5, lineHeight: 1.6, color: PALETTE.faint, marginTop: 18, maxWidth: '62ch' }}>
          Examples are interoperability surfaces, not partnership claims. Originary composes with payment rails, identity
          systems, and agent protocols.
        </p>
      </PageSection>

      {/* Boundaries */}
      <PageSection paddingTop={0} paddingBottom={80}>
        <SectionHeading index="05" eyebrow="Boundaries" title="What Originary does not do." />
        <MarkerList
          marker="cross"
          items={[
            'It does not custody funds.',
            'It does not process payments.',
            'It does not replace your ledger or accounting system.',
            'It does not decide tax treatment.',
            'It does not require a chain, or another company to use Originary.',
          ]}
        />
        <p style={{ fontSize: 16.5, lineHeight: 1.6, color: PALETTE.ink, marginTop: 24, maxWidth: '54ch' }}>
          It issues, inspects, and verifies signed records from commerce workflows you already run.
        </p>
      </PageSection>

      {/* v0.16.2 */}
      <PageSection paddingTop={0} paddingBottom={64} background={PALETTE.paper}>
        <SectionHeading index="06" eyebrow="What v0.16.2 adds" title="Broader evidence coverage, same wire format." />
        <Card padding={28} style={{ maxWidth: 860 }}>
          <div
            style={{
              fontFamily: 'var(--font-plex-mono)',
              fontSize: 10.5,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: PALETTE.accent,
            }}
          >
            PEAC v0.16.2
          </div>
          <p
            style={{
              fontFamily: 'var(--font-plex-sans)',
              fontSize: 15.5,
              lineHeight: 1.6,
              color: PALETTE.ink,
              margin: '12px 0 16px',
              maxWidth: '58ch',
            }}
          >
            Portable evidence beyond single signed records: the wire format stays stable while evidence coverage
            broadens.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {[
              'Paid resource records',
              'Paid MCP tool records',
              'Linked counterparty acknowledgments',
              'Merkle commitment helpers',
              'External evidence anchoring',
              'Agent spend attribution',
              'Agent run lineage records',
              'Consented action records',
              'Runtime lineage exports',
            ].map((c) => (
              <Pill key={c}>{c}</Pill>
            ))}
          </div>
          <p
            style={{
              fontFamily: 'var(--font-plex-sans)',
              fontSize: 13,
              lineHeight: 1.6,
              color: PALETTE.muted,
              margin: '16px 0 0',
            }}
          >
            Broader evidence coverage, not a new payment rail, gateway, or policy engine.
          </p>
        </Card>
      </PageSection>

      {/* Closing */}
      <InkBand>
        <InkHeading>Start with one paid workflow where another party asks what happened.</InkHeading>
        <p style={{ fontSize: 16.5, lineHeight: 1.6, color: 'rgba(244,241,234,0.78)', maxWidth: '56ch', margin: '20px auto 0' }}>
          A paid API call, an MCP tool that triggers a charge, a gateway decision, a payment authorization, or a dispute
          review.
        </p>
        <div style={{ marginTop: 30, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <InkButton href="/contact" primary>
            Request a demo
          </InkButton>
          <InkButton href="/verify">Verify a record</InkButton>
        </div>
        <AnchorLine onInk style={{ marginTop: 36 }}>Logs stay local. Signed records travel.</AnchorLine>
      </InkBand>
    </PageShell>
  )
}

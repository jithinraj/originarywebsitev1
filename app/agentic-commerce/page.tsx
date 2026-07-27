import type { Metadata } from 'next'
import { FACTS } from '@/lib/facts'
import { PageShell, PageHero, PageSection, SectionHeading, Card, Pill, Button, PullLine } from '@/components/home/page-kit'
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
import { MarkGlyph, type MarkName } from '@/components/home/glyphs/MarkGlyphs'

const TITLE = 'Evidence for paid APIs, MCP, and agent commerce | Originary'
const DESCRIPTION =
  'Connect authorization, API or tool execution, payment-provider artifacts, service results, and delivery evidence in one independently reviewable case.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
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
          name: 'Paid APIs and agent commerce',
          item: 'https://www.originary.xyz/agentic-commerce',
        },
      ],
    },
  ],
}

const FIT_GROUPS: Array<{ label: string; mark: MarkName; items: string[] }> = [
  {
    label: 'Payment flows',
    mark: 'coin',
    items: [
      'x402 paid API calls',
      'Usage-billed API events',
      'AP2 or MPP payment flows',
      'Refunds, disputes, and settlement observations',
    ],
  },
  {
    label: 'Gateway and agent traffic',
    mark: 'valve',
    items: [
      'Gateway allow, deny, route, or throttle decisions',
      'Agent-to-agent commerce handoffs',
      'Agent spend attribution for finance and audit review',
    ],
  },
  {
    label: 'Review and evidence',
    mark: 'sealCheck',
    items: [
      'Mandate and terms-version binding',
      'Procurement and audit-review bundles',
      'Counterparty acknowledgment records',
    ],
  },
]

export default function AgenticCommercePage() {
  const v = FACTS.currentVersion.replace(/^v/, '')
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Paid services"
        title="A payment provider reports the transaction. It does not establish what the automated service delivered."
        sub="Originary connects selected authorization, service-action, result, and payment records so another party can inspect what each source reported and identify what evidence is still missing."
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
            See a paid-service dispute
          </Button>
          <Button href="/contact">Start a pilot</Button>
        </div>
      </PageHero>

      {/* Payment evidence vs service evidence */}
      <PageSection paddingBottom={64}>
        <SectionHeading index="01" eyebrow="Two different questions" title="Payment evidence and service evidence answer different questions." />
        <SpecimenGrid>
          <Card>
            <div style={{ fontFamily: 'var(--font-plex-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: PALETTE.faint }}>
              The payment system may report
            </div>
            <ul style={{ margin: '14px 0 0', padding: '0 0 0 18px', fontSize: 15, lineHeight: 1.7, color: PALETTE.muted }}>
              <li>authorization status;</li>
              <li>amount and currency;</li>
              <li>payment reference;</li>
              <li>capture, settlement, refund, or dispute state;</li>
              <li>provider timestamp.</li>
            </ul>
          </Card>
          <Card emphasis style={{ borderColor: PALETTE.accent }}>
            <div style={{ fontFamily: 'var(--font-plex-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: PALETTE.accent }}>
              The service evidence may report
            </div>
            <ul style={{ margin: '14px 0 0', padding: '0 0 0 18px', fontSize: 15, lineHeight: 1.7, color: PALETTE.muted }}>
              <li>requested endpoint or tool;</li>
              <li>applicable terms or mandate reference;</li>
              <li>input and output commitments;</li>
              <li>service result;</li>
              <li>gateway decision;</li>
              <li>available delivery observation.</li>
            </ul>
          </Card>
        </SpecimenGrid>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: PALETTE.faint, marginTop: 20, maxWidth: '62ch' }}>
          Neither source automatically proves the other source&apos;s claims. The payment provider
          reports the payment state; the service issuer reports the service context; the evidence
          case preserves and verifies the supplied artifacts.
        </p>
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
          <SectionHeading index="03" eyebrow="Worked example" title="A research agent calls a paid market-data API." mark="coin" />
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
                record&apos;s proofs, and settlement metadata is carried as a digest by default so raw payment headers never
                enter the signed payload.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: PALETTE.muted, marginTop: 14, maxWidth: '52ch' }}>
                x402 owns the payment flow and its payment-native signed artifacts. Originary preserves those
                artifacts inside portable records and evidence bundles that verify offline.
              </p>
              <StepLabel>Verify it</StepLabel>
              <CodeBlock>npx -y @peac/cli@{v} verify ./payment-event.jws --public-key ./jwks.json</CodeBlock>
              <StepLabel>Expected</StepLabel>
              <Terminal
                lines={[
                  { kind: 'ok', text: 'Signature valid (offline).' },
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

      <PullLine accent="reports the service context.">
        The payment provider reports the payment state. The service issuer
      </PullLine>

      {/* Where it fits */}
      <PageSection paddingTop={56} paddingBottom={56} background={PALETTE.paper}>
        <SectionHeading index="04" eyebrow="Where it fits" title="Records can sit around commerce workflows you already run." />
        <div className="pk-fit-groups">
          {FIT_GROUPS.map((g) => (
            <div key={g.label}>
              <span className="pk-fit-group-label">
                <MarkGlyph name={g.mark} size={13} />
                {g.label}
              </span>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {g.items.map((f) => (
                  <Pill key={f}>{f}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12.5, lineHeight: 1.6, color: PALETTE.faint, marginTop: 18, maxWidth: '62ch' }}>
          Examples are interoperability surfaces, not partnership claims. Originary composes with payment rails, identity
          systems, and agent protocols.
        </p>
      </PageSection>

      {/* Boundaries */}
      <PageSection paddingTop={0} paddingBottom={80}>
        <SectionHeading index="05" eyebrow="Boundaries" title="What Originary does not do." mark="diamond" />
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

      <PageSection paddingTop={0} paddingBottom={64} background={PALETTE.paper}>
        <SectionHeading index="06" eyebrow="Beyond single records" title="Broader evidence coverage, same wire format." />
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
            PEAC {FACTS.currentVersion}
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
            Start a pilot
          </InkButton>
          <InkButton href="/verify">Verify a record</InkButton>
        </div>
        <AnchorLine onInk style={{ marginTop: 36 }}>Logs stay local. Signed records travel.</AnchorLine>
      </InkBand>
    </PageShell>
  )
}

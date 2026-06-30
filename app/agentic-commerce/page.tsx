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

const TITLE = 'Agentic commerce records | Prove what a paid action was for'
const DESCRIPTION =
  'Payment rails prove value moved. Originary issues signed records that prove what an agent payment was for: the action, the policy or mandate, the result, the issuer, and the time, verifiable without your logs.'

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

const FITS = [
  'x402 paid API calls',
  'Usage-billed API events',
  'AP2 or MPP payment flows',
  'Gateway allow, deny, route, or throttle decisions',
  'Agent-to-agent commerce handoffs',
  'Refunds, disputes, and settlement observations',
  'Mandate and terms-version binding',
  'Procurement and audit-review bundles',
]

export default function AgenticCommercePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Agentic commerce records"
        title="Payment rails move value. Signed records prove what happened."
        sub="AI agents call paid APIs, buy data, trigger usage charges, settle invoices, and delegate work. A payment confirmation shows value moved. It rarely shows what the agent was allowed to do, which policy applied, or what result came back. Originary turns those events into signed records another party can verify without your logs."
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
        <SectionHeading eyebrow="Two different facts" title="The rail proves the payment. The record proves the context." />
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
      <PageSection paddingTop={0} paddingBottom={64}>
        <SectionHeading eyebrow="The real questions" title={'When an agent pays, "did money move?" is the easy part.'} />
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
      <PageSection paddingTop={56} paddingBottom={56} background={PALETTE.paper}>
        <div id="example" style={{ scrollMarginTop: 96 }}>
          <SectionHeading eyebrow="Worked example" title="A research agent calls a paid market-data API." />
          <SpecimenGrid>
            <div>
              <p style={{ fontSize: 16.5, lineHeight: 1.6, color: PALETTE.muted, margin: 0, maxWidth: '52ch' }}>
                The payment rail shows a charge was authorized. The signed record shows the endpoint, the terms that
                applied, the payment reference, the result digest, the issuer, the time, and the signature a counterparty
                can check.
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
      <PageSection paddingTop={56} paddingBottom={56}>
        <SectionHeading eyebrow="Where it fits" title="Records can sit around commerce workflows you already run." />
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
        <SectionHeading eyebrow="Boundaries" title="What Originary does not do." />
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
          <InkButton href="/records">See the payment record</InkButton>
        </div>
        <AnchorLine onInk style={{ marginTop: 36 }}>Logs stay local. Signed records travel.</AnchorLine>
      </InkBand>
    </PageShell>
  )
}

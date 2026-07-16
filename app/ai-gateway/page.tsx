import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell, PageHero, PageSection, SectionHeading, PullLine, Button } from '@/components/home/page-kit'
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

const TITLE = 'AI gateway audit trail and signed decision records | Originary'
const DESCRIPTION =
  'Bind the gateway-reported decision, policy context, result, and delivered-content digest to an issuer and time.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/ai-gateway' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.originary.xyz/ai-gateway',
    type: 'website',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary AI gateway records' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.originary.xyz/ai-gateway#webpage',
      url: 'https://www.originary.xyz/ai-gateway',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@id': 'https://www.originary.xyz/#website' },
      breadcrumb: { '@id': 'https://www.originary.xyz/ai-gateway#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.originary.xyz/ai-gateway#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.originary.xyz' },
        { '@type': 'ListItem', position: 2, name: 'AI gateway', item: 'https://www.originary.xyz/ai-gateway' },
      ],
    },
  ],
}

export default function AiGatewayPage() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="ai gateway"
        title="Your gateway decides. Records make each decision provable."
        sub="An AI gateway, LLM gateway, model router, or egress proxy sits at the boundary where agent and model traffic crosses company lines. Originary uses PEAC to issue a signed record for each decision the gateway already makes, so a client, auditor, or partner can verify it later, without your logs or dashboards."
        display
        aside={
          <RecordCard
            type="org.peacprotocol/access-decision"
            badge={{ kind: 'verified', label: 'verified offline' }}
            rows={[
              { label: 'Issuer', value: 'https://gateway.vendor.example' },
              { label: 'Request', value: 'tools.call market_data' },
              { label: 'Decision', value: 'allow - policy applied' },
              { label: 'Signature', value: 'Ed25519 e02d7f15...' },
            ]}
            foot="sample record - demo signature"
          />
        }
        strip={['Gateway decisions', 'Deny as evidence', 'Redaction digests', 'Spend attribution']}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="/verify" primary>
            Verify a sample record
          </Button>
          <Button href="/records">All record types</Button>
        </div>
      </PageHero>

      {/* The problem */}
      <PageSection paddingBottom={64}>
        <SectionHeading
          index="01"
          eyebrow="The problem"
          title="Gateway logs explain decisions internally. Signed records let others verify them."
          sub="A gateway log can help you debug a routing or policy decision internally. It cannot be handed to a customer, auditor, or counterparty as independent proof. A signed record answers the questions that cross the boundary:"
        />
        <MarkerList
          marker="check"
          items={[
            'Which policy version applied at that moment?',
            'Was the request allowed, denied, or modified?',
            'What content was actually delivered, versus what was produced?',
            'Which agent or workload spent what through the gateway?',
            'Can any of this be verified later, without access to our systems?',
          ]}
        />
      </PageSection>

      {/* The specimen */}
      <PageSection paddingTop={56} paddingBottom={56} background={PALETTE.paper}>
        <div id="specimen" style={{ scrollMarginTop: 96 }}>
          <SectionHeading index="02" eyebrow="The specimen" title="One gateway decision. One signed record." mark="valve" />
          <FlowPanel
            label="Sequence diagram: a request passes the gateway, one path is allowed and forwarded, another is denied by policy, and both outcomes become a signed decision record with produced and delivered digests."
            actors={['app / agent', 'gateway', 'recipient']}
            beats={[
              { kind: 'msg', dir: 'ltr', slot: 1, half: 'l', label: 'request tools.call market_data' },
              { kind: 'msg', dir: 'ltr', slot: 2, half: 'r', label: 'allow - policy applied, forwarded' },
              { kind: 'evt', slot: 3, bad: true, label: 'deny path: export_billing refused - policy_violation' },
              { kind: 'evt', slot: 4, label: 'produced + delivered digests recorded at the boundary' },
              { kind: 'rec', slot: 5, label: 'access-decision record - allow and deny both signed' },
              { kind: 'chk', slot: 6, label: 'verified without gateway logs or dashboards' },
            ]}
            style={{ marginBottom: 22 }}
          />
          <SpecimenGrid>
            <div>
              <RecordCard
                type="org.peacprotocol/access-decision"
                badge={{ kind: 'verified', label: 'verified offline' }}
                rows={[
                  { label: 'Issuer', value: 'https://gateway.vendor.example' },
                  { label: 'Request', value: 'tools.call market_data' },
                  { label: 'Decision', value: 'allow' },
                  { label: 'Policy', value: <>tool-policy:v2 <Dim>sha256:4e21b8...</Dim></> },
                  { label: 'Produced', value: <Dim>sha256:9a3c1d...</Dim> },
                  { label: 'Delivered', value: <Dim>sha256:9a3c1d...</Dim> },
                  { label: 'Time', value: '2026-07-02T09:14:31Z' },
                  { label: 'Signature', value: <>Ed25519 30cf81d6... <Dim>kid 2026-07-key1</Dim></> },
                ]}
                foot="sample record - demo signature"
                style={{ background: PALETTE.bg }}
              />
              <StepLabel>Verify on any machine, later</StepLabel>
              <Terminal
                lines={[
                  { kind: 'out', text: '$ npx -y @peac/cli@0.16.2 verify ./gateway-decision.jws --public-key ./jwks.json' },
                  { kind: 'ok', text: 'Signature valid (offline)' },
                ]}
              />
            </div>
            <div>
              <StepLabel>How it travels</StepLabel>
              <CodeBlock>{`"_meta": {
  "org.peacprotocol/receipt_ref": "sha256:f04d11...",
  "org.peacprotocol/receipt_jws": "eyJhbGciOiJFZERTQSIs..."
}`}</CodeBlock>
              <p style={{ fontSize: 13, color: PALETTE.faint, margin: '10px 0 0', lineHeight: 1.55 }}>
                Records ride existing gateway response metadata or export as bundles. They travel separately from the
                gateway that created them.
              </p>
            </div>
          </SpecimenGrid>
        </div>
      </PageSection>

      <PullLine accent="defensible.">
        Every decision,
      </PullLine>

      {/* Deny as evidence */}
      <PageSection paddingTop={56} paddingBottom={56}>
        <SectionHeading index="03" eyebrow="Deny as evidence" title="A refused or redacted request is still an event." />
        <SpecimenGrid>
          <div>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: PALETTE.muted, margin: 0, maxWidth: '54ch' }}>
              A signed deny records what was refused, when, and why: the reason code, the policy digest, and the
              timestamp travel together with the signature.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: PALETTE.muted, marginTop: 18, maxWidth: '54ch' }}>
              When the gateway redacts rather than blocks, the produced and delivered digest pair proves the content
              was modified in transit, without revealing the content itself.
            </p>
          </div>
          <RecordCard
            type="org.peacprotocol/access-decision"
            badge={{ kind: 'denied', label: 'decision: denied' }}
            rows={[
              { label: 'Issuer', value: 'https://gateway.vendor.example' },
              { label: 'Request', value: 'tools.call export_billing' },
              { label: 'Decision', value: 'denied - policy_violation' },
              { label: 'Policy', value: <>tool-policy:v2 <Dim>sha256:4e21b8...</Dim></> },
              { label: 'Time', value: '2026-07-02T09:16:04Z' },
              { label: 'Signature', value: <>Ed25519 e02d7f15... <Dim>valid</Dim></> },
            ]}
            foot="deny-as-evidence - portable evidence of a refusal"
          />
        </SpecimenGrid>
      </PageSection>

      {/* Spend attribution */}
      <PageSection paddingTop={0} paddingBottom={64} background={PALETTE.paper}>
        <SectionHeading
          index="04"
          eyebrow="Spend attribution"
          title="When agent traffic hits a metered or paid endpoint, the record binds who spent what."
          sub="Each call yields a signed record binding the caller identity or agent reference, the action, and the observed payment context. Finance and audit review can reconcile agent spend against signed records instead of one side's counters."
        />
        <RecordCard
          type="org.peacprotocol/access-decision"
          badge={{ kind: 'verified', label: 'verified offline' }}
          rows={[
            { label: 'Issuer', value: 'https://gateway.vendor.example' },
            { label: 'Agent', value: 'research-agent-v3' },
            { label: 'Request', value: 'POST /v1/market-data/search' },
            { label: 'Decision', value: 'allow - metered' },
            { label: 'Payment', value: <Dim>observed context - x402-style</Dim> },
            { label: 'Time', value: '2026-07-02T09:17:52Z' },
            { label: 'Signature', value: 'Ed25519 c9a012ff...' },
          ]}
          foot="observation record - not a payment instruction"
          style={{ maxWidth: 560 }}
        />
      </PageSection>

      {/* Fits your stack */}
      <PageSection paddingTop={56} paddingBottom={56}>
        <SectionHeading index="05" eyebrow="Fits your stack" title="Records compose with what your gateway already touches." />
        <MarkerList
          marker="number"
          items={[
            <>
              <b style={{ fontWeight: 600 }}>OpenTelemetry trace correlation:</b> records carry W3C trace
              context, so a gateway decision links to the same trace in your OpenTelemetry backend via the{' '}
              <code>peac.record.ref</code> span attribute.
            </>,
            <>
              <b style={{ fontWeight: 600 }}>In front of MCP servers:</b> per-tool-call records travel alongside the
              gateway decision. See <Link href="/mcp" style={{ color: PALETTE.ink }}>/mcp</Link>.
            </>,
            <>
              <b style={{ fontWeight: 600 }}>In front of paid or metered endpoints:</b> x402-style payment observation
              binds the decision to the call it metered. See{' '}
              <Link href="/agentic-commerce" style={{ color: PALETTE.ink }}>/agentic-commerce</Link>.
            </>,
            <>
              <b style={{ fontWeight: 600 }}>Evidence bundles:</b> export a set of decision records for a dispute or
              a review, verifiable without access to the gateway.
            </>,
          ]}
        />
      </PageSection>

      {/* Boundaries */}
      <PageSection paddingTop={0} paddingBottom={80} background={PALETTE.paper}>
        <SectionHeading index="06" eyebrow="Boundaries" title="What Originary does not do here." mark="diamond" />
        <MarkerList
          marker="cross"
          items={[
            'It does not route or proxy traffic.',
            'It does not enforce or decide policy.',
            'It does not rate-limit or gate anything.',
            'It does not replace your gateway, WAF, or observability stack.',
            'It does not move or settle money.',
            'It does not score or rank counterparties.',
          ]}
        />
        <p style={{ fontSize: 16.5, lineHeight: 1.6, color: PALETTE.ink, marginTop: 24, maxWidth: '54ch' }}>
          It records the decisions your gateway already makes.
        </p>
      </PageSection>

      {/* Closing */}
      <InkBand>
        <InkHeading maxWidth="26ch">Add records to one gateway route this week.</InkHeading>
        <p style={{ fontSize: 16.5, lineHeight: 1.6, color: 'rgba(244,241,234,0.78)', maxWidth: '54ch', margin: '20px auto 0' }}>
          Start with the route another party already asks about. We will show what the signed record should contain.
        </p>
        <div
          style={{
            fontFamily: 'var(--font-plex-mono)',
            fontSize: 10.5,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'rgba(244,241,234,0.55)',
            margin: '30px 0 8px',
          }}
        >
          Verify it
        </div>
        <CodeBlock tone="ink">npx -y @peac/cli@0.16.2 verify ./gateway-decision.jws --public-key ./jwks.json</CodeBlock>
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

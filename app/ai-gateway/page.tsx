import type { Metadata } from 'next'
import Link from 'next/link'
import { FACTS } from '@/lib/facts'
import { PageShell, PageHero, PageSection, SectionHeading, Button } from '@/components/home/page-kit'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import { PALETTE } from '@/components/home/palette'
import { RecordCard, CodeBlock, Terminal, StepLabel, SpecimenGrid, MarkerList, InkBand, InkHeading, InkButton, Dim } from '@/components/specimens/parts'
import { FlowPanel } from '@/components/specimens/FlowPanel'
import './styles.css'

const TITLE = 'AI gateway audit trail with signed decisions | Originary'
const DESCRIPTION =
  'Record AI gateway allow, deny, redact and review decisions as signed records. Security teams and customers verify them offline, without gateway log access.'

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
  ],
}

export default function AiGatewayPage() {
  const v = FACTS.currentVersion.replace(/^v/, '')
  return (
    <PageShell>
      <Breadcrumbs current="AI gateways" href="/ai-gateway" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="AI gateways"
        title="Keep a record of why the gateway allowed or blocked a request."
        sub="Record important allow, deny, redaction and review decisions so security teams or customers can inspect them later without access to the gateway's private logs."
        display
        aside={
          <dl className="gw-types" aria-label="Decisions a gateway record can carry">
            {[
              ['Allow', 'Forwarded, with the policy that applied bound to the record.'],
              ['Deny', 'Refused, with the reason code and policy digest bound.'],
              ['Redact', 'Changed in transit, with produced and delivered digests bound.'],
              ['Metered', 'Allowed against a paid endpoint, with the observed payment context.'],
            ].map(([k, d]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{d}</dd>
              </div>
            ))}
          </dl>
        }
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="#specimen" primary>
            See a gateway decision
          </Button>
          <Button href="/contact">Start a pilot</Button>
        </div>
      </PageHero>

      {/* The problem */}
      <PageSection paddingBottom={64}>
        <SectionHeading
          index="01"
          eyebrow="The problem"
          title="A customer cannot check your gateway logs."
          sub="Gateway logs help you debug a routing or policy decision, but you cannot hand them to a customer, auditor or counterparty to check for themselves. A signed record answers what they will want to know:"
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
          <SectionHeading index="02" eyebrow="The specimen" title="What the record of one gateway decision contains." mark="valve" />
          <FlowPanel
            label="Sequence diagram: a request passes the gateway, one path is allowed and forwarded, another is denied by policy, and both outcomes become a signed decision record with produced and delivered digests."
            actors={['app / agent', 'gateway', 'recipient']}
            beats={[
              { kind: 'msg', dir: 'ltr', slot: 1, half: 'l', label: 'request tools.call market_data' },
              { kind: 'msg', dir: 'ltr', slot: 2, half: 'r', label: 'allow - policy applied, forwarded' },
              { kind: 'evt', slot: 3, bad: true, label: 'deny path: export_billing refused - policy_violation' },
              { kind: 'evt', slot: 4, label: 'produced + delivered digests recorded at the gateway' },
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
                  { kind: 'out', text: `$ npx -y @peac/cli@${v} verify ./gateway-decision.jws --public-key ./jwks.json` },
                  { kind: 'ok', text: 'Signature valid (offline).' },
                ]}
              />
            </div>
            <div>
              <StepLabel>Carrier in an MCP gateway</StepLabel>
              <CodeBlock>{`"_meta": {
  "org.peacprotocol/receipt_ref": "sha256:f04d11...",
  "org.peacprotocol/receipt_jws": "eyJhbGciOiJFZERTQSIs..."
}`}</CodeBlock>
              <p style={{ fontSize: 13, color: PALETTE.faint, margin: '10px 0 0', lineHeight: 1.55 }}>
                In front of MCP servers the record rides the tool result&apos;s <code>_meta</code>. HTTP gateways carry it
                in the <code>PEAC-Receipt</code> response header. Records can also export as bundles.
              </p>
            </div>
          </SpecimenGrid>
        </div>
      </PageSection>

      {/* Deny as evidence */}
      <PageSection paddingTop={56} paddingBottom={56}>
        <SectionHeading index="03" eyebrow="Deny as evidence" title="A refused or redacted request is still an event." />
        <SpecimenGrid>
          <div>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: PALETTE.muted, margin: 0, maxWidth: '54ch' }}>
              A signed deny records what was refused, when and why. The reason code, policy digest and
              timestamp are all covered by the signature.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: PALETTE.muted, marginTop: 18, maxWidth: '54ch' }}>
              When the gateway redacts rather than blocks, the record binds the issuer-reported produced and
              delivered representations. A separate delivery observation is required to establish what the
              recipient received.
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
            foot="signed refusal - reason code and policy digest bound"
          />
        </SpecimenGrid>
      </PageSection>

      {/* Fits your stack */}
      <PageSection paddingTop={56} paddingBottom={56}>
        <SectionHeading index="05" eyebrow="Fits your stack" title="Records connect to the tools around your gateway." />
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
              gateway decision. See <Link href="/mcp" style={{ color: 'var(--link)' }}>MCP tools</Link>.
            </>,
            <>
              <b style={{ fontWeight: 600 }}>In front of paid or metered endpoints:</b> x402-style payment observation
              binds the decision to the call it metered. See{' '}
              <Link href="/agentic-commerce" style={{ color: 'var(--link)' }}>agent payments</Link>.
            </>,
            <>
              <b style={{ fontWeight: 600 }}>Evidence bundles:</b> export a set of decision records for a review,
              verifiable without access to the gateway.
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
        <InkHeading maxWidth="26ch">Start with one gateway route.</InkHeading>
        <p style={{ fontSize: 16.5, lineHeight: 1.6, color: 'var(--on-dark-muted)', maxWidth: '54ch', margin: '20px auto 0' }}>
          Pick the route a security team or customer already asks about, and we will define its record with you.
        </p>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--on-dark-muted)',
            margin: '30px 0 8px',
          }}
        >
          Verify it
        </div>
        <CodeBlock tone="ink">npx -y @peac/cli@{v} verify ./gateway-decision.jws --public-key ./jwks.json</CodeBlock>
        <div style={{ marginTop: 30, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <InkButton href="/contact" primary>
            Start a pilot
          </InkButton>
          <InkButton href="/verify">Verify a record</InkButton>
        </div>
      </InkBand>
    </PageShell>
  )
}

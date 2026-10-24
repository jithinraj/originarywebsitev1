import type { Metadata } from 'next'
import { FACTS } from '@/lib/facts'
import { PageShell, PageHero, PageSection, Button } from '@/components/home/page-kit'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import { RecordDeck } from '@/components/heroes/HeroArtifacts'
import { PALETTE } from '@/components/home/palette'
import { RecordCard, CodeBlock, Terminal, StepLabel, SpecimenGrid, SpecimenIntro, InkBand, InkHeading, InkButton, Dim } from '@/components/specimens/parts'
import { TamperDemo } from '@/components/specimens/TamperDemo'
import { VerificationLimits } from '@/components/home/VerificationLimits'
import './styles.css'

const TITLE = 'Signed record examples for AI agents and APIs | Originary'
const DESCRIPTION =
  'Example signed records for MCP tool calls, API calls, agent actions, gateway decisions, payments and provisioning, each verifiable offline with the PEAC CLI.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/records' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.originary.xyz/records',
    type: 'website',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary records gallery' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.originary.xyz/records#webpage',
      url: 'https://www.originary.xyz/records',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@id': 'https://www.originary.xyz/#website' },
      breadcrumb: { '@id': 'https://www.originary.xyz/records#breadcrumb' },
    },
  ],
}

function Specimen({
  children,
  first = false,
  id,
  background,
}: {
  children: React.ReactNode
  first?: boolean
  id?: string
  background?: string
}) {
  return (
    <PageSection paddingTop={first ? 8 : 0} paddingBottom={0} background={background}>
      <div
        id={id}
        style={{
          borderTop: `1px solid ${PALETTE.hairline}`,
          paddingTop: 48,
          paddingBottom: 56,
          scrollMarginTop: 96,
        }}
      >
        {children}
      </div>
    </PageSection>
  )
}

const RECORDS_JUMP: Array<{ href: string; label: string }> = [
  { href: '#mcp', label: 'MCP tool run' },
  { href: '#api', label: 'API call' },
  { href: '#gateway', label: 'Gateway decision' },
  { href: '#agent', label: 'Agent action' },
  { href: '#payment', label: 'Payment event' },
  { href: '#provisioning', label: 'Provisioning event' },
]

export default function RecordsPage() {
  const v = FACTS.currentVersion.replace(/^v/, '')
  return (
    <PageShell>
      <Breadcrumbs current="Records" href="/records" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Records"
        title="Signed records for the actions your software takes."
        sub="APIs, MCP tools, agents, gateways, payments and provisioning use one record format, so a single verifier checks all six."
        display
        aside={<RecordDeck />}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="/verify" primary>
            Verify a record
          </Button>
          <Button href="/evidence-case">See an evidence case</Button>
        </div>
      </PageHero>

      <PageSection paddingTop={32} paddingBottom={24}>
        <nav aria-label="Record types" className="rec-jump">
          {RECORDS_JUMP.map((it) => (
            <a key={it.href} href={it.href} className="hw-tab rec-jump-link">
              {it.label}
            </a>
          ))}
        </nav>
      </PageSection>

      {/* 01 - MCP tool run */}
      <Specimen first id="mcp">
        <SpecimenGrid>
          <SpecimenIntro
            eyebrow="MCP tool run"
            title="When an MCP tool runs, what evidence leaves the server?"
            answers={
              <>
                Answers which tool was called, under what policy, and what result digest came back.{' '}
                <a href="/mcp" style={{ color: 'var(--link)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                  Full MCP page
                </a>
                .
              </>
            }
          >
            <StepLabel>Verify it</StepLabel>
            <CodeBlock>npx -y @peac/cli@{v} verify ./mcp-tool-run.jws --public-key ./jwks.json</CodeBlock>
            <StepLabel>Tamper case</StepLabel>
            <p style={{ fontFamily: 'inherit', fontSize: 14, lineHeight: 1.6, color: PALETTE.muted, margin: '4px 0 0' }}>
              Change the tool name, the result digest, or one character of the signature and verification fails with{' '}
              <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--danger)' }}>E_INVALID_SIGNATURE</code>.
            </p>
          </SpecimenIntro>
          <RecordCard
            type="MCP tool run"
            badge={{ kind: 'verified', label: 'verified offline' }}
            rows={[
              { label: 'Issuer', value: 'https://mcp.vendor.example' },
              { label: 'Tool', value: 'tools.call search_docs' },
              { label: 'Policy', value: <>tool-policy:v2 <Dim>sha256:4e21b8...</Dim></> },
              { label: 'Result', value: <>ok <Dim>sha256:9a3c1d...</Dim></> },
              { label: 'Time', value: '2026-06-12T14:08:11Z' },
              { label: 'Signature', value: 'Ed25519 7d40e2c9...' },
            ]}
            foot="carried in MCP response metadata - verifiable without the server"
          />
        </SpecimenGrid>
      </Specimen>

      {/* 02 - API call (interactive tamper demo) */}
      <Specimen id="api" background={PALETTE.paper}>
        <TamperDemo
          eyebrow="API call"
          title="Show what your API reported, without opening your logs."
          answers="Answers which endpoint was called, which terms applied, and what result the API returned."
          command={`npx -y @peac/cli@${v} verify ./api-call.jws --public-key ./jwks.json`}
          recordType="API call"
          rows={[
            { label: 'Issuer', value: 'https://api.vendor.example' },
            { label: 'Action', value: 'POST /v1/market-data/search' },
            { label: 'Policy', value: <>terms:v3 <Dim>sha256:81af2c...</Dim></> },
            { label: 'Result', value: <>200 <Dim>sha256:9a3c1d...</Dim></> },
            { label: 'Time', value: '2026-06-12T14:08:11Z' },
            { label: 'Signature', value: 'Ed25519 b2c1a4e8...' },
          ]}
          foot="sample record - demo signature"
          payload={`{
  "iss": "https://api.vendor.example",
  "action": "POST /v1/market-data/search",
  "policy": { "ref": "terms:v3", "digest": "sha256:81af2c..." },
  "result": { "status": 200, "digest": "sha256:9a3c1d..." },
  "occurred_at": "2026-06-12T14:08:11Z"
}`}
        />
      </Specimen>

      {/* 03 - Gateway decision (deny as evidence) */}
      <Specimen id="gateway">
        <SpecimenGrid>
          <SpecimenIntro
            eyebrow="Gateway decision"
            title="A refused request can still be recorded."
            answers="Answers what the gateway decided before a request was routed, throttled or refused. A denied call still gets a signed record, so reviewers can see what was refused without reading your gateway logs."
          >
            <StepLabel>Verify it</StepLabel>
            <CodeBlock>npx -y @peac/cli@{v} verify ./gateway-deny.jws --public-key ./jwks.json</CodeBlock>
            <StepLabel>Expected</StepLabel>
            <Terminal
              lines={[
                { kind: 'ok', text: 'Signature valid (offline).' },
              ]}
            />
          </SpecimenIntro>
          <RecordCard
            type="Gateway decision"
            badge={{ kind: 'denied', label: 'decision: denied' }}
            rows={[
              { label: 'Issuer', value: 'https://gateway.vendor.example' },
              { label: 'Request', value: 'tools.call export_billing' },
              { label: 'Policy', value: <>tool-policy:v2 <Dim>sha256:4e21b8...</Dim></> },
              { label: 'Result', value: 'denied - policy_violation' },
              { label: 'Time', value: '2026-06-12T14:10:40Z' },
              { label: 'Signature', value: <>Ed25519 e02d7f15... <Dim>valid</Dim></> },
            ]}
            foot="signed refusal - verifiable like any other record"
          />
        </SpecimenGrid>
      </Specimen>

      {/* 04 - Agent action */}
      <Specimen id="agent" background={PALETTE.paper}>
        <SpecimenGrid>
          <SpecimenIntro
            eyebrow="Agent action"
            title="What did the agent do, and what was it bound to?"
            answers="Answers which agent acted, which input digests, and which mandate or policy version the action was bound to."
          >
            <StepLabel>Verify it</StepLabel>
            <CodeBlock>npx -y @peac/cli@{v} verify ./agent-action.jws --public-key ./jwks.json</CodeBlock>
            <StepLabel>Tamper case</StepLabel>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: PALETTE.muted, margin: '4px 0 0' }}>
              Swap the mandate digest for a newer version after the fact and the record still shows the digest that was
              actually bound at signing time.
            </p>
          </SpecimenIntro>
          <RecordCard
            type="Agent action"
            badge={{ kind: 'verified', label: 'verified offline' }}
            rows={[
              { label: 'Issuer', value: 'https://runtime.vendor.example' },
              { label: 'Agent', value: 'research-agent-v3' },
              { label: 'Action', value: 'summarize_filing' },
              { label: 'Input', value: <Dim>sha256:c41b09...</Dim> },
              { label: 'Policy', value: <>mandate:v2 <Dim>sha256:5fe013...</Dim></> },
              { label: 'Time', value: '2026-06-12T14:09:02Z' },
              { label: 'Signature', value: 'Ed25519 91bc44a0...' },
            ]}
            foot="sample record - demo signature"
          />
        </SpecimenGrid>
      </Specimen>

      {/* 05 - Payment event */}
      <Specimen id="payment">
        <SpecimenGrid>
          <SpecimenIntro
            eyebrow="Payment event"
            title="Tie a payment to the action and mandate it paid for."
            answers={
              <>
                Answers what a payment was tied to. The payment provider reports value movement; the record binds the
                action, the mandate, and the observed payment state to one signed artifact.{' '}
                <a href="/agentic-commerce" style={{ color: 'var(--link)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                  Paid APIs and agent commerce page
                </a>
                .
              </>
            }
          >
            <StepLabel>Verify it</StepLabel>
            <CodeBlock>npx -y @peac/cli@{v} verify ./payment-event.jws --public-key ./jwks.json</CodeBlock>
            <StepLabel>Tamper case</StepLabel>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: PALETTE.muted, margin: '4px 0 0' }}>
              Point the record at a different payment reference after settlement and the original reference stays bound
              under the signature.
            </p>
          </SpecimenIntro>
          <RecordCard
            type="Payment event"
            badge={{ kind: 'verified', label: 'verified offline' }}
            rows={[
              { label: 'Issuer', value: 'https://api.vendor.example' },
              { label: 'Event', value: 'authorized' },
              { label: 'Action', value: 'POST /v1/market-data/search' },
              { label: 'Ref', value: <Dim>rail reference - x402-style</Dim> },
              { label: 'Mandate', value: <Dim>sha256:77ab90...</Dim> },
              { label: 'Time', value: '2026-06-12T14:08:12Z' },
              { label: 'Signature', value: 'Ed25519 30cf81d6...' },
            ]}
            foot="observation record - not a payment instruction - no funds custody"
          />
        </SpecimenGrid>
      </Specimen>

      {/* 06 - Provisioning event */}
      <Specimen id="provisioning" background={PALETTE.paper}>
        <SpecimenGrid>
          <SpecimenIntro
            eyebrow="Provisioning event"
            title="Who changed what, and which system says so."
            answers={
              <>
                Answers which account, resource, credential, or subscription event occurred, and who issued
                it. Useful long after dashboards and sessions are gone.{' '}
                <a
                  href="/provisioning-records"
                  style={{ color: 'var(--link)', textDecoration: 'underline', textUnderlineOffset: 3 }}
                >
                  Full provisioning page
                </a>
                .
              </>
            }
          >
            <StepLabel>Verify it</StepLabel>
            <CodeBlock>npx -y @peac/cli@{v} verify ./provisioning-event.jws --public-key ./jwks.json</CodeBlock>
            <StepLabel>Tamper case</StepLabel>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: PALETTE.muted, margin: '4px 0 0' }}>
              Changing a later export does not alter the issuance time and event details bound by
              the signature.
            </p>
          </SpecimenIntro>
          <RecordCard
            type="Provisioning event"
            badge={{ kind: 'verified', label: 'verified offline' }}
            rows={[
              { label: 'Issuer', value: 'https://ci.vendor.example' },
              { label: 'Event', value: 'credential.rotated' },
              { label: 'Resource', value: 'deploy-key-7' },
              { label: 'Actor', value: 'release-pipeline' },
              { label: 'Time', value: '2026-06-12T03:00:00Z' },
              { label: 'Signature', value: 'Ed25519 4ab2c7e1...' },
            ]}
            foot="sample record - demo signature"
          />
        </SpecimenGrid>
      </Specimen>

      {/* Closing */}
      <VerificationLimits />

      <InkBand>
        <InkHeading maxWidth="24ch">Verify any of these yourself.</InkHeading>
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

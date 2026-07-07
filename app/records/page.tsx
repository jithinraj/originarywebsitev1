import type { Metadata } from 'next'
import { FACTS } from '@/lib/facts'
import { PageShell, PageHero, PageSection } from '@/components/home/page-kit'
import { PALETTE } from '@/components/home/palette'
import {
  RecordCard,
  CodeBlock,
  Terminal,
  StepLabel,
  SpecimenGrid,
  SpecimenIntro,
  Legend,
  InkBand,
  InkHeading,
  InkButton,
  AnchorLine,
  Dim,
} from '@/components/specimens/parts'
import { TamperDemo } from '@/components/specimens/TamperDemo'

const TITLE = 'Records | Six workflows, one signed record primitive'
const DESCRIPTION =
  'A gallery of portable signed records for API calls, MCP tool runs, agent actions, gateway decisions, payments, and provisioning. Each verifies offline with one command.'

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

function Specimen({ children, first = false }: { children: React.ReactNode; first?: boolean }) {
  return (
    <PageSection paddingTop={first ? 8 : 0} paddingBottom={0}>
      <div style={{ borderTop: `1px solid ${PALETTE.hairline}`, paddingTop: 48, paddingBottom: 56 }}>
        {children}
      </div>
    </PageSection>
  )
}

export default function RecordsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Record gallery"
        title="Six workflows. One record primitive."
        sub="Every record below carries the same skeleton: facts, policy, result, time, issuer, signature. Read one and you can read them all, and each verifies offline with a single command. Records can also be linked: an approval to the execution it authorized, an acknowledgment to the record it references, a run summary sealing a set, so a sequence becomes verifiable, not just a single event."
      >
        <Legend items={['facts', 'policy', 'result', 'time', 'issuer', 'signature']} />
        <AnchorLine style={{ marginTop: 26 }}>Logs stay local. Signed records travel.</AnchorLine>
      </PageHero>

      {/* 01 - API call (interactive tamper demo) */}
      <Specimen first>
        <TamperDemo
          eyebrow="01 - API call"
          title="Prove what your API did, without opening your logs."
          answers="Answers which endpoint was called, which terms applied, and what result the API returned."
          command="npx -y @peac/cli verify ./api-call.jws --public-key ./jwks.json"
          recordType="basic-record"
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

      {/* 02 - MCP tool run */}
      <Specimen>
        <SpecimenGrid>
          <SpecimenIntro
            eyebrow="02 - MCP tool run"
            title="When an MCP tool runs, proof can leave the server."
            answers={
              <>
                Answers which tool was called, under what policy, and what result digest came back.{' '}
                <a href="/mcp" style={{ color: PALETTE.success, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                  Full MCP page
                </a>
                .
              </>
            }
          >
            <StepLabel>Verify it</StepLabel>
            <CodeBlock>npx -y @peac/cli verify ./mcp-tool-run.jws --public-key ./jwks.json</CodeBlock>
            <StepLabel>Tamper case</StepLabel>
            <p style={{ fontFamily: 'inherit', fontSize: 14, lineHeight: 1.6, color: PALETTE.muted, margin: '4px 0 0' }}>
              Change the tool name, the result digest, or one character of the signature and verification fails with{' '}
              <code style={{ fontFamily: 'var(--font-plex-mono)', color: PALETTE.warn }}>E_INVALID_SIGNATURE</code>.
            </p>
          </SpecimenIntro>
          <RecordCard
            type="mcp-tool-run"
            badge={{ kind: 'verified', label: 'verified offline' }}
            rows={[
              { label: 'Issuer', value: 'https://mcp.vendor.example' },
              { label: 'Tool', value: 'tools.call search_docs' },
              { label: 'Policy', value: <>tool-policy:v2 <Dim>sha256:4e21b8...</Dim></> },
              { label: 'Result', value: <>ok <Dim>sha256:9a3c1d...</Dim></> },
              { label: 'Time', value: '2026-06-12T14:08:11Z' },
              { label: 'Signature', value: 'Ed25519 7d40e2c9...' },
            ]}
            foot="carried in MCP response metadata - travels separately from the server"
          />
        </SpecimenGrid>
      </Specimen>

      {/* 03 - Agent action */}
      <Specimen>
        <SpecimenGrid>
          <SpecimenIntro
            eyebrow="03 - Agent action"
            title="What did the agent do, and what was it bound to?"
            answers="Answers which agent acted, which input digests, and which mandate or policy version the action was bound to."
          >
            <StepLabel>Verify it</StepLabel>
            <CodeBlock>npx -y @peac/cli verify ./agent-action.jws --public-key ./jwks.json</CodeBlock>
            <StepLabel>Tamper case</StepLabel>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: PALETTE.muted, margin: '4px 0 0' }}>
              Swap the mandate digest for a newer version after the fact and the record still shows the digest that was
              actually bound at signing time.
            </p>
          </SpecimenIntro>
          <RecordCard
            type="full-record"
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

      {/* 04 - Gateway decision (deny as evidence) */}
      <Specimen>
        <SpecimenGrid>
          <SpecimenIntro
            eyebrow="04 - Gateway decision"
            title="A deny is evidence too."
            answers="Answers what happened at the boundary before a request was routed, throttled, or refused. A denied call is still a signed, verifiable event: reviewers see what was refused without reading your gateway logs."
          >
            <StepLabel>Verify it</StepLabel>
            <CodeBlock>npx -y @peac/cli verify ./gateway-deny.jws --public-key ./jwks.json</CodeBlock>
            <StepLabel>Expected</StepLabel>
            <Terminal
              lines={[
                { kind: 'ok', text: 'Signature valid (offline)' },
                { kind: 'out', text: 'decision: denied - the signature is valid, the answer was no' },
              ]}
            />
          </SpecimenIntro>
          <RecordCard
            type="org.peacprotocol/access-decision"
            badge={{ kind: 'denied', label: 'decision: denied' }}
            rows={[
              { label: 'Issuer', value: 'https://gateway.vendor.example' },
              { label: 'Request', value: 'tools.call export_billing' },
              { label: 'Policy', value: <>tool-policy:v2 <Dim>sha256:4e21b8...</Dim></> },
              { label: 'Result', value: 'denied - policy_violation' },
              { label: 'Time', value: '2026-06-12T14:10:40Z' },
              { label: 'Signature', value: <>Ed25519 e02d7f15... <Dim>valid</Dim></> },
            ]}
            foot="deny-as-evidence - the refusal itself is portable proof"
          />
        </SpecimenGrid>
      </Specimen>

      {/* 05 - Payment event */}
      <Specimen>
        <SpecimenGrid>
          <SpecimenIntro
            eyebrow="05 - Payment event"
            title="Payment rails move value. Records prove context."
            answers={
              <>
                Answers what a payment was tied to. The rail proves value moved; the record binds the action, the
                mandate, and the observed state to one signed artifact.{' '}
                <a href="/agentic-commerce" style={{ color: PALETTE.success, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                  Agentic commerce page
                </a>
                .
              </>
            }
          >
            <StepLabel>Verify it</StepLabel>
            <CodeBlock>npx -y @peac/cli verify ./payment-event.jws --public-key ./jwks.json</CodeBlock>
            <StepLabel>Tamper case</StepLabel>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: PALETTE.muted, margin: '4px 0 0' }}>
              Point the record at a different payment reference after settlement and the original reference stays bound
              under the signature.
            </p>
          </SpecimenIntro>
          <RecordCard
            type="payment-event"
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
      <Specimen>
        <SpecimenGrid>
          <SpecimenIntro
            eyebrow="06 - Provisioning event"
            title="Who changed what, and which system says so."
            answers="Answers which account, resource, credential, or subscription event occurred, and who issued it. Useful long after dashboards and sessions are gone."
          >
            <StepLabel>Verify it</StepLabel>
            <CodeBlock>npx -y @peac/cli verify ./provisioning-event.jws --public-key ./jwks.json</CodeBlock>
            <StepLabel>Tamper case</StepLabel>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: PALETTE.muted, margin: '4px 0 0' }}>
              Backdate the rotation in a spreadsheet all you want: the signed time in the record is the time the issuer
              asserted.
            </p>
          </SpecimenIntro>
          <RecordCard
            type="event-time-record"
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
      <InkBand>
        <InkHeading>Generate these yourself in one command.</InkHeading>
        <div style={{ maxWidth: 760, margin: '28px auto 0', textAlign: 'left' }}>
          <CodeBlock tone="ink">{`pnpm dlx @peac/cli samples generate -o ./s
pnpm dlx @peac/cli verify ./s/valid/basic-record.jws --public-key ./s/bundles/sandbox-jwks.json`}</CodeBlock>
        </div>
        <p style={{ fontFamily: 'var(--font-plex-mono)', fontSize: 12, color: '#7fa98c', marginTop: 18 }}>
          Signature valid (offline) - PEAC {FACTS.currentVersion}
        </p>
        <div style={{ marginTop: 34, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <InkButton href="/verify" primary>
            Verify a record
          </InkButton>
          <InkButton href="/peac">Read the protocol</InkButton>
        </div>
      </InkBand>
    </PageShell>
  )
}

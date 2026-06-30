import type { Metadata } from 'next'
import { PageShell, PageHero, PageSection, SectionHeading, Button } from '@/components/home/page-kit'
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

const TITLE = 'MCP signed records | Portable proof for tool calls'
const DESCRIPTION =
  'When an MCP tool runs, the transcript stays inside the server. Originary uses PEAC to issue signed records for tool calls, gateway decisions, and result digests that any client or auditor can verify without your logs.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/mcp' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.originary.xyz/mcp',
    type: 'website',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary MCP signed records' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og'] },
}

export default function McpPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="MCP signed records"
        title="When an MCP tool runs, what proof leaves the server?"
        sub="MCP connects agents to tools. The server sees everything; the transcript stays inside it. Originary uses PEAC to issue signed records for tool calls, gateway decisions, and result digests, so a client, auditor, or partner can verify the run without your logs."
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="#specimen" primary>
            See a tool-run record
          </Button>
          <Button href="/records">All six workflows</Button>
        </div>
      </PageHero>

      {/* The problem */}
      <PageSection paddingBottom={64}>
        <SectionHeading
          eyebrow="The problem"
          title="A transcript is not portable proof."
          sub="An MCP server log can help you debug a tool run. It cannot be handed to another party as something they can independently check. A signed record answers the questions that cross the boundary:"
        />
        <MarkerList
          marker="check"
          items={[
            'Which tool was called, with which parameter digest?',
            'Which policy or tool definition applied at that moment?',
            'Was the call allowed, denied, or modified?',
            'What result digest came back?',
            'Who issued the record, and can it be verified without the server?',
          ]}
        />
      </PageSection>

      {/* The specimen */}
      <PageSection paddingTop={56} paddingBottom={56} background={PALETTE.paper} className="" >
        <div id="specimen" style={{ scrollMarginTop: 96 }}>
          <SectionHeading eyebrow="The specimen" title="One tool run. One signed record." />
          <SpecimenGrid>
            <div>
              <RecordCard
                type="mcp-tool-run"
                badge={{ kind: 'verified', label: 'verified offline' }}
                rows={[
                  { label: 'Issuer', value: 'https://mcp.vendor.example' },
                  { label: 'Tool', value: 'tools.call search_docs' },
                  { label: 'Params', value: <Dim>sha256:c41b09...</Dim> },
                  { label: 'Policy', value: <>tool-policy:v2 <Dim>sha256:4e21b8...</Dim></> },
                  { label: 'Result', value: <>ok <Dim>sha256:9a3c1d...</Dim></> },
                  { label: 'Time', value: '2026-06-12T14:08:11Z' },
                  { label: 'Signature', value: <>Ed25519 7d40e2c9... <Dim>kid 2026-06-key1</Dim></> },
                ]}
                foot="sample record - demo signature"
                style={{ background: PALETTE.bg }}
              />
              <StepLabel>How it travels</StepLabel>
              <CodeBlock>{`"_meta": {
  "org.peacprotocol/receipt_ref": "sha256:f04d11...",
  "org.peacprotocol/receipt_jws": "eyJhbGciOiJFZERTQSIs..."
}`}</CodeBlock>
              <p style={{ fontSize: 13, color: PALETTE.faint, margin: '10px 0 0', lineHeight: 1.55 }}>
                Records ride existing MCP response metadata or export as bundles. They travel separately from the server
                that created them.
              </p>
            </div>
            <div>
              <StepLabel>Verify on any machine, later</StepLabel>
              <Terminal
                lines={[
                  { kind: 'out', text: '$ npx -y @peac/cli verify ./mcp-tool-run.jws --public-key ./jwks.json' },
                  { kind: 'ok', text: 'Signature valid (offline)' },
                  { kind: 'out', text: 'issuer  https://mcp.vendor.example' },
                  { kind: 'out', text: 'tool    search_docs - allowed' },
                  { kind: 'out', text: '$ # now edit one byte of the record and retry' },
                  { kind: 'out', text: '$ npx -y @peac/cli verify ./mcp-tool-run.tampered.jws --public-key ./jwks.json' },
                  { kind: 'err', text: 'E_INVALID_SIGNATURE' },
                ]}
              />
              <StepLabel>Two ways tampering shows up</StepLabel>
              <MarkerList
                marker="number"
                items={[
                  <>
                    <b style={{ fontWeight: 600 }}>Edited record:</b> any change after signing breaks the Ed25519
                    signature. Verification fails loudly.
                  </>,
                  <>
                    <b style={{ fontWeight: 600 }}>Swapped content:</b> the record binds a content digest. If the content
                    you were handed does not hash to the digest in a validly signed record, the mismatch is caught at
                    extraction.
                  </>,
                ]}
              />
            </div>
          </SpecimenGrid>
        </div>
      </PageSection>

      {/* Deny as evidence */}
      <PageSection paddingTop={56} paddingBottom={56}>
        <SectionHeading eyebrow="Deny as evidence" title="A refused tool call is still an event." />
        <SpecimenGrid>
          <div>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: PALETTE.muted, margin: 0, maxWidth: '54ch' }}>
              When a gateway or server refuses a tool call, the refusal can be signed too: the requested tool, the policy
              that denied it, the reason class, the time, the issuer. Reviewers get evidence of what was refused without
              reading server logs.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: PALETTE.muted, marginTop: 18 }}>
              The signature is valid. The answer was no. Both facts travel together.
            </p>
          </div>
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
            foot="deny-as-evidence - portable proof of a refusal"
          />
        </SpecimenGrid>
      </PageSection>

      {/* Boundaries */}
      <PageSection paddingTop={0} paddingBottom={80}>
        <SectionHeading eyebrow="Boundaries" title="What Originary does not do here." />
        <MarkerList
          marker="cross"
          items={[
            'It does not run your MCP server.',
            'It does not choose which tools are safe.',
            'It does not replace MCP auth.',
            'It does not require your users to have an Originary account.',
            'It does not need your raw logs.',
          ]}
        />
        <p style={{ fontSize: 16.5, lineHeight: 1.6, color: PALETTE.ink, marginTop: 24, maxWidth: '54ch' }}>
          It gives your MCP workflow a portable signed record.
        </p>
      </PageSection>

      {/* Closing */}
      <InkBand>
        <InkHeading maxWidth="24ch">Add records to one MCP tool this week.</InkHeading>
        <p style={{ fontSize: 16.5, lineHeight: 1.6, color: 'rgba(244,241,234,0.78)', maxWidth: '54ch', margin: '20px auto 0' }}>
          Start with the tool another party already asks about. We will show what the signed record should contain.
        </p>
        <div style={{ marginTop: 30, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <InkButton href="/contact" primary>
            Request a demo
          </InkButton>
          <InkButton href="/records">See all record types</InkButton>
        </div>
        <p style={{ marginTop: 36 }}>
          <AnchorLine onInk>Logs stay local. Signed records travel.</AnchorLine>
        </p>
      </InkBand>
    </PageShell>
  )
}

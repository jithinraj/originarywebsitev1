import type { Metadata } from 'next'
import { FACTS } from '@/lib/facts'
import { PageShell, PageHero, PageSection, SectionHeading, Button } from '@/components/home/page-kit'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import { PALETTE } from '@/components/home/palette'
import { RecordCard, CodeBlock, Terminal, StepLabel, SpecimenGrid, MarkerList, InkBand, InkHeading, InkButton, Dim } from '@/components/specimens/parts'
import { FlowPanel } from '@/components/specimens/FlowPanel'
import './styles.css'

const TITLE = 'Signed audit records for MCP tool calls | Originary'
const DESCRIPTION =
  'Sign a record of each important MCP tool call: tool, parameter digest, policy and result. Customers and partners verify it offline, without your server logs.'

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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.originary.xyz/mcp#webpage',
      url: 'https://www.originary.xyz/mcp',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@id': 'https://www.originary.xyz/#website' },
      breadcrumb: { '@id': 'https://www.originary.xyz/mcp#breadcrumb' },
    },
  ],
}

export default function McpPage() {
  const v = FACTS.currentVersion.replace(/^v/, '')
  return (
    <PageShell>
      <Breadcrumbs current="MCP tools" href="/mcp" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="MCP tools"
        title="Keep a verifiable record of important MCP tool calls."
        sub="When a tool changes data, sends something, spends money or triggers another system, create a signed record of the call and reported result that can be checked later."
        display
        aside={
          <div>
            <CodeBlock tone="ink">{`"_meta": {
  "org.peacprotocol/receipt_ref": "sha256:f04d11...",
  "org.peacprotocol/receipt_jws": "eyJhbGciOiJFZERTQSIs..."
}`}</CodeBlock>
            <p style={{ fontSize: 13.5, color: PALETTE.muted, margin: '12px 0 0', lineHeight: 1.55 }}>
              The record rides the tool result&apos;s <code>_meta</code>. Hosts that do not know PEAC ignore it; the
              tool&apos;s own result is untouched.
            </p>
          </div>
        }
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="#specimen" primary>
            See a tool-call record
          </Button>
          <Button href="/how-it-works#s-mcp">How MCP records work</Button>
        </div>
      </PageHero>

      {/* The problem */}
      <PageSection paddingBottom={64}>
        <SectionHeading
          index="01"
          eyebrow="The problem"
          title="An MCP transcript is hard to hand to a customer."
          sub="A transcript lives in the operator's system, where a customer or partner cannot check it. A signed record answers the questions they will ask:"
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
          <SectionHeading index="02" eyebrow="The specimen" title="What the record of one tool call contains." mark="link" />
          <FlowPanel
            label="Sequence diagram: an MCP client calls a tool, the result returns with a signed record riding response metadata, and any party verifies the record offline later."
            actors={['mcp client', 'tool server']}
            beats={[
              { kind: 'msg', dir: 'ltr', slot: 1, label: 'tools.call search_docs - args sha256:c41b09' },
              { kind: 'msg', dir: 'rtl', slot: 2, label: 'result ok - record rides _meta (receipt_jws)' },
              { kind: 'rec', slot: 3, label: 'mcp-tool-run record - tool + params digest + result digest' },
              { kind: 'evt', slot: 4, label: 'the record can be checked without the server that created it' },
              { kind: 'chk', slot: 5, label: 'verified later, offline, on any machine' },
            ]}
            style={{ marginBottom: 22 }}
          />
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
              <p style={{ fontSize: 13, color: PALETTE.faint, margin: '10px 0 0', lineHeight: 1.55 }}>
                Paid MCP tool records compose the same way: the record binds the tool name, an args digest, and
                the observed payment receipt digest, and is carried in the tool result metadata.
              </p>
            </div>
            <div>
              <StepLabel>Verify on any machine, later</StepLabel>
              <Terminal
                lines={[
                  { kind: 'out', text: `$ npx -y @peac/cli@${v} verify ./mcp-tool-run.jws --public-key ./jwks.json` },
                  { kind: 'ok', text: 'Signature valid (offline).' },
                  { kind: 'out', text: '$ # now edit one byte of the record and retry' },
                  { kind: 'out', text: `$ npx -y @peac/cli@${v} verify ./mcp-tool-run.tampered.jws --public-key ./jwks.json` },
                  { kind: 'err', text: 'Verification failed: Ed25519 signature verification failed' },
                  { kind: 'err', text: '   Code: E_INVALID_SIGNATURE' },
                ]}
              />
              <StepLabel>Two ways tampering shows up</StepLabel>
              <MarkerList
                marker="number"
                items={[
                  <>
                    <b style={{ fontWeight: 600 }}>Edited record:</b> any change after signing breaks the Ed25519
                    signature, so verification fails.
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

      {/* Evidence case and refusals: one line each, linked */}
      <PageSection paddingTop={56} paddingBottom={56}>
        <dl className="mcp-more">
          <div>
            <dt>Several sources, one case</dt>
            <dd>
              Tool definition, approval, gateway decision, invocation and result can be bundled for a reviewer.{' '}
              <a href="/evidence-case">See an evidence case</a>.
            </dd>
          </div>
          <div>
            <dt>Refusals are records too</dt>
            <dd>
              A denied tool call can be signed: the tool, the policy, the reason and the time.{' '}
              <a href="/ai-gateway">See a gateway decision</a>.
            </dd>
          </div>
        </dl>
      </PageSection>

      {/* Boundaries */}
      <PageSection paddingTop={0} paddingBottom={80} background={PALETTE.paper}>
        <SectionHeading index="05" eyebrow="Boundaries" title="What Originary does not do here." mark="diamond" />
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
          It adds signed records to the tool calls you choose.
        </p>
      </PageSection>

      {/* Closing */}
      <InkBand>
        <InkHeading maxWidth="24ch">Start with one MCP tool.</InkHeading>
        <p style={{ fontSize: 16.5, lineHeight: 1.6, color: 'var(--on-dark-muted)', maxWidth: '54ch', margin: '20px auto 0' }}>
          Pick the tool a customer or partner already asks about, and we will work out its record with you.
        </p>
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

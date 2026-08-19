import type { Metadata } from 'next'
import { PageShell, PageHero, PageSection, SectionHeading, Button, PullLine } from '@/components/home/page-kit'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import { PALETTE } from '@/components/home/palette'
import { FACTS } from '@/lib/facts'
import {
  RecordCard,
  Terminal,
  StepLabel,
  SpecimenGrid,
  MarkerList,
  DataTable,
  InkBand,
  InkHeading,
  InkButton,
  AnchorLine,
  Dim,
} from '@/components/specimens/parts'
import { FlowPanel } from '@/components/specimens/FlowPanel'
import { MarkGlyph } from '@/components/home/glyphs/MarkGlyphs'

const TITLE = 'Originary Verification Pilot | Cross-Boundary Evidence'
const DESCRIPTION =
  'Issue signed records where actions happen, verify them under an explicit key policy, and assemble a bounded evidence case for another party.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/product' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.originary.xyz/product',
    type: 'website',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary Verification Pilot' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.originary.xyz/product#webpage',
      url: 'https://www.originary.xyz/product',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@id': 'https://www.originary.xyz/#website' },
      breadcrumb: { '@id': 'https://www.originary.xyz/product#breadcrumb' },
    },
  ],
}

const MODULES = [
  {
    mark: 'target' as const,
    title: 'Issue',
    body: 'Create a bounded signed record at the API, MCP, gateway, runtime, or payment boundary that directly observed the action.',
  },
  {
    mark: 'sealCheck' as const,
    title: 'Verify',
    body: 'Validate record structure, signatures, and disclosed-content bindings under a supplied key or an explicit expected-issuer policy.',
  },
  {
    mark: 'diamond' as const,
    title: 'Assess',
    body: 'Separate established claims from missing, conflicting, and unevaluated evidence.',
  },
  {
    mark: 'link' as const,
    title: 'Hand off',
    body: 'Export the records, native artifacts, verification results, and timeline for a customer, partner, auditor, or incident reviewer.',
  },
]

const RECEIVES = [
  'case manifest',
  'selected PEAC records',
  'preserved native artifacts or references',
  'verification-key and issuer-policy information',
  'machine-readable verification results',
  'human-readable timeline',
  'established, missing, conflicting, and unevaluated findings',
  'integrity digests for the exported case',
]

const PILOT_DELIVERABLES = [
  'workflow and trust-boundary map',
  'issuer and key-policy design',
  'working record issuance',
  'independent verification path',
  'one evidence-case export',
  'threat and non-issuance analysis',
  'deployment recommendation',
]

export default function ProductPage() {
  const v = FACTS.currentVersion.replace(/^v/, '')
  return (
    <PageShell>
      <Breadcrumbs current="Verification Pilot" href="/product" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Verification pilot"
        title="Add verifiable records to one real workflow."
        sub="Pick an agent, API, MCP tool or gateway action your team already needs to review. Originary helps you issue the record, verify it and hand it to the people who need it."
        display
        aside={
          <RecordCard
            type="mcp-tool-run"
            badge={{ kind: 'verified', label: 'verified offline' }}
            rows={[
              { label: 'Issuer', value: 'https://api.vendor.example' },
              { label: 'Action', value: 'POST /v1/market-data/search' },
              { label: 'Policy', value: <>terms:v3 <Dim>sha256:4e21b8...</Dim></> },
              { label: 'Result', value: <>200 <Dim>sha256:9a3c1d...</Dim></> },
              { label: 'Signature', value: 'Ed25519 7d40e2c9...' },
            ]}
            foot="sample record - demo signature"
          />
        }
        strip={['Issue', 'Verify', 'Assess', 'Hand off', 'PEAC ' + FACTS.currentVersion]}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="/evidence-case" primary>
            See an evidence case
          </Button>
          <Button href="/contact">Start a pilot</Button>
        </div>
        <AnchorLine style={{ marginTop: 26 }}>Logs stay local. Signed records travel.</AnchorLine>
      </PageHero>

      {/* Modules */}
      <PageSection paddingBottom={64}>
        <SectionHeading
          index="01"
          eyebrow="The product system"
          title="Issue, verify, assess, hand off."
          sub="Four modules cover the full evidence path. Each works alone; together they turn a workflow into something another party can check."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {MODULES.map((m, i) => (
            <div key={m.title} style={{ border: `1px solid ${PALETTE.hairline}`, background: PALETTE.paper, padding: '22px 22px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-plex-mono)', fontSize: 11, letterSpacing: '0.12em', color: '#5a5346' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span aria-hidden style={{ color: '#8a8172', display: 'inline-flex' }}>
                  <MarkGlyph name={m.mark} size={18} />
                </span>
              </div>
              <h3 style={{ fontSize: 21, letterSpacing: '-0.014em', color: PALETTE.ink, margin: '10px 0 8px', fontWeight: 500 }}>{m.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: PALETTE.muted, margin: 0 }}>{m.body}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PullLine accent="the system that made it.">
        Evidence that outlives
      </PullLine>

      {/* What the recipient receives */}
      <PageSection paddingTop={56} paddingBottom={56} background={PALETTE.paper}>
        <SectionHeading index="02" eyebrow="The output" title="What the recipient receives." />
        <MarkerList marker="check" items={RECEIVES} />
        <p style={{ fontSize: 13, lineHeight: 1.6, color: PALETTE.faint, margin: '16px 0 0', maxWidth: '62ch' }}>
          An evidence case is a product artifact. It is not a new PEAC wire type.
        </p>
      </PageSection>

      {/* Worked flow */}
      <PageSection paddingTop={56} paddingBottom={56}>
        <SectionHeading index="03" eyebrow="The worked flow" title="One action, end to end." />
        <FlowPanel
          label="Sequence diagram: a workflow performs an action, a signed record is issued at the boundary, the record travels to a counterparty, and it verifies offline while an evidence case collects related records for review."
          actors={['your workflow', 'counterparty']}
          beats={[
            { kind: 'msg', dir: 'ltr', slot: 1, label: 'action happens - api call, tool run, payment, deploy' },
            { kind: 'rec', slot: 2, label: 'signed record issued at the boundary - facts + policy + result + time' },
            { kind: 'msg', dir: 'ltr', slot: 3, label: 'record travels - carrier, export, or evidence case' },
            { kind: 'evt', slot: 4, label: 'verified offline - signature, issuer, digests' },
            { kind: 'chk', slot: 5, label: 'evidence case ready for dispute, audit, or review' },
          ]}
          style={{ marginBottom: 22 }}
        />
        <SpecimenGrid>
          <div>
            <StepLabel>Verify on any machine, later</StepLabel>
            <Terminal
              lines={[
                { kind: 'out', text: `$ npx -y @peac/cli@${v} verify ./record.jws --public-key ./jwks.json` },
                { kind: 'ok', text: 'Signature valid (offline).' },
              ]}
            />
          </div>
          <div>
            <StepLabel>What verification checks</StepLabel>
            <MarkerList
              marker="check"
              items={[
                'The issuer signed exactly these claims.',
                'The record was not changed after signing.',
                'Bound digests match the supplied content they cover.',
                'The record states which policy and result the issuer reported as applicable.',
              ]}
            />
            <p style={{ fontSize: 13, lineHeight: 1.6, color: PALETTE.faint, margin: '12px 0 0', maxWidth: '58ch' }}>
              Verification establishes integrity and internal consistency of the supplied evidence. It does not
              independently prove omitted events or external real-world truth.
            </p>
          </div>
        </SpecimenGrid>
      </PageSection>

      {/* Deployment and keys */}
      <PageSection paddingTop={56} paddingBottom={56} background={PALETTE.paper}>
        <SectionHeading
          index="04"
          eyebrow="Deployment and data boundaries"
          title="Your infrastructure, your keys, your records."
          sub="Open source is free and self-hosted. The verification pilot adds integration help under agreement, not a data hand-over."
        />
        <DataTable
          head={['Mode', 'Where it runs', 'What Originary handles']}
          rows={[
            ['Open source', 'Your infrastructure', 'Nothing. Apache-2.0 code, your keys, your records.'],
            ['Verification pilot', 'Your infrastructure', 'Integration guidance, design, and support for the agreed engagement.'],
          ]}
        />
        <div style={{ marginTop: 28 }}>
          <StepLabel>Key resolution modes</StepLabel>
          <DataTable
            head={['Mode', 'Network', 'Use case']}
            rows={[
              ['Strict offline', 'None. Record plus a supplied public key or JWKS.', 'Audit, air-gapped verification'],
              ['Explicit resolution', 'Caller-authorized fetch of issuer config and JWKS.', 'Interactive tools and services'],
              ['Cached resolution', 'Optional refresh under cache, expiry, and revocation policy.', 'Production verifiers'],
            ]}
          />
        </div>
      </PageSection>

      {/* Pilot + PEAC relationship */}
      <PageSection paddingTop={56} paddingBottom={80}>
        <SectionHeading
          index="05"
          eyebrow="Start"
          title="One consequential workflow, implemented end to end."
          sub="The Originary Verification Pilot is a fixed-scope implementation engagement for one workflow, one issuer model, one verification path, and one external evidence recipient."
        />
        <MarkerList marker="check" items={PILOT_DELIVERABLES} />
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
          <Button href="/pricing" primary>
            Plans and pilot
          </Button>
          <Button href="/records">All six record types</Button>
          <Button href="/peac">PEAC Protocol</Button>
        </div>
        <p style={{ fontSize: 13.5, lineHeight: 1.65, color: PALETTE.faint, maxWidth: '62ch', marginTop: 22 }}>
          Poem, Inc. is the Delaware corporation. Originary&trade; is its software and developer-tools brand. Originary
          Verify names the issue, verify, assess, and hand-off workflow that Originary implements through the
          Verification Pilot, built on PEAC Protocol: Apache-2.0 open-source software published and maintained by
          Originary that defines the record format and verification model. PEAC can be implemented and self-hosted
          independently, and verification does not depend on an Originary-hosted service.
        </p>
      </PageSection>

      <InkBand>
        <InkHeading>Put a signed record on one workflow this week.</InkHeading>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(244, 241, 234, 0.75)', maxWidth: '52ch', margin: '0 auto 26px' }}>
          Start with the workflow another party already asks about. We will show what the signed record should contain.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <InkButton href="/contact" primary>
            Start a pilot
          </InkButton>
          <InkButton href="/verify">Verify a sample</InkButton>
        </div>
        <AnchorLine onInk style={{ marginTop: 30 }}>
          Logs stay local. Signed records travel.
        </AnchorLine>
      </InkBand>
    </PageShell>
  )
}

import type { Metadata } from 'next'
import { PageShell, PageHero, PageSection, SectionHeading, Button } from '@/components/home/page-kit'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import { PALETTE } from '@/components/home/palette'
import { FACTS } from '@/lib/facts'
import { Terminal, StepLabel, SpecimenGrid, MarkerList, DataTable, InkBand, InkHeading, InkButton } from '@/components/specimens/parts'
import { FlowPanel } from '@/components/specimens/FlowPanel'

const TITLE = 'Verification Pilot for agent and API records | Originary'
const DESCRIPTION =
  'A fixed-scope pilot that adds signed records to one agent, API, MCP or gateway workflow, verifies them offline and hands an evidence case to your reviewer.'

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
    out: 'signed record',
    title: 'Issue',
    body: 'Sign a record in the API, MCP server, gateway, runtime or payment system that directly observed the action.',
  },
  {
    mark: 'sealCheck' as const,
    out: 'verification report',
    title: 'Verify',
    body: 'Validate record structure, signatures, and disclosed-content bindings under a supplied key or an explicit expected-issuer policy.',
  },
  {
    mark: 'diamond' as const,
    out: 'established, missing and conflicting findings',
    title: 'Assess',
    body: 'Separate established claims from missing, conflicting, and unevaluated evidence.',
  },
  {
    mark: 'link' as const,
    out: 'exported evidence case',
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
          <div className="pd-case">
            <p className="pd-case-head">
              <span>Evidence case</span>
              <span>what the recipient opens</span>
            </p>
            <ol className="pd-case-list" role="list">
              {RECEIVES.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ol>
          </div>
        }
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="/evidence-case" primary>
            See an evidence case
          </Button>
          <Button href="/contact">Start a pilot</Button>
        </div>
      </PageHero>

      {/* Modules */}
      <PageSection paddingBottom={88}>
        <SectionHeading
          eyebrow="The product system"
          title="Four stages, from the action to the reviewer."
          sub="You can use any stage on its own. Used together, they give another party a workflow they can check."
        />
        <ol className="hw-steps" role="list">
          {MODULES.map((m, i) => (
            <li key={m.title}>
              <span className="hw-step-n">{String(i + 1).padStart(2, '0')}</span>
              <p className="hw-step-t">{m.title}</p>
              <p className="hw-step-b">{m.body}</p>
              <code className="hw-step-m">&rarr; {m.out}</code>
            </li>
          ))}
        </ol>
      </PageSection>

      {/* Worked flow */}
      <PageSection paddingTop={56} paddingBottom={56}>
        <SectionHeading index="03" eyebrow="The worked flow" title="One action, end to end." />
        <FlowPanel
          label="Sequence diagram: a workflow performs an action, a signed record is issued at the boundary, the record travels to a counterparty, and it verifies offline while an evidence case collects related records for review."
          actors={['your workflow', 'counterparty']}
          beats={[
            { kind: 'msg', dir: 'ltr', slot: 1, label: 'action happens - api call, tool run, payment, deploy' },
            { kind: 'rec', slot: 2, label: 'signed record issued where the action happened - facts + policy + result + time' },
            { kind: 'msg', dir: 'ltr', slot: 3, label: 'record is sent - carrier, export, or evidence case' },
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
                'The supplied key signed exactly these claims.',
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
          title="It runs in your infrastructure, with your keys."
          sub="Open source is free and self-hosted. The Verification Pilot adds integration help under a written agreement, and you hand over no data."
        />
        <DataTable
          head={['Mode', 'Where it runs', 'What Originary handles']}
          rows={[
            ['Open source', 'Your infrastructure', 'Nothing. You run the Apache-2.0 code with your own keys.'],
            ['Verification Pilot', 'Your infrastructure', 'Integration guidance, design, and support for the agreed engagement.'],
          ]}
        />
      </PageSection>

      {/* Scope pointer */}
      <PageSection paddingTop={56} paddingBottom={88}>
        <SectionHeading
          eyebrow="Start"
          title="One workflow, implemented end to end."
          sub="The Verification Pilot is a fixed-scope engagement: one workflow, one issuer model, one verification path and one external recipient. Scope, terms and pricing are on the pricing page."
        />
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="/pricing#pilot" primary>
            Pilot scope and pricing
          </Button>
          <Button href="/records">All six record types</Button>
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
        <InkHeading maxWidth="24ch">Bring the workflow people already ask you about.</InkHeading>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--on-dark-muted)', maxWidth: '52ch', margin: '0 auto 26px' }}>
          Tell us who asks about it and what they need to see, and we will draft the record with you.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <InkButton href="/contact" primary>
            Start a pilot
          </InkButton>
          <InkButton href="/verify">Verify a sample</InkButton>
        </div>
      </InkBand>
    </PageShell>
  )
}

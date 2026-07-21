import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell, PageHero, PageSection, SectionHeading, Button, PullLine } from '@/components/home/page-kit'
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

const TITLE = 'Signed audit record software for machine actions | Originary'
const DESCRIPTION =
  'Originary Verify adds portable signed records and a repeatable verification path to selected production workflows.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/product' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.originary.xyz/product',
    type: 'website',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary Verify' }],
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
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.originary.xyz/product#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.originary.xyz' },
        { '@type': 'ListItem', position: 2, name: 'Product', item: 'https://www.originary.xyz/product' },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://www.originary.xyz/product#app',
      name: 'Originary Verify',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Cross-platform',
      url: 'https://www.originary.xyz/product',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Open-source core; commercial deployment support by agreement.' },
    },
  ],
}

const MODULES = [
  {
    mark: 'ledger' as const,
    title: 'Record',
    body: 'Capture selected facts at the workflow boundary: what happened, which policy applied, what result was returned, when, and who issued the record. Sign it with your keys. Private logs never leave.',
  },
  {
    mark: 'sealCheck' as const,
    title: 'Verify',
    body: 'Check the signature, issuer, policy context, result, and bound digests independently. Strict offline with a supplied key, or explicit caller-authorized key resolution. No account, no callback.',
  },
  {
    mark: 'link' as const,
    title: 'Bundle',
    body: 'Assemble related records and supporting evidence into a portable bundle a counterparty, auditor, or procurement team can open and verify without access to your systems.',
  },
]

export default function ProductPage() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Originary Verify"
        title="The evidence path for machine actions."
        sub="Originary Verify is a commercial software offering built on PEAC Protocol: issue signed records where actions happen, verify them anywhere, and assemble evidence when someone asks what happened."
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
        strip={['Record', 'Verify', 'Bundle', 'PEAC ' + FACTS.currentVersion]}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="/contact" primary>
            Start a pilot
          </Button>
          <Button href="/verify">Verify a sample</Button>
        </div>
        <AnchorLine style={{ marginTop: 26 }}>Logs stay local. Signed records travel.</AnchorLine>
      </PageHero>

      {/* Modules */}
      <PageSection paddingBottom={64}>
        <SectionHeading
          index="01"
          eyebrow="The product system"
          title="Record, Verify, Bundle."
          sub="Three modules cover the full evidence path. Each works alone; together they turn a workflow into something another party can check."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {MODULES.map((m, i) => (
            <div key={m.title} style={{ border: `1px solid ${PALETTE.hairline}`, background: PALETTE.paper, padding: '22px 22px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-plex-mono)', fontSize: 11, letterSpacing: '0.12em', color: '#7a7263' }}>
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

      {/* Worked flow */}
      <PageSection paddingTop={56} paddingBottom={56} background={PALETTE.paper}>
        <SectionHeading index="02" eyebrow="The worked flow" title="One action, end to end." />
        <FlowPanel
          label="Sequence diagram: a workflow performs an action, a signed record is issued at the boundary, the record travels to a counterparty, and it verifies offline while an evidence bundle collects related records for review."
          actors={['your workflow', 'counterparty']}
          beats={[
            { kind: 'msg', dir: 'ltr', slot: 1, label: 'action happens - api call, tool run, payment, deploy' },
            { kind: 'rec', slot: 2, label: 'signed record issued at the boundary - facts + policy + result + time' },
            { kind: 'msg', dir: 'ltr', slot: 3, label: 'record travels - carrier, export, or bundle' },
            { kind: 'evt', slot: 4, label: 'verified offline - signature, issuer, digests' },
            { kind: 'chk', slot: 5, label: 'evidence bundle ready for dispute, audit, or review' },
          ]}
          style={{ marginBottom: 22 }}
        />
        <SpecimenGrid>
          <div>
            <StepLabel>Verify on any machine, later</StepLabel>
            <Terminal
              lines={[
                { kind: 'out', text: '$ npx -y @peac/cli@0.16.3 verify ./record.jws --public-key ./jwks.json' },
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
      <PageSection paddingTop={56} paddingBottom={56}>
        <SectionHeading
          index="03"
          eyebrow="Deployment and data boundaries"
          title="Your keys, your records, your infrastructure."
          sub="Open source is free and self-hosted. Supported self-host adds integration help under agreement, not a data hand-over."
        />
        <DataTable
          head={['Mode', 'Where it runs', 'What Originary handles']}
          rows={[
            ['Open source', 'Your infrastructure', 'Nothing. Apache-2.0 code, your keys, your records.'],
            ['Supported self-host', 'Your infrastructure', 'Integration guidance, upgrades, and support under agreement.'],
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
      <PageSection paddingTop={56} paddingBottom={80} background={PALETTE.paper}>
        <SectionHeading
          index="04"
          eyebrow="Start"
          title="A fixed-scope pilot, then scale."
          sub="The Originary Verification Pilot instruments one production workflow end to end in three to four weeks. Scope on the pricing page; records and solutions below."
        />
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="/pricing" primary>
            Pilot scope and pricing
          </Button>
          <Button href="/records">All six record types</Button>
          <Button href="/peac">PEAC Protocol</Button>
        </div>
        <p style={{ fontSize: 13.5, lineHeight: 1.65, color: PALETTE.faint, maxWidth: '62ch', marginTop: 22 }}>
          Poem, Inc. is the Delaware corporation. Originary&trade; is its software and developer-tools brand. Originary Verify is a
          commercial software offering; PEAC Protocol is Apache-2.0 open-source software published and maintained by Originary that
          defines the record format and verification model. It can be implemented and self-hosted independently, and verification
          does not depend on an Originary-hosted service.
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

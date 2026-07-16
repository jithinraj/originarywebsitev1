import type { Metadata } from 'next'
import { PageShell, PageHero, PageSection, SectionHeading, Pill, Button, PullLine } from '@/components/home/page-kit'
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
import { MarkGlyph, type MarkName } from '@/components/home/glyphs/MarkGlyphs'

const TITLE = 'Provisioning audit records for agent infrastructure | Originary'
const DESCRIPTION =
  'Bind the request, approval reference, provider operation, resource identifier, result, issuer, and time.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/provisioning-records' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.originary.xyz/provisioning-records',
    type: 'website',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary provisioning records' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.originary.xyz/provisioning-records#webpage',
      url: 'https://www.originary.xyz/provisioning-records',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@id': 'https://www.originary.xyz/#website' },
      breadcrumb: { '@id': 'https://www.originary.xyz/provisioning-records#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.originary.xyz/provisioning-records#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.originary.xyz' },
        { '@type': 'ListItem', position: 2, name: 'Provisioning', item: 'https://www.originary.xyz/provisioning-records' },
      ],
    },
  ],
}

const COVERAGE_GROUPS: Array<{ label: string; mark: MarkName; items: string[] }> = [
  {
    label: 'Deploys and runs',
    mark: 'pipeline',
    items: ['Vercel deployments', 'GitHub Actions runs', 'Terraform applies', 'Deployments'],
  },
  {
    label: 'Accounts and credentials',
    mark: 'key',
    items: ['Provider setup', 'Account creation', 'Credential issuance and rotation', 'Domains'],
  },
  {
    label: 'Budgets and lifecycle',
    mark: 'ledger',
    items: ['Budgets', 'Subscriptions', 'Resource lifecycle: created, updated, removed'],
  },
]

export default function ProvisioningRecordsPage() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="provisioning records"
        title="Verify who provisioned what, when, and under which policy."
        sub="Agents and pipelines now create accounts, rotate credentials, set budgets, and ship deployments. Each console keeps its own log. Originary issues a signed record per provisioning event, so a customer, auditor, or platform team can verify the change without access to your consoles."
        display
        aside={
          <RecordCard
            type="provisioning-event"
            badge={{ kind: 'verified', label: 'verified offline' }}
            rows={[
              { label: 'Issuer', value: 'https://platform.vendor.example' },
              { label: 'Event', value: 'created - deployment' },
              { label: 'Resource', value: 'prj_4fd2 - production' },
              { label: 'Actor', value: 'deploy-agent-v2' },
              { label: 'Signature', value: 'Ed25519 91bc44a0...' },
            ]}
            foot="sample record - demo signature"
          />
        }
        strip={['Provisioning events', 'Credential lifecycle', 'Budgets and subscriptions', 'Verifies offline']}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="#specimen" primary>
            See a provisioning record
          </Button>
          <Button href="/records">All record types</Button>
        </div>
      </PageHero>

      {/* The problem */}
      <PageSection paddingBottom={64}>
        <SectionHeading
          index="01"
          eyebrow="The problem"
          title="Provisioning happens everywhere. The audit trail does not travel."
          sub="Deployments, provider setup, and credential changes are spread across consoles, CLIs, and CI. Each log is internal. A signed record answers the questions that cross the boundary:"
        />
        <MarkerList
          marker="check"
          items={[
            'Who or what created the account, resource, or deployment?',
            'Which policy, budget, or subscription applied at that moment?',
            'Was the credential issued, rotated, or revoked, and when?',
            'Which agent or workflow made the change?',
            'Can any of this be verified later, without console access?',
          ]}
        />
      </PageSection>

      {/* The specimen */}
      <PageSection paddingTop={56} paddingBottom={56} background={PALETTE.paper}>
        <div id="specimen" style={{ scrollMarginTop: 96 }}>
          <SectionHeading index="02" eyebrow="The specimen" title="One provisioning event. One signed record." mark="pipeline" />
          <FlowPanel
            label="Sequence diagram: a deploy pipeline creates a production resource at a cloud provider, the provisioning event is observed with references and digests only, and a signed record lets anyone verify the change without console access."
            actors={['deploy pipeline', 'cloud provider']}
            beats={[
              { kind: 'msg', dir: 'ltr', slot: 1, label: 'create deployment prj_4fd2 - production' },
              { kind: 'msg', dir: 'rtl', slot: 2, label: 'created - resource + credential references' },
              { kind: 'evt', slot: 3, label: 'secrets structurally excluded - reference + digest only' },
              { kind: 'rec', slot: 4, label: 'provisioning-event record - who, what, when, which policy' },
              { kind: 'chk', slot: 5, label: 'verified without console access' },
            ]}
            style={{ marginBottom: 22 }}
          />
          <SpecimenGrid>
            <div>
              <RecordCard
                type="provisioning-event"
                badge={{ kind: 'verified', label: 'verified offline' }}
                rows={[
                  { label: 'Issuer', value: 'https://platform.vendor.example' },
                  { label: 'Event', value: 'created - deployment' },
                  { label: 'Resource', value: 'prj_4fd2 - production' },
                  { label: 'Actor', value: 'deploy-agent-v2' },
                  { label: 'Policy', value: <>budget:v4 <Dim>sha256:2ce1a9...</Dim></> },
                  { label: 'Time', value: '2026-07-02T08:41:19Z' },
                  { label: 'Signature', value: 'Ed25519 91bc44a0...' },
                ]}
                foot="sample record - demo signature"
                style={{ background: PALETTE.bg }}
              />
            </div>
            <div>
              <StepLabel>Verify on any machine, later</StepLabel>
              <Terminal
                lines={[
                  { kind: 'out', text: '$ npx -y @peac/cli@0.16.2 verify ./provisioning-event.jws --public-key ./jwks.json' },
                  { kind: 'ok', text: 'Signature valid (offline).' },
                ]}
              />
              <StepLabel>Tamper case</StepLabel>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: PALETTE.muted, margin: '4px 0 0' }}>
                Change the resource, the actor, or one character of the signature and verification fails with{' '}
                <code style={{ fontFamily: 'var(--font-plex-mono)', color: PALETTE.warn }}>E_INVALID_SIGNATURE</code>.
              </p>
            </div>
          </SpecimenGrid>
        </div>
      </PageSection>

      <PullLine accent="Never the secret.">
        Prove the change.
      </PullLine>

      {/* What it covers */}
      <PageSection paddingTop={56} paddingBottom={56}>
        <SectionHeading index="03" eyebrow="What it covers" title="Lifecycle events across the stack you already run." />
        <div className="pk-fit-groups">
          {COVERAGE_GROUPS.map((g) => (
            <div key={g.label}>
              <span className="pk-fit-group-label">
                <MarkGlyph name={g.mark} size={13} />
                {g.label}
              </span>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {g.items.map((c) => (
                  <Pill key={c}>{c}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 14, color: PALETTE.muted, maxWidth: '62ch', marginTop: 18 }}>
          Examples are composition surfaces, not partnership claims. The record format is the same everywhere: facts,
          policy, result, time, issuer, signature.
        </p>
      </PageSection>

      {/* Boundaries */}
      <PageSection paddingTop={0} paddingBottom={80} background={PALETTE.paper}>
        <SectionHeading index="04" eyebrow="Boundaries" title="What Originary does not do here." mark="diamond" />
        <MarkerList
          marker="cross"
          items={[
            'It does not provision or deprovision anything.',
            'It does not manage credentials or secrets.',
            'It does not replace your infrastructure-as-code, CI, or CD.',
            'It does not gate or approve deployments.',
          ]}
        />
        <p style={{ fontSize: 16.5, lineHeight: 1.6, color: PALETTE.ink, marginTop: 24, maxWidth: '54ch' }}>
          It records what happened, so another party can verify it.
        </p>
      </PageSection>

      {/* Closing */}
      <InkBand>
        <InkHeading maxWidth="24ch">Add records to one provisioning workflow this week.</InkHeading>
        <div style={{ maxWidth: 760, margin: '28px auto 0', textAlign: 'left' }}>
          <CodeBlock tone="ink">npx -y @peac/cli@0.16.2 verify ./provisioning-event.jws --public-key ./jwks.json</CodeBlock>
        </div>
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

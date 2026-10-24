import type { Metadata } from 'next'
import { FACTS } from '@/lib/facts'
import { PageShell, PageHero, PageSection, SectionHeading, Button } from '@/components/home/page-kit'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import { PALETTE } from '@/components/home/palette'
import { RecordCard, StepLabel, SpecimenGrid, MarkerList, InkBand, InkHeading, InkButton, Dim } from '@/components/specimens/parts'
import { FlowPanel } from '@/components/specimens/FlowPanel'
import './styles.css'

const TITLE = 'Audit and incident evidence handoff | Originary'
const DESCRIPTION =
  'Package the signed records and native artifacts for an audit or incident into one evidence case that an auditor or security reviewer can verify offline.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/audit-incident-handoff' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.originary.xyz/audit-incident-handoff',
    type: 'website',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary audit and incident handoff' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.originary.xyz/audit-incident-handoff#webpage',
      url: 'https://www.originary.xyz/audit-incident-handoff',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@id': 'https://www.originary.xyz/#website' },
      breadcrumb: { '@id': 'https://www.originary.xyz/audit-incident-handoff#breadcrumb' },
    },
  ],
}

export default function AuditIncidentHandoffPage() {
  const v = FACTS.currentVersion.replace(/^v/, '')
  return (
    <PageShell>
      <Breadcrumbs current="Audit and incident handoff" href="/audit-incident-handoff" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Audit and incident handoff"
        title="Give auditors and incident reviewers records they can check themselves."
        sub="Package the relevant signed records for an incident, customer review or audit so another party can inspect them separately."
        display
        aside={
          <RecordCard
            type="evidence-bundle"
            badge={{ kind: 'neutral', label: 'illustrative export' }}
            rows={[
              { label: 'Case', value: 'ref INC-2026-0417' },
              { label: 'Records', value: '4 supplied' },
              { label: 'Artifacts', value: <Dim>2 references</Dim> },
              { label: 'Missing', value: <Dim>delivery observation</Dim> },
              { label: 'Case digest', value: <Dim>sha256:6f0a3c...</Dim> },
            ]}
            foot="records require individual verification"
          />
        }
        strip={['Signed records', 'Native artifacts', 'Integrity digests', 'Offline verification']}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="#specimen" primary>
            See a handoff bundle
          </Button>
          <Button href="/evidence-case">See an evidence case</Button>
        </div>
      </PageHero>

      {/* The problem */}
      <PageSection paddingBottom={64}>
        <SectionHeading
          index="01"
          eyebrow="The problem"
          title="A screen recording is not something a reviewer can check."
          sub="An audit, a security incident, or a partner review usually comes down to one request: show us what happened without giving us access to your systems. A handoff bundle answers these questions:"
        />
        <MarkerList
          marker="check"
          items={[
            'Which records and artifacts are relevant to the reviewed action or incident?',
            'Which incident or review reference was the bundle assembled for?',
            'Is the bundle complete and unaltered since it was assembled?',
            'Can a reviewer check the signatures against a key they were told to expect?',
            'What does the bundle not establish about the underlying incident?',
          ]}
        />
      </PageSection>

      {/* The specimen */}
      <PageSection paddingTop={56} paddingBottom={56} background={PALETTE.paper}>
        <div id="specimen" style={{ scrollMarginTop: 96 }}>
          <SectionHeading index="02" eyebrow="The specimen" title="What the bundle for one incident contains." mark="sealCheck" />
          <FlowPanel
            label="Sequence diagram: relevant records are selected for an incident reference, assembled into a signed bundle with an integrity digest, and a reviewer verifies the bundle offline against a key they were told to expect."
            actors={['issuing team', 'reviewer']}
            beats={[
              { kind: 'msg', dir: 'ltr', slot: 1, label: 'select records and artifacts for incident INC-2026-0417' },
              { kind: 'rec', slot: 2, label: 'bundle assembled - manifest + records + integrity digest' },
              { kind: 'msg', dir: 'ltr', slot: 3, label: 'bundle handed off - file, not a live connection' },
              { kind: 'evt', slot: 4, label: 'reviewer verifies offline - own key, own machine' },
              { kind: 'chk', slot: 5, label: 'verified, or a precise reason it failed' },
            ]}
            style={{ marginBottom: 22 }}
          />
          <SpecimenGrid>
            <div>
              <StepLabel>Create the bundle</StepLabel>
              <pre
                tabIndex={0}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12.5,
                  lineHeight: 1.7,
                  color: PALETTE.ink,
                  background: PALETTE.bg,
                  border: `1px solid ${PALETTE.hairline}`,
                  padding: '14px 16px',
                  overflowX: 'auto',
                  margin: '8px 0 0',
                }}
              >
{`{
  "case_ref": "INC-2026-0417",
  "records": 4,
  "artifacts": 2,
  "missing": ["delivery_observation"]
}`}
              </pre>
              <p style={{ fontSize: 13, color: PALETTE.faint, margin: '10px 0 0', lineHeight: 1.55 }}>
                Select the relevant signed records, native artifacts, issuer-key information, and
                review reference. Originary&apos;s pilot defines and implements this export for the
                selected workflow.
              </p>
            </div>
            <div>
              <StepLabel>Verify the included records, offline by default</StepLabel>
              <pre
                tabIndex={0}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12.5,
                  lineHeight: 1.7,
                  color: PALETTE.ink,
                  background: PALETTE.bg,
                  border: `1px solid ${PALETTE.hairline}`,
                  padding: '14px 16px',
                  overflowX: 'auto',
                  margin: '8px 0 0',
                }}
              >
{`npx -y @peac/cli@${v} verify \\
  ./records/gateway-decision.jws \\
  --public-key ./jwks.json`}
              </pre>
              <p style={{ fontSize: 13, color: PALETTE.faint, margin: '10px 0 0', lineHeight: 1.55 }}>
                Each supplied record is verified independently, with the public key or JWKS the
                reviewer was told to expect. Case-level completeness and evidence sufficiency are
                assessed separately. Nothing is uploaded to Originary.
              </p>
            </div>
          </SpecimenGrid>
        </div>
      </PageSection>

      {/* What it contains, and what it does not do */}
      <PageSection paddingTop={56} paddingBottom={88}>
        <div className="aud-pair">
          <div>
            <SectionHeading eyebrow="What it contains" title="What the reviewer receives." />
            <MarkerList
              marker="number"
              items={[
                'The signed records relevant to the reviewed action or incident.',
                'Native artifacts or references the records point to.',
                'The incident or review reference the bundle was assembled for.',
                'A verification report, generated at assembly time.',
                'An integrity digest over the exported bundle contents.',
              ]}
            />
          </div>
          <div>
            <SectionHeading eyebrow="Boundaries" title="What Originary does not do here." />
            <MarkerList
              marker="cross"
              items={[
                'It does not run your audit or incident-response process.',
                'It does not decide what should have been recorded.',
                'It does not store the bundle or the records inside it.',
                'It does not require your reviewer to have an Originary account.',
                'It does not need your raw logs.',
              ]}
            />
          </div>
        </div>
      </PageSection>

      {/* Closing */}
      <InkBand>
        <InkHeading maxWidth="26ch">Hand off one bundle the next time a reviewer asks.</InkHeading>
        <p style={{ fontSize: 16.5, lineHeight: 1.6, color: 'var(--on-dark-muted)', maxWidth: '54ch', margin: '20px auto 0' }}>
          Pick a review or incident someone has already asked you about, and we will define the
          bundle with you.
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

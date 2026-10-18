import type { Metadata } from 'next'
import { PageShell, PageHero, PageSection, SectionHeading, Button } from '@/components/home/page-kit'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import { PALETTE } from '@/components/home/palette'
import { SANS } from '@/components/home/typography'
import { Mono } from '@/components/home/atoms/Mono'
import { InkBand, InkHeading, InkButton } from '@/components/specimens/parts'
import { ActionReviewConsole } from './ActionReviewConsole'
import { CaseFlowDiagram } from './CaseFlowDiagram'
import './action-review.css'

const TITLE = 'Review AI agent actions when reports conflict | Originary'
const DESCRIPTION =
  'Review agent-driven operations: see conflicting source reports, unknown outcomes and unsupported approvals, record a disposition, and export the case.'
const URL = 'https://www.originary.xyz/action-review'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/action-review' },
  openGraph: {
    title: 'Action Review | Originary',
    description: DESCRIPTION,
    url: '/action-review',
    type: 'website',
    siteName: 'Originary',
    images: [{ url: '/og' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Action Review | Originary',
    description: DESCRIPTION,
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@id': 'https://www.originary.xyz/#website' },
      about: { '@id': 'https://www.originary.xyz/#organization' },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
  ],
}

function CaseSnapshot() {
  const rows: Array<[string, React.ReactNode]> = [
    ['gateway', <span key="g">denied vendor.update <span style={{ color: PALETTE.faint }}>· 15:19 UTC</span></span>],
    ['company', <span key="c">succeeded <span style={{ color: PALETTE.faint }}>· 15:21 UTC</span></span>],
    ['finding', <span key="f" style={{ color: PALETTE.danger }}>Gateway denial and reported success</span>],
    ['basis', <span key="b" style={{ color: PALETTE.faint }}>source-reported, not verified</span>],
  ]
  return (
    <div className="ar-snap" role="img" aria-label="Sample case: a gateway reported a denial and a company reported success for the same operation, so the case is flagged critical and opened for review.">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: '14px 18px' }}>
        <div style={{ minWidth: 0 }}>
          <Mono size={12} color={PALETTE.faint} style={{ letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block' }}>
            Case
          </Mono>
          <Mono size={13.5} color={PALETTE.ink} style={{ display: 'block', marginTop: 4, overflowWrap: 'anywhere' }}>
            acme:workflow-88
          </Mono>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <Mono
            size={12}
            color={PALETTE.danger}
            style={{ textTransform: 'uppercase', border: '1px solid var(--danger)', background: 'var(--danger-bg)', padding: '3px 8px' }}
          >
            critical
          </Mono>
          <Mono size={12} color={PALETTE.ink} style={{ textTransform: 'uppercase', border: `1px solid ${PALETTE.rule}`, padding: '3px 8px' }}>
            open
          </Mono>
        </div>
      </div>
      {rows.map(([label, value]) => (
        <div className="ar-snap-row" key={label}>
          <Mono size={12} color={PALETTE.faint} style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            {label}
          </Mono>
          <Mono size={12} color={PALETTE.ink}>
            {value}
          </Mono>
        </div>
      ))}
      <div style={{ padding: '10px 18px', borderTop: `1px solid ${PALETTE.hairline}`, background: PALETTE.bg }}>
        <Mono size={12} color={PALETTE.faint}>
          synthetic case · rules run in your browser
        </Mono>
      </div>
    </div>
  )
}

export default function ActionReviewPage() {
  return (
    <PageShell>
      <Breadcrumbs current="Action Review" href="/action-review" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Action review"
        title="Review what agents did when the reports disagree."
        sub="Action Review gathers every report about one agent-driven operation, flags the exceptions that need a person, and keeps a record of what the reviewer decided and why."
        display
        aside={<CaseSnapshot />}
        strip={['Conflicting reports', 'Unknown outcomes', 'Unsupported approvals', 'Exportable case']}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="#try" primary>
            Try the interactive demo
          </Button>
          <Button href="/contact">Start a pilot</Button>
        </div>
      </PageHero>

      <PageSection paddingTop={56} paddingBottom={88}>
        <div id="try" style={{ scrollMarginTop: 96 }}>
          <SectionHeading
            index="03"
            eyebrow="Try it"
            title="Work a queue of synthetic cases."
            sub="Filter the queue, open a case, add a simulated report and watch the rules re-run, then record a decision and export the case. Everything stays in your browser; the export is unsigned."
            mark="ledger"
          />
          <ActionReviewConsole />
          <p className="ar-note">
            Reports are attributed to their source, not verified. Signed records carry the parts that can be checked;
            see an <a href="/evidence-case">evidence case</a>.
          </p>
        </div>
      </PageSection>

      <PageSection paddingTop={0} paddingBottom={88}>
        <SectionHeading
          index="01"
          eyebrow="How a case forms"
          title="Every report on one operation, lined up in one case."
          sub="Agents, companies, gateways and payment providers each report on the same operation from their own side. Action Review lines those reports up, checks them against six rules, and puts the exceptions in front of a person."
          mark="pipeline"
        />
        <CaseFlowDiagram />
      </PageSection>

      <InkBand>
        <InkHeading>Bring one workflow where the reports do not line up.</InkHeading>
        <p
          style={{
            fontFamily: SANS,
            fontSize: 16,
            lineHeight: 1.6,
            color: 'var(--on-dark-muted)',
            maxWidth: '56ch',
            margin: '16px auto 28px',
          }}
        >
          We will map its sources, run the rules on real reports, and show you the cases that need a decision.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <InkButton href="/contact" primary>
            Start a pilot
          </InkButton>
          <InkButton href="/evidence-case">See an evidence case</InkButton>
        </div>
      </InkBand>
    </PageShell>
  )
}

import type { Metadata } from 'next'
import { PageShell, PageHero, PageSection, SectionHeading, Card, Button } from '@/components/home/page-kit'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import { PALETTE } from '@/components/home/palette'
import { SANS } from '@/components/home/typography'
import { Mono } from '@/components/home/atoms/Mono'
import { MarkGlyph, type MarkName } from '@/components/home/glyphs/MarkGlyphs'
import { VerificationBoundary, InkBand, InkHeading, InkButton, RUST } from '@/components/specimens/parts'
import { FlowPanel } from '@/components/specimens/FlowPanel'
import { ActionReviewConsole } from './ActionReviewConsole'
import { CaseFlowDiagram } from './CaseFlowDiagram'
import './action-review.css'

const TITLE = 'Action Review: agent operation exceptions | Originary'
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

const RULES: Array<{ title: string; body: string; mark: MarkName; severity: string }> = [
  {
    title: 'Conflicting outcomes',
    body: 'Sources reported incompatible final states for one operation, such as cancelled and succeeded.',
    mark: 'diamond',
    severity: 'critical',
  },
  {
    title: 'Gateway and result discrepancy',
    body: 'A gateway reported denial while another source reported successful execution.',
    mark: 'valve',
    severity: 'critical',
  },
  {
    title: 'Reported failure',
    body: 'A source reported the operation failed. Treated as a report, not a verified business outcome.',
    mark: 'signal',
    severity: 'high',
  },
  {
    title: 'Unknown outcome',
    body: 'The last report was in progress more than 30 minutes ago. A timeout is not read as failure.',
    mark: 'target',
    severity: 'high',
  },
  {
    title: 'Unsupported approval',
    body: 'An agent or company asserted user approval without an independent approval artifact.',
    mark: 'identity',
    severity: 'medium',
  },
  {
    title: 'Amount disagreement',
    body: 'Sources reported different amounts in the same currency for one operation.',
    mark: 'coin',
    severity: 'medium',
  },
]

const SEVERITY_FG: Record<string, string> = { critical: RUST, high: '#775a32', medium: '#3f566e' }

function CaseSnapshot() {
  const rows: Array<[string, React.ReactNode]> = [
    ['gateway', <span key="g">denied vendor.update <span style={{ color: PALETTE.faint }}>· 15:19 UTC</span></span>],
    ['company', <span key="c">succeeded <span style={{ color: PALETTE.faint }}>· 15:21 UTC</span></span>],
    ['finding', <span key="f" style={{ color: RUST }}>Gateway denial and reported success</span>],
    ['basis', <span key="b" style={{ color: PALETTE.faint }}>source-reported, not verified</span>],
  ]
  return (
    <div className="ar-snap" role="img" aria-label="Sample case: a gateway reported a denial and a company reported success for the same operation, so the case is flagged critical and opened for review.">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: '14px 18px' }}>
        <div style={{ minWidth: 0 }}>
          <Mono size={10.5} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block' }}>
            Case
          </Mono>
          <Mono size={13.5} color={PALETTE.ink} style={{ display: 'block', marginTop: 4 }}>
            acme:workflow-88
          </Mono>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <Mono
            size={10.5}
            color={RUST}
            style={{ textTransform: 'uppercase', border: '1px solid rgba(154,59,46,0.35)', background: 'rgba(154,59,46,0.08)', padding: '3px 8px' }}
          >
            critical
          </Mono>
          <Mono size={10.5} color={PALETTE.ink} style={{ textTransform: 'uppercase', border: `1px solid ${PALETTE.rule}`, padding: '3px 8px' }}>
            open
          </Mono>
        </div>
      </div>
      {rows.map(([label, value]) => (
        <div className="ar-snap-row" key={label}>
          <Mono size={10.5} color={PALETTE.faint} style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            {label}
          </Mono>
          <Mono size={12} color={PALETTE.ink}>
            {value}
          </Mono>
        </div>
      ))}
      <div style={{ padding: '10px 18px', borderTop: `1px solid ${PALETTE.hairline}`, background: PALETTE.bg }}>
        <Mono size={10.5} color={PALETTE.faint}>
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
          <Button href="/contact">Talk to us about a workflow</Button>
        </div>
      </PageHero>

      <PageSection paddingTop={72} paddingBottom={72}>
        <SectionHeading
          index="01"
          eyebrow="How a case forms"
          title="Separate reports in. One reviewable case out."
          sub="Agents, companies, gateways and payment providers each report on the same operation from their own side. Action Review lines those reports up, checks them against six rules, and puts the exceptions in front of a person."
          mark="pipeline"
        />
        <CaseFlowDiagram />
      </PageSection>

      <PageSection paddingTop={64} paddingBottom={64} background={PALETTE.paper}>
        <SectionHeading
          index="02"
          eyebrow="One exception, step by step"
          title="The gateway said no. The company said done."
          sub="Neither report is wrong on its own. Together they are a question someone has to answer, and the case keeps both reports side by side until they do."
          mark="valve"
        />
        <FlowPanel
          label="Sequence diagram: an agent requests vendor.update, the gateway reports a denial, the company reports the same operation succeeded, a critical case opens, and a reviewer records a disposition with a reason."
          actors={['agent', 'gateway', 'company']}
          beats={[
            { kind: 'msg', dir: 'ltr', slot: 1, half: 'l', label: 'request vendor.update' },
            { kind: 'evt', slot: 2, bad: true, label: 'gateway reports: denied by policy' },
            { kind: 'msg', dir: 'rtl', slot: 3, half: 'r', label: 'company reports: succeeded' },
            { kind: 'evt', slot: 4, bad: true, label: 'rule match: gateway denial and reported success' },
            { kind: 'rec', slot: 5, label: 'case opened - critical - both reports attached' },
            { kind: 'chk', slot: 6, label: 'reviewer records what was checked and why' },
          ]}
        />
      </PageSection>

      <PageSection paddingTop={72} paddingBottom={72}>
        <div id="try" style={{ scrollMarginTop: 96 }}>
          <SectionHeading
            index="03"
            eyebrow="Try it"
            title="Work a queue of synthetic cases."
            sub="Filter the queue, open a case, add a simulated report and watch the rules re-run, then record a decision and export the case. Everything stays in your browser; the export is unsigned."
            mark="ledger"
          />
          <ActionReviewConsole />
        </div>
      </PageSection>

      <PageSection paddingTop={0} paddingBottom={72}>
        <SectionHeading
          index="04"
          eyebrow="Exception rules"
          title="Six deterministic checks, each stated as a report."
          sub="Every finding names the events it came from. The rules describe what sources said; they do not decide what happened."
          mark="braces"
        />
        <div className="ar-rules">
          {RULES.map((r) => (
            <div key={r.title} className="ar-rule-card">
            <Card padding={22} style={{ height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: PALETTE.ink }}>
                <MarkGlyph name={r.mark} size={26} />
                <Mono size={10.5} color={SEVERITY_FG[r.severity]} style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {r.severity}
                </Mono>
              </div>
              <div style={{ fontFamily: SANS, fontSize: 16, fontWeight: 500, margin: '16px 0 6px' }}>{r.title}</div>
              <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.6, color: PALETTE.muted, margin: 0 }}>{r.body}</p>
            </Card>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection paddingTop={0} paddingBottom={88}>
        <SectionHeading
          index="05"
          eyebrow="Verification boundary"
          title="Reported is not the same as verified."
          sub="Action Review works from what each system says it saw. When a case has to travel to another party, signed records and an evidence case carry the parts that can be checked."
          mark="sealCheck"
        />
        <VerificationBoundary />
      </PageSection>

      <InkBand>
        <InkHeading>Bring one workflow where the reports do not line up.</InkHeading>
        <p
          style={{
            fontFamily: SANS,
            fontSize: 16,
            lineHeight: 1.6,
            color: 'rgba(244,241,234,0.72)',
            maxWidth: '56ch',
            margin: '16px auto 28px',
          }}
        >
          We will map its sources, run the rules on real reports, and show you the cases that need a decision.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <InkButton href="/contact" primary>
            Talk to us
          </InkButton>
          <InkButton href="/evidence-case">See an evidence case</InkButton>
        </div>
      </InkBand>
    </PageShell>
  )
}

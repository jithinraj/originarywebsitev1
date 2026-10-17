import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell, PageHero, PageSection, SectionHeading, Card, Button } from '@/components/home/page-kit'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import { PALETTE } from '@/components/home/palette'
import { StepLabel, DataTable } from '@/components/specimens/parts'
import { FlowPanel } from '@/components/specimens/FlowPanel'
import { VerificationLimits } from '@/components/home/VerificationLimits'
import { MarkGlyph, type MarkName } from '@/components/home/glyphs/MarkGlyphs'
import { StatusGlyph, type StatusName } from '@/components/home/glyphs/StatusGlyphs'

const TITLE = 'AI Compliance Evidence for Agents & APIs | Originary'
const DESCRIPTION =
  'Turn AI agent actions, API calls, gateway decisions and approvals into portable signed records that compliance and audit teams can verify independently.'
const OG_TITLE = 'AI Compliance Evidence for Agents and APIs'
const OG_DESCRIPTION =
  'Turn selected AI agent and API actions into portable signed records that compliance, risk and audit teams can verify outside the source system.'
const URL = 'https://www.originary.xyz/ai-compliance'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/ai-compliance' },
  robots: { index: true, follow: true },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: URL,
    type: 'website',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary AI compliance evidence' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: ['/og'],
  },
}

const FAQ: Array<{ q: string; a: string }> = [
  {
    q: 'What is AI compliance evidence?',
    a: 'AI compliance evidence is the set of records and artifacts a compliance, risk, security or audit team uses to assess an AI system or action. Originary makes selected runtime actions and decisions portable and independently verifiable, while stating what the supplied evidence does not establish.',
  },
  {
    q: 'Is Originary an AI governance platform?',
    a: 'No. Governance and control platforms define, apply or manage policies and workflows. Originary prepares and verifies evidence from the systems that observed an action so that another party can review the same set of records.',
  },
  {
    q: 'Does Originary make an AI system compliant?',
    a: 'No. Originary does not interpret laws, certify systems or determine that a requirement has been satisfied. It can support a compliance assessment by providing verifiable records and explicit evidence limitations.',
  },
  {
    q: 'Does this replace logs, observability or a SIEM?',
    a: 'No. Logs and telemetry remain essential for operating and debugging systems. Originary selects and packages the records another party needs to verify outside the source environment.',
  },
]

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
    
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: FAQ.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

const STEPS: Array<{ n: string; title: string; body: string; mark: MarkName }> = [
  {
    n: '01',
    title: 'Collect',
    mark: 'target',
    body: 'Select only the records and native artifacts relevant to the reviewed action. Private logs remain in the systems that produced them.',
  },
  {
    n: '02',
    title: 'Verify',
    mark: 'sealCheck',
    body: 'Check signatures, record structure, bound digests, issuer information and the supplied verification-key or expected-issuer policy.',
  },
  {
    n: '03',
    title: 'Assess',
    mark: 'diamond',
    body: 'Show what the evidence establishes, what is missing, where sources conflict and which properties were not evaluated.',
  },
  {
    n: '04',
    title: 'Hand off',
    mark: 'link',
    body: 'Export the signed records, linked native artifacts, verification report and timeline so another party can inspect the same case.',
  },
]

const CASE_ROWS: Array<{ label: string; status: string; tone: StatusName }> = [
  { label: 'Gateway decision', status: 'signature verified', tone: 'established' },
  { label: 'Tool invocation', status: 'signature verified', tone: 'established' },
  { label: 'Result content', status: 'digest matches', tone: 'established' },
  { label: 'Payment-provider artifact', status: 'linked', tone: 'linked' },
  { label: 'Approval record', status: 'not supplied', tone: 'missing' },
  { label: 'Delivery', status: 'not established', tone: 'missing' },
  { label: 'Verification report', status: 'complete with limitations', tone: 'partial' },
]

const TONE: Record<StatusName, string> = {
  established: 'var(--success)',
  linked: 'var(--ink-2)',
  missing: 'var(--not-evaluated)',
  partial: 'var(--warn)',
}

const FRAMEWORKS: Array<{
  name: string
  mark: MarkName
  body: string
  links: Array<{ label: string; href: string; external?: boolean }>
}> = [
  {
    name: 'EU AI Act',
    mark: 'scales',
    body: 'Support selected traceability, record-keeping and technical-documentation workflows with verifiable records of runtime events, decisions and oversight artifacts. Originary does not determine whether a system is high-risk or whether an obligation is satisfied.',
    links: [
      {
        label: 'PEAC EU AI Act mapping',
        href: 'https://github.com/peacprotocol/peac/blob/main/docs/compliance/EU-AI-ACT-ANNEX-IV-MAPPING.md',
        external: true,
      },
      {
        label: 'European Commission overview',
        href: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
        external: true,
      },
    ],
  },
  {
    name: 'ISO/IEC 42001',
    mark: 'ledger',
    body: 'Support operational evidence for an AI management system, including selected controls, approvals, decisions, changes and reviews. The PEAC mapping is informative and is not certification.',
    links: [
      {
        label: 'PEAC ISO/IEC 42001 mapping',
        href: 'https://github.com/peacprotocol/peac/blob/main/docs/compliance/ISO-42001-MAPPING.md',
        external: true,
      },
      { label: 'ISO/IEC 42001 overview', href: 'https://www.iso.org/standard/42001', external: true },
    ],
  },
  {
    name: 'NIST AI RMF',
    mark: 'target',
    body: 'Preserve records that can support selected Govern, Map, Measure and Manage activities. Originary does not replace your AI risk-management process.',
    links: [
      { label: 'NIST AI Risk Management Framework', href: 'https://www.nist.gov/itl/ai-risk-management-framework', external: true },
    ],
  },
]

const WORKFLOWS: Array<{ title: string; body: string; mark: MarkName }> = [
  {
    title: 'Internal audit and control review',
    mark: 'ledger',
    body: 'Give reviewers the records for selected controls and actions without opening up your operational logs.',
  },
  {
    title: 'High-risk agent-action review',
    mark: 'agentFrame',
    body: 'Connect the proposed action, approval or denial, execution record and reported result.',
  },
  {
    title: 'Incident investigation',
    mark: 'signal',
    body: 'Preserve the gateway decision, tool or API action, relevant artifacts and verification outcome for a later investigation.',
  },
  {
    title: 'Customer or counterparty assurance',
    mark: 'scales',
    body: 'Hand another organization records it can inspect locally under an explicit issuer-and-key policy.',
  },
  {
    title: 'Paid tool or API dispute',
    mark: 'coin',
    body: 'Connect authorization, service invocation, result commitment and native payment artifacts while stating whether delivery was actually observed.',
  },
  {
    title: 'Provisioning and access review',
    mark: 'pipeline',
    body: 'Verify reported account, credential, resource, deployment or subscription changes after the originating system is unavailable or inaccessible.',
  },
]

const mono = 'var(--font-mono), "IBM Plex Mono", ui-monospace, monospace'
const sans = 'var(--font-sans), "IBM Plex Sans", system-ui, sans-serif'

export default function AiCompliancePage() {
  return (
    <PageShell>
      <Breadcrumbs current="AI compliance" href="/ai-compliance" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="AI compliance"
        title="Signed evidence for AI audits and compliance reviews."
        sub="Record important automated actions as they happen so reviewers have something more useful than screenshots and reconstructed timelines."
        display
        aside={
          <div className="aic-case">
            <div className="aic-case-head">
              <span className="aic-case-title">Evidence case</span>
              <span className="aic-case-ref">illustrative</span>
            </div>
            <div className="aic-case-meter" aria-hidden>
              {CASE_ROWS.map((r) => (
                <span key={r.label} style={{ background: TONE[r.tone] }} />
              ))}
            </div>
            <p className="aic-case-meter-label">
              <strong>{CASE_ROWS.filter((r) => r.tone === 'established').length} of {CASE_ROWS.length}</strong>{' '}
              elements established. {CASE_ROWS.filter((r) => r.tone === 'linked').length} linked,{' '}
              {CASE_ROWS.filter((r) => r.tone === 'missing').length} not supplied or not established,{' '}
              {CASE_ROWS.filter((r) => r.tone === 'partial').length} complete with limitations.
            </p>
            <dl className="aic-case-rows">
              {CASE_ROWS.map((row) => (
                <div key={row.label} className="aic-case-row">
                  <dt className="aic-case-label">{row.label}</dt>
                  <dd className="aic-case-status" style={{ color: TONE[row.tone] }}>
                    <StatusGlyph name={row.tone} size={16} />
                    <span>{row.status}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        }
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="/evidence-case" primary>
            See an evidence case
          </Button>
          <Button href="/contact">Start a pilot</Button>
        </div>
        <p
          style={{
            fontFamily: sans,
            fontSize: 13,
            lineHeight: 1.6,
            color: PALETTE.faint,
            margin: '16px 0 0',
            maxWidth: '64ch',
          }}
        >
          Supports evidence collection and review. It does not determine whether a legal, regulatory
          or contractual requirement is satisfied.
        </p>
      </PageHero>

      <PageSection paddingBottom={64}>
        <SectionHeading
          eyebrow="The evidence gap"
          title="A review needs evidence that outlives the systems that produced it."
          sub="When an AI action is reviewed or investigated, the evidence is usually spread across agent runtimes, gateways, approval systems, observability tools, payment providers and internal databases, each with its own identifiers, retention rules and operator-controlled logs. Originary packages the relevant records into one case that another party can inspect, verify and keep."
        />
      </PageSection>

      <PageSection paddingBottom={64}>
        <SectionHeading
          eyebrow="From runtime to review"
          title="How records get from the systems that acted to the people who review them."
          sub="Keep your agent framework, AI gateway, observability stack, SIEM, GRC system and approval workflows. Originary collects signed records from them and assembles a case a reviewer can check."
        />
        <div style={{ marginTop: 8, marginBottom: 40 }}>
          <FlowPanel
            label="Sequence diagram: an agent runtime, API, MCP server, gateway, approval system or payment provider issues portable signed interaction records; Originary assembles them into an evidence case; a compliance, risk, security or audit reviewer verifies that case."
            actors={['Source systems', 'Originary evidence case', 'Reviewer']}
            beats={[
              { kind: 'msg', dir: 'ltr', slot: 1, label: 'agent runtime, API, MCP server, gateway, approvals, payments' },
              { kind: 'rec', slot: 2, label: 'portable signed records' },
              { kind: 'evt', slot: 3, label: 'facts - policy - result - time - issuer - signature' },
              { kind: 'msg', dir: 'ltr', slot: 4, label: 'evidence case' },
              { kind: 'chk', slot: 5, label: 'compliance, risk, security, audit reviewer' },
            ]}
          />
        </div>
        <ol className="aic-steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="aic-step" data-last={i === STEPS.length - 1 ? '' : undefined}>
              <span className="aic-step-node" aria-hidden>
                {s.n}
              </span>
              <div className="aic-step-body">
                <StepLabel>{`${s.n} ${s.title}`}</StepLabel>
                <p style={{ fontFamily: sans, fontSize: 13.5, lineHeight: 1.6, color: PALETTE.muted, margin: '8px 0 0' }}>
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection paddingBottom={64}>
        <SectionHeading
          eyebrow="Framework support"
          title="Records that support evidence work for the EU AI Act, ISO/IEC 42001 and NIST AI RMF."
          sub="Originary does not certify an AI system, interpret the law or determine that a control has been satisfied. It gives operators and reviewers portable, verifiable records that can support their own assessment."
        />
        <div className="aic-grid-3">
          {FRAMEWORKS.map((f) => (
            <Card key={f.name} padding={24}>
              <span className="aic-mark" aria-hidden>
                <MarkGlyph name={f.mark} size={20} />
              </span>
              <h3
                style={{
                  fontFamily: sans,
                  fontSize: 17,
                  fontWeight: 500,
                  color: PALETTE.ink,
                  margin: '14px 0 10px',
                  letterSpacing: '-0.01em',
                }}
              >
                {f.name}
              </h3>
              <p style={{ fontFamily: sans, fontSize: 13.5, lineHeight: 1.6, color: PALETTE.muted, margin: '0 0 14px' }}>
                {f.body}
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 6 }}>
                {f.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontFamily: sans, fontSize: 13, color: PALETTE.ink, textDecoration: 'underline', textUnderlineOffset: 3 }}
                    >
                      {l.label}
                      <span aria-hidden style={{ marginLeft: 5, color: PALETTE.faint }}>
                        &#8599;
                      </span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <p
          style={{
            fontFamily: sans,
            fontSize: 14,
            lineHeight: 1.65,
            color: PALETTE.muted,
            maxWidth: '72ch',
            margin: '28px 0 0',
          }}
        >
          Framework applicability, evidence sufficiency and legal conclusions remain the
          responsibility of the organization and its qualified advisers, assessors or auditors.
        </p>
      </PageSection>

      <PageSection paddingBottom={64}>
        <SectionHeading
          eyebrow="Review workflows"
          title="For the AI actions someone will later have to explain."
        />
        <dl className="aic-wf">
          {WORKFLOWS.map((w) => (
            <div key={w.title}>
              <dt>{w.title}</dt>
              <dd>{w.body}</dd>
            </div>
          ))}
        </dl>
      </PageSection>

      <PageSection paddingBottom={64}>
        <SectionHeading eyebrow="How it fits" title="How an evidence case fits next to logs and GRC tools." />
        <DataTable
          labelColumnsOnMobile
          head={['Question', 'Internal logs', 'Governance or GRC system', 'Originary evidence case']}
          rows={[
            ['Primary job', 'Operate and debug a system', 'Manage policies, controls and review workflows', 'Hand off verifiable evidence for one case'],
            ['Verified outside the source system', 'Depends on the system', 'Depends on the platform and export', 'Yes, under an explicit issuer-and-key policy'],
            ['Requires private-system access', 'Depends on the system', 'Depends on the platform', 'No, for the selected supplied records'],
            ['Shows missing or conflicting evidence', 'Depends on the system', 'Depends on the platform', 'Explicitly'],
            ['Replaces existing infrastructure', 'No', 'May be a primary workflow system', 'No, composes with both'],
            ['Portability', 'Vendor or system specific', 'Varies', 'Open, documented record format'],
          ]}
        />
        <p
          style={{
            fontFamily: sans,
            fontSize: 14,
            lineHeight: 1.65,
            color: PALETTE.muted,
            maxWidth: '72ch',
            margin: '24px 0 0',
          }}
        >
          Originary complements your controls and systems. It does not decide which actions to
          permit, enforce policies or replace the process that determines compliance.
        </p>
      </PageSection>

      <VerificationLimits />

      <PageSection paddingBottom={64}>
        <SectionHeading eyebrow="Questions" title="Common questions about AI compliance evidence." />
        <dl className="aic-faq">
          {FAQ.map((f, i) => (
            <div key={f.q} className="aic-faq-item">
              <dt>
                <span className="aic-faq-n" aria-hidden>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {f.q}
              </dt>
              <dd>{f.a}</dd>
            </div>
          ))}
        </dl>
      </PageSection>

      <PageSection paddingBottom={88}>
        <SectionHeading
          eyebrow="Start with one action"
          title="Start with one consequential AI workflow."
          sub="Bring one agent action, gateway decision, approval, paid tool or API call, incident, or provisioning change. We will identify what your systems can honestly record, what a separate reviewer can verify and what evidence would remain missing."
        />
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="/contact" primary>
            Start a pilot
          </Button>
          <Button href="/verify">Verify a sample</Button>
        </div>
        <p style={{ fontFamily: sans, fontSize: 13.5, lineHeight: 1.6, color: PALETTE.muted, margin: '24px 0 0', maxWidth: '68ch' }}>
          Related reading:{' '}
          <Link href="/evidence-case" style={{ color: PALETTE.ink, textDecoration: 'underline', textUnderlineOffset: 3 }}>
            what an evidence case contains
          </Link>
          ,{' '}
          <Link href="/audit-incident-handoff" style={{ color: PALETTE.ink, textDecoration: 'underline', textUnderlineOffset: 3 }}>
            audit and incident handoff
          </Link>
          , and{' '}
          <Link href="/trust" style={{ color: PALETTE.ink, textDecoration: 'underline', textUnderlineOffset: 3 }}>
            deployment and verification boundaries
          </Link>
          .
        </p>
      </PageSection>
    </PageShell>
  )
}

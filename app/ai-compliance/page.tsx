import type { Metadata } from 'next'
import Link from 'next/link'
import {
  PageShell,
  PageHero,
  PageSection,
  SectionHeading,
  Card,
  Button,
  PullLine,
} from '@/components/home/page-kit'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import { PALETTE } from '@/components/home/palette'
import {
  RecordCard,
  StepLabel,
  SpecimenGrid,
  DataTable,
  MarkerList,
  InkBand,
  InkHeading,
  InkButton,
  Dim,
} from '@/components/specimens/parts'
import { FlowPanel } from '@/components/specimens/FlowPanel'
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
    a: 'AI compliance evidence is the set of records and artifacts a compliance, risk, security or audit team uses to assess an AI system or action. Originary focuses on making selected runtime actions and decisions portable and independently verifiable, while stating what the supplied evidence does not establish.',
  },
  {
    q: 'Is Originary an AI governance platform?',
    a: 'No. Governance and control platforms define, apply or manage policies and workflows. Originary prepares and verifies evidence from the systems that observed an action so that another party can review the same bounded record set.',
  },
  {
    q: 'Does Originary make an AI system compliant?',
    a: 'No. Originary does not interpret laws, certify systems or determine that a requirement has been satisfied. It can support a compliance assessment by providing verifiable records and explicit evidence limitations.',
  },
  {
    q: 'Does this replace logs, observability or a SIEM?',
    a: 'No. Logs and telemetry remain essential for operating and debugging systems. Originary selects and packages the records another party needs to verify outside the source environment.',
  },
  {
    q: 'Can records be verified without Originary?',
    a: 'Yes. PEAC records are designed for independent and offline verification. Verification should use an explicit key or expected-issuer policy appropriate to the review.',
  },
  {
    q: 'Does a signed record prove that an action really happened?',
    a: "A valid signature shows that the protected record was signed under the supplied key and was not changed afterward. It does not, by itself, prove that the issuer's observation was complete or truthful, that every relevant event was recorded or that delivery occurred.",
  },
  {
    q: 'How does PEAC Protocol relate to Originary?',
    a: 'PEAC Protocol defines the open record and verification foundation. Originary develops software and workflows for issuing, collecting, verifying, assessing and handing off those records across organizational boundaries.',
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

const PROBLEMS: Array<{ title: string; body: string; mark: MarkName }> = [
  {
    title: 'Scattered',
    mark: 'chainSteps',
    body: 'The approval, action, gateway decision, result and payment reference often live in different systems.',
  },
  {
    title: 'Locked inside the source',
    mark: 'key',
    body: 'A dashboard or log export normally depends on the operator that produced it and the access it continues to provide.',
  },
  {
    title: 'Reconstructed after the fact',
    mark: 'ledger',
    body: 'Audit and compliance teams spend time collecting screenshots, CSV files, tickets and explanations after a review has already begun.',
  },
  {
    title: 'Gaps are easy to hide',
    mark: 'signal',
    body: 'Traditional happy-path reports rarely distinguish evidence that is verified, merely linked, missing, conflicting or outside the review.',
  },
]

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
    body: 'Export the signed records, linked native artifacts, verification report and timeline so another party can inspect the same bounded case.',
  },
]

const COVERAGE: Array<{ title: string; body: string; mark: MarkName }> = [
  {
    title: 'Agent and tool actions',
    mark: 'agentFrame',
    body: 'Record which AI agent or tool acted, the relevant target, input or argument digest, reported result and time.',
  },
  {
    title: 'Approvals and human oversight',
    mark: 'sealCheck',
    body: 'Bind an approval or denial to the exact proposal or action digest that was reviewed.',
  },
  {
    title: 'Gateway and access decisions',
    mark: 'valve',
    body: 'Record a terminal allow, deny or review decision together with the policy or check the gateway reported applying.',
  },
  {
    title: 'Payments and agent commerce',
    mark: 'coin',
    body: 'Connect service actions to authorization, mandate, payment and settlement references without inventing payment finality or delivery.',
  },
  {
    title: 'Provisioning and access changes',
    mark: 'pipeline',
    body: 'Preserve reported changes to accounts, resources, credentials, subscriptions and deployments.',
  },
  {
    title: 'Cross-system context',
    mark: 'identity',
    body: 'Carry trace references, native-provider artifacts, related-record identifiers and acknowledgements without replacing their original semantics.',
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
  established: '#245f3f',
  linked: '#375873',
  missing: '#9a3b2e',
  partial: '#77592f',
}

const STATUS_VOCAB = ['established', 'linked', 'bounded', 'missing', 'conflicting', 'not evaluated']

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
        href: 'https://github.com/peacprotocol/peac/blob/main/docs/compliance/EU-AI-ACT.md',
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
        href: 'https://github.com/peacprotocol/peac/blob/main/docs/compliance/ISO-42001.md',
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
    body: 'Give reviewers a bounded record set for selected controls and actions without exposing the full operational log environment.',
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

const PEAC_POINTS = [
  'Portable signed interaction records',
  'Offline verification',
  'Self-managed keys',
  'Independent implementations',
  'Conformance vectors',
  'No Originary callback required',
]

const mono = 'var(--font-plex-mono), "IBM Plex Mono", ui-monospace, monospace'
const sans = 'var(--font-plex-sans), "IBM Plex Sans", system-ui, sans-serif'

export default function AiCompliancePage() {
  return (
    <PageShell>
      <Breadcrumbs current="AI Compliance Evidence" href="/ai-compliance" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="AI COMPLIANCE EVIDENCE"
        title="Make AI actions verifiable beyond your own logs."
        sub="Originary turns selected agent actions, API calls, MCP tool runs, gateway decisions, approvals, payments and provisioning changes into portable signed records. Compliance, risk, security and audit teams can verify what each issuing system reported without access to its private logs or dependence on an Originary service."
        display
        strip={['Built on PEAC Protocol', 'Open source', 'Offline verification', 'Self-hostable']}
        aside={
          <RecordCard
            type="agent-action-observed"
            badge={{ kind: 'verified', label: 'signature verified' }}
            rows={[
              { label: 'Issuer', value: <Dim>gateway.example</Dim> },
              { label: 'Action', value: 'tools.call market_search' },
              { label: 'Decision', value: 'allow, policy v4' },
              { label: 'Approval', value: <Dim>bound to proposal digest</Dim> },
              { label: 'Time', value: <Dim>2026-04-17T14:08:11Z</Dim> },
            ]}
            foot="illustrative record - demo signature"
          />
        }
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="/evidence-case" primary>
            See an evidence case
          </Button>
          <Button href="/contact">Start with one workflow</Button>
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
          eyebrow="THE EVIDENCE GAP"
          title="Policies describe what should happen. Logs show one operator what its system saw. A review needs something else."
          sub="When an AI action is reviewed, disputed or investigated, the relevant evidence is usually spread across agent runtimes, gateways, approval systems, observability tools, payment providers and internal databases. Each system has its own identifiers, retention rules and operator-controlled logs."
        />
        <p
          style={{
            fontFamily: sans,
            fontSize: 15.5,
            lineHeight: 1.65,
            color: PALETTE.muted,
            maxWidth: '62ch',
            margin: '0 0 36px',
          }}
        >
          Originary creates a bounded handoff that another party can inspect, verify and retain.
        </p>
        <div className="aic-grid-4">
          {PROBLEMS.map((p) => (
            <Card key={p.title} padding={22}>
              <span className="aic-mark" aria-hidden>
                <MarkGlyph name={p.mark} size={20} />
              </span>
              <h3
                style={{
                  fontFamily: sans,
                  fontSize: 16,
                  fontWeight: 500,
                  color: PALETTE.ink,
                  margin: '14px 0 8px',
                  letterSpacing: '-0.01em',
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontFamily: sans, fontSize: 13.5, lineHeight: 1.6, color: PALETTE.muted, margin: 0 }}>
                {p.body}
              </p>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection paddingBottom={64}>
        <SectionHeading
          eyebrow="FROM RUNTIME TO REVIEW"
          title="The evidence handoff between the systems that acted and the people who must review them."
          sub="Keep your agent framework, AI gateway, observability stack, SIEM, GRC system and approval workflows. Originary adds a portable evidence path across them."
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
                <MarkGlyph name={s.mark} size={20} />
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
          eyebrow="WHAT CAN BE RECORDED"
          title="Capture the decisions and actions that matter to a review."
        />
        <div className="aic-grid-3">
          {COVERAGE.map((c) => (
            <Card key={c.title} padding={22}>
              <span className="aic-mark" aria-hidden>
                <MarkGlyph name={c.mark} size={20} />
              </span>
              <h3
                style={{
                  fontFamily: sans,
                  fontSize: 16,
                  fontWeight: 500,
                  color: PALETTE.ink,
                  margin: '14px 0 8px',
                  letterSpacing: '-0.01em',
                }}
              >
                {c.title}
              </h3>
              <p style={{ fontFamily: sans, fontSize: 13.5, lineHeight: 1.6, color: PALETTE.muted, margin: 0 }}>
                {c.body}
              </p>
            </Card>
          ))}
        </div>
        <p
          style={{
            fontFamily: sans,
            fontSize: 14,
            lineHeight: 1.65,
            color: PALETTE.muted,
            maxWidth: '68ch',
            margin: '28px 0 0',
          }}
        >
          Record only what a system actually observed. Do not infer events, authority, delivery or
          completeness that the source did not establish. An AI audit trail assembled this way shows
          what each issuer reported about the actions it recorded. It does not establish that every
          relevant event was recorded or that nothing was withheld.
        </p>
      </PageSection>

      <PageSection paddingBottom={64}>
        <SectionHeading
          eyebrow="THE REVIEW OUTPUT"
          title="One evidence case, with its limits stated."
          sub="An evidence case gives reviewers the selected records, issuer and key context, linked native artifacts, deterministic verification results and a timeline of the supplied evidence."
        />
        <p
          style={{
            fontFamily: sans,
            fontSize: 15.5,
            lineHeight: 1.65,
            color: PALETTE.muted,
            maxWidth: '62ch',
            margin: '0 0 32px',
          }}
        >
          It does not turn an incomplete record set into a complete history. It makes the boundaries
          visible.
        </p>

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
            <strong>3 of 7</strong> elements verified under the supplied key. One is linked, one is
            bounded, two were never supplied.
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
          <div className="aic-case-vocab">
            {STATUS_VOCAB.map((v) => (
              <span key={v}>{v}</span>
            ))}
          </div>
        </div>
        <p
          style={{
            fontFamily: mono,
            fontSize: 11,
            letterSpacing: '0.04em',
            color: PALETTE.faint,
            margin: '12px 0 0',
          }}
        >
          Illustrative evidence case. No customer, adoption or compliance claim.
        </p>
      </PageSection>

      <PageSection paddingBottom={64}>
        <SectionHeading
          eyebrow="FRAMEWORK SUPPORT"
          title="Support the evidence work around AI governance and compliance frameworks."
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
          eyebrow="REVIEW WORKFLOWS"
          title="Built for consequential AI actions, not routine event collection."
        />
        <div className="aic-grid-3">
          {WORKFLOWS.map((w) => (
            <Card key={w.title} padding={22}>
              <span className="aic-mark" aria-hidden>
                <MarkGlyph name={w.mark} size={20} />
              </span>
              <h3
                style={{
                  fontFamily: sans,
                  fontSize: 16,
                  fontWeight: 500,
                  color: PALETTE.ink,
                  margin: '14px 0 8px',
                  letterSpacing: '-0.01em',
                }}
              >
                {w.title}
              </h3>
              <p style={{ fontFamily: sans, fontSize: 13.5, lineHeight: 1.6, color: PALETTE.muted, margin: 0 }}>
                {w.body}
              </p>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection paddingBottom={64}>
        <SectionHeading eyebrow="HOW IT FITS" title="Not another governance dashboard." />
        <DataTable
          labelColumnsOnMobile
          head={['Question', 'Internal logs', 'Governance or GRC system', 'Originary evidence case']}
          rows={[
            ['Primary job', 'Operate and debug a system', 'Manage policies, controls and review workflows', 'Hand off bounded, verifiable evidence'],
            ['Verified outside the source system', <Dim key="a">Usually not independently</Dim>, 'Varies by platform and export', 'Yes, under an explicit issuer-and-key policy'],
            ['Requires private-system access', 'Usually', 'Often requires platform access', 'No, for the selected supplied records'],
            ['Shows missing or conflicting evidence', <Dim key="b">Rarely</Dim>, 'Varies', 'Explicitly'],
            ['Replaces existing infrastructure', 'No', 'May be a primary workflow system', 'No, composes with both'],
            ['Portability', 'Vendor or system specific', 'Varies', 'Open portable interaction records'],
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

      <PageSection paddingBottom={64}>
        <SectionHeading
          eyebrow="THE VERIFICATION BOUNDARY"
          title="A valid record can still be insufficient evidence."
        />
        <SpecimenGrid>
          <div>
            <StepLabel>Verification can establish</StepLabel>
            <MarkerList
              marker="check"
              items={[
                'the supplied key validates the signature;',
                'the protected record bytes were not changed;',
                'disclosed content matches the digests bound by the record;',
                'the record contains the issuer-reported claims shown.',
              ]}
            />
          </div>
          <div>
            <StepLabel>Verification does not automatically establish</StepLabel>
            <MarkerList
              marker="cross"
              items={[
                'that every relevant event was recorded;',
                "that the issuer's observation was complete or truthful;",
                'that the supplied key was authorized by the claimed issuer;',
                'that delivery occurred;',
                'that a policy, legal or regulatory requirement was satisfied.',
              ]}
            />
          </div>
        </SpecimenGrid>
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
          Expected-issuer and trusted-key policies can strengthen the verification context, but they
          do not convert an issuer&apos;s statement into independently established truth.
        </p>
      </PageSection>

      <InkBand>
        <InkHeading maxWidth="24ch">An open protocol underneath, independent verification by design.</InkHeading>
        <p
          style={{
            fontFamily: sans,
            fontSize: 16.5,
            lineHeight: 1.6,
            color: 'rgba(244, 241, 234, 0.78)',
            maxWidth: '58ch',
            margin: '20px auto 0',
          }}
        >
          PEAC Protocol is an Apache-2.0 open protocol for portable signed interaction records.
          Originary uses PEAC records to prepare and verify evidence cases, but teams can issue,
          verify, implement and self-host PEAC independently of Originary.
        </p>
        <ul className="aic-peac-points">
          {PEAC_POINTS.map((pt) => (
            <li key={pt}>
              <span className="aic-peac-dot" aria-hidden />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
        <p className="aic-peac-tagline">Record locally. Verify across boundaries.</p>
        <div className="aic-peac-cta">
          <InkButton href="/peac">Read PEAC Protocol</InkButton>
          <InkButton href="https://github.com/peacprotocol/peac">View the source</InkButton>
        </div>
      </InkBand>

      <PageSection paddingBottom={64}>
        <SectionHeading eyebrow="QUESTIONS" title="Common questions about AI compliance evidence." />
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

      <PullLine accent="what evidence would remain missing.">
        Bring one workflow. We will identify what your systems can honestly record, what a separate
        reviewer can verify, and
      </PullLine>

      <PageSection paddingBottom={88}>
        <SectionHeading
          eyebrow="START WITH ONE ACTION"
          title="Start with one consequential AI workflow."
          sub="Bring one agent action, gateway decision, approval, paid tool or API call, incident, or provisioning change. We will identify what your systems can honestly record, what a separate reviewer can verify and what evidence would remain missing."
        />
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="/contact" primary>
            Start with one workflow
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

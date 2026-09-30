import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { PageShell, PageHero, PageSection, SectionHeading, PullLine, Button, Card } from '@/components/home/page-kit'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import { PALETTE } from '@/components/home/palette'
import { SANS } from '@/components/home/typography'
import { Mono } from '@/components/home/atoms/Mono'
import {
  RecordCard,
  StatusBadge,
  Dim,
  MarkerList,
  InkBand,
  InkHeading,
  InkButton,
  AnchorLine,
  DataTable,
  type BadgeKind,
} from '@/components/specimens/parts'
import { ScopedReviewForm } from './ScopedReviewForm'
import './investigate.css'

const TITLE = 'Investigate disputed agent actions | Originary'
const DESCRIPTION =
  'Turn a disputed agent action into a reviewable evidence case. Bring together existing records, identify what they support, and give another team a clear way to inspect the findings and missing evidence.'

const SOCIAL_DESCRIPTION =
  'Turn a disputed agent action into a reviewable evidence case another team can inspect, challenge and decide on.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/investigate' },
  openGraph: {
    title: 'Originary Investigate',
    description: SOCIAL_DESCRIPTION,
    url: 'https://www.originary.xyz/investigate',
    type: 'website',
    siteName: 'Originary',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary Investigate' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary Investigate',
    description: SOCIAL_DESCRIPTION,
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
      '@id': 'https://www.originary.xyz/investigate#webpage',
      url: 'https://www.originary.xyz/investigate',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@id': 'https://www.originary.xyz/#website' },
      breadcrumb: { '@id': 'https://www.originary.xyz/investigate#breadcrumb' },
    },
  ],
}

const sans = SANS

type FindingState = 'contradicted' | 'supported' | 'not-established'

const STATE_BADGE: Record<FindingState, { label: string; kind: BadgeKind }> = {
  contradicted: { label: 'Contradicted', kind: 'invalid' },
  supported: { label: 'Supported', kind: 'verified' },
  'not-established': { label: 'Not established', kind: 'denied' },
}

const FINDINGS: Array<{ state: FindingState; claim: string; why: string }> = [
  {
    state: 'contradicted',
    claim: "The agent's rollback reverted the change to the flags configuration.",
    why: "The agent's message says so. The path it restored, the commit it made and the deploy that followed all touched a different file.",
  },
  {
    state: 'supported',
    claim: 'After the rollback, production still ran the changed flags configuration.',
    why: 'The last write of that file in the covered window is the earlier deploy. Bucket write logging covered the whole window.',
  },
  {
    state: 'not-established',
    claim: 'Secret values left the developer endpoint during the session.',
    why: 'The agent read the secrets file, but no source covering data leaving the endpoint was supplied. This stays open rather than being guessed.',
  },
]

const STEPS = [
  {
    title: 'Define the question',
    body: 'One question the recipient must decide, the time window, who receives the handoff and what is out of scope. Sources you expected but could not get are recorded, not ignored.',
  },
  {
    title: 'Review the records',
    body: 'Existing exports are kept byte-for-byte. Each finding cites the records it relies on, shows contrary records, and says what would settle it. Two views of one observation are not counted as corroboration.',
  },
  {
    title: 'Hand off findings and limits',
    body: 'The recipient opens the findings, follows each citation to its source, sees what verification checked and what it could not, and records a decision for a stated purpose.',
  },
]

const linkStyle = {
  color: PALETTE.ink,
  textDecoration: 'underline',
  textDecorationColor: 'rgba(20, 17, 10, 0.30)',
  textUnderlineOffset: 3,
} as const

function SyntheticTag() {
  return <StatusBadge kind="neutral">Synthetic example · fictional systems and people</StatusBadge>
}

function Body({ children }: { children: ReactNode }) {
  return (
    <p style={{ fontFamily: sans, fontSize: 15, lineHeight: 1.6, color: PALETTE.muted, margin: '0 0 12px', maxWidth: '62ch' }}>
      {children}
    </p>
  )
}

function Minor({ children }: { children: ReactNode }) {
  return (
    <h3 style={{ fontFamily: sans, fontSize: 17, lineHeight: 1.3, fontWeight: 500, color: PALETTE.ink, margin: '0 0 8px', letterSpacing: '-0.01em' }}>
      {children}
    </h3>
  )
}

export default function InvestigatePage() {
  return (
    <PageShell>
      <Breadcrumbs current="Investigate" href="/investigate" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="Originary Investigate · preview"
        title="Turn a disputed agent action into a reviewable evidence case."
        sub="Bring together existing records, identify what they support, and give another team a clear way to inspect the findings and missing evidence."
        display
        aside={
          <RecordCard
            type="evidence-case"
            badge={{ kind: 'neutral', label: 'synthetic example' }}
            rows={[
              { label: 'Question', value: 'Did the rollback restore the flags config?' },
              { label: 'Contradicted', value: '1 finding' },
              { label: 'Supported', value: '1 finding' },
              { label: 'Not established', value: '1 finding' },
              { label: 'Signature', value: <Dim>checked against the key you supply</Dim> },
            ]}
            foot="fictional systems and people"
          />
        }
        strip={['Disputed agent actions', 'Cited findings', 'Missing evidence', 'Recipient decision']}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="#request" primary>
            Request a scoped review
          </Button>
          <Button href="#example">Explore the synthetic case</Button>
        </div>
        <p style={{ fontFamily: sans, fontSize: 13.5, lineHeight: 1.6, color: PALETTE.muted, margin: '16px 0 0' }}>
          Open-source preview: <em>source link published with the public release.</em>
        </p>
      </PageHero>

      {/* 01 The example */}
      <PageSection paddingTop={64} paddingBottom={64}>
        <div id="example" style={{ scrollMarginTop: 96 }}>
          <SectionHeading
            index="01"
            eyebrow="The example"
            title="One disputed action, read from the records."
            sub="A coding agent told a customer it had rolled back a configuration change. The deployment records disagree. The recipient needs to decide whether to accept the incident explanation or ask for more evidence."
            mark="sealCheck"
          />
          <Card padding={0} style={{ overflow: 'hidden' }}>
            <div style={{ padding: '20px 24px 18px', borderBottom: `1px solid ${PALETTE.hairline}` }}>
              <div style={{ marginBottom: 14 }}>
                <SyntheticTag />
              </div>
              <Mono size={10.5} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                Question for review
              </Mono>
              <p
                style={{
                  fontFamily: sans,
                  fontSize: 'clamp(19px, 2.2vw, 23px)',
                  lineHeight: 1.3,
                  fontWeight: 500,
                  letterSpacing: '-0.015em',
                  color: PALETTE.ink,
                  margin: '8px 0 0',
                  maxWidth: '52ch',
                  textWrap: 'pretty',
                }}
              >
                Did the agent&apos;s rollback restore the production flags configuration, as the agent
                reported to the customer?
              </p>
            </div>
            <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {FINDINGS.map((f, i) => {
                const b = STATE_BADGE[f.state]
                return (
                  <li
                    key={f.claim}
                    className="inv-finding"
                    style={{ borderTop: i > 0 ? `1px solid ${PALETTE.hairline}` : 'none' }}
                  >
                    <span>
                      <StatusBadge kind={b.kind}>{b.label}</StatusBadge>
                    </span>
                    <div>
                      <p style={{ fontFamily: sans, fontSize: 15.5, lineHeight: 1.5, color: PALETTE.ink, margin: 0 }}>
                        {f.claim}
                      </p>
                      <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: PALETTE.muted, margin: '6px 0 0' }}>
                        {f.why}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </Card>
          <p style={{ fontFamily: sans, fontSize: 13.5, lineHeight: 1.6, color: PALETTE.faint, maxWidth: '66ch', margin: '18px 0 0' }}>
            The useful moment is seeing a plausible claim fail to become an established finding merely
            because a transcript says it happened. This page shows a summary; the synthetic case itself
            ships with the open-source preview as a signed bundle a recipient can check locally.
          </p>
        </div>
      </PageSection>

      <PullLine accent="because a transcript says so.">A claim is not a finding</PullLine>

      {/* 02 How a review works */}
      <PageSection paddingTop={64} paddingBottom={64}>
        <SectionHeading index="02" eyebrow="How a review works" title="Question, records, handoff." />
        <div className="inv-grid3">
          {STEPS.map((s, i) => (
            <Card key={s.title} padding={24}>
              <Mono size={11} color={PALETTE.accent} style={{ letterSpacing: '0.1em' }}>
                {String(i + 1).padStart(2, '0')}
              </Mono>
              <div style={{ marginTop: 12 }}>
                <Minor>{s.title}</Minor>
              </div>
              <p style={{ fontFamily: sans, fontSize: 14.5, lineHeight: 1.6, color: PALETTE.muted, margin: 0 }}>{s.body}</p>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* 03 What the recipient sees */}
      <PageSection paddingTop={64} paddingBottom={64} background={PALETTE.paper}>
        <SectionHeading
          index="03"
          eyebrow="What the recipient sees"
          title="The person deciding does not learn the investigator's tools."
          sub="They get five views: the question, the findings, the cited sources, verification, and their response."
        />
        <div className="inv-grid2">
          <figure style={{ margin: 0 }} aria-label="Illustration of the recipient verification view">
            <RecordCard
              type="recipient view · verification"
              badge={{ kind: 'neutral', label: 'illustration' }}
              rows={[
                { label: 'Files', value: '✓ Match the manifest' },
                {
                  label: 'Signature',
                  value: (
                    <>
                      ✓ Valid under the key <em>you</em> supplied.{' '}
                      <Dim>A key inside the bundle is never trusted automatically.</Dim>
                    </>
                  ),
                },
                { label: 'Records rebuilt', value: '✓ Re-derived from the included bytes' },
                { label: 'Human review', value: '2 of 3 findings reviewed by a second analyst' },
                {
                  label: 'Not checked',
                  value: <Dim>Whether the sources are complete, whether the events occurred, who holds the key</Dim>,
                },
              ]}
              foot={'No single "verified" badge: each result is reported separately.'}
            />
          </figure>
          <figure style={{ margin: 0 }} aria-label="Illustration of the recipient response view">
            <RecordCard
              type="recipient view · response"
              badge={{ kind: 'neutral', label: 'illustration' }}
              rows={[
                {
                  label: 'Decision',
                  value: (
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 4 }}>
                      {['Accept for a stated purpose', 'Request more evidence', 'Reject', 'Defer'].map((o) => (
                        <li key={o}>
                          <span aria-hidden="true" style={{ color: PALETTE.faint, marginRight: 8 }}>
                            ○
                          </span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  ),
                },
                { label: 'Required', value: <Dim>A purpose and a reason</Dim> },
              ]}
              foot="Saved as a separate file bound to the exact bundle and finding revision. It never changes the findings."
            />
            <p style={{ fontFamily: sans, fontSize: 13.5, lineHeight: 1.6, color: PALETTE.muted, margin: '14px 0 0' }}>
              Because the response is bound to a specific revision, the investigator can tell when it goes
              out of date.
            </p>
          </figure>
        </div>
      </PageSection>

      {/* 04 Where your evidence stays */}
      <PageSection paddingTop={64} paddingBottom={64}>
        <SectionHeading index="04" eyebrow="Data boundary" title="Where your evidence stays." mark="diamond" />
        <MarkerList
          marker="check"
          items={[
            <>
              <strong style={{ fontWeight: 500 }}>Local-first software.</strong> Investigate runs on your
              machine or in your approved environment. It needs no account, makes no network requests and
              keeps originals unchanged.
            </>,
            <>
              <strong style={{ fontWeight: 500 }}>Assisted work under an agreed scope.</strong> For a scoped
              review we agree the question, sources, access, transfer and retention before any evidence is
              handled.
            </>,
            <>
              <strong style={{ fontWeight: 500 }}>No evidence upload here.</strong> This page has no upload
              form. Please do not send incident logs or credentials with a first request.
            </>,
            <>
              <strong style={{ fontWeight: 500 }}>Disclosure you control.</strong> Redacted handoffs can
              withhold whole sources or mask values. The recipient is told what was withheld and what
              therefore could not be rebuilt.
            </>,
          ]}
        />
      </PageSection>

      {/* 05 Two ways to start */}
      <PageSection paddingTop={64} paddingBottom={64} background={PALETTE.paper}>
        <SectionHeading index="05" eyebrow="Engagement" title="Two ways to start." />
        <div className="inv-grid2">
          <Card padding={28} emphasis style={{ background: PALETTE.bg }}>
            <Mono size={10.5} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              Originary Agent Action Review
            </Mono>
            <div style={{ marginTop: 12 }}>
              <Minor>Review a disputed action with existing evidence</Minor>
            </div>
            <p style={{ fontFamily: sans, fontSize: 32, lineHeight: 1.1, fontWeight: 500, letterSpacing: '-0.02em', color: PALETTE.ink, margin: '14px 0 4px' }}>
              $5,000
            </p>
            <p style={{ fontFamily: sans, fontSize: 13.5, color: PALETTE.faint, margin: '0 0 18px' }}>
              Introductory fixed price for one bounded engagement.
            </p>
            <MarkerList
              marker="check"
              items={[
                'One case and one agreed question set',
                'Up to three agreed source types or exports',
                'Findings with their limits, and the checks that can be repeated',
                'A disclosed bundle and report for the recipient',
                'One recipient review session and one revision',
                'About five business days once agreed inputs and access are available',
              ]}
            />
            <p style={{ fontFamily: sans, fontSize: 13.5, lineHeight: 1.6, color: PALETTE.muted, margin: '18px 0 0' }}>
              Not included: emergency containment, continuous monitoring, unrestricted collection, legal
              opinions or insurance determinations. The work is accepted against the agreed scope, not a
              favourable conclusion; &ldquo;not established&rdquo; is a legitimate outcome.
            </p>
          </Card>
          <Card padding={28} style={{ background: PALETTE.bg }}>
            <Mono size={10.5} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              Verification Pilot
            </Mono>
            <div style={{ marginTop: 12 }}>
              <Minor>Record one workflow so future evidence is easier</Minor>
            </div>
            <Body>
              The{' '}
              <Link href="/product" style={linkStyle}>
                Verification Pilot
              </Link>{' '}
              adds signed records to one existing workflow, so the next dispute starts with records built to
              be checked. See an{' '}
              <Link href="/evidence-case" style={linkStyle}>
                illustrative evidence case
              </Link>{' '}
              or{' '}
              <Link href="/verify" style={linkStyle}>
                verify a record
              </Link>
              .
            </Body>
            <Body>Neither path requires adopting the whole PEAC stack up front.</Body>
          </Card>
        </div>
      </PageSection>

      {/* 06 Request */}
      <PageSection paddingTop={64} paddingBottom={64}>
        <div id="request" style={{ scrollMarginTop: 96 }}>
          <SectionHeading
            index="06"
            eyebrow="Request"
            title="Request a scoped review."
            sub="Tell us a little about the situation. We decide on any evidence transfer only after we agree the scope."
          />
          <div
            role="note"
            style={{
              maxWidth: 760,
              margin: '0 0 20px',
              padding: '14px 18px',
              borderLeft: `3px solid ${PALETTE.warn}`,
              background: 'rgba(138, 106, 60, 0.06)',
              fontFamily: sans,
              fontSize: 14,
              lineHeight: 1.55,
              color: PALETTE.muted,
            }}
          >
            <strong style={{ color: PALETTE.ink, fontWeight: 500 }}>Do not include credentials or incident logs.</strong>{' '}
            A short, non-sensitive description is enough.
          </div>
          <Card padding={28} style={{ maxWidth: 760 }}>
            <ScopedReviewForm />
          </Card>
        </div>
      </PageSection>

      {/* 07 Preview status and limits */}
      <PageSection paddingTop={64} paddingBottom={80} background={PALETTE.paper}>
        <SectionHeading index="07" eyebrow="Preview status" title="Status and limits." />
        <DataTable
          head={['Topic', 'Detail']}
          rows={[
            [
              'status',
              'Investigate is a pre-release (0.2 preview). Case and bundle formats are versioned and may change before 1.0. It has not had an independent security audit.',
            ],
            [
              'supported inputs',
              'Agent endpoint records (numbat), git history, GitHub audit logs, AWS CloudTrail, and any JSON Lines, JSON or CSV export with a field mapping. OpenTelemetry, ADR Sensor and PEAC records are experimental.',
            ],
            [
              'verification limits',
              'A valid signature shows that the holder of a key the recipient trusts committed to the files. It does not establish who that holder is, when the evidence was collected, whether the collection is complete, or whether the recorded events occurred. Findings are attributed judgments within a stated scope, not proof.',
            ],
            [
              'security',
              <>
                Report vulnerabilities to{' '}
                <a href="mailto:security@originary.xyz?subject=Security%20report%3A%20originary-investigate" style={linkStyle}>
                  security@originary.xyz
                </a>{' '}
                with the subject &ldquo;Security report: originary-investigate&rdquo;. Please use synthetic
                data only. See our{' '}
                <Link href="/security" style={linkStyle}>
                  security policy
                </Link>
                .
              </>,
            ],
          ]}
        />
      </PageSection>

      {/* Closing */}
      <InkBand>
        <InkHeading maxWidth="28ch">Bring the next disputed agent action to a decision.</InkHeading>
        <p style={{ fontSize: 16.5, lineHeight: 1.6, color: 'rgba(244,241,234,0.78)', maxWidth: '54ch', margin: '20px auto 0' }}>
          Start with one question another team already needs answered. We will agree the scope before any
          evidence moves.
        </p>
        <div style={{ marginTop: 30, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <InkButton href="#request" primary>
            Request a scoped review
          </InkButton>
          <InkButton href="/evidence-case">See an evidence case</InkButton>
        </div>
        <AnchorLine onInk style={{ marginTop: 36 }}>
          Investigate is open source under Apache-2.0.
        </AnchorLine>
      </InkBand>
    </PageShell>
  )
}

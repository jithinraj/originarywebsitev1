import Link from 'next/link'
import type { Metadata } from 'next'
import { FACTS } from '@/lib/facts'
import { PageShell, PageHero, PageSection, SectionHeading } from '@/components/home/page-kit'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import { InkBand, InkHeading, InkButton } from '@/components/specimens/parts'
import { btnSolidStyle, btnGhostStyle } from '@/components/home/ctaStyles'
import './styles.css'

export const metadata: Metadata = {
  title: { absolute: 'Pricing: open source and the Verification Pilot | Originary' },
  description:
    'Use PEAC Protocol free under Apache-2.0, or start a Verification Pilot: one production workflow, issued and verified end to end, in your infrastructure.',
  authors: [{ name: 'Originary', url: 'https://www.originary.xyz' }],
  alternates: { canonical: '/pricing' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Pricing: open source and the Verification Pilot | Originary',
    description:
      'Use PEAC Protocol free under Apache-2.0, or start a Verification Pilot: one production workflow, issued and verified end to end, in your infrastructure.',
    url: '/pricing',
    type: 'website',
    siteName: 'Originary',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary Pricing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing: open source and the Verification Pilot | Originary',
    description:
      'Use PEAC Protocol free under Apache-2.0, or start a Verification Pilot: one production workflow, issued and verified end to end, in your infrastructure.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
}

const OPEN = [
  'Full protocol specification and conformance fixtures',
  'CLI, SDK packages and MCP server',
  'Offline verification, no Originary dependency',
  'Self-managed signing keys',
  'Record bundles for review',
  'Community support on GitHub',
]

const PILOT = [
  'One production workflow, end to end',
  'One signed-record profile and one issuer and key model',
  'A verifier or evidence bundle a third party can open',
  'Integration and threat-boundary review',
  'A written deployment recommendation',
  'Direct engineering access during the engagement',
]

const COMPARE: Array<[string, string, string]> = [
  ['Price', 'No license fee', 'Scoped quote'],
  ['License', FACTS.license, `${FACTS.license}, plus support terms`],
  ['Signing keys', 'Self-managed', 'Self-managed, with setup guidance'],
  ['Deployment', 'Self-hosted', 'Self-hosted, with guidance'],
  ['Verification', 'Offline', 'Offline'],
  ['Record bundles', 'You assemble them', 'Assembled with you'],
  ['Support', 'GitHub issues', 'Direct engineering access'],
]

const TERMS: Array<[string, string]> = [
  ['Duration', 'Fixed and agreed in writing before work begins.'],
  ['Your side', 'Access to the one workflow, a technical contact, and someone who can sign off on acceptance.'],
  ['Acceptance', 'Records issue from the workflow and verify offline against a key you supply, and a third party can open the resulting bundle.'],
  ['Ownership', 'It runs in your infrastructure and you hold the keys, during the pilot and after it.'],
  ['After the pilot', 'The implementation is yours to run. Continued support needs a separate written agreement.'],
  ['Not included', 'Hosted verification, key custody, record storage, production on-call, and changes to systems outside the agreed workflow.'],
]

const FAQS = [
  {
    q: 'Can I self-host everything?',
    a: `Yes. PEAC Protocol and its core packages are ${FACTS.license} and free to self-host. Verification never requires Originary to be online, and no data is sent to an Originary service.`,
  },
  {
    q: 'Which payment rails are supported?',
    a: 'PEAC is rail-neutral. It records interactions; it does not move money. HTTP 402 adapters exist for teams that use challenge and response payment flows.',
  },
  {
    q: 'Who is the Verification Pilot for?',
    a: 'API platform teams, MCP server operators, gateway and agent-infrastructure teams, and security reviewers who need signed records in one specific production workflow.',
  },
]

function Tick() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="m3.5 8.3 2.8 2.8 6.2-6.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function PricingPage() {
  return (
    <PageShell>
      <Breadcrumbs current="Pricing" href="/pricing" />
      <PageHero
        eyebrow="Pricing"
        title="Use the open-source tools for free, or run a pilot with us."
        sub="The protocol and its tooling are open source. For help adding signed records to one production workflow, start a Verification Pilot."
        align="center"
      />

      <PageSection paddingTop={24} paddingBottom={88}>
        <div className="pr-plans">
          <article className="pr-plan">
            <p className="pr-plan-name">Open source</p>
            <p className="pr-price">
              $0 <span>{FACTS.license}</span>
            </p>
            <p className="pr-plan-sub">Everything you need to issue and verify records yourself.</p>
            <ul className="pr-list" role="list">
              {OPEN.map((x) => (
                <li key={x}>
                  <Tick />
                  {x}
                </li>
              ))}
            </ul>
            <a href={FACTS.repoUrl} className="hs-btn home-arrow-link pr-cta" style={btnGhostStyle} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </article>

          <article className="pr-plan pr-plan-feature" id="pilot">
            <p className="pr-plan-name">Verification Pilot</p>
            <p className="pr-price">
              Scoped quote <span>fixed scope</span>
            </p>
            <p className="pr-plan-sub">One production workflow, issued and verified end to end, in your infrastructure.</p>
            <ul className="pr-list" role="list">
              {PILOT.map((x) => (
                <li key={x}>
                  <Tick />
                  {x}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="hs-btn home-arrow-link pr-cta" style={btnSolidStyle}>
              Start a pilot
            </Link>
          </article>
        </div>
      </PageSection>

      <PageSection paddingTop={0} paddingBottom={88}>
        <SectionHeading title="Compare." align="center" />
        <div className="pr-table-wrap" role="region" aria-label="Plan comparison" tabIndex={0}>
          {/* Explicit roles keep the table semantics when phones restack the rows (styles.css). */}
          <table className="pr-table" role="table">
            <thead role="rowgroup">
              <tr role="row">
                <th scope="col" role="columnheader"><span className="sr-only">Feature</span></th>
                <th scope="col" role="columnheader">Open source</th>
                <th scope="col" role="columnheader">Verification Pilot</th>
              </tr>
            </thead>
            <tbody role="rowgroup">
              {COMPARE.map(([k, a, b]) => (
                <tr key={k} role="row">
                  <th scope="row" role="rowheader">{k}</th>
                  <td role="cell" data-plan="Open source">{a}</td>
                  <td role="cell" data-plan="Verification Pilot">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageSection>

      <PageSection paddingTop={0} paddingBottom={88}>
        <SectionHeading title="Pilot terms." sub="What both sides agree to before work begins." align="center" />
        <dl className="pr-terms">
          {TERMS.map(([t, d]) => (
            <div key={t}>
              <dt>{t}</dt>
              <dd>{d}</dd>
            </div>
          ))}
        </dl>
      </PageSection>

      <PageSection paddingTop={0} paddingBottom={96}>
        <SectionHeading title="Questions." align="center" />
        <dl className="pr-faq">
          {FAQS.map((f) => (
            <div key={f.q}>
              <dt>{f.q}</dt>
              <dd>{f.a}</dd>
            </div>
          ))}
        </dl>
      </PageSection>

      <InkBand>
        <InkHeading maxWidth="24ch">Choose the workflow to start with.</InkHeading>
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

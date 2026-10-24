import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell, PageHero, PageSection, Card, PALETTE, EvidenceCasePanel } from '@/components/home'
import { StatusGlyph } from '@/components/home/glyphs/StatusGlyphs'
import { Mono } from '@/components/home/atoms/Mono'
import { StepLabel, InkBand, InkHeading, InkButton } from '@/components/specimens/parts'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import { CaseSummary } from '@/components/heroes/HeroArtifacts'
import './styles.css'

export const metadata: Metadata = {
  title: { absolute: 'What an AI agent or API evidence case contains | Originary' },
  description:
    'An example evidence case for a disputed paid MCP tool call: signed records, native artifacts, verification results, a timeline and the evidence still missing.',
  openGraph: {
    title: 'Evidence case | Originary',
    description:
      'An example evidence case for a disputed paid MCP tool call: signed records, native artifacts, verification results, a timeline and the evidence still missing.',
    type: 'website',
    url: '/evidence-case',
    siteName: 'Originary',
    images: [{ url: '/og' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evidence case | Originary',
    description:
      'An example evidence case for a disputed paid MCP tool call: signed records, native artifacts, verification results, a timeline and the evidence still missing.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: { canonical: '/evidence-case' },
}

const sans = 'var(--font-sans), "IBM Plex Sans", system-ui, sans-serif'
const mono = 'var(--font-mono), "IBM Plex Mono", monospace'

const TIMELINE = [
  { time: '14:08:09', event: 'authorization reference supplied' },
  { time: '14:08:10', event: 'gateway reports allow' },
  { time: '14:08:11', event: 'MCP server reports tools.call market_search' },
  { time: '14:08:12', event: 'payment provider reports authorized' },
  { time: '14:08:13', event: 'tool server reports result digest' },
  { time: null, event: 'delivery observation: not supplied' },
  { time: null, event: 'counterparty acknowledgment: not supplied' },
]

const ESTABLISHED = [
  'the supplied keys validate the gateway and tool-server signatures;',
  'the tool name and argument digest are bound by the tool-server record;',
  'the payment-provider artifact is linked to the case;',
  'the result artifact supplied for review matches its bound digest.',
]
const MISSING = [
  'independent delivery observation;',
  'recipient acknowledgment;',
  'evidence that every relevant retry was included.',
]
const NOT_EVALUATED = [
  'commercial liability;',
  'legal sufficiency;',
  'correctness of the underlying service result;',
  'whether the issuer omitted another event.',
]

function FindingColumn({
  title,
  items,
  color,
  glyph,
}: {
  title: string
  items: string[]
  color: string
  glyph: 'established' | 'missing' | 'partial'
}) {
  return (
    <div style={{ borderTop: `2px solid ${color}`, paddingTop: 16 }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color }}>
        <StatusGlyph name={glyph} size={16} />
        <Mono size={12} color={color} style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          {title}
        </Mono>
      </span>
      <ul style={{ margin: '14px 0 0', padding: '0 0 0 18px', fontFamily: sans, fontSize: 14, lineHeight: 1.7, color: PALETTE.muted }}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default function EvidenceCasePage() {
  return (
    <PageShell>
      <Breadcrumbs current="Evidence case" href="/evidence-case" />
      <PageHero
        eyebrow="Evidence case"
        title="An evidence case another party can inspect on its own."
        sub="An evidence case packages selected signed records, preserved native artifacts, and verification results so a separate recipient can inspect the same material without access to the source systems."
        aside={<CaseSummary established={ESTABLISHED.length} missing={MISSING.length} notEvaluated={NOT_EVALUATED.length} />}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginTop: 8 }}>
          <a
            href="/evidence-case-illustrative.json"
            download
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '11px 18px',
              fontFamily: sans,
              fontSize: 13.5,
              fontWeight: 500,
              color: PALETTE.onAction,
              background: PALETTE.action,
              border: `1px solid ${PALETTE.action}`,
              textDecoration: 'none',
            }}
          >
            Download the illustrative case summary
          </a>
          <Link
            href="/verify"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '11px 18px',
              fontFamily: sans,
              fontSize: 13.5,
              fontWeight: 500,
              color: PALETTE.ink,
              background: 'transparent',
              border: `1px solid ${PALETTE.rule}`,
              textDecoration: 'none',
            }}
          >
            Verify one record locally
          </Link>
        </div>
        <p style={{ fontFamily: sans, fontSize: 13.5, lineHeight: 1.6, color: PALETTE.muted, margin: '16px 0 0' }}>
          <Link href="/ai-compliance" style={{ color: PALETTE.ink, textDecoration: 'underline', textUnderlineOffset: 3 }}>
            How evidence cases support compliance and audit review
          </Link>
        </p>
        <p style={{ fontFamily: sans, fontSize: 13, lineHeight: 1.6, color: PALETTE.faint, maxWidth: '62ch', margin: '14px 0 0' }}>
          This summary illustrates how findings may be presented. It is not a signed evidence
          bundle and cannot itself be cryptographically verified.
        </p>
      </PageHero>

      <EvidenceCasePanel />

      <PageSection paddingTop={0} paddingBottom={56}>
        <StepLabel>The scenario</StepLabel>
        <p style={{ fontFamily: sans, fontSize: 17, lineHeight: 1.6, color: PALETTE.ink, maxWidth: '62ch', margin: '0 0 8px' }}>
          A customer questions a paid MCP tool call to a market-data service.
        </p>
        <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: PALETTE.faint, maxWidth: '62ch', margin: '0 0 28px' }}>
          This scenario is illustrative. It intentionally includes missing evidence: a complete
          happy-path example would misrepresent what a real evidence case looks like.
        </p>
        <Card padding={0} style={{ overflow: 'hidden' }}>
          <ol style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {TIMELINE.map((row, i) => (
              <li
                key={row.event}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 16,
                  padding: '13px 20px',
                  borderBottom: i < TIMELINE.length - 1 ? `1px solid ${PALETTE.hairline}` : 'none',
                  background: 'transparent',
                }}
              >
                <Mono size={12} color={row.time ? PALETTE.faint : PALETTE.warn} style={{ minWidth: 92, flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  {row.time ? null : <StatusGlyph name="missing" size={13} />}
                  {row.time ?? 'not recorded'}
                </Mono>
                <span style={{ fontFamily: sans, fontSize: 14.5, color: row.time ? PALETTE.ink : PALETTE.muted }}>
                  {row.event}
                </span>
              </li>
            ))}
          </ol>
        </Card>
      </PageSection>

      <PageSection paddingTop={0} paddingBottom={64}>
        <StepLabel>Findings</StepLabel>
        <div
          style={{
            marginTop: 8,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
            gap: 'clamp(20px, 3vw, 36px)',
          }}
        >
          <FindingColumn title="Established" items={ESTABLISHED} color={PALETTE.success} glyph="established" />
          <FindingColumn title="Missing" items={MISSING} color={PALETTE.warn} glyph="missing" />
          <FindingColumn title="Not evaluated" items={NOT_EVALUATED} color="var(--not-evaluated)" glyph="partial" />
        </div>
      </PageSection>

      <InkBand>
        <InkHeading maxWidth="24ch">Send the reviewer one case they can check offline.</InkHeading>
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

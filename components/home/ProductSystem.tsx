import Link from 'next/link'
import { MAX_W, PAGE_PAD, PALETTE } from './palette'
import { SANS } from './typography'
import { Mono, SectionTitle } from './atoms/Mono'
import { MarkGlyph, type MarkName } from './glyphs/MarkGlyphs'

const MODULES: Array<{
  mark: MarkName
  title: string
  body: string
  href: string
  cta: string
}> = [
  {
    mark: 'target',
    title: 'Collect',
    body: 'Select the records and native artifacts relevant to the disputed action. Private logs remain in the systems that produced them.',
    href: '/product',
    cta: 'How records are issued',
  },
  {
    mark: 'sealCheck',
    title: 'Verify',
    body: 'Check signatures, record structure, bound digests, issuer information, and the verification key or expected-issuer policy supplied for the case.',
    href: '/verify',
    cta: 'Verify a sample',
  },
  {
    mark: 'diamond',
    title: 'Assess',
    body: 'Show what the evidence establishes, what is missing, where sources conflict, and which properties were not evaluated.',
    href: '/evidence-case',
    cta: 'See an evidence case',
  },
  {
    mark: 'link',
    title: 'Hand off',
    body: 'Export the records, native artifacts, verification report, and timeline so another party can inspect the same bounded case.',
    href: '/evidence-case',
    cta: 'Evidence case exports',
  },
]

/** ProductSystem: the three-module product grammar on the homepage. */
export function ProductSystem() {
  return (
    <section
      aria-labelledby="product-system-heading"
      style={{
        maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
        margin: '0 auto',
        padding: `40px ${PAGE_PAD} 88px ${PAGE_PAD}`,
      }}
    >
      <SectionTitle
        title="One evidence case, assembled from the systems that already observed the action."
        body="Originary connects selected signed records and native artifacts, verifies them under an explicit key policy, and hands the bounded result to another party."
      />
      <div className="home-prodsys-grid">
        {MODULES.map((m, i) => (
          <Link key={m.title} href={m.href} className="home-prodsys-card">
            <span className="home-prodsys-meta">
              <Mono size={11} color="#5a5346" style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {String(i + 1).padStart(2, '0')}
              </Mono>
              <span className="home-prodsys-mark" aria-hidden>
                <MarkGlyph name={m.mark} size={18} />
              </span>
            </span>
            <span
              style={{
                fontFamily: SANS,
                fontSize: 22,
                letterSpacing: '-0.014em',
                color: PALETTE.ink,
                display: 'block',
                margin: '10px 0 8px',
              }}
            >
              {m.title}
            </span>
            <span style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.6, color: PALETTE.muted, display: 'block' }}>
              {m.body}
            </span>
            <span className="home-arrow-link" style={{ fontFamily: SANS, fontSize: 13.5, color: PALETTE.ink, marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              {m.cta}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

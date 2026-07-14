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
    mark: 'ledger',
    title: 'Record',
    body: 'Capture selected facts at the workflow boundary and issue a compact, signed record. Private logs stay private.',
    href: '/product',
    cta: 'How records are issued',
  },
  {
    mark: 'sealCheck',
    title: 'Verify',
    body: 'Check the signature, issuer, policy context, and result independently. Offline by design; no account, no callback.',
    href: '/verify',
    cta: 'Verify a sample',
  },
  {
    mark: 'link',
    title: 'Bundle',
    body: 'Package related records and supporting evidence for disputes, audits, procurement, and partner review.',
    href: '/product',
    cta: 'Evidence bundles',
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
        title="One product system: Record, Verify, Bundle."
        body="Originary Verify covers the full evidence path: issue a signed record where the action happens, verify it anywhere, and assemble records into evidence when someone asks what happened."
      />
      <div className="home-prodsys-grid">
        {MODULES.map((m, i) => (
          <Link key={m.title} href={m.href} className="home-prodsys-card home-card">
            <span className="home-prodsys-meta">
              <Mono size={11} color="#7a7263" style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}>
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

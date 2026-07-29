import Link from 'next/link'
import { MAX_W, PAGE_PAD, PALETTE } from './palette'
import { MarkGlyph, type MarkName } from './glyphs/MarkGlyphs'

/**
 * The principal paths through the site, stated once as plain crawlable links.
 * Anchor text matches each destination's page name so the navigation hierarchy
 * reads the same way to a person and to a search engine.
 */
const PATHS: Array<{ label: string; href: string; note: string; mark: MarkName }> = [
  {
    label: 'Verification Pilot',
    href: '/product',
    note: 'The fixed-scope engagement: issue, verify, assess, hand off.',
    mark: 'target',
  },
  {
    label: 'Verify a Record',
    href: '/verify',
    note: 'Check a signed record against a key you supply. Nothing is uploaded.',
    mark: 'sealCheck',
  },
  {
    label: 'PEAC Protocol',
    href: '/peac',
    note: 'The open Apache-2.0 record format and verification model underneath.',
    mark: 'diamond',
  },
  {
    label: 'How It Works',
    href: '/how-it-works',
    note: 'Observe, issue, verify, hand off, in detail.',
    mark: 'pipeline',
  },
  {
    label: 'Record Gallery',
    href: '/records',
    note: 'Every record family, with what each one does and does not establish.',
    mark: 'ledger',
  },
  {
    label: 'PEAC Protocol Downloads',
    href: '/downloads',
    note: 'Source, CLI, SDK packages and offline verification tooling.',
    mark: 'chainSteps',
  },
]

export function StartHere() {
  return (
    <section
      aria-labelledby="start-here-heading"
      style={{
        maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
        margin: '0 auto',
        padding: `40px ${PAGE_PAD} 64px ${PAGE_PAD}`,
      }}
    >
      <h2 id="start-here-heading" className="sh-heading">
        Start here
      </h2>
      <p className="sh-sub">
        The six paths most people take through Originary and PEAC Protocol.
      </p>
      <ul className="sh-grid">
        {PATHS.map((p) => (
          <li key={p.href}>
            <Link href={p.href} className="sh-item">
              <span className="sh-mark" aria-hidden>
                <MarkGlyph name={p.mark} size={19} />
              </span>
              <span className="sh-text">
                <span className="sh-label">{p.label}</span>
                <span className="sh-note">{p.note}</span>
              </span>
              <span className="sh-arrow" aria-hidden>
                &#8594;
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="sh-foot" style={{ color: PALETTE.faint }}>
        Looking for something specific? <Link href="/contact">Contact Originary</Link>.
      </p>
    </section>
  )
}

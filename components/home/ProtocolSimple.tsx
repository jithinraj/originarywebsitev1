import Link from 'next/link'
import { MAX_W, PAGE_PAD } from './palette'
import { SectionTitle } from './atoms/Mono'
import { MarkGlyph, type MarkName } from './glyphs/MarkGlyphs'
import { btnGhostStyle } from './ctaStyles'

/**
 * Summary plate for the underlying protocol.
 */
const CELLS: Array<{ mark: MarkName; title: string; body: string }> = [
  { mark: 'braces', title: 'Open source', body: 'Inspect and implement it yourself.' },
  { mark: 'agentFrame', title: 'Self-hostable', body: 'Keep issuance and keys under your control.' },
  { mark: 'sealCheck', title: 'Local verification', body: 'Verify without uploading the record to Originary.' },
  { mark: 'diamond', title: 'Conformance-tested', body: 'Use public requirements and fixtures across implementations.' },
]

export function ProtocolSimple() {
  return (
    <section
      className="home-section"
      style={{ maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`, margin: '0 auto', padding: `40px ${PAGE_PAD} 88px ${PAGE_PAD}` }}
    >
      <div className="protos-grid">
        <div>
          <SectionTitle
            title="Open source. Verifiable without Originary."
            body="PEAC is the Apache-2.0 protocol behind Originary&apos;s records. Issue and verify records yourself, keep your own keys, and run verification locally."
          />
          <Link
            href="/peac"
            className="hs-btn"
            style={{ ...btnGhostStyle, marginTop: 28, display: 'inline-flex' }}
          >
            Explore PEAC Protocol &rarr;
          </Link>
        </div>
        <ul className="protos-cells" role="list">
          {CELLS.map((c) => (
            <li key={c.title} className="protos-cell">
              <span className="protos-cell-mark" aria-hidden>
                <MarkGlyph name={c.mark} size={20} />
              </span>
              <p className="protos-cell-title">{c.title}</p>
              <p className="protos-cell-body">{c.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

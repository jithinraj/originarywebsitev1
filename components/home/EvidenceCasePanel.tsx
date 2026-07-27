import Link from 'next/link'
import { MAX_W, PAGE_PAD, PALETTE } from './palette'
import { SectionTitle } from './atoms/Mono'
import { MarkGlyph, type MarkName } from './glyphs/MarkGlyphs'
import { StatusGlyph, type StatusName } from './glyphs/StatusGlyphs'

type Row = {
  label: string
  source: string
  mark: MarkName
  status: string
  tone: StatusName
}

const ROWS: Row[] = [
  { label: 'Authorization reference', source: 'client', mark: 'key', status: 'present', tone: 'established' },
  { label: 'Gateway decision', source: 'gateway', mark: 'valve', status: 'signature verified', tone: 'established' },
  { label: 'MCP/API invocation', source: 'tool server', mark: 'link', status: 'signature verified', tone: 'established' },
  { label: 'Payment-provider artifact', source: 'payment provider', mark: 'coin', status: 'linked', tone: 'linked' },
  { label: 'Delivery observation', source: 'not supplied', mark: 'pipeline', status: 'missing', tone: 'missing' },
  { label: 'Verification report', source: 'verifier', mark: 'ledger', status: 'complete with limitations', tone: 'partial' },
]

const TONE: Record<StatusName, string> = {
  established: '#245f3f',
  linked: '#375873',
  missing: '#9a3b2e',
  partial: '#77592f',
}

const LEGEND: Array<{ tone: StatusName; label: string }> = [
  { tone: 'established', label: 'established' },
  { tone: 'linked', label: 'linked artifact' },
  { tone: 'partial', label: 'bounded' },
  { tone: 'missing', label: 'not supplied' },
]

export function EvidenceCasePanel() {
  const established = ROWS.filter((r) => r.tone === 'established').length
  return (
    <section
      style={{
        maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
        margin: '0 auto',
        padding: `40px ${PAGE_PAD} 88px ${PAGE_PAD}`,
      }}
    >
      <SectionTitle
        title="One evidence case, with its gaps stated."
        body="Verification separates what the supplied records establish from what is missing, conflicting, or not evaluated. A complete happy path would misrepresent what real evidence looks like."
      />

      <div className="home-case-layout">
        <div className="home-case-sheet">
          <div className="home-case-head">
            <span className="home-case-head-title">Evidence case</span>
            <span className="home-case-head-ref">disputed MCP tool call</span>
          </div>

          <div className="home-case-meter" aria-hidden>
            {ROWS.map((r) => (
              <span key={r.label} style={{ background: TONE[r.tone] }} />
            ))}
          </div>
          <p className="home-case-meter-label">
            <strong>
              {established} of {ROWS.length}
            </strong>{' '}
            elements verified under the supplied key. One is linked, one is bounded, one was never
            supplied.
          </p>

          <dl className="home-case-rows">
            {ROWS.map((row) => (
              <div key={row.label} className="home-case-row">
                <dt className="home-case-row-label">
                  <span className="home-case-row-mark" aria-hidden>
                    <MarkGlyph name={row.mark} size={19} />
                  </span>
                  <span>
                    {row.label}
                    <span className="home-case-row-source">{row.source}</span>
                  </span>
                </dt>
                <dd className="home-case-row-status" style={{ color: TONE[row.tone] }}>
                  <StatusGlyph name={row.tone} size={17} />
                  <span>{row.status}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="home-case-legend">
            {LEGEND.map((l) => (
              <span key={l.tone} style={{ color: TONE[l.tone] }}>
                <StatusGlyph name={l.tone} size={14} />
                <span>{l.label}</span>
              </span>
            ))}
          </div>
        </div>

        <aside className="home-case-aside">
          <p className="home-case-aside-eyebrow">What a reviewer can conclude</p>
          <ul className="home-case-aside-list">
            <li>
              <StatusGlyph name="established" size={16} style={{ color: TONE.established }} />
              <span>
                The gateway and tool server signed what they reported, under the key supplied for
                this case.
              </span>
            </li>
            <li>
              <StatusGlyph name="linked" size={16} style={{ color: TONE.linked }} />
              <span>
                The payment artifact is bound to the case by digest, and verified on the
                provider&apos;s own terms.
              </span>
            </li>
            <li>
              <StatusGlyph name="missing" size={16} style={{ color: TONE.missing }} />
              <span>
                Delivery was never recorded, so the case cannot speak to it. The gap is stated, not
                inferred.
              </span>
            </li>
          </ul>
          <p className="home-case-aside-foot">
            Illustrative evidence case &middot; no customer or adoption claim
          </p>
          <Link href="/evidence-case" className="home-arrow-link home-case-aside-cta">
            See what an evidence case contains
          </Link>
        </aside>
      </div>
    </section>
  )
}

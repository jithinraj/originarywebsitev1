import { MAX_W, PAGE_PAD } from './palette'
import { SectionHead } from './atoms/SectionHead'
import { StatusGlyph } from './glyphs/StatusGlyphs'

/**
 * What a valid signature establishes and what it leaves to the reader, set as
 * a result panel: green icon and word for what was checked, the dashed
 * not-evaluated mark for everything else.
 */
const CHECKED = [
  'The supplied key validates the signature.',
  'The protected record has not changed since it was signed.',
  'Evaluated content matches what the record binds.',
]

const NOT_CHECKED = [
  'Whether every relevant event was recorded.',
  'Whether the issuer, or each statement, should be trusted.',
  'Whether an external event or legal requirement was satisfied.',
]

export function VerificationLimits() {
  return (
    <section
      className="hx-section"
      style={{ maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`, margin: '0 auto', paddingLeft: PAGE_PAD, paddingRight: PAGE_PAD }}
    >
      <div className="vlim-grid">
        <SectionHead
          eyebrow="What verification means"
          title="Know what was verified."
          qualifier="Nothing more is claimed."
          stack
          body="A valid signature is a precise result. It establishes three things and leaves the rest to your own review."
        />
        <div className="vlim-panel" role="group" aria-label="What a valid signature establishes">
          <p className="vlim-panel-head">
            <span>Result</span>
            <span>Signature valid</span>
          </p>
          <ul className="vlim-list" role="list">
            {CHECKED.map((c) => (
              <li key={c} data-kind="checked">
                <StatusGlyph name="established" size={20} />
                <span className="vlim-word">Checked</span>
                <span className="vlim-text">{c}</span>
              </li>
            ))}
          </ul>
          <ul className="vlim-list vlim-list-not" role="list">
            {NOT_CHECKED.map((c) => (
              <li key={c} data-kind="not">
                <StatusGlyph name="missing" size={20} />
                <span className="vlim-word">Not checked</span>
                <span className="vlim-text">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

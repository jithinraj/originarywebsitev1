import { MAX_W, PAGE_PAD } from './palette'
import { SectionTitle } from './atoms/Mono'

/**
 * States what a valid signature establishes and what it does not.
 */
const CAN = [
  'the supplied key validates the signature;',
  'the protected record has not changed;',
  'evaluated content matches what the record binds.',
]

const CANNOT = [
  'that every relevant event was recorded;',
  'that the issuer or every statement should be trusted;',
  'that an external event or legal requirement was satisfied.',
]

export function VerificationLimits() {
  return (
    <section
      className="home-section"
      style={{ maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`, margin: '0 auto', padding: `40px ${PAGE_PAD} 88px ${PAGE_PAD}` }}
    >
      <SectionTitle title="Know exactly what was verified." />
      <div className="vlim-grid" style={{ marginTop: 44 }}>
        <div className="vlim-col vlim-col-can">
          <p className="vlim-head">Verification tells you</p>
          <ul>
            {CAN.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div className="vlim-col">
          <p className="vlim-head">It doesn&apos;t automatically tell you</p>
          <ul>
            {CANNOT.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="vlim-close">
        Clear verification, without claiming more than the record establishes.
      </p>
    </section>
  )
}

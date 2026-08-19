import Link from 'next/link'
import { MAX_W, PAGE_PAD } from './palette'
import { btnSolidStyle, btnGhostStyle } from './ctaStyles'

export function EndCTA() {
  return (
    <section
      id="demo-form"
      className="home-section"
      style={{ maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`, margin: '0 auto', padding: `40px ${PAGE_PAD} 96px ${PAGE_PAD}` }}
    >
      <div className="endcta-wrap" style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
        <h2 className="endcta-h2">Put your first action on the record.</h2>
        <p className="endcta-body">
          Tell us what the system does and who needs to review it. We&apos;ll tell you whether
          PEAC fits before you spend time integrating it.
        </p>
        <div className="endcta-ctas">
          <Link href="/contact" className="hs-btn" style={btnSolidStyle}>
            Discuss a workflow
          </Link>
          <Link href="/peac" className="hs-btn" style={btnGhostStyle}>
            Build with PEAC
          </Link>
        </div>
      </div>
    </section>
  )
}

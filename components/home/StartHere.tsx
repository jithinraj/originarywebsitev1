import Link from 'next/link'
import { MAX_W, PAGE_PAD } from './palette'
import { SectionHead } from './atoms/SectionHead'
import { btnSolidStyle, btnGhostStyle } from './ctaStyles'

/**
 * Closing statement and the target of every "Start here" link: talk to us,
 * or take one of four self-serve paths. The panel is the one feature card
 * (accent tint) on this view.
 */
const PATHS: Array<{ title: string; body: string; href: string }> = [
  { title: 'Verify a record', body: 'Check a signed record locally.', href: '/verify' },
  { title: 'Add records to MCP', body: 'Sign records for important tool calls.', href: '/mcp' },
  { title: 'Add records to an API', body: 'Issue records alongside API calls.', href: '/how-it-works' },
  { title: 'Record gateway decisions', body: 'Sign allow, deny, redact and review decisions.', href: '/ai-gateway' },
]

export function StartHere() {
  return (
    <section
      id="start-here"
      className="hx-section hx-section-last"
      style={{ maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`, margin: '0 auto', paddingLeft: PAGE_PAD, paddingRight: PAGE_PAD }}
    >
      <div className="sth-panel">
        <div id="demo-form" className="sth-pitch">
          <SectionHead
            eyebrow="Start here"
            title="You know which action gets questioned."
            qualifier="Start there."
            stack
            display
            center
            body="Tell us what your system does and who needs to check it. We'll help you give that one action a signed record first, then grow from there."
          />
          <div className="sth-ctas">
            <Link href="/contact" className="hs-btn home-arrow-link" style={btnSolidStyle}>
              Start a pilot
              <Arrow />
            </Link>
            <Link href="/peac" className="hs-btn home-arrow-link" style={btnGhostStyle}>
              Read the docs
              <Arrow />
            </Link>
          </div>
        </div>
        <ul className="sth-paths" role="list" aria-label="Start on your own">
          {PATHS.map((p) => (
            <li key={p.title}>
              <Link href={p.href} className="sth-path">
                <span className="sth-path-title">
                  {p.title}
                  <Arrow />
                </span>
                <span className="sth-path-body">{p.body}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M1.5 6h9M7 2.5 10.5 6 7 9.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

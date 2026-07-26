import Link from 'next/link'
import { SANS } from './typography'
import { PALETTE, MAX_W, PAGE_PAD } from './palette'
import { Mono } from './atoms/Mono'

export function BuiltOnPEAC() {
  return (
    <section
      id="peac"
      data-screen-label="08 peac"
      style={{
        maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
        margin: '0 auto',
        padding: `48px ${PAGE_PAD} 112px ${PAGE_PAD}`,
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(28px, 4vw, 56px)',
          alignItems: 'start',
        }}
      >
        <div>
          <Mono
            size={11}
            color={PALETTE.faint}
            style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}
          >
            open-source protocol
          </Mono>
          <h2
            style={{
              fontFamily: SANS,
              fontSize: 36,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              fontWeight: 500,
              color: PALETTE.ink,
              margin: '14px 0 0 0',
              textWrap: 'pretty',
            }}
          >
            Built on an open record format, not a proprietary evidence database.
          </h2>
        </div>
        <div>
          <p
            style={{
              fontFamily: SANS,
              fontSize: 17,
              lineHeight: 1.6,
              color: PALETTE.muted,
              margin: 0,
              textWrap: 'pretty',
            }}
          >
            PEAC Protocol is an Apache-2.0 open protocol for portable signed interaction
            records. Teams can issue, verify, implement, and self-host PEAC
            independently of Originary.
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '24px 0 0 0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
              gap: '10px 24px',
            }}
          >
            {[
              'Portable signed records',
              'Offline verification',
              'Self-managed keys',
              'Independent implementations',
              'Conformance vectors',
              'No Originary callback required',
            ].map((item) => (
              <li
                key={item}
                style={{
                  fontFamily: SANS,
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: PALETTE.ink,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                }}
              >
                <span
                  style={{
                    width: 4,
                    height: 4,
                    marginTop: 8,
                    flexShrink: 0,
                    background: PALETTE.ink,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 28, display: 'flex', gap: 10, flexWrap: 'wrap' as const }}>
            <Link
              href="/peac"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 18px',
                fontFamily: SANS,
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: '-0.005em',
                textDecoration: 'none',
                color: PALETTE.paper,
                background: PALETTE.ink,
                border: `1px solid ${PALETTE.ink}`,
              }}
            >
              Read PEAC Protocol
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 5h8M5.5 1.5L9 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" />
              </svg>
            </Link>
            <a
              href="https://github.com/peacprotocol/peac"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 18px',
                fontFamily: SANS,
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: '-0.005em',
                textDecoration: 'none',
                color: PALETTE.ink,
                background: 'transparent',
                border: `1px solid ${PALETTE.rule}`,
              }}
            >
              View the source
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M1 5h8M5.5 1.5L9 5l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.25"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

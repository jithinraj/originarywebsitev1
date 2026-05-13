import { SANS } from './typography'
import { PALETTE, MAX_W, PAGE_PAD } from './palette'
import { Mono } from './atoms/Mono'

export function BuiltOnPEAC() {
  return (
    <section
      id="peac"
      data-screen-label="08 peac"
      style={{
        maxWidth: MAX_W,
        margin: '0 auto',
        padding: `48px ${PAGE_PAD} 112px ${PAGE_PAD}`,
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: 56,
          alignItems: 'start',
        }}
      >
        <div>
          <Mono
            size={11}
            color={PALETTE.faint}
            style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}
          >
            open standard
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
            Built on PEAC Protocol.
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
            PEAC Protocol is the open standard for portable signed interaction
            records. Originary provides managed issuance, hosted verification,
            audit bundles, and production support for teams using PEAC in real
            workflows.
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '24px 0 0 0',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8px 24px',
            }}
          >
            {[
              'Apache-2.0',
              'Offline verification',
              'Self-hostable verifier',
              'Exportable records',
            ].map((item) => (
              <li
                key={item}
                style={{
                  fontFamily: SANS,
                  fontSize: 14,
                  color: PALETTE.ink,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <span style={{ width: 4, height: 4, background: PALETTE.ink }} />
                {item}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 28 }}>
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
              View PEAC on GitHub
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

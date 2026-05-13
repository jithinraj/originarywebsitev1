import { SANS } from './typography'
import { PALETTE, MAX_W, PAGE_PAD } from './palette'

export function FinalCTA() {
  return (
    <section
      data-screen-label="10 final-cta"
      style={{
        maxWidth: MAX_W,
        margin: '0 auto',
        padding: `48px ${PAGE_PAD} 128px ${PAGE_PAD}`,
      }}
    >
      <div
        style={{
          border: `1px solid ${PALETTE.hairline}`,
          background: PALETTE.paper,
          padding: '48px 36px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: SANS,
            fontSize: 36,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            fontWeight: 500,
            color: PALETTE.ink,
            margin: 0,
            textWrap: 'balance',
          }}
        >
          If one flow needs stronger proof, start there.
        </h2>
        <p
          style={{
            fontFamily: SANS,
            fontSize: 16,
            lineHeight: 1.6,
            color: PALETTE.muted,
            margin: '18px auto 0 auto',
            maxWidth: 560,
            textWrap: 'pretty',
          }}
        >
          Logs stay local. Records cross boundaries. Bring one API, MCP,
          commerce, provisioning, gateway, or runtime flow and turn it into a
          signed record another party can verify.
        </p>
        <div
          style={{
            marginTop: 32,
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <FinalLink href="/contact" primary>
            Start with one workflow
          </FinalLink>
          <FinalLink href="/downloads">Verify a sample record</FinalLink>
        </div>
      </div>
    </section>
  )
}

function FinalLink({
  children,
  href,
  primary,
}: {
  children: React.ReactNode
  href: string
  primary?: boolean
}) {
  return (
    <a
      href={href}
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
        color: primary ? PALETTE.paper : PALETTE.ink,
        background: primary ? PALETTE.ink : 'transparent',
        border: `1px solid ${primary ? PALETTE.ink : PALETTE.rule}`,
      }}
    >
      {children}
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M1 5h8M5.5 1.5L9 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    </a>
  )
}

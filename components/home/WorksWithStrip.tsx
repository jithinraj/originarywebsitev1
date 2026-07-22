import { MAX_W, PAGE_PAD, PALETTE } from './palette'
import { MONO } from './typography'

type LogoEntry = {
  name: string
  src: string
  /** Optical height cap in px, tuned per asset. */
  size: number
}

/**
 * Each entry corresponds to an adapter, mapping, worker surface, or interop
 * matrix row in the PEAC repository. Per-system status and evidence are listed
 * on the trust page.
 */
const LOGOS: LogoEntry[] = [
  { name: 'MCP', src: '/logos/mcp-algorand.png', size: 34 },
  { name: 'x402', src: '/logos/x402.svg', size: 25 },
  { name: 'Stripe', src: '/logos/stripe-wordmark-slate.svg', size: 25 },
  { name: 'A2A', src: '/logos/a2a-algorand.svg', size: 34 },
  { name: 'Cloudflare', src: '/logos/cloudflare-wordmark.png', size: 30 },
  { name: 'AP2', src: '/logos/ap2-algorand.svg', size: 34 },
  { name: 'MPP', src: '/logos/mpp-logo-dark.svg', size: 29 },
  { name: 'OpenTelemetry', src: '/logos/opentelemetry.svg', size: 31 },
]

export function WorksWithStrip() {
  return (
    <section
      aria-label="Works with"
      className="home-works-with"
      style={{
        borderTop: `1px solid ${PALETTE.hairline}`,
        borderBottom: `1px solid ${PALETTE.hairline}`,
        padding: `clamp(18px, 2.4vh, 28px) ${PAGE_PAD} clamp(22px, 3vh, 36px) ${PAGE_PAD}`,
      }}
    >
      <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>
      <p
        style={{
          fontFamily: MONO,
          fontSize: 10.5,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: PALETTE.muted,
          margin: '0 0 22px 0',
        }}
      >
        Works with
      </p>
      <ul className="home-works-with-grid" role="list">
        {LOGOS.map((logo) => (
          <li key={logo.name} className="home-works-with-item">
            <div className="home-works-with-mark">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt=""
                aria-hidden="true"
                width={120}
                height={32}
                loading="lazy"
                decoding="async"
                style={{ maxHeight: logo.size }}
              />
            </div>
            <span className="home-works-with-label">{logo.name}</span>
          </li>
        ))}
      </ul>
      </div>
    </section>
  )
}

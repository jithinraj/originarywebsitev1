// Static content: no hooks, state, or browser APIs, so this renders on the server.
import { MAX_W, PAGE_PAD, PALETTE } from './palette'
import { MONO } from './typography'

type LogoEntry = {
  name: string
  src: string
  /** Icon-forward marks that read small at the nominal height and take a larger cap. */
  icon?: boolean
}

const LOGOS: LogoEntry[] = [
  { name: 'MCP', src: '/logos/mcp-algorand.png', icon: true },
  { name: 'x402', src: '/logos/x402.svg' },
  { name: 'Stripe', src: '/logos/stripe-wordmark-slate.svg' },
  { name: 'A2A', src: '/logos/a2a-algorand.svg', icon: true },
  { name: 'Cloudflare', src: '/logos/cloudflare-wordmark.png' },
  { name: 'AP2', src: '/logos/ap2-algorand.svg', icon: true },
  { name: 'Vercel', src: '/logos/vercel-logotype-light.png' },
  { name: 'MPP', src: '/logos/mpp-logo-dark.svg', icon: true },
  { name: 'OpenTelemetry', src: '/logos/opentelemetry.svg', icon: true },
  { name: 'LangChain', src: '/logos/langchain-lockup-black.svg' },
]

export function WorksWithStrip() {
  return (
    <section
      aria-label="Designed to fit with the stack you already use"
      className="home-works-with"
      style={{
        maxWidth: MAX_W,
        margin: '0 auto',
        padding: `clamp(8px, 1.4vh, 18px) ${PAGE_PAD} clamp(24px, 3.5vh, 44px) ${PAGE_PAD}`,
      }}
    >
      <p
        style={{
          fontFamily: MONO,
          fontSize: 11.5,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: PALETTE.muted,
          textAlign: 'center',
          margin: '0 0 26px 0',
        }}
      >
        Designed to fit with the stack you already use
      </p>
      <ul className="home-works-with-grid" role="list">
        {LOGOS.map((logo) => (
          <li key={logo.name} className="home-works-with-item" data-icon={logo.icon ? '' : undefined}>
            <div className="home-works-with-mark">
              {/* Decorative: the visible label below is the accessible name. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt=""
                aria-hidden="true"
                width={120}
                height={32}
                loading="lazy"
                decoding="async"
              />
            </div>
            <span className="home-works-with-label">{logo.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

import { MarkGlyph, type MarkName } from './glyphs/MarkGlyphs'
import { MAX_W, PAGE_PAD, PALETTE } from './palette'
import { MONO } from './typography'

type Ink = 'flat' | 'gray' | 'invert'
type Logo = { src: string; w: number; h: number; ink: Ink }
type Item = { name: string; href: string; logo?: Logo; glyph?: MarkName }

const GH = 'https://github.com/peacprotocol/peac/tree/main/'
const GHB = 'https://github.com/peacprotocol/peac/blob/main/'

const STACK: Item[] = [
  { name: 'Cloudflare Workers', href: GH + 'surfaces/workers/cloudflare', logo: { src: '/logos/cloudflare-wordmark.png', w: 60, h: 20, ink: 'gray' } },
  { name: 'UCP', href: GH + 'integrator-kits/ucp', logo: { src: '/logos/ucp.svg', w: 24, h: 28, ink: 'flat' } },
  { name: 'MCP', href: GH + 'integrator-kits/mcp', logo: { src: '/logos/mcp-official.svg', w: 117, h: 17, ink: 'invert' } },
  { name: 'MPP', href: GH + 'examples/mpp-payment-record', logo: { src: '/logos/mpp-wordmark.svg', w: 34, h: 15, ink: 'invert' } },
  { name: 'Stripe Projects', href: GH + 'integrator-kits/stripe-projects', logo: { src: '/logos/stripe-wordmark-slate.svg', w: 38, h: 16, ink: 'flat' } },
  { name: 'AP2', href: GHB + 'docs/specs/AP2-COMPOSITION.md', logo: { src: '/logos/ap2.svg', w: 26, h: 28, ink: 'flat' } },
  { name: 'Microsoft AGT', href: GH + 'packages/adapters/runtime-governance', logo: { src: '/logos/microsoft-agt.svg', w: 27, h: 27, ink: 'gray' } },
  { name: 'OpenClaw', href: GH + 'packages/adapters/openclaw', logo: { src: '/logos/openclaw.svg', w: 27, h: 27, ink: 'gray' } },
  { name: 'SLSA', href: GH + 'packages/mappings/slsa', logo: { src: '/logos/slsa.svg', w: 61, h: 17, ink: 'invert' } },
  { name: 'A2A', href: GH + 'integrator-kits/a2a', logo: { src: '/logos/a2a-official.svg', w: 80, h: 20, ink: 'flat' } },
  { name: 'OpenTelemetry', href: GHB + 'docs/guides/telemetry-otel-correlation.md', logo: { src: '/logos/opentelemetry.svg', w: 64, h: 24, ink: 'flat' } },
  { name: 'x402', href: GH + 'integrator-kits/x402', logo: { src: '/logos/x402-mark.svg', w: 44, h: 17, ink: 'flat' } },
]

const EVIDENCE: Item[] = [
  { name: 'Runtime governance', href: GH + 'packages/adapters/runtime-governance', glyph: 'scales' },
  { name: 'DID', href: GH + 'packages/adapters/did', glyph: 'identity' },
  { name: 'OpenAI-compatible', href: GH + 'packages/adapters/openai-compatible', glyph: 'braces' },
  { name: 'paymentauth', href: GH + 'integrator-kits/paymentauth', glyph: 'lockCoin' },
  { name: 'EAT', href: GH + 'packages/adapters/eat', glyph: 'token' },
  { name: 'Content Signals', href: GH + 'integrator-kits/content-signals', glyph: 'signal' },
  { name: 'Managed agents', href: GH + 'packages/adapters/managed-agents', glyph: 'agentFrame' },
  { name: 'in-toto', href: GH + 'packages/mappings/intoto', glyph: 'chainSteps' },
]

const STANDARDS = 'Ed25519 · JCS · Compact JWS · HTTP Message Signatures · Offline verification'

function ItemMark({ item }: { item: Item }) {
  return (
    <span className="home-marquee-figure">
      {item.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="home-marquee-logo"
          data-ink={item.logo.ink}
          src={item.logo.src}
          alt=""
          width={item.logo.w}
          height={item.logo.h}
          loading="lazy"
          decoding="async"
          style={{ height: item.logo.h }}
        />
      ) : (
        <MarkGlyph name={item.glyph ?? 'diamond'} size={22} />
      )}
    </span>
  )
}

function Track({ items, dir, stacked }: { items: Item[]; dir: 'left' | 'right'; stacked?: boolean }) {
  const sequence = [...items, ...items]
  return (
    <div className="home-marquee" data-dir={dir} data-stacked={stacked ? '' : undefined}>
      <ul className="home-marquee-track" role="list">
        {sequence.map((it, i) => {
          const dup = i >= items.length
          return (
            <li key={`${it.name}-${i}`} className="home-marquee-item" data-dup={dup ? '' : undefined}>
              <a
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden={dup}
                tabIndex={dup ? -1 : undefined}
              >
                <ItemMark item={it} />
                <span className="home-marquee-name">{it.name}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function InteropMarquee() {
  return (
    <section
      aria-label="Interoperability surfaces"
      style={{
        borderTop: `1px solid ${PALETTE.hairline}`,
        borderBottom: `1px solid ${PALETTE.hairline}`,
        padding: `clamp(22px, 3vh, 32px) 0 clamp(24px, 3.5vh, 36px)`,
      }}
    >
      <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: `0 ${PAGE_PAD}` }}>
        <p className="home-marquee-eyebrow">Works across the agent and API stack</p>
      </div>
      <Track items={STACK} dir="left" stacked />

      <div style={{ maxWidth: MAX_W, margin: '20px auto 0', padding: `0 ${PAGE_PAD}` }}>
        <p className="home-marquee-eyebrow">Interoperates across commerce, identity, and evidence</p>
      </div>
      <Track items={EVIDENCE} dir="right" />

      <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: `18px ${PAGE_PAD} 0` }}>
        <p
          style={{
            fontFamily: MONO,
            fontSize: 11.5,
            letterSpacing: '0.04em',
            color: PALETTE.muted,
            margin: 0,
          }}
        >
          {STANDARDS}
        </p>
      </div>
    </section>
  )
}

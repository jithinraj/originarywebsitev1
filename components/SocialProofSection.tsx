'use client'

import Link from 'next/link'
import Image from 'next/image'

function LogoIcon({ name }: { name: string }) {
  // Real logo images with brand-colored backgrounds
  const logos: Record<string, React.ReactNode> = {
    'MCP': (
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '12px',
        background: '#CC785C',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 700,
        fontSize: '16px',
        fontFamily: 'system-ui, sans-serif'
      }}>
        MCP
      </div>
    ),
    'A2A': (
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '12px',
        background: '#4285F4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px'
      }}>
        <Image
          src="/logos/a2a.svg"
          alt="A2A"
          width={40}
          height={40}
          style={{
            width: '100%',
            height: 'auto',
            filter: 'brightness(0) invert(1)'
          }}
        />
      </div>
    ),
    'x402': (
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '12px',
        background: '#0052FF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 700,
        fontSize: '14px',
        fontFamily: 'system-ui, sans-serif'
      }}>
        x402
      </div>
    ),
    'Cloudflare': (
      <Image
        src="/logos/cloudflare.png"
        alt="Cloudflare"
        width={64}
        height={64}
        style={{
          width: '64px',
          height: '64px',
          objectFit: 'contain',
          borderRadius: '12px',
          background: '#fff',
          padding: '8px'
        }}
      />
    ),
    'Vercel': (
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '12px',
        background: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 700,
        fontSize: '28px'
      }}>
        ▲
      </div>
    ),
    'Ethereum': (
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '12px',
        background: '#627EEA',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 700,
        fontSize: '11px',
        fontFamily: 'system-ui, sans-serif'
      }}>
        ERC-8004
      </div>
    )
  }

  return logos[name] || null
}

export default function SocialProofSection() {
  const logos = [
    { name: 'MCP', label: 'MCP', href: '/docs/mcp/receipts' },
    { name: 'A2A', label: 'A2A', href: '/docs/a2a/attach-points' },
    { name: 'x402', label: 'x402', href: '/docs/payments/x402' },
    { name: 'Cloudflare', label: 'Cloudflare', href: '/docs/deploy/cloudflare-worker' },
    { name: 'Vercel', label: 'Vercel', href: '/docs/deploy/vercel' },
    { name: 'Ethereum', label: 'ERC-8004:', href: 'https://eips.ethereum.org/EIPS/eip-8004' }
  ]

  const standards = [
    { name: 'AIPREF', description: 'Reads preferences; snapshots into every receipt.', href: '' },
    { name: 'C2PA', description: 'Optionally links to content provenance manifest.', href: 'https://c2pa.org' },
    { name: 'RSL 1', description: 'Receipt Specification Language for structured receipt definitions.', href: 'https://rslstandard.org' },
    { name: 'ERC-8004', description: 'Trustless Agents standard for on-chain AI agent interactions.', href: 'https://eips.ethereum.org/EIPS/eip-8004' }
  ]

  const metrics = [
    { value: 'Offline-verifiable', label: 'Receipts' },
    { value: 'Edge-ready', label: 'Enforcement' },
    { value: 'Open spec', label: 'Self-hostable' }
  ]

  return (
    <section
      className="social-proof-section"
      style={{
        padding: 'var(--section-padding) 0',
        background: 'var(--white)',
        borderTop: '1px solid var(--gray-100)',
        borderBottom: '1px solid var(--gray-100)'
      }}
    >
      <div className="container">
        {/* Metrics row - creates immediate trust/gravity */}
        <div
          className="animate-on-scroll"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-12)',
            marginBottom: 'var(--space-12)',
            flexWrap: 'wrap'
          }}
        >
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              style={{
                textAlign: 'center',
                minWidth: '120px'
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: 'var(--gray-900)',
                  lineHeight: 1,
                  marginBottom: 'var(--space-2)'
                }}
              >
                {metric.value}
              </div>
              <div
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--gray-500)',
                  fontWeight: 500
                }}
              >
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: 'center',
            marginBottom: 'var(--space-8)'
          }}
        >
          <p
            className="text-label"
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--gray-500)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 600
            }}
          >
            Adapters & touchpoints
          </p>
        </div>

        <div
          className="logo-strip animate-on-scroll"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-8)',
            flexWrap: 'wrap'
          }}
        >
          {logos.map((logo) => (
            <Link
              key={logo.name}
              href={logo.href}
              data-analytics-id="touchpoint_tile_clicked"
              data-analytics-name={logo.name}
              aria-label={logo.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--space-3)',
                opacity: 0.5,
                filter: 'grayscale(100%)',
                transition: 'all var(--duration-300) var(--ease-out)',
                cursor: 'pointer',
                textDecoration: 'none',
                minWidth: '44px',
                minHeight: '44px',
                padding: 'var(--space-2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.filter = 'grayscale(0%)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.5'
                e.currentTarget.style.filter = 'grayscale(100%)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div
                style={{
                  transition: 'all var(--duration-300) var(--ease-out)'
                }}
              >
                <LogoIcon name={logo.name} />
              </div>
              <span
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--gray-500)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {logo.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Standards row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-8)',
            marginTop: 'var(--space-8)',
            flexWrap: 'wrap'
          }}
        >
          <p
            style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--gray-500)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 600
            }}
          >
            Standards we support:
          </p>
          {standards.map((standard) =>
            standard.href ? (
              <a
                key={standard.name}
                href={standard.href}
                target="_blank"
                rel="noopener noreferrer"
                title={standard.description}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: 'var(--space-2) var(--space-4)',
                  background: 'var(--gray-50)',
                  border: '1px solid var(--gray-200)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  color: 'var(--gray-700)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--brand-primary)'
                  e.currentTarget.style.color = 'var(--brand-primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gray-200)'
                  e.currentTarget.style.color = 'var(--gray-700)'
                }}
              >
                {standard.name}
              </a>
            ) : (
              <div
                key={standard.name}
                title={standard.description}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: 'var(--space-2) var(--space-4)',
                  background: 'var(--gray-50)',
                  border: '1px solid var(--gray-200)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  color: 'var(--gray-700)',
                  cursor: 'help'
                }}
              >
                {standard.name}
              </div>
            )
          )}
        </div>


      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .logo-strip {
            gap: var(--space-4) !important;
          }
        }
      `}</style>
    </section>
  )
}
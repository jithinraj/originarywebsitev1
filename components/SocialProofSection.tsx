'use client'

import Link from 'next/link'

function LogoIcon({ name }: { name: string }) {
  const logos = {
    'MCP': (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#000000"/>
        <text x="50%" y="52%" textAnchor="middle" dy=".35em" fill="#ffffff" fontSize="16" fontWeight="600" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">MCP</text>
      </svg>
    ),
    'A2A': (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#4285F4"/>
        <text x="50%" y="52%" textAnchor="middle" dy=".35em" fill="#ffffff" fontSize="16" fontWeight="600" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">A2A</text>
      </svg>
    ),
    'x402': (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#0052FF"/>
        <text x="50%" y="52%" textAnchor="middle" dy=".35em" fill="#ffffff" fontSize="15" fontWeight="600" fontFamily="monospace">x402</text>
      </svg>
    ),
    'Cloudflare': (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#F38020"/>
        <path d="M45 37.5C45.5 37 45.8 36.3 45.8 35.5C45.8 34 44.6 32.8 43.1 32.8C43 32.8 42.9 32.8 42.8 32.8C42.5 28.3 38.8 24.7 34.2 24.7C31.4 24.7 28.9 26.1 27.4 28.3C26.7 28 25.9 27.8 25 27.8C21.7 27.8 19 30.5 19 33.8C19 34.2 19 34.6 19.1 35C17.3 35.5 16 37.1 16 39C16 41.2 17.8 43 20 43H43C44.7 43 46 41.7 46 40C46 38.9 45.6 38 45 37.5Z" fill="white"/>
        <path d="M42 35C42 35 38 32 34 32C30 32 28 35 28 35" stroke="#F38020" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    'Stripe': (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#635BFF"/>
        <path d="M32 25.5C32 25.5 28.5 26.8 28.5 29.5C28.5 32.2 32 33.5 32 36.2C32 38.9 28.5 40.2 28.5 42.9" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
      </svg>
    ),
    'Vercel': (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#000000"/>
        <path d="M32 22L44 42H20L32 22Z" fill="#ffffff"/>
      </svg>
    ),
    'Ethereum': (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#627EEA"/>
        <path d="M32 16L31.7 17V36.8L32 37.1L40.5 32L32 16Z" fill="white" fillOpacity="0.6"/>
        <path d="M32 16L23.5 32L32 37.1V16Z" fill="white"/>
        <path d="M32 39.6L31.8 39.8V46.3L32 47L40.5 34.5L32 39.6Z" fill="white" fillOpacity="0.6"/>
        <path d="M32 47V39.6L23.5 34.5L32 47Z" fill="white"/>
        <path d="M32 37.1L40.5 32L32 27.3V37.1Z" fill="white" fillOpacity="0.2"/>
        <path d="M23.5 32L32 37.1V27.3L23.5 32Z" fill="white" fillOpacity="0.6"/>
      </svg>
    )
  }

  return logos[name as keyof typeof logos] || null
}

export default function SocialProofSection() {
  const logos = [
    { name: 'MCP', label: 'MCP', href: '/docs/mcp/receipts' },
    { name: 'A2A', label: 'A2A', href: '/docs/a2a/attach-points' },
    { name: 'x402', label: 'x402', href: '/docs/payments/x402' },
    { name: 'Cloudflare', label: 'Cloudflare', href: '/docs/deploy/cloudflare-worker' },
    { name: 'Stripe', label: 'Stripe', href: '/docs/payments/stripe' },
    { name: 'Vercel', label: 'Vercel', href: '/docs/deploy/vercel' },
    { name: 'Ethereum', label: 'ERC-8004:', href: 'https://eips.ethereum.org/EIPS/eip-8004' }
  ]

  const standards = [
    { name: 'AIPREF', description: 'Reads preferences; snapshots into every receipt.' },
    { name: 'C2PA', description: 'Optionally links to content provenance manifest.' },
    { name: 'ERC-8004', description: 'Trustless Agents standard for on-chain AI agent interactions.' }
  ]

  return (
    <section
      className="social-proof-section"
      style={{
        padding: 'var(--space-16) 0',
        background: 'var(--white)',
        borderTop: '1px solid var(--gray-100)',
        borderBottom: '1px solid var(--gray-100)'
      }}
    >
      <div className="container">
        <div
          style={{
            textAlign: 'center',
            marginBottom: 'var(--space-8)'
          }}
        >
          <p
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
          className="logo-strip"
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
                opacity: 0.6,
                transition: 'all var(--duration-300) var(--ease-out)',
                cursor: 'pointer',
                textDecoration: 'none',
                minWidth: '44px',
                minHeight: '44px',
                padding: 'var(--space-2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.6'
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
          {standards.map((standard) => (
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
          ))}
        </div>

        {/* Disclosure */}
        <p
          style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--gray-400)',
            textAlign: 'center',
            marginTop: 'var(--space-8)',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6
          }}
        >
          Compatibility indicates protocol-level support or deploy patterns. No affiliation or endorsement implied. Logos are trademarks of their owners.
        </p>

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
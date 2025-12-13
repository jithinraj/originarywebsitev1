'use client'

import Link from 'next/link'

function LogoIcon({ name }: { name: string }) {
  const logos = {
    'MCP': (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#CC785C"/>
        <path d="M32 18L22 24v16l10 6 10-6V24L32 18zm0 3.5l6.5 3.9v7.8L32 37l-6.5-3.8v-7.8L32 21.5z" fill="white"/>
      </svg>
    ),
    'A2A': (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#4285F4"/>
        <path d="M32 20c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm0 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="#EA4335"/>
        <path d="M32 20c-6.6 0-12 5.4-12 12h4c0-4.4 3.6-8 8-8V20z" fill="#FBBC05"/>
        <path d="M44 32c0-6.6-5.4-12-12-12v4c4.4 0 8 3.6 8 8h4z" fill="#34A853"/>
        <circle cx="32" cy="32" r="4" fill="white"/>
      </svg>
    ),
    'x402': (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#0052FF"/>
        <circle cx="32" cy="32" r="14" fill="white"/>
        <path d="M32 22c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" fill="#0052FF"/>
      </svg>
    ),
    'Cloudflare': (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FFFFFF"/>
        <g transform="translate(6, 16)">
          <path d="M42.9 31.2l.8-2.8c.6-2.1.3-4-.7-5.5-1-1.5-2.6-2.4-4.6-2.5l-26.3-.4c-.3 0-.6-.2-.7-.4-.1-.2-.1-.5.1-.7.2-.3.5-.5.8-.5l26.5-.4c3.7-.2 7.6 2.6 8.9 6.4l1.7 5.3h-6.5z" fill="#F6821F"/>
          <path d="M35.3 31.2l.6-1.9c.5-1.6.2-3-.5-4-.7-1.1-1.9-1.8-3.4-1.8l-20.7-.3c-.3 0-.5-.1-.6-.3-.1-.2-.1-.4 0-.5.1-.3.4-.5.6-.5l20.8-.3c2.9-.2 6 2 7.1 5l.9 3.2h-4.8z" fill="#FAAD3F"/>
          <path d="M10.5 31.2c-.5 0-.8-.4-.7-.8l.5-1.7c.4-1.6 2.1-2.9 3.7-3h4.4c.4 0 .6.3.5.7l-.4 1.6c-.5 1.7-2.2 3.1-3.8 3.2h-4.2z" fill="#F6821F"/>
        </g>
      </svg>
    ),
    'Stripe': (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#635BFF"/>
        <path d="M30.3 27.1c0-1.2 1-1.7 2.6-1.7 2.3 0 5.2.7 7.5 2v-7.1c-2.5-1-5-1.4-7.5-1.4-6.1 0-10.2 3.2-10.2 8.5 0 8.3 11.4 7 11.4 10.5 0 1.4-1.2 1.9-2.9 1.9-2.5 0-5.7-.9-8.2-2.3v7.2c2.8 1.2 5.6 1.7 8.2 1.7 6.3 0 10.6-3.1 10.6-8.5 0-9-11.5-7.4-11.5-10.8z" fill="white"/>
      </svg>
    ),
    'Vercel': (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#000000"/>
        <path d="M32 20L48 44H16L32 20Z" fill="white"/>
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
    { name: 'AIPREF', description: 'Reads preferences; snapshots into every receipt.', href: '' },
    { name: 'C2PA', description: 'Optionally links to content provenance manifest.', href: 'https://c2pa.org' },
    { name: 'RSL 1', description: 'Receipt Specification Language for structured receipt definitions.', href: 'https://rslstandard.org' },
    { name: 'ERC-8004', description: 'Trustless Agents standard for on-chain AI agent interactions.', href: 'https://eips.ethereum.org/EIPS/eip-8004' }
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
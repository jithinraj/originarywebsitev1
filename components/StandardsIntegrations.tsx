'use client'

import Link from 'next/link'

export default function StandardsIntegrations() {
  const standards = [
    {
      title: 'HTTP 402',
      href: '/integrations/x402/',
      icon: '💳'
    },
    {
      title: 'MCP',
      href: '/integrations/mcp/',
      icon: '🔌'
    },
    {
      title: 'ACP',
      href: '/integrations/acp/',
      icon: '🛒'
    },
    {
      title: 'PEAC',
      href: 'https://peacprotocol.org/',
      icon: '🧾'
    },
    {
      title: 'A2A',
      href: '/integrations/a2a/',
      icon: '🤝'
    },
    {
      title: 'AIPREF',
      href: '/integrations/aipref/',
      icon: '⚙️'
    }
  ]

  return (
    <section
      style={{
        padding: 'var(--space-8) 0',
        background: 'var(--gray-50)',
        borderTop: '1px solid var(--gray-200)',
        borderBottom: '1px solid var(--gray-200)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-8)',
            flexWrap: 'wrap'
          }}
        >
          <span style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--gray-500)',
            fontWeight: 500,
            whiteSpace: 'nowrap'
          }}>
            Built on open standards
          </span>

          <div
            className="standards-strip"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-6)',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {standards.map((standard) => (
              <Link
                key={standard.href}
                href={standard.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  textDecoration: 'none',
                  color: 'var(--gray-700)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  padding: 'var(--space-2) var(--space-3)',
                  borderRadius: 'var(--radius-md)',
                  transition: 'all var(--duration-200) var(--ease-out)',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--white)'
                  e.currentTarget.style.color = 'var(--brand-primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--gray-700)'
                }}
              >
                <span style={{ fontSize: 'var(--text-base)' }}>{standard.icon}</span>
                {standard.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

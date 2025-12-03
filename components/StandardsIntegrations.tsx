'use client'

import Link from 'next/link'

export default function StandardsIntegrations() {
  const standards = [
    {
      title: 'HTTP 402',
      subtitle: 'Payment Required',
      description: 'Machine-readable payment flows for API monetization with standardized payment headers.',
      href: '/integrations/x402/',
      icon: '💳'
    },
    {
      title: 'MCP',
      subtitle: 'Model Context Protocol',
      description: 'Verifiable receipts for LLM tool calls and context sharing workflows.',
      href: '/integrations/mcp/',
      icon: '🔌'
    },
    {
      title: 'ACP',
      subtitle: 'Agentic Commerce',
      description: 'Verified transactions for AI agent commerce and purchasing workflows.',
      href: '/integrations/acp/',
      icon: '🛒'
    },
    {
      title: 'PEAC Protocol',
      subtitle: 'Open Protocol',
      description: 'Open protocol for verifiable receipts in agent-to-agent interactions with cryptographic signatures.',
      href: 'https://peacprotocol.org/',
      icon: '🧾'
    },
    {
      title: 'A2A',
      subtitle: 'Agent-to-Agent',
      description: 'Secure communication between autonomous agents with verifiable transaction history.',
      href: '/integrations/a2a/',
      icon: '🤝'
    },
    {
      title: 'AIPREF',
      subtitle: 'AI Preferences',
      description: 'Machine-readable AI access policies for autonomous agent compliance.',
      href: '/integrations/aipref/',
      icon: '⚙️'
    }
  ]

  return (
    <section
      style={{
        padding: 'var(--space-32) 0',
        background: 'var(--gray-50)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
          <div style={{
            display: 'inline-flex',
            background: 'rgba(99, 91, 255, 0.1)',
            border: '1px solid rgba(99, 91, 255, 0.2)',
            borderRadius: 'var(--radius-full)',
            padding: 'var(--space-2) var(--space-6)',
            color: 'var(--brand-primary)',
            fontSize: 'var(--text-xs)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: 'var(--space-6)'
          }}>
            STANDARDS INTEGRATIONS
          </div>

          <h2 style={{
            fontSize: 'var(--text-4xl)',
            fontWeight: 800,
            marginBottom: 'var(--space-4)',
            lineHeight: 1.2
          }}>
            Built on open standards
          </h2>

          <p style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--gray-600)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Originary integrates with emerging agentic web standards, providing verification and policy enforcement for every protocol.
          </p>
        </div>

        {/* Standards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--space-6)',
          marginBottom: 'var(--space-12)'
        }}>
          {standards.map((standard) => (
            <Link
              key={standard.href}
              href={standard.href}
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div
                className="card"
                style={{
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all var(--duration-200) var(--ease-out)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Icon */}
                <div style={{
                  fontSize: 'var(--text-4xl)',
                  marginBottom: 'var(--space-4)'
                }}>
                  {standard.icon}
                </div>

                {/* Title */}
                <div style={{ marginBottom: 'var(--space-2)' }}>
                  <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-1)'
                  }}>
                    {standard.title}
                  </h3>
                  <div style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--gray-500)',
                    fontWeight: 500
                  }}>
                    {standard.subtitle}
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  color: 'var(--gray-600)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-4)',
                  fontSize: 'var(--text-base)'
                }}>
                  {standard.description}
                </p>

                {/* Learn More Link */}
                <div style={{
                  color: 'var(--brand-primary)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)'
                }}>
                  Learn more →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            color: 'var(--gray-600)',
            marginBottom: 'var(--space-6)',
            fontSize: 'var(--text-lg)'
          }}>
            Want to integrate these standards into your platform?
          </p>
          <Link href="/pricing" className="button-primary" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)'
          }}>
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  )
}

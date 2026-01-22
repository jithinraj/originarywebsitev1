import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { FileCode, Zap, MessageSquare, Settings, Brain, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Integrations | Agentic Web Protocols',
  description: 'Originary integrations for agentic web protocols. Implement HTTP 402, x402, ACP, AIPREF, MCP, and A2A with open standards.',
  keywords: 'x402, HTTP 402, AI Access, MCP, A2A, ACP, AIPREF, PEAC protocol, agentic web, agentic commerce, agent integrations',
  robots: 'index,follow',
  openGraph: {
    title: 'Integrations | Agentic Web Protocols',
    description: 'Originary integrations for agentic web protocols and agentic commerce. Implement HTTP 402, x402, ACP, AIPREF, MCP, and A2A.',
    url: '/integrations',
    siteName: 'Originary',
    type: 'website',
    images: ['/og'],
  },
  alternates: {
    canonical: '/integrations',
  },
}

const integrations = [
  {
    id: 'x402',
    title: 'x402 Payments',
    description: 'HTTP 402 Payment Required protocol for server-side monetization. Return structured payment requests, validate PEAC-Receipt headers.',
    href: '/integrations/x402/',
    icon: Zap,
    status: 'live' as const,
    color: 'var(--accent-brand-subtle)',
    borderColor: 'var(--accent-brand-muted)',
  },
  {
    id: 'a2a',
    title: 'A2A Attribution',
    description: 'Agent-to-Agent attribution protocol for tracking value flow between AI agents. Attach attribution points to requests.',
    href: '/integrations/a2a/',
    icon: MessageSquare,
    status: 'coming-soon' as const,
    color: 'rgba(34, 197, 94, 0.1)',
    borderColor: 'rgba(34, 197, 94, 0.2)',
  },
  {
    id: 'mcp',
    title: 'MCP Receipts',
    description: 'Model Context Protocol integration for Claude Desktop and other MCP clients. Enable receipts in AI workflows.',
    href: '/integrations/mcp/',
    icon: FileCode,
    status: 'coming-soon' as const,
    color: 'rgba(59, 130, 246, 0.1)',
    borderColor: 'rgba(59, 130, 246, 0.2)',
  },
  {
    id: 'acp',
    title: 'ACP Capabilities',
    description: 'Agent Capabilities Protocol for declaring what agents can and cannot do. Policy-driven capability negotiation.',
    href: '/integrations/acp/',
    icon: Settings,
    status: 'draft' as const,
    color: 'rgba(245, 158, 11, 0.1)',
    borderColor: 'rgba(245, 158, 11, 0.2)',
  },
  {
    id: 'aipref',
    title: 'AIPREF Preferences',
    description: 'AI Preference Protocol (IETF draft) for declaring AI agent usage policies. Control how agents access your resources.',
    href: '/integrations/aipref/',
    icon: Brain,
    status: 'coming-soon' as const,
    color: 'rgba(168, 85, 247, 0.1)',
    borderColor: 'rgba(168, 85, 247, 0.2)',
  },
  {
    id: 'peac',
    title: 'PEAC Protocol',
    description: 'Provenance-Enhanced Access Control protocol for verifiable receipts. The foundation for trusted agent interactions.',
    href: 'https://peacprotocol.org/',
    icon: FileText,
    status: 'live' as const,
    color: 'rgba(236, 72, 153, 0.1)',
    borderColor: 'rgba(236, 72, 153, 0.2)',
    external: true,
  },
]

const statusBadges = {
  live: { label: 'Live', color: 'var(--accent-brand)' },
  'coming-soon': { label: 'Coming soon', color: 'rgba(34, 197, 94, 1)' },
  draft: { label: 'In draft', color: 'rgba(245, 158, 11, 1)' },
}

export default function IntegrationsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Originary Integrations | Agentic Web Standards',
    description: 'Originary integrations for agentic web standards and agentic commerce standards including HTTP 402, x402, ACP, AIPREF, MCP, and A2A.',
    itemListElement: integrations.map((integration, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: integration.title,
        description: integration.description,
        url: integration.external
          ? integration.href
          : `https://www.originary.xyz${integration.href}`,
        applicationCategory: 'DeveloperApplication',
      },
    })),
  }

  return (
    <>
      <Script
        id="integrations-json-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavigationHeader />
      <main id="main-content" className="container" style={{ paddingTop: '80px', marginBottom: 'var(--space-32)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: 'var(--space-8)' }}>
            <ol style={{ display: 'flex', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span style={{ color: 'var(--text-primary)' }}>Integrations</span>
              </li>
            </ol>
          </nav>

          {/* Badge */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
            <div style={{
              display: 'inline-flex',
              background: 'var(--accent-brand-subtle)',
              border: '1px solid var(--accent-brand-muted)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--space-2) var(--space-6)',
              color: 'var(--accent-brand)',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              INTEGRATIONS
            </div>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'var(--text-5xl)',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 'var(--space-6)',
            color: 'var(--text-primary)',
            lineHeight: 1.2,
          }}>
            Agentic Web Standards
          </h1>

          {/* Description */}
          <p style={{
            fontSize: 'var(--text-xl)',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            marginBottom: 'var(--space-12)',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6,
          }}>
            Originary implements agentic web standards and agentic commerce standards as open protocols for the agentic web. Choose from HTTP 402 payments, x402 commerce, agentic commerce protocols, AI preferences, agent coordination, and verifiable receipts.
          </p>

          {/* Status Legend */}
          <div style={{
            display: 'flex',
            gap: 'var(--space-6)',
            justifyContent: 'center',
            marginBottom: 'var(--space-12)',
            flexWrap: 'wrap',
          }}>
            {Object.entries(statusBadges).map(([key, { label, color }]) => (
              <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: color,
                }} />
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Integration Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-12)',
          }}>
            {integrations.map((integration) => {
              const Icon = integration.icon
              const status = statusBadges[integration.status]
              const CardComponent = integration.external ? 'a' : Link

              return (
                <CardComponent
                  key={integration.id}
                  href={integration.href}
                  {...(integration.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="card"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                  }}
                >
                  {/* Status Badge */}
                  <div style={{
                    position: 'absolute',
                    top: 'var(--space-4)',
                    right: 'var(--space-4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    padding: 'var(--space-1) var(--space-3)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600,
                    background: integration.color,
                    border: `1px solid ${integration.borderColor}`,
                    color: status.color,
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: status.color,
                    }} />
                    {status.label}
                  </div>

                  {/* Icon */}
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-2)',
                    background: integration.color,
                    border: `1px solid ${integration.borderColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)',
                  }}>
                    <Icon size={24} style={{ color: status.color }} />
                  </div>

                  {/* Title */}
                  <h2 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-2)',
                    color: 'var(--text-primary)',
                  }}>
                    {integration.title}
                    {integration.external && (
                      <span style={{ marginLeft: 'var(--space-2)', fontSize: 'var(--text-sm)' }}>↗</span>
                    )}
                  </h2>

                  {/* Description */}
                  <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    flex: 1,
                  }}>
                    {integration.description}
                  </p>
                </CardComponent>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="card" style={{
            textAlign: 'center',
            background: 'var(--accent-brand-faint)',
            border: '1px solid var(--accent-brand-subtle)',
          }}>
            <h2 style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-4)',
              color: 'var(--text-primary)',
            }}>
              Need a custom integration?
            </h2>
            <p style={{
              fontSize: 'var(--text-base)',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-6)',
              lineHeight: 1.6,
            }}>
              We build protocol integrations for enterprises. Contact us to discuss your requirements.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Contact us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

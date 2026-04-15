import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { FileCode, Zap, MessageSquare, Settings, Brain, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Integrations | Originary',
  description: 'See how Originary and PEAC connect to MCP, A2A, x402, ACP, AIPREF, and related standards for signed records.',
  keywords: 'MCP integration, A2A integration, x402, AIPREF, ACP, PEAC protocol, agent verification integrations, MCP security, signed records',
  robots: 'index,follow',
  openGraph: {
    title: 'Integrations | Originary',
    description: 'See how Originary and PEAC connect to MCP, A2A, x402, ACP, AIPREF, and related standards for signed records.',
    url: '/integrations',
    siteName: 'Originary',
    type: 'website',
    images: ['/og'],
  },
  alternates: {
    canonical: '/integrations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Integrations | Originary',
    description: 'See how Originary and PEAC connect to MCP, A2A, x402, ACP, AIPREF, and related standards for signed records.',
    images: ['/og'],
  },
}

const integrations = [
  {
    id: 'x402',
    title: 'x402 (HTTP 402)',
    description: 'Priced API access with signed records. Use HTTP 402 or x402-style challenge-and-payment flows, then return a signed record that another party can verify. Relevant for priced APIs, automated payments, machine payments, and agentic commerce workflows.',
    href: '/integrations/x402/',
    icon: Zap,
    status: 'available' as const,
    color: 'var(--accent-brand-subtle)',
    borderColor: 'var(--accent-brand-muted)',
  },
  {
    id: 'a2a',
    title: 'Agent-to-Agent (A2A)',
    description: 'Carry signed interaction records through A2A metadata so another party can verify authorization and policy handling across agent hops and delegated workflows.',
    href: '/integrations/a2a/',
    icon: MessageSquare,
    status: 'available' as const,
    color: 'var(--accent-brand-subtle)',
    borderColor: 'var(--accent-brand-muted)',
  },
  {
    id: 'mcp',
    title: 'MCP Server',
    description: 'Verification, inspection, and issuance tools for MCP workflows, tool calls, and editor integrations. Local verification remains straightforward for developers and evaluators.',
    href: '/integrations/mcp/',
    icon: FileCode,
    status: 'available' as const,
    color: 'var(--accent-brand-subtle)',
    borderColor: 'var(--accent-brand-muted)',
  },
  {
    id: 'aipref',
    title: 'AI Preferences (AIPREF)',
    description: 'Machine-readable AI agent policy terms can be declared separately from the signed records that prove what happened under those terms.',
    href: '/integrations/aipref/',
    icon: Brain,
    status: 'available' as const,
    color: 'var(--accent-brand-subtle)',
    borderColor: 'var(--accent-brand-muted)',
  },
  {
    id: 'acp',
    title: 'Agentic Commerce Protocol (ACP)',
    description: 'Structured commerce and discovery flows can emit signed records for downstream review and verification.',
    href: '/integrations/acp/',
    icon: Settings,
    status: 'draft' as const,
    color: 'var(--accent-tertiary-subtle)',
    borderColor: 'var(--accent-tertiary-muted)',
  },
  {
    id: 'peac',
    title: 'PEAC Protocol',
    description: 'The open standard for verifiable interaction records. Policy discovery, signed record format, and deterministic verification.',
    href: 'https://www.peacprotocol.org/',
    icon: FileText,
    status: 'available' as const,
    color: 'var(--accent-brand-subtle)',
    borderColor: 'var(--accent-brand-muted)',
    external: true,
  },
]

const statusBadges = {
  available: { label: 'Available', color: 'var(--accent-brand)' },
  preview: { label: 'Preview', color: 'var(--accent-secondary)' },
  draft: { label: 'Planned', color: 'var(--accent-tertiary)' },
  research: { label: 'Planned', color: 'var(--text-tertiary)' },
}

export default function IntegrationsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Originary Integrations | Agentic Web Standards',
    description: 'Originary integrations for agentic web standards and agent verification standards including HTTP 402, x402, ACP, AIPREF, MCP, and A2A.',
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
            Integrations and protocol surfaces
          </h1>

          {/* Description */}
          <p style={{
            fontSize: 'var(--text-xl)',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            marginBottom: 'var(--space-4)',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6,
          }}>
            How Originary and PEAC fit with MCP, A2A, x402, ACP, AIPREF, and related standards.
          </p>

          <p style={{
            fontSize: 'var(--text-base)',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            marginBottom: 'var(--space-12)',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6,
          }}>
            Originary integrates with the systems teams already use. PEAC stays protocol-neutral while Originary packages the operational path for signed records and verification workflows.
          </p>

          <p style={{
            fontSize: 'var(--text-base)',
            textAlign: 'center',
            color: 'var(--text-tertiary)',
            marginBottom: 'var(--space-12)',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6,
          }}>
            This page is for teams evaluating how signed records fit alongside protocols they already use — from MCP and A2A to x402, priced APIs, automated payments, and agentic commerce workflows.
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

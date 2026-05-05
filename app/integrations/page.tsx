import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { Activity, Bot, Brain, CreditCard, FileCode, FileText, GitBranch, MessageSquare, PackageCheck, Settings, ShieldCheck, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Integrations | Originary',
  description: 'Add signed records beside the systems you already use: gateways, MCP servers, APIs, runtimes, payment rails, and audit workflows.',
  keywords: 'MCP integration, A2A integration, x402, paymentauth, MPP, ACP, OpenClaw, managed agents, runtime governance, PEAC protocol, signed records',
  robots: 'index,follow',
  openGraph: {
    title: 'Integrations | Originary',
    description: 'Add signed records beside the systems you already use: gateways, MCP servers, APIs, runtimes, payment rails, and audit workflows.',
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
    description: 'Add signed records beside the systems you already use: gateways, MCP servers, APIs, runtimes, payment rails, and audit workflows.',
    images: ['/og'],
  },
}

const integrations = [
  {
    id: 'x402',
    title: 'x402 (HTTP 402)',
    description: 'Priced API access with signed records. PEAC v0.14.0 reads x402 v1 and v2 payment responses, maps offer and receipt evidence, and writes PEAC-Receipt as the verifiable record carrier.',
    href: '/integrations/x402/',
    icon: Zap,
    status: 'available' as const,
    color: 'var(--accent-brand-subtle)',
    borderColor: 'var(--accent-brand-muted)',
  },
  {
    id: 'paymentauth-mpp',
    title: 'paymentauth / MPP',
    description: 'HTTP Payment Authentication and MPP payment-attempt or settlement flows mapped into PEAC evidence. Use it when paymentauth challenges, credentials, receipts, and PEAC records must coexist.',
    href: 'https://github.com/peacprotocol/peac/tree/main/integrator-kits/paymentauth',
    icon: CreditCard,
    status: 'available' as const,
    color: 'var(--accent-brand-subtle)',
    borderColor: 'var(--accent-brand-muted)',
    external: true,
  },
  {
    id: 'a2a',
    title: 'Agent-to-Agent (A2A)',
    description: 'Carry signed interaction records through A2A v1.0.0 metadata so another party can verify authorization and policy handling across agent hops and delegated workflows.',
    href: '/integrations/a2a/',
    icon: MessageSquare,
    status: 'available' as const,
    color: 'var(--accent-brand-subtle)',
    borderColor: 'var(--accent-brand-muted)',
  },
  {
    id: 'mcp',
    title: 'MCP Server',
    description: 'Five MCP tools for verify, inspect, decode, issue, and bundle. PEAC records can travel through MCP _meta while remaining independently verifiable.',
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
    description: 'ACP delegated commerce sessions mapped into access, session, payment-observation, and capability evidence. ACP state is preserved without treating session evidence as payment finality.',
    href: '/integrations/acp/',
    icon: Settings,
    status: 'available' as const,
    color: 'var(--accent-brand-subtle)',
    borderColor: 'var(--accent-brand-muted)',
  },
  {
    id: 'managed-agents',
    title: 'Managed agents',
    description: 'Managed-agent evidence across session, task, tool-use, MCP-call, permission, and outcome event families. Runtime governance adds observations from managed agent platforms.',
    href: 'https://github.com/peacprotocol/peac/tree/main/packages/adapters/managed-agents',
    icon: Bot,
    status: 'available' as const,
    color: 'var(--accent-brand-subtle)',
    borderColor: 'var(--accent-brand-muted)',
    external: true,
  },
  {
    id: 'openclaw',
    title: 'OpenClaw',
    description: 'Adapter support for OpenClaw tool calls with a low-latency capture path and background receipt emitter. Inputs and outputs are hashed by default unless explicitly allowlisted.',
    href: 'https://github.com/peacprotocol/peac/tree/main/packages/adapters/openclaw',
    icon: ShieldCheck,
    status: 'available' as const,
    color: 'var(--accent-brand-subtle)',
    borderColor: 'var(--accent-brand-muted)',
    external: true,
  },
  {
    id: 'x402-adapters',
    title: 'x402 vertical adapters',
    description: 'Daydreams inference routing, Fluora MCP marketplace calls, and Pinata private IPFS objects can all map x402 commerce evidence into PEAC records.',
    href: 'https://github.com/peacprotocol/peac/tree/main/packages/adapters/x402',
    icon: GitBranch,
    status: 'available' as const,
    color: 'var(--accent-brand-subtle)',
    borderColor: 'var(--accent-brand-muted)',
    external: true,
  },
  {
    id: 'supply-chain',
    title: 'in-toto / SLSA',
    description: 'Supply-chain mappings connect PEAC signed records to provenance and attestation workflows without replacing existing build or release systems.',
    href: 'https://github.com/peacprotocol/peac/tree/main/packages/mappings',
    icon: PackageCheck,
    status: 'available' as const,
    color: 'var(--accent-brand-subtle)',
    borderColor: 'var(--accent-brand-muted)',
    external: true,
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

const surfaceGroups = [
  {
    title: 'Core and carriers',
    items: ['@peac/protocol', '@peac/crypto', '@peac/schema', '@peac/mappings-mcp', '@peac/mappings-a2a', '@peac/mcp-server'],
  },
  {
    title: 'Commerce',
    items: ['@peac/adapter-x402', '@peac/mappings-paymentauth', 'MPP mappers', '@peac/mappings-acp', 'Stripe-style event mapper', '@peac/pay402'],
  },
  {
    title: 'Agent runtimes',
    items: ['@peac/adapter-openclaw', '@peac/adapter-managed-agents', '@peac/adapter-runtime-governance', '@peac/adapter-openai-compatible'],
  },
  {
    title: 'Record exports',
    items: ['@peac/mappings-intoto', '@peac/mappings-slsa', '@peac/telemetry-otel', '@peac/transport-grpc'],
  },
]

export default function IntegrationsPage() {
  const visibleStatuses = Array.from(new Set(integrations.map((integration) => integration.status)))
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Originary Integrations | Agentic Web Standards',
    description: 'Originary integrations for PEAC v0.14.0 surfaces including MCP, A2A, x402, paymentauth/MPP, ACP, OpenClaw, managed agents, and supply-chain mappings.',
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
      <main id="main-content" className="integrations-page" style={{ marginBottom: 'var(--space-32)' }}>
        <div className="container integrations-page-inner" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="integrations-breadcrumb" style={{ marginBottom: 'var(--space-8)' }}>
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
            Add signed records beside the systems you already use.
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
            Your gateway, MCP server, API, runtime, or payment rail keeps doing its job. Originary adds a signed record that can be verified outside that system.
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
            Start with the category that matches your workflow, then use the technical surface map only when you need package-level detail.
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
            Agent and tool workflows: MCP, A2A, managed runtimes, OpenClaw. API and gateway workflows: HTTP APIs, reverse proxies, Gateway 402, Cloudflare/Vercel-style edges. Commerce and payment workflows: x402, paymentauth/MPP, ACP, Stripe-style payment events. Audit and provenance workflows: OpenTelemetry exports, in-toto, SLSA, record bundles.
          </p>

          {/* Status Legend */}
          <div style={{
            display: 'flex',
            gap: 'var(--space-6)',
            justifyContent: 'center',
            marginBottom: 'var(--space-12)',
            flexWrap: 'wrap',
          }}>
            {visibleStatuses.map((key) => {
              const { label, color } = statusBadges[key]
              return (
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
              )
            })}
          </div>

          {/* Integration Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-12)',
            minWidth: 0,
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
                    minWidth: 0,
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
                    flex: '0 0 auto',
                  }}>
                    <Icon size={24} style={{ color: status.color }} />
                  </div>

                  {/* Title */}
                  <h2 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-2)',
                    color: 'var(--text-primary)',
                    paddingRight: '96px',
                    lineHeight: 1.2,
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
                    overflowWrap: 'anywhere',
                  }}>
                    {integration.description}
                  </p>
                </CardComponent>
              )
            })}
          </div>

          <div className="card" style={{
            marginBottom: 'var(--space-12)',
            background: 'var(--surface-elevated)',
            border: '1px solid var(--border-default)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
              <Activity size={22} style={{ color: 'var(--accent-brand)' }} />
              <div>
                <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
                  Technical surface map
                </h2>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Current PEAC source exposes 36 published packages across core verification, commerce mappings, agent runtimes, and record export surfaces.
                </p>
              </div>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: 'var(--space-4)',
            }}>
              {surfaceGroups.map((group) => (
                <div key={group.title} style={{
                  border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-4)',
                  background: 'var(--surface-subtle)',
                }}>
                  <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}>
                    {group.title}
                  </h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 'var(--space-2)' }}>
                    {group.items.map((item) => (
                      <li key={item} style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', overflowWrap: 'anywhere' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
      <style>{`
        @media (max-width: 767px) {
          .site-root > main.integrations-page > .integrations-page-inner:first-child {
            padding-top: 104px !important;
          }

          .integrations-breadcrumb {
            display: none;
          }
        }

        @media (min-width: 768px) {
          .site-root > main.integrations-page > .integrations-page-inner:first-child {
            padding-top: 112px !important;
          }
        }

        @media (max-width: 420px) {
          .integrations-page [class~="card"] h2 {
            padding-right: 0 !important;
          }
        }
      `}</style>
    </>
  )
}

import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield, Zap, Server, BarChart3, FileText, HardDrive } from 'lucide-react'
import { FACTS } from '@/lib/facts'

export const metadata: Metadata = {
  title: 'Product | Verification Tooling Built on PEAC',
  description: 'Open-source packages for issuing, capturing, and verifying signed interaction records. MCP server, Gateway, Verify, Capture, and Trace.',
  keywords: 'PEAC protocol, verify API, Gateway 402, MCP server, interaction records, verification',
  robots: 'index,follow',
  openGraph: {
    title: 'Product | Verification Tooling Built on PEAC',
    description: 'Open-source packages for issuing, capturing, and verifying signed interaction records.',
    url: '/products',
    siteName: 'Originary',
    images: [{ url: '/og' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product | Verification Tooling Built on PEAC',
    description: 'Open-source packages for issuing, capturing, and verifying signed interaction records.',
    images: ['/og'],
  },
  alternates: {
    canonical: '/products',
  },
}

const products = [
  {
    icon: Server,
    title: 'MCP Server',
    description: 'Five tools for Claude, Cursor, and any MCP client. Verify, inspect, and decode records offline. Issue and bundle with capability-based access control.',
    features: ['5 MCP tools', 'Offline verification', 'Capability-based ACL', 'Claude Desktop and Cursor'],
    href: '/integrations/mcp',
    npm: '@peac/mcp-server',
    status: 'available' as const,
  },
  {
    icon: Shield,
    title: 'Verify',
    description: 'Deterministic verification for PEAC interaction records. Validate signatures offline using published JWKS endpoints. No API callback required.',
    features: ['Ed25519 signature verification', 'Offline verification', 'JWKS support', 'Policy binding validation'],
    href: '/products/verify',
    npm: '@peac/protocol',
    status: 'available' as const,
  },
  {
    icon: Zap,
    title: 'Gateway 402',
    description: 'HTTP 402 gateway for AI traffic. Check requests at the edge with allow/deny/rate-limit decisions. Issue signed records on every response.',
    features: ['Edge deployment', 'HTTP 402 challenge flows', 'Signed interaction records', 'Rail-neutral design'],
    href: '/products/gateway-402',
    npm: '@peac/rails-x402',
    status: 'available' as const,
  },
  {
    icon: HardDrive,
    title: 'Capture',
    description: 'File-backed spool and deduplication stores for Node.js. Capture interaction evidence with durable, crash-safe storage and structured counters.',
    features: ['File spool store', 'Deduplication index', 'Crash-safe writes', 'Structured counters'],
    href: '/developers',
    npm: '@peac/capture-node',
    status: 'available' as const,
  },
  {
    icon: FileText,
    title: 'Declare',
    description: 'Policy Pack Generator. Create peac.txt, AIPREF headers, and human-readable policy pages from a single YAML config. CLI and programmatic API.',
    features: ['YAML policy authoring', 'peac.txt generation', 'AIPREF header output', 'Validation and rule testing'],
    href: '/declare',
    npm: '@peac/cli',
    status: 'available' as const,
  },
  {
    icon: BarChart3,
    title: 'Trace',
    description: 'AI traffic observation and analytics. Identify AI agents accessing your APIs and web resources. Export evidence and audit logs.',
    features: ['AI agent identification', 'Traffic observation', 'Evidence export', 'Audit log generation'],
    href: '/trace',
    status: 'preview' as const,
  },
]

export default function ProductsPage() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main id="main-content" role="main" style={{ paddingTop: '80px' }}>
        {/* Hero */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto', marginBottom: 'var(--space-16)' }}>
              <h1 style={{ marginBottom: 'var(--space-6)' }}>
                <span className="text-gradient">Verification tooling built on PEAC</span>
              </h1>
              <p style={{ fontSize: 'var(--text-xl)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>
                Open-source packages for issuing, capturing, and verifying signed interaction records. Self-hostable. Verification does not require Originary to be online.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', padding: 'var(--space-2) var(--space-3)', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)' }}>
                  {FACTS.publishedPackageCount} packages on npm
                </span>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', padding: 'var(--space-2) var(--space-3)', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)' }}>
                  {FACTS.testsCount} tests
                </span>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', padding: 'var(--space-2) var(--space-3)', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)' }}>
                  {FACTS.license}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="section" style={{ background: 'var(--surface-subtle)', paddingTop: 'var(--space-16)' }}>
          <div className="container">
            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              {products.map((product) => (
                <div key={product.title} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-4)' }}>
                    <product.icon size={28} style={{ color: 'var(--accent-brand)' }} />
                    <span style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      color: product.status === 'preview' ? 'var(--text-tertiary)' : 'var(--accent-brand)',
                      background: product.status === 'preview' ? 'var(--surface-subtle)' : 'var(--accent-brand-subtle)',
                      padding: '4px 8px',
                      borderRadius: 'var(--radius-full)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {product.status === 'preview' ? 'Preview' : 'Available'}
                    </span>
                  </div>

                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
                    {product.title}
                  </h3>

                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                    {product.description}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: 'var(--space-4)', flex: 1 }}>
                    {product.features.map((feature, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                        <CheckCircle size={14} style={{ color: 'var(--success)', flexShrink: 0 }} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border-default)' }}>
                    <Link href={product.href} style={{ color: 'var(--accent-brand)', textDecoration: 'none', fontSize: 'var(--text-sm)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                      Learn more <ArrowRight size={14} />
                    </Link>
                    {product.npm && (
                      <a href={`https://www.npmjs.com/package/${product.npm}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>
                        {product.npm}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open protocol callout */}
        <section className="section" style={{ paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-12)' }}>
          <div className="container">
            <div style={{ maxWidth: '720px', margin: '0 auto', padding: 'var(--space-8)', border: '2px solid var(--accent-brand)', borderRadius: 'var(--radius-2xl)', background: 'var(--accent-brand-faint)', textAlign: 'center' }}>
              <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                Built on PEAC, an open standard
              </h3>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Every product above is built on the PEAC open standard ({FACTS.license}). Self-host the entire stack, use Originary, or build your own conformant implementation. No lock-in.
              </p>
              <div style={{ marginTop: 'var(--space-6)', display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <Link href="/peac" className="btn btn-primary btn-sm">
                  View the protocol
                </Link>
                <Link href="/developers" className="btn btn-secondary btn-sm">
                  Quickstart
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div className="cta-card" style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 30% 40%, var(--glass-border-hover) 0%, transparent 50%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, marginBottom: 'var(--space-6)', color: 'var(--white)' }}>
                  Start with the OSS packages
                </h2>
                <p style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-8)', color: 'var(--white)', maxWidth: '600px', margin: '0 auto var(--space-8) auto', lineHeight: 1.6 }}>
                  Install from npm. Deploy to your infrastructure. Reach out when you need design partner access or enterprise support.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                  <Link href="/developers" className="btn btn-lg" style={{ background: 'var(--surface-elevated)', color: 'var(--accent-brand)', border: 'none' }}>
                    <span>Quickstart</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Link href="/contact" className="btn btn-lg btn-ghost" style={{ color: 'var(--white)', border: '1px solid var(--border-hover)' }}>
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

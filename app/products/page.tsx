import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield, Zap, Server, BarChart3, FileText, HardDrive, Search } from 'lucide-react'
import { NARRATIVE } from '@/lib/site-registry'

export const metadata: Metadata = {
  title: 'Products | Originary',
  description: 'Choose the proof workflow you need: check whether logs are enough, inspect one signed record, or add records to one production workflow.',
  keywords: 'Originary Verify, signed interaction records, MCP verification, Agent Auditor, Gateway 402, offline verification, portable records, PEAC Protocol',
  robots: 'index,follow',
  openGraph: {
    title: 'Products | Originary',
    description: 'Choose the proof workflow you need: check whether logs are enough, inspect one signed record, or add records to one production workflow.',
    url: '/products',
    siteName: 'Originary',
    images: [{ url: '/og' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products | Originary',
    description: 'Choose the proof workflow you need: check whether logs are enough, inspect one signed record, or add records to one production workflow.',
    images: ['/og'],
  },
  alternates: {
    canonical: '/products',
  },
}

// Canonical product labels and statuses live in PRODUCTS (lib/site-registry.ts).
// This array carries additional detail (icons, features, npm) that the registry does not.
const primaryProducts = [
  {
    icon: Search,
    title: 'Proof Check',
    description: 'See whether your current logs, traces, or webhooks are enough.',
    features: ['Proof-gap review', 'Verification readiness', 'Portable-report framing', 'Fast workflow triage'],
    href: '/agent-proof-check',
    status: 'available' as const,
  },
  {
    icon: Search,
    title: 'Agent Auditor',
    description: 'Open and verify one signed record locally.',
    features: ['Local record inspection', 'Signature and issuer checks', 'Policy binding review', 'Offline verification'],
    href: '/agent-auditor',
    status: 'available' as const,
  },
  {
    icon: Shield,
    title: 'Originary Verify',
    description: 'Run signed-record verification workflows in production.',
    features: ['Ed25519 signature verification', 'Offline verification', 'Hosted or self-hosted deployment', 'Procurement-ready record exports'],
    href: '/products/verify',
    npm: '@peac/protocol',
    status: 'available' as const,
  },
  {
    icon: Zap,
    title: 'Gateway 402',
    description: 'Add paid API access records to HTTP 402 and x402-style flows.',
    features: ['HTTP 402 challenge flows', 'Payment proof reference', 'Signed access records', 'Rail-neutral design'],
    href: '/products/gateway-402',
    npm: '@peac/rails-x402',
    status: 'available' as const,
  },
  {
    icon: Server,
    title: 'MCP Server',
    description: 'Bring record verification tools into agent and developer workflows.',
    features: ['MCP tools', 'Offline verification', 'Capability-based ACL', 'Claude Desktop and Cursor'],
    href: '/integrations/mcp',
    npm: '@peac/mcp-server',
    status: 'available' as const,
  },
  {
    icon: BarChart3,
    title: 'Trace',
    description: 'Export signed records from selected access events.',
    features: ['Agent and crawler identification signals', 'Selected access events', 'Record export', 'Audit bundle support'],
    href: '/trace',
    status: 'preview' as const,
  },
]

const buildingBlocks = [
  {
    icon: HardDrive,
    title: 'Capture',
    description: 'File-backed spool and deduplication stores for Node.js. Durable, crash-safe storage and structured counters.',
    href: '/developers',
    npm: '@peac/capture-node',
  },
  {
    icon: FileText,
    title: 'Declare',
    description: 'Generate peac.txt, AIPREF headers, and human-readable policy pages from a single YAML config.',
    href: '/declare',
    npm: '@peac/cli',
  },
]

export default function ProductsPage() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main id="main-content" role="main" style={{ paddingTop: '80px' }}>
        {/* Hero */}
        <section className="section" style={{ paddingTop: '96px', paddingBottom: '40px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto', marginBottom: 'var(--space-16)' }}>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 'var(--space-4)' }}>PRODUCTS</div>
              <h1 style={{ marginBottom: 'var(--space-6)', color: 'var(--text-primary)', fontWeight: 700, fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
                Choose the proof workflow you need.
              </h1>
              <p style={{ fontSize: 'var(--text-xl)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                Start with the smallest useful step: check whether your current artifacts are enough, open one signed record, or add records to one production workflow.
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-tertiary)', lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>
                Pick one buyer job first: logs are not enough, a customer needs proof, or a production workflow needs a record another party can verify.
              </p>
            </div>
          </div>
        </section>

        {/* Primary products */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              {primaryProducts.map((product) => (
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
                    {product.features.map((feature: string, i: number) => (
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

        {/* Building blocks */}
        <section className="section">
          <div className="container">
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, textAlign: 'center', marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
              Building blocks
            </h2>
            <p style={{ textAlign: 'center', fontSize: 'var(--text-base)', color: 'var(--text-tertiary)', marginBottom: 'var(--space-8)' }}>
              Lower-level packages for custom integrations
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-6)', maxWidth: '640px', margin: '0 auto' }}>
              {buildingBlocks.map((block) => (
                <div key={block.title} className="card" style={{ padding: 'var(--space-5)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                    <block.icon size={20} style={{ color: 'var(--text-tertiary)' }} />
                    <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>{block.title}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                    {block.description}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link href={block.href} style={{ color: 'var(--accent-brand)', textDecoration: 'none', fontSize: 'var(--text-sm)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                      Learn more <ArrowRight size={14} />
                    </Link>
                    <a href={`https://www.npmjs.com/package/${block.npm}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>
                      {block.npm}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open protocol callout */}
        <section className="section">
          <div className="container">
            <div style={{ maxWidth: '720px', margin: '0 auto', padding: 'var(--space-8)', border: '2px solid var(--accent-brand)', borderRadius: 'var(--radius-2xl)', background: 'var(--accent-brand-faint)', textAlign: 'center' }}>
              <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                Built on PEAC, an open standard
              </h3>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {NARRATIVE.protocolRelation} Every product above uses the PEAC open standard (Apache-2.0). Self-host the entire stack, use Originary, or build your own conformant implementation. No lock-in.
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
            <div style={{
              maxWidth: '720px',
              margin: '0 auto',
              padding: 'var(--space-10)',
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-2xl)',
              textAlign: 'center',
            }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                Start with signed records
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto var(--space-8) auto' }}>
                Install from npm. Deploy to your infrastructure. Contact us for enterprise deployment support.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <Link href="/developers" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span>Quickstart</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="btn btn-secondary btn-lg">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

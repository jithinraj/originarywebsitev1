import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { CheckCircle, XCircle, ArrowRight, Shield, Zap, Globe, Lock, FileText, Code } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why PEAC Protocol | Open Standard for Agentic Commerce',
  description: 'PEAC Protocol provides verifiable receipts, policy discovery, and payment handling for AI agent interactions. Compare PEAC to alternatives and understand its unique value.',
  keywords: 'PEAC Protocol, agentic commerce, HTTP 402, verifiable receipts, AI payments, policy discovery, open protocol, x402',
  robots: 'index,follow',
  alternates: {
    canonical: '/why-peac'
  },
  openGraph: {
    title: 'Why PEAC Protocol | Open Standard for Agentic Commerce',
    description: 'PEAC Protocol provides verifiable receipts, policy discovery, and payment handling for AI agent interactions.',
    url: '/why-peac',
    siteName: 'Originary',
    type: 'website',
    images: ['/og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why PEAC Protocol | Open Standard for Agentic Commerce',
    description: 'PEAC Protocol provides verifiable receipts, policy discovery, and payment handling for AI agent interactions.',
    images: ['/og.jpg'],
    site: '@originaryx',
    creator: '@originaryx',
  },
}

export default function WhyPeacPage() {
  const comparisonData: Array<{
    feature: string
    peac: boolean | 'partial'
    proprietary: boolean | 'partial'
    custom: boolean | 'partial'
  }> = [
    { feature: 'Open source (Apache-2.0)', peac: true, proprietary: false, custom: false },
    { feature: 'Verifiable receipts (JWS)', peac: true, proprietary: false, custom: 'partial' },
    { feature: 'Offline verification', peac: true, proprietary: false, custom: false },
    { feature: 'Policy discovery (/.well-known/)', peac: true, proprietary: false, custom: false },
    { feature: 'Multiple payment rails', peac: true, proprietary: 'partial', custom: 'partial' },
    { feature: 'No vendor lock-in', peac: true, proprietary: false, custom: true },
    { feature: 'Privacy modes', peac: true, proprietary: 'partial', custom: false },
    { feature: 'Works with HTTP 402', peac: true, proprietary: false, custom: 'partial' },
  ]

  return (
    <div className="wrap">
      <NavigationHeader />
      <main id="main-content" role="main" style={{ paddingTop: '80px' }}>
        {/* Hero */}
        <section className="section" style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  background: 'rgba(99, 91, 255, 0.1)',
                  border: '1px solid rgba(99, 91, 255, 0.2)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-2) var(--space-4)',
                  marginBottom: 'var(--space-6)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: 'var(--brand-primary)'
                }}
              >
                WHY PEAC
              </div>

              <h1
                style={{
                  fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-5xl))',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}
              >
                The open standard for{' '}
                <span style={{ color: 'var(--brand-primary)' }}>verifiable agent interactions</span>
              </h1>

              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  lineHeight: 1.7,
                  color: 'var(--gray-600)',
                  marginBottom: 'var(--space-8)'
                }}
              >
                PEAC Protocol provides cryptographic receipts, policy discovery, and payment handling
                that work across any implementation. No vendor lock-in. No proprietary APIs.
              </p>

              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/developers" className="btn btn-primary btn-lg">
                  <span>Get Started</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/peac" className="btn btn-secondary btn-lg">
                  Read the Spec
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Differentiators */}
        <section className="section" style={{ background: 'var(--gray-50)', paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                What makes PEAC different
              </h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto' }}>
                Built for interoperability, privacy, and long-term adoption
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-6)' }}>
              <div className="card">
                <Shield size={32} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  Cryptographic Proof
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                  Every interaction generates a JWS-signed receipt with Ed25519 signatures. Verify offline against published JWKS endpoints.
                </p>
              </div>

              <div className="card">
                <Globe size={32} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  No Vendor Lock-in
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                  Apache-2.0 licensed. Self-host, use Originary Cloud, or build your own conformant implementation. Switch providers anytime.
                </p>
              </div>

              <div className="card">
                <Zap size={32} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  Edge-Native
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                  Verify receipts in milliseconds at the edge. Works with Cloudflare Workers, Vercel Edge, Fastly Compute, and more.
                </p>
              </div>

              <div className="card">
                <Lock size={32} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  Privacy-First
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                  Built-in privacy modes (strict, balanced, custom) for identifier handling. Minimal disclosure by default.
                </p>
              </div>

              <div className="card">
                <FileText size={32} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  Policy Discovery
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                  Simple /.well-known/peac.txt file declares pricing, terms, and payment methods. Agents discover policies automatically.
                </p>
              </div>

              <div className="card">
                <Code size={32} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  Multiple Payment Rails
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                  Works with x402, MCP, A2A, and traditional payment systems. Adapter-based architecture for any payment rail.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                How PEAC compares
              </h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto' }}>
                PEAC Protocol vs proprietary solutions vs building from scratch
              </p>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: 'var(--space-4)', borderBottom: '2px solid var(--gray-200)', fontWeight: 600, color: 'var(--gray-900)' }}>
                      Feature
                    </th>
                    <th style={{ textAlign: 'center', padding: 'var(--space-4)', borderBottom: '2px solid var(--gray-200)', fontWeight: 600, color: 'var(--brand-primary)', background: 'rgba(99, 91, 255, 0.05)' }}>
                      PEAC Protocol
                    </th>
                    <th style={{ textAlign: 'center', padding: 'var(--space-4)', borderBottom: '2px solid var(--gray-200)', fontWeight: 600, color: 'var(--gray-700)' }}>
                      Proprietary APIs
                    </th>
                    <th style={{ textAlign: 'center', padding: 'var(--space-4)', borderBottom: '2px solid var(--gray-200)', fontWeight: 600, color: 'var(--gray-700)' }}>
                      Build Your Own
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index}>
                      <td style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--gray-100)', color: 'var(--gray-700)' }}>
                        {row.feature}
                      </td>
                      <td style={{ textAlign: 'center', padding: 'var(--space-4)', borderBottom: '1px solid var(--gray-100)', background: 'rgba(99, 91, 255, 0.02)' }}>
                        {row.peac === 'partial' ? (
                          <span style={{ color: 'var(--gray-400)' }}>Partial</span>
                        ) : row.peac ? (
                          <CheckCircle size={20} style={{ color: '#22C55E' }} />
                        ) : (
                          <XCircle size={20} style={{ color: 'var(--gray-300)' }} />
                        )}
                      </td>
                      <td style={{ textAlign: 'center', padding: 'var(--space-4)', borderBottom: '1px solid var(--gray-100)' }}>
                        {row.proprietary === 'partial' ? (
                          <span style={{ color: 'var(--gray-400)' }}>Partial</span>
                        ) : row.proprietary ? (
                          <CheckCircle size={20} style={{ color: '#22C55E' }} />
                        ) : (
                          <XCircle size={20} style={{ color: 'var(--gray-300)' }} />
                        )}
                      </td>
                      <td style={{ textAlign: 'center', padding: 'var(--space-4)', borderBottom: '1px solid var(--gray-100)' }}>
                        {row.custom === 'partial' ? (
                          <span style={{ color: 'var(--gray-400)' }}>Partial</span>
                        ) : row.custom ? (
                          <CheckCircle size={20} style={{ color: '#22C55E' }} />
                        ) : (
                          <XCircle size={20} style={{ color: 'var(--gray-300)' }} />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* When to Use PEAC */}
        <section className="section" style={{ background: 'var(--gray-50)', paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                When to use PEAC
              </h2>
            </div>

            <div className="grid grid-2" style={{ gap: 'var(--space-8)', maxWidth: '900px', margin: '0 auto' }}>
              <div className="card" style={{ borderLeft: '4px solid #22C55E' }}>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                  PEAC is ideal when you need:
                </h3>
                <ul style={{ margin: 0, paddingLeft: 'var(--space-5)', color: 'var(--gray-600)', lineHeight: 1.8 }}>
                  <li>Verifiable proof of AI interactions for audits</li>
                  <li>Policy discovery without custom integrations</li>
                  <li>Payment handling across multiple rails</li>
                  <li>Privacy-preserving telemetry</li>
                  <li>Edge-native verification (sub-5ms)</li>
                  <li>Standards-based approach without lock-in</li>
                </ul>
              </div>

              <div className="card" style={{ borderLeft: '4px solid var(--gray-300)' }}>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                  Consider alternatives if:
                </h3>
                <ul style={{ margin: 0, paddingLeft: 'var(--space-5)', color: 'var(--gray-600)', lineHeight: 1.8 }}>
                  <li>You only need simple API key authentication</li>
                  <li>No audit trail or compliance requirements</li>
                  <li>Single vendor ecosystem is acceptable</li>
                  <li>No payment or monetization needs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Integration with Standards */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                Works with your existing stack
              </h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto' }}>
                PEAC integrates with HTTP 402, x402, MCP, A2A, and AIPREF standards
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <Link href="/integrations/x402" className="btn btn-ghost">HTTP 402 / x402</Link>
              <Link href="/integrations/mcp" className="btn btn-ghost">MCP</Link>
              <Link href="/integrations/a2a" className="btn btn-ghost">A2A</Link>
              <Link href="/integrations/aipref" className="btn btn-ghost">AIPREF</Link>
              <Link href="/integrations/acp" className="btn btn-ghost">ACP</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <div className="cta-card" style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--white)' }}>
                Ready to get started?
              </h2>
              <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '500px', margin: '0 auto var(--space-8) auto' }}>
                Deploy your first policy in 5 minutes. Self-host or use Originary Cloud.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/developers" className="btn btn-lg" style={{ background: 'var(--white)', color: 'var(--brand-primary)', border: 'none' }}>
                  <span>Quick Start Guide</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="mailto:contact@originary.xyz" className="btn btn-lg btn-ghost" style={{ color: 'var(--white)', borderColor: 'rgba(255, 255, 255, 0.3)' }}>
                  Talk to Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

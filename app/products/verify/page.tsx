import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, BarChart } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Verify API',
  description: 'Stateless verification for PEAC-Receipts and JWS signatures. Deterministic validation with normalized fields.',
  keywords: 'PEAC receipt verification, JWS validation, signature verification API, enterprise authentication, sub-10ms latency',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Verify API | Originary',
    description: 'Stateless verification for PEAC-Receipts and JWS signatures. Deterministic validation with normalized fields.',
    url: '/products/verify',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verify API | Originary',
    description: 'Stateless verification for PEAC-Receipts and JWS signatures. Deterministic validation with normalized fields.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/products/verify',
  },
}

export default function VerifyAPI() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <div className="container" style={{ paddingTop: '100px', paddingBottom: 'var(--space-4)' }}>
        <Breadcrumb items={[
          { label: 'Products', href: '/products' },
          { label: 'Verify API' }
        ]} />
      </div>
      <main style={{ paddingTop: '0' }}>
        <section className="section" style={{ background: 'var(--surface-elevated)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                background: 'var(--accent-secondary-subtle)',
                border: '1px solid var(--accent-secondary-muted)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-6)',
                marginBottom: 'var(--space-6)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--accent-secondary)'
              }}>
                <Zap size={16} />
                <span>VERIFICATION API</span>
                <div style={{
                  background: 'var(--accent-brand)',
                  color: 'var(--white)',
                  padding: 'var(--space-1) var(--space-2)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600
                }}>OPEN SOURCE</div>
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)'
              }}>
                <span className="text-gradient">Lightning-fast</span> cryptographic verification
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-8)',
                maxWidth: '900px',
                margin: '0 auto var(--space-8) auto'
              }}>
                Enterprise-grade stateless verification for PEAC-Receipts and JWS signatures. Our globally distributed API delivers deterministic validation with normalized metadata for compliance reporting and enterprise observability.
              </p>


              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-4)',
                flexWrap: 'wrap'
              }}>
                <Link href="/company/contact" className="btn btn-primary btn-lg">
                  <span>Talk to verification engineer</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/docs/receipts" className="btn btn-secondary btn-lg">
                  <span>API documentation</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>Enterprise performance</h2>
            <div className="grid grid-3" style={{ marginBottom: 'var(--space-20)' }}>
              <div className="card card-glow">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'var(--accent-brand-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <Zap size={28} style={{ color: 'var(--accent-brand)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Ultra-low latency</h3>
                <div style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 700,
                  color: 'var(--accent-brand)',
                  marginBottom: 'var(--space-2)'
                }}>&lt; 5ms</div>
                <div style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-4)'
                }}>p95 verify latency</div>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Targets: Receipt verification p95 &lt; 5ms, signing p95 &lt; 10ms, ≥5k req/s per edge instance.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--surface-card)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Edge caching</span>
                  <span style={{ background: 'var(--surface-card)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Smart routing</span>
                  <span style={{ background: 'var(--surface-card)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Parallel processing</span>
                </div>
              </div>

              <div className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'var(--accent-secondary-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <Shield size={28} style={{ color: 'var(--accent-secondary)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Performance targets</h3>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Self-hosted verification with configurable redundancy. Benchmarks based on reference implementation testing.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--surface-card)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Auto-failover</span>
                  <span style={{ background: 'var(--surface-card)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Load balancing</span>
                  <span style={{ background: 'var(--surface-card)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Health monitoring</span>
                </div>
              </div>

              <div className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'var(--accent-tertiary-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <BarChart size={28} style={{ color: 'var(--brand-accent)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Global deployment</h3>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Deployed across major cloud providers and edge networks for low-latency performance from any location.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--surface-card)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Multi-cloud</span>
                  <span style={{ background: 'var(--surface-card)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Edge deployment</span>
                  <span style={{ background: 'var(--surface-card)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Regional compliance</span>
                </div>
              </div>
            </div>

            <div className="cta-card" style={{
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 40%, var(--glass-border-hover) 0%, transparent 50%)',
                pointerEvents: 'none'
              }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{
                  fontSize: 'var(--text-4xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--white)'
                }}>
                  Scale verification with confidence
                </h2>
                <p style={{
                  fontSize: 'var(--text-xl)',
                  marginBottom: 'var(--space-8)',
                  color: 'var(--white)',
                  maxWidth: '700px',
                  margin: '0 auto var(--space-8) auto',
                  lineHeight: 1.6
                }}>
                  Start verifying PEAC receipts with the open-source reference implementation. Self-hostable, offline-capable, and backed by 22 npm packages.
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 'var(--space-4)',
                  flexWrap: 'wrap'
                }}>
                  <Link
                    href="/company/contact"
                    className="btn btn-lg"
                    style={{
                      background: 'var(--surface-elevated)',
                      color: 'var(--accent-brand)',
                      border: 'none'
                    }}
                  >
                    <span>Talk to verification engineer</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/developers"
                    className="btn btn-lg btn-ghost"
                    style={{
                      color: 'var(--white)',
                      border: '1px solid var(--border-hover)'
                    }}
                  >
                    <span>View API documentation</span>
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
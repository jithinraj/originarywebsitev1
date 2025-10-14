import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap, Shield, BarChart, ExternalLink, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Verify API : Originary',
  description: 'Stateless verification for PEAC-Receipts and JWS signatures. Submit a receipt and get deterministic validation with normalized fields for enterprise logging and analytics.',
  keywords: 'PEAC receipt verification, JWS validation, signature verification API, enterprise authentication, sub-10ms latency',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Verify API : Originary',
    description: 'Stateless verification for PEAC-Receipts and JWS signatures. Submit a receipt and get deterministic validation with normalized fields for enterprise logging and analytics.',
    url: 'https://www.originary.xyz/products/verify',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verify API : Originary',
    description: 'Stateless verification for PEAC-Receipts and JWS signatures. Submit a receipt and get deterministic validation with normalized fields for enterprise logging and analytics.',
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originary',
    creator: '@originary',
  },
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.originary.xyz/products/verify',
  },
}

export default function VerifyAPI() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--white)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                background: 'rgba(0, 212, 170, 0.1)',
                border: '1px solid rgba(0, 212, 170, 0.2)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-6)',
                marginBottom: 'var(--space-6)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--brand-secondary)'
              }}>
                <Zap size={16} />
                <span>VERIFICATION API</span>
                <div style={{
                  background: 'var(--success)',
                  color: 'var(--white)',
                  padding: 'var(--space-1) var(--space-2)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600
                }}>OPERATIONAL</div>
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                <span className="text-gradient">Lightning-fast</span> cryptographic verification
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-8)',
                maxWidth: '900px',
                margin: '0 auto var(--space-8) auto'
              }}>
                Enterprise-grade stateless verification for PEAC-Receipts and JWS signatures. Our globally distributed API delivers deterministic validation with normalized metadata for compliance reporting and enterprise analytics.
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
                <a
                  href="/downloads/verify-api-docs.pdf"
                  download
                  className="btn btn-secondary btn-lg"
                >
                  <span>API documentation</span>
                  <Download size={18} />
                </a>
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
                  background: 'rgba(99, 91, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <Zap size={28} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Ultra-low latency</h3>
                <div style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 700,
                  color: 'var(--brand-primary)',
                  marginBottom: 'var(--space-2)'
                }}>&lt; 5ms</div>
                <div style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--gray-600)',
                  marginBottom: 'var(--space-4)'
                }}>p95 verify latency</div>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Targets: Receipt verification p95 &lt; 5ms, signing p95 &lt; 10ms, ≥5k req/s per edge instance.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Edge caching</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Smart routing</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Parallel processing</span>
                </div>
              </div>

              <div className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(0, 212, 170, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <Shield size={28} style={{ color: 'var(--brand-secondary)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Enterprise SLA</h3>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Mission-critical availability with redundant infrastructure, automated failover, and 24/7 monitoring.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Auto-failover</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Load balancing</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Health monitoring</span>
                </div>
              </div>

              <div className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(255, 107, 53, 0.1)',
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
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Multi-cloud</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Edge deployment</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Regional compliance</span>
                </div>
              </div>
            </div>

            <div style={{
              textAlign: 'center',
              background: 'var(--gradient-brand)',
              borderRadius: 'var(--radius-3xl)',
              padding: 'var(--space-16) var(--space-8)',
              color: 'var(--white)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 50%)',
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
                  opacity: 0.9,
                  maxWidth: '700px',
                  margin: '0 auto var(--space-8) auto'
                }}>
                  Join enterprise customers using our verification infrastructure with guaranteed performance and reliability. Our verification engineers provide dedicated support for mission-critical implementations.
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
                      background: 'var(--white)',
                      color: 'var(--brand-primary)',
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
                      border: '1px solid rgba(255,255,255,0.2)'
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
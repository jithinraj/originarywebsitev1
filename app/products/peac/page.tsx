import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, FileText, Shield, Zap, Download, ExternalLink, Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'PEAC Protocol | Verifiable Receipts & Policy Discovery',
  description: 'PEAC is an open protocol for file-based policy and verifiable receipts. Publish /.well-known/peac.txt so agents can discover your terms and present PEAC-Receipt (JWS) as auditable proof of use.',
  keywords: 'PEAC protocol, file-based policy, verifiable receipts, JWS, agent coordination, PEAC-Receipt, policy discovery, .well-known, agent commerce',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'PEAC Protocol | Verifiable Receipts & Policy Discovery',
    description: 'PEAC is an open protocol for file-based policy and verifiable receipts. Publish /.well-known/peac.txt so agents can discover your terms and present PEAC-Receipt (JWS) as auditable proof of use.',
    url: 'https://www.originary.xyz/products/peac',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PEAC Protocol | Verifiable Receipts & Policy Discovery',
    description: 'PEAC is an open protocol for file-based policy and verifiable receipts. Publish /.well-known/peac.txt so agents can discover your terms and present PEAC-Receipt (JWS).',
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originary',
    creator: '@originary',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/products/peac',
  },
}

export default function PEACProtocol() {
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
                background: 'rgba(99, 91, 255, 0.1)',
                border: '1px solid rgba(99, 91, 255, 0.2)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-6)',
                marginBottom: 'var(--space-6)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--brand-primary)'
              }}>
                <FileText size={16} />
                <span>OPEN PROTOCOL</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                PEAC: <span className="text-gradient">the receipt protocol</span>
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.4,
                letterSpacing: '-0.01em',
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-8)',
                maxWidth: '48rem',
                margin: '0 auto var(--space-8) auto'
              }}>
                Agents discover policies via <code style={{
                  background: 'var(--gray-100)',
                  padding: 'var(--space-1) var(--space-2)',
                  borderRadius: 'var(--radius-sm)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-base)'
                }}>/.well-known/peac.txt</code> and send <strong>PEAC-Receipt</strong> on every request.
              </p>


              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-4)',
                flexWrap: 'wrap'
              }}>
                <Link href="/company/contact" className="btn btn-primary btn-lg">
                  <span>Talk to protocol engineer</span>
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="https://peacprotocol.org/spec"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-secondary btn-lg"
                >
                  <span>View specification</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-16)',
              alignItems: 'center',
              marginBottom: 'var(--space-20)'
            }}>
              <div>
                <h2 style={{ marginBottom: 'var(--space-6)' }}>The protocol</h2>
                <p style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.7,
                  color: 'var(--gray-600)',
                  marginBottom: 'var(--space-8)'
                }}>
                  PEAC establishes a standardized method for autonomous agents to discover resource policies, negotiate access terms, and generate cryptographically verifiable receipts. By publishing a machine-readable <code style={{
                    background: 'var(--gray-100)',
                    padding: 'var(--space-1) var(--space-2)',
                    borderRadius: 'var(--radius-sm)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-base)'
                  }}>/.well-known/peac.txt</code> file, any digital resource becomes discoverable and accessible to agents while maintaining full policy control and attribution tracking.
                </p>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-6)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-4)'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-xl)',
                      background: 'rgba(99, 91, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'var(--text-xl)',
                      flexShrink: 0
                    }}>
                      <FileText size={24} style={{ color: 'var(--brand-primary)' }} />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: 'var(--space-2)' }}>File-based policies</h4>
                      <p style={{ color: 'var(--gray-600)' }}>Simple, standardized policy declaration</p>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-4)'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-xl)',
                      background: 'rgba(0, 212, 170, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'var(--text-xl)',
                      flexShrink: 0
                    }}>
                      <Shield size={24} style={{ color: 'var(--brand-secondary)' }} />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: 'var(--space-2)' }}>Cryptographic receipts</h4>
                      <p style={{ color: 'var(--gray-600)' }}>JWS-signed proof of compliant access</p>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-4)'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-xl)',
                      background: 'rgba(255, 107, 53, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'var(--text-xl)',
                      flexShrink: 0
                    }}>
                      <Zap size={24} style={{ color: 'var(--brand-accent)' }} />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: 'var(--space-2)' }}>Agent coordination</h4>
                      <p style={{ color: 'var(--gray-600)' }}>Automated discovery and negotiation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card" style={{
                background: 'var(--gray-900)',
                color: 'var(--white)',
                overflow: 'hidden'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 'var(--space-4)',
                  paddingBottom: 'var(--space-4)',
                  borderBottom: '1px solid var(--gray-700)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}>
                    <div style={{ width: '12px', height: '12px', background: '#ff5f57', borderRadius: '50%' }}></div>
                    <div style={{ width: '12px', height: '12px', background: '#ffbd2e', borderRadius: '50%' }}></div>
                    <div style={{ width: '12px', height: '12px', background: '#28ca42', borderRadius: '50%' }}></div>
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--gray-400)'
                  }}>/.well-known/peac.txt</span>
                </div>
                <pre style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-sm)',
                  lineHeight: 1.6,
                  margin: 0,
                  overflow: 'hidden'
                }}>
                  <code style={{ color: 'var(--gray-300)' }}>
{`preferences: https://www.originary.xyz/.well-known/aipref.json
access_control: http-402
payments: x402, stripe
provenance: c2pa
receipts: required
verify: https://api.originary.xyz/verify
public_keys:
  kid=2025-09-key1; alg=Ed25519; key=...   # base64url`}
                  </code>
                </pre>
              </div>
            </div>

            <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>Enterprise benefits</h2>
            <div className="grid grid-3" style={{ marginBottom: 'var(--space-20)' }}>
              <div className="card">
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
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Instant policy discovery</h3>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Agents automatically discover and respect your usage policies without manual integration or API documentation.
                </p>
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
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Compliance by design</h3>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Built-in attribution, quota enforcement, and audit trails with cryptographically verifiable receipts.
                </p>
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
                  <CheckCircle size={28} style={{ color: 'var(--brand-accent)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Universal compatibility</h3>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Works with existing infrastructure: CDNs, API gateways, auth systems, and payment processors.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="card" style={{
              textAlign: 'center',
              background: 'var(--gradient-brand)',
              color: 'white',
              marginTop: 'var(--space-20)'
            }}>
              <h2 style={{ marginBottom: 'var(--space-6)', color: 'white' }}>Deploy PEAC at enterprise scale</h2>
              <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)', color: 'var(--white)', lineHeight: 1.6 }}>
                Large enterprises use PEAC Protocol to govern agent interactions, ensure compliance, and monetize digital resources.
              </p>
              <div style={{
                display: 'flex',
                gap: 'var(--space-4)',
                justifyContent: 'center',
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
                  <span>Talk to a protocol engineer</span>
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
                  <span>View developer docs</span>
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
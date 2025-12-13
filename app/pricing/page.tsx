import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Github, Cloud, Building2 } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Open source PEAC Protocol and receipts infrastructure. Self-host for free or talk to us about managed cloud and enterprise deployments.',
  keywords: 'PEAC Protocol pricing, AI receipts pricing, open source infrastructure, enterprise AI commerce, usage-based pricing',
  alternates: {
    canonical: '/pricing'
  },
  openGraph: {
    title: 'Pricing | Originary',
    description: 'Open source PEAC Protocol and receipts infrastructure. Self-host for free or talk to us about managed cloud and enterprise deployments.',
    url: 'https://www.originary.xyz/pricing',
    type: 'website',
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Originary',
    description: 'Open source PEAC Protocol. Self-host for free or talk to us about managed cloud.',
  },
  robots: 'index,follow'
}

export default function PricingPage() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--white)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            {/* Hero */}
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                <span className="text-gradient">Pricing</span>
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-4)',
                maxWidth: '700px',
                margin: '0 auto var(--space-4) auto'
              }}>
                Open source protocol and infrastructure for AI commerce and receipts.
              </p>
              <p style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 1.7,
                color: 'var(--gray-500)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Self-host for free. Talk to us about managed cloud and enterprise deployments.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-3" style={{ gap: 'var(--space-6)', marginBottom: 'var(--space-24)', paddingTop: 'var(--space-4)' }}>
              {/* Open Source */}
              <div className="card" style={{
                padding: 'var(--space-8)',
                background: 'var(--white)',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-2xl)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  background: 'var(--gray-100)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-1) var(--space-3)',
                  marginBottom: 'var(--space-4)',
                  width: 'fit-content'
                }}>
                  <Github size={14} />
                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--gray-700)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Open Source
                  </span>
                </div>

                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                    $0
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
                    Forever free
                  </div>
                </div>

                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: 'var(--space-6)' }}>
                  Apache 2.0 licensed. Self-host PEAC Protocol and core components on your own infrastructure.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 var(--space-8) 0', flex: 1 }}>
                  {[
                    'PEAC Protocol specification',
                    'Verifiable receipts (JWS)',
                    'Policy discovery (peac.txt)',
                    'Basic attribution',
                    'Self-managed signing keys',
                    'Community support'
                  ].map((feature, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--space-3)',
                      marginBottom: 'var(--space-3)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-700)'
                    }}>
                      <CheckCircle size={16} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://github.com/peacprotocol/peac?utm_source=originary&utm_medium=pricing&utm_campaign=oss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}
                >
                  <Github size={18} />
                  View on GitHub
                </a>
              </div>

              {/* Cloud (Private Beta) */}
              <div className="card" style={{
                padding: 'var(--space-8)',
                background: 'rgba(99, 91, 255, 0.02)',
                border: '2px solid var(--brand-primary)',
                borderRadius: 'var(--radius-2xl)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'visible'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--gradient-brand)',
                  color: 'var(--white)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  padding: '6px 16px',
                  borderRadius: 'var(--radius-full)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  whiteSpace: 'nowrap',
                  zIndex: 10
                }}>
                  Private Beta
                </div>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  background: 'rgba(99, 91, 255, 0.1)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-1) var(--space-3)',
                  marginBottom: 'var(--space-4)',
                  marginTop: 'var(--space-2)',
                  width: 'fit-content'
                }}>
                  <Cloud size={14} style={{ color: 'var(--brand-primary)' }} />
                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--brand-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Cloud
                  </span>
                </div>

                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                    Usage based
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
                    Per receipt and per million events
                  </div>
                </div>

                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: 'var(--space-6)' }}>
                  Hosted PEAC verification and receipts. Preferred terms for early design partners.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 var(--space-8) 0', flex: 1 }}>
                  {[
                    'Hosted receipt verification',
                    'Attested keys (KMS-backed)',
                    'Event analytics and dashboards',
                    'Email and webhook alerts',
                    'Compliance bundles',
                    'Email support'
                  ].map((feature, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--space-3)',
                      marginBottom: 'var(--space-3)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-700)'
                    }}>
                      <CheckCircle size={16} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/cloud"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Apply for early access
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Enterprise & Network Partners */}
              <div className="card" style={{
                padding: 'var(--space-8)',
                background: 'var(--white)',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-2xl)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  background: 'var(--gray-100)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-1) var(--space-3)',
                  marginBottom: 'var(--space-4)',
                  width: 'fit-content'
                }}>
                  <Building2 size={14} />
                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--gray-700)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Enterprise
                  </span>
                </div>

                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                    Custom
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
                    Volume-based pricing
                  </div>
                </div>

                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: 'var(--space-6)' }}>
                  Custom deployments, SLAs, and governance for publishers, API providers, and agent platforms.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 var(--space-8) 0', flex: 1 }}>
                  {[
                    'Everything in Cloud',
                    'Custom rail adapters (x402, i402, Stripe)',
                    'Multi-property rollups',
                    'Domain attestation + KMS',
                    'Uptime SLA (99.99%)',
                    'Dedicated support'
                  ].map((feature, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--space-3)',
                      marginBottom: 'var(--space-3)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-700)'
                    }}>
                      <CheckCircle size={16} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:contact@originary.xyz?subject=Enterprise%20Inquiry"
                  className="btn btn-secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Contact sales
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            {/* Platform Products Section */}
            <section style={{
              marginTop: 'var(--space-8)',
              paddingTop: 'var(--space-16)',
              borderTop: '1px solid var(--gray-200)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-4)',
                  color: 'var(--gray-900)'
                }}>
                  Originary Platform
                </h2>
                <p style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--gray-600)',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                  Additional products in beta and private beta. Request access to try early.
                </p>
              </div>

              <div className="grid grid-3" style={{ gap: 'var(--space-6)' }}>
                {/* Verify API */}
                <div className="card" style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      background: 'rgba(99, 91, 255, 0.1)',
                      color: 'var(--brand-primary)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      marginBottom: 'var(--space-4)',
                      textTransform: 'uppercase'
                    }}
                  >
                    Beta
                  </div>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-3)' }}>
                    Verify API
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginBottom: 'var(--space-6)', lineHeight: 1.6 }}>
                    PEAC receipt verification and related utilities as an API
                  </p>
                  <Link href="/products/verify" className="btn btn-ghost" style={{ width: '100%' }}>
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Gateway 402 */}
                <div className="card" style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      background: 'rgba(0, 212, 170, 0.1)',
                      color: 'var(--success)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      marginBottom: 'var(--space-4)',
                      textTransform: 'uppercase'
                    }}
                  >
                    Private beta
                  </div>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-3)' }}>
                    Gateway 402
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginBottom: 'var(--space-6)', lineHeight: 1.6 }}>
                    Production-grade HTTP 402 controls and payment adapters
                  </p>
                  <Link href="/products/gateway-402" className="btn btn-ghost" style={{ width: '100%' }}>
                    Request access <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Studio */}
                <div className="card" style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      background: 'var(--gray-100)',
                      color: 'var(--gray-600)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      marginBottom: 'var(--space-4)',
                      textTransform: 'uppercase'
                    }}
                  >
                    Waitlist
                  </div>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-3)' }}>
                    Studio
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginBottom: 'var(--space-6)', lineHeight: 1.6 }}>
                    Content policy design and compliance workflows
                  </p>
                  <Link href="/products/studio" className="btn btn-ghost" style={{ width: '100%' }}>
                    Join waitlist <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section style={{
              marginTop: 'var(--space-16)',
              padding: 'var(--space-8)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-2xl)',
              background: 'var(--white)'
            }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-6)', color: 'var(--gray-900)' }}>
                Frequently Asked Questions
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <details style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--gray-200)' }}>
                  <summary style={{ fontSize: 'var(--text-lg)', fontWeight: 600, cursor: 'pointer', color: 'var(--gray-900)' }}>
                    Can I self-host everything?
                  </summary>
                  <p style={{ marginTop: 'var(--space-3)', color: 'var(--gray-700)', lineHeight: 1.7 }}>
                    Yes. PEAC Protocol and core components are Apache 2.0 licensed and free to self-host. Cloud adds managed infrastructure, attested keys, and compliance automation.
                  </p>
                </details>
                <details style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--gray-200)' }}>
                  <summary style={{ fontSize: 'var(--text-lg)', fontWeight: 600, cursor: 'pointer', color: 'var(--gray-900)' }}>
                    How does Cloud pricing work?
                  </summary>
                  <p style={{ marginTop: 'var(--space-3)', color: 'var(--gray-700)', lineHeight: 1.7 }}>
                    Cloud pricing is usage-based, metered by verified receipts and events. Pricing is negotiated with each design partner based on volume, rails, and retention requirements.
                  </p>
                </details>
                <details style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--gray-200)' }}>
                  <summary style={{ fontSize: 'var(--text-lg)', fontWeight: 600, cursor: 'pointer', color: 'var(--gray-900)' }}>
                    What payment rails do you support?
                  </summary>
                  <p style={{ marginTop: 'var(--space-3)', color: 'var(--gray-700)', lineHeight: 1.7 }}>
                    PEAC Protocol is rail-agnostic. Enterprise deployments can integrate x402, i402, Stripe, and other payment rails through Gateway 402 adapters.
                  </p>
                </details>
                <details style={{ padding: 'var(--space-4)' }}>
                  <summary style={{ fontSize: 'var(--text-lg)', fontWeight: 600, cursor: 'pointer', color: 'var(--gray-900)' }}>
                    Who should contact sales?
                  </summary>
                  <p style={{ marginTop: 'var(--space-3)', color: 'var(--gray-700)', lineHeight: 1.7 }}>
                    Publishers, API providers, agent platforms, and organizations integrating PEAC receipts at scale. We prioritize design partners building on x402, i402, or similar rails.
                  </p>
                </details>
              </div>
            </section>

            {/* CTA */}
            <div className="cta-card" style={{
              marginTop: 'var(--space-16)',
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
                  Ready to get started?
                </h2>
                <p style={{
                  fontSize: 'var(--text-xl)',
                  marginBottom: 'var(--space-8)',
                  color: 'var(--white)',
                  maxWidth: '600px',
                  margin: '0 auto var(--space-8) auto',
                  lineHeight: 1.6
                }}>
                  Start with open source or talk to us about your use case.
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 'var(--space-4)',
                  flexWrap: 'wrap'
                }}>
                  <Link
                    href="/cloud"
                    className="btn btn-lg"
                    style={{
                      background: 'var(--white)',
                      color: 'var(--brand-primary)',
                      border: 'none'
                    }}
                  >
                    <span>Apply for Cloud access</span>
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href="https://github.com/peacprotocol/peac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg btn-ghost"
                    style={{
                      color: 'var(--white)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <Github size={18} />
                    <span>View on GitHub</span>
                  </a>
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

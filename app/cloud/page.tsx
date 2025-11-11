import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { CheckCircle, Zap, Shield, Cloud } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Trace Cloud - Managed crawler analytics | Originary',
  description: 'Managed Trace with attested keys, verifiable compliance bundles, multi-property rollups, and enterprise SLAs.',
  openGraph: {
    title: 'Trace Cloud - Managed crawler analytics',
    description: 'Managed Trace with attested keys, verifiable compliance bundles, multi-property rollups, and enterprise SLAs.',
    url: 'https://www.originary.xyz/cloud',
    siteName: 'Originary',
    type: 'website'
  }
}

export default function CloudPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Originary Trace Cloud",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Web",
    "brand": {
      "@type": "Brand",
      "name": "Originary"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter",
        "price": "29",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "29",
          "priceCurrency": "USD",
          "billingDuration": "P1M"
        }
      },
      {
        "@type": "Offer",
        "name": "Pro",
        "price": "99",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "99",
          "priceCurrency": "USD",
          "billingDuration": "P1M"
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavigationHeader />
      <main id="main-content" role="main">
        {/* Hero Section */}
        <section style={{
          paddingTop: 'calc(var(--space-32) + 60px)',
          paddingBottom: 'var(--space-24)',
          background: 'var(--white)'
        }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                background: 'rgba(99, 91, 255, 0.1)',
                border: '1px solid rgba(99, 91, 255, 0.2)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-4)',
                marginBottom: 'var(--space-6)',
                fontSize: 'var(--text-sm)',
                color: 'var(--brand-primary)',
                fontWeight: 600
              }}>
                <Cloud size={16} />
                Managed Service
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 5vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                Originary Trace™ Cloud
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-12)'
              }}>
                Managed crawler analytics with attestation, signed bundles, and enterprise SLAs. All the power of Trace without the operational overhead.
              </p>

              {/* Key Benefits */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 'var(--space-6)',
                marginBottom: 'var(--space-12)',
                textAlign: 'left'
              }}>
                {[
                  { icon: Shield, title: 'Attested keys and verifiable compliance bundles', desc: 'Cryptographically signed evidence for legal teams' },
                  { icon: Zap, title: 'Multi-property rollups and benchmarking', desc: 'Aggregate data across sites and compare against peers' },
                  { icon: CheckCircle, title: 'Alerts, retention, and SLAs', desc: 'Webhooks, Slack integration, and uptime guarantees' }
                ].map((benefit, idx) => {
                  const Icon = benefit.icon
                  return (
                    <div key={idx} className="card" style={{
                      padding: 'var(--space-6)',
                      background: 'var(--white)',
                      border: '1px solid var(--gray-200)',
                      borderRadius: 'var(--radius-xl)'
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-lg)',
                        background: 'rgba(99, 91, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 'var(--space-3)',
                        color: 'var(--brand-primary)'
                      }}>
                        <Icon size={20} />
                      </div>
                      <h3 style={{
                        fontSize: 'var(--text-base)',
                        fontWeight: 600,
                        marginBottom: 'var(--space-2)',
                        color: 'var(--gray-900)'
                      }}>
                        {benefit.title}
                      </h3>
                      <p style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--gray-600)',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        {benefit.desc}
                      </p>
                    </div>
                  )
                })}
              </div>

              {/* Waitlist Form */}
              <div className="card" style={{
                padding: 'var(--space-8)',
                background: 'var(--gradient-mesh)',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-2xl)',
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                <h2 style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-2)',
                  color: 'var(--gray-900)'
                }}>
                  Join the waitlist
                </h2>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--gray-600)',
                  marginBottom: 'var(--space-6)'
                }}>
                  Get early access to Trace Cloud. We'll notify you when we're ready.
                </p>
                <form
                  action="/api/waitlist"
                  method="POST"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-4)'
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    style={{
                      padding: 'var(--space-3) var(--space-4)',
                      border: '1px solid var(--gray-300)',
                      borderRadius: 'var(--radius-lg)',
                      fontSize: 'var(--text-base)',
                      fontFamily: 'inherit'
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    style={{
                      padding: 'var(--space-3) var(--space-4)',
                      border: '1px solid var(--gray-300)',
                      borderRadius: 'var(--radius-lg)',
                      fontSize: 'var(--text-base)',
                      fontFamily: 'inherit'
                    }}
                  />
                  <input
                    type="text"
                    name="domain"
                    placeholder="yourdomain.com"
                    required
                    style={{
                      padding: 'var(--space-3) var(--space-4)',
                      border: '1px solid var(--gray-300)',
                      borderRadius: 'var(--radius-lg)',
                      fontSize: 'var(--text-base)',
                      fontFamily: 'inherit'
                    }}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{
                      width: '100%',
                      justifyContent: 'center'
                    }}
                  >
                    Join waitlist
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section style={{
          padding: 'var(--space-24) 0',
          background: 'var(--gray-50)'
        }}>
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: 'var(--space-12)',
                color: 'var(--gray-900)'
              }}>
                How it works
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--space-8)'
              }}>
                {[
                  { step: '1', title: 'Deploy integration', desc: 'Add Trace to your CDN, edge worker, or origin server' },
                  { step: '2', title: 'Ingest events', desc: 'Crawler data flows to Originary Cloud for correlation and attestation' },
                  { step: '3', title: 'Export evidence', desc: 'Download signed bundles, CSV exports, or query via API' }
                ].map((item) => (
                  <div key={item.step} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'var(--brand-primary)',
                      color: 'var(--white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'var(--text-xl)',
                      fontWeight: 700,
                      margin: '0 auto var(--space-4)'
                    }}>
                      {item.step}
                    </div>
                    <h3 style={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 600,
                      marginBottom: 'var(--space-2)',
                      color: 'var(--gray-900)'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-600)',
                      lineHeight: 1.6
                    }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Built on PEAC */}
        <section style={{
          padding: 'var(--space-24) 0',
          background: 'var(--white)',
          borderTop: '1px solid var(--gray-200)'
        }}>
          <div className="container">
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Built on PEAC Protocol
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-6)'
              }}>
                Trace Cloud uses the open PEAC (Provenance-Enhanced Access and Consent) protocol for cryptographic receipts, verifiable attestation, and cross-platform compatibility.
              </p>
              <Link
                href="https://peacprotocol.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Learn about PEAC Protocol
              </Link>
            </div>
          </div>
        </section>

        {/* Compare Cloud vs Self-hosting */}
        <section style={{
          padding: 'var(--space-24) 0',
          background: 'var(--gray-50)'
        }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: 'var(--space-12)',
                color: 'var(--gray-900)'
              }}>
                Cloud vs Self-hosting
              </h2>
              <div className="card" style={{
                padding: 0,
                background: 'var(--white)',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden'
              }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'var(--gray-50)', borderBottom: '1px solid var(--gray-200)' }}>
                      <th style={{ padding: 'var(--space-4)', textAlign: 'left', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--gray-700)' }}>Feature</th>
                      <th style={{ padding: 'var(--space-4)', textAlign: 'center', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--gray-700)' }}>Self-host (OSS)</th>
                      <th style={{ padding: 'var(--space-4)', textAlign: 'center', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--brand-primary)' }}>Cloud</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Crawler analytics', oss: true, cloud: true },
                      { feature: 'PEAC receipts', oss: true, cloud: true },
                      { feature: 'Attested keys', oss: false, cloud: true },
                      { feature: 'Signed bundles', oss: false, cloud: true },
                      { feature: 'Multi-property rollups', oss: false, cloud: true },
                      { feature: 'Benchmarking', oss: false, cloud: true },
                      { feature: 'Webhooks / Slack', oss: false, cloud: true },
                      { feature: 'SLA & support', oss: false, cloud: true }
                    ].map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: idx < 7 ? '1px solid var(--gray-100)' : 'none' }}>
                        <td style={{ padding: 'var(--space-4)', fontSize: 'var(--text-sm)', color: 'var(--gray-900)' }}>{row.feature}</td>
                        <td style={{ padding: 'var(--space-4)', textAlign: 'center', fontSize: 'var(--text-sm)' }}>
                          {row.oss ? <CheckCircle size={18} style={{ color: 'var(--success)', margin: '0 auto' }} /> : '—'}
                        </td>
                        <td style={{ padding: 'var(--space-4)', textAlign: 'center', fontSize: 'var(--text-sm)' }}>
                          {row.cloud ? <CheckCircle size={18} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} /> : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ textAlign: 'center', marginTop: 'var(--space-8)', display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
                <a
                  href="https://github.com/originaryx/trace?utm_source=originary&utm_medium=cloud&utm_campaign=compare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Self-host on GitHub
                </a>
                <Link
                  href="/pricing#trace"
                  className="btn btn-primary"
                >
                  Compare pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

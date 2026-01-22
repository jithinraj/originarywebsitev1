'use client'

import React from 'react'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { CheckCircle, X, ArrowRight, Github, Database } from 'lucide-react'

export default function TracePricingPage() {
  const comparisonFeatures = [
    {
      category: 'Core Features',
      features: [
        { name: 'Event ingestion (JSON/NDJSON)', oss: true, cloud: true },
        { name: 'HMAC authentication', oss: true, cloud: true },
        { name: 'Replay protection', oss: true, cloud: true },
        { name: 'Bot detection & classification', oss: true, cloud: true },
        { name: 'Data footprint tracking', oss: true, cloud: true },
        { name: 'Prometheus metrics', oss: true, cloud: true },
        { name: 'Public badge & stats API', oss: true, cloud: true },
      ]
    },
    {
      category: 'PEAC Receipts',
      features: [
        { name: 'Basic receipts (self-managed keys)', oss: true, cloud: false },
        { name: 'Attested receipts (KMS-backed)', oss: false, cloud: true },
        { name: 'Receipt verification API', oss: true, cloud: true },
        { name: 'JWKS endpoint', oss: true, cloud: true },
      ]
    },
    {
      category: 'Compliance & Exports',
      features: [
        { name: 'CSV/JSON exports (manual)', oss: true, cloud: false },
        { name: 'Automated compliance bundles', oss: false, cloud: true },
        { name: 'Signed bundle archives', oss: false, cloud: true },
        { name: 'Legal pack formats', oss: false, cloud: true },
      ]
    },
    {
      category: 'Multi-Property',
      features: [
        { name: '1 instance per site', oss: true, cloud: false },
        { name: 'Unlimited properties', oss: false, cloud: true },
        { name: 'Cross-site rollups', oss: false, cloud: true },
        { name: 'Benchmarking vs industry', oss: false, cloud: true },
      ]
    },
    {
      category: 'Deployment & Operations',
      features: [
        { name: 'Cloudflare Worker', oss: true, cloud: true },
        { name: 'Nginx + Go tailer', oss: true, cloud: true },
        { name: 'Docker Compose', oss: true, cloud: true },
        { name: 'Managed hosting', oss: false, cloud: true },
        { name: 'Auto-scaling', oss: false, cloud: true },
        { name: 'Uptime SLA', oss: false, cloud: true },
      ]
    },
    {
      category: 'Alerts & Integrations',
      features: [
        { name: 'Email alerts (self-configured)', oss: true, cloud: false },
        { name: 'Managed email/Slack alerts', oss: false, cloud: true },
        { name: 'Webhook integrations', oss: true, cloud: true },
        { name: 'SSO/SCIM', oss: false, cloud: true },
      ]
    },
    {
      category: 'Support',
      features: [
        { name: 'Community support (GitHub)', oss: true, cloud: true },
        { name: 'Email support', oss: false, cloud: true },
        { name: 'Priority support', oss: false, cloud: true },
        { name: 'Dedicated Slack channel', oss: false, cloud: true },
      ]
    }
  ]

  const faqs = [
    {
      question: 'What is the difference between OSS and Cloud?',
      answer: 'OSS is self-hosted and includes all core features (ingestion, HMAC auth, bot detection, basic receipts). Cloud adds managed hosting, attested receipts (KMS-backed), automated compliance bundles, multi-property rollups, and enterprise support.'
    },
    {
      question: 'What are attested receipts?',
      answer: 'Attested receipts are PEAC receipts signed with KMS-backed keys and include domain attestation. They provide stronger legal evidence than self-managed keys and are required for certain compliance use cases.'
    },
    {
      question: 'Can I migrate from OSS to Cloud later?',
      answer: 'Yes. Your data and configuration can be migrated to Cloud at any time. We provide migration tools and support to make the transition seamless.'
    },
    {
      question: 'How does Cloud pricing work?',
      answer: 'Cloud pricing is usage-based, metered by events and receipts. Pricing is negotiated with each design partner based on volume, rails, and retention requirements. Contact us to discuss your use case.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes. All data is encrypted at rest and in transit. For OSS deployments, you maintain full control of your data. Cloud deployments follow enterprise security practices.'
    }
  ]

  return (
    <>
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="section" style={{ background: 'var(--gradient-mesh)', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-16)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  background: 'var(--accent-brand-subtle)',
                  border: '1px solid var(--accent-brand-muted)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-2) var(--space-4)',
                  marginBottom: 'var(--space-4)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 500,
                  color: 'var(--accent-brand)'
                }}
              >
                <Database size={16} />
                <span>Analytics & Receipts</span>
              </div>
              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                marginBottom: 'var(--space-6)',
                lineHeight: 1.1,
                letterSpacing: '-0.04em'
              }}>
                Start free with OSS, <span className="text-gradient">scale with Cloud</span>
              </h1>
              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-8)'
              }}>
                Self-host for free or talk to us about managed Cloud with attested receipts and compliance automation.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://github.com/peacprotocol/peac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                >
                  <Github size={18} />
                  View on GitHub
                </a>
                <Link
                  href="/pricing"
                  className="btn btn-primary btn-lg"
                >
                  View pricing
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* OSS Callout */}
        <section className="section" style={{ background: 'var(--text-primary)', color: 'white', paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-12)' }}>
          <div className="container">
            <div className="card" style={{
              background: 'var(--text-primary)',
              border: '1px solid var(--text-secondary)',
              padding: 'var(--space-10)',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              <div style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'center', flexWrap: 'wrap' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: 'var(--radius-lg)',
                    background: 'linear-gradient(135deg, var(--accent-brand), var(--accent-secondary))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Github size={40} style={{ color: 'white' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-3)',
                    color: 'white'
                  }}>
                    Open Source - Free Forever
                  </h2>
                  <p style={{
                    fontSize: 'var(--text-lg)',
                    color: 'var(--border-default)',
                    marginBottom: 'var(--space-6)',
                    lineHeight: 1.6
                  }}>
                    Complete self-hosted implementation. Apache 2.0 license. Deploy to Cloudflare Workers, Nginx, or Docker. Includes event ingestion, HMAC auth, bot detection, PEAC receipts (self-managed keys), and exports.
                  </p>
                  <a
                    href="https://github.com/peacprotocol/peac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg"
                    style={{
                      background: 'white',
                      color: 'var(--text-primary)',
                      border: 'none'
                    }}
                  >
                    <Github size={18} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Section */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <div
                style={{
                  display: 'inline-block',
                  background: 'var(--accent-brand-subtle)',
                  color: 'var(--accent-brand)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  marginBottom: 'var(--space-4)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Private Beta
              </div>
              <h2 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)'
              }}>
                Originary Cloud
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                margin: '0 auto var(--space-8)'
              }}>
                Managed hosting, attested receipts, and compliance automation. Pricing is usage-based and negotiated with each design partner.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  href="/cloud"
                  className="btn btn-primary btn-lg"
                >
                  Apply for early access
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="mailto:contact@originary.xyz?subject=Cloud%20Pricing%20Inquiry"
                  className="btn btn-secondary btn-lg"
                >
                  Contact sales
                </a>
              </div>
            </div>

            {/* Cloud Features */}
            <div className="card" style={{
              maxWidth: '800px',
              margin: '0 auto',
              padding: 'var(--space-8)'
            }}>
              <h3 style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-6)',
                textAlign: 'center'
              }}>
                Cloud includes
              </h3>
              <div className="grid grid-2" style={{ gap: 'var(--space-4)' }}>
                {[
                  'Managed hosting and auto-scaling',
                  'Attested receipts (KMS-backed)',
                  'Automated compliance bundles',
                  'Multi-property rollups',
                  'Email and Slack alerts',
                  'SSO/SCIM integration',
                  'Priority support',
                  'Uptime SLA'
                ].map((feature, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)'
                  }}>
                    <CheckCircle size={18} style={{ color: 'var(--accent-brand)', flexShrink: 0 }} />
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)'
              }}>
                Feature comparison
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Complete breakdown of OSS vs Cloud features
              </p>
            </div>

            <div className="card" style={{ overflow: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border-default)' }}>
                    <th style={{
                      textAlign: 'left',
                      padding: 'var(--space-4)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Feature
                    </th>
                    <th style={{
                      textAlign: 'center',
                      padding: 'var(--space-4)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      OSS
                    </th>
                    <th style={{
                      textAlign: 'center',
                      padding: 'var(--space-4)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 700,
                      color: 'var(--accent-brand)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Cloud
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category) => (
                    <React.Fragment key={category.category}>
                      <tr style={{ background: 'var(--surface-card)' }}>
                        <td
                          colSpan={3}
                          style={{
                            padding: 'var(--space-3) var(--space-4)',
                            fontSize: 'var(--text-sm)',
                            fontWeight: 700,
                            color: 'var(--text-secondary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}
                        >
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, index) => (
                        <tr
                          key={`${category.category}-${index}`}
                          style={{
                            borderBottom: '1px solid var(--border-default)'
                          }}
                        >
                          <td style={{
                            padding: 'var(--space-4)',
                            fontSize: 'var(--text-sm)',
                            color: 'var(--text-secondary)'
                          }}>
                            {feature.name}
                          </td>
                          <td style={{
                            textAlign: 'center',
                            padding: 'var(--space-4)'
                          }}>
                            {feature.oss ? (
                              <CheckCircle size={20} style={{ color: 'var(--success)', margin: '0 auto' }} />
                            ) : (
                              <X size={20} style={{ color: 'var(--border-default)', margin: '0 auto' }} />
                            )}
                          </td>
                          <td style={{
                            textAlign: 'center',
                            padding: 'var(--space-4)'
                          }}>
                            {feature.cloud ? (
                              <CheckCircle size={20} style={{ color: 'var(--accent-brand)', margin: '0 auto' }} />
                            ) : (
                              <X size={20} style={{ color: 'var(--border-default)', margin: '0 auto' }} />
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)'
              }}>
                Frequently asked questions
              </h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="card"
                  style={{ marginBottom: 'var(--space-4)' }}
                >
                  <h3 style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-3)',
                    color: 'var(--text-primary)'
                  }}>
                    {faq.question}
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ background: 'var(--gradient-mesh)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)'
              }}>
                Ready to get started?
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-8)',
                lineHeight: 1.6
              }}>
                Deploy OSS in minutes or talk to us about Cloud.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://github.com/peacprotocol/peac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <Github size={18} />
                  Deploy OSS
                </a>
                <a
                  href="mailto:contact@originary.xyz?subject=Cloud%20Inquiry"
                  className="btn btn-secondary btn-lg"
                >
                  Contact sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

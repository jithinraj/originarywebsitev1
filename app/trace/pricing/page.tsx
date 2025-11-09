'use client'

import React from 'react'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { CheckCircle, X, ArrowRight, Github, Shield, Zap, Users, Database } from 'lucide-react'

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

  const cloudTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small sites and side projects',
      features: [
        'Up to 1M events/month',
        '1-3 properties',
        'Attested receipts',
        'Email alerts',
        'Email support',
        '30-day compliance bundles'
      ],
      cta: 'Start free trial',
      href: 'mailto:contact@originary.xyz?subject=Trace%20Cloud%20Starter'
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'For growing teams and publishers',
      features: [
        'Up to 10M events/month',
        'Unlimited properties',
        'Cross-site rollups',
        'Slack alerts',
        'Priority support',
        'Monthly compliance bundles',
        'SSO/SCIM'
      ],
      cta: 'Start free trial',
      href: 'mailto:contact@originary.xyz?subject=Trace%20Cloud%20Professional',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom needs',
      features: [
        'Custom event volume',
        'Unlimited everything',
        'Benchmarking vs industry',
        'Dedicated Slack channel',
        'SLA guarantee',
        'Custom compliance formats',
        'On-premise deployment option'
      ],
      cta: 'Contact sales',
      href: 'mailto:contact@originary.xyz?subject=Trace%20Cloud%20Enterprise'
    }
  ]

  const faqs = [
    {
      question: 'What is the difference between Trace OSS and Trace Cloud?',
      answer: 'Trace OSS is self-hosted and includes all core features (ingestion, HMAC auth, bot detection, basic receipts). Trace Cloud adds managed hosting, attested receipts (KMS-backed), automated compliance bundles, multi-property rollups, and enterprise support.'
    },
    {
      question: 'What are attested receipts?',
      answer: 'Attested receipts are PEAC receipts signed with KMS-backed keys and include domain attestation. They provide stronger legal evidence than self-managed keys and are required for certain compliance use cases.'
    },
    {
      question: 'Can I migrate from OSS to Cloud later?',
      answer: 'Yes! Your data and configuration can be migrated to Cloud at any time. We provide migration tools and support to make the transition seamless.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes, Trace Cloud includes a 14-day free trial. No credit card required. You can try all features of your chosen tier before committing.'
    },
    {
      question: 'What happens if I exceed my event limit?',
      answer: 'We will notify you when you reach 80% and 100% of your limit. You can upgrade to a higher tier at any time. We will not cut you off - excess events are billed at $0.10 per 1,000 events.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes. All data is encrypted at rest and in transit. We are SOC 2 Type II compliant (in progress). For OSS deployments, you maintain full control of your data.'
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
                  background: 'rgba(99, 91, 255, 0.1)',
                  border: '1px solid rgba(99, 91, 255, 0.2)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-2) var(--space-4)',
                  marginBottom: 'var(--space-4)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 500,
                  color: 'var(--brand-primary)'
                }}
              >
                <Database size={16} />
                <span>Trace Pricing</span>
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
                color: 'var(--gray-600)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-8)'
              }}>
                Self-host for free or get managed Cloud with attested receipts and compliance automation
              </p>
            </div>
          </div>
        </section>

        {/* OSS Callout */}
        <section className="section" style={{ background: 'var(--gray-900)', color: 'white', paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-12)' }}>
          <div className="container">
            <div className="card" style={{
              background: 'var(--gray-800)',
              border: '1px solid var(--gray-700)',
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
                    background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))',
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
                    Trace OSS – Free Forever
                  </h2>
                  <p style={{
                    fontSize: 'var(--text-lg)',
                    color: 'var(--gray-300)',
                    marginBottom: 'var(--space-6)',
                    lineHeight: 1.6
                  }}>
                    Complete self-hosted implementation. Apache 2.0 license. Deploy to Cloudflare Workers, Nginx, or Docker. Includes event ingestion, HMAC auth, bot detection, PEAC receipts (self-managed keys), and exports.
                  </p>
                  <a
                    href="https://github.com/originaryx/trace"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg"
                    style={{
                      background: 'white',
                      color: 'var(--gray-900)',
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

        {/* Cloud Pricing Tiers */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)'
              }}>
                Trace Cloud – Managed & Attested
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-600)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Managed hosting, attested receipts, and compliance automation
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-6)', marginBottom: 'var(--space-16)' }}>
              {cloudTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="card"
                  style={{
                    position: 'relative',
                    border: tier.popular ? '2px solid var(--brand-primary)' : undefined,
                    boxShadow: tier.popular ? '0 10px 40px rgba(99, 91, 255, 0.15)' : undefined
                  }}
                >
                  {tier.popular && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        right: 'var(--space-6)',
                        background: 'var(--gradient-brand)',
                        color: 'white',
                        padding: 'var(--space-1) var(--space-3)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      Popular
                    </div>
                  )}

                  <div style={{ marginBottom: 'var(--space-6)' }}>
                    <h3 style={{
                      fontSize: 'var(--text-2xl)',
                      fontWeight: 700,
                      marginBottom: 'var(--space-2)'
                    }}>
                      {tier.name}
                    </h3>
                    <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
                      {tier.description}
                    </p>
                  </div>

                  <div style={{ marginBottom: 'var(--space-6)' }}>
                    <div style={{
                      fontSize: 'var(--text-5xl)',
                      fontWeight: 700,
                      color: 'var(--gray-900)',
                      marginBottom: 'var(--space-1)'
                    }}>
                      {tier.price}
                    </div>
                    {tier.period && (
                      <div style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--gray-500)'
                      }}>
                        {tier.period}
                      </div>
                    )}
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 var(--space-8) 0' }}>
                    {tier.features.map((feature, index) => (
                      <li
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 'var(--space-2)',
                          marginBottom: 'var(--space-3)'
                        }}
                      >
                        <CheckCircle
                          size={16}
                          style={{
                            color: tier.popular ? 'var(--brand-primary)' : 'var(--success)',
                            flexShrink: 0,
                            marginTop: '2px'
                          }}
                        />
                        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-700)' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={tier.href}
                    className="btn btn-primary"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 'var(--space-2)',
                      width: '100%',
                      background: tier.popular ? 'var(--gradient-brand)' : undefined
                    }}
                  >
                    {tier.cta}
                    <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
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
                color: 'var(--gray-600)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Complete breakdown of OSS vs Cloud features
              </p>
            </div>

            <div className="card" style={{ overflow: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--gray-200)' }}>
                    <th style={{
                      textAlign: 'left',
                      padding: 'var(--space-4)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 700,
                      color: 'var(--gray-900)',
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
                      color: 'var(--gray-900)',
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
                      color: 'var(--brand-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Cloud
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category, catIndex) => (
                    <React.Fragment key={category.category}>
                      <tr style={{ background: 'var(--gray-100)' }}>
                        <td
                          colSpan={3}
                          style={{
                            padding: 'var(--space-3) var(--space-4)',
                            fontSize: 'var(--text-sm)',
                            fontWeight: 700,
                            color: 'var(--gray-700)',
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
                            borderBottom: '1px solid var(--gray-200)'
                          }}
                        >
                          <td style={{
                            padding: 'var(--space-4)',
                            fontSize: 'var(--text-sm)',
                            color: 'var(--gray-700)'
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
                              <X size={20} style={{ color: 'var(--gray-300)', margin: '0 auto' }} />
                            )}
                          </td>
                          <td style={{
                            textAlign: 'center',
                            padding: 'var(--space-4)'
                          }}>
                            {feature.cloud ? (
                              <CheckCircle size={20} style={{ color: 'var(--brand-primary)', margin: '0 auto' }} />
                            ) : (
                              <X size={20} style={{ color: 'var(--gray-300)', margin: '0 auto' }} />
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
                    color: 'var(--gray-900)'
                  }}>
                    {faq.question}
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--gray-600)',
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
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-8)',
                lineHeight: 1.6
              }}>
                Deploy OSS in minutes or start a Cloud trial with no credit card required
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://github.com/originaryx/trace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <Github size={18} />
                  Deploy OSS
                </a>
                <a
                  href="mailto:contact@originary.xyz?subject=Trace%20Cloud%20Trial"
                  className="btn btn-secondary btn-lg"
                >
                  Start Cloud trial
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

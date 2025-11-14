'use client'

import Script from 'next/script'
import NavigationHeader from '@/components/NavigationHeader'
import OpenSourceBanner from '@/components/OpenSourceBanner'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Eye, Shield, Download, Zap, CheckCircle, ArrowRight, Github, Play, Database } from 'lucide-react'

export default function TracePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Originary Trace",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Web",
    "brand": {
      "@type": "Brand",
      "name": "Originary"
    },
    "downloadUrl": "https://github.com/originaryx/trace",
    "isAccessibleForFree": true,
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter",
        "price": "29",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Pro",
        "price": "99",
        "priceCurrency": "USD"
      }
    ]
  }

  const features = [
    {
      icon: <Eye size={24} />,
      title: 'Complete Visibility',
      description: 'Track every AI crawler that accesses your content. Use Trace as your bot management and bot protection layer for AI crawlers. See which agents visit, what they take, and when.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Policy Compliance',
      description: 'Built on PEAC Protocol. Automatically detect policy violations and generate verifiable evidence.'
    },
    {
      icon: <Download size={24} />,
      title: 'Data Footprint Tracking',
      description: 'Track bytes served, token estimates, and resource hashes. Know exactly what data left your servers.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Production Ready',
      description: 'HMAC auth, replay protection, rate limiting. Deploy to Cloudflare Workers, Nginx, or Docker in minutes.'
    }
  ]

  const ossFeatures = [
    'Event ingestion (JSON/NDJSON)',
    'HMAC authentication + replay protection',
    'Bot detection & classification',
    'Data footprint tracking',
    'PEAC receipts (self-managed keys)',
    'Public badge & stats API',
    'CSV/JSON exports',
    'Cloudflare Worker & Nginx tailer',
    'Prometheus metrics',
    'OpenAPI docs'
  ]

  const cloudFeatures = [
    'Everything in OSS',
    'Attested receipts (KMS-backed)',
    'Automated compliance bundles',
    'Multi-property rollups',
    'Cross-site benchmarking',
    'Email/Slack alerts',
    'SSO/SCIM',
    'Priority support',
    'SLA guarantee'
  ]

  return (
    <>
      <Script
        id="trace-json-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavigationHeader />
      <OpenSourceBanner />
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="section" style={{ background: 'var(--gradient-mesh)', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
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
                <Github size={16} />
                <span>Built on PEAC Protocol • Open Source</span>
              </div>
              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                marginBottom: 'var(--space-6)',
                lineHeight: 1.1,
                letterSpacing: '-0.04em'
              }}>
                <span style={{ display: 'block', fontSize: 'var(--text-sm)', color: 'var(--gray-500)', marginBottom: 'var(--space-2)', fontWeight: 600, letterSpacing: '0.05em' }}>ORIGINARY™</span>
                Trace: Distributed tracing for <span className="text-gradient">your content</span>
              </h1>
              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--gray-600)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-10)',
                maxWidth: '700px',
                margin: '0 auto var(--space-10) auto'
              }}>
                See which AI services accessed your site and what they took. Track compliance with PEAC Protocol. Get verifiable evidence.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://github.com/originaryx/trace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <Github size={18} />
                  View on GitHub
                </a>
                <a
                  href="https://trace-demo.originary.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                >
                  <Play size={18} />
                  Try the demo
                </a>
                <Link href="/trace/pricing" className="btn btn-secondary btn-lg">
                  View pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)'
              }}>
                Everything you need to track AI access
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-600)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                From detection to compliance evidence, all in one platform
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: 'var(--space-8)' }}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="card"
                  style={{
                    display: 'flex',
                    gap: 'var(--space-4)',
                    alignItems: 'flex-start'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-lg)',
                      background: 'linear-gradient(135deg, var(--brand-primary)20, var(--brand-primary)10)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--brand-primary)',
                      flexShrink: 0
                    }}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: 'var(--text-xl)',
                      fontWeight: 700,
                      marginBottom: 'var(--space-2)'
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      fontSize: 'var(--text-base)',
                      color: 'var(--gray-600)',
                      lineHeight: 1.6
                    }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Built on PEAC Protocol */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div className="card" style={{
              padding: 'var(--space-12)',
              background: 'linear-gradient(135deg, var(--brand-primary)05, var(--brand-secondary)05)',
              border: '1px solid var(--brand-primary)20'
            }}>
              <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--gradient-brand)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--space-6) auto',
                    color: 'white'
                  }}
                >
                  <Database size={32} />
                </div>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-4)'
                }}>
                  Reference Implementation of PEAC Protocol
                </h2>
                <p style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--gray-600)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-6)'
                }}>
                  Originary Trace is built on the <strong>PEAC Protocol</strong> (Programmable Environment for Agent Coordination) - an open standard for machine-readable policy, compliance tracking, and verifiable receipts.
                </p>
                <a
                  href="https://github.com/peacprotocol/peac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}
                >
                  <Github size={18} />
                  Learn about PEAC Protocol
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* OSS vs Cloud Comparison */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)'
              }}>
                OSS vs Cloud
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-600)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Choose self-hosted open source or managed cloud with attestation
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: 'var(--space-8)' }}>
              {/* OSS */}
              <div className="card" style={{ position: 'relative', overflow: 'visible' }}>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                      background: 'var(--gray-100)',
                      borderRadius: 'var(--radius-full)',
                      padding: 'var(--space-2) var(--space-3)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: 'var(--space-3)'
                    }}
                  >
                    <Github size={14} />
                    <span>Open Source</span>
                  </div>
                  <h3 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-2)'
                  }}>
                    Trace OSS
                  </h3>
                  <p style={{ color: 'var(--gray-600)' }}>
                    Self-hosted, complete implementation
                  </p>
                </div>

                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{
                    fontSize: 'var(--text-4xl)',
                    fontWeight: 700,
                    color: 'var(--gray-900)',
                    marginBottom: 'var(--space-1)'
                  }}>
                    $0
                  </div>
                  <div style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--gray-500)'
                  }}>
                    Apache 2.0 License
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 var(--space-8) 0' }}>
                  {ossFeatures.map((feature, index) => (
                    <li
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--space-2)',
                        marginBottom: 'var(--space-3)'
                      }}
                    >
                      <CheckCircle size={16} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-700)' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://github.com/originaryx/trace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--space-2)',
                    width: '100%'
                  }}
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              </div>

              {/* Cloud */}
              <div
                className="card"
                style={{
                  position: 'relative',
                  overflow: 'visible',
                  border: '2px solid var(--brand-primary)',
                  boxShadow: '0 10px 40px rgba(99, 91, 255, 0.15)'
                }}
              >
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
                  Recommended
                </div>

                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                      background: 'linear-gradient(135deg, var(--brand-primary)20, var(--brand-secondary)20)',
                      borderRadius: 'var(--radius-full)',
                      padding: 'var(--space-2) var(--space-3)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: 'var(--space-3)',
                      color: 'var(--brand-primary)'
                    }}
                  >
                    <Zap size={14} />
                    <span>Managed</span>
                  </div>
                  <h3 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-2)'
                  }}>
                    Trace Cloud
                  </h3>
                  <p style={{ color: 'var(--gray-600)' }}>
                    Attested receipts + automation + scale
                  </p>
                </div>

                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{
                    fontSize: 'var(--text-4xl)',
                    fontWeight: 700,
                    color: 'var(--gray-900)',
                    marginBottom: 'var(--space-1)'
                  }}>
                    Custom
                  </div>
                  <div style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--gray-500)'
                  }}>
                    Contact for pricing
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 var(--space-8) 0' }}>
                  {cloudFeatures.map((feature, index) => (
                    <li
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--space-2)',
                        marginBottom: 'var(--space-3)'
                      }}
                    >
                      <CheckCircle size={16} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--gray-700)',
                        fontWeight: index === 0 ? 600 : 400
                      }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/trace/pricing"
                  className="btn btn-primary"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--space-2)',
                    width: '100%',
                    background: 'var(--gradient-brand)'
                  }}
                >
                  Get started
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quickstart */}
        <section className="section" style={{ background: 'var(--gray-900)', color: 'white' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'white'
              }}>
                Deploy in minutes
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-400)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Three ways to get started with Trace
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-6)' }}>
              <div
                style={{
                  padding: 'var(--space-6)',
                  background: 'var(--gray-800)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--gray-700)'
                }}
              >
                <h3 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-4)',
                  color: 'white'
                }}>
                  1. Cloudflare Worker
                </h3>
                <pre style={{
                  background: 'var(--gray-900)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--text-sm)',
                  overflow: 'auto',
                  color: 'var(--gray-300)',
                  border: '1px solid var(--gray-700)'
                }}>
{`npm install wrangler -g
wrangler deploy`}
                </pre>
              </div>

              <div
                style={{
                  padding: 'var(--space-6)',
                  background: 'var(--gray-800)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--gray-700)'
                }}
              >
                <h3 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-4)',
                  color: 'white'
                }}>
                  2. Nginx + Tailer
                </h3>
                <pre style={{
                  background: 'var(--gray-900)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--text-sm)',
                  overflow: 'auto',
                  color: 'var(--gray-300)',
                  border: '1px solid var(--gray-700)'
                }}>
{`# Install tailer
go install ./tailer
./tailer --config tailer.yml`}
                </pre>
              </div>

              <div
                style={{
                  padding: 'var(--space-6)',
                  background: 'var(--gray-800)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--gray-700)'
                }}
              >
                <h3 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-4)',
                  color: 'white'
                }}>
                  3. Docker Compose
                </h3>
                <pre style={{
                  background: 'var(--gray-900)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--text-sm)',
                  overflow: 'auto',
                  color: 'var(--gray-300)',
                  border: '1px solid var(--gray-700)'
                }}>
{`docker-compose up -d
# API: localhost:8787
# Docs: localhost:8787/docs`}
                </pre>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
              <a
                href="https://github.com/originaryx/trace#quickstart"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
                style={{
                  background: 'var(--gray-800)',
                  color: 'white',
                  border: '1px solid var(--gray-700)'
                }}
              >
                <Github size={18} />
                View full documentation
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: 'var(--space-12)',
                color: 'var(--gray-900)'
              }}>
                Frequently Asked Questions
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                <div className="card">
                  <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-3)',
                    color: 'var(--gray-900)'
                  }}>
                    Can I use Originary Trace as a bot tracker or bot protection tool?
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 1.7,
                    color: 'var(--gray-600)',
                    margin: 0
                  }}>
                    Yes. Originary Trace functions as comprehensive AI crawler analytics and bot tracking infrastructure. It provides bot management and bot protection capabilities by identifying all AI crawlers accessing your content, enforcing PEAC Protocol policies, and generating verifiable evidence. Use Trace as your bot tracker to monitor AI scraping, detect policy violations, and control access to your data - all while maintaining compliance through PEAC-Receipts.
                  </p>
                </div>

                <div className="card">
                  <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-3)',
                    color: 'var(--gray-900)'
                  }}>
                    What makes Trace different from other bot management tools?
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 1.7,
                    color: 'var(--gray-600)',
                    margin: 0
                  }}>
                    Trace combines AI crawler analytics with verifiable compliance evidence through PEAC Protocol. Unlike traditional bot protection tools, Trace generates cryptographically signed receipts for every access, providing audit trails for AI compliance and bot management. It tracks not just who accessed your content, but what they took, under what terms, and with what consent - critical for the agentic web and AI governance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <div
              className="card"
              style={{
                textAlign: 'center',
                padding: 'var(--space-12)',
                background: 'var(--gradient-mesh)',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)'
              }}>
                Ready to track your AI traffic?
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-8)',
                maxWidth: '600px',
                margin: '0 auto var(--space-8) auto'
              }}>
                Start with OSS self-hosted or get managed Cloud with attested receipts
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://github.com/originaryx/trace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <Github size={18} />
                  Start with OSS
                </a>
                <Link href="/trace/pricing" className="btn btn-secondary btn-lg">
                  View Cloud pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Originary Trace",
            "applicationCategory": "SecurityApplication",
            "offers": [
              {
                "@type": "Offer",
                "name": "Trace OSS",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Self-hosted AI crawler analytics",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "name": "Trace Cloud Starter",
                "price": "29",
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "29",
                  "priceCurrency": "USD",
                  "unitText": "MONTH"
                },
                "description": "Managed Trace with 90-day retention",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "name": "Trace Cloud Pro",
                "price": "99",
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "99",
                  "priceCurrency": "USD",
                  "unitText": "MONTH"
                },
                "description": "Multi-property with 1-year retention and compliance bundles",
                "availability": "https://schema.org/InStock"
              }
            ],
            "softwareVersion": "0.1.0",
            "operatingSystem": "Any",
            "url": "https://www.originary.xyz/trace",
            "description": "AI crawler analytics and compliance evidence for your website. Track GPTBot, ClaudeBot, and other AI services with PEAC Protocol.",
            "featureList": [
              "AI crawler identification",
              "PEAC receipt generation",
              "Compliance evidence",
              "Policy violation detection",
              "Multi-deployment support"
            ],
            "publisher": {
              "@type": "Organization",
              "name": "Originary",
              "url": "https://www.originary.xyz"
            },
            "codeRepository": "https://github.com/originaryx/trace"
          })
        }}
      />
    </>
  )
}

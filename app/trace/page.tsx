'use client'

import Script from 'next/script'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Eye, Shield, Download, Zap, CheckCircle, ArrowRight, Github, Database } from 'lucide-react'

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
      title: 'Agent Visibility',
      description: 'See which agents access your APIs and content, what they request, and when.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Policy Compliance',
      description: 'Evaluate requests against your declared terms. Issue signed records for compliant interactions.'
    },
    {
      icon: <Download size={24} />,
      title: 'Data Footprint Tracking',
      description: 'Track bytes served, token estimates, and resource hashes. Know exactly what data left your servers.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Production Ready',
      description: 'HMAC auth, replay protection, rate limiting. Deploy to Cloudflare Workers, Nginx, or Docker.'
    }
  ]

  const ossFeatures = [
    'Event ingestion (JSON/NDJSON)',
    'HMAC authentication + replay protection',
    'Bot detection & classification',
    'Data footprint tracking',
    'Signed interaction records (self-managed keys)',
    'Public badge & stats API',
    'CSV/JSON exports',
    'Cloudflare Worker & Nginx tailer',
    'Prometheus metrics',
    'OpenAPI docs'
  ]

  const cloudFeatures = [
    'Everything in OSS',
    'Automated compliance bundles',
    'Multi-property rollups',
    'Cross-site benchmarking',
    'Email/Slack alerts',
    'Priority support'
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
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="section" style={{ background: 'var(--surface-elevated)', paddingTop: '96px', paddingBottom: '40px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 'var(--space-4)' }}>TRACE</div>
              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                marginBottom: 'var(--space-6)',
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                color: 'var(--text-primary)',
              }}>
                Monitor agent access. Export signed evidence.
              </h1>
              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-10)',
                maxWidth: '700px',
                margin: '0 auto var(--space-10) auto'
              }}>
                See which automated clients touched your APIs and content, what policy applied, and what evidence exists afterward.
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
                <Link href="/developers" className="btn btn-secondary btn-lg">
                  Start here
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
                Monitor agent access. Export signed evidence.
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Detect, classify, and export signed evidence
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
                      background: 'linear-gradient(135deg, var(--accent-brand)20, var(--accent-brand)10)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-brand)',
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
                      color: 'var(--text-secondary)',
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
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div className="card" style={{
              padding: 'var(--space-12)',
              background: 'linear-gradient(135deg, var(--accent-brand)05, var(--accent-secondary)05)',
              border: '1px solid var(--accent-brand)20'
            }}>
              <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--accent-brand)',
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
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-6)'
                }}>
                  Originary Trace is built on the PEAC open standard for verifiable interaction records.
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
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Choose self-hosted open source or managed deployment
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
                      background: 'var(--surface-card)',
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
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Self-hosted, complete implementation
                  </p>
                </div>

                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{
                    fontSize: 'var(--text-4xl)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--space-1)'
                  }}>
                    $0
                  </div>
                  <div style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-tertiary)'
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
                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
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
                  border: '2px solid var(--accent-brand)',
                  boxShadow: '0 10px 40px var(--accent-brand-muted)'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    right: 'var(--space-6)',
                    background: 'var(--accent-brand)',
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
                      background: 'linear-gradient(135deg, var(--accent-brand)20, var(--accent-secondary)20)',
                      borderRadius: 'var(--radius-full)',
                      padding: 'var(--space-2) var(--space-3)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: 'var(--space-3)',
                      color: 'var(--accent-brand)'
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
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Attested receipts + automation + scale
                  </p>
                </div>

                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{
                    fontSize: 'var(--text-4xl)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--space-1)'
                  }}>
                    Custom
                  </div>
                  <div style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-tertiary)'
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
                      <CheckCircle size={16} style={{ color: 'var(--accent-brand)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-secondary)',
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
                    background: 'var(--accent-brand)'
                  }}
                >
                  Start here
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quickstart */}
        <section className="section" style={{ background: 'var(--text-primary)', color: 'white' }}>
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
                color: 'var(--text-muted)',
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
                  background: 'var(--text-primary)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--text-secondary)'
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
                  background: 'var(--text-primary)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--text-sm)',
                  overflow: 'auto',
                  color: 'var(--border-default)',
                  border: '1px solid var(--text-secondary)'
                }}>
{`npm install wrangler -g
wrangler deploy`}
                </pre>
              </div>

              <div
                style={{
                  padding: 'var(--space-6)',
                  background: 'var(--text-primary)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--text-secondary)'
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
                  background: 'var(--text-primary)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--text-sm)',
                  overflow: 'auto',
                  color: 'var(--border-default)',
                  border: '1px solid var(--text-secondary)'
                }}>
{`# Install tailer
go install ./tailer
./tailer --config tailer.yml`}
                </pre>
              </div>

              <div
                style={{
                  padding: 'var(--space-6)',
                  background: 'var(--text-primary)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--text-secondary)'
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
                  background: 'var(--text-primary)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--text-sm)',
                  overflow: 'auto',
                  color: 'var(--border-default)',
                  border: '1px solid var(--text-secondary)'
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
                  background: 'var(--text-primary)',
                  color: 'white',
                  border: '1px solid var(--text-secondary)'
                }}
              >
                <Github size={18} />
                View full documentation
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: 'var(--space-12)',
                color: 'var(--text-primary)'
              }}>
                Frequently Asked Questions
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                <div className="card">
                  <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-3)',
                    color: 'var(--text-primary)'
                  }}>
                    Can I use Originary Trace as a bot tracker or bot protection tool?
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    margin: 0
                  }}>
                    Yes. Trace identifies AI crawlers and agents accessing your content, applies policy, and generates verifiable interaction records. Use it to monitor AI access and enforce your declared terms.
                  </p>
                </div>

                <div className="card">
                  <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-3)',
                    color: 'var(--text-primary)'
                  }}>
                    What makes Trace different from other bot management tools?
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    margin: 0
                  }}>
                    Trace generates signed interaction records for every access, providing verifiable evidence of what was accessed, when, and under what terms.
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
                Monitor agent access to your content
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-8)',
                maxWidth: '600px',
                margin: '0 auto var(--space-8) auto'
              }}>
                Start with OSS self-hosted or contact us about managed deployment
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
              "Interaction record generation",
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

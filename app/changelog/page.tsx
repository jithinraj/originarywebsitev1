'use client'

import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { Calendar, Tag, ArrowRight, CheckCircle, Zap, Shield, Code } from 'lucide-react'

export default function ChangelogPage() {
  const releases = [
    {
      version: 'v1.2.0',
      date: '2025-10-13',
      tag: 'Latest',
      tagColor: 'var(--success)',
      title: 'Gateway 402 Beta & Performance Updates',
      highlights: [
        'Gateway 402 now in public beta with x402 protocol support',
        'Receipt verification 3x faster with caching layer',
        'New pricing tiers with free Cloud trial',
        'Legacy: $1 Start plan (no longer available)',
        'Policy A/B testing in control panel'
      ],
      breaking: [],
      migration: null
    },
    {
      version: 'v1.1.0',
      date: '2025-09-28',
      tag: 'Stable',
      tagColor: 'var(--accent-brand)',
      title: 'Studio Preview & Enhanced Analytics',
      highlights: [
        'Studio visual policy designer (preview)',
        'Real-time analytics dashboard',
        'Stripe adapter for payment settlement',
        'Bulk receipt export for compliance'
      ],
      breaking: [
        'PEAC-Receipt header replaces X-PEAC-Receipt'
      ],
      migration: 'Update all header references in your edge workers'
    },
    {
      version: 'v1.0.0',
      date: '2025-08-15',
      tag: 'GA',
      tagColor: 'var(--warning)',
      title: 'General Availability Release',
      highlights: [
        'PEAC Core protocol implementation complete',
        'Verify API with Ed25519 signatures',
        'CLI tools for policy validation',
        'Receipt generation and verification',
        'Multi-tenant policy management'
      ],
      breaking: [],
      migration: null
    },
    {
      version: 'v0.9.0',
      date: '2025-07-27',
      tag: 'Beta',
      tagColor: 'var(--text-tertiary)',
      title: 'Public Beta Launch',
      highlights: [
        'Initial PEAC protocol implementation',
        'Basic receipt verification',
        'Developer documentation',
        'Example integrations'
      ],
      breaking: [],
      migration: null
    }
  ]

  const upcoming = [
    {
      feature: 'Ethereum L2 settlement adapter',
      quarter: 'Q4 2025',
      status: 'In Development'
    },
    {
      feature: 'GraphQL API for receipt queries',
      quarter: 'Q4 2025',
      status: 'Planning'
    },
    {
      feature: 'Mobile SDKs (iOS/Android)',
      quarter: 'Q1 2026',
      status: 'Research'
    },
    {
      feature: 'WASM edge runtime',
      quarter: 'Q1 2026',
      status: 'Research'
    }
  ]

  return (
    <>
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="section" style={{ background: 'var(--gradient-mesh)', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
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
                <Calendar size={16} />
                <span>Changelog</span>
              </div>
              <h1 style={{
                fontSize: 'var(--text-5xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-6)',
                lineHeight: 1.2
              }}>
                What&rsquo;s new at <span className="text-gradient">Originary</span>
              </h1>
              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-8)'
              }}>
                Product updates, new features, and improvements. Subscribe to our newsletter for monthly updates.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
                <a
                  href="https://github.com/peacprotocol/peac/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <Code size={18} />
                  GitHub Releases
                </a>
                <a
                  href="mailto:contact@originary.xyz?subject=Changelog%20Updates"
                  className="btn btn-secondary btn-lg"
                >
                  Get notified
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Release History */}
        <section className="section">
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-8)'
              }}>
                Release History
              </h2>

              <div style={{ position: 'relative' }}>
                {/* Timeline line */}
                <div
                  style={{
                    position: 'absolute',
                    left: '24px',
                    top: '40px',
                    bottom: '40px',
                    width: '2px',
                    background: 'var(--border-default)'
                  }}
                />

                {/* Releases */}
                {releases.map((release, index) => (
                  <div
                    key={release.version}
                    style={{
                      position: 'relative',
                      marginBottom: 'var(--space-12)',
                      paddingLeft: '60px'
                    }}
                  >
                    {/* Timeline dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '16px',
                        top: '8px',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: index === 0 ? 'var(--accent-brand)' : 'var(--white)',
                        border: `3px solid ${index === 0 ? 'var(--accent-brand)' : 'var(--border-default)'}`,
                        zIndex: 1
                      }}
                    />

                    <div className="card">
                      {/* Release Header */}
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: 'var(--space-4)'
                      }}>
                        <div>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--space-3)',
                            marginBottom: 'var(--space-2)'
                          }}>
                            <h3 style={{
                              fontSize: 'var(--text-2xl)',
                              fontWeight: 700
                            }}>
                              {release.version}
                            </h3>
                            <span
                              style={{
                                padding: 'var(--space-1) var(--space-2)',
                                background: release.tagColor,
                                color: 'var(--white)',
                                borderRadius: 'var(--radius-full)',
                                fontSize: 'var(--text-xs)',
                                fontWeight: 600
                              }}
                            >
                              {release.tag}
                            </span>
                          </div>
                          <p style={{
                            fontSize: 'var(--text-sm)',
                            color: 'var(--text-tertiary)'
                          }}>
                            {release.date}
                          </p>
                        </div>
                      </div>

                      <h4 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 600,
                        marginBottom: 'var(--space-4)'
                      }}>
                        {release.title}
                      </h4>

                      {/* Highlights */}
                      <div style={{ marginBottom: release.breaking.length > 0 ? 'var(--space-6)' : 0 }}>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {release.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 'var(--space-2)',
                                marginBottom: 'var(--space-2)'
                              }}
                            >
                              <CheckCircle size={16} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                              <span style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)' }}>
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Breaking Changes */}
                      {release.breaking.length > 0 && (
                        <div
                          style={{
                            padding: 'var(--space-4)',
                            background: 'rgba(239, 68, 68, 0.05)',
                            border: '1px solid rgba(239, 68, 68, 0.2)',
                            borderRadius: 'var(--radius-md)'
                          }}
                        >
                          <h5 style={{
                            fontSize: 'var(--text-sm)',
                            fontWeight: 600,
                            color: 'var(--error)',
                            marginBottom: 'var(--space-2)'
                          }}>
                            Breaking Changes
                          </h5>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {release.breaking.map((change, idx) => (
                              <li
                                key={idx}
                                style={{
                                  fontSize: 'var(--text-sm)',
                                  color: 'var(--text-secondary)',
                                  marginBottom: idx < release.breaking.length - 1 ? 'var(--space-1)' : 0
                                }}
                              >
                                • {change}
                              </li>
                            ))}
                          </ul>
                          {release.migration && (
                            <p style={{
                              fontSize: 'var(--text-sm)',
                              color: 'var(--text-secondary)',
                              marginTop: 'var(--space-2)',
                              fontStyle: 'italic'
                            }}>
                              Migration: {release.migration}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Features */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-8)'
              }}>
                Upcoming Features
              </h2>

              <div className="grid grid-2" style={{ gap: 'var(--space-4)' }}>
                {upcoming.map((item) => (
                  <div
                    key={item.feature}
                    className="card"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <h4 style={{
                        fontSize: 'var(--text-lg)',
                        fontWeight: 600,
                        marginBottom: 'var(--space-1)'
                      }}>
                        {item.feature}
                      </h4>
                      <p style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-tertiary)'
                      }}>
                        {item.quarter}
                      </p>
                    </div>
                    <span
                      style={{
                        padding: 'var(--space-1) var(--space-3)',
                        background: 'var(--surface-card)',
                        color: 'var(--text-secondary)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 500
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 'var(--space-8)',
                  padding: 'var(--space-6)',
                  background: 'var(--surface-elevated)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-default)',
                  textAlign: 'center'
                }}
              >
                <Zap size={32} style={{ color: 'var(--accent-brand)', margin: '0 auto var(--space-4) auto' }} />
                <h3 style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-2)'
                }}>
                  Have a feature request?
                </h3>
                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-4)'
                }}>
                  We&rsquo;re always looking for feedback on what to build next
                </p>
                <a
                  href="mailto:contact@originary.xyz?subject=Feature%20Request"
                  className="btn btn-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}
                >
                  Submit request
                  <ArrowRight size={16} />
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
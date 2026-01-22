'use client'

import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Download, ExternalLink, FileCheck } from 'lucide-react'

export default function TraceDemoPage() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              {/* Hero */}
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
                <div
                  style={{
                    display: 'inline-block',
                    background: 'var(--accent-brand-subtle)',
                    color: 'var(--accent-brand)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600,
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-full)',
                    marginBottom: 'var(--space-4)',
                    textTransform: 'uppercase'
                  }}
                >
                  Interactive Demo
                </div>
                <h1 style={{
                  fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                  marginBottom: 'var(--space-6)',
                  color: 'var(--text-primary)'
                }}>
                  Trace <span className="text-gradient">Demo</span>
                </h1>
                <p style={{
                  fontSize: 'var(--text-xl)',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}>
                  Explore a sample Trace dashboard with realistic synthetic data. See which AI crawlers accessed the site and what they took.
                </p>
              </div>

              {/* Dashboard Preview Placeholder */}
              <div style={{
                background: 'var(--surface-elevated)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'var(--space-8)',
                marginBottom: 'var(--space-12)',
                boxShadow: 'var(--shadow-xl)'
              }}>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>
                    Crawler Activity - Last 7 Days
                  </h2>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                    Synthetic data for demo.example.com
                  </p>
                </div>

                {/* Stats Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-8)'
                }}>
                  <div style={{
                    padding: 'var(--space-4)',
                    background: 'var(--surface-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-default)'
                  }}>
                    <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                      2,847
                    </div>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                      Total Requests
                    </div>
                  </div>

                  <div style={{
                    padding: 'var(--space-4)',
                    background: 'var(--surface-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-default)'
                  }}>
                    <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--accent-brand)', marginBottom: 'var(--space-2)' }}>
                      12
                    </div>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                      AI Crawlers Detected
                    </div>
                  </div>

                  <div style={{
                    padding: 'var(--space-4)',
                    background: 'var(--surface-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-default)'
                  }}>
                    <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--success)', marginBottom: 'var(--space-2)' }}>
                      326
                    </div>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                      Pages Accessed
                    </div>
                  </div>

                  <div style={{
                    padding: 'var(--space-4)',
                    background: 'var(--surface-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-default)'
                  }}>
                    <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                      98.4%
                    </div>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                      Policy Compliance
                    </div>
                  </div>
                </div>

                {/* Crawler Breakdown Table */}
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                    Top Crawlers
                  </h3>
                  <div style={{
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden'
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ background: 'var(--surface-subtle)', borderBottom: '1px solid var(--border-default)' }}>
                          <th style={{ padding: 'var(--space-3)', textAlign: 'left', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-secondary)' }}>
                            Bot Family
                          </th>
                          <th style={{ padding: 'var(--space-3)', textAlign: 'right', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-secondary)' }}>
                            Requests
                          </th>
                          <th style={{ padding: 'var(--space-3)', textAlign: 'right', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-secondary)' }}>
                            Pages
                          </th>
                          <th style={{ padding: 'var(--space-3)', textAlign: 'center', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-secondary)' }}>
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: 'GPTBot', requests: 1024, pages: 142, compliant: true },
                          { name: 'ClaudeBot', requests: 687, pages: 89, compliant: true },
                          { name: 'PerplexityBot', requests: 423, pages: 58, compliant: true },
                          { name: 'Googlebot', requests: 312, pages: 24, compliant: true },
                          { name: 'Unknown (fingerprinted)', requests: 186, pages: 13, compliant: false },
                          { name: 'Bingbot', requests: 127, pages: 8, compliant: true }
                        ].map((bot, index) => (
                          <tr key={bot.name} style={{ borderBottom: index < 5 ? '1px solid var(--border-subtle)' : 'none' }}>
                            <td style={{ padding: 'var(--space-3)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>
                              {bot.name}
                            </td>
                            <td style={{ padding: 'var(--space-3)', textAlign: 'right', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                              {bot.requests.toLocaleString()}
                            </td>
                            <td style={{ padding: 'var(--space-3)', textAlign: 'right', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                              {bot.pages}
                            </td>
                            <td style={{ padding: 'var(--space-3)', textAlign: 'center' }}>
                              <span style={{
                                display: 'inline-block',
                                padding: '2px 8px',
                                borderRadius: 'var(--radius-full)',
                                fontSize: 'var(--text-xs)',
                                fontWeight: 500,
                                background: bot.compliant ? 'var(--accent-secondary-subtle)' : 'rgba(255, 107, 107, 0.1)',
                                color: bot.compliant ? 'var(--success)' : 'var(--error)'
                              }}>
                                {bot.compliant ? 'Compliant' : 'Violation'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Badge Embed Example */}
              <div style={{
                background: 'var(--surface-subtle)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'var(--space-8)',
                marginBottom: 'var(--space-12)'
              }}>
                <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
                  Public Badge Embed
                </h2>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', marginBottom: 'var(--space-6)', lineHeight: 1.6 }}>
                  Show visitors that your site is monitored with Trace. Add this snippet to your footer or about page:
                </p>
                <div style={{
                  background: 'var(--text-primary)',
                  color: 'var(--surface-card)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-lg)',
                  fontFamily: 'monospace',
                  fontSize: 'var(--text-sm)',
                  overflowX: 'auto',
                  marginBottom: 'var(--space-4)'
                }}>
                  <code>{`<img src="https://api.trace.example/v1/public/badge/yourdomain.svg" alt="Monitored by Trace">`}</code>
                </div>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                  Badge shows real-time crawler activity and updates hourly
                </p>
              </div>

              {/* Download Sample Bundle */}
              <div style={{
                background: 'var(--surface-elevated)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'var(--space-8)',
                marginBottom: 'var(--space-12)',
                textAlign: 'center'
              }}>
                <FileCheck size={48} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }} />
                <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-3)' }}>
                  Compliance Bundle Example
                </h2>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', marginBottom: 'var(--space-6)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto var(--space-6)' }}>
                  Download a sample compliance bundle with PEAC receipts, verification artifacts, and policy reports packaged for counsel.
                </p>
                <button
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}
                  onClick={() => alert('Sample bundle download would be available in production Trace Cloud')}
                >
                  <Download size={18} />
                  Download Sample Bundle (ZIP)
                </button>
              </div>

              {/* Link to Receipt Demo */}
              <div style={{
                background: 'var(--gradient-brand)',
                color: 'var(--white)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'var(--space-8)',
                textAlign: 'center',
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
                  <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--white)' }}>
                    Want to verify a PEAC receipt?
                  </h2>
                  <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-6)', color: 'var(--white)', maxWidth: '600px', margin: '0 auto var(--space-6)', lineHeight: 1.6 }}>
                    Try our interactive receipt verification demo to see how PEAC Protocol receipts work under the hood.
                  </p>
                  <Link
                    href="/verify"
                    className="btn btn-lg"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                      background: 'var(--surface-elevated)',
                      color: 'var(--accent-brand)',
                      border: 'none'
                    }}
                  >
                    Try Receipt Verification Demo
                    <ExternalLink size={18} />
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div style={{ textAlign: 'center', marginTop: 'var(--space-16)' }}>
                <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
                  Ready to track your AI crawlers?
                </h2>
                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)', maxWidth: '600px', margin: '0 auto var(--space-8)', lineHeight: 1.6 }}>
                  Apply for Originary Cloud or self-host the open source version.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/cloud" className="btn btn-primary">
                    Apply for Cloud access
                  </Link>
                  <a
                    href="https://github.com/peacprotocol/peac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    View on GitHub
                  </a>
                  <Link href="/pricing" className="btn btn-ghost">
                    See pricing
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

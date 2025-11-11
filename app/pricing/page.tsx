'use client'

import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Github } from 'lucide-react'

export default function TracePricing() {
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
                <span className="text-gradient">Trace pricing</span>
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-12)',
                maxWidth: '700px',
                margin: '0 auto var(--space-12) auto'
              }}>
                Start free with self-hosted OSS. Upgrade to Cloud for retention, alerts, signed bundles, benchmarking, SSO, and SLAs.
              </p>
            </div>

            {/* Trace Pricing Table */}
            <div className="grid grid-4" style={{ gap: 'var(--space-6)', marginBottom: 'var(--space-20)' }}>
              {/* OSS Plan */}
              <div className="card" style={{ position: 'relative', background: 'var(--gray-50)' }}>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      background: 'var(--gray-200)',
                      color: 'var(--gray-700)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      marginBottom: 'var(--space-3)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Free forever
                  </div>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>OSS</h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>Self-hosted</p>
                </div>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: 'var(--space-2)' }}>
                    $0
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Self-managed infrastructure</p>
                </div>
                <div style={{ marginBottom: 'var(--space-8)' }}>
                  {[
                    'Single property',
                    '30-day default retention',
                    'PEAC receipts (self-managed keys)',
                    'CSV/JSON export',
                    'Public badge',
                    'Basic dashboard',
                    'Prometheus metrics'
                  ].map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                      <CheckCircle size={18} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: 'var(--text-sm)', lineHeight: 1.5 }}>{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://github.com/originaryx/trace?utm_source=originary&utm_medium=site&utm_campaign=trace_oss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)' }}
                >
                  <Github size={18} />
                  Get on GitHub
                </a>
              </div>

              {/* Starter Plan */}
              <div className="card" style={{ position: 'relative' }}>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>Starter</h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>Managed Trace Cloud</p>
                </div>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: 'var(--space-2)' }}>
                    $29<span style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)', fontWeight: 500 }}>/mo</span>
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>14-day free trial</p>
                </div>
                <div style={{ marginBottom: 'var(--space-8)' }}>
                  {[
                    '90-day retention',
                    '1 property',
                    'Email alerts',
                    'Hosted dashboard',
                    'Public badge hosting',
                    'CSV/JSON export',
                    'On-demand verify API'
                  ].map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                      <CheckCircle size={18} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: 'var(--text-sm)', lineHeight: 1.5 }}>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/cloud?plan=starter"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Start 14-day trial
                </Link>
              </div>

              {/* Pro Plan */}
              <div className="card" style={{ position: 'relative', border: '2px solid var(--brand-primary)', boxShadow: 'var(--shadow-xl)' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--gradient-brand)',
                    color: 'var(--white)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600,
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Popular
                </div>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>Pro</h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>For production deployments</p>
                </div>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: 'var(--space-2)' }}>
                    $99<span style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)', fontWeight: 500 }}>/mo</span>
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>14-day free trial</p>
                </div>
                <div style={{ marginBottom: 'var(--space-8)' }}>
                  {[
                    'Everything in Starter',
                    '1-year retention',
                    'Multi-property rollups',
                    'Slack/webhook alerts',
                    'Scheduled compliance bundles',
                    'Cohort benchmarking',
                    'SSO (basic)',
                    '99.9% SLO'
                  ].map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                      <CheckCircle size={18} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: 'var(--text-sm)', lineHeight: 1.5 }}>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/cloud?plan=pro"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Start 14-day trial
                </Link>
              </div>

              {/* Enterprise Plan */}
              <div className="card" style={{ position: 'relative' }}>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>Enterprise</h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>Custom deployment</p>
                </div>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: 'var(--space-2)' }}>
                    Custom
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Contact for pricing</p>
                </div>
                <div style={{ marginBottom: 'var(--space-8)' }}>
                  {[
                    'Everything in Pro',
                    'Domain attestation + KMS',
                    'Legal-ready bundle formatting',
                    'S3/GCS delivery',
                    'SCIM provisioning',
                    'SSO/SAML',
                    'Dedicated support',
                    '99.99% SLA'
                  ].map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                      <CheckCircle size={18} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: 'var(--text-sm)', lineHeight: 1.5 }}>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/company/contact?topic=enterprise-trace"
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                >
                  Contact sales
                </Link>
              </div>
            </div>

            {/* Platform Products Section */}
            <section style={{
              marginTop: 'var(--space-24)',
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
                    Can I self-host Trace?
                  </summary>
                  <p style={{ marginTop: 'var(--space-3)', color: 'var(--gray-700)', lineHeight: 1.7 }}>
                    Yes. Trace OSS is free and open source. Cloud and Enterprise add retention, automation, attestation, and managed infrastructure.
                  </p>
                </details>
                <details style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--gray-200)' }}>
                  <summary style={{ fontSize: 'var(--text-lg)', fontWeight: 600, cursor: 'pointer', color: 'var(--gray-900)' }}>
                    What deployment methods does Trace support?
                  </summary>
                  <p style={{ marginTop: 'var(--space-3)', color: 'var(--gray-700)', lineHeight: 1.7 }}>
                    Cloudflare Worker proxy, Nginx access log tailer, Cloudflare Logpush, and Fingerprint webhook. WordPress plugin coming soon.
                  </p>
                </details>
                <details style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--gray-200)' }}>
                  <summary style={{ fontSize: 'var(--text-lg)', fontWeight: 600, cursor: 'pointer', color: 'var(--gray-900)' }}>
                    Which AI crawlers does Trace identify?
                  </summary>
                  <p style={{ marginTop: 'var(--space-3)', color: 'var(--gray-700)', lineHeight: 1.7 }}>
                    GPTBot, ClaudeBot, PerplexityBot, search bots (Googlebot, Bingbot), and unknown families through fingerprinting.
                  </p>
                </details>
                <details style={{ padding: 'var(--space-4)' }}>
                  <summary style={{ fontSize: 'var(--text-lg)', fontWeight: 600, cursor: 'pointer', color: 'var(--gray-900)' }}>
                    How is Trace related to PEAC Protocol?
                  </summary>
                  <p style={{ marginTop: 'var(--space-3)', color: 'var(--gray-700)', lineHeight: 1.7 }}>
                    Trace is a PEAC-compatible product and reference implementation. It uses policy discovery (peac.txt), verifiable receipts (JWS), and HTTP 402 semantics.
                  </p>
                </details>
              </div>
            </section>

            {/* CTA */}
            <div style={{
              marginTop: 'var(--space-16)',
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
                  Ready to track AI crawlers?
                </h2>
                <p style={{
                  fontSize: 'var(--text-xl)',
                  marginBottom: 'var(--space-8)',
                  color: 'var(--white)',
                  maxWidth: '600px',
                  margin: '0 auto var(--space-8) auto',
                  lineHeight: 1.6
                }}>
                  Start with OSS or try Cloud free for 14 days. No credit card required.
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
                    <span>Start free trial</span>
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href="https://github.com/originaryx/trace"
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

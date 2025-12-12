'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight, CheckCircle, Zap, Shield, Database } from 'lucide-react'
import ServiceOffers from './ServiceOffers'

export default function WorldClassHomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Meta-orchestrator Section */}
      <section className="section" style={{ background: 'var(--gray-50)', paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{
              marginBottom: 'var(--space-6)',
              fontSize: 'clamp(var(--text-2xl), 4vw, var(--text-3xl))',
              fontWeight: 700,
              color: 'var(--gray-900)'
            }}>
              Why Originary and PEAC, not just rails or bot tools
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--gray-600)',
              lineHeight: 1.7,
              marginBottom: 'var(--space-6)'
            }}>
              PEAC is not a payment rail or a marketplace. It is the coordination layer that sits above them. Originary is the control plane that makes PEAC practical on your sites, APIs, and agent networks.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{
                marginBottom: 'var(--space-4)',
                fontSize: 'var(--text-base)',
                color: 'var(--gray-700)',
                lineHeight: 1.7
              }}>
                <strong style={{ color: 'var(--gray-900)' }}>robots.txt</strong> tells bots where they can crawl. PEAC policy and receipts express how agents should behave, what they owe, and what they actually did.
              </li>
              <li style={{
                marginBottom: 'var(--space-4)',
                fontSize: 'var(--text-base)',
                color: 'var(--gray-700)',
                lineHeight: 1.7
              }}>
                <strong style={{ color: 'var(--gray-900)' }}>Payment providers and rails</strong> like x402 or Stripe move money. PEAC receipts bind those payments to policy, consent, attribution, and subject identifiers.
              </li>
              <li style={{
                fontSize: 'var(--text-base)',
                color: 'var(--gray-700)',
                lineHeight: 1.7
              }}>
                <strong style={{ color: 'var(--gray-900)' }}>Bot and CDN tools</strong> focus on blocking and rate limiting. Originary adds receipts and policy context so you can prove compliance and value across all traffic, not just blocklists.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section className="section">
        <div className="container">
          <div
            className="section-header"
            style={{
              textAlign: 'center',
              marginBottom: 'var(--space-8)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            <h2 style={{ marginBottom: 'var(--space-6)' }}>
              <span className="text-gradient">Control every policy, payment, and proof</span> from one fabric
            </h2>
            <p
              style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--gray-600)',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: 1.7
              }}
            >
              Enterprise infrastructure for the agentic economy. Legal, product, and engineering teams get a unified control plane for access and revenue without slowing down innovation.
            </p>
          </div>

          {/* One loop for every interaction */}
          <div style={{
            maxWidth: '800px',
            margin: '0 auto var(--space-16) auto',
            padding: 'var(--space-6)',
            background: 'var(--gray-50)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--gray-200)'
          }}>
            <h3 style={{
              marginBottom: 'var(--space-4)',
              fontSize: 'var(--text-xl)',
              fontWeight: 600,
              color: 'var(--gray-900)'
            }}>
              One loop for every interaction
            </h3>
            <p style={{
              fontSize: 'var(--text-base)',
              color: 'var(--gray-600)',
              lineHeight: 1.7,
              marginBottom: 'var(--space-4)'
            }}>
              Every AI or agentic interaction that passes through Originary follows the same sequence.
            </p>
            <ol style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              counterReset: 'loop-counter'
            }}>
              {[
                { step: 'Discover', desc: 'The agent finds /.well-known/peac.txt and AIPREF preferences for the target.' },
                { step: 'Evaluate', desc: 'PEAC merges policy, preferences, and context to decide allow, deny, or require payment.' },
                { step: 'Settle', desc: 'If payment is required, the interaction is gated with HTTP 402 and settled over x402, i402, Stripe, or other supported rails.' },
                { step: 'Prove', desc: 'Originary issues a cryptographic PEAC receipt that binds policy, parties, amounts, and rails.' },
                { step: 'Verify', desc: 'Downstream services verify the receipt and enforce consent, attribution, and retention based on its fields.' }
              ].map((item, index) => (
                <li key={index} style={{
                  marginBottom: 'var(--space-3)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--gray-700)',
                  lineHeight: 1.6,
                  display: 'flex',
                  gap: 'var(--space-2)'
                }}>
                  <span style={{
                    color: 'var(--brand-primary)',
                    fontWeight: 600,
                    minWidth: '20px'
                  }}>{index + 1}.</span>
                  <span><strong style={{ color: 'var(--gray-900)' }}>{item.step}.</strong> {item.desc}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
            <ValueCard
              icon={<Database className="w-8 h-8" style={{ color: 'var(--brand-primary)' }} />}
              title="Unified Policy Graph"
              description="Publish once, negotiate everywhere. Originary translates PEAC clauses into enforceable controls across agents, APIs, and downstream systems."
              features={[
                'Auto-generate variants for agents, crawlers, and humans',
                'Version control with full diff history',
                'Multi-tenant isolation and overrides'
              ]}
              delay={0.1}
            />

            <ValueCard
              icon={<Zap className="w-8 h-8" style={{ color: 'var(--brand-secondary)' }} />}
              title="Composable Commerce Rails"
              description="Bring your pricing logic and payment providers. Our gateway brokers credits, fiat, or crypto without refactoring existing endpoints."
              features={[
                'Policy-aware usage metering and throttles',
                'x402 today, with adapters for i402, Stripe, Razorpay, USDC, and on chain settlement',
                'Dynamic rate cards per policy segment'
              ]}
              delay={0.2}
              i402Note="i402 is our open source HTTP 402 adapter for Indian payment rails like UPI and card networks, x402 compatible but able to operate independently."
            />

            <ValueCard
              icon={<Shield className="w-8 h-8" style={{ color: 'var(--brand-accent)' }} />}
              title="Provable Trust & Analytics"
              description="Every interaction emits a tamper-evident receipt. Stream them into your observability stack or hand to regulators in one click."
              features={[
                'Cryptographically signed receipts (JWS; C2PA-compatible)',
                'Interactive graph explorer for provenance queries',
                'SIEM & data warehouse connectors out of the box'
              ]}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Who uses Originary Section */}
      <section className="section" style={{ background: 'var(--gray-50)', paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
        <div className="container">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              marginBottom: 'var(--space-4)',
              fontSize: 'clamp(var(--text-2xl), 4vw, var(--text-3xl))',
              fontWeight: 700,
              color: 'var(--gray-900)',
              textAlign: 'center'
            }}>
              Who uses Originary
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--gray-600)',
              lineHeight: 1.7,
              marginBottom: 'var(--space-12)',
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto var(--space-12) auto'
            }}>
              We serve teams that need receipts, control, and payments for AI and agent traffic across web, APIs, and rails.
            </p>
            <div className="grid grid-4" style={{ gap: 'var(--space-6)' }}>
              <div className="card" style={{ padding: 'var(--space-6)' }}>
                <h3 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-3)',
                  color: 'var(--gray-900)'
                }}>
                  Legal, risk, and compliance teams
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--gray-600)',
                  lineHeight: 1.6
                }}>
                  Get verifiable evidence of consent, attribution, and access terms for AI and agent activity without building your own audit infrastructure.
                </p>
              </div>
              <div className="card" style={{ padding: 'var(--space-6)' }}>
                <h3 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-3)',
                  color: 'var(--gray-900)'
                }}>
                  Publishers and content platforms
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--gray-600)',
                  lineHeight: 1.6
                }}>
                  Meter and monetize AI and agent access to pages, archives, and media with per request, per seat, or subscription pricing.
                </p>
              </div>
              <div className="card" style={{ padding: 'var(--space-6)' }}>
                <h3 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-3)',
                  color: 'var(--gray-900)'
                }}>
                  APIs and SaaS products
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--gray-600)',
                  lineHeight: 1.6
                }}>
                  Turn agent driven API usage into billable, compliant, and auditable traffic across x402, i402, Stripe, Razorpay, and other rails.
                </p>
              </div>
              <div className="card" style={{ padding: 'var(--space-6)' }}>
                <h3 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-3)',
                  color: 'var(--gray-900)'
                }}>
                  A2A networks and rails providers
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--gray-600)',
                  lineHeight: 1.6
                }}>
                  Attach PEAC receipts to every agent message and normalize different rails into a single proof schema.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceOffers />

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div
            style={{
              textAlign: 'center',
              background: 'var(--gradient-brand)',
              borderRadius: 'var(--radius-3xl)',
              padding: 'var(--space-16) var(--space-8)',
              color: 'var(--white)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                pointerEvents: 'none'
              }}
            />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2
                style={{
                  fontSize: 'var(--text-4xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--white)'
                }}
              >
                Ready to control your AI traffic with receipts?
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  marginBottom: 'var(--space-8)',
                  color: 'var(--white)',
                  maxWidth: '700px',
                  margin: '0 auto var(--space-8) auto',
                  lineHeight: 1.6
                }}
              >
                Join the companies building compliant, profitable AI interactions. Start with Declare to publish policy and peac.txt, then layer on Trace, Gateway 402, and Verify. If you have enterprise compliance or revenue targets, talk to our team.
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 'var(--space-4)',
                  flexWrap: 'wrap'
                }}
              >
                <Link
                  href="/declare"
                  className="btn btn-lg"
                  style={{
                    background: 'var(--white)',
                    color: 'var(--brand-primary)',
                    border: 'none'
                  }}
                >
                  <span>Start with Declare</span>
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
                  <span>Read documentation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ValueCard({
  icon,
  title,
  description,
  features,
  delay = 0,
  i402Note
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay?: number;
  i402Note?: string;
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className="card"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
        cursor: 'pointer'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          marginBottom: 'var(--space-6)',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform var(--duration-300) var(--ease-out)'
        }}
      >
        {icon}
      </div>

      <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>
        {title}
      </h3>

      <p style={{ marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
        {description}
      </p>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {features.map((feature, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 'var(--space-3)',
              marginBottom: 'var(--space-3)',
              fontSize: 'var(--text-sm)',
              color: 'var(--gray-600)'
            }}
          >
            <CheckCircle size={16} style={{
              color: 'var(--success)',
              marginTop: '2px',
              flexShrink: 0
            }} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {i402Note && (
        <p style={{
          marginTop: 'var(--space-4)',
          fontSize: 'var(--text-xs)',
          color: 'var(--gray-500)',
          lineHeight: 1.6,
          fontStyle: 'italic'
        }}>
          {i402Note}
        </p>
      )}
    </div>
  )
}


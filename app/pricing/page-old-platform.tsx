'use client'

import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { useEffect } from 'react'
import { useCurrency } from '@/hooks/useCurrency'
import StripeButton from '@/components/StripeButton'

export default function Pricing() {
  const pricing = useCurrency()

  useEffect(() => {
    // Guard against SSR
    if (typeof document === 'undefined') return

    // Add Service JSON-LD (will update dynamically based on currency)
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Originary - PEAC Policy Setup",
      "serviceType": "peac.txt generation, validation, and edge header snippets",
      "provider": { "@type": "Organization", "name": "Originary" },
      "offers": {
        "@type": "Offer",
        "price": pricing.start.amount.toString(),
        "priceCurrency": pricing.currency,
        "name": "Start Plan",
        "availability": "https://schema.org/InStock"
      }
    };

    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.text = JSON.stringify(jsonLd);
    scriptTag.id = 'pricing-jsonld';
    document.head.appendChild(scriptTag);

    // Add OfferCatalog JSON-LD
    const offerCatalog = {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      "name": "Originary Plans",
      "itemListElement": [
        {"@type": "Offer", "name": "Start", "price": pricing.start.amount.toString(), "priceCurrency": pricing.currency, "description": "30-day developer intro", "availability": "https://schema.org/InStock"},
        {"@type": "Offer", "name": "Pro", "price": pricing.pro.amount.toString(), "priceCurrency": pricing.currency, "priceSpecification": {"@type": "UnitPriceSpecification", "price": pricing.pro.amount.toString(), "priceCurrency": pricing.currency, "unitText": "MONTH"}},
        {"@type": "Offer", "name": "Enterprise", "price": pricing.enterprise.amount.toString(), "priceCurrency": pricing.currency, "priceSpecification": {"@type": "UnitPriceSpecification", "price": pricing.enterprise.amount.toString(), "priceCurrency": pricing.currency, "unitText": "MONTH"}}
      ],
      "provider": {"@type": "Organization", "name": "Originary"}
    };

    const catalogScript = document.createElement('script');
    catalogScript.type = 'application/ld+json';
    catalogScript.text = JSON.stringify(offerCatalog);
    catalogScript.id = 'catalog-jsonld';
    document.head.appendChild(catalogScript);

    return () => {
      // Cleanup on unmount
      document.getElementById('pricing-jsonld')?.remove()
      document.getElementById('catalog-jsonld')?.remove()
    }
  }, [pricing]);

  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--surface-elevated)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)'
              }}>
                <span className="text-gradient">Transparent pricing</span> for every scale
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-12)',
                maxWidth: '800px',
                margin: '0 auto var(--space-12) auto'
              }}>
                From startups building their first agent to large enterprises running autonomous transactions. Scale with confidence.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)', marginBottom: 'var(--space-20)' }}>
              <div className="card" style={{ position: 'relative' }}>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>Start</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Developer intro</p>
                </div>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                    {pricing.isLoading ? '...' : pricing.start.formatted}<span style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}> one-time, 30 days</span>
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Sandbox access with real verification tools</p>
                </div>
                <div style={{ marginBottom: 'var(--space-8)' }}>
                  {['1 domain (sandbox) + live Verify API', '100 receipt verifications + sample JWS', '/.well-known/peac.txt validator', 'Gateway 402 demo (x402/Stripe)', 'Email support (48h)'].map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                      <CheckCircle size={20} style={{ color: 'var(--accent-brand)', flexShrink: 0 }} />
                      <span style={{ fontSize: 'var(--text-sm)' }}>{feature}</span>
                    </div>
                  ))}
                </div>
                <div style={{ width: '100%' }}>
                  <Link href="/checkout/start" className="btn btn-primary" style={{ width: '100%', marginBottom: 'var(--space-2)' }}>
                    Start for {pricing.isLoading ? '...' : pricing.start.formatted}
                  </Link>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', textAlign: 'center' }}>
                    Immediate delivery. {pricing.currency} billing. Renews to Free.
                  </p>
                </div>
              </div>

              <div className="card" style={{ position: 'relative' }}>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>Pro</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>For production deployments</p>
                </div>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                    {pricing.isLoading ? '...' : pricing.pro.formatted}<span style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>/month</span>
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Includes <code style={{ backgroundColor: 'var(--surface-card)', padding: '2px 4px', borderRadius: 'var(--radius-sm)' }}>peac.txt</code> generator, validator, and edge header snippets</p>
                </div>
                <div style={{ marginBottom: 'var(--space-8)' }}>
                  {['Protocol-compatible tools', 'Policy generator & validator', 'Headers & edge snippets', 'Settlement gateway (402) access', 'Dashboard', 'Priority support', 'Developer docs', 'Email support'].map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                      <CheckCircle size={20} style={{ color: 'var(--accent-brand)', flexShrink: 0 }} />
                      <span style={{ fontSize: 'var(--text-sm)' }}>{feature}</span>
                    </div>
                  ))}
                </div>
                <div style={{ width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-2)' }}>
                    <StripeButton plan="pro" amount={100} label="Get Started with Pro" className="btn btn-primary" />
                  </div>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', textAlign: 'center' }}>
                    By purchasing you agree to our <Link href="/legal/terms" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>Terms</Link> and <Link href="/legal/privacy" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>Privacy Policy</Link>
                  </p>
                </div>
              </div>

              <div className="card">
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>Enterprise</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>For growing teams and high-volume workloads</p>
                </div>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                    {pricing.isLoading ? '...' : pricing.enterprise.formatted} pricing
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Up to 1M agent transactions/month</p>
                </div>
                <div style={{ marginBottom: 'var(--space-8)' }}>
                  {['Everything in Pro', 'Adapter support', 'Team seats', 'SLA available', 'Analytics', 'Dedicated support engineer', 'Custom integrations', 'On-premises deployment'].map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                      <CheckCircle size={20} style={{ color: 'var(--accent-brand)', flexShrink: 0 }} />
                      <span style={{ fontSize: 'var(--text-sm)' }}>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn btn-secondary" style={{ width: '100%', marginBottom: 'var(--space-2)' }}>
                  Contact sales
                </Link>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', textAlign: 'center' }}>
                  By purchasing you agree to our <Link href="/legal/terms" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>Terms</Link> and <Link href="/legal/privacy" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>Privacy Policy</Link>
                </p>
              </div>
            </div>

            <div style={{
              textAlign: 'center',
              fontSize: 'var(--text-xs)',
              color: 'var(--text-tertiary)',
              marginTop: 'var(--space-4)',
              marginBottom: 'var(--space-8)'
            }}>
              Billing processed by Stripe on behalf of Poem, Inc.
            </div>

            {/* SLO Section */}
            <section style={{
              marginTop: 'var(--space-16)',
              marginBottom: 'var(--space-8)',
              padding: 'var(--space-8)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-2xl)',
              background: 'linear-gradient(135deg, var(--surface-elevated) 0%, var(--surface-subtle) 100%)'
            }}>
              <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-6)', textAlign: 'center' }}>
                Performance & Reliability
              </h3>
              <div className="grid grid-3" style={{ gap: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--accent-brand)', marginBottom: 'var(--space-2)' }}>
                    &lt;10ms
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                    Sign latency (p95)
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--accent-brand)', marginBottom: 'var(--space-2)' }}>
                    &lt;5ms
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                    Verify latency (p95)
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--accent-brand)', marginBottom: 'var(--space-2)' }}>
                    ≥1k rps
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                    Baseline throughput
                  </div>
                </div>
              </div>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', textAlign: 'center', marginTop: 'var(--space-4)' }}>
                Latency measured at 95th percentile over trailing 30 days, Mumbai edge (IST).
                Throughput is baseline; higher limits available on request.
                Availability targets negotiated per deployment.
              </p>
            </section>

            {/* OSS Box */}
            <section style={{
              marginTop: 'var(--space-8)',
              padding: 'var(--space-6)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-2xl)',
              background: 'var(--surface-subtle)'
            }}>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                Prefer open source?
              </h3>
              <p style={{ marginBottom: 'var(--space-4)', color: 'var(--text-secondary)' }}>
                The <a
                  href="https://www.peacprotocol.org"
                  target="_blank"
                  rel="noopener"
                  style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}
                >
                  PEAC open protocol
                </a> is free to use and modify. Explore the spec, examples, and reference implementations.
              </p>
              <a
                href="https://www.peacprotocol.org"
                target="_blank"
                rel="noopener"
                className="btn btn-secondary"
              >
                Explore the open protocol ↗
              </a>
            </section>

            {/* Who this is for */}
            <section style={{
              marginTop: 'var(--space-12)',
              padding: 'var(--space-8)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-2xl)',
              background: 'var(--surface-elevated)'
            }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-6)', color: 'var(--text-primary)' }}>
                Who each plan is for
              </h2>
              <div style={{ display: 'grid', gap: 'var(--space-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--accent-brand)' }}>
                    Start
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    Solo builders and fast POCs that need real receipts, not mock data. Perfect for validating your agent architecture before scaling.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--accent-brand)' }}>
                    Pro
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    Early teams going to production with HTTP 402, policy discovery, and audit logs. Includes SLA and email support for growing products.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--accent-brand)' }}>
                    Enterprise
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    Regulated or scaled teams that need SSO/SAML, VPC/on-prem deployment, and signed DPA/SLAs. Custom adapters for your infrastructure.
                  </p>
                </div>
              </div>
            </section>

            {/* What is a receipt */}
            <section style={{
              marginTop: 'var(--space-12)',
              padding: 'var(--space-8)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-2xl)',
              background: 'var(--surface-elevated)'
            }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                What is a &ldquo;receipt&rdquo;?
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: 'var(--text-base)' }}>
                A receipt is a verifiable record of usage or access terms for an interaction (e.g., an API call,
                data fetch, or model inference) - signed and auditable. Every verified receipt includes policy,
                attribution, settlement details, timestamp, and integrity metadata. Receipts are the atomic unit
                of trust in the agentic web, providing cryptographic proof of compliance and settlement.
              </p>
            </section>

            {/* FAQ */}
            <section style={{
              marginTop: 'var(--space-12)',
              padding: 'var(--space-8)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-2xl)',
              background: 'var(--surface-elevated)'
            }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-6)', color: 'var(--text-primary)' }}>
                Pricing FAQ
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <details style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--border-default)' }}>
                  <summary style={{ fontSize: 'var(--text-lg)', fontWeight: 600, cursor: 'pointer', color: 'var(--text-primary)' }}>
                    Can I self-host PEAC?
                  </summary>
                  <p style={{ marginTop: 'var(--space-3)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    Yes. Originary Cloud is optional. Our open tooling and SDKs work self-hosted; Cloud and Enterprise
                    add scale, SLAs, and adapters for production environments.
                  </p>
                </details>
                <details style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--border-default)' }}>
                  <summary style={{ fontSize: 'var(--text-lg)', fontWeight: 600, cursor: 'pointer', color: 'var(--text-primary)' }}>
                    Which payment rails are supported?
                  </summary>
                  <p style={{ marginTop: 'var(--space-3)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    Stripe today; adapters for x402, Tempo, and Arc are available for Cloud and Enterprise plans.
                    We&apos;re continuously expanding payment rail support based on customer demand.
                  </p>
                </details>
                <details style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--border-default)' }}>
                  <summary style={{ fontSize: 'var(--text-lg)', fontWeight: 600, cursor: 'pointer', color: 'var(--text-primary)' }}>
                    Is there a free tier?
                  </summary>
                  <p style={{ marginTop: 'var(--space-3)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    We use a low-cost trial ($1 for 30 days) to unlock the full product with predictable abuse control.
                    This ensures quality service for all users while keeping barriers to entry minimal.
                  </p>
                </details>
                <details style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--border-default)' }}>
                  <summary style={{ fontSize: 'var(--text-lg)', fontWeight: 600, cursor: 'pointer', color: 'var(--text-primary)' }}>
                    Do you support EU AI Act/GDPR workflows?
                  </summary>
                  <p style={{ marginTop: 'var(--space-3)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    Yes - configurable retention windows, attribution flags, audit exports, and DPA/SCCs are available
                    for Enterprise plans. We work closely with legal teams to ensure compliance.
                  </p>
                </details>
                <details style={{ padding: 'var(--space-4)' }}>
                  <summary style={{ fontSize: 'var(--text-lg)', fontWeight: 600, cursor: 'pointer', color: 'var(--text-primary)' }}>
                    What counts as a verified receipt?
                  </summary>
                  <p style={{ marginTop: 'var(--space-3)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    A successful verification of usage/payment terms for a request or batch. This includes policy validation,
                    signature verification, and audit log creation. Receipts expire after verification for security.
                  </p>
                </details>
              </div>
            </section>

            <div style={{
              textAlign: 'center',
              background: 'var(--accent-brand)',
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
                  Ready to scale your agentic infrastructure?
                </h2>
                <p style={{
                  fontSize: 'var(--text-xl)',
                  marginBottom: 'var(--space-8)',
                  color: 'var(--white)',
                  maxWidth: '600px',
                  margin: '0 auto var(--space-8) auto',
                  lineHeight: 1.6
                }}>
                  Join teams building compliant, profitable AI interactions. Start with a free trial or speak with our team.
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 'var(--space-4)',
                  flexWrap: 'wrap'
                }}>
                  <Link
                    href="/contact"
                    className="btn btn-lg"
                    style={{
                      background: 'var(--surface-elevated)',
                      color: 'var(--accent-brand)',
                      border: 'none'
                    }}
                  >
                    <span>Talk to sales</span>
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
                    <span>Start building</span>
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
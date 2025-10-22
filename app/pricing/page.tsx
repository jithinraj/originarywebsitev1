'use client'

import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { useEffect } from 'react'
import { useCurrency } from '@/hooks/useCurrency'

export default function Pricing() {
  const pricing = useCurrency()

  useEffect(() => {
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
        <section className="section" style={{ background: 'var(--white)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                <span className="text-gradient">Transparent pricing</span> for every scale
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
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
                  <p style={{ color: 'var(--gray-600)' }}>Developer intro</p>
                </div>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: 'var(--space-2)' }}>
                    {pricing.isLoading ? '...' : pricing.start.formatted}<span style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)' }}> one-time, 30 days</span>
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Sandbox access with real verification tools</p>
                </div>
                <div style={{ marginBottom: 'var(--space-8)' }}>
                  {['1 domain (sandbox) + live Verify API', '100 receipt verifications + sample JWS', '/.well-known/peac.txt validator', 'Gateway 402 demo (x402/Stripe)', 'Email support (48h)'].map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                      <span style={{ fontSize: 'var(--text-sm)' }}>{feature}</span>
                    </div>
                  ))}
                </div>
                <div style={{ width: '100%' }}>
                  <Link href="/checkout/start" className="btn btn-primary" style={{ width: '100%', marginBottom: 'var(--space-2)' }}>
                    Start for {pricing.isLoading ? '...' : pricing.start.formatted}
                  </Link>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)', textAlign: 'center' }}>
                    Immediate delivery. {pricing.currency} billing. Renews to Free.
                  </p>
                </div>
              </div>

              <div className="card" style={{ position: 'relative' }}>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>Pro</h3>
                  <p style={{ color: 'var(--gray-600)' }}>For production deployments</p>
                </div>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: 'var(--space-2)' }}>
                    {pricing.isLoading ? '...' : pricing.pro.formatted}<span style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)' }}>/month</span>
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Includes <code style={{ backgroundColor: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)' }}>peac.txt</code> generator, validator, and edge header snippets</p>
                </div>
                <div style={{ marginBottom: 'var(--space-8)' }}>
                  {['Protocol-compatible tools', 'Policy generator & validator', 'Headers & edge snippets', 'Settlement gateway (402) access', 'Dashboard', 'Priority support', 'Developer docs', 'Email support'].map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                      <span style={{ fontSize: 'var(--text-sm)' }}>{feature}</span>
                    </div>
                  ))}
                </div>
                <div style={{ width: '100%' }}>
                  <Link href="/company/contact" className="btn btn-primary" style={{ width: '100%', marginBottom: 'var(--space-2)' }}>
                    Contact sales
                  </Link>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)', textAlign: 'center' }}>
                    By purchasing you agree to our <Link href="/legal/terms" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Terms</Link> and <Link href="/legal/privacy" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Privacy Policy</Link>
                  </p>
                </div>
              </div>

              <div className="card">
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>Enterprise</h3>
                  <p style={{ color: 'var(--gray-600)' }}>For growing teams and high-volume workloads</p>
                </div>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: 'var(--space-2)' }}>
                    {pricing.isLoading ? '...' : pricing.enterprise.formatted} pricing
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Up to 1M agent transactions/month</p>
                </div>
                <div style={{ marginBottom: 'var(--space-8)' }}>
                  {['Everything in Pro', 'Adapter support', 'Team seats', 'SLA available', 'Analytics', 'Dedicated support engineer', 'Custom integrations', 'On-premises deployment'].map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                      <span style={{ fontSize: 'var(--text-sm)' }}>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/company/contact" className="btn btn-secondary" style={{ width: '100%', marginBottom: 'var(--space-2)' }}>
                  Contact sales
                </Link>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)', textAlign: 'center' }}>
                  By purchasing you agree to our <Link href="/legal/terms" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Terms</Link> and <Link href="/legal/privacy" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Privacy Policy</Link>
                </p>
              </div>
            </div>

            {/* SLO Section */}
            <section style={{
              marginTop: 'var(--space-16)',
              marginBottom: 'var(--space-8)',
              padding: 'var(--space-8)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-2xl)',
              background: 'linear-gradient(135deg, var(--white) 0%, var(--gray-50) 100%)'
            }}>
              <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-6)', textAlign: 'center' }}>
                Performance & Reliability
              </h3>
              <div className="grid grid-3" style={{ gap: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: 'var(--space-2)' }}>
                    &lt;10ms
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
                    Sign latency (p95)
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: 'var(--space-2)' }}>
                    &lt;5ms
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
                    Verify latency (p95)
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: 'var(--space-2)' }}>
                    ≥1k rps
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
                    Baseline throughput
                  </div>
                </div>
              </div>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)', textAlign: 'center', marginTop: 'var(--space-4)' }}>
                Latency measured at 95th percentile over trailing 30 days, Mumbai edge (IST).
                Throughput is baseline; higher limits available on request.
                Pro: <strong>99.9% SLO</strong> (target). Enterprise: <strong>99.99% SLA</strong> (contractual, available in MSA).
              </p>
            </section>

            {/* OSS Box */}
            <section style={{
              marginTop: 'var(--space-8)',
              padding: 'var(--space-6)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-2xl)',
              background: 'var(--gray-50)'
            }}>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                Prefer open source?
              </h3>
              <p style={{ marginBottom: 'var(--space-4)', color: 'var(--gray-600)' }}>
                The <a
                  href="https://peacprotocol.org"
                  target="_blank"
                  rel="noopener"
                  style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}
                >
                  PEAC open protocol
                </a> is free to use and modify. Explore the spec, examples, and reference implementations.
              </p>
              <a
                href="https://peacprotocol.org"
                target="_blank"
                rel="noopener"
                className="btn btn-secondary"
              >
                Explore the open protocol ↗
              </a>
            </section>

            <div style={{
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
                    href="/company/contact"
                    className="btn btn-lg"
                    style={{
                      background: 'var(--white)',
                      color: 'var(--brand-primary)',
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
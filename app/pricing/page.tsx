'use client'

import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { useEffect } from 'react'

export default function Pricing() {
  useEffect(() => {
    // Load Razorpay script dynamically
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_RK5T4IykFzu0rh');
    script.async = true;

    const form = document.getElementById('razorpay-form');
    if (form) {
      form.appendChild(script);
    }

    // Add Service JSON-LD
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Originary - PEAC Policy Setup",
      "serviceType": "peac.txt generation, validation, and edge header snippets",
      "provider": { "@type": "Organization", "name": "Originary" },
      "offers": {
        "@type": "Offer",
        "price": "1",
        "priceCurrency": "USD",
        "name": "Developer activation",
        "availability": "https://schema.org/InStock"
      }
    };

    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.text = JSON.stringify(jsonLd);
    document.head.appendChild(scriptTag);
  }, []);

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
                From startups building their first agent to Fortune 500 companies running millions of autonomous transactions. Scale with confidence.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)', marginBottom: 'var(--space-20)' }}>
              <div className="card" style={{ position: 'relative' }}>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>Developer</h3>
                  <p style={{ color: 'var(--gray-600)' }}>Activate your developer account</p>
                </div>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: 'var(--space-2)' }}>
                    $1<span style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)' }}> one-time activation</span>
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Includes <code style={{ backgroundColor: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)' }}>peac.txt</code> generator, validator, and edge header snippets</p>
                </div>
                <div style={{ marginBottom: 'var(--space-8)' }}>
                  {['Protocol-compatible tools', 'Policy generator & validator', 'Headers & edge snippets', 'Developer docs', 'Email/community support'].map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div style={{ width: '100%' }}>
                  <form id="razorpay-form" style={{ marginBottom: 'var(--space-2)' }}>
                  </form>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)', textAlign: 'center' }}>
                    By purchasing you agree to our <Link href="/legal/terms" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Terms</Link> and <Link href="/legal/privacy" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Privacy Policy</Link>
                  </p>
                </div>
              </div>

              <div className="card" style={{ position: 'relative' }}>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>Professional</h3>
                  <p style={{ color: 'var(--gray-600)' }}>For growing teams and production deployments</p>
                </div>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: 'var(--space-2)' }}>
                    $2,500<span style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)' }}>/month</span>
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Up to 1M agent transactions/month</p>
                </div>
                <div style={{ marginBottom: 'var(--space-8)' }}>
                  {['Everything in Developer', 'Settlement gateway (402) access', 'Dashboard (preview)', 'Priority support', 'SLA available', 'Analytics (preview)'].map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/company/contact" className="btn btn-primary" style={{ width: '100%', marginBottom: 'var(--space-2)' }}>
                  Contact sales
                </Link>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)', textAlign: 'center' }}>
                  By purchasing you agree to our <Link href="/legal/terms" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Terms</Link> and <Link href="/legal/privacy" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Privacy Policy</Link>
                </p>
              </div>

              <div className="card">
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>Enterprise</h3>
                  <p style={{ color: 'var(--gray-600)' }}>High-volume and regulated workloads</p>
                </div>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: 'var(--space-2)' }}>
                    Custom
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>High-volume and regulated workloads</p>
                </div>
                <div style={{ marginBottom: 'var(--space-8)' }}>
                  {['Everything in Professional', 'Adapter support', 'Team seats', 'Dedicated support engineer', 'Custom integrations', 'On-premises deployment'].map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                      <span>{feature}</span>
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

            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)', textAlign: 'center', marginTop: 'var(--space-4)' }}>
              * Features marked &ldquo;preview&rdquo; are in limited release.
            </p>

            {/* OSS Box */}
            <section style={{
              marginTop: 'var(--space-12)',
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
                  opacity: 0.9,
                  maxWidth: '600px',
                  margin: '0 auto var(--space-8) auto'
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
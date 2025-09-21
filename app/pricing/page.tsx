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
                From startups building their first agent to Fortune 500 companies orchestrating millions of autonomous transactions. Scale with confidence.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)', marginBottom: 'var(--space-20)' }}>
              <div className="card" style={{ position: 'relative' }}>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>Developer</h3>
                  <p style={{ color: 'var(--gray-600)' }}>Perfect for getting started with agentic infrastructure</p>
                </div>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: 'var(--space-2)' }}>
                    $1<span style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)' }}>/trial</span>
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Up to 10K agent transactions for trial</p>
                </div>
                <div style={{ marginBottom: 'var(--space-8)' }}>
                  {['Protocol-compatible tools', 'Basic verification API', 'Community support', 'Developer documentation'].map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div style={{ width: '100%' }}>
                  <form id="razorpay-form">
                  </form>
                </div>
              </div>

              <div className="card card-glow" style={{ position: 'relative', border: '2px solid var(--brand-primary)' }}>
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--brand-primary)',
                  color: 'var(--white)',
                  padding: 'var(--space-2) var(--space-4)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600
                }}>MOST POPULAR</div>
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
                  {['Everything in Developer', 'Gateway (402) access', 'Studio dashboard (5 seats)', 'Priority support', 'SLA guarantees', 'Advanced analytics'].map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/company/contact" className="btn btn-primary" style={{ width: '100%' }}>
                  Start trial
                </Link>
              </div>

              <div className="card">
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>Enterprise</h3>
                  <p style={{ color: 'var(--gray-600)' }}>For Fortune 500 and high-scale deployments</p>
                </div>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: 'var(--space-2)' }}>
                    Custom
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Unlimited transactions with volume discounts</p>
                </div>
                <div style={{ marginBottom: 'var(--space-8)' }}>
                  {['Everything in Professional', 'All adapters included', 'Unlimited Studio seats', 'Dedicated support engineer', 'Custom integrations', 'On-premises deployment'].map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                      <CheckCircle size={20} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/company/contact" className="btn btn-secondary" style={{ width: '100%' }}>
                  Contact sales
                </Link>
              </div>
            </div>

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
                  Join hundreds of companies building the future of autonomous agents. Start with a free trial or speak with our team.
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
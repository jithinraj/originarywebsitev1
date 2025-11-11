'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { CheckCircle, Github, ArrowRight, Shield, Zap, Users } from 'lucide-react'

function CloudPageContent() {
  const searchParams = useSearchParams()
  const [selectedPlan, setSelectedPlan] = useState('starter')
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    domain: '',
    plan: 'starter'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    const plan = searchParams.get('plan')
    if (plan && ['starter', 'pro', 'enterprise'].includes(plan)) {
      setSelectedPlan(plan)
      setFormData(prev => ({ ...prev, plan }))
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Placeholder for actual submission logic
    // In production, this would POST to your backend or a service like Mailchimp/ConvertKit

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
    }, 1500)
  }

  if (submitStatus === 'success') {
    return (
      <div className="wrap">
        <NavigationHeader />
        <main style={{ paddingTop: '80px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', maxWidth: '600px', padding: 'var(--space-8)' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                background: 'var(--gradient-brand)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-6)',
                color: 'var(--white)'
              }}
            >
              <CheckCircle size={40} />
            </div>
            <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              You are on the list!
            </h1>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)', marginBottom: 'var(--space-8)', lineHeight: 1.7 }}>
              We will send you an email at <strong>{formData.email}</strong> with your trial access details within 24 hours.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/trace" className="btn btn-primary">
                Explore Trace
              </Link>
              <a
                href="https://github.com/originaryx/trace"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Github size={18} />
                Try OSS version
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
                  Get <span className="text-gradient">Trace Cloud</span>
                </h1>
                <p style={{
                  fontSize: 'var(--text-xl)',
                  lineHeight: 1.7,
                  color: 'var(--gray-600)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  marginBottom: 'var(--space-12)'
                }}>
                  Managed Trace with retention, alerts, signed bundles, and compliance automation. Start your 14-day free trial.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'var(--space-12)',
                alignItems: 'start'
              }}>
                {/* Left: Form */}
                <div>
                  <form onSubmit={handleSubmit} style={{
                    background: 'var(--white)',
                    border: '1px solid var(--gray-200)',
                    borderRadius: 'var(--radius-2xl)',
                    padding: 'var(--space-8)',
                    boxShadow: 'var(--shadow-xl)'
                  }}>
                    <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-6)' }}>
                      Start your free trial
                    </h2>

                    {/* Plan Selection */}
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                      <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-700)' }}>
                        Select Plan
                      </label>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                        {[
                          { value: 'starter', label: 'Starter', price: '$29/mo', desc: '1 property, 90-day retention' },
                          { value: 'pro', label: 'Pro', price: '$99/mo', desc: 'Multi-property, 1-year retention', popular: true },
                          { value: 'enterprise', label: 'Enterprise', price: 'Custom', desc: 'Domain attestation, KMS, SLA' }
                        ].map((plan) => (
                          <label
                            key={plan.value}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              padding: 'var(--space-4)',
                              border: selectedPlan === plan.value ? '2px solid var(--brand-primary)' : '1px solid var(--gray-300)',
                              borderRadius: 'var(--radius-lg)',
                              cursor: 'pointer',
                              position: 'relative',
                              background: selectedPlan === plan.value ? 'rgba(99, 91, 255, 0.05)' : 'var(--white)',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <input
                              type="radio"
                              name="plan"
                              value={plan.value}
                              checked={selectedPlan === plan.value}
                              onChange={(e) => {
                                setSelectedPlan(e.target.value)
                                setFormData(prev => ({ ...prev, plan: e.target.value }))
                              }}
                              style={{ marginRight: 'var(--space-3)' }}
                            />
                            <div style={{ flex: 1 }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
                                <span style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>{plan.label}</span>
                                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>{plan.price}</span>
                                {plan.popular && (
                                  <span style={{
                                    fontSize: 'var(--text-xs)',
                                    background: 'var(--gradient-brand)',
                                    color: 'var(--white)',
                                    padding: '2px 8px',
                                    borderRadius: 'var(--radius-full)',
                                    fontWeight: 600,
                                    textTransform: 'uppercase'
                                  }}>
                                    Popular
                                  </span>
                                )}
                              </div>
                              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)' }}>{plan.desc}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Email */}
                    <div style={{ marginBottom: 'var(--space-4)' }}>
                      <label htmlFor="email" style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-700)' }}>
                        Work Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="you@company.com"
                        style={{
                          width: '100%',
                          padding: 'var(--space-3)',
                          border: '1px solid var(--gray-300)',
                          borderRadius: 'var(--radius-lg)',
                          fontSize: 'var(--text-base)'
                        }}
                      />
                    </div>

                    {/* Company */}
                    <div style={{ marginBottom: 'var(--space-4)' }}>
                      <label htmlFor="company" style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-700)' }}>
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        placeholder="Acme Inc"
                        style={{
                          width: '100%',
                          padding: 'var(--space-3)',
                          border: '1px solid var(--gray-300)',
                          borderRadius: 'var(--radius-lg)',
                          fontSize: 'var(--text-base)'
                        }}
                      />
                    </div>

                    {/* Domain */}
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                      <label htmlFor="domain" style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-700)' }}>
                        Domain to Track
                      </label>
                      <input
                        id="domain"
                        type="text"
                        value={formData.domain}
                        onChange={(e) => setFormData(prev => ({ ...prev, domain: e.target.value }))}
                        placeholder="example.com"
                        style={{
                          width: '100%',
                          padding: 'var(--space-3)',
                          border: '1px solid var(--gray-300)',
                          borderRadius: 'var(--radius-lg)',
                          fontSize: 'var(--text-base)'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                      style={{ width: '100%', marginBottom: 'var(--space-4)' }}
                    >
                      {isSubmitting ? 'Processing...' : 'Start 14-day free trial'}
                    </button>

                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)', textAlign: 'center' }}>
                      No credit card required. By signing up, you agree to our{' '}
                      <Link href="/terms" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Terms</Link>
                      {' '}and{' '}
                      <Link href="/privacy" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Privacy Policy</Link>.
                    </p>
                  </form>

                  {/* OSS Alternative */}
                  <div style={{
                    marginTop: 'var(--space-6)',
                    padding: 'var(--space-4)',
                    background: 'var(--gray-50)',
                    border: '1px solid var(--gray-200)',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'center'
                  }}>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginBottom: 'var(--space-3)' }}>
                      Prefer self-hosting?
                    </p>
                    <a
                      href="https://github.com/originaryx/trace"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}
                    >
                      <Github size={16} />
                      Get Trace OSS (free)
                    </a>
                  </div>
                </div>

                {/* Right: Benefits */}
                <div>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-6)', color: 'var(--gray-900)' }}>
                    What is included
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: 'var(--radius-lg)',
                        background: 'rgba(99, 91, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Zap size={24} style={{ color: 'var(--brand-primary)' }} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                          Deploy in Minutes
                        </h4>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                          Cloudflare Worker, Nginx tailer, Logpush, or Fingerprint webhook. Pick your adapter and start tracking.
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: 'var(--radius-lg)',
                        background: 'rgba(0, 212, 170, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Shield size={24} style={{ color: 'var(--success)' }} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                          Compliance Evidence
                        </h4>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                          PEAC receipts, signed monthly bundles, verification endpoint, and policy-violation surfacing.
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: 'var(--radius-lg)',
                        background: 'rgba(255, 107, 107, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Users size={24} style={{ color: 'var(--error)' }} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                          AI Crawler Analytics
                        </h4>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                          Identify GPTBot, ClaudeBot, PerplexityBot, search bots, and unknown families. Path and host breakdowns.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial placeholder */}
                  <div style={{
                    marginTop: 'var(--space-8)',
                    padding: 'var(--space-6)',
                    background: 'var(--gray-50)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid var(--gray-200)'
                  }}>
                    <p style={{ fontSize: 'var(--text-base)', fontStyle: 'italic', color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                      &ldquo;Trace gave us visibility into which AI services were accessing our content. The compliance bundles saved us weeks during our audit.&rdquo;
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'var(--gradient-brand)'
                      }} />
                      <div>
                        <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--gray-900)' }}>
                          Early Adopter
                        </div>
                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)' }}>
                          Publishing Platform
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        @media (max-width: 968px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}

export default function CloudPage() {
  return (
    <Suspense fallback={
      <div className="wrap">
        <NavigationHeader />
        <main style={{ paddingTop: '80px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>Loading...</div>
        </main>
        <Footer />
      </div>
    }>
      <CloudPageContent />
    </Suspense>
  )
}

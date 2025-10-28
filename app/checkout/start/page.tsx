'use client'

import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { CheckCircle, ShoppingCart } from 'lucide-react'
import { useCurrency } from '@/hooks/useCurrency'
import StripeCheckoutButton from '@/components/StripeCheckoutButton'

export default function CheckoutStart() {
  const pricing = useCurrency()

  return (
    <div className="wrap payment-page">
      <NavigationHeader />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              textAlign: 'center',
              marginBottom: 'var(--space-8)'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                background: 'var(--gradient-brand)',
                color: 'var(--white)',
                padding: 'var(--space-2) var(--space-4)',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                marginBottom: 'var(--space-6)'
              }}>
                <ShoppingCart size={16} />
                CHECKOUT
              </div>
              <h1 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Start Plan
              </h1>
              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--gray-600)',
                lineHeight: 1.7
              }}>
                30-day access to developer sandbox and verification tools
              </p>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                What&rsquo;s included
              </h2>

              <div style={{ marginBottom: 'var(--space-6)' }}>
                {[
                  '1 domain (sandbox) with live Verify API access',
                  '100 receipt verifications with sample PEAC-Receipt JWS',
                  '/.well-known/peac.txt validator (one-click validation)',
                  'Gateway 402 demo with x402 and Stripe test rails',
                  'Email support with 48-hour response time',
                  'Full access to developer documentation',
                  'Sample code and integration examples'
                ].map((feature) => (
                  <div key={feature} style={{
                    display: 'flex',
                    alignItems: 'start',
                    gap: 'var(--space-3)',
                    marginBottom: 'var(--space-3)',
                    padding: 'var(--space-3)',
                    background: 'var(--gray-50)',
                    borderRadius: 'var(--radius-md)'
                  }}>
                    <CheckCircle size={20} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--gray-700)', lineHeight: 1.6 }}>{feature}</span>
                  </div>
                ))}
              </div>

              <div style={{
                borderTop: '1px solid var(--gray-200)',
                paddingTop: 'var(--space-6)',
                marginBottom: 'var(--space-6)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 'var(--space-4)'
                }}>
                  <span style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-700)' }}>Plan</span>
                  <span style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gray-900)' }}>Start (30 days)</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 'var(--space-4)'
                }}>
                  <span style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-700)' }}>Price</span>
                  <span style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--gray-900)' }}>
                    {pricing.isLoading ? '...' : pricing.start.formatted} <span style={{ fontSize: 'var(--text-sm)', fontWeight: 400 }}>{pricing.currency}</span>
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: 'var(--space-4)',
                  borderTop: '1px solid var(--gray-200)'
                }}>
                  <span style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gray-900)' }}>Total</span>
                  <span style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--brand-primary)' }}>
                    {pricing.isLoading ? '...' : pricing.start.formatted} <span style={{ fontSize: 'var(--text-sm)', fontWeight: 400 }}>{pricing.currency}</span>
                  </span>
                </div>
              </div>

              <div style={{ marginBottom: 'var(--space-4)' }}>
                <StripeCheckoutButton
                  plan="start"
                  amount={100}
                  label="Pay $1 - Start Plan"
                  className="btn btn-primary"
                />
              </div>

              <div style={{
                textAlign: 'center',
                padding: 'var(--space-3)',
                background: 'rgba(99, 91, 255, 0.05)',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--space-4)'
              }}>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--gray-700)',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Payment processed by Stripe<br />
                  <strong>Billed by: Poem, Inc.</strong>
                </p>
              </div>

              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--gray-600)',
                textAlign: 'center',
                lineHeight: 1.6,
                marginBottom: 'var(--space-4)'
              }}>
                By purchasing you agree to our{' '}
                <Link href="/terms" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>
                  Terms of Service
                </Link>
                {' '}and{' '}
                <Link href="/privacy" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>
                  Privacy Policy
                </Link>
              </p>

              <div style={{
                background: 'var(--gray-50)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--gray-200)'
              }}>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--gray-700)',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  <strong>Immediate delivery.</strong> Access details and login credentials will be sent to your email within minutes. Non-refundable. Access continues for 30 days.
                </p>
              </div>
            </div>

            <div style={{
              textAlign: 'center',
              padding: 'var(--space-4)',
              background: 'var(--white)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--gray-200)'
            }}>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-3)'
              }}>
                Questions about the Start Plan?
              </p>
              <Link
                href="/company/contact"
                style={{
                  color: 'var(--brand-primary)',
                  textDecoration: 'underline',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600
                }}
              >
                Contact our team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

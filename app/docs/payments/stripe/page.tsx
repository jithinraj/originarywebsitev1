import { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Stripe Payment Integration',
  description: 'Integrate Stripe card payments with Originary PEAC-Receipt. Map PaymentIntents to verifiable receipts with HTTP 402.',
  alternates: {
    canonical: '/docs/payments/stripe'
  },
  openGraph: {
    title: 'Stripe Payment Integration',
    description: 'Integrate Stripe card payments with Originary PEAC-Receipt.',
    url: '/docs/payments/stripe',
    siteName: 'Originary',
    type: 'website'
  }
}

export default function StripeDocPage() {
  return (
    <>
      <NavigationHeader />
      <main style={{ minHeight: '100vh', background: 'var(--surface-elevated)' }}>
        <div className="container" style={{ padding: 'var(--space-32) var(--space-6)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex',
              background: 'var(--accent-brand-subtle)',
              border: '1px solid var(--accent-brand-muted)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--space-2) var(--space-6)',
              color: 'var(--accent-brand)',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              marginBottom: 'var(--space-6)'
            }}>
              PAYMENTS
            </div>

            <h1 style={{
              fontSize: 'var(--text-5xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-6)',
              color: 'var(--text-primary)'
            }}>
              Stripe Integration
            </h1>

            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: 'var(--space-12)'
            }}>
              Accept card payments via Stripe and automatically generate PEAC-Receipts that map PaymentIntents to verifiable compliance proofs.
            </p>

            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                HTTP 402 with Stripe
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                Originary bridges Stripe&rsquo;s traditional card payment flow with the HTTP 402 payment required pattern. When an agent requests a gated resource, respond with 402 and a Stripe PaymentIntent. After payment confirmation, issue a PEAC-Receipt.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Payment evidence is mapped to <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: '4px' }}>payment.evidence</code> in the receipt, containing the Stripe charge ID, amount, and verification status.
              </p>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                5-Minute Quickstart
              </h2>
              <ol style={{ color: 'var(--text-secondary)', lineHeight: 2, paddingLeft: 'var(--space-6)' }}>
                <li>Connect your Stripe account in the Originary dashboard</li>
                <li>Deploy your <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: '4px' }}>peac.txt</code> policy file</li>
                <li>Gate resources with HTTP 402 + Stripe PaymentIntent</li>
                <li>Use Stripe webhooks to confirm payment</li>
                <li>Issue PEAC-Receipt with Stripe charge evidence</li>
              </ol>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Code Example
              </h2>
              <pre style={{
                background: 'var(--text-primary)',
                color: 'var(--surface-card)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-lg)',
                fontSize: 'var(--text-sm)',
                fontFamily: 'var(--font-mono)',
                overflow: 'auto',
                lineHeight: 1.6
              }}>
{`// Create PaymentIntent
const paymentIntent = await stripe.paymentIntents.create({
  amount: 100,
  currency: 'usd'
})

// Challenge with 402
res.status(402).json({
  protocol: 'stripe',
  client_secret: paymentIntent.client_secret
})

// After webhook confirms payment
res.setHeader('PEAC-Receipt', signedJWT)
res.json({ content: protectedData })`}
              </pre>
            </div>

            <div style={{
              background: 'var(--surface-subtle)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-8)',
              marginTop: 'var(--space-12)'
            }}>
              <h2 style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Ready to accept card payments?
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>
                Connect Stripe and start generating receipts for every transaction.
              </p>
              <Link href="/developers" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

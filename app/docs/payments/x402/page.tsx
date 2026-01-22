import { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'x402 Integration | Stablecoin Payments',
  description: 'Implement x402 stablecoin payments with PEAC-Receipts. HTTP 402 payment flows for machine-payable APIs.',
  robots: 'index,follow',
  alternates: {
    canonical: '/docs/payments/x402'
  },
  openGraph: {
    title: 'x402 Integration | Stablecoin Payments',
    description: 'Implement x402 stablecoin payments with PEAC-Receipts. HTTP 402 payment flows for APIs.',
    url: '/docs/payments/x402',
    siteName: 'Originary',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'x402 Integration | Stablecoin Payments',
    description: 'Implement x402 stablecoin payments with PEAC-Receipts.',
  }
}

export default function X402DocPage() {
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
              x402 Integration
            </h1>

            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: 'var(--space-12)'
            }}>
              HTTP 402 examples and HTTP 402 for APIs using x402 payments and x402 integration. Learn how to implement blockchain-based x402 stablecoin payments with Originary to build machine-payable APIs that generate verifiable PEAC-Receipts.
            </p>

            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                What is x402?
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                x402 is a protocol built on the HTTP 402 status code that enables instant, blockchain-based payments for web resources and APIs. Developed by Coinbase, x402 allows users to pay for resources via API without registration, emails, OAuth, or complex signatures.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Originary integrates with x402 to normalize stablecoin payments into standard PEAC-Receipts, providing a unified proof of payment regardless of the payment rail used.
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
                <li>Deploy your <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: '4px' }}>peac.txt</code> policy file</li>
                <li>Configure x402 payment endpoint in your Originary dashboard</li>
                <li>Return HTTP 402 with x402 payment challenge when access is gated</li>
                <li>Verify payment via x402 protocol</li>
                <li>Issue PEAC-Receipt header in response after payment confirmation</li>
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
{`// Challenge with 402
res.status(402).json({
  protocol: 'x402',
  amount: '1.00',
  currency: 'USDC',
  address: '0x...'
})

// After payment verification, issue receipt
res.setHeader('PEAC-Receipt', signedJWT)
res.json({ content: protectedData })`}
              </pre>
            </div>

            {/* Related Resources */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Related Resources
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <Link href="/integrations/x402" style={{
                  color: 'var(--accent-brand)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: 500
                }}>
                  x402 integration guide →
                </Link>
                <Link href="/products/gateway-402" style={{
                  color: 'var(--accent-brand)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: 500
                }}>
                  HTTP 402 and x402 Gateway 402 →
                </Link>
                <Link href="/solutions/api-providers" style={{
                  color: 'var(--accent-brand)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: 500
                }}>
                  HTTP 402 commerce for API providers →
                </Link>
                <Link href="/peac" style={{
                  color: 'var(--accent-brand)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: 500
                }}>
                  PEAC Protocol and Policy Layer →
                </Link>
              </div>
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
                Ready to accept stablecoin payments?
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>
                Start accepting x402 payments and build HTTP 402 for APIs with Originary today.
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

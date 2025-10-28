import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy · Originary',
  description: 'Cancellation and Refund Policy for Originary services operated by Poem, Inc.',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.originary.xyz/refund',
  },
}

export default function RefundPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cancellation & Refund Policy",
    "description": "Cancellation and Refund Policy for Originary services",
    "url": "https://www.originary.xyz/refund",
    "publisher": {
      "@type": "Organization",
      "name": "Poem, Inc.",
      "alternateName": "Originary"
    }
  }

  return (
    <div className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavigationHeader />
      <main style={{ minHeight: '100vh', background: 'var(--white)', paddingTop: '80px' }} id="main-content">
        <div className="container" style={{ padding: 'var(--space-32) var(--space-6)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              background: 'rgba(99, 91, 255, 0.1)',
              border: '1px solid rgba(99, 91, 255, 0.2)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--space-2) var(--space-6)',
              color: 'var(--brand-primary)',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              marginBottom: 'var(--space-6)'
            }}>
              LEGAL
            </div>

            <h1 style={{
              fontSize: 'var(--text-5xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-4)',
              color: 'var(--gray-900)'
            }}>
              Cancellation &amp; Refund Policy
            </h1>

            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--gray-600)',
              marginBottom: 'var(--space-12)'
            }}>
              Effective from 2025-07-27
            </p>

            {/* No Refunds Policy */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                No Refunds Policy
              </h2>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-4)'
              }}>
                All sales of Originary services are final and non-refundable. By purchasing any service or product from Originary operated by Poem, Inc., you acknowledge and agree that no refunds will be issued under any circumstances.
              </p>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7
              }}>
                This policy applies to all service tiers including Developer ($1 activation), Professional ($2,500/month), and Enterprise (custom pricing).
              </p>
            </div>

            {/* Digital Delivery */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Immediate Digital Delivery
              </h2>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-4)'
              }}>
                Originary provides digital services with immediate delivery. Upon successful payment:
              </p>
              <ul style={{
                color: 'var(--gray-700)',
                lineHeight: 2,
                paddingLeft: 'var(--space-6)',
                marginBottom: 'var(--space-4)'
              }}>
                <li>Access credentials are sent to your registered email within minutes</li>
                <li>API keys and authentication tokens are generated instantly</li>
                <li>Dashboard access is activated immediately</li>
                <li>All services become accessible upon payment confirmation</li>
              </ul>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7
              }}>
                Because digital services are delivered immediately and access cannot be revoked once granted, all purchases are final.
              </p>
            </div>

            {/* Service Access Period */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Service Access Period
              </h2>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-4)'
              }}>
                <strong>Developer tier ($1 activation):</strong> Access continues for 30 days from payment date.
              </p>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-4)'
              }}>
                <strong>Professional tier ($2,500/month):</strong> Billed monthly. Service continues until cancellation at end of current billing period.
              </p>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7
              }}>
                <strong>Enterprise tier (custom pricing):</strong> As per negotiated agreement terms.
              </p>
            </div>

            {/* Cancellation */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Service Cancellation
              </h2>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-4)'
              }}>
                For monthly recurring subscriptions (Professional tier), you may cancel your subscription at any time. Cancellation takes effect at the end of your current billing period. No prorated refunds are issued for partial months.
              </p>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7
              }}>
                To cancel your subscription, contact <a href="mailto:contact@originary.xyz" style={{ color: 'var(--brand-primary)', textDecoration: 'none', fontWeight: 600 }}>contact@originary.xyz</a> or use the cancellation option in your dashboard.
              </p>
            </div>

            {/* Payment Issues */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Payment Processing Issues
              </h2>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-4)'
              }}>
                If you experience technical issues during payment processing (e.g., payment deducted but service not activated), contact our support team immediately:
              </p>
              <ul style={{
                color: 'var(--gray-700)',
                lineHeight: 2,
                paddingLeft: 'var(--space-6)',
                marginBottom: 'var(--space-4)'
              }}>
                <li>Email: <a href="mailto:contact@originary.xyz" style={{ color: 'var(--brand-primary)', textDecoration: 'none', fontWeight: 600 }}>contact@originary.xyz</a></li>
                <li>Phone: <a href="tel:+14157070402" style={{ color: 'var(--brand-primary)', textDecoration: 'none', fontWeight: 600 }}>+1 415 707 0402</a> (US line)</li>
              </ul>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7
              }}>
                We will investigate and resolve genuine technical issues promptly. This does not constitute a refund policy.
              </p>
            </div>

            {/* Legal Entity */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Legal Entity
              </h2>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7
              }}>
                Originary services are operated by <strong>Poem, Inc.</strong>, a Delaware corporation. All card payments are processed by <strong>Stripe</strong> on behalf of Poem, Inc.
              </p>
            </div>

            {/* Contact */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Questions About This Policy
              </h2>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-4)'
              }}>
                If you have questions about this refund policy, contact us at:
              </p>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7
              }}>
                <strong>Email:</strong> <a href="mailto:contact@originary.xyz" style={{ color: 'var(--brand-primary)', textDecoration: 'none', fontWeight: 600 }}>contact@originary.xyz</a><br />
                <strong>Phone:</strong> <a href="tel:+14157070402" style={{ color: 'var(--brand-primary)', textDecoration: 'none', fontWeight: 600 }}>+1 415 707 0402</a>
              </p>
            </div>

            {/* Footer Links */}
            <div style={{
              display: 'flex',
              gap: 'var(--space-4)',
              flexWrap: 'wrap',
              paddingTop: 'var(--space-8)',
              borderTop: '1px solid var(--gray-200)'
            }}>
              <Link href="/terms" className="btn btn-ghost">Terms of Service</Link>
              <Link href="/privacy" className="btn btn-ghost">Privacy Policy</Link>
              <Link href="/company/contact" className="btn btn-ghost">Contact Us</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

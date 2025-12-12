import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Shipping & Delivery Policy',
  description: 'Shipping and Delivery Policy for Originary digital services operated by Poem, Inc.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/shipping'
  },
}

export default function ShippingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Shipping & Delivery Policy",
    "description": "Shipping and Delivery Policy for Originary digital services",
    "url": "https://www.originary.xyz/shipping",
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
              Shipping &amp; Delivery Policy
            </h1>

            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--gray-600)',
              marginBottom: 'var(--space-12)'
            }}>
              Effective from 2025-07-27
            </p>

            {/* Digital Services Only */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Digital Services - No Physical Shipping
              </h2>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-4)'
              }}>
                Originary by Poem, Inc. provides exclusively digital services. We do not ship any physical products. All services are delivered electronically via email and online dashboard access.
              </p>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7
              }}>
                There are no shipping charges, shipping times, or physical delivery addresses required for Originary services.
              </p>
            </div>

            {/* Immediate Digital Delivery */}
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
                Upon successful payment confirmation, you will receive digital delivery within minutes:
              </p>
              <ul style={{
                color: 'var(--gray-700)',
                lineHeight: 2,
                paddingLeft: 'var(--space-6)',
                marginBottom: 'var(--space-4)'
              }}>
                <li><strong>Email confirmation:</strong> Sent immediately to your registered email address</li>
                <li><strong>Access credentials:</strong> API keys and authentication tokens delivered via email</li>
                <li><strong>Dashboard access:</strong> Account activated and accessible instantly</li>
                <li><strong>Documentation:</strong> Full access to developer documentation and guides</li>
              </ul>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7
              }}>
                All digital assets are delivered to the email address provided during purchase. Ensure your email address is correct before completing payment.
              </p>
            </div>

            {/* Service Activation */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Service Activation Timeline
              </h2>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-4)'
              }}>
                <strong>Automated activation (typical):</strong> Within 1-5 minutes of payment confirmation
              </p>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-4)'
              }}>
                <strong>Manual verification (if required):</strong> Up to 24 hours for complex enterprise orders or flagged transactions
              </p>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7
              }}>
                If you do not receive access credentials within 24 hours, check your spam folder and contact support immediately.
              </p>
            </div>

            {/* Email Delivery Issues */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Email Delivery Issues
              </h2>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-4)'
              }}>
                If you do not receive your access credentials:
              </p>
              <ul style={{
                color: 'var(--gray-700)',
                lineHeight: 2,
                paddingLeft: 'var(--space-6)',
                marginBottom: 'var(--space-4)'
              }}>
                <li>Check your spam/junk folder for emails from @originary.xyz</li>
                <li>Verify the email address you provided during purchase</li>
                <li>Add contact@originary.xyz to your email whitelist</li>
                <li>Contact support with your order ID or payment confirmation</li>
              </ul>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7
              }}>
                We are not responsible for delivery failures caused by incorrect email addresses, spam filters, or email service provider issues.
              </p>
            </div>

            {/* Global Availability */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Global Availability
              </h2>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-4)'
              }}>
                Originary services are available globally with specific operations in:
              </p>
              <ul style={{
                color: 'var(--gray-700)',
                lineHeight: 2,
                paddingLeft: 'var(--space-6)',
                marginBottom: 'var(--space-4)'
              }}>
                <li>United States</li>
                <li>United Kingdom</li>
                <li>India</li>
                <li>Canada</li>
                <li>United Arab Emirates</li>
                <li>Singapore</li>
              </ul>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7
              }}>
                Digital services are accessible worldwide via the internet. No geographic restrictions apply to service access after purchase.
              </p>
            </div>

            {/* Support Contact */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Delivery Support
              </h2>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-4)'
              }}>
                For issues with digital delivery or service activation, contact our support team:
              </p>
              <div style={{
                background: 'var(--gray-50)',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-4)',
                marginBottom: 'var(--space-4)'
              }}>
                <p style={{ color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: 'var(--space-2)' }}>
                  <strong>Email:</strong> <a href="mailto:contact@originary.xyz" style={{ color: 'var(--brand-primary)', textDecoration: 'none', fontWeight: 600 }}>contact@originary.xyz</a>
                </p>
                <p style={{ color: 'var(--gray-700)', lineHeight: 1.7 }}>
                  <strong>Phone:</strong> <a href="tel:+14157070402" style={{ color: 'var(--brand-primary)', textDecoration: 'none', fontWeight: 600 }}>+1 415 707 0402</a>
                </p>
              </div>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: 1.7
              }}>
                Include your order ID, payment confirmation, and registered email address when contacting support.
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
                Originary services are operated by <strong>Poem, Inc.</strong>, a Delaware corporation.
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
              <Link href="/refund" className="btn btn-ghost">Refund Policy</Link>
              <Link href="/company/contact" className="btn btn-ghost">Contact Us</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

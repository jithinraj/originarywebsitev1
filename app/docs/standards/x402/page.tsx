import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'HTTP 402 (Payment Required) - Standards Integration',
  description: 'Originary implements HTTP 402 Payment Required for machine-readable payment flows. Enable API monetization with standardized payment headers and PEAC-Receipt verification.',
  openGraph: {
    title: 'HTTP 402 (Payment Required) - Standards Integration | Originary',
    description: 'Originary implements HTTP 402 Payment Required for machine-readable payment flows. Enable API monetization with standardized payment headers and PEAC-Receipt verification.',
    url: 'https://www.originary.xyz/docs/standards/x402/',
    type: 'article'
  },
  alternates: {
    canonical: 'https://www.originary.xyz/docs/standards/x402/'
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "HTTP 402 (Payment Required) Integration",
  "description": "Technical documentation for implementing HTTP 402 Payment Required with Originary PEAC-Receipt headers",
  "author": {
    "@type": "Organization",
    "@id": "https://www.originary.xyz/#org"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.originary.xyz/#org"
  },
  "url": "https://www.originary.xyz/docs/standards/x402/"
}

export default function X402Page() {
  return (
    <>
      <NavigationHeader />
      <main id="main-content" className="container" style={{ marginTop: 'var(--space-32)', marginBottom: 'var(--space-32)' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Badge */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
            <div style={{
              display: 'inline-flex',
              background: 'rgba(99, 91, 255, 0.1)',
              border: '1px solid rgba(99, 91, 255, 0.2)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--space-2) var(--space-6)',
              color: 'var(--brand-primary)',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              STANDARDS INTEGRATION
            </div>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'var(--text-5xl)',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 'var(--space-6)',
            lineHeight: 1.2
          }}>
            HTTP 402 (Payment Required)
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--gray-600)',
            textAlign: 'center',
            marginBottom: 'var(--space-16)',
            lineHeight: 1.6
          }}>
            Machine-readable payment flows for API monetization
          </p>

          {/* Overview */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Overview
            </h2>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              HTTP 402 Payment Required is a reserved status code intended for digital payment systems. Originary implements 402 responses with standardized payment headers and PEAC-Receipt verification, enabling agents to autonomously handle API payment flows.
            </p>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
              When an API endpoint requires payment, it returns a 402 status with machine-readable payment instructions. After payment completion, the API issues a PEAC-Receipt that agents can verify and attach to subsequent requests.
            </p>
          </div>

          {/* Implementation */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Implementation
            </h2>

            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
              402 Response Format
            </h3>
            <pre style={{
              background: 'var(--gray-50)',
              padding: 'var(--space-4)',
              borderRadius: 'var(--radius-md)',
              overflow: 'auto',
              fontSize: 'var(--text-sm)',
              fontFamily: 'var(--font-jetbrains-mono)',
              marginBottom: 'var(--space-4)'
            }}>
{`HTTP/1.1 402 Payment Required
Content-Type: application/json
Payment-Required: https://api.example.com/checkout
Accept-Payment: stripe, razorpay

{
  "error": "payment_required",
  "message": "This endpoint requires payment",
  "payment_url": "https://api.example.com/checkout",
  "amount": 100,
  "currency": "USD"
}`}
            </pre>

            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
              Request with PEAC-Receipt
            </h3>
            <pre style={{
              background: 'var(--gray-50)',
              padding: 'var(--space-4)',
              borderRadius: 'var(--radius-md)',
              overflow: 'auto',
              fontSize: 'var(--text-sm)',
              fontFamily: 'var(--font-jetbrains-mono)'
            }}>
{`GET /api/data HTTP/1.1
Host: api.example.com
PEAC-Receipt: eyJhbGc...signature
Authorization: Bearer token123`}
            </pre>
          </div>

          {/* Benefits */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Benefits for API Providers
            </h2>
            <ul style={{ color: 'var(--gray-600)', lineHeight: 1.8, paddingLeft: 'var(--space-6)' }}>
              <li>Enable pay-per-request monetization for AI agents</li>
              <li>Standardized payment headers reduce integration complexity</li>
              <li>PEAC-Receipt verification prevents payment fraud</li>
              <li>Audit trail of all agent transactions</li>
              <li>Compatible with existing payment processors</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Resources
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <Link href="/products/gateway-402" style={{
                color: 'var(--brand-primary)',
                textDecoration: 'none',
                fontSize: 'var(--text-base)',
                fontWeight: 500
              }}>
                Gateway 402 Product →
              </Link>
              <Link href="/docs/payments/x402" style={{
                color: 'var(--brand-primary)',
                textDecoration: 'none',
                fontSize: 'var(--text-base)',
                fontWeight: 500
              }}>
                Technical Documentation →
              </Link>
              <a href="https://peacprotocol.org/" target="_blank" rel="noopener" style={{
                color: 'var(--brand-primary)',
                textDecoration: 'none',
                fontSize: 'var(--text-base)',
                fontWeight: 500
              }}>
                PEAC Protocol Specification →
              </a>
            </div>
          </div>

          {/* CTA */}
          <div style={{
            textAlign: 'center',
            padding: 'var(--space-12)',
            background: 'var(--gray-50)',
            borderRadius: 'var(--radius-lg)',
            marginTop: 'var(--space-12)'
          }}>
            <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Ready to implement HTTP 402?
            </h3>
            <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
              Add payment verification to your API with Gateway 402
            </p>
            <Link href="/pricing" className="button-primary">
              View Pricing
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

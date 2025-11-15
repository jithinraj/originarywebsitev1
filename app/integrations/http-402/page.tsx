import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { ArrowRight, CreditCard, CheckCircle, Code } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HTTP 402 Payment Required | API Monetization Standard',
  description: 'Learn about HTTP 402 Payment Required status code for API monetization. Understand how payment-required responses work, implementation patterns, and integration with modern payment protocols like x402.',
  keywords: 'HTTP 402, Payment Required, API monetization, payment gateway, x402, PEAC, agent commerce, API payments, HTTP status code',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'article',
    title: 'HTTP 402 Payment Required | API Monetization Standard',
    description: 'Learn about HTTP 402 Payment Required status code for API monetization. Understand how payment-required responses work, implementation patterns, and integration with modern payment protocols like x402.',
    url: 'https://www.originary.xyz/integrations/http-402/',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HTTP 402 Payment Required | API Monetization Standard',
    description: 'Learn about HTTP 402 Payment Required status code for API monetization. Understand how payment-required responses work and integration with modern payment protocols.',
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/integrations/http-402'
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is HTTP 402 Payment Required?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HTTP 402 Payment Required is a standard HTTP status code reserved for digital payment systems. It indicates that payment is required to access the requested resource. When a server returns 402, it signals to the client that a payment must be made before the request can be fulfilled."
      }
    },
    {
      "@type": "Question",
      "name": "How does HTTP 402 differ from x402?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HTTP 402 is the status code itself, while x402 is a specific protocol implementation that defines how to use HTTP 402 in practice. x402 provides standardized headers, payment challenge formats, and receipt verification for HTTP 402 flows."
      }
    },
    {
      "@type": "Question",
      "name": "When should I use HTTP 402?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use HTTP 402 when you want to monetize API access, enable pay-per-use models, or implement micropayments for content or services. It's particularly useful for agent-to-agent commerce, API marketplaces, and premium content access."
      }
    }
  ]
}

export default function HTTP402Page() {
  const basicExample = `HTTP/1.1 402 Payment Required
Content-Type: application/json
Cache-Control: no-store

{
  "error": "Payment required",
  "message": "Access to this resource requires payment",
  "amount": "0.10 USD"
}`

  return (
    <div className="wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NavigationHeader />
      <main id="main-content" role="main" style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: 'var(--space-16) var(--space-6)' }}>
          {/* Badge */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              background: 'rgba(255, 107, 53, 0.1)',
              border: '1px solid rgba(255, 107, 53, 0.2)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--space-2) var(--space-6)',
              color: 'var(--brand-accent)',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              <CreditCard size={16} />
              HTTP STATUS CODE
            </div>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'var(--text-5xl)',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 'var(--space-6)',
            lineHeight: 1.1,
            color: 'var(--gray-900)'
          }}>
            HTTP 402 <span className="text-gradient">Payment Required</span>
          </h1>

          <p style={{
            fontSize: 'var(--text-xl)',
            textAlign: 'center',
            color: 'var(--gray-600)',
            maxWidth: '700px',
            margin: '0 auto var(--space-12)',
            lineHeight: 1.7
          }}>
            The HTTP status code reserved for digital payment systems. Learn how to implement payment-required responses for API monetization and agent commerce.
          </p>

          {/* What is HTTP 402 */}
          <section style={{ marginBottom: 'var(--space-16)' }}>
            <h2 style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-6)',
              color: 'var(--gray-900)'
            }}>
              What is HTTP 402?
            </h2>
            <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
              <p style={{ marginBottom: 'var(--space-4)', lineHeight: 1.8 }}>
                HTTP 402 Payment Required is a standard HTTP status code that was originally reserved for future use in digital payment systems. It indicates that payment is required to access the requested resource.
              </p>
              <p style={{ marginBottom: 'var(--space-4)', lineHeight: 1.8 }}>
                When a server returns a 402 response, it signals to the client that the request cannot be fulfilled without payment. The response typically includes information about the payment amount, currency, and payment methods accepted.
              </p>
              <p style={{ marginBottom: 0, lineHeight: 1.8 }}>
                While HTTP 402 has been part of the HTTP specification since HTTP/1.1, it remained largely unused until recent interest in API monetization and agent-to-agent commerce revived its purpose.
              </p>
            </div>
          </section>

          {/* How it works */}
          <section style={{ marginBottom: 'var(--space-16)' }}>
            <h2 style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-6)',
              color: 'var(--gray-900)'
            }}>
              How HTTP 402 works
            </h2>
            <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
              <ol style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
                <li style={{ marginBottom: 'var(--space-4)', lineHeight: 1.8 }}>
                  <strong>Client requests a resource</strong> - The client makes an HTTP request to a protected endpoint
                </li>
                <li style={{ marginBottom: 'var(--space-4)', lineHeight: 1.8 }}>
                  <strong>Server returns 402</strong> - The server responds with HTTP 402 Payment Required, including payment details in the response body
                </li>
                <li style={{ marginBottom: 'var(--space-4)', lineHeight: 1.8 }}>
                  <strong>Client makes payment</strong> - The client processes the payment through the specified payment method
                </li>
                <li style={{ marginBottom: 0, lineHeight: 1.8 }}>
                  <strong>Client retries with proof</strong> - The client retries the original request with a payment receipt or proof of payment
                </li>
              </ol>
            </div>

            <div style={{
              background: 'var(--gray-50)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)'
            }}>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                Basic HTTP 402 response
              </h3>
              <pre style={{
                background: 'var(--gray-900)',
                color: 'var(--gray-100)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-md)',
                overflow: 'auto',
                fontSize: 'var(--text-sm)',
                margin: 0
              }}>
                <code>{basicExample}</code>
              </pre>
            </div>
          </section>

          {/* HTTP 402 vs x402 */}
          <section style={{ marginBottom: 'var(--space-16)' }}>
            <h2 style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-6)',
              color: 'var(--gray-900)'
            }}>
              HTTP 402 vs x402
            </h2>
            <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-8)' }}>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <CreditCard size={20} style={{ color: 'var(--brand-accent)' }} />
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, margin: 0 }}>HTTP 402</h3>
                  </div>
                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-3)' }}>
                    The HTTP status code itself. Part of the HTTP/1.1 specification.
                  </p>
                  <ul style={{ paddingLeft: 'var(--space-6)', margin: 0, color: 'var(--gray-600)' }}>
                    <li style={{ marginBottom: 'var(--space-2)' }}>Standard status code</li>
                    <li style={{ marginBottom: 'var(--space-2)' }}>No specific format</li>
                    <li style={{ marginBottom: 0 }}>Implementation-agnostic</li>
                  </ul>
                </div>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <Code size={20} style={{ color: 'var(--brand-primary)' }} />
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, margin: 0 }}>x402</h3>
                  </div>
                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-3)' }}>
                    A protocol specification for implementing HTTP 402 in practice.
                  </p>
                  <ul style={{ paddingLeft: 'var(--space-6)', margin: 0, color: 'var(--gray-600)' }}>
                    <li style={{ marginBottom: 'var(--space-2)' }}>Standardized headers</li>
                    <li style={{ marginBottom: 'var(--space-2)' }}>Payment challenge format</li>
                    <li style={{ marginBottom: 0 }}>Receipt verification</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section style={{ marginBottom: 'var(--space-16)' }}>
            <h2 style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-6)',
              color: 'var(--gray-900)'
            }}>
              Use cases for HTTP 402
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
              <div className="card">
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <CheckCircle size={24} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
                  API Monetization
                </h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, margin: 0 }}>
                  Charge for API access on a per-request or subscription basis. Enable pay-per-use pricing models.
                </p>
              </div>
              <div className="card">
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <CheckCircle size={24} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
                  Agent Commerce
                </h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, margin: 0 }}>
                  Enable autonomous agents to discover pricing and pay for services automatically.
                </p>
              </div>
              <div className="card">
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <CheckCircle size={24} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
                  Content Paywalls
                </h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, margin: 0 }}>
                  Protect premium content behind payment requirements with verifiable receipts.
                </p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section style={{ marginTop: 'var(--space-16)', paddingTop: 'var(--space-12)', borderTop: '2px solid var(--gray-200)' }}>
            <h2 style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: 'var(--space-8)',
              color: 'var(--gray-900)'
            }}>
              Implement HTTP 402 in your application
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-6)',
              marginBottom: 'var(--space-12)'
            }}>
              <Link href="/integrations/x402/" className="card" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                  x402 Protocol Guide
                </h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                  Learn how to implement HTTP 402 using the x402 protocol with standardized headers and receipt formats.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--brand-primary)', fontWeight: 500 }}>
                  <span>View x402 guide</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
              <Link href="/products/gateway-402" className="card" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                  Gateway 402
                </h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                  Enterprise HTTP 402 payment gateway with multi-rail settlement support and verifiable receipts.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--brand-primary)', fontWeight: 500 }}>
                  <span>Learn about Gateway 402</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
              <Link href="/glossary/http-402-payment-required/" className="card" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                  HTTP 402 Glossary
                </h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                  Detailed explanation of HTTP 402 Payment Required status code and related concepts.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--brand-primary)', fontWeight: 500 }}>
                  <span>Read glossary entry</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section style={{
            background: 'var(--gradient-brand)',
            borderRadius: 'var(--radius-3xl)',
            padding: 'var(--space-12) var(--space-8)',
            textAlign: 'center',
            color: 'var(--white)'
          }}>
            <h2 style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-4)',
              color: 'var(--white)'
            }}>
              Ready to add HTTP 402 to your API?
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              marginBottom: 'var(--space-8)',
              opacity: 0.9
            }}>
              Get started with our developer tools and implementation guides.
            </p>
            <div style={{
              display: 'flex',
              gap: 'var(--space-4)',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link
                href="/developers"
                className="btn btn-lg"
                style={{
                  background: 'var(--white)',
                  color: 'var(--brand-primary)',
                  border: 'none'
                }}
              >
                <span>View documentation</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/company/contact"
                className="btn btn-lg btn-ghost"
                style={{
                  color: 'var(--white)',
                  border: '1px solid rgba(255,255,255,0.3)'
                }}
              >
                <span>Contact sales</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

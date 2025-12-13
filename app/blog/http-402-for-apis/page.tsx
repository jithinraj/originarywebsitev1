import type { Metadata } from "next";
import Link from "next/link";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import { FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "HTTP 402 for APIs: Payment Required",
  description: "A practical guide to implementing HTTP 402 Payment Required in modern APIs. Learn the anatomy of a 402 response, receipt verification patterns, and how to avoid common pitfalls.",
  keywords: "HTTP 402, payment required, API monetization, x402, agent commerce, receipts, web payments",
  authors: [{ name: "Jithin Raj & Originary Team" }],
  alternates: { canonical: '/blog/http-402-for-apis' },
  openGraph: {
    title: "HTTP 402 for APIs: Making Payment-Required Responses Work",
    description: "Practical guide to implementing HTTP 402 Payment Required in modern APIs",
    type: "article",
    url: "https://www.originary.xyz/blog/http-402-for-apis/",
    publishedTime: "2025-11-03",
    authors: ["Jithin Raj", "Originary Team"],
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: "summary_large_image",
    title: "HTTP 402 for APIs: Making Payment-Required Responses Work",
    description: "Practical guide to implementing HTTP 402 Payment Required in modern APIs",
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
};

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "HTTP 402 for APIs: Making Payment-Required Responses Work",
    "description": "A practical guide to implementing HTTP 402 Payment Required in modern APIs with receipt verification patterns",
    "author": {
      "@type": "Organization",
      "name": "Originary™",
      "url": "https://www.originary.xyz"
    },
    "datePublished": "2025-11-03",
    "dateModified": "2025-11-03",
    "publisher": {
      "@type": "Organization",
      "name": "Originary™",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.originary.xyz/og/originary-logo.png"
      }
    },
    "mainEntityOfPage": "https://www.originary.xyz/blog/http-402-for-apis/",
    "image": "https://www.originary.xyz/og.jpg"
  };

  return (
    <div className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <NavigationHeader />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }} id="main-content">
        <article>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: 'var(--space-16) var(--space-6)' }}>
            {/* Breadcrumbs */}
            <nav style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--gray-600)',
              marginBottom: 'var(--space-8)'
            }}>
              <Link href="/" style={{ color: 'var(--gray-600)', textDecoration: 'none' }}>Home</Link>
              <span style={{ margin: '0 var(--space-2)' }}>/</span>
              <Link href="/blog" style={{ color: 'var(--gray-600)', textDecoration: 'none' }}>Blog</Link>
              <span style={{ margin: '0 var(--space-2)' }}>/</span>
              <span style={{ color: 'var(--gray-900)' }}>HTTP 402 for APIs</span>
            </nav>

            {/* Article Header */}
            <header style={{ marginBottom: 'var(--space-12)' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                background: 'rgba(99, 91, 255, 0.1)',
                border: '1px solid rgba(99, 91, 255, 0.2)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-4)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--brand-primary)',
                marginBottom: 'var(--space-6)'
              }}>
                <FileText size={14} />
                TECHNICAL
              </div>

              <h1 style={{
                fontSize: 'var(--text-5xl)',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                HTTP 402 for APIs: Making Payment-Required Responses Work
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--gray-600)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-8)'
              }}>
                <Link href="/glossary/http-402-payment-required/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>HTTP 402 Payment Required</Link> was reserved in 1999 for &ldquo;future digital payments.&rdquo; That future is now. Here&rsquo;s how to implement 402 responses that work for automated agents and human developers alike.
              </p>

              <div style={{
                display: 'flex',
                gap: 'var(--space-6)',
                fontSize: 'var(--text-sm)',
                color: 'var(--gray-600)',
                paddingTop: 'var(--space-6)',
                borderTop: '1px solid var(--gray-200)'
              }}>
                <span>By Jithin Raj & Originary Team</span>
                <span>•</span>
                <span>12 min read</span>
              </div>
            </header>

            {/* Article Content */}
            <div style={{
              fontSize: 'var(--text-base)',
              lineHeight: 1.8,
              color: 'var(--gray-700)'
            }}>
              {/* Why 402 matters */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  Why 402 matters for APIs
                </h2>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Modern APIs serve both humans and agents. When an agent hits a priced endpoint, it needs:
                </p>

                <ul style={{ paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                  <li style={{ marginBottom: 'var(--space-2)' }}><strong>Programmatic discovery</strong>: Know what to pay without parsing HTML</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}><strong>Rail flexibility</strong>: Use any payment method that provides a receipt</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}><strong>Automatic retry</strong>: Present receipt and get resource in one flow</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}><strong>Clear semantics</strong>: Distinguish payment from auth/permission issues</li>
                </ul>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  HTTP 402 provides semantic clarity. Unlike 401 (auth missing) or 403 (permission denied), 402 signals: <em>&ldquo;This resource exists, pay first.&rdquo;</em>
                </p>
              </section>

              {/* Anatomy of 402 response */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  Anatomy of a working 402 response
                </h2>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  A minimal 402 response includes four key elements:
                </p>

                <div className="card" style={{ background: 'var(--gray-50)', marginBottom: 'var(--space-6)' }}>
                  <ol style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
                    <li style={{ marginBottom: 'var(--space-2)' }}><strong>Status code</strong>: <code style={{ background: 'var(--white)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>402</code></li>
                    <li style={{ marginBottom: 'var(--space-2)' }}><strong>Human-readable detail</strong>: Why payment is required</li>
                    <li style={{ marginBottom: 'var(--space-2)' }}><strong>Machine-readable hint</strong>: Protocol, amount, currency, reference</li>
                    <li style={{ marginBottom: 'var(--space-2)' }}><strong>Instructions</strong>: How to pay and retry</li>
                  </ol>
                </div>

                <div className="card" style={{ background: 'var(--gray-900)', color: 'var(--white)', marginBottom: 'var(--space-6)' }}>
                  <pre style={{ margin: 0, fontSize: 'var(--text-sm)', fontFamily: 'monospace', whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>
{`HTTP/1.1 402 Payment Required
Content-Type: application/json
Cache-Control: no-store

{
  "detail": "Payment required to access this resource.",
  "payment": {
    "protocol": "x402",
    "amount": "0.50",
    "currency": "USD",
    "reference": "invoice-abc-789",
    "instructions": "Pay and include receipt in X-Receipt header on retry."
  }
}`}
                  </pre>
                </div>
              </section>

              {/* Receipt verification */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  Receipt verification: the critical step
                </h2>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  A receipt is cryptographic proof of payment. Your server must verify four things:
                </p>

                <div style={{ display: 'grid', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
                  <div className="card">
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                      1. Verify signature
                    </h3>
                    <p style={{ margin: 0, color: 'var(--gray-700)' }}>
                      Ensure receipt is from a trusted source using cryptographic verification
                    </p>
                  </div>

                  <div className="card">
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                      2. Check timestamp
                    </h3>
                    <p style={{ margin: 0, color: 'var(--gray-700)' }}>
                      Reject expired receipts (typically &gt;5 minutes old)
                    </p>
                  </div>

                  <div className="card">
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                      3. Match reference
                    </h3>
                    <p style={{ margin: 0, color: 'var(--gray-700)' }}>
                      Confirm receipt corresponds to the original challenge
                    </p>
                  </div>

                  <div className="card">
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                      4. Prevent replay
                    </h3>
                    <p style={{ margin: 0, color: 'var(--gray-700)' }}>
                      Track used receipts and reject duplicates
                    </p>
                  </div>
                </div>
              </section>

              {/* Implementation checklist */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  Real-world implementation checklist
                </h2>

                <div className="card" style={{ background: 'rgba(0, 212, 170, 0.05)', border: '1px solid rgba(0, 212, 170, 0.2)' }}>
                  <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
                    <li style={{ marginBottom: 'var(--space-2)' }}>✅ Return <code style={{ background: 'rgba(255,255,255,0.8)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>402</code> with machine-readable JSON hint</li>
                    <li style={{ marginBottom: 'var(--space-2)' }}>✅ Include <code style={{ background: 'rgba(255,255,255,0.8)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>reference</code> field mapped to entitlement ledger</li>
                    <li style={{ marginBottom: 'var(--space-2)' }}>✅ Set <code style={{ background: 'rgba(255,255,255,0.8)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>Cache-Control: no-store</code></li>
                    <li style={{ marginBottom: 'var(--space-2)' }}>✅ Verify receipt signature, timestamp, reference, replay</li>
                    <li style={{ marginBottom: 'var(--space-2)' }}>✅ Return deterministic error codes for invalid receipts</li>
                    <li style={{ marginBottom: 'var(--space-2)' }}>✅ Centralize challenge creation in middleware</li>
                    <li style={{ marginBottom: 'var(--space-2)' }}>✅ Log challenges and verifications for audit trails</li>
                    <li style={{ marginBottom: 'var(--space-2)' }}>✅ Support multiple payment rails (rail-agnostic)</li>
                  </ul>
                </div>
              </section>

              {/* Next steps */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  What&rsquo;s next
                </h2>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  HTTP 402 is just the transport layer. To build a complete agent-to-agent commerce system, you&rsquo;ll need receipt issuance, entitlement tracking, monitoring, and client SDKs.
                </p>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  For step-by-step implementation guides with Express, Next.js, and Cloudflare Workers, see our{' '}
                  <Link href="/integrations/x402/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>
                    x402 integration documentation
                  </Link>.
                </p>
              </section>

              {/* Related Reading */}
              <section style={{ marginTop: 'var(--space-12)', paddingTop: 'var(--space-8)', borderTop: '2px solid var(--gray-200)' }}>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                  Related Reading
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  <Link href="/guides/http-402/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>
                    HTTP 402 Payment Required - A Practical Guide
                  </Link>
                  <Link href="/glossary/x402/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>
                    What is x402?
                  </Link>
                  <Link href="/integrations/x402/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>
                    x402 Implementation Guide
                  </Link>
                </div>
              </section>
            </div>
          </div>

          {/* CTA Section */}
          <section style={{ background: 'var(--gray-50)', borderTop: '1px solid var(--gray-200)' }}>
            <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: 'var(--space-16) var(--space-6)' }}>
              <div className="card cta-card">
                <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
                  Ready to implement HTTP 402?
                </h2>
                <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)', opacity: 0.9 }}>
                  Learn how Originary helps build production HTTP 402 flows with receipts, verification, and agent-native commerce.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link
                    href="/developers"
                    className="btn btn-lg"
                    style={{ background: 'var(--white)', color: 'var(--brand-primary)', border: 'none' }}
                  >
                    <span>View Documentation</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/company/contact"
                    className="btn btn-lg btn-ghost"
                    style={{ color: 'var(--white)', border: '1px solid rgba(255,255,255,0.3)' }}
                  >
                    <span>Talk to Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

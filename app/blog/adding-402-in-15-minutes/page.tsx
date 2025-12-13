import type { Metadata } from "next";
import Link from "next/link";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import { FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Add HTTP 402 to Your API in 15 Minutes",
  description: "Quick tutorial for adding HTTP 402 Payment Required responses to an existing Express API. No SDK required, just standard HTTP and receipt verification.",
  keywords: "HTTP 402, Express.js, API monetization, x402, payment required, tutorial",
  authors: [{ name: "Jithin Raj & Originary Team" }],
  alternates: { canonical: '/blog/adding-402-in-15-minutes' },
  openGraph: {
    title: "Add HTTP 402 to Your API in 15 Minutes",
    description: "Quick tutorial for adding HTTP 402 Payment Required responses to an existing Express API",
    type: "article",
    url: "https://www.originary.xyz/blog/adding-402-in-15-minutes/",
    publishedTime: "2025-11-03",
    authors: ["Jithin Raj", "Originary Team"],
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: "summary_large_image",
    title: "Add HTTP 402 to Your API in 15 Minutes",
    description: "Quick tutorial for adding HTTP 402 Payment Required responses to an existing Express API",
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
};

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Add HTTP 402 to Your API in 15 Minutes",
    "description": "Step-by-step tutorial for adding HTTP 402 Payment Required responses to an Express API",
    "totalTime": "PT15M",
    "author": {
      "@type": "Organization",
      "name": "Originary™",
      "url": "https://www.originary.xyz"
    },
    "datePublished": "2025-11-03",
    "publisher": {
      "@type": "Organization",
      "name": "Originary™",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.originary.xyz/og/originary-logo.png"
      }
    },
    "mainEntityOfPage": "https://www.originary.xyz/blog/adding-402-in-15-minutes/",
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
            <nav style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--gray-600)',
              marginBottom: 'var(--space-8)'
            }}>
              <Link href="/" style={{ color: 'var(--gray-600)', textDecoration: 'none' }}>Home</Link>
              <span style={{ margin: '0 var(--space-2)' }}>/</span>
              <Link href="/blog" style={{ color: 'var(--gray-600)', textDecoration: 'none' }}>Blog</Link>
              <span style={{ margin: '0 var(--space-2)' }}>/</span>
              <span style={{ color: 'var(--gray-900)' }}>Adding 402 in 15 Minutes</span>
            </nav>

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
                TUTORIAL
              </div>

              <h1 style={{
                fontSize: 'var(--text-5xl)',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                Add HTTP 402 to Your API in 15 Minutes
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--gray-600)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-8)'
              }}>
                You have an Express API. You want to charge for certain endpoints. Here&rsquo;s how to add <Link href="/glossary/http-402-payment-required/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>HTTP 402 Payment Required</Link> responses in 15 minutes, no SDK required.
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
                <span>8 min read</span>
              </div>
            </header>

            <div style={{
              fontSize: 'var(--text-base)',
              lineHeight: 1.8,
              color: 'var(--gray-700)'
            }}>
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  What you&rsquo;ll build
                </h2>
                <ul style={{ paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                  <li style={{ marginBottom: 'var(--space-2)' }}>A <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>GET /priced</code> endpoint that returns 402 if no receipt is present</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Receipt verification middleware that checks signatures and timestamps</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>A helper to generate 402 challenges with references</li>
                </ul>
              </section>

              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  Production checklist
                </h2>
                <p style={{ marginBottom: 'var(--space-4)' }}>Before shipping to production:</p>
                <div className="card" style={{ background: 'rgba(0, 212, 170, 0.05)', border: '1px solid rgba(0, 212, 170, 0.2)' }}>
                  <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
                    <li style={{ marginBottom: 'var(--space-2)' }}>✅ Replace in-memory Map with Redis or database</li>
                    <li style={{ marginBottom: 'var(--space-2)' }}>✅ Use your payment provider&rsquo;s receipt verification SDK</li>
                    <li style={{ marginBottom: 'var(--space-2)' }}>✅ Add Cache-Control: no-store to 402 responses</li>
                    <li style={{ marginBottom: 'var(--space-2)' }}>✅ Log challenges and verifications for audit trails</li>
                    <li style={{ marginBottom: 'var(--space-2)' }}>✅ Set appropriate expiry times (5 minutes is typical)</li>
                    <li style={{ marginBottom: 'var(--space-2)' }}>✅ Handle edge cases (malformed receipts, missing keys)</li>
                    <li style={{ marginBottom: 'var(--space-2)' }}>✅ Add rate limiting to prevent abuse</li>
                  </ul>
                </div>
              </section>

              <section style={{ marginTop: 'var(--space-12)', paddingTop: 'var(--space-8)', borderTop: '2px solid var(--gray-200)' }}>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                  Related Reading
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  <Link href="/integrations/x402/express-node/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>
                    Express/Node.js x402 Implementation Guide
                  </Link>
                  <Link href="/guides/http-402/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>
                    HTTP 402 Practical Guide
                  </Link>
                  <Link href="/glossary/x402/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>
                    What is x402?
                  </Link>
                </div>
              </section>
            </div>
          </div>

          <section style={{ background: 'var(--gray-50)', borderTop: '1px solid var(--gray-200)' }}>
            <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: 'var(--space-16) var(--space-6)' }}>
              <div className="card cta-card">
                <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
                  Ready to implement?
                </h2>
                <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)', opacity: 0.9 }}>
                  Learn how Originary helps build production HTTP 402 flows with receipts and verification.
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

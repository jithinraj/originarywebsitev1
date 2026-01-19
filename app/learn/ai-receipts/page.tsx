import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Receipt, ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Receipts Explained: Cryptographic Proof for Agent Interactions',
  description: 'PEAC-Receipt is the JWS-signed standard for proving AI agent interactions. Learn how cryptographic receipts enable billing, compliance, attribution, and dispute resolution in the agent economy.',
  keywords: 'AI receipts explained, PEAC-Receipt format, verifiable receipts AI, cryptographic proof agents, JWS signed receipts, agent audit trail, AI compliance receipts, digital receipt standard, agent billing proof',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'article',
    title: 'AI Receipts Explained: Cryptographic Proof for Agent Interactions',
    description: 'PEAC-Receipt is the JWS-signed standard for proving AI agent interactions. The complete guide to cryptographic receipts.',
    url: 'https://www.originary.xyz/learn/ai-receipts',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Receipts Explained | PEAC-Receipt Guide',
    description: 'The JWS-signed standard for proving AI agent interactions. Essential for billing, compliance, and disputes.',
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/learn/ai-receipts',
  },
}

export default function AIReceiptsPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.originary.xyz" },
      { "@type": "ListItem", "position": 2, "name": "Learn", "item": "https://www.originary.xyz/learn" },
      { "@type": "ListItem", "position": 3, "name": "AI Receipts", "item": "https://www.originary.xyz/learn/ai-receipts" }
    ]
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "AI Receipts",
    "description": "Cryptographic proof of agent interactions - for compliance, billing, and dispute resolution",
    "author": { "@type": "Organization", "name": "Originary" },
    "publisher": { "@type": "Organization", "name": "Originary", "url": "https://www.originary.xyz" },
    "mainEntityOfPage": "https://www.originary.xyz/learn/ai-receipts"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        {/* Breadcrumb */}
        <div className="container" style={{ paddingTop: 'var(--space-6)' }}>
          <Link href="/learn" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            color: 'var(--gray-500)',
            fontSize: 'var(--text-sm)',
            textDecoration: 'none'
          }}>
            <ArrowLeft size={14} />
            Back to Learn
          </Link>
        </div>

        {/* Hero */}
        <section className="section" style={{
          paddingTop: 'var(--space-10)',
          paddingBottom: 'var(--space-12)',
          borderBottom: '1px solid var(--gray-100)'
        }}>
          <div className="container">
            <div style={{ maxWidth: '720px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                background: 'rgba(0, 212, 170, 0.1)',
                border: '1px solid rgba(0, 212, 170, 0.2)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-4)',
                marginBottom: 'var(--space-6)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                color: 'var(--brand-secondary)'
              }}>
                <Receipt size={14} />
                <span>LEARN</span>
              </div>

              <h1 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.03em',
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                AI Receipts
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.6,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-6)'
              }}>
                Cryptographically signed proof of agent interactions - the foundation for billing, compliance, and dispute resolution.
              </p>

              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-400)' }}>
                6 min read
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section" style={{ paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-12)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 'var(--space-16)' }} className="article-layout">
              {/* Sidebar TOC */}
              <aside style={{ position: 'sticky', top: '100px', alignSelf: 'start' }} className="article-sidebar">
                <div style={{
                  padding: 'var(--space-6)',
                  background: 'var(--gray-50)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--gray-100)'
                }}>
                  <h4 style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600,
                    color: 'var(--gray-400)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: 'var(--space-4)'
                  }}>
                    On this page
                  </h4>
                  <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    {['Key Takeaways', 'What is a Receipt?', 'Why Receipts Matter', 'Anatomy of a PEAC-Receipt', 'Use Cases', 'Implementation'].map((item) => (
                      <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--gray-600)',
                        textDecoration: 'none'
                      }}>
                        {item}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Main Content */}
              <article style={{ maxWidth: '680px' }}>
                {/* Key Takeaways Box */}
                <div id="key-takeaways" style={{
                  background: 'rgba(0, 212, 170, 0.05)',
                  border: '1px solid rgba(0, 212, 170, 0.15)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-8)',
                  marginBottom: 'var(--space-12)'
                }}>
                  <h2 style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--gray-900)'
                  }}>
                    Key Takeaways
                  </h2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      'Receipts are JWS-signed JSON proving what happened in an interaction',
                      'Verifiable offline using public keys. No API callback.',
                      'Carried in the PEAC-Receipt HTTP header'
                    ].map((takeaway, i) => (
                      <li key={i} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--space-3)',
                        marginBottom: 'var(--space-3)',
                        fontSize: 'var(--text-base)',
                        color: 'var(--gray-700)',
                        lineHeight: 1.6
                      }}>
                        <CheckCircle size={18} style={{ color: 'var(--brand-secondary)', flexShrink: 0, marginTop: '3px' }} />
                        {takeaway}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What is a Receipt? */}
                <section id="what-is-a-receipt?" style={{ marginBottom: 'var(--space-12)' }}>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--gray-900)'
                  }}>
                    What is a Receipt?
                  </h2>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--gray-600)', marginBottom: 'var(--space-4)' }}>
                    An <strong>AI receipt</strong> (or PEAC-Receipt) is a cryptographically signed JSON object that proves what happened during an agent interaction. Just like a physical receipt from a store, it records who transacted, what was exchanged, when it happened, and under what terms.
                  </p>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--gray-600)' }}>
                    The key difference: AI receipts are machine-readable, tamper-proof, and verifiable by anyone with the issuer&apos;s public key - no phone call to customer service required.
                  </p>
                </section>

                {/* Why Receipts Matter */}
                <section id="why-receipts-matter" style={{ marginBottom: 'var(--space-12)' }}>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--gray-900)'
                  }}>
                    Why Receipts Matter
                  </h2>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                    <div>
                      <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>Billing proof</h4>
                      <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--gray-600)' }}>
                        No more "he said, she said" disputes. The signature proves what was used.
                      </p>
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>Audit trails regulators accept</h4>
                      <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--gray-600)' }}>
                        Timestamped, tamper-evident records of every agent action. GDPR, SOC 2, EU AI Act compliance becomes straightforward when you can produce signed receipts on demand.
                      </p>
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>Attribution chains</h4>
                      <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--gray-600)' }}>
                        Content usage gets recorded. Creators verify credit and compensation.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Anatomy of a PEAC-Receipt */}
                <section id="anatomy-of-a-peac-receipt" style={{ marginBottom: 'var(--space-12)' }}>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--gray-900)'
                  }}>
                    Anatomy of a PEAC-Receipt
                  </h2>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--gray-600)', marginBottom: 'var(--space-6)' }}>
                    A PEAC-Receipt contains several key fields:
                  </p>

                  <div style={{
                    background: 'var(--gray-900)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-6)',
                    marginBottom: 'var(--space-6)',
                    overflow: 'auto'
                  }}>
                    <pre style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-300)',
                      margin: 0,
                      lineHeight: 1.6
                    }}>
{`{
  "iss": "api.example.com",        // Issuer
  "sub": "agent-xyz-123",          // Agent ID
  "aud": "originary.xyz",          // Audience
  "iat": 1702834800,               // Issued at
  "exp": 1702921200,               // Expiration
  "rid": "rcpt_abc123",            // Receipt ID
  "resource": "/v1/translate",     // Resource accessed
  "action": "POST",                // HTTP method
  "payment": {
    "amount": "0.001",
    "currency": "USD",
    "evidence": "pi_xxx"           // Payment proof
  },
  "aipref_hash": "sha256:abc..."   // Policy snapshot
}`}
                    </pre>
                  </div>

                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--gray-600)' }}>
                    The entire payload is signed using JWS (JSON Web Signature), typically with Ed25519. The signature can be verified using the issuer&apos;s public key referenced in <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px' }}>/.well-known/peac.txt</code> (which points to a JWKS endpoint).
                  </p>
                </section>

                {/* Use Cases */}
                <section id="use-cases" style={{ marginBottom: 'var(--space-12)' }}>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--gray-900)'
                  }}>
                    Use Cases
                  </h2>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      { term: 'API providers', def: 'Issue receipts to prove service delivery; resolve billing disputes instantly' },
                      { term: 'Content platforms', def: 'Track AI consumption of licensed content with verifiable attribution' },
                      { term: 'Enterprise AI', def: 'Maintain audit trails for regulatory compliance (GDPR, SOC2, etc.)' },
                      { term: 'Agent frameworks', def: 'Collect receipts to track costs and prove work completion' }
                    ].map((item, i) => (
                      <li key={i} style={{
                        padding: 'var(--space-4) 0',
                        borderBottom: i < 3 ? '1px solid var(--gray-100)' : 'none'
                      }}>
                        <strong style={{ color: 'var(--gray-900)' }}>{item.term}</strong>
                        <span style={{ color: 'var(--gray-600)' }}> - {item.def}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Implementation */}
                <section id="implementation" style={{ marginBottom: 'var(--space-12)' }}>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--gray-900)'
                  }}>
                    Implementation
                  </h2>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--gray-600)', marginBottom: 'var(--space-6)' }}>
                    Start working with receipts using Originary&apos;s tools:
                  </p>

                  <div className="grid grid-2" style={{ gap: 'var(--space-4)' }}>
                    <Link href="/receipts" className="card" style={{ textDecoration: 'none', padding: 'var(--space-5)' }}>
                      <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>Receipts Overview</h4>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Product documentation</p>
                    </Link>
                    <Link href="/verify" className="card" style={{ textDecoration: 'none', padding: 'var(--space-5)' }}>
                      <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>Verify API</h4>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Verify receipts online</p>
                    </Link>
                  </div>
                </section>

                {/* Related */}
                <section style={{
                  padding: 'var(--space-8)',
                  background: 'var(--gray-50)',
                  borderRadius: 'var(--radius-lg)',
                  marginTop: 'var(--space-16)'
                }}>
                  <h3 style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-6)',
                    color: 'var(--gray-900)'
                  }}>
                    Related Articles
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    <Link href="/learn/what-is-agentic-commerce" style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: 'var(--gray-700)',
                      textDecoration: 'none'
                    }}>
                      <span>What is Agentic Commerce?</span>
                      <ArrowRight size={16} style={{ color: 'var(--brand-primary)' }} />
                    </Link>
                    <Link href="/learn/ai-consent-and-attribution" style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: 'var(--gray-700)',
                      textDecoration: 'none'
                    }}>
                      <span>AI Consent & Attribution</span>
                      <ArrowRight size={16} style={{ color: 'var(--brand-primary)' }} />
                    </Link>
                  </div>
                </section>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />

    </>
  )
}

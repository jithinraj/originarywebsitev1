import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { CreditCard, ArrowLeft, CheckCircle, ArrowRight, ExternalLink, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HTTP 402: The Web Standard for Machine-Payable APIs',
  description: 'HTTP 402 Payment Required enables pay-per-request APIs for AI agents. Learn about x402 headers, instant payments, and PEAC receipts.',
  keywords: 'HTTP 402 Payment Required, x402 protocol, machine-payable APIs, AI agent payments, pay-per-request API, programmatic payments, agent commerce, micropayments API, instant API payments, machine-to-machine payments, HTTP status code 402, web monetization',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'article',
    title: 'HTTP 402 Payment Required: Machine-Payable APIs',
    description: 'The dormant HTTP status code is finally coming to life. Learn how 402 enables real-time, programmatic payments between AI agents.',
    url: '/learn/http-402-ai-payments',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HTTP 402: Machine-Payable APIs',
    description: 'The dormant HTTP status code enabling real-time AI agent payments - no subscriptions or API keys required.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/learn/http-402-ai-payments',
  },
}

export default function HTTP402Page() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.originary.xyz" },
      { "@type": "ListItem", "position": 2, "name": "Learn", "item": "https://www.originary.xyz/learn" },
      { "@type": "ListItem", "position": 3, "name": "HTTP 402 & AI Payments", "item": "https://www.originary.xyz/learn/http-402-ai-payments" }
    ]
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "HTTP 402 & AI Payments",
    "description": "How HTTP 402 enables real-time, programmatic payments between AI agents",
    "author": { "@type": "Organization", "name": "Originary" },
    "publisher": { "@type": "Organization", "name": "Originary", "url": "https://www.originary.xyz" },
    "mainEntityOfPage": "https://www.originary.xyz/learn/http-402-ai-payments"
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
            color: 'var(--text-tertiary)',
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
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <div className="container">
            <div style={{ maxWidth: '720px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                background: 'var(--accent-tertiary-subtle)',
                border: '1px solid rgba(255, 107, 53, 0.2)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-4)',
                marginBottom: 'var(--space-6)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                color: 'var(--brand-accent)'
              }}>
                <CreditCard size={14} />
                <span>LEARN</span>
              </div>

              <h1 style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.03em',
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                HTTP 402 & AI Payments
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-6)'
              }}>
                The web standard for machine-payable APIs - enabling real-time, programmatic payments between AI agents.
              </p>

              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
                10 min read
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
                  background: 'var(--surface-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)'
                }}>
                  <h4 style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: 'var(--space-4)'
                  }}>
                    On this page
                  </h4>
                  <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    {['Key Takeaways', 'What is HTTP 402?', 'Why It Matters for AI', 'How It Works', 'x402 Protocol', 'Further Reading'].map((item) => (
                      <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-secondary)',
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
                  background: 'var(--accent-tertiary-faint)',
                  border: '1px solid rgba(255, 107, 53, 0.15)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-8)',
                  marginBottom: 'var(--space-12)'
                }}>
                  <h2 style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--text-primary)'
                  }}>
                    Key Takeaways
                  </h2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      'HTTP 402 is a standard status code for "Payment Required" - reserved since 1999',
                      'Enables pay-per-request APIs without subscriptions or pre-purchased credits',
                      'x402 is the modern implementation with pricing headers and payment proofs',
                      'Combined with PEAC receipts, creates a complete payment + audit trail'
                    ].map((takeaway, i) => (
                      <li key={i} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--space-3)',
                        marginBottom: 'var(--space-3)',
                        fontSize: 'var(--text-base)',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6
                      }}>
                        <CheckCircle size={18} style={{ color: 'var(--brand-accent)', flexShrink: 0, marginTop: '3px' }} />
                        {takeaway}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What is HTTP 402? */}
                <section id="what-is-http-402?" style={{ marginBottom: 'var(--space-12)' }}>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--text-primary)'
                  }}>
                    What is HTTP 402?
                  </h2>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                    <strong>HTTP 402 Payment Required</strong> is a status code that was defined in HTTP/1.1 back in 1999 but marked as &ldquo;reserved for future use.&rdquo; The web wasn&apos;t ready for native payments then - no infrastructure existed to handle micropayments programmatically.
                  </p>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                    Today, with AI agents needing to pay for API access in real-time, HTTP 402 has finally found its purpose. When a server returns 402, it&apos;s saying: &ldquo;I can fulfill your request, but you need to pay first.&rdquo;
                  </p>
                </section>

                {/* Why It Matters for AI */}
                <section id="why-it-matters-for-ai" style={{ marginBottom: 'var(--space-12)' }}>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--text-primary)'
                  }}>
                    Why It Matters for AI
                  </h2>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                    Traditional API monetization requires humans to:
                  </p>
                  <ul style={{ paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                    <li style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-2)' }}>Sign up for an account</li>
                    <li style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-2)' }}>Enter credit card information</li>
                    <li style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-2)' }}>Purchase credits or subscribe to a plan</li>
                    <li style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-2)' }}>Manage API keys</li>
                  </ul>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                    AI agents can&apos;t do any of this. HTTP 402 enables agents to discover pricing, pay instantly, and access resources - all in a single HTTP request/response cycle. No accounts. No subscriptions. No human in the loop.
                  </p>
                </section>

                {/* How It Works */}
                <section id="how-it-works" style={{ marginBottom: 'var(--space-12)' }}>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--text-primary)'
                  }}>
                    How It Works
                  </h2>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    {[
                      { step: '1', title: 'Agent makes request', desc: 'Agent sends HTTP request to API endpoint without payment' },
                      { step: '2', title: 'Server returns 402', desc: 'Server responds with pricing info in headers (amount, currency, payment methods)' },
                      { step: '3', title: 'Agent makes payment', desc: 'Agent processes payment via supported method (crypto, Stripe, etc.)' },
                      { step: '4', title: 'Agent retries with proof', desc: 'Agent retries request with payment proof in header' },
                      { step: '5', title: 'Server fulfills + receipt', desc: 'Server validates payment, fulfills request, returns PEAC-Receipt' }
                    ].map((item) => (
                      <div key={item.step} style={{
                        display: 'flex',
                        gap: 'var(--space-4)',
                        padding: 'var(--space-4)',
                        background: 'var(--surface-subtle)',
                        borderRadius: 'var(--radius-md)'
                      }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: 'var(--brand-accent)',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: 'var(--text-sm)',
                          flexShrink: 0
                        }}>
                          {item.step}
                        </div>
                        <div>
                          <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-1)', color: 'var(--text-primary)' }}>{item.title}</h4>
                          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* x402 Protocol */}
                <section id="x402-protocol" style={{ marginBottom: 'var(--space-12)' }}>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--text-primary)'
                  }}>
                    x402 Protocol
                  </h2>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                    <strong>x402</strong> is the practical implementation of HTTP 402 for machine payments. Originary provides integration tooling for x402, which defines:
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 'var(--space-6)' }}>
                    {[
                      { term: '402 response body', def: 'Machine-readable pricing info (amount, currency, accepted methods)' },
                      { term: 'Payment proof', def: 'Cryptographic proof submitted with the retry request' },
                      { term: 'Payment methods', def: 'Standard identifiers for crypto, Stripe, and other rails' },
                      { term: 'Error codes', def: 'Specific failure modes (insufficient funds, expired proof, etc.)' }
                    ].map((item, i) => (
                      <li key={i} style={{
                        padding: 'var(--space-4) 0',
                        borderBottom: i < 3 ? '1px solid var(--border-subtle)' : 'none'
                      }}>
                        <strong style={{ color: 'var(--text-primary)' }}>{item.term}</strong>
                        <span style={{ color: 'var(--text-secondary)' }}> - {item.def}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/integrations/x402" className="card" style={{
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'var(--space-5)'
                  }}>
                    <div>
                      <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-1)', color: 'var(--text-primary)' }}>x402 Integration Guide</h4>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Implement x402 in your API or agent</p>
                    </div>
                    <ArrowRight size={18} style={{ color: 'var(--accent-brand)' }} />
                  </Link>
                </section>

                {/* Further Reading - Hub Section */}
                <section id="further-reading" style={{ marginBottom: 'var(--space-12)' }}>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--text-primary)'
                  }}>
                    Further Reading
                  </h2>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                    Deep dives into HTTP 402 and machine payments from our blog:
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    <Link
                      href="/blog/what-is-http-402"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-4)',
                        padding: 'var(--space-5)',
                        background: 'var(--surface-elevated)',
                        border: '1px solid var(--border-default)',
                        borderRadius: 'var(--radius-lg)',
                        textDecoration: 'none'
                      }}
                    >
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--accent-brand-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <BookOpen size={20} style={{ color: 'var(--accent-brand)' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-1)', color: 'var(--text-primary)' }}>
                          What is HTTP 402?
                        </h4>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>
                          How PEAC uses 402 for agent payments
                        </p>
                      </div>
                      <ArrowRight size={16} style={{ color: 'var(--text-muted)' }} />
                    </Link>

                    <Link
                      href="/blog/from-detection-to-settlement-ai-paywall-peac-http-402"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-4)',
                        padding: 'var(--space-5)',
                        background: 'var(--surface-elevated)',
                        border: '1px solid var(--border-default)',
                        borderRadius: 'var(--radius-lg)',
                        textDecoration: 'none'
                      }}
                    >
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--accent-tertiary-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <BookOpen size={20} style={{ color: 'var(--brand-accent)' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-1)', color: 'var(--text-primary)' }}>
                          From Detection to Settlement
                        </h4>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>
                          Using PEAC to turn AI traffic into revenue
                        </p>
                      </div>
                      <ArrowRight size={16} style={{ color: 'var(--text-muted)' }} />
                    </Link>

                    <a
                      href="https://www.x402.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-4)',
                        padding: 'var(--space-5)',
                        background: 'var(--surface-elevated)',
                        border: '1px solid var(--border-default)',
                        borderRadius: 'var(--radius-lg)',
                        textDecoration: 'none'
                      }}
                    >
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--accent-secondary-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <ExternalLink size={20} style={{ color: 'var(--accent-secondary)' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-1)', color: 'var(--text-primary)' }}>
                          x402.org - Official Specification
                        </h4>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>
                          Full protocol documentation
                        </p>
                      </div>
                      <ArrowRight size={16} style={{ color: 'var(--text-muted)' }} />
                    </a>
                  </div>
                </section>

                {/* Related */}
                <section style={{
                  padding: 'var(--space-8)',
                  background: 'var(--surface-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  marginTop: 'var(--space-16)'
                }}>
                  <h3 style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-6)',
                    color: 'var(--text-primary)'
                  }}>
                    Related Articles
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    <Link href="/learn/what-is-agentic-commerce" style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none'
                    }}>
                      <span>What is Agentic Commerce?</span>
                      <ArrowRight size={16} style={{ color: 'var(--accent-brand)' }} />
                    </Link>
                    <Link href="/learn/ai-receipts" style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none'
                    }}>
                      <span>AI Receipts</span>
                      <ArrowRight size={16} style={{ color: 'var(--accent-brand)' }} />
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

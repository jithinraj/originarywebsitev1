import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ShoppingCart, ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What is Agentic Commerce? | AI Agent Transactions Guide',
  description: 'Agentic commerce enables AI agents to autonomously buy, sell, and transact. Learn about machine-readable pricing and programmatic payments.',
  keywords: 'agentic commerce definition, agent economy explained, AI agent transactions, autonomous commerce, machine-to-machine payments, AI agents buying selling, agent transactions guide, M2M commerce, programmatic payments',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'article',
    title: 'What is Agentic Commerce? | AI Agent Transactions Guide',
    description: 'Agentic commerce enables AI agents to autonomously buy, sell, and transact. The definitive guide to the agent economy.',
    url: '/learn/what-is-agentic-commerce',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is Agentic Commerce? Complete Guide',
    description: 'The economic layer for AI agents - autonomous buying, selling, and transacting. Essential guide for developers.',
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/learn/what-is-agentic-commerce',
  },
}

export default function AgenticCommercePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.originary.xyz" },
      { "@type": "ListItem", "position": 2, "name": "Learn", "item": "https://www.originary.xyz/learn" },
      { "@type": "ListItem", "position": 3, "name": "What is Agentic Commerce?", "item": "https://www.originary.xyz/learn/what-is-agentic-commerce" }
    ]
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What is Agentic Commerce?",
    "description": "The economic layer for AI agents - autonomous buying, selling, and transacting between machines",
    "author": { "@type": "Organization", "name": "Originary" },
    "publisher": { "@type": "Organization", "name": "Originary", "url": "https://www.originary.xyz" },
    "mainEntityOfPage": "https://www.originary.xyz/learn/what-is-agentic-commerce"
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
                background: 'var(--accent-brand-subtle)',
                border: '1px solid var(--accent-brand-muted)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-4)',
                marginBottom: 'var(--space-6)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                color: 'var(--accent-brand)'
              }}>
                <ShoppingCart size={14} />
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
                What is Agentic Commerce?
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-6)'
              }}>
                The economic layer for AI agents - enabling autonomous buying, selling, and transacting between machines.
              </p>

              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
                8 min read
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
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
                    {['Key Takeaways', 'Definition', 'How It Works', 'Key Components', 'Use Cases', 'Getting Started'].map((item) => (
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
                  background: 'var(--accent-brand-faint)',
                  border: '1px solid var(--accent-brand-muted)',
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
                      'Agentic commerce enables AI agents to autonomously buy, sell, and transact',
                      'Needs machine-readable pricing, programmatic payments, verifiable receipts',
                      'Different from traditional e-commerce - no human in the loop per transaction'
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
                        <CheckCircle size={18} style={{ color: 'var(--accent-brand)', flexShrink: 0, marginTop: '3px' }} />
                        {takeaway}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Definition */}
                <section id="definition" style={{ marginBottom: 'var(--space-12)' }}>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--text-primary)'
                  }}>
                    Definition
                  </h2>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                    <strong>Agentic commerce</strong> is the economic layer for AI agents to autonomously participate in commercial transactions. Unlike traditional e-commerce where humans initiate and approve purchases, agentic commerce lets machines discover services, negotiate terms, make payments, and verify delivery - all without human intervention for each transaction.
                  </p>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                    Think of it as the difference between a human using a shopping website versus an AI assistant that can autonomously procure resources, pay for API calls, and manage subscriptions on your behalf. (This isn't theory - we're seeing this in production as of late 2025.)
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
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                    Agentic commerce can't work without these infrastructure components:
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    {[
                      { step: '1', title: 'Policy Discovery', desc: 'Agents discover available services and their terms via machine-readable files like peac.txt' },
                      { step: '2', title: 'Pricing Negotiation', desc: 'Services advertise pricing in HTTP headers; agents evaluate and select based on budget constraints' },
                      { step: '3', title: 'Payment Execution', desc: 'Agents make programmatic payments via HTTP 402, cryptocurrency, or pre-authorized billing' },
                      { step: '4', title: 'Receipt Generation', desc: 'Every transaction produces a cryptographically signed receipt for audit and dispute resolution' },
                      { step: '5', title: 'Verification', desc: 'Receipts can be verified offline using Ed25519 signatures - no callback to the issuer required (watch out: key rotation needs planning)' }
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
                          background: 'var(--accent-brand)',
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

                {/* Key Components */}
                <section id="key-components" style={{ marginBottom: 'var(--space-12)' }}>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--text-primary)'
                  }}>
                    Key Components
                  </h2>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                    A complete agentic commerce stack includes:
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      { term: 'Machine-readable pricing', def: 'Prices in HTTP headers or structured files. Not HTML meant for humans.' },
                      { term: 'Programmatic payments', def: 'Payment rails agents can invoke without human approval - HTTP 402, stablecoins, pre-auth billing' },
                      { term: 'Verifiable receipts', def: 'Cryptographic proof for billing, compliance, disputes' },
                      { term: 'Budget constraints', def: 'Guardrails limiting autonomous spend (you set the ceiling, agent stays under it)' }
                    ].map((item, i) => (
                      <li key={i} style={{
                        padding: 'var(--space-4) 0',
                        borderBottom: i < 4 ? '1px solid var(--border-subtle)' : 'none'
                      }}>
                        <strong style={{ color: 'var(--text-primary)' }}>{item.term}</strong>
                        <span style={{ color: 'var(--text-secondary)' }}> - {item.def}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Use Cases */}
                <section id="use-cases" style={{ marginBottom: 'var(--space-12)' }}>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--text-primary)'
                  }}>
                    Use Cases
                  </h2>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                    <div>
                      <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>API Consumption</h4>
                      <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        Agents pay for API calls on the fly. Weather data, translation, image generation. No credit pre-purchase required - they pay per call as they execute tasks.
                      </p>
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>Content Licensing</h4>
                      <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        Per-use payments to creators for training data, stock images, reference materials. Attribution included.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Getting Started */}
                <section id="getting-started" style={{ marginBottom: 'var(--space-12)' }}>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--text-primary)'
                  }}>
                    Getting Started
                  </h2>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                    To enable agentic commerce for your service or agent, Originary provides the infrastructure and tools built on open protocols:
                  </p>

                  <div className="grid grid-2" style={{ gap: 'var(--space-4)' }}>
                    <Link href="/integrations/acp" className="card" style={{ textDecoration: 'none', padding: 'var(--space-5)' }}>
                      <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>Agentic Commerce Protocol</h4>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Integration guide for ACP</p>
                    </Link>
                    <Link href="/integrations/x402" className="card" style={{ textDecoration: 'none', padding: 'var(--space-5)' }}>
                      <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>HTTP 402 Payments</h4>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Machine-payable APIs</p>
                    </Link>
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
                    <Link href="/learn/http-402-ai-payments" style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none'
                    }}>
                      <span>HTTP 402 & AI Payments</span>
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

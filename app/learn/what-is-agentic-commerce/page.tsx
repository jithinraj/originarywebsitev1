import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ShoppingCart, ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What is Agentic Commerce? The Complete Guide to AI Agent Transactions',
  description: 'Agentic commerce enables AI agents to autonomously buy, sell, and transact. Learn about machine-readable pricing, programmatic payments, and the infrastructure powering the $1T+ agent economy.',
  keywords: 'agentic commerce definition, agent economy explained, AI agent transactions, autonomous commerce, machine-to-machine payments, AI agents buying selling, agent transactions guide, M2M commerce, programmatic payments',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'article',
    title: 'What is Agentic Commerce? The Complete Guide to AI Agent Transactions',
    description: 'Agentic commerce enables AI agents to autonomously buy, sell, and transact. The definitive guide to the agent economy.',
    url: 'https://www.originary.xyz/learn/what-is-agentic-commerce',
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
                background: 'rgba(99, 91, 255, 0.1)',
                border: '1px solid rgba(99, 91, 255, 0.2)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-4)',
                marginBottom: 'var(--space-6)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                color: 'var(--brand-primary)'
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
                color: 'var(--gray-900)'
              }}>
                What is Agentic Commerce?
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.6,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-6)'
              }}>
                The economic layer for AI agents - enabling autonomous buying, selling, and transacting between machines.
              </p>

              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-400)' }}>
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
                    {['Key Takeaways', 'Definition', 'How It Works', 'Key Components', 'Use Cases', 'Getting Started'].map((item) => (
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
                  background: 'rgba(99, 91, 255, 0.05)',
                  border: '1px solid rgba(99, 91, 255, 0.15)',
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
                      'Agentic commerce enables AI agents to autonomously buy, sell, and transact',
                      'Requires machine-readable pricing, programmatic payments, and verifiable receipts',
                      'Different from traditional e-commerce - no human in the loop for each transaction',
                      'Built on open protocols like HTTP 402 and PEAC for interoperability'
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
                        <CheckCircle size={18} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '3px' }} />
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
                    color: 'var(--gray-900)'
                  }}>
                    Definition
                  </h2>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--gray-600)', marginBottom: 'var(--space-4)' }}>
                    <strong>Agentic commerce</strong> is the economic layer that enables AI agents to autonomously participate in commercial transactions. Unlike traditional e-commerce where humans initiate and approve purchases, agentic commerce allows machines to discover services, negotiate terms, make payments, and verify delivery - all without human intervention for each transaction.
                  </p>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--gray-600)' }}>
                    Think of it as the difference between a human using a shopping website versus an AI assistant that can autonomously procure resources, pay for API calls, and manage subscriptions on your behalf.
                  </p>
                </section>

                {/* How It Works */}
                <section id="how-it-works" style={{ marginBottom: 'var(--space-12)' }}>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--gray-900)'
                  }}>
                    How It Works
                  </h2>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--gray-600)', marginBottom: 'var(--space-6)' }}>
                    Agentic commerce requires several infrastructure components working together:
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    {[
                      { step: '1', title: 'Policy Discovery', desc: 'Agents discover available services and their terms via machine-readable files like peac.txt' },
                      { step: '2', title: 'Pricing Negotiation', desc: 'Services advertise pricing in HTTP headers; agents evaluate and select based on budget constraints' },
                      { step: '3', title: 'Payment Execution', desc: 'Agents make programmatic payments via HTTP 402, cryptocurrency, or pre-authorized billing' },
                      { step: '4', title: 'Receipt Generation', desc: 'Every transaction produces a cryptographically signed receipt for audit and dispute resolution' }
                    ].map((item) => (
                      <div key={item.step} style={{
                        display: 'flex',
                        gap: 'var(--space-4)',
                        padding: 'var(--space-4)',
                        background: 'var(--gray-50)',
                        borderRadius: 'var(--radius-md)'
                      }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: 'var(--brand-primary)',
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
                          <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-1)', color: 'var(--gray-900)' }}>{item.title}</h4>
                          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>{item.desc}</p>
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
                    color: 'var(--gray-900)'
                  }}>
                    Key Components
                  </h2>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--gray-600)', marginBottom: 'var(--space-6)' }}>
                    A complete agentic commerce stack includes:
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      { term: 'Machine-readable pricing', def: 'Prices advertised in HTTP headers or structured files, not just HTML for humans' },
                      { term: 'Programmatic payments', def: 'Payment rails that agents can invoke without human approval (HTTP 402, stablecoins)' },
                      { term: 'Verifiable receipts', def: 'Cryptographic proof of transactions for billing, compliance, and dispute resolution' },
                      { term: 'Policy discovery', def: 'Agents can find and understand terms of service before transacting' },
                      { term: 'Budget constraints', def: 'Guardrails that limit what agents can spend autonomously' }
                    ].map((item, i) => (
                      <li key={i} style={{
                        padding: 'var(--space-4) 0',
                        borderBottom: i < 4 ? '1px solid var(--gray-100)' : 'none'
                      }}>
                        <strong style={{ color: 'var(--gray-900)' }}>{item.term}</strong>
                        <span style={{ color: 'var(--gray-600)' }}> - {item.def}</span>
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
                    color: 'var(--gray-900)'
                  }}>
                    Use Cases
                  </h2>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                    <div>
                      <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>API Consumption</h4>
                      <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--gray-600)' }}>
                        Agents autonomously pay for API calls - weather data, translation, image generation - as they execute tasks, without pre-purchasing credits.
                      </p>
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>Content Licensing</h4>
                      <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--gray-600)' }}>
                        AI systems pay content creators per-use for training data, stock images, or reference materials with automatic attribution.
                      </p>
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>Agent-to-Agent Services</h4>
                      <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--gray-600)' }}>
                        Specialized agents sell capabilities to generalist agents - a coding agent purchasing compute from an infrastructure agent.
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
                    color: 'var(--gray-900)'
                  }}>
                    Getting Started
                  </h2>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--gray-600)', marginBottom: 'var(--space-6)' }}>
                    To enable agentic commerce for your service or agent, Originary provides the infrastructure and tools built on open protocols:
                  </p>

                  <div className="grid grid-2" style={{ gap: 'var(--space-4)' }}>
                    <Link href="/integrations/acp" className="card" style={{ textDecoration: 'none', padding: 'var(--space-5)' }}>
                      <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>Agentic Commerce Protocol</h4>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Integration guide for ACP</p>
                    </Link>
                    <Link href="/integrations/x402" className="card" style={{ textDecoration: 'none', padding: 'var(--space-5)' }}>
                      <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>HTTP 402 Payments</h4>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Machine-payable APIs</p>
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
                    <Link href="/learn/http-402-ai-payments" style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: 'var(--gray-700)',
                      textDecoration: 'none'
                    }}>
                      <span>HTTP 402 & AI Payments</span>
                      <ArrowRight size={16} style={{ color: 'var(--brand-primary)' }} />
                    </Link>
                    <Link href="/learn/ai-receipts" style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: 'var(--gray-700)',
                      textDecoration: 'none'
                    }}>
                      <span>AI Receipts</span>
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

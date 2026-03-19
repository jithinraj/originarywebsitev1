import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { BookOpen, ArrowRight, Receipt, CreditCard, Shield, ShoppingCart, Sparkles, TrendingUp, Users, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Learn: Agentic Commerce, Receipts & Payments',
  description: 'Guides on agentic commerce, verifiable receipts, HTTP 402 payments, and AI consent. Essential reading for building autonomous AI systems.',
  keywords: 'agentic commerce tutorial, AI receipts explained, HTTP 402 guide, machine payments, AI consent, agent economy, PEAC Protocol guide, autonomous AI transactions, AI infrastructure learning, agent-to-agent payments',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Learn: Agentic Commerce, Receipts & Payments',
    description: 'Guides on agentic commerce, verifiable receipts, HTTP 402 payments, and AI consent.',
    url: '/learn',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn: Agentic Commerce, Receipts & Payments',
    description: 'Guides on agentic commerce, verifiable receipts, HTTP 402 payments, and AI consent.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/learn',
  },
}

const learnArticles = [
  {
    slug: 'what-is-agentic-commerce',
    title: 'What is Agentic Commerce?',
    subtitle: 'The Economic Layer for AI Agents',
    description: 'What happens when machines need to buy API calls, pay for content access, or settle charges with other agents. Covers policy discovery, pricing headers, payment rails, and signed receipts.',
    icon: ShoppingCart,
    color: 'var(--accent-brand-subtle)',
    iconColor: 'var(--accent-brand)',
    readTime: '8 min read',
    featured: true,
    topics: ['Agent Economy', 'Machine Payments', 'API Monetization']
  },
  {
    slug: 'ai-receipts',
    title: 'AI Receipts Explained',
    subtitle: 'Verifiable Records of Agent Interactions',
    description: 'What a signed interaction record contains, how verification works, and why server logs are not portable proof. Includes the JWS payload structure and Ed25519 verification flow.',
    icon: Receipt,
    color: 'var(--accent-secondary-subtle)',
    iconColor: 'var(--accent-secondary)',
    readTime: '6 min read',
    featured: false,
    topics: ['Interaction Records', 'JWS Signatures', 'Audit Trails']
  },
  {
    slug: 'http-402-ai-payments',
    title: 'HTTP 402 & AI Payments',
    subtitle: 'The Web Standard for Machine-Payable APIs',
    description: 'How HTTP 402 Payment Required works for machine-to-machine payments. The request/challenge/payment/receipt cycle, x402 protocol headers, and what distinguishes 402 from 401 and 403.',
    icon: CreditCard,
    color: 'var(--accent-tertiary-subtle)',
    iconColor: 'var(--brand-accent)',
    readTime: '10 min read',
    featured: false,
    topics: ['HTTP 402', 'x402 Protocol', 'Pay-per-Request']
  },
  {
    slug: 'ai-consent-and-attribution',
    title: 'AI Consent & Attribution',
    subtitle: 'Machine-Readable Permissions for AI',
    description: 'How publishers declare what agents may do with their content (AIPREF, peac.txt) and how agents prove they followed those terms. The gap between robots.txt and what AI actually needs.',
    icon: Shield,
    color: 'var(--accent-brand-subtle)',
    iconColor: 'var(--accent-brand)',
    readTime: '7 min read',
    featured: false,
    topics: ['AIPREF', 'Content Licensing', 'AI Compliance']
  }
]

export default function LearnPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.originary.xyz"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Learn",
        "item": "https://www.originary.xyz/learn"
      }
    ]
  }

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Learn About AI Infrastructure",
    "description": "In-depth guides on agentic commerce, verifiable receipts, HTTP 402 payments, and AI consent infrastructure",
    "url": "https://www.originary.xyz/learn",
    "publisher": {
      "@type": "Organization",
      "name": "Originary",
      "url": "https://www.originary.xyz"
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": learnArticles.length,
      "itemListElement": learnArticles.map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": article.title,
        "description": article.description,
        "url": `https://www.originary.xyz/learn/${article.slug}`
      }))
    }
  }

  const educationalOrgJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Originary Learn",
    "description": "Educational resources for building with AI infrastructure",
    "url": "https://www.originary.xyz/learn",
    "sameAs": ["https://www.originary.xyz"]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrgJsonLd) }}
      />
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        {/* Hero */}
        <section className="section" style={{
          background: 'var(--gradient-mesh)',
          paddingTop: 'var(--space-20)',
          paddingBottom: 'var(--space-16)'
        }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                background: 'var(--accent-brand-subtle)',
                border: '1px solid var(--accent-brand-muted)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-5)',
                marginBottom: 'var(--space-6)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--accent-brand)'
              }}>
                <BookOpen size={16} />
                <span>LEARNING CENTER</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-5xl))',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)'
              }}>
                How agents <span className="text-gradient">pay, prove, and comply</span>
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-10)',
                maxWidth: '650px',
                margin: '0 auto var(--space-10) auto'
              }}>
                Four guides covering the infrastructure AI agents need to transact, verify, and respect publisher terms. Each one explains a protocol surface, shows what the wire format looks like, and points to working code.
              </p>

              {/* Stats Row */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-12)',
                flexWrap: 'wrap'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--accent-brand)' }}>4</div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>In-depth guides</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--accent-brand)' }}>31 min</div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>Total read time</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--accent-brand)' }}>12</div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>Key concepts</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What these guides cover */}
        <section className="section" style={{
          background: 'var(--surface-elevated)',
          paddingTop: 'var(--space-12)',
          paddingBottom: 'var(--space-12)',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <div className="container">
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
              <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                When an AI agent calls an API, scrapes a page, or uses a tool, three things need to happen: the agent needs to know the terms (policy discovery), it may need to pay (HTTP 402), and both sides need proof of what occurred (signed records). These guides explain each layer, what the protocol messages look like, and how to implement them.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Start Learning
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                Each guide builds on the others. We recommend starting with Agentic Commerce.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: 'var(--space-8)' }}>
              {learnArticles.map((article) => {
                const IconComponent = article.icon
                return (
                  <Link
                    key={article.slug}
                    href={`/learn/${article.slug}`}
                    className="card"
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.25s ease',
                      border: article.featured ? '2px solid var(--accent-brand)' : '1px solid var(--border-subtle)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {article.featured && (
                      <div style={{
                        position: 'absolute',
                        top: 'var(--space-4)',
                        right: 'var(--space-4)',
                        background: 'var(--accent-brand)',
                        color: 'white',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 600,
                        padding: 'var(--space-1) var(--space-3)',
                        borderRadius: 'var(--radius-sm)'
                      }}>
                        START HERE
                      </div>
                    )}

                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: 'var(--radius-xl)',
                      background: article.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 'var(--space-5)'
                    }}>
                      <IconComponent size={28} style={{ color: article.iconColor }} />
                    </div>

                    <h2 style={{
                      fontSize: 'var(--text-xl)',
                      fontWeight: 700,
                      marginBottom: 'var(--space-1)',
                      color: 'var(--text-primary)'
                    }}>
                      {article.title}
                    </h2>

                    <p style={{
                      fontSize: 'var(--text-sm)',
                      fontWeight: 500,
                      color: 'var(--accent-brand)',
                      marginBottom: 'var(--space-4)'
                    }}>
                      {article.subtitle}
                    </p>

                    <p style={{
                      fontSize: 'var(--text-base)',
                      lineHeight: 1.7,
                      color: 'var(--text-secondary)',
                      marginBottom: 'var(--space-5)',
                      flex: 1
                    }}>
                      {article.description}
                    </p>

                    {/* Topics */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 'var(--space-2)',
                      marginBottom: 'var(--space-5)'
                    }}>
                      {article.topics.map((topic) => (
                        <span
                          key={topic}
                          style={{
                            fontSize: 'var(--text-xs)',
                            color: 'var(--text-tertiary)',
                            background: 'var(--surface-subtle)',
                            padding: 'var(--space-1) var(--space-3)',
                            borderRadius: 'var(--radius-sm)'
                          }}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: 'var(--space-4)',
                      borderTop: '1px solid var(--border-subtle)'
                    }}>
                      <span style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-muted)'
                      }}>
                        {article.readTime}
                      </span>
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-1)',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 600,
                        color: 'var(--accent-brand)'
                      }}>
                        Read guide
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="section" style={{
          background: 'var(--surface-subtle)',
          paddingTop: 'var(--space-16)',
          paddingBottom: 'var(--space-16)'
        }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)',
                textAlign: 'center'
              }}>
                Recommended Learning Path
              </h2>
              <p style={{
                fontSize: 'var(--text-base)',
                color: 'var(--text-secondary)',
                textAlign: 'center',
                marginBottom: 'var(--space-10)'
              }}>
                Follow this sequence to build a complete understanding of AI infrastructure
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {learnArticles.map((article, index) => (
                  <Link
                    key={article.slug}
                    href={`/learn/${article.slug}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-4)',
                      padding: 'var(--space-5)',
                      background: 'var(--surface-elevated)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-subtle)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'var(--accent-brand)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: 'var(--text-base)',
                      flexShrink: 0
                    }}>
                      {index + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
                        {article.title}
                      </h3>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>
                        {article.subtitle}
                      </p>
                    </div>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', flexShrink: 0 }}>
                      {article.readTime}
                    </span>
                    <ArrowRight size={16} style={{ color: 'var(--border-default)', flexShrink: 0 }} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="section" style={{
          background: 'var(--surface-elevated)',
          paddingTop: 'var(--space-16)',
          paddingBottom: 'var(--space-16)'
        }}>
          <div className="container">
            <h2 style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-8)',
              color: 'var(--text-primary)'
            }}>
              Related
            </h2>

            <div className="grid grid-3" style={{ gap: 'var(--space-6)' }}>
              <Link
                href="/"
                className="card"
                style={{ textDecoration: 'none', background: 'var(--surface-subtle)', border: 'none' }}
              >
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  What is Originary?
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Understand the company and PEAC Protocol behind these concepts
                </p>
              </Link>

              <Link
                href="/peac"
                className="card"
                style={{ textDecoration: 'none', background: 'var(--surface-subtle)', border: 'none' }}
              >
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  PEAC Protocol
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Dive into the open protocol specification and reference implementations
                </p>
              </Link>

              <Link
                href="/developers"
                className="card"
                style={{ textDecoration: 'none', background: 'var(--surface-subtle)', border: 'none' }}
              >
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  Developer Documentation
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Start building with signed records, policy files, and payment infrastructure
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{
          background: 'var(--accent-brand)',
          paddingTop: 'var(--space-16)',
          paddingBottom: 'var(--space-16)'
        }}>
          <div className="container">
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'white'
              }}>
                Ready to Build?
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'rgba(255, 255, 255, 0.75)',
                marginBottom: 'var(--space-8)',
                lineHeight: 1.7
              }}>
                Take what you&apos;ve learned and start implementing. Our developer tools make it easy to add verification, policy, and signed records to any application.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  href="/developers"
                  className="btn btn-lg"
                  style={{ background: 'white', color: 'var(--accent-brand)', border: 'none' }}
                >
                  Start Building
                </Link>
                <Link
                  href="/demo"
                  className="btn btn-lg btn-ghost"
                  style={{ color: 'white', borderColor: 'var(--border-on-brand)' }}
                >
                  See Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

    </>
  )
}

import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { BookOpen, ArrowRight, Receipt, CreditCard, Shield, ShoppingCart, Sparkles, TrendingUp, Users, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Learn: AI Agent Verification, Audit Trails & Policy',
  description: 'Guides on AI agent verification, tamper-evident audit trails, MCP security, signed records, and evidence workflows. Essential reading for teams operating agent-facing systems.',
  keywords: 'agent verification tutorial, verifiable interaction records, offline verification, signed records, AI consent, policy discovery, PEAC Protocol guide, evidence workflows, agent verification, portable proof',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Learn: Agent Verification, Records & Policy',
    description: 'Guides on agent verification, verifiable interaction records, HTTP 402 payments, and policy enforcement.',
    url: '/learn',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn: Agent Verification, Records & Policy',
    description: 'Guides on agent verification, verifiable interaction records, HTTP 402 payments, and policy enforcement.',
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
    slug: 'ai-receipts',
    title: 'Verifiable Interaction Records',
    subtitle: 'Why Logs Are Not Enough',
    description: 'What a signed interaction record contains, how offline verification works, and why server logs are not portable proof. Includes the JWS payload structure and Ed25519 verification flow.',
    icon: Receipt,
    color: 'var(--accent-brand-subtle)',
    iconColor: 'var(--accent-brand)',
    readTime: '6 min read',
    featured: true,
    topics: ['Interaction Records', 'Offline Verification', 'Portable Proof']
  },
  {
    slug: 'ai-consent-and-attribution',
    title: 'Policy, Consent & Attribution',
    subtitle: 'Machine-Readable Terms for AI',
    description: 'How publishers declare what agents may do with their content (AIPREF, peac.txt) and how agents prove they followed those terms. The gap between robots.txt and what AI actually needs.',
    icon: Shield,
    color: 'var(--accent-secondary-subtle)',
    iconColor: 'var(--accent-secondary)',
    readTime: '7 min read',
    featured: false,
    topics: ['AIPREF', 'Policy Discovery', 'Content Terms']
  },
  {
    slug: 'http-402-ai-payments',
    title: 'HTTP 402 & Payment Evidence',
    subtitle: 'Payment Challenges and Settlement Proof',
    description: 'How HTTP 402 Payment Required works for machine-to-machine interactions. The request/challenge/payment/receipt cycle, x402 protocol headers, and how payment evidence fits into the verification stack.',
    icon: CreditCard,
    color: 'var(--accent-tertiary-subtle)',
    iconColor: 'var(--brand-accent)',
    readTime: '10 min read',
    featured: false,
    topics: ['HTTP 402', 'Payment Evidence', 'Settlement Proof']
  },
  {
    slug: 'what-is-agentic-commerce',
    title: 'Agentic Commerce',
    subtitle: 'The Economic Layer for AI Agents',
    description: 'What happens when machines need to buy API calls, pay for content access, or settle charges with other agents. Covers policy discovery, pricing headers, payment rails, and signed records.',
    icon: ShoppingCart,
    color: 'var(--accent-brand-subtle)',
    iconColor: 'var(--accent-brand)',
    readTime: '8 min read',
    featured: false,
    topics: ['Agent Economy', 'Machine Payments', 'API Monetization']
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
    "description": "In-depth guides on verification, signed records, policy, consent, and evidence for automated interactions",
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
                How automated interactions become <span className="text-gradient">verifiable</span>
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-10)',
                maxWidth: '650px',
                margin: '0 auto var(--space-10) auto'
              }}>
                Four guides covering records, verification, policy, and evidence for automated interactions. Each one explains a protocol surface, shows what the wire format looks like, and points to working code.
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
                When an AI agent calls an API, scrapes a page, or uses a tool, both sides need proof of what occurred. Logs explain what your systems observed; they do not create portable proof another party can verify independently. These guides explain how signed records work, how policy and consent fit in, and how payment evidence layers on top.
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
                Each guide builds on the others. We recommend starting with Verifiable Interaction Records.
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
                Follow this sequence to build a complete understanding of verification and evidence for automated interactions
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
                  Start here with signed records, policy files, and verification tools
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
                  style={{ background: 'var(--surface-elevated)', color: 'var(--accent-brand)', border: 'none' }}
                >
                  Start here
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

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
    description: 'Understand how autonomous AI agents buy, sell, and transact without human intervention. Learn about machine-readable pricing, programmatic payments, and the infrastructure enabling the agent economy.',
    icon: ShoppingCart,
    color: 'rgba(99, 91, 255, 0.1)',
    iconColor: 'var(--brand-primary)',
    readTime: '8 min read',
    featured: true,
    topics: ['Agent Economy', 'Machine Payments', 'API Monetization']
  },
  {
    slug: 'ai-receipts',
    title: 'AI Receipts Explained',
    subtitle: 'Verifiable Records of Agent Interactions',
    description: 'Deep dive into PEAC-Receipt - the JWS-signed JSON format that proves what happened in every agent interaction. Essential for billing, compliance, attribution, and dispute resolution.',
    icon: Receipt,
    color: 'rgba(0, 212, 170, 0.1)',
    iconColor: 'var(--brand-secondary)',
    readTime: '6 min read',
    featured: false,
    topics: ['PEAC-Receipt', 'JWS Signatures', 'Audit Trails']
  },
  {
    slug: 'http-402-ai-payments',
    title: 'HTTP 402 & AI Payments',
    subtitle: 'The Web Standard for Machine-Payable APIs',
    description: 'The complete guide to HTTP 402 Payment Required - the dormant web standard now powering real-time agent payments. Includes x402 protocol details and implementation patterns.',
    icon: CreditCard,
    color: 'rgba(255, 107, 53, 0.1)',
    iconColor: 'var(--brand-accent)',
    readTime: '10 min read',
    featured: false,
    topics: ['HTTP 402', 'x402 Protocol', 'Pay-per-Request']
  },
  {
    slug: 'ai-consent-and-attribution',
    title: 'AI Consent & Attribution',
    subtitle: 'Machine-Readable Permissions for AI',
    description: 'How content owners declare permissions and how AI systems prove compliance. Covers AIPREF, peac.txt, and the infrastructure for trust in agent interactions.',
    icon: Shield,
    color: 'rgba(99, 91, 255, 0.1)',
    iconColor: 'var(--brand-primary)',
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
                background: 'rgba(99, 91, 255, 0.1)',
                border: '1px solid rgba(99, 91, 255, 0.2)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-5)',
                marginBottom: 'var(--space-6)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--brand-primary)'
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
                color: 'var(--gray-900)'
              }}>
                Master the Building Blocks of the <span className="text-gradient">Agentic Web</span>
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-10)',
                maxWidth: '650px',
                margin: '0 auto var(--space-10) auto'
              }}>
                Deep-dive guides from Originary on the infrastructure powering autonomous AI systems - from commerce and payments to receipts and consent. Essential knowledge for developers building the next generation of intelligent applications.
              </p>

              {/* Stats Row */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-12)',
                flexWrap: 'wrap'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--brand-primary)' }}>4</div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)' }}>In-depth guides</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--brand-primary)' }}>31 min</div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)' }}>Total read time</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--brand-primary)' }}>12</div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)' }}>Key concepts</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Learn This Section */}
        <section className="section" style={{
          background: 'var(--white)',
          paddingTop: 'var(--space-16)',
          paddingBottom: 'var(--space-16)',
          borderBottom: '1px solid var(--gray-100)'
        }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Why This Matters
              </h2>
              <p style={{
                fontSize: 'var(--text-base)',
                color: 'var(--gray-600)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                AI agents are becoming economic actors. Understanding this infrastructure is essential for anyone building autonomous systems.
              </p>
            </div>

            <div className="grid grid-4" style={{
              gap: 'var(--space-8)',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <div style={{
                textAlign: 'center',
                padding: 'var(--space-6)',
                background: 'var(--gray-50)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--gray-100)'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(99, 91, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-4) auto'
                }}>
                  <TrendingUp size={28} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  Market Growth
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', lineHeight: 1.6 }}>
                  Rapidly growing agent economy
                </p>
              </div>

              <div style={{
                textAlign: 'center',
                padding: 'var(--space-6)',
                background: 'var(--gray-50)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--gray-100)'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(0, 212, 170, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-4) auto'
                }}>
                  <Zap size={28} style={{ color: 'var(--brand-secondary)' }} />
                </div>
                <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  First Mover
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', lineHeight: 1.6 }}>
                  Define the standards others will follow
                </p>
              </div>

              <div style={{
                textAlign: 'center',
                padding: 'var(--space-6)',
                background: 'var(--gray-50)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--gray-100)'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(255, 107, 53, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-4) auto'
                }}>
                  <Users size={28} style={{ color: 'var(--brand-accent)' }} />
                </div>
                <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  High Demand
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', lineHeight: 1.6 }}>
                  AI infrastructure skills are in-demand
                </p>
              </div>

              <div style={{
                textAlign: 'center',
                padding: 'var(--space-6)',
                background: 'var(--gray-50)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--gray-100)'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(99, 91, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-4) auto'
                }}>
                  <Sparkles size={28} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  Open Standards
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', lineHeight: 1.6 }}>
                  Built on protocols you can use today
                </p>
              </div>
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
                color: 'var(--gray-900)'
              }}>
                Start Learning
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-600)',
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
                      border: article.featured ? '2px solid var(--brand-primary)' : '1px solid var(--gray-100)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {article.featured && (
                      <div style={{
                        position: 'absolute',
                        top: 'var(--space-4)',
                        right: 'var(--space-4)',
                        background: 'var(--brand-primary)',
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
                      color: 'var(--gray-900)'
                    }}>
                      {article.title}
                    </h2>

                    <p style={{
                      fontSize: 'var(--text-sm)',
                      fontWeight: 500,
                      color: 'var(--brand-primary)',
                      marginBottom: 'var(--space-4)'
                    }}>
                      {article.subtitle}
                    </p>

                    <p style={{
                      fontSize: 'var(--text-base)',
                      lineHeight: 1.7,
                      color: 'var(--gray-600)',
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
                            color: 'var(--gray-500)',
                            background: 'var(--gray-50)',
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
                      borderTop: '1px solid var(--gray-100)'
                    }}>
                      <span style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--gray-400)'
                      }}>
                        {article.readTime}
                      </span>
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-1)',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 600,
                        color: 'var(--brand-primary)'
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
          background: 'var(--gray-50)',
          paddingTop: 'var(--space-16)',
          paddingBottom: 'var(--space-16)'
        }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)',
                textAlign: 'center'
              }}>
                Recommended Learning Path
              </h2>
              <p style={{
                fontSize: 'var(--text-base)',
                color: 'var(--gray-600)',
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
                      background: 'var(--white)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--gray-100)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'var(--brand-primary)',
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
                      <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                        {article.title}
                      </h3>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)' }}>
                        {article.subtitle}
                      </p>
                    </div>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-400)', flexShrink: 0 }}>
                      {article.readTime}
                    </span>
                    <ArrowRight size={16} style={{ color: 'var(--gray-300)', flexShrink: 0 }} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="section" style={{
          background: 'var(--white)',
          paddingTop: 'var(--space-16)',
          paddingBottom: 'var(--space-16)'
        }}>
          <div className="container">
            <h2 style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-8)',
              color: 'var(--gray-900)'
            }}>
              Continue Your Journey
            </h2>

            <div className="grid grid-3" style={{ gap: 'var(--space-6)' }}>
              <Link
                href="/what-is-originary"
                className="card"
                style={{ textDecoration: 'none', background: 'var(--gray-50)', border: 'none' }}
              >
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  What is Originary?
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                  Understand the company and PEAC Protocol behind these concepts
                </p>
              </Link>

              <Link
                href="/peac"
                className="card"
                style={{ textDecoration: 'none', background: 'var(--gray-50)', border: 'none' }}
              >
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  PEAC Protocol
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                  Dive into the open protocol specification and reference implementations
                </p>
              </Link>

              <Link
                href="/developers"
                className="card"
                style={{ textDecoration: 'none', background: 'var(--gray-50)', border: 'none' }}
              >
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  Developer Documentation
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                  Start building with receipts, policy files, and payment infrastructure
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{
          background: 'var(--gradient-brand)',
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
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: 'var(--space-8)',
                lineHeight: 1.7
              }}>
                Take what you&apos;ve learned and start implementing. Our developer tools make it easy to add receipts, payments, and policy discovery to any application.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  href="/developers"
                  className="btn btn-lg"
                  style={{ background: 'white', color: 'var(--brand-primary)', border: 'none' }}
                >
                  Start Building
                </Link>
                <Link
                  href="/demo"
                  className="btn btn-lg btn-ghost"
                  style={{ color: 'white', borderColor: 'rgba(255, 255, 255, 0.3)' }}
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

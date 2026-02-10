import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { Calendar, User, ArrowRight, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Originary Blog - AI payments, HTTP 402 and PEAC receipts',
  },
  description: 'Originary blog on AI payments, HTTP 402, PEAC receipts, and agentic web infrastructure. Technical insights and protocol updates.',
  keywords: 'Originary blog, AIPREF, PEAC protocol, AI payments, HTTP 402, x402, receipts, technical blog, agentic web, AI infrastructure',
  authors: [{ name: 'Originary Team' }],
  openGraph: {
    type: 'website',
    title: 'Originary Blog - AI payments, HTTP 402 and PEAC receipts',
    description: 'Technical articles from Originary on HTTP 402, AI payments, PEAC receipts, AIPREF and the agentic web.',
    url: '/blog',
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'Originary Blog'
      }
    ],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary Blog - AI payments, HTTP 402 and PEAC receipts',
    description: 'Technical insights from Originary on HTTP 402, AI payments, PEAC receipts and agentic web infrastructure.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogPage() {
  const articles = [
    {
      slug: 'what-is-http-402',
      title: 'What is HTTP 402? How PEAC Uses 402 for Agent Payments',
      description: 'HTTP 402 Payment Required was defined in 1997 and reserved for digital payments. Learn how PEAC Protocol activates 402 for AI access control, agent payments, and verifiable receipts.',
      author: 'Jithin Raj & Originary Team',
      category: 'Explainer',
      readTime: '10 min read',
      featured: true
    },
    {
      slug: 'a2a-stack-agent-to-agent-commerce',
      title: 'The A2A Stack: Agent-to-Agent Commerce',
      description: 'How AI agents coordinate, transact, and verify interactions with each other. The A2A stack covers AI policy discovery, HTTP 402 payments, PEAC-Receipts, and provenance.',
      author: 'Jithin Raj & Originary Team',
      category: 'Vision',
      readTime: '12 min read',
      featured: true
    },
    {
      slug: 'from-detection-to-settlement-ai-paywall-peac-http-402',
      title: 'From Detection To Settlement: Using PEAC To Turn AI Traffic Into Revenue And Compliance',
      description: 'How Originary and PEAC turns AI bot detection into an AI paywall using HTTP 402, x402 and Stripe, with signed receipts for billing, audit and compliance.',
      author: 'Jithin Raj & Originary Team',
      category: 'Technical',
      readTime: '18 min read',
      featured: false
    },
    {
      slug: 'ai-bot-detection',
      title: 'AI Bot Detection: Turning Unknown AI Traffic Into Verifiable Evidence',
      description: 'AI bot detection is more than classifiers. Learn how metadata, fingerprints and PEAC receipts turn AI traffic into verifiable, enforceable evidence.',
      author: 'Jithin Raj & Originary Team',
      category: 'Technical',
      readTime: '15 min read',
      featured: false
    },
    {
      slug: 'aipref-by-ietf',
      title: 'AIPREF: A Common Language for AI Usage Preferences',
      description: 'Understanding the IETF AIPREF specification for expressing AI usage preferences through HTTP headers and robots.txt - what it is, how it works, and how to implement it today.',
      author: 'Jithin Raj & Originary Team',
      category: 'Technical',
      readTime: '15 min read',
      featured: false
    },
    {
      slug: 'http-402-for-apis',
      title: 'HTTP 402 for APIs: Making Payment-Required Responses Work',
      description: 'A practical guide to implementing HTTP 402 Payment Required in modern APIs. Learn the anatomy of a 402 response, receipt verification patterns, and how to avoid common pitfalls.',
      author: 'Jithin Raj & Originary Team',
      category: 'Technical',
      readTime: '12 min read',
      featured: false
    },
    {
      slug: 'adding-402-in-15-minutes',
      title: 'Add HTTP 402 to Your API in 15 Minutes',
      description: 'Quick tutorial for adding HTTP 402 Payment Required responses to an existing Express API. No SDK required, just standard HTTP and receipt verification.',
      author: 'Jithin Raj & Originary Team',
      category: 'Tutorial',
      readTime: '8 min read',
      featured: false
    },
    {
      slug: 'cloudflare-workers-402',
      title: 'HTTP 402 on Cloudflare Workers: Global Edge Payment Gates',
      description: 'Deploy HTTP 402 payment-required responses at the edge with Cloudflare Workers. Zero cold starts, global KV storage, Web Crypto API for receipt verification.',
      author: 'Jithin Raj & Originary Team',
      category: 'Technical',
      readTime: '10 min read',
      featured: false
    },
    {
      slug: 'robots-txt-rfc-9309',
      title: 'robots.txt (RFC 9309): The Web\'s Crawl Access Control',
      description: 'A technical deep dive into RFC 9309, the standardized Robots Exclusion Protocol - matching rules, error handling, caching, and how it relates to AIPREF usage preferences.',
      author: 'Jithin Raj & Originary Team',
      category: 'Technical',
      readTime: '12 min read',
      featured: false
    }
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Originary Blog",
    "description": "Originary blog on AI payments, HTTP 402, x402, PEAC receipts, AIPREF and agentic web infrastructure. Technical insights, protocol updates and best practices for AI infrastructure teams.",
    "url": "https://www.originary.xyz/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Originary",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.originary.xyz/logo.svg"
      }
    },
    "about": [
      "AI payments",
      "HTTP 402",
      "x402",
      "PEAC receipts",
      "AIPREF",
      "agentic web infrastructure"
    ]
  }

  return (
    <div className="wrap">
      <Script
        id="blog-json-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavigationHeader />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }} id="main-content">
        {/* Hero Section */}
        <section className="section">
          <div className="container">
            <div style={{
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto',
              marginBottom: 'var(--space-16)'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                background: 'var(--accent-brand-subtle)',
                border: '1px solid var(--accent-brand-muted)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-4)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--accent-brand)',
                marginBottom: 'var(--space-6)'
              }}>
                <FileText size={14} />
                BLOG
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Originary <span className="text-gradient">blog</span>
              </h1>

              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                lineHeight: 1.3,
                marginBottom: 'var(--space-6)',
                color: 'var(--text-secondary)'
              }}>
                Insights from the agentic web
              </h2>

              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-8)'
              }}>
                The Originary blog covers HTTP 402, AI payments, PEAC receipts, AIPREF, and the infrastructure needed for the agentic web. Technical articles, protocol updates, and best practices from the Originary team.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {articles.filter(a => a.featured).map((article) => (
          <section key={article.slug} className="section" style={{ paddingTop: 0 }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
              <Link
                href={`/blog/${article.slug}`}
                className="card"
                style={{
                  textDecoration: 'none',
                  display: 'block',
                  background: 'var(--accent-brand-faint)',
                  border: '2px solid var(--accent-brand)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  background: 'var(--accent-brand)',
                  color: 'var(--white)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-2) var(--space-4)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-4)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Featured
                </div>

                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginBottom: 'var(--space-4)',
                  color: 'var(--text-primary)'
                }}>
                  {article.title}
                </h2>

                <p style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-6)'
                }}>
                  {article.description}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-6)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                  flexWrap: 'wrap',
                  paddingTop: 'var(--space-4)',
                  borderTop: '1px solid var(--border-default)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <User size={16} />
                    <span>{article.author}</span>
                  </div>
                  <div style={{
                    display: 'inline-flex',
                    padding: 'var(--space-1) var(--space-3)',
                    background: 'var(--accent-brand-subtle)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600,
                    color: 'var(--accent-brand)'
                  }}>
                    {article.category}
                  </div>
                  <span style={{ color: 'var(--text-tertiary)' }}>{article.readTime}</span>
                  <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--accent-brand)', fontWeight: 600 }}>
                    <span>Read article</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </div>
          </section>
        ))}

        {/* All Articles */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <h2 style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-12)',
              color: 'var(--text-primary)'
            }}>
              All Articles
            </h2>

            <div style={{
              display: 'grid',
              gap: 'var(--space-8)',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))'
            }}>
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="card"
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    alignSelf: 'flex-start',
                    padding: 'var(--space-1) var(--space-3)',
                    background: 'var(--accent-brand-subtle)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600,
                    color: 'var(--accent-brand)',
                    marginBottom: 'var(--space-4)'
                  }}>
                    {article.category}
                  </div>

                  <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 600,
                    lineHeight: 1.3,
                    marginBottom: 'var(--space-3)',
                    color: 'var(--text-primary)'
                  }}>
                    {article.title}
                  </h3>

                  <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: 'var(--space-4)',
                    flex: 1
                  }}>
                    {article.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-4)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-secondary)',
                    paddingTop: 'var(--space-4)',
                    borderTop: '1px solid var(--border-default)',
                    flexWrap: 'wrap'
                  }}>
                    <span>{article.readTime}</span>
                    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--accent-brand)', fontWeight: 600 }}>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px' }}>
            <div className="card cta-card">
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--white)'
              }}>
                Stay updated on the agentic web
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                marginBottom: 'var(--space-8)',
                opacity: 0.9
              }}>
                Get the latest insights on AI preferences, protocol updates, and best practices delivered to your inbox
              </p>
              <div style={{
                display: 'flex',
                gap: 'var(--space-4)',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <a
                  href="https://originary.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg"
                  style={{
                    background: 'var(--surface-elevated)',
                    color: 'var(--accent-brand)',
                    border: 'none'
                  }}
                >
                  <span>Subscribe on Substack</span>
                  <ArrowRight size={18} />
                </a>
                <Link
                  href="/contact"
                  className="btn btn-lg btn-ghost"
                  style={{
                    color: 'var(--white)',
                    border: '1px solid var(--border-on-brand)'
                  }}
                >
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

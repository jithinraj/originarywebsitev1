import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Shield, ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Consent & Attribution: Machine-Readable Permissions',
  description: 'AI consent must be machine-readable for agents to respect it. Learn how AIPREF and peac.txt create auditable attribution chains.',
  keywords: 'AI consent, machine-readable consent, AI attribution, AIPREF standard, aipref.json, AI preferences, content licensing AI, agent consent protocol, attribution chain, AI provenance, content permissions AI, opt-out AI training, RAG permissions, responsible AI infrastructure',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'article',
    title: 'AI Consent & Attribution: Machine-Readable Permissions',
    description: 'Robots.txt wasn\'t designed for AI agents. Learn how AIPREF and PEAC enable granular, machine-readable consent with verifiable attribution.',
    url: '/learn/ai-consent-and-attribution',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Consent & Attribution',
    description: 'Robots.txt wasn\'t designed for AI agents. Learn how AIPREF enables granular, machine-readable consent.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/learn/ai-consent-and-attribution',
  },
}

export default function AIConsentPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.originary.xyz" },
      { "@type": "ListItem", "position": 2, "name": "Learn", "item": "https://www.originary.xyz/learn" },
      { "@type": "ListItem", "position": 3, "name": "AI Consent & Attribution", "item": "https://www.originary.xyz/learn/ai-consent-and-attribution" }
    ]
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "AI Consent & Attribution",
    "description": "Machine-readable consent and proper attribution for AI interactions",
    "author": { "@type": "Organization", "name": "Originary" },
    "publisher": { "@type": "Organization", "name": "Originary", "url": "https://www.originary.xyz" },
    "mainEntityOfPage": "https://www.originary.xyz/learn/ai-consent-and-attribution"
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
                <Shield size={14} />
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
                AI Consent & Attribution
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-6)'
              }}>
                Machine-readable consent and proper attribution - the foundation for trust in the agentic web.
              </p>

              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
                7 min read
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
                    {['Key Takeaways', 'The Problem', 'Machine-Readable Consent', 'Attribution in Practice', 'Standards & Protocols', 'Implementation'].map((item) => (
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
                      'Consent must be machine-readable for agents to respect it automatically',
                      'Attribution is recorded in receipts, creating verifiable credit chains',
                      'AIPREF (aipref.json) lets sites declare AI interaction preferences',
                      'Proper consent + attribution protects both content owners and AI operators'
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

                {/* The Problem */}
                <section id="the-problem" style={{ marginBottom: 'var(--space-12)' }}>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--text-primary)'
                  }}>
                    The Problem
                  </h2>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                    The web was built for humans browsing with web browsers. Terms of service are written in legal English. robots.txt was designed for search engine crawlers, not AI agents that consume and transform content.
                  </p>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                    This creates two problems:
                  </p>
                  <ul style={{ paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                    <li style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-2)' }}>
                      <strong>Content owners can&apos;t express preferences</strong> that agents understand - &ldquo;training: no, RAG: yes, summary: yes with attribution&rdquo; isn&apos;t something robots.txt supports.
                    </li>
                    <li style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-2)' }}>
                      <strong>Agents can&apos;t demonstrate compliance</strong> - even well-intentioned AI systems have no way to show they respected consent or provided proper attribution.
                    </li>
                  </ul>
                </section>

                {/* Machine-Readable Consent */}
                <section id="machine-readable-consent" style={{ marginBottom: 'var(--space-12)' }}>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--text-primary)'
                  }}>
                    Machine-Readable Consent
                  </h2>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                    Machine-readable consent means expressing permissions in formats that agents can parse and act on automatically. Key formats include:
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                    <div>
                      <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>AIPREF (aipref.json)</h4>
                      <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        A JSON file at <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: '4px' }}>/.well-known/aipref.json</code> that declares AI interaction preferences - training permissions, RAG access, summarization rights, required attribution, and pricing.
                      </p>
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>peac.txt</h4>
                      <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        The PEAC policy file at <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: '4px' }}>/.well-known/peac.txt</code> references aipref.json and adds payment requirements, receipt verification endpoints, and public keys.
                      </p>
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>HTTP Headers</h4>
                      <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        Per-request consent can be signaled via headers, allowing dynamic permissions based on the requesting agent&apos;s identity or payment status.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Attribution in Practice */}
                <section id="attribution-in-practice" style={{ marginBottom: 'var(--space-12)' }}>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--text-primary)'
                  }}>
                    Attribution in Practice
                  </h2>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                    Attribution answers: &ldquo;Where did this come from?&rdquo; In agentic systems, this is captured through:
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    {[
                      { title: 'Source Recording', desc: 'Receipts record the exact resource URL, timestamp, and content hash of accessed material' },
                      { title: 'Credit Chains', desc: 'When Agent B uses output from Agent A, the receipt chain traces back to original sources' },
                      { title: 'License Compliance', desc: 'Attribution requirements from AIPREF are embedded in receipts as verifiable commitments' },
                      { title: 'Payment Proof', desc: 'When attribution includes compensation, payment evidence is cryptographically linked' }
                    ].map((item, i) => (
                      <div key={i} style={{
                        padding: 'var(--space-4)',
                        background: 'var(--surface-subtle)',
                        borderRadius: 'var(--radius-md)'
                      }}>
                        <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-1)', color: 'var(--text-primary)' }}>{item.title}</h4>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Standards & Protocols */}
                <section id="standards-&-protocols" style={{ marginBottom: 'var(--space-12)' }}>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--text-primary)'
                  }}>
                    Standards & Protocols
                  </h2>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                    The consent and attribution ecosystem includes several complementary standards:
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      { term: 'AIPREF', def: 'AI preferences standard for declaring training, RAG, and usage permissions' },
                      { term: 'PEAC Protocol', def: 'Policy discovery and verifiable receipts for agent interactions' },
                      { term: 'C2PA', def: 'Content provenance standard for media authenticity and attribution' },
                      { term: 'robots.txt', def: 'Legacy crawler control - still useful but insufficient for AI agents' }
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
                </section>

                {/* Implementation */}
                <section id="implementation" style={{ marginBottom: 'var(--space-12)' }}>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--text-primary)'
                  }}>
                    Implementation
                  </h2>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                    Get started with consent and attribution using Originary&apos;s tools:
                  </p>

                  <div className="grid grid-2" style={{ gap: 'var(--space-4)' }}>
                    <Link href="/integrations/aipref" className="card" style={{ textDecoration: 'none', padding: 'var(--space-5)' }}>
                      <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>AIPREF Integration</h4>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Declare your AI preferences</p>
                    </Link>
                    <Link href="/declare" className="card" style={{ textDecoration: 'none', padding: 'var(--space-5)' }}>
                      <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>Declare (Policy Kit)</h4>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Generate peac.txt and aipref.json</p>
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

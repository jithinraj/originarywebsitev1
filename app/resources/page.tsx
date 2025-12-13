import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, BookOpen, FileText, GitBranch, Receipt, Globe, Github, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Resources, documentation, and insights for building with the receipts protocol for the agentic web.',
  keywords: 'agentic web, receipts protocol, AI coordination, PEAC protocol',
  openGraph: {
    title: 'Resources : Originary',
    description: 'Resources, documentation, and insights for building with the receipts protocol for the agentic web.',
    url: 'https://www.originary.xyz/resources',
    siteName: 'Originary',
    images: [{ url: 'https://www.originary.xyz/og.jpg' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources : Originary',
    description: 'Resources, documentation, and insights for building with the receipts protocol for the agentic web.',
    images: ['https://www.originary.xyz/og.jpg'],
  },
  alternates: {
    canonical: '/resources',
  },
}

export default function ResourcesPage() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main id="main-content" role="main" style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="section">
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto',
                marginBottom: 'var(--space-16)'
              }}
            >
              <span
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--brand-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  marginBottom: 'var(--space-4)',
                  display: 'block'
                }}
              >
                <BookOpen className="inline w-4 h-4 mr-1" />
                RESOURCES
              </span>
              <h1 style={{ marginBottom: 'var(--space-6)' }}>
                <span className="text-gradient">Knowledge Hub</span>
              </h1>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-8)'
                }}
              >
                Documentation, insights, and updates for building with the receipts protocol for the agentic web. Everything you need to stay informed and build successfully.
              </p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 'var(--space-4)',
                  flexWrap: 'wrap'
                }}
              >
                <Link href="/developers" className="btn btn-primary btn-lg">
                  <span>Start Building</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="#documentation" className="btn btn-secondary btn-lg">
                  Browse Documentation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Resources */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                marginBottom: 'var(--space-16)'
              }}
            >
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Learning Resources</h2>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: 1.7
                }}
              >
                Insights, tutorials, and real-world examples to help you master the PEAC protocol
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <ResourceCard
                icon={<BookOpen size={32} style={{ color: 'var(--brand-primary)' }} />}
                title="Blog"
                description="Insights, updates, and thoughts on agentic coordination and AI orchestration."
                href="/resources/blog"
                linkText="Read posts"
                category="Articles & Insights"
              />
              <ResourceCard
                icon={<FileText size={32} style={{ color: 'var(--brand-secondary)' }} />}
                title="Case Studies"
                description="Real-world implementations and use cases of the PEAC protocol in production environments."
                href="/resources/case-studies"
                linkText="View studies"
                category="Real-world Examples"
              />
              <ResourceCard
                icon={<GitBranch size={32} style={{ color: 'var(--brand-accent)' }} />}
                title="Changelog"
                description="Track the latest updates, releases, and improvements to our products and protocol."
                href="/resources/changelog"
                linkText="See changes"
                category="Product Updates"
              />
            </div>
          </div>
        </section>

        {/* Technical Documentation */}
        <section className="section" id="documentation">
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                marginBottom: 'var(--space-16)'
              }}
            >
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Technical Documentation</h2>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: 1.7
                }}
              >
                Comprehensive technical resources and protocol specifications
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <ResourceCard
                icon={<Receipt size={32} style={{ color: 'var(--brand-primary)' }} />}
                title="Receipts"
                description="Learn about cryptographic receipts for AI access, usage verification, and compliance reporting."
                href="/receipts"
                linkText="Explore receipts"
                category="Core Concepts"
              />
              <ResourceCard
                icon={<Globe size={32} style={{ color: 'var(--brand-secondary)' }} />}
                title="Protocol Documentation"
                description="Complete technical documentation and specifications for the PEAC protocol and implementation guides."
                href="https://peacprotocol.org/"
                linkText="Read docs"
                category="Protocol Specs"
                external
              />
              <ResourceCard
                icon={<Github size={32} style={{ color: 'var(--brand-accent)' }} />}
                title="GitHub Repository"
                description="Open source implementations, code examples, and community contributions to the PEAC ecosystem."
                href="https://github.com/peacprotocol/peac"
                linkText="View code"
                category="Open Source"
                external
              />
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                marginBottom: 'var(--space-16)'
              }}
            >
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Getting Started</h2>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: 1.7
                }}
              >
                Quick paths to get you building with PEAC
              </p>
            </div>

            <div className="grid grid-auto" style={{ gap: 'var(--space-8)' }}>
              <div className="card">
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>For Developers</h3>
                <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
                  SDKs, APIs, and code examples to integrate PEAC into your applications.
                </p>
                <Link href="/developers" className="btn btn-primary">
                  <span>Developer Resources</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="card">
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>For Product Teams</h3>
                <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
                  Understanding PEAC benefits, use cases, and implementation strategies.
                </p>
                <Link href="/products" className="btn btn-secondary">
                  <span>View Products</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <div
              className="cta-card"
              style={{
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  pointerEvents: 'none'
                }}
              />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2
                  style={{
                    fontSize: 'var(--text-4xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-6)',
                    color: 'var(--white)'
                  }}
                >
                  Ready to Get Started?
                </h2>
                <p
                  style={{
                    fontSize: 'var(--text-xl)',
                    marginBottom: 'var(--space-8)',
                    opacity: 0.9,
                    maxWidth: '600px',
                    margin: '0 auto var(--space-8) auto'
                  }}
                >
                  Join the community building infrastructure for autonomous AI coordination.
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 'var(--space-4)',
                    flexWrap: 'wrap'
                  }}
                >
                  <Link
                    href="/developers"
                    className="btn btn-lg"
                    style={{
                      background: 'var(--white)',
                      color: 'var(--brand-primary)',
                      border: 'none'
                    }}
                  >
                    <span>Start Building</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/company/contact"
                    className="btn btn-lg btn-ghost"
                    style={{
                      color: 'var(--white)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <span>Get in Touch</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function ResourceCard({
  icon,
  title,
  description,
  href,
  linkText,
  category,
  external = false
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  linkText: string;
  category: string;
  external?: boolean;
}) {
  const CardContent = (
    <>
      <div style={{ marginBottom: 'var(--space-6)' }}>
        {icon}
      </div>

      <div style={{ marginBottom: 'var(--space-4)' }}>
        <span
          style={{
            fontSize: 'var(--text-xs)',
            fontWeight: 600,
            color: 'var(--brand-primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            background: 'rgba(99, 91, 255, 0.1)',
            padding: 'var(--space-1) var(--space-3)',
            borderRadius: 'var(--radius-full)'
          }}
        >
          {category}
        </span>
      </div>

      <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>
        {title}
      </h3>

      <p style={{ marginBottom: 'var(--space-6)', lineHeight: 1.7, color: 'var(--gray-600)' }}>
        {description}
      </p>

      <span
        style={{
          color: 'var(--brand-primary)',
          textDecoration: 'none',
          fontSize: 'var(--text-sm)',
          fontWeight: 600,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--space-2)'
        }}
      >
        <span>{linkText}</span>
        {external ? <ExternalLink size={14} /> : <ArrowRight size={14} />}
      </span>
    </>
  )

  if (external) {
    return (
      <a
        href={href}
        className="card"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        {CardContent}
      </a>
    )
  }

  return (
    <Link href={href} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
      {CardContent}
    </Link>
  )
}

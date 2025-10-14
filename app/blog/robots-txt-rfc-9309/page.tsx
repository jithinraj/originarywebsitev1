import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { User, ArrowRight, ExternalLink, FileText, Code, AlertTriangle, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'robots.txt (RFC 9309): The Web\'s Crawl Access Control · Originary Blog',
  description: 'A technical deep dive into RFC 9309, the standardized Robots Exclusion Protocol - matching rules, error handling, caching, and how it relates to AIPREF usage preferences.',
  keywords: 'robots.txt, RFC 9309, robots exclusion protocol, crawl control, web crawlers, IETF, AIPREF, SEO, web standards',
  authors: [{ name: 'Jithin Raj & Originary Team' }],
  openGraph: {
    type: 'article',
    title: 'robots.txt (RFC 9309): The Web\'s Crawl Access Control',
    description: 'Understanding RFC 9309 - the standardized Robots Exclusion Protocol and its relationship to AIPREF',
    url: 'https://www.originary.xyz/blog/robots-txt-rfc-9309',
    images: [
      {
        url: 'https://www.originary.xyz/og.jpg',
        width: 1200,
        height: 630,
        alt: 'robots.txt RFC 9309'
      }
    ],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'robots.txt (RFC 9309): The Web\'s Crawl Access Control',
    description: 'Understanding RFC 9309 - the standardized Robots Exclusion Protocol',
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originary',
    creator: '@originary',
  },
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.originary.xyz/blog/robots-txt-rfc-9309',
  },
}

export default function RobotsTxtRFC9309Article() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "robots.txt (RFC 9309): The Web's Crawl Access Control",
    "description": "A technical deep dive into RFC 9309, the standardized Robots Exclusion Protocol",
    "author": {
      "@type": "Organization",
      "name": "Originary"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Originary",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.originary.xyz/og/originary-logo.png"
      }
    },
    "mainEntityOfPage": "https://www.originary.xyz/blog/robots-txt-rfc-9309",
    "image": "https://www.originary.xyz/og.jpg"
  }

  return (
    <div className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavigationHeader />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }} id="main-content">
        <article>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: 'var(--space-16) var(--space-6)' }}>
            {/* Breadcrumbs */}
            <nav style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--gray-600)',
              marginBottom: 'var(--space-8)'
            }}>
              <Link href="/" style={{ color: 'var(--gray-600)', textDecoration: 'none' }}>Home</Link>
              <span style={{ margin: '0 var(--space-2)' }}>/</span>
              <Link href="/blog" style={{ color: 'var(--gray-600)', textDecoration: 'none' }}>Blog</Link>
              <span style={{ margin: '0 var(--space-2)' }}>/</span>
              <span style={{ color: 'var(--gray-900)' }}>robots.txt (RFC 9309)</span>
            </nav>

            {/* Article Header */}
            <header style={{ marginBottom: 'var(--space-12)' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                background: 'rgba(99, 91, 255, 0.1)',
                border: '1px solid rgba(99, 91, 255, 0.2)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-4)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--brand-primary)',
                marginBottom: 'var(--space-6)'
              }}>
                <FileText size={14} />
                TECHNICAL
              </div>

              <h1 style={{
                fontSize: 'var(--text-5xl)',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                robots.txt (RFC 9309): The Web&apos;s Crawl Access Control
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--gray-600)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-8)'
              }}>
                RFC 9309 standardizes the Robots Exclusion Protocol, defining how publishers control crawler access to their content. This guide covers the specification&apos;s technical details, matching rules, error handling, and how it complements AIPREF usage preferences.
              </p>

              <div style={{
                display: 'flex',
                gap: 'var(--space-6)',
                fontSize: 'var(--text-sm)',
                color: 'var(--gray-600)',
                paddingTop: 'var(--space-6)',
                borderTop: '1px solid var(--gray-200)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <User size={16} />
                  <span>Jithin Raj & Originary Team</span>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div style={{
              fontSize: 'var(--text-base)',
              lineHeight: 1.8,
              color: 'var(--gray-700)'
            }}>
              {/* Summary */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <div className="card" style={{ background: 'rgba(0, 212, 170, 0.05)', border: '1px solid rgba(0, 212, 170, 0.2)' }}>
                  <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                    Summary
                  </h2>
                  <p style={{ marginBottom: 'var(--space-3)' }}>
                    The Robots Exclusion Protocol, standardized as RFC 9309 in September 2022, is the web&apos;s mechanism for <strong>crawl access control</strong>. It tells automated clients (crawlers, bots, agents) which URL paths they may fetch from an origin.
                  </p>
                  <p style={{ marginBottom: 'var(--space-3)' }}>
                    <strong>Critical:</strong> robots.txt is not access authorization or security. It is a cooperative signal. Listing paths in robots.txt makes them discoverable. Use real authentication for sensitive resources.
                  </p>
                  <p style={{ margin: 0 }}>
                    RFC 9309 clarifies syntax, matching rules, error handling, and caching behavior that were ambiguous in the original 1994 specification. AIPREF builds on this foundation by adding usage preference semantics via HTTP headers and robots.txt directives.
                  </p>
                </div>
              </section>

              {/* What RFC 9309 Standardizes */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  What RFC 9309 Standardizes
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                  <div className="card">
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                      Location and Format
                    </h3>
                    <ul style={{ paddingLeft: 'var(--space-6)', margin: 0, color: 'var(--gray-700)', lineHeight: 1.8 }}>
                      <li>Served at <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>/robots.txt</code> from the origin root</li>
                      <li>Must be UTF-8 encoded</li>
                      <li>Content-Type must be <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>text/plain</code></li>
                      <li>File size should be parseable up to at least 500 kibibytes</li>
                      <li>The path <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>/robots.txt</code> is <strong>always implicitly allowed</strong></li>
                    </ul>
                  </div>

                  <div className="card">
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                      Groups and Rules
                    </h3>
                    <p style={{ marginBottom: 'var(--space-3)' }}>
                      A robots.txt file consists of one or more <strong>groups</strong>. Each group:
                    </p>
                    <ul style={{ paddingLeft: 'var(--space-6)', margin: 0, color: 'var(--gray-700)', lineHeight: 1.8 }}>
                      <li>Begins with one or more <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>User-agent:</code> lines specifying which crawlers the rules apply to</li>
                      <li>Contains <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>Allow:</code> and <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>Disallow:</code> rules for URL path patterns</li>
                      <li>User-agent matching is case-insensitive</li>
                      <li>If no applicable group is found, <strong>all access is allowed by default</strong></li>
                    </ul>
                  </div>

                  <div className="card">
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                      Matching Rules
                    </h3>
                    <p style={{ marginBottom: 'var(--space-3)' }}>
                      RFC 9309 defines precise matching behavior:
                    </p>
                    <ul style={{ paddingLeft: 'var(--space-6)', margin: 0, color: 'var(--gray-700)', lineHeight: 1.8 }}>
                      <li><strong>Case-sensitive path matching:</strong> <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>/private</code> ≠ <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>/Private</code></li>
                      <li><strong>Longest match wins:</strong> Most specific rule applies when multiple patterns match</li>
                      <li><strong>Wildcard <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>*</code>:</strong> Matches zero or more characters</li>
                      <li><strong>End anchor <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>$</code>:</strong> Matches end of URL path</li>
                      <li><strong>When Allow and Disallow have equal specificity:</strong> Allow takes precedence</li>
                      <li><strong>Comments:</strong> Lines starting with <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>#</code> are ignored</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Error Handling and Caching */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  Fetch Errors and Caching
                </h2>

                <p style={{ marginBottom: 'var(--space-6)' }}>
                  RFC 9309 provides clear guidance for handling fetch errors and caching:
                </p>

                <div className="card" style={{ overflowX: 'auto', marginBottom: 'var(--space-6)' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--gray-200)' }}>
                        <th style={{ padding: 'var(--space-3)', textAlign: 'left', color: 'var(--gray-900)', fontWeight: 600 }}>Situation</th>
                        <th style={{ padding: 'var(--space-3)', textAlign: 'left', color: 'var(--gray-900)', fontWeight: 600 }}>Meaning</th>
                        <th style={{ padding: 'var(--space-3)', textAlign: 'left', color: 'var(--gray-900)', fontWeight: 600 }}>Crawler Behavior</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--gray-200)' }}>
                        <td style={{ padding: 'var(--space-3)', verticalAlign: 'top' }}>
                          <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>4xx</code> status
                        </td>
                        <td style={{ padding: 'var(--space-3)', verticalAlign: 'top' }}>File unavailable or doesn&apos;t exist</td>
                        <td style={{ padding: 'var(--space-3)', verticalAlign: 'top' }}>Crawler MAY access any resources (no restrictions)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--gray-200)' }}>
                        <td style={{ padding: 'var(--space-3)', verticalAlign: 'top' }}>
                          <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>5xx</code> status
                        </td>
                        <td style={{ padding: 'var(--space-3)', verticalAlign: 'top' }}>Server or network error</td>
                        <td style={{ padding: 'var(--space-3)', verticalAlign: 'top' }}>Treat as complete disallow until reachable</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--gray-200)' }}>
                        <td style={{ padding: 'var(--space-3)', verticalAlign: 'top' }}>Redirects</td>
                        <td style={{ padding: 'var(--space-3)', verticalAlign: 'top' }}>File has moved</td>
                        <td style={{ padding: 'var(--space-3)', verticalAlign: 'top' }}>Follow up to a reasonable limit, evaluate in origin context</td>
                      </tr>
                      <tr>
                        <td style={{ padding: 'var(--space-3)', verticalAlign: 'top' }}>Caching</td>
                        <td style={{ padding: 'var(--space-3)', verticalAlign: 'top' }}>Avoid frequent refetches</td>
                        <td style={{ padding: 'var(--space-3)', verticalAlign: 'top' }}>Cache up to 24 hours; may extend if unreachable; standard HTTP cache-control applies</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="card" style={{ background: 'rgba(255, 193, 7, 0.05)', border: '1px solid rgba(255, 193, 7, 0.2)' }}>
                  <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                    <AlertTriangle size={24} style={{ color: '#f59e0b', flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                        Important: 4xx vs 5xx Semantics
                      </h4>
                      <p style={{ margin: 0, fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
                        A <code style={{ background: 'rgba(255,255,255,0.8)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>404 Not Found</code> means &quot;no restrictions&quot; - crawlers may proceed. A <code style={{ background: 'rgba(255,255,255,0.8)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>503 Service Unavailable</code> means &quot;assume everything is disallowed&quot; until the file is reachable. This distinction is critical for proper crawler behavior.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* What robots.txt Does NOT Do */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  What robots.txt Does NOT Do
                </h2>

                <div className="card" style={{ background: 'rgba(239, 68, 68, 0.05)', border: '2px solid rgba(239, 68, 68, 0.2)' }}>
                  <div style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                    <Shield size={32} style={{ color: '#ef4444', flexShrink: 0 }} />
                    <div>
                      <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                        Security Warning
                      </h3>
                      <p style={{ marginBottom: 'var(--space-3)' }}>
                        RFC 9309 explicitly states: <strong>&quot;These rules are not a form of access authorization.&quot;</strong>
                      </p>
                    </div>
                  </div>

                  <ul style={{ paddingLeft: 'var(--space-6)', margin: 0, lineHeight: 1.8 }}>
                    <li style={{ marginBottom: 'var(--space-2)' }}>
                      <strong>It does not provide authentication or authorization.</strong> Malicious actors can ignore robots.txt. Use proper authentication (passwords, tokens, sessions) for sensitive resources.
                    </li>
                    <li style={{ marginBottom: 'var(--space-2)' }}>
                      <strong>Listing paths exposes them publicly.</strong> A line like <code style={{ background: 'rgba(255,255,255,0.8)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>Disallow: /admin/</code> tells everyone your admin panel is at <code style={{ background: 'rgba(255,255,255,0.8)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>/admin/</code>
                    </li>
                    <li style={{ margin: 0 }}>
                      <strong>It does not control usage after access.</strong> robots.txt only controls whether a crawler <em>fetches</em> content. It says nothing about training, indexing, or other downstream usage. That&apos;s where AIPREF comes in.
                    </li>
                  </ul>
                </div>
              </section>

              {/* How AIPREF Complements robots.txt */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  How AIPREF Complements robots.txt
                </h2>

                <p style={{ marginBottom: 'var(--space-6)' }}>
                  RFC 9309 handles crawl access. AIPREF (draft-ietf-aipref-attach) adds usage preference semantics. They work together:
                </p>

                <div style={{ display: 'grid', gap: 'var(--space-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginBottom: 'var(--space-6)' }}>
                  <div className="card">
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                      robots.txt Role
                    </h3>
                    <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--gray-700)' }}>
                      Controls <strong>which URL paths</strong> crawlers may fetch. Binary yes/no decision per path.
                    </p>
                  </div>

                  <div className="card">
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                      AIPREF Role
                    </h3>
                    <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--gray-700)' }}>
                      Expresses <strong>how content may be used</strong> after access (training, search, etc.) via <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>Content-Usage</code> headers and robots.txt directives.
                    </p>
                  </div>
                </div>

                <div className="card" style={{ background: 'var(--gray-900)', color: 'var(--white)', marginBottom: 'var(--space-4)' }}>
                  <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--white)' }}>
                    Combined Example
                  </h4>
                  <pre style={{ margin: 0, overflow: 'auto', fontSize: 'var(--text-sm)', lineHeight: 1.6, fontFamily: 'monospace', whiteSpace: 'pre' }}>
{`User-agent: *
Allow: /
Disallow: /internal/
Content-Usage: train-ai=n
Content-Usage: /public/ train-ai=y`}
                  </pre>
                </div>

                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', margin: 0 }}>
                  This configuration keeps <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>/internal/</code> off limits to crawlers (RFC 9309), while expressing usage preferences: default no AI training, but training allowed for <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>/public/</code> (AIPREF). The AIPREF draft explicitly <strong>updates RFC 9309</strong> to add the <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>Content-Usage</code> directive.
                </p>
              </section>

              {/* Copy-Paste Cookbook */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  Copy-Paste Cookbook
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                  <div>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                      1. Minimal Allow All
                    </h3>
                    <div className="card" style={{ background: 'var(--gray-900)', color: 'var(--white)' }}>
                      <pre style={{ margin: 0, fontSize: 'var(--text-sm)', fontFamily: 'monospace', whiteSpace: 'pre' }}>
{`User-agent: *
Allow: /`}
                      </pre>
                    </div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginTop: 'var(--space-2)', margin: 0 }}>
                      Explicitly allows all crawlers to access all paths.
                    </p>
                  </div>

                  <div>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                      2. Block Subtree with Carve-Out
                    </h3>
                    <div className="card" style={{ background: 'var(--gray-900)', color: 'var(--white)' }}>
                      <pre style={{ margin: 0, fontSize: 'var(--text-sm)', fontFamily: 'monospace', whiteSpace: 'pre' }}>
{`User-agent: *
Disallow: /private/
Allow: /private/press/`}
                      </pre>
                    </div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginTop: 'var(--space-2)', margin: 0 }}>
                      Blocks <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>/private/</code> but allows <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>/private/press/</code> (longest match wins).
                    </p>
                  </div>

                  <div>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                      3. Wildcards and End Anchors
                    </h3>
                    <div className="card" style={{ background: 'var(--gray-900)', color: 'var(--white)' }}>
                      <pre style={{ margin: 0, fontSize: 'var(--text-sm)', fontFamily: 'monospace', whiteSpace: 'pre' }}>
{`User-agent: *
Disallow: *.bak$
Disallow: /tmp/*
Allow: /tmp/public/`}
                      </pre>
                    </div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginTop: 'var(--space-2)', margin: 0 }}>
                      <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>*</code> matches any characters, <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>$</code> anchors to end of path.
                    </p>
                  </div>

                  <div>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                      4. Target Specific Crawler
                    </h3>
                    <div className="card" style={{ background: 'var(--gray-900)', color: 'var(--white)' }}>
                      <pre style={{ margin: 0, fontSize: 'var(--text-sm)', fontFamily: 'monospace', whiteSpace: 'pre' }}>
{`User-agent: GPTBot
Disallow: /

User-agent: *
Allow: /`}
                      </pre>
                    </div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginTop: 'var(--space-2)', margin: 0 }}>
                      Blocks GPTBot specifically while allowing all other crawlers.
                    </p>
                  </div>

                  <div>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                      5. Combine Crawl Control with AIPREF Preferences
                    </h3>
                    <div className="card" style={{ background: 'var(--gray-900)', color: 'var(--white)' }}>
                      <pre style={{ margin: 0, fontSize: 'var(--text-sm)', fontFamily: 'monospace', whiteSpace: 'pre' }}>
{`User-agent: *
Allow: /
Disallow: /private/
Content-Usage: train-ai=n, search=y
Content-Usage: /research/ train-ai=y`}
                      </pre>
                    </div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginTop: 'var(--space-2)', margin: 0 }}>
                      Combines RFC 9309 crawl rules with AIPREF usage preferences for path-specific control.
                    </p>
                  </div>
                </div>
              </section>

              {/* Testing Checklist */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  Quick Testing Checklist
                </h2>

                <div className="card">
                  <ol style={{ paddingLeft: 'var(--space-6)', margin: 0, lineHeight: 1.8 }}>
                    <li style={{ marginBottom: 'var(--space-3)' }}>
                      <strong>Verify file is accessible:</strong>
                      <div style={{ marginTop: 'var(--space-2)', background: 'var(--gray-900)', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', color: 'var(--white)', fontFamily: 'monospace', fontSize: 'var(--text-sm)' }}>
                        curl -sI https://example.com/robots.txt
                      </div>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginTop: 'var(--space-2)', margin: 0 }}>
                        Should return <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>200 OK</code> with <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>Content-Type: text/plain</code>
                      </p>
                    </li>
                    <li style={{ marginBottom: 'var(--space-3)' }}>
                      <strong>Check UTF-8 encoding:</strong> Ensure file is saved as UTF-8, not Latin-1 or other encodings
                    </li>
                    <li style={{ marginBottom: 'var(--space-3)' }}>
                      <strong>Validate rule precedence:</strong> Test URLs where Allow and Disallow patterns overlap to confirm longest-match behavior
                    </li>
                    <li style={{ marginBottom: 'var(--space-3)' }}>
                      <strong>Test error scenarios:</strong> Verify 4xx returns allow-all behavior, 5xx returns disallow-all
                    </li>
                    <li style={{ margin: 0 }}>
                      <strong>If using AIPREF:</strong> Confirm <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>Content-Usage</code> lines are within the correct group and properly formatted
                    </li>
                  </ol>
                </div>
              </section>

              {/* Non-Standard Extensions */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  Non-Standard Extensions
                </h2>

                <div className="card" style={{ background: 'rgba(255, 193, 7, 0.05)', border: '1px solid rgba(255, 193, 7, 0.2)' }}>
                  <p style={{ marginBottom: 'var(--space-3)' }}>
                    Some crawlers support additional directives that are <strong>not part of RFC 9309</strong>:
                  </p>
                  <ul style={{ paddingLeft: 'var(--space-6)', margin: 0, lineHeight: 1.8 }}>
                    <li style={{ marginBottom: 'var(--space-2)' }}>
                      <code style={{ background: 'rgba(255,255,255,0.8)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>Crawl-delay:</code> - Rate limiting (supported by some crawlers, not standard)
                    </li>
                    <li style={{ marginBottom: 'var(--space-2)' }}>
                      <code style={{ background: 'rgba(255,255,255,0.8)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>Sitemap:</code> - Sitemap location (widely supported, not in RFC 9309)
                    </li>
                    <li style={{ margin: 0 }}>
                      <code style={{ background: 'rgba(255,255,255,0.8)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>Host:</code> - Preferred host (not standard)
                    </li>
                  </ul>
                  <p style={{ marginTop: 'var(--space-3)', marginBottom: 0, fontSize: 'var(--text-sm)', color: 'var(--gray-700)' }}>
                    Use these with caution. They may be ignored by some crawlers and are not guaranteed to work consistently.
                  </p>
                </div>
              </section>

              {/* Bottom Line */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  Bottom Line
                </h2>

                <div className="card" style={{ background: 'linear-gradient(135deg, rgba(99,91,255,0.05) 0%, rgba(0,212,170,0.05) 100%)', border: '2px solid var(--brand-primary)' }}>
                  <p style={{ marginBottom: 'var(--space-3)' }}>
                    Keep robots.txt as your durable control surface for crawler access. RFC 9309 makes the rules predictable under redirects, errors, and caching.
                  </p>
                  <p style={{ marginBottom: 'var(--space-3)' }}>
                    Use AIPREF to express <strong>how</strong> content may be used after access. Together, they reduce ambiguity for publishers and responsible crawlers.
                  </p>
                  <p style={{ margin: 0 }}>
                    Remember: robots.txt is cooperative signaling, not security. Use real authentication for sensitive resources.
                  </p>
                </div>
              </section>

              {/* Further Reading */}
              <section>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  Further Reading
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  <a
                    href="https://www.rfc-editor.org/rfc/rfc9309.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card"
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-1)', color: 'var(--gray-900)' }}>
                        RFC 9309: Robots Exclusion Protocol
                      </h3>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', margin: 0 }}>
                        Official IETF specification (September 2022)
                      </p>
                    </div>
                    <ExternalLink size={20} style={{ color: 'var(--brand-primary)' }} />
                  </a>

                  <a
                    href="https://datatracker.ietf.org/doc/html/rfc9309"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card"
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-1)', color: 'var(--gray-900)' }}>
                        RFC 9309 on IETF Datatracker
                      </h3>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', margin: 0 }}>
                        Full text with errata and discussion
                      </p>
                    </div>
                    <ExternalLink size={20} style={{ color: 'var(--brand-primary)' }} />
                  </a>

                  <a
                    href="https://datatracker.ietf.org/doc/draft-ietf-aipref-attach/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card"
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-1)', color: 'var(--gray-900)' }}>
                        AIPREF Attachment Specification
                      </h3>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', margin: 0 }}>
                        How AIPREF extends RFC 9309 with Content-Usage
                      </p>
                    </div>
                    <ExternalLink size={20} style={{ color: 'var(--brand-primary)' }} />
                  </a>

                  <Link
                    href="/blog/aipref-by-ietf"
                    className="card"
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-1)', color: 'var(--gray-900)' }}>
                        AIPREF: AI Usage Preferences
                      </h3>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', margin: 0 }}>
                        Our comprehensive guide to the AIPREF specification
                      </p>
                    </div>
                    <ArrowRight size={20} style={{ color: 'var(--brand-primary)' }} />
                  </Link>
                </div>
              </section>
            </div>
          </div>

          {/* CTA Section */}
          <section style={{ background: 'var(--gray-50)', borderTop: '1px solid var(--gray-200)' }}>
            <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: 'var(--space-16) var(--space-6)' }}>
              <div className="card" style={{ background: 'var(--gradient-brand)', color: 'var(--white)', textAlign: 'center' }}>
                <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--white)' }}>
                  Need help implementing robots.txt and AIPREF?
                </h2>
                <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)', opacity: 0.9 }}>
                  Learn how Originary helps publishers combine crawl control with verifiable usage preferences and cryptographic receipts.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link
                    href="/developers"
                    className="btn btn-lg"
                    style={{ background: 'var(--white)', color: 'var(--brand-primary)', border: 'none' }}
                  >
                    <span>View Documentation</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/company/contact"
                    className="btn btn-lg btn-ghost"
                    style={{ color: 'var(--white)', border: '1px solid rgba(255,255,255,0.3)' }}
                  >
                    <span>Talk to Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  )
}

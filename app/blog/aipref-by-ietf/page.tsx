import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { Calendar, User, ArrowRight, ExternalLink, FileText, Code, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AIPREF: A Common Language for AI Usage Preferences · Originary Blog',
  description: 'Understanding the IETF AIPREF specification for expressing AI usage preferences through HTTP headers and robots.txt - what it is, how it works, and how to implement it today.',
  keywords: 'AIPREF, IETF, AI preferences, robots.txt, Content-Usage header, AI training, machine learning, content licensing, publisher control',
  authors: [{ name: 'Originary Team' }],
  openGraph: {
    type: 'article',
    title: 'AIPREF: A Common Language for AI Usage Preferences',
    description: 'Understanding the IETF AIPREF specification for expressing AI usage preferences through HTTP headers and robots.txt',
    url: 'https://www.originary.xyz/blog/aipref-by-ietf',
    images: [
      {
        url: 'https://www.originary.xyz/og.jpg',
        width: 1200,
        height: 630,
        alt: 'AIPREF: AI Usage Preferences'
      }
    ],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIPREF: A Common Language for AI Usage Preferences',
    description: 'Understanding the IETF AIPREF specification for expressing AI usage preferences',
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originary',
    creator: '@originary',
  },
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.originary.xyz/blog/aipref-by-ietf',
  },
}

export default function AIPREFArticle() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "AIPREF: A Common Language for AI Usage Preferences",
    "description": "Understanding the IETF AIPREF specification for expressing AI usage preferences through HTTP headers and robots.txt",
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
    "datePublished": "2025-10-14",
    "dateModified": "2025-10-14",
    "mainEntityOfPage": "https://www.originary.xyz/blog/aipref-by-ietf",
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
              <span style={{ color: 'var(--gray-900)' }}>AIPREF</span>
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
                AIPREF: A Common Language for AI Usage Preferences
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--gray-600)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-8)'
              }}>
                The IETF AIPREF working group is developing a standardized way for publishers to express how their content should be used by automated systems. Here&apos;s what it is, how it works, and how to implement it today.
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
              {/* Introduction */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  As AI systems increasingly rely on web content for training and operation, publishers need a clear, standardized way to communicate their usage preferences. The IETF AI Preferences (AIPREF) working group addresses this need by defining both a vocabulary for expressing usage preferences and mechanisms for attaching those preferences to content.
                </p>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Unlike informal conventions or platform-specific controls, AIPREF provides an Internet-scale standard that works across the HTTP ecosystem. It builds on existing infrastructure (robots.txt, HTTP headers) while introducing purpose-specific semantics that robots.txt alone cannot provide.
                </p>
              </section>

              {/* What is AIPREF */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  What is AIPREF?
                </h2>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  AIPREF consists of two complementary specifications currently in draft at the IETF:
                </p>

                <div className="card" style={{ marginBottom: 'var(--space-6)', background: 'var(--gray-50)' }}>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                    1. Vocabulary Specification (draft-ietf-aipref-vocab)
                  </h3>
                  <p style={{ marginBottom: 'var(--space-3)', color: 'var(--gray-700)' }}>
                    Defines a structured vocabulary for expressing preferences about how content should be used by automated systems. The vocabulary includes categories like <code style={{ background: 'var(--white)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>bots</code>, <code style={{ background: 'var(--white)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>train-ai</code>, <code style={{ background: 'var(--white)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>train-genai</code>, and <code style={{ background: 'var(--white)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>search</code>, with allow (<code style={{ background: 'var(--white)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>y</code>) or disallow (<code style={{ background: 'var(--white)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>n</code>) values.
                  </p>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
                    Latest version: draft-ietf-aipref-vocab-03 (September 2025)
                  </p>
                </div>

                <div className="card" style={{ marginBottom: 'var(--space-6)', background: 'var(--gray-50)' }}>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                    2. Attachment Specification (draft-ietf-aipref-attach)
                  </h3>
                  <p style={{ marginBottom: 'var(--space-3)', color: 'var(--gray-700)' }}>
                    Specifies how to associate preferences with content using HTTP headers and robots.txt. This includes the <code style={{ background: 'var(--white)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>Content-Usage</code> HTTP header field and updates to RFC 9309 (robots.txt) to support preference directives.
                  </p>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
                    Latest version: draft-ietf-aipref-attach-03 (September 2025)
                  </p>
                </div>
              </section>

              {/* Usage Categories */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  Usage Categories
                </h2>

                <p style={{ marginBottom: 'var(--space-6)' }}>
                  The vocabulary defines four primary categories, organized hierarchically:
                </p>

                <div style={{ marginBottom: 'var(--space-8)' }}>
                  <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
                    <div style={{ display: 'flex', alignItems: 'start', gap: 'var(--space-4)' }}>
                      <Code size={24} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                          Automated Processing (<code style={{ fontSize: 'var(--text-sm)' }}>bots</code>)
                        </h3>
                        <p style={{ color: 'var(--gray-700)', marginBottom: 'var(--space-2)' }}>
                          The broadest category covering all automated processing of content. This is the parent category for more specific usage types.
                        </p>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
                          Use case: Blanket permission or restriction for any automated access
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
                    <div style={{ display: 'flex', alignItems: 'start', gap: 'var(--space-4)' }}>
                      <Code size={24} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                          AI Training (<code style={{ fontSize: 'var(--text-sm)' }}>train-ai</code>)
                        </h3>
                        <p style={{ color: 'var(--gray-700)', marginBottom: 'var(--space-2)' }}>
                          A subset of automated processing specifically for training machine learning models. This includes both generative and non-generative AI systems.
                        </p>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
                          Use case: Allow search indexing but restrict model training
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
                    <div style={{ display: 'flex', alignItems: 'start', gap: 'var(--space-4)' }}>
                      <Code size={24} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                          Generative AI Training (<code style={{ fontSize: 'var(--text-sm)' }}>train-genai</code>)
                        </h3>
                        <p style={{ color: 'var(--gray-700)', marginBottom: 'var(--space-2)' }}>
                          A subset of AI training focused specifically on training models that generate synthetic content (text, images, audio, etc.).
                        </p>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
                          Use case: Allow classification models but restrict generative models
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div style={{ display: 'flex', alignItems: 'start', gap: 'var(--space-4)' }}>
                      <Code size={24} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                          Search (<code style={{ fontSize: 'var(--text-sm)' }}>search</code>)
                        </h3>
                        <p style={{ color: 'var(--gray-700)', marginBottom: 'var(--space-2)' }}>
                          Content indexing and discovery for search applications that direct users to original content locations.
                        </p>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
                          Use case: Maintain search visibility while restricting AI training
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ background: 'rgba(0, 212, 170, 0.05)', border: '1px solid rgba(0, 212, 170, 0.2)' }}>
                  <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                    Hierarchical Inheritance
                  </h4>
                  <p style={{ color: 'var(--gray-700)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
                    Categories inherit from their parents. If you set <code style={{ background: 'rgba(255,255,255,0.8)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>bots=n</code> but don&apos;t specify <code style={{ background: 'rgba(255,255,255,0.8)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>search</code>, search will inherit the disallow preference. However, explicit values always override inherited ones - <code style={{ background: 'rgba(255,255,255,0.8)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>bots=n, search=y</code> allows search while disallowing other automated processing.
                  </p>
                </div>
              </section>

              {/* How to Attach Preferences */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  How to Attach Preferences
                </h2>

                <p style={{ marginBottom: 'var(--space-6)' }}>
                  AIPREF defines two mechanisms for associating preferences with content:
                </p>

                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                  1. HTTP Content-Usage Header
                </h3>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  The most granular method. Add the <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>Content-Usage</code> header to HTTP responses to specify preferences for specific resources:
                </p>

                <div className="card" style={{ background: 'var(--gray-900)', color: 'var(--white)', marginBottom: 'var(--space-6)' }}>
                  <p style={{ fontSize: 'var(--text-sm)', fontFamily: 'monospace', margin: 0, whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>
{`HTTP/1.1 200 OK
Content-Type: text/html
Content-Usage: train-ai=n

<!DOCTYPE html>
<html>...</html>`}
                  </p>
                </div>

                <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                  Implementation Examples
                </h4>

                <div style={{ display: 'grid', gap: 'var(--space-4)', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginBottom: 'var(--space-8)' }}>
                  <div className="card" style={{ background: 'var(--gray-50)' }}>
                    <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>Nginx</p>
                    <pre style={{ background: 'var(--gray-900)', color: 'var(--white)', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-xs)', overflow: 'auto', margin: 0 }}>
{`location / {
  add_header Content-Usage "train-ai=n" always;
}`}
                    </pre>
                  </div>

                  <div className="card" style={{ background: 'var(--gray-50)' }}>
                    <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>Apache (.htaccess)</p>
                    <pre style={{ background: 'var(--gray-900)', color: 'var(--white)', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-xs)', overflow: 'auto', margin: 0 }}>
{`<IfModule mod_headers.c>
  Header set Content-Usage "train-ai=n"
</IfModule>`}
                    </pre>
                  </div>

                  <div className="card" style={{ background: 'var(--gray-50)' }}>
                    <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>Express.js</p>
                    <pre style={{ background: 'var(--gray-900)', color: 'var(--white)', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-xs)', overflow: 'auto', margin: 0 }}>
{`app.use((req, res, next) => {
  res.setHeader('Content-Usage', 'train-ai=n');
  next();
});`}
                    </pre>
                  </div>

                  <div className="card" style={{ background: 'var(--gray-50)' }}>
                    <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>Cloudflare Workers</p>
                    <pre style={{ background: 'var(--gray-900)', color: 'var(--white)', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-xs)', overflow: 'auto', margin: 0 }}>
{`export default {
  async fetch(request) {
    const response = await fetch(request);
    const headers = new Headers(response.headers);
    headers.set('Content-Usage', 'train-ai=n');
    return new Response(response.body, {
      headers,
      status: response.status
    });
  }
};`}
                    </pre>
                  </div>
                </div>

                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                  2. robots.txt Content-Usage Directive
                </h3>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  For path-scoped preferences, add <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>Content-Usage</code> directives to your robots.txt file:
                </p>

                <div className="card" style={{ background: 'var(--gray-900)', color: 'var(--white)', marginBottom: 'var(--space-4)' }}>
                  <p style={{ fontSize: 'var(--text-sm)', fontFamily: 'monospace', margin: 0, whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>
{`User-Agent: *
Allow: /
Content-Usage: train-ai=n

User-Agent: *
Allow: /public-research/
Content-Usage: /public-research/ train-ai=y, train-genai=n`}
                  </p>
                </div>

                <div className="card" style={{ background: 'rgba(255, 193, 7, 0.05)', border: '1px solid rgba(255, 193, 7, 0.2)' }}>
                  <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                    Path Matching Rules
                  </h4>
                  <p style={{ color: 'var(--gray-700)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
                    The robots.txt mechanism uses longest-prefix matching. If a resource path matches multiple <code style={{ background: 'rgba(255,255,255,0.8)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>Content-Usage</code> directives, the one with the longest matching path prefix applies. This allows you to set site-wide defaults and override them for specific paths.
                  </p>
                </div>
              </section>

              {/* Resolution Rules */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  Preference Resolution Rules
                </h2>

                <p style={{ marginBottom: 'var(--space-6)' }}>
                  When preferences come from multiple sources or specify overlapping categories, AIPREF defines clear resolution rules:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
                  <div className="card">
                    <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'var(--brand-primary)',
                        color: 'var(--white)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: 'var(--text-sm)',
                        flexShrink: 0
                      }}>1</div>
                      <div>
                        <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                          Explicit Values Win
                        </h3>
                        <p style={{ color: 'var(--gray-700)', margin: 0 }}>
                          An explicit <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>y</code> or <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>n</code> for a category takes precedence over inherited values from parent categories.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'var(--brand-primary)',
                        color: 'var(--white)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: 'var(--text-sm)',
                        flexShrink: 0
                      }}>2</div>
                      <div>
                        <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                          Specific Overrides General
                        </h3>
                        <p style={{ color: 'var(--gray-700)', margin: 0 }}>
                          More specific categories override broader ones. If <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>train-genai</code> isn&apos;t specified, it inherits from <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>train-ai</code>, which inherits from <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>bots</code>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'var(--brand-primary)',
                        color: 'var(--white)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: 'var(--text-sm)',
                        flexShrink: 0
                      }}>3</div>
                      <div>
                        <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                          Multiple Sources: Disallow Wins
                        </h3>
                        <p style={{ color: 'var(--gray-700)', margin: 0 }}>
                          When combining preferences from HTTP headers and robots.txt, if any source indicates <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>n</code> (disallow), the usage is disallowed. Otherwise, if any indicates <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>y</code> (allow), it&apos;s allowed.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'var(--brand-primary)',
                        color: 'var(--white)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: 'var(--text-sm)',
                        flexShrink: 0
                      }}>4</div>
                      <div>
                        <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                          Unknown is Valid
                        </h3>
                        <p style={{ color: 'var(--gray-700)', margin: 0 }}>
                          If a category isn&apos;t specified and can&apos;t be inherited, the preference is &quot;unknown.&quot; This is a valid state - not every publisher needs to express preferences for every category.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ background: 'var(--gray-900)', color: 'var(--white)' }}>
                  <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
                    Example Resolution
                  </h4>
                  <p style={{ marginBottom: 'var(--space-3)', opacity: 0.9, fontSize: 'var(--text-sm)' }}>
                    Given: <code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>bots=y, train-ai=n, train-genai=y</code>
                  </p>
                  <ul style={{ paddingLeft: 'var(--space-6)', margin: 0, fontSize: 'var(--text-sm)', lineHeight: 1.8, opacity: 0.9 }}>
                    <li><code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>bots</code>: Allow (explicit)</li>
                    <li><code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>train-ai</code>: Disallow (explicit, overrides parent)</li>
                    <li><code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>train-genai</code>: Allow (explicit, overrides parent train-ai)</li>
                    <li><code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>search</code>: Allow (inherits from bots)</li>
                  </ul>
                </div>
              </section>

              {/* Practical Considerations */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  Practical Considerations
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                  <div>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                      Work in Progress
                    </h3>
                    <p style={{ marginBottom: 'var(--space-3)' }}>
                      AIPREF is currently in draft status at the IETF. While the core concepts are stable, details may change before final standardization. Early adopters should track the working group&apos;s progress and be prepared to update implementations.
                    </p>
                    <div className="card" style={{ background: 'var(--gray-50)' }}>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-700)', margin: 0 }}>
                        <strong>Current draft versions:</strong> draft-ietf-aipref-vocab-03 and draft-ietf-aipref-attach-03 (September 2025). Drafts expire March 9, 2026.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                      No Built-in Enforcement
                    </h3>
                    <p>
                      AIPREF provides a mechanism for expressing preferences, not enforcing them. The specification does not define compliance mechanisms, auditing, or consequences for ignoring preferences. Publishers seeking enforcement should layer AIPREF with contracts, terms of service, or technical access controls.
                    </p>
                  </div>

                  <div>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                      Legal Context Matters
                    </h3>
                    <p style={{ marginBottom: 'var(--space-3)' }}>
                      The specification explicitly notes that preferences do not automatically create legal rights. Recognized priorities (accessibility, security, legal obligations) may override preferences. For example:
                    </p>
                    <ul style={{ paddingLeft: 'var(--space-6)', margin: 0, color: 'var(--gray-700)' }}>
                      <li style={{ marginBottom: 'var(--space-2)' }}>Accessibility tools may ignore <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>bots=n</code> to serve users with disabilities</li>
                      <li style={{ marginBottom: 'var(--space-2)' }}>Security researchers may process content despite restrictions</li>
                      <li style={{ marginBottom: 'var(--space-2)' }}>Existing licensing agreements supersede AIPREF preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                      Relationship to Other Signals
                    </h3>
                    <p style={{ marginBottom: 'var(--space-4)' }}>
                      AIPREF complements rather than replaces existing mechanisms:
                    </p>
                    <div className="card" style={{ marginBottom: 'var(--space-3)' }}>
                      <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                        robots.txt (RFC 9309)
                      </h4>
                      <p style={{ color: 'var(--gray-700)', fontSize: 'var(--text-sm)', margin: 0 }}>
                        Handles crawl access control. AIPREF extends robots.txt with purpose semantics but doesn&apos;t replace its core function of controlling crawler access.
                      </p>
                    </div>
                    <div className="card" style={{ marginBottom: 'var(--space-3)' }}>
                      <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                        ai.txt
                      </h4>
                      <p style={{ color: 'var(--gray-700)', fontSize: 'var(--text-sm)', margin: 0 }}>
                        An informal convention for AI-specific permissions. AIPREF provides a standardized alternative with formal IETF backing and richer semantics.
                      </p>
                    </div>
                    <div className="card">
                      <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                        C2PA / Content Credentials
                      </h4>
                      <p style={{ color: 'var(--gray-700)', fontSize: 'var(--text-sm)', margin: 0 }}>
                        Handles content provenance and authenticity. AIPREF expresses usage preferences; C2PA verifies content lineage. They work together - AIPREF states rules, C2PA provides evidence of compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Implementation Roadmap */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  Implementation Roadmap
                </h2>

                <p style={{ marginBottom: 'var(--space-6)' }}>
                  For organizations looking to adopt AIPREF today:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  <div className="card" style={{ borderLeft: '4px solid var(--brand-primary)' }}>
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                      Phase 1: Express Baseline Preferences
                    </h3>
                    <p style={{ color: 'var(--gray-700)', marginBottom: 'var(--space-3)' }}>
                      Start with robots.txt directives for site-wide or path-based preferences. This requires minimal infrastructure changes and provides broad coverage.
                    </p>
                    <div style={{ background: 'var(--gray-50)', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)' }}>
                      <p style={{ fontSize: 'var(--text-sm)', fontFamily: 'monospace', margin: 0, whiteSpace: 'pre-wrap' }}>
{`User-Agent: *
Content-Usage: train-genai=n, search=y`}
                      </p>
                    </div>
                  </div>

                  <div className="card" style={{ borderLeft: '4px solid var(--brand-secondary)' }}>
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                      Phase 2: Add HTTP Header Support
                    </h3>
                    <p style={{ color: 'var(--gray-700)', marginBottom: 'var(--space-2)' }}>
                      Implement <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>Content-Usage</code> headers at your CDN, reverse proxy, or application layer. This enables resource-specific preferences and more granular control.
                    </p>
                  </div>

                  <div className="card" style={{ borderLeft: '4px solid var(--brand-accent)' }}>
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                      Phase 3: Document and Communicate
                    </h3>
                    <p style={{ color: 'var(--gray-700)', marginBottom: 'var(--space-2)' }}>
                      Publish your AIPREF policy in human-readable form. Link to it from your terms of service. Make it clear to AI system operators what your preferences are and why.
                    </p>
                  </div>

                  <div className="card" style={{ borderLeft: '4px solid var(--success)' }}>
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                      Phase 4: Monitor and Enforce
                    </h3>
                    <p style={{ color: 'var(--gray-700)', marginBottom: 'var(--space-2)' }}>
                      Track which systems respect your preferences. Consider pairing AIPREF with technical access controls (authentication, rate limiting) and legal agreements (licenses, terms of service) for enforcement.
                    </p>
                  </div>
                </div>
              </section>

              {/* Originary Position */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  Originary&apos;s Position
                </h2>

                <div className="card" style={{ background: 'linear-gradient(135deg, rgba(99,91,255,0.05) 0%, rgba(0,212,170,0.05) 100%)', border: '2px solid var(--brand-primary)' }}>
                  <div style={{ display: 'flex', alignItems: 'start', gap: 'var(--space-4)' }}>
                    <Shield size={32} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                    <div>
                      <p style={{ marginBottom: 'var(--space-3)', color: 'var(--gray-700)' }}>
                        We support the IETF AIPREF effort and view it as a critical piece of infrastructure for the agentic web. Standardized, machine-readable preference signals reduce friction, improve transparency, and create conditions for responsible AI development at Internet scale.
                      </p>
                      <p style={{ marginBottom: 'var(--space-3)', color: 'var(--gray-700)' }}>
                        Originary systems already read AIPREF preferences where publishers expose them and incorporate those preferences into our policy engine. We pair preference signals with cryptographic receipts and provenance tracking, enabling publishers to produce verifiable evidence of how their content was accessed and used.
                      </p>
                      <p style={{ margin: 0, color: 'var(--gray-700)' }}>
                        As the specification matures, we&apos;ll continue to track the working group&apos;s progress and update our implementations to stay aligned with the final standard.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Further Reading */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
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
                    href="https://ietf-wg-aipref.github.io/drafts/draft-ietf-aipref-vocab.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card"
                    style={{
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-1)', color: 'var(--gray-900)' }}>
                        AIPREF Vocabulary Specification
                      </h3>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', margin: 0 }}>
                        draft-ietf-aipref-vocab - Official IETF working draft
                      </p>
                    </div>
                    <ExternalLink size={20} style={{ color: 'var(--brand-primary)' }} />
                  </a>

                  <a
                    href="https://ietf-wg-aipref.github.io/drafts/draft-ietf-aipref-attach.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card"
                    style={{
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
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
                        draft-ietf-aipref-attach - HTTP and robots.txt integration
                      </p>
                    </div>
                    <ExternalLink size={20} style={{ color: 'var(--brand-primary)' }} />
                  </a>

                  <a
                    href="https://datatracker.ietf.org/wg/aipref/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card"
                    style={{
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-1)', color: 'var(--gray-900)' }}>
                        IETF AIPREF Working Group
                      </h3>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', margin: 0 }}>
                        Official working group page and charter
                      </p>
                    </div>
                    <ExternalLink size={20} style={{ color: 'var(--brand-primary)' }} />
                  </a>

                  <a
                    href="https://spec.c2pa.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card"
                    style={{
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-1)', color: 'var(--gray-900)' }}>
                        C2PA Content Credentials
                      </h3>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', margin: 0 }}>
                        Content provenance and authenticity framework
                      </p>
                    </div>
                    <ExternalLink size={20} style={{ color: 'var(--brand-primary)' }} />
                  </a>
                </div>
              </section>
            </div>
          </div>

          {/* CTA Section */}
          <section style={{ background: 'var(--gray-50)', borderTop: '1px solid var(--gray-200)' }}>
            <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: 'var(--space-16) var(--space-6)' }}>
              <div className="card" style={{ background: 'var(--gradient-brand)', color: 'var(--white)', textAlign: 'center' }}>
                <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--white)' }}>
                  Ready to implement AIPREF?
                </h2>
                <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)', opacity: 0.9 }}>
                  Learn how Originary helps publishers express preferences, verify compliance, and generate cryptographic receipts for AI access.
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

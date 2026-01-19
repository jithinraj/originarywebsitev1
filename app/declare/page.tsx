import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { ArrowRight, Github, FileText, Shield, Code, Terminal, Globe, CheckCircle, AlertTriangle, Layers } from 'lucide-react'
import { FaqAccordion, FaqJsonLd } from '@/components/faq'
import { declareFaqs } from '@/content/faqs'

export const metadata: Metadata = {
  title: 'Declare | AI Policy Pack Generator',
  description: 'Generate your AI policy pack from one file. Write peac-policy.yaml, generate peac.txt, robots AI directives, AIPREF templates, and a human policy page. Built on PEAC Protocol.',
  keywords: 'AI policy, AI Access, AIPREF, peac.txt, AI crawler policy, AI bot detection, PEAC Protocol, HTTP 402, x402, crawling protection, AI policy generator',
  robots: 'index,follow',
  alternates: {
    canonical: '/declare'
  },
  openGraph: {
    title: 'Declare | AI Policy Pack Generator | Originary',
    description: 'Generate your AI policy pack from one file. Write peac-policy.yaml, generate peac.txt, robots AI directives, AIPREF templates, and a human policy page.',
    url: '/declare',
    type: 'website',
    images: ['/og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Declare | AI Policy Pack Generator | Originary',
    description: 'Generate your AI policy pack from one file.',
    images: ['/og.jpg'],
  }
}

export default function DeclarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PEAC Policy Kit (Originary Declare)",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Any",
    "brand": {
      "@type": "Brand",
      "name": "Originary"
    },
    "downloadUrl": "https://github.com/peacprotocol/peac",
    "isAccessibleForFree": true,
    "license": "https://opensource.org/licenses/Apache-2.0",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "softwareVersion": "0.9.27",
    "description": "One config file to declare AI policies for your domain. Generates peac.txt, robots AI rules, AIPREF headers, and a /ai-policy page. Includes Policy Profiles for rapid deployment."
  }

  const generatedOutputs = [
    {
      icon: <FileText size={24} />,
      title: '.well-known/peac.txt',
      description: 'The primary AI policy discovery file. Advertises your AIPREF URL, 402 access control, payment rails (x402, Stripe), provenance (C2PA), receipt verification endpoint, and public keys.',
      whoReads: 'AI agents, crawlers, PEAC-compatible clients'
    },
    {
      icon: <Shield size={24} />,
      title: 'robots-ai-snippet.txt',
      description: 'A block to append to robots.txt pointing AI crawlers at /.well-known/peac.txt instead of ad hoc files.',
      whoReads: 'AI crawlers checking robots.txt'
    },
    {
      icon: <Code size={24} />,
      title: 'aipref-headers.json',
      description: 'AIPREF JSON document and HTTP header templates so AIPREF-compatible crawlers see the same policy that PEAC-Receipts snapshot.',
      whoReads: 'AIPREF-compatible crawlers, CDN edge configs'
    },
    {
      icon: <Globe size={24} />,
      title: 'ai-policy.md',
      description: 'Human-readable policy page in Markdown explaining your AI rules for lawyers, users, and partners.',
      whoReads: 'Humans, legal teams, compliance audits'
    }
  ]

  const policyFields = [
    { field: 'crawl', description: 'Web crawling and data collection' },
    { field: 'index', description: 'Search engine indexing' },
    { field: 'train', description: 'ML/AI model training' },
    { field: 'inference', description: 'RAG and real-time inference' },
    { field: 'ai_input', description: 'Direct AI consumption' },
    { field: 'ai_index', description: 'AI search indexing' }
  ]

  const policyProfiles = [
    {
      name: 'news-media',
      description: 'Optimized for publishers. Allows indexing and search, requires attribution, restricts training without license.',
      bestFor: 'News sites, blogs, content publishers'
    },
    {
      name: 'api-provider',
      description: 'Monetization-focused. Enables 402 payment challenges, receipt requirements, rate limiting.',
      bestFor: 'SaaS APIs, data providers, AI services'
    },
    {
      name: 'open-source',
      description: 'Permissive defaults. Allows most uses with attribution, designed for community projects.',
      bestFor: 'OSS projects, documentation, educational content'
    },
    {
      name: 'saas-docs',
      description: 'Balanced approach. Allows AI assistance for docs, restricts training on proprietary content.',
      bestFor: 'Product documentation, help centers, knowledge bases'
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqJsonLd items={declareFaqs} />
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="section" style={{ background: 'var(--gradient-mesh)', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              {/* Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  background: 'rgba(99, 91, 255, 0.1)',
                  border: '1px solid rgba(99, 91, 255, 0.2)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-2) var(--space-4)',
                  marginBottom: 'var(--space-4)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 500,
                  color: 'var(--brand-primary)'
                }}
              >
                <Github size={16} />
                <span>Free and open source</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                marginBottom: 'var(--space-6)',
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                color: 'var(--gray-900)'
              }}>
                Generate your AI policy pack{' '}
                <span className="text-gradient">from one file.</span>
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--gray-600)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-6)',
                maxWidth: '750px',
                margin: '0 auto var(--space-6) auto'
              }}>
                Write <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-lg)' }}>peac-policy.yaml</code>. Generate <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-lg)' }}>/.well-known/peac.txt</code>, robots AI directives, AIPREF templates, and a human policy page.
              </p>

              {/* Proof strip */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-6)',
                flexWrap: 'wrap',
                marginBottom: 'var(--space-8)',
                fontSize: 'var(--text-sm)',
                color: 'var(--gray-500)'
              }}>
                <span>Runs locally. No tracking.</span>
                <span>Deterministic evaluation.</span>
                <span>Multi-format output.</span>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="#quickstart"
                  className="btn btn-primary btn-lg"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}
                >
                  <Terminal size={18} />
                  Install CLI
                </a>
                <a
                  href="https://github.com/peacprotocol/peac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}
                >
                  <Github size={18} />
                  View on GitHub
                </a>
              </div>

              {/* Trademark proof */}
              <p
                style={{
                  fontSize: '11px',
                  lineHeight: 1.8,
                  color: 'var(--gray-400)',
                  maxWidth: '500px',
                  margin: 'var(--space-8) auto 0',
                  fontWeight: 400,
                  letterSpacing: '0.01em'
                }}
              >
                <span style={{ color: 'var(--gray-500)' }}>ORIGINARY™</span> - Open software. Built on PEAC Protocol.
              </p>
            </div>
          </div>
        </section>

        {/* What This Does Section - Trust Critical */}
        <section className="section" style={{ background: 'var(--white)' }}>
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: 'var(--space-8)',
                color: 'var(--gray-900)'
              }}>
                What this does and does not do
              </h2>

              <div className="grid grid-2" style={{ gap: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
                {/* Does */}
                <div className="card" style={{ background: 'rgba(0, 212, 170, 0.05)', border: '1px solid rgba(0, 212, 170, 0.2)' }}>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <CheckCircle size={20} />
                    What it does
                  </h3>
                  <ul style={{ margin: 0, paddingLeft: 'var(--space-5)', color: 'var(--gray-700)', lineHeight: 1.8 }}>
                    <li>Generates consistent policy surfaces from one source file</li>
                    <li>Reduces the busywork of maintaining multiple conflicting files</li>
                    <li>Provides documented intent for legal clarity</li>
                    <li>Positions you for future enforcement (402, receipts)</li>
                    <li>Runs locally with no tracking or SaaS dependency</li>
                  </ul>
                </div>

                {/* Does Not */}
                <div className="card" style={{ background: 'rgba(251, 191, 36, 0.05)', border: '1px solid rgba(251, 191, 36, 0.3)' }}>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--warning)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <AlertTriangle size={20} />
                    What it does not do
                  </h3>
                  <ul style={{ margin: 0, paddingLeft: 'var(--space-5)', color: 'var(--gray-700)', lineHeight: 1.8 }}>
                    <li>Guarantee bot compliance (policy files are advisory)</li>
                    <li>Force crawlers to respect your rules</li>
                    <li>Replace your auth, rate limits, or access controls</li>
                    <li>Provide legal protection by itself</li>
                  </ul>
                </div>
              </div>

              <div className="card" style={{
                padding: 'var(--space-6)',
                background: 'var(--gray-50)',
                border: '1px solid var(--gray-200)',
                textAlign: 'center'
              }}>
                <p style={{ margin: 0, color: 'var(--gray-700)', lineHeight: 1.7 }}>
                  <strong>Enforcement requires controls you run:</strong> rate limits, authentication, HTTP 402 challenges, and PEAC receipts. Policy Kit handles the declaration layer - consistent signals across all surfaces. Enforcement comes from your infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What It Generates Section */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Output files
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-600)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                From a single <code style={{ background: 'var(--gray-200)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>peac-policy.yaml</code>, Policy Kit generates:
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: 'var(--space-6)', maxWidth: '1000px', margin: '0 auto' }}>
              {generatedOutputs.map((output, index) => (
                <div
                  key={index}
                  className="card"
                  style={{
                    display: 'flex',
                    gap: 'var(--space-4)',
                    alignItems: 'flex-start'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-lg)',
                      background: 'linear-gradient(135deg, var(--brand-primary)20, var(--brand-primary)10)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--brand-primary)',
                      flexShrink: 0
                    }}
                  >
                    {output.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 700,
                      marginBottom: 'var(--space-2)',
                      color: 'var(--gray-900)',
                      fontFamily: 'var(--font-mono)'
                    }}>
                      {output.title}
                    </h3>
                    <p style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-600)',
                      lineHeight: 1.6,
                      marginBottom: 'var(--space-2)'
                    }}>
                      {output.description}
                    </p>
                    <p style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--gray-500)',
                      margin: 0
                    }}>
                      <strong>Who reads this:</strong> {output.whoReads}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Policy Profiles Section */}
        <section className="section" style={{ background: 'var(--white)' }}>
          <div className="container">
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    background: 'rgba(99, 91, 255, 0.1)',
                    border: '1px solid rgba(99, 91, 255, 0.2)',
                    borderRadius: 'var(--radius-full)',
                    padding: 'var(--space-2) var(--space-4)',
                    marginBottom: 'var(--space-4)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 500,
                    color: 'var(--brand-primary)'
                  }}
                >
                  <Layers size={16} />
                  <span>New in v0.9.27</span>
                </div>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-4)',
                  color: 'var(--gray-900)'
                }}>
                  Policy Profiles
                </h2>
                <p style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--gray-600)',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                  Pre-built configurations for common use cases. Start with a profile, customize as needed.
                </p>
              </div>

              <div className="grid grid-2" style={{ gap: 'var(--space-6)' }}>
                {policyProfiles.map((profile, index) => (
                  <div
                    key={index}
                    className="card"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--space-3)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                      <code style={{
                        background: 'var(--brand-primary)',
                        color: 'white',
                        padding: 'var(--space-1) var(--space-3)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 600
                      }}>
                        {profile.name}
                      </code>
                    </div>
                    <p style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--gray-600)',
                      lineHeight: 1.6,
                      margin: 0
                    }}>
                      {profile.description}
                    </p>
                    <p style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--gray-500)',
                      margin: 0
                    }}>
                      <strong>Best for:</strong> {profile.bestFor}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
                <pre style={{
                  display: 'inline-block',
                  background: 'var(--gray-100)',
                  padding: 'var(--space-4) var(--space-6)',
                  borderRadius: 'var(--radius-lg)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--gray-700)',
                  textAlign: 'left'
                }}>
{`# Initialize with a profile
peac policy init --profile news-media`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Quickstart Section */}
        <section id="quickstart" className="section" style={{ background: 'var(--gray-900)', color: 'white' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: 'var(--space-4)',
                color: 'white'
              }}>
                Quickstart (CLI)
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-400)',
                textAlign: 'center',
                marginBottom: 'var(--space-8)'
              }}>
                Install the PEAC CLI and initialize your first policy file
              </p>

              {/* Step 1 */}
              <div style={{ marginBottom: 'var(--space-6)' }}>
                <h3 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-3)',
                  color: 'white'
                }}>
                  1. Install the PEAC CLI
                </h3>
                <pre style={{
                  background: 'var(--gray-800)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-lg)',
                  fontSize: 'var(--text-sm)',
                  overflow: 'auto',
                  color: 'var(--gray-300)',
                  border: '1px solid var(--gray-700)'
                }}>
{`# Using npm
npm install -g @peac/cli

# Using pnpm (recommended)
pnpm add -g @peac/cli`}
                </pre>
              </div>

              {/* Step 2 */}
              <div style={{ marginBottom: 'var(--space-6)' }}>
                <h3 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-3)',
                  color: 'white'
                }}>
                  2. Initialize your policy file
                </h3>
                <pre style={{
                  background: 'var(--gray-800)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-lg)',
                  fontSize: 'var(--text-sm)',
                  overflow: 'auto',
                  color: 'var(--gray-300)',
                  border: '1px solid var(--gray-700)'
                }}>
{`# Inside your site repo
peac policy init

# This creates peac-policy.yaml with prompts for:`}
                </pre>
                <div className="grid grid-3" style={{ gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
                  {policyFields.map((field, index) => (
                    <div
                      key={index}
                      style={{
                        background: 'var(--gray-800)',
                        padding: 'var(--space-3)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--gray-700)'
                      }}
                    >
                      <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'white', marginBottom: 'var(--space-1)' }}>
                        {field.field}
                      </div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-400)' }}>
                        {field.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div style={{ marginBottom: 'var(--space-6)' }}>
                <h3 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-3)',
                  color: 'white'
                }}>
                  3. Generate your policy surfaces
                </h3>
                <pre style={{
                  background: 'var(--gray-800)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-lg)',
                  fontSize: 'var(--text-sm)',
                  overflow: 'auto',
                  color: 'var(--gray-300)',
                  border: '1px solid var(--gray-700)'
                }}>
{`peac policy generate --out ./public

# This creates:
# ./public/.well-known/peac.txt
# ./public/robots-ai-snippet.txt
# ./public/aipref-headers.json
# ./public/ai-policy.md`}
                </pre>
              </div>

              {/* Step 4 */}
              <div style={{ marginBottom: 'var(--space-6)' }}>
                <h3 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-3)',
                  color: 'white'
                }}>
                  4. Validate anytime
                </h3>
                <pre style={{
                  background: 'var(--gray-800)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-lg)',
                  fontSize: 'var(--text-sm)',
                  overflow: 'auto',
                  color: 'var(--gray-300)',
                  border: '1px solid var(--gray-700)'
                }}>
{`peac policy validate`}
                </pre>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--gray-400)',
                  marginTop: 'var(--space-3)',
                  lineHeight: 1.6
                }}>
                  Validates <code style={{ background: 'var(--gray-700)', padding: '2px 4px', borderRadius: 'var(--radius-sm)' }}>peac-policy.yaml</code> and generated files against PEAC 0.9.27 schemas.
                </p>
              </div>

              {/* Step 5 */}
              <div>
                <h3 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-3)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)'
                }}>
                  5. Explain rules
                  <span style={{
                    background: 'var(--brand-primary)',
                    color: 'white',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600
                  }}>NEW</span>
                </h3>
                <pre style={{
                  background: 'var(--gray-800)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-lg)',
                  fontSize: 'var(--text-sm)',
                  overflow: 'auto',
                  color: 'var(--gray-300)',
                  border: '1px solid var(--gray-700)'
                }}>
{`# See effective rule for a specific subject and purpose
peac policy explain --subject agent:openai --purpose train

# Output: DENY (rule 2: "block-training-bots")`}
                </pre>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--gray-400)',
                  marginTop: 'var(--space-3)',
                  lineHeight: 1.6
                }}>
                  Debug your policy by testing specific subject + purpose combinations. Uses first-match-wins semantics.
                </p>
              </div>

              <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
                <a
                  href="https://peacprotocol.org/ai-policy-kit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                  style={{
                    background: 'var(--gray-800)',
                    color: 'white',
                    border: '1px solid var(--gray-700)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}
                >
                  <Github size={18} />
                  View full documentation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Recipes Section */}
        <section className="section" style={{ background: 'var(--white)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Deployment recipes
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-600)',
                textAlign: 'center',
                marginBottom: 'var(--space-10)'
              }}>
                Drop your generated files into any hosting environment
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div className="card">
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                    Static hosting (Vercel, Netlify, GitHub Pages)
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginBottom: 'var(--space-3)' }}>
                    Copy generated files to your <code style={{ background: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)' }}>public/</code> folder. The <code style={{ background: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)' }}>.well-known/</code> directory is served automatically.
                  </p>
                  <pre style={{ background: 'var(--gray-100)', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', margin: 0 }}>
{`cp -r .well-known public/
cp robots-ai-snippet.txt public/`}
                  </pre>
                </div>

                <div className="card">
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                    Next.js
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginBottom: 'var(--space-3)' }}>
                    Place files in <code style={{ background: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)' }}>public/.well-known/</code> or create a route handler for dynamic serving.
                  </p>
                  <pre style={{ background: 'var(--gray-100)', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', margin: 0 }}>
{`# Static: public/.well-known/peac.txt
# Dynamic: app/.well-known/peac.txt/route.ts`}
                  </pre>
                </div>

                <div className="card">
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                    Cloudflare Workers
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginBottom: 'var(--space-3)' }}>
                    Serve <code style={{ background: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)' }}>/.well-known/peac.txt</code> from a Worker or static assets.
                  </p>
                  <pre style={{ background: 'var(--gray-100)', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', margin: 0 }}>
{`# wrangler.toml: [site] bucket = "./public"`}
                  </pre>
                </div>

                <div className="card" style={{ background: 'var(--gray-50)', border: '1px dashed var(--gray-300)' }}>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-500)' }}>
                    WordPress plugin (coming soon)
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)' }}>
                    One-click publish of <code style={{ background: 'var(--gray-200)', padding: '2px 4px', borderRadius: 'var(--radius-sm)' }}>/.well-known/peac.txt</code> + ai-policy page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Roadmap
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-600)',
                textAlign: 'center',
                marginBottom: 'var(--space-10)'
              }}>
                Policy Kit tracks the PEAC 0.9.27 protocol line. Small, reliable, boring.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                  <div
                    style={{
                      background: 'var(--success)',
                      color: 'white',
                      padding: 'var(--space-2) var(--space-3)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      flexShrink: 0
                    }}
                  >
                    v0.9.27
                  </div>
                  <div>
                    <strong>Full CLI</strong>: <code style={{ background: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>init</code>, <code style={{ background: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>generate</code>, <code style={{ background: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>validate</code>, <code style={{ background: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>explain</code>. Policy Profiles (news-media, api-provider, open-source, saas-docs). CAL semantics with first-match-wins evaluation.
                  </div>
                </div>
                <div className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                  <div
                    style={{
                      background: 'var(--brand-primary)',
                      color: 'white',
                      padding: 'var(--space-2) var(--space-3)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      flexShrink: 0
                    }}
                  >
                    Next
                  </div>
                  <div>
                    <strong>Site checker + web wizard</strong>: Paste your domain, we fetch what you currently serve and show contradictions + missing pieces. Diff view before regenerating.
                  </div>
                </div>
                <div className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                  <div
                    style={{
                      background: 'var(--gray-400)',
                      color: 'white',
                      padding: 'var(--space-2) var(--space-3)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      flexShrink: 0
                    }}
                  >
                    Later
                  </div>
                  <div>
                    <strong>Evidence mode</strong>: Export configs for Gateway 402 and Verify API so HTTP 402 challenges and PEAC-Receipts derive from the same policy source.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" style={{ background: 'var(--white)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <FaqAccordion
                items={declareFaqs}
                title="Policy Kit FAQ"
                subtitle="Common questions about AI policy and compliance"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <div
              className="card cta-card"
              style={{
                padding: 'var(--space-12)',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)'
              }}>
                Ready to declare your AI policy?
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                marginBottom: 'var(--space-8)',
                maxWidth: '600px',
                margin: '0 auto var(--space-8) auto',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                Start with the CLI. Add enforcement (Trace, 402, receipts) when ready.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://github.com/peacprotocol/peac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg"
                  style={{
                    background: 'white',
                    color: 'var(--brand-primary)',
                    border: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}
                >
                  <Github size={18} />
                  Get PEAC CLI
                </a>
                <Link
                  href="/peac"
                  className="btn btn-lg"
                  style={{
                    background: 'transparent',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}
                >
                  Learn PEAC Protocol
                  <ArrowRight size={18} />
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

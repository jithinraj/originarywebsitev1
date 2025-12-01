import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { ArrowRight, Github, FileText, Shield, Code, Terminal, Globe, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'PEAC Policy Kit | Originary Declare',
  description: 'Originary Declare (PEAC Policy Kit) lets you declare AI crawling, training and usage policy once and generate peac.txt, AIPREF, robots rules and a human policy page in minutes. Built on the open PEAC Protocol with support for HTTP 402, x402 and AI bot protection.',
  keywords: 'AI policy, AIPREF, peac.txt, AI crawler policy, AI bot detection, PEAC Protocol, HTTP 402, x402, crawling protection, AI policy generator',
  alternates: {
    canonical: '/declare'
  },
  openGraph: {
    title: 'PEAC Policy Kit | Originary Declare',
    description: 'Declare your AI policy once. Make it visible everywhere. Generate peac.txt, AIPREF headers, robots rules and a human-readable AI policy page.',
    url: 'https://www.originary.xyz/declare',
    type: 'website',
    images: ['https://www.originary.xyz/og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PEAC Policy Kit | Originary Declare',
    description: 'Declare your AI policy once. Make it visible everywhere.',
    images: ['https://www.originary.xyz/og.jpg'],
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
    "downloadUrl": "https://github.com/peacprotocol/policy-kit",
    "isAccessibleForFree": true,
    "license": "https://opensource.org/licenses/Apache-2.0",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "softwareVersion": "0.1.0",
    "description": "One config file to declare AI policies for your domain. Generates peac.txt, robots AI rules, AIPREF headers, and a /ai-policy page."
  }

  const generatedOutputs = [
    {
      icon: <FileText size={24} />,
      title: '/.well-known/peac.txt',
      description: 'Your primary, PEAC-native AI policy surface for agents. The canonical source of truth for AI crawlers.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Robots AI rules',
      description: 'A block you can append to robots.txt or serve as robots-ai.txt to point AI crawlers at your policy.'
    },
    {
      icon: <Code size={24} />,
      title: 'AIPREF-compatible headers',
      description: 'Copy-pasteable HTTP headers so early AIPREF-compatible crawlers see the same policy.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Human-readable /ai-policy page',
      description: 'Markdown or HTML explaining your AI policy in plain language for lawyers, users, and partners.'
    }
  ]

  const policyFields = [
    { field: 'Indexing', description: 'Allow or deny AI search indexing' },
    { field: 'Training', description: 'Allow or deny use in model training' },
    { field: 'RAG / Inference', description: 'Allow or deny retrieval-augmented generation' },
    { field: 'Commercial use', description: 'Allow or restrict commercial applications' },
    { field: 'Attribution', description: 'Require attribution for usage' },
    { field: 'Contact', description: 'Licensing and contact information' }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="section" style={{ background: 'var(--gradient-mesh)', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              {/* Company tagline */}
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 1.7,
                  color: 'var(--gray-600)',
                  fontWeight: 500,
                  marginBottom: 'var(--space-6)',
                  maxWidth: '800px',
                  margin: '0 auto var(--space-6) auto'
                }}
              >
                Originary builds infrastructure rails and tools for the agentic web, solving <strong>Access, Attribution, Consent, Commerce, Compliance, Privacy, and Provenance</strong>.
              </p>

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
                Define your AI policy once.{' '}
                <span className="text-gradient">Generate all the right signals.</span>
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--gray-600)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-8)',
                maxWidth: '750px',
                margin: '0 auto var(--space-8) auto'
              }}>
                Originary Declare (PEAC Policy Kit) lets you configure AI crawling, training and usage rules in a single <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-lg)' }}>peac-policy.yaml</code> and generate peac.txt, AIPREF headers, robots AI rules and a human-readable AI policy page in minutes.
              </p>

              <p style={{
                fontSize: 'var(--text-base)',
                color: 'var(--gray-500)',
                marginBottom: 'var(--space-10)'
              }}>
                So AI bots, platforms and humans all see the same policy, without you hand-editing four different files.
              </p>

              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  href="/developers#policy-kit"
                  className="btn btn-primary btn-lg"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}
                >
                  <Terminal size={18} />
                  Get started with CLI
                </Link>
                <a
                  href="https://github.com/peacprotocol/policy-kit"
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

        {/* Why This Exists Section */}
        <section className="section" style={{ background: 'var(--white)' }}>
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                Why AI policy needs a single source of truth
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-600)',
                lineHeight: 1.8,
                textAlign: 'center',
                marginBottom: 'var(--space-12)',
                maxWidth: '700px',
                margin: '0 auto var(--space-12) auto'
              }}>
                AI crawlers, LLMs, and agents all look in slightly different places for policy: <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>robots.txt</code> rules, ad hoc files like <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>ai.txt</code> and <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>llms.txt</code>, early proposals like AIPREF. Most sites end up with a tangle of partial signals, and no easy way to keep them in sync.
              </p>

              <div className="card" style={{
                padding: 'var(--space-8)',
                background: 'linear-gradient(135deg, rgba(99, 91, 255, 0.05), rgba(0, 212, 170, 0.05))',
                border: '1px solid rgba(99, 91, 255, 0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-4)',
                  color: 'var(--brand-primary)'
                }}>
                  PEAC Policy Kit gives you one canonical config, many compatible surfaces.
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                    <CheckCircle size={20} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--gray-700)' }}><strong>One file to maintain</strong> - <code style={{ background: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>peac-policy.yaml</code> lives in your repo or CMS</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                    <CheckCircle size={20} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--gray-700)' }}><strong>One semantics model</strong> - clear fields like <code style={{ background: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>training: deny</code> or <code style={{ background: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>rag: allow_with_attribution</code></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                    <CheckCircle size={20} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--gray-700)' }}><strong>Many outputs</strong> - PEAC-native <code style={{ background: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>peac.txt</code> plus robots AI rules, AIPREF headers, and a readable policy page</span>
                  </div>
                </div>
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
                What PEAC Policy Kit generates today
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-600)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                From a single <code style={{ background: 'var(--gray-200)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>peac-policy.yaml</code> file, v0.1 outputs:
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
                      lineHeight: 1.6
                    }}>
                      {output.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p style={{
              textAlign: 'center',
              marginTop: 'var(--space-8)',
              fontSize: 'var(--text-base)',
              color: 'var(--gray-500)'
            }}>
              No tracking, no SaaS dependency. Everything runs locally and stays under your control.
            </p>
          </div>
        </section>

        {/* Quickstart Section */}
        <section className="section" style={{ background: 'var(--gray-900)', color: 'white' }}>
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
                Install the CLI and initialize your first policy file
              </p>

              {/* Step 1 */}
              <div style={{ marginBottom: 'var(--space-6)' }}>
                <h3 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-3)',
                  color: 'white'
                }}>
                  1. Install and initialize
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
{`npm install -g @peac/policy-kit

# inside your site repo
peac policy init
# or: npx @peac/policy-kit init`}
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
                  2. Answer a few questions about:
                </h3>
                <div className="grid grid-3" style={{ gap: 'var(--space-3)' }}>
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
{`peac policy generate

# This creates:
# ./.well-known/peac.txt
# ./robots-ai.txt (or paste into robots.txt)
# ./ai-policy.md
# ./aipref-headers.txt`}
                </pre>
              </div>

              {/* Step 4 */}
              <div>
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
              </div>

              <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
                <a
                  href="https://github.com/peacprotocol/policy-kit#readme"
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

        {/* Roadmap Section */}
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
                Roadmap
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-600)',
                textAlign: 'center',
                marginBottom: 'var(--space-10)'
              }}>
                PEAC Policy Kit is designed to be small, reliable, and boring.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                  <div
                    style={{
                      background: 'var(--success)',
                      color: 'white',
                      padding: 'var(--space-2) var(--space-3)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700,
                      textTransform: 'uppercase'
                    }}
                  >
                    v0.1
                  </div>
                  <div>
                    <strong>CLI only</strong> - <code style={{ background: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>init</code>, <code style={{ background: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>generate</code>, <code style={{ background: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>validate</code>
                  </div>
                </div>
                <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                  <div
                    style={{
                      background: 'var(--brand-primary)',
                      color: 'white',
                      padding: 'var(--space-2) var(--space-3)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700,
                      textTransform: 'uppercase'
                    }}
                  >
                    v0.2
                  </div>
                  <div>
                    <strong>Web wizard</strong> - browser-based policy generator + site checker
                  </div>
                </div>
                <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                  <div
                    style={{
                      background: 'var(--gray-400)',
                      color: 'white',
                      padding: 'var(--space-2) var(--space-3)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700,
                      textTransform: 'uppercase'
                    }}
                  >
                    Later
                  </div>
                  <div>
                    <strong>Evidence mode</strong> - optional signed audit trails, integrated with Originary Trace
                  </div>
                </div>
              </div>

              <p style={{
                textAlign: 'center',
                marginTop: 'var(--space-8)',
                fontSize: 'var(--text-base)',
                color: 'var(--gray-500)'
              }}>
                We&apos;re deliberately starting with the basics: one config, many surfaces. Everything else will build on this foundation.
              </p>
            </div>
          </div>
        </section>

        {/* How This Fits Into Originary Section */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                How this fits into Originary
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-600)',
                textAlign: 'center',
                marginBottom: 'var(--space-10)',
                lineHeight: 1.8
              }}>
                Originary builds infrastructure rails and tools for the agentic web, solving <strong>Access, Attribution, Consent, Commerce, Compliance, Privacy, and Provenance</strong>.
              </p>

              <div className="grid grid-2" style={{ gap: 'var(--space-6)' }}>
                <div className="card" style={{ background: 'var(--white)' }}>
                  <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-3)',
                    color: 'var(--brand-primary)'
                  }}>
                    PEAC Policy Kit (Declare)
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--gray-600)',
                    lineHeight: 1.7
                  }}>
                    The <strong>free, open-source entry point</strong>. Declare your AI policy once, make it visible to humans and agents, and stay compatible with emerging standards.
                  </p>
                </div>

                <div className="card" style={{ background: 'var(--white)' }}>
                  <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-3)',
                    color: 'var(--gray-900)'
                  }}>
                    Originary Trace (coming soon)
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--gray-600)',
                    lineHeight: 1.7
                  }}>
                    AI crawler analytics and evidence. Trace uses your declared AI policy as context, so violations against <code style={{ background: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>peac.txt</code> and robots AI rules are easy to prove.
                  </p>
                </div>

                <div className="card" style={{ background: 'var(--white)' }}>
                  <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-3)',
                    color: 'var(--gray-900)'
                  }}>
                    Gateway 402 (roadmap)
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--gray-600)',
                    lineHeight: 1.7
                  }}>
                    HTTP 402 payment gateway with PEAC receipts for machine-payable APIs. Paid access, rate limits, and verifiable receipts.
                  </p>
                </div>

                <div className="card" style={{ background: 'var(--white)' }}>
                  <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-3)',
                    color: 'var(--gray-900)'
                  }}>
                    PEAC Protocol (open source)
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--gray-600)',
                    lineHeight: 1.7
                  }}>
                    The underlying Apache-2.0 protocol for policy discovery, verifiable receipts, and HTTP 402 payment semantics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <div
              className="card"
              style={{
                textAlign: 'center',
                padding: 'var(--space-12)',
                background: 'var(--gradient-brand)',
                maxWidth: '800px',
                margin: '0 auto',
                color: 'white'
              }}
            >
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'white'
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
                Start with PEAC Policy Kit and the CLI. Add Trace and HTTP 402/x402 rails when you are ready for enforcement and receipts.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://github.com/peacprotocol/policy-kit"
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
                  Get Policy Kit
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

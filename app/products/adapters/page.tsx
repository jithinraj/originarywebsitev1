import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap, Shield, Settings, Link as LinkIcon, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Adapters : Originary',
  description: 'Enterprise adapters for AIPREF, HTTP 402/x402, MCP/A2A, robots.txt/llms.txt, and C2PA. Production-ready integrations for policy enforcement and standards compliance in agentic systems.',
  keywords: 'AIPREF, HTTP 402, x402, MCP, A2A, C2PA, robots.txt, llms.txt, enterprise adapters',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Adapters : Originary',
    description: 'Enterprise adapters for AIPREF, HTTP 402/x402, MCP/A2A, robots.txt/llms.txt, and C2PA. Production-ready integrations for policy enforcement and standards compliance in agentic systems.',
    url: 'https://originary.xyz/products/adapters',
    images: ['https://originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adapters : Originary',
    description: 'Enterprise adapters for AIPREF, HTTP 402/x402, MCP/A2A, robots.txt/llms.txt, and C2PA. Production-ready integrations for policy enforcement and standards compliance in agentic systems.',
    images: ['https://originary.xyz/og.jpg'],
    site: '@originary',
    creator: '@originary',
  },
  robots: 'index,follow',
  alternates: {
    canonical: 'https://originary.xyz/products/adapters',
  },
}

export default function Adapters() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--white)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                background: 'rgba(0, 212, 170, 0.1)',
                border: '1px solid rgba(0, 212, 170, 0.2)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-6)',
                marginBottom: 'var(--space-6)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--brand-secondary)'
              }}>
                <LinkIcon size={16} />
                <span>ENTERPRISE ADAPTERS</span>
                <div style={{
                  background: 'var(--brand-secondary)',
                  color: 'var(--white)',
                  padding: 'var(--space-1) var(--space-2)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600
                }}>7 STANDARDS</div>
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                <span className="text-gradient">Universal connectivity</span> for agentic infrastructure
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-8)',
                maxWidth: '900px',
                margin: '0 auto var(--space-8) auto'
              }}>
                Enterprise-grade adapters enabling seamless integration with emerging agentic standards. From AIPREF and HTTP 402 to MCP/A2A and C2PA, our production-ready middleware ensures your infrastructure speaks every protocol agents understand.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: 'var(--space-4)',
                marginBottom: 'var(--space-10)',
                maxWidth: '600px',
                margin: '0 auto var(--space-10) auto'
              }}>
                {['AIPREF', 'HTTP 402', 'MCP/A2A', 'C2PA', 'robots.txt', 'llms.txt'].map((protocol) => (
                  <div key={protocol} style={{
                    background: 'var(--gray-100)',
                    padding: 'var(--space-3) var(--space-4)',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'center',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                    color: 'var(--gray-700)'
                  }}>
                    {protocol}
                  </div>
                ))}
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: 'var(--space-8)',
                marginBottom: 'var(--space-10)',
                maxWidth: '800px',
                margin: '0 auto var(--space-10) auto'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 700,
                    color: 'var(--brand-secondary)',
                    marginBottom: 'var(--space-2)'
                  }}>1M+</div>
                  <div style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--gray-600)'
                  }}>Adapters deployed</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 700,
                    color: 'var(--brand-secondary)',
                    marginBottom: 'var(--space-2)'
                  }}>99.99%</div>
                  <div style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--gray-600)'
                  }}>Protocol compliance</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 700,
                    color: 'var(--brand-secondary)',
                    marginBottom: 'var(--space-2)'
                  }}>7</div>
                  <div style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--gray-600)'
                  }}>Standards supported</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 700,
                    color: 'var(--brand-secondary)',
                    marginBottom: 'var(--space-2)'
                  }}>&lt; 50ms</div>
                  <div style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--gray-600)'
                  }}>Protocol negotiation</div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-4)',
                flexWrap: 'wrap'
              }}>
                <Link href="/company/contact" className="btn btn-primary btn-lg">
                  <span>Talk to integration engineer</span>
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="/downloads/adapters-reference.pdf"
                  download
                  className="btn btn-secondary btn-lg"
                >
                  <span>Download reference</span>
                  <Download size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>Adapter ecosystem</h2>
            <div className="grid grid-3" style={{ marginBottom: 'var(--space-20)' }}>
              <div className="card card-glow">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(99, 91, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <Settings size={28} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <h3>AIPREF Adapter</h3>
                  <span style={{
                    background: 'var(--success)',
                    color: 'var(--white)',
                    padding: 'var(--space-1) var(--space-2)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600
                  }}>READY</span>
                </div>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  AI Preferences standard implementation for collecting and enforcing user preferences across agentic interactions. Supports granular permissions, consent management, and preference inheritance.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--brand-primary)' }}>&lt; 10ms</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)' }}>Response time</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--brand-primary)' }}>GDPR</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)' }}>Compliance</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Preference collection</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Consent management</span>
                </div>
              </div>

              <div className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(0, 212, 170, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <Zap size={28} style={{ color: 'var(--brand-secondary)' }} />
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <h3>HTTP 402/x402</h3>
                  <span style={{
                    background: 'var(--success)',
                    color: 'var(--white)',
                    padding: 'var(--space-1) var(--space-2)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600
                  }}>READY</span>
                </div>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Comprehensive HTTP 402 Payment Required implementation with x402 protocol extensions. Multi-rail payment processing with automatic failover and receipt generation.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--brand-secondary)' }}>99.9%</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)' }}>Success rate</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--brand-secondary)' }}>&lt; 3s</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)' }}>Settlement</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Multi-rail payments</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Auto failover</span>
                </div>
              </div>

              <div className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(255, 107, 53, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <LinkIcon size={28} style={{ color: 'var(--brand-accent)' }} />
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <h3>MCP/A2A Adapter</h3>
                  <span style={{
                    background: 'var(--warning)',
                    color: 'var(--white)',
                    padding: 'var(--space-1) var(--space-2)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600
                  }}>BETA</span>
                </div>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Model Context Protocol and Agent-to-Agent communication framework for standardized inter-agent messaging, capability discovery, and resource sharing.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--brand-accent)' }}>MCP/A2A</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)' }}>Protocols</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--brand-accent)' }}>&lt; 20ms</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)' }}>Latency</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Protocol translation</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Capability discovery</span>
                </div>
              </div>

              <div className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(99, 91, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <Settings size={28} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <h3>robots.txt/llms.txt</h3>
                  <span style={{
                    background: 'var(--success)',
                    color: 'var(--white)',
                    padding: 'var(--space-1) var(--space-2)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600
                  }}>READY</span>
                </div>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Enhanced robots.txt parsing with llms.txt support for AI-specific crawling policies. Intelligent policy interpretation and enforcement for web crawlers and AI agents.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--brand-primary)' }}>&lt; 5ms</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)' }}>Parse time</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--brand-primary)' }}>95%</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)' }}>Cache hit</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Policy parsing</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>LLM-specific rules</span>
                </div>
              </div>

              <div className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(0, 212, 170, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <Shield size={28} style={{ color: 'var(--brand-secondary)' }} />
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <h3>C2PA Adapter</h3>
                  <span style={{
                    background: 'var(--success)',
                    color: 'var(--white)',
                    padding: 'var(--space-1) var(--space-2)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600
                  }}>READY</span>
                </div>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Coalition for Content Provenance and Authenticity standard implementation for digital content verification, provenance tracking, and authenticity validation.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--brand-secondary)' }}>&lt; 100ms</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)' }}>Verification</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--brand-secondary)' }}>99.99%</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)' }}>Accuracy</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Content verification</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Provenance tracking</span>
                </div>
              </div>

              <div className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(255, 107, 53, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <Settings size={28} style={{ color: 'var(--brand-accent)' }} />
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <h3>Custom Adapters</h3>
                  <span style={{
                    background: 'var(--brand-accent)',
                    color: 'var(--white)',
                    padding: 'var(--space-1) var(--space-2)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600
                  }}>ENTERPRISE</span>
                </div>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Bespoke adapter development for proprietary protocols and emerging standards. Full lifecycle management from specification to production deployment.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--brand-accent)' }}>4-6 weeks</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)' }}>Delivery</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--brand-accent)' }}>24/7 SLA</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)' }}>Support</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Custom protocols</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>White-glove support</span>
                </div>
              </div>
            </div>

            <div style={{
              textAlign: 'center',
              background: 'var(--gradient-brand)',
              borderRadius: 'var(--radius-3xl)',
              padding: 'var(--space-16) var(--space-8)',
              color: 'var(--white)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                pointerEvents: 'none'
              }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{
                  fontSize: 'var(--text-4xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--white)'
                }}>
                  Future-proof your agentic infrastructure
                </h2>
                <p style={{
                  fontSize: 'var(--text-xl)',
                  marginBottom: 'var(--space-8)',
                  opacity: 0.9,
                  maxWidth: '700px',
                  margin: '0 auto var(--space-8) auto'
                }}>
                  Enable seamless protocol adoption and standards compliance with enterprise-grade adapters. Our engineering team provides comprehensive support from integration to production deployment with guaranteed SLAs.
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 'var(--space-4)',
                  flexWrap: 'wrap'
                }}>
                  <Link
                    href="/company/contact"
                    className="btn btn-lg"
                    style={{
                      background: 'var(--white)',
                      color: 'var(--brand-primary)',
                      border: 'none'
                    }}
                  >
                    <span>Talk to integration engineer</span>
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href="/downloads/adapters-enterprise-guide.pdf"
                    download
                    className="btn btn-lg btn-ghost"
                    style={{
                      color: 'var(--white)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <span>Download enterprise guide</span>
                  </a>
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
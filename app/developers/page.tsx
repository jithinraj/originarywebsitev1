import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Code, Terminal, Database, Globe, Users, CheckCircle, Download, Github, MessageCircle, BookOpen, Zap, Clock, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Developers : Originary',
  description: 'Developer documentation, SDKs, and tools for building with the PEAC protocol and Originary platform. APIs, code examples, and integration guides.',
  keywords: 'developer docs, PEAC protocol, SDKs, APIs, integration guides, code examples',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Developers : Originary',
    description: 'Developer documentation, SDKs, and tools for building with the PEAC protocol and Originary platform. APIs, code examples, and integration guides.',
    url: 'https://originary.xyz/developers',
    images: ['https://originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developers : Originary',
    description: 'Developer documentation, SDKs, and tools for building with the PEAC protocol and Originary platform. APIs, code examples, and integration guides.',
    images: ['https://originary.xyz/og.jpg'],
    site: '@originary',
    creator: '@originary',
  },
  robots: 'index,follow',
  alternates: {
    canonical: 'https://originary.xyz/developers',
  },
}

export default function Developers() {
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
                <Code className="inline w-4 h-4 mr-1" />
                DEVELOPERS
              </span>
              <h1 style={{ marginBottom: 'var(--space-6)' }}>
                <span className="text-gradient">Build with Originary</span>
              </h1>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-8)'
                }}
              >
                Everything you need to integrate PEAC protocol into your <Link href="/originary-ai/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Originary AI</Link> applications.
                SDKs, APIs, documentation, and examples to get you started quickly.
              </p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 'var(--space-4)',
                  flexWrap: 'wrap'
                }}
              >
                <Link href="/company/contact" className="btn btn-primary btn-lg">
                  <span>Get Started</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/downloads" className="btn btn-secondary btn-lg">
                  <Download size={18} />
                  Downloads
                </Link>
                <Link href="#quickstart" className="btn btn-ghost btn-lg">
                  Quick Start Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="section" id="quickstart" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                marginBottom: 'var(--space-16)'
              }}
            >
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Quick start</h2>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: 1.7
                }}
              >
                Get up and running with PEAC in minutes
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <QuickStartCard
                step="1"
                title="Create policy file"
                description="Add a peac.txt file to your /.well-known/ directory"
                code={`version: 0.9.13
usage: conditional
purposes: [indexing, research, documentation]
attribution: required
consent: optional
data_retention: P30D
access_control: http-402
payments: ['x402', 'stripe', 'onchain']
receipts: required
verify: true
contact: contact@originary.xyz`}
              />
              <QuickStartCard
                step="2"
                title="Install Originary CLI"
                description="Verify policies with our first-party CLI tool"
                code={`# macOS/Linux (example)
./originary --verify /path/to/.well-known/peac.txt

# Windows (example)
originary.exe --verify C:\\site\\.well-known\\peac.txt

# Download from /downloads with checksums`}
              />
              <QuickStartCard
                step="3"
                title="Send receipts with requests"
                description="Include PEAC receipts in your HTTP requests"
                code={`# cURL example
curl -sS https://publisher.example/api \\
  -H "PEAC-Receipt: eyJfdHlwZSI6IlBFQUNSZWNlaXB0Iiwi..." \\
  -H "User-Agent: Originary-AI/1.0"

# Node.js/fetch example
await fetch("https://publisher.example/api", {
  headers: {
    "PEAC-Receipt": receiptToken,
    "User-Agent": "Originary-AI/1.0"
  }
});

# Edge verification example
if (request.headers.get('peac-receipt')) {
  const isValid = await verifyReceipt(receipt);
  if (isValid) return fetch(request);
}`}
              />
            </div>

            <div style={{
              marginTop: 'var(--space-8)',
              textAlign: 'center',
              padding: 'var(--space-4)',
              background: 'var(--white)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--gray-200)'
            }}>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-3)'
              }}>
                Open Protocol (PEAC) - Upstream (link out):
              </p>
              <code style={{
                display: 'block',
                background: 'var(--gray-50)',
                padding: 'var(--space-2)',
                borderRadius: 'var(--radius-sm)',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-sm)',
                marginBottom: 'var(--space-3)'
              }}>
                pnpm add -g @peacprotocol/cli @peacprotocol/core
              </code>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <Link
                  href="/downloads"
                  style={{
                    color: 'var(--brand-primary)',
                    textDecoration: 'underline',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600
                  }}
                >
                  First-party CLI
                </Link>
                <a
                  href="https://github.com/peacprotocol/peac"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: 'var(--brand-primary)',
                    textDecoration: 'underline',
                    fontSize: 'var(--text-sm)'
                  }}
                >
                  GitHub
                </a>
                <a
                  href="https://peacprotocol.org/docs"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: 'var(--brand-primary)',
                    textDecoration: 'underline',
                    fontSize: 'var(--text-sm)'
                  }}
                >
                  Docs
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Wire Accuracy Callout */}
        <section className="section" style={{ background: 'var(--gray-50)', paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-12)' }}>
          <div className="container">
            <div style={{
              maxWidth: '600px',
              margin: '0 auto',
              padding: 'var(--space-6)',
              background: 'var(--white)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-lg)'
            }}>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
                Wire accuracy
              </h3>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-3)' }}>
                <div style={{ color: 'var(--gray-600)' }}>Header:</div>
                <div style={{ color: 'var(--gray-900)' }}>PEAC-Receipt: &lt;detached-JWS&gt;</div>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>
                <div style={{ color: 'var(--gray-600)' }}>Policy discovery:</div>
                <div style={{ color: 'var(--gray-900)' }}>/.well-known/peac.txt</div>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
                Learn more in the <a
                  href="https://peacprotocol.org"
                  target="_blank"
                  rel="noopener"
                  style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}
                >
                  open protocol ↗
                </a>.
              </p>
            </div>
          </div>
        </section>

        {/* Raw HTTP Example */}
        <section className="section" style={{ background: 'var(--gray-50)', paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-12)' }}>
          <div className="container">
            <div style={{
              maxWidth: '600px',
              margin: '0 auto',
              padding: 'var(--space-6)',
              background: 'var(--white)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-lg)'
            }}>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
                Raw HTTP example
              </h3>
              <pre style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-sm)',
                background: 'var(--gray-900)',
                color: 'var(--gray-100)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-md)',
                overflowX: 'auto',
                margin: 0
              }}>
                <code>{`curl -sS https://publisher.example/api \\
  -H "PEAC-Receipt: eyJfdHlwZSI6IlBFQUNSZWNlaXB0Iiwi..." \\
  -H "User-Agent: Originary-AI/1.0"`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* SDKs Section */}
        <section className="section">
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                marginBottom: 'var(--space-16)'
              }}
            >
              <h2 style={{ marginBottom: 'var(--space-6)' }}>SDKs & Tools</h2>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: 1.7
                }}
              >
                Choose your language and start building
              </p>
            </div>

            <div className="grid grid-auto" style={{ gap: 'var(--space-8)' }}>
              <SdkCard
                icon={<Code size={32} style={{ color: 'var(--brand-primary)' }} />}
                name="JavaScript/TypeScript"
                status="Stable"
                description="Full-featured SDK for Node.js and browser environments with TypeScript support."
                downloadLink="/downloads/originary-js-sdk.tar.gz"
                githubLink="https://github.com/originary/js-sdk"
              />
              <SdkCard
                icon={<Terminal size={32} style={{ color: 'var(--brand-secondary)' }} />}
                name="Python"
                status="Stable"
                description="Comprehensive Python SDK with async support and comprehensive error handling."
                downloadLink="/downloads/originary-python-sdk.tar.gz"
                githubLink="https://github.com/originary/python-sdk"
              />
              <SdkCard
                icon={<Database size={32} style={{ color: 'var(--brand-accent)' }} />}
                name="Go"
                status="Stable"
                description="High-performance Go SDK with context support and concurrent operations."
                downloadLink="/downloads/originary-go-sdk.tar.gz"
                githubLink="https://github.com/originary/go-sdk"
              />
              <SdkCard
                icon={<Globe size={32} style={{ color: 'var(--brand-primary)' }} />}
                name="Java/Kotlin"
                status="Beta"
                description="Enterprise-ready SDK with Spring Boot integration and comprehensive testing."
                downloadLink="/downloads/originary-java-sdk.tar.gz"
                githubLink="https://github.com/originary/java-sdk"
              />
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                marginBottom: 'var(--space-16)'
              }}
            >
              <h2 style={{ marginBottom: 'var(--space-6)' }}>API Reference</h2>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: 1.7
                }}
              >
                Comprehensive API documentation for all endpoints
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              <ApiSection
                title="Verification API"
                description="Verify PEAC receipts and validate policy compliance"
                method="POST"
                endpoint="/v1/verify"
                detail="Verify receipt authenticity"
                link="/products/verify/"
              />
              <ApiSection
                title="Gateway API"
                description="Payment processing and HTTP 402 gateway functionality"
                method="POST"
                endpoint="/payment/stripe"
                detail="Process payment via Stripe"
                link="/products/gateway-402/"
              />
              <ApiSection
                title="Policy API"
                description="Retrieve and validate PEAC policy files"
                method="GET"
                endpoint="/v1/policies/{url}"
                detail="Fetch and validate policy"
                link="/downloads/policy-api-docs.pdf"
              />
            </div>
          </div>
        </section>

        {/* Examples & Tutorials */}
        <section className="section">
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                marginBottom: 'var(--space-16)'
              }}
            >
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Examples & Tutorials</h2>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: 1.7
                }}
              >
                Learn by example with our comprehensive guides
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <ExampleCard
                icon={<CheckCircle size={32} style={{ color: 'var(--brand-primary)' }} />}
                title="Basic Integration"
                description="Simple policy checking and receipt generation"
                downloadLink="/downloads/basic-integration-example.zip"
              />
              <ExampleCard
                icon={<Globe size={32} style={{ color: 'var(--brand-secondary)' }} />}
                title="Express.js Middleware"
                description="Add PEAC compliance to existing APIs"
                downloadLink="/downloads/express-middleware-example.zip"
              />
              <ExampleCard
                icon={<Users size={32} style={{ color: 'var(--brand-accent)' }} />}
                title="Agent Framework"
                description="Build PEAC-compliant autonomous agents"
                downloadLink="/downloads/agent-framework-example.zip"
              />
            </div>
          </div>
        </section>

        {/* Community & Support */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                marginBottom: 'var(--space-16)'
              }}
            >
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Community & Support</h2>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: 1.7
                }}
              >
                Join our developer community and get the help you need
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <CommunityCard
                icon={<MessageCircle size={32} style={{ color: 'var(--brand-primary)' }} />}
                title="Developer Discord"
                description="Join our community for real-time help and discussions"
                link="https://discord.gg/originary"
                buttonText="Join Discord"
              />
              <CommunityCard
                icon={<Github size={32} style={{ color: 'var(--brand-secondary)' }} />}
                title="GitHub"
                description="Contribute to our open-source tools and protocols"
                link="https://github.com/originary"
                buttonText="View GitHub"
              />
              <CommunityCard
                icon={<BookOpen size={32} style={{ color: 'var(--brand-accent)' }} />}
                title="Stack Overflow"
                description="Ask questions and get answers from the community"
                link="https://stackoverflow.com/questions/tagged/originary"
                buttonText="View Questions"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                background: 'var(--gradient-brand)',
                borderRadius: 'var(--radius-3xl)',
                padding: 'var(--space-16) var(--space-8)',
                color: 'var(--white)',
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
                <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-80" />
                <h2
                  style={{
                    fontSize: 'var(--text-4xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-6)',
                    color: 'var(--white)'
                  }}
                >
                  Need help getting started?
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
                  Our developer success team is here to help you integrate PEAC into your applications.
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 'var(--space-4)',
                    flexWrap: 'wrap'
                  }}
                >
                  <a
                    href="mailto:contact@originary.xyz"
                    className="btn btn-lg"
                    style={{
                      background: 'var(--white)',
                      color: 'var(--brand-primary)',
                      border: 'none'
                    }}
                  >
                    <span>Contact developer support</span>
                    <ArrowRight size={18} />
                  </a>
                  <a
                    href="/downloads/developer-guide.pdf"
                    className="btn btn-lg btn-ghost"
                    style={{
                      color: 'var(--white)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download developer guide</span>
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

function QuickStartCard({
  step,
  title,
  description,
  code
}: {
  step: string;
  title: string;
  description: string;
  code: string;
}) {
  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
        <div
          style={{
            width: '32px',
            height: '32px',
            background: 'var(--gradient-brand)',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--white)',
            fontWeight: 'bold'
          }}
        >
          {step}
        </div>
        <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600 }}>{title}</h3>
      </div>
      <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-4)', lineHeight: 1.7 }}>{description}</p>
      <pre
        style={{
          background: 'var(--gray-900)',
          color: 'var(--gray-100)',
          padding: 'var(--space-4)',
          borderRadius: 'var(--radius-lg)',
          fontSize: 'var(--text-sm)',
          overflowX: 'auto',
          fontFamily: 'var(--font-mono)'
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  )
}

function SdkCard({
  icon,
  name,
  status,
  description,
  downloadLink,
  githubLink
}: {
  icon: React.ReactNode;
  name: string;
  status: string;
  description: string;
  downloadLink: string;
  githubLink: string;
}) {
  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          {icon}
          <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600 }}>{name}</h3>
        </div>
        <span
          style={{
            padding: 'var(--space-1) var(--space-3)',
            borderRadius: 'var(--radius-full)',
            fontSize: 'var(--text-sm)',
            fontWeight: 500,
            background: status === 'Stable' ? 'rgba(0, 217, 36, 0.1)' : 'rgba(255, 171, 0, 0.1)',
            color: status === 'Stable' ? 'var(--success)' : 'var(--warning)'
          }}
        >
          {status}
        </span>
      </div>
      <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>{description}</p>
      <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
        <a href={downloadLink} className="btn btn-secondary" style={{ flex: 1, textAlign: 'center' }}>
          <Download size={16} />
          <span>Download</span>
        </a>
        <a href={githubLink} className="btn btn-ghost">
          <Github size={16} />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  )
}

function ApiSection({
  title,
  description,
  method,
  endpoint,
  detail,
  link
}: {
  title: string;
  description: string;
  method: string;
  endpoint: string;
  detail: string;
  link: string;
}) {
  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>{title}</h3>
          <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-4)', lineHeight: 1.7 }}>{description}</p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-4)',
              padding: 'var(--space-3)',
              background: 'var(--gray-50)',
              borderRadius: 'var(--radius-lg)'
            }}
          >
            <span
              style={{
                padding: 'var(--space-1) var(--space-2)',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                background: method === 'POST' ? 'rgba(0, 217, 36, 0.1)' : 'rgba(99, 91, 255, 0.1)',
                color: method === 'POST' ? 'var(--success)' : 'var(--brand-primary)'
              }}
            >
              {method}
            </span>
            <code style={{ flex: 1, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)' }}>{endpoint}</code>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>{detail}</span>
          </div>
        </div>
        <a href={link} className="btn btn-ghost">
          <span>View docs</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  )
}

function ExampleCard({
  icon,
  title,
  description,
  downloadLink
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  downloadLink: string;
}) {
  return (
    <div className="card" style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: 'var(--space-4)' }}>{icon}</div>
      <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>{title}</h3>
      <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>{description}</p>
      <a href={downloadLink} className="btn btn-secondary" style={{ width: '100%' }}>
        <Download size={16} />
        <span>Download example</span>
      </a>
    </div>
  )
}

function CommunityCard({
  icon,
  title,
  description,
  link,
  buttonText
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  buttonText: string;
}) {
  return (
    <div className="card" style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: 'var(--space-4)' }}>{icon}</div>
      <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>{title}</h3>
      <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>{description}</p>
      <a href={link} className="btn btn-secondary" style={{ width: '100%' }}>
        <span>{buttonText}</span>
        <ArrowRight size={16} />
      </a>
    </div>
  )
}
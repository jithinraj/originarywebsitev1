import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Code, Download, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Developers - API Integration & CLI Tools',
  description: 'Integrate PEAC-Receipts into your API with Originary developer tools. Add HTTP 402 payment flows, A2A verification, and MCP receipts with CLI tools and edge verification.',
  keywords: 'developer API, PEAC protocol, CLI tools, HTTP 402, agent receipts, policy validation, edge verification, MCP integration, A2A communication, ACP',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Developers - API Integration & CLI Tools | Originary',
    description: 'Integrate PEAC-Receipts into your API with Originary developer tools. Add HTTP 402 payment flows, A2A verification, and MCP receipts with CLI tools and edge verification.',
    url: 'https://www.originary.xyz/developers/',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developers - API Integration & CLI Tools | Originary',
    description: 'Integrate PEAC-Receipts into your API with Originary developer tools. Add HTTP 402 payment flows, A2A verification, and MCP receipts.',
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originaryinc',
    creator: '@originaryinc',
  },
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.originary.xyz/developers/',
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
                Everything you need to integrate receipts today - start with the Originary CLI and PEAC (open protocol) upstream packages.
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

              <p style={{
                textAlign: 'center',
                marginTop: 'var(--space-4)',
                fontSize: 'var(--text-sm)',
                color: 'var(--gray-600)'
              }}>
                Or try our{' '}
                <Link
                  href="/checkout/start"
                  style={{
                    color: 'var(--brand-primary)',
                    textDecoration: 'underline',
                    fontWeight: 600
                  }}
                >
                  $1 Start Plan
                </Link>
                {' '}for 30-day sandbox access
              </p>
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
                <Sparkles size={16} />
                <span>5-Minute Quickstart</span>
              </div>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Deploy your first policy in 5 minutes</h2>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: 1.7
                }}
              >
                Three simple steps to start accepting agent traffic with verifiable receipts
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <QuickStartCard
                step="1"
                title="Create policy file (2 min)"
                description="Deploy your Originary policy to /.well-known/peac.txt"
                code={`# Step 1: Create the file
echo 'version: 1.0
access: conditional
attribution: required
pricing:
  model: per-request
  amount: 0.001
  currency: USD
settlement: x402' > peac.txt

# Step 2: Deploy to your domain
scp peac.txt user@yourdomain.com:/var/www/.well-known/

# Step 3: Verify it's live
curl https://yourdomain.com/.well-known/peac.txt`}
              />
              <QuickStartCard
                step="2"
                title="Test with CLI (1 min)"
                description="Validate your policy and generate test receipts"
                code={`# Download CLI (one-time)
curl -O https://www.originary.xyz/cli/originary-linux-x64
chmod +x originary-linux-x64

# Validate your policy
./originary-linux-x64 validate https://yourdomain.com

# Generate a test receipt
./originary-linux-x64 receipt \\
  --domain yourdomain.com \\
  --amount 0.001

✓ Policy valid
✓ Receipt generated: eyJfdHlwZSI6IlBFQUNS...`}
              />
              <QuickStartCard
                step="3"
                title="Accept traffic (2 min)"
                description="Start processing agent requests with receipts"
                code={`// Add to your edge/middleware (Cloudflare example)
export default {
  async fetch(request) {
    const receipt = request.headers.get('PEAC-Receipt');

    if (!receipt) {
      return new Response('Payment Required', {
        status: 402,
        headers: { 'PEAC-Policy': '/.well-known/peac.txt' }
      });
    }

    // Verify receipt (cached for performance)
    const valid = await verifyReceipt(receipt);
    if (!valid) return new Response('Invalid', { status: 403 });

    // Process the request
    return fetch(request);
  }
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

        {/* Build with Receipts Section */}
        <section className="section">
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                marginBottom: 'var(--space-16)'
              }}
            >
              <h2 style={{ marginBottom: 'var(--space-6)', fontSize: 'var(--text-3xl)', fontWeight: 700 }}>Build with receipts - not SDK promises.</h2>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: 1.7
                }}
              >
                Use the CLI and official SDKs to validate policies and attach <strong>PEAC-Receipt</strong> headers.
              </p>
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
                    color: 'var(--white)',
                    maxWidth: '600px',
                    margin: '0 auto var(--space-8) auto',
                    lineHeight: 1.6
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
                    href="#quickstart"
                    className="btn btn-lg btn-ghost"
                    style={{
                      color: 'var(--white)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <span>View Quick Start →</span>
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


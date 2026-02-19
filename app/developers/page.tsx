import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Code, Download, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Developers | AI Infrastructure Tools and PEAC Protocol SDK',
  description: 'AI infrastructure tools for agentic web development. Integrate PEAC-Receipts, HTTP 402 payments, x402, MCP receipts, and A2A verification.',
  keywords: 'AI infrastructure tools, AI Access, PEAC Protocol SDK, PEAC SDK, agentic web infrastructure, developer API, PEAC protocol, CLI tools, HTTP 402, HTTP 402 examples, x402 integration, agent receipts, policy validation, edge verification, MCP receipts, MCP integration, A2A communication, ACP, Verify API, Gateway 402, Policy APIs',
  authors: [{ name: 'Originary' }],
  alternates: {
    canonical: '/developers'
  },
  openGraph: {
    type: 'website',
    title: 'Developers | AI Infrastructure Tools and PEAC Protocol SDK',
    description: 'AI infrastructure tools for agentic web development. Integrate PEAC-Receipts with the PEAC Protocol SDK. Add HTTP 402 examples, x402 integration, MCP receipts, and A2A verification.',
    url: '/developers',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developers | AI Infrastructure Tools and PEAC Protocol SDK',
    description: 'AI infrastructure tools for agentic web development. Integrate PEAC-Receipts with the PEAC Protocol SDK. Add HTTP 402 examples, x402 integration, and MCP receipts.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow'
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
                  color: 'var(--accent-brand)',
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
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-8)'
                }}
              >
                AI infrastructure tools for building on the agentic web. Everything you need to integrate PEAC-Receipts today - start with the Originary CLI, PEAC Protocol SDK, and PEAC (open protocol) upstream packages.
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
                color: 'var(--text-secondary)'
              }}>
                Or{' '}
                <Link
                  href="/cloud"
                  style={{
                    color: 'var(--accent-brand)',
                    textDecoration: 'underline',
                    fontWeight: 600
                  }}
                >
                  apply for Cloud access
                </Link>
                {' '}for hosted verification, x402, and dashboards.
              </p>
            </div>
          </div>
        </section>

        {/* Protocol Callout */}
        <section className="section" style={{ paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-12)' }}>
          <div className="container">
            <div className="card" style={{
              maxWidth: '800px',
              margin: '0 auto',
              padding: 'var(--space-8)',
              border: '2px solid var(--accent-brand)',
              borderRadius: 'var(--radius-2xl)',
              background: 'var(--accent-brand-faint)',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Build on an open protocol
              </h3>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-4)'
              }}>
                <strong>No vendor lock-in.</strong> PEAC is an open protocol (Apache-2.0) designed for multiple independent implementations.
                You can self-host, use Originary's managed services, or build your own conformant implementation.
              </p>
              <p style={{
                fontSize: 'var(--text-base)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6
              }}>
                Your policies, receipts, and verification logic work across any PEAC-conformant system.
                Switch providers, deploy hybrid architectures, or migrate at any time.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="section" id="quickstart" style={{ background: 'var(--surface-subtle)' }}>
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
                  background: 'var(--accent-brand-subtle)',
                  border: '1px solid var(--accent-brand-muted)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-2) var(--space-4)',
                  marginBottom: 'var(--space-4)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 500,
                  color: 'var(--accent-brand)'
                }}
              >
                <Sparkles size={16} />
                <span>5-Minute Quickstart</span>
              </div>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Deploy your first policy in 5 minutes</h2>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--text-secondary)',
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
                title="Create policy file"
                description="Initialize and deploy your policy to /.well-known/peac.txt"
                code={`# Install CLI and init policy
npm i -g @peac/cli
peac policy init --profile api-provider

# Generate deployment files
peac policy generate --out ./public --well-known

# Deploy to your domain
scp -r public/.well-known user@yourdomain.com:/var/www/`}
              />
              <QuickStartCard
                step="2"
                title="Validate policy"
                description="Validate your policy file and test rule matching"
                code={`# Validate policy syntax
peac policy validate peac-policy.yaml

# Explain which rule applies for a context
peac policy explain peac-policy.yaml \\
  --purpose train --type agent

# Output:
# Decision: DENY
# Matched Rule: block-training`}
              />
              <QuickStartCard
                step="3"
                title="Verify receipts"
                description="Verify incoming PEAC-Receipt headers in your middleware"
                code={`// Cloudflare Worker / Edge middleware
import { verifyReceipt } from '@peac/protocol';

export default {
  async fetch(request) {
    const receipt = request.headers.get('PEAC-Receipt');

    if (!receipt) {
      return new Response('Payment Required', {
        status: 402,
        headers: { 'PEAC-Policy': '/.well-known/peac.txt' }
      });
    }

    const result = await verifyReceipt(receipt);
    if (!result.ok) return new Response('Invalid', { status: 403 });

    return fetch(request);
  }
}`}
              />
            </div>

            <div style={{
              marginTop: 'var(--space-8)',
              textAlign: 'center',
              padding: 'var(--space-6)',
              background: 'var(--accent-brand-faint)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--accent-brand-subtle)'
            }}>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-2)'
              }}>
                For step-by-step implementation guides with Express, Next.js, and Cloudflare Workers, see our{' '}
                <Link
                  href="/integrations/x402/"
                  style={{
                    color: 'var(--accent-brand)',
                    textDecoration: 'underline',
                    fontWeight: 600
                  }}
                >
                  x402 receipts
                </Link>{' '}
                documentation.
              </p>
            </div>

            <div style={{
              marginTop: 'var(--space-8)',
              textAlign: 'center',
              padding: 'var(--space-4)',
              background: 'var(--surface-elevated)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-default)'
            }}>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-3)'
              }}>
                Open Protocol (PEAC) - Upstream (link out):
              </p>
              <code style={{
                display: 'block',
                background: 'var(--surface-subtle)',
                padding: 'var(--space-2)',
                borderRadius: 'var(--radius-sm)',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-sm)',
                marginBottom: 'var(--space-3)'
              }}>
                # CLI, libraries, and tools (npm)
                npm i -g @peac/cli && npm i @peac/protocol @peac/crypto @peac/schema @peac/mcp-server @peac/capture-node
              </code>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <a
                  href="https://www.npmjs.com/package/@peac/cli"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: 'var(--accent-brand)',
                    textDecoration: 'underline',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600
                  }}
                >
                  CLI on npm
                </a>
                <a
                  href="https://github.com/peacprotocol/peac"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: 'var(--accent-brand)',
                    textDecoration: 'underline',
                    fontSize: 'var(--text-sm)'
                  }}
                >
                  GitHub
                </a>
                <a
                  href="https://github.com/peacprotocol/peac/releases"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: 'var(--accent-brand)',
                    textDecoration: 'underline',
                    fontSize: 'var(--text-sm)'
                  }}
                >
                  Releases
                </a>
                <a
                  href="https://www.peacprotocol.org/docs"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: 'var(--accent-brand)',
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
        <section className="section" style={{ background: 'var(--surface-subtle)', paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-12)' }}>
          <div className="container">
            <div style={{
              maxWidth: '600px',
              margin: '0 auto',
              padding: 'var(--space-6)',
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-lg)'
            }}>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
                Wire accuracy
              </h3>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-3)' }}>
                <div style={{ color: 'var(--text-secondary)' }}>Header:</div>
                <div style={{ color: 'var(--text-primary)' }}>PEAC-Receipt: &lt;detached-JWS&gt;</div>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>
                <div style={{ color: 'var(--text-secondary)' }}>Policy discovery:</div>
                <div style={{ color: 'var(--text-primary)' }}>/.well-known/peac.txt</div>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                Learn more in the <a
                  href="https://www.peacprotocol.org"
                  target="_blank"
                  rel="noopener"
                  style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}
                >
                  open protocol ↗
                </a>.
              </p>
            </div>
          </div>
        </section>

        {/* Raw HTTP Example */}
        <section className="section" style={{ background: 'var(--surface-subtle)', paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-12)' }}>
          <div className="container">
            <div style={{
              maxWidth: '600px',
              margin: '0 auto',
              padding: 'var(--space-6)',
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-lg)'
            }}>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
                Raw HTTP example
              </h3>
              <pre style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-sm)',
                background: 'var(--text-primary)',
                color: 'var(--surface-card)',
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
                  color: 'var(--text-secondary)',
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
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
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
                  color: 'var(--text-secondary)',
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
                link="/declare"
              />
              <ApiSection
                title="MCP Server Tools"
                description="5 MCP tools via @peac/mcp-server: verify-receipt, inspect-receipt, decode-receipt (pure), issue-receipt, create-bundle (privileged)"
                method="MCP"
                endpoint="npx @peac/mcp-server"
                detail="MCP tool server"
                link="/integrations/mcp/"
              />
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
                  background: 'radial-gradient(circle at 30% 40%, var(--glass-border-hover) 0%, transparent 50%)',
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
                      background: 'var(--surface-elevated)',
                      color: 'var(--accent-brand)',
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
                      border: '1px solid var(--border-hover)'
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
            background: 'var(--accent-brand)',
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
      <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-4)', lineHeight: 1.7 }}>{description}</p>
      <pre
        style={{
          background: 'var(--text-primary)',
          color: 'var(--surface-card)',
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
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-4)', lineHeight: 1.7 }}>{description}</p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-4)',
              padding: 'var(--space-3)',
              background: 'var(--surface-subtle)',
              borderRadius: 'var(--radius-lg)'
            }}
          >
            <span
              style={{
                padding: 'var(--space-1) var(--space-2)',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                background: method === 'POST' ? 'var(--accent-success-subtle)' : 'var(--accent-brand-subtle)',
                color: method === 'POST' ? 'var(--success)' : 'var(--accent-brand)'
              }}
            >
              {method}
            </span>
            <code style={{ flex: 1, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)' }}>{endpoint}</code>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>{detail}</span>
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

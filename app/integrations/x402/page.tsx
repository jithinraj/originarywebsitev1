import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'x402 Integration | HTTP 402 Payments with PEAC',
  description: 'Connect PEAC with x402 for HTTP 402 payment flows. Turn APIs into machine-payable endpoints with verifiable receipts.',
  openGraph: {
    title: 'x402 Integration | HTTP 402 Payments with PEAC',
    description: 'Connect PEAC with x402 for HTTP 402 payment flows. Turn APIs into machine-payable endpoints with verifiable receipts.',
    url: '/integrations/x402',
    type: 'article'
  },
  alternates: {
    canonical: '/integrations/x402'
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does HTTP 402 do here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It signals that payment is required and supplies just enough machine-readable detail for a client to pay and retry."
      }
    },
    {
      "@type": "Question",
      "name": "Can I keep my existing auth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. 402 sits alongside your auth. You can charge only for specific routes or tiers."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need stablecoins?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. x402 is rail-agnostic. Stablecoins are common, but you can integrate any payment rail that issues a verifiable receipt."
      }
    }
  ]
}

export default function X402Page() {
  const minimal = `HTTP/1.1 402 Payment Required
Content-Type: application/json; charset=utf-8
Cache-Control: no-store

{
  "detail": "Payment required to access this resource.",
  "payment": {
    "protocol": "x402",
    "amount": "0.10",
    "currency": "USDC",
    "reference": "demo-402-abc123",
    "instructions": "Pay using your client wallet and present a receipt in the follow-up request."
  }
}`

  return (
    <>
      <NavigationHeader />
      <div className="container" style={{ paddingTop: '100px', paddingBottom: 'var(--space-4)' }}>
        <Breadcrumb items={[
          { label: 'Integrations', href: '/integrations' },
          { label: 'x402' }
        ]} />
      </div>
      <main id="main-content" className="container" style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-32)' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Badge */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
            <div style={{
              display: 'inline-flex',
              background: 'var(--accent-brand-subtle)',
              border: '1px solid var(--accent-brand-muted)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--space-2) var(--space-6)',
              color: 'var(--accent-brand)',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              PAYMENTS INTEGRATION
            </div>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'var(--text-5xl)',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 'var(--space-6)',
            lineHeight: 1.2
          }}>
            x402 (HTTP 402)
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--text-secondary)',
            textAlign: 'center',
            marginBottom: 'var(--space-16)',
            lineHeight: 1.6
          }}>
            HTTP 402 commerce and x402 payments for machine-payable APIs
          </p>

          {/* Overview */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Overview
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              x402 brings payments back into the web&rsquo;s native path: the request/response loop. Your API returns <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: '0.9em' }}>402 Payment Required</code> with a machine-readable hint. The client pays, presents a receipt, and retries.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              A simple pattern: servers challenge with <strong>HTTP 402</strong>, clients pay and come back with a verifiable receipt. No accounts, no dashboards - just HTTP.
            </p>
          </div>

          {/* What is x402 */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              What is x402?
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              x402 standardizes the challenge and the proof so automated clients (including AI agents) can transact without out-of-band flows. HTTP 402 sat unused for decades. Today it&rsquo;s being put to work for APIs and content: a first-class signal that payment is needed before the resource is returned.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Treat it like a capability, not a paywall - a programmable way to meter access fairly.
            </p>
          </div>

          {/* Getting Started */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Getting Started with x402
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              Implementing x402 in your API takes three steps: return a 402 response with payment details, accept payment receipts, and verify those receipts before granting access. The protocol is designed to work with any payment rail - from traditional payment gateways to cryptocurrency wallets to stablecoins.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              Start by protecting a single API endpoint with a 402 challenge. When clients request that endpoint without payment, return status code 402 with a JSON payload containing the amount, currency, and a unique reference ID. Clients use this information to complete payment off-band, then retry the request with a verifiable receipt.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              For AI agents and autonomous systems, x402 enables fully automated payment flows. Agents can parse the 402 response, execute payment through their configured wallet or payment provider, and retry the request - all without human intervention. This makes x402 ideal for agent-to-agent commerce, API marketplaces, and usage-based pricing models in the agentic economy.
            </p>
          </div>

          {/* The Flow */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              The Flow: Client → 402 → Pay → Receipt → Access
            </h2>
            <ol style={{ listStyle: 'decimal', paddingLeft: 'var(--space-6)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              <li style={{ marginBottom: 'var(--space-2)' }}>Client requests a priced resource.</li>
              <li style={{ marginBottom: 'var(--space-2)' }}>Server responds <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: '0.9em' }}>402</code> with a payment hint (amount, currency, reference).</li>
              <li style={{ marginBottom: 'var(--space-2)' }}>Client pays using the hinted rail, obtains a receipt/proof.</li>
              <li style={{ marginBottom: 'var(--space-2)' }}>Client retries with the receipt in headers or body.</li>
              <li>Server verifies the receipt and returns the resource with standard <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: '0.9em' }}>2xx</code>.</li>
            </ol>

            <div style={{ marginTop: 'var(--space-6)', padding: 'var(--space-4)', background: 'var(--accent-warning-subtle)', border: '1px solid var(--accent-warning-border)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>💡 Design tip</div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Keep the 402 payload small and explicit. Include a stable reference the server can match later.
              </p>
            </div>

            <div style={{ marginTop: 'var(--space-6)' }}>
              <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text-secondary)' }}>Try it now:</p>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', background: 'var(--code-bg)', padding: 'var(--space-4)', overflow: 'auto' }}>
                <pre style={{ color: 'white', fontSize: 'var(--text-sm)', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                  <code>curl -i https://www.originary.xyz/api/x402-demo</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Minimal 402 Response */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Minimal 402 Response
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              A compliant 402 response with a JSON payment hint:
            </p>
            <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', background: 'var(--code-bg)', padding: 'var(--space-4)', overflow: 'auto' }}>
              <pre style={{ color: 'white', fontSize: 'var(--text-sm)', margin: 0, whiteSpace: 'pre', overflowX: 'auto' }}>
                <code>{minimal}</code>
              </pre>
            </div>
          </div>

          {/* Server Examples */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Server Examples
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              Choose your stack and implement x402 in under 15 minutes:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <Link href="/integrations/x402/express-node/" style={{ color: 'var(--accent-brand)', textDecoration: 'none', fontWeight: 600, fontSize: 'var(--text-base)' }}>
                  → Express (Node)
                </Link>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginTop: 'var(--space-1)', marginLeft: 'var(--space-4)' }}>
                  Add 402 to your Express API
                </p>
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <Link href="/integrations/x402/nextjs/" style={{ color: 'var(--accent-brand)', textDecoration: 'none', fontWeight: 600, fontSize: 'var(--text-base)' }}>
                  → Next.js / Edge Runtime
                </Link>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginTop: 'var(--space-1)', marginLeft: 'var(--space-4)' }}>
                  Route handlers with 402 challenges
                </p>
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <Link href="/integrations/x402/cloudflare-workers/" style={{ color: 'var(--accent-brand)', textDecoration: 'none', fontWeight: 600, fontSize: 'var(--text-base)' }}>
                  → Cloudflare Workers
                </Link>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginTop: 'var(--space-1)', marginLeft: 'var(--space-4)' }}>
                  Tiny Worker returning HTTP 402
                </p>
              </li>
              <li>
                <span style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: 'var(--text-base)' }}>
                  → FastAPI (Python)
                </span>
                <span style={{ color: 'var(--text-tertiary)', fontSize: 'var(--text-sm)', fontStyle: 'italic', marginLeft: 'var(--space-2)' }}>
                  (coming soon)
                </span>
              </li>
            </ul>
          </div>

          {/* Receipts */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Receipts: Structure & Verification
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              A receipt ties the payment to your resource request. Keep two checks:
            </p>
            <ol style={{ listStyle: 'decimal', paddingLeft: 'var(--space-6)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              <li>The cryptographic or gateway proof</li>
              <li>Your own ledger mapping <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: '0.9em' }}>reference → entitlement</code></li>
            </ol>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              Return explicit errors for expired/insufficient proofs.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              See <Link href="/integrations/mcp/" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>Model Context Protocol (MCP)</Link>, <Link href="/integrations/acp/" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>Agentic Commerce Protocol (ACP)</Link>, and <Link href="/integrations/a2a/" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>Agent-to-Agent (A2A)</Link> for receipt integration patterns.
            </p>
          </div>

          {/* Comparisons */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Choosing Rails: x402 vs Arc vs Tempo
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              The right rail depends on your currency, fee model, and developer footprint. Start with what your customers already hold (e.g., stablecoins), then optimize for verification latency and dispute handling. We will maintain a running comparison as the space evolves.
            </p>
          </div>

          {/* Downloads */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Postman + OpenAPI
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <a href="/openapi/x402.yaml" download style={{ color: 'var(--accent-brand)', textDecoration: 'underline', fontWeight: 600 }}>
                  Download OpenAPI: x402 demo
                </a>
              </li>
              <li>
                <a href="/postman/x402.postman_collection.json" download style={{ color: 'var(--accent-brand)', textDecoration: 'underline', fontWeight: 600 }}>
                  Download Postman collection
                </a>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Frequently Asked Questions
            </h2>

            <details style={{ marginBottom: 'var(--space-4)', paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--border-default)', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: 'var(--text-base)' }}>
                What does HTTP 402 do here?
              </summary>
              <p style={{ marginTop: 'var(--space-3)', paddingLeft: 'var(--space-4)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                It signals that payment is required and supplies just enough machine-readable detail for a client to pay and retry.
              </p>
            </details>

            <details style={{ marginBottom: 'var(--space-4)', paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--border-default)', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: 'var(--text-base)' }}>
                Can I keep my existing auth?
              </summary>
              <p style={{ marginTop: 'var(--space-3)', paddingLeft: 'var(--space-4)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Yes. 402 sits alongside your auth. You can charge only for specific routes or tiers.
              </p>
            </details>

            <details style={{ marginBottom: 0, paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--border-default)', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: 'var(--text-base)' }}>
                Do I need stablecoins?
              </summary>
              <p style={{ marginTop: 'var(--space-3)', paddingLeft: 'var(--space-4)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                No. x402 is rail-agnostic. Stablecoins are common, but you can integrate any payment rail that issues a verifiable receipt.
              </p>
            </details>
          </div>

          {/* CTA */}
          <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-default)', textAlign: 'center' }}>
            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Ready to implement x402?
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
              Start with one of our stack guides above, or explore <Link href="/developers/" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>developer tools</Link> for x402 receipts and verification.
            </p>
            <Link href="/pricing/" className="btn btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              View Pricing
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

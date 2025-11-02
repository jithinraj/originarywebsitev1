import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'x402 Implementation Guide: HTTP 402 Payments for APIs, Apps & AI Agents - Originary',
  description: 'A practical x402 tutorial with working code for Node, Next.js/Edge, and Cloudflare Workers. Learn the 402 flow, receipts basics, and how x402 compares to L402.',
  openGraph: {
    title: 'x402 (HTTP 402) - Implement Internet-Native Payments | Originary',
    description: 'A practical x402 tutorial with working code for Node, Next.js/Edge, and Cloudflare Workers',
    url: 'https://www.originary.xyz/integrations/x402/',
    type: 'article'
  },
  alternates: {
    canonical: 'https://www.originary.xyz/integrations/x402/'
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
      <main id="main-content" className="container" style={{ marginTop: 'var(--space-32)', marginBottom: 'var(--space-32)' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Badge */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
            <div style={{
              display: 'inline-flex',
              background: 'rgba(99, 91, 255, 0.1)',
              border: '1px solid rgba(99, 91, 255, 0.2)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--space-2) var(--space-6)',
              color: 'var(--brand-primary)',
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
            color: 'var(--gray-600)',
            textAlign: 'center',
            marginBottom: 'var(--space-16)',
            lineHeight: 1.6
          }}>
            Implement internet-native payments in minutes
          </p>

          {/* Overview */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Overview
            </h2>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              x402 brings payments back into the web&rsquo;s native path: the request/response loop. Your API returns <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: '0.9em' }}>402 Payment Required</code> with a machine-readable hint. The client pays, presents a receipt, and retries.
            </p>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
              A simple pattern: servers challenge with <strong>HTTP 402</strong>, clients pay and come back with a verifiable receipt. No accounts, no dashboards - just HTTP.
            </p>
          </div>

          {/* What is x402 */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              What is x402?
            </h2>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              x402 standardizes the challenge and the proof so automated clients (including AI agents) can transact without out-of-band flows. HTTP 402 sat unused for decades. Today it&rsquo;s being put to work for APIs and content: a first-class signal that payment is needed before the resource is returned.
            </p>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
              Treat it like a capability, not a paywall - a programmable way to meter access fairly.
            </p>
          </div>

          {/* The Flow */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              The Flow: Client → 402 → Pay → Receipt → Access
            </h2>
            <ol style={{ listStyle: 'decimal', paddingLeft: 'var(--space-6)', color: 'var(--gray-600)', lineHeight: 1.7 }}>
              <li style={{ marginBottom: 'var(--space-2)' }}>Client requests a priced resource.</li>
              <li style={{ marginBottom: 'var(--space-2)' }}>Server responds <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: '0.9em' }}>402</code> with a payment hint (amount, currency, reference).</li>
              <li style={{ marginBottom: 'var(--space-2)' }}>Client pays using the hinted rail, obtains a receipt/proof.</li>
              <li style={{ marginBottom: 'var(--space-2)' }}>Client retries with the receipt in headers or body.</li>
              <li>Server verifies the receipt and returns the resource with standard <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: '0.9em' }}>2xx</code>.</li>
            </ol>

            <div style={{ marginTop: 'var(--space-6)', padding: 'var(--space-4)', background: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.3)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-2)' }}>💡 Design tip</div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-700)', lineHeight: 1.6, margin: 0 }}>
                Keep the 402 payload small and explicit. Include a stable reference the server can match later.
              </p>
            </div>

            <div style={{ marginTop: 'var(--space-6)' }}>
              <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-700)' }}>Try it now:</p>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', background: 'rgba(0,0,0,0.9)', padding: 'var(--space-4)', overflow: 'auto' }}>
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
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              A compliant 402 response with a JSON payment hint:
            </p>
            <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', background: 'rgba(0,0,0,0.9)', padding: 'var(--space-4)', overflow: 'auto' }}>
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
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              Choose your stack and implement x402 in under 15 minutes:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <Link href="/integrations/x402/express-node/" style={{ color: 'var(--brand-primary)', textDecoration: 'none', fontWeight: 600, fontSize: 'var(--text-base)' }}>
                  → Express (Node)
                </Link>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)', marginTop: 'var(--space-1)', marginLeft: 'var(--space-4)' }}>
                  Add 402 to your Express API
                </p>
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <Link href="/integrations/x402/nextjs/" style={{ color: 'var(--brand-primary)', textDecoration: 'none', fontWeight: 600, fontSize: 'var(--text-base)' }}>
                  → Next.js / Edge Runtime
                </Link>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)', marginTop: 'var(--space-1)', marginLeft: 'var(--space-4)' }}>
                  Route handlers with 402 challenges
                </p>
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <Link href="/integrations/x402/cloudflare-workers/" style={{ color: 'var(--brand-primary)', textDecoration: 'none', fontWeight: 600, fontSize: 'var(--text-base)' }}>
                  → Cloudflare Workers
                </Link>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)', marginTop: 'var(--space-1)', marginLeft: 'var(--space-4)' }}>
                  Tiny Worker returning HTTP 402
                </p>
              </li>
              <li>
                <span style={{ color: 'var(--gray-400)', fontWeight: 600, fontSize: 'var(--text-base)' }}>
                  → FastAPI (Python)
                </span>
                <span style={{ color: 'var(--gray-500)', fontSize: 'var(--text-sm)', fontStyle: 'italic', marginLeft: 'var(--space-2)' }}>
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
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              A receipt ties the payment to your resource request. Keep two checks:
            </p>
            <ol style={{ listStyle: 'decimal', paddingLeft: 'var(--space-6)', color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              <li>The cryptographic or gateway proof</li>
              <li>Your own ledger mapping <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: '0.9em' }}>reference → entitlement</code></li>
            </ol>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              Return explicit errors for expired/insufficient proofs.
            </p>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
              See <Link href="/integrations/mcp/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Model Context Protocol (MCP)</Link>, <Link href="/integrations/acp/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Agentic Commerce Protocol (ACP)</Link>, and <Link href="/integrations/a2a/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Agent-to-Agent (A2A)</Link> for receipt integration patterns.
            </p>
          </div>

          {/* Comparisons */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              x402 vs L402
            </h2>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              L402 couples Lightning and macaroons for auth and payment in one flow. x402 is HTTP-native and rail-agnostic.
            </p>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
              Choose L402 for Lightning-first ecosystems; choose x402 when you want chain/gateway flexibility and simple HTTP semantics.
            </p>
          </div>

          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Choosing Rails: x402 vs Arc vs Tempo
            </h2>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
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
                <a href="/openapi/x402.yaml" download style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 600 }}>
                  Download OpenAPI: x402 demo
                </a>
              </li>
              <li>
                <a href="/postman/x402.postman_collection.json" download style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 600 }}>
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

            <details style={{ marginBottom: 'var(--space-4)', paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--gray-200)', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 600, color: 'var(--gray-900)', fontSize: 'var(--text-base)' }}>
                What does HTTP 402 do here?
              </summary>
              <p style={{ marginTop: 'var(--space-3)', paddingLeft: 'var(--space-4)', color: 'var(--gray-600)', lineHeight: 1.7 }}>
                It signals that payment is required and supplies just enough machine-readable detail for a client to pay and retry.
              </p>
            </details>

            <details style={{ marginBottom: 'var(--space-4)', paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--gray-200)', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 600, color: 'var(--gray-900)', fontSize: 'var(--text-base)' }}>
                Can I keep my existing auth?
              </summary>
              <p style={{ marginTop: 'var(--space-3)', paddingLeft: 'var(--space-4)', color: 'var(--gray-600)', lineHeight: 1.7 }}>
                Yes. 402 sits alongside your auth. You can charge only for specific routes or tiers.
              </p>
            </details>

            <details style={{ marginBottom: 0, paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--gray-200)', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 600, color: 'var(--gray-900)', fontSize: 'var(--text-base)' }}>
                Do I need stablecoins?
              </summary>
              <p style={{ marginTop: 'var(--space-3)', paddingLeft: 'var(--space-4)', color: 'var(--gray-600)', lineHeight: 1.7 }}>
                No. x402 is rail-agnostic. Stablecoins are common, but you can integrate any payment rail that issues a verifiable receipt.
              </p>
            </details>
          </div>

          {/* CTA */}
          <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--gray-50)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)', textAlign: 'center' }}>
            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Ready to implement x402?
            </h3>
            <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
              Start with one of our stack guides above, or explore <Link href="/developers/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>developer tools</Link> for x402 receipts and verification.
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

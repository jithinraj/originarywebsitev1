import type { Metadata } from "next";
import Link from "next/link";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HTTP 402 for APIs: Making Payment-Required Responses Work - Originary™",
  description: "A practical guide to implementing HTTP 402 Payment Required in modern APIs. Learn the anatomy of a 402 response, receipt verification patterns, and how to avoid common pitfalls.",
  keywords: "HTTP 402, payment required, API monetization, x402, agent commerce, receipts, web payments",
  authors: [{ name: "Jithin Raj & Originary Team" }],
  alternates: { canonical: "https://www.originary.xyz/blog/http-402-for-apis/" },
  openGraph: {
    title: "HTTP 402 for APIs: Making Payment-Required Responses Work",
    description: "Practical guide to implementing HTTP 402 Payment Required in modern APIs",
    type: "article",
    url: "https://www.originary.xyz/blog/http-402-for-apis/",
    publishedTime: "2025-11-03",
    authors: ["Jithin Raj", "Originary Team"]
  },
  twitter: {
    card: "summary_large_image",
    title: "HTTP 402 for APIs: Making Payment-Required Responses Work",
    description: "Practical guide to implementing HTTP 402 Payment Required in modern APIs"
  }
};

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "HTTP 402 for APIs: Making Payment-Required Responses Work",
    "description": "A practical guide to implementing HTTP 402 Payment Required in modern APIs with receipt verification patterns",
    "author": {
      "@type": "Organization",
      "name": "Originary™",
      "url": "https://www.originary.xyz"
    },
    "datePublished": "2025-11-03",
    "dateModified": "2025-11-03",
    "publisher": {
      "@type": "Organization",
      "name": "Originary™",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.originary.xyz/og/originary-logo.png"
      }
    }
  };

  return (
    <>
      <NavigationHeader />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }} id="main-content">
        <article className="max-w-3xl mx-auto px-4 py-10">
          <nav aria-label="Breadcrumb" style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)', color: 'var(--gray-600)' }}>
            <Link href="/blog/" style={{ textDecoration: 'none', color: 'var(--gray-600)' }}>Blog</Link>
            {' '}/{' '}
            <span style={{ color: 'var(--gray-900)' }}>HTTP 402 for APIs</span>
          </nav>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            background: 'rgba(99, 91, 255, 0.1)',
            border: '1px solid rgba(99, 91, 255, 0.2)',
            borderRadius: 'var(--radius-full)',
            padding: 'var(--space-2) var(--space-4)',
            fontSize: 'var(--text-xs)',
            fontWeight: 600,
            color: 'var(--brand-primary)',
            marginBottom: 'var(--space-4)'
          }}>
            TECHNICAL
          </div>

          <h1 style={{
            fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-5xl))',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 'var(--space-6)',
            color: 'var(--gray-900)'
          }}>
            HTTP 402 for APIs: Making Payment-Required Responses Work
          </h1>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-4)',
            fontSize: 'var(--text-sm)',
            color: 'var(--gray-600)',
            marginBottom: 'var(--space-8)',
            paddingBottom: 'var(--space-4)',
            borderBottom: '1px solid var(--gray-200)'
          }}>
            <span>By Jithin Raj & Originary™ Team</span>
            <span>•</span>
            <time dateTime="2025-11-03">Nov 3, 2025</time>
            <span>•</span>
            <span>12 min read</span>
          </div>

          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <Link href="/glossary/http-402-payment-required/" className="text-brand-primary underline">HTTP 402 Payment Required</Link> was reserved in 1999 for &ldquo;future digital payments.&rdquo; That future is now. Here&rsquo;s how to implement 402 responses that work for automated agents and human developers alike.
            </p>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Why 402 matters for APIs</h2>
            <p className="text-gray-700 leading-relaxed">
              Modern APIs serve both humans and agents. When an agent hits a priced endpoint, it needs:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li><strong>Programmatic discovery</strong>: Know what to pay without parsing HTML</li>
              <li><strong>Rail flexibility</strong>: Use any payment method that provides a receipt</li>
              <li><strong>Automatic retry</strong>: Present receipt and get resource in one flow</li>
              <li><strong>Clear semantics</strong>: Distinguish payment from auth/permission issues</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              HTTP 402 provides semantic clarity. Unlike 401 (auth missing) or 403 (permission denied), 402 signals: <em>&ldquo;This resource exists, pay first.&rdquo;</em>
            </p>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Anatomy of a working 402 response</h2>
            <p className="text-gray-700 leading-relaxed">
              A minimal 402 response includes:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 leading-relaxed space-y-2">
              <li><strong>Status code</strong>: <code className="bg-gray-100 px-1.5 py-0.5 rounded">402</code></li>
              <li><strong>Human-readable detail</strong>: Why payment is required</li>
              <li><strong>Machine-readable hint</strong>: Protocol, amount, currency, reference</li>
              <li><strong>Instructions</strong>: How to pay and retry</li>
            </ol>

            <pre className="overflow-x-auto text-sm bg-black/90 text-white rounded-2xl p-4 mt-4">
              <code>{`HTTP/1.1 402 Payment Required
Content-Type: application/json
Cache-Control: no-store

{
  "detail": "Payment required to access this resource.",
  "payment": {
    "protocol": "x402",
    "amount": "0.50",
    "currency": "USD",
    "reference": "invoice-abc-789",
    "instructions": "Pay and include receipt in X-Receipt header on retry."
  }
}`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-3 mt-8">The request-challenge-pay-retry flow</h2>
            <p className="text-gray-700 leading-relaxed">
              Here&rsquo;s the full cycle:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 leading-relaxed space-y-3">
              <li>
                <strong>Client requests priced resource</strong>
                <pre className="overflow-x-auto text-sm bg-gray-100 rounded p-2 mt-2"><code>GET /api/premium-data HTTP/1.1</code></pre>
              </li>
              <li>
                <strong>Server returns 402 with payment hint</strong> (see example above)
              </li>
              <li>
                <strong>Client pays</strong> using any rail (Stripe, crypto, ACH) and obtains a verifiable receipt
              </li>
              <li>
                <strong>Client retries with receipt</strong>
                <pre className="overflow-x-auto text-sm bg-gray-100 rounded p-2 mt-2"><code>{`GET /api/premium-data HTTP/1.1
X-Receipt: eyJhbGciOiJFUzI1NiIs...`}</code></pre>
              </li>
              <li>
                <strong>Server verifies receipt</strong>, checks signature/timestamp, then returns <code className="bg-gray-100 px-1.5 py-0.5 rounded">200 OK</code> with the resource
              </li>
            </ol>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Receipt verification: the critical step</h2>
            <p className="text-gray-700 leading-relaxed">
              A receipt is cryptographic proof of payment. Your server must:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li><strong>Verify signature</strong>: Ensure receipt is from a trusted source</li>
              <li><strong>Check timestamp</strong>: Reject expired receipts (e.g., &gt;5 minutes old)</li>
              <li><strong>Match reference</strong>: Confirm receipt corresponds to the challenge</li>
              <li><strong>Prevent replay</strong>: Track used receipts, reject duplicates</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              Example verification pseudocode:
            </p>
            <pre className="overflow-x-auto text-sm bg-black/90 text-white rounded-2xl p-4 mt-4">
              <code>{`function verifyReceipt(receipt: string, reference: string): boolean {
  const parsed = parseJWT(receipt);

  // 1. Verify signature
  if (!verifySignature(parsed, TRUSTED_PUBLIC_KEY)) {
    return false;
  }

  // 2. Check timestamp
  if (Date.now() - parsed.timestamp > 5 * 60 * 1000) {
    return false; // expired
  }

  // 3. Match reference
  if (parsed.reference !== reference) {
    return false;
  }

  // 4. Prevent replay
  if (isReceiptUsed(receipt)) {
    return false;
  }

  markReceiptUsed(receipt);
  return true;
}`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Common pitfalls and how to avoid them</h2>

            <h3 className="text-xl font-semibold mb-2 mt-6">1. Opaque error messages</h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Bad</strong>: <code className="bg-gray-100 px-1.5 py-0.5 rounded">{`{"error": "Forbidden"}`}</code><br />
              <strong>Good</strong>: <code className="bg-gray-100 px-1.5 py-0.5 rounded">{`{"error": "Receipt expired", "code": "RECEIPT_EXPIRED"}`}</code>
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Deterministic error codes help agents decide whether to retry or escalate.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-6">2. No mapping from reference to entitlement</h3>
            <p className="text-gray-700 leading-relaxed">
              Your <code className="bg-gray-100 px-1.5 py-0.5 rounded">reference</code> field should map to a specific entitlement (e.g., &ldquo;access /api/premium-data for 24 hours&rdquo;). Keep a ledger:
            </p>
            <pre className="overflow-x-auto text-sm bg-gray-100 rounded p-2 mt-2">
              <code>{`reference → { resource, duration, metadata }`}</code>
            </pre>

            <h3 className="text-xl font-semibold mb-2 mt-6">3. Leaking pricing logic into every handler</h3>
            <p className="text-gray-700 leading-relaxed">
              Centralize challenge creation in middleware or a helper function:
            </p>
            <pre className="overflow-x-auto text-sm bg-black/90 text-white rounded-2xl p-4 mt-4">
              <code>{`function create402Challenge(resource: string, amount: string, currency: string) {
  const reference = generateReference();
  saveChallengeToLedger(reference, { resource, amount, currency });

  return {
    status: 402,
    body: {
      detail: \`Payment required to access \${resource}\`,
      payment: {
        protocol: "x402",
        amount,
        currency,
        reference,
        instructions: "Pay and present receipt on retry."
      }
    }
  };
}`}</code>
            </pre>

            <h3 className="text-xl font-semibold mb-2 mt-6">4. Forgetting to set Cache-Control</h3>
            <p className="text-gray-700 leading-relaxed">
              Always include <code className="bg-gray-100 px-1.5 py-0.5 rounded">Cache-Control: no-store</code> on 402 responses. You don&rsquo;t want clients caching payment challenges.
            </p>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Real-world implementation checklist</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>✅ Return <code className="bg-gray-100 px-1.5 py-0.5 rounded">402</code> with machine-readable JSON hint</li>
              <li>✅ Include <code className="bg-gray-100 px-1.5 py-0.5 rounded">reference</code> field mapped to entitlement ledger</li>
              <li>✅ Set <code className="bg-gray-100 px-1.5 py-0.5 rounded">Cache-Control: no-store</code></li>
              <li>✅ Verify receipt signature, timestamp, reference, replay</li>
              <li>✅ Return deterministic error codes for invalid receipts</li>
              <li>✅ Centralize challenge creation in middleware</li>
              <li>✅ Log challenges and verifications for audit trails</li>
              <li>✅ Support multiple payment rails (rail-agnostic)</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Try it yourself</h2>
            <p className="text-gray-700 leading-relaxed">
              We maintain a live demo endpoint:
            </p>
            <pre className="overflow-x-auto text-sm bg-gray-100 rounded p-2 mt-2">
              <code>curl -i https://www.originary.xyz/api/x402-demo</code>
            </pre>
            <p className="text-gray-700 leading-relaxed mt-4">
              For step-by-step implementation guides with Express, Next.js, and Cloudflare Workers, see our <Link href="/integrations/x402/" className="text-brand-primary underline">x402 integration documentation</Link>.
            </p>

            <h2 className="text-2xl font-semibold mb-3 mt-8">What&rsquo;s next</h2>
            <p className="text-gray-700 leading-relaxed">
              HTTP 402 is just the transport layer. To build a complete agent-to-agent commerce system, you&rsquo;ll need:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li><strong>Receipt issuance</strong>: Integrate with Stripe, crypto wallets, or banks</li>
              <li><strong>Entitlement tracking</strong>: Map receipts to access grants</li>
              <li><strong>Monitoring and analytics</strong>: Track 402 responses, payment conversions, errors</li>
              <li><strong>Client SDKs</strong>: Help developers handle 402 flows automatically</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              We&rsquo;re building tools to make this easier. Stay tuned for updates on <Link href="/blog/" className="text-brand-primary underline">our blog</Link>.
            </p>
          </div>

          <div style={{
            marginTop: 'var(--space-12)',
            paddingTop: 'var(--space-8)',
            borderTop: '2px solid var(--gray-200)'
          }}>
            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
              Related Reading
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <li>
                <Link href="/guides/http-402/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>
                  HTTP 402 Payment Required - A Practical Guide
                </Link>
              </li>
              <li>
                <Link href="/glossary/x402/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>
                  What is x402?
                </Link>
              </li>
              <li>
                <Link href="/integrations/x402/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>
                  x402 Implementation Guide
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Footer />
    </>
  );
}

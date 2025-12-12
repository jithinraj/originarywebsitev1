import type { Metadata } from "next";
import Link from "next/link";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HTTP 402 Payment Required - Status Code Reference",
  description: "HTTP 402 Payment Required is a reserved status code revived for digital payments. Signals that a resource is available after payment with machine-readable hints.",
  alternates: { canonical: '/glossary/http-402-payment-required' },
  openGraph: {
    title: "HTTP 402 Payment Required - Status Code Reference",
    description: "Reserved HTTP status code revived for digital payments and agent-to-agent commerce",
    type: "article",
    url: "https://www.originary.xyz/glossary/http-402-payment-required/"
  },
  twitter: {
    card: "summary_large_image",
    title: "HTTP 402 Payment Required - Status Code Reference",
    description: "Reserved HTTP status code revived for digital payments and agent-to-agent commerce"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": "HTTP 402 Payment Required",
    "description": "A reserved HTTP status code that signals a resource is available after payment. Used in modern APIs for agent-to-agent commerce with machine-readable payment hints.",
    "inDefinedTermSet": "https://www.originary.xyz/glossary/",
    "url": "https://www.originary.xyz/glossary/http-402-payment-required/"
  };

  return (
    <>
      <NavigationHeader />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <nav aria-label="Breadcrumb" style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)', color: 'var(--gray-600)' }}>
          <Link href="/glossary/" style={{ textDecoration: 'none', color: 'var(--gray-600)' }}>Glossary</Link>
          {' '}/{' '}
          <span style={{ color: 'var(--gray-900)' }}>HTTP 402 Payment Required</span>
        </nav>

        <h1 className="text-4xl font-bold mb-4">HTTP 402 Payment Required</h1>

        <div className="prose max-w-none mt-8">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>HTTP 402 Payment Required</strong> is a reserved status code defined in <a href="https://httpwg.org/specs/rfc9110.html#status.402" target="_blank" rel="noopener" className="text-brand-primary underline">RFC 9110</a> that signals a resource is available after payment. Originally reserved for future digital payment systems, it&rsquo;s now being revived for agent-to-agent commerce.
          </p>

          <h2 className="text-2xl font-semibold mb-3 mt-8">Status code definition</h2>
          <p className="text-gray-700 leading-relaxed">
            When a server returns <code className="bg-gray-100 px-1.5 py-0.5 rounded">402</code>, it means:
          </p>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
            <li>The resource exists and is accessible</li>
            <li>Payment is required before the server will fulfill the request</li>
            <li>The response should include payment instructions (amount, currency, method)</li>
            <li>The client should retry with proof of payment</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3 mt-8">Modern usage with x402</h2>
          <p className="text-gray-700 leading-relaxed">
            The <Link href="/glossary/x402/" className="text-brand-primary underline">x402 protocol pattern</Link> revives HTTP 402 by pairing it with machine-readable JSON payment hints. This enables automated agents to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
            <li>Discover pricing programmatically</li>
            <li>Pay using any rail that provides verifiable receipts</li>
            <li>Present receipts and retry automatically</li>
            <li>Handle payment flows without human intervention</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3 mt-8">Example 402 response</h2>
          <pre className="overflow-x-auto text-sm bg-black/90 text-white rounded-2xl p-4">
            <code>{`HTTP/1.1 402 Payment Required
Content-Type: application/json
Cache-Control: no-store

{
  "detail": "Payment required to access this resource.",
  "payment": {
    "protocol": "x402",
    "amount": "1.00",
    "currency": "USD",
    "reference": "invoice-789",
    "instructions": "Pay and include receipt in X-Receipt header."
  }
}`}</code>
          </pre>

          <h2 className="text-2xl font-semibold mb-3 mt-8">Why 402 vs 403 or 401?</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
            <li><strong>401 Unauthorized</strong>: Authentication missing or invalid</li>
            <li><strong>403 Forbidden</strong>: Authenticated but not authorized (permission denied)</li>
            <li><strong>402 Payment Required</strong>: Payment (not permission) is needed. Distinct semantic meaning.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-3">
            Using 402 clearly signals <em>why</em> access is denied (payment) versus auth/permission issues, making it easier for automated clients to handle.
          </p>

          <h2 className="text-2xl font-semibold mb-3 mt-8">History and RFC status</h2>
          <p className="text-gray-700 leading-relaxed">
            HTTP 402 was reserved in the original HTTP/1.1 specification (RFC 2616, 1999) for &ldquo;future use&rdquo; in digital payment systems. RFC 9110 (2022) maintains the reservation but notes it has no standard semantics. Modern implementations like x402 are defining practical semantics for agent-to-agent commerce.
          </p>

          <h2 className="text-2xl font-semibold mb-3 mt-8">Learn more</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
            <li>
              <Link href="/guides/http-402/" className="text-brand-primary underline">HTTP 402 Practical Guide</Link> - Design principles, flow patterns, and common pitfalls
            </li>
            <li>
              <Link href="/integrations/x402/" className="text-brand-primary underline">x402 Implementation Guide</Link> - Step-by-step code examples for Express, Next.js, and Cloudflare Workers
            </li>
            <li>
              <a href="https://httpwg.org/specs/rfc9110.html#status.402" target="_blank" rel="noopener" className="text-brand-primary underline">RFC 9110 Section 15.5.3</a> - Official HTTP 402 specification
            </li>
          </ul>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </>
  );
}

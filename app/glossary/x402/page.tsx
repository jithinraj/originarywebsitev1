import type { Metadata } from "next";
import Link from "next/link";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "x402 - Payment-Required Protocol for APIs - Originary™",
  description: "x402 is a lightweight protocol pattern that uses HTTP 402 Payment Required responses with machine-readable JSON hints to enable agent-to-agent paid transactions.",
  alternates: { canonical: "https://www.originary.xyz/glossary/x402/" },
  openGraph: {
    title: "x402 - Payment-Required Protocol for APIs",
    description: "Lightweight protocol pattern using HTTP 402 for agent-to-agent paid transactions",
    type: "article",
    url: "https://www.originary.xyz/glossary/x402/"
  },
  twitter: {
    card: "summary_large_image",
    title: "x402 - Payment-Required Protocol for APIs",
    description: "Lightweight protocol pattern using HTTP 402 for agent-to-agent paid transactions"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": "x402",
    "description": "A lightweight protocol pattern that uses HTTP 402 Payment Required responses with machine-readable JSON hints to enable agent-to-agent paid transactions.",
    "inDefinedTermSet": "https://www.originary.xyz/glossary/",
    "url": "https://www.originary.xyz/glossary/x402/"
  };

  return (
    <>
      <NavigationHeader />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <nav aria-label="Breadcrumb" style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)', color: 'var(--gray-600)' }}>
          <Link href="/glossary/" style={{ textDecoration: 'none', color: 'var(--gray-600)' }}>Glossary</Link>
          {' '}/{' '}
          <span style={{ color: 'var(--gray-900)' }}>x402</span>
        </nav>

        <h1 className="text-4xl font-bold mb-4">x402</h1>

        <div className="prose max-w-none mt-8">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>x402</strong> is a lightweight protocol pattern that uses <Link href="/glossary/http-402-payment-required/" className="text-brand-primary underline">HTTP 402 Payment Required</Link> responses with machine-readable JSON hints to enable agent-to-agent paid transactions.
          </p>

          <h2 className="text-2xl font-semibold mb-3 mt-8">How it works</h2>
          <ol className="list-decimal pl-6 text-gray-700 leading-relaxed space-y-2">
            <li>Client requests a priced resource</li>
            <li>Server returns <code className="bg-gray-100 px-1.5 py-0.5 rounded">402 Payment Required</code> with a JSON payment hint</li>
            <li>Client pays using any payment rail that provides a verifiable receipt</li>
            <li>Client retries the request with the receipt (typically in a header or body field)</li>
            <li>Server verifies the receipt and returns <code className="bg-gray-100 px-1.5 py-0.5 rounded">200 OK</code> with the resource</li>
          </ol>

          <h2 className="text-2xl font-semibold mb-3 mt-8">Key characteristics</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
            <li><strong>Rail-agnostic</strong>: Works with any payment system that provides verifiable receipts (crypto, cards, ACH, Lightning)</li>
            <li><strong>Machine-readable</strong>: JSON responses enable automated agent workflows</li>
            <li><strong>HTTP-native</strong>: Uses standard status codes and headers, no custom protocols</li>
            <li><strong>Verifiable</strong>: Cryptographic receipts prove payment without manual reconciliation</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3 mt-8">Example 402 response</h2>
          <pre className="overflow-x-auto text-sm bg-black/90 text-white rounded-2xl p-4">
            <code>{`HTTP/1.1 402 Payment Required
Content-Type: application/json

{
  "detail": "Payment required to access this resource.",
  "payment": {
    "protocol": "x402",
    "amount": "0.10",
    "currency": "USDC",
    "reference": "order-abc-123",
    "instructions": "Pay and present receipt in retry."
  }
}`}</code>
          </pre>

          <h2 className="text-2xl font-semibold mb-3 mt-8">Why &ldquo;x402&rdquo;?</h2>
          <p className="text-gray-700 leading-relaxed">
            The <code className="bg-gray-100 px-1.5 py-0.5 rounded">x</code> prefix indicates an experimental or extension pattern. x402 revives the long-reserved HTTP 402 status code for practical use in agent-to-agent commerce, where automated clients need a standard way to discover, pay for, and access priced resources.
          </p>

          <h2 className="text-2xl font-semibold mb-3 mt-8">Learn more</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
            <li>
              <Link href="/integrations/x402/" className="text-brand-primary underline">x402 Implementation Guide</Link> - Complete technical documentation with code examples
            </li>
            <li>
              <Link href="/guides/http-402/" className="text-brand-primary underline">HTTP 402 Practical Guide</Link> - Design principles and common pitfalls
            </li>
            <li>
              <Link href="/blog/http-402-for-apis/" className="text-brand-primary underline">HTTP 402 for APIs Blog Post</Link> - Real-world implementation patterns
            </li>
          </ul>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HTTP 402 Payment Required - a practical guide for APIs - Originary",
  description: "What 402 means in practice, how to design the 402 payload, common pitfalls, and a minimal example.",
  alternates: { canonical: '/guides/http-402' }
};

export default function Page() {
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
}`;

  const faqJsonLd = {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity":[
      {"@type":"Question","name":"What does HTTP 402 signal?","acceptedAnswer":{"@type":"Answer","text":"That the resource is available after payment. The response should include a small machine-readable hint so clients know how to pay and retry."}},
      {"@type":"Question","name":"Does 402 replace auth?","acceptedAnswer":{"@type":"Answer","text":"No. 402 complements your existing auth. Charge only for priced endpoints or tiers."}},
      {"@type":"Question","name":"Do I need stablecoins?","acceptedAnswer":{"@type":"Answer","text":"Not necessarily. The pattern is rail-agnostic as long as you can verify a receipt."}}
    ]
  };

  return (
    <>
      <NavigationHeader />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-semibold mb-4">HTTP 402 Payment Required - a practical guide for APIs</h1>
        <p className="mt-4 text-gray-800 leading-relaxed">
          <strong>TL;DR</strong>: 402 is a compact contract between your API and a client: challenge with payment details, receive a verifiable receipt, return the resource.
          Used well, it keeps monetization inside HTTP without detours through dashboards or manual flows.
        </p>

        <div className="prose max-w-none mt-8">
          <h2 id="why-now" className="text-2xl font-semibold mb-3 mt-8">Why 402 now</h2>
          <p className="text-gray-700 leading-relaxed">APIs increasingly serve automated clients and agents. 402 makes &ldquo;paid access&rdquo; programmable, observable, and testable in the same loop as your normal requests.</p>

          <h2 id="anatomy" className="text-2xl font-semibold mb-3 mt-8">Anatomy of a 402 response</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
            <li><code className="bg-gray-100 px-1.5 py-0.5 rounded">status</code>: 402</li>
            <li><code className="bg-gray-100 px-1.5 py-0.5 rounded">detail</code>: human-readable reason</li>
            <li><code className="bg-gray-100 px-1.5 py-0.5 rounded">payment</code>: a minimal JSON hint (protocol, amount, currency, reference, instructions)</li>
          </ul>

          <pre className="overflow-x-auto text-sm bg-black/90 text-white rounded-2xl p-4 mt-4"><code>{minimal}</code></pre>

          <h2 id="design" className="text-2xl font-semibold mb-3 mt-8">Design rules we follow</h2>
          <ol className="list-decimal pl-6 text-gray-700 leading-relaxed space-y-2">
            <li><strong>Keep it small</strong>: only fields your client truly needs.</li>
            <li><strong>Reference everything</strong>: include a stable <code className="bg-gray-100 px-1.5 py-0.5 rounded">reference</code> you can map to an entitlement.</li>
            <li><strong>Be explicit about expiry</strong>: short-lived challenges reduce replay risk.</li>
            <li><strong>Deterministic errors</strong>: return clear reasons for insufficient/expired/invalid receipts.</li>
            <li><strong>Log enough to audit</strong>: challenge ID, receipt hash, verification outcome.</li>
          </ol>

          <h2 id="flow" className="text-2xl font-semibold mb-3 mt-8">Flow: request → 402 → pay → receipt → access</h2>
          <ol className="list-decimal pl-6 text-gray-700 leading-relaxed space-y-2">
            <li>Client requests a priced resource.</li>
            <li>Server returns 402 with a payment hint.</li>
            <li>Client pays, obtains a receipt/proof.</li>
            <li>Client retries with the receipt in headers or body.</li>
            <li>Server verifies and returns <code className="bg-gray-100 px-1.5 py-0.5 rounded">2xx</code> or a precise error.</li>
          </ol>

          <h2 id="pitfalls" className="text-2xl font-semibold mb-3 mt-8">Common pitfalls</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
            <li>Leaking pricing logic into every handler. Centralize challenge creation.</li>
            <li>Opaque errors. Machines need deterministic reasons.</li>
            <li>No mapping from <code className="bg-gray-100 px-1.5 py-0.5 rounded">reference</code> to entitlement. Keep a ledger.</li>
          </ul>

          <h2 id="faq" className="text-2xl font-semibold mb-3 mt-8">FAQ</h2>
          <details className="mb-3 cursor-pointer border-b pb-3">
            <summary className="font-medium text-gray-900 hover:text-gray-700">Does 402 work with existing API keys?</summary>
            <p className="mt-2 text-gray-700 pl-4">Yes. Keep your auth. 402 simply meters priced endpoints.</p>
          </details>
          <details className="mb-3 cursor-pointer border-b pb-3">
            <summary className="font-medium text-gray-900 hover:text-gray-700">Where does the receipt live?</summary>
            <p className="mt-2 text-gray-700 pl-4">Usually in a header or JSON field on the retry. Verify server-side, then cache the grant.</p>
          </details>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </main>
      <Footer />
    </>
  );
}

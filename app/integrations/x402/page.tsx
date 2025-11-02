import { baseMeta } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import CodeBlock from "@/components/CodeBlock";
import { TOC } from "@/components/TOC";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Callout } from "@/components/Callout";
import { Byline } from "@/components/Byline";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = baseMeta({
  title: "x402 Implementation Guide: HTTP 402 Payments for APIs, Apps & AI Agents - Originary",
  description: "A practical x402 tutorial with working code for Node, Next.js/Edge, and Cloudflare Workers. Learn the 402 flow, receipts basics, and how x402 compares to L402.",
  canonical: "https://www.originary.xyz/integrations/x402/"
});

export default function Page() {
  const curl = `curl -i https://www.originary.xyz/api/x402-demo`;

  const items = [
    { href:"#what", label:"What is x402?" },
    { href:"#http402", label:"HTTP 402, revived" },
    { href:"#flow", label:"Client → 402 → pay → receipt → access" },
    { href:"#minimal", label:"Minimal 402 response" },
    { href:"#servers", label:"Server examples" },
    { href:"#receipts", label:"Receipts: structure & verification" },
    { href:"#compare-l402", label:"x402 vs L402" },
    { href:"#compare-rails", label:"Choosing rails" },
    { href:"#downloads", label:"Postman + OpenAPI" },
    { href:"#faq", label:"FAQ" },
  ];

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

  return (
    <>
      <NavigationHeader />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumbs trail={[
          {href:"/", label:"Home"},
          {href:"/integrations/x402/", label:"x402"}
        ]}/>

        <h1 className="text-4xl font-bold mb-2">x402 (HTTP 402) - Implement Internet-Native Payments in Minutes</h1>
        <Byline author="Originary™ Engineering" date="November 3, 2025" />

        <p className="mt-4 text-gray-800 leading-relaxed text-lg">
          x402 brings payments back into the web&rsquo;s native path: the request/response loop.
          Your API returns <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">402 Payment Required</code> with a machine-readable hint.
          The client pays, presents a receipt, and retries. No accounts, no dashboards - just HTTP.
        </p>

        <TOC items={items} />

        <section id="what" className="my-10">
          <h2 className="text-2xl font-semibold mb-3">What is x402?</h2>
          <p className="text-gray-700 leading-relaxed">
            A simple pattern: servers challenge with <strong>HTTP 402</strong>, clients pay and come back with a verifiable receipt.
            In practice, x402 standardizes the challenge and the proof so automated clients (including AI agents) can transact without out-of-band flows.
          </p>
        </section>

        <section id="http402" className="my-10">
          <h2 className="text-2xl font-semibold mb-3">HTTP 402, revived for real payments</h2>
          <p className="text-gray-700 leading-relaxed">
            402 sat unused for decades. Today it&rsquo;s being put to work for APIs and content:
            a first-class signal that payment is needed before the resource is returned.
            Treat it like a capability, not a paywall - a programmable way to meter access fairly.
          </p>
        </section>

        <section id="flow" className="my-10">
          <h2 className="text-2xl font-semibold mb-3">Client → 402 → pay → receipt → access</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
            <li>Client requests a priced resource.</li>
            <li>Server responds <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">402</code> with a payment hint (amount, currency, reference).</li>
            <li>Client pays using the hinted rail, obtains a receipt/proof.</li>
            <li>Client retries with the receipt in headers or body (per your adapter).</li>
            <li>Server verifies the receipt and returns the resource with standard <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">2xx</code>.</li>
          </ol>

          <Callout title="Design tip">
            Keep the 402 payload small and explicit. Include a stable reference the server can match later.
          </Callout>

          <div className="my-4">
            <p className="text-sm font-medium mb-2 text-gray-700">Try it now:</p>
            <CodeBlock lang="bash" code={curl} />
          </div>
        </section>

        <section id="minimal" className="my-10">
          <h2 className="text-2xl font-semibold mb-3">Minimal 402 response (with JSON payment hint)</h2>
          <CodeBlock lang="http" code={minimal} />
        </section>

        <section id="servers" className="my-10">
          <h2 className="text-2xl font-semibold mb-3">Server examples</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Choose your stack and implement x402 in under 15 minutes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li><Link href="/integrations/x402/express-node/" className="text-blue-600 hover:underline font-medium">Express (Node)</Link> - Add 402 to your Express API</li>
            <li><Link href="/integrations/x402/nextjs/" className="text-blue-600 hover:underline font-medium">Next.js / Edge runtime</Link> - Route handlers with 402 challenges</li>
            <li><Link href="/integrations/x402/cloudflare-workers/" className="text-blue-600 hover:underline font-medium">Cloudflare Workers</Link> - Tiny Worker returning HTTP 402</li>
            <li><Link href="/integrations/x402/python-fastapi/" className="text-gray-400">FastAPI (Python)</Link> <em className="text-gray-500">(coming soon)</em></li>
          </ul>
        </section>

        <section id="receipts" className="my-10">
          <h2 className="text-2xl font-semibold mb-3">Receipts: structure & verification</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            A receipt ties the payment to your resource request. Keep two checks: (1) the cryptographic or gateway proof,
            (2) your own ledger mapping <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">reference → entitlement</code>. Return explicit errors for expired/insufficient proofs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            See <Link href="/integrations/mcp/" className="text-blue-600 hover:underline">Model Context Protocol (MCP)</Link>, <Link href="/integrations/acp/" className="text-blue-600 hover:underline">Agentic Commerce Protocol (ACP)</Link>, and <Link href="/integrations/a2a/" className="text-blue-600 hover:underline">Agent-to-Agent (A2A)</Link> for receipt integration patterns.
          </p>
        </section>

        <section id="compare-l402" className="my-10">
          <h2 className="text-2xl font-semibold mb-3">x402 vs L402</h2>
          <p className="text-gray-700 leading-relaxed">
            L402 couples Lightning and macaroons for auth and payment in one flow. x402 is HTTP-native and rail-agnostic.
            Choose L402 for Lightning-first ecosystems; choose x402 when you want chain/gateway flexibility and simple HTTP semantics.
          </p>
        </section>

        <section id="compare-rails" className="my-10">
          <h2 className="text-2xl font-semibold mb-3">Choosing rails: x402 vs Arc vs Tempo</h2>
          <p className="text-gray-700 leading-relaxed">
            The right rail depends on your currency, fee model, and developer footprint. Start with what your customers already hold (e.g., stablecoins),
            then optimize for verification latency and dispute handling. We will maintain a running comparison as the space evolves.
          </p>
        </section>

        <section id="downloads" className="my-10">
          <h2 className="text-2xl font-semibold mb-3">Postman + OpenAPI</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li><a href="/openapi/x402.yaml" download className="text-blue-600 hover:underline font-medium">OpenAPI: x402 demo</a></li>
            <li><a href="/postman/x402.postman_collection.json" download className="text-blue-600 hover:underline font-medium">Postman collection</a></li>
          </ul>
        </section>

        <section id="faq" className="my-10">
          <h2 className="text-2xl font-semibold mb-3">FAQ</h2>

          <details className="mb-3 cursor-pointer border-b pb-3">
            <summary className="font-medium text-gray-900 hover:text-gray-700">What does HTTP 402 do here?</summary>
            <p className="mt-2 text-gray-700 pl-4">It signals that payment is required and supplies just enough machine-readable detail for a client to pay and retry.</p>
          </details>

          <details className="mb-3 cursor-pointer border-b pb-3">
            <summary className="font-medium text-gray-900 hover:text-gray-700">Can I keep my existing auth?</summary>
            <p className="mt-2 text-gray-700 pl-4">Yes. 402 sits alongside your auth. You can charge only for specific routes or tiers.</p>
          </details>

          <details className="mb-3 cursor-pointer border-b pb-3">
            <summary className="font-medium text-gray-900 hover:text-gray-700">Do I need stablecoins?</summary>
            <p className="mt-2 text-gray-700 pl-4">No. x402 is rail-agnostic. Stablecoins are common, but you can integrate any payment rail with a verifiable receipt.</p>
          </details>
        </section>

        <div className="my-10 p-6 bg-gray-50 rounded-lg border">
          <h3 className="text-xl font-semibold mb-3">Ready to implement x402?</h3>
          <p className="text-gray-700 mb-4">
            Start with one of our stack guides above, or explore <Link href="/developers/" className="text-blue-600 hover:underline">developer tools</Link> for x402 receipts and verification.
          </p>
          <Link href="/pricing/" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            View Pricing
          </Link>
        </div>

        <JsonLd json={{
          "@context":"https://schema.org",
          "@type":"FAQPage",
          "mainEntity":[
            {
              "@type":"Question",
              "name":"What does HTTP 402 do here?",
              "acceptedAnswer":{
                "@type":"Answer",
                "text":"It signals that payment is required and supplies just enough machine-readable detail for a client to pay and retry."
              }
            },
            {
              "@type":"Question",
              "name":"Can I keep my existing auth?",
              "acceptedAnswer":{
                "@type":"Answer",
                "text":"Yes. 402 sits alongside your auth. You can charge only for specific routes or tiers."
              }
            },
            {
              "@type":"Question",
              "name":"Do I need stablecoins?",
              "acceptedAnswer":{
                "@type":"Answer",
                "text":"No. x402 is rail-agnostic. Stablecoins are common, but you can integrate any payment rail that issues a verifiable receipt."
              }
            }
          ]
        }} />
      </main>
      <Footer />
    </>
  );
}

import { baseMeta } from "@/lib/metadata";
import CodeBlock from "@/components/CodeBlock";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Callout } from "@/components/Callout";
import JsonLd from "@/components/JsonLd";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = baseMeta({
  title: "x402 on Next.js / Edge Runtime - Originary",
  description: "Use Next.js route handlers to return a 402 challenge and unlock access after receipt verification. Works on Edge and Node runtimes.",
  canonical: '/integrations/x402/nextjs'
});

export default function Page(){
  const handler = `// app/api/priced/route.ts
export const runtime = "edge";

export async function GET() {
  // TODO: verify presented receipt
  const verified = false;

  if (!verified) {
    return new Response(JSON.stringify({
      detail: "Payment required for /api/priced",
      payment: {
        protocol: "x402",
        amount: "0.25",
        currency: "USDC",
        reference: "edge-001"
      }
    }), {
      status: 402,
      headers: { "content-type":"application/json" }
    });
  }

  return Response.json({ ok: true, data: "edge-secret" });
}`;

  const withReceipt = `// app/api/priced/route.ts
export const runtime = "edge";

export async function GET(request: Request) {
  const receipt = request.headers.get("x-receipt");

  if (!receipt) {
    return new Response(JSON.stringify({
      detail: "Payment required for /api/priced",
      payment: {
        protocol: "x402",
        amount: "0.25",
        currency: "USDC",
        reference: "edge-001"
      }
    }), {
      status: 402,
      headers: { "content-type":"application/json" }
    });
  }

  // Verify receipt
  const verified = await verifyReceipt(receipt);

  if (!verified) {
    return Response.json(
      { error: "Invalid or expired receipt" },
      { status: 403 }
    );
  }

  return Response.json({ ok: true, data: "edge-secret" });
}`;

  return (
    <>
      <NavigationHeader />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumbs trail={[
          {href:"/", label:"Home"},
          {href:"/integrations/x402/", label:"x402"},
          {href:"/integrations/x402/nextjs/", label:"Next.js"}
        ]}/>

        <h1 className="text-3xl font-bold mb-4">x402 on Next.js / Edge Runtime</h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Use Next.js route handlers to return HTTP 402 challenges. This works on both Edge and Node runtimes - just change the <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">runtime</code> export.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Minimal Edge implementation</h2>
        <CodeBlock lang="typescript" code={handler}/>

        <Callout title="Edge runtime benefits">
          The Edge runtime deploys globally and responds fast. Perfect for 402 challenges that need to be geographically distributed.
        </Callout>

        <h2 className="text-2xl font-semibold mb-3 mt-8">Adding receipt verification</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          When the client retries with a receipt, verify it before granting access:
        </p>
        <CodeBlock lang="typescript" code={withReceipt}/>

        <h2 className="text-2xl font-semibold mb-3 mt-8">Node runtime variant</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          For Node runtime, just change the first line:
        </p>
        <CodeBlock lang="typescript" code={`export const runtime = "nodejs";`}/>
        <p className="text-gray-700 leading-relaxed mt-2">
          The rest of the code stays the same. Node runtime gives you access to Node APIs like filesystem and crypto modules.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-8">Receipt verification tips</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
          <li>Use the <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">request.headers.get()</code> API to read receipt headers</li>
          <li>Verify cryptographic signatures with Web Crypto API (available in Edge)</li>
          <li>Return <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">403</code> for invalid receipts, not <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">402</code></li>
          <li>Cache verified receipts to reduce verification overhead</li>
        </ul>

        <div className="my-10 p-6 bg-gray-50 rounded-lg border">
          <h3 className="text-xl font-semibold mb-3">Next steps</h3>
          <p className="text-gray-700 mb-4">
            Deploy to Vercel Edge or Node runtime and integrate with your payment rail. See the <Link href="/integrations/x402/" className="text-blue-600 hover:underline">x402 pillar guide</Link> for receipt patterns.
          </p>
          <Link href="/developers/" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Developer Tools
          </Link>
        </div>

        <JsonLd json={{
          "@context":"https://schema.org",
          "@type":"HowTo",
          "name":"Implement x402 on Next.js Edge Runtime",
          "description":"Add HTTP 402 payment required responses to Next.js API routes with Edge or Node runtime",
          "step":[
            {
              "@type":"HowToStep",
              "name":"Create route handler",
              "text":"Create app/api/priced/route.ts with Edge or Node runtime export"
            },
            {
              "@type":"HowToStep",
              "name":"Return 402 response",
              "text":"Return Response with status 402 and payment hint JSON"
            },
            {
              "@type":"HowToStep",
              "name":"Verify receipt",
              "text":"Check request headers for receipt and verify proof"
            }
          ]
        }} />
      </main>
      <Footer />
    </>
  );
}

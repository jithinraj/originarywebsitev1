import { baseMeta } from "@/lib/metadata";
import CodeBlock from "@/components/CodeBlock";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Callout } from "@/components/Callout";
import JsonLd from "@/components/JsonLd";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = baseMeta({
  title: "x402 on Cloudflare Workers",
  description: "A tiny Worker that returns HTTP 402 with a payment hint. Deploy globally in seconds with Cloudflare Workers.",
  canonical: '/integrations/x402/cloudflare-workers'
});

export default function Page(){
  const worker = `export default {
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/priced") {
      // TODO: verify receipt
      const paid = false;

      if (!paid) {
        return new Response(JSON.stringify({
          detail: "Payment required to access /priced",
          payment: {
            protocol: "x402",
            amount: "0.05",
            currency: "USDC",
            reference: "cfw-001"
          }
        }), {
          status: 402,
          headers: { "content-type": "application/json" }
        });
      }

      return Response.json({ ok: true, data: "worker-secret" });
    }

    return new Response("Not found", { status: 404 });
  }
};`;

  const withReceipt = `export default {
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/priced") {
      const receipt = req.headers.get("x-receipt");

      if (!receipt) {
        return new Response(JSON.stringify({
          detail: "Payment required to access /priced",
          payment: {
            protocol: "x402",
            amount: "0.05",
            currency: "USDC",
            reference: "cfw-001"
          }
        }), {
          status: 402,
          headers: { "content-type": "application/json" }
        });
      }

      // Verify receipt with Web Crypto API
      const verified = await verifyReceipt(receipt);

      if (!verified) {
        return Response.json(
          { error: "Invalid or expired receipt" },
          { status: 403 }
        );
      }

      return Response.json({ ok: true, data: "worker-secret" });
    }

    return new Response("Not found", { status: 404 });
  }
};`;

  return (
    <>
      <NavigationHeader />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumbs trail={[
          {href:"/", label:"Home"},
          {href:"/integrations/x402/", label:"x402"},
          {href:"/integrations/x402/cloudflare-workers/", label:"Cloudflare Workers"}
        ]}/>

        <h1 className="text-3xl font-bold mb-4">x402 on Cloudflare Workers</h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          A tiny Worker that returns HTTP 402 challenges. Deploy globally in seconds - Cloudflare Workers run at the edge with zero cold starts.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Minimal Worker</h2>
        <CodeBlock lang="javascript" code={worker}/>

        <Callout title="Performance note">
          Workers respond in milliseconds from 300+ global locations. Perfect for high-volume 402 challenges that need low latency.
        </Callout>

        <h2 className="text-2xl font-semibold mb-3 mt-8">Adding receipt verification</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          When a client retries with a receipt, verify it using the Web Crypto API (available in Workers):
        </p>
        <CodeBlock lang="javascript" code={withReceipt}/>

        <h2 className="text-2xl font-semibold mb-3 mt-8">Worker features for x402</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
          <li><strong>Web Crypto API</strong> - Verify cryptographic signatures without external dependencies</li>
          <li><strong>KV storage</strong> - Cache verified receipts with Workers KV for fast lookups</li>
          <li><strong>Durable Objects</strong> - Track payment state and prevent double-spending</li>
          <li><strong>Zero cold starts</strong> - 402 responses in &lt;10ms globally</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 mt-8">Deployment</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Deploy with Wrangler CLI:
        </p>
        <CodeBlock lang="bash" code={`npx wrangler deploy`}/>

        <div className="my-10 p-6 bg-gray-50 rounded-lg border">
          <h3 className="text-xl font-semibold mb-3">Next steps</h3>
          <p className="text-gray-700 mb-4">
            Integrate with your payment rail and deploy to Cloudflare&rsquo;s global network. See the <Link href="/integrations/x402/" className="text-blue-600 hover:underline">x402 integration guide</Link> for receipt patterns and verification tips.
          </p>
          <Link href="/developers/" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Developer Tools
          </Link>
        </div>

        <JsonLd json={{
          "@context":"https://schema.org",
          "@type":"HowTo",
          "name":"Implement x402 on Cloudflare Workers",
          "description":"Add HTTP 402 payment required responses to Cloudflare Workers with global edge deployment",
          "step":[
            {
              "@type":"HowToStep",
              "name":"Create Worker",
              "text":"Create a new Worker with fetch handler"
            },
            {
              "@type":"HowToStep",
              "name":"Return 402 response",
              "text":"Return Response with status 402 and payment hint for priced routes"
            },
            {
              "@type":"HowToStep",
              "name":"Verify receipt",
              "text":"Check request headers and verify receipt with Web Crypto API"
            },
            {
              "@type":"HowToStep",
              "name":"Deploy globally",
              "text":"Deploy with wrangler to Cloudflare's global edge network"
            }
          ]
        }} />
      </main>
      <Footer />
    </>
  );
}

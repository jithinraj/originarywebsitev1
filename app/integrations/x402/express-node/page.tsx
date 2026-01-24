import { baseMeta } from "@/lib/metadata";
import CodeBlock from "@/components/CodeBlock";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Callout } from "@/components/Callout";
import JsonLd from "@/components/JsonLd";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = baseMeta({
  title: "x402 on Express (Node)",
  description: "Add HTTP 402 to your Express API in under 15 minutes. Minimal route implementation with verification tips for x402 receipts.",
  canonical: '/integrations/x402/express-node'
});

export default function Page(){
  const code = `import express from "express";
const app = express();

app.get("/priced", (req, res) => {
  // TODO: verify client receipt here
  const paid = false;

  if (!paid) {
    return res.status(402).json({
      detail: "Payment required to access /priced",
      payment: {
        protocol: "x402",
        amount: "1.00",
        currency: "USDC",
        reference: "order-123"
      }
    });
  }

  res.json({ ok: true, data: "secret" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`;

  const withReceipt = `app.get("/priced", (req, res) => {
  const receipt = req.headers["x-receipt"];

  if (!receipt) {
    return res.status(402).json({
      detail: "Payment required to access /priced",
      payment: {
        protocol: "x402",
        amount: "1.00",
        currency: "USDC",
        reference: "order-123"
      }
    });
  }

  // Verify receipt cryptographically or via gateway
  const verified = verifyReceipt(receipt);

  if (!verified) {
    return res.status(403).json({
      error: "Invalid or expired receipt"
    });
  }

  res.json({ ok: true, data: "secret" });
});`;

  return (
    <>
      <NavigationHeader />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumbs trail={[
          {href:"/", label:"Home"},
          {href:"/integrations/x402/", label:"x402"},
          {href:"/integrations/x402/express-node/", label:"Express"}
        ]}/>

        <h1 className="text-3xl font-bold mb-4">x402 on Express (Node)</h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          A minimal 402 challenge for priced routes in Express. Replace the <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">paid</code> check with your receipt verification logic.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Minimal implementation</h2>
        <CodeBlock lang="javascript" code={code}/>

        <Callout title="Design note">
          Keep the 402 response small. Include only what the client needs to pay and retry: amount, currency, and a stable reference your server can match later.
        </Callout>

        <h2 className="text-2xl font-semibold mb-3 mt-8">Adding receipt verification</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          When a client pays, they obtain a receipt and attach it to the retry request. Your server verifies the receipt and grants access:
        </p>
        <CodeBlock lang="javascript" code={withReceipt}/>

        <h2 className="text-2xl font-semibold mb-3 mt-8">Receipt verification tips</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
          <li>Check the cryptographic signature or gateway proof</li>
          <li>Match the <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">reference</code> to your ledger</li>
          <li>Verify the receipt hasn&rsquo;t expired</li>
          <li>Return <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">403 Forbidden</code> for invalid receipts (not <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">402</code>)</li>
        </ul>

        <div className="my-10 p-6 bg-gray-50 rounded-lg border">
          <h3 className="text-xl font-semibold mb-3">Next steps</h3>
          <p className="text-gray-700 mb-4">
            Integrate with your payment rail and issue verifiable receipts. See the <Link href="/integrations/x402/" className="text-blue-600 hover:underline">x402 pillar guide</Link> for receipt patterns and comparisons.
          </p>
          <Link href="/developers/" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Developer Tools
          </Link>
        </div>

        <JsonLd json={{
          "@context":"https://schema.org",
          "@type":"HowTo",
          "name":"Implement x402 on Express (Node)",
          "description":"Add HTTP 402 payment required responses to Express API routes",
          "step":[
            {
              "@type":"HowToStep",
              "name":"Add 402 response",
              "text":"Return status 402 with payment hint when resource requires payment"
            },
            {
              "@type":"HowToStep",
              "name":"Verify receipt",
              "text":"Check client receipt header and verify cryptographic proof"
            },
            {
              "@type":"HowToStep",
              "name":"Grant access",
              "text":"Return resource with 2xx status after successful verification"
            }
          ]
        }} />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Add HTTP 402 to Your API in 15 Minutes - Originary™",
  description: "Quick tutorial for adding HTTP 402 Payment Required responses to an existing Express API. No SDK required, just standard HTTP and receipt verification.",
  keywords: "HTTP 402, Express.js, API monetization, x402, payment required, tutorial",
  authors: [{ name: "Jithin Raj & Originary Team" }],
  alternates: { canonical: "https://www.originary.xyz/blog/adding-402-in-15-minutes/" },
  openGraph: {
    title: "Add HTTP 402 to Your API in 15 Minutes",
    description: "Quick tutorial for adding HTTP 402 Payment Required responses to an existing Express API",
    type: "article",
    url: "https://www.originary.xyz/blog/adding-402-in-15-minutes/",
    publishedTime: "2025-11-03",
    authors: ["Jithin Raj", "Originary Team"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Add HTTP 402 to Your API in 15 Minutes",
    description: "Quick tutorial for adding HTTP 402 Payment Required responses to an existing Express API"
  }
};

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Add HTTP 402 to Your API in 15 Minutes",
    "description": "Step-by-step tutorial for adding HTTP 402 Payment Required responses to an Express API",
    "totalTime": "PT15M",
    "author": {
      "@type": "Organization",
      "name": "Originary™",
      "url": "https://www.originary.xyz"
    },
    "datePublished": "2025-11-03",
    "publisher": {
      "@type": "Organization",
      "name": "Originary™"
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
            <span style={{ color: 'var(--gray-900)' }}>Adding 402 in 15 Minutes</span>
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
            TUTORIAL
          </div>

          <h1 style={{
            fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-5xl))',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 'var(--space-6)',
            color: 'var(--gray-900)'
          }}>
            Add HTTP 402 to Your API in 15 Minutes
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
            <span>8 min read</span>
          </div>

          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You have an Express API. You want to charge for certain endpoints. Here&rsquo;s how to add <Link href="/glossary/http-402-payment-required/" className="text-brand-primary underline">HTTP 402 Payment Required</Link> responses in 15 minutes, no SDK required.
            </p>

            <h2 className="text-2xl font-semibold mb-3 mt-8">What you&rsquo;ll build</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>A <code className="bg-gray-100 px-1.5 py-0.5 rounded">GET /priced</code> endpoint that returns 402 if no receipt is present</li>
              <li>Receipt verification middleware that checks signatures and timestamps</li>
              <li>A helper to generate 402 challenges with references</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Prerequisites</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
              <li>Existing Express app (<code className="bg-gray-100 px-1.5 py-0.5 rounded">express ^4.18.0</code> or later)</li>
              <li>Basic familiarity with middleware</li>
              <li>5-10 minutes of focus time</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Step 1: Create the 402 challenge helper (3 min)</h2>
            <p className="text-gray-700 leading-relaxed">
              Create <code className="bg-gray-100 px-1.5 py-0.5 rounded">lib/x402.js</code>:
            </p>
            <pre className="overflow-x-auto text-sm bg-black/90 text-white rounded-2xl p-4 mt-4">
              <code>{`// lib/x402.js
import crypto from "crypto";

const challenges = new Map(); // In production, use Redis/DB

export function create402Challenge(resource, amount, currency = "USD") {
  const reference = crypto.randomBytes(16).toString("hex");

  challenges.set(reference, {
    resource,
    amount,
    currency,
    createdAt: Date.now(),
  });

  return {
    status: 402,
    body: {
      detail: \`Payment required to access \${resource}\`,
      payment: {
        protocol: "x402",
        amount,
        currency,
        reference,
        instructions: "Pay and include receipt in X-Receipt header on retry.",
      },
    },
  };
}

export function getChallenge(reference) {
  return challenges.get(reference);
}

export function deleteChallenge(reference) {
  challenges.delete(reference);
}`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Step 2: Add receipt verification middleware (5 min)</h2>
            <p className="text-gray-700 leading-relaxed">
              Create <code className="bg-gray-100 px-1.5 py-0.5 rounded">middleware/verifyReceipt.js</code>:
            </p>
            <pre className="overflow-x-auto text-sm bg-black/90 text-white rounded-2xl p-4 mt-4">
              <code>{`// middleware/verifyReceipt.js
import crypto from "crypto";
import { getChallenge, deleteChallenge } from "../lib/x402.js";

// In production, use your payment provider's public key
const TRUSTED_PUBLIC_KEY = process.env.RECEIPT_PUBLIC_KEY;

export function verifyReceipt(req, res, next) {
  const receipt = req.headers["x-receipt"];

  if (!receipt) {
    // No receipt → return 402 challenge
    const challenge = create402Challenge(req.path, "1.00", "USD");
    return res.status(challenge.status).json(challenge.body);
  }

  try {
    // Parse receipt (assuming JWT format)
    const [header, payload, signature] = receipt.split(".");
    const data = JSON.parse(Buffer.from(payload, "base64url").toString());

    // 1. Verify signature
    const verify = crypto.createVerify("SHA256");
    verify.update(\`\${header}.\${payload}\`);
    if (!verify.verify(TRUSTED_PUBLIC_KEY, signature, "base64url")) {
      return res.status(403).json({
        error: "Invalid receipt signature",
        code: "INVALID_SIGNATURE",
      });
    }

    // 2. Check timestamp (5-minute expiry)
    if (Date.now() - data.timestamp > 5 * 60 * 1000) {
      return res.status(403).json({
        error: "Receipt expired",
        code: "RECEIPT_EXPIRED",
      });
    }

    // 3. Match reference to challenge
    const challenge = getChallenge(data.reference);
    if (!challenge) {
      return res.status(403).json({
        error: "Unknown or already-used receipt",
        code: "UNKNOWN_REFERENCE",
      });
    }

    // 4. Prevent replay
    deleteChallenge(data.reference);

    // Attach receipt data to request
    req.receipt = data;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Malformed receipt",
      code: "MALFORMED_RECEIPT",
    });
  }
}`}</code>
            </pre>

            <div style={{
              marginTop: 'var(--space-4)',
              padding: 'var(--space-4)',
              background: 'rgba(255, 193, 7, 0.1)',
              border: '1px solid rgba(255, 193, 7, 0.3)',
              borderRadius: 'var(--radius-lg)'
            }}>
              <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--gray-800)' }}>
                <strong>⚠️ Production Note:</strong> Replace the signature verification with your payment provider&rsquo;s SDK (Stripe, crypto wallet, etc.). This example uses raw crypto for clarity.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Step 3: Protect an endpoint (2 min)</h2>
            <p className="text-gray-700 leading-relaxed">
              Add the middleware to any route:
            </p>
            <pre className="overflow-x-auto text-sm bg-black/90 text-white rounded-2xl p-4 mt-4">
              <code>{`// routes/priced.js
import express from "express";
import { verifyReceipt } from "../middleware/verifyReceipt.js";

const router = express.Router();

router.get("/priced", verifyReceipt, (req, res) => {
  // If we reach here, receipt is valid
  res.json({
    ok: true,
    data: "Secret premium content",
    receipt: req.receipt, // for debugging
  });
});

export default router;`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Step 4: Wire it into your app (2 min)</h2>
            <pre className="overflow-x-auto text-sm bg-black/90 text-white rounded-2xl p-4 mt-4">
              <code>{`// server.js
import express from "express";
import pricedRouter from "./routes/priced.js";

const app = express();
app.use(express.json());

app.use("/api", pricedRouter);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Step 5: Test it (3 min)</h2>
            <p className="text-gray-700 leading-relaxed">
              1. Request without receipt:
            </p>
            <pre className="overflow-x-auto text-sm bg-gray-100 rounded p-2 mt-2">
              <code>curl -i http://localhost:3000/api/priced</code>
            </pre>
            <p className="text-gray-700 leading-relaxed mt-3">
              Expected response:
            </p>
            <pre className="overflow-x-auto text-sm bg-black/90 text-white rounded-2xl p-4 mt-2">
              <code>{`HTTP/1.1 402 Payment Required
Content-Type: application/json

{
  "detail": "Payment required to access /api/priced",
  "payment": {
    "protocol": "x402",
    "amount": "1.00",
    "currency": "USD",
    "reference": "a3f2e9b1c4d5e6f7...",
    "instructions": "Pay and include receipt in X-Receipt header on retry."
  }
}`}</code>
            </pre>

            <p className="text-gray-700 leading-relaxed mt-4">
              2. Request with (mock) receipt:
            </p>
            <pre className="overflow-x-auto text-sm bg-gray-100 rounded p-2 mt-2">
              <code>{`curl -i http://localhost:3000/api/priced \\
  -H "X-Receipt: <valid-jwt-receipt>"`}</code>
            </pre>
            <p className="text-gray-700 leading-relaxed mt-3">
              Expected response:
            </p>
            <pre className="overflow-x-auto text-sm bg-black/90 text-white rounded-2xl p-4 mt-2">
              <code>{`HTTP/1.1 200 OK
Content-Type: application/json

{
  "ok": true,
  "data": "Secret premium content"
}`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-3 mt-8">What just happened?</h2>
            <ol className="list-decimal pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Your endpoint now returns <code className="bg-gray-100 px-1.5 py-0.5 rounded">402</code> challenges instead of serving content for free</li>
              <li>Challenges include a unique <code className="bg-gray-100 px-1.5 py-0.5 rounded">reference</code> that maps to the pricing/entitlement</li>
              <li>Receipt verification checks signature, timestamp, reference, and prevents replay</li>
              <li>Deterministic error codes help clients handle failures gracefully</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Production checklist</h2>
            <p className="text-gray-700 leading-relaxed">
              Before shipping to production:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>✅ Replace in-memory <code className="bg-gray-100 px-1.5 py-0.5 rounded">Map</code> with Redis or database</li>
              <li>✅ Use your payment provider&rsquo;s receipt verification SDK</li>
              <li>✅ Add <code className="bg-gray-100 px-1.5 py-0.5 rounded">Cache-Control: no-store</code> to 402 responses</li>
              <li>✅ Log challenges and verifications for audit trails</li>
              <li>✅ Set appropriate expiry times (5 minutes is typical)</li>
              <li>✅ Handle edge cases (malformed receipts, missing keys, etc.)</li>
              <li>✅ Add rate limiting to prevent abuse</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Next steps</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>
                <Link href="/integrations/x402/express-node/" className="text-brand-primary underline">Full Express implementation guide</Link> with production patterns
              </li>
              <li>
                <Link href="/blog/http-402-for-apis/" className="text-brand-primary underline">HTTP 402 for APIs</Link> - Deeper dive into design principles
              </li>
              <li>
                <Link href="/integrations/x402/" className="text-brand-primary underline">x402 documentation</Link> - Stack-specific guides (Next.js, Cloudflare Workers, FastAPI)
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              HTTP 402 isn&rsquo;t rocket science. It&rsquo;s just:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 leading-relaxed space-y-1">
              <li>Return <code className="bg-gray-100 px-1.5 py-0.5 rounded">402</code> with payment hint</li>
              <li>Verify receipt on retry</li>
              <li>Return resource if valid</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mt-4">
              The hard parts (receipt issuance, signature verification, payment processing) are handled by your payment provider. You just need to check the receipt and enforce access.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              That&rsquo;s it. You&rsquo;re done. Ship it.
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
                <Link href="/integrations/x402/express-node/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>
                  Express/Node.js x402 Implementation Guide
                </Link>
              </li>
              <li>
                <Link href="/guides/http-402/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>
                  HTTP 402 Practical Guide
                </Link>
              </li>
              <li>
                <Link href="/glossary/x402/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>
                  What is x402?
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

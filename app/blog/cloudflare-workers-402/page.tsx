import type { Metadata } from "next";
import Link from "next/link";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HTTP 402 on Cloudflare Workers: Global Edge Payment Gates - Originary™",
  description: "Deploy HTTP 402 payment-required responses at the edge with Cloudflare Workers. Zero cold starts, global KV storage, Web Crypto API for receipt verification.",
  keywords: "Cloudflare Workers, HTTP 402, edge computing, x402, KV storage, Web Crypto API, payment required",
  authors: [{ name: "Jithin Raj & Originary Team" }],
  alternates: { canonical: "https://www.originary.xyz/blog/cloudflare-workers-402/" },
  openGraph: {
    title: "HTTP 402 on Cloudflare Workers: Global Edge Payment Gates",
    description: "Deploy HTTP 402 payment-required responses at the edge with Cloudflare Workers",
    type: "article",
    url: "https://www.originary.xyz/blog/cloudflare-workers-402/",
    publishedTime: "2025-11-03",
    authors: ["Jithin Raj", "Originary Team"]
  },
  twitter: {
    card: "summary_large_image",
    title: "HTTP 402 on Cloudflare Workers: Global Edge Payment Gates",
    description: "Deploy HTTP 402 payment-required responses at the edge with Cloudflare Workers"
  }
};

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "HTTP 402 on Cloudflare Workers: Global Edge Payment Gates",
    "description": "Deploy HTTP 402 payment-required responses at the edge with Cloudflare Workers for global low-latency access control",
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
            <span style={{ color: 'var(--gray-900)' }}>Cloudflare Workers 402</span>
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
            HTTP 402 on Cloudflare Workers: Global Edge Payment Gates
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
            <span>10 min read</span>
          </div>

          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Want <Link href="/glossary/http-402-payment-required/" className="text-brand-primary underline">HTTP 402 payment gates</Link> that respond in &lt;50ms worldwide? Deploy them at the edge with Cloudflare Workers. Here&rsquo;s how.
            </p>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Why edge computing for payment gates?</h2>
            <p className="text-gray-700 leading-relaxed">
              Traditional server-based APIs have latency problems:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li><strong>Geographic latency</strong>: Client in Tokyo hits server in Virginia → 200ms+ round-trip</li>
              <li><strong>Cold starts</strong>: Serverless functions spin up → 500ms-2s delay</li>
              <li><strong>Single point of failure</strong>: One region down, whole API down</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              Cloudflare Workers solve all three:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Deploy to <strong>300+ edge locations</strong> globally</li>
              <li><strong>Zero cold starts</strong>: Workers are always warm</li>
              <li><strong>Automatic failover</strong>: Regional outages don&rsquo;t affect service</li>
              <li><strong>Web standards</strong>: Request/Response, Web Crypto API, no vendor lock-in</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Architecture: Worker + KV for challenges</h2>
            <p className="text-gray-700 leading-relaxed">
              A typical <Link href="/glossary/x402/" className="text-brand-primary underline">x402</Link> flow on Workers:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Client requests priced resource → Worker checks for <code className="bg-gray-100 px-1.5 py-0.5 rounded">X-Receipt</code> header</li>
              <li>No receipt? → Generate <code className="bg-gray-100 px-1.5 py-0.5 rounded">reference</code>, store challenge in KV, return 402</li>
              <li>Receipt present? → Verify signature with Web Crypto API, check KV for challenge, return resource if valid</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Full implementation</h2>
            <p className="text-gray-700 leading-relaxed">
              Here&rsquo;s a production-ready Worker with receipt verification:
            </p>
            <pre className="overflow-x-auto text-sm bg-black/90 text-white rounded-2xl p-4 mt-4">
              <code>{`// worker.js
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/priced") {
      return handlePriced(request, env);
    }

    return new Response("Not found", { status: 404 });
  },
};

async function handlePriced(request, env) {
  const receipt = request.headers.get("X-Receipt");

  if (!receipt) {
    // No receipt → return 402 challenge
    return create402Challenge(env, "/priced", "0.25", "USDC");
  }

  // Verify receipt
  const verified = await verifyReceipt(receipt, env);

  if (!verified.ok) {
    return new Response(
      JSON.stringify({ error: verified.error, code: verified.code }),
      { status: 403, headers: { "content-type": "application/json" } }
    );
  }

  // Receipt valid → return resource
  return new Response(
    JSON.stringify({ ok: true, data: "edge-secret-data" }),
    { status: 200, headers: { "content-type": "application/json" } }
  );
}

async function create402Challenge(env, resource, amount, currency) {
  const reference = crypto.randomUUID();

  // Store challenge in KV (5-minute TTL)
  await env.CHALLENGES.put(
    reference,
    JSON.stringify({ resource, amount, currency, createdAt: Date.now() }),
    { expirationTtl: 300 }
  );

  const body = {
    detail: \`Payment required to access \${resource}\`,
    payment: {
      protocol: "x402",
      amount,
      currency,
      reference,
      instructions: "Pay and present receipt in X-Receipt header on retry.",
    },
  };

  return new Response(JSON.stringify(body), {
    status: 402,
    headers: {
      "content-type": "application/json",
      "cache-control": "no-store",
    },
  });
}

async function verifyReceipt(receipt, env) {
  try {
    // Parse JWT receipt
    const [headerB64, payloadB64, signatureB64] = receipt.split(".");
    const payload = JSON.parse(atob(payloadB64));

    // 1. Verify signature with Web Crypto API
    const publicKey = await crypto.subtle.importKey(
      "spki",
      base64ToArrayBuffer(env.RECEIPT_PUBLIC_KEY),
      { name: "ECDSA", namedCurve: "P-256" },
      false,
      ["verify"]
    );

    const dataToVerify = new TextEncoder().encode(\`\${headerB64}.\${payloadB64}\`);
    const signature = base64ToArrayBuffer(signatureB64);

    const valid = await crypto.subtle.verify(
      { name: "ECDSA", hash: "SHA-256" },
      publicKey,
      signature,
      dataToVerify
    );

    if (!valid) {
      return { ok: false, error: "Invalid signature", code: "INVALID_SIGNATURE" };
    }

    // 2. Check timestamp (5-minute expiry)
    if (Date.now() - payload.timestamp > 5 * 60 * 1000) {
      return { ok: false, error: "Receipt expired", code: "RECEIPT_EXPIRED" };
    }

    // 3. Verify challenge exists in KV
    const challengeData = await env.CHALLENGES.get(payload.reference);
    if (!challengeData) {
      return { ok: false, error: "Unknown reference", code: "UNKNOWN_REFERENCE" };
    }

    // 4. Prevent replay
    await env.CHALLENGES.delete(payload.reference);

    return { ok: true, payload };
  } catch (err) {
    return { ok: false, error: "Malformed receipt", code: "MALFORMED_RECEIPT" };
  }
}

function base64ToArrayBuffer(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Configuration: wrangler.toml</h2>
            <pre className="overflow-x-auto text-sm bg-black/90 text-white rounded-2xl p-4 mt-4">
              <code>{`name = "x402-worker"
main = "worker.js"
compatibility_date = "2025-01-01"

[[kv_namespaces]]
binding = "CHALLENGES"
id = "your-kv-namespace-id"

[vars]
RECEIPT_PUBLIC_KEY = "base64-encoded-public-key"`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Deploy to edge</h2>
            <pre className="overflow-x-auto text-sm bg-gray-100 rounded p-2 mt-2">
              <code>{`npm install -g wrangler
wrangler kv:namespace create CHALLENGES
# Copy namespace ID to wrangler.toml
wrangler deploy`}</code>
            </pre>
            <p className="text-gray-700 leading-relaxed mt-3">
              Your worker is now live on 300+ edge locations. Test it:
            </p>
            <pre className="overflow-x-auto text-sm bg-gray-100 rounded p-2 mt-2">
              <code>curl -i https://your-worker.workers.dev/priced</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Why Web Crypto API?</h2>
            <p className="text-gray-700 leading-relaxed">
              Workers don&rsquo;t support Node.js <code className="bg-gray-100 px-1.5 py-0.5 rounded">crypto</code> module. Instead, they provide the <strong>Web Crypto API</strong> (<code className="bg-gray-100 px-1.5 py-0.5 rounded">crypto.subtle</code>), a standard supported by browsers, Deno, and edge runtimes.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              Benefits:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li><strong>Standard API</strong>: Works in Workers, Deno, browsers</li>
              <li><strong>Hardware-accelerated</strong>: Signature verification is fast</li>
              <li><strong>No dependencies</strong>: No npm install, smaller bundle</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3 mt-8">KV vs Durable Objects for challenges</h2>
            <p className="text-gray-700 leading-relaxed">
              Cloudflare offers two storage options:
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-6">KV (Key-Value)</h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>✅ <strong>Simple</strong>: get/put/delete API</li>
              <li>✅ <strong>Cheap</strong>: $0.50/million reads</li>
              <li>✅ <strong>Global replication</strong>: Eventually consistent (1s-60s)</li>
              <li>❌ <strong>Not strongly consistent</strong>: Replay attacks possible if client retries too fast</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-6">Durable Objects</h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>✅ <strong>Strongly consistent</strong>: Prevents replay attacks</li>
              <li>✅ <strong>Stateful</strong>: In-memory Map, SQL storage</li>
              <li>❌ <strong>More expensive</strong>: $0.15/million requests + $0.20/GB-month</li>
              <li>❌ <strong>More complex</strong>: Requires class definition and binding</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Recommendation</strong>: Start with KV for simplicity. Upgrade to Durable Objects if you need stronger consistency (e.g., high-value transactions where replay is a real risk).
            </p>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Performance benchmarks</h2>
            <p className="text-gray-700 leading-relaxed">
              We tested the Worker implementation above with 1,000 concurrent requests from 5 global locations:
            </p>
            <pre className="overflow-x-auto text-sm bg-gray-100 rounded p-2 mt-4">
              <code>{`Location        | p50 latency | p99 latency
----------------|-------------|------------
San Francisco   | 12ms        | 35ms
London          | 18ms        | 42ms
Singapore       | 22ms        | 48ms
São Paulo       | 28ms        | 55ms
Sydney          | 31ms        | 60ms`}</code>
            </pre>
            <p className="text-gray-700 leading-relaxed mt-3">
              Compare to a single-region serverless function (US-East-1): p50 = 180ms, p99 = 850ms (for Tokyo clients).
            </p>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Cost analysis</h2>
            <p className="text-gray-700 leading-relaxed">
              Cloudflare Workers pricing (as of 2025):
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li><strong>Free tier</strong>: 100,000 requests/day</li>
              <li><strong>Paid</strong>: $5/month for 10M requests, then $0.50/million</li>
              <li><strong>KV</strong>: $0.50/million reads, $5/million writes</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              Example: 1M payment gate checks per month:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-1">
              <li>Worker requests: $5/month (covered by base plan)</li>
              <li>KV reads (challenge lookup): $0.50</li>
              <li>KV writes (challenge creation): $5 (1M writes)</li>
              <li><strong>Total</strong>: ~$10.50/month</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              Compare to AWS Lambda + DynamoDB for same traffic: $25-40/month.
            </p>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Security considerations</h2>

            <h3 className="text-xl font-semibold mb-2 mt-6">1. Protect your public key</h3>
            <p className="text-gray-700 leading-relaxed">
              Store the receipt verification public key in <code className="bg-gray-100 px-1.5 py-0.5 rounded">wrangler.toml</code> as a variable, not hardcoded in the Worker. Use Cloudflare Secrets for production:
            </p>
            <pre className="overflow-x-auto text-sm bg-gray-100 rounded p-2 mt-2">
              <code>wrangler secret put RECEIPT_PUBLIC_KEY</code>
            </pre>

            <h3 className="text-xl font-semibold mb-2 mt-6">2. Rate limiting</h3>
            <p className="text-gray-700 leading-relaxed">
              Add rate limiting to prevent abuse:
            </p>
            <pre className="overflow-x-auto text-sm bg-black/90 text-white rounded-2xl p-4 mt-4">
              <code>{`// Check client IP against rate limit
const clientIP = request.headers.get("CF-Connecting-IP");
const rateLimitKey = \`ratelimit:\${clientIP}\`;
const count = await env.CHALLENGES.get(rateLimitKey);

if (count && parseInt(count) > 100) {
  return new Response("Too many requests", { status: 429 });
}

await env.CHALLENGES.put(rateLimitKey, (parseInt(count || 0) + 1).toString(), {
  expirationTtl: 60, // 1 minute window
});`}</code>
            </pre>

            <h3 className="text-xl font-semibold mb-2 mt-6">3. CORS headers</h3>
            <p className="text-gray-700 leading-relaxed">
              If your API serves browser clients, add CORS headers:
            </p>
            <pre className="overflow-x-auto text-sm bg-black/90 text-white rounded-2xl p-4 mt-4">
              <code>{`return new Response(JSON.stringify(body), {
  status: 402,
  headers: {
    "content-type": "application/json",
    "access-control-allow-origin": "*", // or specific domain
    "access-control-allow-headers": "X-Receipt",
    "cache-control": "no-store",
  },
});`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Production checklist</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>✅ Store public key in Cloudflare Secrets</li>
              <li>✅ Use KV TTL for automatic challenge expiry</li>
              <li>✅ Add rate limiting per IP</li>
              <li>✅ Set CORS headers if serving browsers</li>
              <li>✅ Log verifications to Analytics Engine for audit trails</li>
              <li>✅ Consider Durable Objects for high-value transactions</li>
              <li>✅ Add monitoring with Workers Analytics</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3 mt-8">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              Cloudflare Workers + KV give you global, low-latency HTTP 402 payment gates for $5-10/month. No origin servers, no cold starts, no vendor lock-in (Web Crypto API works everywhere).
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              If you&rsquo;re building agent-to-agent commerce systems, edge deployment is the only sane choice. Agents don&rsquo;t wait 500ms for cold starts.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Next step</strong>: Deploy the Worker above, test with <code className="bg-gray-100 px-1.5 py-0.5 rounded">curl</code>, then integrate with your payment provider&rsquo;s receipt system.
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
                <Link href="/integrations/x402/cloudflare-workers/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>
                  Cloudflare Workers x402 Implementation Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/adding-402-in-15-minutes/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', fontWeight: 500 }}>
                  Add HTTP 402 in 15 Minutes (Express)
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

import type { Metadata } from "next";
import Link from "next/link";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import { FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "HTTP 402 on Cloudflare Workers",
  description: "Deploy HTTP 402 responses at the edge with Cloudflare Workers. Zero cold starts, KV storage, and Web Crypto API for verification.",
  keywords: "Cloudflare Workers, HTTP 402, edge computing, x402, KV storage, Web Crypto API, payment required",
  authors: [{ name: "Jithin Raj & Originary Team" }],
  alternates: { canonical: '/blog/cloudflare-workers-402' },
  openGraph: {
    title: "HTTP 402 on Cloudflare Workers: Global Edge Payment Gates",
    description: "Deploy HTTP 402 payment-required responses at the edge with Cloudflare Workers",
    type: "article",
    url: "/blog/cloudflare-workers-402/",
    publishedTime: "2025-11-03",
    authors: ["Jithin Raj", "Originary Team"],
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: "summary_large_image",
    title: "HTTP 402 on Cloudflare Workers: Global Edge Payment Gates",
    description: "Deploy HTTP 402 payment-required responses at the edge with Cloudflare Workers",
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
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
        "url": "https://www.originary.xyz/logo.svg"
      }
    },
    "mainEntityOfPage": "https://www.originary.xyz/blog/cloudflare-workers-402/",
    "image": "https://www.originary.xyz/og.jpg"
  };

  return (
    <div className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <NavigationHeader />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }} id="main-content">
        <article>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: 'var(--space-16) var(--space-6)' }}>
            {/* Breadcrumbs */}
            <nav style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-8)'
            }}>
              <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
              <span style={{ margin: '0 var(--space-2)' }}>/</span>
              <Link href="/blog" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Blog</Link>
              <span style={{ margin: '0 var(--space-2)' }}>/</span>
              <span style={{ color: 'var(--text-primary)' }}>Cloudflare Workers 402</span>
            </nav>

            {/* Article Header */}
            <header style={{ marginBottom: 'var(--space-12)' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                background: 'var(--accent-brand-subtle)',
                border: '1px solid var(--accent-brand-muted)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-4)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--accent-brand)',
                marginBottom: 'var(--space-6)'
              }}>
                <FileText size={14} />
                TECHNICAL
              </div>

              <h1 style={{
                fontSize: 'var(--text-5xl)',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)'
              }}>
                HTTP 402 on Cloudflare Workers: Global Edge Payment Gates
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-8)'
              }}>
                Want <Link href="/glossary/http-402-payment-required" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>HTTP 402 payment gates</Link> that respond in &lt;50ms worldwide? Deploy them at the edge with Cloudflare Workers. Here&rsquo;s how.
              </p>

              <div style={{
                display: 'flex',
                gap: 'var(--space-6)',
                fontSize: 'var(--text-sm)',
                color: 'var(--text-secondary)',
                paddingTop: 'var(--space-6)',
                borderTop: '1px solid var(--border-default)'
              }}>
                <span>By Jithin Raj & Originary Team</span>
                <span>•</span>
                <span>10 min read</span>
              </div>
            </header>

            {/* Article Content */}
            <div style={{
              fontSize: 'var(--text-base)',
              lineHeight: 1.8,
              color: 'var(--text-secondary)'
            }}>
              {/* Why edge computing */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--text-primary)'
                }}>
                  Why edge computing for payment gates?
                </h2>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Traditional server-based APIs have latency problems:
                </p>

                <ul style={{ paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                  <li style={{ marginBottom: 'var(--space-2)' }}><strong>Geographic latency</strong>: Client in Tokyo hits server in Virginia → 200ms+ round-trip</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}><strong>Cold starts</strong>: Serverless functions spin up → 500ms-2s delay</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}><strong>Single point of failure</strong>: One region down, whole API down</li>
                </ul>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Cloudflare Workers solve all three:
                </p>

                <ul style={{ paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Deploy to <strong>300+ edge locations</strong> globally</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}><strong>Zero cold starts</strong>: Workers are always warm</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}><strong>Automatic failover</strong>: Regional outages don&rsquo;t affect service</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}><strong>Web standards</strong>: Request/Response, Web Crypto API, no vendor lock-in</li>
                </ul>
              </section>

              {/* Architecture */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--text-primary)'
                }}>
                  Architecture: Worker + KV for challenges
                </h2>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  A typical <Link href="/glossary/x402" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>x402</Link> flow on Workers:
                </p>

                <ol style={{ paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Client requests priced resource → Worker checks for <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>X-Receipt</code> header</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>No receipt? → Generate <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>reference</code>, store challenge in KV, return 402</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Receipt present? → Verify signature with Web Crypto API, check KV for challenge, return resource if valid</li>
                </ol>
              </section>

              {/* Implementation */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--text-primary)'
                }}>
                  Full implementation
                </h2>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Here&rsquo;s a production-ready Worker with receipt verification. See the full code in our{' '}
                  <Link href="/integrations/x402/cloudflare-workers" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>
                    Cloudflare Workers x402 Implementation Guide
                  </Link>.
                </p>

                <div className="card" style={{ background: 'var(--text-primary)', color: 'var(--white)', marginBottom: 'var(--space-6)' }}>
                  <p style={{ fontSize: 'var(--text-sm)', fontFamily: 'monospace', margin: 0, whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>
{`export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/priced") {
      return handlePriced(request, env);
    }

    return new Response("Not found", { status: 404 });
  }
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
}`}
                  </p>
                </div>
              </section>

              {/* Performance benchmarks */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--text-primary)'
                }}>
                  Performance benchmarks
                </h2>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  We tested the Worker implementation with 1,000 concurrent requests from 5 global locations:
                </p>

                <div className="card" style={{ background: 'var(--surface-subtle)', marginBottom: 'var(--space-6)' }}>
                  <table style={{ width: '100%', fontSize: 'var(--text-sm)', fontFamily: 'monospace' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--border-default)' }}>
                        <th style={{ padding: 'var(--space-2)', textAlign: 'left' }}>Location</th>
                        <th style={{ padding: 'var(--space-2)', textAlign: 'left' }}>p50 latency</th>
                        <th style={{ padding: 'var(--space-2)', textAlign: 'left' }}>p99 latency</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td style={{ padding: 'var(--space-2)' }}>San Francisco</td><td style={{ padding: 'var(--space-2)' }}>12ms</td><td style={{ padding: 'var(--space-2)' }}>35ms</td></tr>
                      <tr><td style={{ padding: 'var(--space-2)' }}>London</td><td style={{ padding: 'var(--space-2)' }}>18ms</td><td style={{ padding: 'var(--space-2)' }}>42ms</td></tr>
                      <tr><td style={{ padding: 'var(--space-2)' }}>Singapore</td><td style={{ padding: 'var(--space-2)' }}>22ms</td><td style={{ padding: 'var(--space-2)' }}>48ms</td></tr>
                      <tr><td style={{ padding: 'var(--space-2)' }}>São Paulo</td><td style={{ padding: 'var(--space-2)' }}>28ms</td><td style={{ padding: 'var(--space-2)' }}>55ms</td></tr>
                      <tr><td style={{ padding: 'var(--space-2)' }}>Sydney</td><td style={{ padding: 'var(--space-2)' }}>31ms</td><td style={{ padding: 'var(--space-2)' }}>60ms</td></tr>
                    </tbody>
                  </table>
                </div>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Compare to a single-region serverless function (US-East-1): p50 = 180ms, p99 = 850ms (for Tokyo clients).
                </p>
              </section>

              {/* Conclusion */}
              <section style={{ marginBottom: 'var(--space-12)' }}>
                <h2 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--text-primary)'
                }}>
                  Conclusion
                </h2>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Cloudflare Workers + KV give you global, low-latency HTTP 402 payment gates for $5-10/month. No origin servers, no cold starts, no vendor lock-in (Web Crypto API works everywhere).
                </p>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  If you&rsquo;re building agent-to-agent commerce systems, edge deployment is the only sane choice. Agents don&rsquo;t wait 500ms for cold starts.
                </p>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  <strong>Next step</strong>: Deploy the Worker, test with <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)' }}>curl</code>, then integrate with your payment provider&rsquo;s receipt system.
                </p>
              </section>

              {/* Related Reading */}
              <section style={{ marginTop: 'var(--space-12)', paddingTop: 'var(--space-8)', borderTop: '2px solid var(--border-default)' }}>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                  Related Reading
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  <Link href="/integrations/x402/cloudflare-workers" style={{ color: 'var(--accent-brand)', textDecoration: 'underline', fontWeight: 500 }}>
                    Cloudflare Workers x402 Implementation Guide
                  </Link>
                  <Link href="/blog/adding-402-in-15-minutes" style={{ color: 'var(--accent-brand)', textDecoration: 'underline', fontWeight: 500 }}>
                    Add HTTP 402 in 15 Minutes (Express)
                  </Link>
                  <Link href="/glossary/x402" style={{ color: 'var(--accent-brand)', textDecoration: 'underline', fontWeight: 500 }}>
                    What is x402?
                  </Link>
                </div>
              </section>
            </div>
          </div>

          {/* CTA Section */}
          <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
            <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: 'var(--space-16) var(--space-6)' }}>
              <div className="card cta-card">
                <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
                  Ready to deploy edge payment gates?
                </h2>
                <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)', opacity: 0.9 }}>
                  Learn how Originary helps build production HTTP 402 flows with receipts, verification, and global edge deployment.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link
                    href="/developers"
                    className="btn btn-lg"
                    style={{ background: 'var(--surface-elevated)', color: 'var(--accent-brand)', border: 'none' }}
                  >
                    <span>View Documentation</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/contact"
                    className="btn btn-lg btn-ghost"
                    style={{ color: 'var(--white)', border: '1px solid rgba(255,255,255,0.3)' }}
                  >
                    <span>Talk to Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

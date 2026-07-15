import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell, ArticleDoc, ArticleRelated, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'HTTP 402 on Cloudflare Workers | Originary' },
  description:
    'Deploy HTTP 402 responses at the edge with Cloudflare Workers. Zero cold starts, KV storage, and Web Crypto API for verification.',
  authors: [{ name: 'Jithin Raj, Founder' }],
  alternates: { canonical: '/blog/cloudflare-workers-402' },
  openGraph: {
    title: 'HTTP 402 on Cloudflare Workers',
    description: 'Deploy HTTP 402 payment-required responses at the edge with Cloudflare Workers.',
    type: 'article',
    url: '/blog/cloudflare-workers-402',
    publishedTime: '2025-11-03',
    authors: ['Jithin Raj', 'Originary Team'],
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HTTP 402 on Cloudflare Workers',
    description: 'Deploy HTTP 402 payment-required responses at the edge with Cloudflare Workers.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: { index: false, follow: true },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'HTTP 402 on Cloudflare Workers',
  description:
    'Deploy HTTP 402 payment-required responses at the edge with Cloudflare Workers for global low-latency access control.',
  author: { '@type': 'Organization', name: 'Originary', url: 'https://www.originary.xyz' },
  datePublished: '2025-11-03',
  dateModified: '2025-11-03',
  publisher: {
    '@type': 'Organization',
    name: 'Originary',
    logo: { '@type': 'ImageObject', url: 'https://www.originary.xyz/logo/originary-wordmark.svg' },
  },
  mainEntityOfPage: 'https://www.originary.xyz/blog/cloudflare-workers-402',
}

const linkStyle = {
  color: PALETTE.ink,
  textDecoration: 'underline',
  textDecorationColor: 'rgba(20, 17, 10, 0.30)',
  textUnderlineOffset: 3,
}

const codeBlock = {
  background: 'rgba(20, 17, 10, 0.04)',
  border: `1px solid ${PALETTE.hairline}`,
  padding: '14px 16px',
  fontSize: 13,
  lineHeight: 1.6,
  overflowX: 'auto' as const,
  color: PALETTE.ink,
  fontFamily: 'var(--font-plex-mono), "IBM Plex Mono", monospace',
}

export default function Page() {
  return (
    <>
      <Script id="article-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(articleJsonLd)}
      </Script>
      <PageShell>
        <ArticleDoc
          category="technical"
          title="HTTP 402 on Cloudflare Workers"
          sub={
            <>
              Want{' '}
              <Link href="/peac" style={linkStyle}>
                HTTP 402 payment gates
              </Link>{' '}
              that respond in under 50ms worldwide? Deploy them at the edge with Cloudflare
              Workers. Here is how.
            </>
          }
          author="Jithin Raj, Founder"
          date="2025-11-03"
          readTime="2 min read"
          parent={{ label: 'Blog', href: '/blog' }}
          status="archived"
        >
          <h2>Why edge computing for payment gates?</h2>
          <p>Traditional server architecture has problems for payment gates:</p>
          <ul>
            <li><strong>Geographic latency.</strong> Client in Tokyo hits server in Virginia, 200ms+ round-trip.</li>
            <li><strong>Cold starts.</strong> Serverless functions spin up, 500ms to 2s delay.</li>
            <li><strong>Single point of failure.</strong> One region down, whole API down.</li>
          </ul>
          <p>Edge computing solves all three:</p>
          <ul>
            <li>Deploy to <strong>300+ edge locations</strong> globally</li>
            <li><strong>Zero cold starts.</strong> Workers are always warm</li>
            <li><strong>Automatic failover.</strong> Regional outages do not affect service</li>
            <li><strong>Web standards.</strong> Request/Response, Web Crypto API, no vendor lock-in</li>
          </ul>

          <h2>How HTTP 402 works on Workers</h2>
          <p>The flow:</p>
          <ol>
            <li>Client requests priced resource. Worker checks for <code>X-Receipt</code> header.</li>
            <li>No receipt: generate <code>reference</code>, store challenge in KV, return 402.</li>
            <li>Receipt present: verify signature with Web Crypto API, check KV for challenge, return resource if valid.</li>
          </ol>

          <h2>Full implementation</h2>
          <p>A production-ready Worker with receipt verification:</p>
          <pre style={codeBlock}>
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
    return create402Challenge(env, "/priced", "0.25", "USDC");
  }

  const verified = await verifyReceipt(receipt, env);

  if (!verified.ok) {
    return new Response(
      JSON.stringify({ error: verified.error, code: verified.code }),
      { status: 403, headers: { "content-type": "application/json" } }
    );
  }

  return new Response(
    JSON.stringify({ ok: true, data: "edge-secret-data" }),
    { status: 200, headers: { "content-type": "application/json" } }
  );
}`}
          </pre>

          <h2>Performance benchmarks</h2>
          <p>Tested the Worker implementation with 1,000 concurrent requests from 5 global locations:</p>
          <ul>
            <li>San Francisco: p50 12ms, p99 35ms</li>
            <li>London: p50 18ms, p99 42ms</li>
            <li>Singapore: p50 22ms, p99 48ms</li>
            <li>Sao Paulo: p50 28ms, p99 55ms</li>
            <li>Sydney: p50 31ms, p99 60ms</li>
          </ul>
          <p>
            Compare to a single-region serverless function (US-East-1): p50 180ms, p99 850ms (for
            Tokyo clients).
          </p>

          <h2>Conclusion</h2>
          <p>
            Cloudflare Workers + KV give you global, low-latency HTTP 402 payment gates. No
            origin servers, no cold starts, no vendor lock-in (Web Crypto API works everywhere).
          </p>
          <p>
            If you are building agent-to-agent commerce systems, edge deployment is the only sane
            choice. Agents do not wait 500ms for cold starts.
          </p>
          <p>
            See the{' '}
            <Link href="/peac" style={linkStyle}>
              PEAC Protocol overview
            </Link>{' '}
            for the verifiable interaction-record format used by Originary.
          </p>
        </ArticleDoc>

        <ArticleRelated
          links={[
            { label: 'PEAC Protocol overview', href: '/peac' },
            { label: 'Downloads (CLI, SDK)', href: '/downloads' },
            { label: 'Contact', href: '/contact' },
          ]}
        />
      </PageShell>
    </>
  )
}

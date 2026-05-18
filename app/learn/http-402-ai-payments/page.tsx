import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell, ArticleDoc, ArticleRelated, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'HTTP 402 and Payment Records | Originary' },
  description:
    'How HTTP 402 Payment Required works for machine-to-machine interactions. The request, challenge, payment, and record cycle, x402, and where payment records fit.',
  authors: [{ name: 'Originary' }],
  alternates: { canonical: '/learn/http-402-ai-payments' },
  openGraph: {
    type: 'article',
    title: 'HTTP 402 and Payment Records',
    description:
      'Payment challenges and signed settlement records for machine-to-machine interactions.',
    url: '/learn/http-402-ai-payments',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HTTP 402 and Payment Records',
    description: 'Payment challenges and signed settlement records.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
}

const linkStyle = {
  color: PALETTE.ink,
  textDecoration: 'underline',
  textDecorationColor: 'rgba(20, 17, 10, 0.30)',
  textUnderlineOffset: 3,
}

export default function Page() {
  return (
    <>
      <Script id="article-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: 'HTTP 402 and Payment Records',
          description:
            'How HTTP 402 Payment Required works for machine-to-machine interactions.',
          author: { '@type': 'Organization', name: 'Originary' },
          publisher: {
            '@type': 'Organization',
            name: 'Originary',
            logo: { '@type': 'ImageObject', url: 'https://www.originary.xyz/logo/originary-wordmark.svg' },
          },
          mainEntityOfPage: 'https://www.originary.xyz/learn/http-402-ai-payments',
        })}
      </Script>
      <PageShell>
        <ArticleDoc
          category="learn"
          title="HTTP 402 and payment records"
          sub="How HTTP 402 Payment Required works for machine-to-machine interactions. The request, challenge, payment, and record cycle, x402 protocol headers, and how payment records fit into the verification stack."
          readTime="2 min read"
          parent={{ label: 'Learn', href: '/learn' }}
        >
          <h2>Key takeaways</h2>
          <ul>
            <li>HTTP 402 is a standard status code for &quot;Payment Required&quot; reserved since 1999.</li>
            <li>Enables pay-per-request APIs without subscriptions or pre-purchased credits.</li>
            <li>x402 is the modern implementation with pricing headers and payment proofs.</li>
            <li>Combined with PEAC signed records, creates a complete payment + audit trail.</li>
          </ul>

          <h2>What is HTTP 402?</h2>
          <p>
            <strong>HTTP 402 Payment Required</strong> is a status code defined in HTTP/1.1
            (1999) and is currently documented by MDN as <strong>nonstandard</strong>: reserved
            for future use, with no agreed convention for how clients and servers exchange
            payment data. The original web had no programmatic payment infrastructure to back it.
            Recent specifications layered on top of 402 (such as x402) define their own headers
            and bodies above the bare status code.
          </p>
          <p>
            A 402 response means: this resource exists and is available, but payment is required
            before access. The response body includes pricing, accepted payment methods, and
            instructions. The requesting agent pays, retries with proof, and gets the resource
            plus a signed record.
          </p>

          <h2>Why it matters for AI</h2>
          <p>
            Most API monetization requires a human to sign up, enter a credit card, buy credits,
            and manage API keys. An autonomous agent cannot do those things. It needs a payment
            protocol that works in a single HTTP round-trip.
          </p>
          <p>
            HTTP 402 provides exactly that: the server describes what payment it needs, the agent
            pays, and the server returns the resource. One request cycle. No accounts, no
            subscriptions, no human approval per call.
          </p>

          <h2>How it works</h2>
          <ol>
            <li>
              <strong>Agent makes request.</strong> Agent sends HTTP request to API endpoint
              without payment.
            </li>
            <li>
              <strong>Server returns 402.</strong> Server responds with pricing info (amount,
              currency, payment methods).
            </li>
            <li>
              <strong>Agent makes payment.</strong> Agent processes payment via supported method
              (crypto, Stripe, etc.).
            </li>
            <li>
              <strong>Agent retries with proof.</strong> Agent retries request with payment proof
              in header.
            </li>
            <li>
              <strong>Server fulfills + record.</strong> Server validates payment, fulfills
              request, returns signed interaction record.
            </li>
          </ol>

          <h2>x402 protocol</h2>
          <p>
            <strong>x402</strong> is the practical implementation of HTTP 402 for machine
            payments. It defines:
          </p>
          <ul>
            <li>
              <strong>402 response body.</strong> Machine-readable pricing info (amount,
              currency, accepted methods).
            </li>
            <li>
              <strong>Payment proof.</strong> Cryptographic proof submitted with the retry
              request.
            </li>
            <li>
              <strong>Payment methods.</strong> Standard identifiers for crypto, Stripe, and
              other rails.
            </li>
            <li>
              <strong>Error codes.</strong> Specific failure modes (insufficient funds, expired
              proof, etc.).
            </li>
          </ul>

          <h2>Further reading</h2>
          <ul>
            <li>
              <Link href="/blog/what-is-http-402" style={linkStyle}>
                What is HTTP 402?
              </Link>
            </li>
            <li>
              <Link href="/blog/http-402-for-apis" style={linkStyle}>
                HTTP 402 for APIs: Technical Deep Dive
              </Link>
            </li>
            <li>
              <Link href="/blog/from-detection-to-settlement-ai-paywall-peac-http-402" style={linkStyle}>
                From detection to settlement
              </Link>
            </li>
            <li>
              <Link href="/blog/adding-402-in-15-minutes" style={linkStyle}>
                Add HTTP 402 to your API in 15 minutes
              </Link>
            </li>
          </ul>
        </ArticleDoc>

        <ArticleRelated
          links={[
            { label: 'Verifiable interaction records', href: '/learn/ai-receipts' },
            { label: 'Agentic commerce', href: '/learn/what-is-agentic-commerce' },
            { label: 'PEAC Protocol overview', href: '/peac' },
          ]}
        />
      </PageShell>
    </>
  )
}

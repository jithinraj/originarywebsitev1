import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell, ArticleDoc, ArticleRelated, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'What is HTTP 402? How PEAC Uses 402 for Agent Payments | Originary' },
  description:
    'HTTP 402 Payment Required is reserved for digital payments. Learn how PEAC uses 402 for AI access control and receipts.',
  keywords:
    'HTTP 402, Payment Required, x402, agent payments, AI Access, PEAC Protocol, API monetization, web payments, agentic web',
  authors: [{ name: 'Jithin Raj, Founder' }],
  alternates: { canonical: '/blog/what-is-http-402' },
  openGraph: {
    title: 'What is HTTP 402? How PEAC Uses 402 for Agent Payments',
    description:
      'HTTP 402 Payment Required explained: history, why it matters now, and how PEAC Protocol uses it for agent payments.',
    type: 'article',
    url: '/blog/what-is-http-402',
    publishedTime: '2025-12-03',
    authors: ['Jithin Raj', 'Originary Team'],
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is HTTP 402? How PEAC Uses 402 for Agent Payments',
    description:
      'HTTP 402 Payment Required explained: history and practical implementation with PEAC.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'What is HTTP 402? How PEAC Uses 402 for Agent Payments',
  description:
    'HTTP 402 Payment Required is an HTTP status code reserved for digital payments. Learn how PEAC Protocol activates 402 for agent payments and receipts.',
  author: { '@type': 'Organization', name: 'Originary', url: 'https://www.originary.xyz' },
  datePublished: '2025-12-03',
  dateModified: '2025-12-03',
  publisher: {
    '@type': 'Organization',
    name: 'Originary',
    logo: { '@type': 'ImageObject', url: 'https://www.originary.xyz/logo/originary-wordmark.svg' },
  },
  mainEntityOfPage: 'https://www.originary.xyz/blog/what-is-http-402',
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
          category="explainer"
          title="What is HTTP 402? How PEAC uses 402 for agent payments"
          sub="HTTP 402 Payment Required was reserved in 1997 for digital payments. With the rise of AI agents needing machine-readable payment signals, it is finally being activated."
          author="Jithin Raj, Founder"
          date="2025-12-03"
          readTime="2 min read"
          parent={{ label: 'Blog', href: '/blog' }}
        >
          <h2>The history of HTTP 402</h2>
          <ul>
            <li><strong>1997.</strong> HTTP 402 defined in RFC 2068, marked as &quot;reserved for future use&quot; for digital payments.</li>
            <li><strong>1997 to 2023.</strong> Status code sits unused while web payments evolve through separate channels.</li>
            <li><strong>2024 and beyond.</strong> AI agents need machine-readable payment signals. HTTP 402 finally sees production use through layered specifications such as x402.</li>
          </ul>
          <p>
            HTTP 402 is currently documented by MDN as <strong>nonstandard</strong>: reserved
            for future use with no agreed convention for how clients and servers exchange
            payment data. Specifications layered on top of 402 (such as x402) define their own
            headers and bodies above the bare status code.
          </p>

          <h2>Why HTTP 402 matters now</h2>
          <p>
            The rise of AI agents changes everything. Unlike human users who can navigate payment
            forms, AI agents need machine-readable payment signals.
          </p>
          <ul>
            <li><strong>Clear signal.</strong> HTTP 402 unambiguously signals &quot;payment required&quot;.</li>
            <li><strong>Payment instructions.</strong> Structured data: what to pay, how much, where.</li>
            <li><strong>Proof of payment.</strong> Receipt proving payment occurred.</li>
          </ul>

          <h2>How PEAC uses HTTP 402</h2>
          <p>
            PEAC Protocol builds on HTTP 402 with additional structure for AI access control,
            payments, and receipts. When a PEAC-enabled endpoint receives a request without valid
            payment:
          </p>
          <pre style={codeBlock}>
{`HTTP/1.1 402 Payment Required
Content-Type: application/json

{
  "type": "payment_required",
  "message": "Access requires payment",
  "payment": {
    "amount": "0.01",
    "currency": "USD",
    "methods": ["x402", "stripe"]
  },
  "policy_url": "https://example.com/.well-known/peac.txt"
}`}
          </pre>
          <p>Response fields explained:</p>
          <ul>
            <li><strong>Payment methods.</strong> x402 for crypto, Stripe for fiat.</li>
            <li><strong>Amount and currency.</strong> Clear pricing in machine-readable format.</li>
            <li><strong>AI policy URL.</strong> Link to crawling policy and usage terms.</li>
          </ul>

          <h2>x402: the payment extension</h2>
          <p>
            x402 is an extension that adds structured payment descriptions to HTTP 402 responses.
            It works with PEAC to provide:
          </p>
          <ul>
            <li><strong>Payment negotiation.</strong> Agents can query acceptable payment methods.</li>
            <li><strong>Receipt return.</strong> Successful payments return PEAC receipts.</li>
            <li><strong>Verification.</strong> Receipts can be verified at the domain&apos;s verify endpoint.</li>
          </ul>
          <p>
            See the{' '}
            <Link href="/peac" style={linkStyle}>
              PEAC Protocol overview
            </Link>{' '}
            for the verifiable interaction-record format.
          </p>

          <h2>Testing HTTP 402</h2>
          <p>You can test a PEAC-enabled 402 endpoint with curl:</p>
          <pre style={codeBlock}>
{`curl -i https://example.com/api/gated

# Response:
# HTTP/2 402
# content-type: application/json`}
          </pre>

          <h2>Beyond payments: access control</h2>
          <p>HTTP 402 in PEAC is not only about money. It can gate access based on:</p>
          <ul>
            <li><strong>AI bot policy.</strong> Require agents to comply with crawling policy.</li>
            <li><strong>Attribution.</strong> Require agreement to attribution terms.</li>
            <li><strong>Consent.</strong> Proof of user consent for training use.</li>
            <li><strong>Rate limiting.</strong> Premium access for paying agents.</li>
          </ul>

          <h2>Getting started</h2>
          <ol>
            <li>
              Define your AI access policy with{' '}
              <Link href="/downloads" style={linkStyle}>
                Originary Downloads
              </Link>
              .
            </li>
            <li>Add 402 responses to your API endpoints.</li>
            <li>Integrate x402 or Stripe for payment processing.</li>
            <li>Return signed receipts on successful payment.</li>
          </ol>
          <p>
            See{' '}
            <Link href="/blog/adding-402-in-15-minutes" style={linkStyle}>
              Add HTTP 402 to your API in 15 minutes
            </Link>{' '}
            for a step-by-step guide.
          </p>
        </ArticleDoc>

        <ArticleRelated
          links={[
            { label: 'HTTP 402 for APIs: Technical Deep Dive', href: '/blog/http-402-for-apis' },
            { label: 'Add HTTP 402 to your API in 15 minutes', href: '/blog/adding-402-in-15-minutes' },
            { label: 'PEAC Protocol overview', href: '/peac' },
          ]}
        />
      </PageShell>
    </>
  )
}

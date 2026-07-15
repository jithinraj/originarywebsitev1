import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell, ArticleDoc, ArticleRelated, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'HTTP 402 for APIs: Request, Challenge, and Record | Originary' },
  description:
    'Practical guide to implementing HTTP 402 Payment Required in APIs. Learn 402 response anatomy, verification patterns, and common pitfalls.',
  authors: [{ name: 'Jithin Raj, Founder' }],
  alternates: { canonical: '/blog/http-402-for-apis' },
  openGraph: {
    title: 'HTTP 402 for APIs: Request, Challenge, and Record',
    description: 'Practical guide to implementing HTTP 402 Payment Required in modern APIs.',
    type: 'article',
    url: '/blog/http-402-for-apis',
    publishedTime: '2025-11-03',
    authors: ['Jithin Raj', 'Originary Team'],
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HTTP 402 for APIs: Request, Challenge, and Record',
    description: 'Practical guide to implementing HTTP 402 Payment Required in modern APIs.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: { index: false, follow: true },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'HTTP 402 for APIs: Request, Challenge, and Record',
  description:
    'A practical guide to implementing HTTP 402 Payment Required in modern APIs with receipt verification patterns.',
  author: { '@type': 'Organization', name: 'Originary', url: 'https://www.originary.xyz' },
  datePublished: '2025-11-03',
  dateModified: '2025-11-03',
  publisher: {
    '@type': 'Organization',
    name: 'Originary',
    logo: { '@type': 'ImageObject', url: 'https://www.originary.xyz/logo/originary-wordmark.svg' },
  },
  mainEntityOfPage: 'https://www.originary.xyz/blog/http-402-for-apis',
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
        {JSON.stringify(articleJsonLd)}
      </Script>
      <PageShell>
        <ArticleDoc
          category="technical"
          title="HTTP 402 for APIs: request, challenge, and record"
          sub={
            <>
              <Link href="/peac" style={linkStyle}>
                HTTP 402 Payment Required
              </Link>{' '}
              was reserved in 1999 for &quot;future digital payments.&quot; That future is now.
              Here is how to implement 402 responses that work for automated agents and human
              developers alike.
            </>
          }
          author="Jithin Raj, Founder"
          date="2025-11-03"
          readTime="2 min read"
          parent={{ label: 'Blog', href: '/blog' }}
          status="archived"
        >
          <h2>Why 402 matters for APIs</h2>
          <p>Modern APIs serve both humans and agents. When an agent hits a priced endpoint, it needs:</p>
          <ul>
            <li><strong>Programmatic discovery.</strong> Know what to pay without parsing HTML.</li>
            <li><strong>Rail flexibility.</strong> Use any payment method that provides a receipt.</li>
            <li><strong>Automatic retry.</strong> Present receipt and get resource in one flow.</li>
            <li><strong>Clear semantics.</strong> Distinguish payment from auth/permission issues.</li>
          </ul>
          <p>
            HTTP 402 provides semantic clarity. Unlike 401 (auth missing) or 403 (permission
            denied), 402 signals: <em>&quot;This resource exists, pay first.&quot;</em>
          </p>

          <h2>Anatomy of a working 402 response</h2>
          <p>A minimal 402 response includes four key elements:</p>
          <ol>
            <li><strong>Status code:</strong> <code>402</code></li>
            <li><strong>Human-readable detail:</strong> why payment is required</li>
            <li><strong>Machine-readable hint:</strong> protocol, amount, currency, reference</li>
            <li><strong>Instructions:</strong> how to pay and retry</li>
          </ol>
          <pre style={{
            background: 'rgba(20, 17, 10, 0.04)',
            border: `1px solid ${PALETTE.hairline}`,
            padding: '14px 16px',
            fontSize: 13,
            lineHeight: 1.6,
            overflowX: 'auto',
            color: PALETTE.ink,
            fontFamily: 'var(--font-plex-mono), "IBM Plex Mono", monospace',
          }}>
{`HTTP/1.1 402 Payment Required
Content-Type: application/json
Cache-Control: no-store

{
  "detail": "Payment required to access this resource.",
  "payment": {
    "protocol": "x402",
    "amount": "0.50",
    "currency": "USD",
    "reference": "invoice-abc-789",
    "instructions": "Pay and include receipt in X-Receipt header on retry."
  }
}`}
          </pre>

          <h2>Receipt verification: the critical step</h2>
          <p>A receipt is cryptographic proof of payment. Your server must verify four things:</p>
          <ol>
            <li><strong>Verify signature.</strong> Ensure receipt is from a trusted source using cryptographic verification.</li>
            <li><strong>Check timestamp.</strong> Reject expired receipts (typically more than 5 minutes old).</li>
            <li><strong>Match reference.</strong> Confirm receipt corresponds to the original challenge.</li>
            <li><strong>Prevent replay.</strong> Track used receipts and reject duplicates.</li>
          </ol>

          <h2>Real-world implementation checklist</h2>
          <ul>
            <li>Return <code>402</code> with a machine-readable JSON hint</li>
            <li>Include a <code>reference</code> field mapped to your entitlement ledger</li>
            <li>Set <code>Cache-Control: no-store</code></li>
            <li>Verify receipt signature, timestamp, reference, replay</li>
            <li>Return deterministic error codes for invalid receipts</li>
            <li>Centralize challenge creation in middleware</li>
            <li>Log challenges and verifications for audit trails</li>
            <li>Support multiple payment rails (rail-agnostic)</li>
          </ul>

          <h2>What is next</h2>
          <p>
            HTTP 402 is just the transport layer. To build a complete agent-to-agent commerce
            system, you will need receipt issuance, entitlement tracking, monitoring, and client
            SDKs.
          </p>
          <p>
            See the{' '}
            <Link href="/peac" style={linkStyle}>
              PEAC Protocol overview
            </Link>{' '}
            for the verifiable interaction-record format used by Originary, and the{' '}
            <Link href="/downloads" style={linkStyle}>
              Downloads
            </Link>{' '}
            page for CLI and SDK packages.
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

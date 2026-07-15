import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell, ArticleDoc, ArticleRelated, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'Add HTTP 402 to Your API in 15 Minutes | Originary' },
  description:
    'A 15-minute walkthrough for adding HTTP 402 to an Express API: challenge response, header format, receipt verification middleware, and failure modes.',
  keywords: 'HTTP 402, Express.js, API monetization, x402, payment required, tutorial',
  authors: [{ name: 'Jithin Raj, Founder' }],
  alternates: { canonical: '/blog/adding-402-in-15-minutes' },
  openGraph: {
    title: 'Add HTTP 402 to Your API in 15 Minutes',
    description: 'A 15-minute walkthrough for adding HTTP 402 to an Express API with receipt verification.',
    type: 'article',
    url: '/blog/adding-402-in-15-minutes',
    publishedTime: '2025-11-03',
    authors: ['Jithin Raj', 'Originary Team'],
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Add HTTP 402 to Your API in 15 Minutes',
    description: 'A 15-minute walkthrough for adding HTTP 402 to an Express API with receipt verification.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: { index: false, follow: true },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Add HTTP 402 to Your API in 15 Minutes',
  description:
    'Step-by-step tutorial for adding HTTP 402 Payment Required responses to an Express API.',
  totalTime: 'PT15M',
  author: {
    '@type': 'Organization',
    name: 'Originary',
    url: 'https://www.originary.xyz',
  },
  datePublished: '2025-11-03',
  publisher: {
    '@type': 'Organization',
    name: 'Originary',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.originary.xyz/logo/originary-wordmark.svg',
    },
  },
  mainEntityOfPage: 'https://www.originary.xyz/blog/adding-402-in-15-minutes',
}

const linkStyle = {
  color: PALETTE.ink,
  textDecoration: 'underline',
  textDecorationColor: 'rgba(20, 17, 10, 0.30)',
  textUnderlineOffset: 3,
}

const codeBlock = {
  marginTop: 12,
  marginBottom: 16,
  padding: '14px 18px',
  background: 'rgba(20, 17, 10, 0.04)',
  border: `1px solid ${PALETTE.rule}`,
  fontFamily: 'var(--font-plex-mono), "IBM Plex Mono", ui-monospace, monospace',
  fontSize: 13,
  lineHeight: 1.6,
  color: PALETTE.ink,
  overflowX: 'auto' as const,
  whiteSpace: 'pre' as const,
}

const callout = {
  marginTop: 8,
  marginBottom: 14,
  padding: '14px 18px',
  background: 'rgba(20, 17, 10, 0.03)',
  borderLeft: `2px solid ${PALETTE.rule}`,
  fontFamily: 'var(--font-plex-sans), "IBM Plex Sans", system-ui, sans-serif',
  fontSize: 14,
  lineHeight: 1.65,
  color: PALETTE.muted,
}

export default function Page() {
  return (
    <>
      <Script id="article-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(articleJsonLd)}
      </Script>
      <PageShell>
        <ArticleDoc
          category="tutorial"
          title="Add HTTP 402 to your API in 15 minutes"
          sub={
            <>
              You have an Express API. You want to charge for certain endpoints. Here is how to add{' '}
              <Link href="/peac" style={linkStyle}>
                HTTP 402 Payment Required
              </Link>{' '}
              responses in 15 minutes, no SDK required.
            </>
          }
          author="Jithin Raj, Founder"
          date="2025-11-03"
          readTime="5 min read"
          parent={{ label: 'Blog', href: '/blog' }}
          status="archived"
        >
          <div style={callout}>
            <strong>Who this is for.</strong> Backend developers running Express (or any
            Node HTTP framework) who want a minimal pay-per-request endpoint without
            adopting a full SDK. Bring your own payment-provider verification for receipts.
          </div>

          <h2>What you will build</h2>
          <ul>
            <li>
              A <code>GET /priced</code> endpoint that returns 402 if no receipt is present
            </li>
            <li>Receipt verification middleware that checks signatures and timestamps</li>
            <li>A helper to generate 402 challenges with references</li>
          </ul>

          <h2>Step 1: the 402 challenge response</h2>
          <p>
            HTTP 402 is documented by MDN as nonstandard and reserved for future use, so there is
            no single agreed body shape. Layered specifications such as{' '}
            <a
              href="https://www.x402.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              x402
            </a>{' '}
            define their own headers and body. For this tutorial, the server returns a JSON body
            with the amount, currency, accepted rails, and a short-lived challenge reference.
          </p>
          <pre style={codeBlock}>{`HTTP/1.1 402 Payment Required
Content-Type: application/json
Cache-Control: no-store

{
  "challenge": "ch_8f2c4e7a91",
  "expires_at": "2025-11-03T18:45:00Z",
  "amount": "0.05",
  "currency": "USD",
  "accepted": ["x402", "stripe"],
  "resource": "/priced",
  "verify_with": "https://www.originary.xyz/.well-known/peac-issuer.json"
}`}</pre>

          <h2>Step 2: the Express challenge helper</h2>
          <p>
            A small helper issues challenges with a short TTL and stores them in-memory. In
            production, store challenges in Redis or a database (see the checklist).
          </p>
          <pre style={codeBlock}>{`import { randomBytes } from 'node:crypto'

const challenges = new Map()
const CHALLENGE_TTL_MS = 5 * 60_000

export function issueChallenge(resource) {
  const id = 'ch_' + randomBytes(8).toString('hex')
  const expires_at = new Date(Date.now() + CHALLENGE_TTL_MS).toISOString()
  challenges.set(id, { resource, expires_at })
  return { id, expires_at }
}

export function consumeChallenge(id, resource) {
  const c = challenges.get(id)
  if (!c) return { ok: false, reason: 'unknown_challenge' }
  if (c.resource !== resource) return { ok: false, reason: 'resource_mismatch' }
  if (Date.parse(c.expires_at) < Date.now()) {
    challenges.delete(id)
    return { ok: false, reason: 'expired' }
  }
  challenges.delete(id)
  return { ok: true }
}`}</pre>

          <h2>Step 3: the receipt verification middleware</h2>
          <p>
            When a request arrives carrying a <code>PEAC-Receipt</code> header, verify the
            compact JWS, confirm it references a known challenge, and check it has not
            expired. Treat the payment-provider verification as a separate trust step.
          </p>
          <pre style={codeBlock}>{`import { verifyReceipt } from './your-receipt-verifier.js'

export async function requireReceipt(req, res, next) {
  const header = req.get('PEAC-Receipt')
  if (!header) return challenge402(req, res)

  let claims
  try {
    claims = await verifyReceipt(header)
  } catch {
    return res.status(402).json({ error: 'invalid_receipt' })
  }

  const result = consumeChallenge(claims.challenge, req.path)
  if (!result.ok) {
    return res.status(402).json({ error: result.reason })
  }

  req.receipt = claims
  next()
}

function challenge402(req, res) {
  const { id, expires_at } = issueChallenge(req.path)
  res.set('Cache-Control', 'no-store')
  return res.status(402).json({
    challenge: id,
    expires_at,
    amount: '0.05',
    currency: 'USD',
    accepted: ['x402', 'stripe'],
    resource: req.path,
    verify_with: 'https://www.originary.xyz/.well-known/peac-issuer.json',
  })
}`}</pre>

          <h2>Step 4: wire it up</h2>
          <pre style={codeBlock}>{`import express from 'express'
import { requireReceipt } from './require-receipt.js'

const app = express()

app.get('/priced', requireReceipt, (req, res) => {
  res.json({
    data: 'paid content',
    receipt_ref: req.receipt?.ref,
  })
})

app.listen(3000)`}</pre>

          <h2>Step 5: try it from the client side</h2>
          <p>
            A client first probes the endpoint, learns the price, pays through its rail of choice
            (x402 or a Stripe-style flow), and retries with the resulting receipt. The minimal
            sequence:
          </p>
          <pre style={codeBlock}>{`# 1. Probe (no receipt)
$ curl -i https://api.example.com/priced
HTTP/1.1 402 Payment Required
{"challenge":"ch_8f2c4e7a91", ...}

# 2. Pay via the chosen rail, get a signed receipt back

# 3. Retry with the receipt
$ curl -i https://api.example.com/priced \\
    -H "PEAC-Receipt: eyJhbGciOi...<compact JWS>..."
HTTP/1.1 200 OK
{"data":"paid content", "receipt_ref":"sha256:..."}`}</pre>

          <h2>Failure modes to handle</h2>
          <ul>
            <li>
              <strong>missing receipt</strong> &rarr; 402 with a fresh challenge
            </li>
            <li>
              <strong>malformed receipt</strong> &rarr; 402 with{' '}
              <code>error: &quot;invalid_receipt&quot;</code>; do not leak parser internals
            </li>
            <li>
              <strong>expired challenge</strong> &rarr; 402 with a new challenge id
            </li>
            <li>
              <strong>resource mismatch</strong> &rarr; 402; the receipt was issued for a
              different endpoint
            </li>
            <li>
              <strong>replay</strong> &rarr; consume the challenge id on first use; a second
              request with the same id returns 402
            </li>
            <li>
              <strong>clock skew</strong> &rarr; allow a small tolerance window (for example
              30 seconds) on receipt timestamps
            </li>
          </ul>

          <h2>What PEAC does not do</h2>
          <ul>
            <li>PEAC does not custody funds, settle payments, or replace your payment rail.</li>
            <li>PEAC does not pick x402 vs Stripe; it carries a signed record of the exchange.</li>
            <li>PEAC does not assert chargeback or refund finality; that state belongs to the rail.</li>
            <li>PEAC does not become a billing system; compose it with your existing billing stack.</li>
          </ul>

          <h2>Production checklist</h2>
          <p>Before shipping to production:</p>
          <ul>
            <li>Replace the in-memory <code>Map</code> with Redis or a database</li>
            <li>Use your payment provider&apos;s receipt verification SDK</li>
            <li>
              Add <code>Cache-Control: no-store</code> to 402 responses
            </li>
            <li>Log challenges and verifications for audit trails</li>
            <li>Set appropriate expiry times (5 minutes is typical)</li>
            <li>Handle edge cases (malformed receipts, missing keys, clock skew)</li>
            <li>Add rate limiting to prevent abuse</li>
            <li>Pin your verifier to a specific issuer config and JWKS</li>
          </ul>
        </ArticleDoc>

        <ArticleRelated
          links={[
            { label: 'HTTP 402 for APIs', href: '/blog/http-402-for-apis' },
            { label: 'What is HTTP 402?', href: '/blog/what-is-http-402' },
            { label: 'PEAC Protocol overview', href: '/peac' },
            { label: 'Downloads (CLI, SDK)', href: '/downloads' },
          ]}
        />
      </PageShell>
    </>
  )
}

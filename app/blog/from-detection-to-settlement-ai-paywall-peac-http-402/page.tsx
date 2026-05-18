import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell, ArticleDoc, ArticleRelated, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'AI Paywalls, HTTP 402, and Portable Records | Originary' },
  description:
    'How PEAC connects agent and crawler signals to HTTP 402, x402, and Stripe, with signed records for billing, audit, and partner review.',
  keywords:
    'AI paywall, HTTP 402, x402, Stripe, signed records, PEAC Protocol, agent payments, AI billing, audit',
  authors: [{ name: 'Jithin Raj, Founder' }],
  openGraph: {
    type: 'article',
    title: 'AI Paywall: Detection to Settlement',
    description:
      'How Originary and PEAC turn agent and crawler identification into an AI paywall using HTTP 402, x402, and Stripe.',
    url: '/blog/from-detection-to-settlement-ai-paywall-peac-http-402',
    publishedTime: '2025-12-01',
    authors: ['Jithin Raj', 'Originary Team'],
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Paywall: Detection to Settlement',
    description: 'AI paywall using HTTP 402 with signed records.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: { canonical: '/blog/from-detection-to-settlement-ai-paywall-peac-http-402' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline:
    'From Detection To Settlement: Using PEAC To Turn AI Traffic Into Revenue And Compliance',
  description:
    'How Originary and PEAC Protocol connect agent and crawler identification signals to HTTP 402, x402, and Stripe with signed records.',
  author: { '@type': 'Organization', name: 'Originary', url: 'https://www.originary.xyz' },
  datePublished: '2025-12-01',
  dateModified: '2025-12-01',
  publisher: {
    '@type': 'Organization',
    name: 'Originary',
    logo: { '@type': 'ImageObject', url: 'https://www.originary.xyz/logo/originary-wordmark.svg' },
  },
  mainEntityOfPage:
    'https://www.originary.xyz/blog/from-detection-to-settlement-ai-paywall-peac-http-402',
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

const pullQuote = {
  marginTop: 14,
  marginBottom: 14,
  padding: '18px 22px',
  background: PALETTE.bg,
  border: `1px solid ${PALETTE.rule}`,
  fontFamily: 'var(--font-plex-sans), "IBM Plex Sans", system-ui, sans-serif',
  fontSize: 17,
  fontWeight: 500,
  lineHeight: 1.5,
  color: PALETTE.ink,
}

const warning = {
  marginTop: 8,
  marginBottom: 14,
  padding: '14px 18px',
  background: 'rgba(20, 17, 10, 0.05)',
  border: `1px solid ${PALETTE.rule}`,
  fontFamily: 'var(--font-plex-sans), "IBM Plex Sans", system-ui, sans-serif',
  fontSize: 14,
  lineHeight: 1.65,
  color: PALETTE.ink,
}

export default function Page() {
  return (
    <>
      <Script id="article-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
      <PageShell>
        <ArticleDoc
          category="technical"
          title="AI paywalls, HTTP 402, and portable records"
          sub="How Originary and PEAC Protocol turn agent and crawler identification into an AI paywall using HTTP 402, x402, and Stripe, with signed records for billing, audit, and partner review."
          author="Jithin Raj, Founder"
          date="2025-12-01"
          readTime="7 min read"
          parent={{ label: 'Blog', href: '/blog' }}
        >
          <div style={callout}>
            <strong>Who this is for.</strong> Product, billing, and platform teams running APIs,
            content platforms, or developer infrastructure who want to charge agents per request,
            keep partner billing auditable, and avoid building a settlement layer or replacing the
            payment rails they already use.
          </div>

          <p>
            AI agents can now read, write, call APIs and act on our behalf. The one thing they
            could not do for a long time was <strong>pay for what they use</strong>.
          </p>
          <p>
            That gap is closing fast. New payment standards built on{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/402"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              HTTP 402 Payment Required
            </a>
            , like x402, are turning APIs and web resources into machine-readable paywalls that
            AI agents can clear automatically.
          </p>
          <div style={callout}>
            At Originary,{' '}
            <Link href="/peac" style={linkStyle}>
              PEAC Protocol
            </Link>{' '}
            is our answer to the next step in that story:
            <ul style={{ margin: '8px 0 0 0', paddingLeft: 20 }}>
              <li>You detect AI bot traffic</li>
              <li>You apply an AI paywall with HTTP 402</li>
              <li>You settle payments over x402 or Stripe</li>
              <li>
                You get a signed PEAC-Receipt for every access event, ready for billing, audit
                and partner review
              </li>
            </ul>
          </div>

          <h2>1. From &quot;is this a bot&quot; to &quot;this bot paid under these terms&quot;</h2>
          <p>
            In the{' '}
            <Link href="/blog/ai-bot-detection" style={linkStyle}>
              previous piece on agent and crawler identification
            </Link>{' '}
            we focused on visibility: spotting AI agents in your traffic, using metadata,
            fingerprints, and access logs to understand who is calling you and why.
          </p>
          <p>
            That is necessary, but not sufficient. If you are a publisher, API provider, SaaS
            platform, or data owner, the key questions are:
          </p>
          <ul>
            <li>Who is allowed to access which resources</li>
            <li>On what terms and price</li>
            <li>How do we prove what actually happened</li>
          </ul>
          <p>
            Content-level AI detection tools and forensics answer &quot;what probably
            happened&quot; on the media side. They do not give you:
          </p>
          <ul>
            <li>A machine-readable policy that agents must follow</li>
            <li>A native way to charge them</li>
            <li>A signed record that will hold up in an audit or partner review</li>
          </ul>
          <p>
            PEAC exists to close that gap. The protocol treats every AI access event as something
            that can be priced, consented, and proven.
          </p>
          <div style={pullQuote}>
            Detection tells you <em>&quot;there is an AI here&quot;</em>. PEAC tells you{' '}
            <em>
              &quot;this AI agreed to these terms, paid in this way, and here is the signed
              record&quot;
            </em>
            .
          </div>

          <h2>2. HTTP 402 and the rise of the AI paywall</h2>

          <h3>2.1 A dormant status code wakes up</h3>
          <p>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/402"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              HTTP 402 Payment Required
            </a>{' '}
            has existed in the spec for decades, but is still documented by MDN as nonstandard
            and reserved for future use. There has been no agreed convention for how clients and
            servers exchange payment data over 402, so most products ignored it. That is changing
            through layered specifications such as x402 that define their own headers and bodies
            above the bare status code:
          </p>
          <ul>
            <li>
              <strong>
                <a
                  href="https://www.x402.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  x402
                </a>
                .
              </strong>{' '}
              A chain-agnostic HTTP 402 protocol for stablecoin payments. Servers respond with
              402 and a machine-readable payment challenge; clients pay and retry with proof.
            </li>
            <li>
              <strong>Commercial providers.</strong> From Cloudflare to Web3 infra companies, now
              shipping{' '}
              <a
                href="https://blog.cloudflare.com/introducing-pay-per-crawl/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                402-based paywalls
              </a>{' '}
              for crawlers and APIs.
            </li>
            <li>
              <strong>Stripe.</strong>{' '}
              <a
                href="https://docs.stripe.com/changelog/basil/2025-03-31/vault-forward-api-returns-402"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Uses 402 Payment Required
              </a>{' '}
              in parts of its API surface when payment issues occur, making 402 a familiar
              concept in card-based integrations.
            </li>
          </ul>
          <p>
            In other words,{' '}
            <strong>
              HTTP 402 is becoming the native status code for AI paywalls and machine-friendly
              payments
            </strong>
            .
          </p>

          <h3>2.2 What PEAC adds on top</h3>
          <p>
            PEAC does not try to replace x402 or Stripe. Our direction is explicit: the protocol
            is a <strong>portable record layer</strong> that completes existing payment rails
            rather than competes with them.
          </p>

          <h4>PEAC 0.9.12 - Generic HTTP 402 semantics</h4>
          <ul>
            <li>How resources advertise that they are 402-gated</li>
            <li>How policies and AI preferences (AIPREF) are discovered</li>
            <li>How 402 responses are described in a consistent way</li>
          </ul>

          <h4>PEAC 0.9.13 - Economic layer</h4>
          <ul>
            <li>Normalized payment block in the record schema</li>
            <li>Adapters for x402 and Stripe</li>
            <li>Provenance and consent fields wired into records</li>
            <li>Verification latency budget under 5 ms p95</li>
          </ul>

          <h4>PEAC 0.9.14 - Reporting and standards hooks</h4>
          <ul>
            <li>Compliance reports built on top of records</li>
          </ul>

          <div style={pullQuote}>
            <strong>Integrate PEAC once.</strong> Use whichever AI payment rails you want behind
            the scenes. Always get the same kind of signed PEAC-Receipt back.
          </div>

          <h2>3. The PEAC flow: from detection to 402 to PEAC-Receipt</h2>
          <p>At a high level, every PEAC integration follows the same five-step loop:</p>
          <ol>
            <li>
              <strong>Discover.</strong> The AI agent fetches <code>/.well-known/peac.txt</code>{' '}
              and learns where to fetch AIPREF, how access control works, which payment rails are
              supported, where to verify records, and which public keys to trust.
            </li>
            <li>
              <strong>Evaluate.</strong> The PEAC kernel merges your AIPREF policy, resource-level
              rules, and any caller identity into a decision: allow, allow with payment, or deny.
            </li>
            <li>
              <strong>Challenge with HTTP 402.</strong> If payment is required, the server
              returns HTTP 402 with a machine-readable description of the price and rail, plus
              enough information for the client to complete payment.
            </li>
            <li>
              <strong>Settle on the chosen rail.</strong> The AI agent uses the x402 or Stripe
              adapter flow to pay and obtain a proof.
            </li>
            <li>
              <strong>Prove with PEAC-Receipt.</strong> When the client retries, the PEAC kernel
              verifies the payment proof, recomputes the policy hash, issues a signed record, and
              sends the resource back with a <code>PEAC-Receipt</code> header.
            </li>
          </ol>
          <p>
            Records always bind to <code>policy_hash</code>, and when an AIPREF policy exists, an{' '}
            <code>aipref_snapshot</code> is embedded so that future audits do not depend on
            external files. The <code>payment</code> block is optional and only present when a
            payment adapter was actually used.
          </p>

          <h2>4. Concrete flows across x402 and Stripe</h2>

          <h3>4.1 x402: stablecoin AI paywalls over HTTP</h3>
          <p>
            <a
              href="https://www.x402.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              x402
            </a>{' '}
            activates HTTP 402 for onchain or rollup-based stablecoin payments. Servers respond
            with a 402 and payment requirements; clients pay and retry with proof.
          </p>
          <p><em>HTTP 402 x402 challenge:</em></p>
          <pre style={codeBlock}>
{`HTTP/1.1 402 Payment Required
Content-Type: application/json

{
  "rail": "x402",
  "price": "0.05",
  "currency": "USD",
  "asset": "USDC",
  "chain": "solana-mainnet",
  "destination": "wallet-address",
  "expires_at": "2025-12-01T09:45:00Z"
}`}
          </pre>
          <p>
            The agent sends the required USDC transaction, retries with proof, and the x402
            adapter normalizes this into the <code>payment</code> block with{' '}
            <code>rail: &quot;x402&quot;</code>. AI paywalls for datasets, prompts, or APIs can
            now take USDC while your accounting stack only sees standardized PEAC records.
          </p>

          <h3>4.2 Stripe: card rails behind an AI paywall</h3>
          <p>
            <a
              href="https://docs.stripe.com/changelog/basil/2025-03-31/vault-forward-api-returns-402"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Stripe already uses 402
            </a>{' '}
            in some scenarios when payment is required or fails.
          </p>
          <p><em>HTTP 402 Stripe challenge:</em></p>
          <pre style={codeBlock}>
{`HTTP/1.1 402 Payment Required
Content-Type: application/json

{
  "rail": "stripe",
  "price": "9.99",
  "currency": "USD",
  "payment_intent": "pi_3ZQ...",
  "client_secret": "pi_3ZQ..._secret_..."
}`}
          </pre>
          <p>
            The client uses Stripe Elements to complete the payment, then retries once the intent
            is <code>succeeded</code>. The Stripe adapter confirms the payment and issues a
            PEAC-Receipt.
          </p>
          <div style={warning}>
            <strong>Note:</strong> The exact header used to relay Stripe payment intent IDs may
            change as we tighten the adapter spec, but the normalized <code>payment</code> block
            shape and use of <code>PEAC-Receipt</code> remain stable across versions.
          </div>

          <h2>5. What actually ends up in a PEAC-Receipt</h2>
          <p>
            To make the billing, audit and compliance story concrete, here is a simplified
            example of what a PEAC record for a paid AI request might look like:
          </p>
          <p><em>Example PEAC-Receipt (simplified):</em></p>
          <pre style={codeBlock}>
{`{
  "version": "0.9.13",
  "policy_hash": "b64url-sha256-of-canonical-policy",
  "aipref_snapshot": {
    "url": "https://example.com/.well-known/aipref.json",
    "hash": "b64url-sha256-of-aipref",
    "effective_at": "2025-11-01T00:00:00Z"
  },
  "resource": {
    "method": "GET",
    "path": "/api/report",
    "etag": "W/\\"6e2-abc...\\""
  },
  "agent": {
    "id": "agent:originary:client-123",
    "kind": "crawler"
  },
  "decision": {
    "effect": "allow",
    "reason": "paid"
  },
  "payment": {
    "rail": "x402",
    "reference": "solana-tx-123...",
    "amount": 0.05,
    "currency": "USD",
    "settled_at": "2025-12-01T09:30:21Z",
    "idempotency": "req_9b3c5..."
  },
  "issued_at": "2025-12-01T09:30:22Z",
  "proof": {
    "alg": "Ed25519",
    "kid": "peac-key-2025-09",
    "jws": "eyJhbGciOiJFZERTQSIs..."
  }
}`}
          </pre>
          <p>Key fields:</p>
          <ul>
            <li>
              <code>policy_hash + aipref_snapshot</code> - tell you exactly what rules were in
              force when this AI paywall was applied.
            </li>
            <li>
              <code>resource</code> - ties things to a concrete path and ETag.
            </li>
            <li>
              <code>payment</code> - uniform across x402 and Stripe; only the rail and reference
              semantics differ.
            </li>
            <li>
              <code>proof</code> - binds it all cryptographically so third parties can verify
              without talking to your servers.
            </li>
          </ul>
          <p>
            For accounting, you can roll up <code>payment.amount</code> by resource or customer.
            For compliance, you can prove that specific AI calls were made under specific
            policies and paid in specific ways.
          </p>

          <h2>6. What PEAC does not do</h2>
          <ul>
            <li>PEAC does not custody funds, settle payments, or replace acquirers and processors.</li>
            <li>PEAC does not pick the payment rail; it carries a signed record of the exchange whatever rail clears it.</li>
            <li>PEAC does not enforce pricing or contract terms; it records what was offered and what was accepted.</li>
            <li>PEAC does not become a billing system; it composes with x402, Stripe, and existing billing stacks.</li>
            <li>PEAC does not assert chargeback or refund finality; settlement state belongs to the rail.</li>
          </ul>

          <h2>7. How this ties back to our direction and vision</h2>
          <p>
            Earlier PEAC releases (the 0.9.12 to 0.9.21 window) set the constraints that shaped
            this article:
          </p>
          <ul>
            <li>
              Continue development until earning 1.0 through multiple independent implementations
            </li>
            <li>
              Use <strong>PEAC-Receipt</strong> as the primary HTTP field globally, without
              legacy header aliases
            </li>
            <li>Keep the core small and rely on adapters for payment rails and environments</li>
            <li>
              Always embed AIPREF snapshots in records when present, and make payment optional
              but normalized across x402 and Stripe
            </li>
          </ul>
          <p>
            Specific numbers and version windows shift over time. For the current PEAC release,
            SLOs, and supported wire surfaces, see the <Link href="/peac" style={linkStyle}>PEAC
            Protocol overview</Link> and the <Link href="/downloads" style={linkStyle}>downloads
            and SDK page</Link>.
          </p>
          <div style={pullQuote}>
            Make PEAC the portable record layer for AI interactions, so any rail that can clear a
            payment can plug into AI paywalls and still produce verifiable, portable records.
          </div>
          <p>For Originary, this means:</p>
          <ul>
            <li>
              Agent and crawler identification becomes the front door into a programmable AI
              paywall
            </li>
            <li>HTTP 402 becomes the standard control plane for AI payments</li>
            <li>x402 and Stripe are first-class citizens, not competing standards</li>
            <li>
              <code>PEAC-Receipt</code> is the common language between engineering, finance,
              partner reviews, and external counterparties
            </li>
          </ul>
          <p>
            If you are thinking about how to charge AI agents for access, or how to show partners
            and auditors exactly what those agents did with your data, that is the arc we are
            building toward. In upcoming posts we will share concrete integration guides and
            reference implementations for each rail.
          </p>
        </ArticleDoc>

        <ArticleRelated
          links={[
            {
              label: 'Agent and crawler identification',
              href: '/blog/ai-bot-detection',
            },
            { label: 'HTTP 402 for APIs', href: '/blog/http-402-for-apis' },
            { label: 'What is HTTP 402?', href: '/blog/what-is-http-402' },
            { label: 'AIPREF: AI Usage Preferences', href: '/blog/aipref-by-ietf' },
            { label: 'PEAC Protocol overview', href: '/peac' },
          ]}
        />
      </PageShell>
    </>
  )
}

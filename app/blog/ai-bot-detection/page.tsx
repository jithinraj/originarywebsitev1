import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell, ArticleDoc, ArticleRelated, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'AI Bot Detection and Crawler Signals | Originary' },
  description:
    'How metadata, model fingerprints, and signed records turn AI traffic into verifiable records for audits and partner review.',
  keywords:
    'AI bot detection, crawler identification, AI traffic, model fingerprinting, content authenticity, signed records, PEAC Protocol',
  authors: [{ name: 'Jithin Raj, Founder' }],
  openGraph: {
    type: 'article',
    title: 'Agent and Crawler Signals',
    description:
      'Detection alone is not enough. Metadata, model fingerprints, and signed records transform AI traffic into verifiable, enforceable records.',
    url: '/blog/ai-bot-detection',
    publishedTime: '2025-12-01',
    authors: ['Jithin Raj', 'Originary Team'],
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent and Crawler Signals',
    description:
      'How metadata, model fingerprints, and signed records turn AI traffic into verifiable records.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: { canonical: '/blog/ai-bot-detection' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline:
    'Agent and Crawler Signals: Turning Unknown AI Traffic Into Verifiable Records',
  description:
    'A technical deep dive into AI traffic identification, model fingerprinting, and the four pillars that turn detection into verifiable records.',
  author: { '@type': 'Organization', name: 'Originary', url: 'https://www.originary.xyz' },
  datePublished: '2025-12-01',
  dateModified: '2025-12-01',
  publisher: {
    '@type': 'Organization',
    name: 'Originary',
    logo: { '@type': 'ImageObject', url: 'https://www.originary.xyz/logo/originary-wordmark.svg' },
  },
  mainEntityOfPage: 'https://www.originary.xyz/blog/ai-bot-detection',
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

export default function Page() {
  return (
    <>
      <Script id="article-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
      <PageShell>
        <ArticleDoc
          category="technical"
          title="AI bot detection and crawler signals"
          sub="Detection alone is not enough. Learn how metadata, model fingerprints, and signed records transform AI traffic from guesswork into verifiable, enforceable records."
          author="Jithin Raj, Founder"
          date="2025-12-01"
          readTime="6 min read"
          parent={{ label: 'Blog', href: '/blog' }}
        >
          <div style={callout}>
            <strong>Who this is for.</strong> API providers, content platforms, publishers, and
            security teams who already detect AI traffic and now need a verifiable record of what
            each agent attested at the boundary, so audit, billing, and partner conversations have
            something portable to work with.
          </div>

          <p>&quot;AI detection&quot; is having a moment. But most people mean one of two things:</p>
          <ul>
            <li>
              <strong>Content authenticity.</strong> Is this content real, or did an AI model
              generate or alter it?
            </li>
            <li>
              <strong>Traffic detection.</strong> Is this visitor a human, or an AI bot quietly
              crawling my site or API?
            </li>
          </ul>
          <p>
            Those are different jobs. Both matter. Both are easy to get wrong if you only rely on
            classifiers and vibes.
          </p>
          <p>
            Originary takes a different view: <strong>every time an AI system touches your data,
            there should be a clear, verifiable trail of what happened.</strong> That trail needs
            to work for developers, auditors, partners, and automated agents at the same time.
          </p>
          <div style={callout}>
            That is exactly what{' '}
            <Link href="/peac" style={linkStyle}>
              PEAC Protocol
            </Link>{' '}
            provides: a neutral records layer for AI interactions that issues signed records for
            access, usage, and payments using a standard <code>PEAC-Receipt</code> HTTP header.
          </div>

          <h2>1. What &quot;agent and crawler identification&quot; really covers</h2>
          <p>People often bundle three separate capabilities under &quot;AI detection&quot;:</p>

          <h3>Fake vs real (content authenticity)</h3>
          <p>
            Classifying whether a text, image, audio, or video file was generated or altered by
            an AI model, usually with a probability score.
          </p>

          <h3>Model fingerprinting (who generated this)</h3>
          <p>
            Inferring which model family or vendor likely produced the artifact, or using
            watermarks and statistical fingerprints to attribute it.
          </p>

          <h3>Bot and agent detection (who is calling me)</h3>
          <p>
            Detecting that an incoming request is from an AI agent or crawler, not from a person
            in a browser, and understanding which agent, under what declared purpose.
          </p>

          <div style={pullQuote}>
            &quot;You can&apos;t control, license, or monetize AI usage of your data if you
            can&apos;t see which AI agents are actually accessing it.&quot;
          </div>

          <p>
            Agent and crawler identification is the missing visibility layer between your content
            and the growing universe of AI crawlers, copilots, and headless agents.
          </p>

          <h2>2. Why &quot;detection-only&quot; is not enough</h2>
          <p>
            There is real value in content-level detection and model fingerprinting. But they
            have hard limits:
          </p>
          <ul>
            <li>
              <strong>It is an arms race.</strong> As models improve, naive classifiers become
              less reliable. A detector that feels strong this quarter may be unreliable next
              quarter. (We have seen 20%+ false positive drops in under 6 months.)
            </li>
            <li>
              <strong>Scores are not proof.</strong> A &quot;0.84 likelihood of AI&quot; score is
              a hint. It is not a signed record that will stand up in an audit, complaint, or
              partner review.
            </li>
            <li>
              <strong>No policy, no economics.</strong> Even if you know something is
              AI-generated, that does not tell you whether the agent respected your usage policy,
              paid you for access, or is allowed to keep the data.
            </li>
            <li>
              <strong>Detection lag.</strong> By the time you detect unauthorized AI training on
              your content, the model is already deployed. You cannot un-train it.
            </li>
          </ul>
          <p>Enterprises, regulators, and serious publishers need more than yes/no classification:</p>
          <ul>
            <li>Machine-readable policies agents can parse</li>
            <li>Cryptographic proof access followed those terms</li>
            <li>Chain linking suspicious outputs back to access events</li>
            <li>Audit trail that survives review (not server logs you control)</li>
          </ul>
          <p>
            That is where Originary and PEAC push beyond detection-only to{' '}
            <strong>detection + policy + signed records</strong>.
          </p>

          <h2>3. The four pillars of useful agent and crawler identification</h2>
          <p>
            In practice, agent and crawler identification becomes powerful when you combine four
            signal types:
          </p>
          <ul>
            <li><strong>Pillar 1: metadata</strong></li>
            <li><strong>Pillar 2: model fingerprints</strong></li>
            <li><strong>Pillar 3: access events</strong></li>
            <li><strong>Pillar 4: artifact repository</strong></li>
          </ul>

          <h3>3.1 Metadata: the quiet truth-teller</h3>
          <p>
            Metadata is &quot;data about the data.&quot; For agent and crawler identification,
            you care about at least three layers:
          </p>

          <h4>File / media layer</h4>
          <ul>
            <li>EXIF data, container metadata (images/audio/video)</li>
            <li>C2PA provenance, content credentials</li>
            <li>Timestamps, edit history, device hints</li>
            <li><em>Gotcha:</em> easily stripped unless embedded + signed</li>
          </ul>

          <h4>Transport layer</h4>
          <ul>
            <li>HTTP headers, TLS fingerprints, ASN ranges</li>
            <li>User-Agent, model hints, API keys</li>
            <li>Rate patterns, timing, geo</li>
          </ul>

          <p>
            On its own, metadata can be spoofed. Combined with signed records, it becomes a
            strong integrity check. In PEAC, metadata is not an afterthought - effective AI
            preference policies (
            <Link href="/blog/aipref-by-ietf" style={linkStyle}>
              AIPREF
            </Link>
            ) are discovered and snapshotted into every record, so audits are self-contained.
          </p>

          <h3>3.2 Model fingerprints: which model touched this</h3>
          <p>
            Model fingerprinting tries to answer:{' '}
            <em>which model family or vendor produced this artifact?</em>
          </p>
          <ul>
            <li>
              <strong>Risk and compliance.</strong> Some models may be disallowed for regulated
              data.
            </li>
            <li>
              <strong>Attribution and economics.</strong> Different pricing for different model
              types.
            </li>
            <li>
              <strong>Cross-checking claims.</strong> Detect mismatches between claims and
              reality.
            </li>
          </ul>
          <p>
            In Originary&apos;s world, model fingerprints feed into policy and records: policies
            can say &quot;allow research use from approved models, block others.&quot; Records
            include which model was declared at access time.
          </p>

          <h3>3.3 Access: every AI call as a verifiable event</h3>
          <p>
            This is the most undervalued pillar. Traditional logs tell you IP, path, timestamp.{' '}
            <strong>That is not enough for AI agents and 402-style paid access.</strong>
          </p>
          <p>In a PEAC-aware environment, each AI call becomes a structured, signed event:</p>
          <pre style={codeBlock}>
{`agent_id         -> which agent or client called you
agent_type       -> crawler, copilot, aggregator, training pipeline
model_id         -> declared model family in use
policy_version   -> which policy applied
enforcement      -> e.g. http-402 for payment-gated access
payment          -> rail, amount, currency, provider evidence
aipref           -> snapshot of AI usage preferences in effect
issued_at        -> when the record was generated`}
          </pre>
          <div style={pullQuote}>
            Instead of &quot;we think an AI scraped our site,&quot; you can say:{' '}
            <strong>
              &quot;Agent X, using model Y, accessed resources A, B, C on these dates, under
              policy Z, via HTTP 402, and paid this amount. Here is the signed record.&quot;
            </strong>
          </div>
          <p>
            The PEAC kernel signs records using Ed25519 and ships them in a{' '}
            <code>PEAC-Receipt</code> header, ready for offline or online verification.
          </p>

          <h3>3.4 Artifact repository: cases, not random files</h3>
          <p>
            Once you have detection and rich access events, you need somewhere to put them. An{' '}
            <strong>artifact repository</strong> is:
          </p>
          <ul>
            <li>
              A structured library of artifacts: requests, responses, media, forensics, and
              records.
            </li>
            <li>Grouped into cases or projects: incidents, audits, fraud investigations.</li>
            <li>Enriched with metadata, fingerprints, and PEAC records.</li>
          </ul>
          <p>
            This lets banks, insurers, publishers, and regulators reconstruct what happened, show
            chain-of-custody evidence for review, and re-run analyses when policies change.
            Originary&apos;s goal: your live AI traffic and artifact repository are two views of
            the same records layer.
          </p>

          <h2>4. How Originary + PEAC change agent and crawler identification in practice</h2>

          <h3>4.1 Publish policies that agents can actually read</h3>
          <p>
            Every PEAC-aware service exposes a discovery file at{' '}
            <code>/.well-known/peac.txt</code> that advertises protocol version, payment rails,
            record requirements, and verification endpoints.
          </p>
          <p>
            AIPREF policies describe how your content may be used. These are snapshotted into
            every record.{' '}
            <strong>AI agents can no longer pretend they did not know your terms.</strong>
          </p>

          <h3>4.2 Enforce and measure with HTTP 402 and records</h3>
          <p>
            When an AI agent hits a protected resource, it receives an{' '}
            <Link href="/blog/http-402-for-apis" style={linkStyle}>
              HTTP 402 Payment Required
            </Link>{' '}
            response. Once the agent pays or proves entitlement, the PEAC kernel issues a signed
            record binding: what was accessed, who accessed it, which policy applied, and payment
            details.
          </p>
          <p>
            Agent and crawler identification becomes not just &quot;yes, that looked like a
            bot&quot; but{' '}
            <strong>
              &quot;yes, that bot paid, under these terms, here is the verified record.&quot;
            </strong>
          </p>

          <h3>4.3 Give good agents a way to prove they are good</h3>
          <p>
            Most serious AI agents want a clean way to respect content owners. Originary + PEAC
            give them that path: pre-fetch <code>peac.txt</code>, integrate 402 flows, attach
            records when passing data downstream.
          </p>
          <p>
            That is agent and crawler identification as{' '}
            <strong>positive infrastructure</strong> rather than only defensive heuristics.
          </p>

          <h3>4.4 Make bad or ambiguous agents stand out</h3>
          <p>
            Once good agents follow rules and produce records, what remains is easier to handle:
            crawlers ignoring <code>peac.txt</code>, tools spoofing user-agents, traffic with no
            records. These become clear anomalies.{' '}
            <strong>
              You can throttle, block, or address based on evidence rather than suspicion.
            </strong>
          </p>

          <h2>5. What PEAC does not do</h2>
          <ul>
            <li>PEAC does not run a model registry, score agents, or rank crawlers.</li>
            <li>PEAC does not classify traffic; classifiers and fingerprints stay where they are.</li>
            <li>PEAC does not block, throttle, or enforce; those decisions stay with the operator.</li>
            <li>PEAC does not assert an agent identity is &quot;real&quot;; it carries a signed record of what each agent attested at the boundary.</li>
            <li>PEAC does not replace your WAF, edge rules, or fraud platform; it produces a portable signed record alongside them.</li>
          </ul>

          <h2>6. Where this is going next</h2>
          <p>
            This post is the high-level overview. We will follow up with a focused series on
            metadata, access events, fingerprinting, and artifact repositories.
          </p>
          <p><strong>Explore the building blocks:</strong></p>
          <ul>
            <li>
              <Link href="/blog/aipref-by-ietf" style={linkStyle}>
                AIPREF
              </Link>{' '}
              - machine-readable AI usage preferences.
            </li>
            <li>
              <Link href="/blog/what-is-http-402" style={linkStyle}>
                x402 / HTTP 402
              </Link>{' '}
              - payment gating for machine actions.
            </li>
            <li>
              <Link href="/peac" style={linkStyle}>
                PEAC records
              </Link>{' '}
              - verifiable access records.
            </li>
          </ul>
        </ArticleDoc>

        <ArticleRelated
          links={[
            { label: 'From detection to settlement', href: '/blog/from-detection-to-settlement-ai-paywall-peac-http-402' },
            { label: 'AIPREF: AI Usage Preferences', href: '/blog/aipref-by-ietf' },
            { label: 'HTTP 402 for APIs', href: '/blog/http-402-for-apis' },
            { label: 'robots.txt (RFC 9309) deep dive', href: '/blog/robots-txt-rfc-9309' },
          ]}
        />
      </PageShell>
    </>
  )
}

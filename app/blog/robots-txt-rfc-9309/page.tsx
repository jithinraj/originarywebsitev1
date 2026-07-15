import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell, ArticleDoc, ArticleRelated, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'robots.txt (RFC 9309) Deep Dive | Originary' },
  description:
    'Technical deep dive into RFC 9309, the standardized Robots Exclusion Protocol. Matching rules, error handling, and AIPREF integration.',
  authors: [{ name: 'Jithin Raj, Founder' }],
  openGraph: {
    type: 'article',
    title: "robots.txt (RFC 9309): The Web's Crawl Access Control",
    description:
      'Understanding RFC 9309, the standardized Robots Exclusion Protocol and its relationship to AIPREF.',
    url: '/blog/robots-txt-rfc-9309',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'robots.txt RFC 9309' }],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: "robots.txt (RFC 9309): The Web's Crawl Access Control",
    description: 'Understanding RFC 9309 - the standardized Robots Exclusion Protocol.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: { canonical: '/blog/robots-txt-rfc-9309' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "robots.txt (RFC 9309): The Web's Crawl Access Control",
  description: 'A technical deep dive into RFC 9309, the standardized Robots Exclusion Protocol.',
  author: { '@type': 'Organization', name: 'Originary' },
  publisher: {
    '@type': 'Organization',
    name: 'Originary',
    logo: { '@type': 'ImageObject', url: 'https://www.originary.xyz/logo/originary-wordmark.svg' },
  },
  mainEntityOfPage: 'https://www.originary.xyz/blog/robots-txt-rfc-9309',
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

export default function RobotsTxtRFC9309Article() {
  return (
    <>
      <Script id="article-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
      <PageShell>
        <ArticleDoc
          category="technical"
          title="robots.txt (RFC 9309): crawl access control for the web"
          sub="RFC 9309 standardizes the Robots Exclusion Protocol, defining how publishers control crawler access to their content. This guide covers the specification's technical details, matching rules, error handling, and how it complements AIPREF usage preferences."
          author="Jithin Raj, Founder"
          date="2025-10-14"
          readTime="5 min read"
          parent={{ label: 'Blog', href: '/blog' }}
        >
          <div style={callout}>
            <strong>Summary.</strong> The Robots Exclusion Protocol, standardized as RFC 9309 in
            September 2022, is the web&apos;s mechanism for <strong>crawl access control</strong>.
            It tells automated clients (crawlers, bots, agents) which URL paths they may fetch
            from an origin.
            <br />
            <br />
            <strong>Critical:</strong> robots.txt is not access authorization or security. It is a
            cooperative signal. Listing paths in robots.txt makes them discoverable. Use real
            authentication for sensitive resources.
            <br />
            <br />
            RFC 9309 clarifies syntax, matching rules, error handling, and caching behavior that
            were ambiguous in the original 1994 specification. AIPREF builds on this foundation
            by adding usage preference semantics via HTTP headers and robots.txt directives.
          </div>

          <div style={callout}>
            <strong>Who this is for.</strong> Publishers, platform operators, and developers who
            run origin servers and need a clear, RFC 9309-accurate reference for crawl access
            control, plus a path to layer AI usage preferences on top through AIPREF without
            mixing access semantics with usage semantics.
          </div>

          <h2>What RFC 9309 standardizes</h2>

          <h3>Location and format</h3>
          <ul>
            <li>Served at <code>/robots.txt</code> from the origin root.</li>
            <li>Must be UTF-8 encoded.</li>
            <li>Content-Type must be <code>text/plain</code>.</li>
            <li>File size should be parseable up to at least 500 kibibytes.</li>
            <li>
              The path <code>/robots.txt</code> is{' '}
              <strong>always implicitly allowed</strong>.
            </li>
          </ul>

          <h3>Groups and rules</h3>
          <p>A robots.txt file consists of one or more <strong>groups</strong>. Each group:</p>
          <ul>
            <li>
              Begins with one or more <code>User-agent:</code> lines specifying which crawlers the
              rules apply to.
            </li>
            <li>
              Contains <code>Allow:</code> and <code>Disallow:</code> rules for URL path patterns.
            </li>
            <li>User-agent matching is case-insensitive.</li>
            <li>
              If no applicable group is found,{' '}
              <strong>all access is allowed by default</strong>.
            </li>
          </ul>

          <h3>Matching rules</h3>
          <p>RFC 9309 defines precise matching behavior:</p>
          <ul>
            <li>
              <strong>Case-sensitive path matching.</strong> <code>/private</code> is not the same
              as <code>/Private</code>.
            </li>
            <li>
              <strong>Longest match wins.</strong> Most specific rule applies when multiple
              patterns match.
            </li>
            <li>
              <strong>Wildcard <code>*</code>.</strong> Matches zero or more characters.
            </li>
            <li>
              <strong>End anchor <code>$</code>.</strong> Matches end of URL path.
            </li>
            <li>
              <strong>When Allow and Disallow have equal specificity.</strong> Allow takes
              precedence.
            </li>
            <li>
              <strong>Comments.</strong> Lines starting with <code>#</code> are ignored.
            </li>
          </ul>

          <h2>Fetch errors and caching</h2>
          <p>RFC 9309 provides clear guidance for handling fetch errors and caching:</p>

          <h3><code>4xx</code> status</h3>
          <p>
            <strong>Meaning:</strong> file unavailable or does not exist.{' '}
            <strong>Crawler behavior:</strong> crawler MAY access any resources (no restrictions).
          </p>

          <h3><code>5xx</code> status</h3>
          <p>
            <strong>Meaning:</strong> server or network error.{' '}
            <strong>Crawler behavior:</strong> treat as complete disallow until reachable.
          </p>

          <h3>Redirects</h3>
          <p>
            <strong>Meaning:</strong> file has moved.{' '}
            <strong>Crawler behavior:</strong> follow up to a reasonable limit, evaluate in origin
            context.
          </p>

          <h3>Caching</h3>
          <p>
            <strong>Meaning:</strong> avoid frequent refetches.{' '}
            <strong>Crawler behavior:</strong> cache up to 24 hours; may extend if unreachable;
            standard HTTP cache-control applies.
          </p>

          <div style={warning}>
            <strong>Important: 4xx vs 5xx semantics.</strong> A <code>404 Not Found</code> means
            &quot;no restrictions&quot; - crawlers may proceed. A{' '}
            <code>503 Service Unavailable</code> means &quot;assume everything is disallowed&quot;
            until the file is reachable. This distinction is critical for proper crawler behavior.
          </div>

          <h2>What robots.txt does NOT do</h2>
          <p>
            <strong>Security warning.</strong> RFC 9309 explicitly states:{' '}
            <strong>&quot;These rules are not a form of access authorization.&quot;</strong>
          </p>
          <ul>
            <li>
              <strong>It does not provide authentication or authorization.</strong> Malicious
              actors can ignore robots.txt. Use proper authentication (passwords, tokens,
              sessions) for sensitive resources.
            </li>
            <li>
              <strong>Listing paths exposes them publicly.</strong> A line like{' '}
              <code>Disallow: /admin/</code> tells everyone your admin panel is at{' '}
              <code>/admin/</code>.
            </li>
            <li>
              <strong>It does not control usage after access.</strong> robots.txt only controls
              whether a crawler <em>fetches</em> content. It says nothing about training,
              indexing, or other downstream usage. That is where AIPREF comes in.
            </li>
          </ul>

          <h2>How AIPREF complements robots.txt</h2>
          <p>
            RFC 9309 handles crawl access. AIPREF (draft-ietf-aipref-attach) adds usage preference
            semantics. They work together:
          </p>

          <h3>robots.txt role</h3>
          <p>
            Controls <strong>which URL paths</strong> crawlers may fetch. Binary yes/no decision
            per path.
          </p>

          <h3>AIPREF role</h3>
          <p>
            Expresses <strong>how content may be used</strong> after access (training, search,
            etc.) via <code>Content-Usage</code> headers and robots.txt directives.
          </p>

          <h3>Combined example</h3>
          <pre style={codeBlock}>
{`User-agent: *
Allow: /
Disallow: /internal/
Content-Usage: train-ai=n
Content-Usage: /public/ train-ai=y`}
          </pre>
          <p>
            This configuration keeps <code>/internal/</code> off limits to crawlers (RFC 9309),
            while expressing usage preferences: default no AI training, but training allowed for{' '}
            <code>/public/</code> (AIPREF). The AIPREF draft explicitly{' '}
            <strong>updates RFC 9309</strong> to add the <code>Content-Usage</code> directive.
          </p>

          <h2>Copy-paste cookbook</h2>

          <h3>1. Minimal allow all</h3>
          <pre style={codeBlock}>
{`User-agent: *
Allow: /`}
          </pre>
          <p>Explicitly allows all crawlers to access all paths.</p>

          <h3>2. Block subtree with carve-out</h3>
          <pre style={codeBlock}>
{`User-agent: *
Disallow: /private/
Allow: /private/press/`}
          </pre>
          <p>
            Blocks <code>/private/</code> but allows <code>/private/press/</code> (longest match
            wins).
          </p>

          <h3>3. Wildcards and end anchors</h3>
          <pre style={codeBlock}>
{`User-agent: *
Disallow: *.bak$
Disallow: /tmp/*
Allow: /tmp/public/`}
          </pre>
          <p>
            <code>*</code> matches any characters, <code>$</code> anchors to end of path.
          </p>

          <h3>4. Target specific crawler</h3>
          <pre style={codeBlock}>
{`User-agent: GPTBot
Disallow: /

User-agent: *
Allow: /`}
          </pre>
          <p>Blocks GPTBot specifically while allowing all other crawlers.</p>

          <h3>5. Combine crawl control with AIPREF preferences</h3>
          <pre style={codeBlock}>
{`User-agent: *
Allow: /
Disallow: /private/
Content-Usage: train-ai=n, search=y
Content-Usage: /research/ train-ai=y`}
          </pre>
          <p>
            Combines RFC 9309 crawl rules with AIPREF usage preferences for path-specific control.
          </p>

          <h2>Quick testing checklist</h2>
          <ol>
            <li>
              <strong>Verify file is accessible:</strong>
              <pre style={codeBlock}>{`curl -sI https://example.com/robots.txt`}</pre>
              Should return <code>200 OK</code> with <code>Content-Type: text/plain</code>.
            </li>
            <li>
              <strong>Check UTF-8 encoding.</strong> Ensure file is saved as UTF-8, not Latin-1 or
              other encodings.
            </li>
            <li>
              <strong>Validate rule precedence.</strong> Test URLs where Allow and Disallow
              patterns overlap to confirm longest-match behavior.
            </li>
            <li>
              <strong>Test error scenarios.</strong> Verify 4xx returns allow-all behavior, 5xx
              returns disallow-all.
            </li>
            <li>
              <strong>If using AIPREF.</strong> Confirm <code>Content-Usage</code> lines are
              within the correct group and properly formatted.
            </li>
          </ol>

          <h2>Non-standard extensions</h2>
          <div style={warning}>
            <p>
              Some crawlers support additional directives that are <strong>not part of RFC 9309</strong>:
            </p>
            <ul>
              <li>
                <code>Crawl-delay:</code> - Rate limiting (supported by some crawlers, not standard).
              </li>
              <li>
                <code>Sitemap:</code> - Sitemap location (widely supported, not in RFC 9309).
              </li>
              <li>
                <code>Host:</code> - Preferred host (not standard).
              </li>
            </ul>
            <p style={{ marginTop: 8, marginBottom: 0, fontSize: 13, color: PALETTE.muted }}>
              Use these with caution. They may be ignored by some crawlers and are not guaranteed
              to work consistently.
            </p>
          </div>

          <h2>What PEAC does not do</h2>
          <ul>
            <li>PEAC does not author or maintain RFC 9309; that work belongs to the IETF.</li>
            <li>PEAC does not enforce robots.txt upstream of the publisher; enforcement stays at the origin and its infrastructure.</li>
            <li>PEAC does not block crawlers, throttle requests, or replace WAF, CDN, or auth rules.</li>
            <li>PEAC does not assert that a crawler obeyed robots.txt; it carries a signed record of what the agent attested at the boundary.</li>
            <li>PEAC does not replace AIPREF; it composes with AIPREF so adherence can be recorded and verified offline.</li>
          </ul>

          <h2>Bottom line</h2>
          <div style={callout}>
            <p>
              Keep robots.txt as your durable control surface for crawler access. RFC 9309 makes
              the rules predictable under redirects, errors, and caching.
            </p>
            <p>
              Use AIPREF to express <strong>how</strong> content may be used after access.
              Together, they reduce ambiguity for publishers and responsible crawlers.
            </p>
            <p style={{ margin: 0 }}>
              Remember: robots.txt is cooperative signaling, not security. Use real authentication
              for sensitive resources.
            </p>
          </div>

          <h2>Further reading</h2>
          <ul>
            <li>
              <a
                href="https://www.rfc-editor.org/rfc/rfc9309.html"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                RFC 9309: Robots Exclusion Protocol
              </a>{' '}
              - official IETF specification (September 2022).
            </li>
            <li>
              <a
                href="https://datatracker.ietf.org/doc/html/rfc9309"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                RFC 9309 on IETF Datatracker
              </a>{' '}
              - full text with errata and discussion.
            </li>
            <li>
              <a
                href="https://datatracker.ietf.org/doc/draft-ietf-aipref-attach/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                AIPREF Attachment Specification
              </a>{' '}
              - how AIPREF extends RFC 9309 with Content-Usage.
            </li>
            <li>
              <Link href="/blog/aipref-by-ietf" style={linkStyle}>
                AIPREF: AI Usage Preferences
              </Link>{' '}
              - comprehensive guide to the AIPREF specification.
            </li>
          </ul>
        </ArticleDoc>

        <ArticleRelated
          links={[
            { label: 'AIPREF: AI Usage Preferences', href: '/blog/aipref-by-ietf' },
            { label: 'PEAC Protocol overview', href: '/peac' },
            { label: 'Contact', href: '/contact' },
          ]}
        />
      </PageShell>
    </>
  )
}

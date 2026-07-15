import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell, ArticleDoc, ArticleRelated, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'AIPREF: AI Usage Preferences by IETF | Originary' },
  description:
    'Understanding the IETF AIPREF specification for AI usage preferences through HTTP headers and robots.txt. Implementation guide.',
  authors: [{ name: 'Originary Team' }],
  openGraph: {
    type: 'article',
    title: 'AIPREF: A Common Language for AI Usage Preferences',
    description:
      'Understanding the IETF AIPREF specification for expressing AI usage preferences through HTTP headers and robots.txt.',
    url: '/blog/aipref-by-ietf',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'AIPREF: AI Usage Preferences' }],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIPREF: A Common Language for AI Usage Preferences',
    description: 'Understanding the IETF AIPREF specification for expressing AI usage preferences.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: { canonical: '/blog/aipref-by-ietf' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AIPREF: A Common Language for AI Usage Preferences',
  description:
    'Understanding the IETF AIPREF specification for expressing AI usage preferences through HTTP headers and robots.txt.',
  author: { '@type': 'Organization', name: 'Originary' },
  publisher: {
    '@type': 'Organization',
    name: 'Originary',
    logo: { '@type': 'ImageObject', url: 'https://www.originary.xyz/logo/originary-wordmark.svg' },
  },
  datePublished: '2025-10-14',
  dateModified: '2025-10-14',
  mainEntityOfPage: 'https://www.originary.xyz/blog/aipref-by-ietf',
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

export default function AIPREFArticle() {
  return (
    <>
      <Script id="article-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
      <PageShell>
        <ArticleDoc
          category="technical"
          title="AIPREF: a common language for AI usage preferences"
          sub="The IETF AIPREF working group is developing a standardized way for publishers to express how their content should be used by automated systems. Here is what it is, how it works, and how to implement it today."
          author="Originary Team"
          date="2025-10-14"
          readTime="6 min read"
          parent={{ label: 'Blog', href: '/blog' }}
        >
          <div style={callout}>
            <strong>Who this is for.</strong> Publishers, content platforms, and infrastructure
            teams who want a vendor-neutral way to declare AI usage preferences in HTTP and
            robots.txt, and a verifiable record that downstream agents observed those preferences.
          </div>

          <p>
            As AI systems increasingly rely on web content for training and operation, publishers
            need a clear, standardized way to communicate their usage preferences. The IETF AI
            Preferences (AIPREF) working group addresses this need by defining both a vocabulary
            for expressing usage preferences and mechanisms for attaching those preferences to
            content.
          </p>
          <p>
            Unlike informal conventions or platform-specific controls, AIPREF provides an
            Internet-scale standard that works across the HTTP ecosystem. It builds on existing
            infrastructure (robots.txt, HTTP headers) while introducing purpose-specific semantics
            that robots.txt alone cannot provide.
          </p>

          <h2>What is AIPREF?</h2>
          <p>AIPREF consists of two complementary specifications currently in draft at the IETF:</p>

          <h3>1. Vocabulary specification (draft-ietf-aipref-vocab)</h3>
          <p>
            Defines a structured vocabulary for expressing preferences about how content should be
            used by automated systems. The vocabulary includes categories like <code>bots</code>,{' '}
            <code>train-ai</code>, <code>train-genai</code>, and <code>search</code>, with allow
            (<code>y</code>) or disallow (<code>n</code>) values.
          </p>
          <p><em>Latest cited version at writing: draft-ietf-aipref-vocab-06. AIPREF is an active IETF working-group effort; check the working group page for the current draft before integrating.</em></p>

          <h3>2. Attachment specification (draft-ietf-aipref-attach)</h3>
          <p>
            Specifies how to associate preferences with content using HTTP headers and robots.txt.
            This includes the <code>Content-Usage</code> HTTP header field and updates to RFC 9309
            (robots.txt) to support preference directives.
          </p>
          <p><em>Latest version: draft-ietf-aipref-attach-03 (September 2025)</em></p>

          <h2>Usage categories</h2>
          <p>The vocabulary defines four primary categories, organized hierarchically:</p>

          <h3>Automated processing (<code>bots</code>)</h3>
          <p>
            The broadest category covering all automated processing of content. This is the
            parent category for more specific usage types.
          </p>
          <p>
            <em>Use case:</em> Blanket permission or restriction for any automated access.
          </p>

          <h3>AI training (<code>train-ai</code>)</h3>
          <p>
            A subset of automated processing specifically for training machine learning models.
            This includes both generative and non-generative AI systems.
          </p>
          <p>
            <em>Use case:</em> Allow search indexing but restrict model training.
          </p>

          <h3>Generative AI training (<code>train-genai</code>)</h3>
          <p>
            A subset of AI training focused specifically on training models that generate
            synthetic content (text, images, audio, etc.).
          </p>
          <p>
            <em>Use case:</em> Allow classification models but restrict generative models.
          </p>

          <h3>Search (<code>search</code>)</h3>
          <p>
            Content indexing and discovery for search applications that direct users to original
            content locations.
          </p>
          <p>
            <em>Use case:</em> Maintain search visibility while restricting AI training.
          </p>

          <div style={callout}>
            <strong>Hierarchical inheritance.</strong> Categories inherit from their parents. If
            you set <code>bots=n</code> but do not specify <code>search</code>, search will
            inherit the disallow preference. However, explicit values always override inherited
            ones: <code>bots=n, search=y</code> allows search while disallowing other automated
            processing.
          </div>

          <h2>How to attach preferences</h2>
          <p>AIPREF defines two mechanisms for associating preferences with content:</p>

          <h3>1. HTTP Content-Usage header</h3>
          <p>
            The most granular method. Add the <code>Content-Usage</code> header to HTTP responses
            to specify preferences for specific resources:
          </p>
          <pre style={codeBlock}>
{`HTTP/1.1 200 OK
Content-Type: text/html
Content-Usage: train-ai=n

<!DOCTYPE html>
<html>...</html>`}
          </pre>

          <h4>Implementation examples</h4>
          <p><strong>Nginx</strong></p>
          <pre style={codeBlock}>
{`location / {
  add_header Content-Usage "train-ai=n" always;
}`}
          </pre>

          <p><strong>Apache (.htaccess)</strong></p>
          <pre style={codeBlock}>
{`<IfModule mod_headers.c>
  Header set Content-Usage "train-ai=n"
</IfModule>`}
          </pre>

          <p><strong>Express.js</strong></p>
          <pre style={codeBlock}>
{`app.use((req, res, next) => {
  res.setHeader('Content-Usage', 'train-ai=n');
  next();
});`}
          </pre>

          <p><strong>Cloudflare Workers</strong></p>
          <pre style={codeBlock}>
{`export default {
  async fetch(request) {
    const response = await fetch(request);
    const headers = new Headers(response.headers);
    headers.set('Content-Usage', 'train-ai=n');
    return new Response(response.body, {
      headers,
      status: response.status
    });
  }
};`}
          </pre>

          <h3>2. robots.txt Content-Usage directive</h3>
          <p>
            For path-scoped preferences, add <code>Content-Usage</code> directives to your
            robots.txt file:
          </p>
          <pre style={codeBlock}>
{`User-Agent: *
Allow: /
Content-Usage: train-ai=n

User-Agent: *
Allow: /public-research/
Content-Usage: /public-research/ train-ai=y, train-genai=n`}
          </pre>

          <div style={callout}>
            <strong>Path matching rules.</strong> The robots.txt mechanism uses longest-prefix
            matching. If a resource path matches multiple <code>Content-Usage</code> directives,
            the one with the longest matching path prefix applies. This allows you to set
            site-wide defaults and override them for specific paths.
          </div>

          <h2>Preference resolution rules</h2>
          <p>
            When preferences come from multiple sources or specify overlapping categories, AIPREF
            defines clear resolution rules:
          </p>

          <h3>1. Explicit values win</h3>
          <p>
            An explicit <code>y</code> or <code>n</code> for a category takes precedence over
            inherited values from parent categories.
          </p>

          <h3>2. Specific overrides general</h3>
          <p>
            More specific categories override broader ones. If <code>train-genai</code> is not
            specified, it inherits from <code>train-ai</code>, which inherits from{' '}
            <code>bots</code>.
          </p>

          <h3>3. Multiple sources: disallow wins</h3>
          <p>
            When combining preferences from HTTP headers and robots.txt, if any source indicates{' '}
            <code>n</code> (disallow), the usage is disallowed. Otherwise, if any indicates{' '}
            <code>y</code> (allow), it is allowed.
          </p>

          <h3>4. Unknown is valid</h3>
          <p>
            If a category is not specified and cannot be inherited, the preference is
            &quot;unknown.&quot; This is a valid state - not every publisher needs to express
            preferences for every category.
          </p>

          <div style={callout}>
            <strong>Example resolution.</strong> Given:{' '}
            <code>bots=y, train-ai=n, train-genai=y</code>
            <ul style={{ margin: '8px 0 0 0', paddingLeft: 20 }}>
              <li><code>bots</code>: allow (explicit)</li>
              <li><code>train-ai</code>: disallow (explicit, overrides parent)</li>
              <li><code>train-genai</code>: allow (explicit, overrides parent train-ai)</li>
              <li><code>search</code>: allow (inherits from bots)</li>
            </ul>
          </div>

          <h2>Practical considerations</h2>

          <h3>Work in progress</h3>
          <p>
            AIPREF is currently in draft status at the IETF. While the core concepts are stable,
            details may change before final standardization. Early adopters should track the
            working group&apos;s progress and be prepared to update implementations.
          </p>
          <p>
            <em>Draft versions cited at writing:</em> draft-ietf-aipref-vocab-06 and
            draft-ietf-aipref-attach. AIPREF is moving; always check the IETF working group page
            for the current revisions before relying on specific identifier names or syntax in
            production.
          </p>

          <h3>No built-in enforcement</h3>
          <p>
            AIPREF provides a mechanism for expressing preferences, not enforcing them. The
            specification does not define compliance mechanisms, auditing, or consequences for
            ignoring preferences. Publishers seeking enforcement should layer AIPREF with
            contracts, terms of service, or technical access controls.
          </p>

          <h3>Legal context matters</h3>
          <p>
            The specification explicitly notes that preferences do not automatically create legal
            rights. Recognized priorities (accessibility, security, legal obligations) may
            override preferences. For example:
          </p>
          <ul>
            <li>
              Accessibility tools may ignore <code>bots=n</code> to serve users with disabilities.
            </li>
            <li>Security researchers may process content despite restrictions.</li>
            <li>Existing licensing agreements supersede AIPREF preferences.</li>
          </ul>

          <h3>Relationship to other signals</h3>
          <p>AIPREF complements rather than replaces existing mechanisms:</p>

          <h4>robots.txt (RFC 9309)</h4>
          <p>
            Handles crawl access control. AIPREF extends robots.txt with purpose semantics but
            does not replace its core function of controlling crawler access.
          </p>

          <h4>ai.txt</h4>
          <p>
            An informal convention for AI-specific permissions. AIPREF provides a standardized
            alternative with formal IETF backing and richer semantics.
          </p>

          <h4>C2PA / Content Credentials</h4>
          <p>
            Handles content provenance and authenticity. AIPREF expresses usage preferences; C2PA
            verifies content lineage. They work together: AIPREF states the rules, C2PA provides
            records of what was accessed.
          </p>

          <h2>Implementation roadmap</h2>
          <p>For organizations looking to adopt AIPREF today:</p>

          <h3>Phase 1: express baseline preferences</h3>
          <p>
            Start with robots.txt directives for site-wide or path-based preferences. This
            requires minimal infrastructure changes and provides broad coverage.
          </p>
          <pre style={codeBlock}>
{`User-Agent: *
Content-Usage: train-genai=n, search=y`}
          </pre>

          <h3>Phase 2: add HTTP header support</h3>
          <p>
            Implement <code>Content-Usage</code> headers at your CDN, reverse proxy, or
            application layer. This enables resource-specific preferences and more granular
            control.
          </p>

          <h3>Phase 3: document and communicate</h3>
          <p>
            Publish your AIPREF policy in human-readable form. Link to it from your terms of
            service. Make it clear to AI system operators what your preferences are and why.
          </p>

          <h3>Phase 4: monitor and enforce</h3>
          <p>
            Track which systems respect your preferences. Consider pairing AIPREF with technical
            access controls (authentication, rate limiting) and legal agreements (licenses, terms
            of service) for enforcement.
          </p>

          <h2>What PEAC does not do</h2>
          <ul>
            <li>PEAC does not author AIPREF; AIPREF is an IETF working-group effort and any cited drafts evolve independently.</li>
            <li>PEAC does not enforce AIPREF upstream of the publisher; enforcement stays with the publisher and its infrastructure.</li>
            <li>PEAC does not assert that an agent obeyed a preference; it carries a signed record of what the agent attested at the boundary.</li>
            <li>PEAC does not replace robots.txt, terms of service, licensing agreements, or legal review.</li>
          </ul>

          <h2>Originary&apos;s position</h2>
          <p>
            We support the IETF AIPREF effort and view it as a critical piece of infrastructure
            for the agentic web. Standardized, machine-readable preference signals reduce
            friction, improve transparency, and create conditions for responsible AI development
            at Internet scale.
          </p>
          <p>
            Originary reads AIPREF preferences where publishers expose them and pairs preference
            signals with signed records, so publishers can produce verifiable records of how
            their content was accessed and used. See{' '}
            <Link href="/peac" style={linkStyle}>
              the PEAC Protocol overview
            </Link>{' '}
            for the records model and{' '}
            <Link href="/blog/robots-txt-rfc-9309" style={linkStyle}>
              the RFC 9309 guide
            </Link>{' '}
            for how AIPREF composes with crawl access control.
          </p>
          <p>
            As the specification matures, we will continue to track the working group&apos;s
            progress and update our implementations to stay aligned with the final standard.
          </p>

          <h2>Further reading</h2>
          <ul>
            <li>
              <a
                href="https://ietf-wg-aipref.github.io/drafts/draft-ietf-aipref-vocab.html"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                AIPREF Vocabulary Specification
              </a>{' '}
              - draft-ietf-aipref-vocab; official IETF working draft.
            </li>
            <li>
              <a
                href="https://ietf-wg-aipref.github.io/drafts/draft-ietf-aipref-attach.html"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                AIPREF Attachment Specification
              </a>{' '}
              - draft-ietf-aipref-attach; HTTP and robots.txt integration.
            </li>
            <li>
              <a
                href="https://datatracker.ietf.org/wg/aipref/about/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                IETF AIPREF Working Group
              </a>{' '}
              - official working group page and charter.
            </li>
            <li>
              <a
                href="https://spec.c2pa.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                C2PA Content Credentials
              </a>{' '}
              - content provenance and authenticity framework.
            </li>
          </ul>
        </ArticleDoc>

        <ArticleRelated
          links={[
            { label: 'robots.txt (RFC 9309) deep dive', href: '/blog/robots-txt-rfc-9309' },
            { label: 'PEAC Protocol overview', href: '/peac' },
            { label: 'Contact', href: '/contact' },
          ]}
        />
      </PageShell>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell, ArticleDoc, ArticleRelated, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'Policy, Consent and Attribution | Originary' },
  description:
    'How publishers declare what agents may do with their content (AIPREF, peac.txt) and how agents prove they followed those terms.',
  authors: [{ name: 'Originary' }],
  alternates: { canonical: '/learn/ai-consent-and-attribution' },
  openGraph: {
    type: 'article',
    title: 'Policy, Consent and Attribution',
    description:
      'Machine-readable terms for AI: AIPREF, peac.txt, and signed records that prove compliance.',
    url: '/learn/ai-consent-and-attribution',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Policy, Consent and Attribution',
    description: 'Machine-readable terms for AI.',
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
      <Script
        id="article-json-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: 'Policy, Consent and Attribution',
          description:
            'How publishers declare what agents may do with their content and how agents prove they followed those terms.',
          author: { '@type': 'Organization', name: 'Originary' },
          publisher: {
            '@type': 'Organization',
            name: 'Originary',
            logo: { '@type': 'ImageObject', url: 'https://www.originary.xyz/logo/originary-wordmark.svg' },
          },
          mainEntityOfPage: 'https://www.originary.xyz/learn/ai-consent-and-attribution',
        })}
      </Script>
      <PageShell>
        <ArticleDoc
          category="learn"
          title="Policy, consent and attribution"
          sub="How publishers declare what agents may do with their content (AIPREF, peac.txt) and how agents prove they followed those terms. The gap between robots.txt and what AI actually needs."
          readTime="2 min read"
          parent={{ label: 'Learn', href: '/learn' }}
        >
          <h2>Key takeaways</h2>
          <ul>
            <li>Consent must be machine-readable for agents to respect it automatically.</li>
            <li>Attribution is recorded in signed records, creating verifiable credit chains.</li>
            <li>AIPREF (aipref.json) lets sites declare AI interaction preferences.</li>
            <li>Proper consent and attribution protects both content owners and AI operators.</li>
          </ul>

          <h2>The problem</h2>
          <p>
            The web was built for humans browsing with web browsers. Terms of service are written
            in legal English. robots.txt was designed for search engine crawlers, not AI agents
            that consume and transform content.
          </p>
          <p>This creates two problems:</p>
          <ul>
            <li>
              <strong>Content owners cannot express preferences</strong> that agents understand.
              &quot;Training: no, RAG: yes, summary: yes with attribution&quot; is not something
              robots.txt supports.
            </li>
            <li>
              <strong>Agents cannot demonstrate compliance.</strong> Even well-intentioned AI
              systems have no way to show they respected consent or provided proper attribution.
            </li>
          </ul>

          <h2>Machine-readable consent</h2>
          <p>
            Machine-readable consent means expressing permissions in formats that agents can
            parse and act on automatically. Key formats:
          </p>
          <ul>
            <li>
              <strong>AIPREF (aipref.json).</strong> A JSON file at{' '}
              <code>/.well-known/aipref.json</code> that declares AI interaction preferences:
              training permissions, RAG access, summarization rights, required attribution, and
              pricing.
            </li>
            <li>
              <strong>peac.txt.</strong> The PEAC policy file at <code>/.well-known/peac.txt</code> references aipref.json and adds payment requirements, verification endpoints, and public keys.
            </li>
            <li>
              <strong>HTTP headers.</strong> Per-request consent can be signaled via headers,
              allowing dynamic permissions based on the requesting agent&apos;s identity or
              payment status.
            </li>
          </ul>

          <h2>Attribution in practice</h2>
          <p>
            Attribution records where content came from and who produced it. In PEAC, this is
            captured through:
          </p>
          <ul>
            <li>
              <strong>Source recording.</strong> Records include the exact resource URL,
              timestamp, and content hash of accessed material.
            </li>
            <li>
              <strong>Credit chains.</strong> When Agent B uses output from Agent A, the record
              chain traces back to original sources.
            </li>
            <li>
              <strong>License compliance.</strong> Attribution requirements from AIPREF are
              embedded in signed records as verifiable commitments.
            </li>
            <li>
              <strong>Payment proof.</strong> When attribution includes compensation, payment
              evidence is cryptographically linked.
            </li>
          </ul>

          <h2>Standards and protocols</h2>
          <p>The consent and attribution ecosystem includes several complementary standards:</p>
          <ul>
            <li>
              <strong>AIPREF.</strong> AI preferences standard for declaring training, RAG, and
              usage permissions.
            </li>
            <li>
              <strong>PEAC Protocol.</strong> Policy discovery and signed records for agent
              interactions.
            </li>
            <li>
              <strong>C2PA.</strong> Content provenance standard for media authenticity and
              attribution.
            </li>
            <li>
              <strong>robots.txt.</strong> Legacy crawler control. Still useful but insufficient
              for AI agents.
            </li>
          </ul>

          <h2>Implementation</h2>
          <p>Get started with consent and attribution using Originary&apos;s tools:</p>
          <ul>
            <li>
              <Link href="/peac" style={linkStyle}>
                PEAC Protocol overview
              </Link>
            </li>
            <li>
              <Link href="/downloads" style={linkStyle}>
                Downloads (CLI, SDK)
              </Link>
            </li>
          </ul>
        </ArticleDoc>

        <ArticleRelated
          links={[
            { label: 'Verifiable interaction records', href: '/learn/ai-receipts' },
            { label: 'Agentic commerce', href: '/learn/what-is-agentic-commerce' },
            { label: 'AIPREF: AI Usage Preferences (IETF)', href: '/blog/aipref-by-ietf' },
          ]}
        />
      </PageShell>
    </>
  )
}

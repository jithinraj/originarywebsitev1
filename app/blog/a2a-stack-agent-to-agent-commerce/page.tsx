import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell, ArticleDoc, ArticleRelated, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'Portable Evidence Across Agent-to-Agent Handoffs | Originary' },
  description:
    'When one agent pays another, the record of what was authorized and delivered has to travel with the handoff: policy discovery, HTTP 402 and signed records.',
  authors: [{ name: 'Originary' }],
  alternates: { canonical: '/blog/a2a-stack-agent-to-agent-commerce' },
  openGraph: {
    title: 'The A2A Stack: Agent-to-Agent Commerce',
    description: 'How AI agents coordinate, transact, and verify interactions using PEAC Protocol.',
    type: 'article',
    url: '/blog/a2a-stack-agent-to-agent-commerce',
    publishedTime: '2025-12-03',
    authors: ['Originary'],
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The A2A Stack: Agent-to-Agent Commerce',
    description: 'How AI agents coordinate, transact, and verify interactions.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'The A2A Stack: Agent-to-Agent Commerce',
  description:
    'How AI agents coordinate, transact, and verify interactions with each other using PEAC Protocol, HTTP 402, and verifiable receipts.',
  author: { '@type': 'Organization', name: 'Originary', url: 'https://www.originary.xyz' },
  datePublished: '2025-12-03',
  dateModified: '2025-12-03',
  publisher: {
    '@type': 'Organization',
    name: 'Originary',
    logo: { '@type': 'ImageObject', url: 'https://www.originary.xyz/brand/wordmark/originary-wordmark.svg' },
  },
  mainEntityOfPage: 'https://www.originary.xyz/blog/a2a-stack-agent-to-agent-commerce',
}

const linkStyle = {
  color: PALETTE.ink,
  textDecoration: 'underline',
  textDecorationColor: 'var(--rule)',
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
          category="vision"
          title="Portable evidence across agent-to-agent handoffs"
          sub="When one agent pays another for work, each operator needs a record of what was paid for and what came back, and that record has to travel with the handoff."
          author="Originary"
          date="2025-12-03"
          readTime="2 min read"
          parent={{ label: 'Blog', href: '/blog' }}
        >
          <h2>What an agent has to answer before it hands off work</h2>
          <p>
            Suppose Agent A needs a document translated by Agent B, a service another company runs,
            and the service charges per request. Before Agent A can hand off the work, it has to
            answer:
          </p>
          <ul>
            <li>How to discover AI policy and pricing?</li>
            <li>How to pay without human intervention?</li>
            <li>How to verify work was performed?</li>
            <li>How to maintain audit trails?</li>
          </ul>

          <h2>The A2A stack</h2>
          <p>
            The A2A (agent-to-agent) stack describes the layers needed for autonomous agent
            commerce. Each layer addresses a specific coordination problem:
          </p>
          <ul>
            <li>
              <strong>Layer 1, AI policy discovery.</strong> Agents discover bot policy, crawling
              rules, and terms at <code>/.well-known/peac.txt</code>.
            </li>
            <li>
              <strong>Layer 2, access control (HTTP 402).</strong> Gated endpoints return 402
              with payment instructions (x402, Stripe).
            </li>
            <li>
              <strong>Layer 3, receipts.</strong> Each transaction returns a signed, verifiable
              record.
            </li>
            <li>
              <strong>Layer 4, provenance.</strong> Chain of records creates auditable lineage
              for compliance.
            </li>
          </ul>

          <h2>An A2A transaction flow</h2>
          <p>How a complete agent-to-agent transaction works with PEAC:</p>
          <ol>
            <li>
              <strong>Policy check.</strong> Agent A fetches <code>/.well-known/peac.txt</code> to
              discover crawling policy and payment options.
            </li>
            <li>
              <strong>Access request.</strong> Agent A calls Agent B&apos;s API endpoint.
            </li>
            <li>
              <strong>402 response.</strong> Agent B returns HTTP 402 with payment details.
            </li>
            <li>
              <strong>Payment.</strong> Agent A pays via configured method (x402, Stripe).
            </li>
            <li>
              <strong>Receipt.</strong> Agent B processes request and returns a signed record in
              headers.
            </li>
            <li>
              <strong>Verification.</strong> Agent A or operator verifies record at the verify
              endpoint.
            </li>
          </ol>

          <h2>Why records matter</h2>
          <p>
            In human-to-business transactions, receipts are obvious: email confirmations, PDF
            invoices, bank statements. Agent-to-agent transactions need the same thing, but
            machine-readable.
          </p>
          <ul>
            <li><strong>Record of service.</strong> A signed statement from the provider about the work it reported performing.</li>
            <li><strong>Audit trail.</strong> Operators review agent spending.</li>
            <li><strong>Review and reconciliation.</strong> Shows what the provider reported delivering.</li>
            <li><strong>Compliance.</strong> Bundled for regulatory reporting.</li>
          </ul>

          <h2>Getting started</h2>
          <p>If you are building agent infrastructure:</p>
          <ul>
            <li>
              Start with{' '}
              <Link href="/peac" style={linkStyle}>
                PEAC Protocol
              </Link>{' '}
              to declare your AI access policy.
            </li>
            <li>
              Add HTTP 402 to paid endpoints. See{' '}
              <Link href="/blog/what-is-http-402" style={linkStyle}>
                What is HTTP 402?
              </Link>
            </li>
            <li>Return signed records from your API responses.</li>
            <li>
              Use{' '}
              <Link href="/downloads" style={linkStyle}>
                Downloads (CLI, SDK)
              </Link>{' '}
              for record verification.
            </li>
          </ul>
        </ArticleDoc>

        <ArticleRelated
          links={[
            { label: 'What is HTTP 402?', href: '/blog/what-is-http-402' },
            { label: 'HTTP 402 for APIs: Technical Deep Dive', href: '/blog/http-402-for-apis' },
            { label: 'PEAC Protocol overview', href: '/peac' },
          ]}
        />
      </PageShell>
    </>
  )
}

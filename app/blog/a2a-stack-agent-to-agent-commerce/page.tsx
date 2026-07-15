import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell, ArticleDoc, ArticleRelated, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'The A2A Stack: Agent-to-Agent Commerce | Originary' },
  description:
    'How AI agents coordinate, transact, and verify interactions. The A2A stack covers policy discovery, HTTP 402 payments, and signed records.',
  keywords:
    'A2A, agent-to-agent, agent commerce, AI coordination, PEAC Protocol, HTTP 402, agent receipts, MCP, ACP, agentic web, autonomous agents',
  authors: [{ name: 'Jithin Raj, Founder' }],
  alternates: { canonical: '/blog/a2a-stack-agent-to-agent-commerce' },
  openGraph: {
    title: 'The A2A Stack: Agent-to-Agent Commerce',
    description: 'How AI agents coordinate, transact, and verify interactions using PEAC Protocol.',
    type: 'article',
    url: '/blog/a2a-stack-agent-to-agent-commerce',
    publishedTime: '2025-12-03',
    authors: ['Jithin Raj', 'Originary Team'],
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
    logo: { '@type': 'ImageObject', url: 'https://www.originary.xyz/logo/originary-wordmark.svg' },
  },
  mainEntityOfPage: 'https://www.originary.xyz/blog/a2a-stack-agent-to-agent-commerce',
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
          category="vision"
          title="Portable evidence across agent-to-agent handoffs"
          sub="Agents calling agents, paying for API access, and verifying each other&apos;s outputs. This is agent-to-agent commerce, and it needs new infrastructure."
          author="Jithin Raj, Founder"
          date="2025-12-03"
          readTime="2 min read"
          parent={{ label: 'Blog', href: '/blog' }}
        >
          <h2>The problem: agents cannot coordinate</h2>
          <p>
            AI agents are already calling APIs, browsing websites, and executing code. But when
            Agent A needs to use Agent B&apos;s service, fundamental questions arise:
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
              <strong>Layer 3, receipts.</strong> Every transaction returns a signed, verifiable
              record as proof.
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
            <li><strong>Proof of service.</strong> Cryptographic evidence of work performed.</li>
            <li><strong>Audit trail.</strong> Operators review agent spending.</li>
            <li><strong>Review and reconciliation.</strong> Shows exactly what was delivered.</li>
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

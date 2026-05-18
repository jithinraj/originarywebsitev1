import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell, ArticleDoc, ArticleRelated, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'Agentic Commerce | Originary' },
  description:
    'What happens when machines need to buy API calls, pay for content access, or settle charges with other agents.',
  authors: [{ name: 'Originary' }],
  alternates: { canonical: '/learn/what-is-agentic-commerce' },
  openGraph: {
    type: 'article',
    title: 'Agentic Commerce',
    description: 'The economic layer for AI agents.',
    url: '/learn/what-is-agentic-commerce',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic Commerce',
    description: 'The economic layer for AI agents.',
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
      <Script id="article-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: 'Agentic Commerce',
          description: 'The economic layer for AI agents.',
          author: { '@type': 'Organization', name: 'Originary' },
          publisher: {
            '@type': 'Organization',
            name: 'Originary',
            logo: { '@type': 'ImageObject', url: 'https://www.originary.xyz/logo/originary-wordmark.svg' },
          },
          mainEntityOfPage: 'https://www.originary.xyz/learn/what-is-agentic-commerce',
        })}
      </Script>
      <PageShell>
        <ArticleDoc
          category="learn"
          title="Agentic commerce"
          sub="What happens when machines need to buy API calls, pay for content access, or settle charges with other agents. Covers policy discovery, pricing headers, payment rails, and signed records."
          readTime="2 min read"
          parent={{ label: 'Learn', href: '/learn' }}
        >
          <h2>Key takeaways</h2>
          <ul>
            <li>Agentic commerce enables AI agents to autonomously buy, sell, and transact.</li>
            <li>Needs machine-readable pricing, programmatic payments, and verifiable records.</li>
            <li>Different from traditional e-commerce: no human in the loop per transaction.</li>
          </ul>

          <h2>Definition</h2>
          <p>
            <strong>Agentic commerce</strong> is what happens when AI agents need to spend
            money. An agent calls an API, the API returns a price, the agent pays, and the API
            delivers the resource with a signed record. No human clicks &quot;Buy.&quot;
          </p>
          <p>
            This is already happening: agents calling translation APIs, purchasing inference
            credits, licensing content for RAG pipelines. The infrastructure problem is making
            these transactions verifiable and auditable without requiring each agent to have a
            pre-negotiated account with each service.
          </p>

          <h2>How it works</h2>
          <p>The flow has five steps. Each one requires protocol support:</p>
          <ol>
            <li>
              <strong>Policy discovery.</strong> Agents discover available services and their
              terms via machine-readable files like <code>peac.txt</code>.
            </li>
            <li>
              <strong>Pricing negotiation.</strong> Services advertise pricing in HTTP headers;
              agents evaluate and select based on budget constraints.
            </li>
            <li>
              <strong>Payment execution.</strong> Agents make programmatic payments via HTTP
              402, cryptocurrency, or pre-authorized billing.
            </li>
            <li>
              <strong>Record generation.</strong> Every transaction produces a cryptographically
              signed record for audit and partner review.
            </li>
            <li>
              <strong>Verification.</strong> Records can be verified offline using Ed25519
              signatures. No callback to the issuer required.
            </li>
          </ol>

          <h2>Key components</h2>
          <p>A complete agentic commerce stack includes:</p>
          <ul>
            <li>
              <strong>Machine-readable pricing.</strong> Prices in HTTP headers or structured
              files. Not HTML meant for humans.
            </li>
            <li>
              <strong>Programmatic payments.</strong> Payment rails agents can invoke without
              human approval: HTTP 402, stablecoins, pre-auth billing.
            </li>
            <li>
              <strong>Verifiable records.</strong> Cryptographic proof for billing, compliance,
              and review.
            </li>
            <li>
              <strong>Budget constraints.</strong> Guardrails limiting autonomous spend (you set
              the ceiling, agent stays under it).
            </li>
          </ul>

          <h2>Use cases</h2>
          <h3>API consumption</h3>
          <p>
            Agents pay for API calls on the fly. Weather data, translation, image generation. No
            credit pre-purchase required: they pay per call as they execute tasks.
          </p>
          <h3>Content licensing</h3>
          <p>
            Per-use payments to creators for training data, stock images, reference materials.
            Attribution included.
          </p>

          <h2>Getting started</h2>
          <p>
            To enable agentic commerce for your service or agent, Originary provides
            infrastructure and tools built on open protocols:
          </p>
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
            { label: 'HTTP 402 and payment records', href: '/learn/http-402-ai-payments' },
            { label: 'A2A stack: agent-to-agent commerce', href: '/blog/a2a-stack-agent-to-agent-commerce' },
          ]}
        />
      </PageShell>
    </>
  )
}

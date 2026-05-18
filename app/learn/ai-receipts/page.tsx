import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell, ArticleDoc, ArticleRelated, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'Verifiable Interaction Records | Originary' },
  description:
    'What a signed interaction record contains, how offline verification works, and why server logs are not portable signed records.',
  keywords:
    'PEAC receipts, interaction records, JWS, Ed25519, offline verification, signed records, AI billing',
  authors: [{ name: 'Originary' }],
  alternates: { canonical: '/learn/ai-receipts' },
  openGraph: {
    type: 'article',
    title: 'Verifiable Interaction Records',
    description:
      'What a signed interaction record contains and how offline verification works.',
    url: '/learn/ai-receipts',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verifiable Interaction Records',
    description: 'JWS-signed records that another party can verify offline.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Verifiable Interaction Records',
  description:
    'What a signed interaction record contains, how offline verification works, and why server logs are not portable signed records.',
  author: { '@type': 'Organization', name: 'Originary' },
  publisher: {
    '@type': 'Organization',
    name: 'Originary',
    logo: { '@type': 'ImageObject', url: 'https://www.originary.xyz/logo/originary-wordmark.svg' },
  },
  mainEntityOfPage: 'https://www.originary.xyz/learn/ai-receipts',
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

export default function Page() {
  return (
    <>
      <Script id="article-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(articleJsonLd)}
      </Script>
      <PageShell>
        <ArticleDoc
          category="learn"
          title="Verifiable interaction records"
          sub="What a signed interaction record contains, how offline verification works, and why server logs are not portable signed records."
          readTime="2 min read"
          parent={{ label: 'Learn', href: '/learn' }}
        >
          <h2>Key takeaways</h2>
          <ul>
            <li>Records are JWS-signed JSON proving what happened in an interaction.</li>
            <li>Verifiable offline using public keys. No API callback.</li>
            <li>Carried in the <code>PEAC-Receipt</code> HTTP header.</li>
          </ul>

          <h2>What is a signed interaction record?</h2>
          <p>
            A PEAC interaction record is a JWS-signed JSON payload that records what happened
            during an agent interaction: who issued it, what resource was accessed, when, under
            what terms, and with what payment (if any). The signature uses Ed25519.
          </p>
          <p>
            Anyone with the issuer&apos;s public key can verify the record offline. No API
            callback, no trust in the verifier, no phone call. The record travels in the{' '}
            <code>PEAC-Receipt</code> HTTP header as a compact JWS string.
          </p>

          <h2>Why records matter</h2>
          <h3>Billing proof</h3>
          <p>
            The signed record proves which resource was accessed and what was paid. Reviews
            resolve by checking the signature, not by arguing about server logs.
          </p>
          <h3>Audit trails</h3>
          <p>
            Timestamped, tamper-evident records of every agent action. When an auditor or partner
            asks what your agent did, you produce the signed records. They verify independently.
          </p>
          <h3>Attribution chains</h3>
          <p>Content usage gets recorded. Creators verify credit and compensation.</p>

          <h2>Anatomy of a signed record</h2>
          <p>A signed interaction record contains several key fields:</p>
          <pre style={codeBlock}>
{`{
  "iss": "api.example.com",        // Issuer
  "sub": "agent-xyz-123",          // Agent ID
  "aud": "originary.xyz",          // Audience
  "iat": 1702834800,               // Issued at
  "exp": 1702921200,               // Expiration
  "rid": "rcpt_abc123",            // Record ID
  "resource": "/v1/translate",     // Resource accessed
  "action": "POST",                // HTTP method
  "payment": {
    "amount": "0.001",
    "currency": "USD",
    "evidence": "pi_xxx"
  },
  "aipref_hash": "sha256:abc..."   // Policy snapshot
}`}
          </pre>
          <p>
            The entire payload is signed using JWS (JSON Web Signature), typically with Ed25519.
            The signature can be verified using the issuer&apos;s public key referenced in{' '}
            <code>/.well-known/peac.txt</code> (which points to a JWKS endpoint).
          </p>

          <h2>Use cases</h2>
          <ul>
            <li>
              <strong>API providers.</strong> Issue records to prove service delivery; resolve
              billing reviews instantly.
            </li>
            <li>
              <strong>Content platforms.</strong> Track AI consumption of licensed content with
              verifiable attribution.
            </li>
            <li>
              <strong>Enterprise AI.</strong> Maintain audit trails for regulatory compliance
              workflows.
            </li>
            <li>
              <strong>Agent frameworks.</strong> Collect records to track costs and prove work
              completion.
            </li>
          </ul>

          <h2>Implementation</h2>
          <p>Start working with signed records using Originary&apos;s tools:</p>
          <ul>
            <li>
              <Link href="/peac" style={{ color: PALETTE.ink, textDecoration: 'underline', textDecorationColor: 'rgba(20, 17, 10, 0.30)', textUnderlineOffset: 3 }}>
                PEAC Protocol overview
              </Link>
            </li>
            <li>
              <Link href="/downloads" style={{ color: PALETTE.ink, textDecoration: 'underline', textDecorationColor: 'rgba(20, 17, 10, 0.30)', textUnderlineOffset: 3 }}>
                Downloads (CLI, SDK)
              </Link>
            </li>
          </ul>
        </ArticleDoc>

        <ArticleRelated
          links={[
            { label: 'Policy, consent and attribution', href: '/learn/ai-consent-and-attribution' },
            { label: 'Agentic commerce', href: '/learn/what-is-agentic-commerce' },
            { label: 'PEAC Protocol overview', href: '/peac' },
          ]}
        />
      </PageShell>
    </>
  )
}

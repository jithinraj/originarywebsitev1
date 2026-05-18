import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell, PageHero, PageSection, Card, PALETTE } from '@/components/home'
import { Mono } from '@/components/home/atoms/Mono'

export const metadata: Metadata = {
  title: { absolute: 'Learn | Originary' },
  description:
    'Guides on signed records, offline verification, policy discovery, and payment-related record flows across agent, API, MCP, and cross-runtime interactions.',
  keywords:
    'agent verification tutorial, verifiable interaction records, offline verification, signed records, AI consent, policy discovery, PEAC Protocol guide, verification workflows, portable signed records',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Learn | Originary',
    description:
      'Guides on signed records, offline verification, policy discovery, and payment-related record flows across agent, API, MCP, and cross-runtime interactions.',
    url: '/learn',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn | Originary',
    description:
      'Guides on signed records, offline verification, policy discovery, and payment-related record flows across agent, API, MCP, and cross-runtime interactions.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: { canonical: '/learn' },
}

type LearnArticle = {
  slug: string
  title: string
  subtitle: string
  description: string
  readTime: string
  topics: string[]
  featured: boolean
}

const learnArticles: LearnArticle[] = [
  {
    slug: 'ai-receipts',
    title: 'Verifiable Interaction Records',
    subtitle: 'Why logs are not enough',
    description:
      'What a signed interaction record contains, how offline verification works, and why server logs are not portable signed records. Includes the JWS payload structure and Ed25519 verification flow.',
    readTime: '2 min read',
    featured: true,
    topics: ['Interaction Records', 'Offline Verification', 'Portable Records'],
  },
  {
    slug: 'ai-consent-and-attribution',
    title: 'Policy, Consent and Attribution',
    subtitle: 'Machine-readable terms for AI',
    description:
      'How publishers declare what agents may do with their content (AIPREF, peac.txt) and how agents prove they followed those terms. The gap between robots.txt and what AI actually needs.',
    readTime: '2 min read',
    featured: false,
    topics: ['AIPREF', 'Policy Discovery', 'Content Terms'],
  },
  {
    slug: 'http-402-ai-payments',
    title: 'HTTP 402 and Payment Records',
    subtitle: 'Payment challenges and signed settlement records',
    description:
      'How HTTP 402 Payment Required works for machine-to-machine interactions. The request, challenge, payment, and record cycle, x402 protocol headers, and how payment records fit into the verification stack.',
    readTime: '2 min read',
    featured: false,
    topics: ['HTTP 402', 'Payment Records', 'Settlement Records'],
  },
  {
    slug: 'what-is-agentic-commerce',
    title: 'Agentic Commerce',
    subtitle: 'The economic layer for AI agents',
    description:
      'What happens when machines need to buy API calls, pay for content access, or settle charges with other agents. Covers policy discovery, pricing headers, payment rails, and signed records.',
    readTime: '2 min read',
    featured: false,
    topics: ['Machine Payments', 'API Monetization', 'Agent Workflows'],
  },
]

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.originary.xyz' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://www.originary.xyz/learn' },
  ],
}

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Learn',
  description:
    'In-depth guides on verification, signed records, policy, consent, and evidence for automated interactions.',
  url: 'https://www.originary.xyz/learn',
  publisher: {
    '@type': 'Organization',
    name: 'Originary',
    url: 'https://www.originary.xyz',
  },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: learnArticles.length,
    itemListElement: learnArticles.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: a.title,
      description: a.description,
      url: `https://www.originary.xyz/learn/${a.slug}`,
    })),
  },
}

const sans = 'var(--font-plex-sans), "IBM Plex Sans", system-ui, sans-serif'

function LearnCard({ article, featured }: { article: LearnArticle; featured?: boolean }) {
  return (
    <Link
      href={`/learn/${article.slug}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: featured ? 16 : 12,
        padding: featured ? 32 : 24,
        border: `1px solid ${PALETTE.hairline}`,
        background: PALETTE.paper,
        textDecoration: 'none',
        color: PALETTE.ink,
      }}
      className="home-card"
    >
      <Mono
        size={11}
        color={PALETTE.muted}
        style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}
      >
        {article.subtitle}
      </Mono>
      <h3
        style={{
          fontFamily: sans,
          fontSize: featured ? 'clamp(22px, 2.6vw, 28px)' : 18,
          fontWeight: 500,
          letterSpacing: '-0.015em',
          lineHeight: 1.2,
          color: PALETTE.ink,
          margin: 0,
          textWrap: 'balance',
        }}
      >
        {article.title}
      </h3>
      <p
        style={{
          fontFamily: sans,
          fontSize: featured ? 15 : 14,
          lineHeight: 1.6,
          color: PALETTE.muted,
          margin: 0,
          textWrap: 'pretty',
          flex: 1,
        }}
      >
        {article.description}
      </p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          flexWrap: 'wrap',
          marginTop: 8,
        }}
      >
        {article.topics.map((topic) => (
          <span
            key={topic}
            style={{
              fontFamily: 'var(--font-plex-mono), "IBM Plex Mono", monospace',
              fontSize: 10,
              letterSpacing: '0.08em',
              padding: '4px 8px',
              border: `1px solid ${PALETTE.hairline}`,
              color: PALETTE.faint,
              textTransform: 'uppercase',
            }}
          >
            {topic}
          </span>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          marginTop: 4,
          paddingTop: 14,
          borderTop: `1px solid ${PALETTE.hairline}`,
          fontFamily: 'var(--font-plex-mono), "IBM Plex Mono", monospace',
          fontSize: 11,
          letterSpacing: '0.06em',
          color: PALETTE.faint,
        }}
      >
        <span>{article.readTime}</span>
        <span
          style={{
            marginLeft: 'auto',
            color: PALETTE.ink,
            fontFamily: sans,
            fontWeight: 500,
            fontSize: 13,
            letterSpacing: '-0.005em',
          }}
        >
          Read &rarr;
        </span>
      </div>
    </Link>
  )
}

export default function LearnPage() {
  const featured = learnArticles.filter((a) => a.featured)
  const rest = learnArticles.filter((a) => !a.featured)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <PageShell>
        <PageHero
          eyebrow="learn"
          title="Learn"
          sub="Guides on signed records, offline verification, policy discovery, and payment-related record flows across agent, API, MCP, and cross-runtime interactions."
          align="center"
        />

        {featured.length > 0 ? (
          <PageSection paddingTop={8} paddingBottom={32}>
            <div
              className="home-blog-featured-grid"
              style={{
                maxWidth: 1080,
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))',
                gap: 24,
              }}
            >
              {featured.map((article) => (
                <LearnCard key={article.slug} article={article} featured />
              ))}
            </div>
          </PageSection>
        ) : null}

        <PageSection paddingBottom={112}>
          <div
            className="home-blog-grid"
            style={{
              maxWidth: 1080,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: 20,
            }}
          >
            {rest.map((article) => (
              <LearnCard key={article.slug} article={article} />
            ))}
          </div>
        </PageSection>
      </PageShell>
    </>
  )
}

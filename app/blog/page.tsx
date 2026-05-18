import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell, PageHero, PageSection, Card, Button, PALETTE } from '@/components/home'
import { Mono } from '@/components/home/atoms/Mono'

export const metadata: Metadata = {
  title: {
    absolute: 'Originary Blog | Agent Verification and Infrastructure',
  },
  description:
    'The Originary blog covers signed records, agent verification, offline verification, policy discovery, and the open infrastructure for automated interactions.',
  keywords:
    'Originary blog, agent verification, signed records, offline verification, verification workflows, PEAC protocol, AIPREF, HTTP 402, technical blog',
  authors: [{ name: 'Originary Team' }],
  openGraph: {
    type: 'website',
    title: 'Originary Blog | Agent Verification and Infrastructure',
    description:
      'Technical articles from Originary on agent verification, signed records, offline verification, verification workflows, and automated interactions.',
    url: '/blog',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary Blog' }],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary Blog | Agent Verification and Infrastructure',
    description:
      'Technical insights from Originary on agent verification, signed records, offline verification, and verification workflows.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: { canonical: '/blog' },
}

type Article = {
  slug: string
  title: string
  description: string
  author: string
  date: string
  category: string
  readTime: string
  featured: boolean
}

const articles: Article[] = [
  {
    slug: 'verifiable-provisioning-records-agent-infrastructure',
    title: 'Verifiable Provisioning Records for Agent-Driven Infrastructure',
    description:
      'PEAC adds signed, portable records to agent-driven provisioning workflows, so teams can verify what changed without owning the runtime or storing credentials.',
    author: 'Originary Team',
    date: '2026-05-18',
    category: 'Protocol',
    readTime: '11 min read',
    featured: true,
  },
  {
    slug: 'ai-bot-detection',
    title: 'AI Bot Detection and Crawler Signals',
    description:
      'How metadata, model fingerprints, and signed records turn AI traffic into verifiable records for audits and partner review.',
    author: 'Jithin Raj, Founder',
    date: '2025-12-01',
    category: 'Technical',
    readTime: '6 min read',
    featured: true,
  },
  {
    slug: 'a2a-stack-agent-to-agent-commerce',
    title: 'The A2A Stack: Agent-to-Agent Verification and Commerce',
    description:
      'How AI agents coordinate, transact, and verify interactions with each other. The A2A stack covers policy discovery, signed records, and cross-boundary proof.',
    author: 'Jithin Raj, Founder',
    date: '2025-12-03',
    category: 'Vision',
    readTime: '2 min read',
    featured: true,
  },
  {
    slug: 'what-is-http-402',
    title: 'What is HTTP 402? How PEAC Uses 402 for Agent Payments',
    description:
      'HTTP 402 Payment Required was defined in 1997 and reserved for digital payments. Learn how PEAC Protocol activates 402 for AI access control, agent payments, and verifiable receipts.',
    author: 'Jithin Raj, Founder',
    date: '2025-12-03',
    category: 'Explainer',
    readTime: '2 min read',
    featured: false,
  },
  {
    slug: 'from-detection-to-settlement-ai-paywall-peac-http-402',
    title: 'AI Paywalls, HTTP 402, and Portable Records',
    description:
      'How PEAC connects agent and crawler signals to HTTP 402, x402, and Stripe, with signed records for billing, audit, and partner review.',
    author: 'Jithin Raj, Founder',
    date: '2025-12-01',
    category: 'Technical',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'aipref-by-ietf',
    title: 'AIPREF: A Common Language for AI Usage Preferences',
    description:
      'Understanding the IETF AIPREF specification for expressing AI usage preferences through HTTP headers and robots.txt: what it is, how it works, and how to implement it today.',
    author: 'Jithin Raj, Founder',
    date: '2025-10-14',
    category: 'Technical',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'http-402-for-apis',
    title: 'HTTP 402 for APIs: Request, Challenge, and Record',
    description:
      'A practical guide to implementing HTTP 402 Payment Required in modern APIs. Learn the anatomy of a 402 response, receipt verification patterns, and how to avoid common pitfalls.',
    author: 'Jithin Raj, Founder',
    date: '2025-11-03',
    category: 'Technical',
    readTime: '2 min read',
    featured: false,
  },
  {
    slug: 'adding-402-in-15-minutes',
    title: 'Add HTTP 402 to Your API in 15 Minutes',
    description:
      'A 15-minute walkthrough for adding HTTP 402 to an Express API: challenge response, header format, receipt verification middleware, and failure modes.',
    author: 'Jithin Raj, Founder',
    date: '2025-11-03',
    category: 'Tutorial',
    readTime: '5 min read',
    featured: false,
  },
  {
    slug: 'cloudflare-workers-402',
    title: 'HTTP 402 on Cloudflare Workers',
    description:
      'Deploy HTTP 402 payment-required responses at the edge with Cloudflare Workers. Zero cold starts, global KV storage, Web Crypto API for receipt verification.',
    author: 'Jithin Raj, Founder',
    date: '2025-11-03',
    category: 'Technical',
    readTime: '2 min read',
    featured: false,
  },
  {
    slug: 'robots-txt-rfc-9309',
    title: 'robots.txt (RFC 9309): Crawl Access Control for the Web',
    description:
      'A technical deep dive into RFC 9309, the standardized Robots Exclusion Protocol: matching rules, error handling, caching, and how it relates to AIPREF usage preferences.',
    author: 'Jithin Raj, Founder',
    date: '2025-10-14',
    category: 'Technical',
    readTime: '5 min read',
    featured: false,
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Originary Blog',
  description:
    'Originary blog on agent verification, signed records, offline verification, verification workflows, and open infrastructure for automated interactions.',
  url: 'https://www.originary.xyz/blog',
  publisher: {
    '@type': 'Organization',
    name: 'Originary',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.originary.xyz/logo/originary-wordmark.svg',
    },
  },
  about: [
    'agent verification',
    'signed interaction records',
    'offline verification',
    'verification workflows',
    'PEAC Protocol',
    'automated interactions',
  ],
}

const sans = 'var(--font-plex-sans), "IBM Plex Sans", system-ui, sans-serif'

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function ArticleCard({ article, featured }: { article: Article; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: featured ? 16 : 12,
        padding: featured ? 32 : 24,
        border: `1px solid ${PALETTE.hairline}`,
        background: PALETTE.paper,
        textDecoration: 'none',
        color: PALETTE.ink,
        transition: 'transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease',
      }}
      className="home-card"
    >
      <Mono
        size={11}
        color={PALETTE.muted}
        style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}
      >
        {article.category}
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
          gap: 14,
          marginTop: 8,
          paddingTop: 14,
          borderTop: `1px solid ${PALETTE.hairline}`,
          fontFamily: 'var(--font-plex-mono), "IBM Plex Mono", monospace',
          fontSize: 11,
          letterSpacing: '0.06em',
          color: PALETTE.faint,
          flexWrap: 'wrap',
        }}
      >
        <span>{formatDate(article.date)}</span>
        <span>{article.readTime}</span>
        <span style={{ marginLeft: 'auto', color: PALETTE.ink, fontFamily: sans, fontWeight: 500, fontSize: 13, letterSpacing: '-0.005em' }}>
          Read &rarr;
        </span>
      </div>
    </Link>
  )
}

export default function BlogPage() {
  const featured = articles.filter((a) => a.featured)
  const rest = articles.filter((a) => !a.featured)

  return (
    <>
      <Script id="blog-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
      <PageShell>
        <PageHero
          eyebrow="blog"
          title="Originary blog"
          sub="Technical articles and protocol notes on agent verification, signed records, policy discovery, offline verification, and the open infrastructure for automated interactions."
          align="center"
        />

        {featured.length > 0 ? (
          <PageSection paddingTop={8} paddingBottom={48}>
            <Mono
              size={11}
              color={PALETTE.faint}
              style={{
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginBottom: 24,
                display: 'block',
                maxWidth: 1080,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              featured
            </Mono>
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
                <ArticleCard key={article.slug} article={article} featured />
              ))}
            </div>
          </PageSection>
        ) : null}

        <PageSection paddingBottom={48}>
          <Mono
            size={11}
            color={PALETTE.faint}
            style={{
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: 24,
              display: 'block',
              maxWidth: 1080,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            all articles
          </Mono>
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
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </PageSection>

        <PageSection paddingBottom={112}>
          <Card padding={32} style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <Mono
              size={11}
              color={PALETTE.muted}
              style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              subscribe
            </Mono>
            <h2
              style={{
                fontFamily: sans,
                fontSize: 'clamp(22px, 2.6vw, 28px)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                color: PALETTE.ink,
                margin: '12px 0 12px 0',
                textWrap: 'balance',
              }}
            >
              Stay updated on the agentic web.
            </h2>
            <p
              style={{
                fontFamily: sans,
                fontSize: 15,
                lineHeight: 1.6,
                color: PALETTE.muted,
                margin: '0 auto 24px auto',
                maxWidth: 520,
                textWrap: 'pretty',
              }}
            >
              Get protocol updates, technical notes, and articles from the Originary team.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button href="https://originary.substack.com" external primary>
                Subscribe on Substack
              </Button>
              <Button href="/contact">Contact</Button>
            </div>
          </Card>
        </PageSection>
      </PageShell>
    </>
  )
}

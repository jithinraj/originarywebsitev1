import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import {
  PageShell,
  PageSection,
  Card,
  Button,
  Reveal,
  Stagger,
  InViewClass,
  PALETTE,
  MAX_W,
  PAGE_PAD,
} from '@/components/home'

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
    title: 'Verifiable provisioning records for agent-driven infrastructure',
    description:
      'When agents and CLIs provision services, credentials, environments, and deploy targets, signed records help teams verify what changed without owning the runtime.',
    author: 'Originary Team',
    date: '2026-05-18',
    category: 'Protocol',
    readTime: '11 min read',
    featured: true,
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

const blogLabel = {
  maxWidth: 1080,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'block' as const,
}

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
      <span
        style={{
          fontFamily: 'var(--font-plex-mono), "IBM Plex Mono", ui-monospace, monospace',
          fontSize: 11,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: PALETTE.muted,
        }}
      >
        {article.category}
      </span>
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
        {/* Editorial hero */}
        <section
          className="home-section"
          style={{
            maxWidth: MAX_W,
            margin: '0 auto',
            padding: `clamp(64px, 9vh, 112px) ${PAGE_PAD} clamp(40px, 6vh, 64px) ${PAGE_PAD}`,
          }}
        >
          <Reveal>
            <InViewClass className="home-eyebrow-rule" as="div">
              <span className="home-about-eyebrow">blog</span>
            </InViewClass>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="home-about-h1">Originary blog.</h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="home-about-body" style={{ marginTop: 22, maxWidth: 720 }}>
              Originary writes about signed records, verification, policy discovery,
              payment-related workflows, provisioning records, and open infrastructure for
              automated interactions.
            </p>
          </Reveal>
        </section>

        <InViewClass
          className="home-about-divider"
          as="div"
          style={{ maxWidth: MAX_W, margin: '0 auto', padding: `0 ${PAGE_PAD}` }}
        />

        {featured.length > 0 ? (
          <PageSection paddingTop={32} paddingBottom={56}>
            <Reveal>
              <InViewClass className="home-eyebrow-rule" as="div" style={blogLabel}>
                <span className="home-about-eyebrow">featured</span>
              </InViewClass>
            </Reveal>
            <Stagger
              step={120}
              baseDelay={40}
              className="home-blog-featured-grid"
              style={{
                maxWidth: 1080,
                margin: '24px auto 0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))',
                gap: 24,
              }}
            >
              {featured.map((article) => (
                <ArticleCard key={article.slug} article={article} featured />
              ))}
            </Stagger>
          </PageSection>
        ) : null}

        <InViewClass
          className="home-about-divider"
          as="div"
          style={{ maxWidth: MAX_W, margin: '0 auto', padding: `0 ${PAGE_PAD}` }}
        />

        <PageSection paddingTop={32} paddingBottom={56}>
          <Reveal>
            <InViewClass className="home-eyebrow-rule" as="div" style={blogLabel}>
              <span className="home-about-eyebrow">all articles</span>
            </InViewClass>
          </Reveal>
          <Stagger
            step={70}
            baseDelay={40}
            className="home-blog-grid"
            style={{
              maxWidth: 1080,
              margin: '24px auto 0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: 20,
            }}
          >
            {rest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </Stagger>
        </PageSection>

        <InViewClass
          className="home-about-divider"
          as="div"
          style={{ maxWidth: MAX_W, margin: '0 auto', padding: `0 ${PAGE_PAD}` }}
        />

        <PageSection paddingTop={32} paddingBottom={112}>
          <Reveal>
            <Card padding={36} style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
              <span className="home-about-eyebrow">subscribe</span>
              <h2 className="home-about-section-title" style={{ marginTop: 14 }}>
                Stay updated on the agentic web.
              </h2>
              <p
                style={{
                  fontFamily: sans,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: PALETTE.muted,
                  margin: '14px auto 24px auto',
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
          </Reveal>
        </PageSection>
      </PageShell>
    </>
  )
}

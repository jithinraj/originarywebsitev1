import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell, PageHero, PageSection, SectionHeading, Button } from '@/components/home'
import { CURRENT_ARTICLES, ARCHIVED_ARTICLES, EVIDENCE_SERIES, type Article } from '@/lib/blog'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import './blog.css'

export const metadata: Metadata = {
  title: {
    absolute: 'Originary blog: signed records for AI agents and APIs',
  },
  description:
    'Technical guides, worked examples, and source-backed analysis for agent, MCP, gateway, commerce, and provisioning audit workflows.',
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
      url: 'https://www.originary.xyz/brand/wordmark/originary-wordmark.svg',
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

function Row({ article, n, showDesc = true }: { article: Article; n?: number; showDesc?: boolean }) {
  return (
    <li className="bl-row">
      <Link href={`/blog/${article.slug}`}>
        {n !== undefined ? <span className="bl-n">{String(n).padStart(2, '0')}</span> : null}
        <span>
          <span className="bl-t">{article.title}</span>
          {showDesc ? <span className="bl-d">{article.description}</span> : null}
        </span>
        <span className="bl-m">
          {article.category} / {article.readTime.replace(' read', '')}
        </span>
      </Link>
    </li>
  )
}

export default function BlogPage() {
  const series = EVIDENCE_SERIES.map((slug) => CURRENT_ARTICLES.find((a) => a.slug === slug)).filter(
    (a): a is Article => Boolean(a),
  )
  const seriesSlugs = new Set<string>(EVIDENCE_SERIES)
  const rest = CURRENT_ARTICLES.filter((a) => !seriesSlugs.has(a.slug))
  const archived = ARCHIVED_ARTICLES

  return (
    <>
      <Script id="blog-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
      <PageShell>
        <Breadcrumbs current="Blog" href="/blog" />
        <PageHero
          eyebrow="blog"
          title="Notes on verifiable records."
          sub="Signed records, verification, policy discovery, payment-related workflows, provisioning records, and open infrastructure for automated interactions."
        />

        {series.length > 0 ? (
          <PageSection paddingTop={32} paddingBottom={64}>
            <SectionHeading
              eyebrow="series"
              title="Evidence handoff."
              sub="Five parts, in reading order: what has to survive when someone else reviews an automated action."
            />
            <ol className="bl-rows bl-ser">
              {series.map((article, i) => (
                <Row key={article.slug} article={article} n={i + 1} />
              ))}
            </ol>
          </PageSection>
        ) : null}

        {rest.length > 0 ? (
          <PageSection paddingBottom={64}>
            <SectionHeading eyebrow="more writing" title="Standards, protocol and explainers." />
            <ul className="bl-rows bl-two bl-twowrap">
              {rest.map((article) => (
                <Row key={article.slug} article={article} />
              ))}
            </ul>
          </PageSection>
        ) : null}

        {archived.length > 0 ? (
          <PageSection paddingBottom={64}>
            <SectionHeading
              eyebrow="archive"
              title="Earlier writing."
              sub="Kept for the record. These pieces use legacy terminology and commands and are not maintained against the current release."
            />
            <ul className="bl-rows">
              {archived.map((article) => (
                <Row key={article.slug} article={article} showDesc={false} />
              ))}
            </ul>
          </PageSection>
        ) : null}

        <PageSection paddingBottom={112}>
          <SectionHeading
            eyebrow="subscribe"
            title="Get new articles by email."
            sub="Protocol updates, technical notes, and articles from the Originary team."
          />
          <Button href="https://originary.substack.com" external primary>
            Subscribe on Substack
          </Button>
        </PageSection>
      </PageShell>
    </>
  )
}

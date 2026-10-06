import type { Metadata } from 'next'
import { getArticle } from '@/lib/blog'

/**
 * Metadata and JSON-LD for evidence-series articles, derived from the
 * registry entry so the title, description, and canonical URL stay in sync
 * with the blog index and sitemap.
 */

const SITE = 'https://www.originary.xyz'
export const SERIES_PUBLISHED = '2026-10-11'

function entry(slug: string) {
  const a = getArticle(slug)
  if (!a) throw new Error(`Unknown article slug: ${slug}`)
  return a
}

export function seriesMetadata(slug: string, seoTitle: string): Metadata {
  const a = entry(slug)
  const path = `/blog/${slug}`
  const image = `/og/blog/${slug}`
  return {
    title: { absolute: seoTitle },
    description: a.description,
    authors: [{ name: 'Originary' }],
    openGraph: {
      type: 'article',
      title: a.title,
      description: a.description,
      url: path,
      publishedTime: SERIES_PUBLISHED,
      modifiedTime: SERIES_PUBLISHED,
      authors: ['Originary'],
      images: [{ url: image, width: 1200, height: 630, alt: a.title }],
      siteName: 'Originary',
    },
    twitter: {
      card: 'summary_large_image',
      title: a.title,
      description: a.description,
      images: [image],
      site: '@originaryx',
      creator: '@originaryx',
    },
    robots: 'index,follow',
    alternates: { canonical: path },
  }
}

export function seriesJsonLd(slug: string, keywords: string[]) {
  const a = entry(slug)
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: a.title,
    description: a.description,
    keywords: keywords.join(', '),
    author: { '@type': 'Organization', name: 'Originary', url: SITE },
    datePublished: SERIES_PUBLISHED,
    dateModified: SERIES_PUBLISHED,
    image: `${SITE}/og/blog/${slug}`,
    isPartOf: { '@type': 'Blog', name: 'Originary Blog', url: `${SITE}/blog` },
    publisher: {
      '@type': 'Organization',
      name: 'Originary',
      logo: { '@type': 'ImageObject', url: `${SITE}/logo/originary-wordmark.svg` },
    },
    mainEntityOfPage: `${SITE}/blog/${slug}`,
  }
}

/** Serialized JSON-LD for an inline script tag, with `<` escaped. */
export function jsonLdHtml(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, '\\u003c') }
}

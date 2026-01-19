import type { FaqItem } from '@/content/faqs'

interface FaqJsonLdProps {
  items: FaqItem[]
}

/**
 * Generates FAQPage JSON-LD schema from FAQ items.
 * Schema matches visible content to comply with Google guidelines.
 *
 * Note: Google largely stopped showing FAQ rich results for most sites
 * (limiting them to government/health). This provides structured data
 * for machine parsing and LLM understanding, not guaranteed rich snippets.
 */
export default function FaqJsonLd({ items }: FaqJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

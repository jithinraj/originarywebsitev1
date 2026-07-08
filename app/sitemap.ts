import type { MetadataRoute } from 'next'

// Short revalidate window so the sitemap is refetched without a long edge cache.
export const revalidate = 600

const BASE = 'https://www.originary.xyz'

// Canonical URLs. Keep aligned with the live route set.
const entries: Array<[string, string]> = [
  ['/', '2026-07-08'],
  ['/about', '2026-06-01'],
  ['/peac', '2026-06-01'],
  ['/how-it-works', '2026-07-08'],
  ['/records', '2026-07-08'],
  ['/verify', '2026-07-08'],
  ['/mcp', '2026-07-08'],
  ['/ai-gateway', '2026-07-08'],
  ['/provisioning-records', '2026-07-08'],
  ['/agentic-commerce', '2026-07-08'],
  ['/downloads', '2026-06-01'],
  ['/pricing', '2026-05-14'],
  ['/contact', '2026-05-14'],
  ['/trust', '2026-05-14'],
  ['/security', '2026-05-19'],
  ['/privacy', '2026-05-14'],
  ['/terms', '2026-05-14'],
  ['/legal/imprint', '2026-02-10'],
  ['/blog', '2026-05-05'],
  ['/blog/verifiable-provisioning-records-agent-infrastructure', '2026-05-18'],
  ['/blog/ai-bot-detection', '2026-05-05'],
  ['/blog/a2a-stack-agent-to-agent-commerce', '2026-03-19'],
  ['/blog/what-is-http-402', '2026-03-19'],
  ['/blog/from-detection-to-settlement-ai-paywall-peac-http-402', '2026-05-05'],
  ['/blog/aipref-by-ietf', '2026-03-19'],
  ['/blog/http-402-for-apis', '2026-03-19'],
  ['/blog/adding-402-in-15-minutes', '2026-03-19'],
  ['/blog/cloudflare-workers-402', '2026-03-19'],
  ['/blog/robots-txt-rfc-9309', '2026-03-19'],
  ['/learn', '2026-05-05'],
  ['/learn/ai-receipts', '2026-03-26'],
  ['/learn/ai-consent-and-attribution', '2026-03-26'],
  ['/learn/http-402-ai-payments', '2026-03-18'],
  ['/learn/what-is-agentic-commerce', '2026-03-18'],
]

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map(([path, lastModified]) => ({
    url: `${BASE}${path}`,
    lastModified,
  }))
}

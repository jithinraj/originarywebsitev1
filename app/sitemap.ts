import type { MetadataRoute } from 'next'
import { CANONICAL_ROUTES } from '@/lib/routes'

// Short revalidate window so the sitemap is refetched without a long edge cache.
export const revalidate = 600

const BASE = 'https://www.originary.xyz'

// Generated from the canonical route registry (static routes + indexable
// articles). Adding a route or restoring an indexable article updates the
// sitemap automatically; there is no separate handwritten list to drift.
// Stamped once when the sitemap is generated rather than per request, so
// lastmod reports when the site was actually built instead of when a crawler
// happened to fetch it.
const BUILT_AT = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  return CANONICAL_ROUTES.map((path) => ({
    url: `${BASE}${path === '/' ? '' : path}`,
    lastModified: BUILT_AT,
  }))
}

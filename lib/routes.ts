/**
 * Canonical route registry. One typed source of the indexable page routes,
 * consumed by the sitemap, IndexNow validation, and the redirect/route CI
 * checks. Blog articles are appended from the content registry so restored,
 * indexable articles stay in sync automatically.
 */
import { CURRENT_ARTICLES } from './blog'

// Static canonical page routes (no trailing slash; '/' is the home root).
export const STATIC_ROUTES: readonly string[] = [
  '/',
  '/about',
  '/product',
  '/press',
  '/peac',
  '/how-it-works',
  '/evidence-case',
  '/audit-incident-handoff',
  '/records',
  '/verify',
  '/mcp',
  '/ai-gateway',
  '/ai-compliance',
  '/provisioning-records',
  '/agentic-commerce',
  '/downloads',
  '/pricing',
  '/contact',
  '/trust',
  '/security',
  '/privacy',
  '/terms',
  '/trademark',
  '/legal/imprint',
  '/legal/acceptable-use',
  '/blog',
]

// Indexable blog article routes, derived from the content registry.
export const ARTICLE_ROUTES: readonly string[] = CURRENT_ARTICLES.filter((a) => a.indexable).map(
  (a) => `/blog/${a.slug}`,
)

// Every canonical, indexable route.
export const CANONICAL_ROUTES: readonly string[] = [...STATIC_ROUTES, ...ARTICLE_ROUTES]

export const CANONICAL_PATHS = new Set(CANONICAL_ROUTES)

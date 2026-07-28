/**
 * Editorial content registry. One typed source for blog article lifecycle,
 * consumed by the blog index, each article page, and the sitemap. Dates are
 * deliberately not tracked or displayed. Only `indexable: true` articles are
 * listed in the sitemap and marked index=true; archived pieces stay reachable
 * but carry a legacy notice and are excluded from indexing.
 */
export type ArticleStatus = 'current' | 'updated' | 'archived' | 'superseded' | 'draft'

export interface Article {
  slug: string
  title: string
  description: string
  category: string
  author: string
  readTime: string
  status: ArticleStatus
  indexable: boolean
  featured?: boolean
  supersededBy?: string
}

export const ARTICLES: Article[] = [
  {
    slug: 'verifiable-provisioning-records-agent-infrastructure',
    title: 'Verifiable provisioning records for agent-driven infrastructure',
    description:
      'When agents and CLIs provision services, credentials, environments, and deploy targets, signed records help teams verify what changed without owning the runtime.',
    category: 'Protocol',
    author: 'Originary',
    readTime: '11 min read',
    status: 'current',
    indexable: true,
    featured: true,
  },
  {
    slug: 'aipref-by-ietf',
    title: 'AIPREF: a common language for AI usage preferences',
    description:
      'How the IETF AIPREF working group is standardizing machine-readable AI usage preferences, and where portable signed records fit alongside it.',
    category: 'Standards',
    author: 'Originary',
    readTime: '6 min read',
    status: 'current',
    indexable: true,
  },
  {
    slug: 'robots-txt-rfc-9309',
    title: 'robots.txt (RFC 9309): crawl access control for the web',
    description:
      'RFC 9309 formalized the Robots Exclusion Protocol. A look at what it does, what it does not, and why access decisions still benefit from verifiable records.',
    category: 'Standards',
    author: 'Originary',
    readTime: '5 min read',
    status: 'current',
    indexable: true,
  },
  {
    slug: 'what-is-http-402',
    title: 'What is HTTP 402? A neutral explainer',
    description:
      'HTTP 402 Payment Required, its history, its recent revival for agents and APIs, and how it relates to (but is separate from) signed interaction records.',
    category: 'Explainer',
    author: 'Originary',
    readTime: '2 min read',
    status: 'current',
    indexable: true,
  },
  {
    slug: 'a2a-stack-agent-to-agent-commerce',
    title: 'Portable evidence across agent-to-agent handoffs',
    description:
      'As agents hand work to other agents, the record of what was authorized and what happened has to travel with them. A look at portable evidence across A2A flows.',
    category: 'Agents',
    author: 'Originary',
    readTime: '2 min read',
    status: 'current',
    indexable: true,
  },
  // Draft: unpublished preview pages. Not listed on the blog index, not
  // indexable, excluded from the sitemap.
  {
    slug: 'agent-audit-across-boundaries',
    title: 'Where private agent logs stop being enough across company boundaries',
    description:
      'Private logs answer your own questions well, but fail when another company must verify what happened. See the exact gap: a log line next to a signed record.',
    category: 'Protocol',
    author: 'Jithin Raj',
    readTime: '5 min read',
    status: 'draft',
    indexable: false,
    featured: false,
  },
  {
    slug: 'evidence-bundle-for-disputes',
    title: 'Building a portable evidence bundle for dispute review',
    description:
      'A PEAC evidence bundle packages signed records, keys, and policy so a counterparty can check them independently. What is inside, and the two ways it fails.',
    category: 'Protocol',
    author: 'Jithin Raj',
    readTime: '6 min read',
    status: 'draft',
    indexable: false,
    featured: false,
  },
  // Archived: earlier HTTP 402-era tutorials. Kept for the record, not
  // maintained against the current release, excluded from indexing.
  {
    slug: 'ai-bot-detection',
    title: 'AI bot detection and verifiable access',
    description: 'Earlier writing on traffic signals and access records for automated clients.',
    category: 'Archive',
    author: 'Originary',
    readTime: '8 min read',
    status: 'archived',
    indexable: false,
  },
  {
    slug: 'from-detection-to-settlement-ai-paywall-peac-http-402',
    title: 'From detection to settlement: the AI paywall',
    description: 'Earlier writing on AI paywalls and HTTP 402 settlement flows.',
    category: 'Archive',
    author: 'Originary',
    readTime: '12 min read',
    status: 'archived',
    indexable: false,
  },
  {
    slug: 'adding-402-in-15-minutes',
    title: 'Adding HTTP 402 in 15 minutes',
    description: 'Earlier tutorial using legacy headers and commands.',
    category: 'Archive',
    author: 'Originary',
    readTime: '6 min read',
    status: 'archived',
    indexable: false,
  },
  {
    slug: 'http-402-for-apis',
    title: 'HTTP 402 for APIs',
    description: 'Earlier writing on applying HTTP 402 to API access.',
    category: 'Archive',
    author: 'Originary',
    readTime: '9 min read',
    status: 'archived',
    indexable: false,
  },
  {
    slug: 'cloudflare-workers-402',
    title: 'HTTP 402 at the edge with Cloudflare Workers',
    description: 'Earlier implementation tutorial for edge-enforced payment challenges.',
    category: 'Archive',
    author: 'Originary',
    readTime: '10 min read',
    status: 'archived',
    indexable: false,
  },
]

export const CURRENT_ARTICLES = ARTICLES.filter(
  (a) => a.status !== 'archived' && a.status !== 'superseded' && a.status !== 'draft',
)
export const ARCHIVED_ARTICLES = ARTICLES.filter((a) => a.status === 'archived' || a.status === 'superseded')

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}

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
  // Evidence handoff series (five parts, listed in reading order).
  {
    slug: 'ai-agent-audit-trail-handoff',
    title: 'An AI agent audit trail has to survive the handoff',
    description:
      'Another team has to review an agent action without access to your dashboard. What to preserve, what a signature shows, and how to hand off a case they can check.',
    category: 'Audit',
    author: 'Originary',
    readTime: '6 min read',
    status: 'current',
    indexable: true,
    featured: true,
  },
  {
    slug: 'mcp-tool-call-audit-evidence',
    title: 'An MCP tool call can succeed while the job is unfinished',
    description:
      'Record the result at the level where it happened. Keep approvals, invocations, tool results, and retries distinct for the person who reconciles them.',
    category: 'MCP',
    author: 'Originary',
    readTime: '6 min read',
    status: 'current',
    indexable: true,
  },
  {
    slug: 'ai-gateway-audit-logs-policy-decisions',
    title: 'When a customer asks why your AI gateway allowed a request',
    description:
      'A policy decision, an enforcement action, and a downstream result need distinct evidence when a customer questions what your AI gateway allowed.',
    category: 'Gateways',
    author: 'Originary',
    readTime: '6 min read',
    status: 'current',
    indexable: true,
  },
  {
    slug: 'agentic-commerce-payment-fulfillment-evidence',
    title: 'The agent paid. What did it receive?',
    description:
      'A payment record answers a payment question. Production, delivery, receipt, and acceptance each need evidence from the system that observed them.',
    category: 'Commerce',
    author: 'Originary',
    readTime: '6 min read',
    status: 'current',
    indexable: true,
  },
  {
    slug: 'ai-agent-customer-requests-completion',
    title: 'Your next customer may be an agent. Can it tell whether you finished?',
    description:
      'Businesses handling delegated requests need to make acceptance and completion distinguishable. A status model, completion records, and where to start.',
    category: 'Agents',
    author: 'Originary',
    readTime: '6 min read',
    status: 'current',
    indexable: true,
  },
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
      'RFC 9309 formalized the Robots Exclusion Protocol. Its matching and error rules, the limits of crawl control, and where verifiable access records fit.',
    category: 'Standards',
    author: 'Originary',
    readTime: '5 min read',
    status: 'current',
    indexable: true,
  },
  {
    slug: 'what-is-http-402',
    title: 'What is HTTP 402? Payment Required, explained',
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
      'When agents hand work to other agents, the record of what was authorized and what happened has to travel with the work: policy discovery, HTTP 402 payment, and signed records.',
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
      'When another company has to check what your agent did, a private log cannot help them. The same refund as a log line and as a signed record, side by side.',
    category: 'Protocol',
    author: 'Originary',
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
    author: 'Originary',
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

/** Reading order for the evidence handoff series; drives the in-article series index. */
export const EVIDENCE_SERIES = [
  'ai-agent-audit-trail-handoff',
  'mcp-tool-call-audit-evidence',
  'ai-gateway-audit-logs-policy-decisions',
  'agentic-commerce-payment-fulfillment-evidence',
  'ai-agent-customer-requests-completion',
] as const

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}

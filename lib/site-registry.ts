/**
 * Site Registry: Single source of truth for terminology, status, navigation,
 * product labels, and core copy across the Originary website.
 *
 * All pages should import from here instead of hard-coding labels or statuses.
 */

// ---------------------------------------------------------------------------
// Narrative hierarchy (locked)
// ---------------------------------------------------------------------------
// Originary       = company + product surface
// PEAC            = open standard underneath
// verifiable interaction record = primary category noun
// receipt         = signed artifact / file / wire object (where needed)
// proof           = user benefit (not primary noun)
// evidence        = trust/compliance context (not homepage noun)
// ---------------------------------------------------------------------------

export const NARRATIVE = {
  companyName: 'Originary',
  legalEntity: 'Poem, Inc.',
  protocolName: 'PEAC',
  primaryNoun: 'signed record',
  primaryNounPlural: 'signed records',
  artifactNoun: 'signed record',
  benefitNoun: 'proof',
  complianceNoun: 'evidence',
  tagline: 'Govern locally. Prove across boundaries.',
  companyDescriptor: 'Originary helps teams return signed records for AI agents, APIs, MCP, and automated workflows. Built on PEAC, the open standard for verifiable interaction records.',
  plainSentence:
    'Originary helps teams return signed records for AI agents, APIs, MCP, and automated workflows. Built on PEAC, the open standard for verifiable interaction records.',
  supportLine: 'Govern locally. Prove across boundaries.',
  flagshipLine: 'Originary Verify operationalizes signed records in production.',
  enterpriseLine: 'Enterprise deployment for signed records.',
  protocolRelation:
    'PEAC is the open standard for verifiable interaction records. Originary is one product built on top of it.',
} as const

// ---------------------------------------------------------------------------
// Status taxonomy (locked)
// ---------------------------------------------------------------------------
export type ProductStatus = 'available' | 'preview' | 'draft' | 'research'

export const STATUS_CONFIG: Record<
  ProductStatus,
  { label: string; cta: string; description: string }
> = {
  available: {
    label: 'Available',
    cta: 'Get started',
    description: 'Shipped, documented, installable',
  },
  preview: {
    label: 'Preview',
    cta: 'Try the preview',
    description: 'Usable, may change',
  },
  draft: {
    label: 'Draft',
    cta: 'Follow progress',
    description: 'Design phase, not usable',
  },
  research: {
    label: 'Research',
    cta: '',
    description: 'Exploratory',
  },
}

// ---------------------------------------------------------------------------
// Navigation (canonical, shared across all headers)
// ---------------------------------------------------------------------------
export const NAV_PRIMARY = [
  { label: 'Products', href: '/products' },
  { label: 'Developers', href: '/developers' },
  { label: 'Learn', href: '/learn' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Trust', href: '/trust' },
] as const

export const NAV_UTILITY = [
  { label: 'GitHub', href: 'https://github.com/peacprotocol/peac', external: true },
  { label: 'Trust', href: '/trust' },
] as const

export const NAV_CTA = {
  label: 'Start here',
  href: '/developers',
} as const

// ---------------------------------------------------------------------------
// Products (canonical labels + statuses)
// ---------------------------------------------------------------------------
export const PRODUCTS = {
  verify: {
    label: 'Originary Verify',
    status: 'available' as ProductStatus,
    href: '/products/verify',
    tagline: 'Validate signatures and claims offline: the fastest way to operationalize PEAC',
  },
  agentAuditor: {
    label: 'Agent Auditor',
    status: 'available' as ProductStatus,
    href: '/agent-auditor',
    tagline: 'Inspect what agents did',
  },
  gateway402: {
    label: 'Gateway 402',
    status: 'available' as ProductStatus,
    href: '/products/gateway-402',
    tagline: 'Enforce access and payment policy at the edge',
  },
  mcpServer: {
    label: 'MCP Server',
    status: 'available' as ProductStatus,
    href: '/integrations/mcp',
    tagline: 'Give AI clients verification tools',
  },
  trace: {
    label: 'Trace',
    status: 'preview' as ProductStatus,
    href: '/trace',
    tagline: 'Monitor agent traffic and export evidence',
  },
  declare: {
    label: 'Declare',
    status: 'available' as ProductStatus,
    href: '/declare',
    tagline: 'Publish machine-readable terms',
  },
  capture: {
    label: 'Capture',
    status: 'available' as ProductStatus,
    href: '/products',
    tagline: 'Store interaction evidence durably',
  },
} as const

// ---------------------------------------------------------------------------
// Footer groups (canonical)
// ---------------------------------------------------------------------------
export const FOOTER_GROUPS = [
  {
    title: 'Products',
    links: [
      { label: 'Originary Verify', href: '/products/verify' },
      { label: 'Agent Auditor', href: '/agent-auditor' },
      { label: 'Gateway 402', href: '/products/gateway-402' },
      { label: 'MCP Server', href: '/integrations/mcp' },
      { label: 'Trace', href: '/trace' },
      { label: 'All products', href: '/products' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'Start here', href: '/developers' },
      { label: 'Downloads', href: '/downloads' },
      { label: 'Demo', href: '/demo' },
      { label: 'Verify online', href: '/verify' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Learning center', href: '/learn' },
      { label: 'Blog', href: '/blog' },
      { label: 'PEAC Protocol', href: '/peac' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Glossary', href: '/glossary' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Trust',
    links: [
      { label: 'Trust center', href: '/trust' },
      { label: 'Security', href: '/security' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'GitHub', href: 'https://github.com/peacprotocol/peac', external: true },
    ],
  },
] as const

// ---------------------------------------------------------------------------
// Metadata defaults
// ---------------------------------------------------------------------------
export const META_DEFAULTS = {
  siteName: 'Originary',
  siteUrl: 'https://www.originary.xyz',
  titleTemplate: '%s | Originary',
  defaultTitle: 'Originary | Prove what agents did',
  defaultDescription: 'Originary helps teams return signed records for AI agents, APIs, MCP, and automated workflows so another party can verify what happened without trusting a dashboard.',
  twitterHandle: '@originaryx',
} as const

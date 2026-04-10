/**
 * Footer Link Registry
 * Single source of truth for all footer navigation.
 * 5 columns mirroring the site information architecture.
 */

export type FooterLink = {
  label: string
  href: string
  external?: boolean
}

export type FooterGroup = {
  id: string
  title: string
  links: FooterLink[]
}

// ============================================================================
// LAYER A: Navigation Grid (5 columns)
// ============================================================================

export const FOOTER_PRODUCTS: FooterGroup = {
  id: 'products',
  title: 'Products',
  links: [
    { label: 'Originary Verify', href: '/products/verify' },
    { label: 'Agent Auditor', href: '/agent-auditor' },
    { label: 'Gateway 402', href: '/products/gateway-402' },
    { label: 'MCP Server', href: '/integrations/mcp' },
    { label: 'Trace', href: '/trace' },
    { label: 'All products', href: '/products' },
  ],
}

export const FOOTER_DEVELOPERS: FooterGroup = {
  id: 'developers',
  title: 'Developers',
  links: [
    { label: 'Proof Check', href: '/agent-proof-check' },
    { label: 'Start here', href: '/developers' },
    { label: 'Downloads', href: '/downloads' },
    { label: 'Demo', href: '/demo' },
  ],
}

export const FOOTER_LEARN: FooterGroup = {
  id: 'learn',
  title: 'Learn',
  links: [
    { label: 'Learning center', href: '/learn' },
    { label: 'Blog', href: '/blog' },
    { label: 'PEAC Protocol', href: '/peac' },
    { label: 'Integrations', href: '/integrations' },
  ],
}

export const FOOTER_COMPANY: FooterGroup = {
  id: 'company',
  title: 'Company',
  links: [
    { label: 'About', href: '/about' },
    { label: 'Enterprise', href: '/enterprise' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ],
}

export const FOOTER_TRUST: FooterGroup = {
  id: 'trust',
  title: 'Trust',
  links: [
    { label: 'Trust center', href: '/trust' },
    { label: 'Security', href: '/security' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'GitHub', href: 'https://github.com/peacprotocol/peac', external: true },
  ],
}

// Navigation groups for Layer A grid
export const FOOTER_NAV_GROUPS: FooterGroup[] = [
  FOOTER_PRODUCTS,
  FOOTER_DEVELOPERS,
  FOOTER_LEARN,
  FOOTER_COMPANY,
  FOOTER_TRUST,
]

// ============================================================================
// LAYER B: Utility Bar
// ============================================================================

export const FOOTER_LEGAL: FooterLink[] = [
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Security', href: '/security' },
]

export const FOOTER_MACHINE_READABLE: FooterLink[] = [
  { label: 'peac.txt', href: '/.well-known/peac.txt' },
  { label: 'security.txt', href: '/.well-known/security.txt' },
  { label: 'robots.txt', href: '/robots.txt' },
]

export const FOOTER_SOCIAL: FooterLink[] = [
  { label: 'X', href: 'https://x.com/originaryx', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/originary', external: true },
  { label: 'Bluesky', href: 'https://bsky.app/profile/originary.bsky.social', external: true },
  { label: 'Substack', href: 'https://originary.substack.com', external: true },
]

// ============================================================================
// Verification helpers (used by verify-footer-links.mjs)
// ============================================================================

/**
 * Get all internal hrefs from the footer for link verification.
 * Excludes external links and well-known/generated endpoints.
 */
export function getAllInternalFooterLinks(): string[] {
  const allLinks: FooterLink[] = [
    ...FOOTER_NAV_GROUPS.flatMap((g) => g.links),
    ...FOOTER_LEGAL,
  ]

  return allLinks
    .filter((link) => !link.external)
    .map((link) => link.href)
}

// Allowlisted non-page endpoints (well-known files, generated routes)
export const ALLOWLISTED_ENDPOINTS: string[] = [
  '/.well-known/peac.txt',
  '/.well-known/security.txt',
  '/robots.txt',
  '/status',
]

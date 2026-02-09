/**
 * Footer Link Registry
 * Single source of truth for all footer navigation.
 * 5 buckets, <= 18 nav links total. Anything else goes on a dedicated page.
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
// LAYER A: Navigation Grid (5 buckets)
// ============================================================================

export const FOOTER_PROTOCOL: FooterGroup = {
  id: 'protocol',
  title: 'Protocol',
  links: [
    { label: 'Spec', href: '/peac' },
    { label: 'Receipt format', href: '/docs/receipts' },
    { label: 'Conformance', href: '/conformance' },
    { label: 'GitHub', href: 'https://github.com/peacprotocol/peac', external: true },
  ],
}

export const FOOTER_DEVELOPERS: FooterGroup = {
  id: 'developers',
  title: 'Developers',
  links: [
    { label: 'Quickstart', href: '/developers' },
    { label: 'SDKs (npm)', href: 'https://www.npmjs.com/org/peac', external: true },
    { label: 'CLI', href: '/downloads' },
    { label: 'Examples', href: '/demo' },
  ],
}

export const FOOTER_TOOLS: FooterGroup = {
  id: 'tools',
  title: 'Tools',
  links: [
    { label: 'Verifier', href: '/verify' },
    { label: 'Gateway 402', href: '/products/gateway-402' },
    { label: 'Trace', href: '/trace' },
    { label: 'Studio', href: '/products/studio' },
  ],
}

export const FOOTER_COMPANY: FooterGroup = {
  id: 'company',
  title: 'Company',
  links: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/company/contact' },
  ],
}

export const FOOTER_TRUST: FooterGroup = {
  id: 'trust',
  title: 'Trust & Legal',
  links: [
    { label: 'Security', href: '/security' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Trademark', href: '/trademark' },
  ],
}

// Navigation groups for Layer A grid (5 columns)
export const FOOTER_NAV_GROUPS: FooterGroup[] = [
  FOOTER_PROTOCOL,
  FOOTER_DEVELOPERS,
  FOOTER_TOOLS,
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
  { label: 'Trademark', href: '/trademark' },
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
  { label: 'Substack', href: 'https://peacprotocol.substack.com', external: true },
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

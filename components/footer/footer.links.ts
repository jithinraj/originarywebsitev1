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
// LAYER A: Navigation Grid
// ============================================================================

export const FOOTER_PRODUCTS: FooterGroup = {
  id: 'products',
  title: 'Originary',
  links: [
    { label: 'Downloads', href: '/downloads' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
    { label: 'PEAC Protocol', href: '/peac' },
  ],
}

export const FOOTER_DEVELOPERS: FooterGroup = {
  id: 'resources',
  title: 'Resources',
  links: [
    { label: 'GitHub', href: 'https://github.com/peacprotocol/peac', external: true },
    { label: 'Security', href: '/security' },
    { label: 'Trust', href: '/trust' },
  ],
}

export const FOOTER_LEARN: FooterGroup = {
  id: 'legal',
  title: 'Legal',
  links: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
}

// Kept for backward compatibility with consumers that import these names.
export const FOOTER_COMPANY: FooterGroup = FOOTER_PRODUCTS
export const FOOTER_TRUST: FooterGroup = FOOTER_LEARN

// Navigation groups for Layer A grid
export const FOOTER_NAV_GROUPS: FooterGroup[] = [
  FOOTER_PRODUCTS,
  FOOTER_DEVELOPERS,
  FOOTER_LEARN,
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

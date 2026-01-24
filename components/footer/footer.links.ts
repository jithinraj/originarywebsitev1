/**
 * Footer Link Registry
 * Single source of truth for all footer navigation.
 * Run `npm run verify:footer` to validate all internal links exist.
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
  title: 'Products',
  links: [
    { label: 'Declare', href: '/declare' },
    { label: 'Trace', href: '/trace' },
    { label: 'Gateway 402', href: '/products/gateway-402' },
    { label: 'Verify API', href: '/products/verify' },
    { label: 'Studio', href: '/products/studio' },
    { label: 'Cloud', href: '/cloud' },
    { label: 'Downloads', href: '/downloads' },
  ],
}

export const FOOTER_PLATFORM: FooterGroup = {
  id: 'platform',
  title: 'Platform',
  links: [
    { label: 'Overview', href: '/platform' },
    { label: 'System of Record', href: '/system-of-record' },
    { label: 'Context Graphs', href: '/context-graphs' },
    { label: 'Receipts', href: '/receipts' },
  ],
}

export const FOOTER_INTEGRATIONS: FooterGroup = {
  id: 'integrations',
  title: 'Integrations',
  links: [
    { label: 'All Integrations', href: '/integrations' },
    { label: 'HTTP 402', href: '/integrations/http-402' },
    { label: 'x402', href: '/integrations/x402' },
    { label: 'MCP', href: '/integrations/mcp' },
    { label: 'A2A', href: '/integrations/a2a' },
    { label: 'Agentic Commerce', href: '/integrations/acp' },
    { label: 'AI Preferences', href: '/integrations/aipref' },
  ],
}

export const FOOTER_DEVELOPERS: FooterGroup = {
  id: 'developers',
  title: 'Developers',
  links: [
    { label: 'Documentation', href: '/developers' },
    { label: 'Docs: Receipts', href: '/docs/receipts' },
    { label: 'Docs: Payments', href: '/docs/payments/x402' },
    { label: 'Docs: Stripe', href: '/docs/payments/stripe' },
    { label: 'Downloads', href: '/downloads' },
    { label: 'Demo', href: '/demo' },
    { label: 'Verify Tool', href: '/verify' },
  ],
}

export const FOOTER_LEARN: FooterGroup = {
  id: 'learn',
  title: 'Learn',
  links: [
    { label: 'All Guides', href: '/learn' },
    { label: 'Resources', href: '/resources' },
    { label: 'AI Receipts', href: '/learn/ai-receipts' },
    { label: 'HTTP 402 Payments', href: '/learn/http-402-ai-payments' },
    { label: 'Consent & Attribution', href: '/learn/ai-consent-and-attribution' },
    { label: 'Agentic Commerce', href: '/learn/what-is-agentic-commerce' },
    { label: 'Glossary', href: '/glossary' },
  ],
}

export const FOOTER_SOLUTIONS: FooterGroup = {
  id: 'solutions',
  title: 'Solutions',
  links: [
    { label: 'AI Builders', href: '/solutions/ai-builders' },
    { label: 'API Providers', href: '/solutions/api-providers' },
    { label: 'Publishers', href: '/solutions/publishers' },
    { label: 'Enterprises', href: '/solutions/enterprises' },
    { label: 'Originary & AI', href: '/ai' },
    { label: 'Services', href: '/services' },
    { label: 'Pilots', href: '/pilots' },
  ],
}

export const FOOTER_COMPANY: FooterGroup = {
  id: 'company',
  title: 'Company',
  links: [
    { label: 'What is Originary?', href: '/what-is-originary' },
    { label: 'About', href: '/about' },
    { label: 'Research', href: '/research' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Press', href: '/press' },
    { label: 'Contact', href: '/contact' },
    { label: 'Trust Center', href: '/trust' },
  ],
}

export const FOOTER_OPEN_SOURCE: FooterGroup = {
  id: 'open-source',
  title: 'Open Source',
  links: [
    { label: 'PEAC Protocol', href: '/peac' },
    { label: 'Why PEAC', href: '/why-peac' },
    { label: 'Governance', href: '/governance' },
    { label: 'Conformance', href: '/conformance' },
    { label: 'Changelog', href: '/changelog' },
    { label: 'GitHub', href: 'https://github.com/peacprotocol/peac', external: true },
  ],
}

// Navigation groups for Layer A grid (8 columns)
export const FOOTER_NAV_GROUPS: FooterGroup[] = [
  FOOTER_PRODUCTS,
  FOOTER_PLATFORM,
  FOOTER_INTEGRATIONS,
  FOOTER_DEVELOPERS,
  FOOTER_LEARN,
  FOOTER_SOLUTIONS,
  FOOTER_COMPANY,
  FOOTER_OPEN_SOURCE,
]

// ============================================================================
// LAYER B: Utility Bar
// ============================================================================

export const FOOTER_LEGAL: FooterLink[] = [
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Security', href: '/security' },
  { label: 'Trademark', href: '/trademark' },
  { label: 'Imprint', href: '/legal/imprint' },
]

export const FOOTER_MACHINE_READABLE: FooterLink[] = [
  { label: 'peac.txt', href: '/.well-known/peac.txt' },
  { label: 'aipref.json', href: '/.well-known/aipref.json' },
  { label: 'sitemap.xml', href: '/sitemap.xml' },
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
    // Note: FOOTER_MACHINE_READABLE and FOOTER_SOCIAL are excluded
    // Machine-readable files are allowlisted separately
    // Social links are external
  ]

  return allLinks
    .filter((link) => !link.external)
    .map((link) => link.href)
}

// Allowlisted non-page endpoints (well-known files, generated routes)
export const ALLOWLISTED_ENDPOINTS: string[] = [
  '/.well-known/peac.txt',
  '/.well-known/aipref.json',
  '/sitemap.xml',
  '/robots.txt',
  '/status', // Status page exists
]

import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.originary.xyz'
  const now = new Date().toISOString()

  // Core pages
  const corePaths = [
    { path: '', priority: 1.0 },
    { path: 'pricing', priority: 0.9 },
    { path: 'developers', priority: 0.9 },
    { path: 'downloads', priority: 0.9 },
    { path: 'demo', priority: 0.9 },
    { path: 'ai', priority: 0.9 },
    { path: 'originary-ai', priority: 0.9 },
  ]

  // Product pages
  const productPaths = [
    { path: 'products', priority: 0.9 },
    { path: 'products/peac', priority: 0.8 },
    { path: 'products/gateway-402', priority: 0.8 },
    { path: 'products/verify', priority: 0.8 },
    { path: 'products/studio', priority: 0.8 },
  ]

  // Service pages
  const servicePaths = [
    { path: 'receipts', priority: 0.9 },
    { path: 'services', priority: 0.9 },
    { path: 'changelog', priority: 0.8 },
    { path: 'trust', priority: 0.8 },
    { path: 'verify', priority: 0.8 },
    { path: 'status', priority: 0.7 },
  ]

  // Integration pages
  const integrationPaths = [
    { path: 'integrations/x402', priority: 0.8 },
    { path: 'integrations/mcp', priority: 0.8 },
    { path: 'integrations/acp', priority: 0.8 },
    { path: 'integrations/a2a', priority: 0.8 },
    { path: 'integrations/aipref', priority: 0.8 },
  ]

  // Documentation pages
  const docPaths = [
    { path: 'docs', priority: 0.8 },
    { path: 'docs/quickstart', priority: 0.7 },
    { path: 'docs/receipts', priority: 0.7 },
    { path: 'docs/peac-txt', priority: 0.7 },
    { path: 'docs/payments/x402', priority: 0.7 },
    { path: 'docs/payments/stripe', priority: 0.7 },
    { path: 'docs/mcp/receipts', priority: 0.7 },
    { path: 'docs/a2a/attach-points', priority: 0.7 },
    { path: 'docs/deploy/cloudflare-worker', priority: 0.7 },
    { path: 'docs/deploy/vercel', priority: 0.7 },
  ]

  // User pages
  const userPaths = [
    { path: 'dashboard', priority: 0.6 },
    { path: 'signin', priority: 0.4 },
    { path: 'resources', priority: 0.6 },
  ]

  // Checkout pages
  const checkoutPaths = [
    { path: 'checkout/start', priority: 0.5 },
    { path: 'checkout/confirmation', priority: 0.5 },
  ]

  // Company pages
  const companyPaths = [
    { path: 'company/about', priority: 0.6 },
    { path: 'company/contact', priority: 0.6 },
  ]

  // Legal pages
  const legalPaths = [
    { path: 'terms', priority: 0.5 },
    { path: 'privacy', priority: 0.5 },
    { path: 'refund', priority: 0.4 },
    { path: 'shipping', priority: 0.4 },
    { path: 'trademark', priority: 0.5 },
    { path: 'security', priority: 0.5 },
    { path: 'copyright', priority: 0.4 },
  ]

  // Combine all paths
  const allPaths = [
    ...corePaths,
    ...productPaths,
    ...servicePaths,
    ...integrationPaths,
    ...docPaths,
    ...userPaths,
    ...checkoutPaths,
    ...companyPaths,
    ...legalPaths,
  ]

  return allPaths.map(({ path, priority }) => ({
    url: `${base}/${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority,
  }))
}

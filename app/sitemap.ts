import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.originary.xyz'
  const lastModified = new Date()

  // Core marketing pages
  const corePages = [
    '',
    '/pricing',
    '/developers',
    '/demo',
    '/verify',
    '/downloads',
    '/contact',
    '/about',
  ]

  // Product pages
  const productPages = [
    '/products',
    '/products/gateway-402',
    '/products/verify',
    '/products/studio',
    '/products/peac',
    '/products/adapters',
    '/declare',
    '/trace',
    '/receipts',
    '/peac',
    '/cloud',
    '/services',
  ]

  // Integration pages
  const integrationPages = [
    '/integrations',
    '/integrations/x402',
    '/integrations/x402/python-fastapi',
    '/integrations/x402/nextjs',
    '/integrations/x402/cloudflare-workers',
    '/integrations/x402/express-node',
    '/integrations/acp',
    '/integrations/aipref',
    '/integrations/http-402',
    '/integrations/mcp',
    '/integrations/a2a',
  ]

  // Solution pages
  const solutionPages = [
    '/solutions',
    '/solutions/ai-builders',
    '/solutions/api-providers',
    '/solutions/publishers',
    '/solutions/enterprises',
  ]

  // Company pages
  const companyPages = [
    '/company',
    '/company/about',
    '/company/contact',
  ]

  // Documentation pages
  const docPages = [
    '/docs/receipts',
    '/docs/payments/x402',
    '/docs/payments/stripe',
    '/docs/mcp/receipts',
    '/docs/a2a/attach-points',
    '/docs/deploy/cloudflare-worker',
    '/docs/deploy/vercel',
  ]

  // Blog pages
  const blogPages = [
    '/blog',
    '/blog/what-is-http-402',
    '/blog/a2a-stack-agent-to-agent-commerce',
    '/blog/cloudflare-workers-402',
    '/blog/from-detection-to-settlement-ai-paywall-peac-http-402',
    '/blog/aipref-by-ietf',
    '/blog/ai-bot-detection',
    '/blog/http-402-for-apis',
    '/blog/adding-402-in-15-minutes',
    '/blog/robots-txt-rfc-9309',
  ]

  // Glossary pages
  const glossaryPages = [
    '/glossary/a2a',
    '/glossary/acp',
    '/glossary/agentic-web',
    '/glossary/aipref',
    '/glossary/mcp',
    '/glossary/peac',
    '/glossary/http-402-payment-required',
    '/glossary/x402',
  ]

  // Resource pages
  const resourcePages = [
    '/resources',
    '/resources/case-studies',
    '/resources/performance-methodology',
    '/resources/changelog',
    '/resources/blog',
  ]

  // Guide pages
  const guidePages = [
    '/guides/http-402',
  ]

  // Other pages
  const otherPages = [
    '/ai',
    '/originary-ai',
    '/status',
    '/search',
  ]

  const allPages = [
    ...corePages,
    ...productPages,
    ...integrationPages,
    ...solutionPages,
    ...companyPages,
    ...docPages,
    ...blogPages,
    ...glossaryPages,
    ...resourcePages,
    ...guidePages,
    ...otherPages,
  ]

  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : route.startsWith('/blog') ? 'monthly' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/docs') || route.startsWith('/glossary') ? 0.6 : 0.8,
  }))
}

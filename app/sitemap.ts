import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.originary.xyz'
  const lastModified = new Date()

  return [
    // Homepage
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },

    // Core Product Pages (Highest Priority)
    { url: `${baseUrl}/trace`, lastModified, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/peac`, lastModified, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/originary-ai`, lastModified, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/cloud`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/developers`, lastModified, changeFrequency: 'weekly', priority: 0.9 },

    // Trace Sub-pages
    { url: `${baseUrl}/trace/demo`, lastModified, changeFrequency: 'weekly', priority: 0.85 },

    // Products Section
    { url: `${baseUrl}/products`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/products/verify`, lastModified, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/products/gateway-402`, lastModified, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/products/studio`, lastModified, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/products/peac`, lastModified, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/products/adapters`, lastModified, changeFrequency: 'weekly', priority: 0.75 },

    // Solutions Section
    { url: `${baseUrl}/solutions`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/solutions/publishers`, lastModified, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/solutions/ai-builders`, lastModified, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/solutions/api-providers`, lastModified, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/solutions/enterprises`, lastModified, changeFrequency: 'weekly', priority: 0.75 },

    // Resources & Documentation
    { url: `${baseUrl}/resources`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/resources/blog`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/resources/changelog`, lastModified, changeFrequency: 'weekly', priority: 0.65 },
    { url: `${baseUrl}/resources/case-studies`, lastModified, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${baseUrl}/resources/performance-methodology`, lastModified, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/changelog`, lastModified, changeFrequency: 'weekly', priority: 0.65 },

    // Blog Posts
    { url: `${baseUrl}/blog/from-detection-to-settlement-ai-paywall-peac-http-402`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/ai-bot-detection`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/aipref-by-ietf`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/http-402-for-apis`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/adding-402-in-15-minutes`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/cloudflare-workers-402`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/robots-txt-rfc-9309`, lastModified, changeFrequency: 'monthly', priority: 0.6 },

    // Documentation
    { url: `${baseUrl}/docs/receipts`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/docs/payments/x402`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/docs/payments/stripe`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/docs/mcp/receipts`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/docs/a2a/attach-points`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/docs/deploy/cloudflare-worker`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/docs/deploy/vercel`, lastModified, changeFrequency: 'monthly', priority: 0.7 },

    // Integrations
    { url: `${baseUrl}/integrations`, lastModified, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/integrations/aipref`, lastModified, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${baseUrl}/integrations/mcp`, lastModified, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${baseUrl}/integrations/a2a`, lastModified, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${baseUrl}/integrations/acp`, lastModified, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${baseUrl}/integrations/http-402`, lastModified, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${baseUrl}/integrations/x402`, lastModified, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${baseUrl}/integrations/x402/nextjs`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/integrations/x402/express-node`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/integrations/x402/python-fastapi`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/integrations/x402/cloudflare-workers`, lastModified, changeFrequency: 'monthly', priority: 0.6 },

    // Glossary
    { url: `${baseUrl}/glossary/peac`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/glossary/aipref`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/glossary/mcp`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/glossary/a2a`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/glossary/acp`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/glossary/x402`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/glossary/http-402-payment-required`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/glossary/agentic-web`, lastModified, changeFrequency: 'monthly', priority: 0.6 },

    // Guides
    { url: `${baseUrl}/guides/http-402`, lastModified, changeFrequency: 'monthly', priority: 0.65 },

    // Utility Pages
    { url: `${baseUrl}/receipts`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/verify`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/downloads`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/demo`, lastModified, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: 'monthly', priority: 0.6 },

    // Company Pages
    { url: `${baseUrl}/company`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/company/about`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/company/contact`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/press`, lastModified, changeFrequency: 'monthly', priority: 0.55 },
    { url: `${baseUrl}/brand`, lastModified, changeFrequency: 'monthly', priority: 0.5 },

    // Trust & Compliance
    { url: `${baseUrl}/trust`, lastModified, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${baseUrl}/status`, lastModified, changeFrequency: 'daily', priority: 0.6 },
    { url: `${baseUrl}/security`, lastModified, changeFrequency: 'monthly', priority: 0.5 },

    // Legal Pages
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/trademark`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/copyright`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/legal/terms`, lastModified, changeFrequency: 'yearly', priority: 0.35 },
    { url: `${baseUrl}/legal/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.35 },
    { url: `${baseUrl}/legal/imprint`, lastModified, changeFrequency: 'yearly', priority: 0.35 },
    { url: `${baseUrl}/legal/acceptable-use`, lastModified, changeFrequency: 'yearly', priority: 0.35 },
    { url: `${baseUrl}/legal/dpa`, lastModified, changeFrequency: 'yearly', priority: 0.35 },
    { url: `${baseUrl}/legal/payments`, lastModified, changeFrequency: 'yearly', priority: 0.35 },

    // E-commerce Pages
    { url: `${baseUrl}/refund`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/shipping`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
  ]
}

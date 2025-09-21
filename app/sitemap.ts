import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://originary.xyz',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Products
    {
      url: 'https://originary.xyz/products',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://originary.xyz/products/peac',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://originary.xyz/products/verify',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://originary.xyz/products/gateway-402',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://originary.xyz/products/studio',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://originary.xyz/products/adapters',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Solutions
    {
      url: 'https://originary.xyz/solutions',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://originary.xyz/solutions/api-providers',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://originary.xyz/solutions/ai-builders',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://originary.xyz/solutions/enterprises',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://originary.xyz/solutions/publishers',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Core pages
    {
      url: 'https://originary.xyz/developers',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://originary.xyz/pricing',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://originary.xyz/receipts',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Resources
    {
      url: 'https://originary.xyz/resources',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://originary.xyz/resources/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://originary.xyz/resources/case-studies',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://originary.xyz/resources/changelog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Company
    {
      url: 'https://originary.xyz/company',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://originary.xyz/company/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://originary.xyz/company/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Auth & Dashboard
    {
      url: 'https://originary.xyz/signin',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://originary.xyz/dashboard',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    // Legal
    {
      url: 'https://originary.xyz/legal/privacy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://originary.xyz/legal/terms',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://originary.xyz/legal/payments',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://originary.xyz/legal/acceptable-use',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://originary.xyz/legal/dpa',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
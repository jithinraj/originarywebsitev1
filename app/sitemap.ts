import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split('T')[0]

  return [
    {
      url: 'https://originary.xyz/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Originary AI - Highest priority after homepage
    {
      url: 'https://originary.xyz/originary-ai/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    // Core pages
    {
      url: 'https://originary.xyz/developers/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://originary.xyz/pricing/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Products
    {
      url: 'https://originary.xyz/products/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: 'https://originary.xyz/receipts/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    // Product pages
    {
      url: 'https://originary.xyz/products/peac/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://originary.xyz/products/verify/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://originary.xyz/products/gateway-402/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://originary.xyz/products/studio/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://originary.xyz/products/adapters/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Solutions
    {
      url: 'https://originary.xyz/solutions/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://originary.xyz/solutions/api-providers/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://originary.xyz/solutions/ai-builders/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://originary.xyz/solutions/enterprises/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://originary.xyz/solutions/publishers/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Resources
    {
      url: 'https://originary.xyz/resources/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://originary.xyz/downloads/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Company
    {
      url: 'https://originary.xyz/company/',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://originary.xyz/company/about/',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://originary.xyz/company/contact/',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}

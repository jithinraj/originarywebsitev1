import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.originary.xyz'
  const lastModified = new Date()

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/peac`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/trace`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/developers`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/integrations`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/products`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/verify`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/downloads`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/receipts`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/trust`, lastModified, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/trademark`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/security`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/legal/imprint`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
  ]
}

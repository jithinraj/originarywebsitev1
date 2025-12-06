import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      // SEO Analytics bots
      {
        userAgent: 'AhrefsBot',
        allow: '/',
      },
      {
        userAgent: 'SemrushBot',
        allow: '/',
      },
      {
        userAgent: 'DotBot',
        allow: '/',
      },
      // LLM bots
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      // Fallback: allow all others
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://www.originary.xyz/sitemap.xml',
    host: 'https://www.originary.xyz',
  }
}

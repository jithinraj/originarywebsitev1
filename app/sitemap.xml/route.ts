import { NextResponse } from 'next/server'
import sitemapData from '@/public/sitemap-data.json'

// Use Edge Runtime to bypass RSC header injection
export const runtime = 'edge'

interface SitemapEntry {
  url: string
  lastModified: string
  priority?: number
}

// Escape special XML characters
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// Format date to ISO 8601 (W3C Datetime)
function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toISOString()
}

// Generate XML sitemap string
function generateSitemapXml(entries: SitemapEntry[]): string {
  const urlElements = entries
    .map((entry) => {
      const loc = escapeXml(entry.url)
      const lastmod = formatDate(entry.lastModified)
      const priority = entry.priority ?? 0.7
      const changefreq = 'weekly'

      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`
}

export async function GET() {
  const xml = generateSitemapXml(sitemapData as SitemapEntry[])

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      'Vary': 'Accept-Encoding',
    },
  })
}

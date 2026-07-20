const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  trailingSlash: false,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    typescript: {
    ignoreBuildErrors: false,
  },
  async redirects() {
    // Permanent legacy-route migration map. `permanent: true` emits HTTP 308
    // (Google treats 308 like 301 for canonicalization). Every entry is an
    // exact, semantically correct one-to-one migration of a page that existed.
    // No broad wildcards, no article-to-landing-page redirects; unknown legacy
    // slugs 404 so broken links surface instead of hiding.
    return [
      // Discovery / sitemap
      { source: '/sitemap-main.xml', destination: '/sitemap.xml', permanent: true },
      { source: '/sitemap_index.xml', destination: '/sitemap.xml', permanent: true },
      { source: '/wp-sitemap.xml', destination: '/sitemap.xml', permanent: true },
      { source: '/peac.txt', destination: '/.well-known/peac.txt', permanent: true },

      // Legacy product routes -> canonical product surfaces
      { source: '/products/verify', destination: '/verify', permanent: true },
      { source: '/products/gateway-402', destination: '/agentic-commerce', permanent: true },
      { source: '/products', destination: '/product', permanent: true },
      { source: '/integrations/mcp', destination: '/mcp', permanent: true },
      { source: '/enterprise', destination: '/pricing', permanent: true },
      { source: '/trace', destination: '/ai-gateway', permanent: true },
      { source: '/receipts', destination: '/records', permanent: true },
      { source: '/demo', destination: '/verify', permanent: true },
      { source: '/proof-check', destination: '/verify', permanent: true },
      { source: '/what-is-originary', destination: '/about', permanent: true },
      { source: '/agent-auditor', destination: '/verify', permanent: true },

      // Developer + downloads
      { source: '/developers', destination: '/downloads', permanent: true },
      { source: '/declare', destination: '/downloads', permanent: true },

      // Legal path normalization
      { source: '/legal/privacy', destination: '/privacy', permanent: true },
      { source: '/legal/terms', destination: '/terms', permanent: true },
      { source: '/legal/payments', destination: '/pricing', permanent: true },
      { source: '/copyright', destination: '/terms', permanent: true },

      // Section index
      { source: '/learn', destination: '/blog', permanent: true },

      // Legacy routes -> current canonical pages
      { source: '/ai', destination: '/product', permanent: true },
      { source: '/system-of-record', destination: '/how-it-works', permanent: true },
      { source: '/originary-ai', destination: '/product', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Content-Security-Policy', value: "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; font-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.clarity.ms https://scripts.clarity.ms https://cdn.amplitude.com; connect-src 'self' https:;" },
        ],
      },
      {
        source: '/.well-known/(.*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
      {
        source: '/.well-known/peac.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=0, s-maxage=600, must-revalidate' },
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
      {
        source: '/.well-known/security.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=300, s-maxage=300' },
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
      {
        source: '/.well-known/aipref.json',
        headers: [
          { key: 'Content-Type', value: 'application/json; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=300, s-maxage=300, must-revalidate' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
      {
        source: '/aipref.json',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
      {
        source: '/security.txt',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, s-maxage=600, must-revalidate' },
          { key: 'Vary', value: 'Accept-Encoding' },
          { key: 'Content-Type', value: 'application/xml; charset=utf-8' },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, s-maxage=600, must-revalidate' },
          { key: 'Vary', value: 'Accept-Encoding' },
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
        ],
      },
    ]
  },
}

module.exports = withMDX(nextConfig)

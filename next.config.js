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
    return [
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
      {
        source: '/sitemap-main.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/sitemap_index.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/wp-sitemap.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/peac.txt',
        destination: '/.well-known/peac.txt',
        permanent: true,
      },
      // Legacy site generation: canonical 301 map (2026-07-14 takedown)
      { source: '/products/verify', destination: '/verify', permanent: true },
      { source: '/products/gateway-402', destination: '/agentic-commerce', permanent: true },
      { source: '/products/:path*', destination: '/records', permanent: true },
      { source: '/products', destination: '/records', permanent: true },
      { source: '/integrations/mcp', destination: '/mcp', permanent: true },
      { source: '/integrations/:path*', destination: '/records', permanent: true },
      { source: '/integrations', destination: '/records', permanent: true },
      { source: '/enterprise', destination: '/pricing', permanent: true },
      { source: '/trace', destination: '/ai-gateway', permanent: true },
      { source: '/trace/:path*', destination: '/ai-gateway', permanent: true },
      { source: '/receipts', destination: '/records', permanent: true },
      { source: '/demo', destination: '/verify', permanent: true },
      { source: '/developers', destination: '/downloads', permanent: true },
      { source: '/solutions/:path*', destination: '/records', permanent: true },
      { source: '/glossary/:path*', destination: '/peac', permanent: true },
      { source: '/what-is-originary', destination: '/about', permanent: true },
      { source: '/proof-check', destination: '/verify', permanent: true },
      { source: '/docs/mcp/:path*', destination: '/mcp', permanent: true },
      { source: '/docs/:path*', destination: '/peac', permanent: true },
      { source: '/learn/what-is-agentic-commerce', destination: '/agentic-commerce', permanent: true },
      { source: '/learn/ai-receipts', destination: '/records', permanent: true },
      { source: '/learn/http-402-ai-payments', destination: '/agentic-commerce', permanent: true },
      { source: '/learn/ai-consent-and-attribution', destination: '/peac', permanent: true },
      { source: '/learn', destination: '/blog', permanent: true },
      { source: '/learn/:path*', destination: '/blog', permanent: true },
      { source: '/blog/what-is-http-402', destination: '/agentic-commerce', permanent: true },
      { source: '/blog/http-402-for-apis', destination: '/agentic-commerce', permanent: true },
      { source: '/blog/adding-402-in-15-minutes', destination: '/agentic-commerce', permanent: true },
      { source: '/blog/cloudflare-workers-402', destination: '/agentic-commerce', permanent: true },
      { source: '/blog/from-detection-to-settlement-ai-paywall-peac-http-402', destination: '/agentic-commerce', permanent: true },
      { source: '/blog/a2a-stack-agent-to-agent-commerce', destination: '/agentic-commerce', permanent: true },
      { source: '/blog/ai-bot-detection', destination: '/blog', permanent: true },
      { source: '/blog/aipref-by-ietf', destination: '/blog', permanent: true },
      { source: '/blog/robots-txt-rfc-9309', destination: '/blog', permanent: true },
      { source: '/agent-auditor', destination: '/', permanent: true },
      { source: '/agent-auditor/:path*', destination: '/', permanent: true },
      { source: '/declare', destination: '/downloads', permanent: true },
      { source: '/legal/privacy', destination: '/privacy', permanent: true },
      { source: '/legal/terms', destination: '/terms', permanent: true },
      { source: '/legal/payments', destination: '/pricing', permanent: true },
      { source: '/copyright', destination: '/terms', permanent: true },
      {
        source: '/downloads/originary-cli-1.0.0-darwin-arm64.zip',
        destination: 'https://github.com/peacprotocol/peac/archive/refs/tags/v0.9.14.zip',
        permanent: false,
      },
      {
        source: '/downloads/originary-cli-1.0.0-darwin-x64.zip',
        destination: 'https://github.com/peacprotocol/peac/archive/refs/tags/v0.9.13.2.zip',
        permanent: false,
      },
      {
        source: '/downloads/originary-cli-1.0.0-linux-x64.tar.gz',
        destination: 'https://github.com/peacprotocol/peac/archive/refs/tags/v0.9.13.1.tar.gz',
        permanent: false,
      },
      {
        source: '/downloads/originary-cli-1.0.0-win-x64.zip',
        destination: 'https://github.com/peacprotocol/peac/archive/refs/tags/v0.9.13.zip',
        permanent: false,
      },
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
          { key: 'Cache-Control', value: 'public, max-age=300, immutable' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
      {
        source: '/.well-known/jwks.json',
        headers: [
          { key: 'Content-Type', value: 'application/json; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=300, immutable' },
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

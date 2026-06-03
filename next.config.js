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
        source: '/docs',
        destination: '/peac',
        permanent: true,
      },
      {
        source: '/docs/:path*',
        destination: '/peac',
        permanent: true,
      },
      {
        source: '/open-source',
        destination: '/peac',
        permanent: true,
      },
      {
        source: '/verify',
        destination: '/downloads',
        permanent: true,
      },
      {
        source: '/trace',
        destination: '/peac',
        permanent: true,
      },
      {
        source: '/trace/pricing',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/trace/demo',
        destination: '/',
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
      {
        source: '/resources/blog',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/resources/changelog',
        destination: '/peac',
        permanent: true,
      },
      {
        source: '/company/about',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/company/contact',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/company',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/what-is-originary',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/platform',
        destination: '/',
        permanent: true,
      },
      {
        source: '/why-peac',
        destination: '/peac',
        permanent: true,
      },
      {
        source: '/solutions',
        destination: '/',
        permanent: true,
      },
      {
        source: '/solutions/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/press',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/governance',
        destination: '/peac',
        permanent: true,
      },
      {
        source: '/conformance',
        destination: '/peac',
        permanent: true,
      },
      {
        source: '/glossary',
        destination: '/peac',
        permanent: true,
      },
      {
        source: '/glossary/:slug',
        destination: '/peac',
        permanent: true,
      },
      {
        source: '/brand',
        destination: '/about',
        permanent: true,
      },
      // ---- 0.14.2 cleanup: collapse legacy product and integration surfaces ----
      { source: '/products', destination: '/', permanent: true },
      { source: '/products/verify', destination: '/pricing', permanent: true },
      { source: '/products/gateway-402', destination: '/pricing', permanent: true },
      { source: '/products/adapters', destination: '/downloads', permanent: true },
      { source: '/products/peac', destination: '/peac', permanent: true },
      { source: '/products/studio', destination: '/pricing', permanent: true },
      { source: '/products/:path*', destination: '/', permanent: true },
      { source: '/developers', destination: '/downloads', permanent: true },
      { source: '/developers/:path*', destination: '/downloads', permanent: true },
      { source: '/receipts', destination: '/peac', permanent: true },
      { source: '/declare', destination: '/downloads', permanent: true },
      { source: '/demo', destination: '/', permanent: true },
      { source: '/demo/:path*', destination: '/', permanent: true },
      { source: '/agent-proof-check', destination: '/', permanent: true },
      { source: '/agent-auditor', destination: '/', permanent: true },
      { source: '/agent-auditor/:path*', destination: '/', permanent: true },
      { source: '/integrations', destination: '/peac', permanent: true },
      { source: '/integrations/:path*', destination: '/peac', permanent: true },
      { source: '/guides/http-402', destination: '/peac', permanent: true },
      { source: '/guides/:path*', destination: '/peac', permanent: true },
      { source: '/enterprise', destination: '/pricing', permanent: true },
      { source: '/enterprise/:path*', destination: '/pricing', permanent: true },
      { source: '/pilots', destination: '/contact', permanent: true },
      { source: '/services', destination: '/pricing', permanent: true },
      { source: '/legal/privacy', destination: '/privacy', permanent: true },
      { source: '/legal/terms', destination: '/terms', permanent: true },
      { source: '/legal/payments', destination: '/pricing', permanent: true },
      // ---- 0.14.2 cleanup: P1 minor and ops surfaces ----
      { source: '/dashboard', destination: '/', permanent: true },
      { source: '/dashboard/:path*', destination: '/', permanent: true },
      { source: '/signin', destination: '/', permanent: true },
      { source: '/checkout', destination: '/', permanent: true },
      { source: '/checkout/:path*', destination: '/', permanent: true },
      { source: '/refund', destination: '/', permanent: true },
      { source: '/shipping', destination: '/', permanent: true },
      { source: '/offline', destination: '/', permanent: true },
      { source: '/search', destination: '/', permanent: true },
      { source: '/status', destination: '/', permanent: true },
      { source: '/cloud', destination: '/', permanent: true },
      { source: '/ai', destination: '/', permanent: true },
      { source: '/originary-ai', destination: '/', permanent: true },
      { source: '/context-graphs', destination: '/peac', permanent: true },
      { source: '/system-of-record', destination: '/peac', permanent: true },
      { source: '/research', destination: '/peac', permanent: true },
      { source: '/research/:path*', destination: '/peac', permanent: true },
      { source: '/resources', destination: '/', permanent: true },
      { source: '/resources/:path*', destination: '/', permanent: true },
      { source: '/changelog', destination: '/peac', permanent: true },
      { source: '/copyright', destination: '/terms', permanent: true },
      // CLI downloads -> PEAC Protocol release archives
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
      // Auth and transactional pages: noindex
      {
        source: '/signin',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
      {
        source: '/dashboard',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
      {
        source: '/checkout/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
      {
        source: '/status',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
      // Sitemap & Robots - Fix Vary header for crawlers
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
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
        destination: '/developers',
        permanent: true,
      },
      {
        source: '/open-source',
        destination: '/peac',
        permanent: true,
      },
      {
        source: '/trace/pricing',
        destination: '/pricing#trace',
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
        source: '/company/about',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/company/contact',
        destination: '/contact',
        permanent: true,
      },
            // CLI downloads → PEAC Protocol release archives
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
          { key: 'Content-Security-Policy', value: "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; font-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.clarity.ms; connect-src 'self' https:;" },
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
      // Sitemap & Robots - Fix Vary header for crawlers
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=86400' },
          { key: 'Vary', value: 'Accept-Encoding' },
          { key: 'Content-Type', value: 'application/xml; charset=utf-8' },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=86400' },
          { key: 'Vary', value: 'Accept-Encoding' },
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
        ],
      },
    ]
  },
}

module.exports = withMDX(nextConfig)
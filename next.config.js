/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/developers',
        permanent: true,
      },
      {
        source: '/.well-known/peac.txt',
        destination: '/peac.txt',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
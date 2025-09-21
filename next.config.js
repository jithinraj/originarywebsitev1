/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', '*.vercel.app']
    }
  },
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/developers',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
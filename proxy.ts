import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: [
    // Match all paths except static files and Next.js internals
    // Note: sitemap.xml and robots.txt are now INCLUDED so we can override headers
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?!xml|txt).*|api).*)',
    // Legacy prebuilt-binary paths, matched explicitly to return 410.
    '/downloads/originary-cli-1.0.0-darwin-arm64.zip',
    '/downloads/originary-cli-1.0.0-darwin-x64.zip',
    '/downloads/originary-cli-1.0.0-linux-x64.tar.gz',
    '/downloads/originary-cli-1.0.0-win-x64.zip',
  ],
}

const GONE_BINARIES = new Set([
  '/downloads/originary-cli-1.0.0-darwin-arm64.zip',
  '/downloads/originary-cli-1.0.0-darwin-x64.zip',
  '/downloads/originary-cli-1.0.0-linux-x64.tar.gz',
  '/downloads/originary-cli-1.0.0-win-x64.zip',
])

export function proxy(request: NextRequest) {
  const url = request.nextUrl
  const pathname = url.pathname

  // Legacy prebuilt binaries are no longer distributed. Return 410 Gone with a
  // migration message rather than redirecting to an unrelated source archive.
  if (GONE_BINARIES.has(pathname)) {
    return new NextResponse(
      'Gone. Prebuilt CLI binaries are no longer distributed. Install the current CLI from npm:\n\n  npm i -g @peac/cli\n\nOr get the source from https://github.com/peacprotocol/peac\n',
      {
        status: 410,
        headers: {
          'content-type': 'text/plain; charset=utf-8',
          'cache-control': 'public, max-age=3600',
          'x-robots-tag': 'noindex',
        },
      },
    )
  }

  // Sitemap and robots.txt - Force clean headers for crawlers
  if (pathname === '/sitemap.xml') {
    const response = NextResponse.next()
    // Delete dirty headers first, then set clean ones
    response.headers.delete('Vary')
    response.headers.set('Vary', 'Accept-Encoding')
    response.headers.set('Cache-Control', 'public, max-age=86400, s-maxage=86400')
    response.headers.set('Content-Type', 'application/xml; charset=utf-8')
    return response
  }

  if (pathname === '/robots.txt') {
    const response = NextResponse.next()
    // Delete dirty headers first, then set clean ones
    response.headers.delete('Vary')
    response.headers.set('Vary', 'Accept-Encoding')
    response.headers.set('Cache-Control', 'public, max-age=86400, s-maxage=86400')
    response.headers.set('Content-Type', 'text/plain; charset=utf-8')
    return response
  }

  // Skip proxy for other specific paths
  if (
    pathname.startsWith('/.well-known') ||
    pathname === '/sitemap_index.xml' ||
    pathname === '/sitemap.txt'
  ) {
    return NextResponse.next()
  }

  // Add canonical header for www version
  // Note: www redirect handled by Vercel edge (DNS settings)
  const response = NextResponse.next()
  response.headers.set('Link', `<https://www.originary.xyz${pathname}>; rel="canonical"`)

  return response
}
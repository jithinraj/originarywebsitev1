import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: [
    // Match all paths except static files and Next.js internals
    // Note: sitemap.xml and robots.txt are now INCLUDED so we can override headers
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?!xml|txt).*|api).*)',
  ],
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const hostname = request.headers.get('host') || ''
  const pathname = url.pathname

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

  // Skip middleware for other specific paths
  if (
    pathname.startsWith('/.well-known') ||
    pathname === '/sitemap_index.xml' ||
    pathname === '/sitemap.txt'
  ) {
    return NextResponse.next()
  }

  // Redirect non-www to www
  if (hostname === 'originary.xyz') {
    const redirectUrl = new URL(url.pathname + url.search, 'https://www.originary.xyz')
    return NextResponse.redirect(redirectUrl, 301)
  }

  // Add canonical header for www version
  const response = NextResponse.next()
  response.headers.set('Link', `<https://www.originary.xyz${pathname}>; rel="canonical"`)

  return response
}
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: [
    // Match all paths except static files and Next.js internals
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|sitemap_index.xml|sitemap.txt|.*\\..*|api).*)',
  ],
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const hostname = request.headers.get('host') || ''
  const pathname = url.pathname

  // Skip middleware for specific paths
  if (
    pathname.startsWith('/.well-known') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/sitemap_index.xml' ||
    pathname === '/sitemap.txt' ||
    pathname.endsWith('.xml') ||
    pathname.endsWith('.txt')
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
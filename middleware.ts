import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: [
    '/((?!\\.well-known|robots\\.txt|sitemap\\.xml|sitemap_index\\.xml|sitemaps/|_next/|favicon\\.ico|manifest\\.webmanifest).*)',
  ],
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const hostname = request.headers.get('host') || ''

  if (hostname === 'originary.xyz') {
    const redirectUrl = new URL(url.pathname + url.search, 'https://www.originary.xyz')
    return NextResponse.redirect(redirectUrl, 301)
  }

  return NextResponse.next()
}

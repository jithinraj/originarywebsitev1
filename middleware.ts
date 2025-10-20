// Middleware configuration
// Bypasses discovery, crawl, and Next.js internal endpoints to prevent interference

export const config = {
  // Never intercept:
  // - /.well-known/* (RFC 8615 discovery endpoints: peac.txt, aipref.json, security.txt)
  // - /robots.txt (crawler directives)
  // - /sitemap*.xml (dynamic sitemap routes and potential future index/shards)
  // - /_next/* (Next.js static assets and internals)
  // - /favicon.ico, /manifest.webmanifest (PWA and browser assets)
  matcher: [
    '/((?!\\.well-known|robots\\.txt|sitemap\\.xml|sitemap_index\\.xml|sitemaps/|_next/|favicon\\.ico|manifest\\.webmanifest).*)',
  ],
};

export function middleware() {
  // No middleware logic currently implemented
  // This file exists to protect discovery/crawl endpoints from future middleware additions
  return;
}

# Route inventory and dispositions

Updated 2026-07-14. One shell (components/home page-kit), one product
architecture, one vocabulary (lib/vocabulary.ts), one facts source
(lib/facts.ts). Gates: scripts/check-protocol-truth.mjs,
scripts/check-security-txt.mjs, scripts/check-marketing-terms.mjs.

## Canonical routes

| Route | Role |
|---|---|
| / | Homepage |
| /records | Record gallery |
| /verify | Interactive verification tool |
| /mcp, /ai-gateway, /agentic-commerce, /provisioning-records | Solution pages |
| /how-it-works | Architecture and trust model |
| /peac | Protocol page |
| /pricing | Pricing, deployment modes, pilot |
| /about, /contact, /downloads | Company surfaces |
| /trust, /security, /privacy, /terms, /legal/imprint, /legal/acceptable-use, /trademark | Trust and legal |
| /blog, /blog/verifiable-provisioning-records-agent-infrastructure | Editorial (current era) |

## Blog (2026-07-15)

Articles were restored rather than deleted. `lib/blog.ts` is the content
registry (status + indexable; dates are intentionally not tracked). Five
articles are `current` and indexable; five earlier HTTP 402-era tutorials are
`archived`: reachable, carrying a legacy notice, and `noindex`. The sitemap and
route registry derive indexable articles from this file automatically.

## Removed 2026-07-15 (permanent 308 migration in next.config.js)

| Legacy route | Destination |
|---|---|
| /products/verify | /verify |
| /products/gateway-402 | /agentic-commerce |
| /products, /products/* | /records |
| /integrations/mcp | /mcp |
| /integrations, /integrations/* | /records |
| /enterprise | /pricing |
| /trace, /trace/* | /ai-gateway |
| /receipts | /records |
| /demo | /verify |
| /developers | /downloads |
| /solutions/* | /records |
| /glossary/* | /peac |
| /what-is-originary | /about |
| /proof-check | /verify |
| /docs/mcp/* | /mcp |
| /docs/* | /peac |
| /agent-auditor | / |
| /declare | /downloads |
| /copyright | /terms |
| /learn, /learn/* | /blog (topic-specific 301s for the four articles) |
| /blog HTTP 402-era articles (9) | /agentic-commerce or /blog |
| /legal/privacy, /legal/terms, /legal/payments | /privacy, /terms, /pricing |
| /sitemap-main.xml | /sitemap.xml |

Removed API endpoints: /api/checkout/*, /api/x402-demo (legacy payment demo).
Removed legacy shells: NavigationHeader, legacy Footer(s), homepage/*,
PricingPage, Stripe buttons, Search, site-registry, integrations lib.

Rule: no canonical page may link to a removed route; the sitemap lists only
canonical routes; new routes must be added to this inventory.


## Redirect discipline (2026-07-15)

The redirect map was trimmed to exact one-to-one migrations of pages that
existed. Broad wildcards (`:path*`/`:path+`), article-to-generic redirects, and
the redundant trailing-slash redirect were removed; unknown legacy slugs now
404 so broken links surface. Legacy prebuilt-binary paths return 410 (proxy.ts)
instead of redirecting to unrelated source archives. `permanent: true` emits
308 (not 301); Google treats them equivalently. `scripts/check-redirects.mjs`
gates the map: no duplicates, loops, non-canonical destinations, wildcards, or
article-to-generic redirects. Canonical routes live in `lib/routes.ts`.

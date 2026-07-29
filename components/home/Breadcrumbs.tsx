import Link from 'next/link'
import { MAX_W, PAGE_PAD } from './palette'

/**
 * Visible breadcrumb plus the matching BreadcrumbList, emitted together so the
 * markup can never claim a hierarchy the page does not show.
 *
 * The trail is Home > Page. The site's nav groups (Product, Use Cases,
 * Developers, Company) are menus rather than pages, so they have no URL to put
 * in an intermediate BreadcrumbList item.
 */
export function Breadcrumbs({ current, href }: { current: string; href: string }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `https://www.originary.xyz${href}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.originary.xyz/' },
      { '@type': 'ListItem', position: 2, name: current, item: `https://www.originary.xyz${href}` },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="bc-nav">
        <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: `0 ${PAGE_PAD}` }}>
          <ol className="bc-list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-hidden className="bc-sep">
              /
            </li>
            <li>
              <span aria-current="page">{current}</span>
            </li>
          </ol>
        </div>
      </nav>
    </>
  )
}

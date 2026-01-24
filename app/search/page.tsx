import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Search from '@/components/Search'

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search Originary documentation, products, and resources.',
  robots: 'noindex',
}

export default function SearchPage() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main id="main-content" role="main" style={{ paddingTop: '80px' }}>
        <section className="section" style={{ paddingTop: 'var(--space-24)' }}>
          <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h1 style={{
              fontSize: 'var(--text-4xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-4)',
              textAlign: 'center'
            }}>
              Search
            </h1>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-8)',
              textAlign: 'center'
            }}>
              Find documentation, products, and resources
            </p>

            <Search placeholder="Search Originary..." />

            <div style={{
              marginTop: 'var(--space-12)',
              padding: 'var(--space-6)',
              background: 'var(--surface-subtle)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-default)'
            }}>
              <h2 style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)'
              }}>
                Quick Links
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: 'var(--space-3)'
              }}>
                {[
                  { label: 'Documentation', href: '/developers' },
                  { label: 'Pricing', href: '/pricing' },
                  { label: 'Products', href: '/products' },
                  { label: 'Blog', href: '/blog' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Status', href: '/status' },
                ].map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    style={{
                      padding: 'var(--space-3)',
                      background: 'var(--surface-elevated)',
                      border: '1px solid var(--border-default)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 500,
                      textAlign: 'center',
                      transition: 'all var(--duration-200) var(--ease-out)'
                    }}
                    className="hover-border"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

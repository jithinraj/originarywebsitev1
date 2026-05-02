import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

interface StaticPageLayoutProps {
  children: React.ReactNode
}

export default function StaticPageLayout({ children }: StaticPageLayoutProps) {
  return (
    <>
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        {children}
      </main>
      <Footer />
    </>
  )
}

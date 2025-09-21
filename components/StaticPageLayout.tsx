'use client'

import { SessionProvider } from 'next-auth/react'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

interface StaticPageLayoutProps {
  children: React.ReactNode
}

export default function StaticPageLayout({ children }: StaticPageLayoutProps) {
  return (
    <SessionProvider>
      <div className="wrap">
        <NavigationHeader />
        <main style={{ paddingTop: '80px' }}>
          {children}
        </main>
        <Footer />
      </div>
    </SessionProvider>
  )
}
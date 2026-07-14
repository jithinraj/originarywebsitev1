import { PageShell } from '@/components/home'

interface StaticPageLayoutProps {
  children: React.ReactNode
}

export default function StaticPageLayout({ children }: StaticPageLayoutProps) {
  return <PageShell>{children}</PageShell>
}

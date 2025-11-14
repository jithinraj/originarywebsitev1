import Link from 'next/link'

export default function OpenSourceBanner() {
  return (
    <div
      className="open-source-rail"
      style={{
        position: 'sticky',
        top: '80px',
        zIndex: 'calc(var(--z-sticky) - 1)',
        background: 'rgba(250, 248, 241, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--gray-200)',
        padding: 'var(--space-3) 0'
      }}
    >
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <Link href="/peac" className="btn btn-primary">
            Explore PEAC
          </Link>
          <Link href="/developers" className="btn btn-secondary">
            Developer quickstart
          </Link>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'

export default function PeacBadge() {
  return (
    <Link
      href="/peac"
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm hover:bg-neutral-50 transition-colors"
      style={{
        borderColor: 'rgba(99, 91, 255, 0.2)',
        color: 'var(--brand-primary)'
      }}
    >
      <span
        className="h-2 w-2 rounded-full bg-green-500"
        aria-hidden="true"
      />
      Built on PEAC
    </Link>
  )
}

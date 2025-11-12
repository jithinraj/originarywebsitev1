import Link from 'next/link'

export default function OpenSourceBanner() {
  return (
    <div
      className="rounded-2xl border p-4 md:p-6"
      style={{
        background: 'var(--gray-50)',
        borderColor: 'var(--gray-200)'
      }}
    >
      <h3
        className="text-base font-semibold"
        style={{ color: 'var(--gray-900)' }}
      >
        Open Source
      </h3>
      <p
        className="mt-1 text-sm"
        style={{
          color: 'var(--gray-600)',
          lineHeight: 1.6
        }}
      >
        PEAC Protocol, SDKs, and CLI are free under Apache-2.0. Self-host with
        official examples, or add Originary Cloud.
      </p>
      <div className="mt-3 flex gap-3 flex-wrap">
        <Link href="/peac" className="btn btn-primary">
          Explore PEAC
        </Link>
        <Link href="/developers" className="btn btn-secondary">
          Developer quickstart
        </Link>
      </div>
    </div>
  )
}

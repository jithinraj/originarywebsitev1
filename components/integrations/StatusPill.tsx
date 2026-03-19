import type { ProductStatus } from '@/lib/site-registry'

export default function StatusPill({ status }: { status: ProductStatus }) {
  const style = {
    available: 'bg-green-100 text-green-800',
    preview: 'bg-blue-100 text-blue-800',
    draft: 'bg-slate-100 text-slate-700',
    research: 'bg-slate-50 text-slate-500',
  }[status]

  const label = {
    available: 'Available',
    preview: 'Preview',
    draft: 'Draft',
    research: 'Research',
  }[status]

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${style}`}>
      {label}
    </span>
  )
}

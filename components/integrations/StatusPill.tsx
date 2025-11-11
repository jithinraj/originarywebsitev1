export default function StatusPill({ status }: { status: 'live' | 'coming_soon' | 'draft' }) {
  const style = {
    live: 'bg-green-100 text-green-800',
    coming_soon: 'bg-amber-100 text-amber-800',
    draft: 'bg-slate-100 text-slate-700'
  }[status];
  
  const label = {
    live: 'Live',
    coming_soon: 'Coming soon',
    draft: 'In draft'
  }[status];
  
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${style}`}>
      {label}
    </span>
  );
}

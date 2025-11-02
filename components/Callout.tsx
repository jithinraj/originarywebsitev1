export function Callout({ title, children }:{ title:string; children:React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-amber-200 p-4 bg-amber-50 my-4">
      <div className="font-medium text-amber-900 mb-1">{title}</div>
      <div className="text-sm text-gray-700">{children}</div>
    </div>
  );
}

export function TOC({ items }:{ items:{href:string;label:string}[] }) {
  if (!items?.length) return null;

  return (
    <nav aria-label="Table of contents" className="mb-6 p-4 bg-gray-50 rounded-lg border">
      <h2 className="text-sm font-semibold mb-2 text-gray-900">On this page</h2>
      <ul className="space-y-1 text-sm">
        {items.map(i=>(
          <li key={i.href}>
            <a className="text-gray-600 hover:text-gray-900 transition-colors" href={i.href}>
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

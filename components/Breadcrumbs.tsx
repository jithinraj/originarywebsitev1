export function Breadcrumbs({ trail }:{ trail:{href:string;label:string}[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm mb-4">
      <ol className="flex gap-2 text-gray-600">
        {trail.map((t, i)=>(
          <li key={t.href} className="flex items-center gap-2">
            <a href={t.href} className="hover:text-gray-900 transition-colors">
              {t.label}
            </a>
            {i < trail.length-1 && <span aria-hidden="true">›</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

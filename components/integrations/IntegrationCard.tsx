import Link from 'next/link';
import StatusPill from './StatusPill';
import type { Integration } from '@/lib/integrations';

export default function IntegrationCard({ item }: { item: Integration }) {
  return (
    <div className="rounded-2xl border p-4 hover:shadow-sm transition">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <StatusPill status={item.status} />
      </div>
      <p className="mt-2 text-sm text-slate-700">{item.summary}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {item.docUrl && (
          <Link className="text-sm underline" href={item.docUrl}>
            Guide
          </Link>
        )}
        {item.specUrl && (
          <a className="text-sm underline" href={item.specUrl} target="_blank" rel="noreferrer">
            Spec
          </a>
        )}
        {item.demoUrl && (
          <Link className="text-sm underline" href={item.demoUrl}>
            Demo
          </Link>
        )}
        {item.openapiUrl && (
          <Link className="text-sm underline" href={item.openapiUrl}>
            OpenAPI
          </Link>
        )}
        {item.postmanUrl && (
          <Link className="text-sm underline" href={item.postmanUrl}>
            Postman
          </Link>
        )}
      </div>
      {item.productTags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.productTags.map(t => (
            <span key={t} className="rounded border px-2 py-0.5 text-xs text-slate-700">
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

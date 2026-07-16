import Script from "next/script";

// Deterministic id derived from the payload (djb2). Same JSON -> same id on server and client, so the
// structured-data script hydrates without a mismatch, while distinct payloads still get distinct ids.
function stableId(json: object): string {
  const s = JSON.stringify(json);
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
  return `jsonld-${h.toString(36)}`;
}

export default function JsonLd({ json }: { json: object }) {
  return (
    <Script
      id={stableId(json)}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

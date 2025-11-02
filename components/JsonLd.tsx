import Script from "next/script";

export default function JsonLd({ json }:{ json: object }) {
  return (
    <Script
      id={`jsonld-${Math.random()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

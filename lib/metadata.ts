import type { Metadata } from "next";

export function baseMeta(p:{
  title:string;
  description:string;
  canonical:string;
}): Metadata {
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: p.canonical },
    openGraph: {
      title: p.title,
      description: p.description,
      type: "article",
      url: p.canonical
    },
    twitter: {
      card: "summary_large_image",
      title: p.title,
      description: p.description
    },
  };
}

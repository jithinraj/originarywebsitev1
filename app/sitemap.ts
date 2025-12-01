import type { MetadataRoute } from "next";
import sitemapData from "@/public/sitemap-data.json";

interface SitemapEntry {
  url: string;
  lastModified: string;
  priority?: number;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapData.map((entry: SitemapEntry) => ({
    url: entry.url,
    lastModified: new Date(entry.lastModified),
    changeFrequency: "weekly" as const,
    priority: entry.priority ?? 0.7,
  }));
}

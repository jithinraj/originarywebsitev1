import type { MetadataRoute } from "next";
import sitemapData from "@/public/sitemap-data.json";

export default function sitemapMain(): MetadataRoute.Sitemap {
  return sitemapData.map((entry: { url: string; lastModified: string }) => ({
    url: entry.url,
    lastModified: entry.lastModified,
    changeFrequency: "weekly" as const,
    priority: entry.url === "https://www.originary.xyz/" ? 1 : 0.8,
  }));
}

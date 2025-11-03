import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",          // crawl noise only
        ],
      },
    ],
    sitemap: [
      "https://www.originary.xyz/sitemap.xml",
      "https://www.originary.xyz/sitemap-main.xml"
    ],
  };
}

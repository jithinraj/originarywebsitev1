#!/usr/bin/env node
import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

// Routes to include in sitemap.
// Pages that exist on disk but are not listed here remain reachable; they
// just do not appear in the sitemap.
const routes = [
  "/",
  "/about",
  "/peac",
  "/downloads",
  "/pricing",
  "/contact",
  "/trust",
  "/security",
  "/privacy",
  "/terms",
  "/legal/imprint",
];

function lastmodForRoute(route) {
  const fileGuess = route === "/"
    ? "app/page.tsx"
    : `app${route}/page.tsx`;

  try {
    const iso = execSync(
      `git log -1 --format=%cI -- ${fileGuess}`,
      { stdio: ["ignore", "pipe", "ignore"], encoding: "utf-8" }
    ).toString().trim();

    return iso || new Date().toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

function priorityForRoute(route) {
  if (route === "/") return 1.0;
  if (["/trace", "/peac", "/originary-ai"].includes(route)) return 0.95;
  if (["/ai", "/cloud", "/pricing", "/developers"].includes(route)) return 0.9;
  if (route.startsWith("/products") || route.startsWith("/solutions")) return 0.8;
  if (route.startsWith("/blog/")) return 0.6;
  if (route.startsWith("/glossary/") || route.startsWith("/legal/")) return 0.5;
  return 0.7;
}

const data = routes.map(route => ({
  url: `https://www.originary.xyz${route}`,
  lastModified: lastmodForRoute(route),
  priority: priorityForRoute(route)
}));

const outputPath = resolve(process.cwd(), "public/sitemap-data.json");
writeFileSync(outputPath, JSON.stringify(data, null, 2));

console.log(`✓ Generated sitemap data with ${data.length} routes`);
console.log(`✓ Written to: ${outputPath}`);

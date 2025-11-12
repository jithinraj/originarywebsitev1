#!/usr/bin/env node

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const criticalPages = [
  { path: 'app/page.tsx', name: 'Homepage' },
  { path: 'app/peac/page.tsx', name: '/peac' },
  { path: 'app/trace', name: '/trace' },
  { path: 'app/pricing', name: '/pricing' },
  { path: 'app/developers/page.tsx', name: '/developers' },
  { path: 'app/integrations/page.tsx', name: '/integrations' },
  { path: 'app/about/page.tsx', name: '/about' },
  { path: 'app/contact', name: '/contact' },
];

let errors = 0;

console.log('🔍 Checking SEO metadata on critical pages...\n');

for (const page of criticalPages) {
  // Check both page.tsx and layout.tsx for client components
  let filePath = join(process.cwd(), page.path);
  let isDirectory = false;

  // If path doesn't end with .tsx, it's a directory - check layout.tsx first
  if (!page.path.endsWith('.tsx')) {
    isDirectory = true;
    const layoutPath = join(filePath, 'layout.tsx');
    const pagePath = join(filePath, 'page.tsx');

    if (existsSync(layoutPath)) {
      filePath = layoutPath;
    } else if (existsSync(pagePath)) {
      filePath = pagePath;
    } else {
      console.log(`⚠️  ${page.name} - Neither page.tsx nor layout.tsx found`);
      continue;
    }
  }

  if (!existsSync(filePath)) {
    console.log(`⚠️  ${page.name} - File not found: ${page.path}`);
    continue;
  }

  const content = readFileSync(filePath, 'utf-8');

  // Check for metadata export
  const hasMetadata = content.includes('export const metadata');

  if (!hasMetadata) {
    console.log(`❌ ${page.name} - Missing metadata export`);
    errors++;
    continue;
  }

  // Check for required fields
  const hasTitle = content.includes('title:');
  const hasDescription = content.includes('description:');
  const hasCanonical = content.includes('canonical:') || content.includes('alternates:');

  if (!hasTitle) {
    console.log(`❌ ${page.name} - Missing title in metadata`);
    errors++;
  }

  if (!hasDescription) {
    console.log(`❌ ${page.name} - Missing description in metadata`);
    errors++;
  }

  if (!hasCanonical && page.name !== 'Homepage') {
    console.log(`⚠️  ${page.name} - Missing canonical URL (recommended)`);
  }

  if (hasTitle && hasDescription) {
    console.log(`✅ ${page.name} - Metadata looks good`);
  }
}

console.log(`\n${errors === 0 ? '✨ All checks passed!' : `⚠️  Found ${errors} error(s)`}`);

process.exit(errors > 0 ? 1 : 0);

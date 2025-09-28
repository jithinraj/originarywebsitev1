#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  return new Date().toISOString().split('T')[0];
};

// Define page configurations with priorities and change frequencies
const pageConfigs = {
  '/': { priority: 1.0, changefreq: 'weekly' },
  '/originary-ai': { priority: 0.95, changefreq: 'weekly' }, // Top priority after homepage
  '/pricing': { priority: 0.9, changefreq: 'weekly' },
  '/developers': { priority: 0.9, changefreq: 'weekly' },
  '/products': { priority: 0.8, changefreq: 'weekly' },
  '/receipts': { priority: 0.8, changefreq: 'weekly' },
  '/solutions': { priority: 0.7, changefreq: 'weekly' },
  '/downloads': { priority: 0.7, changefreq: 'weekly' },
  '/company/contact': { priority: 0.7, changefreq: 'monthly' },
  '/company': { priority: 0.6, changefreq: 'monthly' },
  '/company/about': { priority: 0.6, changefreq: 'monthly' },
  '/dashboard': { priority: 0.6, changefreq: 'weekly' },
  '/brand': { priority: 0.5, changefreq: 'monthly' },
  // Product pages
  '/products/adapters': { priority: 0.7, changefreq: 'weekly' },
  '/products/gateway-402': { priority: 0.7, changefreq: 'weekly' },
  '/products/peac': { priority: 0.7, changefreq: 'weekly' },
  '/products/studio': { priority: 0.7, changefreq: 'weekly' },
  '/products/verify': { priority: 0.7, changefreq: 'weekly' },
  // Solution pages
  '/solutions/ai-builders': { priority: 0.7, changefreq: 'weekly' },
  '/solutions/api-providers': { priority: 0.7, changefreq: 'weekly' },
  '/solutions/enterprises': { priority: 0.7, changefreq: 'weekly' },
  '/solutions/publishers': { priority: 0.7, changefreq: 'weekly' },
  // Resources page (but not sub-pages)
  '/resources': { priority: 0.6, changefreq: 'weekly' }
};

// Pages to exclude from sitemap
const excludedPaths = [
  // Legal pages
  '/terms',
  '/privacy',
  '/security',
  '/copyright',
  '/trademark',
  '/legal/acceptable-use',
  '/legal/dpa',
  '/legal/payments',
  '/legal/privacy',
  '/legal/terms',
  // Resources sub-pages (excluded per request, but /resources itself is included)
  '/resources/blog',
  '/resources/case-studies',
  '/resources/changelog',
  '/resources/performance-methodology',
  // Other excluded pages
  '/signin',
  '/press'
];

// Discover all pages in the app directory
const discoverPages = () => {
  const appDir = path.join(__dirname, '..', 'app');
  const pages = [];

  const findPages = (dir, basePath = '') => {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        findPages(fullPath, basePath + '/' + item);
      } else if (item === 'page.tsx') {
        const pagePath = basePath || '/';
        pages.push(pagePath);
      }
    }
  };

  findPages(appDir);
  return pages;
};

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://originary.xyz';
  const currentDate = getCurrentDate();
  const discoveredPages = discoverPages();

  // Filter out excluded pages
  const includedPages = discoveredPages.filter(page => !excludedPaths.includes(page));

  // Sort pages by priority (highest first)
  const sortedPages = includedPages.sort((a, b) => {
    const priorityA = pageConfigs[a]?.priority || 0.5;
    const priorityB = pageConfigs[b]?.priority || 0.5;
    return priorityB - priorityA;
  });

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  for (const page of sortedPages) {
    const config = pageConfigs[page] || { priority: 0.5, changefreq: 'monthly' };

    xml += `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${config.priority}</priority>
  </url>`;
  }

  xml += `
</urlset>`;

  return xml;
};

// Write sitemap to public directory
const writeSitemap = () => {
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  const xml = generateSitemap();

  fs.writeFileSync(sitemapPath, xml, 'utf8');
  console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
  console.log(`📅 Generated on: ${getCurrentDate()}`);

  // Count included pages
  const discoveredPages = discoverPages();
  const includedPages = discoveredPages.filter(page => !excludedPaths.includes(page));
  console.log(`📄 Included ${includedPages.length} pages`);
  console.log(`🚫 Excluded ${discoveredPages.length - includedPages.length} pages`);
};

// Run the script
if (require.main === module) {
  writeSitemap();
}

module.exports = { generateSitemap, writeSitemap };
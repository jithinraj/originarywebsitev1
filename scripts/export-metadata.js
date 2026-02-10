#!/usr/bin/env node
/**
 * Metadata Export Script
 * Extracts title and description from all page.tsx files
 * Outputs to CSV and Markdown formats
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Find all page.tsx files
async function findPageFiles() {
  const files = await glob('app/**/page.tsx', {
    cwd: process.cwd(),
    ignore: ['**/node_modules/**', '**/.next/**']
  });
  return files.sort();
}

// Extract metadata from a file
function extractMetadata(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract title
  const titleMatch = content.match(/title:\s*['"](.*?)['"]/);
  const title = titleMatch ? titleMatch[1] : '';

  // Extract description
  const descMatch = content.match(/description:\s*['"](.*?)['"]/s);
  const description = descMatch ? descMatch[1].replace(/\n/g, ' ').replace(/\s+/g, ' ').trim() : '';

  // Convert file path to route
  const route = '/' + filePath
    .replace(/^app\//, '')
    .replace(/\/page\.tsx$/, '')
    .replace(/^page\.tsx$/, '');

  return {
    path: route,
    title: title.replace(/"/g, '""'), // Escape quotes for CSV
    description: description.replace(/"/g, '""')
  };
}

// Generate CSV
function generateCSV(metadata) {
  const header = 'path,title,description\n';
  const rows = metadata.map(m =>
    `"${m.path}","${m.title}","${m.description}"`
  ).join('\n');
  return header + rows;
}

// Generate Markdown
function generateMarkdown(metadata) {
  let md = '# Originary - Page Metadata Export\n\n';
  md += `Generated: ${new Date().toISOString().split('T')[0]}\n\n`;
  md += `Total pages: ${metadata.length}\n\n`;
  md += '| Path | Title | Description |\n';
  md += '|------|-------|-------------|\n';

  metadata.forEach(m => {
    const path = m.path.replace(/\|/g, '\\|');
    const title = m.title.replace(/\|/g, '\\|').replace(/"/g, '');
    const desc = m.description.replace(/\|/g, '\\|').replace(/"/g, '');
    md += `| ${path} | ${title} | ${desc} |\n`;
  });

  return md;
}

// Main execution
async function main() {
  console.log('🔍 Finding all page.tsx files...');
  const files = await findPageFiles();
  console.log(`📄 Found ${files.length} pages`);

  console.log('📊 Extracting metadata...');
  const metadata = files.map(file => {
    try {
      return extractMetadata(file);
    } catch (error) {
      console.error(`⚠️  Error processing ${file}:`, error.message);
      return null;
    }
  }).filter(Boolean);

  console.log(`✅ Extracted metadata from ${metadata.length} pages`);

  // Generate outputs
  const csv = generateCSV(metadata);
  const markdown = generateMarkdown(metadata);

  // Write files
  const seoDir = path.join(process.cwd(), 'seo');
  if (!fs.existsSync(seoDir)) {
    fs.mkdirSync(seoDir, { recursive: true });
  }

  fs.writeFileSync(path.join(seoDir, 'metadata.csv'), csv);
  console.log('📝 Written: seo/metadata.csv');

  fs.writeFileSync(path.join(seoDir, 'metadata.md'), markdown);
  console.log('📝 Written: seo/metadata.md');

  console.log('✨ Done!');
}

main().catch(console.error);

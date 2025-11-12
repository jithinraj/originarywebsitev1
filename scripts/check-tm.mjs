#!/usr/bin/env node

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const filesToCheck = [
  'app/peac/page.tsx',
  'app/about/page.tsx',
  'app/legal/imprint/page.tsx',
  'app/trademark/page.tsx',
  'app/page.tsx',
  'components/NavigationHeader.tsx',
  'components/Footer.tsx',
  'components/PeacBadge.tsx',
  'components/OpenSourceBanner.tsx',
];

let errors = 0;
let warnings = 0;

console.log('🔍 Checking trademark usage...\n');

// Check that PEAC Protocol never has TM symbol
console.log('Checking PEAC Protocol (should NEVER have TM)...');
for (const file of filesToCheck) {
  const filePath = join(process.cwd(), file);

  if (!existsSync(filePath)) {
    continue;
  }

  const content = readFileSync(filePath, 'utf-8');

  if (content.includes('PEAC Protocol™') || content.includes('PEAC Protocol&trade;')) {
    console.log(`❌ ${file} - Incorrectly uses TM on PEAC Protocol`);
    errors++;
  } else if (content.includes('PEAC Protocol')) {
    console.log(`✅ ${file} - PEAC Protocol correctly has no TM`);
  }
}

// Check that Originary brand HAS TM symbol in appropriate places
console.log('\nChecking Originary™ trademark...');
const brandFiles = [
  'app/trademark/page.tsx',
  'app/legal/imprint/page.tsx',
  'components/Footer.tsx',
];

for (const file of brandFiles) {
  const filePath = join(process.cwd(), file);

  if (!existsSync(filePath)) {
    continue;
  }

  const content = readFileSync(filePath, 'utf-8');

  if (content.includes('Originary™') || content.includes('Originary&trade;')) {
    console.log(`✅ ${file} - Has Originary™ trademark`);
  } else if (file === 'app/trademark/page.tsx' || file === 'app/legal/imprint/page.tsx') {
    console.log(`⚠️  ${file} - Should include Originary™ trademark`);
    warnings++;
  }
}

console.log(`\n${errors === 0 && warnings === 0 ? '✨ All trademark checks passed!' : `Found ${errors} error(s) and ${warnings} warning(s)`}`);

process.exit(errors > 0 ? 1 : 0);

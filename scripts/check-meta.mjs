import fs from 'fs';

// Check public robots.txt
const robots = fs.readFileSync('public/robots.txt','utf8');
const peac = fs.readFileSync('public/.well-known/peac.txt','utf8');

if (!robots.includes('Sitemap: https://www.originary.xyz/sitemap.xml'))
  throw new Error('robots.txt must point to https://www.originary.xyz/sitemap.xml');

if (!/\n/.test(peac) || peac.split('\n').length < 5)
  throw new Error('peac.txt must be multi-line canonical');

if (/originary\.org|http:\/\//i.test(robots))
  throw new Error('robots.txt must not reference originary.org or http://');

console.log('✅ robots.txt and peac.txt OK');
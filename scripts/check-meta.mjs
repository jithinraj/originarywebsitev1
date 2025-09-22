import fs from 'fs';

const robots = fs.readFileSync('public/robots.txt','utf8');
const peac = fs.readFileSync('public/peac.txt','utf8');

if (!/^User-agent: \*\nAllow: \/\nSitemap: https:\/\/originary\.xyz\/sitemap\.xml\n?$/.test(robots))
  throw new Error('robots.txt must be 3-line canonical and point to https://originary.xyz/sitemap.xml');

if (!/\n/.test(peac) || peac.split('\n').length < 5)
  throw new Error('peac.txt must be multi-line canonical');

if (/originary\.org|http:\/\//i.test(robots)) throw new Error('robots.txt must not reference originary.org or http://');

console.log('✅ robots.txt and peac.txt OK');
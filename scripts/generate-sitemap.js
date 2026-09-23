import { writeFileSync } from 'node:fs';
import solutions from '../src/data/solutions.js';

const SITE_URL = 'https://guardvue.co.za';

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/solutions', priority: '0.9', changefreq: 'weekly' },
  { path: '/gallery', priority: '0.7', changefreq: 'monthly' },
  { path: '/about', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
];

const solutionRoutes = solutions.map((s) => ({
  path: `/solutions/${s.slug}`,
  priority: '0.8',
  changefreq: 'monthly',
}));

const lastmod = new Date().toISOString().split('T')[0];

const urls = [...staticRoutes, ...solutionRoutes]
  .map(
    ({ path, priority, changefreq }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), sitemap);
writeFileSync(new URL('../public/robots.txt', import.meta.url), robots);

console.log(`Sitemap generated with ${staticRoutes.length + solutionRoutes.length} URLs`);

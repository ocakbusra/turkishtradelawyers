#!/usr/bin/env node

// Update sitemap.xml with industry pages

const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
const today = new Date().toISOString().split('T')[0];

// Import additional industries
const additional1 = require('./additional-industries-1.js');
const additional2 = require('./additional-industries-2.js');
const additional3 = require('./additional-industries-3.js');
const additional4 = require('./additional-industries-4.js');
const additional5 = require('./additional-industries-5.js');

// Base industries (extracted from original array manually for now or use just the strings)
const baseIndustries = [
  "accounting", "agriculture", "airlines-aviation", "alternative-dispute-resolution",
  "alternative-medicine", "animation", "apparel-fashion", "architecture-planning",
  "arts-crafts", "automotive", "aviation-aerospace", "banking", "biotechnology",
  "broadcast-media", "building-materials", "business-supplies-equipment", "capital-markets",
  "chemicals", "civic-social-organization", "civil-engineering", "commercial-real-estate",
  "computer-network-security", "computer-games", "computer-hardware", "computer-networking",
  "computer-software", "construction", "consumer-electronics", "consumer-goods",
  "consumer-services", "cosmetics", "dairy", "defense-space", "design", "e-learning",
  "education-management", "electrical-electronic-manufacturing", "entertainment",
  "environmental-services", "events-services", "farming", "financial-services",
  "fine-art", "fishery"
];

// Combine all IDs
const allIds = [
  ...baseIndustries,
  ...additional1.map(i => i.id),
  ...additional2.map(i => i.id),
  ...additional3.map(i => i.id),
  ...additional4.map(i => i.id),
  ...additional5.map(i => i.id)
];

// Read existing sitemap
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

// Update main industries page
if (sitemap.includes('industries.html')) {
  sitemap = sitemap.replace(
    /(<url>\s*<loc>https:\/\/www\.turkishtradelawyers\.com\/industries\.html<\/loc>\s*<lastmod>)[^<]+(<\/lastmod>)/g,
    `$1${today}$2`
  );
} else {
  // Add main page if missing (unlikely but good safety)
  sitemap = sitemap.replace('</urlset>', `
  <url>
    <loc>https://www.turkishtradelawyers.com/industries.html</loc>
    <lastmod>${today}</lastmod>
    <priority>0.9</priority>
  </url>
</urlset>`);
}

let newUrls = "";
let addedCount = 0;
let updatedCount = 0;

allIds.forEach(id => {
  const urlPattern = `https://www.turkishtradelawyers.com/industries/${id}.html`;

  if (sitemap.includes(urlPattern)) {
    // Update existing
    const regex = new RegExp(`(<url>\\s*<loc>${urlPattern}</loc>\\s*<lastmod>)[^<]+(</lastmod>)`, 'g');
    sitemap = sitemap.replace(regex, `$1${today}$2`);
    updatedCount++;
  } else {
    // Add new
    newUrls += `
  <url>
    <loc>${urlPattern}</loc>
    <lastmod>${today}</lastmod>
    <priority>0.7</priority>
  </url>`;
    addedCount++;
  }
});

if (newUrls) {
  sitemap = sitemap.replace('</urlset>', `${newUrls}\n</urlset>`);
}

// Write updated sitemap
fs.writeFileSync(sitemapPath, sitemap);
console.log(`Updated ${updatedCount} existing URLs.`);
console.log(`Added ${addedCount} new industry URLs to sitemap.xml.`);
console.log('Sitemap updated successfully!');

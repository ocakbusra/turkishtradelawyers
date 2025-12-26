#!/usr/bin/env node

// Sitemap Generator for Glossary Pages
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.turkishtradelawyers.com';
const today = new Date().toISOString().split('T')[0];

// Load existing sitemap
const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
let existingContent = fs.readFileSync(sitemapPath, 'utf8');

// Remove closing tag
existingContent = existingContent.replace('</urlset>', '');

// Get all glossary pages
const glossaryDir = __dirname;
const glossaryFiles = fs.readdirSync(glossaryDir)
    .filter(f => f.endsWith('.html'))
    .sort();

// Generate new entries
let newEntries = `  <!-- Glossary Main Page -->
  <url>
    <loc>${baseUrl}/glossary.html</loc>
    <lastmod>${today}</lastmod>
    <priority>0.9</priority>
  </url>
`;

glossaryFiles.forEach(file => {
    newEntries += `  <url>
    <loc>${baseUrl}/glossary/${file}</loc>
    <lastmod>${today}</lastmod>
    <priority>0.6</priority>
  </url>
`;
});

// Combine and close
const newSitemap = existingContent + newEntries + '</urlset>\n';

// Write updated sitemap
fs.writeFileSync(sitemapPath, newSitemap);

console.log(`Added ${glossaryFiles.length + 1} glossary URLs to sitemap.xml`);
console.log('Sitemap updated successfully!');

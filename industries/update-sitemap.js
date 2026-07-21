#!/usr/bin/env node

// Rebuild sitemaps through the central indexability policy.
const { spawnSync } = require('child_process');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const result = spawnSync('python3', ['update_sitemap.py'], {
  cwd: rootDir,
  stdio: 'inherit'
});

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);

#!/bin/bash
# SEO Enhancement Script for Turkish Trade Lawyers
# This script provides utilities for programmatic SEO updates

# Site configuration
SITE_URL="https://www.turkishtradelawyers.com"
SITE_NAME="Turkish Trade Lawyers"

echo "==========================================
Turkish Trade Lawyers - SEO Enhancement Tool
=========================================="

# Function to generate sitemap
generate_sitemap() {
    echo "Generating sitemap.xml..."
    
    SITEMAP_FILE="sitemap.xml"
    DATE=$(date +%Y-%m-%d)
    
    cat > $SITEMAP_FILE << 'SITEMAP_HEADER'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
SITEMAP_HEADER

    # Add homepage
    echo "  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${DATE}</lastmod>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>" >> $SITEMAP_FILE

    # Add main pages
    for page in guides.html regions.html ourexperts.html; do
        if [ -f "$page" ]; then
            echo "  <url>
    <loc>${SITE_URL}/${page}</loc>
    <lastmod>${DATE}</lastmod>
    <priority>0.8</priority>
    <changefreq>weekly</changefreq>
  </url>" >> $SITEMAP_FILE
        fi
    done

    # Add article pages
    for article in *.html; do
        if [[ "$article" != "index.html" && "$article" != "guides.html" && "$article" != "regions.html" && "$article" != "ourexperts.html" && "$article" != "cookie-policy.html" && "$article" != "disclaimer.html" && "$article" != "privacy-notice.html" ]]; then
            if [ -f "$article" ]; then
                echo "  <url>
    <loc>${SITE_URL}/${article}</loc>
    <lastmod>${DATE}</lastmod>
    <priority>0.7</priority>
    <changefreq>monthly</changefreq>
  </url>" >> $SITEMAP_FILE
            fi
        fi
    done

    # Add country pages
    for country in countries/country-*.html; do
        if [ -f "$country" ]; then
            echo "  <url>
    <loc>${SITE_URL}/${country}</loc>
    <lastmod>${DATE}</lastmod>
    <priority>0.7</priority>
    <changefreq>monthly</changefreq>
  </url>" >> $SITEMAP_FILE
        fi
    done

    echo "</urlset>" >> $SITEMAP_FILE
    echo "Sitemap generated: $SITEMAP_FILE"
}

# Function to check for missing canonical tags
check_canonical() {
    echo "Checking for missing canonical tags..."
    for file in *.html countries/*.html; do
        if [ -f "$file" ]; then
            if ! grep -q 'rel="canonical"' "$file"; then
                echo "⚠️ Missing canonical: $file"
            fi
        fi
    done
    echo "Canonical check complete."
}

# Function to check for missing meta descriptions
check_meta_descriptions() {
    echo "Checking for missing meta descriptions..."
    for file in *.html countries/*.html; do
        if [ -f "$file" ]; then
            if ! grep -q 'name="description"' "$file"; then
                echo "⚠️ Missing meta description: $file"
            fi
        fi
    done
    echo "Meta description check complete."
}

# Function to check for missing Open Graph tags
check_og_tags() {
    echo "Checking for missing Open Graph tags..."
    for file in *.html countries/*.html; do
        if [ -f "$file" ]; then
            if ! grep -q 'property="og:title"' "$file"; then
                echo "⚠️ Missing OG tags: $file"
            fi
        fi
    done
    echo "Open Graph check complete."
}

# Function to list pages without structured data
check_structured_data() {
    echo "Checking for missing structured data..."
    for file in *.html countries/*.html; do
        if [ -f "$file" ]; then
            if ! grep -q 'application/ld+json' "$file"; then
                echo "⚠️ Missing structured data: $file"
            fi
        fi
    done
    echo "Structured data check complete."
}

# Function to count internal links
count_links() {
    echo "Counting internal links on each page..."
    for file in *.html; do
        if [ -f "$file" ]; then
            count=$(grep -o 'href="[^"]*\.html"' "$file" | wc -l)
            echo "$file: $count internal links"
        fi
    done
}

# Main menu
echo "
Available commands:
1. generate_sitemap - Generate fresh sitemap.xml
2. check_canonical - Check for missing canonical tags
3. check_meta_descriptions - Check for missing meta descriptions  
4. check_og_tags - Check for missing Open Graph tags
5. check_structured_data - Check for missing JSON-LD
6. count_links - Count internal links per page
7. all - Run all checks

Usage: ./seo-tools.sh [command]
"

case "$1" in
    generate_sitemap)
        generate_sitemap
        ;;
    check_canonical)
        check_canonical
        ;;
    check_meta_descriptions)
        check_meta_descriptions
        ;;
    check_og_tags)
        check_og_tags
        ;;
    check_structured_data)
        check_structured_data
        ;;
    count_links)
        count_links
        ;;
    all)
        check_canonical
        echo ""
        check_meta_descriptions
        echo ""
        check_og_tags
        echo ""
        check_structured_data
        echo ""
        count_links
        ;;
    *)
        echo "Run with a command argument (e.g., ./seo-tools.sh check_canonical)"
        ;;
esac

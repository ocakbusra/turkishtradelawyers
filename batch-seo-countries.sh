#!/bin/bash

# Batch SEO Enhancement Script for Country Pages
# This script adds Open Graph tags, Twitter Cards, and structured data to country pages

cd /Users/busraocak/Desktop/turkish\ trade/countries

# Define country data: filename|display_name|keywords
countries=(
"country-albania.html|Albania|Albanian"
"country-andorra.html|Andorra|Andorran"
"country-austria.html|Austria|Austrian"
"country-belarus.html|Belarus|Belarusian"
"country-belgium.html|Belgium|Belgian"
"country-bosnia.html|Bosnia|Bosnian"
"country-bulgaria.html|Bulgaria|Bulgarian"
"country-china.html|China|Chinese"
"country-croatia.html|Croatia|Croatian"
"country-cyprus.html|Cyprus|Cypriot"
"country-czechia.html|Czechia|Czech"
"country-denmark.html|Denmark|Danish"
"country-estonia.html|Estonia|Estonian"
"country-finland.html|Finland|Finnish"
"country-france.html|France|French"
"country-greece.html|Greece|Greek"
"country-guangzhou.html|Guangzhou|Guangzhou Chinese"
"country-hong-kong.html|Hong Kong|Hong Kong"
"country-hungary.html|Hungary|Hungarian"
"country-iceland.html|Iceland|Icelandic"
"country-ireland.html|Ireland|Irish"
"country-italy.html|Italy|Italian"
"country-kosovo.html|Kosovo|Kosovar"
"country-latvia.html|Latvia|Latvian"
"country-lithuania.html|Lithuania|Lithuanian"
"country-luxembourg.html|Luxembourg|Luxembourgish"
"country-malta.html|Malta|Maltese"
"country-moldova.html|Moldova|Moldovan"
"country-montenegro.html|Montenegro|Montenegrin"
"country-netherlands.html|Netherlands|Dutch"
"country-north-macedonia.html|North Macedonia|Macedonian"
"country-norway.html|Norway|Norwegian"
"country-poland.html|Poland|Polish"
"country-portugal.html|Portugal|Portuguese"
"country-qatar.html|Qatar|Qatari"
"country-romania.html|Romania|Romanian"
"country-saudi-arabia.html|Saudi Arabia|Saudi"
"country-serbia.html|Serbia|Serbian"
"country-shanghai.html|Shanghai|Shanghai Chinese"
"country-slovakia.html|Slovakia|Slovak"
"country-slovenia.html|Slovenia|Slovenian"
"country-spain.html|Spain|Spanish"
"country-sweden.html|Sweden|Swedish"
"country-switzerland.html|Switzerland|Swiss"
"country-uae.html|UAE|UAE Emirati"
"country-ukraine.html|Ukraine|Ukrainian"
"country-united-kingdom.html|United Kingdom|British UK"
"country-usa.html|USA|American US"
)

for country_info in "${countries[@]}"; do
    IFS='|' read -r filename display_name adjective <<< "$country_info"
    
    # Skip if file doesn't exist or is already enhanced (Germany)
    if [[ ! -f "$filename" ]]; then
        echo "⚠️ File not found: $filename"
        continue
    fi
    
    if [[ "$filename" == "country-germany.html" ]]; then
        echo "✅ Skipping Germany (already enhanced)"
        continue
    fi
    
    # Check if already has OG tags
    if grep -q 'og:type' "$filename"; then
        echo "✅ Already enhanced: $filename"
        continue
    fi
    
    echo "📝 Enhancing: $filename ($display_name)"
    
    # Create the SEO block to insert
    seo_block="    <meta name=\"robots\" content=\"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1\">
    <meta name=\"keywords\" content=\"${adjective} companies Turkey, Turkish law for ${display_name}, ${display_name} Turkey trade, business setup Turkey, ${adjective} investment Turkey\">

    <!-- Open Graph -->
    <meta property=\"og:type\" content=\"website\">
    <meta property=\"og:title\" content=\"Legal Services for ${adjective} Companies in Turkey\">
    <meta property=\"og:description\" content=\"Expert legal services for ${adjective} companies entering the Turkish market. Secure investment, compliance, and legal representation.\">
    <meta property=\"og:url\" content=\"https://www.turkishtradelawyers.com/countries/${filename}\">
    <meta property=\"og:site_name\" content=\"Turkish Trade Lawyers\">
    <meta property=\"og:image\" content=\"https://www.turkishtradelawyers.com/logo-square.png\">

    <!-- Twitter Card -->
    <meta name=\"twitter:card\" content=\"summary\">
    <meta name=\"twitter:title\" content=\"Legal Services for ${adjective} Companies in Turkey\">
    <meta name=\"twitter:description\" content=\"Expert legal services for ${adjective} companies entering the Turkish market.\">"

    # Create temp file
    tmpfile=$(mktemp)
    
    # Read the file line by line and insert SEO block after <title>
    while IFS= read -r line; do
        echo "$line" >> "$tmpfile"
        # Insert SEO block after the title line
        if [[ "$line" =~ \<title\> ]]; then
            echo "" >> "$tmpfile"
            echo "$seo_block" >> "$tmpfile"
        fi
    done < "$filename"
    
    # Replace original with enhanced version
    mv "$tmpfile" "$filename"
    
    echo "✅ Enhanced: $filename"
done

echo ""
echo "🎉 Batch SEO enhancement complete!"
echo "Run './seo-tools.sh check_og_tags' to verify"

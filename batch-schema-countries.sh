#!/bin/bash

# Batch script to add JSON-LD structured data to country pages
# Adds Breadcrumb and Service schema for each country

cd /Users/busraocak/Desktop/turkish\ trade/countries

# Define country data: filename|display_name
countries=(
"country-albania.html|Albania"
"country-andorra.html|Andorra"
"country-austria.html|Austria"
"country-belarus.html|Belarus"
"country-belgium.html|Belgium"
"country-bosnia.html|Bosnia"
"country-bulgaria.html|Bulgaria"
"country-china.html|China"
"country-croatia.html|Croatia"
"country-cyprus.html|Cyprus"
"country-czechia.html|Czechia"
"country-denmark.html|Denmark"
"country-estonia.html|Estonia"
"country-finland.html|Finland"
"country-france.html|France"
"country-greece.html|Greece"
"country-guangzhou.html|Guangzhou"
"country-hong-kong.html|Hong Kong"
"country-hungary.html|Hungary"
"country-iceland.html|Iceland"
"country-ireland.html|Ireland"
"country-italy.html|Italy"
"country-kosovo.html|Kosovo"
"country-latvia.html|Latvia"
"country-lithuania.html|Lithuania"
"country-luxembourg.html|Luxembourg"
"country-malta.html|Malta"
"country-moldova.html|Moldova"
"country-montenegro.html|Montenegro"
"country-netherlands.html|Netherlands"
"country-north-macedonia.html|North Macedonia"
"country-norway.html|Norway"
"country-poland.html|Poland"
"country-portugal.html|Portugal"
"country-qatar.html|Qatar"
"country-romania.html|Romania"
"country-saudi-arabia.html|Saudi Arabia"
"country-serbia.html|Serbia"
"country-shanghai.html|Shanghai"
"country-slovakia.html|Slovakia"
"country-slovenia.html|Slovenia"
"country-spain.html|Spain"
"country-sweden.html|Sweden"
"country-switzerland.html|Switzerland"
"country-uae.html|United Arab Emirates"
"country-ukraine.html|Ukraine"
"country-united-kingdom.html|United Kingdom"
"country-usa.html|United States"
)

for country_info in "${countries[@]}"; do
    IFS='|' read -r filename display_name <<< "$country_info"
    
    # Skip if file doesn't exist or already has structured data
    if [[ ! -f "$filename" ]]; then
        echo "⚠️ File not found: $filename"
        continue
    fi
    
    if [[ "$filename" == "country-germany.html" ]]; then
        echo "✅ Skipping Germany (already has schema)"
        continue
    fi
    
    # Check if already has structured data
    if grep -q 'application/ld+json' "$filename"; then
        echo "✅ Already has schema: $filename"
        continue
    fi
    
    echo "📝 Adding schema to: $filename ($display_name)"
    
    # Create the schema block - insert before </head>
    schema_block="
    <!-- Breadcrumb Schema -->
    <script type=\"application/ld+json\">
    {
        \"@context\": \"https://schema.org\",
        \"@type\": \"BreadcrumbList\",
        \"itemListElement\": [
            {\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.turkishtradelawyers.com\"},
            {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Regions\", \"item\": \"https://www.turkishtradelawyers.com/regions.html\"},
            {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"${display_name}\"}
        ]
    }
    </script>

    <!-- Service Schema -->
    <script type=\"application/ld+json\">
    {
        \"@context\": \"https://schema.org\",
        \"@type\": \"Service\",
        \"name\": \"Legal Services for ${display_name} Companies in Turkey\",
        \"provider\": {\"@type\": \"LegalService\", \"name\": \"Turkish Trade Lawyers\"},
        \"areaServed\": {\"@type\": \"Country\", \"name\": \"${display_name}\"},
        \"serviceType\": [\"International Trade Law\", \"Corporate Law\", \"Regulatory Compliance\"]
    }
    </script>"

    # Use sed to insert schema before </head>
    sed -i '' "s|</head>|${schema_block}\\
</head>|" "$filename"
    
    echo "✅ Schema added: $filename"
done

echo ""
echo "🎉 Batch schema addition complete!"
echo "Run './seo-tools.sh check_structured_data' to verify"

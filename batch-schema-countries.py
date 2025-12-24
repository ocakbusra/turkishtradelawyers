#!/usr/bin/env python3
"""
Batch script to add JSON-LD structured data to country pages.
Adds Breadcrumb and Service schema for each country.
"""

import os

# Define country data: filename -> display_name
countries = {
    "country-albania.html": "Albania",
    "country-andorra.html": "Andorra",
    "country-austria.html": "Austria",
    "country-belarus.html": "Belarus",
    "country-belgium.html": "Belgium",
    "country-bosnia.html": "Bosnia",
    "country-bulgaria.html": "Bulgaria",
    "country-china.html": "China",
    "country-croatia.html": "Croatia",
    "country-cyprus.html": "Cyprus",
    "country-czechia.html": "Czechia",
    "country-denmark.html": "Denmark",
    "country-estonia.html": "Estonia",
    "country-finland.html": "Finland",
    "country-france.html": "France",
    "country-greece.html": "Greece",
    "country-guangzhou.html": "Guangzhou",
    "country-hong-kong.html": "Hong Kong",
    "country-hungary.html": "Hungary",
    "country-iceland.html": "Iceland",
    "country-ireland.html": "Ireland",
    "country-italy.html": "Italy",
    "country-kosovo.html": "Kosovo",
    "country-latvia.html": "Latvia",
    "country-lithuania.html": "Lithuania",
    "country-luxembourg.html": "Luxembourg",
    "country-malta.html": "Malta",
    "country-moldova.html": "Moldova",
    "country-montenegro.html": "Montenegro",
    "country-netherlands.html": "Netherlands",
    "country-north-macedonia.html": "North Macedonia",
    "country-norway.html": "Norway",
    "country-poland.html": "Poland",
    "country-portugal.html": "Portugal",
    "country-qatar.html": "Qatar",
    "country-romania.html": "Romania",
    "country-saudi-arabia.html": "Saudi Arabia",
    "country-serbia.html": "Serbia",
    "country-shanghai.html": "Shanghai",
    "country-slovakia.html": "Slovakia",
    "country-slovenia.html": "Slovenia",
    "country-spain.html": "Spain",
    "country-sweden.html": "Sweden",
    "country-switzerland.html": "Switzerland",
    "country-uae.html": "United Arab Emirates",
    "country-ukraine.html": "Ukraine",
    "country-united-kingdom.html": "United Kingdom",
    "country-usa.html": "United States",
}

def create_schema_block(display_name):
    """Create the JSON-LD schema block for a country."""
    return f'''
    <!-- Breadcrumb Schema -->
    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.turkishtradelawyers.com"}},
            {{"@type": "ListItem", "position": 2, "name": "Regions", "item": "https://www.turkishtradelawyers.com/regions.html"}},
            {{"@type": "ListItem", "position": 3, "name": "{display_name}"}}
        ]
    }}
    </script>

    <!-- Service Schema -->
    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Legal Services for {display_name} Companies in Turkey",
        "provider": {{"@type": "LegalService", "name": "Turkish Trade Lawyers"}},
        "areaServed": {{"@type": "Country", "name": "{display_name}"}},
        "serviceType": ["International Trade Law", "Corporate Law", "Regulatory Compliance"]
    }}
    </script>
'''

def process_country_file(filepath, display_name):
    """Add schema to a country file if not already present."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already has structured data
    if 'application/ld+json' in content:
        print(f"✅ Already has schema: {os.path.basename(filepath)}")
        return False
    
    # Insert schema before </head>
    schema_block = create_schema_block(display_name)
    new_content = content.replace('</head>', schema_block + '</head>')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"📝 Schema added: {os.path.basename(filepath)} ({display_name})")
    return True

def main():
    base_dir = "/Users/busraocak/Desktop/turkish trade/countries"
    
    updated = 0
    skipped = 0
    
    for filename, display_name in countries.items():
        filepath = os.path.join(base_dir, filename)
        
        if not os.path.exists(filepath):
            print(f"⚠️ File not found: {filename}")
            continue
        
        # Skip Germany (already enhanced manually)
        if filename == "country-germany.html":
            print(f"✅ Skipping Germany (already enhanced)")
            skipped += 1
            continue
        
        if process_country_file(filepath, display_name):
            updated += 1
        else:
            skipped += 1
    
    print(f"\n🎉 Batch schema addition complete!")
    print(f"   Updated: {updated} files")
    print(f"   Skipped: {skipped} files")

if __name__ == "__main__":
    main()

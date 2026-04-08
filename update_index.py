import re

# Read services.html
with open('services.html', 'r', encoding='utf-8') as f:
    services_html = f.read()

# Extract Practice Areas section
match = re.search(r'(<section id="practice-areas" class="practice-areas">.*?</section>\n)', services_html, re.DOTALL)
if not match:
    print("Could not find practice areas section in services.html")
    exit(1)
practice_areas_section = match.group(1)

# Ensure the id is "services" so navbar anchor links to it work
# BUT wait, the navbar is href="services.html" or "#services"?
# Let's check. Wait, in index.html the navbar link is `<a href="#services" class="nav-link">Services</a>`.
# Oh wait, services.html has id="practice-areas". I'll change it to id="services".
practice_areas_section = practice_areas_section.replace('id="practice-areas"', 'id="services"')

# Read index.html
with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

# Remove existing "Comprehensive Legal Services" section 
# <section id="services" class="services section">
index_html = re.sub(r'<section id="services" class="services section">.*?</section>\n', '', index_html, flags=re.DOTALL)

# Insert it before <section id="about" class="about-v2 section">
about_section_marker = '<section id="about" class="about-v2 section">'
if about_section_marker in index_html:
    index_html = index_html.replace(about_section_marker, practice_areas_section + '\n    ' + about_section_marker)
else:
    print("Could not find about section in index.html to insert before")
    exit(1)

# Write back to index.html
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(index_html)

print("Successfully updated index.html")

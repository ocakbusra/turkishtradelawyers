import re

def update_ui(filepath):
    # Read index.html
    with open('index.html', 'r', encoding='utf-8') as f:
        index_content = f.read()

    # Extract navbar
    nav_match = re.search(r'<nav class="navbar" id="navbar">.*?</nav>', index_content, re.DOTALL)
    if not nav_match:
        print("Navbar not found in index.html")
        return
    navbar_content = nav_match.group(0)
    # Fix relative links for subpages if needed (optional but good practice)
    navbar_content = navbar_content.replace('href="#home"', 'href="index.html#home"')
    navbar_content = navbar_content.replace('href="#why-us"', 'href="index.html#why-us"')

    # Extract footer
    footer_match = re.search(r'<footer class="footer">.*?</footer>', index_content, re.DOTALL)
    if not footer_match:
        print("Footer not found in index.html")
        return
    footer_content = footer_match.group(0)

    # Process target file
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace navbar
    content = re.sub(r'<nav class="navbar" id="navbar">.*?</nav>', navbar_content, content, flags=re.DOTALL)

    # Replace footer
    content = re.sub(r'<footer class="footer">.*?</footer>', footer_content, content, flags=re.DOTALL)

    # Optimize the aside cards padding/margin (fixing "altları çok geniş olmuş")
    # Change style="padding: 24px;" to style="padding: 16px; margin-bottom: 16px;"
    content = content.replace('style="padding: 24px;"', 'style="padding: 16px; margin-bottom: 15px;"')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated {filepath}")

files = [
    'intellectual-property-law-services-turkey.html',
    'trademark-registration-turkey.html'
]

for f in files:
    update_ui(f)

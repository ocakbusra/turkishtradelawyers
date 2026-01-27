import os
import xml.etree.ElementTree as ET
from datetime import datetime

BASE_URL = "https://www.turkishtradelawyers.com"
ROOT_DIR = "."
SITEMAP_FILE = "sitemap.xml"
# XML namespace handling
ET.register_namespace('', "http://www.sitemaps.org/schemas/sitemap/0.9")
NAMESPACE = "{http://www.sitemaps.org/schemas/sitemap/0.9}"

def get_html_files():
    html_files = []
    for root, dirs, files in os.walk(ROOT_DIR):
        # Exclude hidden directories like .git
        dirs[:] = [d for d in dirs if not d.startswith('.')]
        
        for file in files:
            if file.endswith(".html"):
                # create relative path
                rel_path = os.path.relpath(os.path.join(root, file), ROOT_DIR)
                if rel_path.startswith("./"):
                    rel_path = rel_path[2:]
                html_files.append(rel_path)
    return html_files

def update_sitemap():
    try:
        tree = ET.parse(SITEMAP_FILE)
        root = tree.getroot()
    except Exception as e:
        print(f"Error parsing sitemap: {e}")
        return

    existing_urls = set()
    for url in root.findall(f"{NAMESPACE}url"):
        loc_elem = url.find(f"{NAMESPACE}loc")
        if loc_elem is not None:
            existing_urls.add(loc_elem.text.strip())
        
    all_html_files = get_html_files()
    added_count = 0
    today = datetime.now().strftime("%Y-%m-%d")
    
    print(f"Found {len(all_html_files)} HTML files in directory.")
    print(f"Found {len(existing_urls)} URLs in sitemap.")

    for file_path in all_html_files:
        if file_path == "index.html":
            full_urls_to_check = [f"{BASE_URL}/", f"{BASE_URL}/index.html"]
        else:
            full_urls_to_check = [f"{BASE_URL}/{file_path}"]
            
        # Check if any variant exists
        exists = any(u in existing_urls for u in full_urls_to_check)
        
        if not exists:
            # Use the most appropriate URL format
            if file_path == "index.html":
                final_url = f"{BASE_URL}/"
            else:
                final_url = f"{BASE_URL}/{file_path}"
                
            print(f"Adding new page: {final_url}")
            
            new_url = ET.SubElement(root, "url")
            loc = ET.SubElement(new_url, "loc")
            loc.text = final_url
            
            lastmod = ET.SubElement(new_url, "lastmod")
            lastmod.text = today
            
            priority = ET.SubElement(new_url, "priority")
            # Logic for priority
            if "how-to" in file_path or "guide" in file_path:
                priority.text = "0.8"
            elif "/" not in file_path: # Top level pages
                priority.text = "0.9"
            else:
                priority.text = "0.7"
            
            added_count += 1
            
    # Also check if 'how-to-enter-turkish-market.html' needs lastmod update
    # Since I just edited it, I should update its lastmod if it exists
    target_page = f"{BASE_URL}/how-to-enter-turkish-market.html"
    for url in root.findall(f"{NAMESPACE}url"):
        loc = url.find(f"{NAMESPACE}loc").text
        if loc == target_page:
             lastmod = url.find(f"{NAMESPACE}lastmod")
             if lastmod is not None:
                 if lastmod.text != today:
                     print(f"Updating lastmod for {target_page}")
                     lastmod.text = today
                     added_count += 1 # Count as a change

    if added_count > 0:
        # manual indentation for pretty printing not supported by ElementTree nicely without external libs
        # but we can try basic string manipulation/indentation if needed, or just let it be compact.
        # usually XML parsers handle whitespace. To be safe/pretty, we can rely on verifying output later.
        tree.write(SITEMAP_FILE, encoding="UTF-8", xml_declaration=True)
        print(f"Successfully updated sitemap. {added_count} entries added or updated.")
    else:
        print("Sitemap is up to date.")

if __name__ == "__main__":
    update_sitemap()

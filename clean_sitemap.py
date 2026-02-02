import xml.etree.ElementTree as ET
from datetime import datetime

SITEMAP_FILE = "sitemap.xml"
NAMESPACE = "{http://www.sitemaps.org/schemas/sitemap/0.9}"
ET.register_namespace('', "http://www.sitemaps.org/schemas/sitemap/0.9")

def clean_sitemap():
    try:
        tree = ET.parse(SITEMAP_FILE)
        root = tree.getroot()
    except Exception as e:
        print(f"Error parsing sitemap: {e}")
        return

    # Dictionary to store unique URLs maps to the element
    # If duplicate found, we can keep the one with newer date or just the first one?
    # Let's keep the one with the latest lastmod.
    unique_urls = {}
    
    # We can't iterate and remove easily.
    # So let's collect all valid url elements.
    all_urls = root.findall(f"{NAMESPACE}url")
    
    if not all_urls:
         print("No URLs found.")
         return

    print(f"Total URLs found: {len(all_urls)}")
    
    # Clear root content
    # root.clear() # This removes everything including attributes? No, but maybe risky.
    # Better to create a new list of children.
    
    for url_elem in all_urls:
        loc = url_elem.find(f"{NAMESPACE}loc")
        if loc is None or not loc.text:
            continue
            
        url_text = loc.text.strip()
        lastmod = url_elem.find(f"{NAMESPACE}lastmod")
        lastmod_text = lastmod.text if lastmod is not None else ""
        
        if url_text in unique_urls:
            # Check if this one is newer
            existing_elem, existing_date = unique_urls[url_text]
            if lastmod_text > existing_date:
                unique_urls[url_text] = (url_elem, lastmod_text)
        else:
            unique_urls[url_text] = (url_elem, lastmod_text)

    print(f"Unique URLs: {len(unique_urls)}")
    
    # Rebuild the tree
    # Remove all children
    for child in list(root):
        root.remove(child)
        
    # Add back unique ones
    # Sort by URL for neatness? Or just add.
    # Sorting makes it easier to diff later.
    sorted_urls = sorted(unique_urls.keys())
    
    for url in sorted_urls:
        elem, _ = unique_urls[url]
        root.append(elem)
        
    tree.write(SITEMAP_FILE, encoding="UTF-8", xml_declaration=True)
    print("Sitemap cleaned.")

if __name__ == "__main__":
    clean_sitemap()

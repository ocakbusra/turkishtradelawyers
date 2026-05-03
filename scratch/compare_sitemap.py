
import os

BASE_URL = "https://www.turkishtradelawyers.com/"

def get_actual_files():
    files = []
    for root, dirs, filenames in os.walk("."):
        dirs[:] = [d for d in dirs if not d.startswith('.') and d != "components"]
        for f in filenames:
            if f.endswith(".html"):
                rel = os.path.relpath(os.path.join(root, f), ".")
                if rel == "index.html":
                    files.append("")
                else:
                    files.append(rel)
    return set(files)

def get_sitemap_files():
    import xml.etree.ElementTree as ET
    NAMESPACE = "{http://www.sitemaps.org/schemas/sitemap/0.9}"
    try:
        tree = ET.parse("sitemap.xml")
        root = tree.getroot()
        urls = []
        for url in root.findall(f"{NAMESPACE}url"):
            loc = url.find(f"{NAMESPACE}loc").text
            path = loc.replace(BASE_URL, "")
            urls.append(path)
        return set(urls)
    except:
        return set()

actual = get_actual_files()
sitemap = get_sitemap_files()

missing = actual - sitemap
extra = sitemap - actual

print(f"Missing from sitemap: {len(missing)}")
for m in sorted(list(missing)):
    print(f"  - {m}")

print(f"\nExtra in sitemap: {len(extra)}")
for e in sorted(list(extra)):
    print(f"  - {e}")

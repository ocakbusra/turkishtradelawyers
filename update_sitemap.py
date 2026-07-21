import glob
import os
import xml.etree.ElementTree as ET
from datetime import datetime
from html.parser import HTMLParser
from urllib.parse import urljoin, urlparse

BASE_URL = "https://www.turkishtradelawyers.com"
ROOT_DIR = "."
SITEMAP_FILE = "sitemap.xml"
EXCLUDE_DIRS = {".git", "components", "assets", "images", "scratch"}

# XML namespace handling
ET.register_namespace('', "http://www.sitemaps.org/schemas/sitemap/0.9")
NAMESPACE = "{http://www.sitemaps.org/schemas/sitemap/0.9}"


class HeadPolicyParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.noindex = False
        self.meta_refresh = False
        self.canonical = None

    def handle_starttag(self, tag, attrs):
        attributes = {key.lower(): value for key, value in attrs if value is not None}
        if tag.lower() == "meta":
            name = attributes.get("name", "").lower()
            content = attributes.get("content", "").lower()
            if name == "robots" and "noindex" in content:
                self.noindex = True
            if attributes.get("http-equiv", "").lower() == "refresh":
                self.meta_refresh = True
        elif tag.lower() == "link" and "canonical" in attributes.get("rel", "").lower().split():
            self.canonical = attributes.get("href")


def normalized_url(url):
    parsed = urlparse(url)
    path = parsed.path or "/"
    return f"{parsed.scheme.lower()}://{parsed.netloc.lower()}{path}".rstrip("/")


def exclusion_reason(full_path, url_path):
    parser = HeadPolicyParser()
    with open(full_path, "r", encoding="utf-8", errors="ignore") as handle:
        parser.feed(handle.read())

    if parser.noindex:
        return "noindex"
    if parser.meta_refresh:
        return "meta refresh"
    if parser.canonical:
        page_url = f"{BASE_URL}/{url_path}" if url_path else f"{BASE_URL}/"
        canonical_url = urljoin(page_url, parser.canonical)
        if normalized_url(canonical_url) != normalized_url(page_url):
            return f"canonical points to {canonical_url}"
    return None

def get_html_files():
    html_files = {} # url_path: full_path
    skipped_files = {} # url_path: exclusion reason
    for root, dirs, files in os.walk(ROOT_DIR):
        dirs[:] = [d for d in dirs if not d.startswith('.') and d not in EXCLUDE_DIRS]
        for file in files:
            if file.endswith(".html"):
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, ROOT_DIR)
                if rel_path.startswith("./"):
                    rel_path = rel_path[2:]
                
                if rel_path == "index.html":
                    url_path = ""
                else:
                    url_path = rel_path
                reason = exclusion_reason(full_path, url_path)
                if reason:
                    skipped_files[url_path] = reason
                else:
                    html_files[url_path] = full_path
    return html_files, skipped_files


def path_from_url(url):
    path = urlparse(url).path.lstrip("/")
    return "" if path in ("", "index.html") else path

def get_existing_metadata():
    metadata = {} # path: {lastmod, priority}
    if not os.path.exists(SITEMAP_FILE):
        return metadata
    
    try:
        tree = ET.parse(SITEMAP_FILE)
        root = tree.getroot()
        for url_elem in root.findall(f"{NAMESPACE}url"):
            loc_elem = url_elem.find(f"{NAMESPACE}loc")
            if loc_elem is not None and loc_elem.text:
                url = loc_elem.text.strip()
                path = url.replace(BASE_URL + "/", "")
                if url == BASE_URL or url == BASE_URL + "/":
                    path = ""
                
                lastmod = url_elem.find(f"{NAMESPACE}lastmod")
                priority = url_elem.find(f"{NAMESPACE}priority")
                
                metadata[path] = {
                    "lastmod": lastmod.text if lastmod is not None else None,
                    "priority": priority.text if priority is not None else None
                }
    except Exception as e:
        print(f"Warning: Could not parse existing sitemap metadata: {e}")
    return metadata

def update_sitemap():
    actual_files, skipped_files = get_html_files()
    existing_metadata = get_existing_metadata()
    today = datetime.now().strftime("%Y-%m-%d")
    
    # Create fresh root
    root = ET.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    
    sorted_paths = sorted(actual_files.keys())
    added = 0
    
    for path in sorted_paths:
        final_url = f"{BASE_URL}/{path}"
        url_elem = ET.SubElement(root, "url")
        
        loc = ET.SubElement(url_elem, "loc")
        loc.text = final_url
        
        # Use existing metadata if available, else defaults
        meta = existing_metadata.get(path, {})
        
        lastmod_val = meta.get("lastmod")
        if not lastmod_val:
            lastmod_val = today
            added += 1
            print(f"Adding new page: {final_url}")
        
        lastmod = ET.SubElement(url_elem, "lastmod")
        lastmod.text = lastmod_val
        
        priority_val = meta.get("priority")
        if not priority_val:
            if path == "":
                priority_val = "1.0"
            elif "guide" in path or "how-to" in path:
                priority_val = "0.8"
            elif "/" not in path:
                priority_val = "0.9"
            else:
                priority_val = "0.7"
        
        priority = ET.SubElement(url_elem, "priority")
        priority.text = priority_val

    # Save fresh sitemap
    tree = ET.ElementTree(root)
    indent(root)
    tree.write(SITEMAP_FILE, encoding="UTF-8", xml_declaration=True)

    clean_auxiliary_sitemaps(set(actual_files))

    print(f"Sitemap updated successfully. {len(sorted_paths)} pages listed.")
    print(f"Excluded {len(skipped_files)} non-indexable pages.")
    for path, reason in sorted(skipped_files.items()):
        print(f"Skipping {path or 'index.html'}: {reason}")


def clean_auxiliary_sitemaps(indexable_paths):
    for sitemap_path in sorted(glob.glob("sitemap-*.xml")):
        tree = ET.parse(sitemap_path)
        root = tree.getroot()
        removed = 0
        for url_elem in list(root.findall(f"{NAMESPACE}url")):
            loc_elem = url_elem.find(f"{NAMESPACE}loc")
            if loc_elem is None or not loc_elem.text:
                root.remove(url_elem)
                removed += 1
                continue
            if path_from_url(loc_elem.text.strip()) not in indexable_paths:
                root.remove(url_elem)
                removed += 1
        if removed:
            indent(root)
            tree.write(sitemap_path, encoding="UTF-8", xml_declaration=True)
            print(f"Removed {removed} non-indexable URLs from {sitemap_path}.")

def indent(elem, level=0):
    i = "\n" + level*"  "
    if len(elem):
        if not elem.text or not elem.text.strip():
            elem.text = i + "  "
        if not elem.tail or not elem.tail.strip():
            elem.tail = i
        for child in list(elem):
            indent(child, level+1)
        if not child.tail or not child.tail.strip():
            child.tail = i
    else:
        if level and (not elem.tail or not elem.tail.strip()):
            elem.tail = i

if __name__ == "__main__":
    update_sitemap()

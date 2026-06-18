import xml.etree.ElementTree as ET
import urllib.request
import json
import os
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

API_KEY = "ed0090fcead641a7ad2bc1979988b247"
HOST = "www.turkishtradelawyers.com"
KEY_LOCATION = f"https://{HOST}/{API_KEY}.txt"

def get_urls_from_sitemap(sitemap_path):
    urls = []
    try:
        tree = ET.parse(sitemap_path)
        root = tree.getroot()
        
        # Sitemaps usually have a default namespace
        namespaces = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
        
        for url_element in root.findall('ns:url', namespaces):
            loc = url_element.find('ns:loc', namespaces)
            if loc is not None and loc.text:
                urls.append(loc.text.strip())
                
        # Fallback if namespaces fail
        if not urls:
            for loc in root.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc'):
                if loc.text:
                    urls.append(loc.text.strip())
                    
        # General fallback without namespace constraint
        if not urls:
            for elem in root.iter():
                if 'loc' in elem.tag:
                    if elem.text:
                        urls.append(elem.text.strip())
                        
    except Exception as e:
        print(f"Error parsing sitemap: {e}")
    return urls

def submit_indexnow(urls):
    if not urls:
        print("No URLs found to submit.")
        return

    data = {
        "host": HOST,
        "key": API_KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls
    }

    json_data = json.dumps(data).encode('utf-8')
    
    endpoints = [
        "https://api.indexnow.org/indexnow",
        "https://www.bing.com/indexnow",
        "https://yandex.com/indexnow"
    ]
    
    for endpoint in endpoints:
        print(f"\nSubmitting {len(urls)} URLs to {endpoint}...")
        req = urllib.request.Request(endpoint, data=json_data, headers={'Content-Type': 'application/json', 'charset': 'utf-8'})
        try:
            with urllib.request.urlopen(req) as response:
                print(f"Success: {response.status} - {response.reason}")
        except urllib.error.HTTPError as e:
            print(f"HTTP Error: {e.code} - {e.reason}")
            try:
                print(e.read().decode('utf-8'))
            except:
                pass
        except Exception as e:
            print(f"Error: {e}")

if __name__ == "__main__":
    sitemap_path = "/Users/busraocak/Desktop/turkish trade/sitemap.xml"
    urls = get_urls_from_sitemap(sitemap_path)
    print(f"Found {len(urls)} URLs in sitemap.")
    submit_indexnow(urls)

import os
from bs4 import BeautifulSoup

ip_file = "intellectual-property-law-services-turkey.html"

with open(ip_file, "r", encoding="utf-8") as f:
    soup = BeautifulSoup(f, "html.parser")

# 1. Clean Boilerplate Text under H2s
# The boilerplate paragraphs start with specific strings. We can identify them and decompose them.
boilerplate_starts = [
    "Intellectual property (IP) is a critical asset",
    "Navigating this complex regulatory environment",
    "Furthermore, the rapid pace of technological",
    "In addition to traditional IP rights",
    "The enforcement of IP rights in Turkey",
    "Alternative dispute resolution (ADR) mechanisms",
    "Ultimately, a successful IP strategy"
]

for p in soup.find_all("p"):
    text = p.get_text(strip=True)
    if any(text.startswith(b) for b in boilerplate_starts):
        p.decompose()

# 2. Clean Boilerplate Text inside Timeline Bodies
# Keep only the first <p> in each timeline-body
timeline_bodies = soup.find_all("div", class_="timeline-body")
for body in timeline_bodies:
    p_tags = body.find_all("p", recursive=False)
    if len(p_tags) > 1:
        # keep the first one, remove the rest
        for p in p_tags[1:]:
            p.decompose()

# 3. Move 'IP Intelligence' section to left column
# We need to find the <h2 id="ip-intelligence">
ip_intel_h2 = soup.find("h2", id="ip-intelligence")
if ip_intel_h2:
    # Elements to move: the h2, the <p> after it, and the <div class="legal-timeline"> after that
    to_move = [ip_intel_h2]
    
    # Get the next siblings until the next h2
    sib = ip_intel_h2.find_next_sibling()
    while sib and sib.name != "h2":
        to_move.append(sib)
        sib = sib.find_next_sibling()
        
    dr_main_content = soup.find("div", class_="service-main-content")
    if dr_main_content:
        for elem in to_move:
            dr_main_content.append(elem)

# 4. Fix sidebar navigation
link_list = soup.find("ul", class_="service-link-list")
if link_list:
    # Check if 'definition' link already exists
    if not link_list.find("a", href="#definition"):
        li = soup.new_tag("li")
        a = soup.new_tag("a", href="#definition")
        a.string = "What Is IP Law in Turkey?"
        li.append(a)
        link_list.insert(0, li)

with open(ip_file, "w", encoding="utf-8") as f:
    f.write(str(soup))

print("Cleanup complete!")

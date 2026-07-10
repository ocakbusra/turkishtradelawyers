import os
from bs4 import BeautifulSoup
import re

ip_file = "intellectual-property-law-services-turkey.html"
dr_file = "dispute-resolution-in-turkey.html"

with open(ip_file, "r", encoding="utf-8") as f:
    ip_soup = BeautifulSoup(f, "html.parser")

with open(dr_file, "r", encoding="utf-8") as f:
    dr_soup = BeautifulSoup(f, "html.parser")

# 1. We keep the IP file as the base, but we replace its <main> content with a modified <main> from DR file
# Actually, the user wants to use DR's layout and design.
# Let's clone DR's soup, and inject IP's content into it, then save it as IP file.
new_soup = BeautifulSoup(str(dr_soup), "html.parser")

# A. Replace Head Title and Meta tags
# Let's copy the entire <head> from IP, EXCEPT for any styles.css link if there are differences, but they use the same styles.css
import copy
new_soup.head.replace_with(copy.copy(ip_soup.head))

# B. Replace Hero Section
ip_hero = ip_soup.find("section", class_="service-landing-hero")
dr_hero = new_soup.find("section", class_="service-landing-hero")
if ip_hero and dr_hero:
    dr_hero.replace_with(BeautifulSoup(str(ip_hero), "html.parser"))

# C. Extract content blocks from IP
# IP main content has two intro cards, then multiple H2s with timelines
ip_main = ip_soup.find("div", class_="service-main-content")
intro_cards = ip_main.find_all("div", class_="glass-card intro-card")

# The rest of the content (H2s, p tags, timelines) up to the first loop.
# Let's gather elements sequentially after the last intro card until we hit <h2 id='ip-intelligence'> for the SECOND time
content_elements = []
first_ip_intel = False

for elem in ip_main.children:
    if elem.name is None and elem.string.strip() == "":
        continue
    
    # We stop collecting if we hit the second loop of IP Intelligence
    if elem.name == "h2" and elem.get("id") == "ip-intelligence":
        if first_ip_intel:
            break
        first_ip_intel = True
        
    content_elements.append(elem)

# Separate into left column (intro cards) and full-width (H2s + timelines)
# We will put intro cards into the `service-main-content` of DR
dr_main_content = new_soup.find("div", class_="service-main-content")
dr_main_content.clear()

for card in intro_cards:
    dr_main_content.append(BeautifulSoup(str(card), "html.parser"))

# D. Full-Width Section
# The remaining content (H2s, p, and timelines) will go to `dispute-fullwidth-section` -> `container dispute-fullwidth-inner`
dr_fullwidth_inner = new_soup.find("div", class_="dispute-fullwidth-inner")
dr_fullwidth_inner.clear()

# Add the rest of the content elements that are not intro_cards
for elem in content_elements:
    if hasattr(elem, "get") and "intro-card" not in str(elem.get("class", [])):
        dr_fullwidth_inner.append(BeautifulSoup(str(elem), "html.parser"))
    elif not hasattr(elem, "get"):
        dr_fullwidth_inner.append(BeautifulSoup(str(elem), "html.parser"))

# E. Update the Aside (Sidebar)
# Change Title
aside = new_soup.find("aside")
if aside:
    on_this_page = aside.find("ul", class_="service-link-list")
    if on_this_page:
        on_this_page.clear()
        # Add links based on extracted H2s
        for elem in content_elements:
            if elem.name == "h2":
                link_text = elem.text
                link_id = elem.get("id") or "section"
                li = new_soup.new_tag("li")
                a = new_soup.new_tag("a", href=f"#{link_id}")
                a.string = link_text
                li.append(a)
                on_this_page.append(li)
                
    # Change Typical Triggers
    typical_triggers = aside.find_all("div", class_="service-sidebar-card")[1]
    if typical_triggers:
        h3 = typical_triggers.find("h3")
        if h3 and h3.text == "Typical Triggers":
            ul = typical_triggers.find("ul")
            ul.clear()
            triggers = [
                "Patent application and FTO searches",
                "Trademark registration and oppositions",
                "Design protection and infringement",
                "Anti-counterfeiting and customs recordals",
                "IP portfolio management and intelligence"
            ]
            for t in triggers:
                li = new_soup.new_tag("li")
                li.string = t
                ul.append(li)
                
    # Update Form
    form_card = aside.find("div", class_="sidebar-form-card")
    if form_card:
        form_h3 = form_card.find("h3")
        if form_h3: form_h3.string = "Discuss your IP Strategy"
        
        # Change dropdown
        select = form_card.find("select", id="dispute-type")
        if select:
            select["name"] = "ip_service_type"
            select.clear()
            opts = [
                ("", "Select Category"),
                ("Patent", "Patents & FTO"),
                ("Trademark", "Trademarks & Designs"),
                ("Anti-Counterfeiting", "Anti-Counterfeiting"),
                ("IP Intelligence", "IP Intelligence & Monitoring"),
                ("Other", "Other IP Services")
            ]
            for val, text in opts:
                opt = new_soup.new_tag("option", value=val)
                opt.string = text
                select.append(opt)

# F. Optional: DR has a minimal-cta in the debt-collection restructuring but this is dispute-resolution.
# dispute-resolution-in-turkey.html doesn't seem to have been restructured with restructure_page.py?
# Wait, restructure_page.py modifies debt-collection. dispute-resolution is untouched by it.
# So we just use DR as it is.

with open(ip_file, "w", encoding="utf-8") as f:
    f.write(str(new_soup))

print("Successfully injected IP content into DR layout.")

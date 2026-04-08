import re

with open('services.html', 'r', encoding='utf-8') as f:
    services_html = f.read()

# Extract from /* Practice Areas Grid */ up to /* Core Areas of Turkish Law Section */
match = re.search(r'(/\* Practice Areas Grid \*/.*?)(?=\s*/\* Core Areas of Turkish Law Section \*/)', services_html, re.DOTALL)
if match:
    styles_to_copy = match.group(1)
    with open('styles.css', 'a', encoding='utf-8') as f:
        f.write("\n" + styles_to_copy + "\n")
    print("Successfully copied styles")
else:
    print("Could not find style section")

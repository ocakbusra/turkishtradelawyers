import re
import sys

def slugify(text):
    text = re.sub(r'<[^>]+>', '', text)
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s-]+', '-', text).strip('-')
    return text

with open("debt-collection-in-turkey.html", "r", encoding="utf-8") as f:
    html = f.read()

# We need to find the start of the massive content.
# The content starts immediately after <div class="container service-landing-layout"> <div>
# Let's locate the first h2 inside it.
start_idx = html.find('<h2>1. Introduction to Debt Collection in Türkiye: A Macro-Legal Perspective</h2>')

if start_idx == -1:
    print("Could not find start of content")
    sys.exit(1)

# The content ends before `<div class="sources-box">`
end_idx = html.find('<div class="sources-box">')
if end_idx == -1:
    print("Could not find end of content")
    sys.exit(1)

# Extract the content blocks
main_content = html[start_idx:end_idx]

# Remove the old large form at the bottom of the content blocks
old_form_start = main_content.find('<div class="service-section-card cta-section"')
if old_form_start != -1:
    main_content = main_content[:old_form_start]

# Parse H2s and inject IDs
h2_pattern = re.compile(r'<h2>(.*?)</h2>', re.IGNORECASE)
toc_links = []
modified_content = main_content

# Find all matches before replacing to avoid offset issues
matches = list(h2_pattern.finditer(main_content))

for match in matches:
    h2_text = match.group(1)
    slug = slugify(h2_text)
    toc_links.append((slug, h2_text))
    # Replace the h2 with one containing an id
    modified_content = modified_content.replace(match.group(0), f'<h2 id="{slug}">{h2_text}</h2>', 1)

# Create Mid-Page Minimal CTA (after Section 6)
minimal_cta_html = """
<div class="minimal-cta" style="background: linear-gradient(135deg, var(--dark-blue), var(--primary-blue)); color: white; padding: 32px; border-radius: 12px; margin: 40px 0; display: flex; flex-direction: column; gap: 20px; box-shadow: 0 10px 30px rgba(45,76,200,0.15);">
    <div style="display: flex; align-items: center; gap: 15px;">
        <i class="fas fa-scale-balanced" style="font-size: 24px; color: var(--accent-teal);"></i>
        <h3 style="margin: 0; color: white; font-size: 20px;">Need Immediate Assistance with a Claim?</h3>
    </div>
    <p style="margin: 0; font-size: 15px; color: rgba(255,255,255,0.8);">Get a free preliminary assessment from our senior debt recovery attorneys. We respond within 24 hours.</p>
    <form action="#" method="POST" style="display: flex; gap: 15px; flex-wrap: wrap;">
        <input type="text" placeholder="Your Name" required style="flex: 1; min-width: 150px; padding: 12px 16px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.1); color: white; border-radius: 6px; outline: none;">
        <input type="email" placeholder="Work Email" required style="flex: 1; min-width: 150px; padding: 12px 16px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.1); color: white; border-radius: 6px; outline: none;">
        <button type="submit" class="btn" style="background: var(--accent-teal); color: var(--dark-blue); font-weight: 700; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; white-space: nowrap;">Request Assessment</button>
    </form>
</div>
"""

# Insert minimal CTA after section 6
# Let's find "<h2>7. " in the modified content and insert right before it
section_7_idx = modified_content.find('<h2 id="7-the-tactical-masterstroke-provisional-attachment-ihtiyati-haciz">')
if section_7_idx != -1:
    # Insert right before the div class="service-section-card" containing section 7
    # Since we don't have exact div indices easily, let's just insert before the <h2> for simplicity,
    # but wait, it's inside a .service-section-card. It's better to insert between cards.
    # We will search for <div class="service-section-card"> just before section 7
    card_start = modified_content.rfind('<div class="service-section-card">', 0, section_7_idx)
    if card_start != -1:
        modified_content = modified_content[:card_start] + minimal_cta_html + "\n" + modified_content[card_start:]


# Build Sidebar HTML
toc_html = """
<aside class="pillar-sidebar">
    <div class="sticky-toc">
        <h4 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: var(--text-gray); margin-bottom: 16px;">Table of Contents</h4>
        <nav>
            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">
"""
for slug, text in toc_links:
    toc_html += f'                <li><a href="#{slug}" style="text-decoration: none; color: var(--text-dark); font-size: 14px; font-weight: 500; transition: color 0.3s; line-height: 1.4; display: block;">{text}</a></li>\n'
toc_html += """            </ul>
        </nav>
        
        <div style="margin-top: 40px; padding: 24px; background: var(--light-gray); border-radius: 12px; border-left: 4px solid var(--primary-blue);">
            <h5 style="color: var(--dark-blue); font-size: 16px; margin-bottom: 10px;">Expert Representation</h5>
            <p style="font-size: 13px; color: var(--text-gray); margin-bottom: 15px;">Our team has successfully recovered millions of dollars for cross-border clients through Turkish execution offices.</p>
            <a href="contact.html" style="font-size: 13px; font-weight: 600; color: var(--primary-blue); text-decoration: none;">Contact Us <i class="fas fa-arrow-right" style="font-size: 11px; margin-left: 4px;"></i></a>
        </div>
    </div>
</aside>
"""

# Restructure the Layout
# We need to find the <div class="container service-landing-layout"> and replace everything inside it up to <div class="sources-box">
layout_start_idx = html.find('<div class="container service-landing-layout">')
inner_div_start = html.find('<div>', layout_start_idx)

# Add custom CSS to the document head
custom_css = """
    <style>
        .pillar-grid {
            display: grid;
            grid-template-columns: 320px 1fr;
            gap: 60px;
            align-items: start;
        }
        .pillar-sidebar {
            position: sticky;
            top: 100px; /* Account for navbar */
            height: calc(100vh - 120px);
            overflow-y: auto;
            padding-right: 20px;
        }
        .pillar-sidebar::-webkit-scrollbar {
            width: 4px;
        }
        .pillar-sidebar::-webkit-scrollbar-thumb {
            background: rgba(0,0,0,0.1);
            border-radius: 4px;
        }
        .sticky-toc a:hover {
            color: var(--primary-blue) !important;
        }
        .pillar-content {
            min-width: 0;
        }
        .pillar-content .service-section-card {
            box-shadow: none;
            border: none;
            border-bottom: 1px solid var(--border-gray);
            border-radius: 0;
            padding: 40px 0;
            margin: 0;
            background: transparent;
        }
        .pillar-content .service-section-card:last-child {
            border-bottom: none;
        }
        .pillar-content h2 {
            font-size: 28px;
            color: var(--dark-blue);
            margin-bottom: 24px;
            line-height: 1.3;
        }
        .pillar-content h3 {
            font-size: 20px;
            color: var(--primary-blue);
            margin-top: 32px;
            margin-bottom: 16px;
        }
        .pillar-content p, .pillar-content ul, .pillar-content ol {
            font-size: 16px;
            line-height: 1.8;
            color: var(--text-gray);
            margin-bottom: 20px;
        }
        .pillar-content li {
            margin-bottom: 12px;
        }
        .pillar-content strong {
            color: var(--text-dark);
        }
        
        /* Mobile handling */
        @media (max-width: 1024px) {
            .pillar-grid {
                grid-template-columns: 1fr;
                gap: 40px;
            }
            .pillar-sidebar {
                position: static;
                height: auto;
                border-bottom: 1px solid var(--border-gray);
                padding-bottom: 30px;
            }
        }
        
        .minimal-cta input::placeholder {
            color: rgba(255,255,255,0.6);
        }
    </style>
"""

# Inject custom CSS right before </head>
head_end = html.find('</head>')
html = html[:head_end] + custom_css + html[head_end:]

# Recalculate layout indices since we changed html length
layout_start_idx = html.find('<div class="container service-landing-layout">')
sources_box_idx = html.find('<div class="sources-box">')

# We replace the original `service-landing-layout` div's content
new_grid = f"""
        <div class="container">
            <div class="pillar-grid">
                {toc_html}
                <div class="pillar-content">
                    {modified_content}
                </div>
            </div>
"""

# Replace the layout
# We want to replace from `<div class="container service-landing-layout">` to exactly before `<div class="sources-box">`
# Notice we changed `<div class="container service-landing-layout">` to `<div class="container">`
final_html = html[:layout_start_idx] + new_grid + "\n            " + html[sources_box_idx:]

with open("debt-collection-in-turkey.html", "w", encoding="utf-8") as f:
    f.write(final_html)

print("Redesign complete.")

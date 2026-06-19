import re
import sys

with open("debt-collection-in-turkey.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Remove the custom pillar style
html = re.sub(r'<style>\s*\.pillar-grid.*?</style>', '', html, flags=re.DOTALL)

# 2. Extract content from pillar-content
pillar_start = html.find('<div class="pillar-content">')
if pillar_start == -1:
    print("Could not find pillar-content")
    sys.exit(1)

content_inner_start = pillar_start + len('<div class="pillar-content">')
# The grid ends where `<div class="sources-box">` begins, approximately.
sources_start = html.find('<div class="sources-box">')
grid_end = html.rfind('</div>', 0, sources_start) # closes container
grid_end = html.rfind('</div>', 0, grid_end) # closes pillar-grid
content_inner_end = html.rfind('</div>', 0, grid_end) # closes pillar-content

main_content = html[content_inner_start:content_inner_end]

# 3. Strip the minimal-cta I injected previously
main_content = re.sub(r'<div class="minimal-cta".*?</form>\s*</div>', '', main_content, flags=re.DOTALL)

# 4. Split the content into individual sections based on `<h2`
# Since the previous step replaced `<div class="service-section-card">` with nothing? Wait, I didn't strip it. I just changed its CSS.
# Let's split by `<h2` so we don't rely on div classes.
sections_raw = re.split(r'(<h2.*?>)', main_content)
# sections_raw will be: [text_before, h2_tag, text_after, h2_tag, text_after...]
sections = []
if len(sections_raw) > 1:
    # combine h2 tag + text after
    for i in range(1, len(sections_raw), 2):
        sections.append(sections_raw[i] + sections_raw[i+1])
else:
    print("Could not split by h2")
    sys.exit(1)

# Clean up trailing divs from the old service-section-card if they exist
clean_sections = []
for s in sections:
    # remove trailing </div> if it was part of the old structure and unmatched
    # actually, it's safer to just wrap it.
    clean_sections.append(s.strip())

def wrap_band(content_html, bg_class="bg-white"):
    return f"""
<section class="lp-band {bg_class}">
    <div class="lp-container">
        <div class="content-block">
            {content_html}
        </div>
    </div>
</section>
"""

cta_1 = """
<section class="lp-cta-banner">
    <div class="lp-cta-container">
        <div class="cta-text">
            <h3>Is Your Cross-Border Receivable at Risk?</h3>
            <p>Delayed action in Türkiye can lead to asset dissipation. Get a free, confidential assessment of your commercial claim today.</p>
        </div>
        <div class="cta-action">
            <a href="#debt-collection-inquiry" class="btn btn-teal">Evaluate My Case Now</a>
        </div>
    </div>
</section>
"""

cta_2 = """
<section class="lp-cta-banner bg-dark">
    <div class="lp-cta-container">
        <div class="cta-text">
            <h3>Need to Execute a Foreign Judgment or Arbitral Award?</h3>
            <p>Our senior attorneys specialize in the recognition and enforcement (Tenfiz) of foreign awards in Turkish commercial courts.</p>
        </div>
        <div class="cta-action">
            <a href="#debt-collection-inquiry" class="btn btn-teal">Consult an Enforcement Lawyer</a>
        </div>
    </div>
</section>
"""

# Band 1 (White): Sections 0, 1
b1_content = "<br><br>".join(clean_sections[0:2])
band1 = wrap_band(b1_content, "bg-white")

# Band 2 (Light Gray): Sections 2, 3, 4, 5, 6 
b2_content = "<br><br>".join(clean_sections[2:7])
band2 = wrap_band(b2_content, "bg-light")

# Band 3 (White): Sections 7, 8, 9, 10
b3_content = "<br><br>".join(clean_sections[7:11])
band3 = wrap_band(b3_content, "bg-white")

# Band 4 (Light Gray): Sections 11, 12
b4_content = "<br><br>".join(clean_sections[11:])
band4 = wrap_band(b4_content, "bg-light")

new_main_content = band1 + cta_1 + band2 + cta_2 + band3 + band4

# CSS for Landing Page
lp_css = """
<style>
    .lp-band {
        padding: 80px 20px;
        width: 100%;
    }
    .bg-white {
        background-color: #ffffff;
    }
    .bg-light {
        background-color: #F8FAFC;
    }
    .lp-container {
        max-width: 800px;
        margin: 0 auto;
    }
    .content-block h2 {
        font-size: 36px;
        color: #1a2742; /* dark blue */
        margin-bottom: 30px;
        margin-top: 40px;
        line-height: 1.3;
        font-weight: 800;
        position: relative;
        padding-bottom: 12px;
    }
    .content-block h2:first-child {
        margin-top: 0;
    }
    .content-block h2::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 60px;
        height: 5px;
        background: linear-gradient(90deg, #2D4CC8, #00C4B4);
        border-radius: 3px;
    }
    .content-block h3 {
        font-size: 24px;
        color: #2D4CC8; /* primary blue */
        margin-top: 40px;
        margin-bottom: 20px;
        font-weight: 700;
    }
    .content-block p, .content-block ul, .content-block ol {
        font-size: 18px;
        line-height: 1.8;
        color: #475467;
        margin-bottom: 24px;
    }
    .content-block li {
        margin-bottom: 12px;
    }
    .content-block strong {
        color: #101828;
    }
    
    /* CTA Banners */
    .lp-cta-banner {
        background: linear-gradient(135deg, #2D4CC8 0%, #1a2742 100%);
        padding: 60px 20px;
        width: 100%;
        color: white;
    }
    .lp-cta-banner.bg-dark {
        background: #1a2742;
    }
    .lp-cta-container {
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
    }
    .cta-text h3 {
        font-size: 32px;
        margin-bottom: 16px;
        color: white;
        line-height: 1.3;
    }
    .cta-text p {
        font-size: 18px;
        color: rgba(255,255,255,0.8);
        margin: 0;
        line-height: 1.6;
    }
    .btn-teal {
        background: #00C4B4;
        color: #1a2742 !important;
        font-weight: 700;
        padding: 18px 36px;
        border-radius: 8px;
        font-size: 18px;
        white-space: nowrap;
        text-decoration: none;
        display: inline-block;
        box-shadow: 0 4px 15px rgba(0, 196, 180, 0.3);
        transition: transform 0.2s, box-shadow 0.2s;
    }
    .btn-teal:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 196, 180, 0.4);
    }

    @media (max-width: 768px) {
        .lp-cta-container {
            flex-direction: column;
            text-align: center;
        }
        .content-block h2 {
            font-size: 28px;
        }
        .cta-text h3 {
            font-size: 26px;
        }
        .lp-band {
            padding: 50px 20px;
        }
    }
</style>
"""

# Find where the grid starts
# We have <section class="service-landing-content">
#   <div class="container">
#     <div class="pillar-grid">
grid_start = html.find('<div class="pillar-grid">')
if grid_start == -1:
    print("Could not find pillar-grid")
    sys.exit(1)

# we want to close the container and section so our full width bands can span
# Let's find `<section class="service-landing-content">`
section_start = html.rfind('<section class="service-landing-content">', 0, grid_start)

# We want to replace everything from section_start to grid_end
# And inject the CSS

head_end = html.find('</head>')
html = html[:head_end] + lp_css + html[head_end:]

# recalculate indices after injecting css
section_start = html.rfind('<section class="service-landing-content">', 0, html.find('<div class="pillar-grid">'))
grid_end = html.rfind('</div>', 0, html.find('<div class="sources-box">'))
grid_end = html.rfind('</div>', 0, grid_end)

# Our new content will replace from section_start to grid_end (which closes pillar-grid)
# We also need to close the `service-landing-content` section BEFORE our bands, and then re-open it AFTER our bands for the sources-box.

form_start = html.find('<div class="service-section-card cta-section"')

replacement = f"""
</section> <!-- Close the landing hero wrapper if necessary, actually service-landing-hero is already closed -->
<!-- We replace service-landing-content completely for the bands -->
<div class="landing-page-wrapper">
    {new_main_content}
</div>

<section class="service-landing-content" style="padding-top: 60px;">
    <div class="container">
"""

# the sources box and bottom form are inside `html[grid_end:]` but grid_end might be off.
# Let's just find the start of sources box and end of section_start
sources_start = html.find('<div class="sources-box">')

# Wait, the form was injected just before sources_box earlier. But wait, I injected it AFTER sources_box or BEFORE?
# Let's check where `form_start` is compared to `sources_start`
if form_start != -1 and form_start < sources_start:
    end_of_replacement = form_start
else:
    end_of_replacement = sources_start

final_html = html[:section_start] + replacement + html[end_of_replacement:]

with open("debt-collection-in-turkey.html", "w", encoding="utf-8") as f:
    f.write(final_html)
print("Successfully built landing page layout.")


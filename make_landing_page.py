import re

with open("debt-collection-in-turkey.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Remove the custom pillar style
html = re.sub(r'<style>.*?\.pillar-grid.*?</style>', '', html, flags=re.DOTALL)

# 2. Extract content from pillar-content
pillar_start = html.find('<div class="pillar-content">')
if pillar_start == -1:
    print("Could not find pillar-content")
    exit(1)

# Find the end of pillar-grid to extract the content safely
# We know the content ends where the grid ends.
grid_end = html.find('</div>\n            </div>\n            <div class="sources-box">')
if grid_end == -1:
    # try another approach
    sources_start = html.find('<div class="sources-box">')
    grid_end = html.rfind('</div>', 0, sources_start)

# The content is between pillar_start and the closing div of pillar-content
# Let's extract everything inside `<div class="pillar-content">`
content_inner_start = pillar_start + len('<div class="pillar-content">')
# the pillar content closes just before grid_end (there is one div closing pillar-content, and one closing pillar-grid)
content_inner_end = html.rfind('</div>', 0, grid_end)

main_content = html[content_inner_start:content_inner_end]

# 3. Strip the minimal-cta I injected previously
main_content = re.sub(r'<div class="minimal-cta".*?</form>\n</div>', '', main_content, flags=re.DOTALL)

# 4. Split the content into individual sections based on `<div class="service-section-card">`
# Since they are wrapped in this div, we can split by it.
sections = re.split(r'<div class="service-section-card".*?>', main_content)
# Element 0 is usually whitespace before the first div
sections = [s for s in sections if s.strip()]
# We need to re-add the missing closing tag handling since re.split removes the start.
# Wait, each section ends with `</div>`. Let's just keep the content inside the sections.
clean_sections = []
for s in sections:
    # remove the trailing </div>
    idx = s.rfind('</div>')
    if idx != -1:
        clean_sections.append(s[:idx].strip())
    else:
        clean_sections.append(s.strip())

# We have 13 sections + the FAQ. 
# Let's combine them into landing page bands.

def wrap_band(content_html, bg_class="bg-white"):
    return f"""
<section class="lp-band {bg_class}">
    <div class="lp-container">
        {content_html}
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

# Let's group sections:
# Band 1 (White): Sections 0, 1 (Intro, Amicable)
b1_content = "<div class='content-block'>" + "</div><div class='content-block'>".join(clean_sections[0:2]) + "</div>"
band1 = wrap_band(b1_content, "bg-white")

# Band 2 (Light Gray): Sections 2, 3, 4, 5, 6 (EBL, w/o Judgment, Bills of Exchange, w/ Judgment, Provisional)
b2_content = "<div class='content-block'>" + "</div><div class='content-block'>".join(clean_sections[2:7]) + "</div>"
band2 = wrap_band(b2_content, "bg-light")

# Band 3 (White): Sections 7, 8, 9, 10 (Asset Seizure, Bankruptcy, Industry, Mediation)
b3_content = "<div class='content-block'>" + "</div><div class='content-block'>".join(clean_sections[7:11]) + "</div>"
band3 = wrap_band(b3_content, "bg-white")

# Band 4 (Light Gray): Sections 11, 12 (Timelines, FAQ)
b4_content = "<div class='content-block'>" + "</div><div class='content-block'>".join(clean_sections[11:]) + "</div>"
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
        background-color: #F5F7FA;
    }
    .lp-container {
        max-width: 840px;
        margin: 0 auto;
    }
    .content-block {
        margin-bottom: 60px;
    }
    .content-block:last-child {
        margin-bottom: 0;
    }
    .content-block h2 {
        font-size: 32px;
        color: #1a2742; /* dark blue */
        margin-bottom: 24px;
        line-height: 1.3;
        font-weight: 800;
        position: relative;
        padding-bottom: 12px;
    }
    .content-block h2::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg, #2D4CC8, #00C4B4);
        border-radius: 2px;
    }
    .content-block h3 {
        font-size: 22px;
        color: #2D4CC8; /* primary blue */
        margin-top: 40px;
        margin-bottom: 16px;
        font-weight: 700;
    }
    .content-block p, .content-block ul, .content-block ol {
        font-size: 17px;
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
        font-size: 28px;
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
        padding: 16px 32px;
        border-radius: 8px;
        font-size: 18px;
        white-space: nowrap;
        text-decoration: none;
        display: inline-block;
        box-shadow: 0 4px 15px rgba(0, 196, 180, 0.3);
        transition: transform 0.2s;
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
            font-size: 26px;
        }
        .lp-band {
            padding: 50px 20px;
        }
    }
</style>
"""

# Replace the layout
# Find layout start `<div class="container service-landing-layout">` 
# and go back to where we can inject full width sections.
# Wait, `service-landing-content` is the wrapper.
# Let's replace the ENTIRE `<section class="service-landing-content">` up to `<!-- Footer -->`
# We need to keep `sources-box` and `related-guides` if they exist. Let's just replace the layout container.

layout_start_idx = html.find('<div class="container service-landing-layout">')
sources_box_idx = html.find('<div class="sources-box">')

if layout_start_idx != -1 and sources_box_idx != -1:
    # Inject CSS
    head_end = html.find('</head>')
    html = html[:head_end] + lp_css + html[head_end:]
    
    # Recalculate
    layout_start_idx = html.find('<div class="container service-landing-layout">')
    sources_box_idx = html.find('<div class="sources-box">')

    # Note: `service-landing-content` has a `container` which restricts width.
    # We want full width. So we must replace `<section class="service-landing-content">` entirely for the bands.
    section_start = html.rfind('<section class="service-landing-content">', 0, layout_start_idx)
    
    # The bottom form is inside `html[sources_box_idx:]`? No, the bottom form was inserted before `sources_box`.
    # Actually, earlier I injected the CTA form before sources_box. Let's find it.
    form_start = html.find('<div class="service-section-card cta-section"')
    
    # Let's construct the final replacement
    # Close the previous section, add our full width bands, then open a new container for sources and form
    
    replacement = f"""
        </section> <!-- close previous hero section if any, but wait, hero section is closed before this -->
        
        <div class="landing-page-wrapper">
            {new_main_content}
        </div>

        <section class="service-landing-content" style="padding-top: 0;">
            <div class="container">
    """
    
    final_html = html[:section_start] + replacement + html[form_start:]
    
    with open("debt-collection-in-turkey.html", "w", encoding="utf-8") as f:
        f.write(final_html)
    print("Successfully built landing page layout.")
else:
    print("Error finding indices.")


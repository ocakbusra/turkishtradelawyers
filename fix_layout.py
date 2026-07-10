import re
import sys

def fix_page(filepath, is_dispute=False):
    with open(filepath, "r") as f:
        content = f.read()

    # If already fixed, skip
    if '<div class="container service-landing-layout">' not in content:
        print(f"{filepath} already fixed or cannot find layout.")
        return

    # Extract the aside block completely
    aside_pattern = re.compile(r'\n\s*<aside>.*?</aside>\n', re.DOTALL)
    aside_match = aside_pattern.search(content)

    if aside_match:
        aside_text = aside_match.group(0)
        content = content.replace(aside_text, '')

        # Extract 'On This Page'
        on_page_pattern = re.compile(r'<div class="service-sidebar-card glass-card"[^>]*>\s*<h3 style="margin-top:0;">On This Page</h3>.*?</div>', re.DOTALL)
        on_page_match = on_page_pattern.search(aside_text)
        on_page_html = on_page_match.group(0) if on_page_match else ""

        # Extract 'Key Focus Areas' or 'Typical Triggers'
        key_focus_pattern = re.compile(r'<div class="service-sidebar-card glass-card"[^>]*>\s*<h3 style="margin-top:0;">(Key Focus Areas|Typical Triggers)</h3>.*?</div>', re.DOTALL)
        key_focus_match = key_focus_pattern.search(aside_text)
        key_focus_html = key_focus_match.group(0) if key_focus_match else ""

        # Extract the form
        form_pattern = re.compile(r'<div class="service-sidebar-card glass-card sidebar-form-card"[^>]*>\s*<h3 style="margin-top:0;">.*?</h3>.*?</div>', re.DOTALL)
        form_match = form_pattern.search(aside_text)
        form_html = form_match.group(0) if form_match else ""
    else:
        print(f"Could not find aside in {filepath}")
        return

    # Replacement top
    top_cards = []
    if on_page_html:
        top_cards.append(on_page_html.replace('service-sidebar-card', 'intro-card').replace('padding: 24px;', 'padding: 24px; margin-bottom: 2rem;'))
    if key_focus_html:
        top_cards.append(key_focus_html.replace('service-sidebar-card', 'intro-card').replace('padding: 24px;', 'padding: 24px; margin-bottom: 2rem;'))
    
    top_cards_str = "\n".join(top_cards)

    # For employment, the 2-column layout tag is:
    # <section class="service-landing-content">
    #     <div class="container service-landing-layout">
    #         <div class="service-main-content">
    # (or with style="padding-top: 0;")
    
    layout_match = re.search(r'<section class="service-landing-content"[^>]*>\s*<div class="container service-landing-layout">\s*<div class="service-main-content">', content)
    if layout_match:
        original_wrapper = layout_match.group(0)
        replacement_wrapper = original_wrapper.replace('container service-landing-layout', 'container" style="max-width: 900px; margin: 0 auto;').replace('<div class="service-main-content">', f'{top_cards_str}\n                <div class="service-main-content">')
        content = content.replace(original_wrapper, replacement_wrapper)

    # Fix closing tags. We replaced the open of service-main-content, so we KEEP the closing of service-main-content.
    # We just need to remove the layout's ending if we changed it, but actually since we kept `<div class="service-main-content">` inside the new wrapper, the div counts match perfectly!
    # Wait, earlier in fix_layout.py I removed `service-main-content` entirely. It's safer to keep it.
    
    # Let's remove `service-landing-layout` and `service-main-content` completely, replacing them with a single centered container.
    content = content.replace('<div class="container service-landing-layout">\n                <div class="service-main-content">', '<div class="container" style="max-width: 900px; margin: 0 auto;">\n' + top_cards_str)
    
    # Because we removed 2 div opens and added 1 div open, we need to remove 1 div close.
    # Find the end of the left column
    content = content.replace('                </div>\n                <!-- End of Left Column -->\n            </div>\n        </section>', '            </div>\n        </section>')

    # Form insertion before FAQ
    if form_html:
        form_html_centered = f"""
                <div class="glass-card intro-card" style="margin-bottom: 3rem; padding: 2rem; background: linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%);">
                    {form_html.replace('service-sidebar-card glass-card sidebar-form-card', '').replace('padding: 24px;', '')}
                </div>
"""
        content = content.replace('<h2 id="faq">', form_html_centered + '\n                <h2 id="faq">')

    with open(filepath, "w") as f:
        f.write(content)
    print(f"Fixed {filepath}")

fix_page("/Users/busraocak/Desktop/turkish trade/dispute-resolution-in-turkey.html", True)
fix_page("/Users/busraocak/Desktop/turkish trade/employment-mobility-services-turkey.html", False)

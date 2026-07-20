import re

file_path = 'turkiye-corporate-tax-changes-2026-communique-26.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace keywords with internal links
links = {
    r'corporate tax': 'corporate-tax-vat-withholding-turkey.html',
    r'Turkish free zones': 'turkiye-major-tax-incentives-law-7582.html', # or perhaps investment-incentives-turkiye-2026-guide.html
    r'manufacturing activities': 'investment-incentives-turkiye-2026-guide.html',
    r'Istanbul Financial Center': 'investment-incentives-turkiye-2026-guide.html',
    r'foreign direct investment': 'setup-a-business-in-turkey.html',
    r'establishing a company': 'setup-a-business-in-turkey.html',
    r'international trade': 'international-trade-customs-services-turkey.html',
    r'customs law': 'international-trade-customs-services-turkey.html'
}

# we don't need to replace all of them, just the first occurrence or specific ones. 
# It's better to just manually add a "Related Guides" section at the bottom before the FAQ or at the very end.

related_guides_html = """
<hr>
<h2>Related Guides and Services</h2>
<ul>
    <li><a href="corporate-tax-vat-withholding-turkey.html">Corporate Tax Law in Türkiye</a></li>
    <li><a href="investment-incentives-turkiye-2026-guide.html">Manufacturing and Investment Incentives</a></li>
    <li><a href="setup-a-business-in-turkey.html">Establishing a Company in Türkiye</a></li>
    <li><a href="international-trade-customs-services-turkey.html">International Trade and Customs Law</a></li>
</ul>
<hr>
"""

# Inject before FAQ
content = content.replace('<h2 id="faq">', related_guides_html + '\n<h2 id="faq">')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)


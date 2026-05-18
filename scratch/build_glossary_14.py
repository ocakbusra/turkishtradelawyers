import os

terms = [
    {"tr": "Arsa Payı Karşılığı İnşaat Sözleşmesi", "en": "Construction in Return for Land Share Agreement", "slug": "construction-in-return-for-land-share", "tag": "real-estate", "def": "A construction agreement where the landowner transfers a certain share of the land to the contractor, and the contractor undertakes to construct a building and deliver independent units in return. It is the most common construction model in Turkey.", "faq_q": "Is this agreement legally binding if not notarized?", "faq_a": "Under Turkish law, this agreement involves the promise to transfer real estate, so it must be executed in an ex officio form at a Notary Public to be legally valid."},
    {"tr": "Hasılat (Gelir) Paylaşımlı İnşaat Sözleşmesi", "en": "Revenue Sharing Construction Agreement", "slug": "revenue-sharing-construction-agreement", "tag": "real-estate", "def": "A contract model where the contractor develops and sells a project on the land with their own financing, and a certain percentage of the total revenue obtained is paid to the landowner.", "faq_q": "What is the main advantage of revenue sharing models?", "faq_a": "It allows landowners to maximize their returns without upfront investment, while contractors mitigate land acquisition costs by sharing the final sales revenue."},
    {"tr": "Taşeron (Alt Yüklenici) Sözleşmesi", "en": "Subcontractor Agreement", "slug": "subcontractor-agreement", "tag": "contract-law", "def": "An agreement where the main contractor delegates a specific part of a project (such as electrical, mechanical, or excavation work) to another specialized company.", "faq_q": "Is the main contractor still liable to the client for the subcontractor's work?", "faq_a": "Yes, under Turkish law, the main contractor remains fully liable to the employer for the proper completion of the work, regardless of having used a subcontractor."},
    {"tr": "Finansal Kiralama (Leasing) Sözleşmesi", "en": "Financial Leasing Agreement", "slug": "financial-leasing-agreement", "tag": "commercial-law", "def": "A financing agreement where the leasing company purchases an asset upon the lessee's request and leases it to them, granting the lessee the right to acquire ownership at the end of the term.", "faq_q": "What assets can be subject to financial leasing in Turkey?", "faq_a": "Generally, movable and immovable assets, such as machinery, vehicles, medical equipment, and commercial real estate, can be leased under financial leasing regulations."},
    {"tr": "Simsarlık (Tellallık) Sözleşmesi", "en": "Brokerage Agreement", "slug": "brokerage-agreement", "tag": "contract-law", "def": "A contract where the broker undertakes to provide an opportunity or mediate for the establishment of a contract between parties, earning a fee if the contract is successfully formed (e.g., real estate agent agreements).", "faq_q": "When is the broker entitled to their fee?", "faq_a": "The broker earns their fee only when the main contract between the buyer and seller is officially concluded as a result of the broker's mediation."},
    {"tr": "Komisyon Sözleşmesi", "en": "Commission Agreement", "slug": "commission-agreement", "tag": "commercial-law", "def": "An agreement where a commission agent undertakes to buy or sell negotiable instruments or movable goods in their own name but on the account of the principal, in exchange for a fee.", "faq_q": "What is the difference between a broker and a commission agent?", "faq_a": "A broker only mediates the transaction between parties, while a commission agent concludes the transaction in their own name on behalf of the principal."},
    {"tr": "Taşıma (Navlun/Lojistik) Sözleşmesi", "en": "Carriage Agreement", "slug": "carriage-agreement", "tag": "commercial-law", "def": "An agreement where the carrier undertakes to safely transport goods or passengers from one place to another, and the sender agrees to pay the freight (carriage fee) in return.", "faq_q": "What is the liability of the carrier for damaged goods?", "faq_a": "The carrier is strictly liable for any loss, damage, or delay during transport, subject to specific monetary limits and exemptions provided under the Turkish Commercial Code."},
    {"tr": "Konsinye Satış Sözleşmesi", "en": "Consignment Sale Agreement", "slug": "consignment-sale-agreement", "tag": "commercial-law", "def": "An agreement where a manufacturer or wholesaler leaves goods with a retailer for sale without transferring ownership. The retailer only pays for the goods that are successfully sold.", "faq_q": "Who bears the risk of loss in a consignment agreement?", "faq_a": "Since ownership remains with the consignor (supplier) until the sale, the risk of loss generally rests with them, unless the consignee (retailer) acts negligently."},
    {"tr": "Barter (Trampa/Mal Değişim) Sözleşmesi", "en": "Barter Agreement", "slug": "barter-agreement", "tag": "contract-law", "def": "An agreement where a good or service is directly exchanged for another good or service without using cash money.", "faq_q": "Does a barter agreement involve tax obligations in Turkey?", "faq_a": "Yes, under Turkish tax law, a barter is treated as two separate sales transactions, meaning VAT and corporate taxes still apply to the exchanged values."},
    {"tr": "Know-How (Bilgi Birikimi) Sözleşmesi", "en": "Know-How Agreement", "slug": "know-how-agreement", "tag": "intellectual-property", "def": "A contract where a business grants another enterprise the right to use its confidential, commercially valuable technical or administrative knowledge and experience in exchange for a fee.", "faq_q": "How is know-how protected under Turkish law?", "faq_a": "While not registered like a patent, know-how is protected under trade secret laws, unfair competition provisions, and strict confidentiality clauses within the agreement."},
    {"tr": "Yazılım Geliştirme Sözleşmesi", "en": "Software Development Agreement", "slug": "software-development-agreement", "tag": "intellectual-property", "def": "A specific type of contract where a software developer commits to designing and coding a custom computer program or application tailored to the client's needs.", "faq_q": "Who owns the intellectual property of the custom software?", "faq_a": "Unless explicitly transferred in the agreement, the financial rights belong to the developer under Turkish Copyright Law. Therefore, IP transfer clauses are crucial."},
    {"tr": "Escrow (Emanet) Sözleşmesi", "en": "Escrow Agreement", "slug": "escrow-agreement", "tag": "contract-law", "def": "An agreement ensuring that assets, such as source codes or M&A down payments, are securely held by an independent third party until specific contractual conditions are met.", "faq_q": "Are escrow agreements recognized in Turkish Law?", "faq_a": "While not explicitly defined as a specific contract type in the Code of Obligations, escrow structures are widely used and legally enforced under general contract freedom principles."},
    {"tr": "Ariyet (Kullanım Ödüncü) Sözleşmesi", "en": "Loan for Use Agreement", "slug": "loan-for-use-agreement", "tag": "contract-law", "def": "An agreement where a person allows another to temporarily use their movable or immovable property free of charge, with the condition that the exact same property is returned at the end.", "faq_q": "What is the difference between loan for use and rental agreements?", "faq_a": "The key distinction is that a loan for use is strictly gratuitous (free of charge), whereas a rental agreement inherently requires the payment of rent."},
    {"tr": "Vedia (Saklama) Sözleşmesi", "en": "Deposit Agreement", "slug": "deposit-agreement", "tag": "contract-law", "def": "A contract where the depositee agrees to keep a movable property entrusted to them by the depositor in a safe place and return it upon request.", "faq_q": "Can the depositee use the entrusted property?", "faq_a": "No, the depositee cannot use the property without the depositor's explicit permission. If they do, they are strictly liable for any resulting damages."}
]

html_template = """<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | Turkish Trade Lawyers</title>
    <meta name="description" content="{def_short}">
    <meta name="keywords" content="{tr_term}, {en_term}, turkish law, turkey, lawyer, attorney">
    <link rel="stylesheet" href="../styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <!-- FAQ Schema -->
    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {{
                "@type": "Question",
                "name": "{faq_q}",
                "acceptedAnswer": {{
                    "@type": "Answer",
                    "text": "{faq_a}"
                }}
            }}
        ]
    }}
    </script>
    
    <style>
        .glossary-details {{
            padding: 120px 0 60px;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: #fff;
        }}
        .glossary-content-box {{
            background: #fff;
            color: #333;
            border-radius: 12px;
            padding: 40px;
            margin-top: -40px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }}
        .glossary-back {{
            color: #94a3b8;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 20px;
            transition: color 0.3s ease;
        }}
        .glossary-back:hover {{ color: #fff; }}
        .faq-section {{ margin-top: 40px; }}
        .faq-item {{
            border-bottom: 1px solid #e2e8f0;
            padding: 20px 0;
        }}
        .faq-item h4 {{ color: #0f172a; margin-bottom: 10px; font-family: 'Playfair Display', serif; }}
    </style>
</head>

<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container nav-container">
            <a href="../index.html" class="logo">
                <img src="../logo.webp" alt="Turkish Trade Lawyers Logo" class="logo-img">
                <span class="logo-text">Turkish Trade<br>Lawyers</span>
            </a>
            <div class="nav-links">
                <a href="../index.html">Home</a>
                <a href="../services.html">Services</a>
                <a href="../industries.html">Industries</a>
                <a href="../guides.html">Insights</a>
                <a href="../glossary.html" class="active">Glossary</a>
                <a href="../ourexperts.html">Our Experts</a>
                <a href="../index.html#contact" class="btn btn-primary">Contact Us</a>
            </div>
        </div>
    </nav>

    <!-- Header -->
    <section class="glossary-details">
        <div class="container">
            <a href="../glossary.html" class="glossary-back"><i class="fas fa-arrow-left"></i> Back to Glossary</a>
            <h1 style="font-family: 'Playfair Display', serif; font-size: 3rem; margin-bottom: 10px;">{en_term}</h1>
            <h2 style="font-size: 1.5rem; color: #94a3b8; font-weight: 400; margin-bottom: 20px;">{tr_term}</h2>
            <span class="glossary-term-tag" style="background: rgba(255,255,255,0.1); padding: 5px 15px; border-radius: 20px; font-size: 0.9rem;">{tag}</span>
        </div>
    </section>

    <!-- Main Content -->
    <section class="section">
        <div class="container">
            <div class="glossary-content-box">
                <h3 style="color: #0f172a; font-family: 'Playfair Display', serif; margin-bottom: 20px; font-size: 1.8rem;">Definition</h3>
                <p style="font-size: 1.1rem; line-height: 1.8; color: #475569;">{definition}</p>

                <div class="faq-section" id="faqs">
                    <h3 style="color: #0f172a; font-family: 'Playfair Display', serif; margin-bottom: 20px; font-size: 1.8rem;">Frequently Asked Questions</h3>
                    <div class="faq-item">
                        <h4>{faq_q}</h4>
                        <p class="faq-answer" style="color: #475569; line-height: 1.6;">{faq_a}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Turkish Trade Lawyers. All rights reserved. | <a href="../cookie-policy.html" style="color: rgba(255,255,255,0.7);">Cookie Policy</a> | <a href="../disclaimer.html" style="color: rgba(255,255,255,0.7);">Disclaimer</a> | <a href="../privacy-notice.html" style="color: rgba(255,255,255,0.7);">Privacy</a></p>
        </div>
    </footer>

    <script src="../script.js"></script>
</body>

</html>"""

sitemap_path = "sitemap.xml"
glossary_data_path = "glossary/glossary-data.js"

# 1. Generate HTML files
print("Generating HTML files...")
new_js_entries = []
new_sitemap_entries = []

for t in terms:
    slug = t["slug"]
    en_term = t["en"]
    tr_term = t["tr"]
    definition = t["def"]
    faq_q = t["faq_q"]
    faq_a = t["faq_a"]
    tag = t["tag"]
    
    html_content = html_template.format(
        title=f"{en_term} ({tr_term})",
        def_short=definition[:150] + "...",
        tr_term=tr_term,
        en_term=en_term,
        tag=tag.replace("-", " ").title(),
        definition=definition,
        faq_q=faq_q,
        faq_a=faq_a
    )
    
    filepath = f"glossary/{slug}.html"
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html_content)
        
    # Prepare JS entry
    js_entry = f'''    {{
        id: "{slug}",
        term: "{en_term}",
        trTerm: "{tr_term}",
        question: "{faq_q}",
        excerpt: "{definition}",
        tags: ["{tag}"],
        relatedTerms: []
    }}'''
    new_js_entries.append(js_entry)
    
    # Prepare Sitemap entry
    sitemap_entry = f'''    <url>
        <loc>https://www.turkishtradelawyers.com/glossary/{slug}.html</loc>
        <lastmod>2025-10-25</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
    </url>'''
    new_sitemap_entries.append(sitemap_entry)

# 2. Append to glossary-data.js
print("Updating glossary-data.js...")
with open(glossary_data_path, "r", encoding="utf-8") as f:
    js_content = f.read()

# We need to insert the new entries before the closing ];
# Let's find the last '}' before '];'
insertion_idx = js_content.rfind("}")
if insertion_idx != -1:
    before = js_content[:insertion_idx+1]
    after = js_content[insertion_idx+1:]
    
    combined_new_js = ",\n" + ",\n".join(new_js_entries)
    
    with open(glossary_data_path, "w", encoding="utf-8") as f:
        f.write(before + combined_new_js + after)

# 3. Append to sitemap.xml
print("Updating sitemap.xml...")
with open(sitemap_path, "r", encoding="utf-8") as f:
    sitemap_content = f.read()

sitemap_insertion_idx = sitemap_content.rfind("</urlset>")
if sitemap_insertion_idx != -1:
    before_sitemap = sitemap_content[:sitemap_insertion_idx]
    after_sitemap = sitemap_content[sitemap_insertion_idx:]
    
    combined_sitemap = "\n".join(new_sitemap_entries) + "\n"
    
    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write(before_sitemap + combined_sitemap + after_sitemap)

print("Process completed successfully.")

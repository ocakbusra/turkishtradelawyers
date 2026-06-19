import re
import sys

with open("debt-collection-in-turkey.html", "r", encoding="utf-8") as f:
    html = f.read()

# We need to extract the raw text content from the current landing page layout so we can reuse it
# The content is currently inside `<div class="landing-page-wrapper">`
wrapper_start = html.find('<div class="landing-page-wrapper">')
if wrapper_start == -1:
    print("Could not find landing-page-wrapper")
    sys.exit(1)

wrapper_end = html.find('</div>\n\n<section class="service-landing-content"', wrapper_start)
if wrapper_end == -1:
    print("Could not find end of landing-page-wrapper")
    sys.exit(1)

main_content = html[wrapper_start + len('<div class="landing-page-wrapper">'):wrapper_end]

# Extract FAQ section
faq_start = main_content.find('<h2>13. Frequently Asked Questions (FAQ)</h2>')
if faq_start != -1:
    faq_content = main_content[faq_start:]
    main_content = main_content[:faq_start] # remove FAQ from main content
else:
    faq_content = ""

# Now build the new highly visual HTML

visual_css = """
<style>
    /* Visual Landing Page Styles */
    .v-hero {
        position: relative;
        padding: 120px 20px;
        background: url('images/hero_debt_collection_1781794295066.png') center/cover no-repeat;
        color: white;
        text-align: center;
    }
    .v-hero::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: linear-gradient(135deg, rgba(26,39,66,0.95) 0%, rgba(45,76,200,0.85) 100%);
    }
    .v-hero-content {
        position: relative;
        max-width: 900px;
        margin: 0 auto;
        z-index: 1;
    }
    .v-hero h1 {
        font-size: 48px;
        font-weight: 800;
        margin-bottom: 24px;
        line-height: 1.2;
    }
    .v-hero p {
        font-size: 20px;
        color: rgba(255,255,255,0.9);
        margin-bottom: 40px;
    }
    .v-trust-banner {
        background: #00C4B4;
        padding: 40px 20px;
        color: #1a2742;
    }
    .v-trust-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 30px;
        text-align: center;
    }
    .v-trust-item i {
        font-size: 32px;
        margin-bottom: 15px;
    }
    .v-trust-item h4 {
        font-size: 20px;
        font-weight: 800;
        margin-bottom: 10px;
    }
    
    .v-section {
        padding: 100px 20px;
    }
    .v-section.bg-light { background: #F8FAFC; }
    
    .v-container {
        max-width: 1200px;
        margin: 0 auto;
    }
    .v-section-title {
        text-align: center;
        margin-bottom: 60px;
    }
    .v-section-title h2 {
        font-size: 36px;
        color: #1a2742;
        margin-bottom: 20px;
    }
    
    /* Process Grid */
    .v-process-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 40px;
    }
    .v-process-card {
        background: white;
        padding: 40px;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        text-align: center;
        transition: transform 0.3s;
        border-top: 4px solid #2D4CC8;
    }
    .v-process-card:hover { transform: translateY(-10px); }
    .v-process-icon {
        width: 80px; height: 80px;
        background: rgba(45,76,200,0.1);
        color: #2D4CC8;
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-size: 32px;
        margin: 0 auto 24px;
    }
    
    /* Industry Splits */
    .v-split {
        display: flex;
        align-items: center;
        gap: 60px;
        margin-bottom: 80px;
    }
    .v-split.reverse { flex-direction: row-reverse; }
    .v-split-img { flex: 1; }
    .v-split-img img { width: 100%; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
    .v-split-text { flex: 1; }
    .v-split-text h3 { font-size: 28px; color: #1a2742; margin-bottom: 20px; }
    
    /* FAQ Accordion */
    .v-faq-container { max-width: 800px; margin: 0 auto; }
    .v-faq-item {
        margin-bottom: 15px;
        border: 1px solid #E4E7EC;
        border-radius: 8px;
        overflow: hidden;
    }
    .v-faq-summary {
        background: white;
        padding: 20px;
        font-weight: 700;
        cursor: pointer;
        font-size: 18px;
        color: #1a2742;
        list-style: none; /* hide standard arrow */
        display: flex;
        justify-content: space-between;
    }
    .v-faq-summary::-webkit-details-marker { display: none; }
    .v-faq-summary::after { content: '+'; color: #2D4CC8; font-size: 24px; }
    details[open] .v-faq-summary::after { content: '-'; }
    .v-faq-content {
        padding: 20px;
        background: #F8FAFC;
        border-top: 1px solid #E4E7EC;
        line-height: 1.7;
        color: #475467;
    }
    
    /* Legal Archive (SEO text) */
    .v-legal-archive {
        max-width: 800px; margin: 0 auto;
        padding: 40px; background: white; border-radius: 12px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.05);
    }
    .v-legal-archive details summary {
        font-weight: 700; color: #2D4CC8; cursor: pointer; font-size: 18px; text-align: center;
        padding: 15px; background: rgba(45,76,200,0.05); border-radius: 8px; list-style: none;
    }
    .v-legal-archive-content { margin-top: 30px; }
    .v-legal-archive-content h2, .v-legal-archive-content h3 { color: #1a2742; margin-bottom: 15px; margin-top: 30px; font-size: 22px; }
    
    @media (max-width: 900px) {
        .v-split, .v-split.reverse { flex-direction: column; }
        .v-hero h1 { font-size: 36px; }
    }
</style>
"""

visual_html = f"""
<!-- HERO SECTION -->
<section class="v-hero">
    <div class="v-hero-content">
        <h1>Debt Collection in Türkiye: <br>The Ultimate Legal Framework</h1>
        <p>Expert recovery of commercial receivables through amicable settlement, provisional attachment, and execution proceedings for cross-border creditors.</p>
        <a href="#debt-collection-inquiry" class="btn btn-teal" style="font-size: 18px; padding: 16px 36px;">Evaluate My Case Now</a>
    </div>
</section>

<!-- TRUST BANNER -->
<section class="v-trust-banner">
    <div class="v-trust-grid">
        <div class="v-trust-item">
            <i class="fas fa-globe"></i>
            <h4>Cross-Border Expertise</h4>
            <p style="margin:0; font-size:15px; opacity: 0.9;">Serving foreign creditors and exporters worldwide.</p>
        </div>
        <div class="v-trust-item">
            <i class="fas fa-bolt"></i>
            <h4>Fast Asset Tracing</h4>
            <p style="margin:0; font-size:15px; opacity: 0.9;">Direct integration with Turkish UYAP databases.</p>
        </div>
        <div class="v-trust-item">
            <i class="fas fa-shield-halved"></i>
            <h4>Asset Freezes</h4>
            <p style="margin:0; font-size:15px; opacity: 0.9;">Strategic use of Provisional Attachment.</p>
        </div>
        <div class="v-trust-item">
            <i class="fas fa-scale-balanced"></i>
            <h4>Full Court Representation</h4>
            <p style="margin:0; font-size:15px; opacity: 0.9;">From arbitration enforcement to bankruptcy.</p>
        </div>
    </div>
</section>

<!-- THE PROCESS GRID -->
<section class="v-section bg-light">
    <div class="v-container">
        <div class="v-section-title">
            <h2>The 3-Phase Recovery Process</h2>
            <p style="max-width: 700px; margin: 0 auto; font-size: 18px; color: #475467;">Time is critical in Turkish debt collection. We employ a tactical, phased approach to maximize recovery while minimizing legal expenses.</p>
        </div>
        <div class="v-process-grid">
            <div class="v-process-card">
                <div class="v-process-icon"><i class="fas fa-handshake"></i></div>
                <h3>Phase I: Amicable</h3>
                <p>Forensic legal audit of invoices and waybills, followed by formal <strong>Notary Public Warnings</strong> to establish default and coerce settlement without court fees.</p>
            </div>
            <div class="v-process-card">
                <div class="v-process-icon"><i class="fas fa-file-contract"></i></div>
                <h3>Phase II: Execution</h3>
                <p>Initiating <em>İlamsız İcra</em> (Enforcement without Judgment) or utilizing fast-track procedures for cheques/promissory notes to issue payment orders instantly.</p>
            </div>
            <div class="v-process-card" style="border-color: #EF4444;">
                <div class="v-process-icon" style="color: #EF4444; background: rgba(239,68,68,0.1);"><i class="fas fa-lock"></i></div>
                <h3>Phase III: Seizure</h3>
                <p>Execution of <strong>Provisional Attachments</strong>, seizing bank accounts via Article 89 notices, and forcing public auction or corporate bankruptcy.</p>
            </div>
        </div>
    </div>
</section>

<!-- INDUSTRY CHALLENGES (SPLIT SECTIONS) -->
<section class="v-section">
    <div class="v-container">
        <div class="v-section-title">
            <h2>Industry-Specific Debt Collection</h2>
            <p style="max-width: 700px; margin: 0 auto; font-size: 18px; color: #475467;">Different sectors generate different documentary evidence and require tailored statutory enforcement strategies under Turkish Commercial Law.</p>
        </div>
        
        <div class="v-split">
            <div class="v-split-img">
                <img src="images/construction_law_1781794313328.png" alt="Construction Law Debt Collection">
            </div>
            <div class="v-split-text">
                <h3>Construction & Infrastructure</h3>
                <p>Standard invoices are rarely sufficient in construction disputes. We leverage <strong>Progress Payment Certificates (Hakediş Raporları)</strong> and statutory contractor's liens (İnşaatçı İpoteği) to exert immense leverage over property developers.</p>
                <ul style="list-style: none; padding: 0; margin-top: 20px;">
                    <li style="margin-bottom: 10px;"><i class="fas fa-check-circle" style="color: #00C4B4; margin-right: 10px;"></i> Enforcing Contractor Liens</li>
                    <li style="margin-bottom: 10px;"><i class="fas fa-check-circle" style="color: #00C4B4; margin-right: 10px;"></i> Disputing Defective Works Claims</li>
                </ul>
            </div>
        </div>

        <div class="v-split reverse">
            <div class="v-split-img">
                <img src="images/tech_law_1781794323248.png" alt="Tech Law Debt Collection">
            </div>
            <div class="v-split-text">
                <h3>IT, Software & Digital Services</h3>
                <p>Proving delivery of digital code requires meticulous presentation of server logs and UAT sign-offs. We often combine debt collection actions with <strong>Copyright Infringement injunctions</strong> to freeze operations using unpaid software.</p>
                <ul style="list-style: none; padding: 0; margin-top: 20px;">
                    <li style="margin-bottom: 10px;"><i class="fas fa-check-circle" style="color: #00C4B4; margin-right: 10px;"></i> SaaS Subscription Defaulters</li>
                    <li style="margin-bottom: 10px;"><i class="fas fa-check-circle" style="color: #00C4B4; margin-right: 10px;"></i> Source Code Escrow Breaches</li>
                </ul>
            </div>
        </div>

        <div class="v-split">
            <div class="v-split-img">
                <img src="images/logistics_law_1781794334374.png" alt="Logistics Debt Collection">
            </div>
            <div class="v-split-text">
                <h3>International Freight & Logistics</h3>
                <p>For unpaid freight forwarders, the CMR and Bills of Lading are paramount. Under Turkish law, we exercise the powerful statutory <strong>Right of Retention (Hapis Hakkı)</strong> to withhold current cargo until all past debts are settled.</p>
                <ul style="list-style: none; padding: 0; margin-top: 20px;">
                    <li style="margin-bottom: 10px;"><i class="fas fa-check-circle" style="color: #00C4B4; margin-right: 10px;"></i> Demurrage and Detention Claims</li>
                    <li style="margin-bottom: 10px;"><i class="fas fa-check-circle" style="color: #00C4B4; margin-right: 10px;"></i> Cargo Lien Enforcement</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- THE LEGAL ARCHIVE (Accordion for SEO text) -->
<section class="v-section bg-light">
    <div class="v-container">
        <div class="v-legal-archive">
            <details>
                <summary>Read The Full Execution and Bankruptcy Law (EBL) Framework</summary>
                <div class="v-legal-archive-content">
                    <p><em>The following is our comprehensive academic analysis of the Turkish debt recovery legal framework.</em></p>
                    {main_content}
                </div>
            </details>
        </div>
    </div>
</section>

<!-- FAQ ACCORDION -->
<section class="v-section">
    <div class="v-container">
        <div class="v-section-title">
            <h2>Frequently Asked Questions</h2>
        </div>
        <div class="v-faq-container" itemscope itemtype="https://schema.org/FAQPage">
            <!-- We manually rebuild the FAQ into HTML details tags for the accordion -->
            <details class="v-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <summary class="v-faq-summary" itemprop="name">Can I collect a debt in Türkiye without original wet-ink signed contracts?</summary>
                <div class="v-faq-content" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">Yes. While signed contracts provide the strongest position, commercial relationships in Türkiye can be proven through a combination of electronic correspondence, properly served commercial invoices, waybills/delivery notes, customs declarations, and accounting ledger reconciliations (BA/BS forms filed with the tax authority).</p>
                </div>
            </details>

            <details class="v-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <summary class="v-faq-summary" itemprop="name">What is the statute of limitations for commercial debts in Türkiye?</summary>
                <div class="v-faq-content" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">The general statute of limitations under the Turkish Code of Obligations is 10 years. However, specific types of commercial debts have shorter periods. For example, debts arising from transportation contracts generally expire in 1 year, and claims based on bills of exchange (cheques and promissory notes) typically expire in 3 years against the main obligor. Initiating formal enforcement proceedings interrupts and resets the statute of limitations.</p>
                </div>
            </details>

            <details class="v-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <summary class="v-faq-summary" itemprop="name">Can I claim foreign currency and interest on my debt?</summary>
                <div class="v-faq-content" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">If the underlying contract or invoice stipulates payment in a foreign currency (e.g., EUR or USD), you have the right under Article 99 of the Turkish Code of Obligations to demand payment either in that foreign currency or its equivalent in Turkish Lira at the Central Bank's effective selling rate on the date of actual payment. You are also entitled to claim default interest.</p>
                </div>
            </details>
            
            <details class="v-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <summary class="v-faq-summary" itemprop="name">The debtor company claims they have no money. What can we do?</summary>
                <div class="v-faq-content" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">A mere claim of insolvency does not halt execution proceedings. We utilize state databases (UYAP) to uncover hidden assets, freeze bank accounts, and intercept funds owed to the debtor by third parties. If we discover that the shareholders intentionally drained the company's assets, we can file "Cancellation of Disposition" lawsuits to claw back those assets.</p>
                </div>
            </details>
            
            <details class="v-faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <summary class="v-faq-summary" itemprop="name">Do I need to come to Türkiye to initiate debt collection?</summary>
                <div class="v-faq-content" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">No. Physical presence is entirely unnecessary. Foreign creditors can issue a Power of Attorney (PoA) to our law firm. Once we receive the original PoA, we can represent you in all enforcement offices, courts, and mediation sessions across Türkiye.</p>
                </div>
            </details>
        </div>
    </div>
</section>
"""

# Replace the HTML
# We find where `<div class="landing-page-wrapper">` started, and replace everything up to the `service-landing-content` section containing the form.
head_end = html.find('</head>')
html = html[:head_end] + visual_css + html[head_end:]

# Recalculate wrapper_start
wrapper_start = html.find('<div class="landing-page-wrapper">')
# The section containing the form is: `<section class="service-landing-content" style="padding-top: 60px;">`
# We want to replace from `wrapper_start` up to just before that form section.
form_section_start = html.find('<section class="service-landing-content"', wrapper_start)

final_html = html[:wrapper_start] + visual_html + html[form_section_start:]

with open("debt-collection-in-turkey.html", "w", encoding="utf-8") as f:
    f.write(final_html)

print("Successfully built visual landing page layout.")


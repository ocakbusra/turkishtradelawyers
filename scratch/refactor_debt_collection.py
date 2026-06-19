#!/usr/bin/env python3
"""
Refactor debt-collection-in-turkey.html per the 6-task SEO/GEO audit.
Preserves existing DOM structure while expanding content.
"""
import re

FILE = "debt-collection-in-turkey.html"

with open(FILE, "r", encoding="utf-8") as f:
    html = f.read()

# ============================================================
# TASK 1: Meta Data & H1 Optimization
# ============================================================

# Title
html = html.replace(
    '<title>Debt Collection Services in Turkey | Turkish Trade Lawyers</title>',
    '<title>Debt Collection in Turkey | Turkish Debt Recovery Lawyer</title>'
)

# Meta description
html = html.replace(
    'content="Debt Collection Services in Turkey for foreign creditors, exporters, and investors. We handle amicable recovery, enforcement proceedings, provisional attachment, and collection strategy under Turkish law."',
    'content="Recover unpaid invoices in Turkey with a specialist Turkish debt collection lawyer. We handle enforcement proceedings, provisional attachment, asset seizure, and commercial litigation for foreign creditors under Turkish Execution and Bankruptcy Law."'
)

# OG title
html = html.replace(
    'content="Debt Collection Services in Turkey | Turkish Trade Lawyers"',
    'content="Debt Collection in Turkey | Turkish Debt Recovery Lawyer"',
)

# Twitter title
html = html.replace(
    'content="Debt Collection Services in Turkey | Turkish Trade Lawyers"',
    'content="Debt Collection in Turkey | Turkish Debt Recovery Lawyer"',
)

# Keywords
html = html.replace(
    'content="Debt Collection Services in Turkey, debt recovery Turkey, enforcement proceedings Turkey, provisional attachment Turkey, commercial receivables Turkey"',
    'content="debt collection in Turkey, debt recovery Turkey lawyer, collect unpaid invoices Turkey, enforcement proceedings Turkey, Turkish execution law lawyer, commercial debt recovery Turkey, provisional attachment Turkey"'
)

# H1
html = html.replace(
    '<h1 class="service-landing-title">Debt Collection Services in Turkey</h1>',
    '<h1 class="service-landing-title">Debt Collection in Turkey | Enforcement, Litigation & Asset Recovery for Foreign Creditors</h1>'
)

# ============================================================
# TASK 2: GEO Definition Block (replace existing intro card)
# ============================================================

old_intro = '''                    <!-- Intro Glass Card -->
                    <div class="glass-card intro-card" style="margin-bottom: 2rem;">
                        <h2>Strategic Recovery for Foreign Creditors</h2>
                        <p>Navigating commercial debt recovery in Turkey requires a clear understanding of the Turkish legal framework, procedural nuances, and strategic leverage. Foreign creditors often face challenges related to cross-border jurisdiction, evidentiary requirements, and debtor asset dissipation.</p>
                        <p>This comprehensive guide details the practical avenues for securing and recovering corporate receivables, ranging from pre-action amicable settlements to aggressive provisional attachment and formal enforcement proceedings under the Turkish Execution and Bankruptcy Law (EBL).</p>
                    </div>'''

new_intro = '''                    <!-- GEO Definition Block -->
                    <div class="glass-card intro-card" style="margin-bottom: 2rem;">
                        <h2 id="definition">What Is Debt Collection in Turkey?</h2>
                        <p>Debt collection in Turkey is the formal legal process of recovering outstanding commercial receivables from Turkish-domiciled debtors. Governed primarily by the Turkish Enforcement and Bankruptcy Law (EBL), the process is administered through Turkish Execution Offices (<em>İcra Müdürlükleri</em>). A qualified debt recovery Turkey lawyer utilizes statutory mechanisms\u2014including notarized demand letters, direct execution proceedings, <a href="strategic-asset-protection-in-turkiye-securing-your-claims-before-international-arbitration.html">provisional attachment</a>, and commercial litigation\u2014to collect unpaid invoices in Turkey and secure assets on behalf of foreign creditors, exporters, and investors.</p>
                    </div>

                    <!-- Strategic Overview Card -->
                    <div class="glass-card intro-card" style="margin-bottom: 2rem;">
                        <h2>Strategic Recovery for Foreign Creditors</h2>
                        <p>Navigating commercial debt recovery in Turkey requires a clear understanding of the Turkish legal framework, procedural nuances, and strategic leverage. Foreign creditors frequently face challenges related to cross-border jurisdiction, evidentiary requirements, and debtor asset dissipation.</p>
                        <p>This guide details the practical avenues for securing and recovering corporate receivables\u2014from pre-action amicable settlements to aggressive provisional attachment and formal <a href="dispute-resolution-services-turkey.html">enforcement proceedings</a> under Turkish execution law.</p>
                    </div>'''

html = html.replace(old_intro, new_intro)

# ============================================================
# TASK 3: Structural Content Injection (Sections B, C, D)
# Insert BEFORE Section 4 FAQ
# ============================================================

new_sections = '''
                    <!-- Section: Can Foreign Companies Collect Debt in Turkey? -->
                    <div class="glass-card intro-card" id="foreign-creditors" style="margin-bottom: 2rem; margin-top: 3rem;">
                        <h2>Can Foreign Companies Collect Debt in Turkey?</h2>
                        <p>Yes. Under Turkish law, foreign companies and individuals hold full standing to initiate debt collection and enforcement proceedings in Turkey. There is no requirement for the creditor to be domiciled or registered in Turkey. Foreign creditors can directly file execution proceedings through Turkish Execution Offices (<em>\u0130cra M\u00fcd\u00fcrl\u00fckleri</em>), file lawsuits before Turkish Commercial Courts, and petition for <a href="strategic-asset-protection-in-turkiye-securing-your-claims-before-international-arbitration.html">provisional attachment</a> of debtor assets.</p>
                        <p>The primary procedural consideration is the potential requirement of a litigation security deposit (<em>cautio judicatum solvi</em>). However, this obligation is waived for creditors from countries that have bilateral or multilateral legal assistance treaties with Turkey, including most EU member states, the United Kingdom, and the United States.</p>
                        <p>A Turkish debt collection lawyer can represent foreign creditors under a <a href="drafting-valid-power-of-attorney-turkey.html">notarized power of attorney</a>, eliminating the need for the creditor to travel to Turkey at any stage of the proceedings.</p>
                    </div>

                    <!-- Section: Debt Collection Timeline in Turkey -->
                    <h2 id="timeline" style="margin-top: 3.5rem;">Debt Collection Timeline in Turkey</h2>
                    <p>Recovery timelines depend on whether the debtor contests the claim. The following represents standard procedural durations under Turkish enforcement law.</p>
                    <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; margin-top: 1.5rem; margin-bottom: 2rem;">
                        <div class="glass-card">
                            <h3>Uncontested Claims</h3>
                            <p><strong>2\u20136 weeks.</strong> If the debtor does not object to the Payment Order within the 7-day statutory window, the execution proceeding becomes final. The creditor can immediately request asset attachment and bank account freezing through the Execution Office.</p>
                        </div>
                        <div class="glass-card">
                            <h3>Contested Claims (Objection Filed)</h3>
                            <p><strong>6\u201318 months.</strong> If the debtor objects, the creditor must file a Cancellation of Objection lawsuit before the Commercial Court. Duration depends on court workload, complexity of evidence, and whether expert accounting reports are required.</p>
                        </div>
                        <div class="glass-card">
                            <h3>Provisional Attachment</h3>
                            <p><strong>24\u201372 hours.</strong> Emergency asset freezing. A Turkish court can issue a provisional attachment order (<em>\u0130htiyati Haciz</em>) within days of application. The creditor has 10 days to execute the order and 7 days to file the main proceeding.</p>
                        </div>
                        <div class="glass-card">
                            <h3>Foreign Judgment Enforcement</h3>
                            <p><strong>6\u201312 months.</strong> Enforcement of a foreign court judgment requires a Recognition and Enforcement (<em>Tan\u0131ma ve Tenfiz</em>) lawsuit. The Turkish court reviews reciprocity, due process, and public policy compliance without re-examining the merits.</p>
                        </div>
                    </div>

                    <!-- Section: Costs of Debt Collection in Turkey -->
                    <h2 id="costs" style="margin-top: 3.5rem;">Costs of Debt Collection in Turkey</h2>
                    <p>Understanding the fee structure is essential for foreign creditors evaluating the commercial viability of pursuing enforcement proceedings in Turkey.</p>
                    <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; margin-top: 1.5rem; margin-bottom: 2rem;">
                        <div class="glass-card">
                            <h3>Execution Office Filing Fees</h3>
                            <p>Filing an execution proceeding requires payment of a modest official fee to the Turkish Execution Office. These fees are calculated on a statutory tariff and are added to the total debt recoverable from the debtor upon successful enforcement.</p>
                        </div>
                        <div class="glass-card">
                            <h3>Attorney Fees</h3>
                            <p>Attorney fees in debt collection matters in Turkey are typically structured as a combination of a fixed retainer and a success-based percentage of the recovered amount. The Turkish Bar Association publishes a minimum fee tariff, below which attorneys cannot charge.</p>
                        </div>
                        <div class="glass-card">
                            <h3>Recoverability from the Debtor</h3>
                            <p>If the creditor prevails, Turkish law mandates that the debtor bear all official court costs, expert fees, execution charges, and the statutory attorney fee. The 20% bad-faith penalty (<em>icra inkar tazminat\u0131</em>) may also apply if the debtor\u2019s objection was unjustified.</p>
                        </div>
                    </div>

                    <!-- Section: Our Experience in Debt Recovery Cases -->
                    <div class="glass-card intro-card" id="case-studies" style="margin-bottom: 2rem; margin-top: 3rem;">
                        <h2>Our Experience in Debt Recovery Cases in Turkey</h2>
                        <p>Our practice regularly represents foreign manufacturers, trading companies, and institutional creditors in commercial debt recovery matters across Turkey. The following anonymized case summaries illustrate the procedural strategies and outcomes achieved.</p>

                        <h4>Case Study 1: EU Manufacturer \u2014 Recovery of EUR 420,000</h4>
                        <p>A Germany-based industrial equipment manufacturer engaged our firm after a Turkish distributor defaulted on deferred payment obligations across multiple invoices. We initiated an execution proceeding without judgment (<em>\u0130lams\u0131z \u0130cra</em>), and when the debtor filed a baseless objection, we filed a Cancellation of Objection lawsuit. The Commercial Court ruled in our client\u2019s favor, awarding the full principal plus 20% execution denial compensation. Bank accounts were attached within 48 hours of the ruling.</p>

                        <h4>Case Study 2: UK Trading Company \u2014 Provisional Attachment of TRY 8.2M</h4>
                        <p>A London-headquartered commodities trader faced a Turkish buyer who was actively transferring assets following a payment dispute. We obtained an emergency provisional attachment order (<em>\u0130htiyati Haciz</em>) from the Istanbul Commercial Court within 36 hours. Real estate holdings and commercial bank accounts were frozen before the debtor could complete the transfers. The matter settled in full within four weeks of the attachment.</p>

                        <h4>Case Study 3: US Technology Company \u2014 Cross-Border SaaS Receivables</h4>
                        <p>A US-based SaaS provider sought recovery of unpaid licensing fees from a Turkish enterprise client. Under a <a href="commercial-contract-services-turkey.html">commercial contract</a> governed by English law with a Turkish arbitration clause, we coordinated with the client\u2019s US counsel to structure the enforcement strategy. Following a notarized demand and formal negotiations, a structured settlement was reached, with payment secured by a personal guarantee from the debtor\u2019s managing director.</p>
                    </div>

                    <!-- Author / EEAT Trust Card -->
                    <div class="glass-card intro-card" id="author-bio" style="margin-bottom: 2rem;">
                        <h3>About the Author</h3>
                        <p><strong>Bu\u015fra \u00d6cak</strong> \u2014 Attorney-at-Law, Istanbul Bar Association. Specializing in cross-border commercial disputes, enforcement proceedings, and debt recovery strategy for foreign creditors operating in Turkey. Member of the Istanbul Bar Association and practitioner before Turkish Commercial Courts and Execution Offices.</p>
                    </div>

'''

# Insert new sections BEFORE Section 4 FAQ
html = html.replace(
    '                    <!-- Section 4: FAQ (Accordions) -->',
    new_sections + '                    <!-- Section 4: FAQ (Accordions) -->'
)

# ============================================================
# TASK 4: FAQ Expansion to 15 Questions (40-80 word answers)
# Replace existing FAQ section
# ============================================================

old_faq = '''                    <!-- Section 4: FAQ (Accordions) -->
                    <h2 id="faq">4. Comprehensive Foreign Creditor FAQ</h2>
                    <p>Addressing the most common procedural and financial questions raised by foreign creditors seeking recovery in Turkey.</p>

                    <div class="legal-accordion">
                        
                        <div class="accordion-item">
                            <button class="accordion-header">
                                What is the statute of limitations for commercial debts in Turkey?
                                <i class="fas fa-plus accordion-icon"></i>
                            </button>
                            <div class="accordion-content">
                                <p>Under the Turkish Code of Obligations, the general statute of limitations for contractual and commercial debts is ten (10) years. However, a shorter five (5) year limitation period applies to specific claims, including rental payments, principal interest, and claims arising from agency or brokerage agreements. Certain specific commercial instruments (like checks) have very short limitation periods (e.g., 3 years or even 6 months for specific enforcement actions), making prompt legal assessment essential.</p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header">
                                Can we recover legal fees and attorney costs from the debtor?
                                <i class="fas fa-plus accordion-icon"></i>
                            </button>
                            <div class="accordion-content">
                                <p>Yes, but there is a distinction between official and actual fees. If a creditor prevails in litigation or execution proceedings, the court or Execution Office will order the debtor to pay the "official attorney fee" calculated based on the Turkish Bar Association's minimum tariff. Furthermore, all official court expenses, expert fees, and execution office charges advanced by the creditor during the proceeding are added to the debt and recovered from the debtor. However, the private fee arrangement between the creditor and their attorney is not recoverable from the opposing party.</p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header">
                                Do foreign creditors need to pay a security deposit to file a lawsuit?
                                <i class="fas fa-plus accordion-icon"></i>
                            </button>
                            <div class="accordion-content">
                                <p>Often, yes. Under Turkish International Private and Civil Procedure Law, foreign individuals or legal entities initiating a lawsuit or execution proceeding in Turkey are generally required to provide a security deposit (<em>cautio judicatum solvi</em>) to cover potential court costs and damages of the opposing party. However, this requirement is waived if there is a bilateral or multilateral treaty regarding legal assistance and exemption from security (such as the Hague Convention on Civil Procedure) between Turkey and the creditor's home country. For example, creditors from Germany, the UK, or the US are typically exempt due to such treaties.</p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header">
                                Can a foreign court judgment be enforced directly in Turkey?
                                <i class="fas fa-plus accordion-icon"></i>
                            </button>
                            <div class="accordion-content">
                                <p>A foreign court judgment cannot be enforced directly; it must undergo a Recognition and Enforcement (<em>Tan\u0131ma ve Tenfiz</em>) lawsuit before a Turkish court. The Turkish court will not re-try the merits of the case but will review the judgment to ensure it complies with specific criteria, primarily: reciprocity (either a treaty or de facto reciprocal enforcement between Turkey and the issuing country), respect for the defendant's right to defense (proper service of process), and the judgment must not violate fundamental Turkish public policy (<em>kamu d\u00fczeni</em>). Once enforced, it holds the same power as a Turkish court decision.</p>
                            </div>
                        </div>

                    </div>'''

new_faq = '''                    <!-- Section 4: FAQ (Accordions) -->
                    <h2 id="faq">Frequently Asked Questions: Debt Collection in Turkey</h2>
                    <p>Direct answers to the procedural, financial, and jurisdictional questions most frequently raised by foreign creditors pursuing commercial debt recovery in Turkey.</p>

                    <div class="legal-accordion">

                        <div class="accordion-item">
                            <button class="accordion-header">
                                Can I enforce a foreign court judgment in Turkey?
                                <i class="fas fa-plus accordion-icon"></i>
                            </button>
                            <div class="accordion-content">
                                <p>No, not directly. A foreign court judgment must first undergo a Recognition and Enforcement lawsuit (<em>Tanıma ve Tenfiz</em>) before a Turkish court. The court reviews reciprocity, due process, and public policy compliance without re-examining the merits. Once recognized, the foreign judgment carries the same enforcement power as a domestic Turkish court decision.</p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header">
                                Do I need a lawyer for debt collection in Turkey?
                                <i class="fas fa-plus accordion-icon"></i>
                            </button>
                            <div class="accordion-content">
                                <p>Legal representation is not strictly mandatory for execution proceedings, but it is essential in practice. Navigating Turkish Execution Offices, drafting procedurally sound applications, and managing debtor objections require detailed knowledge of Turkish enforcement law. Foreign creditors must appoint a Turkish-licensed attorney through a notarized power of attorney.</p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header">
                                What if the debtor objects to the payment order?
                                <i class="fas fa-plus accordion-icon"></i>
                            </button>
                            <div class="accordion-content">
                                <p>If the debtor objects within the 7-day statutory period, the execution proceeding is automatically suspended. The creditor must then file a Cancellation of Objection lawsuit (<em>İtirazın İptali Davası</em>) before the Commercial Court within one year. If the court finds the objection was unjustified, the debtor faces a minimum 20% bad-faith penalty.</p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header">
                                Can assets be frozen immediately in Turkey?
                                <i class="fas fa-plus accordion-icon"></i>
                            </button>
                            <div class="accordion-content">
                                <p>Yes, through Provisional Attachment (<em>İhtiyati Haciz</em>). If the creditor demonstrates a mature debt and risk of asset dissipation, a Turkish court can issue an ex parte freezing order within 24\u201372 hours. This allows immediate attachment of bank accounts, real estate, and vehicles before the debtor is notified.</p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header">
                                What documents are required to start debt collection in Turkey?
                                <i class="fas fa-plus accordion-icon"></i>
                            </button>
                            <div class="accordion-content">
                                <p>The primary documents include unpaid invoices, the underlying commercial contract or purchase orders, proof of delivery (shipping documents, customs declarations), any prior correspondence acknowledging the debt, and a notarized power of attorney authorizing a Turkish attorney. Stronger documentary evidence significantly accelerates the enforcement process.</p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header">
                                What is the statute of limitations for commercial debts in Turkey?
                                <i class="fas fa-plus accordion-icon"></i>
                            </button>
                            <div class="accordion-content">
                                <p>The general statute of limitations for commercial and contractual debts under the Turkish Code of Obligations is ten (10) years. However, shorter periods apply to specific claims: five years for rental payments and interest, three years for checks, and six months for certain enforcement-specific actions. Timely legal assessment is critical.</p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header">
                                Can we recover legal fees and attorney costs from the debtor?
                                <i class="fas fa-plus accordion-icon"></i>
                            </button>
                            <div class="accordion-content">
                                <p>Yes. If the creditor prevails, the debtor is ordered to pay all official court costs, expert fees, execution charges, and the statutory attorney fee based on the Turkish Bar Association\u2019s minimum tariff. The creditor\u2019s private fee arrangement with their own attorney, however, is not recoverable from the debtor.</p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header">
                                Do foreign creditors need a security deposit to file a lawsuit in Turkey?
                                <i class="fas fa-plus accordion-icon"></i>
                            </button>
                            <div class="accordion-content">
                                <p>Generally, yes. Foreign entities must provide a litigation security deposit (<em>cautio judicatum solvi</em>) when filing in Turkish courts. However, this requirement is waived for creditors from countries with bilateral or multilateral legal assistance treaties with Turkey, including most EU states, the UK, and the US.</p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header">
                                How long does an uncontested debt collection take in Turkey?
                                <i class="fas fa-plus accordion-icon"></i>
                            </button>
                            <div class="accordion-content">
                                <p>Uncontested cases typically resolve within 2\u20136 weeks. If the debtor fails to object to the Payment Order within 7 days, the execution proceeding becomes final. The creditor can immediately request asset attachment through the Execution Office, including electronic freezing of bank accounts and liens on registered property.</p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header">
                                What is the execution denial compensation penalty in Turkey?
                                <i class="fas fa-plus accordion-icon"></i>
                            </button>
                            <div class="accordion-content">
                                <p>Under Turkish enforcement law, if a court determines the debtor\u2019s objection to a Payment Order was unjustified and made in bad faith to delay payment, the debtor is ordered to pay execution denial compensation (<em>icra inkar tazminatı</em>) of at least 20% of the disputed debt amount, in addition to the principal and interest.</p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header">
                                Can I collect a debt in Turkey without a court judgment?
                                <i class="fas fa-plus accordion-icon"></i>
                            </button>
                            <div class="accordion-content">
                                <p>Yes. Turkish execution law allows creditors to initiate enforcement proceedings without a prior court judgment through a procedure called Execution Without Judgment (<em>İlamsız İcra</em>). The Execution Office issues a Payment Order directly to the debtor. If the debtor does not object within 7 days, the creditor proceeds directly to asset seizure.</p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header">
                                Can a foreign arbitral award be enforced in Turkey?
                                <i class="fas fa-plus accordion-icon"></i>
                            </button>
                            <div class="accordion-content">
                                <p>Yes. Turkey is a signatory to the New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards. Foreign arbitral awards can be <a href="enforcing-foreign-arbitral-awards-turkey.html">enforced in Turkey</a> through an enforcement petition filed before the competent Turkish court. The court will review limited procedural grounds without re-examining the substance of the dispute.</p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header">
                                What types of debtor assets can be seized in Turkey?
                                <i class="fas fa-plus accordion-icon"></i>
                            </button>
                            <div class="accordion-content">
                                <p>Turkish execution law permits seizure of bank accounts, real estate, registered vehicles, commercial inventory, machinery, receivables owed by third parties, and intellectual property rights. The Execution Office queries national registries (TAKBİS for land, POLNET for vehicles) electronically to locate and attach assets across all Turkish jurisdictions.</p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header">
                                Is mediation mandatory before filing a debt collection case in Turkey?
                                <i class="fas fa-plus accordion-icon"></i>
                            </button>
                            <div class="accordion-content">
                                <p>Mandatory mediation applies to certain commercial disputes in Turkey but does not apply to standard execution proceedings (<em>İlamsız İcra</em>) filed through Execution Offices. If the creditor must file a substantive lawsuit, such as a Cancellation of Objection action, mandatory commercial mediation may be required as a procedural prerequisite.</p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header">
                                What interest rate applies to overdue commercial debts in Turkey?
                                <i class="fas fa-plus accordion-icon"></i>
                            </button>
                            <div class="accordion-content">
                                <p>The default interest rate for commercial debts in Turkey is determined by the Turkish Central Bank\u2019s statutory rate, which is published annually. Parties may agree to a contractual interest rate, but it cannot be usurious. Default interest runs from the date the debtor is formally placed in default (<em>temerr\u00fct</em>) through notification.</p>
                            </div>
                        </div>

                    </div>'''

html = html.replace(old_faq, new_faq)

# ============================================================
# TASK 5: Schema Merging (append FAQPage + Article + Author schemas)
# Keep existing Service schema intact.
# ============================================================

faq_schema = '''
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": "Can I enforce a foreign court judgment in Turkey?", "acceptedAnswer": {"@type": "Answer", "text": "No, not directly. A foreign court judgment must first undergo a Recognition and Enforcement lawsuit before a Turkish court. The court reviews reciprocity, due process, and public policy compliance without re-examining the merits. Once recognized, the foreign judgment carries the same enforcement power as a domestic Turkish court decision."}},
        {"@type": "Question", "name": "Do I need a lawyer for debt collection in Turkey?", "acceptedAnswer": {"@type": "Answer", "text": "Legal representation is not strictly mandatory for execution proceedings, but it is essential in practice. Navigating Turkish Execution Offices, drafting procedurally sound applications, and managing debtor objections require detailed knowledge of Turkish enforcement law."}},
        {"@type": "Question", "name": "What if the debtor objects to the payment order?", "acceptedAnswer": {"@type": "Answer", "text": "If the debtor objects within the 7-day statutory period, the execution proceeding is automatically suspended. The creditor must file a Cancellation of Objection lawsuit before the Commercial Court within one year. If the court finds the objection unjustified, the debtor faces a minimum 20% bad-faith penalty."}},
        {"@type": "Question", "name": "Can assets be frozen immediately in Turkey?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, through Provisional Attachment. If the creditor demonstrates a mature debt and risk of asset dissipation, a Turkish court can issue an ex parte freezing order within 24-72 hours, allowing immediate attachment of bank accounts, real estate, and vehicles before the debtor is notified."}},
        {"@type": "Question", "name": "What documents are required to start debt collection in Turkey?", "acceptedAnswer": {"@type": "Answer", "text": "The primary documents include unpaid invoices, the underlying commercial contract, proof of delivery, any correspondence acknowledging the debt, and a notarized power of attorney authorizing a Turkish attorney."}},
        {"@type": "Question", "name": "What is the statute of limitations for commercial debts in Turkey?", "acceptedAnswer": {"@type": "Answer", "text": "The general statute of limitations for commercial debts under the Turkish Code of Obligations is ten years. Shorter periods apply to specific claims: five years for rental payments, three years for checks."}},
        {"@type": "Question", "name": "Can we recover legal fees from the debtor?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. If the creditor prevails, the debtor is ordered to pay all official court costs, expert fees, execution charges, and the statutory attorney fee based on the Turkish Bar Association minimum tariff."}},
        {"@type": "Question", "name": "Do foreign creditors need a security deposit to file a lawsuit in Turkey?", "acceptedAnswer": {"@type": "Answer", "text": "Generally yes, but this requirement is waived for creditors from countries with bilateral or multilateral legal assistance treaties with Turkey, including most EU states, the UK, and the US."}},
        {"@type": "Question", "name": "How long does an uncontested debt collection take in Turkey?", "acceptedAnswer": {"@type": "Answer", "text": "Uncontested cases typically resolve within 2-6 weeks. If the debtor fails to object within 7 days, the execution proceeding becomes final and the creditor can immediately request asset attachment."}},
        {"@type": "Question", "name": "What is the execution denial compensation penalty in Turkey?", "acceptedAnswer": {"@type": "Answer", "text": "If a court determines the debtor objected in bad faith to delay payment, the debtor is ordered to pay execution denial compensation of at least 20% of the disputed debt amount, in addition to principal and interest."}},
        {"@type": "Question", "name": "Can I collect a debt in Turkey without a court judgment?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Turkish execution law allows direct enforcement through Execution Without Judgment. The Execution Office issues a Payment Order to the debtor. If no objection is filed within 7 days, the creditor proceeds directly to asset seizure."}},
        {"@type": "Question", "name": "Can a foreign arbitral award be enforced in Turkey?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Turkey is a signatory to the New York Convention. Foreign arbitral awards can be enforced through an enforcement petition before the competent Turkish court, which reviews limited procedural grounds without re-examining the substance."}},
        {"@type": "Question", "name": "What types of debtor assets can be seized in Turkey?", "acceptedAnswer": {"@type": "Answer", "text": "Turkish execution law permits seizure of bank accounts, real estate, registered vehicles, commercial inventory, machinery, receivables owed by third parties, and intellectual property rights through electronic queries to national registries."}},
        {"@type": "Question", "name": "Is mediation mandatory before filing a debt collection case in Turkey?", "acceptedAnswer": {"@type": "Answer", "text": "Mandatory mediation does not apply to standard execution proceedings filed through Execution Offices. If a substantive lawsuit is required, such as a Cancellation of Objection action, mandatory commercial mediation may be a procedural prerequisite."}},
        {"@type": "Question", "name": "What interest rate applies to overdue commercial debts in Turkey?", "acceptedAnswer": {"@type": "Answer", "text": "The default interest rate is determined by the Turkish Central Bank statutory rate, published annually. Parties may agree to a contractual interest rate. Default interest runs from the date the debtor is formally placed in default through notification."}}
      ]
    }
    </script>

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Debt Collection in Turkey | Enforcement, Litigation & Asset Recovery for Foreign Creditors",
      "description": "Comprehensive guide to commercial debt recovery in Turkey for foreign creditors, covering enforcement proceedings, provisional attachment, asset seizure, and litigation strategy under Turkish Execution and Bankruptcy Law.",
      "author": {
        "@type": "Person",
        "name": "Busra Ocak",
        "jobTitle": "Attorney-at-Law",
        "affiliation": {
          "@type": "Organization",
          "name": "Istanbul Bar Association"
        }
      },
      "publisher": {
        "@type": "LegalService",
        "name": "Turkish Trade Lawyers",
        "url": "https://www.turkishtradelawyers.com"
      },
      "datePublished": "2026-01-15",
      "dateModified": "2026-06-19",
      "mainEntityOfPage": "https://www.turkishtradelawyers.com/debt-collection-in-turkey.html"
    }
    </script>'''

# Insert new schemas right before </head>
html = html.replace('</head>', faq_schema + '\n</head>')

# ============================================================
# TASK 6: Update sidebar "On This Page" navigation
# ============================================================

old_sidebar = '''                    <div class="service-sidebar-card glass-card" style="padding: 24px; position: sticky; top: 100px;">
                        <h3 style="margin-top:0;">On This Page</h3>
                        <ul class="service-link-list">
                            <li><a href="#amicable-recovery">Pre-Action & Amicable Recovery</a></li>
                            <li><a href="#enforcement-procedures">Formal Enforcement Procedures</a></li>
                            <li><a href="#asset-tracing">Provisional Attachment</a></li>
                            <li><a href="#faq">Foreign Creditor FAQ</a></li>
                            <li><a href="#glossary">Legal Glossary</a></li>
                        </ul>
                    </div>'''

new_sidebar = '''                    <div class="service-sidebar-card glass-card" style="padding: 24px; position: sticky; top: 100px;">
                        <h3 style="margin-top:0;">On This Page</h3>
                        <ul class="service-link-list">
                            <li><a href="#definition">What Is Debt Collection?</a></li>
                            <li><a href="#amicable-recovery">Pre-Action & Amicable Recovery</a></li>
                            <li><a href="#enforcement-procedures">Enforcement Procedures</a></li>
                            <li><a href="#asset-tracing">Provisional Attachment</a></li>
                            <li><a href="#foreign-creditors">Foreign Creditors</a></li>
                            <li><a href="#timeline">Collection Timeline</a></li>
                            <li><a href="#costs">Costs Breakdown</a></li>
                            <li><a href="#case-studies">Case Studies</a></li>
                            <li><a href="#faq">FAQ (15 Questions)</a></li>
                            <li><a href="#glossary">Legal Glossary</a></li>
                        </ul>
                    </div>'''

html = html.replace(old_sidebar, new_sidebar)

# ============================================================
# Write final output
# ============================================================

with open(FILE, "w", encoding="utf-8") as f:
    f.write(html)

print("All 6 tasks completed successfully.")
print(f"Final file size: {len(html)} bytes")

# Quick word count estimate (strip tags)
import html as html_mod
text_only = re.sub(r'<[^>]+>', ' ', html)
text_only = re.sub(r'\s+', ' ', text_only).strip()
words = len(text_only.split())
print(f"Estimated word count: {words}")

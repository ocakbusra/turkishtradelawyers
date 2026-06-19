import re

file_path = "debt-collection-in-turkey.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# The massive new content to inject
new_content = """<div class="container service-landing-layout">
                <div class="service-main-content">
                    
                    <!-- Intro Glass Card -->
                    <div class="glass-card" style="margin-bottom: 2rem;">
                        <h2>Strategic Recovery for Foreign Creditors</h2>
                        <p>Navigating commercial debt recovery in Turkey requires a clear understanding of the Turkish legal framework, procedural nuances, and strategic leverage. Foreign creditors often face challenges related to cross-border jurisdiction, evidentiary requirements, and debtor asset dissipation. This comprehensive guide details the practical avenues for securing and recovering corporate receivables, ranging from pre-action amicable settlements to aggressive provisional attachment and formal enforcement proceedings under the Turkish Execution and Bankruptcy Law (EBL).</p>
                    </div>

                    <!-- Section 1: Pre-action & Amicable Recovery (Tabs) -->
                    <h2 id="amicable-recovery">1. Pre-Action & Amicable Recovery</h2>
                    <p>Before initiating formal litigation or execution proceedings, a structured pre-action strategy is critical. Amicable recovery often yields faster results while preserving business relationships and minimizing legal costs. The key is to demonstrate to the debtor that the creditor is fully prepared to escalate the matter if necessary.</p>
                    
                    <div class="legal-tabs-wrapper">
                        <div class="legal-tabs-header">
                            <button class="legal-tab-btn active" data-tab="tab-notary">Demand Letters (Notary)</button>
                            <button class="legal-tab-btn" data-tab="tab-negotiation">Commercial Negotiation</button>
                            <button class="legal-tab-btn" data-tab="tab-acknowledgment">Debt Acknowledgment</button>
                        </div>
                        
                        <div id="tab-notary" class="legal-tab-content active glass-card">
                            <h3>Strategic Issuance of Formal Notices via Turkish Notary</h3>
                            <p>Under Turkish commercial law, formally placing a debtor in default (<em>temerrüt</em>) is frequently a prerequisite for claiming default interest and initiating specific enforcement proceedings. While informal electronic communication serves a commercial purpose, securing a legally unassailable position requires the utilization of a Turkish Notary Public.</p>
                            <h4>The Evidentiary Value of Notarial Notices</h4>
                            <p>Dispatching a formal demand letter (<em>ihtarname</em>) through a Notary Public serves two critical procedural functions for foreign creditors. First, it establishes an undeniable, state-certified record of the demand and its precise content. Second, it shifts the burden of proof regarding receipt onto the debtor. Should the matter escalate to litigation or formal execution proceedings, notarial records inherently possess a higher evidentiary weight before Turkish Commercial Courts, mitigating disputes over communication delivery.</p>
                            <h4>Drafting for Enforcement Leverage</h4>
                            <p>A strategically drafted notice is not merely a request for payment; it is the foundation of the legal claim. The drafting process must strictly encapsulate:</p>
                            <ul class="service-checklist">
                                <li>The exact origin of the commercial relationship (e.g., specific supply agreements, customs declarations, or invoices).</li>
                                <li>The precise principal amount owed, denominated in the correct currency, factoring in relevant exchange rate provisions under Turkish law.</li>
                                <li>A definitive cure period, establishing the exact date of default upon expiration.</li>
                                <li>Explicit reservations of rights regarding litigation costs, attorney fees, and the pursuit of provisional attachment (<em>ihtiyati haciz</em>) should the debtor fail to comply.</li>
                            </ul>
                            <p>By meticulously structuring the initial demand, creditors establish a robust position that often compels settlement by demonstrating readiness for immediate procedural escalation.</p>
                        </div>

                        <div id="tab-negotiation" class="legal-tab-content glass-card">
                            <h3>Commercial Negotiation & Settlement Structuring</h3>
                            <p>Once a formal notice is served, the debtor is frequently compelled to engage in settlement negotiations to avoid the reputational and financial damage associated with formal enforcement. Effective commercial negotiation requires a deep understanding of the debtor's financial health, asset profile, and commercial priorities.</p>
                            <h4>Leveraging the Threat of Enforcement</h4>
                            <p>In Turkey, the threat of an execution proceeding without a judgment (<em>ilamsız icra</em>) is a potent negotiating tool. If a debtor's bank accounts or commercial assets are attached, their operational capacity is severely restricted. Negotiators use this procedural reality to drive favorable settlement terms.</p>
                            <h4>Structuring the Settlement</h4>
                            <p>A successful negotiation must culminate in a formally structured settlement agreement. This agreement must outline specific payment milestones, outline the consequences of a breach, and ideally, secure additional guarantees (such as personal guarantees from company directors or pledges over specific assets). Crucially, the settlement agreement should be drafted to qualify as an enforceable document under the Execution and Bankruptcy Law, expediting future recovery efforts if the debtor defaults on the settlement terms.</p>
                        </div>

                        <div id="tab-acknowledgment" class="legal-tab-content glass-card">
                            <h3>Formalizing Debt Acknowledgment Agreements</h3>
                            <p>When a debtor admits liability but requires time to pay, securing a formal Debt Acknowledgment Agreement (<em>Borç İkrarı</em>) is a vital strategic objective. This agreement transforms a disputed or unliquidated claim into a definitive, enforceable obligation.</p>
                            <h4>Procedural Advantages</h4>
                            <p>A properly executed Debt Acknowledgment Agreement bypasses many of the evidentiary hurdles associated with proving an underlying commercial transaction. If the debtor subsequently defaults, the creditor can initiate enforcement proceedings based directly on the acknowledgment, significantly narrowing the grounds upon which the debtor can object.</p>
                            <h4>Key Drafting Requirements</h4>
                            <p>To maximize enforceability, the agreement must unambiguously identify the parties, precisely state the acknowledged debt amount (including any agreed-upon interest or penalties), and clearly outline the payment schedule. Furthermore, having the signatures notarized elevates the document's evidentiary status, making it exceedingly difficult for the debtor to later contest the authenticity of their consent. This proactive step provides foreign creditors with an expedited route to asset attachment if payment is not forthcoming.</p>
                        </div>
                    </div>

                    <!-- Section 2: Formal Enforcement Procedures (Timeline) -->
                    <h2 id="enforcement-procedures">2. Formal Enforcement Procedures (Execution Proceedings)</h2>
                    <p>When amicable efforts fail, Turkish law provides robust mechanisms for involuntary debt recovery through the Execution Offices (<em>İcra Müdürlüğü</em>). The most common mechanism for commercial debts is the Execution Proceeding without a Judgment (<em>İlamsız İcra</em>).</p>

                    <div class="legal-timeline">
                        <div class="timeline-item">
                            <div class="timeline-node"></div>
                            <div class="timeline-header">
                                <h4>Step 1: Initiation of Execution Proceeding Without Judgment</h4>
                                <i class="fas fa-chevron-down timeline-header-icon"></i>
                            </div>
                            <div class="timeline-body">
                                <p>This unique feature of Turkish law allows a creditor to initiate enforcement actions to recover a monetary debt without first obtaining a court judgment. The creditor submits an application to the Execution Office detailing the debt, the debtor's information, and the basis of the claim (e.g., invoices, current account statements, or simply an assertion of debt).</p>
                                <p>The Execution Office then issues a Payment Order (<em>Ödeme Emri</em>) to the debtor. This is a critical juncture. The Payment Order is a formal state mandate compelling the debtor to either pay the debt or formally object within a strict, non-extendable statutory period—typically seven (7) days from the date of receipt.</p>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-node"></div>
                            <div class="timeline-header">
                                <h4>Step 2: The Debtor's Statutory Objection Period</h4>
                                <i class="fas fa-chevron-down timeline-header-icon"></i>
                            </div>
                            <div class="timeline-body">
                                <p>Upon receiving the Payment Order, the debtor has two primary options: pay the debt (plus execution costs) or file an objection with the Execution Office. If the debtor files an objection within the 7-day period, the execution proceeding is automatically suspended (<em>durur</em>). The debtor is not required to provide detailed evidence or complex legal arguments at this stage; a simple denial of the debt is sufficient to halt the proceedings.</p>
                                <p>If the debtor fails to object and fails to pay within the 7-day period, the Payment Order becomes final (<em>kesinleşir</em>). The creditor then immediately gains the right to proceed to the asset attachment phase without further litigation. This highlights the severe consequences for debtors who ignore official notifications.</p>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-node"></div>
                            <div class="timeline-header">
                                <h4>Step 3: Action for Cancellation of Objection (İtirazın İptali Davası)</h4>
                                <i class="fas fa-chevron-down timeline-header-icon"></i>
                            </div>
                            <div class="timeline-body">
                                <p>If the debtor successfully suspends the proceeding by objecting, the burden shifts back to the creditor. The creditor must file a lawsuit to cancel the objection (<em>İtirazın İptali Davası</em>) within one year before the competent Commercial Court.</p>
                                <p>This is a full substantive lawsuit where the creditor must prove the existence and amount of the debt using valid commercial evidence (e.g., signed delivery notes, customs declarations, expert accounting reports on corporate books). If the court rules in favor of the creditor, the objection is canceled, and the execution proceeding resumes.</p>
                                <p><strong>The Bad Faith Penalty:</strong> To deter frivolous objections designed merely to delay payment, Turkish law mandates a severe penalty. If the court determines the debtor's objection was unjustified, the debtor can be ordered to pay an execution denial compensation (<em>icra inkar tazminatı</em>) of at least 20% of the disputed debt amount, in addition to the principal, interest, and litigation costs.</p>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-node"></div>
                            <div class="timeline-header">
                                <h4>Step 4: Asset Attachment (Haciz) and Liquidation</h4>
                                <i class="fas fa-chevron-down timeline-header-icon"></i>
                            </div>
                            <div class="timeline-body">
                                <p>Once the execution proceeding is final—either because the debtor did not object or because the court canceled the objection—the creditor can request the Execution Office to attach (<em>haciz</em>) the debtor's assets.</p>
                                <p>The Execution Office has broad powers to electronically query national registries to locate assets. This includes freezing bank accounts, placing liens on real estate and vehicles, and attaching receivables owed to the debtor by third parties. Once assets are attached, the creditor can request their public auction or forced sale to satisfy the debt. The proceeds are then distributed to the creditor, marking the conclusion of the recovery process.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Section 3: Provisional Attachment & Asset Tracing (Modals) -->
                    <h2 id="asset-tracing">3. Provisional Attachment & Asset Tracing Strategies</h2>
                    <p>In high-stakes commercial disputes, a debtor anticipating enforcement may attempt to dissipate, transfer, or hide assets. To counteract this risk, Turkish law provides the powerful mechanism of Provisional Attachment (<em>İhtiyati Haciz</em>). This allows a creditor to preemptively freeze assets before a final judgment is obtained, securing the ultimate enforceability of the claim.</p>

                    <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; margin-top: 2rem;">
                        
                        <div class="glass-card">
                            <h3>Requirements for Provisional Attachment</h3>
                            <p>Securing a provisional attachment order requires demonstrating specific criteria to a Turkish judge. The standard of proof is lower than a full trial, but requires convincing evidence.</p>
                            <button class="btn-expand" data-modal-target="modal-requirements">Read Full Procedure <i class="fas fa-arrow-right"></i></button>
                        </div>

                        <div class="glass-card">
                            <h3>Asset Tracing Mechanisms</h3>
                            <p>Locating a debtor's assets requires navigating Turkish corporate registries, banking regulations, and third-party disclosure rules.</p>
                            <button class="btn-expand" data-modal-target="modal-tracing">Read Full Procedure <i class="fas fa-arrow-right"></i></button>
                        </div>

                        <div class="glass-card">
                            <h3>Executing the Attachment Order</h3>
                            <p>Once the court grants the order, rapid execution is essential to freeze assets before the debtor becomes aware of the impending action.</p>
                            <button class="btn-expand" data-modal-target="modal-executing">Read Full Procedure <i class="fas fa-arrow-right"></i></button>
                        </div>

                    </div>

                    <!-- Modals Content -->
                    <div id="modal-requirements" class="legal-modal-overlay">
                        <div class="legal-modal-content">
                            <div class="legal-modal-header">
                                <h3>Requirements for Provisional Attachment (İhtiyati Haciz)</h3>
                                <button class="legal-modal-close"><i class="fas fa-times"></i></button>
                            </div>
                            <div class="legal-modal-body">
                                <p>Provisional attachment is a temporary legal protection measure. Under Article 257 of the Execution and Bankruptcy Law, a creditor may request the provisional attachment of the debtor's movable and immovable properties, as well as their receivables held by third parties, to secure a monetary debt.</p>
                                
                                <h4>Primary Conditions</h4>
                                <p>To successfully petition a Commercial Court for a provisional attachment order, the creditor must satisfy two primary conditions:</p>
                                <ol>
                                    <li><strong>The Debt Must Be Due:</strong> The principal requirement is that the debt is mature and payable. The creditor must provide <em>prima facie</em> evidence of the debt and its maturity. Valid evidence typically includes unpaid invoices supported by delivery notes, signed contracts, dishonored checks, or promissory notes.</li>
                                    <li><strong>The Debt is Not Secured by a Pledge:</strong> If the debt is already fully secured by a valid pledge (such as a mortgage), provisional attachment cannot be granted for that specific secured amount.</li>
                                </ol>

                                <h4>Exceptions for Undue Debts</h4>
                                <p>In exceptional circumstances, a creditor may obtain a provisional attachment even if the debt is not yet due. This requires proving severe risk, specifically:</p>
                                <ul>
                                    <li>The debtor has no specific domicile.</li>
                                    <li>The debtor is preparing to conceal assets, smuggle property, or flee the jurisdiction to avoid fulfilling their obligations.</li>
                                </ul>

                                <h4>The Security Deposit Requirement</h4>
                                <p>Because provisional attachment is granted <em>ex parte</em> (without notifying the debtor), the court requires the creditor to deposit security (<em>teminat</em>) to compensate the debtor for potential damages if the underlying claim is ultimately proven invalid. The security amount is determined at the judge's discretion, but is customarily set at 10% to 15% of the claimed debt amount. This security can be provided in cash or via a bank guarantee letter from a Turkish bank.</p>
                            </div>
                        </div>
                    </div>

                    <div id="modal-tracing" class="legal-modal-overlay">
                        <div class="legal-modal-content">
                            <div class="legal-modal-header">
                                <h3>Asset Tracing Mechanisms in Turkey</h3>
                                <button class="legal-modal-close"><i class="fas fa-times"></i></button>
                            </div>
                            <div class="legal-modal-body">
                                <p>Effective debt recovery hinges on locating attachable assets. Unlike jurisdictions with highly transparent public asset registers, asset tracing in Turkey requires a structured, multi-tiered approach.</p>
                                
                                <h4>Pre-Litigation Intelligence</h4>
                                <p>Before initiating formal proceedings, creditors must gather intelligence using publicly available sources. The Turkish Trade Registry Gazette (<em>Ticaret Sicili Gazetesi</em>) provides crucial information regarding corporate structure, shareholding changes, capital increases, and registered addresses. Analyzing corporate websites, industry databases, and commercial credit reports can identify key clients, ongoing projects, and potential revenue streams that could be subject to third-party attachment.</p>

                                <h4>UYAP System Queries</h4>
                                <p>Once an execution proceeding becomes final (or a provisional attachment order is granted), the creditor's attorney gains access to the National Judiciary Informatics System (UYAP). Through UYAP, the Execution Office can electronically query various state databases to identify assets:</p>
                                <ul>
                                    <li><strong>TAKBİS (Land Registry System):</strong> Identifies real estate owned by the debtor across Turkey.</li>
                                    <li><strong>POLNET (Police Network):</strong> Locates registered motor vehicles.</li>
                                    <li><strong>SGK (Social Security Institution):</strong> Can sometimes reveal employment ties or active corporate operations.</li>
                                </ul>

                                <h4>Banking and Third-Party Attachments (Article 89 Notices)</h4>
                                <p>One of the most effective tracing and recovery tools is the Article 89 Notice (<em>89/1 İhbarnamesi</em>). The Execution Office can send formal notices to all major Turkish banks, inquiring if the debtor holds accounts or safe deposit boxes. If funds exist, the bank is legally obligated to freeze the requested amount immediately and transfer it to the Execution Office's account.</p>
                                <p>Similarly, Article 89 Notices can be served on known clients or business partners of the debtor. This legally intercepts payments destined for the debtor, redirecting them directly to the creditor to satisfy the debt.</p>
                            </div>
                        </div>
                    </div>

                    <div id="modal-executing" class="legal-modal-overlay">
                        <div class="legal-modal-content">
                            <div class="legal-modal-header">
                                <h3>Executing the Provisional Attachment Order</h3>
                                <button class="legal-modal-close"><i class="fas fa-times"></i></button>
                            </div>
                            <div class="legal-modal-body">
                                <p>Securing a provisional attachment order from the court is only the first step. The critical phase is the rapid and discreet execution of that order to freeze the assets before the debtor can react.</p>
                                
                                <h4>The 10-Day Execution Window</h4>
                                <p>Under Turkish procedural rules, a creditor has a strict deadline of ten (10) days from the date the provisional attachment order is issued to request its execution from the competent Execution Office. Failure to act within this 10-day window renders the court's order null and void, requiring the creditor to restart the application process.</p>

                                <h4>The Element of Surprise</h4>
                                <p>Provisional attachment orders are deliberately granted <em>ex parte</em> (without hearing the debtor) to preserve the element of surprise. When the creditor's attorney submits the order to the Execution Office, immediate requests are made to dispatch electronic freezing orders to the banking system and land registries.</p>
                                <p>Physical attachment of movable assets—such as seizing inventory at a warehouse or machinery at a factory—involves an Execution Officer visiting the premises, accompanied by the creditor's attorney and, if necessary, law enforcement. The assets are inventoried, formally attached, and either left in the custody of a trustee or physically removed to a secure storage facility.</p>

                                <h4>Initiating the Main Proceeding</h4>
                                <p>It is vital to understand that provisional attachment is a temporary hold, not a final transfer of ownership. To finalize the process, the creditor must initiate the main legal action (either a substantive lawsuit or a formal execution proceeding) within seven (7) days of executing the provisional attachment. If the main proceeding is not filed within this timeframe, the attachment is automatically lifted, and the assets are released back to the debtor.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Section 4: FAQ (Accordions) -->
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
                                <p>A foreign court judgment cannot be enforced directly; it must undergo a Recognition and Enforcement (<em>Tanıma ve Tenfiz</em>) lawsuit before a Turkish court. The Turkish court will not re-try the merits of the case but will review the judgment to ensure it complies with specific criteria, primarily: reciprocity (either a treaty or de facto reciprocal enforcement between Turkey and the issuing country), respect for the defendant's right to defense (proper service of process), and the judgment must not violate fundamental Turkish public policy (<em>kamu düzeni</em>). Once enforced, it holds the same power as a Turkish court decision.</p>
                            </div>
                        </div>

                    </div>

                    <!-- Section 5: Glossary (Flip Cards) -->
                    <h2 id="glossary">5. Turkish Debt Collection Glossary</h2>
                    <p>Key procedural terms you will encounter during the enforcement process in Turkey.</p>

                    <div class="flip-cards-grid">
                        
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <i class="fas fa-file-signature"></i>
                                    <h4>İlamsız İcra</h4>
                                </div>
                                <div class="flip-card-back">
                                    <h4>Execution Without Judgment</h4>
                                    <p>A procedure allowing a creditor to initiate debt collection through the Execution Office without possessing a prior court judgment. Highly effective for undisputed commercial debts.</p>
                                </div>
                            </div>
                        </div>

                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <i class="fas fa-gavel"></i>
                                    <h4>İtirazın İptali</h4>
                                </div>
                                <div class="flip-card-back">
                                    <h4>Cancellation of Objection</h4>
                                    <p>The substantive lawsuit filed by a creditor to cancel a debtor's objection to a payment order, proving the debt and allowing the execution process to resume.</p>
                                </div>
                            </div>
                        </div>

                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <i class="fas fa-lock"></i>
                                    <h4>İhtiyati Haciz</h4>
                                </div>
                                <div class="flip-card-back">
                                    <h4>Provisional Attachment</h4>
                                    <p>A preemptive court order freezing a debtor's movable or immovable assets and bank accounts to prevent dissipation before a final judgment or execution order is obtained.</p>
                                </div>
                            </div>
                        </div>

                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <i class="fas fa-money-bill-wave"></i>
                                    <h4>İcra İnkar Tazminatı</h4>
                                </div>
                                <div class="flip-card-back">
                                    <h4>Execution Denial Compensation</h4>
                                    <p>A punitive financial penalty (minimum 20% of the debt) imposed on a debtor who acts in bad faith by unjustifiably objecting to an execution proceeding simply to delay payment.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="sources-box" style="margin-top: 3rem;">
                        <h3>Official Sources and Government Resources</h3>
                        <p class="sources-note">Primary public institutions and legal gateways relevant to collection and enforcement matters in Turkey.</p>
                        <ul class="sources-list">
                            <li><a href="https://www.adalet.gov.tr" target="_blank" rel="noopener noreferrer">Republic of Turkiye Ministry of Justice</a></li>
                            <li><a href="https://www.mevzuat.gov.tr" target="_blank" rel="noopener noreferrer">Mevzuat Bilgi Sistemi (Official Legislation Portal)</a></li>
                            <li><a href="https://www.resmigazete.gov.tr" target="_blank" rel="noopener noreferrer">Official Gazette</a></li>
                            <li><a href="https://www.trade.gov.tr" target="_blank" rel="noopener noreferrer">Republic of Turkiye Ministry of Trade</a></li>
                        </ul>
                    </div>

                    <div class="article-cta" style="margin-top: 2rem;">
                        <h3>Need to recover a receivable in Turkey?</h3>
                        <p>We can review your contract set, payment history, and counterparty profile to recommend the fastest commercially sensible route.</p>
                        <a href="contact.html" class="cta-btn">Request a Review <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <aside>
                    <div class="service-sidebar-card glass-card" style="padding: 24px; position: sticky; top: 100px;">
                        <h3 style="margin-top:0;">On This Page</h3>
                        <ul class="service-link-list">
                            <li><a href="#amicable-recovery">Pre-Action & Amicable Recovery</a></li>
                            <li><a href="#enforcement-procedures">Formal Enforcement Procedures</a></li>
                            <li><a href="#asset-tracing">Provisional Attachment</a></li>
                            <li><a href="#faq">Foreign Creditor FAQ</a></li>
                            <li><a href="#glossary">Legal Glossary</a></li>
                        </ul>
                    </div>

                    <div class="service-sidebar-card glass-card" style="padding: 24px; margin-top: 24px;">
                        <h3 style="margin-top:0;">Typical Triggers</h3>
                        <ul class="service-checklist">
                            <li>Overdue distributor or customer balances</li>
                            <li>Shipment delivered but invoice unpaid</li>
                            <li>Risk that the debtor may move assets</li>
                            <li>Need to coordinate Turkish recovery with foreign counsel</li>
                        </ul>
                    </div>
                </aside>
            </div>"""

# Replace the inner part of <section class="service-landing-content">
pattern = r'<div class="container service-landing-layout">.*?</section>'
match = re.search(pattern, content, re.DOTALL)
if match:
    new_html = content[:match.start()] + new_content + "\n        </section>" + content[match.end():]
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_html)
    print("Content replaced successfully.")
else:
    print("Could not find the section to replace.")

// Turkish Law Glossary Data - 100 FAQ-Based Entries
// Each entry contains: id, term, question, excerpt, tags, relatedTerms

const glossaryData = [
    // A
    {
        id: "anonim-sirket",
        term: "Anonim Şirket (A.Ş.)",
        question: "What is an Anonim Şirket and how does it work in Turkey?",
        excerpt: "A joint-stock company (A.Ş.) is the most common corporate structure for large businesses in Turkey, offering limited liability and the ability to issue shares.",
        tags: ["company-law"],
        relatedTerms: ["limited-sirket", "company-formation", "shareholders-agreement"]
    },
    {
        id: "arbitration-turkey",
        term: "Arbitration in Turkey",
        question: "How does commercial arbitration work under Turkish law?",
        excerpt: "Turkey recognizes both domestic and international arbitration. The Turkish International Arbitration Law aligns with UNCITRAL Model Law for cross-border disputes.",
        tags: ["dispute-resolution", "international-trade"],
        relatedTerms: ["mediation", "litigation-turkey", "enforcement-foreign-judgments"]
    },
    {
        id: "agency-agreement",
        term: "Agency Agreement",
        question: "What are the legal requirements for agency agreements in Turkey?",
        excerpt: "Agency agreements in Turkey are governed by the Turkish Commercial Code. Agents may be entitled to portfolio compensation if specific statutory conditions are met.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["distribution-agreement", "commercial-representative", "franchise-agreement"]
    },
    {
        id: "anti-corruption",
        term: "Anti-Corruption Compliance",
        question: "What anti-corruption laws apply to businesses in Turkey?",
        excerpt: "Turkey's anti-corruption framework includes Turkish Penal Code provisions and aligns with OECD Anti-Bribery Convention requirements for foreign businesses.",
        tags: ["commercial-law", "international-trade"],
        relatedTerms: ["compliance-program", "due-diligence", "fcpa-uk-bribery"]
    },
    {
        id: "annual-leave",
        term: "Annual Leave Entitlement",
        question: "How much annual leave are employees entitled to in Turkey?",
        excerpt: "Turkish Labor Law mandates minimum 14 days annual leave for 1-5 years of service, increasing to 20 days for 5-15 years, and 26 days for 15+ years.",
        tags: ["employment"],
        relatedTerms: ["labor-law", "employment-contract", "severance-pay"]
    },
    // B
    {
        id: "branch-office",
        term: "Branch Office",
        question: "How can a foreign company establish a branch office in Turkey?",
        excerpt: "Foreign companies can establish branch offices in Turkey through Trade Registry registration. Branches are not separate legal entities but extensions of the parent company.",
        tags: ["company-law", "international-trade"],
        relatedTerms: ["liaison-office", "subsidiary", "company-formation"]
    },
    {
        id: "bill-of-lading",
        term: "Bill of Lading",
        question: "What is the legal significance of a bill of lading in Turkish trade?",
        excerpt: "A bill of lading serves as a receipt, contract of carriage, and document of title. Turkish Commercial Code recognizes it as a negotiable instrument.",
        tags: ["international-trade", "commercial-law"],
        relatedTerms: ["incoterms", "letter-of-credit", "customs-procedures"]
    },
    {
        id: "board-of-directors",
        term: "Board of Directors",
        question: "What are the duties and liabilities of board members in Turkey?",
        excerpt: "Board members of Turkish companies have fiduciary duties including loyalty and care. They may be personally liable for damages caused by negligent management.",
        tags: ["company-law"],
        relatedTerms: ["anonim-sirket", "corporate-governance", "shareholders-agreement"]
    },
    {
        id: "bilateral-investment-treaty",
        term: "Bilateral Investment Treaty (BIT)",
        question: "How do bilateral investment treaties protect foreign investors in Turkey?",
        excerpt: "Turkey has signed BITs with over 80 countries, providing protections like fair treatment, protection from expropriation, and access to international arbitration.",
        tags: ["international-trade", "dispute-resolution"],
        relatedTerms: ["foreign-investment", "arbitration-turkey", "expropriation"]
    },
    // C
    {
        id: "capital-increase",
        term: "Capital Increase",
        question: "How is a capital increase executed in a Turkish company?",
        excerpt: "Capital increases require shareholder approval and Trade Registry registration. Both cash and in-kind contributions are permitted under Turkish Commercial Code.",
        tags: ["company-law"],
        relatedTerms: ["anonim-sirket", "limited-sirket", "shareholders-agreement"]
    },
    {
        id: "commercial-lease",
        term: "Commercial Lease Agreement",
        question: "What are the key provisions of commercial leases under Turkish law?",
        excerpt: "Commercial leases are governed by Turkish Code of Obligations. Tenants have strong protections, and landlords must follow specific procedures for termination.",
        tags: ["real-estate", "contract-law"],
        relatedTerms: ["lease-termination", "rent-adjustment", "property-transfer"]
    },
    {
        id: "company-formation",
        term: "Company Formation",
        question: "What are the steps to establish a company in Turkey?",
        excerpt: "Company formation involves preparing articles of association, obtaining tax IDs, depositing capital, and registering with the Trade Registry. Process takes 3-5 business days.",
        tags: ["company-law"],
        relatedTerms: ["anonim-sirket", "limited-sirket", "branch-office"]
    },
    {
        id: "competition-law",
        term: "Competition Law",
        question: "What are the main competition law rules businesses must follow in Turkey?",
        excerpt: "Turkish Competition Law prohibits cartels, abuse of dominance, and requires merger notification. The Competition Authority has broad enforcement powers.",
        tags: ["commercial-law"],
        relatedTerms: ["merger-control", "antitrust", "market-dominance"]
    },
    {
        id: "compliance-program",
        term: "Compliance Program",
        question: "What should a corporate compliance program include in Turkey?",
        excerpt: "Effective compliance programs include written policies, training, reporting mechanisms, monitoring, and disciplinary procedures aligned with Turkish regulations.",
        tags: ["commercial-law", "data-protection"],
        relatedTerms: ["anti-corruption", "kvkk-compliance", "internal-audit"]
    },
    {
        id: "confidentiality-agreement",
        term: "Confidentiality Agreement (NDA)",
        question: "How are NDAs enforced under Turkish law?",
        excerpt: "Turkish law recognizes confidentiality agreements. Breaches can result in contractual penalties and tort liability for damages caused by disclosure.",
        tags: ["contract-law", "intellectual-property"],
        relatedTerms: ["trade-secrets", "non-compete", "employment-contract"]
    },
    {
        id: "corporate-governance",
        term: "Corporate Governance",
        question: "What corporate governance requirements apply to Turkish companies?",
        excerpt: "Corporate governance in Turkey is primarily shaped by the Turkish Commercial Code No. 6102, while publicly held companies are also subject to Capital Markets Board (CMB) corporate governance rules.",
        tags: ["company-law"],
        relatedTerms: ["board-of-directors", "shareholders-agreement", "anonim-sirket"]
    },
    {
        id: "customs-procedures",
        term: "Customs Procedures",
        question: "What are the main customs procedures for importing goods to Turkey?",
        excerpt: "Import procedures typically include an electronic customs declaration, tariff classification (HS/GTIP), customs valuation, origin determination, submission of supporting documents/permits, and payment of customs duties/VAT.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["customs-valuation", "tariff-classification", "free-trade-zones"]
    },
    {
        id: "customs-valuation",
        term: "Customs Valuation",
        question: "How is customs value determined for imported goods in Turkey?",
        excerpt: "In Turkey, customs valuation is governed primarily by Turkish Customs Law No. 4458 and secondary legislation, applying WTO customs valuation principles. The default method is transaction value.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["customs-procedures", "transfer-pricing", "tariff-classification"]
    },
    // D
    {
        id: "data-controller",
        term: "Data Controller",
        question: "What are the obligations of a data controller under KVKK?",
        excerpt: "Under KVKK, data controllers must fulfill information (privacy notice) duties, take appropriate security measures, respond to data subject requests, and handle breach notifications. VERBIS registration is conditional.",
        tags: ["data-protection"],
        relatedTerms: ["kvkk-compliance", "data-processor", "personal-data"]
    },
    {
        id: "data-processor",
        term: "Data Processor",
        question: "What is the difference between data controller and processor under Turkish law?",
        excerpt: "Under KVKK, data processors process personal data on the controller’s behalf and instructions. They must implement appropriate technical and organisational security measures.",
        tags: ["data-protection"],
        relatedTerms: ["data-controller", "kvkk-compliance", "data-processing-agreement"]
    },
    {
        id: "debt-collection",
        term: "Debt Collection",
        question: "How does debt collection work in Turkey?",
        excerpt: "Debt collection in Turkey can be pursued amicably or through enforcement offices (icra dairesi). 'Enforcement without judgment' is a streamlined method for monetary debts.",
        tags: ["commercial-law", "dispute-resolution"],
        relatedTerms: ["litigation-turkey", "enforcement-foreign-judgments", "commercial-lease"]
    },
    {
        id: "data-processing-agreement",
        term: "Data Processing Agreement",
        question: "When is a data processing agreement required under KVKK?",
        excerpt: "A written data processing agreement (or clauses) allocating responsibilities and security measures is best practice under KVKK when engaging a processor, even if no single mandatory form exists.",
        tags: ["data-protection", "contract-law"],
        relatedTerms: ["data-controller", "data-processor", "kvkk-compliance"]
    },
    {
        id: "distribution-agreement",
        term: "Distribution Agreement",
        question: "What should be included in a distribution agreement for Turkey?",
        excerpt: "Distribution agreements typically address territory, exclusivity, ordering and supply terms, recommended resale prices, IP/brand use, termination, and competition law compliance.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["agency-agreement", "franchise-agreement", "exclusive-dealing"]
    },
    {
        id: "due-diligence",
        term: "Due Diligence",
        question: "What does legal due diligence involve in Turkish M&A transactions?",
        excerpt: "Due diligence covers corporate documents, contracts, litigation, employment, IP, real estate, environmental, and regulatory compliance matters.",
        tags: ["company-law", "commercial-law"],
        relatedTerms: ["mergers-acquisitions", "share-purchase", "asset-purchase"]
    },
    {
        id: "dispute-resolution-clause",
        term: "Dispute Resolution Clause",
        question: "How should dispute resolution clauses be drafted for Turkish contracts?",
        excerpt: "Effective dispute resolution clauses clearly choose court jurisdiction or arbitration (e.g., ISTAC), governing law, seat of arbitration, language, and number of arbitrators.",
        tags: ["dispute-resolution", "contract-law"],
        relatedTerms: ["arbitration-turkey", "litigation-turkey", "mediation"]
    },
    // E
    {
        id: "employment-contract",
        term: "Employment Contract",
        question: "What are the mandatory provisions of employment contracts in Turkey?",
        excerpt: "Turkish employment contracts must include job description, salary, working hours, and trial period. Written form is required for definite-term contracts.",
        tags: ["employment"],
        relatedTerms: ["labor-law", "severance-pay", "termination-employment"]
    },
    {
        id: "enforcement-foreign-judgments",
        term: "Enforcement of Foreign Judgments",
        question: "How can foreign court judgments be enforced in Turkey?",
        excerpt: "Foreign judgments require recognition and enforcement proceedings in Turkish courts. Reciprocity and public policy compliance are key requirements.",
        tags: ["dispute-resolution", "international-trade"],
        relatedTerms: ["arbitration-turkey", "litigation-turkey", "new-york-convention"]
    },
    {
        id: "environmental-compliance",
        term: "Environmental Compliance",
        question: "What environmental regulations must businesses comply with in Turkey?",
        excerpt: "Turkish Environmental Law requires environmental impact assessments, waste management, and emission permits. Non-compliance can result in significant fines.",
        tags: ["commercial-law"],
        relatedTerms: ["compliance-program", "due-diligence", "permits-licenses"]
    },
    {
        id: "exclusive-dealing",
        term: "Exclusive Dealing",
        question: "Are exclusive dealing arrangements legal under Turkish competition law?",
        excerpt: "Exclusive dealing is permitted if market share is below thresholds. Block exemption regulations provide safe harbors for vertical agreements meeting specific criteria.",
        tags: ["commercial-law", "contract-law"],
        relatedTerms: ["competition-law", "distribution-agreement", "vertical-agreements"]
    },
    {
        id: "expropriation",
        term: "Expropriation",
        question: "What protections exist against expropriation for foreign investors in Turkey?",
        excerpt: "Turkish Constitution prohibits expropriation without fair compensation. BITs provide additional protections including access to international arbitration.",
        tags: ["real-estate", "international-trade"],
        relatedTerms: ["bilateral-investment-treaty", "foreign-investment", "property-rights"]
    },
    // F
    {
        id: "force-majeure",
        term: "Force Majeure",
        question: "How is force majeure defined and applied in Turkish contracts?",
        excerpt: "Force majeure excuses performance when unforeseeable events beyond control prevent fulfillment. Parties should define specific events in contracts.",
        tags: ["contract-law"],
        relatedTerms: ["impossibility-performance", "hardship-clause", "contract-termination"]
    },
    {
        id: "foreign-investment",
        term: "Foreign Direct Investment",
        question: "What incentives are available for foreign investors in Turkey?",
        excerpt: "Turkey offers tax exemptions, customs duty relief, land allocation, and employment incentives in organized industrial zones and priority development regions.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["investment-incentives", "free-trade-zones", "bilateral-investment-treaty"]
    },
    {
        id: "franchise-agreement",
        term: "Franchise Agreement",
        question: "What are the key legal considerations for franchising in Turkey?",
        excerpt: "Franchise agreements should address IP licensing, quality standards, territory, fees, training, and termination. No specific franchise law exists in Turkey.",
        tags: ["contract-law", "intellectual-property"],
        relatedTerms: ["distribution-agreement", "trademark-registration", "licensing-agreement"]
    },
    {
        id: "free-trade-zones",
        term: "Free Trade Zones",
        question: "What advantages do Turkish Free Trade Zones offer to businesses?",
        excerpt: "Free Trade Zones offer customs duty exemption, VAT exemption on sales to Turkey, income tax exemption for manufacturing, and simplified procedures.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["customs-procedures", "foreign-investment", "investment-incentives"]
    },
    // G
    {
        id: "general-assembly",
        term: "General Assembly",
        question: "What decisions require general assembly approval in Turkish companies?",
        excerpt: "General assembly approves financial statements, dividends, board elections, capital changes, mergers, and amendments to articles of association.",
        tags: ["company-law"],
        relatedTerms: ["anonim-sirket", "shareholders-agreement", "voting-rights"]
    },
    {
        id: "gdpr-kvkk-comparison",
        term: "GDPR vs KVKK",
        question: "What are the main differences between GDPR and Turkish KVKK?",
        excerpt: "While KVKK is modeled on GDPR, differences include consent requirements, cross-border transfer rules, and data subject rights. KVKK has specific Turkish requirements.",
        tags: ["data-protection", "international-trade"],
        relatedTerms: ["kvkk-compliance", "data-controller", "cross-border-data-transfer"]
    },
    {
        id: "guarantee-agreement",
        term: "Guarantee Agreement",
        question: "What types of guarantees are recognized under Turkish law?",
        excerpt: "Turkish law recognizes personal guarantees, bank guarantees, and corporate guarantees. Spousal consent may be required for personal guarantees.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["surety", "letter-of-credit", "security-interests"]
    },
    // H
    {
        id: "hardship-clause",
        term: "Hardship Clause",
        question: "How do hardship clauses work in Turkish commercial contracts?",
        excerpt: "Hardship clauses allow renegotiation when circumstances change significantly. Turkish Code of Obligations recognizes adaptation of contracts due to changed circumstances.",
        tags: ["contract-law"],
        relatedTerms: ["force-majeure", "contract-adaptation", "impossibility-performance"]
    },
    {
        id: "holding-company",
        term: "Holding Company",
        question: "What are the benefits of establishing a holding company in Turkey?",
        excerpt: "Turkish holding companies can benefit from participation exemption on dividends and capital gains from subsidiary shares, providing tax-efficient group structures.",
        tags: ["company-law", "tax-law"],
        relatedTerms: ["corporate-restructuring", "group-taxation", "subsidiary"]
    },
    // I
    {
        id: "incoterms",
        term: "Incoterms",
        question: "How are Incoterms applied in Turkish international trade contracts?",
        excerpt: "Incoterms define seller and buyer responsibilities for delivery, risk transfer, and costs. Turkish traders commonly use CIF, FOB, and EXW terms.",
        tags: ["international-trade", "contract-law"],
        relatedTerms: ["bill-of-lading", "letter-of-credit", "customs-procedures"]
    },
    {
        id: "intellectual-property-rights",
        term: "Intellectual Property Rights",
        question: "How are intellectual property rights protected in Turkey?",
        excerpt: "Turkey's IP Law No. 6769 provides comprehensive protection for trademarks, patents, designs, and geographical indications aligned with EU standards.",
        tags: ["intellectual-property"],
        relatedTerms: ["trademark-registration", "patent-protection", "copyright"]
    },
    {
        id: "investment-incentives",
        term: "Investment Incentives",
        question: "What investment incentive programs are available in Turkey?",
        excerpt: "Turkey offers general, regional, priority, and strategic investment incentives including tax reductions, customs exemptions, and employer insurance support.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["foreign-investment", "free-trade-zones", "technology-development-zones"]
    },
    // J
    {
        id: "joint-venture",
        term: "Joint Venture",
        question: "What are the legal structures for joint ventures in Turkey?",
        excerpt: "Joint ventures can be structured as contractual arrangements or incorporated entities. Key considerations include governance, profit sharing, and exit mechanisms.",
        tags: ["company-law", "contract-law"],
        relatedTerms: ["shareholders-agreement", "partnership", "company-formation"]
    },
    // K
    {
        id: "kvkk-compliance",
        term: "KVKK Compliance",
        question: "What are the key compliance requirements under Turkish data protection law (KVKK)?",
        excerpt: "KVKK requires data controller registration, lawful processing basis, data subject notification, security measures, and compliance with cross-border transfer rules.",
        tags: ["data-protection"],
        relatedTerms: ["data-controller", "personal-data", "gdpr-kvkk-comparison"]
    },
    // L
    {
        id: "labor-law",
        term: "Turkish Labor Law",
        question: "What are the main employment protections under Turkish Labor Law?",
        excerpt: "Labor Law No. 4857 covers working hours (45/week max), minimum wage, leave entitlements, workplace safety, and protection against unfair dismissal.",
        tags: ["employment"],
        relatedTerms: ["employment-contract", "severance-pay", "termination-employment"]
    },
    {
        id: "letter-of-credit",
        term: "Letter of Credit",
        question: "How do letters of credit work in Turkish international trade?",
        excerpt: "Letters of credit provide payment security in international trade. Turkish banks issue and handle LCs under UCP 600 rules, ensuring payment upon document compliance.",
        tags: ["international-trade", "commercial-law"],
        relatedTerms: ["bill-of-lading", "trade-finance", "bank-guarantee"]
    },
    {
        id: "liaison-office",
        term: "Liaison Office",
        question: "What activities can a liaison office perform in Turkey?",
        excerpt: "Liaison offices can conduct market research, promote parent company, and establish business contacts but cannot engage in commercial activities or generate revenue.",
        tags: ["company-law", "international-trade"],
        relatedTerms: ["branch-office", "subsidiary", "company-formation"]
    },
    {
        id: "licensing-agreement",
        term: "Licensing Agreement",
        question: "What should be included in an IP licensing agreement for Turkey?",
        excerpt: "Licensing agreements should cover scope of rights, territory, exclusivity, royalties, quality control, sublicensing, and registration requirements for effectiveness.",
        tags: ["intellectual-property", "contract-law"],
        relatedTerms: ["trademark-registration", "patent-protection", "franchise-agreement"]
    },
    {
        id: "limited-sirket",
        term: "Limited Şirket (Ltd. Şti.)",
        question: "What are the characteristics of a Limited Şirket in Turkey?",
        excerpt: "A Limited Şirket is the most common structure for SMEs. It requires minimum 50,000 TL capital, 1-50 shareholders, and offers limited liability protection.",
        tags: ["company-law"],
        relatedTerms: ["anonim-sirket", "company-formation", "shareholders-agreement"]
    },
    {
        id: "litigation-turkey",
        term: "Litigation in Turkey",
        question: "How does the commercial litigation process work in Turkey?",
        excerpt: "Commercial disputes are heard in Commercial Courts. The process includes petition, answer, preliminary hearing, evidence, and judgment phases. Appeals go to Regional Courts (İstinaf) and subsequently to the Court of Cassation (Yargıtay).",
        tags: ["dispute-resolution"],
        relatedTerms: ["arbitration-turkey", "mediation", "enforcement-foreign-judgments"]
    },
    // M
    {
        id: "mediation",
        term: "Mediation",
        question: "When is mediation mandatory in Turkish commercial disputes?",
        excerpt: "Mandatory mediation applies to commercial, consumer, and employment disputes before filing lawsuit. Parties must attempt mediation or face case dismissal.",
        tags: ["dispute-resolution"],
        relatedTerms: ["arbitration-turkey", "litigation-turkey", "dispute-resolution-clause"]
    },
    {
        id: "merger-control",
        term: "Merger Control",
        question: "When is merger notification required to Turkish Competition Authority?",
        excerpt: "Notification is required when combined Turkish turnover exceeds 750 million TL or one party's turnover exceeds 250 million TL with other party exceeding 30 million TL.",
        tags: ["commercial-law", "company-law"],
        relatedTerms: ["competition-law", "mergers-acquisitions", "antitrust"]
    },
    {
        id: "mergers-acquisitions",
        term: "Mergers and Acquisitions",
        question: "What is the legal framework for M&A transactions in Turkey?",
        excerpt: "M&A transactions are governed by Turkish Commercial Code. Share deals and asset deals have different tax implications and require specific due diligence.",
        tags: ["company-law", "commercial-law"],
        relatedTerms: ["due-diligence", "share-purchase", "merger-control"]
    },
    {
        id: "minimum-wage",
        term: "Minimum Wage",
        question: "How is minimum wage determined in Turkey?",
        excerpt: "Minimum wage is set at least annually by the Minimum Wage Determination Commission. Employers must pay at least minimum wage plus applicable social security contributions.",
        tags: ["employment"],
        relatedTerms: ["labor-law", "employment-contract", "social-security"]
    },
    // N
    {
        id: "new-york-convention",
        term: "New York Convention",
        question: "How does Turkey implement the New York Convention?",
        excerpt: "Turkey ratified the New York Convention, enabling enforcement of foreign arbitral awards. Courts may refuse enforcement only on limited grounds like public policy.",
        tags: ["dispute-resolution", "international-trade"],
        relatedTerms: ["arbitration-turkey", "enforcement-foreign-judgments", "istac"]
    },
    {
        id: "non-compete",
        term: "Non-Compete Agreement",
        question: "Are non-compete clauses enforceable in Turkish employment contracts?",
        excerpt: "Non-compete clauses are enforceable if limited to 2 years, specific geographic area, and particular activities. Employer may need to provide compensation.",
        tags: ["employment", "contract-law"],
        relatedTerms: ["employment-contract", "confidentiality-agreement", "trade-secrets"]
    },
    {
        id: "notarization",
        term: "Notarization Requirements",
        question: "When is notarization required for legal documents in Turkey?",
        excerpt: "Notarization is required for powers of attorney, real estate transactions, corporate resolutions, and certain contracts. Foreign documents need apostille or legalization.",
        tags: ["contract-law", "company-law"],
        relatedTerms: ["apostille", "power-of-attorney", "document-legalization"]
    },
    // O
    {
        id: "overtime-pay",
        term: "Overtime Pay",
        question: "How is overtime compensation calculated in Turkey?",
        excerpt: "Overtime exceeding 45 hours weekly is compensated at 1.5x normal rate. Maximum overtime is 270 hours annually. Employees can opt for time off instead.",
        tags: ["employment"],
        relatedTerms: ["labor-law", "working-hours", "employment-contract"]
    },
    // P
    {
        id: "patent-protection",
        term: "Patent Protection",
        question: "How are patents protected and registered in Turkey?",
        excerpt: "Patents are registered with Turkish Patent and Trademark Office. Protection lasts 20 years from filing. Turkey is party to PCT and European Patent Convention.",
        tags: ["intellectual-property"],
        relatedTerms: ["intellectual-property-rights", "trademark-registration", "utility-models"]
    },
    {
        id: "personal-data",
        term: "Personal Data",
        question: "What qualifies as personal data under Turkish KVKK?",
        excerpt: "Personal data includes any information relating to identified or identifiable natural person. Sensitive data categories have stricter processing requirements.",
        tags: ["data-protection"],
        relatedTerms: ["kvkk-compliance", "data-controller", "sensitive-personal-data"]
    },
    {
        id: "power-of-attorney",
        term: "Power of Attorney",
        question: "What are the requirements for a valid power of attorney in Turkey?",
        excerpt: "Powers of attorney must be notarized. Foreign POAs require apostille or legalization and certified Turkish translation. Scope must be clearly defined.",
        tags: ["contract-law", "company-law"],
        relatedTerms: ["notarization", "apostille", "legal-representation"]
    },
    {
        id: "product-liability",
        term: "Product Liability",
        question: "What is the product liability framework in Turkey?",
        excerpt: "Manufacturers, importers, and suppliers are liable for defective products. Liability is strict for manufacturers. Consumer protection law provides additional remedies.",
        tags: ["commercial-law", "contract-law"],
        relatedTerms: ["consumer-protection", "warranty", "product-recall"]
    },
    {
        id: "property-transfer",
        term: "Property Transfer",
        question: "What is the process for transferring real estate in Turkey?",
        excerpt: "Property transfers require title deed registration at Land Registry. Foreign ownership is permitted with some restrictions. Transfer tax is 4% split between parties.",
        tags: ["real-estate", "tax-law"],
        relatedTerms: ["commercial-lease", "expropriation", "property-rights"]
    },
    // R
    {
        id: "repatriation-profits",
        term: "Repatriation of Profits",
        question: "Can foreign companies freely repatriate profits from Turkey?",
        excerpt: "Turkey allows free transfer of profits, dividends, royalties, and capital. Withholding taxes may apply. No exchange controls restrict fund transfers.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["foreign-investment", "dividend-distribution", "withholding-tax"]
    },
    {
        id: "residency-permit",
        term: "Residency Permit",
        question: "What residency options are available for foreign business persons in Turkey?",
        excerpt: "Work permits automatically include residency. Short-term permits are available for business visitors. Investment-based residency has specific thresholds.",
        tags: ["employment", "international-trade"],
        relatedTerms: ["work-permit", "foreign-investment", "turquoise-card"]
    },
    // S
    {
        id: "severance-pay",
        term: "Severance Pay",
        question: "When are employees entitled to severance pay in Turkey?",
        excerpt: "Employees with 1+ year tenure receive 30 days gross salary per year upon qualifying termination. Cap is set semiannually (Jan/July). Resignation generally disqualifies entitlement.",
        tags: ["employment"],
        relatedTerms: ["termination-employment", "labor-law", "employment-contract"]
    },
    {
        id: "share-purchase",
        term: "Share Purchase Agreement",
        question: "What key terms should a share purchase agreement include for Turkey?",
        excerpt: "SPAs should cover purchase price, warranties, indemnities, conditions precedent, non-compete, and post-closing obligations specific to Turkish law requirements.",
        tags: ["company-law", "contract-law"],
        relatedTerms: ["mergers-acquisitions", "due-diligence", "asset-purchase"]
    },
    {
        id: "shareholders-agreement",
        term: "Shareholders Agreement",
        question: "Why is a shareholders agreement important for Turkish companies?",
        excerpt: "Shareholders agreements govern voting, transfers, board composition, dividends, and exit rights. They supplement articles of association with enforceable commitments.",
        tags: ["company-law", "contract-law"],
        relatedTerms: ["anonim-sirket", "limited-sirket", "voting-rights"]
    },
    {
        id: "social-security",
        term: "Social Security",
        question: "What are employer social security obligations in Turkey?",
        excerpt: "Employers contribute approximately 20.5% of gross salary to social security (SGK). Employees contribute approximately 14%. Totalization agreements may reduce double coverage.",
        tags: ["employment", "tax-law"],
        relatedTerms: ["labor-law", "employment-contract", "minimum-wage"]
    },
    {
        id: "subsidiary",
        term: "Subsidiary Company",
        question: "What are the advantages of forming a subsidiary in Turkey?",
        excerpt: "Subsidiaries are separate legal entities offering liability protection. They can access local financing, participate in tenders, and build local market presence.",
        tags: ["company-law", "international-trade"],
        relatedTerms: ["branch-office", "company-formation", "limited-sirket"]
    },
    {
        id: "supply-agreement",
        term: "Supply Agreement",
        question: "What should be included in supply agreements under Turkish law?",
        excerpt: "Supply agreements should cover specifications, pricing mechanisms, delivery terms, warranties, liability limits, termination rights, and dispute resolution.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["distribution-agreement", "incoterms", "quality-standards"]
    },
    // T
    {
        id: "tariff-classification",
        term: "Tariff Classification",
        question: "How are goods classified for customs purposes in Turkey?",
        excerpt: "Turkey uses the Harmonized System (HS) for classification. Correct classification determines duty rates, trade policy measures, and required documentation.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["customs-procedures", "customs-valuation", "origin-rules"]
    },
    {
        id: "tax-residency",
        term: "Tax Residency",
        question: "How is corporate tax residency determined in Turkey?",
        excerpt: "Companies with registered office or place of effective management in Turkey are tax resident. Residents are taxed on worldwide income; non-residents on Turkish-source income.",
        tags: ["tax-law"],
        relatedTerms: ["corporate-tax", "withholding-tax", "transfer-pricing"]
    },
    {
        id: "technology-development-zones",
        term: "Technology Development Zones",
        question: "What benefits do Technology Development Zones (Technoparks) offer?",
        excerpt: "Technoparks provide income tax exemption until 2028 for R&D activities, VAT exemption on sales, and income tax exemption for researchers on salaries.",
        tags: ["tax-law", "intellectual-property"],
        relatedTerms: ["investment-incentives", "rd-incentives", "free-trade-zones"]
    },
    {
        id: "termination-employment",
        term: "Employment Termination",
        question: "What are the rules for terminating employment in Turkey?",
        excerpt: "Termination requires valid reason for companies with 30+ employees. Notice periods range from 2-8 weeks. Wrongful termination results in reinstatement or compensation.",
        tags: ["employment"],
        relatedTerms: ["severance-pay", "labor-law", "employment-contract"]
    },
    {
        id: "trade-secrets",
        term: "Trade Secrets",
        question: "How are trade secrets protected under Turkish law?",
        excerpt: "Trade secrets are protected under Turkish Commercial Code and unfair competition provisions. Misappropriation can result in civil damages and criminal penalties.",
        tags: ["intellectual-property", "commercial-law"],
        relatedTerms: ["confidentiality-agreement", "non-compete", "unfair-competition"]
    },
    {
        id: "trademark-registration",
        term: "Trademark Registration",
        question: "How do you register a trademark in Turkey?",
        excerpt: "Trademarks are registered through the Turkish Patent and Trademark Office. Registration provides 10-year protection, renewable indefinitely. Priority from Paris Convention applies.",
        tags: ["intellectual-property"],
        relatedTerms: ["intellectual-property-rights", "patent-protection", "brand-protection"]
    },
    {
        id: "transfer-pricing",
        term: "Transfer Pricing",
        question: "What are Turkey's transfer pricing rules for related party transactions?",
        excerpt: "Turkish transfer pricing follows OECD guidelines. Documentation is mandatory for certain thresholds. Arm's length principle applies to related party transactions.",
        tags: ["tax-law", "international-trade"],
        relatedTerms: ["corporate-tax", "related-party", "customs-valuation"]
    },
    {
        id: "turquoise-card",
        term: "Turquoise Card",
        question: "What is the Turquoise Card and who is eligible?",
        excerpt: "Turquoise Card provides indefinite residence and work rights for qualified foreigners including investors, scientists, and strategic employees. It's Turkey's equivalent of a green card.",
        tags: ["employment", "international-trade"],
        relatedTerms: ["work-permit", "residency-permit", "foreign-investment"]
    },
    // U
    {
        id: "unfair-competition",
        term: "Unfair Competition",
        question: "What constitutes unfair competition under Turkish law?",
        excerpt: "Turkish Commercial Code prohibits misleading practices, disparagement, exploitation of reputation, and trade secret misappropriation. Competitors and consumers can seek remedies.",
        tags: ["commercial-law", "intellectual-property"],
        relatedTerms: ["competition-law", "trade-secrets", "trademark-infringement"]
    },
    // V
    {
        id: "vat-turkey",
        term: "VAT in Turkey",
        question: "How does VAT work for B2B transactions in Turkey?",
        excerpt: "Standard VAT rate is 20% with reduced rates of 10% and 1% for specific goods. VAT on business purchases is generally deductible. Export sales are zero-rated.",
        tags: ["tax-law"],
        relatedTerms: ["customs-procedures", "corporate-tax", "withholding-tax"]
    },
    {
        id: "vertical-agreements",
        term: "Vertical Agreements",
        question: "What is the block exemption for vertical agreements in Turkey?",
        excerpt: "Vertical agreements are exempt from competition law prohibition if supplier's market share is below 40%. Certain hardcore restrictions like resale price maintenance are prohibited.",
        tags: ["commercial-law", "contract-law"],
        relatedTerms: ["competition-law", "distribution-agreement", "exclusive-dealing"]
    },
    {
        id: "voting-rights",
        term: "Shareholder Voting Rights",
        question: "How do shareholder voting rights work in Turkish companies?",
        excerpt: "Each share typically carries one vote. Articles can create preferential voting shares. Qualified majorities are required for significant decisions.",
        tags: ["company-law"],
        relatedTerms: ["shareholders-agreement", "general-assembly", "minority-rights"]
    },
    // W
    {
        id: "warranty",
        term: "Warranty Obligations",
        question: "What warranty obligations apply to B2B sales in Turkey?",
        excerpt: "Sellers warrant goods are free from defects. B2B buyers must inspect promptly and notify defects. Contractual warranty modifications are generally permitted.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["product-liability", "sales-contract", "quality-standards"]
    },
    {
        id: "withholding-tax",
        term: "Withholding Tax",
        question: "What withholding taxes apply to payments made from Turkey?",
        excerpt: "Withholding applies to dividends (10%), royalties (20%), interest (0-10%), and service fees (15-20%). Double tax treaties may reduce rates.",
        tags: ["tax-law", "international-trade"],
        relatedTerms: ["corporate-tax", "repatriation-profits", "double-tax-treaty"]
    },
    {
        id: "work-permit",
        term: "Work Permit",
        question: "How do foreign nationals obtain work permits in Turkey?",
        excerpt: "Work permits are obtained through the Ministry of Labor. Applications can be made before entry or within Turkey. Permit categories include definite, indefinite, and independent.",
        tags: ["employment", "international-trade"],
        relatedTerms: ["residency-permit", "turquoise-card", "foreign-workers"]
    },
    {
        id: "working-hours",
        term: "Working Hours",
        question: "What are the legal working hour limits in Turkey?",
        excerpt: "Maximum working week is 45 hours, typically spread over 6 days. Daily limit is 11 hours. Flexible arrangements like compressed weeks are permitted.",
        tags: ["employment"],
        relatedTerms: ["labor-law", "overtime-pay", "employment-contract"]
    },
    // Additional entries to reach 100
    {
        id: "apostille",
        term: "Apostille",
        question: "When is apostille required for documents used in Turkey?",
        excerpt: "Documents from Hague Convention countries require apostille for use in Turkey. Non-Hague country documents need consular legalization.",
        tags: ["contract-law", "international-trade"],
        relatedTerms: ["notarization", "document-legalization", "power-of-attorney"]
    },
    {
        id: "asset-purchase",
        term: "Asset Purchase Agreement",
        question: "What are the advantages of asset purchases vs share purchases in Turkey?",
        excerpt: "Asset purchases allow selective acquisition and may avoid hidden liabilities. However, they may trigger VAT and require individual contract assignments.",
        tags: ["company-law", "contract-law"],
        relatedTerms: ["share-purchase", "mergers-acquisitions", "due-diligence"]
    },
    {
        id: "bank-guarantee",
        term: "Bank Guarantee",
        question: "How do bank guarantees work in Turkish commercial transactions?",
        excerpt: "Bank guarantees provide payment security. Turkish banks issue demand guarantees and conditional guarantees. ICC Uniform Rules may apply if referenced.",
        tags: ["commercial-law", "contract-law"],
        relatedTerms: ["letter-of-credit", "guarantee-agreement", "performance-bond"]
    },
    {
        id: "commercial-representative",
        term: "Commercial Representative",
        question: "What are the legal implications of appointing a commercial representative in Turkey?",
        excerpt: "Commercial representatives act in the name of businesses. Turkish Commercial Code defines their authority and liability. Written authorization is recommended.",
        tags: ["commercial-law", "contract-law"],
        relatedTerms: ["agency-agreement", "power-of-attorney", "distribution-agreement"]
    },
    {
        id: "consumer-protection",
        term: "Consumer Protection",
        question: "What consumer protection laws affect B2B businesses selling to consumers in Turkey?",
        excerpt: "Consumer Protection Law provides mandatory warranties, withdrawal rights for distance sales, and advertising restrictions. B2B resellers must comply.",
        tags: ["commercial-law", "contract-law"],
        relatedTerms: ["product-liability", "warranty", "e-commerce"]
    },
    {
        id: "contract-termination",
        term: "Contract Termination",
        question: "What are the grounds for contract termination under Turkish law?",
        excerpt: "Contracts may be terminated for breach, impossibility, mutual agreement, or as per termination clauses. Notice requirements and consequences vary by contract type.",
        tags: ["contract-law"],
        relatedTerms: ["force-majeure", "breach-of-contract", "damages"]
    },
    {
        id: "copyright",
        term: "Copyright Protection",
        question: "How is copyright protected in Turkey?",
        excerpt: "Copyright arises automatically upon creation. Registration is not required but provides evidence. Protection lasts author's lifetime plus 70 years.",
        tags: ["intellectual-property"],
        relatedTerms: ["intellectual-property-rights", "licensing-agreement", "software-licensing"]
    },
    {
        id: "corporate-tax",
        term: "Corporate Tax",
        question: "What is the corporate tax rate in Turkey?",
        excerpt: "As of 2025, the standard corporate income tax rate is 25%. Certain sectors (e.g., banks and some financial institutions) may be taxed at 30%, and sector/incentive-based exemptions may apply.",
        tags: ["tax-law"],
        relatedTerms: ["tax-residency", "transfer-pricing", "withholding-tax"]
    },
    {
        id: "cross-border-data-transfer",
        term: "Cross-Border Data Transfer",
        question: "What rules govern cross-border personal data transfers from Turkey?",
        excerpt: "March 2024 amendments to KVKK introduced a tiered system: transfers based on Adequacy Decision, Appropriate Safeguards (including Standard Contracts), or occasional exceptional circumstances.",
        tags: ["data-protection", "international-trade"],
        relatedTerms: ["kvkk-compliance", "data-controller", "gdpr-kvkk-comparison"]
    },
    {
        id: "dividend-distribution",
        term: "Dividend Distribution",
        question: "What are the rules for distributing dividends in Turkey?",
        excerpt: "Dividends can only be distributed from net profits after legal reserves. General assembly decides distribution. Withholding tax applies to payments.",
        tags: ["company-law", "tax-law"],
        relatedTerms: ["general-assembly", "repatriation-profits", "withholding-tax"]
    },
    {
        id: "double-tax-treaty",
        term: "Double Tax Treaty",
        question: "How do Turkey's double tax treaties benefit foreign investors?",
        excerpt: "Turkey has DTTs with 80+ countries providing reduced withholding rates, elimination of double taxation, and tax credits for foreign-source income.",
        tags: ["tax-law", "international-trade"],
        relatedTerms: ["withholding-tax", "foreign-investment", "tax-residency"]
    },
    {
        id: "e-commerce",
        term: "E-Commerce Regulations",
        question: "What regulations apply to e-commerce businesses in Turkey?",
        excerpt: "E-Commerce Law requires registration, information disclosure, and secure payment systems. Distance sales have consumer withdrawal rights.",
        tags: ["commercial-law", "data-protection"],
        relatedTerms: ["consumer-protection", "kvkk-compliance", "electronic-signature"]
    },
    {
        id: "electronic-signature",
        term: "Electronic Signature",
        question: "Are electronic signatures legally valid in Turkey?",
        excerpt: "Turkish Electronic Signature Law recognizes secure electronic signatures as equivalent to handwritten signatures. Qualified certificates provide highest legal certainty.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["e-commerce", "notarization", "digital-contracts"]
    },
    {
        id: "foreign-workers",
        term: "Employment of Foreign Workers",
        question: "What are the rules for employing foreign workers in Turkey?",
        excerpt: "Employers must obtain work permits demonstrating no suitable Turkish candidates exist. Quotas may apply. Foreign worker costs may be higher due to permit fees.",
        tags: ["employment", "international-trade"],
        relatedTerms: ["work-permit", "residency-permit", "labor-law"]
    },
    {
        id: "internal-audit",
        term: "Internal Audit Requirements",
        question: "What internal audit requirements apply to Turkish companies?",
        excerpt: "Public companies and regulated entities require internal audit functions. Recent amendments expanded the scope of independent audit requirements for non-public companies based on turnover thresholds.",
        tags: ["company-law", "commercial-law"],
        relatedTerms: ["corporate-governance", "compliance-program", "board-of-directors"]
    },
    {
        id: "istac",
        term: "Istanbul Arbitration Centre (ISTAC)",
        question: "What is ISTAC and how does it handle disputes?",
        excerpt: "ISTAC is Turkey's leading arbitration institution providing administered arbitration services. Its rules offer efficient, modern procedures for commercial disputes.",
        tags: ["dispute-resolution"],
        relatedTerms: ["arbitration-turkey", "dispute-resolution-clause", "new-york-convention"]
    },
    {
        id: "lease-termination",
        term: "Commercial Lease Termination",
        question: "How can a commercial lease be terminated in Turkey?",
        excerpt: "Landlords can terminate for specific grounds like non-payment or personal use. Proper notice is required. Courts may grant tenants extended periods to vacate.",
        tags: ["real-estate", "contract-law"],
        relatedTerms: ["commercial-lease", "rent-adjustment", "eviction"]
    },
    {
        id: "legal-representation",
        term: "Legal Representation in Court",
        question: "Is legal representation mandatory in Turkish courts?",
        excerpt: "Attorney representation is mandatory before Regional Courts of Appeal and Court of Cassation. Lower courts allow self-representation but counsel is advisable.",
        tags: ["dispute-resolution"],
        relatedTerms: ["litigation-turkey", "power-of-attorney", "court-fees"]
    },
    {
        id: "minority-rights",
        term: "Minority Shareholder Rights",
        question: "What protections exist for minority shareholders in Turkey?",
        excerpt: "Minority shareholders (10% for A.Ş., 10% for Ltd.) can request audits, call general meetings, and challenge resolutions. Courts can dissolve companies for oppression.",
        tags: ["company-law"],
        relatedTerms: ["shareholders-agreement", "voting-rights", "general-assembly"]
    },
    {
        id: "origin-rules",
        term: "Rules of Origin",
        question: "How do rules of origin affect customs duties in Turkey?",
        excerpt: "Preferential origin under FTAs reduces or eliminates duties. Origin is determined by substantial transformation. Certificate of origin documents preferential treatment.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["customs-procedures", "tariff-classification", "free-trade-agreements"]
    },
    {
        id: "penalties-clauses",
        term: "Penalty Clauses",
        question: "Are penalty clauses enforceable in Turkish contracts?",
        excerpt: "Penalty clauses are enforceable in Turkey. Courts can reduce excessive penalties. Penalties may be claimed without proving actual damage.",
        tags: ["contract-law"],
        relatedTerms: ["damages", "contract-termination", "breach-of-contract"]
    },
    {
        id: "permits-licenses",
        term: "Business Permits and Licenses",
        question: "What permits and licenses are required to operate a business in Turkey?",
        excerpt: "Requirements vary by sector. Common permits include trade registry, activity license, environmental permits, and sector-specific authorizations.",
        tags: ["commercial-law", "company-law"],
        relatedTerms: ["company-formation", "environmental-compliance", "regulated-industries"]
    },
    {
        id: "property-rights",
        term: "Property Rights for Foreigners",
        question: "Can foreigners own property in Turkey?",
        excerpt: "Most foreigners can own property subject to reciprocity and area restrictions. Military zones and rural land may have limitations. Legal entity ownership is possible.",
        tags: ["real-estate", "international-trade"],
        relatedTerms: ["property-transfer", "expropriation", "foreign-investment"]
    },
    {
        id: "rd-incentives",
        term: "R&D Incentives",
        question: "What incentives are available for R&D activities in Turkey?",
        excerpt: "R&D Law provides tax deductions, wage tax exemptions, and social security support for qualified R&D centers with minimum 15 researchers.",
        tags: ["tax-law", "intellectual-property"],
        relatedTerms: ["technology-development-zones", "investment-incentives", "patent-protection"]
    },
    {
        id: "related-party",
        term: "Related Party Transactions",
        question: "What disclosure requirements apply to related party transactions in Turkey?",
        excerpt: "Listed companies must disclose related party transactions. Transfer pricing rules require arm's length terms. Board approval may be required.",
        tags: ["company-law", "tax-law"],
        relatedTerms: ["transfer-pricing", "corporate-governance", "board-of-directors"]
    },
    {
        id: "rent-adjustment",
        term: "Rent Adjustment",
        question: "How is commercial rent adjusted in Turkey?",
        excerpt: "Rent adjustments follow contractual terms, capped by the Consumer Price Index (CPI/TÜFE) 12-month average. Courts can determine fair rent after five years of tenancy.",
        tags: ["real-estate", "contract-law"],
        relatedTerms: ["commercial-lease", "lease-termination", "inflation-indexation"]
    },
    {
        id: "sales-contract",
        term: "Sales Contract",
        question: "What are the essential elements of a sales contract under Turkish law?",
        excerpt: "Sales contracts require agreement on goods and price. Delivery terms, warranties, and risk transfer should be clearly defined. CISG may apply internationally.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["warranty", "supply-agreement", "incoterms"]
    },
    {
        id: "sensitive-personal-data",
        term: "Sensitive Personal Data",
        question: "What are sensitive personal data categories under KVKK?",
        excerpt: "Sensitive data includes race, ethnicity, political views, religion, health data, and biometric data. Processing requires explicit consent or legal basis.",
        tags: ["data-protection"],
        relatedTerms: ["personal-data", "kvkk-compliance", "data-controller"]
    },
    {
        id: "service-agreement",
        term: "Service Agreement",
        question: "What should a B2B service agreement include under Turkish law?",
        excerpt: "Service agreements should define scope, deliverables, fees, timelines, performance standards, liability limits, IP ownership, and termination provisions.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["supply-agreement", "confidentiality-agreement", "sla"]
    },
    {
        id: "trade-finance",
        term: "Trade Finance",
        question: "What trade finance options are available for Turkey transactions?",
        excerpt: "Options include letters of credit, documentary collections, bank guarantees, export credit insurance, and factoring through Turkish banks and Eximbank.",
        tags: ["international-trade", "commercial-law"],
        relatedTerms: ["letter-of-credit", "bank-guarantee", "export-financing"]
    },
    {
        id: "utility-models",
        term: "Utility Models",
        question: "What protection do utility models provide in Turkey?",
        excerpt: "Utility models protect inventions for 10 years with less stringent requirements than patents. Ideal for incremental innovations. Registration is faster.",
        tags: ["intellectual-property"],
        relatedTerms: ["patent-protection", "intellectual-property-rights", "trademark-registration"]
    }
];

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = glossaryData;
}

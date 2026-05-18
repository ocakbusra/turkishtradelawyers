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
        trTerm: "Türkiye'de Tahkim",
        question: "How does commercial arbitration work under Turkish law?",
        excerpt: "Turkey recognizes both domestic and international arbitration. The Turkish International Arbitration Law aligns with UNCITRAL Model Law for cross-border disputes.",
        tags: ["dispute-resolution", "international-trade"],
        relatedTerms: ["mediation", "litigation-turkey", "enforcement-foreign-judgments"]
    },
    {
        id: "agency-agreement",
        term: "Agency Agreement",
        trTerm: "Acentelik Sözleşmesi",
        question: "What are the legal requirements for agency agreements in Turkey?",
        excerpt: "Agency agreements in Turkey are governed by the Turkish Commercial Code. Agents may be entitled to portfolio compensation if specific statutory conditions are met.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["distribution-agreement", "commercial-representative", "franchise-agreement"]
    },
    {
        id: "anti-corruption",
        term: "Anti-Corruption Compliance",
        trTerm: "Yolsuzlukla Mücadele Uyumluluğu",
        question: "What anti-corruption laws apply to businesses in Turkey?",
        excerpt: "Turkey's anti-corruption framework includes Turkish Penal Code provisions and aligns with OECD Anti-Bribery Convention requirements for foreign businesses.",
        tags: ["commercial-law", "international-trade"],
        relatedTerms: ["compliance-program", "due-diligence", "fcpa-uk-bribery"]
    },
    {
        id: "annual-leave",
        term: "Annual Leave Entitlement",
        trTerm: "Yıllık İzin Hakkı",
        question: "How much annual leave are employees entitled to in Turkey?",
        excerpt: "Turkish Labor Law mandates minimum 14 days annual leave for 1-5 years of service, increasing to 20 days for 5-15 years, and 26 days for 15+ years.",
        tags: ["employment"],
        relatedTerms: ["labor-law", "employment-contract", "severance-pay"]
    },
    // B
    {
        id: "branch-office",
        term: "Branch Office",
        trTerm: "Şube",
        question: "How can a foreign company establish a branch office in Turkey?",
        excerpt: "Foreign companies can establish branch offices in Turkey through Trade Registry registration. Branches are not separate legal entities but extensions of the parent company.",
        tags: ["company-law", "international-trade"],
        relatedTerms: ["liaison-office", "subsidiary", "company-formation"]
    },
    {
        id: "bill-of-lading",
        term: "Bill of Lading",
        trTerm: "Konişmento",
        question: "What is the legal significance of a bill of lading in Turkish trade?",
        excerpt: "A bill of lading serves as a receipt, contract of carriage, and document of title. Turkish Commercial Code recognizes it as a negotiable instrument.",
        tags: ["international-trade", "commercial-law"],
        relatedTerms: ["incoterms", "letter-of-credit", "customs-procedures"]
    },
    {
        id: "board-of-directors",
        term: "Board of Directors",
        trTerm: "Yönetim Kurulu",
        question: "What are the duties and liabilities of board members in Turkey?",
        excerpt: "Board members of Turkish companies have fiduciary duties including loyalty and care. They may be personally liable for damages caused by negligent management.",
        tags: ["company-law"],
        relatedTerms: ["anonim-sirket", "corporate-governance", "shareholders-agreement"]
    },
    {
        id: "bilateral-investment-treaty",
        term: "Bilateral Investment Treaty (BIT)",
        trTerm: "İkili Yatırım Anlaşması (İYA)",
        question: "How do bilateral investment treaties protect foreign investors in Turkey?",
        excerpt: "Turkey has signed BITs with over 80 countries, providing protections like fair treatment, protection from expropriation, and access to international arbitration.",
        tags: ["international-trade", "dispute-resolution"],
        relatedTerms: ["foreign-investment", "arbitration-turkey", "expropriation"]
    },
    // C
    {
        id: "capital-increase",
        term: "Capital Increase",
        trTerm: "Sermaye Artırımı",
        question: "How is a capital increase executed in a Turkish company?",
        excerpt: "Capital increases require shareholder approval and Trade Registry registration. Both cash and in-kind contributions are permitted under Turkish Commercial Code.",
        tags: ["company-law"],
        relatedTerms: ["anonim-sirket", "limited-sirket", "shareholders-agreement"]
    },
    {
        id: "commercial-lease",
        term: "Commercial Lease Agreement",
        trTerm: "Ticari Kira Sözleşmesi",
        question: "What are the key provisions of commercial leases under Turkish law?",
        excerpt: "Commercial leases are governed by Turkish Code of Obligations. Tenants have strong protections, and landlords must follow specific procedures for termination.",
        tags: ["real-estate", "contract-law"],
        relatedTerms: ["lease-termination", "rent-adjustment", "property-transfer"]
    },
    {
        id: "company-formation",
        term: "Company Formation",
        trTerm: "Şirket Kuruluşu",
        question: "What are the steps to establish a company in Turkey?",
        excerpt: "Company formation involves preparing articles of association, obtaining tax IDs, depositing capital, and registering with the Trade Registry. Process takes 3-5 business days.",
        tags: ["company-law"],
        relatedTerms: ["anonim-sirket", "limited-sirket", "branch-office"]
    },
    {
        id: "competition-law",
        term: "Competition Law",
        trTerm: "Rekabet Hukuku",
        question: "What are the main competition law rules businesses must follow in Turkey?",
        excerpt: "Turkish Competition Law prohibits cartels, abuse of dominance, and requires merger notification. The Competition Authority has broad enforcement powers.",
        tags: ["commercial-law"],
        relatedTerms: ["merger-control", "antitrust", "market-dominance"]
    },
    {
        id: "compliance-program",
        term: "Compliance Program",
        trTerm: "Uyum Programı",
        question: "What should a corporate compliance program include in Turkey?",
        excerpt: "Effective compliance programs include written policies, training, reporting mechanisms, monitoring, and disciplinary procedures aligned with Turkish regulations.",
        tags: ["commercial-law", "data-protection"],
        relatedTerms: ["anti-corruption", "kvkk-compliance", "internal-audit"]
    },
    {
        id: "confidentiality-agreement",
        term: "Confidentiality Agreement (NDA)",
        trTerm: "Gizlilik Sözleşmesi (NDA)",
        question: "How are NDAs enforced under Turkish law?",
        excerpt: "Turkish law recognizes confidentiality agreements. Breaches can result in contractual penalties and tort liability for damages caused by disclosure.",
        tags: ["contract-law", "intellectual-property"],
        relatedTerms: ["trade-secrets", "non-compete", "employment-contract"]
    },
    {
        id: "corporate-governance",
        term: "Corporate Governance",
        trTerm: "Kurumsal Yönetim",
        question: "What corporate governance requirements apply to Turkish companies?",
        excerpt: "Corporate governance in Turkey is primarily shaped by the Turkish Commercial Code No. 6102, while publicly held companies are also subject to Capital Markets Board (CMB) corporate governance rules.",
        tags: ["company-law"],
        relatedTerms: ["board-of-directors", "shareholders-agreement", "anonim-sirket"]
    },
    {
        id: "customs-procedures",
        term: "Customs Procedures",
        trTerm: "Gümrük İşlemleri",
        question: "What are the main customs procedures for importing goods to Turkey?",
        excerpt: "Import procedures typically include an electronic customs declaration, tariff classification (HS/GTIP), customs valuation, origin determination, submission of supporting documents/permits, and payment of customs duties/VAT.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["customs-valuation", "tariff-classification", "free-trade-zones"]
    },
    {
        id: "customs-valuation",
        term: "Customs Valuation",
        trTerm: "Gümrük Kıymeti",
        question: "How is customs value determined for imported goods in Turkey?",
        excerpt: "In Turkey, customs valuation is governed primarily by Turkish Customs Law No. 4458 and secondary legislation, applying WTO customs valuation principles. The default method is transaction value.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["customs-procedures", "transfer-pricing", "tariff-classification"]
    },
    // D
    {
        id: "data-controller",
        term: "Data Controller",
        trTerm: "Veri Sorumlusu",
        question: "What are the obligations of a data controller under KVKK?",
        excerpt: "Under KVKK, data controllers must fulfill information (privacy notice) duties, take appropriate security measures, respond to data subject requests, and handle breach notifications. VERBIS registration is conditional.",
        tags: ["data-protection"],
        relatedTerms: ["kvkk-compliance", "data-processor", "personal-data"]
    },
    {
        id: "data-processor",
        term: "Data Processor",
        trTerm: "Veri İşleyen",
        question: "What is the difference between data controller and processor under Turkish law?",
        excerpt: "Under KVKK, data processors process personal data on the controller’s behalf and instructions. They must implement appropriate technical and organisational security measures.",
        tags: ["data-protection"],
        relatedTerms: ["data-controller", "kvkk-compliance", "data-processing-agreement"]
    },
    {
        id: "debt-collection",
        term: "Debt Collection",
        trTerm: "Alacak Tahsili",
        question: "How does debt collection work in Turkey?",
        excerpt: "Debt collection in Turkey can be pursued amicably or through enforcement offices (icra dairesi). 'Enforcement without judgment' is a streamlined method for monetary debts.",
        tags: ["commercial-law", "dispute-resolution"],
        relatedTerms: ["litigation-turkey", "enforcement-foreign-judgments", "commercial-lease"]
    },
    {
        id: "data-processing-agreement",
        term: "Data Processing Agreement",
        trTerm: "Veri İşleme Sözleşmesi",
        question: "When is a data processing agreement required under KVKK?",
        excerpt: "A written data processing agreement (or clauses) allocating responsibilities and security measures is best practice under KVKK when engaging a processor, even if no single mandatory form exists.",
        tags: ["data-protection", "contract-law"],
        relatedTerms: ["data-controller", "data-processor", "kvkk-compliance"]
    },
    {
        id: "distribution-agreement",
        term: "Distribution Agreement",
        trTerm: "Distribütörlük Sözleşmesi",
        question: "What should be included in a distribution agreement for Turkey?",
        excerpt: "Distribution agreements typically address territory, exclusivity, ordering and supply terms, recommended resale prices, IP/brand use, termination, and competition law compliance.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["agency-agreement", "franchise-agreement", "exclusive-dealing"]
    },
    {
        id: "due-diligence",
        term: "Due Diligence",
        trTerm: "Hukuki İnceleme (Due Diligence)",
        question: "What does legal due diligence involve in Turkish M&A transactions?",
        excerpt: "Due diligence covers corporate documents, contracts, litigation, employment, IP, real estate, environmental, and regulatory compliance matters.",
        tags: ["company-law", "commercial-law"],
        relatedTerms: ["mergers-acquisitions", "share-purchase", "asset-purchase"]
    },
    {
        id: "dispute-resolution-clause",
        term: "Dispute Resolution Clause",
        trTerm: "Uyuşmazlık Çözüm Şartı",
        question: "How should dispute resolution clauses be drafted for Turkish contracts?",
        excerpt: "Effective dispute resolution clauses clearly choose court jurisdiction or arbitration (e.g., ISTAC), governing law, seat of arbitration, language, and number of arbitrators.",
        tags: ["dispute-resolution", "contract-law"],
        relatedTerms: ["arbitration-turkey", "litigation-turkey", "mediation"]
    },
    // E
    {
        id: "employment-contract",
        term: "Employment Contract",
        trTerm: "İş Sözleşmesi",
        question: "What are the mandatory provisions of employment contracts in Turkey?",
        excerpt: "Turkish employment contracts must include job description, salary, working hours, and trial period. Written form is required for definite-term contracts.",
        tags: ["employment"],
        relatedTerms: ["labor-law", "severance-pay", "termination-employment"]
    },
    {
        id: "enforcement-foreign-judgments",
        term: "Enforcement of Foreign Judgments",
        trTerm: "Yabancı Mahkeme Kararlarının Tenfizi",
        question: "How can foreign court judgments be enforced in Turkey?",
        excerpt: "Foreign judgments require recognition and enforcement proceedings in Turkish courts. Reciprocity and public policy compliance are key requirements.",
        tags: ["dispute-resolution", "international-trade"],
        relatedTerms: ["arbitration-turkey", "litigation-turkey", "new-york-convention"]
    },
    {
        id: "environmental-compliance",
        term: "Environmental Compliance",
        trTerm: "Çevresel Uyumluluk",
        question: "What environmental regulations must businesses comply with in Turkey?",
        excerpt: "Turkish Environmental Law requires environmental impact assessments, waste management, and emission permits. Non-compliance can result in significant fines.",
        tags: ["commercial-law"],
        relatedTerms: ["compliance-program", "due-diligence", "permits-licenses"]
    },
    {
        id: "exclusive-dealing",
        term: "Exclusive Dealing",
        trTerm: "Münhasır Anlaşma",
        question: "Are exclusive dealing arrangements legal under Turkish competition law?",
        excerpt: "Exclusive dealing is permitted if market share is below thresholds. Block exemption regulations provide safe harbors for vertical agreements meeting specific criteria.",
        tags: ["commercial-law", "contract-law"],
        relatedTerms: ["competition-law", "distribution-agreement", "vertical-agreements"]
    },
    {
        id: "expropriation",
        term: "Expropriation",
        trTerm: "Kamulaştırma",
        question: "What protections exist against expropriation for foreign investors in Turkey?",
        excerpt: "Turkish Constitution prohibits expropriation without fair compensation. BITs provide additional protections including access to international arbitration.",
        tags: ["real-estate", "international-trade"],
        relatedTerms: ["bilateral-investment-treaty", "foreign-investment", "property-rights"]
    },
    // F
    {
        id: "force-majeure",
        term: "Force Majeure",
        trTerm: "Mücbir Sebep",
        question: "How is force majeure defined and applied in Turkish contracts?",
        excerpt: "Force majeure excuses performance when unforeseeable events beyond control prevent fulfillment. Parties should define specific events in contracts.",
        tags: ["contract-law"],
        relatedTerms: ["impossibility-performance", "hardship-clause", "contract-termination"]
    },
    {
        id: "foreign-investment",
        term: "Foreign Direct Investment",
        trTerm: "Doğrudan Yabancı Yatırım",
        question: "What incentives are available for foreign investors in Turkey?",
        excerpt: "Turkey offers tax exemptions, customs duty relief, land allocation, and employment incentives in organized industrial zones and priority development regions.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["investment-incentives", "free-trade-zones", "bilateral-investment-treaty"]
    },
    {
        id: "franchise-agreement",
        term: "Franchise Agreement",
        trTerm: "Franchise Sözleşmesi",
        question: "What are the key legal considerations for franchising in Turkey?",
        excerpt: "Franchise agreements should address IP licensing, quality standards, territory, fees, training, and termination. No specific franchise law exists in Turkey.",
        tags: ["contract-law", "intellectual-property"],
        relatedTerms: ["distribution-agreement", "trademark-registration", "licensing-agreement"]
    },
    {
        id: "free-trade-zones",
        term: "Free Trade Zones",
        trTerm: "Serbest Bölgeler",
        question: "What advantages do Turkish Free Trade Zones offer to businesses?",
        excerpt: "Free Trade Zones offer customs duty exemption, VAT exemption on sales to Turkey, income tax exemption for manufacturing, and simplified procedures.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["customs-procedures", "foreign-investment", "investment-incentives"]
    },
    // G
    {
        id: "general-assembly",
        term: "General Assembly",
        trTerm: "Genel Kurul",
        question: "What decisions require general assembly approval in Turkish companies?",
        excerpt: "General assembly approves financial statements, dividends, board elections, capital changes, mergers, and amendments to articles of association.",
        tags: ["company-law"],
        relatedTerms: ["anonim-sirket", "shareholders-agreement", "voting-rights"]
    },
    {
        id: "gdpr-kvkk-comparison",
        term: "GDPR vs KVKK",
        trTerm: "GDPR ve KVKK Karşılaştırması",
        question: "What are the main differences between GDPR and Turkish KVKK?",
        excerpt: "While KVKK is modeled on GDPR, differences include consent requirements, cross-border transfer rules, and data subject rights. KVKK has specific Turkish requirements.",
        tags: ["data-protection", "international-trade"],
        relatedTerms: ["kvkk-compliance", "data-controller", "cross-border-data-transfer"]
    },
    {
        id: "guarantee-agreement",
        term: "Guarantee Agreement",
        trTerm: "Garanti Sözleşmesi",
        question: "What types of guarantees are recognized under Turkish law?",
        excerpt: "Turkish law recognizes personal guarantees, bank guarantees, and corporate guarantees. Spousal consent may be required for personal guarantees.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["surety", "letter-of-credit", "security-interests"]
    },
    // H
    {
        id: "hardship-clause",
        term: "Hardship Clause",
        trTerm: "Aşırı İfa Güçlüğü Şartı",
        question: "How do hardship clauses work in Turkish commercial contracts?",
        excerpt: "Hardship clauses allow renegotiation when circumstances change significantly. Turkish Code of Obligations recognizes adaptation of contracts due to changed circumstances.",
        tags: ["contract-law"],
        relatedTerms: ["force-majeure", "contract-adaptation", "impossibility-performance"]
    },
    {
        id: "holding-company",
        term: "Holding Company",
        trTerm: "Holding Şirketi",
        question: "What are the benefits of establishing a holding company in Turkey?",
        excerpt: "Turkish holding companies can benefit from participation exemption on dividends and capital gains from subsidiary shares, providing tax-efficient group structures.",
        tags: ["company-law", "tax-law"],
        relatedTerms: ["corporate-restructuring", "group-taxation", "subsidiary"]
    },
    // I
    {
        id: "incoterms",
        term: "Incoterms",
        trTerm: "Teslim Şekilleri (Incoterms)",
        question: "How are Incoterms applied in Turkish international trade contracts?",
        excerpt: "Incoterms define seller and buyer responsibilities for delivery, risk transfer, and costs. Turkish traders commonly use CIF, FOB, and EXW terms.",
        tags: ["international-trade", "contract-law"],
        relatedTerms: ["bill-of-lading", "letter-of-credit", "customs-procedures"]
    },
    {
        id: "intellectual-property-rights",
        term: "Intellectual Property Rights",
        trTerm: "Fikri Mülkiyet Hakları",
        question: "How are intellectual property rights protected in Turkey?",
        excerpt: "Turkey's IP Law No. 6769 provides comprehensive protection for trademarks, patents, designs, and geographical indications aligned with EU standards.",
        tags: ["intellectual-property"],
        relatedTerms: ["trademark-registration", "patent-protection", "copyright"]
    },
    {
        id: "investment-incentives",
        term: "Investment Incentives",
        trTerm: "Yatırım Teşvikleri",
        question: "What investment incentive programs are available in Turkey?",
        excerpt: "Turkey offers general, regional, priority, and strategic investment incentives including tax reductions, customs exemptions, and employer insurance support.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["foreign-investment", "free-trade-zones", "technology-development-zones"]
    },
    // J
    {
        id: "joint-venture",
        term: "Joint Venture",
        trTerm: "Ortak Girişim (Joint Venture)",
        question: "What are the legal structures for joint ventures in Turkey?",
        excerpt: "Joint ventures can be structured as contractual arrangements or incorporated entities. Key considerations include governance, profit sharing, and exit mechanisms.",
        tags: ["company-law", "contract-law"],
        relatedTerms: ["shareholders-agreement", "partnership", "company-formation"]
    },
    // K
    {
        id: "kvkk-compliance",
        term: "KVKK Compliance",
        trTerm: "KVKK Uyumluluğu",
        question: "What are the key compliance requirements under Turkish data protection law (KVKK)?",
        excerpt: "KVKK requires data controller registration, lawful processing basis, data subject notification, security measures, and compliance with cross-border transfer rules.",
        tags: ["data-protection"],
        relatedTerms: ["data-controller", "personal-data", "gdpr-kvkk-comparison"]
    },
    // L
    {
        id: "labor-law",
        term: "Turkish Labor Law",
        trTerm: "Türk İş Hukuku",
        question: "What are the main employment protections under Turkish Labor Law?",
        excerpt: "Labor Law No. 4857 covers working hours (45/week max), minimum wage, leave entitlements, workplace safety, and protection against unfair dismissal.",
        tags: ["employment"],
        relatedTerms: ["employment-contract", "severance-pay", "termination-employment"]
    },
    {
        id: "letter-of-credit",
        term: "Letter of Credit",
        trTerm: "Akreditif",
        question: "How do letters of credit work in Turkish international trade?",
        excerpt: "Letters of credit provide payment security in international trade. Turkish banks issue and handle LCs under UCP 600 rules, ensuring payment upon document compliance.",
        tags: ["international-trade", "commercial-law"],
        relatedTerms: ["bill-of-lading", "trade-finance", "bank-guarantee"]
    },
    {
        id: "liaison-office",
        term: "Liaison Office",
        trTerm: "İrtibat Bürosu",
        question: "What activities can a liaison office perform in Turkey?",
        excerpt: "Liaison offices can conduct market research, promote parent company, and establish business contacts but cannot engage in commercial activities or generate revenue.",
        tags: ["company-law", "international-trade"],
        relatedTerms: ["branch-office", "subsidiary", "company-formation"]
    },
    {
        id: "licensing-agreement",
        term: "Licensing Agreement",
        trTerm: "Lisans Sözleşmesi",
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
        trTerm: "Türkiye'de Dava Süreçleri",
        question: "How does the commercial litigation process work in Turkey?",
        excerpt: "Commercial disputes are heard in Commercial Courts. The process includes petition, answer, preliminary hearing, evidence, and judgment phases. Appeals go to Regional Courts (İstinaf) and subsequently to the Court of Cassation (Yargıtay).",
        tags: ["dispute-resolution"],
        relatedTerms: ["arbitration-turkey", "mediation", "enforcement-foreign-judgments"]
    },
    // M
    {
        id: "mediation",
        term: "Mediation",
        trTerm: "Arabuluculuk",
        question: "When is mediation mandatory in Turkish commercial disputes?",
        excerpt: "Mandatory mediation applies to commercial, consumer, and employment disputes before filing lawsuit. Parties must attempt mediation or face case dismissal.",
        tags: ["dispute-resolution"],
        relatedTerms: ["arbitration-turkey", "litigation-turkey", "dispute-resolution-clause"]
    },
    {
        id: "merger-control",
        term: "Merger Control",
        trTerm: "Birleşme ve Devralmaların Kontrolü",
        question: "When is merger notification required to Turkish Competition Authority?",
        excerpt: "Notification is required when combined Turkish turnover exceeds 750 million TL or one party's turnover exceeds 250 million TL with other party exceeding 30 million TL.",
        tags: ["commercial-law", "company-law"],
        relatedTerms: ["competition-law", "mergers-acquisitions", "antitrust"]
    },
    {
        id: "mergers-acquisitions",
        term: "Mergers and Acquisitions",
        trTerm: "Birleşme ve Devralmalar (M&A)",
        question: "What is the legal framework for M&A transactions in Turkey?",
        excerpt: "M&A transactions are governed by Turkish Commercial Code. Share deals and asset deals have different tax implications and require specific due diligence.",
        tags: ["company-law", "commercial-law"],
        relatedTerms: ["due-diligence", "share-purchase", "merger-control"]
    },
    {
        id: "minimum-wage",
        term: "Minimum Wage",
        trTerm: "Asgari Ücret",
        question: "How is minimum wage determined in Turkey?",
        excerpt: "Minimum wage is set at least annually by the Minimum Wage Determination Commission. Employers must pay at least minimum wage plus applicable social security contributions.",
        tags: ["employment"],
        relatedTerms: ["labor-law", "employment-contract", "social-security"]
    },
    // N
    {
        id: "new-york-convention",
        term: "New York Convention",
        trTerm: "New York Sözleşmesi",
        question: "How does Turkey implement the New York Convention?",
        excerpt: "Turkey ratified the New York Convention, enabling enforcement of foreign arbitral awards. Courts may refuse enforcement only on limited grounds like public policy.",
        tags: ["dispute-resolution", "international-trade"],
        relatedTerms: ["arbitration-turkey", "enforcement-foreign-judgments", "istac"]
    },
    {
        id: "non-compete",
        term: "Non-Compete Agreement",
        trTerm: "Rekabet Yasağı Sözleşmesi",
        question: "Are non-compete clauses enforceable in Turkish employment contracts?",
        excerpt: "Non-compete clauses are enforceable if limited to 2 years, specific geographic area, and particular activities. Employer may need to provide compensation.",
        tags: ["employment", "contract-law"],
        relatedTerms: ["employment-contract", "confidentiality-agreement", "trade-secrets"]
    },
    {
        id: "notarization",
        term: "Notarization Requirements",
        trTerm: "Noter Onay Süreçleri",
        question: "When is notarization required for legal documents in Turkey?",
        excerpt: "Notarization is required for powers of attorney, real estate transactions, corporate resolutions, and certain contracts. Foreign documents need apostille or legalization.",
        tags: ["contract-law", "company-law"],
        relatedTerms: ["apostille", "power-of-attorney", "document-legalization"]
    },
    // O
    {
        id: "overtime-pay",
        term: "Overtime Pay",
        trTerm: "Fazla Mesai Ücreti",
        question: "How is overtime compensation calculated in Turkey?",
        excerpt: "Overtime exceeding 45 hours weekly is compensated at 1.5x normal rate. Maximum overtime is 270 hours annually. Employees can opt for time off instead.",
        tags: ["employment"],
        relatedTerms: ["labor-law", "working-hours", "employment-contract"]
    },
    // P
    {
        id: "patent-protection",
        term: "Patent Protection",
        trTerm: "Patent Koruması",
        question: "How are patents protected and registered in Turkey?",
        excerpt: "Patents are registered with Turkish Patent and Trademark Office. Protection lasts 20 years from filing. Turkey is party to PCT and European Patent Convention.",
        tags: ["intellectual-property"],
        relatedTerms: ["intellectual-property-rights", "trademark-registration", "utility-models"]
    },
    {
        id: "personal-data",
        term: "Personal Data",
        trTerm: "Kişisel Veri",
        question: "What qualifies as personal data under Turkish KVKK?",
        excerpt: "Personal data includes any information relating to identified or identifiable natural person. Sensitive data categories have stricter processing requirements.",
        tags: ["data-protection"],
        relatedTerms: ["kvkk-compliance", "data-controller", "sensitive-personal-data"]
    },
    {
        id: "power-of-attorney",
        term: "Power of Attorney",
        trTerm: "Vekaletname",
        question: "What are the requirements for a valid power of attorney in Turkey?",
        excerpt: "Powers of attorney must be notarized. Foreign POAs require apostille or legalization and certified Turkish translation. Scope must be clearly defined.",
        tags: ["contract-law", "company-law"],
        relatedTerms: ["notarization", "apostille", "legal-representation"]
    },
    {
        id: "product-liability",
        term: "Product Liability",
        trTerm: "Ürün Sorumluluğu",
        question: "What is the product liability framework in Turkey?",
        excerpt: "Manufacturers, importers, and suppliers are liable for defective products. Liability is strict for manufacturers. Consumer protection law provides additional remedies.",
        tags: ["commercial-law", "contract-law"],
        relatedTerms: ["consumer-protection", "warranty", "product-recall"]
    },
    {
        id: "property-transfer",
        term: "Property Transfer",
        trTerm: "Taşınmaz Devri",
        question: "What is the process for transferring real estate in Turkey?",
        excerpt: "Property transfers require title deed registration at Land Registry. Foreign ownership is permitted with some restrictions. Transfer tax is 4% split between parties.",
        tags: ["real-estate", "tax-law"],
        relatedTerms: ["commercial-lease", "expropriation", "property-rights"]
    },
    // R
    {
        id: "repatriation-profits",
        term: "Repatriation of Profits",
        trTerm: "Kâr Transferi",
        question: "Can foreign companies freely repatriate profits from Turkey?",
        excerpt: "Turkey allows free transfer of profits, dividends, royalties, and capital. Withholding taxes may apply. No exchange controls restrict fund transfers.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["foreign-investment", "dividend-distribution", "withholding-tax"]
    },
    {
        id: "residency-permit",
        term: "Residency Permit",
        trTerm: "Oturma İzni",
        question: "What residency options are available for foreign business persons in Turkey?",
        excerpt: "Work permits automatically include residency. Short-term permits are available for business visitors. Investment-based residency has specific thresholds.",
        tags: ["employment", "international-trade"],
        relatedTerms: ["work-permit", "foreign-investment", "turquoise-card"]
    },
    // S
    {
        id: "severance-pay",
        term: "Severance Pay",
        trTerm: "Kıdem Tazminatı",
        question: "When are employees entitled to severance pay in Turkey?",
        excerpt: "Employees with 1+ year tenure receive 30 days gross salary per year upon qualifying termination. Cap is set semiannually (Jan/July). Resignation generally disqualifies entitlement.",
        tags: ["employment"],
        relatedTerms: ["termination-employment", "labor-law", "employment-contract"]
    },
    {
        id: "share-purchase",
        term: "Share Purchase Agreement",
        trTerm: "Hisse Devir Sözleşmesi",
        question: "What key terms should a share purchase agreement include for Turkey?",
        excerpt: "SPAs should cover purchase price, warranties, indemnities, conditions precedent, non-compete, and post-closing obligations specific to Turkish law requirements.",
        tags: ["company-law", "contract-law"],
        relatedTerms: ["mergers-acquisitions", "due-diligence", "asset-purchase"]
    },
    {
        id: "shareholders-agreement",
        term: "Shareholders Agreement",
        trTerm: "Pay Sahipleri Sözleşmesi",
        question: "Why is a shareholders agreement important for Turkish companies?",
        excerpt: "Shareholders agreements govern voting, transfers, board composition, dividends, and exit rights. They supplement articles of association with enforceable commitments.",
        tags: ["company-law", "contract-law"],
        relatedTerms: ["anonim-sirket", "limited-sirket", "voting-rights"]
    },
    {
        id: "social-security",
        term: "Social Security",
        trTerm: "Sosyal Güvenlik",
        question: "What are employer social security obligations in Turkey?",
        excerpt: "Employers contribute approximately 20.5% of gross salary to social security (SGK). Employees contribute approximately 14%. Totalization agreements may reduce double coverage.",
        tags: ["employment", "tax-law"],
        relatedTerms: ["labor-law", "employment-contract", "minimum-wage"]
    },
    {
        id: "subsidiary",
        term: "Subsidiary Company",
        trTerm: "Bağlı Ortaklık",
        question: "What are the advantages of forming a subsidiary in Turkey?",
        excerpt: "Subsidiaries are separate legal entities offering liability protection. They can access local financing, participate in tenders, and build local market presence.",
        tags: ["company-law", "international-trade"],
        relatedTerms: ["branch-office", "company-formation", "limited-sirket"]
    },
    {
        id: "supply-agreement",
        term: "Supply Agreement",
        trTerm: "Tedarik Sözleşmesi",
        question: "What should be included in supply agreements under Turkish law?",
        excerpt: "Supply agreements should cover specifications, pricing mechanisms, delivery terms, warranties, liability limits, termination rights, and dispute resolution.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["distribution-agreement", "incoterms", "quality-standards"]
    },
    // T
    {
        id: "turkish-investment-lawyer",
        term: "Turkish Investment Lawyer",
        trTerm: "Türk Yatırım Avukatı",
        customUrl: "turkish-investment-lawyer.html",
        question: "What legal support do foreign investors need in Turkey?",
        excerpt: "A structured legal roadmap for foreign investors covering entry strategies, due diligence, contracts, tax alignment, and dispute prevention.",
        tags: ["commercial-law", "international-trade"],
        relatedTerms: ["foreign-investment", "due-diligence", "company-formation"]
    },
    {
        id: "tariff-classification",
        term: "Tariff Classification",
        trTerm: "Tarife Sınıflandırması",
        question: "How are goods classified for customs purposes in Turkey?",
        excerpt: "Turkey uses the Harmonized System (HS) for classification. Correct classification determines duty rates, trade policy measures, and required documentation.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["customs-procedures", "customs-valuation", "origin-rules"]
    },
    {
        id: "tax-residency",
        term: "Tax Residency",
        trTerm: "Vergi Mukimliği",
        question: "How is corporate tax residency determined in Turkey?",
        excerpt: "Companies with registered office or place of effective management in Turkey are tax resident. Residents are taxed on worldwide income; non-residents on Turkish-source income.",
        tags: ["tax-law"],
        relatedTerms: ["corporate-tax", "withholding-tax", "transfer-pricing"]
    },
    {
        id: "technology-development-zones",
        term: "Technology Development Zones",
        trTerm: "Teknoloji Geliştirme Bölgeleri (Teknoparklar)",
        question: "What benefits do Technology Development Zones (Technoparks) offer?",
        excerpt: "Technoparks provide income tax exemption until 2028 for R&D activities, VAT exemption on sales, and income tax exemption for researchers on salaries.",
        tags: ["tax-law", "intellectual-property"],
        relatedTerms: ["investment-incentives", "rd-incentives", "free-trade-zones"]
    },
    {
        id: "termination-employment",
        term: "Employment Termination",
        trTerm: "İş Sözleşmesinin Feshi",
        question: "What are the rules for terminating employment in Turkey?",
        excerpt: "Termination requires valid reason for companies with 30+ employees. Notice periods range from 2-8 weeks. Wrongful termination results in reinstatement or compensation.",
        tags: ["employment"],
        relatedTerms: ["severance-pay", "labor-law", "employment-contract"]
    },
    {
        id: "trade-secrets",
        term: "Trade Secrets",
        trTerm: "Ticari Sırlar",
        question: "How are trade secrets protected under Turkish law?",
        excerpt: "Trade secrets are protected under Turkish Commercial Code and unfair competition provisions. Misappropriation can result in civil damages and criminal penalties.",
        tags: ["intellectual-property", "commercial-law"],
        relatedTerms: ["confidentiality-agreement", "non-compete", "unfair-competition"]
    },
    {
        id: "trademark-registration",
        term: "Trademark Registration",
        trTerm: "Marka Tescili",
        question: "How do you register a trademark in Turkey?",
        excerpt: "Trademarks are registered through the Turkish Patent and Trademark Office. Registration provides 10-year protection, renewable indefinitely. Priority from Paris Convention applies.",
        tags: ["intellectual-property"],
        relatedTerms: ["intellectual-property-rights", "patent-protection", "brand-protection"]
    },
    {
        id: "transfer-pricing",
        term: "Transfer Pricing",
        trTerm: "Transfer Fiyatlandırması",
        question: "What are Turkey's transfer pricing rules for related party transactions?",
        excerpt: "Turkish transfer pricing follows OECD guidelines. Documentation is mandatory for certain thresholds. Arm's length principle applies to related party transactions.",
        tags: ["tax-law", "international-trade"],
        relatedTerms: ["corporate-tax", "related-party", "customs-valuation"]
    },
    {
        id: "turquoise-card",
        term: "Turquoise Card",
        trTerm: "Turkuaz Kart",
        question: "What is the Turquoise Card and who is eligible?",
        excerpt: "Turquoise Card provides indefinite residence and work rights for qualified foreigners including investors, scientists, and strategic employees. It's Turkey's equivalent of a green card.",
        tags: ["employment", "international-trade"],
        relatedTerms: ["work-permit", "residency-permit", "foreign-investment"]
    },
    // U
    {
        id: "unfair-competition",
        term: "Unfair Competition",
        trTerm: "Haksız Rekabet",
        question: "What constitutes unfair competition under Turkish law?",
        excerpt: "Turkish Commercial Code prohibits misleading practices, disparagement, exploitation of reputation, and trade secret misappropriation. Competitors and consumers can seek remedies.",
        tags: ["commercial-law", "intellectual-property"],
        relatedTerms: ["competition-law", "trade-secrets", "trademark-infringement"]
    },
    // V
    {
        id: "vat-turkey",
        term: "VAT in Turkey",
        trTerm: "Türkiye'de KDV",
        question: "How does VAT work for B2B transactions in Turkey?",
        excerpt: "Standard VAT rate is 20% with reduced rates of 10% and 1% for specific goods. VAT on business purchases is generally deductible. Export sales are zero-rated.",
        tags: ["tax-law"],
        relatedTerms: ["customs-procedures", "corporate-tax", "withholding-tax"]
    },
    {
        id: "vertical-agreements",
        term: "Vertical Agreements",
        trTerm: "Dikey Anlaşmalar",
        question: "What is the block exemption for vertical agreements in Turkey?",
        excerpt: "Vertical agreements are exempt from competition law prohibition if supplier's market share is below 40%. Certain hardcore restrictions like resale price maintenance are prohibited.",
        tags: ["commercial-law", "contract-law"],
        relatedTerms: ["competition-law", "distribution-agreement", "exclusive-dealing"]
    },
    {
        id: "voting-rights",
        term: "Shareholder Voting Rights",
        trTerm: "Pay Sahiplerinin Oy Hakları",
        question: "How do shareholder voting rights work in Turkish companies?",
        excerpt: "Each share typically carries one vote. Articles can create preferential voting shares. Qualified majorities are required for significant decisions.",
        tags: ["company-law"],
        relatedTerms: ["shareholders-agreement", "general-assembly", "minority-rights"]
    },
    // W
    {
        id: "warranty",
        term: "Warranty Obligations",
        trTerm: "Garanti Yükümlülükleri",
        question: "What warranty obligations apply to B2B sales in Turkey?",
        excerpt: "Sellers warrant goods are free from defects. B2B buyers must inspect promptly and notify defects. Contractual warranty modifications are generally permitted.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["product-liability", "sales-contract", "quality-standards"]
    },
    {
        id: "withholding-tax",
        term: "Withholding Tax",
        trTerm: "Stopaj Vergisi",
        question: "What withholding taxes apply to payments made from Turkey?",
        excerpt: "Withholding applies to dividends (10%), royalties (20%), interest (0-10%), and service fees (15-20%). Double tax treaties may reduce rates.",
        tags: ["tax-law", "international-trade"],
        relatedTerms: ["corporate-tax", "repatriation-profits", "double-tax-treaty"]
    },
    {
        id: "work-permit",
        term: "Work Permit",
        trTerm: "Çalışma İzni",
        question: "How do foreign nationals obtain work permits in Turkey?",
        excerpt: "Work permits are obtained through the Ministry of Labor. Applications can be made before entry or within Turkey. Permit categories include definite, indefinite, and independent.",
        tags: ["employment", "international-trade"],
        relatedTerms: ["residency-permit", "turquoise-card", "foreign-workers"]
    },
    {
        id: "working-hours",
        term: "Working Hours",
        trTerm: "Çalışma Süreleri",
        question: "What are the legal working hour limits in Turkey?",
        excerpt: "Maximum working week is 45 hours, typically spread over 6 days. Daily limit is 11 hours. Flexible arrangements like compressed weeks are permitted.",
        tags: ["employment"],
        relatedTerms: ["labor-law", "overtime-pay", "employment-contract"]
    },
    // Additional entries to reach 100
    {
        id: "apostille",
        term: "Apostille",
        trTerm: "Apostil Tasdiki",
        question: "When is apostille required for documents used in Turkey?",
        excerpt: "Documents from Hague Convention countries require apostille for use in Turkey. Non-Hague country documents need consular legalization.",
        tags: ["contract-law", "international-trade"],
        relatedTerms: ["notarization", "document-legalization", "power-of-attorney"]
    },
    {
        id: "asset-purchase",
        term: "Asset Purchase Agreement",
        trTerm: "Malvarlığı Devir Sözleşmesi",
        question: "What are the advantages of asset purchases vs share purchases in Turkey?",
        excerpt: "Asset purchases allow selective acquisition and may avoid hidden liabilities. However, they may trigger VAT and require individual contract assignments.",
        tags: ["company-law", "contract-law"],
        relatedTerms: ["share-purchase", "mergers-acquisitions", "due-diligence"]
    },
    {
        id: "bank-guarantee",
        term: "Bank Guarantee",
        trTerm: "Banka Teminat Mektubu",
        question: "How do bank guarantees work in Turkish commercial transactions?",
        excerpt: "Bank guarantees provide payment security. Turkish banks issue demand guarantees and conditional guarantees. ICC Uniform Rules may apply if referenced.",
        tags: ["commercial-law", "contract-law"],
        relatedTerms: ["letter-of-credit", "guarantee-agreement", "performance-bond"]
    },
    {
        id: "commercial-representative",
        term: "Commercial Representative",
        trTerm: "Ticari Mümessil",
        question: "What are the legal implications of appointing a commercial representative in Turkey?",
        excerpt: "Commercial representatives act in the name of businesses. Turkish Commercial Code defines their authority and liability. Written authorization is recommended.",
        tags: ["commercial-law", "contract-law"],
        relatedTerms: ["agency-agreement", "power-of-attorney", "distribution-agreement"]
    },
    {
        id: "consumer-protection",
        term: "Consumer Protection",
        trTerm: "Tüketicinin Korunması",
        question: "What consumer protection laws affect B2B businesses selling to consumers in Turkey?",
        excerpt: "Consumer Protection Law provides mandatory warranties, withdrawal rights for distance sales, and advertising restrictions. B2B resellers must comply.",
        tags: ["commercial-law", "contract-law"],
        relatedTerms: ["product-liability", "warranty", "e-commerce"]
    },
    {
        id: "contract-termination",
        term: "Contract Termination",
        trTerm: "Sözleşmenin Feshi",
        question: "What are the grounds for contract termination under Turkish law?",
        excerpt: "Contracts may be terminated for breach, impossibility, mutual agreement, or as per termination clauses. Notice requirements and consequences vary by contract type.",
        tags: ["contract-law"],
        relatedTerms: ["force-majeure", "breach-of-contract", "damages"]
    },
    {
        id: "copyright",
        term: "Copyright Protection",
        trTerm: "Telif Hakkı Koruması",
        question: "How is copyright protected in Turkey?",
        excerpt: "Copyright arises automatically upon creation. Registration is not required but provides evidence. Protection lasts author's lifetime plus 70 years.",
        tags: ["intellectual-property"],
        relatedTerms: ["intellectual-property-rights", "licensing-agreement", "software-licensing"]
    },
    {
        id: "corporate-tax",
        term: "Corporate Tax",
        trTerm: "Kurumlar Vergisi",
        question: "What is the corporate tax rate in Turkey?",
        excerpt: "As of 2025, the standard corporate income tax rate is 25%. Certain sectors (e.g., banks and some financial institutions) may be taxed at 30%, and sector/incentive-based exemptions may apply.",
        tags: ["tax-law"],
        relatedTerms: ["tax-residency", "transfer-pricing", "withholding-tax"]
    },
    {
        id: "cross-border-data-transfer",
        term: "Cross-Border Data Transfer",
        trTerm: "Yurtdışına Veri Aktarımı",
        question: "What rules govern cross-border personal data transfers from Turkey?",
        excerpt: "March 2024 amendments to KVKK introduced a tiered system: transfers based on Adequacy Decision, Appropriate Safeguards (including Standard Contracts), or occasional exceptional circumstances.",
        tags: ["data-protection", "international-trade"],
        relatedTerms: ["kvkk-compliance", "data-controller", "gdpr-kvkk-comparison"]
    },
    {
        id: "dividend-distribution",
        term: "Dividend Distribution",
        trTerm: "Kâr Payı Dağıtımı",
        question: "What are the rules for distributing dividends in Turkey?",
        excerpt: "Dividends can only be distributed from net profits after legal reserves. General assembly decides distribution. Withholding tax applies to payments.",
        tags: ["company-law", "tax-law"],
        relatedTerms: ["general-assembly", "repatriation-profits", "withholding-tax"]
    },
    {
        id: "double-tax-treaty",
        term: "Double Tax Treaty",
        trTerm: "Çifte Vergilendirmeyi Önleme Anlaşması",
        question: "How do Turkey's double tax treaties benefit foreign investors?",
        excerpt: "Turkey has DTTs with 80+ countries providing reduced withholding rates, elimination of double taxation, and tax credits for foreign-source income.",
        tags: ["tax-law", "international-trade"],
        relatedTerms: ["withholding-tax", "foreign-investment", "tax-residency"]
    },
    {
        id: "e-commerce",
        term: "E-Commerce Regulations",
        trTerm: "E-Ticaret Düzenlemeleri",
        question: "What regulations apply to e-commerce businesses in Turkey?",
        excerpt: "E-Commerce Law requires registration, information disclosure, and secure payment systems. Distance sales have consumer withdrawal rights.",
        tags: ["commercial-law", "data-protection"],
        relatedTerms: ["consumer-protection", "kvkk-compliance", "electronic-signature"]
    },
    {
        id: "electronic-signature",
        term: "Electronic Signature",
        trTerm: "Elektronik İmza",
        question: "Are electronic signatures legally valid in Turkey?",
        excerpt: "Turkish Electronic Signature Law recognizes secure electronic signatures as equivalent to handwritten signatures. Qualified certificates provide highest legal certainty.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["e-commerce", "notarization", "digital-contracts"]
    },
    {
        id: "foreign-workers",
        term: "Employment of Foreign Workers",
        trTerm: "Yabancı İşçi İstihdamı",
        question: "What are the rules for employing foreign workers in Turkey?",
        excerpt: "Employers must obtain work permits demonstrating no suitable Turkish candidates exist. Quotas may apply. Foreign worker costs may be higher due to permit fees.",
        tags: ["employment", "international-trade"],
        relatedTerms: ["work-permit", "residency-permit", "labor-law"]
    },
    {
        id: "internal-audit",
        term: "Internal Audit Requirements",
        trTerm: "İç Denetim Gereklilikleri",
        question: "What internal audit requirements apply to Turkish companies?",
        excerpt: "Public companies and regulated entities require internal audit functions. Recent amendments expanded the scope of independent audit requirements for non-public companies based on turnover thresholds.",
        tags: ["company-law", "commercial-law"],
        relatedTerms: ["corporate-governance", "compliance-program", "board-of-directors"]
    },
    {
        id: "istac",
        term: "Istanbul Arbitration Centre (ISTAC)",
        trTerm: "İstanbul Tahkim Merkezi (ISTAC)",
        question: "What is ISTAC and how does it handle disputes?",
        excerpt: "ISTAC is Turkey's leading arbitration institution providing administered arbitration services. Its rules offer efficient, modern procedures for commercial disputes.",
        tags: ["dispute-resolution"],
        relatedTerms: ["arbitration-turkey", "dispute-resolution-clause", "new-york-convention"]
    },
    {
        id: "lease-termination",
        term: "Commercial Lease Termination",
        trTerm: "Ticari Kira Sözleşmesinin Feshi",
        question: "How can a commercial lease be terminated in Turkey?",
        excerpt: "Landlords can terminate for specific grounds like non-payment or personal use. Proper notice is required. Courts may grant tenants extended periods to vacate.",
        tags: ["real-estate", "contract-law"],
        relatedTerms: ["commercial-lease", "rent-adjustment", "eviction"]
    },
    {
        id: "legal-representation",
        term: "Legal Representation in Court",
        trTerm: "Mahkemede Hukuki Temsil",
        question: "Is legal representation mandatory in Turkish courts?",
        excerpt: "Attorney representation is mandatory before Regional Courts of Appeal and Court of Cassation. Lower courts allow self-representation but counsel is advisable.",
        tags: ["dispute-resolution"],
        relatedTerms: ["litigation-turkey", "power-of-attorney", "court-fees"]
    },
    {
        id: "minority-rights",
        term: "Minority Shareholder Rights",
        trTerm: "Azınlık Pay Sahibi Hakları",
        question: "What protections exist for minority shareholders in Turkey?",
        excerpt: "Minority shareholders (10% for A.Ş., 10% for Ltd.) can request audits, call general meetings, and challenge resolutions. Courts can dissolve companies for oppression.",
        tags: ["company-law"],
        relatedTerms: ["shareholders-agreement", "voting-rights", "general-assembly"]
    },
    {
        id: "origin-rules",
        term: "Rules of Origin",
        trTerm: "Menşe Kuralları",
        question: "How do rules of origin affect customs duties in Turkey?",
        excerpt: "Preferential origin under FTAs reduces or eliminates duties. Origin is determined by substantial transformation. Certificate of origin documents preferential treatment.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["customs-procedures", "tariff-classification", "free-trade-agreements"]
    },
    {
        id: "penalties-clauses",
        term: "Penalty Clauses",
        trTerm: "Cezai Şart",
        question: "Are penalty clauses enforceable in Turkish contracts?",
        excerpt: "Penalty clauses are enforceable in Turkey. Courts can reduce excessive penalties. Penalties may be claimed without proving actual damage.",
        tags: ["contract-law"],
        relatedTerms: ["damages", "contract-termination", "breach-of-contract"]
    },
    {
        id: "permits-licenses",
        term: "Business Permits and Licenses",
        trTerm: "İş Yeri Açma ve Çalışma Ruhsatları",
        question: "What permits and licenses are required to operate a business in Turkey?",
        excerpt: "Requirements vary by sector. Common permits include trade registry, activity license, environmental permits, and sector-specific authorizations.",
        tags: ["commercial-law", "company-law"],
        relatedTerms: ["company-formation", "environmental-compliance", "regulated-industries"]
    },
    {
        id: "property-rights",
        term: "Property Rights for Foreigners",
        trTerm: "Yabancıların Mülkiyet Hakları",
        question: "Can foreigners own property in Turkey?",
        excerpt: "Most foreigners can own property subject to reciprocity and area restrictions. Military zones and rural land may have limitations. Legal entity ownership is possible.",
        tags: ["real-estate", "international-trade"],
        relatedTerms: ["property-transfer", "expropriation", "foreign-investment"]
    },
    {
        id: "rd-incentives",
        term: "R&D Incentives",
        trTerm: "Ar-Ge Teşvikleri",
        question: "What incentives are available for R&D activities in Turkey?",
        excerpt: "R&D Law provides tax deductions, wage tax exemptions, and social security support for qualified R&D centers with minimum 15 researchers.",
        tags: ["tax-law", "intellectual-property"],
        relatedTerms: ["technology-development-zones", "investment-incentives", "patent-protection"]
    },
    {
        id: "related-party",
        term: "Related Party Transactions",
        trTerm: "İlişkili Taraf İşlemleri",
        question: "What disclosure requirements apply to related party transactions in Turkey?",
        excerpt: "Listed companies must disclose related party transactions. Transfer pricing rules require arm's length terms. Board approval may be required.",
        tags: ["company-law", "tax-law"],
        relatedTerms: ["transfer-pricing", "corporate-governance", "board-of-directors"]
    },
    {
        id: "rent-adjustment",
        term: "Rent Adjustment",
        trTerm: "Kira Bedelinin Uyarlanması",
        question: "How is commercial rent adjusted in Turkey?",
        excerpt: "Rent adjustments follow contractual terms, capped by the Consumer Price Index (CPI/TÜFE) 12-month average. Courts can determine fair rent after five years of tenancy.",
        tags: ["real-estate", "contract-law"],
        relatedTerms: ["commercial-lease", "lease-termination", "inflation-indexation"]
    },
    {
        id: "sales-contract",
        term: "Sales Contract",
        trTerm: "Satış Sözleşmesi",
        question: "What are the essential elements of a sales contract under Turkish law?",
        excerpt: "Sales contracts require agreement on goods and price. Delivery terms, warranties, and risk transfer should be clearly defined. CISG may apply internationally.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["warranty", "supply-agreement", "incoterms"]
    },
    {
        id: "sensitive-personal-data",
        term: "Sensitive Personal Data",
        trTerm: "Özel Nitelikli Kişisel Veri",
        question: "What are sensitive personal data categories under KVKK?",
        excerpt: "Sensitive data includes race, ethnicity, political views, religion, health data, and biometric data. Processing requires explicit consent or legal basis.",
        tags: ["data-protection"],
        relatedTerms: ["personal-data", "kvkk-compliance", "data-controller"]
    },
    {
        id: "service-agreement",
        term: "Service Agreement",
        trTerm: "Hizmet Sözleşmesi",
        question: "What should a B2B service agreement include under Turkish law?",
        excerpt: "Service agreements should define scope, deliverables, fees, timelines, performance standards, liability limits, IP ownership, and termination provisions.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["supply-agreement", "confidentiality-agreement", "sla"]
    },
    {
        id: "trade-finance",
        term: "Trade Finance",
        trTerm: "Dış Ticaretin Finansmanı",
        question: "What trade finance options are available for Turkey transactions?",
        excerpt: "Options include letters of credit, documentary collections, bank guarantees, export credit insurance, and factoring through Turkish banks and Eximbank.",
        tags: ["international-trade", "commercial-law"],
        relatedTerms: ["letter-of-credit", "bank-guarantee", "export-financing"]
    },
    {
        id: "utility-models",
        term: "Utility Models",
        trTerm: "Faydalı Model",
        question: "What protection do utility models provide in Turkey?",
        excerpt: "Utility models protect inventions for 10 years with less stringent requirements than patents. Ideal for incremental innovations. Registration is faster.",
        tags: ["intellectual-property"],
        relatedTerms: ["patent-protection", "intellectual-property-rights", "trademark-registration"]
    }
];

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = glossaryData;
},
    {
        id: "bankruptcy",
        term: "Bankruptcy",
        trTerm: "İflas",
        question: "Who can be subject to bankruptcy in Turkey?",
        excerpt: "Bankruptcy is a legal proceeding involving a person or business that is unable to repay outstanding debts. Under Turkish Execution and Bankruptcy Law, it results in the liquidation of all attachable assets of the debtor to satisfy creditors.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "concordat",
        term: "Concordat",
        trTerm: "Konkordato",
        question: "What is the main advantage of concordat?",
        excerpt: "Concordat is a restructuring mechanism under Turkish Law allowing debtors in poor financial health to restructure their debts and avoid bankruptcy by reaching an agreement with their creditors, subject to court approval.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "mutual-rescission",
        term: "Mutual Rescission",
        trTerm: "İkale",
        question: "Does ikale grant severance pay?",
        excerpt: "Mutual rescission (İkale) is an agreement between an employer and an employee to terminate the employment contract by mutual consent, rather than through unilateral termination.",
        tags: ["employment"],
        relatedTerms: []
    },
    {
        id: "release-agreement",
        term: "Release Agreement",
        trTerm: "İbra",
        question: "Can an employee release the employer before termination?",
        excerpt: "A release agreement (İbra) is a contract where the creditor releases the debtor from their obligation, extinguishing the debt completely under the Turkish Code of Obligations.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "joint-and-several-liability",
        term: "Joint and Several Liability",
        trTerm: "Müteselsil Sorumluluk",
        question: "What happens if one debtor pays the full amount?",
        excerpt: "Joint and several liability means multiple parties are independently liable for the full amount of an obligation. The creditor may demand the entire performance from any one of the debtors.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "right-of-recourse",
        term: "Right of Recourse",
        trTerm: "Rücu",
        question: "When does the right of recourse typically arise?",
        excerpt: "The right of recourse allows a party who has discharged an obligation on behalf of another to seek reimbursement from the party who was primarily liable.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "unjust-enrichment",
        term: "Unjust Enrichment",
        trTerm: "Sebepsiz Zenginleşme",
        question: "What is the statute of limitations for unjust enrichment?",
        excerpt: "Unjust enrichment occurs when a person retains money or benefits that in justice and equity belong to another, without a valid legal ground. The enriched party must return the benefit.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "default",
        term: "Default",
        trTerm: "Temerrüt",
        question: "What are the consequences of default?",
        excerpt: "Default occurs when a debtor fails to fulfill a legal obligation, such as paying a debt when it becomes due, often requiring a formal notice of default to be legally established.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "exigibility",
        term: "Acceleration / Exigibility",
        trTerm: "Muacceliyet",
        question: "What is an acceleration clause?",
        excerpt: "Exigibility (Muacceliyet) refers to the state where a debt becomes due and payable, meaning the creditor has the legal right to demand its immediate performance.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "collusion-simulation",
        term: "Collusion / Simulation",
        trTerm: "Muvazaa",
        question: "Is a simulated contract valid?",
        excerpt: "Simulation (Muvazaa) occurs when parties agree to create a false appearance of a legal transaction to deceive third parties, while secretly agreeing it will have no legal effect between them.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "preliminary-attachment",
        term: "Preliminary Attachment",
        trTerm: "İhtiyati Haciz",
        question: "Do you need a court order for preliminary attachment?",
        excerpt: "Preliminary attachment is a provisional legal measure to seize a debtor's assets before or during a lawsuit to secure the collection of an unsecured monetary claim.",
        tags: ["dispute-resolution"],
        relatedTerms: []
    },
    {
        id: "preliminary-injunction",
        term: "Preliminary Injunction",
        trTerm: "İhtiyati Tedbir",
        question: "What is the difference between attachment and injunction?",
        excerpt: "Preliminary injunction is a court order prohibiting or compelling a specific action to prevent irreparable harm or preserve the status quo pending final resolution of a dispute.",
        tags: ["dispute-resolution"],
        relatedTerms: []
    },
    {
        id: "merchant",
        term: "Merchant",
        trTerm: "Tacir",
        question: "Are all companies considered merchants?",
        excerpt: "A merchant under the Turkish Commercial Code is a real or legal person who operates a commercial enterprise. Merchants are subject to stricter standards of care and specific commercial rules.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "transfer-of-commercial-enterprise",
        term: "Transfer of Commercial Enterprise",
        trTerm: "Ticari İşletme Devri",
        question: "Does the transferor remain liable for past debts?",
        excerpt: "This involves transferring a business as a going concern, including its assets, liabilities, and goodwill. It requires a written agreement registered with the Trade Registry.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "articles-of-association",
        term: "Articles of Association",
        trTerm: "Esas Sözleşme",
        question: "Can the Articles of Association be amended?",
        excerpt: "Articles of Association is the foundational constitutional document of a company, defining its name, purpose, headquarters, capital structure, and internal governance rules.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "change-of-company-type",
        term: "Change of Company Type",
        trTerm: "Tür Değiştirme",
        question: "Does changing the company type affect existing contracts?",
        excerpt: "A legal process where a company changes its corporate form (e.g., from a Limited Company to a Joint-Stock Company) without undergoing liquidation, preserving its legal continuity.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "spin-off",
        term: "Spin-off / Demerger",
        trTerm: "Bölünme",
        question: "What is the difference between full and partial demerger?",
        excerpt: "Demerger is a corporate restructuring process where a company divides its assets and liabilities into two or more existing or newly formed companies.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "liquidation",
        term: "Liquidation",
        trTerm: "Tasfiye",
        question: "How long does liquidation take in Turkey?",
        excerpt: "Liquidation is the process of winding up a company's affairs, selling its assets, settling its debts, and distributing any remaining balance to shareholders before dissolving the legal entity.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "trade-registry",
        term: "Trade Registry",
        trTerm: "Ticaret Sicili",
        question: "Are Trade Registry records public?",
        excerpt: "The Trade Registry is an official public record system in Turkey where merchants and companies must register their fundamental corporate information, ensuring transparency and legal certainty.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "signature-circular",
        term: "Signature Circular",
        trTerm: "İmza Sirküleri",
        question: "Is a signature circular always required?",
        excerpt: "A signature circular is a notarized document displaying the specimen signatures of a company's authorized representatives, proving their authority to bind the company.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "registration",
        term: "Registration",
        trTerm: "Tescil",
        question: "What is the legal effect of registration?",
        excerpt: "Registration refers to the formal recording of specific legal facts or corporate actions (like company formation or board elections) into official registries, such as the Trade Registry.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "announcement",
        term: "Announcement / Publication",
        trTerm: "İlan",
        question: "What actions must be announced?",
        excerpt: "Publication refers to the legal requirement to announce specific corporate actions in the Turkish Trade Registry Gazette to inform third parties and creditors.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "board-of-partners",
        term: "Board of Partners",
        trTerm: "Ortaklar Kurulu",
        question: "What decisions does the Board of Partners make?",
        excerpt: "The Board of Partners is the supreme decision-making body in a Limited Liability Company (Limited Şirket), equivalent to the General Assembly in a Joint-Stock Company.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "circumvention-of-law",
        term: "Circumvention of Law",
        trTerm: "Peçeleme",
        question: "Is circumvention of law illegal?",
        excerpt: "Circumvention of law (Peçeleme) occurs when parties use a legally valid transaction to bypass a mandatory legal prohibition, effectively achieving a forbidden outcome.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "piercing-the-corporate-veil",
        term: "Piercing the Corporate Veil",
        trTerm: "Tüzel Kişilik Perdesinin Aralanması",
        question: "When do courts pierce the corporate veil?",
        excerpt: "An exceptional legal doctrine allowing courts to ignore limited corporate liability and hold shareholders personally liable if the corporate form is abused to defraud creditors.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "capital-commitment",
        term: "Capital Commitment",
        trTerm: "Sermaye Taahhüdü",
        question: "When must capital commitments be paid?",
        excerpt: "Capital commitment is the legally binding promise made by shareholders to contribute a specific amount of capital to a company during incorporation or a capital increase.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "pre-emption-right",
        term: "Pre-emption Right",
        trTerm: "Rüçhan Hakkı",
        question: "Can pre-emption rights be restricted?",
        excerpt: "Pre-emption right allows existing shareholders to maintain their proportional ownership by having the first right to purchase newly issued shares during a capital increase.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "registered-shares",
        term: "Registered Shares",
        trTerm: "Nama Yazılı Pay",
        question: "Can transfer of registered shares be restricted?",
        excerpt: "Registered shares are corporate shares issued in the name of a specific person and recorded in the company's share ledger. Their transfer requires endorsement and ledger registration.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "bearer-shares",
        term: "Bearer Shares",
        trTerm: "Hamiline Yazılı Pay",
        question: "Are there new tracking rules for bearer shares?",
        excerpt: "Bearer shares do not contain the owner's name; whoever physically holds the share certificate is deemed the owner. Their transfer simply requires handing over possession.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "dividend-right-certificate",
        term: "Dividend Right Certificate",
        trTerm: "İntifa Senedi",
        question: "Who typically receives dividend right certificates?",
        excerpt: "These are certificates that do not represent share capital or grant voting rights, but provide the holder with financial rights, such as a share of the company's net profit.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "squeeze-out-right",
        term: "Squeeze-out Right",
        trTerm: "Çıkarma Hakkı",
        question: "Why is the squeeze-out right used?",
        excerpt: "A mechanism in M&A law allowing a controlling shareholder (usually holding over 98%) to force minority shareholders to sell their shares at a fair price, taking the company private.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "sell-out-right",
        term: "Sell-out Right",
        trTerm: "Satma Hakkı",
        question: "When can minority shareholders use this right?",
        excerpt: "The counterpart to the squeeze-out, this gives minority shareholders the right to demand that the controlling shareholder purchase their shares at a fair price.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "tag-along-right",
        term: "Tag-Along Right",
        trTerm: "Birlikte Satma Hakkı",
        question: "Where are tag-along rights defined?",
        excerpt: "A contractual right protecting minority shareholders. If the majority shareholder sells their stake, minority shareholders can join the transaction and sell their shares under the same terms.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "drag-along-right",
        term: "Drag-Along Right",
        trTerm: "Birlikte Satışa Zorlama Hakkı",
        question: "What is the benefit of a drag-along right?",
        excerpt: "A contractual right allowing a majority shareholder to force minority shareholders to join in the sale of the company to a third party on the same terms.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "right-of-first-refusal",
        term: "Right of First Refusal",
        trTerm: "Ön Alım Hakkı",
        question: "Is right of first refusal recognized for real estate?",
        excerpt: "A contractual right requiring a shareholder who wishes to sell their shares to a third party to first offer those shares to existing shareholders on the exact same terms.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "right-of-first-offer",
        term: "Right of First Offer",
        trTerm: "İlk Teklif Hakkı",
        question: "How does it differ from Right of First Refusal?",
        excerpt: "A contractual obligation where a shareholder looking to sell must first ask existing shareholders to make an offer for the shares before negotiating with outside parties.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "option",
        term: "Option",
        trTerm: "Opsiyon",
        question: "Are options commonly used in Turkish M&A?",
        excerpt: "A financial derivative or contractual right (but not obligation) to buy or sell an asset at a predetermined price within a specific timeframe.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "call-option",
        term: "Call Option",
        trTerm: "Alım Opsiyonu",
        question: "How are call options used in joint ventures?",
        excerpt: "A contractual right granting the holder the option to purchase shares or assets at an agreed-upon price within a specific period.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "put-option",
        term: "Put Option",
        trTerm: "Satım Opsiyonu",
        question: "Why would an investor demand a put option?",
        excerpt: "A contractual right granting the holder the option to force another party to buy their shares or assets at a predetermined price.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "loan-agreement",
        term: "Loan Agreement",
        trTerm: "Kredi Sözleşmesi",
        question: "What governs commercial loans in Turkey?",
        excerpt: "A formal contract between a lender and borrower detailing the principal loan amount, interest rates, repayment schedule, and covenants.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "syndicated-loan",
        term: "Syndicated Loan",
        trTerm: "Sendikasyon Kredisi",
        question: "Who uses syndicated loans?",
        excerpt: "A large loan provided by a group of lenders (a syndicate) to a single borrower, distributing the credit risk among the participating banks.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "project-finance",
        term: "Project Finance",
        trTerm: "Proje Finansmanı",
        question: "What secures project finance?",
        excerpt: "The long-term financing of infrastructure or industrial projects based upon the projected cash flows of the project rather than the balance sheets of its sponsors.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "assignment",
        term: "Assignment",
        trTerm: "Temlik",
        question: "Does assignment require the debtor's consent?",
        excerpt: "The legal transfer of a right, property, or claim from one party (assignor) to another (assignee), frequently used for transferring receivables.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "assignment-of-receivables",
        term: "Assignment of Receivables",
        trTerm: "Alacağın Devri",
        question: "Can future receivables be assigned?",
        excerpt: "A specific form of assignment where a creditor transfers their right to collect a debt to a third party. It must be executed in writing under Turkish Law.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "assumption-of-debt",
        term: "Assumption of Debt",
        trTerm: "Borcun Üstlenilmesi",
        question: "Does assumption of debt require the creditor's consent?",
        excerpt: "A legal process where a third party takes over a debtor's obligation, relieving the original debtor of their liability.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "surety",
        term: "Surety",
        trTerm: "Kefalet",
        question: "What are the formal requirements for a surety agreement?",
        excerpt: "A personal guarantee where a third party (the surety) undertakes to pay the creditor if the primary debtor fails to fulfill their obligation.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "aval",
        term: "Aval",
        trTerm: "Aval",
        question: "How is an aval given?",
        excerpt: "Aval is a specialized form of guarantee used exclusively for negotiable instruments (like bills of exchange), where a third party guarantees payment on behalf of one of the signatories.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "endorsement",
        term: "Endorsement",
        trTerm: "Ciro",
        question: "What is a blank endorsement?",
        excerpt: "The act of signing the back of a negotiable instrument (like a cheque or promissory note) to transfer the rights inherent in the instrument to another party.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "bill-of-exchange",
        term: "Bill of Exchange",
        trTerm: "Poliçe",
        question: "Are bills of exchange common in Turkey?",
        excerpt: "A written, unconditional order by one party (drawer) directing another party (drawee) to pay a specific sum of money to a third party (payee) at a set future date.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "cheque",
        term: "Cheque",
        trTerm: "Çek",
        question: "What happens if a cheque bounces in Turkey?",
        excerpt: "A commercial negotiable instrument ordering a bank to pay a specific amount of money from a person's account to the bearer or named payee.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "promissory-note",
        term: "Promissory Note",
        trTerm: "Bono",
        question: "Are promissory notes widely used in Turkey?",
        excerpt: "A promissory note (Bono) is a written promise by one party (the maker) to pay a specific sum of money to another (the payee) at a determined future date.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "negotiable-instruments",
        term: "Negotiable Instruments",
        trTerm: "Kambiyo Senedi",
        question: "What is the advantage of a negotiable instrument?",
        excerpt: "Negotiable instruments are specialized documents guaranteeing the payment of a specific amount of money, primarily encompassing cheques, bills of exchange, and promissory notes under Turkish law.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "presentation",
        term: "Presentation",
        trTerm: "İbraz",
        question: "What is the presentation period for cheques in Turkey?",
        excerpt: "Presentation is the formal act of physically or electronically presenting a negotiable instrument (like a cheque) to the bank or drawee for payment within legally mandated timeframes.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "protest",
        term: "Protest",
        trTerm: "Protesto",
        question: "Is a protest always required?",
        excerpt: "A formal, notarized declaration attesting that a negotiable instrument was presented for payment or acceptance and was dishonored.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "in-kind-capital",
        term: "In-Kind Capital",
        trTerm: "Ayni Sermaye",
        question: "Can any asset be contributed as in-kind capital?",
        excerpt: "Capital contributed to a company in forms other than cash, such as real estate, machinery, intellectual property, or existing businesses, subject to court-appointed valuation.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "mortgage",
        term: "Mortgage",
        trTerm: "İpotek",
        question: "How is a mortgage enforced?",
        excerpt: "A mortgage (İpotek) is a real right established on immovable property (real estate) to secure the payment of a debt, requiring official registration at the Land Registry.",
        tags: ["real-estate"],
        relatedTerms: []
    },
    {
        id: "pledge",
        term: "Pledge",
        trTerm: "Rehin",
        question: "Can a pledge be established without physical delivery?",
        excerpt: "A pledge is a security interest created over movable property or rights to secure a debt. Traditionally, the pledged asset must be physically delivered to the creditor.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "commercial-enterprise-pledge",
        term: "Commercial Enterprise Pledge",
        trTerm: "Ticari İşletme Rehni",
        question: "Where is a commercial enterprise pledge registered?",
        excerpt: "A specialized pledge allowing a merchant to use their entire commercial enterprise (including machinery, inventory, and trade name) as collateral without handing over physical possession.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "notice-warning",
        term: "Notice / Warning",
        trTerm: "İhtarname",
        question: "Why use a Notary for an Ihtarname?",
        excerpt: "A formal legal notice, typically sent via a Notary Public, to formally demand the performance of an obligation, declare default, or terminate a contract.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "negative-declaratory-action",
        term: "Negative Declaratory Action",
        trTerm: "Menfi Tespit",
        question: "Does a negative declaratory action stop debt execution?",
        excerpt: "A lawsuit filed by a debtor seeking a binding court declaration that they do not actually owe a specific debt claimed by the creditor.",
        tags: ["dispute-resolution"],
        relatedTerms: []
    },
    {
        id: "action-for-restitution",
        term: "Action for Restitution",
        trTerm: "İstirdat",
        question: "When must an action for restitution be filed?",
        excerpt: "A lawsuit to recover money that a debtor was forced to pay during execution proceedings for a debt that they legally did not owe.",
        tags: ["dispute-resolution"],
        relatedTerms: []
    },
    {
        id: "annulment-of-objection",
        term: "Annulment of Objection",
        trTerm: "İtirazın İptali",
        question: "Is there a penalty for unjust objections?",
        excerpt: "A lawsuit filed by a creditor after a debtor formally objects to and halts an execution proceeding without judgment, seeking to annul the objection and resume execution.",
        tags: ["dispute-resolution"],
        relatedTerms: []
    },
    {
        id: "lifting-of-objection",
        term: "Lifting of Objection",
        trTerm: "İtirazın Kaldırılması",
        question: "Can any debt be proven in this procedure?",
        excerpt: "A faster, narrower alternative to Annulment of Objection, applied directly to the Execution Court, but only permissible if the creditor possesses strict statutory proof of the debt (like a notarized document).",
        tags: ["dispute-resolution"],
        relatedTerms: []
    },
    {
        id: "table-of-ranks",
        term: "Table of Ranks",
        trTerm: "Sıra Cetveli",
        question: "Who gets paid first in the Table of Ranks?",
        excerpt: "A ranked list prepared by the execution or bankruptcy office determining the priority order in which competing creditors will be paid from the liquidation of a debtor's assets.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "actio-pauliana",
        term: "Actio Pauliana / Cancellation of Disposition",
        trTerm: "Tasarrufun İptali",
        question: "What transfers can be canceled?",
        excerpt: "A lawsuit allowing creditors to annul fraudulent asset transfers made by a debtor aiming to hide assets and evade debt collection.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "trustee-receiver",
        term: "Trustee / Receiver",
        trTerm: "Kayyım",
        question: "When is a trustee appointed to a company?",
        excerpt: "A court-appointed official tasked with temporarily managing a company, an estate, or property when the regular management is incapacitated, deadlocked, or legally suspended.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "concordat-commissioner",
        term: "Concordat Commissioner",
        trTerm: "Konkordato Komiseri",
        question: "Does the Commissioner run the company?",
        excerpt: "An independent expert appointed by the commercial court to supervise a debtor's business operations and protect creditors' interests during the concordat restructuring period.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "bankruptcy-administration",
        term: "Bankruptcy Administration",
        trTerm: "İflas İdaresi",
        question: "Who elects the Bankruptcy Administration?",
        excerpt: "The official body formed after a bankruptcy declaration, responsible for representing the bankrupt estate, collecting assets, assessing claims, and distributing proceeds to creditors.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "registration-to-the-bankruptcy-estate",
        term: "Registration to the Bankruptcy Estate",
        trTerm: "Masaya Kayıt",
        question: "Is there a deadline for registering claims?",
        excerpt: "The formal process where creditors submit their claims and supporting evidence to the bankruptcy administration to be included in the liquidation distributions.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "doubtful-receivable",
        term: "Doubtful Receivable",
        trTerm: "Şüpheli Alacak",
        question: "Can any unpaid invoice be deemed a doubtful receivable?",
        excerpt: "A commercial receivable that is in the litigation or execution phase and whose collection has become uncertain, allowing businesses to set aside a tax-deductible provision.",
        tags: ["tax-law"],
        relatedTerms: []
    },
    {
        id: "netting",
        term: "Netting",
        trTerm: "Mahsuplaşma",
        question: "How does netting differ from set-off?",
        excerpt: "The accounting and legal process of consolidating multiple mutual obligations or financial positions between two parties to arrive at a single net payable amount.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "set-off",
        term: "Set-Off",
        trTerm: "Takas",
        question: "Can set-off be executed automatically?",
        excerpt: "The legal right to extinguish mutual, due, and homogenous debts between two parties up to the amount of the smaller debt, simply by unilateral declaration.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "reconciliation",
        term: "Reconciliation",
        trTerm: "Mutabakat",
        question: "What happens if a reconciliation statement is ignored?",
        excerpt: "The process where two commercial parties review and formally agree upon their mutual account balances, preventing future disputes over amounts owed.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "invoice",
        term: "Invoice",
        trTerm: "Fatura",
        question: "What is the legal deadline to object to an invoice?",
        excerpt: "A commercial document issued by a seller to a buyer detailing the goods or services provided, prices, and taxes, serving as primary evidence of a commercial transaction.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "waybill",
        term: "Waybill",
        trTerm: "İrsaliye",
        question: "Is an e-Waybill mandatory in Turkey?",
        excerpt: "A dispatch note or delivery document that strictly tracks the physical movement and delivery of goods from a supplier to a buyer, separate from the financial invoice.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "current-account",
        term: "Current Account",
        trTerm: "Cari Hesap",
        question: "How often is a current account settled?",
        excerpt: "A commercial arrangement where two parties agree that their mutual receivables arising from continuous transactions will not be claimed individually but netted out periodically.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "advance-payment",
        term: "Advance Payment",
        trTerm: "Avans",
        question: "Must an advance payment be returned if the contract fails?",
        excerpt: "A partial payment made by a buyer to a seller before the goods are delivered or services are fully rendered, acting as financing or security for the contract.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "down-payment",
        term: "Down Payment",
        trTerm: "Peşinat",
        question: "Is a down payment refundable?",
        excerpt: "An initial, upfront payment made at the time of finalizing a contract, establishing commitment. In Turkish law, it is often treated as earnest money or a penalty depending on drafting.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "progress-payment",
        term: "Progress Payment",
        trTerm: "Hakediş",
        question: "Who approves a progress payment?",
        excerpt: "Periodic payments made to contractors in construction or long-term service agreements based on the certified completion of specific milestones or work percentages.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "universal-succession",
        term: "Universal Succession",
        trTerm: "Külli Halefiyet",
        question: "When does universal succession occur in corporate law?",
        excerpt: "A legal principle where an entity (or heir) inherits the entirety of another's rights, assets, and liabilities automatically and completely, without needing individual transfers.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "loan-of-consumption",
        term: "Loan of Consumption",
        trTerm: "Karz",
        question: "Is interest mandatory in a Karz agreement?",
        excerpt: "A specific type of loan agreement where the lender transfers ownership of money or fungible goods to the borrower, who is obligated to return the same quantity and quality.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "source-code",
        term: "Source Code",
        trTerm: "Kaynak Kod",
        question: "Who owns the source code created by an employee?",
        excerpt: "The human-readable version of computer software. Under Turkish copyright law, source code is strictly protected as a literary work.",
        tags: ["intellectual-property"],
        relatedTerms: []
    },
    {
        id: "service-level-agreement",
        term: "Service Level Agreement (SLA)",
        trTerm: "Hizmet Seviyesi Sözleşmesi",
        question: "What happens if SLA metrics are not met?",
        excerpt: "A contract specifying the exact standards of performance, uptime, and quality metrics a service provider must deliver, commonly used in IT and outsourcing.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "outsourcing",
        term: "Outsourcing",
        trTerm: "Dış Kaynak",
        question: "Does outsourcing trigger employee transfer rules?",
        excerpt: "The business practice of contracting external specialized providers to handle specific business functions (like IT, payroll, or customer service) previously done in-house.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "declaration",
        term: "Declaration",
        trTerm: "Beyanname",
        question: "What are the common corporate tax declarations?",
        excerpt: "A formal, legally binding statement or document submitted to governmental authorities, most commonly referring to tax or customs declarations.",
        tags: ["tax-law"],
        relatedTerms: []
    },
    {
        id: "accrual",
        term: "Accrual",
        trTerm: "Tahakkuk",
        question: "What is an accrual slip (Tahakkuk Fişi)?",
        excerpt: "The formal assessment and establishment of a tax liability by the tax authority, making the calculated tax officially due and payable.",
        tags: ["tax-law"],
        relatedTerms: []
    },
    {
        id: "tax-loss",
        term: "Tax Loss",
        trTerm: "Vergi Ziyaı",
        question: "What is the penalty for tax loss?",
        excerpt: "A tax penalty mechanism triggered when a taxpayer's failure to comply with obligations causes the State to lose tax revenue or receive it late.",
        tags: ["tax-law"],
        relatedTerms: []
    },
    {
        id: "special-irregularity",
        term: "Special Irregularity",
        trTerm: "Özel Usulsüzlük",
        question: "Is special irregularity separate from tax loss?",
        excerpt: "Administrative tax penalties levied for violating strict procedural and documentation rules, such as failing to issue an invoice, regardless of whether tax revenue was lost.",
        tags: ["tax-law"],
        relatedTerms: []
    },
    {
        id: "independent-audit",
        term: "Independent Audit",
        trTerm: "Bağımsız Denetim",
        question: "Are all Turkish companies subject to independent audit?",
        excerpt: "An objective examination of a company's financial statements by licensed external auditors to ensure compliance with Turkish Financial Reporting Standards (TFRS).",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "parent-company",
        term: "Parent Company",
        trTerm: "Hakim Şirket",
        question: "Can a parent company be held liable for a subsidiary's debts?",
        excerpt: "A company that exerts direct or indirect control over another entity (the subsidiary), usually by holding the majority of voting rights or the right to appoint the board.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "share-ledger",
        term: "Share Ledger",
        trTerm: "Pay Defteri",
        question: "Is registration in the share ledger mandatory?",
        excerpt: "The official statutory book maintained by a company recording the names, addresses, and shareholdings of its registered shareholders.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "board-of-directors-resolution-book",
        term: "Board of Directors Resolution Book",
        trTerm: "Yönetim Kurulu Karar Defteri",
        question: "Must every decision be recorded here?",
        excerpt: "A mandatory, notarized corporate book where all official decisions and resolutions taken by the company's Board of Directors are recorded and signed.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "inventory",
        term: "Inventory",
        trTerm: "Envanter",
        question: "Is the inventory legally binding?",
        excerpt: "A detailed, itemized record of a company's commercial assets, liabilities, goods, and raw materials, required to be prepared at the establishment and end of each fiscal year.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "balance-sheet",
        term: "Balance Sheet",
        trTerm: "Bilanço",
        question: "Who approves the balance sheet?",
        excerpt: "A core financial statement summarizing a company's assets, liabilities, and shareholders' equity at a specific point in time, reflecting its financial health.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "consortium",
        term: "Consortium",
        trTerm: "Konsorsiyum",
        question: "How does a consortium differ from a joint venture?",
        excerpt: "A collaborative association of two or more entities pooling their resources to execute a specific, large-scale project while remaining independent and separately liable for their distinct portions of work.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "ordinary-partnership",
        term: "Ordinary Partnership",
        trTerm: "Adi Ortaklık",
        question: "Does an ordinary partnership have a trade name?",
        excerpt: "The simplest form of business partnership under the Turkish Code of Obligations, lacking a separate legal personality, where partners are jointly and unlimitedly liable for partnership debts.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "factoring",
        term: "Factoring",
        trTerm: "Faktoring",
        question: "Is factoring highly regulated in Turkey?",
        excerpt: "A financial transaction where a business sells its accounts receivable (invoices) to a third-party financial institution (factor) at a discount to secure immediate cash flow.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "singular-succession",
        term: "Singular Succession",
        trTerm: "Cüzi Halefiyet",
        question: "What is an example of singular succession?",
        excerpt: "A legal transfer mechanism where only a specific, individual asset, right, or debt is transferred from one party to another, as opposed to an entire estate.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "letter-of-intent",
        term: "Letter of Intent (LOI)",
        trTerm: "Niyet Mektubu",
        question: "Is an LOI legally binding in Turkey?",
        excerpt: "A preliminary document outlining the basic terms and understandings of an anticipated contract or M&A transaction before a binding final agreement is drafted.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "absolute-nullity",
        term: "Absolute Nullity",
        trTerm: "Mutlak Butlan",
        question: "Can a contract with absolute nullity be fixed later?",
        excerpt: "The severe legal status of a contract that is entirely void from its inception because it violates mandatory laws, public morality, or lacks essential form requirements.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "construction-in-return-for-land-share",
        term: "Construction in Return for Land Share Agreement",
        trTerm: "Arsa Payı Karşılığı İnşaat Sözleşmesi",
        question: "Is this agreement legally binding if not notarized?",
        excerpt: "A construction agreement where the landowner transfers a certain share of the land to the contractor, and the contractor undertakes to construct a building and deliver independent units in return. It is the most common construction model in Turkey.",
        tags: ["real-estate"],
        relatedTerms: []
    },
    {
        id: "revenue-sharing-construction-agreement",
        term: "Revenue Sharing Construction Agreement",
        trTerm: "Hasılat (Gelir) Paylaşımlı İnşaat Sözleşmesi",
        question: "What is the main advantage of revenue sharing models?",
        excerpt: "A contract model where the contractor develops and sells a project on the land with their own financing, and a certain percentage of the total revenue obtained is paid to the landowner.",
        tags: ["real-estate"],
        relatedTerms: []
    },
    {
        id: "subcontractor-agreement",
        term: "Subcontractor Agreement",
        trTerm: "Taşeron (Alt Yüklenici) Sözleşmesi",
        question: "Is the main contractor still liable to the client for the subcontractor's work?",
        excerpt: "An agreement where the main contractor delegates a specific part of a project (such as electrical, mechanical, or excavation work) to another specialized company.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "financial-leasing-agreement",
        term: "Financial Leasing Agreement",
        trTerm: "Finansal Kiralama (Leasing) Sözleşmesi",
        question: "What assets can be subject to financial leasing in Turkey?",
        excerpt: "A financing agreement where the leasing company purchases an asset upon the lessee's request and leases it to them, granting the lessee the right to acquire ownership at the end of the term.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "brokerage-agreement",
        term: "Brokerage Agreement",
        trTerm: "Simsarlık (Tellallık) Sözleşmesi",
        question: "When is the broker entitled to their fee?",
        excerpt: "A contract where the broker undertakes to provide an opportunity or mediate for the establishment of a contract between parties, earning a fee if the contract is successfully formed (e.g., real estate agent agreements).",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "commission-agreement",
        term: "Commission Agreement",
        trTerm: "Komisyon Sözleşmesi",
        question: "What is the difference between a broker and a commission agent?",
        excerpt: "An agreement where a commission agent undertakes to buy or sell negotiable instruments or movable goods in their own name but on the account of the principal, in exchange for a fee.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "carriage-agreement",
        term: "Carriage Agreement",
        trTerm: "Taşıma (Navlun/Lojistik) Sözleşmesi",
        question: "What is the liability of the carrier for damaged goods?",
        excerpt: "An agreement where the carrier undertakes to safely transport goods or passengers from one place to another, and the sender agrees to pay the freight (carriage fee) in return.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "consignment-sale-agreement",
        term: "Consignment Sale Agreement",
        trTerm: "Konsinye Satış Sözleşmesi",
        question: "Who bears the risk of loss in a consignment agreement?",
        excerpt: "An agreement where a manufacturer or wholesaler leaves goods with a retailer for sale without transferring ownership. The retailer only pays for the goods that are successfully sold.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "barter-agreement",
        term: "Barter Agreement",
        trTerm: "Barter (Trampa/Mal Değişim) Sözleşmesi",
        question: "Does a barter agreement involve tax obligations in Turkey?",
        excerpt: "An agreement where a good or service is directly exchanged for another good or service without using cash money.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "know-how-agreement",
        term: "Know-How Agreement",
        trTerm: "Know-How (Bilgi Birikimi) Sözleşmesi",
        question: "How is know-how protected under Turkish law?",
        excerpt: "A contract where a business grants another enterprise the right to use its confidential, commercially valuable technical or administrative knowledge and experience in exchange for a fee.",
        tags: ["intellectual-property"],
        relatedTerms: []
    },
    {
        id: "software-development-agreement",
        term: "Software Development Agreement",
        trTerm: "Yazılım Geliştirme Sözleşmesi",
        question: "Who owns the intellectual property of the custom software?",
        excerpt: "A specific type of contract where a software developer commits to designing and coding a custom computer program or application tailored to the client's needs.",
        tags: ["intellectual-property"],
        relatedTerms: []
    },
    {
        id: "escrow-agreement",
        term: "Escrow Agreement",
        trTerm: "Escrow (Emanet) Sözleşmesi",
        question: "Are escrow agreements recognized in Turkish Law?",
        excerpt: "An agreement ensuring that assets, such as source codes or M&A down payments, are securely held by an independent third party until specific contractual conditions are met.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "loan-for-use-agreement",
        term: "Loan for Use Agreement",
        trTerm: "Ariyet (Kullanım Ödüncü) Sözleşmesi",
        question: "What is the difference between loan for use and rental agreements?",
        excerpt: "An agreement where a person allows another to temporarily use their movable or immovable property free of charge, with the condition that the exact same property is returned at the end.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "deposit-agreement",
        term: "Deposit Agreement",
        trTerm: "Vedia (Saklama) Sözleşmesi",
        question: "Can the depositee use the entrusted property?",
        excerpt: "A contract where the depositee agrees to keep a movable property entrusted to them by the depositor in a safe place and return it upon request.",
        tags: ["contract-law"],
        relatedTerms: []
    }
];

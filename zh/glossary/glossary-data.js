// Turkish Law Glossary Data - 100 FAQ-Based Entries
// Each entry contains: id, term, question, excerpt, tags, relatedTerms

const glossaryData = [
    // A
    {
        id: "anonim-sirket",
        term: "股份有限公司 (Anonim Şirket, A.Ş.)", sourceTerm: "Anonim Şirket (A.Ş.)",
        question: "什么是 Anonim Şirket, 它在土耳其如何运作?", sourceQuestion: "What is an Anonim Şirket and how does it work in Turkey?",
        excerpt: "股份有限公司 (A.Ş.) 是土耳其大型企业最常见的公司结构, 提供有限责任保护并可发行股份.", sourceExcerpt: "A joint-stock company (A.Ş.) is the most common corporate structure for large businesses in Turkey, offering limited liability and the ability to issue shares.",
        tags: ["company-law"],
        relatedTerms: ["limited-sirket", "company-formation", "shareholders-agreement"]
    },
    {
        id: "arbitration-turkey",
        term: "土耳其仲裁", sourceTerm: "Arbitration in Turkey",
        trTerm: "Türkiye'de Tahkim",
        question: "土耳其法律下的商事仲裁如何运作?", sourceQuestion: "How does commercial arbitration work under Turkish law?",
        excerpt: "土耳其承认国内及国际仲裁. 土耳其国际仲裁法与 UNCITRAL 示范法相衔接, 适用于跨境争议.", sourceExcerpt: "Turkey recognizes both domestic and international arbitration. The Turkish International Arbitration Law aligns with UNCITRAL Model Law for cross-border disputes.",
        tags: ["dispute-resolution", "international-trade"],
        relatedTerms: ["mediation", "litigation-turkey", "enforcement-foreign-judgments"]
    },
    {
        id: "agency-agreement",
        term: "代理协议", sourceTerm: "Agency Agreement",
        trTerm: "Acentelik Sözleşmesi",
        question: "土耳其代理协议须符合哪些法律要求?", sourceQuestion: "What are the legal requirements for agency agreements in Turkey?",
        excerpt: "土耳其代理协议受土耳其商法典规管. 在满足特定法定条件时, 代理人可能有权获得客户资源补偿.", sourceExcerpt: "Agency agreements in Turkey are governed by the Turkish Commercial Code. Agents may be entitled to portfolio compensation if specific statutory conditions are met.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["distribution-agreement", "commercial-representative", "franchise-agreement"]
    },
    {
        id: "anti-corruption",
        term: "反腐败合规", sourceTerm: "Anti-Corruption Compliance",
        trTerm: "Yolsuzlukla Mücadele Uyumluluğu",
        question: "在土耳其经营的企业适用哪些反腐败法律?", sourceQuestion: "What anti-corruption laws apply to businesses in Turkey?",
        excerpt: "土耳其反腐败框架包括土耳其刑法典的有关规定, 并与 OECD《反贿赂公约》对外国企业的要求相衔接.", sourceExcerpt: "Turkey's anti-corruption framework includes Turkish Penal Code provisions and aligns with OECD Anti-Bribery Convention requirements for foreign businesses.",
        tags: ["commercial-law", "international-trade"],
        relatedTerms: ["compliance-program", "due-diligence", "fcpa-uk-bribery"]
    },
    {
        id: "annual-leave",
        term: "年休假权利", sourceTerm: "Annual Leave Entitlement",
        trTerm: "Yıllık İzin Hakkı",
        question: "土耳其员工享有多少天年休假?", sourceQuestion: "How much annual leave are employees entitled to in Turkey?",
        excerpt: "土耳其劳动法规定, 工龄 1-5 年者至少享有 14 天年休假, 工龄 5-15 年者增至 20 天, 工龄 15+ 年者为 26 天.", sourceExcerpt: "Turkish Labor Law mandates minimum 14 days annual leave for 1-5 years of service, increasing to 20 days for 5-15 years, and 26 days for 15+ years.",
        tags: ["employment"],
        relatedTerms: ["labor-law", "employment-contract", "severance-pay"]
    },
    // B
    {
        id: "branch-office",
        term: "分支机构", sourceTerm: "Branch Office",
        trTerm: "Şube",
        question: "外国公司如何在土耳其设立分支机构?", sourceQuestion: "How can a foreign company establish a branch office in Turkey?",
        excerpt: "外国公司可通过商业登记在土耳其设立分支机构. 分支机构不具有独立法律人格, 而是母公司的延伸.", sourceExcerpt: "Foreign companies can establish branch offices in Turkey through Trade Registry registration. Branches are not separate legal entities but extensions of the parent company.",
        tags: ["company-law", "international-trade"],
        relatedTerms: ["liaison-office", "subsidiary", "company-formation"]
    },
    {
        id: "bill-of-lading",
        term: "提单", sourceTerm: "Bill of Lading",
        trTerm: "Konişmento",
        question: "提单在土耳其贸易中具有什么法律意义?", sourceQuestion: "What is the legal significance of a bill of lading in Turkish trade?",
        excerpt: "提单具有收据、运输合同及物权凭证的作用. 土耳其商法典承认其为可转让票据.", sourceExcerpt: "A bill of lading serves as a receipt, contract of carriage, and document of title. Turkish Commercial Code recognizes it as a negotiable instrument.",
        tags: ["international-trade", "commercial-law"],
        relatedTerms: ["incoterms", "letter-of-credit", "customs-procedures"]
    },
    {
        id: "board-of-directors",
        term: "董事会", sourceTerm: "Board of Directors",
        trTerm: "Yönetim Kurulu",
        question: "土耳其董事会成员有哪些职责及责任?", sourceQuestion: "What are the duties and liabilities of board members in Turkey?",
        excerpt: "土耳其公司董事会成员负有忠实及勤勉等信义义务. 他们可能就过失管理所造成的损害承担个人责任.", sourceExcerpt: "Board members of Turkish companies have fiduciary duties including loyalty and care. They may be personally liable for damages caused by negligent management.",
        tags: ["company-law"],
        relatedTerms: ["anonim-sirket", "corporate-governance", "shareholders-agreement"]
    },
    {
        id: "bilateral-investment-treaty",
        term: "双边投资协定 (BIT)", sourceTerm: "Bilateral Investment Treaty (BIT)",
        trTerm: "İkili Yatırım Anlaşması (İYA)",
        question: "双边投资协定如何保护在土耳其的外国投资者?", sourceQuestion: "How do bilateral investment treaties protect foreign investors in Turkey?",
        excerpt: "土耳其与超过 80 个国家签署了双边投资协定, 提供公平待遇、免遭征收及诉诸国际仲裁等保护.", sourceExcerpt: "Turkey has signed BITs with over 80 countries, providing protections like fair treatment, protection from expropriation, and access to international arbitration.",
        tags: ["international-trade", "dispute-resolution"],
        relatedTerms: ["foreign-investment", "arbitration-turkey", "expropriation"]
    },
    // C
    {
        id: "capital-increase",
        term: "增资", sourceTerm: "Capital Increase",
        trTerm: "Sermaye Artırımı",
        question: "土耳其公司如何进行增资?", sourceQuestion: "How is a capital increase executed in a Turkish company?",
        excerpt: "增资须经股东批准并办理商业登记. 土耳其商法典允许现金及实物出资.", sourceExcerpt: "Capital increases require shareholder approval and Trade Registry registration. Both cash and in-kind contributions are permitted under Turkish Commercial Code.",
        tags: ["company-law"],
        relatedTerms: ["anonim-sirket", "limited-sirket", "shareholders-agreement"]
    },
    {
        id: "commercial-lease",
        term: "商业租赁协议", sourceTerm: "Commercial Lease Agreement",
        trTerm: "Ticari Kira Sözleşmesi",
        question: "土耳其法律下商业租赁有哪些主要条款?", sourceQuestion: "What are the key provisions of commercial leases under Turkish law?",
        excerpt: "商业租赁受土耳其债务法典规管. 承租人享有较强保护, 出租人终止租赁时须遵循特定程序.", sourceExcerpt: "Commercial leases are governed by Turkish Code of Obligations. Tenants have strong protections, and landlords must follow specific procedures for termination.",
        tags: ["real-estate", "contract-law"],
        relatedTerms: ["lease-termination", "rent-adjustment", "property-transfer"]
    },
    {
        id: "company-formation",
        term: "公司设立", sourceTerm: "Company Formation",
        trTerm: "Şirket Kuruluşu",
        question: "在土耳其设立公司有哪些步骤?", sourceQuestion: "What are the steps to establish a company in Turkey?",
        excerpt: "公司设立涉及拟订公司章程、取得税号、存入资本及办理商业登记. 流程需要 3-5 个工作日.", sourceExcerpt: "Company formation involves preparing articles of association, obtaining tax IDs, depositing capital, and registering with the Trade Registry. Process takes 3-5 business days.",
        tags: ["company-law"],
        relatedTerms: ["anonim-sirket", "limited-sirket", "branch-office"]
    },
    {
        id: "competition-law",
        term: "竞争法", sourceTerm: "Competition Law",
        trTerm: "Rekabet Hukuku",
        question: "企业在土耳其须遵守哪些主要竞争法规则?", sourceQuestion: "What are the main competition law rules businesses must follow in Turkey?",
        excerpt: "土耳其竞争法禁止卡特尔及滥用市场支配地位, 并要求进行并购申报. 竞争管理局拥有广泛执法权力.", sourceExcerpt: "Turkish Competition Law prohibits cartels, abuse of dominance, and requires merger notification. The Competition Authority has broad enforcement powers.",
        tags: ["commercial-law"],
        relatedTerms: ["merger-control", "antitrust", "market-dominance"]
    },
    {
        id: "compliance-program",
        term: "合规方案", sourceTerm: "Compliance Program",
        trTerm: "Uyum Programı",
        question: "土耳其企业合规方案应包括哪些内容?", sourceQuestion: "What should a corporate compliance program include in Turkey?",
        excerpt: "有效的合规方案包括符合土耳其法规的书面政策、培训、报告机制、监督及纪律程序.", sourceExcerpt: "Effective compliance programs include written policies, training, reporting mechanisms, monitoring, and disciplinary procedures aligned with Turkish regulations.",
        tags: ["commercial-law", "data-protection"],
        relatedTerms: ["anti-corruption", "kvkk-compliance", "internal-audit"]
    },
    {
        id: "confidentiality-agreement",
        term: "保密协议 (NDA)", sourceTerm: "Confidentiality Agreement (NDA)",
        trTerm: "Gizlilik Sözleşmesi (NDA)",
        question: "土耳其法律如何执行保密协议?", sourceQuestion: "How are NDAs enforced under Turkish law?",
        excerpt: "土耳其法律承认保密协议. 违反协议可能导致合同违约金责任, 以及对披露所致损害承担侵权责任.", sourceExcerpt: "Turkish law recognizes confidentiality agreements. Breaches can result in contractual penalties and tort liability for damages caused by disclosure.",
        tags: ["contract-law", "intellectual-property"],
        relatedTerms: ["trade-secrets", "non-compete", "employment-contract"]
    },
    {
        id: "corporate-governance",
        term: "公司治理", sourceTerm: "Corporate Governance",
        trTerm: "Kurumsal Yönetim",
        question: "土耳其公司适用哪些公司治理要求?", sourceQuestion: "What corporate governance requirements apply to Turkish companies?",
        excerpt: "土耳其公司治理主要依据第 6102 号土耳其商法典, 公众公司还须遵守资本市场委员会 (CMB) 的公司治理规则.", sourceExcerpt: "Corporate governance in Turkey is primarily shaped by the Turkish Commercial Code No. 6102, while publicly held companies are also subject to Capital Markets Board (CMB) corporate governance rules.",
        tags: ["company-law"],
        relatedTerms: ["board-of-directors", "shareholders-agreement", "anonim-sirket"]
    },
    {
        id: "customs-procedures",
        term: "海关程序", sourceTerm: "Customs Procedures",
        trTerm: "Gümrük İşlemleri",
        question: "向土耳其进口货物有哪些主要海关程序?", sourceQuestion: "What are the main customs procedures for importing goods to Turkey?",
        excerpt: "进口程序通常包括电子报关、税则归类 (HS/GTIP)、海关估价、原产地确定、提交证明文件/许可, 以及缴纳关税/增值税.", sourceExcerpt: "Import procedures typically include an electronic customs declaration, tariff classification (HS/GTIP), customs valuation, origin determination, submission of supporting documents/permits, and payment of customs duties/VAT.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["customs-valuation", "tariff-classification", "free-trade-zones"]
    },
    {
        id: "customs-valuation",
        term: "海关估价", sourceTerm: "Customs Valuation",
        trTerm: "Gümrük Kıymeti",
        question: "土耳其如何确定进口货物的完税价格?", sourceQuestion: "How is customs value determined for imported goods in Turkey?",
        excerpt: "土耳其海关估价主要受第 4458 号土耳其海关法及次级立法规管, 适用 WTO 海关估价原则. 默认方法为成交价格法.", sourceExcerpt: "In Turkey, customs valuation is governed primarily by Turkish Customs Law No. 4458 and secondary legislation, applying WTO customs valuation principles. The default method is transaction value.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["customs-procedures", "transfer-pricing", "tariff-classification"]
    },
    // D
    {
        id: "data-controller",
        term: "数据控制者", sourceTerm: "Data Controller",
        trTerm: "Veri Sorumlusu",
        question: "数据控制者依据 KVKK 承担哪些义务?", sourceQuestion: "What are the obligations of a data controller under KVKK?",
        excerpt: "依据 KVKK, 数据控制者须履行告知 (隐私声明) 义务、采取适当安全措施、回应数据主体请求并处理数据泄露通知. VERBIS 注册义务取决于相关条件.", sourceExcerpt: "Under KVKK, data controllers must fulfill information (privacy notice) duties, take appropriate security measures, respond to data subject requests, and handle breach notifications. VERBIS registration is conditional.",
        tags: ["data-protection"],
        relatedTerms: ["kvkk-compliance", "data-processor", "personal-data"]
    },
    {
        id: "data-processor",
        term: "数据处理者", sourceTerm: "Data Processor",
        trTerm: "Veri İşleyen",
        question: "土耳其法律下数据控制者与数据处理者有何区别?", sourceQuestion: "What is the difference between data controller and processor under Turkish law?",
        excerpt: "依据 KVKK, 数据处理者代表数据控制者并按照其指示处理个人数据. 他们须实施适当的技术及组织安全措施.", sourceExcerpt: "Under KVKK, data processors process personal data on the controller’s behalf and instructions. They must implement appropriate technical and organisational security measures.",
        tags: ["data-protection"],
        relatedTerms: ["data-controller", "kvkk-compliance", "data-processing-agreement"]
    },
    {
        id: "debt-collection",
        term: "债务追收", sourceTerm: "Debt Collection",
        trTerm: "Alacak Tahsili",
        question: "土耳其债务追收如何进行?", sourceQuestion: "How does debt collection work in Turkey?",
        excerpt: "在土耳其, 可通过协商或执行局 (icra dairesi) 追收债务. ‘无判决执行’是追收金钱债务的简便方式.", sourceExcerpt: "Debt collection in Turkey can be pursued amicably or through enforcement offices (icra dairesi). 'Enforcement without judgment' is a streamlined method for monetary debts.",
        tags: ["commercial-law", "dispute-resolution"],
        relatedTerms: ["litigation-turkey", "enforcement-foreign-judgments", "commercial-lease"]
    },
    {
        id: "data-processing-agreement",
        term: "数据处理协议", sourceTerm: "Data Processing Agreement",
        trTerm: "Veri İşleme Sözleşmesi",
        question: "何时需要依据 KVKK 签订数据处理协议?", sourceQuestion: "When is a data processing agreement required under KVKK?",
        excerpt: "依据 KVKK, 聘用数据处理者时, 以书面数据处理协议 (或条款) 分配责任及安全措施属于最佳实践, 即使并不存在统一的强制格式.", sourceExcerpt: "A written data processing agreement (or clauses) allocating responsibilities and security measures is best practice under KVKK when engaging a processor, even if no single mandatory form exists.",
        tags: ["data-protection", "contract-law"],
        relatedTerms: ["data-controller", "data-processor", "kvkk-compliance"]
    },
    {
        id: "distribution-agreement",
        term: "分销协议", sourceTerm: "Distribution Agreement",
        trTerm: "Distribütörlük Sözleşmesi",
        question: "面向土耳其的分销协议应包括哪些内容?", sourceQuestion: "What should be included in a distribution agreement for Turkey?",
        excerpt: "分销协议通常规定区域、独家权、订货及供应条件、建议转售价格、知识产权/品牌使用、终止及竞争法合规.", sourceExcerpt: "Distribution agreements typically address territory, exclusivity, ordering and supply terms, recommended resale prices, IP/brand use, termination, and competition law compliance.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["agency-agreement", "franchise-agreement", "exclusive-dealing"]
    },
    {
        id: "due-diligence",
        term: "尽职调查", sourceTerm: "Due Diligence",
        trTerm: "Hukuki İnceleme (Due Diligence)",
        question: "土耳其并购交易的法律尽职调查包括哪些内容?", sourceQuestion: "What does legal due diligence involve in Turkish M&A transactions?",
        excerpt: "尽职调查涵盖公司文件、合同、诉讼、劳动用工、知识产权、房地产、环境及监管合规事项.", sourceExcerpt: "Due diligence covers corporate documents, contracts, litigation, employment, IP, real estate, environmental, and regulatory compliance matters.",
        tags: ["company-law", "commercial-law"],
        relatedTerms: ["mergers-acquisitions", "share-purchase", "asset-purchase"]
    },
    {
        id: "dispute-resolution-clause",
        term: "争议解决条款", sourceTerm: "Dispute Resolution Clause",
        trTerm: "Uyuşmazlık Çözüm Şartı",
        question: "土耳其合同应如何起草争议解决条款?", sourceQuestion: "How should dispute resolution clauses be drafted for Turkish contracts?",
        excerpt: "有效的争议解决条款应明确选择法院管辖或仲裁 (例如 ISTAC)、适用法律、仲裁地、语言及仲裁员人数.", sourceExcerpt: "Effective dispute resolution clauses clearly choose court jurisdiction or arbitration (e.g., ISTAC), governing law, seat of arbitration, language, and number of arbitrators.",
        tags: ["dispute-resolution", "contract-law"],
        relatedTerms: ["arbitration-turkey", "litigation-turkey", "mediation"]
    },
    // E
    {
        id: "employment-contract",
        term: "劳动合同", sourceTerm: "Employment Contract",
        trTerm: "İş Sözleşmesi",
        question: "土耳其劳动合同有哪些强制性条款?", sourceQuestion: "What are the mandatory provisions of employment contracts in Turkey?",
        excerpt: "土耳其劳动合同须包括工作职责、工资、工作时间及试用期. 固定期限合同须采用书面形式.", sourceExcerpt: "Turkish employment contracts must include job description, salary, working hours, and trial period. Written form is required for definite-term contracts.",
        tags: ["employment"],
        relatedTerms: ["labor-law", "severance-pay", "termination-employment"]
    },
    {
        id: "enforcement-foreign-judgments",
        term: "外国判决执行", sourceTerm: "Enforcement of Foreign Judgments",
        trTerm: "Yabancı Mahkeme Kararlarının Tenfizi",
        question: "外国法院判决如何在土耳其执行?", sourceQuestion: "How can foreign court judgments be enforced in Turkey?",
        excerpt: "外国判决须通过土耳其法院的承认及执行程序. 互惠及符合公共政策是关键要求.", sourceExcerpt: "Foreign judgments require recognition and enforcement proceedings in Turkish courts. Reciprocity and public policy compliance are key requirements.",
        tags: ["dispute-resolution", "international-trade"],
        relatedTerms: ["arbitration-turkey", "litigation-turkey", "new-york-convention"]
    },
    {
        id: "environmental-compliance",
        term: "环境合规", sourceTerm: "Environmental Compliance",
        trTerm: "Çevresel Uyumluluk",
        question: "企业在土耳其须遵守哪些环境法规?", sourceQuestion: "What environmental regulations must businesses comply with in Turkey?",
        excerpt: "土耳其环境法要求开展环境影响评价、实施废物管理及取得排放许可. 不合规可能导致重大罚款.", sourceExcerpt: "Turkish Environmental Law requires environmental impact assessments, waste management, and emission permits. Non-compliance can result in significant fines.",
        tags: ["commercial-law"],
        relatedTerms: ["compliance-program", "due-diligence", "permits-licenses"]
    },
    {
        id: "exclusive-dealing",
        term: "独家交易", sourceTerm: "Exclusive Dealing",
        trTerm: "Münhasır Anlaşma",
        question: "土耳其竞争法下独家交易安排是否合法?", sourceQuestion: "Are exclusive dealing arrangements legal under Turkish competition law?",
        excerpt: "市场份额低于门槛时允许独家交易. 集体豁免规定为符合特定标准的纵向协议提供安全港.", sourceExcerpt: "Exclusive dealing is permitted if market share is below thresholds. Block exemption regulations provide safe harbors for vertical agreements meeting specific criteria.",
        tags: ["commercial-law", "contract-law"],
        relatedTerms: ["competition-law", "distribution-agreement", "vertical-agreements"]
    },
    {
        id: "expropriation",
        term: "征收", sourceTerm: "Expropriation",
        trTerm: "Kamulaştırma",
        question: "外国投资者在土耳其可获得哪些免遭征收的保护?", sourceQuestion: "What protections exist against expropriation for foreign investors in Turkey?",
        excerpt: "土耳其宪法禁止未经公平补偿的征收. 双边投资协定提供额外保护, 包括诉诸国际仲裁.", sourceExcerpt: "Turkish Constitution prohibits expropriation without fair compensation. BITs provide additional protections including access to international arbitration.",
        tags: ["real-estate", "international-trade"],
        relatedTerms: ["bilateral-investment-treaty", "foreign-investment", "property-rights"]
    },
    // F
    {
        id: "force-majeure",
        term: "不可抗力", sourceTerm: "Force Majeure",
        trTerm: "Mücbir Sebep",
        question: "土耳其合同如何定义及适用不可抗力?", sourceQuestion: "How is force majeure defined and applied in Turkish contracts?",
        excerpt: "当无法预见且不可控制的事件妨碍履约时, 不可抗力可免除履行义务. 当事人应在合同中界定具体事件.", sourceExcerpt: "Force majeure excuses performance when unforeseeable events beyond control prevent fulfillment. Parties should define specific events in contracts.",
        tags: ["contract-law"],
        relatedTerms: ["impossibility-performance", "hardship-clause", "contract-termination"]
    },
    {
        id: "foreign-investment",
        term: "外国直接投资", sourceTerm: "Foreign Direct Investment",
        trTerm: "Doğrudan Yabancı Yatırım",
        question: "外国投资者在土耳其可享有哪些激励?", sourceQuestion: "What incentives are available for foreign investors in Turkey?",
        excerpt: "土耳其在有组织工业区及优先发展地区提供税收豁免、关税减免、土地分配及就业激励.", sourceExcerpt: "Turkey offers tax exemptions, customs duty relief, land allocation, and employment incentives in organized industrial zones and priority development regions.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["investment-incentives", "free-trade-zones", "bilateral-investment-treaty"]
    },
    {
        id: "franchise-agreement",
        term: "特许经营协议", sourceTerm: "Franchise Agreement",
        trTerm: "Franchise Sözleşmesi",
        question: "在土耳其开展特许经营有哪些主要法律注意事项?", sourceQuestion: "What are the key legal considerations for franchising in Turkey?",
        excerpt: "特许经营协议应规定知识产权许可、质量标准、区域、费用、培训及终止. 土耳其没有专门的特许经营法.", sourceExcerpt: "Franchise agreements should address IP licensing, quality standards, territory, fees, training, and termination. No specific franchise law exists in Turkey.",
        tags: ["contract-law", "intellectual-property"],
        relatedTerms: ["distribution-agreement", "trademark-registration", "licensing-agreement"]
    },
    {
        id: "free-trade-zones",
        term: "自由贸易区", sourceTerm: "Free Trade Zones",
        trTerm: "Serbest Bölgeler",
        question: "土耳其自由贸易区为企业提供哪些优势?", sourceQuestion: "What advantages do Turkish Free Trade Zones offer to businesses?",
        excerpt: "自由贸易区提供关税豁免、对向土耳其销售的增值税豁免、制造业所得税豁免及简化程序.", sourceExcerpt: "Free Trade Zones offer customs duty exemption, VAT exemption on sales to Turkey, income tax exemption for manufacturing, and simplified procedures.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["customs-procedures", "foreign-investment", "investment-incentives"]
    },
    // G
    {
        id: "general-assembly",
        term: "股东大会", sourceTerm: "General Assembly",
        trTerm: "Genel Kurul",
        question: "土耳其公司的哪些决定须经股东大会批准?", sourceQuestion: "What decisions require general assembly approval in Turkish companies?",
        excerpt: "股东大会批准财务报表、股息、董事选举、资本变更、合并及公司章程修订.", sourceExcerpt: "General assembly approves financial statements, dividends, board elections, capital changes, mergers, and amendments to articles of association.",
        tags: ["company-law"],
        relatedTerms: ["anonim-sirket", "shareholders-agreement", "voting-rights"]
    },
    {
        id: "gdpr-kvkk-comparison",
        term: "GDPR 与 KVKK 比较", sourceTerm: "GDPR vs KVKK",
        trTerm: "GDPR ve KVKK Karşılaştırması",
        question: "GDPR 与土耳其 KVKK 有哪些主要区别?", sourceQuestion: "What are the main differences between GDPR and Turkish KVKK?",
        excerpt: "尽管 KVKK 以 GDPR 为范本, 差异仍包括同意要求、跨境传输规则及数据主体权利. KVKK 具有土耳其特定要求.", sourceExcerpt: "While KVKK is modeled on GDPR, differences include consent requirements, cross-border transfer rules, and data subject rights. KVKK has specific Turkish requirements.",
        tags: ["data-protection", "international-trade"],
        relatedTerms: ["kvkk-compliance", "data-controller", "cross-border-data-transfer"]
    },
    {
        id: "guarantee-agreement",
        term: "保证协议", sourceTerm: "Guarantee Agreement",
        trTerm: "Garanti Sözleşmesi",
        question: "土耳其法律承认哪些保证类型?", sourceQuestion: "What types of guarantees are recognized under Turkish law?",
        excerpt: "土耳其法律承认个人保证、银行保函及公司保证. 个人保证可能需要配偶同意.", sourceExcerpt: "Turkish law recognizes personal guarantees, bank guarantees, and corporate guarantees. Spousal consent may be required for personal guarantees.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["surety", "letter-of-credit", "security-interests"]
    },
    // H
    {
        id: "hardship-clause",
        term: "情势变更条款", sourceTerm: "Hardship Clause",
        trTerm: "Aşırı İfa Güçlüğü Şartı",
        question: "土耳其商业合同中的情势变更条款如何运作?", sourceQuestion: "How do hardship clauses work in Turkish commercial contracts?",
        excerpt: "情势变更条款允许在情况发生重大变化时重新协商. 土耳其债务法典承认因情势变化而调整合同.", sourceExcerpt: "Hardship clauses allow renegotiation when circumstances change significantly. Turkish Code of Obligations recognizes adaptation of contracts due to changed circumstances.",
        tags: ["contract-law"],
        relatedTerms: ["force-majeure", "contract-adaptation", "impossibility-performance"]
    },
    {
        id: "holding-company",
        term: "控股公司", sourceTerm: "Holding Company",
        trTerm: "Holding Şirketi",
        question: "在土耳其设立控股公司有哪些益处?", sourceQuestion: "What are the benefits of establishing a holding company in Turkey?",
        excerpt: "土耳其控股公司可就股息及子公司股份资本利得享受参股免税, 从而建立具有税务效率的集团架构.", sourceExcerpt: "Turkish holding companies can benefit from participation exemption on dividends and capital gains from subsidiary shares, providing tax-efficient group structures.",
        tags: ["company-law", "tax-law"],
        relatedTerms: ["corporate-restructuring", "group-taxation", "subsidiary"]
    },
    // I
    {
        id: "incoterms",
        term: "Incoterms", sourceTerm: "Incoterms",
        trTerm: "Teslim Şekilleri (Incoterms)",
        question: "Incoterms 如何适用于土耳其国际贸易合同?", sourceQuestion: "How are Incoterms applied in Turkish international trade contracts?",
        excerpt: "Incoterms 界定卖方及买方在交付、风险转移及费用方面的责任. 土耳其贸易商通常使用 CIF、FOB 及 EXW 条款.", sourceExcerpt: "Incoterms define seller and buyer responsibilities for delivery, risk transfer, and costs. Turkish traders commonly use CIF, FOB, and EXW terms.",
        tags: ["international-trade", "contract-law"],
        relatedTerms: ["bill-of-lading", "letter-of-credit", "customs-procedures"]
    },
    {
        id: "intellectual-property-rights",
        term: "知识产权", sourceTerm: "Intellectual Property Rights",
        trTerm: "Fikri Mülkiyet Hakları",
        question: "土耳其如何保护知识产权?", sourceQuestion: "How are intellectual property rights protected in Turkey?",
        excerpt: "土耳其第 6769 号知识产权法依照欧盟标准, 为商标、专利、外观设计及地理标志提供全面保护.", sourceExcerpt: "Turkey's IP Law No. 6769 provides comprehensive protection for trademarks, patents, designs, and geographical indications aligned with EU standards.",
        tags: ["intellectual-property"],
        relatedTerms: ["trademark-registration", "patent-protection", "copyright"]
    },
    {
        id: "investment-incentives",
        term: "投资激励", sourceTerm: "Investment Incentives",
        trTerm: "Yatırım Teşvikleri",
        question: "土耳其提供哪些投资激励计划?", sourceQuestion: "What investment incentive programs are available in Turkey?",
        excerpt: "土耳其提供一般、区域、优先及战略投资激励, 包括税收减免、海关豁免及雇主保险缴费支持.", sourceExcerpt: "Turkey offers general, regional, priority, and strategic investment incentives including tax reductions, customs exemptions, and employer insurance support.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["foreign-investment", "free-trade-zones", "technology-development-zones"]
    },
    // J
    {
        id: "joint-venture",
        term: "合资企业", sourceTerm: "Joint Venture",
        trTerm: "Ortak Girişim (Joint Venture)",
        question: "土耳其合资企业有哪些法律架构?", sourceQuestion: "What are the legal structures for joint ventures in Turkey?",
        excerpt: "合资可采用合同安排或设立公司的形式. 主要注意事项包括治理、利润分配及退出机制.", sourceExcerpt: "Joint ventures can be structured as contractual arrangements or incorporated entities. Key considerations include governance, profit sharing, and exit mechanisms.",
        tags: ["company-law", "contract-law"],
        relatedTerms: ["shareholders-agreement", "partnership", "company-formation"]
    },
    // K
    {
        id: "kvkk-compliance",
        term: "KVKK 合规", sourceTerm: "KVKK Compliance",
        trTerm: "KVKK Uyumluluğu",
        question: "土耳其数据保护法 (KVKK) 有哪些主要合规要求?", sourceQuestion: "What are the key compliance requirements under Turkish data protection law (KVKK)?",
        excerpt: "KVKK 要求数据控制者注册、具备合法处理依据、向数据主体履行告知、安全措施, 以及遵守跨境传输规则.", sourceExcerpt: "KVKK requires data controller registration, lawful processing basis, data subject notification, security measures, and compliance with cross-border transfer rules.",
        tags: ["data-protection"],
        relatedTerms: ["data-controller", "personal-data", "gdpr-kvkk-comparison"]
    },
    // L
    {
        id: "labor-law",
        term: "土耳其劳动法", sourceTerm: "Turkish Labor Law",
        trTerm: "Türk İş Hukuku",
        question: "土耳其劳动法提供哪些主要劳动保护?", sourceQuestion: "What are the main employment protections under Turkish Labor Law?",
        excerpt: "第 4857 号劳动法涵盖工作时间 (每周最多 45 小时)、最低工资、休假权利、工作场所安全及免遭不公平解雇的保护.", sourceExcerpt: "Labor Law No. 4857 covers working hours (45/week max), minimum wage, leave entitlements, workplace safety, and protection against unfair dismissal.",
        tags: ["employment"],
        relatedTerms: ["employment-contract", "severance-pay", "termination-employment"]
    },
    {
        id: "letter-of-credit",
        term: "信用证", sourceTerm: "Letter of Credit",
        trTerm: "Akreditif",
        question: "信用证在土耳其国际贸易中如何运作?", sourceQuestion: "How do letters of credit work in Turkish international trade?",
        excerpt: "信用证 (Akreditif) 在土耳其法律下属于独立保证合同. 其依照 UCP 600 规则运作, 作为为清偿目的而作出的给付 (ifa uğruna edim), 保障 B2B 交易.", sourceExcerpt: "A Letter of Credit (Akreditif) is an independent guarantee contract under Turkish law. Operating under UCP 600 rules, it acts as a performance for the sake of payment (ifa uğruna edim) securing B2B transactions.",
        tags: ["international-trade", "commercial-law"],
        relatedTerms: ["bill-of-lading", "trade-finance", "bank-guarantee"]
    },
    {
        id: "liaison-office",
        term: "联络处", sourceTerm: "Liaison Office",
        trTerm: "İrtibat Bürosu",
        question: "联络处可在土耳其开展哪些活动?", sourceQuestion: "What activities can a liaison office perform in Turkey?",
        excerpt: "联络处可开展市场研究、宣传母公司及建立商业联系, 但不得从事商业活动或产生收入.", sourceExcerpt: "Liaison offices can conduct market research, promote parent company, and establish business contacts but cannot engage in commercial activities or generate revenue.",
        tags: ["company-law", "international-trade"],
        relatedTerms: ["branch-office", "subsidiary", "company-formation"]
    },
    {
        id: "licensing-agreement",
        term: "许可协议", sourceTerm: "Licensing Agreement",
        trTerm: "Lisans Sözleşmesi",
        question: "面向土耳其的知识产权许可协议应包括哪些内容?", sourceQuestion: "What should be included in an IP licensing agreement for Turkey?",
        excerpt: "许可协议应涵盖权利范围、区域、独家性、许可使用费、质量控制、再许可, 以及生效所需的登记要求.", sourceExcerpt: "Licensing agreements should cover scope of rights, territory, exclusivity, royalties, quality control, sublicensing, and registration requirements for effectiveness.",
        tags: ["intellectual-property", "contract-law"],
        relatedTerms: ["trademark-registration", "patent-protection", "franchise-agreement"]
    },
    {
        id: "limited-sirket",
        term: "有限责任公司 (Limited Şirket, Ltd. Şti.)", sourceTerm: "Limited Şirket (Ltd. Şti.)",
        question: "土耳其 Limited Şirket 有哪些特点?", sourceQuestion: "What are the characteristics of a Limited Şirket in Turkey?",
        excerpt: "Limited Şirket 是中小企业最常见的公司结构. 它要求最低 50,000 TL 资本、1-50 名股东, 并提供有限责任保护.", sourceExcerpt: "A Limited Şirket is the most common structure for SMEs. It requires minimum 50,000 TL capital, 1-50 shareholders, and offers limited liability protection.",
        tags: ["company-law"],
        relatedTerms: ["anonim-sirket", "company-formation", "shareholders-agreement"]
    },
    {
        id: "litigation-turkey",
        term: "土耳其诉讼", sourceTerm: "Litigation in Turkey",
        trTerm: "Türkiye'de Dava Süreçleri",
        question: "土耳其商事诉讼程序如何进行?", sourceQuestion: "How does the commercial litigation process work in Turkey?",
        excerpt: "商事争议由商事法院审理. 程序包括起诉、答辩、预备听证、举证及判决阶段. 上诉由地区法院 (İstinaf) 审理, 此后可上诉至最高上诉法院 (Yargıtay).", sourceExcerpt: "Commercial disputes are heard in Commercial Courts. The process includes petition, answer, preliminary hearing, evidence, and judgment phases. Appeals go to Regional Courts (İstinaf) and subsequently to the Court of Cassation (Yargıtay).",
        tags: ["dispute-resolution"],
        relatedTerms: ["arbitration-turkey", "mediation", "enforcement-foreign-judgments"]
    },
    // M
    {
        id: "mediation",
        term: "调解", sourceTerm: "Mediation",
        trTerm: "Arabuluculuk",
        question: "土耳其商事争议何时须进行强制调解?", sourceQuestion: "When is mediation mandatory in Turkish commercial disputes?",
        excerpt: "商事、消费者及劳动争议在提起诉讼前适用强制调解. 当事人须先尝试调解, 否则诉讼可能被驳回.", sourceExcerpt: "Mandatory mediation applies to commercial, consumer, and employment disputes before filing lawsuit. Parties must attempt mediation or face case dismissal.",
        tags: ["dispute-resolution"],
        relatedTerms: ["arbitration-turkey", "litigation-turkey", "dispute-resolution-clause"]
    },
    {
        id: "merger-control",
        term: "经营者集中审查", sourceTerm: "Merger Control",
        trTerm: "Birleşme ve Devralmaların Kontrolü",
        question: "何时需要向土耳其竞争管理局进行并购申报?", sourceQuestion: "When is merger notification required to Turkish Competition Authority?",
        excerpt: "合计土耳其营业额超过 750 百万 TL, 或一方营业额超过 250 百万 TL 且另一方超过 30 百万 TL 时, 须进行申报.", sourceExcerpt: "Notification is required when combined Turkish turnover exceeds 750 million TL or one party's turnover exceeds 250 million TL with other party exceeding 30 million TL.",
        tags: ["commercial-law", "company-law"],
        relatedTerms: ["competition-law", "mergers-acquisitions", "antitrust"]
    },
    {
        id: "mergers-acquisitions",
        term: "合并与收购", sourceTerm: "Mergers and Acquisitions",
        trTerm: "Birleşme ve Devralmalar (M&A)",
        question: "土耳其并购交易的法律框架是什么?", sourceQuestion: "What is the legal framework for M&A transactions in Turkey?",
        excerpt: "并购交易受土耳其商法典规管. 股权交易及资产交易具有不同税务影响, 并须开展针对性的尽职调查.", sourceExcerpt: "M&A transactions are governed by Turkish Commercial Code. Share deals and asset deals have different tax implications and require specific due diligence.",
        tags: ["company-law", "commercial-law"],
        relatedTerms: ["due-diligence", "share-purchase", "merger-control"]
    },
    {
        id: "minimum-wage",
        term: "最低工资", sourceTerm: "Minimum Wage",
        trTerm: "Asgari Ücret",
        question: "土耳其如何确定最低工资?", sourceQuestion: "How is minimum wage determined in Turkey?",
        excerpt: "最低工资确定委员会至少每年确定一次最低工资. 雇主须至少支付最低工资, 并缴纳适用的社会保障费用.", sourceExcerpt: "Minimum wage is set at least annually by the Minimum Wage Determination Commission. Employers must pay at least minimum wage plus applicable social security contributions.",
        tags: ["employment"],
        relatedTerms: ["labor-law", "employment-contract", "social-security"]
    },
    // N
    {
        id: "new-york-convention",
        term: "纽约公约", sourceTerm: "New York Convention",
        trTerm: "New York Sözleşmesi",
        question: "土耳其如何实施《纽约公约》?", sourceQuestion: "How does Turkey implement the New York Convention?",
        excerpt: "土耳其批准了《纽约公约》, 使外国仲裁裁决得以执行. 法院仅可基于公共政策等有限理由拒绝执行.", sourceExcerpt: "Turkey ratified the New York Convention, enabling enforcement of foreign arbitral awards. Courts may refuse enforcement only on limited grounds like public policy.",
        tags: ["dispute-resolution", "international-trade"],
        relatedTerms: ["arbitration-turkey", "enforcement-foreign-judgments", "istac"]
    },
    {
        id: "non-compete",
        term: "竞业限制协议", sourceTerm: "Non-Compete Agreement",
        trTerm: "Rekabet Yasağı Sözleşmesi",
        question: "土耳其劳动合同中的竞业限制条款是否可执行?", sourceQuestion: "Are non-compete clauses enforceable in Turkish employment contracts?",
        excerpt: "竞业限制条款在期限不超过 2 年、限于特定地理区域及特定活动时可执行. 雇主可能需要提供补偿.", sourceExcerpt: "Non-compete clauses are enforceable if limited to 2 years, specific geographic area, and particular activities. Employer may need to provide compensation.",
        tags: ["employment", "contract-law"],
        relatedTerms: ["employment-contract", "confidentiality-agreement", "trade-secrets"]
    },
    {
        id: "notarization",
        term: "公证要求", sourceTerm: "Notarization Requirements",
        trTerm: "Noter Onay Süreçleri",
        question: "土耳其法律文件何时需要公证?", sourceQuestion: "When is notarization required for legal documents in Turkey?",
        excerpt: "授权委托书、房地产交易、公司决议及某些合同需要公证. 境外文件需要附加证明书或认证.", sourceExcerpt: "Notarization is required for powers of attorney, real estate transactions, corporate resolutions, and certain contracts. Foreign documents need apostille or legalization.",
        tags: ["contract-law", "company-law"],
        relatedTerms: ["apostille", "power-of-attorney", "document-legalization"]
    },
    // O
    {
        id: "overtime-pay",
        term: "加班工资", sourceTerm: "Overtime Pay",
        trTerm: "Fazla Mesai Ücreti",
        question: "土耳其如何计算加班报酬?", sourceQuestion: "How is overtime compensation calculated in Turkey?",
        excerpt: "每周超过 45 小时的加班按正常工资的 1.5 倍支付报酬. 每年最多加班 270 小时. 员工可选择以补休代替.", sourceExcerpt: "Overtime exceeding 45 hours weekly is compensated at 1.5x normal rate. Maximum overtime is 270 hours annually. Employees can opt for time off instead.",
        tags: ["employment"],
        relatedTerms: ["labor-law", "working-hours", "employment-contract"]
    },
    // P
    {
        id: "patent-protection",
        term: "专利保护", sourceTerm: "Patent Protection",
        trTerm: "Patent Koruması",
        question: "土耳其如何保护及注册专利?", sourceQuestion: "How are patents protected and registered in Turkey?",
        excerpt: "专利向土耳其专利商标局注册. 保护期自申请日起为 20 年. 土耳其是 PCT 及《欧洲专利公约》的缔约方.", sourceExcerpt: "Patents are registered with Turkish Patent and Trademark Office. Protection lasts 20 years from filing. Turkey is party to PCT and European Patent Convention.",
        tags: ["intellectual-property"],
        relatedTerms: ["intellectual-property-rights", "trademark-registration", "utility-models"]
    },
    {
        id: "personal-data",
        term: "个人数据", sourceTerm: "Personal Data",
        trTerm: "Kişisel Veri",
        question: "哪些信息属于土耳其 KVKK 下的个人数据?", sourceQuestion: "What qualifies as personal data under Turkish KVKK?",
        excerpt: "个人数据包括与已识别或可识别自然人有关的任何信息. 敏感数据类别适用更严格的处理要求.", sourceExcerpt: "Personal data includes any information relating to identified or identifiable natural person. Sensitive data categories have stricter processing requirements.",
        tags: ["data-protection"],
        relatedTerms: ["kvkk-compliance", "data-controller", "sensitive-personal-data"]
    },
    {
        id: "power-of-attorney",
        term: "授权委托书", sourceTerm: "Power of Attorney",
        trTerm: "Vekaletname",
        question: "土耳其有效授权委托书须符合哪些要求?", sourceQuestion: "What are the requirements for a valid power of attorney in Turkey?",
        excerpt: "授权委托书须经公证. 境外授权委托书须附加证明书或认证, 并提供经认证的土耳其语译文. 授权范围须明确界定.", sourceExcerpt: "Powers of attorney must be notarized. Foreign POAs require apostille or legalization and certified Turkish translation. Scope must be clearly defined.",
        tags: ["contract-law", "company-law"],
        relatedTerms: ["notarization", "apostille", "legal-representation"]
    },
    {
        id: "product-liability",
        term: "产品责任", sourceTerm: "Product Liability",
        trTerm: "Ürün Sorumluluğu",
        question: "土耳其产品责任框架是什么?", sourceQuestion: "What is the product liability framework in Turkey?",
        excerpt: "制造商、进口商及供应商对瑕疵产品承担责任. 制造商承担严格责任. 消费者保护法提供额外救济.", sourceExcerpt: "Manufacturers, importers, and suppliers are liable for defective products. Liability is strict for manufacturers. Consumer protection law provides additional remedies.",
        tags: ["commercial-law", "contract-law"],
        relatedTerms: ["consumer-protection", "warranty", "product-recall"]
    },
    {
        id: "property-transfer",
        term: "产权转让", sourceTerm: "Property Transfer",
        trTerm: "Taşınmaz Devri",
        question: "土耳其房地产转让有哪些程序?", sourceQuestion: "What is the process for transferring real estate in Turkey?",
        excerpt: "产权转让须在土地登记机构办理产权登记. 允许外国人拥有房地产, 但存在某些限制. 转让税为 4%, 由当事人分担.", sourceExcerpt: "Property transfers require title deed registration at Land Registry. Foreign ownership is permitted with some restrictions. Transfer tax is 4% split between parties.",
        tags: ["real-estate", "tax-law"],
        relatedTerms: ["commercial-lease", "expropriation", "property-rights"]
    },
    // R
    {
        id: "repatriation-profits",
        term: "利润汇回", sourceTerm: "Repatriation of Profits",
        trTerm: "Kâr Transferi",
        question: "外国公司能否自由汇回在土耳其的利润?", sourceQuestion: "Can foreign companies freely repatriate profits from Turkey?",
        excerpt: "土耳其允许自由转移利润、股息、特许权使用费及资本. 可能适用预提税. 不存在限制资金转移的外汇管制.", sourceExcerpt: "Turkey allows free transfer of profits, dividends, royalties, and capital. Withholding taxes may apply. No exchange controls restrict fund transfers.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["foreign-investment", "dividend-distribution", "withholding-tax"]
    },
    {
        id: "residency-permit",
        term: "居留许可", sourceTerm: "Residency Permit",
        trTerm: "Oturma İzni",
        question: "外国商界人士在土耳其有哪些居留选择?", sourceQuestion: "What residency options are available for foreign business persons in Turkey?",
        excerpt: "工作许可自动包含居留资格. 商务访客可申请短期许可. 投资类居留设有特定门槛.", sourceExcerpt: "Work permits automatically include residency. Short-term permits are available for business visitors. Investment-based residency has specific thresholds.",
        tags: ["employment", "international-trade"],
        relatedTerms: ["work-permit", "foreign-investment", "turquoise-card"]
    },
    // S
    {
        id: "severance-pay",
        term: "离职补偿金", sourceTerm: "Severance Pay",
        trTerm: "Kıdem Tazminatı",
        question: "土耳其员工何时有权获得离职补偿金?", sourceQuestion: "When are employees entitled to severance pay in Turkey?",
        excerpt: "工龄 1+ 年的员工, 在符合条件的劳动关系终止时, 每工作一年可获 30 天税前工资. 上限每半年确定一次 (1 月/7 月). 辞职通常不享有该项权利.", sourceExcerpt: "Employees with 1+ year tenure receive 30 days gross salary per year upon qualifying termination. Cap is set semiannually (Jan/July). Resignation generally disqualifies entitlement.",
        tags: ["employment"],
        relatedTerms: ["termination-employment", "labor-law", "employment-contract"]
    },
    {
        id: "share-purchase",
        term: "股权购买协议", sourceTerm: "Share Purchase Agreement",
        trTerm: "Hisse Devir Sözleşmesi",
        question: "面向土耳其的股权购买协议应包括哪些关键条款?", sourceQuestion: "What key terms should a share purchase agreement include for Turkey?",
        excerpt: "股权购买协议 (SPA) 应涵盖购买价格、保证、赔偿、先决条件、竞业限制, 以及土耳其法律要求的特定交割后义务.", sourceExcerpt: "SPAs should cover purchase price, warranties, indemnities, conditions precedent, non-compete, and post-closing obligations specific to Turkish law requirements.",
        tags: ["company-law", "contract-law"],
        relatedTerms: ["mergers-acquisitions", "due-diligence", "asset-purchase"]
    },
    {
        id: "shareholders-agreement",
        term: "股东协议", sourceTerm: "Shareholders Agreement",
        trTerm: "Pay Sahipleri Sözleşmesi",
        question: "股东协议为何对土耳其公司重要?", sourceQuestion: "Why is a shareholders agreement important for Turkish companies?",
        excerpt: "股东协议规定表决、股权转让、董事会组成、股息及退出权利. 它通过可执行的承诺补充公司章程.", sourceExcerpt: "Shareholders agreements govern voting, transfers, board composition, dividends, and exit rights. They supplement articles of association with enforceable commitments.",
        tags: ["company-law", "contract-law"],
        relatedTerms: ["anonim-sirket", "limited-sirket", "voting-rights"]
    },
    {
        id: "social-security",
        term: "社会保障", sourceTerm: "Social Security",
        trTerm: "Sosyal Güvenlik",
        question: "土耳其雇主承担哪些社会保障义务?", sourceQuestion: "What are employer social security obligations in Turkey?",
        excerpt: "雇主向社会保障机构 (SGK) 缴纳约税前工资的 20.5%. 员工缴纳约 14%. 社会保障合计协定可减少双重参保.", sourceExcerpt: "Employers contribute approximately 20.5% of gross salary to social security (SGK). Employees contribute approximately 14%. Totalization agreements may reduce double coverage.",
        tags: ["employment", "tax-law"],
        relatedTerms: ["labor-law", "employment-contract", "minimum-wage"]
    },
    {
        id: "subsidiary",
        term: "子公司", sourceTerm: "Subsidiary Company",
        trTerm: "Bağlı Ortaklık",
        question: "在土耳其设立子公司有哪些优势?", sourceQuestion: "What are the advantages of forming a subsidiary in Turkey?",
        excerpt: "子公司是提供责任保护的独立法律实体. 它们可获得当地融资、参与投标并建立当地市场地位.", sourceExcerpt: "Subsidiaries are separate legal entities offering liability protection. They can access local financing, participate in tenders, and build local market presence.",
        tags: ["company-law", "international-trade"],
        relatedTerms: ["branch-office", "company-formation", "limited-sirket"]
    },
    {
        id: "stamp-duty",
        term: "印花税", sourceTerm: "Stamp Duty",
        trTerm: "Damga Vergisi",
        question: "什么是印花税 (Damga Vergisi), 土耳其 2026 年税率如何适用?", sourceQuestion: "What is Stamp Duty (Damga Vergisi) and how are the 2026 rates applied in Turkey?",
        excerpt: "印花税 (Damga Vergisi) 对证明法律交易的文件征收. 2026 年, 商业合同税率为 9.48‰, 租赁协议为 1.89‰, 工资支付为 7.59‰. 所有签署人均承担连带责任.", sourceExcerpt: "Stamp Duty (Damga Vergisi) is levied on documents evidencing legal transactions. In 2026, commercial contracts are taxed at 9.48 per mille, lease agreements at 1.89 per mille, and salary payments at 7.59 per mille. All signatories are jointly and severally liable.",
        tags: ["tax-law", "contract-law"],
        relatedTerms: ["corporate-tax", "withholding-tax", "vat-turkey", "double-tax-treaty"]
    },
    {
        id: "supply-agreement",
        term: "供应协议", sourceTerm: "Supply Agreement",
        trTerm: "Tedarik Sözleşmesi",
        question: "土耳其法律下供应协议应包括哪些内容?", sourceQuestion: "What should be included in supply agreements under Turkish law?",
        excerpt: "供应协议应涵盖规格、定价机制、交付条件、保证、责任限制、终止权利及争议解决.", sourceExcerpt: "Supply agreements should cover specifications, pricing mechanisms, delivery terms, warranties, liability limits, termination rights, and dispute resolution.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["distribution-agreement", "incoterms", "quality-standards"]
    },
    // T
    {
        id: "turkish-investment-lawyer",
        term: "土耳其投资律师", sourceTerm: "Turkish Investment Lawyer",
        trTerm: "Türk Yatırım Avukatı",
        customUrl: "turkish-investment-lawyer.html",
        question: "外国投资者在土耳其需要哪些法律支持?", sourceQuestion: "What legal support do foreign investors need in Turkey?",
        excerpt: "为外国投资者提供系统化法律路径, 涵盖准入策略、尽职调查、合同、税务衔接及争议预防.", sourceExcerpt: "A structured legal roadmap for foreign investors covering entry strategies, due diligence, contracts, tax alignment, and dispute prevention.",
        tags: ["commercial-law", "international-trade"],
        relatedTerms: ["foreign-investment", "due-diligence", "company-formation"]
    },
    {
        id: "tariff-classification",
        term: "税则归类", sourceTerm: "Tariff Classification",
        trTerm: "Tarife Sınıflandırması",
        question: "土耳其如何为海关目的进行货物归类?", sourceQuestion: "How are goods classified for customs purposes in Turkey?",
        excerpt: "土耳其使用协调制度 (HS) 进行归类. 正确归类决定税率、贸易政策措施及所需文件.", sourceExcerpt: "Turkey uses the Harmonized System (HS) for classification. Correct classification determines duty rates, trade policy measures, and required documentation.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["customs-procedures", "customs-valuation", "origin-rules"]
    },
    {
        id: "tax-residency",
        term: "税收居民身份", sourceTerm: "Tax Residency",
        trTerm: "Vergi Mukimliği",
        question: "土耳其如何确定公司税收居民身份?", sourceQuestion: "How is corporate tax residency determined in Turkey?",
        excerpt: "注册办事处或实际管理地位于土耳其的公司属于税收居民. 居民就全球所得纳税; 非居民就源自土耳其的所得纳税.", sourceExcerpt: "Companies with registered office or place of effective management in Turkey are tax resident. Residents are taxed on worldwide income; non-residents on Turkish-source income.",
        tags: ["tax-law"],
        relatedTerms: ["corporate-tax", "withholding-tax", "transfer-pricing"]
    },
    {
        id: "technology-development-zones",
        term: "技术开发区", sourceTerm: "Technology Development Zones",
        trTerm: "Teknoloji Geliştirme Bölgeleri (Teknoparklar)",
        question: "技术开发区 (科技园) 提供哪些优惠?", sourceQuestion: "What benefits do Technology Development Zones (Technoparks) offer?",
        excerpt: "科技园提供截至 2028 年的研发活动所得税豁免、销售增值税豁免, 以及研究人员工资所得税豁免.", sourceExcerpt: "Technoparks provide income tax exemption until 2028 for R&D activities, VAT exemption on sales, and income tax exemption for researchers on salaries.",
        tags: ["tax-law", "intellectual-property"],
        relatedTerms: ["investment-incentives", "rd-incentives", "free-trade-zones"]
    },
    {
        id: "termination-employment",
        term: "劳动关系终止", sourceTerm: "Employment Termination",
        trTerm: "İş Sözleşmesinin Feshi",
        question: "土耳其终止劳动关系有哪些规则?", sourceQuestion: "What are the rules for terminating employment in Turkey?",
        excerpt: "拥有 30+ 名员工的公司终止劳动关系须有正当理由. 通知期为 2-8 周. 违法终止可能导致恢复劳动关系或赔偿.", sourceExcerpt: "Termination requires valid reason for companies with 30+ employees. Notice periods range from 2-8 weeks. Wrongful termination results in reinstatement or compensation.",
        tags: ["employment"],
        relatedTerms: ["severance-pay", "labor-law", "employment-contract"]
    },
    {
        id: "trade-secrets",
        term: "商业秘密", sourceTerm: "Trade Secrets",
        trTerm: "Ticari Sırlar",
        question: "土耳其法律如何保护商业秘密?", sourceQuestion: "How are trade secrets protected under Turkish law?",
        excerpt: "商业秘密受土耳其商法典及不正当竞争规定保护. 不当获取或使用商业秘密可能导致民事损害赔偿及刑事处罚.", sourceExcerpt: "Trade secrets are protected under Turkish Commercial Code and unfair competition provisions. Misappropriation can result in civil damages and criminal penalties.",
        tags: ["intellectual-property", "commercial-law"],
        relatedTerms: ["confidentiality-agreement", "non-compete", "unfair-competition"]
    },
    {
        id: "trademark-registration",
        term: "商标注册", sourceTerm: "Trademark Registration",
        trTerm: "Marka Tescili",
        question: "如何在土耳其注册商标?", sourceQuestion: "How do you register a trademark in Turkey?",
        excerpt: "商标通过土耳其专利商标局注册. 注册提供 10 年保护, 可无限续展. 适用《巴黎公约》的优先权.", sourceExcerpt: "Trademarks are registered through the Turkish Patent and Trademark Office. Registration provides 10-year protection, renewable indefinitely. Priority from Paris Convention applies.",
        tags: ["intellectual-property"],
        relatedTerms: ["intellectual-property-rights", "patent-protection", "brand-protection"]
    },
    {
        id: "transfer-pricing",
        term: "转让定价", sourceTerm: "Transfer Pricing",
        trTerm: "Transfer Fiyatlandırması",
        question: "土耳其关联方交易的转让定价规则是什么?", sourceQuestion: "What are Turkey's transfer pricing rules for related party transactions?",
        excerpt: "土耳其转让定价遵循 OECD 指引. 达到特定门槛时须准备相关文件. 关联方交易适用独立交易原则.", sourceExcerpt: "Turkish transfer pricing follows OECD guidelines. Documentation is mandatory for certain thresholds. Arm's length principle applies to related party transactions.",
        tags: ["tax-law", "international-trade"],
        relatedTerms: ["corporate-tax", "related-party", "customs-valuation"]
    },
    {
        id: "turquoise-card",
        term: "绿松石卡", sourceTerm: "Turquoise Card",
        trTerm: "Turkuaz Kart",
        question: "什么是绿松石卡, 哪些人符合申请条件?", sourceQuestion: "What is the Turquoise Card and who is eligible?",
        excerpt: "绿松石卡为包括投资者、科学家及战略性员工在内的合格外国人提供无限期居留及工作权利. 它相当于土耳其的绿卡.", sourceExcerpt: "Turquoise Card provides indefinite residence and work rights for qualified foreigners including investors, scientists, and strategic employees. It's Turkey's equivalent of a green card.",
        tags: ["employment", "international-trade"],
        relatedTerms: ["work-permit", "residency-permit", "foreign-investment"]
    },
    // U
    {
        id: "unfair-competition",
        term: "不正当竞争", sourceTerm: "Unfair Competition",
        trTerm: "Haksız Rekabet",
        question: "土耳其法律下哪些行为构成不正当竞争?", sourceQuestion: "What constitutes unfair competition under Turkish law?",
        excerpt: "土耳其商法典禁止误导性行为、诋毁、利用他人商誉及不当获取或使用商业秘密. 竞争者及消费者可寻求救济.", sourceExcerpt: "Turkish Commercial Code prohibits misleading practices, disparagement, exploitation of reputation, and trade secret misappropriation. Competitors and consumers can seek remedies.",
        tags: ["commercial-law", "intellectual-property"],
        relatedTerms: ["competition-law", "trade-secrets", "trademark-infringement"]
    },
    // V
    {
        id: "vat-turkey",
        term: "土耳其增值税", sourceTerm: "VAT in Turkey",
        trTerm: "Türkiye'de KDV",
        question: "土耳其 B2B 交易如何适用增值税?", sourceQuestion: "How does VAT work for B2B transactions in Turkey?",
        excerpt: "标准增值税率为 20%, 特定货物适用 10% 及 1% 的优惠税率. 企业采购的增值税通常可抵扣. 出口销售适用零税率.", sourceExcerpt: "Standard VAT rate is 20% with reduced rates of 10% and 1% for specific goods. VAT on business purchases is generally deductible. Export sales are zero-rated.",
        tags: ["tax-law"],
        relatedTerms: ["customs-procedures", "corporate-tax", "withholding-tax"]
    },
    {
        id: "vertical-agreements",
        term: "纵向协议", sourceTerm: "Vertical Agreements",
        trTerm: "Dikey Anlaşmalar",
        question: "土耳其纵向协议的集体豁免是什么?", sourceQuestion: "What is the block exemption for vertical agreements in Turkey?",
        excerpt: "供应商市场份额低于 40% 时, 纵向协议可免于竞争法禁令. 维持转售价格等某些核心限制仍被禁止.", sourceExcerpt: "Vertical agreements are exempt from competition law prohibition if supplier's market share is below 40%. Certain hardcore restrictions like resale price maintenance are prohibited.",
        tags: ["commercial-law", "contract-law"],
        relatedTerms: ["competition-law", "distribution-agreement", "exclusive-dealing"]
    },
    {
        id: "voting-rights",
        term: "股东表决权", sourceTerm: "Shareholder Voting Rights",
        trTerm: "Pay Sahiplerinin Oy Hakları",
        question: "土耳其公司的股东表决权如何运作?", sourceQuestion: "How do shareholder voting rights work in Turkish companies?",
        excerpt: "每份股份通常具有一票表决权. 公司章程可设置优先表决权股份. 重大决定须经特别多数通过.", sourceExcerpt: "Each share typically carries one vote. Articles can create preferential voting shares. Qualified majorities are required for significant decisions.",
        tags: ["company-law"],
        relatedTerms: ["shareholders-agreement", "general-assembly", "minority-rights"]
    },
    // W
    {
        id: "warranty",
        term: "质量保证义务", sourceTerm: "Warranty Obligations",
        trTerm: "Garanti Yükümlülükleri",
        question: "土耳其 B2B 销售适用哪些质量保证义务?", sourceQuestion: "What warranty obligations apply to B2B sales in Turkey?",
        excerpt: "卖方保证货物不存在瑕疵. B2B 买方须及时检验并通知瑕疵. 通常允许通过合同调整质量保证义务.", sourceExcerpt: "Sellers warrant goods are free from defects. B2B buyers must inspect promptly and notify defects. Contractual warranty modifications are generally permitted.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["product-liability", "sales-contract", "quality-standards"]
    },
    {
        id: "withholding-tax",
        term: "预提税", sourceTerm: "Withholding Tax",
        trTerm: "Stopaj Vergisi",
        question: "从土耳其支付的款项适用哪些预提税?", sourceQuestion: "What withholding taxes apply to payments made from Turkey?",
        excerpt: "对于适用非居民公司收款人国内规则的股息, 根据第 9286 号决定, 自 2024 年 12 月 22 日起预提税率为 15%. 是否适用更低的协定税率, 取决于收款人及适用协定条件. 特许权使用费、利息及服务款项适用各自的分类及税率.", sourceExcerpt: "For dividends covered by the domestic rule for nonresident corporate recipients, withholding is 15% from 22 December 2024 under Decision No. 9286. A lower treaty rate depends on the recipient and applicable treaty conditions. Royalties, interest and service payments have separate classifications and rates.",
        tags: ["tax-law", "international-trade"],
        relatedTerms: ["corporate-tax", "repatriation-profits", "double-tax-treaty"]
    },
    {
        id: "work-permit",
        term: "工作许可", sourceTerm: "Work Permit",
        trTerm: "Çalışma İzni",
        question: "外国人如何取得土耳其工作许可?", sourceQuestion: "How do foreign nationals obtain work permits in Turkey?",
        excerpt: "工作许可通过劳动部取得. 可在入境前或在土耳其境内申请. 许可类别包括定期、无限期及独立工作许可.", sourceExcerpt: "Work permits are obtained through the Ministry of Labor. Applications can be made before entry or within Turkey. Permit categories include definite, indefinite, and independent.",
        tags: ["employment", "international-trade"],
        relatedTerms: ["residency-permit", "turquoise-card", "foreign-workers"]
    },
    {
        id: "working-hours",
        term: "工作时间", sourceTerm: "Working Hours",
        trTerm: "Çalışma Süreleri",
        question: "土耳其法定工作时间上限是多少?", sourceQuestion: "What are the legal working hour limits in Turkey?",
        excerpt: "每周最多工作 45 小时, 通常分布在 6 天内. 每日上限为 11 小时. 允许压缩工作周等灵活安排.", sourceExcerpt: "Maximum working week is 45 hours, typically spread over 6 days. Daily limit is 11 hours. Flexible arrangements like compressed weeks are permitted.",
        tags: ["employment"],
        relatedTerms: ["labor-law", "overtime-pay", "employment-contract"]
    },
    // Additional entries to reach 100
    {
        id: "apostille",
        term: "附加证明书", sourceTerm: "Apostille",
        trTerm: "Apostil Tasdiki",
        question: "供土耳其使用的文件何时需要附加证明书?", sourceQuestion: "When is apostille required for documents used in Turkey?",
        excerpt: "来自《海牙公约》缔约国的文件在土耳其使用时需要附加证明书. 非海牙公约缔约国的文件需要领事认证.", sourceExcerpt: "Documents from Hague Convention countries require apostille for use in Turkey. Non-Hague country documents need consular legalization.",
        tags: ["contract-law", "international-trade"],
        relatedTerms: ["notarization", "document-legalization", "power-of-attorney"]
    },
    {
        id: "asset-purchase",
        term: "资产购买协议", sourceTerm: "Asset Purchase Agreement",
        trTerm: "Malvarlığı Devir Sözleşmesi",
        question: "在土耳其, 资产购买与股权购买相比有哪些优势?", sourceQuestion: "What are the advantages of asset purchases vs share purchases in Turkey?",
        excerpt: "资产购买允许选择性收购, 并可能避免隐藏负债. 然而, 它可能产生增值税, 并需要逐项办理合同转让.", sourceExcerpt: "Asset purchases allow selective acquisition and may avoid hidden liabilities. However, they may trigger VAT and require individual contract assignments.",
        tags: ["company-law", "contract-law"],
        relatedTerms: ["share-purchase", "mergers-acquisitions", "due-diligence"]
    },
    {
        id: "bank-guarantee",
        term: "银行保函", sourceTerm: "Bank Guarantee",
        trTerm: "Banka Teminat Mektubu",
        question: "银行保函在土耳其商业交易中如何运作?", sourceQuestion: "How do bank guarantees work in Turkish commercial transactions?",
        excerpt: "银行保函提供付款保障. 土耳其银行签发见索即付保函及有条件保函. 援引时可适用 ICC 统一规则.", sourceExcerpt: "Bank guarantees provide payment security. Turkish banks issue demand guarantees and conditional guarantees. ICC Uniform Rules may apply if referenced.",
        tags: ["commercial-law", "contract-law"],
        relatedTerms: ["letter-of-credit", "guarantee-agreement", "performance-bond"]
    },
    {
        id: "commercial-representative",
        term: "商业代表", sourceTerm: "Commercial Representative",
        trTerm: "Ticari Mümessil",
        question: "在土耳其委任商业代表有哪些法律影响?", sourceQuestion: "What are the legal implications of appointing a commercial representative in Turkey?",
        excerpt: "商业代表以企业名义行事. 土耳其商法典规定其权限及责任. 建议采用书面授权.", sourceExcerpt: "Commercial representatives act in the name of businesses. Turkish Commercial Code defines their authority and liability. Written authorization is recommended.",
        tags: ["commercial-law", "contract-law"],
        relatedTerms: ["agency-agreement", "power-of-attorney", "distribution-agreement"]
    },
    {
        id: "consumer-protection",
        term: "消费者保护", sourceTerm: "Consumer Protection",
        trTerm: "Tüketicinin Korunması",
        question: "哪些消费者保护法律影响向土耳其消费者销售的 B2B 企业?", sourceQuestion: "What consumer protection laws affect B2B businesses selling to consumers in Turkey?",
        excerpt: "消费者保护法规定强制性质量保证、远程销售撤回权及广告限制. B2B 经销商须予以遵守.", sourceExcerpt: "Consumer Protection Law provides mandatory warranties, withdrawal rights for distance sales, and advertising restrictions. B2B resellers must comply.",
        tags: ["commercial-law", "contract-law"],
        relatedTerms: ["product-liability", "warranty", "e-commerce"]
    },
    {
        id: "contract-termination",
        term: "合同终止", sourceTerm: "Contract Termination",
        trTerm: "Sözleşmenin Feshi",
        question: "土耳其法律下合同终止有哪些理由?", sourceQuestion: "What are the grounds for contract termination under Turkish law?",
        excerpt: "合同可因违约、履行不能、双方合意或依据终止条款而终止. 通知要求及后果因合同类型而异.", sourceExcerpt: "Contracts may be terminated for breach, impossibility, mutual agreement, or as per termination clauses. Notice requirements and consequences vary by contract type.",
        tags: ["contract-law"],
        relatedTerms: ["force-majeure", "breach-of-contract", "damages"]
    },
    {
        id: "copyright",
        term: "著作权保护", sourceTerm: "Copyright Protection",
        trTerm: "Telif Hakkı Koruması",
        question: "土耳其如何保护著作权?", sourceQuestion: "How is copyright protected in Turkey?",
        excerpt: "著作权在作品创作时自动产生. 无须登记, 但登记可提供证据. 保护期为作者终身及其去世后 70 年.", sourceExcerpt: "Copyright arises automatically upon creation. Registration is not required but provides evidence. Protection lasts author's lifetime plus 70 years.",
        tags: ["intellectual-property"],
        relatedTerms: ["intellectual-property-rights", "licensing-agreement", "software-licensing"]
    },
    {
        id: "corporate-tax",
        term: "企业所得税", sourceTerm: "Corporate Tax",
        trTerm: "Kurumlar Vergisi",
        question: "土耳其企业所得税率是多少?", sourceQuestion: "What is the corporate tax rate in Turkey?",
        excerpt: "截至 2025 年, 标准企业所得税率为 25%. 某些行业 (例如银行及部分金融机构) 可能适用 30% 税率, 且可能适用行业/激励相关豁免.", sourceExcerpt: "As of 2025, the standard corporate income tax rate is 25%. Certain sectors (e.g., banks and some financial institutions) may be taxed at 30%, and sector/incentive-based exemptions may apply.",
        tags: ["tax-law"],
        relatedTerms: ["tax-residency", "transfer-pricing", "withholding-tax"]
    },
    {
        id: "cross-border-data-transfer",
        term: "跨境数据传输", sourceTerm: "Cross-Border Data Transfer",
        trTerm: "Yurtdışına Veri Aktarımı",
        question: "从土耳其跨境传输个人数据适用哪些规则?", sourceQuestion: "What rules govern cross-border personal data transfers from Turkey?",
        excerpt: "跨境传输须依据 KVKK 第 9 条规定的途径: 适用的充分性决定、符合条件的适当保障措施, 或适用范围严格受限的例外事由. KVKK 标准合同须匹配正确的当事方角色组合, 并在签署后五个工作日内向主管局通知.", sourceExcerpt: "Cross-border transfers require a KVKK Article 9 route: an applicable adequacy decision, a qualifying appropriate safeguard, or a narrowly applicable exceptional ground. A KVKK standard contract must use the correct party-role combination and be notified to the Authority within five business days after signing.",
        tags: ["data-protection", "international-trade"],
        relatedTerms: ["kvkk-compliance", "data-controller", "gdpr-kvkk-comparison"]
    },
    {
        id: "dividend-distribution",
        term: "股息分配", sourceTerm: "Dividend Distribution",
        trTerm: "Kâr Payı Dağıtımı",
        question: "土耳其分配股息有哪些规则?", sourceQuestion: "What are the rules for distributing dividends in Turkey?",
        excerpt: "股息仅可从提取法定公积金后的净利润中分配. 股东大会决定分配. 支付款项适用预提税.", sourceExcerpt: "Dividends can only be distributed from net profits after legal reserves. General assembly decides distribution. Withholding tax applies to payments.",
        tags: ["company-law", "tax-law"],
        relatedTerms: ["general-assembly", "repatriation-profits", "withholding-tax"]
    },
    {
        id: "double-tax-treaty",
        term: "避免双重征税协定", sourceTerm: "Double Tax Treaty",
        trTerm: "Çifte Vergilendirmeyi Önleme Anlaşması",
        question: "土耳其避免双重征税协定如何惠及外国投资者?", sourceQuestion: "How do Turkey's double tax treaties benefit foreign investors?",
        excerpt: "土耳其与 80+ 个国家签署避免双重征税协定, 提供较低预提税率、消除双重征税及境外所得税收抵免.", sourceExcerpt: "Turkey has DTTs with 80+ countries providing reduced withholding rates, elimination of double taxation, and tax credits for foreign-source income.",
        tags: ["tax-law", "international-trade"],
        relatedTerms: ["withholding-tax", "foreign-investment", "tax-residency"]
    },
    {
        id: "e-commerce",
        term: "电子商务法规", sourceTerm: "E-Commerce Regulations",
        trTerm: "E-Ticaret Düzenlemeleri",
        question: "土耳其电子商务企业适用哪些法规?", sourceQuestion: "What regulations apply to e-commerce businesses in Turkey?",
        excerpt: "电子商务法要求注册、信息披露及安全支付系统. 远程销售适用消费者撤回权.", sourceExcerpt: "E-Commerce Law requires registration, information disclosure, and secure payment systems. Distance sales have consumer withdrawal rights.",
        tags: ["commercial-law", "data-protection"],
        relatedTerms: ["consumer-protection", "kvkk-compliance", "electronic-signature"]
    },
    {
        id: "electronic-signature",
        term: "电子签名", sourceTerm: "Electronic Signature",
        trTerm: "Elektronik İmza",
        question: "电子签名在土耳其是否具有法律效力?", sourceQuestion: "Are electronic signatures legally valid in Turkey?",
        excerpt: "土耳其电子签名法承认安全电子签名与手写签名具有同等效力. 合格证书提供最高程度的法律确定性.", sourceExcerpt: "Turkish Electronic Signature Law recognizes secure electronic signatures as equivalent to handwritten signatures. Qualified certificates provide highest legal certainty.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["e-commerce", "notarization", "digital-contracts"]
    },
    {
        id: "foreign-workers",
        term: "雇用外籍员工", sourceTerm: "Employment of Foreign Workers",
        trTerm: "Yabancı İşçi İstihdamı",
        question: "土耳其雇用外籍员工有哪些规则?", sourceQuestion: "What are the rules for employing foreign workers in Turkey?",
        excerpt: "雇主须取得工作许可, 证明不存在合适的土耳其候选人. 可能适用配额. 外籍员工成本可能因许可费用而较高.", sourceExcerpt: "Employers must obtain work permits demonstrating no suitable Turkish candidates exist. Quotas may apply. Foreign worker costs may be higher due to permit fees.",
        tags: ["employment", "international-trade"],
        relatedTerms: ["work-permit", "residency-permit", "labor-law"]
    },
    {
        id: "internal-audit",
        term: "内部审计要求", sourceTerm: "Internal Audit Requirements",
        trTerm: "İç Denetim Gereklilikleri",
        question: "土耳其公司适用哪些内部审计要求?", sourceQuestion: "What internal audit requirements apply to Turkish companies?",
        excerpt: "公众公司及受监管实体须设内部审计职能. 最近的修订依据营业额门槛, 扩大了非公众公司独立审计要求的适用范围.", sourceExcerpt: "Public companies and regulated entities require internal audit functions. Recent amendments expanded the scope of independent audit requirements for non-public companies based on turnover thresholds.",
        tags: ["company-law", "commercial-law"],
        relatedTerms: ["corporate-governance", "compliance-program", "board-of-directors"]
    },
    {
        id: "istac",
        term: "伊斯坦布尔仲裁中心 (ISTAC)", sourceTerm: "Istanbul Arbitration Centre (ISTAC)",
        trTerm: "İstanbul Tahkim Merkezi (ISTAC)",
        question: "什么是 ISTAC, 它如何处理争议?", sourceQuestion: "What is ISTAC and how does it handle disputes?",
        excerpt: "ISTAC 是土耳其领先的仲裁机构, 提供机构管理的仲裁服务. 其规则为商事争议提供高效、现代化的程序.", sourceExcerpt: "ISTAC is Turkey's leading arbitration institution providing administered arbitration services. Its rules offer efficient, modern procedures for commercial disputes.",
        tags: ["dispute-resolution"],
        relatedTerms: ["arbitration-turkey", "dispute-resolution-clause", "new-york-convention"]
    },
    {
        id: "lease-termination",
        term: "商业租赁终止", sourceTerm: "Commercial Lease Termination",
        trTerm: "Ticari Kira Sözleşmesinin Feshi",
        question: "土耳其商业租赁如何终止?", sourceQuestion: "How can a commercial lease be terminated in Turkey?",
        excerpt: "有顶盖商业场所租赁的终止取决于当事方及法律依据. 出租人通常不能仅因固定租期届满而终止; 法定需要、违约及延长期限届满等途径各有条件. 在启动程序前, 应核查通知、送达日期及强制调解要求.", sourceExcerpt: "Termination of a roofed commercial lease depends on the party and legal ground. A landlord cannot generally terminate solely because a fixed term ends; statutory need, default and extension-period routes have separate conditions. Check notices, service dates and mandatory mediation before proceedings.",
        tags: ["real-estate", "contract-law"],
        relatedTerms: ["commercial-lease", "rent-adjustment", "eviction"]
    },
    {
        id: "legal-representation",
        term: "出庭法律代理", sourceTerm: "Legal Representation in Court",
        trTerm: "Mahkemede Hukuki Temsil",
        question: "土耳其法院是否强制要求法律代理?", sourceQuestion: "Is legal representation mandatory in Turkish courts?",
        excerpt: "在地区上诉法院及最高上诉法院, 律师代理是强制要求. 下级法院允许当事人自行出庭, 但建议委任法律顾问.", sourceExcerpt: "Attorney representation is mandatory before Regional Courts of Appeal and Court of Cassation. Lower courts allow self-representation but counsel is advisable.",
        tags: ["dispute-resolution"],
        relatedTerms: ["litigation-turkey", "power-of-attorney", "court-fees"]
    },
    {
        id: "minority-rights",
        term: "少数股东权利", sourceTerm: "Minority Shareholder Rights",
        trTerm: "Azınlık Pay Sahibi Hakları",
        question: "土耳其少数股东享有哪些保护?", sourceQuestion: "What protections exist for minority shareholders in Turkey?",
        excerpt: "少数股东 (A.Ş. 为 10%, Ltd. 为 10%) 可请求审计、召集股东会及对决议提出异议. 法院可因压迫少数股东而解散公司.", sourceExcerpt: "Minority shareholders (10% for A.Ş., 10% for Ltd.) can request audits, call general meetings, and challenge resolutions. Courts can dissolve companies for oppression.",
        tags: ["company-law"],
        relatedTerms: ["shareholders-agreement", "voting-rights", "general-assembly"]
    },
    {
        id: "origin-rules",
        term: "原产地规则", sourceTerm: "Rules of Origin",
        trTerm: "Menşe Kuralları",
        question: "原产地规则如何影响土耳其关税?", sourceQuestion: "How do rules of origin affect customs duties in Turkey?",
        excerpt: "自由贸易协定下的优惠原产地可降低或免除关税. 原产地依据实质性改变确定. 原产地证书用于证明优惠待遇.", sourceExcerpt: "Preferential origin under FTAs reduces or eliminates duties. Origin is determined by substantial transformation. Certificate of origin documents preferential treatment.",
        tags: ["international-trade", "tax-law"],
        relatedTerms: ["customs-procedures", "tariff-classification", "free-trade-agreements"]
    },
    {
        id: "penalties-clauses",
        term: "违约金条款", sourceTerm: "Penalty Clauses",
        trTerm: "Cezai Şart",
        question: "土耳其合同中的违约金条款是否可执行?", sourceQuestion: "Are penalty clauses enforceable in Turkish contracts?",
        excerpt: "违约金条款在土耳其可执行. 法院可酌减过高的违约金. 请求违约金无须证明实际损害.", sourceExcerpt: "Penalty clauses are enforceable in Turkey. Courts can reduce excessive penalties. Penalties may be claimed without proving actual damage.",
        tags: ["contract-law"],
        relatedTerms: ["damages", "contract-termination", "breach-of-contract"]
    },
    {
        id: "permits-licenses",
        term: "行业授权与监管许可", sourceTerm: "Sector Authorisations and Regulatory Licences",
        trTerm: "İş Yeri Açma ve Çalışma Ruhsatları",
        question: "在土耳其, 特定行业授权与经营许可证有何区别?", sourceQuestion: "How do sector-specific authorisations differ from an operating licence in Turkey?",
        excerpt: "行业授权依照主管监管机构的规则, 允许从事受监管的活动或经营受监管的产品. 它独立于公司注册及工作场所经营许可证. 在梳理审批、技术证据及持续义务之前, 应先明确经营主体、活动及产品.", sourceExcerpt: "A sector authorisation permits a regulated activity or product under the competent regulator’s rules. It is separate from incorporation and a workplace operating licence. Identify the operator, activity and product before mapping the approval, technical evidence and ongoing obligations.",
        tags: ["commercial-law", "company-law"],
        relatedTerms: ["company-formation", "environmental-compliance", "regulated-industries"]
    },
    {
        id: "property-rights",
        term: "外国人财产权", sourceTerm: "Property Rights for Foreigners",
        trTerm: "Yabancıların Mülkiyet Hakları",
        question: "外国人能否在土耳其拥有房地产?", sourceQuestion: "Can foreigners own property in Turkey?",
        excerpt: "大多数外国人可拥有房地产, 但须遵守互惠及面积限制. 军事区域及农村土地可能受到限制. 法人也可拥有房地产.", sourceExcerpt: "Most foreigners can own property subject to reciprocity and area restrictions. Military zones and rural land may have limitations. Legal entity ownership is possible.",
        tags: ["real-estate", "international-trade"],
        relatedTerms: ["property-transfer", "expropriation", "foreign-investment"]
    },
    {
        id: "rd-incentives",
        term: "研发激励", sourceTerm: "R&D Incentives",
        trTerm: "Ar-Ge Teşvikleri",
        question: "土耳其研发活动可享有哪些激励?", sourceQuestion: "What incentives are available for R&D activities in Turkey?",
        excerpt: "研发法为至少拥有 15 名研究人员的合格研发中心提供税收扣除、工资所得税豁免及社会保障支持.", sourceExcerpt: "R&D Law provides tax deductions, wage tax exemptions, and social security support for qualified R&D centers with minimum 15 researchers.",
        tags: ["tax-law", "intellectual-property"],
        relatedTerms: ["technology-development-zones", "investment-incentives", "patent-protection"]
    },
    {
        id: "related-party",
        term: "关联方交易", sourceTerm: "Related Party Transactions",
        trTerm: "İlişkili Taraf İşlemleri",
        question: "土耳其关联方交易适用哪些披露要求?", sourceQuestion: "What disclosure requirements apply to related party transactions in Turkey?",
        excerpt: "上市公司须披露关联方交易. 转让定价规则要求采用独立交易条件. 可能需要董事会批准.", sourceExcerpt: "Listed companies must disclose related party transactions. Transfer pricing rules require arm's length terms. Board approval may be required.",
        tags: ["company-law", "tax-law"],
        relatedTerms: ["transfer-pricing", "corporate-governance", "board-of-directors"]
    },
    {
        id: "rent-adjustment",
        term: "租金调整", sourceTerm: "Rent Adjustment",
        trTerm: "Kira Bedelinin Uyarlanması",
        question: "土耳其商业租金如何调整?", sourceQuestion: "How is commercial rent adjusted in Turkey?",
        excerpt: "有顶盖商业场所续租租金依据债务法典第 344 条评估. 方法取决于租赁期限、币种及续租情况. 应审查涨租条款、适用指数、可比证据、通知及提出请求的时间; 单方面要求本身并不能确定新租金.", sourceExcerpt: "Roofed commercial-lease renewal rent is assessed under Code of Obligations Article 344. The method depends on the lease duration, currency and renewal circumstances. Review the increase clause, applicable index, comparable evidence, notice and claim timing; a demand alone does not establish the new rent.",
        tags: ["real-estate", "contract-law"],
        relatedTerms: ["commercial-lease", "lease-termination", "inflation-indexation"]
    },
    {
        id: "sales-contract",
        term: "销售合同", sourceTerm: "Sales Contract",
        trTerm: "Satış Sözleşmesi",
        question: "土耳其法律下销售合同有哪些基本要素?", sourceQuestion: "What are the essential elements of a sales contract under Turkish law?",
        excerpt: "销售合同须就货物及价格达成合意. 应明确交付条件、质量保证及风险转移. 国际交易可能适用 CISG.", sourceExcerpt: "Sales contracts require agreement on goods and price. Delivery terms, warranties, and risk transfer should be clearly defined. CISG may apply internationally.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["warranty", "supply-agreement", "incoterms"]
    },
    {
        id: "sensitive-personal-data",
        term: "敏感个人数据", sourceTerm: "Sensitive Personal Data",
        trTerm: "Özel Nitelikli Kişisel Veri",
        question: "KVKK 下敏感个人数据有哪些类别?", sourceQuestion: "What are sensitive personal data categories under KVKK?",
        excerpt: "敏感数据包括种族、族裔、政治观点、宗教、健康数据及生物识别数据. 处理须有明确同意或法律依据.", sourceExcerpt: "Sensitive data includes race, ethnicity, political views, religion, health data, and biometric data. Processing requires explicit consent or legal basis.",
        tags: ["data-protection"],
        relatedTerms: ["personal-data", "kvkk-compliance", "data-controller"]
    },
    {
        id: "service-agreement",
        term: "服务协议", sourceTerm: "Service Agreement",
        trTerm: "Hizmet Sözleşmesi",
        question: "土耳其法律下 B2B 服务协议应包括哪些内容?", sourceQuestion: "What should a B2B service agreement include under Turkish law?",
        excerpt: "服务协议应明确范围、交付成果、费用、时间安排、履行标准、责任限制、知识产权归属及终止条款.", sourceExcerpt: "Service agreements should define scope, deliverables, fees, timelines, performance standards, liability limits, IP ownership, and termination provisions.",
        tags: ["contract-law", "commercial-law"],
        relatedTerms: ["supply-agreement", "confidentiality-agreement", "sla"]
    },
    {
        id: "trade-finance",
        term: "贸易融资", sourceTerm: "Trade Finance",
        trTerm: "Dış Ticaretin Finansmanı",
        question: "土耳其交易可采用哪些贸易融资方式?", sourceQuestion: "What trade finance options are available for Turkey transactions?",
        excerpt: "方式包括通过土耳其银行及进出口银行办理信用证、跟单托收、银行保函、出口信用保险及保理.", sourceExcerpt: "Options include letters of credit, documentary collections, bank guarantees, export credit insurance, and factoring through Turkish banks and Eximbank.",
        tags: ["international-trade", "commercial-law"],
        relatedTerms: ["letter-of-credit", "bank-guarantee", "export-financing"]
    },
    {
        id: "utility-models",
        term: "实用新型", sourceTerm: "Utility Models",
        trTerm: "Faydalı Model",
        question: "实用新型在土耳其提供何种保护?", sourceQuestion: "What protection do utility models provide in Turkey?",
        excerpt: "实用新型为发明提供 10 年保护, 要求低于专利. 适合渐进式创新. 注册速度更快.", sourceExcerpt: "Utility models protect inventions for 10 years with less stringent requirements than patents. Ideal for incremental innovations. Registration is faster.",
        tags: ["intellectual-property"],
        relatedTerms: ["patent-protection", "intellectual-property-rights", "trademark-registration"]
    },
    {
        id: "bankruptcy",
        term: "破产", sourceTerm: "Bankruptcy",
        trTerm: "İflas",
        question: "土耳其哪些主体可被宣告破产?", sourceQuestion: "Who can be subject to bankruptcy in Turkey?",
        excerpt: "破产是涉及无力偿还未清债务的个人或企业的法律程序. 根据土耳其执行与破产法, 该程序通过清算债务人所有可供查封的资产, 清偿债权人.", sourceExcerpt: "Bankruptcy is a legal proceeding involving a person or business that is unable to repay outstanding debts. Under Turkish Execution and Bankruptcy Law, it results in the liquidation of all attachable assets of the debtor to satisfy creditors.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "concordat",
        term: "债务和解重整", sourceTerm: "Concordat",
        trTerm: "Konkordato",
        question: "债务和解重整的主要优势是什么?", sourceQuestion: "What is the main advantage of concordat?",
        excerpt: "债务和解重整是土耳其法律下的重组机制, 允许财务状况不佳的债务人通过与债权人达成协议重组债务并避免破产, 但须经法院批准.", sourceExcerpt: "Concordat is a restructuring mechanism under Turkish Law allowing debtors in poor financial health to restructure their debts and avoid bankruptcy by reaching an agreement with their creditors, subject to court approval.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "mutual-rescission",
        term: "协商解除", sourceTerm: "Mutual Rescission",
        trTerm: "İkale",
        question: "协商解除 (ikale) 是否产生离职补偿金权利?", sourceQuestion: "Does ikale grant severance pay?",
        excerpt: "协商解除 (İkale) 是雇主与员工达成的协议, 通过双方合意终止劳动合同, 而非单方终止.", sourceExcerpt: "Mutual rescission (İkale) is an agreement between an employer and an employee to terminate the employment contract by mutual consent, rather than through unilateral termination.",
        tags: ["employment"],
        relatedTerms: []
    },
    {
        id: "release-agreement",
        term: "债务免除协议", sourceTerm: "Release Agreement",
        trTerm: "İbra",
        question: "员工能否在劳动关系终止前免除雇主责任?", sourceQuestion: "Can an employee release the employer before termination?",
        excerpt: "债务免除协议 (İbra) 是债权人免除债务人履行义务的合同, 根据土耳其债务法典使债务完全消灭.", sourceExcerpt: "A release agreement (İbra) is a contract where the creditor releases the debtor from their obligation, extinguishing the debt completely under the Turkish Code of Obligations.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "joint-and-several-liability",
        term: "连带责任", sourceTerm: "Joint and Several Liability",
        trTerm: "Müteselsil Sorumluluk",
        question: "一名债务人支付全部款项后会发生什么?", sourceQuestion: "What happens if one debtor pays the full amount?",
        excerpt: "连带责任是指多名当事人各自对全部义务承担责任. 债权人可要求任一债务人全部履行.", sourceExcerpt: "Joint and several liability means multiple parties are independently liable for the full amount of an obligation. The creditor may demand the entire performance from any one of the debtors.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "right-of-recourse",
        term: "追偿权", sourceTerm: "Right of Recourse",
        trTerm: "Rücu",
        question: "追偿权通常何时产生?", sourceQuestion: "When does the right of recourse typically arise?",
        excerpt: "追偿权允许代他人履行义务的一方向承担主要责任的一方请求偿还.", sourceExcerpt: "The right of recourse allows a party who has discharged an obligation on behalf of another to seek reimbursement from the party who was primarily liable.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "unjust-enrichment",
        term: "不当得利", sourceTerm: "Unjust Enrichment",
        trTerm: "Sebepsiz Zenginleşme",
        question: "不当得利的诉讼时效是多少?", sourceQuestion: "What is the statute of limitations for unjust enrichment?",
        excerpt: "不当得利是指一人缺乏有效法律依据, 保留依公平正义应属于他人的金钱或利益. 得利方须返还该利益.", sourceExcerpt: "Unjust enrichment occurs when a person retains money or benefits that in justice and equity belong to another, without a valid legal ground. The enriched party must return the benefit.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "default",
        term: "履行迟延", sourceTerm: "Default",
        trTerm: "Temerrüt",
        question: "履行迟延有哪些后果?", sourceQuestion: "What are the consequences of default?",
        excerpt: "履行迟延发生于债务人未履行法定义务, 例如未在债务到期时付款, 通常需要正式催告才能在法律上成立.", sourceExcerpt: "Default occurs when a debtor fails to fulfill a legal obligation, such as paying a debt when it becomes due, often requiring a formal notice of default to be legally established.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "exigibility",
        term: "加速到期 / 到期应付", sourceTerm: "Acceleration / Exigibility",
        trTerm: "Muacceliyet",
        question: "什么是加速到期条款?", sourceQuestion: "What is an acceleration clause?",
        excerpt: "到期应付 (Muacceliyet) 是指债务已经到期并应予支付的状态, 即债权人依法有权要求立即履行.", sourceExcerpt: "Exigibility (Muacceliyet) refers to the state where a debt becomes due and payable, meaning the creditor has the legal right to demand its immediate performance.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "collusion-simulation",
        term: "通谋 / 虚假交易", sourceTerm: "Collusion / Simulation",
        trTerm: "Muvazaa",
        question: "虚假交易合同是否有效?", sourceQuestion: "Is a simulated contract valid?",
        excerpt: "虚假交易 (Muvazaa) 是指当事人约定制造法律交易的虚假外观以欺骗第三方, 同时秘密约定该交易在他们之间不产生法律效力.", sourceExcerpt: "Simulation (Muvazaa) occurs when parties agree to create a false appearance of a legal transaction to deceive third parties, while secretly agreeing it will have no legal effect between them.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "preliminary-attachment",
        term: "保全查封", sourceTerm: "Preliminary Attachment",
        trTerm: "İhtiyati Haciz",
        question: "保全查封是否需要法院命令?", sourceQuestion: "Do you need a court order for preliminary attachment?",
        excerpt: "保全查封是在诉讼前或诉讼期间查封债务人资产的临时法律措施, 用于保障无担保金钱债权的追收.", sourceExcerpt: "Preliminary attachment is a provisional legal measure to seize a debtor's assets before or during a lawsuit to secure the collection of an unsecured monetary claim.",
        tags: ["dispute-resolution"],
        relatedTerms: []
    },
    {
        id: "preliminary-injunction",
        term: "临时禁令", sourceTerm: "Preliminary Injunction",
        trTerm: "İhtiyati Tedbir",
        question: "查封与禁令有何区别?", sourceQuestion: "What is the difference between attachment and injunction?",
        excerpt: "临时禁令是在争议最终解决之前, 为防止无法弥补的损害或维持现状, 由法院作出禁止或要求实施特定行为的命令.", sourceExcerpt: "Preliminary injunction is a court order prohibiting or compelling a specific action to prevent irreparable harm or preserve the status quo pending final resolution of a dispute.",
        tags: ["dispute-resolution"],
        relatedTerms: []
    },
    {
        id: "merchant",
        term: "商人", sourceTerm: "Merchant",
        trTerm: "Tacir",
        question: "是否所有公司都被视为商人?", sourceQuestion: "Are all companies considered merchants?",
        excerpt: "土耳其商法典下的商人是经营商业企业的自然人或法人. 商人须遵守更严格的注意义务标准及特定商事规则.", sourceExcerpt: "A merchant under the Turkish Commercial Code is a real or legal person who operates a commercial enterprise. Merchants are subject to stricter standards of care and specific commercial rules.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "transfer-of-commercial-enterprise",
        term: "商业企业转让", sourceTerm: "Transfer of Commercial Enterprise",
        trTerm: "Ticari İşletme Devri",
        question: "转让方是否仍对既往债务承担责任?", sourceQuestion: "Does the transferor remain liable for past debts?",
        excerpt: "此类转让是将企业作为持续经营的整体转让, 包括其资产、负债及商誉. 它要求签订书面协议并办理商业登记.", sourceExcerpt: "This involves transferring a business as a going concern, including its assets, liabilities, and goodwill. It requires a written agreement registered with the Trade Registry.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "articles-of-association",
        term: "公司章程", sourceTerm: "Articles of Association",
        trTerm: "Esas Sözleşme",
        question: "公司章程能否修订?", sourceQuestion: "Can the Articles of Association be amended?",
        excerpt: "公司章程是公司的基本组织文件, 规定其名称、目的、总部、资本结构及内部治理规则.", sourceExcerpt: "Articles of Association is the foundational constitutional document of a company, defining its name, purpose, headquarters, capital structure, and internal governance rules.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "change-of-company-type",
        term: "公司类型变更", sourceTerm: "Change of Company Type",
        trTerm: "Tür Değiştirme",
        question: "变更公司类型是否影响现有合同?", sourceQuestion: "Does changing the company type affect existing contracts?",
        excerpt: "公司在不进行清算的情况下变更组织形式 (例如从有限责任公司变更为股份有限公司), 同时保持法律连续性的法律程序.", sourceExcerpt: "A legal process where a company changes its corporate form (e.g., from a Limited Company to a Joint-Stock Company) without undergoing liquidation, preserving its legal continuity.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "spin-off",
        term: "分拆 / 分立", sourceTerm: "Spin-off / Demerger",
        trTerm: "Bölünme",
        question: "完全分立与部分分立有何区别?", sourceQuestion: "What is the difference between full and partial demerger?",
        excerpt: "分立是公司重组程序, 公司将其资产及负债分配至两家或以上现有或新设公司.", sourceExcerpt: "Demerger is a corporate restructuring process where a company divides its assets and liabilities into two or more existing or newly formed companies.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "liquidation",
        term: "清算", sourceTerm: "Liquidation",
        trTerm: "Tasfiye",
        question: "土耳其清算需要多长时间?", sourceQuestion: "How long does liquidation take in Turkey?",
        excerpt: "清算是结束公司事务、出售资产、清偿债务, 并在法人解散前将剩余财产分配给股东的过程.", sourceExcerpt: "Liquidation is the process of winding up a company's affairs, selling its assets, settling its debts, and distributing any remaining balance to shareholders before dissolving the legal entity.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "trade-registry",
        term: "商业登记", sourceTerm: "Trade Registry",
        trTerm: "Ticaret Sicili",
        question: "商业登记记录是否公开?", sourceQuestion: "Are Trade Registry records public?",
        excerpt: "商业登记是土耳其官方公共记录系统, 商人及公司须登记其基本公司信息, 以确保透明度及法律确定性.", sourceExcerpt: "The Trade Registry is an official public record system in Turkey where merchants and companies must register their fundamental corporate information, ensuring transparency and legal certainty.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "signature-circular",
        term: "签字样本公证书", sourceTerm: "Signature Circular",
        trTerm: "İmza Sirküleri",
        question: "是否始终必须提供签字样本公证书?", sourceQuestion: "Is a signature circular always required?",
        excerpt: "签字样本公证书是经公证、载明公司获授权代表签字样本的文件, 用于证明其具有使公司受约束的代表权限.", sourceExcerpt: "A signature circular is a notarized document displaying the specimen signatures of a company's authorized representatives, proving their authority to bind the company.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "registration",
        term: "登记", sourceTerm: "Registration",
        trTerm: "Tescil",
        question: "登记具有何种法律效力?", sourceQuestion: "What is the legal effect of registration?",
        excerpt: "登记是将特定法律事实或公司行为 (例如公司设立或董事选举) 正式记入商业登记等官方登记系统.", sourceExcerpt: "Registration refers to the formal recording of specific legal facts or corporate actions (like company formation or board elections) into official registries, such as the Trade Registry.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "announcement",
        term: "公告 / 公布", sourceTerm: "Announcement / Publication",
        trTerm: "İlan",
        question: "哪些行为必须公告?", sourceQuestion: "What actions must be announced?",
        excerpt: "公布是指依法在《土耳其商业登记公报》公告特定公司行为, 以告知第三方及债权人.", sourceExcerpt: "Publication refers to the legal requirement to announce specific corporate actions in the Turkish Trade Registry Gazette to inform third parties and creditors.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "board-of-partners",
        term: "股东会", sourceTerm: "Board of Partners",
        trTerm: "Ortaklar Kurulu",
        question: "股东会作出哪些决定?", sourceQuestion: "What decisions does the Board of Partners make?",
        excerpt: "股东会是有限责任公司 (Limited Şirket) 的最高决策机构, 相当于股份有限公司的股东大会.", sourceExcerpt: "The Board of Partners is the supreme decision-making body in a Limited Liability Company (Limited Şirket), equivalent to the General Assembly in a Joint-Stock Company.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "circumvention-of-law",
        term: "法律规避", sourceTerm: "Circumvention of Law",
        trTerm: "Peçeleme",
        question: "法律规避是否违法?", sourceQuestion: "Is circumvention of law illegal?",
        excerpt: "法律规避 (Peçeleme) 是指当事人利用法律上有效的交易绕过强制性法律禁令, 实际达到被禁止的结果.", sourceExcerpt: "Circumvention of law (Peçeleme) occurs when parties use a legally valid transaction to bypass a mandatory legal prohibition, effectively achieving a forbidden outcome.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "piercing-the-corporate-veil",
        term: "揭开公司面纱", sourceTerm: "Piercing the Corporate Veil",
        trTerm: "Tüzel Kişilik Perdesinin Aralanması",
        question: "法院何时揭开公司面纱?", sourceQuestion: "When do courts pierce the corporate veil?",
        excerpt: "一种例外法律原则, 当公司形式被滥用以欺诈债权人时, 允许法院否定公司有限责任, 使股东承担个人责任.", sourceExcerpt: "An exceptional legal doctrine allowing courts to ignore limited corporate liability and hold shareholders personally liable if the corporate form is abused to defraud creditors.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "capital-commitment",
        term: "出资承诺", sourceTerm: "Capital Commitment",
        trTerm: "Sermaye Taahhüdü",
        question: "何时必须缴付承诺出资?", sourceQuestion: "When must capital commitments be paid?",
        excerpt: "出资承诺是股东在公司设立或增资过程中, 就向公司投入特定金额资本作出的具有法律约束力的承诺.", sourceExcerpt: "Capital commitment is the legally binding promise made by shareholders to contribute a specific amount of capital to a company during incorporation or a capital increase.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "pre-emption-right",
        term: "优先认购权", sourceTerm: "Pre-emption Right",
        trTerm: "Rüçhan Hakkı",
        question: "优先认购权能否受到限制?", sourceQuestion: "Can pre-emption rights be restricted?",
        excerpt: "优先认购权允许现有股东在增资时优先购买新发行股份, 从而维持其持股比例.", sourceExcerpt: "Pre-emption right allows existing shareholders to maintain their proportional ownership by having the first right to purchase newly issued shares during a capital increase.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "registered-shares",
        term: "记名股份", sourceTerm: "Registered Shares",
        trTerm: "Nama Yazılı Pay",
        question: "记名股份的转让能否受到限制?", sourceQuestion: "Can transfer of registered shares be restricted?",
        excerpt: "记名股份是以特定人士名义发行并记载于公司股东名册的股份. 转让须经背书及名册登记.", sourceExcerpt: "Registered shares are corporate shares issued in the name of a specific person and recorded in the company's share ledger. Their transfer requires endorsement and ledger registration.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "bearer-shares",
        term: "无记名股份", sourceTerm: "Bearer Shares",
        trTerm: "Hamiline Yazılı Pay",
        question: "无记名股份是否有新的追踪规则?", sourceQuestion: "Are there new tracking rules for bearer shares?",
        excerpt: "无记名股份不记载所有人姓名; 实际持有股票凭证者即被视为所有人. 转让仅须交付占有.", sourceExcerpt: "Bearer shares do not contain the owner's name; whoever physically holds the share certificate is deemed the owner. Their transfer simply requires handing over possession.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "dividend-right-certificate",
        term: "分红权凭证", sourceTerm: "Dividend Right Certificate",
        trTerm: "İntifa Senedi",
        question: "通常向谁发行分红权凭证?", sourceQuestion: "Who typically receives dividend right certificates?",
        excerpt: "此类凭证不代表股本, 也不赋予表决权, 但向持有人提供财务权利, 例如分享公司净利润.", sourceExcerpt: "These are certificates that do not represent share capital or grant voting rights, but provide the holder with financial rights, such as a share of the company's net profit.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "squeeze-out-right",
        term: "挤出权", sourceTerm: "Squeeze-out Right",
        trTerm: "Çıkarma Hakkı",
        question: "为什么使用挤出权?", sourceQuestion: "Why is the squeeze-out right used?",
        excerpt: "并购法中的一种机制, 允许控股股东 (通常持股超过 98%) 强制少数股东按公平价格出售股份, 从而使公司私有化.", sourceExcerpt: "A mechanism in M&A law allowing a controlling shareholder (usually holding over 98%) to force minority shareholders to sell their shares at a fair price, taking the company private.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "sell-out-right",
        term: "出售请求权", sourceTerm: "Sell-out Right",
        trTerm: "Satma Hakkı",
        question: "少数股东何时可行使此项权利?", sourceQuestion: "When can minority shareholders use this right?",
        excerpt: "作为挤出权的对应机制, 此项权利允许少数股东要求控股股东按公平价格购买其股份.", sourceExcerpt: "The counterpart to the squeeze-out, this gives minority shareholders the right to demand that the controlling shareholder purchase their shares at a fair price.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "tag-along-right",
        term: "随售权", sourceTerm: "Tag-Along Right",
        trTerm: "Birlikte Satma Hakkı",
        question: "随售权规定于何处?", sourceQuestion: "Where are tag-along rights defined?",
        excerpt: "保护少数股东的合同权利. 如果多数股东出售其持股, 少数股东可参与该交易并按相同条件出售其股份.", sourceExcerpt: "A contractual right protecting minority shareholders. If the majority shareholder sells their stake, minority shareholders can join the transaction and sell their shares under the same terms.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "drag-along-right",
        term: "拖售权", sourceTerm: "Drag-Along Right",
        trTerm: "Birlikte Satışa Zorlama Hakkı",
        question: "拖售权有何益处?", sourceQuestion: "What is the benefit of a drag-along right?",
        excerpt: "允许多数股东强制少数股东按相同条件参与向第三方出售公司的合同权利.", sourceExcerpt: "A contractual right allowing a majority shareholder to force minority shareholders to join in the sale of the company to a third party on the same terms.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "right-of-first-refusal",
        term: "优先购买权", sourceTerm: "Right of First Refusal",
        trTerm: "Ön Alım Hakkı",
        question: "房地产是否承认优先购买权?", sourceQuestion: "Is right of first refusal recognized for real estate?",
        excerpt: "一种合同权利, 要求拟向第三方出售股份的股东, 先按完全相同的条件向现有股东提出出售该等股份的要约.", sourceExcerpt: "A contractual right requiring a shareholder who wishes to sell their shares to a third party to first offer those shares to existing shareholders on the exact same terms.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "right-of-first-offer",
        term: "优先要约权", sourceTerm: "Right of First Offer",
        trTerm: "İlk Teklif Hakkı",
        question: "它与优先购买权有何区别?", sourceQuestion: "How does it differ from Right of First Refusal?",
        excerpt: "一种合同义务, 要求拟出售股份的股东, 在与外部人士协商之前, 先邀请现有股东就该等股份报价.", sourceExcerpt: "A contractual obligation where a shareholder looking to sell must first ask existing shareholders to make an offer for the shares before negotiating with outside parties.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "option",
        term: "期权", sourceTerm: "Option",
        trTerm: "Opsiyon",
        question: "期权在土耳其并购中是否常用?", sourceQuestion: "Are options commonly used in Turkish M&A?",
        excerpt: "在特定期限内按预定价格买入或卖出资产的金融衍生工具或合同权利 (而非义务).", sourceExcerpt: "A financial derivative or contractual right (but not obligation) to buy or sell an asset at a predetermined price within a specific timeframe.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "call-option",
        term: "买入期权", sourceTerm: "Call Option",
        trTerm: "Alım Opsiyonu",
        question: "合资企业如何使用买入期权?", sourceQuestion: "How are call options used in joint ventures?",
        excerpt: "赋予持有人在特定期间内按约定价格购买股份或资产的选择权的合同权利.", sourceExcerpt: "A contractual right granting the holder the option to purchase shares or assets at an agreed-upon price within a specific period.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "put-option",
        term: "卖出期权", sourceTerm: "Put Option",
        trTerm: "Satım Opsiyonu",
        question: "投资者为何要求卖出期权?", sourceQuestion: "Why would an investor demand a put option?",
        excerpt: "赋予持有人强制另一方按预定价格购买其股份或资产的选择权的合同权利.", sourceExcerpt: "A contractual right granting the holder the option to force another party to buy their shares or assets at a predetermined price.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "loan-agreement",
        term: "借款协议", sourceTerm: "Loan Agreement",
        trTerm: "Kredi Sözleşmesi",
        question: "土耳其商业贷款受什么规管?", sourceQuestion: "What governs commercial loans in Turkey?",
        excerpt: "贷款人与借款人之间的正式合同, 详细约定借款本金、利率、还款计划及承诺条款.", sourceExcerpt: "A formal contract between a lender and borrower detailing the principal loan amount, interest rates, repayment schedule, and covenants.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "syndicated-loan",
        term: "银团贷款", sourceTerm: "Syndicated Loan",
        trTerm: "Sendikasyon Kredisi",
        question: "哪些主体使用银团贷款?", sourceQuestion: "Who uses syndicated loans?",
        excerpt: "由一组贷款人 (银团) 向单一借款人提供的大额贷款, 将信用风险分散至参与银行.", sourceExcerpt: "A large loan provided by a group of lenders (a syndicate) to a single borrower, distributing the credit risk among the participating banks.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "project-finance",
        term: "项目融资", sourceTerm: "Project Finance",
        trTerm: "Proje Finansmanı",
        question: "项目融资以什么作为担保?", sourceQuestion: "What secures project finance?",
        excerpt: "以项目预计现金流而非发起方资产负债表为基础的基础设施或工业项目长期融资.", sourceExcerpt: "The long-term financing of infrastructure or industrial projects based upon the projected cash flows of the project rather than the balance sheets of its sponsors.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "assignment",
        term: "转让", sourceTerm: "Assignment",
        trTerm: "Temlik",
        question: "转让是否需要债务人同意?", sourceQuestion: "Does assignment require the debtor's consent?",
        excerpt: "将权利、财产或债权从一方 (转让方) 合法转移至另一方 (受让方), 常用于转让应收款.", sourceExcerpt: "The legal transfer of a right, property, or claim from one party (assignor) to another (assignee), frequently used for transferring receivables.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "assignment-of-receivables",
        term: "债权转让", sourceTerm: "Assignment of Receivables",
        trTerm: "Alacağın Devri",
        question: "未来应收款能否转让?", sourceQuestion: "Can future receivables be assigned?",
        excerpt: "一种特定转让形式, 债权人将追收债务的权利转移给第三方. 土耳其法律要求采用书面形式.", sourceExcerpt: "A specific form of assignment where a creditor transfers their right to collect a debt to a third party. It must be executed in writing under Turkish Law.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "assumption-of-debt",
        term: "债务承担", sourceTerm: "Assumption of Debt",
        trTerm: "Borcun Üstlenilmesi",
        question: "债务承担是否需要债权人同意?", sourceQuestion: "Does assumption of debt require the creditor's consent?",
        excerpt: "第三方接替债务人的义务, 使原债务人免除责任的法律程序.", sourceExcerpt: "A legal process where a third party takes over a debtor's obligation, relieving the original debtor of their liability.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "surety",
        term: "保证", sourceTerm: "Surety",
        trTerm: "Kefalet",
        question: "保证协议有哪些形式要求?", sourceQuestion: "What are the formal requirements for a surety agreement?",
        excerpt: "一种个人保证, 第三方 (保证人) 承诺在主债务人未履行义务时向债权人付款.", sourceExcerpt: "A personal guarantee where a third party (the surety) undertakes to pay the creditor if the primary debtor fails to fulfill their obligation.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "aval",
        term: "票据保证", sourceTerm: "Aval",
        trTerm: "Aval",
        question: "如何作出票据保证?", sourceQuestion: "How is an aval given?",
        excerpt: "票据保证是专用于可转让票据 (例如汇票) 的特殊保证形式, 第三方为其中一名签署人保证付款.", sourceExcerpt: "Aval is a specialized form of guarantee used exclusively for negotiable instruments (like bills of exchange), where a third party guarantees payment on behalf of one of the signatories.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "endorsement",
        term: "背书", sourceTerm: "Endorsement",
        trTerm: "Ciro",
        question: "什么是空白背书?", sourceQuestion: "What is a blank endorsement?",
        excerpt: "在可转让票据 (例如支票或本票) 背面签字, 将票据所载权利转让给另一方的行为.", sourceExcerpt: "The act of signing the back of a negotiable instrument (like a cheque or promissory note) to transfer the rights inherent in the instrument to another party.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "bill-of-exchange",
        term: "汇票", sourceTerm: "Bill of Exchange",
        trTerm: "Poliçe",
        question: "汇票在土耳其是否常用?", sourceQuestion: "Are bills of exchange common in Turkey?",
        excerpt: "一方 (出票人) 向另一方 (付款人) 发出的书面无条件指示, 要求其在约定的未来日期向第三方 (收款人) 支付特定金额.", sourceExcerpt: "A written, unconditional order by one party (drawer) directing another party (drawee) to pay a specific sum of money to a third party (payee) at a set future date.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "cheque",
        term: "支票", sourceTerm: "Cheque",
        trTerm: "Çek",
        question: "支票在土耳其被退票后会发生什么?", sourceQuestion: "What happens if a cheque bounces in Turkey?",
        excerpt: "指示银行从某人账户向持票人或指定收款人支付特定金额的商业可转让票据.", sourceExcerpt: "A commercial negotiable instrument ordering a bank to pay a specific amount of money from a person's account to the bearer or named payee.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "promissory-note",
        term: "本票", sourceTerm: "Promissory Note",
        trTerm: "Bono",
        question: "本票在土耳其是否广泛使用?", sourceQuestion: "Are promissory notes widely used in Turkey?",
        excerpt: "本票 (Bono) 是一方 (出票人) 向另一方 (收款人) 作出的书面承诺, 约定在确定的未来日期支付特定金额.", sourceExcerpt: "A promissory note (Bono) is a written promise by one party (the maker) to pay a specific sum of money to another (the payee) at a determined future date.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "negotiable-instruments",
        term: "可转让票据", sourceTerm: "Negotiable Instruments",
        trTerm: "Kambiyo Senedi",
        question: "可转让票据有何优势?", sourceQuestion: "What is the advantage of a negotiable instrument?",
        excerpt: "可转让票据是保证支付特定金额的专门凭证, 在土耳其法律下主要包括支票、汇票及本票.", sourceExcerpt: "Negotiable instruments are specialized documents guaranteeing the payment of a specific amount of money, primarily encompassing cheques, bills of exchange, and promissory notes under Turkish law.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "presentation",
        term: "提示", sourceTerm: "Presentation",
        trTerm: "İbraz",
        question: "土耳其支票的提示期限是多少?", sourceQuestion: "What is the presentation period for cheques in Turkey?",
        excerpt: "提示是在法律规定的期限内, 以实物或电子方式向银行或付款人正式出示可转让票据 (例如支票), 请求付款的行为.", sourceExcerpt: "Presentation is the formal act of physically or electronically presenting a negotiable instrument (like a cheque) to the bank or drawee for payment within legally mandated timeframes.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "protest",
        term: "拒绝证书", sourceTerm: "Protest",
        trTerm: "Protesto",
        question: "是否始终需要拒绝证书?", sourceQuestion: "Is a protest always required?",
        excerpt: "证明可转让票据已被提示付款或承兑, 但遭拒绝的正式公证声明.", sourceExcerpt: "A formal, notarized declaration attesting that a negotiable instrument was presented for payment or acceptance and was dishonored.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "in-kind-capital",
        term: "非货币出资", sourceTerm: "In-Kind Capital",
        trTerm: "Ayni Sermaye",
        question: "任何资产都可用于非货币出资吗?", sourceQuestion: "Can any asset be contributed as in-kind capital?",
        excerpt: "以现金以外的形式向公司投入资本, 例如房地产、机械、知识产权或现有企业, 须接受法院指定的估值.", sourceExcerpt: "Capital contributed to a company in forms other than cash, such as real estate, machinery, intellectual property, or existing businesses, subject to court-appointed valuation.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "mortgage",
        term: "抵押权", sourceTerm: "Mortgage",
        trTerm: "İpotek",
        question: "如何执行抵押权?", sourceQuestion: "How is a mortgage enforced?",
        excerpt: "抵押权 (İpotek) 是为保障债务支付而在不动产 (房地产) 上设立的物权, 须在土地登记机构办理正式登记.", sourceExcerpt: "A mortgage (İpotek) is a real right established on immovable property (real estate) to secure the payment of a debt, requiring official registration at the Land Registry.",
        tags: ["real-estate"],
        relatedTerms: []
    },
    {
        id: "pledge",
        term: "质权", sourceTerm: "Pledge",
        trTerm: "Rehin",
        question: "能否在不实际交付财产的情况下设立质权?", sourceQuestion: "Can a pledge be established without physical delivery?",
        excerpt: "质权是为担保债务而在动产或权利上设立的担保权益. 传统上, 质押财产须实际交付给债权人.", sourceExcerpt: "A pledge is a security interest created over movable property or rights to secure a debt. Traditionally, the pledged asset must be physically delivered to the creditor.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "commercial-enterprise-pledge",
        term: "商业企业质押", sourceTerm: "Commercial Enterprise Pledge",
        trTerm: "Ticari İşletme Rehni",
        question: "商业企业质押在哪里登记?", sourceQuestion: "Where is a commercial enterprise pledge registered?",
        excerpt: "一种特殊质押, 允许商人将整个商业企业 (包括机械、库存及商号) 作为担保, 而不必移交实际占有.", sourceExcerpt: "A specialized pledge allowing a merchant to use their entire commercial enterprise (including machinery, inventory, and trade name) as collateral without handing over physical possession.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "notice-warning",
        term: "通知 / 催告", sourceTerm: "Notice / Warning",
        trTerm: "İhtarname",
        question: "为什么通过公证人发出 Ihtarname 催告书?", sourceQuestion: "Why use a Notary for an Ihtarname?",
        excerpt: "通常经公证人发送的正式法律通知, 用于正式要求履行义务、宣告履行迟延或终止合同.", sourceExcerpt: "A formal legal notice, typically sent via a Notary Public, to formally demand the performance of an obligation, declare default, or terminate a contract.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "negative-declaratory-action",
        term: "消极确认之诉", sourceTerm: "Negative Declaratory Action",
        trTerm: "Menfi Tespit",
        question: "消极确认之诉是否停止债务执行?", sourceQuestion: "Does a negative declaratory action stop debt execution?",
        excerpt: "债务人提起的诉讼, 请求法院作出具有约束力的确认, 认定其实际上并不负有债权人主张的特定债务.", sourceExcerpt: "A lawsuit filed by a debtor seeking a binding court declaration that they do not actually owe a specific debt claimed by the creditor.",
        tags: ["dispute-resolution"],
        relatedTerms: []
    },
    {
        id: "action-for-restitution",
        term: "返还之诉", sourceTerm: "Action for Restitution",
        trTerm: "İstirdat",
        question: "返还之诉必须在何时提起?", sourceQuestion: "When must an action for restitution be filed?",
        excerpt: "为追回债务人在执行程序中被迫支付、但其依法并不负有的债务款项而提起的诉讼.", sourceExcerpt: "A lawsuit to recover money that a debtor was forced to pay during execution proceedings for a debt that they legally did not owe.",
        tags: ["dispute-resolution"],
        relatedTerms: []
    },
    {
        id: "annulment-of-objection",
        term: "撤销异议", sourceTerm: "Annulment of Objection",
        trTerm: "İtirazın İptali",
        question: "无正当理由的异议是否会受到处罚?", sourceQuestion: "Is there a penalty for unjust objections?",
        excerpt: "债务人正式提出异议并使无判决执行程序停止后, 债权人提起的诉讼, 请求撤销异议并恢复执行.", sourceExcerpt: "A lawsuit filed by a creditor after a debtor formally objects to and halts an execution proceeding without judgment, seeking to annul the objection and resume execution.",
        tags: ["dispute-resolution"],
        relatedTerms: []
    },
    {
        id: "lifting-of-objection",
        term: "解除异议", sourceTerm: "Lifting of Objection",
        trTerm: "İtirazın Kaldırılması",
        question: "任何债务都能在此程序中证明吗?", sourceQuestion: "Can any debt be proven in this procedure?",
        excerpt: "一种比撤销异议更快、范围更窄的替代程序, 可直接向执行法院申请, 但仅限债权人持有严格符合法定要求的债权证明 (例如公证文件) 的情况.", sourceExcerpt: "A faster, narrower alternative to Annulment of Objection, applied directly to the Execution Court, but only permissible if the creditor possesses strict statutory proof of the debt (like a notarized document).",
        tags: ["dispute-resolution"],
        relatedTerms: []
    },
    {
        id: "table-of-ranks",
        term: "债权受偿顺位表", sourceTerm: "Table of Ranks",
        trTerm: "Sıra Cetveli",
        question: "债权受偿顺位表中谁优先受偿?", sourceQuestion: "Who gets paid first in the Table of Ranks?",
        excerpt: "由执行局或破产机构编制的排序清单, 确定相互竞争的债权人从债务人资产清算所得中受偿的优先顺序.", sourceExcerpt: "A ranked list prepared by the execution or bankruptcy office determining the priority order in which competing creditors will be paid from the liquidation of a debtor's assets.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "actio-pauliana",
        term: "债权人撤销权之诉 (Actio Pauliana) / 处分撤销", sourceTerm: "Actio Pauliana / Cancellation of Disposition",
        trTerm: "Tasarrufun İptali",
        question: "哪些转让可以撤销?", sourceQuestion: "What transfers can be canceled?",
        excerpt: "允许债权人撤销债务人为隐藏资产及逃避债务追收而作出的欺诈性资产转让的诉讼.", sourceExcerpt: "A lawsuit allowing creditors to annul fraudulent asset transfers made by a debtor aiming to hide assets and evade debt collection.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "trustee-receiver",
        term: "受托管理人 / 接管人", sourceTerm: "Trustee / Receiver",
        trTerm: "Kayyım",
        question: "何时为公司指定受托管理人?", sourceQuestion: "When is a trustee appointed to a company?",
        excerpt: "法院指定的人员, 在正常管理层无法履职、陷入僵局或被依法暂停职权时, 负责临时管理公司、财产或资产.", sourceExcerpt: "A court-appointed official tasked with temporarily managing a company, an estate, or property when the regular management is incapacitated, deadlocked, or legally suspended.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "concordat-commissioner",
        term: "债务和解重整监督人", sourceTerm: "Concordat Commissioner",
        trTerm: "Konkordato Komiseri",
        question: "监督人是否经营公司?", sourceQuestion: "Does the Commissioner run the company?",
        excerpt: "商事法院指定的独立专家, 在债务和解重整期间监督债务人的企业经营, 并保护债权人利益.", sourceExcerpt: "An independent expert appointed by the commercial court to supervise a debtor's business operations and protect creditors' interests during the concordat restructuring period.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "bankruptcy-administration",
        term: "破产管理机构", sourceTerm: "Bankruptcy Administration",
        trTerm: "İflas İdaresi",
        question: "谁选任破产管理机构?", sourceQuestion: "Who elects the Bankruptcy Administration?",
        excerpt: "破产宣告后组成的正式机构, 负责代表破产财产、收集资产、审查债权并向债权人分配所得.", sourceExcerpt: "The official body formed after a bankruptcy declaration, responsible for representing the bankrupt estate, collecting assets, assessing claims, and distributing proceeds to creditors.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "registration-to-the-bankruptcy-estate",
        term: "向破产财产申报债权", sourceTerm: "Registration to the Bankruptcy Estate",
        trTerm: "Masaya Kayıt",
        question: "申报债权是否有期限?", sourceQuestion: "Is there a deadline for registering claims?",
        excerpt: "债权人向破产管理机构提交债权及支持证据, 以参与清算分配的正式程序.", sourceExcerpt: "The formal process where creditors submit their claims and supporting evidence to the bankruptcy administration to be included in the liquidation distributions.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "doubtful-receivable",
        term: "可疑应收账款", sourceTerm: "Doubtful Receivable",
        trTerm: "Şüpheli Alacak",
        question: "任何未付发票都可被认定为可疑应收账款吗?", sourceQuestion: "Can any unpaid invoice be deemed a doubtful receivable?",
        excerpt: "处于诉讼或执行阶段、收回已变得不确定的商业应收款, 企业可据此计提可税前扣除的准备金.", sourceExcerpt: "A commercial receivable that is in the litigation or execution phase and whose collection has become uncertain, allowing businesses to set aside a tax-deductible provision.",
        tags: ["tax-law"],
        relatedTerms: []
    },
    {
        id: "netting",
        term: "净额结算", sourceTerm: "Netting",
        trTerm: "Mahsuplaşma",
        question: "净额结算与抵销有何区别?", sourceQuestion: "How does netting differ from set-off?",
        excerpt: "将双方之间多项相互义务或金融头寸合并, 形成单一净应付金额的会计及法律过程.", sourceExcerpt: "The accounting and legal process of consolidating multiple mutual obligations or financial positions between two parties to arrive at a single net payable amount.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "set-off",
        term: "抵销", sourceTerm: "Set-Off",
        trTerm: "Takas",
        question: "抵销能否自动进行?", sourceQuestion: "Can set-off be executed automatically?",
        excerpt: "仅通过单方声明, 即可在较小债务金额范围内消灭双方相互、到期及同种类债务的法律权利.", sourceExcerpt: "The legal right to extinguish mutual, due, and homogenous debts between two parties up to the amount of the smaller debt, simply by unilateral declaration.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "reconciliation",
        term: "对账", sourceTerm: "Reconciliation",
        trTerm: "Mutabakat",
        question: "忽视对账单会有什么后果?", sourceQuestion: "What happens if a reconciliation statement is ignored?",
        excerpt: "两个商业当事方核对并正式确认相互账户余额的过程, 以避免日后对应付金额发生争议.", sourceExcerpt: "The process where two commercial parties review and formally agree upon their mutual account balances, preventing future disputes over amounts owed.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "invoice",
        term: "发票", sourceTerm: "Invoice",
        trTerm: "Fatura",
        question: "对发票提出异议的法定期限是多少?", sourceQuestion: "What is the legal deadline to object to an invoice?",
        excerpt: "卖方向买方出具的商业文件, 详细列明提供的货物或服务、价格及税款, 是商业交易的主要证据.", sourceExcerpt: "A commercial document issued by a seller to a buyer detailing the goods or services provided, prices, and taxes, serving as primary evidence of a commercial transaction.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "waybill",
        term: "发货单", sourceTerm: "Waybill",
        trTerm: "İrsaliye",
        question: "土耳其是否强制要求电子发货单?", sourceQuestion: "Is an e-Waybill mandatory in Turkey?",
        excerpt: "严格追踪货物从供应商到买方的实际移动及交付的发运或交货文件, 独立于财务发票.", sourceExcerpt: "A dispatch note or delivery document that strictly tracks the physical movement and delivery of goods from a supplier to a buyer, separate from the financial invoice.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "current-account",
        term: "往来账户", sourceTerm: "Current Account",
        trTerm: "Cari Hesap",
        question: "往来账户多久结算一次?", sourceQuestion: "How often is a current account settled?",
        excerpt: "双方约定不对持续交易产生的相互应收款逐笔主张, 而是定期进行净额结算的商业安排.", sourceExcerpt: "A commercial arrangement where two parties agree that their mutual receivables arising from continuous transactions will not be claimed individually but netted out periodically.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "advance-payment",
        term: "预付款", sourceTerm: "Advance Payment",
        trTerm: "Avans",
        question: "合同未能履行时是否必须退还预付款?", sourceQuestion: "Must an advance payment be returned if the contract fails?",
        excerpt: "买方在货物交付或服务全部完成之前向卖方支付的部分款项, 为合同提供融资或保障.", sourceExcerpt: "A partial payment made by a buyer to a seller before the goods are delivered or services are fully rendered, acting as financing or security for the contract.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "down-payment",
        term: "首付款", sourceTerm: "Down Payment",
        trTerm: "Peşinat",
        question: "首付款能否退还?", sourceQuestion: "Is a down payment refundable?",
        excerpt: "在最终订立合同时预先支付的初始款项, 用于确认承诺. 在土耳其法律下, 根据合同起草方式, 它通常被视为缔约定金或违约金.", sourceExcerpt: "An initial, upfront payment made at the time of finalizing a contract, establishing commitment. In Turkish law, it is often treated as earnest money or a penalty depending on drafting.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "progress-payment",
        term: "进度款", sourceTerm: "Progress Payment",
        trTerm: "Hakediş",
        question: "谁批准进度款?", sourceQuestion: "Who approves a progress payment?",
        excerpt: "根据经确认已完成的特定里程碑或工作比例, 在建筑或长期服务协议中定期向承包商支付的款项.", sourceExcerpt: "Periodic payments made to contractors in construction or long-term service agreements based on the certified completion of specific milestones or work percentages.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "universal-succession",
        term: "概括承继", sourceTerm: "Universal Succession",
        trTerm: "Külli Halefiyet",
        question: "公司法中概括承继何时发生?", sourceQuestion: "When does universal succession occur in corporate law?",
        excerpt: "实体 (或继承人) 自动、完整承受另一主体全部权利、资产及负债, 而无须逐项转让的法律原则.", sourceExcerpt: "A legal principle where an entity (or heir) inherits the entirety of another's rights, assets, and liabilities automatically and completely, without needing individual transfers.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "loan-of-consumption",
        term: "消费借贷", sourceTerm: "Loan of Consumption",
        trTerm: "Karz",
        question: "Karz 借贷协议是否必须计息?", sourceQuestion: "Is interest mandatory in a Karz agreement?",
        excerpt: "一种特定借贷协议, 贷款人将金钱或可替代物的所有权转移给借款人, 借款人负有返还同等数量及质量之物的义务.", sourceExcerpt: "A specific type of loan agreement where the lender transfers ownership of money or fungible goods to the borrower, who is obligated to return the same quantity and quality.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "source-code",
        term: "源代码", sourceTerm: "Source Code",
        trTerm: "Kaynak Kod",
        question: "员工创建的源代码归谁所有?", sourceQuestion: "Who owns the source code created by an employee?",
        excerpt: "人类可读的计算机软件版本. 根据土耳其著作权法, 源代码作为文字作品受到严格保护.", sourceExcerpt: "The human-readable version of computer software. Under Turkish copyright law, source code is strictly protected as a literary work.",
        tags: ["intellectual-property"],
        relatedTerms: []
    },
    {
        id: "service-level-agreement",
        term: "服务级别协议 (SLA)", sourceTerm: "Service Level Agreement (SLA)",
        trTerm: "Hizmet Seviyesi Sözleşmesi",
        question: "未达到 SLA 指标会有什么后果?", sourceQuestion: "What happens if SLA metrics are not met?",
        excerpt: "规定服务提供商必须达到的具体履行标准、正常运行时间及质量指标的合同, 常用于信息技术及外包领域.", sourceExcerpt: "A contract specifying the exact standards of performance, uptime, and quality metrics a service provider must deliver, commonly used in IT and outsourcing.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "outsourcing",
        term: "外包", sourceTerm: "Outsourcing",
        trTerm: "Dış Kaynak",
        question: "外包是否触发员工转移规则?", sourceQuestion: "Does outsourcing trigger employee transfer rules?",
        excerpt: "将原先由企业内部承担的特定业务职能 (例如信息技术、薪酬管理或客户服务), 委托给外部专业服务商的商业做法.", sourceExcerpt: "The business practice of contracting external specialized providers to handle specific business functions (like IT, payroll, or customer service) previously done in-house.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "declaration",
        term: "申报", sourceTerm: "Declaration",
        trTerm: "Beyanname",
        question: "常见的企业税务申报有哪些?", sourceQuestion: "What are the common corporate tax declarations?",
        excerpt: "向政府机关提交的正式、具有法律约束力的声明或文件, 最常见的是税务或海关申报.", sourceExcerpt: "A formal, legally binding statement or document submitted to governmental authorities, most commonly referring to tax or customs declarations.",
        tags: ["tax-law"],
        relatedTerms: []
    },
    {
        id: "accrual",
        term: "税款核定", sourceTerm: "Accrual",
        trTerm: "Tahakkuk",
        question: "什么是税款核定单 (Tahakkuk Fişi)?", sourceQuestion: "What is an accrual slip (Tahakkuk Fişi)?",
        excerpt: "税务机关正式评估及确定纳税义务, 使所计算税款正式到期应付.", sourceExcerpt: "The formal assessment and establishment of a tax liability by the tax authority, making the calculated tax officially due and payable.",
        tags: ["tax-law"],
        relatedTerms: []
    },
    {
        id: "tax-loss",
        term: "税款损失", sourceTerm: "Tax Loss",
        trTerm: "Vergi Ziyaı",
        question: "税款损失适用何种处罚?", sourceQuestion: "What is the penalty for tax loss?",
        excerpt: "纳税人未履行义务, 导致国家损失税收或延迟收到税款时触发的税务处罚机制.", sourceExcerpt: "A tax penalty mechanism triggered when a taxpayer's failure to comply with obligations causes the State to lose tax revenue or receive it late.",
        tags: ["tax-law"],
        relatedTerms: []
    },
    {
        id: "special-irregularity",
        term: "特别程序违规", sourceTerm: "Special Irregularity",
        trTerm: "Özel Usulsüzlük",
        question: "特别程序违规是否独立于税款损失?", sourceQuestion: "Is special irregularity separate from tax loss?",
        excerpt: "因违反严格的程序及文件规则 (例如未开具发票) 而处以的行政税务处罚, 无论是否造成税收损失.", sourceExcerpt: "Administrative tax penalties levied for violating strict procedural and documentation rules, such as failing to issue an invoice, regardless of whether tax revenue was lost.",
        tags: ["tax-law"],
        relatedTerms: []
    },
    {
        id: "independent-audit",
        term: "独立审计", sourceTerm: "Independent Audit",
        trTerm: "Bağımsız Denetim",
        question: "是否所有土耳其公司都须接受独立审计?", sourceQuestion: "Are all Turkish companies subject to independent audit?",
        excerpt: "由持牌外部审计人员对公司财务报表进行客观审查, 以确保符合土耳其财务报告准则 (TFRS).", sourceExcerpt: "An objective examination of a company's financial statements by licensed external auditors to ensure compliance with Turkish Financial Reporting Standards (TFRS).",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "parent-company",
        term: "母公司", sourceTerm: "Parent Company",
        trTerm: "Hakim Şirket",
        question: "母公司能否对子公司债务承担责任?", sourceQuestion: "Can a parent company be held liable for a subsidiary's debts?",
        excerpt: "直接或间接控制另一实体 (子公司) 的公司, 通常通过持有多数表决权或董事会任命权实现控制.", sourceExcerpt: "A company that exerts direct or indirect control over another entity (the subsidiary), usually by holding the majority of voting rights or the right to appoint the board.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "share-ledger",
        term: "股东名册", sourceTerm: "Share Ledger",
        trTerm: "Pay Defteri",
        question: "是否必须记入股东名册?", sourceQuestion: "Is registration in the share ledger mandatory?",
        excerpt: "公司依法保存的正式簿册, 记载记名股东的姓名、地址及持股情况.", sourceExcerpt: "The official statutory book maintained by a company recording the names, addresses, and shareholdings of its registered shareholders.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "board-of-directors-resolution-book",
        term: "董事会决议簿", sourceTerm: "Board of Directors Resolution Book",
        trTerm: "Yönetim Kurulu Karar Defteri",
        question: "每项决定都必须记入此簿册吗?", sourceQuestion: "Must every decision be recorded here?",
        excerpt: "强制设置并经公证的公司簿册, 公司董事会作出的所有正式决定及决议均须记录并签字.", sourceExcerpt: "A mandatory, notarized corporate book where all official decisions and resolutions taken by the company's Board of Directors are recorded and signed.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "inventory",
        term: "财产清册", sourceTerm: "Inventory",
        trTerm: "Envanter",
        question: "财产清册是否具有法律约束力?", sourceQuestion: "Is the inventory legally binding?",
        excerpt: "逐项详细记录公司商业资产、负债、货物及原材料的清册, 须在设立时及每个财政年度末编制.", sourceExcerpt: "A detailed, itemized record of a company's commercial assets, liabilities, goods, and raw materials, required to be prepared at the establishment and end of each fiscal year.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "balance-sheet",
        term: "资产负债表", sourceTerm: "Balance Sheet",
        trTerm: "Bilanço",
        question: "谁批准资产负债表?", sourceQuestion: "Who approves the balance sheet?",
        excerpt: "概括公司在特定时点的资产、负债及股东权益, 反映其财务状况的核心财务报表.", sourceExcerpt: "A core financial statement summarizing a company's assets, liabilities, and shareholders' equity at a specific point in time, reflecting its financial health.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "consortium",
        term: "联合体", sourceTerm: "Consortium",
        trTerm: "Konsorsiyum",
        question: "联合体与合资企业有何区别?", sourceQuestion: "How does a consortium differ from a joint venture?",
        excerpt: "两个或以上实体整合资源以实施特定大型项目的合作组织, 各实体保持独立, 并对各自工作部分分别承担责任.", sourceExcerpt: "A collaborative association of two or more entities pooling their resources to execute a specific, large-scale project while remaining independent and separately liable for their distinct portions of work.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "ordinary-partnership",
        term: "普通合伙", sourceTerm: "Ordinary Partnership",
        trTerm: "Adi Ortaklık",
        question: "普通合伙是否具有商号?", sourceQuestion: "Does an ordinary partnership have a trade name?",
        excerpt: "土耳其债务法典下最简单的商业合伙形式, 不具有独立法律人格, 合伙人对合伙债务承担无限连带责任.", sourceExcerpt: "The simplest form of business partnership under the Turkish Code of Obligations, lacking a separate legal personality, where partners are jointly and unlimitedly liable for partnership debts.",
        tags: ["company-law"],
        relatedTerms: []
    },
    {
        id: "factoring",
        term: "保理", sourceTerm: "Factoring",
        trTerm: "Faktoring",
        question: "保理在土耳其是否受到严格监管?", sourceQuestion: "Is factoring highly regulated in Turkey?",
        excerpt: "企业折价向第三方金融机构 (保理商) 出售应收账款 (发票), 以立即获得现金流的金融交易.", sourceExcerpt: "A financial transaction where a business sells its accounts receivable (invoices) to a third-party financial institution (factor) at a discount to secure immediate cash flow.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "singular-succession",
        term: "特定承继", sourceTerm: "Singular Succession",
        trTerm: "Cüzi Halefiyet",
        question: "特定承继有什么例子?", sourceQuestion: "What is an example of singular succession?",
        excerpt: "仅将特定、单项资产、权利或债务从一方转移给另一方, 而非转移整体财产的法律转移机制.", sourceExcerpt: "A legal transfer mechanism where only a specific, individual asset, right, or debt is transferred from one party to another, as opposed to an entire estate.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "letter-of-intent",
        term: "意向书 (LOI)", sourceTerm: "Letter of Intent (LOI)",
        trTerm: "Niyet Mektubu",
        question: "意向书 (LOI) 在土耳其是否具有法律约束力?", sourceQuestion: "Is an LOI legally binding in Turkey?",
        excerpt: "在起草具有约束力的最终协议之前, 概述拟议合同或并购交易基本条款及共识的初步文件.", sourceExcerpt: "A preliminary document outlining the basic terms and understandings of an anticipated contract or M&A transaction before a binding final agreement is drafted.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "absolute-nullity",
        term: "绝对无效", sourceTerm: "Absolute Nullity",
        trTerm: "Mutlak Butlan",
        question: "绝对无效的合同能否事后补正?", sourceQuestion: "Can a contract with absolute nullity be fixed later?",
        excerpt: "合同因违反强制性法律、公序良俗或欠缺基本形式要求, 自始完全无效的严重法律状态.", sourceExcerpt: "The severe legal status of a contract that is entirely void from its inception because it violates mandatory laws, public morality, or lacks essential form requirements.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "construction-in-return-for-land-share",
        term: "土地份额换建协议", sourceTerm: "Construction in Return for Land Share Agreement",
        trTerm: "Arsa Payı Karşılığı İnşaat Sözleşmesi",
        question: "此协议未经公证是否具有法律约束力?", sourceQuestion: "Is this agreement legally binding if not notarized?",
        excerpt: "土地所有人向承包商转让一定土地份额, 承包商承诺建造建筑物并交付独立单元作为对价的建设协议. 这是土耳其最常见的建设模式.", sourceExcerpt: "A construction agreement where the landowner transfers a certain share of the land to the contractor, and the contractor undertakes to construct a building and deliver independent units in return. It is the most common construction model in Turkey.",
        tags: ["real-estate"],
        relatedTerms: []
    },
    {
        id: "revenue-sharing-construction-agreement",
        term: "收入分成建设协议", sourceTerm: "Revenue Sharing Construction Agreement",
        trTerm: "Hasılat (Gelir) Paylaşımlı İnşaat Sözleşmesi",
        question: "收入分成模式的主要优势是什么?", sourceQuestion: "What is the main advantage of revenue sharing models?",
        excerpt: "承包商以自有融资在土地上开发并销售项目, 将所得总收入的一定比例支付给土地所有人的合同模式.", sourceExcerpt: "A contract model where the contractor develops and sells a project on the land with their own financing, and a certain percentage of the total revenue obtained is paid to the landowner.",
        tags: ["real-estate"],
        relatedTerms: []
    },
    {
        id: "subcontractor-agreement",
        term: "分包协议", sourceTerm: "Subcontractor Agreement",
        trTerm: "Taşeron (Alt Yüklenici) Sözleşmesi",
        question: "总承包商是否仍须就分包商的工作向客户承担责任?", sourceQuestion: "Is the main contractor still liable to the client for the subcontractor's work?",
        excerpt: "总承包商将项目的特定部分 (例如电气、机械或开挖工程) 委托给另一专业公司的协议.", sourceExcerpt: "An agreement where the main contractor delegates a specific part of a project (such as electrical, mechanical, or excavation work) to another specialized company.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "financial-leasing-agreement",
        term: "融资租赁协议", sourceTerm: "Financial Leasing Agreement",
        trTerm: "Finansal Kiralama (Leasing) Sözleşmesi",
        question: "土耳其哪些资产可作为融资租赁标的?", sourceQuestion: "What assets can be subject to financial leasing in Turkey?",
        excerpt: "租赁公司应承租人要求购买资产并将其出租, 同时赋予承租人在期满时取得所有权之权利的融资协议.", sourceExcerpt: "A financing agreement where the leasing company purchases an asset upon the lessee's request and leases it to them, granting the lessee the right to acquire ownership at the end of the term.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "brokerage-agreement",
        term: "居间协议", sourceTerm: "Brokerage Agreement",
        trTerm: "Simsarlık (Tellallık) Sözleşmesi",
        question: "居间人何时有权获得报酬?", sourceQuestion: "When is the broker entitled to their fee?",
        excerpt: "居间人承诺提供订约机会或促成当事人订立合同, 并在合同成功成立时取得报酬的合同 (例如房地产中介协议).", sourceExcerpt: "A contract where the broker undertakes to provide an opportunity or mediate for the establishment of a contract between parties, earning a fee if the contract is successfully formed (e.g., real estate agent agreements).",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "commission-agreement",
        term: "行纪协议", sourceTerm: "Commission Agreement",
        trTerm: "Komisyon Sözleşmesi",
        question: "居间人与行纪人有何区别?", sourceQuestion: "What is the difference between a broker and a commission agent?",
        excerpt: "行纪人承诺以自己名义、为委托人利益买卖可转让票据或动产, 并收取报酬的协议.", sourceExcerpt: "An agreement where a commission agent undertakes to buy or sell negotiable instruments or movable goods in their own name but on the account of the principal, in exchange for a fee.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "carriage-agreement",
        term: "运输协议", sourceTerm: "Carriage Agreement",
        trTerm: "Taşıma (Navlun/Lojistik) Sözleşmesi",
        question: "货物受损时承运人承担何种责任?", sourceQuestion: "What is the liability of the carrier for damaged goods?",
        excerpt: "承运人承诺将货物或旅客安全地从一地运往另一地, 托运人同意支付运费 (运输报酬) 作为对价的协议.", sourceExcerpt: "An agreement where the carrier undertakes to safely transport goods or passengers from one place to another, and the sender agrees to pay the freight (carriage fee) in return.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "consignment-sale-agreement",
        term: "寄售协议", sourceTerm: "Consignment Sale Agreement",
        trTerm: "Konsinye Satış Sözleşmesi",
        question: "寄售协议中谁承担损失风险?", sourceQuestion: "Who bears the risk of loss in a consignment agreement?",
        excerpt: "制造商或批发商在不转移所有权的情况下将货物交给零售商销售的协议. 零售商仅对成功售出的货物付款.", sourceExcerpt: "An agreement where a manufacturer or wholesaler leaves goods with a retailer for sale without transferring ownership. The retailer only pays for the goods that are successfully sold.",
        tags: ["commercial-law"],
        relatedTerms: []
    },
    {
        id: "barter-agreement",
        term: "易货协议", sourceTerm: "Barter Agreement",
        trTerm: "Barter (Trampa/Mal Değişim) Sözleşmesi",
        question: "易货协议在土耳其是否涉及纳税义务?", sourceQuestion: "Does a barter agreement involve tax obligations in Turkey?",
        excerpt: "不使用现金, 直接将一种货物或服务交换为另一种货物或服务的协议.", sourceExcerpt: "An agreement where a good or service is directly exchanged for another good or service without using cash money.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "know-how-agreement",
        term: "专有技术协议", sourceTerm: "Know-How Agreement",
        trTerm: "Know-How (Bilgi Birikimi) Sözleşmesi",
        question: "土耳其法律如何保护专有技术?", sourceQuestion: "How is know-how protected under Turkish law?",
        excerpt: "企业向另一企业授予使用其保密且具有商业价值的技术或管理知识及经验之权利, 并收取费用的合同.", sourceExcerpt: "A contract where a business grants another enterprise the right to use its confidential, commercially valuable technical or administrative knowledge and experience in exchange for a fee.",
        tags: ["intellectual-property"],
        relatedTerms: []
    },
    {
        id: "software-development-agreement",
        term: "软件开发协议", sourceTerm: "Software Development Agreement",
        trTerm: "Yazılım Geliştirme Sözleşmesi",
        question: "定制软件的知识产权归谁所有?", sourceQuestion: "Who owns the intellectual property of the custom software?",
        excerpt: "软件开发者承诺根据客户需求设计并编写定制计算机程序或应用程序的特定合同.", sourceExcerpt: "A specific type of contract where a software developer commits to designing and coding a custom computer program or application tailored to the client's needs.",
        tags: ["intellectual-property"],
        relatedTerms: []
    },
    {
        id: "escrow-agreement",
        term: "托管协议", sourceTerm: "Escrow Agreement",
        trTerm: "Escrow (Emanet) Sözleşmesi",
        question: "土耳其法律是否承认托管协议?", sourceQuestion: "Are escrow agreements recognized in Turkish Law?",
        excerpt: "确保源代码或并购首付款等资产由独立第三方安全保管, 直至特定合同条件得到满足的协议.", sourceExcerpt: "An agreement ensuring that assets, such as source codes or M&A down payments, are securely held by an independent third party until specific contractual conditions are met.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "loan-for-use-agreement",
        term: "借用协议", sourceTerm: "Loan for Use Agreement",
        trTerm: "Ariyet (Kullanım Ödüncü) Sözleşmesi",
        question: "借用协议与租赁协议有何区别?", sourceQuestion: "What is the difference between loan for use and rental agreements?",
        excerpt: "一人允许另一人暂时无偿使用其动产或不动产, 条件是期满时返还同一财产的协议.", sourceExcerpt: "An agreement where a person allows another to temporarily use their movable or immovable property free of charge, with the condition that the exact same property is returned at the end.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "deposit-agreement",
        term: "保管协议", sourceTerm: "Deposit Agreement",
        trTerm: "Vedia (Saklama) Sözleşmesi",
        question: "保管人能否使用受托保管的财产?", sourceQuestion: "Can the depositee use the entrusted property?",
        excerpt: "保管人同意将寄存人交付的动产保存在安全地点, 并应要求返还的合同.", sourceExcerpt: "A contract where the depositee agrees to keep a movable property entrusted to them by the depositor in a safe place and return it upon request.",
        tags: ["contract-law"],
        relatedTerms: []
    },
    {
        id: "enforcement-proceedings",
        term: "执行程序", sourceTerm: "Enforcement Proceedings",
        trTerm: "İcra Takibi",
        question: "土耳其如何通过执行程序追收商业债务?", sourceQuestion: "How are commercial debts collected through enforcement proceedings in Turkey?",
        excerpt: "土耳其执行与破产法下的执行程序 (İcra takibi), 允许债权人通过官方执行局追收未清偿的金钱及非金钱请求, 无论是否已有法院判决.", sourceExcerpt: "Enforcement proceedings (İcra takibi) under the Turkish Execution and Bankruptcy Law allow creditors to collect outstanding monetary and non-monetary claims through official enforcement offices, either with or without a court judgment.",
        tags: ["dispute-resolution", "commercial-law"],
        relatedTerms: ["debt-collection", "preliminary-attachment", "bankruptcy"]
    },
    {
        id: "insolvency",
        term: "资不抵债", sourceTerm: "Insolvency",
        trTerm: "Borca Batıklık",
        question: "土耳其商法下什么构成公司资不抵债?", sourceQuestion: "What constitutes corporate insolvency under Turkish commercial law?",
        excerpt: "资不抵债 (Borca batıklık) 是公司负债超过其资产总价值的状态. 根据土耳其商法典, 资不抵债触发董事的法定义务, 包括通知法院并启动破产或债务和解重整程序.", sourceExcerpt: "Insolvency (Borca batıklık) is a state where a company's liabilities exceed the total value of its assets. Under the Turkish Commercial Code, insolvency triggers legal duties for directors, including notifying the court and initiating bankruptcy or concordat proceedings.",
        tags: ["company-law", "commercial-law"],
        relatedTerms: ["bankruptcy", "concordat", "liquidation"]
    }
];

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = glossaryData;
}

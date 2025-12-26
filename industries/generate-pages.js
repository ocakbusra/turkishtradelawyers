#!/usr/bin/env node

// Industry Page Generator
// Generates individual HTML pages for each industry we serve

const fs = require('fs');
const path = require('path');

// Industry data with SEO-optimized content
const industries = [
    {
        id: "accounting",
        name: "Accounting",
        title: "Accounting Lawyer in Turkey",
        metaDescription: "Expert legal services for accounting firms and financial service providers operating in Turkey. Regulatory compliance, licensing, and cross-border advisory.",
        intro: "The accounting and auditing sector in Turkey is subject to comprehensive regulatory oversight. Foreign accounting firms seeking to operate in the Turkish market must navigate complex licensing requirements, professional standards, and compliance obligations. Our legal team provides specialized guidance to help accounting practices establish and maintain their operations in full compliance with Turkish law.",
        services: [
            "Licensing and registration with Turkish regulatory authorities",
            "Compliance with Turkish Accounting Standards (TMS) and Turkish Financial Reporting Standards (TFRS)",
            "Partnership and corporate structuring for accounting firms",
            "Professional liability and indemnity matters",
            "Cross-border service agreements and secondment arrangements",
            "Regulatory investigations and disciplinary proceedings"
        ],
        issues: [
            "Public Oversight, Accounting and Auditing Standards Authority (KGK) registration requirements",
            "Professional qualification recognition for foreign accountants",
            "Anti-money laundering (AML) compliance obligations",
            "Data protection requirements under KVKK for client financial data",
            "Tax advisory service regulations and limitations",
            "Audit independence rules and rotation requirements"
        ],
        keywords: ["accounting lawyer Turkey", "Turkish accounting regulations", "KGK registration", "audit firm licensing Turkey"]
    },
    {
        id: "agriculture",
        name: "Agriculture",
        title: "Agriculture Lawyer in Turkey",
        metaDescription: "Legal services for agricultural businesses in Turkey. Land acquisition, farming regulations, export compliance, and agribusiness contracts.",
        intro: "Turkey's agricultural sector offers significant opportunities for foreign investment, supported by fertile land, diverse climate zones, and strategic export positioning. However, agricultural operations are subject to specific regulations regarding land ownership, environmental compliance, and product standards. Our legal team assists agribusiness clients with the full spectrum of legal matters affecting agricultural enterprises in Turkey.",
        services: [
            "Agricultural land acquisition and leasing arrangements",
            "Farming operation licensing and permits",
            "Agricultural product export and import compliance",
            "Contract farming and supply chain agreements",
            "Agricultural cooperative formation and governance",
            "Water rights and irrigation permits"
        ],
        issues: [
            "Foreign ownership restrictions on agricultural land",
            "Environmental regulations affecting farming operations",
            "Organic certification and product labeling requirements",
            "Agricultural subsidy and incentive programs",
            "Phytosanitary and veterinary compliance for exports",
            "Land consolidation and zoning regulations"
        ],
        keywords: ["agriculture lawyer Turkey", "Turkish agricultural law", "farmland acquisition Turkey", "agribusiness legal services"]
    },
    {
        id: "airlines-aviation",
        name: "Airlines & Aviation",
        title: "Airlines & Aviation Lawyer in Turkey",
        metaDescription: "Specialized legal counsel for airlines and aviation companies in Turkey. Air operator certificates, route licensing, and aviation regulatory compliance.",
        intro: "Turkey's strategic geographic position makes it a critical hub for international aviation. The aviation sector is governed by comprehensive regulations overseen by the Directorate General of Civil Aviation (SHGM). Our aviation law practice provides end-to-end legal support for airlines, aircraft operators, and aviation service providers seeking to operate in or through Turkish airspace.",
        services: [
            "Air Operator Certificate (AOC) applications and renewals",
            "Route licensing and traffic rights negotiations",
            "Aircraft registration and deregistration",
            "Aviation finance and aircraft leasing transactions",
            "Ground handling and airport services agreements",
            "Aviation accident investigation and liability matters"
        ],
        issues: [
            "SHGM regulatory requirements and safety oversight",
            "Bilateral air service agreement compliance",
            "Slot allocation at Turkish airports",
            "Passenger rights regulations aligned with EU standards",
            "Aviation security requirements",
            "Environmental regulations including emissions standards"
        ],
        keywords: ["aviation lawyer Turkey", "airline licensing Turkey", "SHGM compliance", "aircraft registration Turkey"]
    },
    {
        id: "alternative-dispute-resolution",
        name: "Alternative Dispute Resolution",
        title: "Alternative Dispute Resolution Lawyer in Turkey",
        metaDescription: "Expert ADR legal services in Turkey. Arbitration, mediation, and dispute resolution for commercial conflicts.",
        intro: "Turkey has developed a robust alternative dispute resolution framework that provides efficient alternatives to traditional litigation. With mandatory mediation requirements for many commercial disputes and growing recognition of arbitration, understanding Turkey's ADR landscape is essential for businesses operating in the country. Our dispute resolution team brings extensive experience in guiding clients through all forms of ADR proceedings.",
        services: [
            "Domestic and international commercial arbitration",
            "Mandatory mediation for commercial disputes",
            "Expert determination and adjudication",
            "Negotiation and settlement facilitation",
            "Enforcement of arbitral awards and mediation settlements",
            "ADR clause drafting and dispute resolution planning"
        ],
        issues: [
            "Mandatory mediation requirements under Turkish law",
            "Istanbul Arbitration Centre (ISTAC) proceedings",
            "Recognition and enforcement of foreign arbitral awards under the New York Convention",
            "Arbitrator selection and challenge procedures",
            "Interim measures in arbitration proceedings",
            "Cost and time considerations in Turkish ADR"
        ],
        keywords: ["arbitration lawyer Turkey", "mediation Turkey", "dispute resolution Turkey", "ISTAC arbitration"]
    },
    {
        id: "alternative-medicine",
        name: "Alternative Medicine",
        title: "Alternative Medicine Lawyer in Turkey",
        metaDescription: "Legal services for alternative medicine practitioners and wellness businesses in Turkey. Licensing, regulatory compliance, and practice establishment.",
        intro: "The alternative and complementary medicine sector in Turkey operates within a specific regulatory framework that balances patient safety with practitioner interests. Traditional and complementary medicine practices are subject to Ministry of Health oversight and require proper licensing and qualification verification. Our healthcare law team assists practitioners and businesses in navigating these requirements.",
        services: [
            "Practice licensing and registration applications",
            "Facility establishment permits and compliance",
            "Product registration for natural remedies and supplements",
            "Advertising and marketing compliance",
            "Professional liability and insurance matters",
            "Cross-border practice arrangements"
        ],
        issues: [
            "Traditional and Complementary Medicine Practice Regulation requirements",
            "Practitioner qualification and certification standards",
            "Scope of practice limitations and prohibited treatments",
            "Health claims and advertising restrictions",
            "Import regulations for alternative medicine products",
            "Patient consent and documentation requirements"
        ],
        keywords: ["alternative medicine lawyer Turkey", "complementary medicine regulations", "wellness business Turkey", "natural health practice licensing"]
    },
    {
        id: "animation",
        name: "Animation",
        title: "Animation Lawyer in Turkey",
        metaDescription: "Legal services for animation studios and digital content creators in Turkey. IP protection, production agreements, and media regulations.",
        intro: "Turkey's animation and digital content industry has experienced significant growth, supported by government incentives and a talented creative workforce. Animation studios and content creators must navigate intellectual property protection, broadcasting regulations, and complex production agreements. Our media and entertainment law practice provides comprehensive legal support for animation businesses.",
        services: [
            "Intellectual property protection for animated content",
            "Production and co-production agreements",
            "Distribution and licensing arrangements",
            "Talent and employment contracts",
            "Government incentive and subsidy applications",
            "Broadcasting and streaming platform compliance"
        ],
        issues: [
            "Copyright protection for animated works",
            "RTÜK broadcasting regulations for animated content",
            "Child protection standards in animation",
            "International co-production treaty benefits",
            "Tax incentives for animation production",
            "Music and voice-over licensing requirements"
        ],
        keywords: ["animation lawyer Turkey", "animation studio legal", "digital content Turkey", "animation IP protection"]
    },
    {
        id: "apparel-fashion",
        name: "Apparel & Fashion",
        title: "Apparel & Fashion Lawyer in Turkey",
        metaDescription: "Legal services for fashion brands and apparel companies in Turkey. Manufacturing agreements, trademark protection, and retail compliance.",
        intro: "Turkey is one of the world's leading textile and apparel manufacturing hubs, offering significant opportunities for fashion brands and apparel companies. The sector requires careful attention to intellectual property protection, manufacturing agreements, and retail regulations. Our commercial law team provides comprehensive legal support for fashion and apparel businesses operating in Turkey.",
        services: [
            "Trademark and design registration and enforcement",
            "Manufacturing and supply agreements",
            "Retail franchise and distribution arrangements",
            "E-commerce and online retail compliance",
            "Anti-counterfeiting strategies and enforcement",
            "Employment matters for retail operations"
        ],
        issues: [
            "Trademark protection and brand enforcement",
            "Product safety and labeling requirements",
            "Consumer protection regulations for retail",
            "Customs procedures for textile imports and exports",
            "Sustainability and environmental compliance",
            "Personal data protection for customer databases"
        ],
        keywords: ["fashion lawyer Turkey", "apparel legal services", "textile manufacturing Turkey", "fashion brand protection"]
    },
    {
        id: "architecture-planning",
        name: "Architecture & Planning",
        title: "Architecture & Planning Lawyer in Turkey",
        metaDescription: "Legal services for architects and urban planners in Turkey. Professional licensing, project contracts, and construction regulations.",
        intro: "Architectural and urban planning services in Turkey are subject to professional licensing requirements and comprehensive project regulations. Foreign architects and planning firms must navigate registration procedures and understand Turkey's construction and zoning frameworks. Our construction and real estate law team provides specialized legal support for architecture and planning professionals.",
        services: [
            "Professional registration with the Chamber of Architects",
            "Project contracts and fee arrangements",
            "Design liability and professional indemnity matters",
            "Zoning and land use compliance",
            "Building permit applications and appeals",
            "International project partnerships and joint ventures"
        ],
        issues: [
            "Professional qualification recognition for foreign architects",
            "Chamber of Architects (TMMOB) membership requirements",
            "Building code compliance and certification",
            "Heritage and conservation area regulations",
            "Environmental impact assessment requirements",
            "Professional liability limitations and insurance"
        ],
        keywords: ["architecture lawyer Turkey", "urban planning legal", "architect licensing Turkey", "construction law Turkey"]
    },
    {
        id: "arts-crafts",
        name: "Arts & Crafts",
        title: "Arts & Crafts Lawyer in Turkey",
        metaDescription: "Legal services for artists, craftspeople, and creative businesses in Turkey. IP protection, gallery agreements, and export compliance.",
        intro: "Turkey's rich artistic heritage and thriving contemporary art scene create diverse opportunities for artists, craftspeople, and creative businesses. Legal considerations include intellectual property protection, cultural property regulations, and commercial arrangements with galleries and collectors. Our arts and entertainment law practice provides tailored legal support for the creative sector.",
        services: [
            "Copyright and moral rights protection",
            "Gallery representation and consignment agreements",
            "Artist residency and commission contracts",
            "Cultural property export compliance",
            "Art authentication and provenance matters",
            "Collective management organization dealings"
        ],
        issues: [
            "Copyright protection for artistic works",
            "Cultural heritage and antiquities regulations",
            "VAT and customs for art transactions",
            "Resale royalty rights (droit de suite)",
            "Insurance and transportation for artworks",
            "Import and export of cultural property"
        ],
        keywords: ["arts lawyer Turkey", "artist legal services", "art gallery law", "cultural property Turkey"]
    },
    {
        id: "automotive",
        name: "Automotive",
        title: "Automotive Lawyer in Turkey",
        metaDescription: "Expert legal services for automotive manufacturers and suppliers in Turkey. Type approval, dealer networks, and automotive regulations.",
        intro: "Turkey is a major automotive manufacturing hub with significant production capacity for both passenger vehicles and commercial vehicles. The automotive sector is subject to comprehensive type approval, environmental, and consumer protection regulations. Our automotive industry practice provides specialized legal counsel for manufacturers, suppliers, and distributors operating in the Turkish market.",
        services: [
            "Type approval and vehicle certification",
            "Manufacturing facility establishment and licensing",
            "Dealer and distributor network agreements",
            "Automotive supply chain contracts",
            "Product recall and liability matters",
            "Investment incentives for automotive manufacturing"
        ],
        issues: [
            "Vehicle type approval and homologation requirements",
            "Emissions standards and environmental compliance",
            "Consumer protection and warranty obligations",
            "Competition law in dealer relationships",
            "Customs procedures for automotive components",
            "Industrial zone incentives for automotive investment"
        ],
        keywords: ["automotive lawyer Turkey", "vehicle type approval", "car manufacturer Turkey", "automotive regulations"]
    },
    {
        id: "aviation-aerospace",
        name: "Aviation & Aerospace",
        title: "Aviation & Aerospace Lawyer in Turkey",
        metaDescription: "Legal services for aerospace manufacturers and defense contractors in Turkey. Export controls, joint ventures, and aerospace regulations.",
        intro: "Turkey's aerospace and defense sector has experienced substantial growth, with increasing domestic manufacturing capabilities and international partnerships. The sector is subject to strict export control regulations, security clearance requirements, and complex procurement procedures. Our aerospace practice provides comprehensive legal support for companies operating in this strategic industry.",
        services: [
            "Defense procurement and government contracting",
            "International joint ventures and partnerships",
            "Export control and sanctions compliance",
            "Technology transfer agreements",
            "Intellectual property protection for aerospace innovations",
            "Offset and industrial participation arrangements"
        ],
        issues: [
            "Defense industry security clearance requirements",
            "Export licensing for dual-use technologies",
            "Foreign investment restrictions in defense sector",
            "Government contract compliance and audit procedures",
            "Industrial property rights in defense contracts",
            "International traffic in arms regulations (ITAR) considerations"
        ],
        keywords: ["aerospace lawyer Turkey", "defense contractor Turkey", "aviation manufacturing", "export controls Turkey"]
    },
    {
        id: "banking",
        name: "Banking",
        title: "Banking Lawyer in Turkey",
        metaDescription: "Comprehensive legal services for banks and financial institutions in Turkey. BRSA licensing, regulatory compliance, and banking transactions.",
        intro: "Turkey's banking sector operates under a robust regulatory framework overseen by the Banking Regulation and Supervision Agency (BRSA). Foreign banks seeking to establish operations in Turkey face comprehensive licensing requirements and ongoing compliance obligations. Our banking and finance practice provides end-to-end legal support for banks and financial institutions.",
        services: [
            "Banking license applications and regulatory approvals",
            "Branch and representative office establishment",
            "Loan documentation and syndicated lending",
            "Project and acquisition financing",
            "Regulatory compliance and reporting",
            "Bank restructuring and resolution matters"
        ],
        issues: [
            "BRSA licensing and capital requirements",
            "Consumer protection regulations for banking products",
            "Anti-money laundering and sanctions compliance",
            "Data protection requirements for customer information",
            "Interest rate regulations and usury limits",
            "Digital banking and fintech regulatory framework"
        ],
        keywords: ["banking lawyer Turkey", "bank licensing Turkey", "BRSA compliance", "financial institution Turkey"]
    },
    {
        id: "biotechnology",
        name: "Biotechnology",
        title: "Biotechnology Lawyer in Turkey",
        metaDescription: "Legal services for biotechnology companies in Turkey. Research regulations, IP protection, and biotech licensing compliance.",
        intro: "Turkey's biotechnology sector is growing, supported by research institutions and increasing investment in life sciences. Biotechnology companies must navigate complex regulatory frameworks covering research activities, product approvals, and intellectual property protection. Our life sciences practice provides specialized legal counsel for biotechnology enterprises.",
        services: [
            "Research and development agreements",
            "Intellectual property protection for biotech innovations",
            "Regulatory pathway strategy and submissions",
            "Clinical trial agreements and site contracts",
            "Licensing and technology transfer arrangements",
            "Biosafety and bioethics compliance"
        ],
        issues: [
            "Biosafety regulations and GMO restrictions",
            "Clinical trial authorization requirements",
            "Patent protection for biotechnological inventions",
            "Data exclusivity and regulatory protection",
            "Bioethics committee approvals",
            "Environmental release regulations for GMOs"
        ],
        keywords: ["biotechnology lawyer Turkey", "biotech regulations", "life sciences legal", "GMO regulations Turkey"]
    },
    {
        id: "broadcast-media",
        name: "Broadcast Media",
        title: "Broadcast Media Lawyer in Turkey",
        metaDescription: "Legal services for broadcasters and media companies in Turkey. RTÜK licensing, content regulations, and media compliance.",
        intro: "Turkey's broadcast media sector operates under the oversight of the Radio and Television Supreme Council (RTÜK). Broadcasting activities require proper licensing, and content is subject to comprehensive regulations. Our media law practice provides specialized legal support for domestic and international broadcasters operating in the Turkish market.",
        services: [
            "Broadcasting license applications and renewals",
            "Content compliance and regulatory advisory",
            "Advertising and sponsorship regulations",
            "Program acquisition and format licensing",
            "Digital platform and OTT service compliance",
            "Regulatory proceedings and sanctions defense"
        ],
        issues: [
            "RTÜK licensing categories and requirements",
            "Content restrictions and broadcasting standards",
            "Advertising time limits and product placement rules",
            "Must-carry obligations for platforms",
            "Protection of minors regulations",
            "News broadcasting requirements and balance obligations"
        ],
        keywords: ["broadcast lawyer Turkey", "media licensing Turkey", "RTÜK compliance", "television regulations Turkey"]
    },
    {
        id: "building-materials",
        name: "Building Materials",
        title: "Building Materials Lawyer in Turkey",
        metaDescription: "Legal services for building materials manufacturers and suppliers in Turkey. Product certification, distribution agreements, and construction standards.",
        intro: "Turkey's construction sector drives substantial demand for building materials, with both domestic manufacturing and significant imports. Building materials are subject to product certification requirements and must comply with Turkish construction standards. Our construction industry practice provides comprehensive legal support for building materials businesses.",
        services: [
            "Product certification and CE marking compliance",
            "Manufacturing facility licensing",
            "Distribution and dealership agreements",
            "Construction project supply contracts",
            "Product liability and warranty matters",
            "Import and export procedures for building materials"
        ],
        issues: [
            "Turkish Standards Institution (TSE) certification requirements",
            "Construction Products Regulation compliance",
            "Environmental and sustainability standards",
            "Competition law in distribution networks",
            "Customs classification for building materials",
            "Product liability under Turkish law"
        ],
        keywords: ["building materials lawyer Turkey", "construction materials", "TSE certification", "building product regulations"]
    },
    {
        id: "business-supplies-equipment",
        name: "Business Supplies & Equipment",
        title: "Business Supplies & Equipment Lawyer in Turkey",
        metaDescription: "Legal services for business equipment suppliers in Turkey. Distribution agreements, procurement contracts, and commercial compliance.",
        intro: "The business supplies and equipment sector in Turkey serves a diverse commercial market with varied legal requirements depending on product categories. Companies operating in this sector must navigate distribution arrangements, public procurement opportunities, and product compliance. Our commercial law team provides practical legal support for business supply companies.",
        services: [
            "Distribution and agency agreements",
            "Public procurement bid preparation and compliance",
            "Supply and service contracts",
            "Equipment leasing and financing arrangements",
            "Warranty and maintenance agreements",
            "E-commerce platform compliance"
        ],
        issues: [
            "Product safety and compliance requirements",
            "Public procurement regulations and restrictions",
            "Competition law in distribution arrangements",
            "Consumer protection for B2B transactions",
            "Import procedures and customs compliance",
            "Commercial warranty obligations"
        ],
        keywords: ["business equipment lawyer Turkey", "office supplies legal", "distribution agreements Turkey", "B2B legal services"]
    },
    {
        id: "capital-markets",
        name: "Capital Markets",
        title: "Capital Markets Lawyer in Turkey",
        metaDescription: "Expert legal services for capital markets transactions in Turkey. IPOs, securities offerings, and CMB regulatory compliance.",
        intro: "Turkey's capital markets operate under the oversight of the Capital Markets Board (CMB), with Borsa İstanbul serving as the primary exchange. Capital markets transactions require careful regulatory compliance and disclosure. Our capital markets practice provides comprehensive legal support for issuers, investors, and financial intermediaries.",
        services: [
            "Initial public offerings and listings",
            "Debt and equity securities offerings",
            "Regulatory compliance and CMB filings",
            "Investment fund formation and regulation",
            "Mergers and acquisitions of listed companies",
            "Securities litigation and enforcement matters"
        ],
        issues: [
            "CMB registration and disclosure requirements",
            "Prospectus preparation and approval procedures",
            "Insider trading and market abuse regulations",
            "Tender offer and squeeze-out rules",
            "Continuous disclosure obligations",
            "Corporate governance requirements for listed companies"
        ],
        keywords: ["capital markets lawyer Turkey", "IPO Turkey", "CMB compliance", "securities law Turkey"]
    },
    {
        id: "chemicals",
        name: "Chemicals",
        title: "Chemicals Lawyer in Turkey",
        metaDescription: "Legal services for chemical manufacturers and distributors in Turkey. REACH-like compliance, hazardous substances, and environmental regulations.",
        intro: "Turkey's chemical industry is subject to comprehensive regulations addressing product safety, environmental protection, and occupational health. The regulatory framework has been increasingly aligned with EU standards. Our environmental and product regulatory practice provides specialized legal counsel for chemical industry participants.",
        services: [
            "Chemical inventory and notification requirements",
            "Hazardous substance classification and labeling",
            "Environmental permit applications",
            "Manufacturing and storage facility licensing",
            "Import and export compliance for chemicals",
            "Product stewardship and supply chain obligations"
        ],
        issues: [
            "KKDIK (Turkish REACH) registration requirements",
            "CLP classification and labeling obligations",
            "Restricted substances and authorization requirements",
            "Waste management and disposal regulations",
            "Occupational health and safety for chemical handling",
            "Transport of dangerous goods compliance"
        ],
        keywords: ["chemicals lawyer Turkey", "chemical regulations", "KKDIK compliance", "hazardous substances Turkey"]
    },
    {
        id: "civic-social-organization",
        name: "Civic & Social Organization",
        title: "Civic & Social Organization Lawyer in Turkey",
        metaDescription: "Legal services for NGOs, foundations, and associations in Turkey. Registration, governance, and nonprofit compliance.",
        intro: "Civil society organizations in Turkey operate under specific legal frameworks governing their establishment, activities, and funding. Foreign organizations seeking to operate in Turkey must understand the registration requirements and operational limitations. Our nonprofit law practice provides comprehensive legal support for civic and social organizations.",
        services: [
            "Association and foundation establishment",
            "Foreign NGO branch registration",
            "Governance and board advisory",
            "Grant compliance and funding agreements",
            "Regulatory reporting and compliance",
            "Tax exemption applications and maintenance"
        ],
        issues: [
            "Association and foundation registration procedures",
            "Foreign funding restrictions and reporting requirements",
            "Public benefit status applications",
            "Tax treatment of nonprofit organizations",
            "Volunteer and employment regulations",
            "Data protection for membership databases"
        ],
        keywords: ["NGO lawyer Turkey", "nonprofit legal services", "foundation registration Turkey", "association law Turkey"]
    },
    {
        id: "civil-engineering",
        name: "Civil Engineering",
        title: "Civil Engineering Lawyer in Turkey",
        metaDescription: "Legal services for civil engineering firms and infrastructure projects in Turkey. Contract drafting, procurement, and construction disputes.",
        intro: "Turkey's substantial infrastructure development program creates significant opportunities for civil engineering firms. Infrastructure projects involve complex procurement procedures, detailed contractual arrangements, and specific regulatory requirements. Our construction law practice provides specialized legal support for civil engineering companies.",
        services: [
            "Infrastructure project contracts (FIDIC and bespoke)",
            "Public-private partnership (PPP) transactions",
            "Construction permit and environmental approvals",
            "Project finance and security structures",
            "Construction dispute resolution and claims",
            "Joint venture and consortium agreements"
        ],
        issues: [
            "Public procurement regulations for infrastructure",
            "Build-operate-transfer (BOT) and similar models",
            "Environmental impact assessment requirements",
            "Construction insurance and bonding",
            "Payment and retention practices",
            "Delay and disruption claims procedures"
        ],
        keywords: ["civil engineering lawyer Turkey", "infrastructure legal", "construction contracts Turkey", "PPP projects Turkey"]
    },
    {
        id: "commercial-real-estate",
        name: "Commercial Real Estate",
        title: "Commercial Real Estate Lawyer in Turkey",
        metaDescription: "Expert legal services for commercial property transactions in Turkey. Acquisitions, leasing, development, and real estate investment.",
        intro: "Turkey's commercial real estate market offers diverse investment opportunities across office, retail, industrial, and hospitality sectors. Real estate transactions require careful due diligence and understanding of local regulations. Our real estate practice provides comprehensive legal support for investors, developers, and occupiers.",
        services: [
            "Property acquisition and sale transactions",
            "Commercial leasing negotiations and documentation",
            "Real estate development and construction agreements",
            "Real estate investment structuring",
            "Due diligence and title investigation",
            "Zoning and planning matters"
        ],
        issues: [
            "Foreign ownership restrictions and procedures",
            "Title registration and land registry procedures",
            "Zoning compliance and development rights",
            "Tenant protection regulations in commercial leases",
            "Real estate taxation (title deed fees, rental income)",
            "Mortgage and security interests over property"
        ],
        keywords: ["commercial real estate lawyer Turkey", "property investment Turkey", "commercial lease Turkey", "real estate acquisition"]
    },
    {
        id: "computer-network-security",
        name: "Computer & Network Security",
        title: "Computer & Network Security Lawyer in Turkey",
        metaDescription: "Legal services for cybersecurity companies in Turkey. Data protection, incident response, and security compliance.",
        intro: "Cybersecurity has become a critical concern for businesses operating in Turkey, with increasing regulatory requirements for data protection and incident response. Cybersecurity service providers must navigate complex compliance frameworks. Our technology law practice provides specialized legal counsel for the cybersecurity sector.",
        services: [
            "Cybersecurity compliance program development",
            "Data breach notification and response",
            "Security vendor contracts and SLAs",
            "Critical infrastructure protection compliance",
            "Incident investigation and regulatory coordination",
            "Cyber insurance policy review and claims"
        ],
        issues: [
            "Personal Data Protection Law (KVKK) security requirements",
            "Critical infrastructure protection regulations",
            "Sector-specific security requirements (banking, telecom)",
            "Data localization and transfer restrictions",
            "Cybercrime investigation cooperation",
            "Security certification and audit requirements"
        ],
        keywords: ["cybersecurity lawyer Turkey", "network security legal", "data breach Turkey", "KVKK security compliance"]
    },
    {
        id: "computer-games",
        name: "Computer Games",
        title: "Computer Games Lawyer in Turkey",
        metaDescription: "Legal services for game developers and publishers in Turkey. IP protection, publishing agreements, and gaming regulations.",
        intro: "Turkey's gaming industry has grown substantially, with both domestic developers and international publishers active in the market. Gaming companies must navigate intellectual property protection, platform requirements, and emerging regulatory frameworks. Our entertainment law practice provides comprehensive legal support for the gaming sector.",
        services: [
            "Game development and publishing agreements",
            "Intellectual property protection and licensing",
            "Platform and distribution arrangements",
            "In-game purchase and monetization compliance",
            "Esports contracts and event agreements",
            "Age rating and content compliance"
        ],
        issues: [
            "Copyright and trademark protection for games",
            "Consumer protection for in-game purchases",
            "Age classification and content restrictions",
            "Data protection for player information",
            "Virtual currency and gambling regulations",
            "Terms of service and EULA enforcement"
        ],
        keywords: ["game lawyer Turkey", "video game legal", "esports lawyer Turkey", "game publishing Turkey"]
    },
    {
        id: "computer-hardware",
        name: "Computer Hardware",
        title: "Computer Hardware Lawyer in Turkey",
        metaDescription: "Legal services for computer hardware manufacturers and distributors in Turkey. Product certification, distribution networks, and import compliance.",
        intro: "The computer hardware sector in Turkey involves both domestic assembly and significant imports, subject to product certification and compliance requirements. Hardware companies must navigate complex distribution arrangements and technical regulations. Our technology law practice provides comprehensive legal support for hardware businesses.",
        services: [
            "Product certification and compliance",
            "Distribution and reseller agreements",
            "Manufacturing and assembly arrangements",
            "Import procedures and customs classification",
            "Warranty and after-sales service obligations",
            "Technology partnership agreements"
        ],
        issues: [
            "CE marking and product safety requirements",
            "WEEE (electronic waste) regulations",
            "Energy efficiency labeling requirements",
            "Import duties and tariff classifications",
            "Competition law in distribution networks",
            "Warranty obligations and consumer rights"
        ],
        keywords: ["computer hardware lawyer Turkey", "IT hardware legal", "electronics distribution Turkey", "hardware compliance"]
    },
    {
        id: "computer-networking",
        name: "Computer Networking",
        title: "Computer Networking Lawyer in Turkey",
        metaDescription: "Legal services for networking equipment providers and system integrators in Turkey. Telecommunications compliance and infrastructure projects.",
        intro: "Computer networking infrastructure in Turkey is subject to telecommunications regulations and technical standards. Network equipment providers and system integrators must comply with certification requirements and sector-specific regulations. Our technology law practice provides specialized legal counsel for networking companies.",
        services: [
            "Telecommunications equipment certification",
            "Network infrastructure project contracts",
            "System integration and managed services agreements",
            "Vendor and supplier arrangements",
            "Data center and cloud compliance",
            "Critical infrastructure project participation"
        ],
        issues: [
            "ICTA (BTK) certification requirements for network equipment",
            "Telecommunications infrastructure regulations",
            "Data localization requirements for certain sectors",
            "Network security and lawful interception compliance",
            "Spectrum and frequency licensing",
            "Electronic communications privacy requirements"
        ],
        keywords: ["networking lawyer Turkey", "telecommunications legal", "network infrastructure Turkey", "BTK compliance"]
    },
    {
        id: "computer-software",
        name: "Computer Software",
        title: "Computer Software Lawyer in Turkey",
        metaDescription: "Legal services for software companies in Turkey. Licensing, IP protection, SaaS agreements, and software development contracts.",
        intro: "Turkey's software industry spans enterprise solutions, consumer applications, and software development services. Software companies require robust intellectual property protection and well-structured commercial agreements. Our technology law practice provides comprehensive legal support for software businesses.",
        services: [
            "Software licensing and SaaS agreements",
            "Software development and outsourcing contracts",
            "Intellectual property protection and enforcement",
            "Open source compliance and licensing",
            "Data protection and privacy compliance",
            "Technology venture structuring and financing"
        ],
        issues: [
            "Copyright protection for software under Turkish law",
            "Trade secret protection for source code",
            "Data protection requirements for software processing personal data",
            "Consumer protection for B2C software",
            "E-signature and electronic contract regulations",
            "Software export controls and licensing"
        ],
        keywords: ["software lawyer Turkey", "SaaS legal Turkey", "software licensing", "IT legal services Turkey"]
    },
    {
        id: "construction",
        name: "Construction",
        title: "Construction Lawyer in Turkey",
        metaDescription: "Expert legal services for construction companies in Turkey. Contract negotiation, dispute resolution, and construction compliance.",
        intro: "Turkey's construction sector is one of the largest globally, with significant domestic activity and Turkish contractors operating internationally. Construction projects involve complex contractual arrangements, regulatory compliance, and often disputes requiring resolution. Our construction law practice provides comprehensive legal support throughout the project lifecycle.",
        services: [
            "Construction contract drafting and negotiation",
            "Project structuring and procurement advisory",
            "Building permit and regulatory approvals",
            "Construction dispute resolution and arbitration",
            "Claims preparation and defense",
            "Contractor registration and licensing"
        ],
        issues: [
            "Building permit and zoning compliance",
            "Construction contract payment security",
            "Delay and disruption claims",
            "Defects liability and warranty periods",
            "Health and safety regulations",
            "Insurance and bonding requirements"
        ],
        keywords: ["construction lawyer Turkey", "building contracts", "construction dispute Turkey", "contractor legal services"]
    },
    {
        id: "consumer-electronics",
        name: "Consumer Electronics",
        title: "Consumer Electronics Lawyer in Turkey",
        metaDescription: "Legal services for consumer electronics companies in Turkey. Product compliance, distribution, warranty obligations, and retail regulations.",
        intro: "Turkey represents a significant consumer electronics market with strong demand for domestic and imported products. Consumer electronics companies must navigate product certification, warranty obligations, and retail regulations. Our consumer products practice provides comprehensive legal support for electronics businesses.",
        services: [
            "Product certification and safety compliance",
            "Warranty and after-sales service programs",
            "Distribution and retail agreements",
            "E-commerce platform compliance",
            "Product recall procedures",
            "Consumer complaint handling systems"
        ],
        issues: [
            "CE marking and technical standards compliance",
            "Consumer warranty rights and obligations",
            "Electronic waste (WEEE) regulations",
            "Energy labeling requirements",
            "Distance selling regulations",
            "Product liability under Turkish law"
        ],
        keywords: ["consumer electronics lawyer Turkey", "electronics compliance", "warranty law Turkey", "electronics distribution"]
    },
    {
        id: "consumer-goods",
        name: "Consumer Goods",
        title: "Consumer Goods Lawyer in Turkey",
        metaDescription: "Legal services for consumer goods companies in Turkey. Product regulations, distribution networks, and consumer protection compliance.",
        intro: "Turkey's consumer goods market presents substantial opportunities for domestic and international brands. Consumer goods companies must comply with product safety regulations, consumer protection requirements, and distribution law. Our consumer products practice provides comprehensive legal support for the FMCG sector.",
        services: [
            "Product registration and compliance",
            "Distribution and franchise arrangements",
            "Consumer protection compliance programs",
            "Advertising and marketing regulations",
            "Product recall and crisis management",
            "E-commerce and direct sales compliance"
        ],
        issues: [
            "Product safety and labeling requirements",
            "Consumer protection regulations",
            "Competition law in distribution arrangements",
            "Advertising standards and restrictions",
            "Package and waste regulations",
            "Import procedures for consumer goods"
        ],
        keywords: ["consumer goods lawyer Turkey", "FMCG legal services", "product compliance Turkey", "retail law Turkey"]
    },
    {
        id: "consumer-services",
        name: "Consumer Services",
        title: "Consumer Services Lawyer in Turkey",
        metaDescription: "Legal services for consumer service providers in Turkey. Service agreements, consumer protection, and regulatory compliance.",
        intro: "Consumer services in Turkey are subject to comprehensive consumer protection regulations designed to protect individual customers. Service providers must implement compliant terms of service and dispute resolution procedures. Our consumer law practice provides specialized legal support for consumer service businesses.",
        services: [
            "Terms of service and consumer contracts",
            "Consumer complaint handling systems",
            "Regulatory compliance programs",
            "Subscription and membership terms",
            "Advertising and marketing compliance",
            "Consumer dispute resolution"
        ],
        issues: [
            "Consumer protection regulations for services",
            "Unfair contract terms restrictions",
            "Right of withdrawal and cancellation",
            "Pricing transparency requirements",
            "Mediation and arbitration consumer boards",
            "Personal data protection for customer information"
        ],
        keywords: ["consumer services lawyer Turkey", "service agreement legal", "consumer protection Turkey", "customer contract law"]
    },
    {
        id: "cosmetics",
        name: "Cosmetics",
        title: "Cosmetics Lawyer in Turkey",
        metaDescription: "Legal services for cosmetics and personal care companies in Turkey. Product notification, safety assessment, and cosmetics regulations.",
        intro: "Turkey's cosmetics market is substantial and growing, with regulations aligned with EU standards. Cosmetics companies must comply with product notification requirements, safety assessments, and advertising restrictions. Our product regulatory practice provides comprehensive legal support for the cosmetics industry.",
        services: [
            "Cosmetic product notification and registration",
            "Safety assessment and documentation",
            "Labeling and claims compliance",
            "Good Manufacturing Practice (GMP) implementation",
            "Advertising and marketing compliance",
            "Responsible Person obligations"
        ],
        issues: [
            "Cosmetics Regulation alignment with EU framework",
            "Product safety documentation requirements",
            "Restricted and prohibited substance compliance",
            "Claims substantiation requirements",
            "Nano-material notification requirements",
            "Animal testing prohibition and alternatives"
        ],
        keywords: ["cosmetics lawyer Turkey", "beauty products legal", "cosmetics regulations Turkey", "personal care compliance"]
    },
    {
        id: "dairy",
        name: "Dairy",
        title: "Dairy Lawyer in Turkey",
        metaDescription: "Legal services for dairy producers and processors in Turkey. Food safety compliance, licensing, and agricultural regulations.",
        intro: "Turkey's dairy industry is a significant agricultural sector subject to comprehensive food safety and quality regulations. Dairy producers, processors, and distributors must comply with strict hygiene standards, licensing requirements, and labeling rules. Our food and agriculture law practice provides specialized legal counsel for dairy industry participants.",
        services: [
            "Dairy processing facility licensing and permits",
            "Food safety and hygiene compliance programs",
            "Product labeling and packaging requirements",
            "Supply and distribution agreements",
            "Quality certification and standards compliance",
            "Agricultural subsidy and support applications"
        ],
        issues: [
            "Ministry of Agriculture food establishment licensing",
            "Milk quality standards and testing requirements",
            "Traceability and recall procedures",
            "Organic and specialty dairy certification",
            "Export health certificates and compliance",
            "Environmental permits for dairy operations"
        ],
        keywords: ["dairy lawyer Turkey", "milk processing legal", "food safety Turkey", "dairy regulations"]
    },
    {
        id: "defense-space",
        name: "Defense & Space",
        title: "Defense & Space Lawyer in Turkey",
        metaDescription: "Legal services for defense contractors and space industry companies in Turkey. Security clearances, export controls, and government contracts.",
        intro: "Turkey's defense and space sector has grown substantially with increasing domestic capabilities and international partnerships. Companies operating in this strategic sector face strict security requirements, export controls, and complex procurement procedures. Our defense industry practice provides comprehensive legal support for defense and space enterprises.",
        services: [
            "Defense procurement and government contracting",
            "Security clearance applications and compliance",
            "Export control and ITAR compliance",
            "Technology transfer and licensing agreements",
            "Joint venture and consortium arrangements",
            "Offset and industrial participation obligations"
        ],
        issues: [
            "Defense Industry Security Authority requirements",
            "Export licensing for defense articles and services",
            "Foreign investment restrictions in defense sector",
            "Classified information handling procedures",
            "Government audit and compliance requirements",
            "Space activities licensing and regulations"
        ],
        keywords: ["defense lawyer Turkey", "space industry legal", "military contractor Turkey", "defense procurement"]
    },
    {
        id: "design",
        name: "Design",
        title: "Design Lawyer in Turkey",
        metaDescription: "Legal services for design studios and creative agencies in Turkey. IP protection, client contracts, and design registration.",
        intro: "Turkey's design industry encompasses industrial design, graphic design, and creative services. Design professionals must protect their intellectual property while managing complex client relationships. Our intellectual property and commercial law practice provides tailored legal support for design businesses.",
        services: [
            "Industrial design registration and protection",
            "Design patent applications",
            "Client service agreements and scope management",
            "Copyright protection for creative works",
            "Design infringement enforcement",
            "Licensing and royalty arrangements"
        ],
        issues: [
            "Industrial design registration procedures",
            "Copyright protection for design works",
            "Design patent requirements and scope",
            "Ownership of commissioned designs",
            "International design protection strategies",
            "Design infringement remedies"
        ],
        keywords: ["design lawyer Turkey", "industrial design legal", "design registration Turkey", "creative services law"]
    },
    {
        id: "e-learning",
        name: "E-Learning",
        title: "E-Learning Lawyer in Turkey",
        metaDescription: "Legal services for e-learning platforms and educational technology companies in Turkey. Licensing, content rights, and education regulations.",
        intro: "Turkey's e-learning sector has experienced significant growth, particularly following increased demand for digital education solutions. E-learning providers must navigate education regulations, content licensing, and data protection requirements. Our technology and education law practice provides specialized legal counsel for e-learning businesses.",
        services: [
            "E-learning platform terms of service",
            "Content licensing and rights management",
            "Instructor and content creator agreements",
            "Data protection compliance for student data",
            "Education authority registration and compliance",
            "Certification and accreditation matters"
        ],
        issues: [
            "Ministry of Education distance learning regulations",
            "Personal data protection for learner information",
            "Content ownership and licensing rights",
            "Consumer protection for educational services",
            "Cross-border education service delivery",
            "Certification and credential recognition"
        ],
        keywords: ["e-learning lawyer Turkey", "educational technology legal", "online education Turkey", "edtech regulations"]
    },
    {
        id: "education-management",
        name: "Education Management",
        title: "Education Management Lawyer in Turkey",
        metaDescription: "Legal services for educational institutions and school management in Turkey. Licensing, compliance, and institutional governance.",
        intro: "Educational institutions in Turkey operate under comprehensive regulatory frameworks overseen by the Ministry of National Education and the Council of Higher Education. Education management requires careful attention to licensing, governance, and compliance requirements. Our education law practice provides specialized legal support for educational institutions.",
        services: [
            "School establishment and licensing applications",
            "Institutional governance and board advisory",
            "Employment matters for educational staff",
            "Student rights and disciplinary procedures",
            "Regulatory compliance and reporting",
            "Accreditation and quality assurance"
        ],
        issues: [
            "Private school licensing requirements",
            "Foreign school establishment regulations",
            "Teacher qualification and employment rules",
            "Student data protection requirements",
            "Curriculum approval and compliance",
            "Health and safety standards for schools"
        ],
        keywords: ["education lawyer Turkey", "school management legal", "private school Turkey", "education regulations"]
    },
    {
        id: "electrical-electronic-manufacturing",
        name: "Electrical/Electronic Manufacturing",
        title: "Electrical/Electronic Manufacturing Lawyer in Turkey",
        metaDescription: "Legal services for electrical and electronics manufacturers in Turkey. Product certification, CE marking, and manufacturing compliance.",
        intro: "Turkey's electrical and electronics manufacturing sector serves both domestic and export markets with comprehensive regulatory requirements for product safety and compliance. Manufacturers must navigate certification, environmental regulations, and quality standards. Our manufacturing law practice provides specialized legal counsel for electronics companies.",
        services: [
            "Product certification and CE marking compliance",
            "Manufacturing facility licensing",
            "Supply chain and OEM agreements",
            "Quality management system implementation",
            "Export compliance and documentation",
            "Product liability and recall procedures"
        ],
        issues: [
            "Electrical safety standards and testing",
            "EMC (electromagnetic compatibility) requirements",
            "RoHS and hazardous substance restrictions",
            "WEEE electronic waste regulations",
            "Energy efficiency labeling requirements",
            "Product liability under Turkish law"
        ],
        keywords: ["electronics manufacturer lawyer Turkey", "electrical products legal", "CE marking Turkey", "electronics compliance"]
    },
    {
        id: "entertainment",
        name: "Entertainment",
        title: "Entertainment Lawyer in Turkey",
        metaDescription: "Legal services for entertainment companies in Turkey. Production agreements, talent contracts, and media regulations.",
        intro: "Turkey's entertainment industry spans film, television, music, and live performance sectors. Entertainment companies must navigate complex rights arrangements, talent relationships, and regulatory requirements. Our media and entertainment law practice provides comprehensive legal support for entertainment businesses.",
        services: [
            "Film and television production agreements",
            "Talent representation and management contracts",
            "Music licensing and publishing arrangements",
            "Distribution and platform agreements",
            "Event production and venue contracts",
            "Intellectual property protection and enforcement"
        ],
        issues: [
            "RTÜK broadcasting and content regulations",
            "Cinema licensing and classification",
            "Music copyright and collective management",
            "Talent work permits for foreign artists",
            "Tax incentives for film production",
            "Live event permits and safety requirements"
        ],
        keywords: ["entertainment lawyer Turkey", "film production legal", "music industry Turkey", "media law"]
    },
    {
        id: "environmental-services",
        name: "Environmental Services",
        title: "Environmental Services Lawyer in Turkey",
        metaDescription: "Legal services for environmental consulting and waste management companies in Turkey. Permits, compliance, and environmental regulations.",
        intro: "Turkey's environmental services sector provides critical support for businesses navigating increasingly stringent environmental regulations. Environmental service providers must understand complex permitting requirements and liability frameworks. Our environmental law practice provides specialized legal counsel for environmental services companies.",
        services: [
            "Environmental consulting service agreements",
            "Waste management licensing and permits",
            "Environmental impact assessment support",
            "Remediation and cleanup contracts",
            "Environmental compliance program development",
            "Regulatory reporting and documentation"
        ],
        issues: [
            "Waste management facility licensing",
            "Hazardous waste handling and disposal regulations",
            "Environmental liability and insurance",
            "Air and water quality permit requirements",
            "Environmental audit and due diligence",
            "Carbon and emissions trading frameworks"
        ],
        keywords: ["environmental lawyer Turkey", "waste management legal", "environmental permits Turkey", "environmental compliance"]
    },
    {
        id: "events-services",
        name: "Events Services",
        title: "Events Services Lawyer in Turkey",
        metaDescription: "Legal services for event management and production companies in Turkey. Venue contracts, permits, and event regulations.",
        intro: "Turkey's events industry encompasses corporate events, exhibitions, conferences, and entertainment productions. Event organizers must navigate complex permitting, venue arrangements, and liability considerations. Our commercial law practice provides practical legal support for events services companies.",
        services: [
            "Venue and facility rental agreements",
            "Event production and management contracts",
            "Supplier and vendor arrangements",
            "Sponsorship and partnership agreements",
            "Event insurance and liability management",
            "Permit and authorization applications"
        ],
        issues: [
            "Event permit and authorization requirements",
            "Public gathering regulations",
            "Health and safety compliance for events",
            "Noise and environmental restrictions",
            "Liability and insurance requirements",
            "Cancellation and force majeure provisions"
        ],
        keywords: ["events lawyer Turkey", "event management legal", "conference planning Turkey", "event permits"]
    },
    {
        id: "farming",
        name: "Farming",
        title: "Farming Lawyer in Turkey",
        metaDescription: "Legal services for farmers and agricultural operations in Turkey. Land rights, subsidies, and farming regulations.",
        intro: "Turkey's farming sector provides diverse opportunities across various agricultural products. Farmers must navigate land ownership rules, subsidy programs, and environmental requirements. Our agricultural law practice provides practical legal support for farming operations of all sizes.",
        services: [
            "Agricultural land acquisition and leasing",
            "Farm operation licensing and permits",
            "Agricultural subsidy and grant applications",
            "Crop and livestock contracts",
            "Water rights and irrigation arrangements",
            "Farm succession and estate planning"
        ],
        issues: [
            "Foreign ownership restrictions on farmland",
            "Agricultural land use and zoning",
            "Organic farming certification requirements",
            "Agricultural labor regulations",
            "Environmental compliance for farming",
            "Agricultural insurance and risk management"
        ],
        keywords: ["farming lawyer Turkey", "agricultural legal services", "farm land Turkey", "farming regulations"]
    },
    {
        id: "financial-services",
        name: "Financial Services",
        title: "Financial Services Lawyer in Turkey",
        metaDescription: "Legal services for financial service providers in Turkey. Licensing, regulatory compliance, and financial regulations.",
        intro: "Turkey's financial services sector operates under comprehensive regulatory oversight from multiple authorities. Financial service providers must navigate complex licensing requirements and ongoing compliance obligations. Our financial services practice provides end-to-end legal support for financial institutions and fintech companies.",
        services: [
            "Financial services licensing applications",
            "Regulatory compliance programs",
            "Product structuring and documentation",
            "Consumer protection compliance",
            "Anti-money laundering programs",
            "Fintech regulatory advisory"
        ],
        issues: [
            "BRSA, CMB, and Central Bank regulatory frameworks",
            "Payment services and e-money licensing",
            "Consumer credit and lending regulations",
            "Investment services authorization",
            "Cross-border financial services",
            "Digital asset and cryptocurrency regulations"
        ],
        keywords: ["financial services lawyer Turkey", "fintech legal", "financial regulations Turkey", "payment services"]
    },
    {
        id: "fine-art",
        name: "Fine Art",
        title: "Fine Art Lawyer in Turkey",
        metaDescription: "Legal services for artists, galleries, and art collectors in Turkey. Art transactions, authentication, and cultural property law.",
        intro: "Turkey's fine art market encompasses contemporary and traditional art, with important considerations for authentication, provenance, and cultural property regulations. Artists, galleries, and collectors require specialized legal support for transactions and rights protection. Our art law practice provides tailored legal counsel for the fine art sector.",
        services: [
            "Art sale and purchase agreements",
            "Gallery representation and consignment",
            "Artist estate planning and succession",
            "Art authentication and provenance matters",
            "Cultural property export compliance",
            "Art loan and exhibition agreements"
        ],
        issues: [
            "Copyright and moral rights for artists",
            "Cultural heritage and antiquities regulations",
            "Art import and export restrictions",
            "Resale royalty rights (droit de suite)",
            "Art fraud and forgery issues",
            "Tax considerations for art transactions"
        ],
        keywords: ["fine art lawyer Turkey", "art law", "gallery legal services", "art transactions Turkey"]
    },
    {
        id: "fishery",
        name: "Fishery",
        title: "Fishery Lawyer in Turkey",
        metaDescription: "Legal services for fishing and aquaculture businesses in Turkey. Licensing, catch regulations, and maritime law.",
        intro: "Turkey's fishery sector includes both marine capture fisheries and growing aquaculture operations. Fishery businesses must navigate complex licensing, quota systems, and environmental regulations. Our maritime and agricultural law practice provides specialized legal counsel for fishery operations.",
        services: [
            "Fishing vessel registration and licensing",
            "Aquaculture facility permits",
            "Fishing rights and quota matters",
            "Seafood processing and export compliance",
            "Maritime employment contracts",
            "Fishery cooperative formation"
        ],
        issues: [
            "Fishing license and permit requirements",
            "Catch quotas and seasonal restrictions",
            "Aquaculture environmental permits",
            "Marine protected area regulations",
            "Seafood safety and traceability",
            "EU export certification requirements"
        ],
        keywords: ["fishery lawyer Turkey", "aquaculture legal", "fishing regulations Turkey", "maritime law"]
    }
];

// Import additional industries
const additionalIndustries1 = require('./additional-industries-1.js');
const additionalIndustries2 = require('./additional-industries-2.js');
const additionalIndustries3 = require('./additional-industries-3.js');
const additionalIndustries4 = require('./additional-industries-4.js');
const additionalIndustries5 = require('./additional-industries-5.js');

// Combine all industries
const allIndustries = [
    ...industries,
    ...additionalIndustries1,
    ...additionalIndustries2,
    ...additionalIndustries3,
    ...additionalIndustries4,
    ...additionalIndustries5
];

// Generate HTML for a single industry page
function generateIndustryPage(industry) {
    const today = new Date().toISOString().split('T')[0];

    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${industry.metaDescription}">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="author" content="Turkish Trade Lawyers">
    <meta name="keywords" content="${industry.keywords.join(', ')}, legal services Turkey, Turkish law firm">
    <title>${industry.title} | Turkish Trade Lawyers</title>

    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="${industry.title} | Turkish Trade Lawyers">
    <meta property="og:description" content="${industry.metaDescription}">
    <meta property="og:url" content="https://www.turkishtradelawyers.com/industries/${industry.id}.html">
    <meta property="og:site_name" content="Turkish Trade Lawyers">
    <meta property="og:image" content="https://www.turkishtradelawyers.com/logo-square.png">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${industry.title}">
    <meta name="twitter:description" content="${industry.metaDescription}">
    <meta name="twitter:image" content="https://www.turkishtradelawyers.com/logo-square.png">

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-9FX7T07VPM"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-9FX7T07VPM');
    </script>

    <!-- Preconnect -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../styles.css">
    <link rel="icon" href="../logo-square.png" type="image/png">
    <link rel="canonical" href="https://www.turkishtradelawyers.com/industries/${industry.id}.html">

    <!-- LegalService Schema -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "Turkish Trade Lawyers - ${industry.name} Legal Services",
        "description": "${industry.metaDescription}",
        "url": "https://www.turkishtradelawyers.com/industries/${industry.id}.html",
        "logo": "https://www.turkishtradelawyers.com/logo-square.png",
        "areaServed": {
            "@type": "Country",
            "name": "Turkey"
        },
        "serviceType": ["${industry.name} Law", "Regulatory Compliance", "Commercial Law"],
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "TR",
            "addressLocality": "Istanbul"
        },
        "telephone": "+90 212 706 59 16"
    }
    </script>

    <!-- Breadcrumb Schema -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.turkishtradelawyers.com"},
            {"@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.turkishtradelawyers.com/industries.html"},
            {"@type": "ListItem", "position": 3, "name": "${industry.name}"}
        ]
    }
    </script>

    <style>
        /* Industry Page Styles */
        .industry-hero {
            background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1E3A8A 100%);
            padding: 160px 20px 80px;
            position: relative;
            overflow: hidden;
        }

        .industry-hero::before {
            content: '';
            position: absolute;
            inset: 0;
            background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .industry-hero-content {
            position: relative;
            z-index: 1;
            max-width: 850px;
            margin: 0 auto;
            text-align: center;
        }

        .industry-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(0, 196, 180, 0.15);
            color: #00C4B4;
            padding: 10px 20px;
            border-radius: 50px;
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 24px;
            border: 1px solid rgba(0, 196, 180, 0.3);
        }

        .industry-hero h1 {
            font-size: 3rem;
            font-weight: 800;
            color: #ffffff;
            margin-bottom: 24px;
            letter-spacing: -0.03em;
            line-height: 1.2;
        }

        .industry-hero-text {
            font-size: 1.15rem;
            color: rgba(255, 255, 255, 0.85);
            line-height: 1.8;
            max-width: 700px;
            margin: 0 auto;
        }

        /* Main Content */
        .industry-content {
            padding: 80px 20px;
            background: #ffffff;
        }

        .industry-container {
            max-width: 900px;
            margin: 0 auto;
        }

        .industry-section {
            margin-bottom: 60px;
        }

        .industry-section:last-child {
            margin-bottom: 0;
        }

        .industry-section h2 {
            font-size: 1.75rem;
            font-weight: 700;
            color: #1a2742;
            margin-bottom: 24px;
            padding-bottom: 16px;
            border-bottom: 2px solid #E4E7EC;
        }

        .industry-section h2 i {
            color: #2D4CC8;
            margin-right: 12px;
        }

        .industry-section p {
            font-size: 1.05rem;
            color: #475467;
            line-height: 1.8;
            margin-bottom: 20px;
        }

        .service-list, .issue-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .service-list li, .issue-list li {
            padding: 16px 0 16px 32px;
            border-bottom: 1px solid #F1F5F9;
            font-size: 1.05rem;
            color: #475467;
            position: relative;
            line-height: 1.6;
        }

        .service-list li:last-child, .issue-list li:last-child {
            border-bottom: none;
        }

        .service-list li::before {
            content: '\\f00c';
            font-family: 'Font Awesome 6 Free';
            font-weight: 900;
            position: absolute;
            left: 0;
            color: #00C4B4;
        }

        .issue-list li::before {
            content: '\\f054';
            font-family: 'Font Awesome 6 Free';
            font-weight: 900;
            position: absolute;
            left: 0;
            color: #2D4CC8;
            font-size: 0.8rem;
            top: 20px;
        }

        /* Why Work With Us */
        .why-us-box {
            background: linear-gradient(135deg, #F0F4FF 0%, #ffffff 100%);
            border: 1px solid #E0E7FF;
            border-radius: 16px;
            padding: 40px;
        }

        .why-us-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 24px;
            margin-top: 24px;
        }

        .why-us-item {
            display: flex;
            align-items: flex-start;
            gap: 16px;
        }

        .why-us-icon {
            width: 48px;
            height: 48px;
            background: linear-gradient(135deg, #2D4CC8 0%, #1E3A8A 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .why-us-icon i {
            color: #ffffff;
            font-size: 1.25rem;
        }

        .why-us-text h4 {
            font-size: 1.1rem;
            font-weight: 600;
            color: #1a2742;
            margin-bottom: 8px;
        }

        .why-us-text p {
            font-size: 0.95rem;
            color: #475467;
            line-height: 1.6;
            margin: 0;
        }

        /* CTA Section */
        .industry-cta {
            background: linear-gradient(135deg, #1E3A8A 0%, #2D4CC8 100%);
            padding: 60px 20px;
            text-align: center;
        }

        .industry-cta-content {
            max-width: 700px;
            margin: 0 auto;
        }

        .industry-cta h2 {
            font-size: 2rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 16px;
        }

        .industry-cta p {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.85);
            margin-bottom: 32px;
            line-height: 1.7;
        }

        .industry-cta .btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: #ffffff;
            color: #1E3A8A;
            padding: 16px 36px;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .industry-cta .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        }

        /* Breadcrumb */
        .page-breadcrumb {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 24px;
            font-size: 0.9rem;
            justify-content: center;
        }

        .page-breadcrumb a {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
        }

        .page-breadcrumb a:hover {
            color: #00C4B4;
        }

        .page-breadcrumb .separator {
            color: rgba(255, 255, 255, 0.4);
        }

        .page-breadcrumb .current {
            color: #ffffff;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .industry-hero {
                padding: 140px 20px 60px;
            }

            .industry-hero h1 {
                font-size: 2rem;
            }

            .industry-section h2 {
                font-size: 1.5rem;
            }

            .why-us-box {
                padding: 24px;
            }

            .why-us-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>

<body>
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="../index.html" class="nav-logo">
                <img src="../logo.webp" alt="Turkish Trade Lawyers Logo" class="logo-icon">
                <span class="logo-text">
                    <span class="logo-main">Turkish Trade Lawyers</span>
                    <span class="logo-tagline">Legal Excellence in Turkey</span>
                </span>
            </a>
            <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-menu" id="navMenu">
                <li><a href="../index.html" class="nav-link">Home</a></li>
                <li><a href="../index.html#about" class="nav-link">About</a></li>

                <li><a href="../index.html#why-us" class="nav-link">Why Us</a></li>
                <li><a href="../ourexperts.html" class="nav-link">Our Experts</a></li>
                <li><a href="../guides.html" class="nav-link">Guides</a></li>
                <li><a href="../index.html#contact" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="industry-hero">
        <div class="industry-hero-content">
            <nav class="page-breadcrumb">
                <a href="../index.html">Home</a>
                <span class="separator"><i class="fas fa-chevron-right"></i></span>
                <a href="../industries.html">Industries</a>
                <span class="separator"><i class="fas fa-chevron-right"></i></span>
                <span class="current">${industry.name}</span>
            </nav>
            <div class="industry-badge">
                <i class="fas fa-briefcase"></i>
                Industry Focus
            </div>
            <h1>${industry.title}</h1>
            <p class="industry-hero-text">${industry.intro}</p>
        </div>
    </section>

    <!-- Main Content -->
    <main class="industry-content">
        <div class="industry-container">
            <!-- Our Legal Services -->
            <section class="industry-section">
                <h2><i class="fas fa-gavel"></i>Our Legal Services for the ${industry.name} Sector</h2>
                <p>Our experienced legal team provides comprehensive support tailored to the specific needs of ${industry.name.toLowerCase()} businesses operating in Turkey:</p>
                <ul class="service-list">
                    ${industry.services.map(service => `<li>${service}</li>`).join('\n                    ')}
                    <li>Litigation and filing of lawsuits before Turkish courts</li>
                    <li>Case follow-up and litigation management</li>
                    <li>Debt collection and enforcement proceedings (icra takibi)</li>
                </ul>
            </section>

            <!-- Key Legal & Regulatory Issues -->
            <section class="industry-section">
                <h2><i class="fas fa-balance-scale"></i>Key Legal & Regulatory Issues in Turkey</h2>
                <p>Companies in the ${industry.name.toLowerCase()} sector should be aware of the following regulatory and legal considerations when operating in Turkey:</p>
                <ul class="issue-list">
                    ${industry.issues.map(issue => `<li>${issue}</li>`).join('\n                    ')}
                </ul>
            </section>

            <!-- Why Work With Us -->
            <section class="industry-section">
                <div class="why-us-box">
                    <h2><i class="fas fa-handshake"></i>Why Work With Turkish Trade Lawyers</h2>
                    <div class="why-us-grid">
                        <div class="why-us-item">
                            <div class="why-us-icon">
                                <i class="fas fa-industry"></i>
                            </div>
                            <div class="why-us-text">
                                <h4>Industry Understanding</h4>
                                <p>We understand the commercial realities and regulatory environment of the ${industry.name.toLowerCase()} sector in Turkey.</p>
                            </div>
                        </div>
                        <div class="why-us-item">
                            <div class="why-us-icon">
                                <i class="fas fa-globe"></i>
                            </div>
                            <div class="why-us-text">
                                <h4>International Perspective</h4>
                                <p>Our team regularly advises international clients on Turkish market entry and ongoing operations.</p>
                            </div>
                        </div>
                        <div class="why-us-item">
                            <div class="why-us-icon">
                                <i class="fas fa-comments"></i>
                            </div>
                            <div class="why-us-text">
                                <h4>Clear Communication</h4>
                                <p>We provide practical, business-oriented legal advice in clear terms you can act upon.</p>
                            </div>
                        </div>
                        <div class="why-us-item">
                            <div class="why-us-icon">
                                <i class="fas fa-clock"></i>
                            </div>
                            <div class="why-us-text">
                                <h4>Responsive Service</h4>
                                <p>We understand the pace of business and provide timely responses to your legal needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>

    <!-- CTA Section -->
    <section class="industry-cta">
        <div class="industry-cta-content">
            <h2>Ready to Discuss Your ${industry.name} Legal Needs?</h2>
            <p>Contact our team for a confidential consultation about your business operations in Turkey. We provide clear, practical legal guidance tailored to the ${industry.name.toLowerCase()} sector.</p>
            <a href="../index.html#contact" class="btn">
                Schedule a Consultation <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Turkish Trade Lawyers. All rights reserved. |
                <a href="../cookie-policy.html" style="color: rgba(255,255,255,0.7);">Cookie Policy</a> |
                <a href="../disclaimer.html" style="color: rgba(255,255,255,0.7);">Disclaimer</a> |
                <a href="../privacy-notice.html" style="color: rgba(255,255,255,0.7);">Privacy</a>
            </p>
        </div>
    </footer>

    <script src="../script.js"></script>

    <!--Start of Tawk.to Script-->
    <script type="text/javascript">
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function () {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/6943c0ff63447e19862c286a/default';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();
    </script>
</body>

</html>`;
}

// Create industries directory if it doesn't exist
const industriesDir = path.join(__dirname);
if (!fs.existsSync(industriesDir)) {
    fs.mkdirSync(industriesDir, { recursive: true });
}

// Generate all pages
console.log('Generating industry pages...');

allIndustries.forEach((industry, index) => {
    const html = generateIndustryPage(industry);
    const fileName = `${industry.id}.html`;
    const filePath = path.join(__dirname, fileName);

    fs.writeFileSync(filePath, html);
    console.log(`[${index + 1}/${allIndustries.length}] Created: ${fileName}`);
});

console.log(`\nSuccessfully generated ${allIndustries.length} industry pages!`);

// Export industries data for sitemap updates
module.exports = allIndustries;

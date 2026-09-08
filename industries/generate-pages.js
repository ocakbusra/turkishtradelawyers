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
        title: "Accounting & Audit Law Firm in Turkey",
        metaDescription: "Accounting law firm in Turkey for foreign networks, SMMM, YMM and audit firms. Law 3568, KGK, MASAK, KVKK, contracts and disputes.",
        intro: "Turkish Trade Lawyers advises foreign accounting firms, international accounting networks, independent audit companies, financial consultancy businesses, SMMM practices and YMM firms on Turkish legal and regulatory matters. Our accounting and audit legal services in Turkey cover professional structuring, Law No. 3568, TÜRMOB requirements, KGK authorization, accounting firm contracts, professional liability, MASAK, KVKK, partner disputes, regulatory investigations and market entry.",
        services: [
            "Accounting firm market entry and professional structuring",
            "Law No. 3568, SMMM, YMM and TÜRMOB compliance",
            "KGK authorization and independent audit matters",
            "Accounting, tax declaration and audit engagement agreements",
            "Professional liability, disciplinary proceedings and disputes",
            "MASAK, KVKK, network, employment and fee collection matters"
        ],
        issues: [
            "Law No. 3568 professional scope and foreign accountant authorization",
            "SMMM, YMM and independent auditor role distinctions",
            "KGK ownership, independence and authorization requirements",
            "Tax declaration responsibility and professional liability",
            "MASAK AML, KVKK and international data transfers",
            "Partner, shareholder, disciplinary and unpaid-fee disputes"
        ],
        keywords: ["accounting law firm Turkey", "accounting lawyer Turkey", "audit law firm Turkey", "KGK authorization Turkey"]
    },
    {
        id: "agriculture",
        name: "Agriculture",
        title: "Agriculture & Agribusiness Law Firm in Turkey",
        metaDescription: "Agriculture law firm in Turkey for foreign investors, agribusinesses and producers. Land, contract farming, imports, food, water, permits and disputes.",
        intro: "Foreign agricultural investors, agribusinesses, producers, food processors, importers, exporters and businesses sourcing products from Türkiye face a connected framework covering land, production planning, contract farming, plant and food regulation, water, environmental permits, trade and disputes. Our agriculture legal services in Turkey follow the operating model from acquisition or lease through production, processing, sale and export.",
        services: [
            "Agricultural land acquisition, leasing and due diligence",
            "Foreign agricultural investment and market entry",
            "Production planning, Ministry permits and compliance",
            "Contract farming, agricultural supply and processing agreements",
            "Agricultural imports, exports, phytosanitary and customs",
            "Food, organic, seed, water and environmental regulation"
        ],
        issues: [
            "Foreign ownership, land classification and non-agricultural use",
            "Production planning, permits and agricultural support conditions",
            "Contract farming, quality, crop failure and mediation",
            "Plant health, food, organic and seed compliance",
            "Groundwater, irrigation, environmental and facility approvals",
            "Agricultural trade, cooperatives, disputes and debt collection"
        ],
        keywords: ["agriculture law firm Turkey", "agriculture lawyer Turkey", "agricultural land lawyer Turkey", "agribusiness legal services Turkey"]
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
        id: "alternative-medicine",
        name: "Alternative Medicine",
        title: "Alternative Medicine Lawyer in Türkiye",
        metaDescription: "Legal counsel for GETAT clinics, practitioners and wellness businesses in Türkiye. Licensing, advertising, products, compliance and disputes.",
        intro: "Alternative medicine businesses in Türkiye should distinguish regulated traditional and complementary medicine practices, known as GETAT, from wellness, cosmetic, food and other consumer activities. The current framework addresses permitted methods, certified practitioners, authorized units and practice centres, patient records, informed consent, inspections and sanctions.",
        services: [
            "GETAT regulatory classification and facility permissions",
            "Practitioner certificates, work permissions and supervision",
            "Product classification for supplements, medicines and cosmetics",
            "Healthcare advertising and digital content compliance",
            "Patient consent, records and personal health data",
            "Health tourism and cross-border service arrangements"
        ],
        issues: [
            "2026 Traditional and Complementary Medicine Practices Regulation",
            "Ministry-registered certificates and method-specific authority",
            "Unit, practice-centre and healthcare-facility permissions",
            "Health claims, advertising and patient testimonials",
            "Product, import, storage and adverse-event requirements",
            "Patient rights, consent and KVKK compliance"
        ],
        keywords: ["alternative medicine lawyer Türkiye", "GETAT lawyer Turkey", "traditional complementary medicine regulation", "wellness business legal advice"]
    },
    {
        id: "animation",
        name: "Animation",
        title: "Animation Lawyer in Türkiye",
        metaDescription: "Animation lawyer in Türkiye for studios, producers and creators. Copyright, animator rights, production agreements, licensing and streaming.",
        intro: "Animation production in Türkiye sits at the intersection of copyright, film and audiovisual regulation, broadcasting, advertising, employment, production finance and international licensing. Under FSEK, the animator is expressly included among the joint authors of cinematographic works created through animation techniques, making a clear chain of title fundamental to commercialization.",
        services: [
            "Animation copyright, FSEK and chain-of-title reviews",
            "Animator, creator, voice and freelancer agreements",
            "Production, co-production and financing agreements",
            "Distribution, licensing and streaming arrangements",
            "Producer certification, registration and film support",
            "Character, merchandising, advertising and AI matters"
        ],
        issues: [
            "FSEK Article 8 animator authorship and economic rights",
            "Broken chain of title and incomplete rights transfers",
            "Producer certificates and cinematographic registration",
            "RTÜK, streaming and children’s content requirements",
            "AI disclosure, voice replicas and third-party material",
            "Music, voice-over, character and merchandising rights"
        ],
        keywords: ["animation lawyer Türkiye", "animation studio lawyer Turkey", "animation copyright Turkey", "animator rights Turkey"]
    },
    {
        id: "apparel-fashion",
        name: "Apparel & Fashion",
        title: "Apparel & Fashion Lawyer in Türkiye",
        metaDescription: "Fashion lawyer in Türkiye for apparel brands, textile manufacturers and retailers. Product safety, labelling, TAREKS, customs, contracts, IP and e-commerce.",
        intro: "Türkiye’s apparel and fashion sector combines product safety, textile and footwear labelling, chemicals regulation, customs, intellectual property, consumer, e-commerce, advertising and commercial contract rules. Our legal team advises fashion brands, manufacturers, importers, distributors, retailers and investors across this connected framework.",
        services: [
            "Product safety, textile and footwear labelling",
            "KKDİK, chemical compliance and market surveillance",
            "TAREKS, import registration, customs and trade remedies",
            "Manufacturing, sourcing, private-label and supply agreements",
            "Trademark, industrial design and anti-counterfeiting",
            "E-commerce, influencer, discount and sustainability claims"
        ],
        issues: [
            "Incorrect fibre or footwear labelling",
            "Unsafe products, restricted chemicals and recalls",
            "TAREKS, import registration, origin and anti-dumping",
            "Defective manufacturing and uncontrolled subcontracting",
            "Counterfeit fashion, copied designs and brand misuse",
            "Online sales, influencer advertising and greenwashing"
        ],
        keywords: ["fashion lawyer Türkiye", "apparel lawyer Turkey", "textile compliance Turkey", "fashion brand lawyer Turkey"]
    },
    {
        id: "architecture-planning",
        name: "Architecture & Planning",
        title: "Architecture & Planning Lawyer in Türkiye",
        metaDescription: "Architecture lawyer in Türkiye for foreign architects, planners and developers. TMMOB, zoning, permits, contracts, liability, heritage and planning disputes.",
        intro: "Architecture and urban planning in Türkiye combine professional qualification, TMMOB and chamber requirements with zoning, permits, building inspection, earthquake, heritage, environmental, energy and copyright rules. Our legal team advises architects, planners, developers, investors and international design businesses across the project lifecycle.",
        services: [
            "Architect and planner professional regulation",
            "Foreign architect work permits and TMMOB procedures",
            "Zoning, planning, permits and occupancy matters",
            "Construction, design and development agreements",
            "Building inspection, earthquake, fire and energy compliance",
            "Architectural copyright, BIM and project disputes"
        ],
        issues: [
            "Professional title, registration and signing authority",
            "Foreign architect work permits and temporary membership",
            "Zoning plans, plan amendments and building permits",
            "Project-author, inspection and construction liability",
            "Earthquake, fire, accessibility and energy requirements",
            "Heritage approvals, EIA and architectural copyright"
        ],
        keywords: ["architecture lawyer Türkiye", "foreign architect Turkey", "zoning lawyer Turkey", "urban planning lawyer Turkey"]
    },
    {
        id: "arts-crafts",
        name: "Arts & Crafts",
        title: "Arts & Crafts Lawyer in Türkiye",
        metaDescription: "Art lawyer in Türkiye for artists, galleries, collectors and auction houses. Copyright, cultural property, provenance, MASAK, export and art disputes.",
        intro: "Türkiye’s arts and crafts sector combines copyright, cultural-property, gallery and auction rules with AML, customs, consumer and commercial law. Our legal team advises artists, galleries, collectors, dealers, auction businesses, craft brands and international buyers on the creation, sale, ownership and movement of artworks.",
        services: [
            "Artwork copyright, moral rights and licensing",
            "Gallery representation, consignment and sale agreements",
            "Cultural-property classification, trade and export",
            "Provenance, authenticity and acquisition due diligence",
            "MASAK, KYC and art-market compliance",
            "Craft brands, designs, trademarks and geographical indications"
        ],
        issues: [
            "Physical ownership versus copyright and moral rights",
            "Gallery certification and auction-house obligations",
            "Provenance, authenticity and disputed title",
            "Cultural-property trading, collection and export rules",
            "MASAK obligations in high-value art transactions",
            "Copied crafts, online sales, customs and disputes"
        ],
        keywords: ["art lawyer Türkiye", "artist lawyer Turkey", "art gallery law Turkey", "cultural property lawyer Turkey"]
    },
    {
        id: "automotive",
        name: "Automotive",
        title: "Automotive Law Firm in Turkey",
        metaDescription: "Automotive law firm in Turkey for foreign manufacturers, suppliers and importers. Homologation, TAREKS, recalls, dealers, EVs, contracts and disputes.",
        intro: "Foreign vehicle manufacturers, automotive suppliers, importers, distributors and mobility businesses face a connected framework covering market entry, homologation, product safety, customs, contracts, consumer law, competition, EV charging and connected-vehicle data. Our automotive legal services in Turkey follow the vehicle lifecycle from design and import to sale, after-sales support, recall and dispute resolution.",
        services: [
            "Automotive market entry and corporate structuring",
            "Vehicle type approval, homologation and product compliance",
            "Vehicle and parts imports, TAREKS and customs",
            "OEM supply, tooling, dealer and distribution agreements",
            "Product safety, recalls, warranties and liability",
            "EV charging, connected vehicles and mobility regulation"
        ],
        issues: [
            "Type approval, technical conformity and market surveillance",
            "TAREKS, GTIP, customs value, origin and import controls",
            "Product safety, corrective measures and recall costs",
            "Dealer, distributor, authorised service and competition rules",
            "Consumer warranties, after-sales and second-hand vehicle rules",
            "EV charging licences, connected-vehicle data and cybersecurity"
        ],
        keywords: ["automotive law firm Turkey", "automotive lawyer Turkey", "vehicle type approval Turkey", "automotive regulatory compliance Turkey"]
    },
    {
        id: "aviation-aerospace",
        name: "Aviation & Aerospace",
        title: "Aviation & Aerospace Law Firm in Turkey",
        metaDescription: "Aviation law firm in Turkey for foreign manufacturers, MROs, suppliers and UAS businesses. SHGM, certification, parts, contracts, customs and disputes.",
        intro: "Foreign aviation and aerospace manufacturers, aircraft and component suppliers, MRO businesses, technology companies, investors, drone companies and space businesses face a connected Turkish regulatory and commercial framework. Our aviation and aerospace legal services cover SHGM approvals, SHT-21 certification, design and production organisations, aircraft parts, maintenance, UAS operations, customs, contracts, product liability, cybersecurity, investment and disputes.",
        services: [
            "SHGM approvals, aviation certification and market entry",
            "SHT-21, type certification, DOA and POA matters",
            "Aircraft parts, supplier, import and customs compliance",
            "SHT-145 MRO, maintenance and continuing airworthiness",
            "UAS, drone, VTOL and advanced-air-mobility regulation",
            "Aerospace contracts, IP, export controls and disputes"
        ],
        issues: [
            "SHGM approval, SHT-21 certification and airworthiness",
            "Design Organisation Approval and Production Organisation Approval",
            "Approved suppliers, counterfeit parts and product safety",
            "SHT-145 maintenance, modifications and continuing airworthiness",
            "UAS import, registration, pilot licensing and operations",
            "Export controls, cybersecurity, IP, insurance and liability"
        ],
        keywords: ["aviation aerospace law firm Turkey", "aviation lawyer Turkey", "SHGM lawyer Turkey", "aerospace regulatory compliance Turkey"]
    },
    {
        id: "banking",
        name: "Banking",
        title: "Banking Law Firm in Turkey",
        metaDescription: "Banking law firm in Turkey for foreign banks, lenders and financial institutions. BDDK licensing, branches, lending, digital banking, AML and disputes.",
        intro: "Turkish Trade Lawyers advises foreign banks, international banking groups, financial institutions, lenders, bank investors, technology providers and businesses working with the Turkish banking sector on Turkish banking law and regulatory matters. Our banking legal services in Turkey cover BDDK licensing, foreign bank branches and representative offices, bank acquisitions, lending and finance documentation, digital banking, outsourcing, bank secrecy, AML, regulatory compliance and banking disputes.",
        services: [
            "Banking market entry and BDDK licensing",
            "Foreign bank branches and representative offices",
            "Bank M&A and share acquisitions",
            "Corporate, syndicated and project finance",
            "Digital banking, BaaS and outsourcing",
            "Bank secrecy, AML, disputes and enforcement"
        ],
        issues: [
            "Banking Law No. 5411 and BDDK establishment permissions",
            "Foreign bank branch and representative-office limits",
            "Bank share transfers, ownership thresholds and M&A approvals",
            "Loan security, guarantees, cross-border lending and enforcement",
            "Digital banking, payment services, outsourcing and cybersecurity",
            "Bank secrecy, MASAK, KVKK, consumer and regulatory investigations"
        ],
        keywords: ["banking law firm Turkey", "banking lawyer Turkey", "BDDK lawyer Turkey", "foreign bank Turkey"]
    },
    {
        id: "saas-law-firm-turkey",
        name: "SaaS",
        title: "SaaS Law Firm in Turkey",
        metaDescription: "SaaS law firm in Turkey advising foreign software companies on agreements, SLA, DPA, KVKK, VERBIS, data transfers, e-commerce and disputes.",
        intro: "Turkish Trade Lawyers advises foreign SaaS companies, software providers, cloud businesses, technology platforms, enterprise software vendors and investors entering or operating in Türkiye. Our SaaS legal services cover SaaS agreements, SLA and DPA documentation, KVKK compliance, Data Controller Representative services, VERBIS, international data transfers, reseller arrangements, e-commerce, software IP, cybersecurity and commercial disputes.",
        services: [
            "SaaS agreements, MSA, subscription and order forms",
            "SLA, support, business continuity and data exit",
            "DPA, KVKK, VERBIS and Data Controller Representative",
            "International data transfers and Standard Contracts",
            "Reseller, API, integration and white-label arrangements",
            "Software IP, cybersecurity, e-commerce and disputes"
        ],
        issues: [
            "Turkish contract law and online SaaS contracting",
            "Controller-processor roles, DPA and KVKK compliance",
            "VERBIS, representative appointment and Authority communications",
            "International transfers, subprocessors and Standard Contracts",
            "Consumer subscriptions, ETBIS, IYS and payment services",
            "Software ownership, open source, AI, cybersecurity and liability"
        ],
        keywords: ["SaaS law firm Turkey", "SaaS lawyer Turkey", "SaaS agreements Turkey", "KVKK SaaS Turkey", "technology lawyer Turkey"]
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

    <!-- Microsoft Clarity -->
    <script type="text/javascript">
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "vv2a5uwdk0");
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
        "telephone": "+90 501 635 94 65"
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
                <li><a href="../ourexperts.html" class="nav-link">About</a></li>

                <li><a href="../index.html#why-us" class="nav-link">Why Us</a></li>
                <li><a href="../ourexperts.html" class="nav-link">Our Experts</a></li>
                <li><a href="../guides.html" class="nav-link">Guides</a></li>
                <li><a href="../contact.html" class="nav-link">Contact</a></li>
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
        Tawk_API.autoStart = false;
        Tawk_API.onLoad = function () {
            Tawk_API.start();
            Tawk_API.hideWidget();
        };
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
    // Accounting, agriculture, aviation and SaaS have dedicated long-form pages.
    // Keep them out of the generic template so bulk generation does not
    // overwrite their industry-specific SEO structures and content.
    if (['accounting', 'agriculture', 'airlines-aviation', 'saas-law-firm-turkey'].includes(industry.id)) {
        console.log(`[${index + 1}/${allIndustries.length}] Preserved custom page: ${industry.id}.html`);
        return;
    }

    const html = generateIndustryPage(industry);
    const fileName = `${industry.id}.html`;
    const filePath = path.join(__dirname, fileName);

    fs.writeFileSync(filePath, html);
    console.log(`[${index + 1}/${allIndustries.length}] Created: ${fileName}`);
});

console.log(`\nSuccessfully generated ${allIndustries.length} industry pages!`);

// Export industries data for sitemap updates
module.exports = allIndustries;

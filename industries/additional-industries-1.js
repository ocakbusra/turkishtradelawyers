// Additional industries to add - Part 1
const additionalIndustries1 = [
    {
        id: "food-beverages",
        name: "Food & Beverages",
        title: "Food & Beverages Lawyer in Turkey",
        metaDescription: "Legal services for food and beverage companies in Turkey. Food safety, licensing, and regulatory compliance.",
        intro: "Turkey's food and beverage industry is subject to comprehensive food safety regulations and licensing requirements. Our food law practice provides specialized legal counsel for F&B businesses.",
        services: ["Food establishment licensing", "Product registration and labeling", "Food safety compliance programs", "Distribution and franchise agreements", "Import/export compliance", "Quality certification"],
        issues: ["Food safety regulations", "Labeling requirements", "Health claims restrictions", "Import permits", "Halal certification", "Environmental compliance"],
        keywords: ["food lawyer Turkey", "beverage regulations", "food safety Turkey", "F&B legal"]
    },
    {
        id: "food-production",
        name: "Food Production",
        title: "Food Production Lawyer in Turkey",
        metaDescription: "Legal services for food manufacturers in Turkey. Production licensing, HACCP compliance, and food regulations.",
        intro: "Food production facilities in Turkey must comply with strict hygiene standards and regulatory requirements. Our food law practice provides comprehensive legal support for food manufacturers.",
        services: ["Production facility licensing", "HACCP implementation", "Product formulation compliance", "Supply chain contracts", "Quality management systems", "Export documentation"],
        issues: ["Manufacturing permits", "Food hygiene regulations", "Traceability requirements", "Allergen management", "Packaging regulations", "Organic certification"],
        keywords: ["food production lawyer Turkey", "food manufacturing legal", "HACCP Turkey", "food factory licensing"]
    },
    {
        id: "fund-raising",
        name: "Fund-Raising",
        title: "Fund-Raising Lawyer in Turkey",
        metaDescription: "Legal services for fundraising organizations in Turkey. Charity regulations, donor agreements, and nonprofit compliance.",
        intro: "Fundraising activities in Turkey are subject to specific regulations governing charitable collections and donor relations. Our nonprofit law practice provides specialized legal counsel.",
        services: ["Fundraising campaign compliance", "Donor agreements", "Grant documentation", "Charity registration", "Crowdfunding compliance", "Tax exemption matters"],
        issues: ["Charitable collection permits", "Foreign donation regulations", "Tax treatment of donations", "Donor data protection", "Online fundraising rules", "Reporting requirements"],
        keywords: ["fundraising lawyer Turkey", "charity legal", "nonprofit fundraising", "donor agreements Turkey"]
    },
    {
        id: "furniture",
        name: "Furniture",
        title: "Furniture Lawyer in Turkey",
        metaDescription: "Legal services for furniture manufacturers and retailers in Turkey. Product safety, distribution, and trade compliance.",
        intro: "Turkey's furniture industry serves domestic and export markets with specific product safety and quality requirements. Our commercial law practice supports furniture businesses.",
        services: ["Product safety compliance", "Distribution agreements", "Manufacturing contracts", "Trademark protection", "Export documentation", "Retail franchise arrangements"],
        issues: ["Product safety standards", "Timber legality regulations", "Consumer warranty rights", "Competition law", "Customs procedures", "Environmental compliance"],
        keywords: ["furniture lawyer Turkey", "furniture manufacturing legal", "furniture distribution", "product safety"]
    },
    {
        id: "glass-ceramics-concrete",
        name: "Glass, Ceramics & Concrete",
        title: "Glass, Ceramics & Concrete Lawyer in Turkey",
        metaDescription: "Legal services for glass, ceramics, and concrete manufacturers in Turkey. Product certification and industrial regulations.",
        intro: "Turkey's building materials sector includes significant glass, ceramics, and concrete production. Our industrial law practice provides specialized legal support.",
        services: ["Product certification", "Manufacturing licensing", "Environmental permits", "Distribution contracts", "Quality standards compliance", "Export procedures"],
        issues: ["TSE certification requirements", "Environmental regulations", "Occupational safety", "Energy efficiency standards", "Waste management", "Construction product regulations"],
        keywords: ["glass manufacturer lawyer Turkey", "ceramics legal", "concrete production", "building materials law"]
    },
    {
        id: "graphic-design",
        name: "Graphic Design",
        title: "Graphic Design Lawyer in Turkey",
        metaDescription: "Legal services for graphic designers and creative agencies in Turkey. Copyright, contracts, and IP protection.",
        intro: "Graphic design professionals require robust intellectual property protection and well-structured client agreements. Our IP and commercial law practice supports creative businesses.",
        services: ["Copyright protection", "Client service agreements", "Design licensing", "Portfolio protection", "Freelancer contracts", "Agency partnerships"],
        issues: ["Copyright ownership", "Work-for-hire arrangements", "Design infringement", "Font licensing", "Stock image compliance", "Client confidentiality"],
        keywords: ["graphic design lawyer Turkey", "creative agency legal", "design copyright", "designer contracts"]
    },
    {
        id: "health-wellness-fitness",
        name: "Health, Wellness & Fitness",
        title: "Health, Wellness & Fitness Lawyer in Turkey",
        metaDescription: "Legal services for gyms, wellness centers, and fitness businesses in Turkey. Licensing, liability, and membership agreements.",
        intro: "Health and fitness businesses in Turkey must navigate licensing requirements, liability management, and consumer protection regulations. Our commercial law practice provides practical support.",
        services: ["Facility licensing", "Membership agreements", "Liability waivers", "Franchise arrangements", "Employment contracts", "Health claims compliance"],
        issues: ["Operating permits", "Consumer protection", "Personal injury liability", "Health and safety standards", "Advertising restrictions", "Data protection"],
        keywords: ["fitness lawyer Turkey", "gym legal services", "wellness business", "health club regulations"]
    },
    {
        id: "higher-education",
        name: "Higher Education",
        title: "Higher Education Lawyer in Turkey",
        metaDescription: "Legal services for universities and higher education institutions in Turkey. Accreditation, governance, and academic regulations.",
        intro: "Higher education institutions operate under YÖK oversight with specific governance and accreditation requirements. Our education law practice provides comprehensive legal support.",
        services: ["University establishment", "Accreditation applications", "Academic governance", "Research agreements", "Student matters", "International partnerships"],
        issues: ["YÖK regulatory requirements", "Academic freedom", "Student rights", "Research ethics", "International recognition", "Faculty employment"],
        keywords: ["higher education lawyer Turkey", "university legal", "YÖK compliance", "academic law"]
    },
    {
        id: "hospital-health-care",
        name: "Hospital & Health Care",
        title: "Hospital & Health Care Lawyer in Turkey",
        metaDescription: "Legal services for hospitals and healthcare providers in Turkey. Licensing, medical liability, and healthcare regulations.",
        intro: "Healthcare facilities in Turkey operate under comprehensive Ministry of Health regulations. Our healthcare law practice provides specialized legal counsel.",
        services: ["Hospital licensing", "Medical staff credentialing", "Patient rights compliance", "Healthcare contracts", "Medical liability defense", "Regulatory investigations"],
        issues: ["Healthcare facility licensing", "Medical malpractice", "Patient data protection", "Informed consent", "Healthcare advertising", "Insurance relationships"],
        keywords: ["hospital lawyer Turkey", "healthcare legal", "medical law Turkey", "hospital licensing"]
    },
    {
        id: "hospitality",
        name: "Hospitality",
        title: "Hospitality Lawyer in Turkey",
        metaDescription: "Legal services for hotels and hospitality businesses in Turkey. Licensing, management agreements, and tourism regulations.",
        intro: "Turkey's hospitality sector is subject to tourism regulations and specific operational requirements. Our hospitality law practice provides comprehensive legal support.",
        services: ["Hotel licensing", "Management agreements", "Franchise contracts", "Guest liability management", "Employment matters", "Real estate transactions"],
        issues: ["Tourism facility licensing", "Star rating compliance", "Consumer protection", "Health and safety", "Liquor licensing", "Environmental permits"],
        keywords: ["hospitality lawyer Turkey", "hotel legal services", "tourism law", "hotel licensing"]
    },
    {
        id: "human-resources",
        name: "Human Resources",
        title: "Human Resources Lawyer in Turkey",
        metaDescription: "Legal services for HR departments and consultancies in Turkey. Employment law, compliance, and workplace policies.",
        intro: "HR functions in Turkey must navigate complex labor regulations and workplace compliance requirements. Our employment law practice provides expert guidance.",
        services: ["Employment policy development", "Compliance audits", "Disciplinary procedures", "Restructuring advisory", "Work permit applications", "HR outsourcing agreements"],
        issues: ["Labor Code compliance", "Collective bargaining", "Workplace discrimination", "Termination procedures", "Employee data protection", "Social security obligations"],
        keywords: ["HR lawyer Turkey", "human resources legal", "employment compliance", "workplace law"]
    },
    {
        id: "import-export",
        name: "Import & Export",
        title: "Import & Export Lawyer in Turkey",
        metaDescription: "Legal services for importers and exporters in Turkey. Customs compliance, trade regulations, and international contracts.",
        intro: "Import and export activities in Turkey require careful attention to customs regulations and trade compliance. Our international trade practice provides comprehensive support.",
        services: ["Customs compliance", "Trade license applications", "International contracts", "Tariff classification", "Origin certification", "Trade dispute resolution"],
        issues: ["Customs procedures", "Import restrictions", "Export controls", "Free trade agreements", "Anti-dumping measures", "Trade sanctions"],
        keywords: ["import export lawyer Turkey", "customs legal", "trade compliance", "international trade Turkey"]
    },
    {
        id: "industrial-automation",
        name: "Industrial Automation",
        title: "Industrial Automation Lawyer in Turkey",
        metaDescription: "Legal services for industrial automation companies in Turkey. Technology contracts, IP protection, and manufacturing compliance.",
        intro: "Industrial automation companies must navigate technology licensing, safety regulations, and complex project contracts. Our technology law practice provides specialized support.",
        services: ["Technology licensing", "System integration contracts", "IP protection", "Safety compliance", "Maintenance agreements", "Project documentation"],
        issues: ["Machinery safety regulations", "Technology transfer", "Product liability", "Data protection in IoT", "Cybersecurity compliance", "Export controls"],
        keywords: ["industrial automation lawyer Turkey", "automation legal", "robotics law", "manufacturing technology"]
    },
    {
        id: "information-services",
        name: "Information Services",
        title: "Information Services Lawyer in Turkey",
        metaDescription: "Legal services for information service providers in Turkey. Data licensing, privacy compliance, and service agreements.",
        intro: "Information service providers must manage data rights, privacy compliance, and complex service arrangements. Our technology law practice provides expert guidance.",
        services: ["Data licensing agreements", "Privacy compliance", "Service terms development", "API licensing", "Content agreements", "Subscription models"],
        issues: ["Data protection regulations", "Intellectual property rights", "Consumer protection", "Cross-border data transfers", "Service liability", "Competition law"],
        keywords: ["information services lawyer Turkey", "data licensing", "information technology legal", "service agreements"]
    },
    {
        id: "information-technology-services",
        name: "Information Technology & Services",
        title: "Information Technology & Services Lawyer in Turkey",
        metaDescription: "Legal services for IT service providers in Turkey. Technology contracts, outsourcing, and regulatory compliance.",
        intro: "IT service providers in Turkey must navigate complex technology contracts and regulatory requirements. Our IT law practice provides comprehensive legal support.",
        services: ["IT service agreements", "Outsourcing contracts", "SLA documentation", "Cloud service terms", "Cybersecurity compliance", "Vendor management"],
        issues: ["Data protection compliance", "Service level obligations", "Liability limitations", "IP ownership", "Business continuity", "Regulatory requirements"],
        keywords: ["IT services lawyer Turkey", "technology legal", "IT outsourcing", "tech contracts Turkey"]
    }
];

module.exports = additionalIndustries1;

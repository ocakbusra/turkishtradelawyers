#!/usr/bin/env node

// Glossary Page Generator
// Generates individual HTML pages for each glossary entry

const fs = require('fs');
const path = require('path');

// Load glossary data
const glossaryData = require('./glossary-data.js');

// Template function
function generatePage(item) {
    const primaryTag = item.tags[0];
    const tagLabels = {
        'contract-law': 'Contract Law',
        'commercial-law': 'Commercial Law',
        'company-law': 'Company Law',
        'data-protection': 'Data Protection',
        'employment': 'Employment',
        'tax-law': 'Tax Law',
        'international-trade': 'International Trade',
        'dispute-resolution': 'Dispute Resolution',
        'intellectual-property': 'Intellectual Property',
        'real-estate': 'Real Estate'
    };

    const tagIcons = {
        'contract-law': 'fas fa-file-contract',
        'commercial-law': 'fas fa-store',
        'company-law': 'fas fa-building',
        'data-protection': 'fas fa-shield-alt',
        'employment': 'fas fa-users',
        'tax-law': 'fas fa-calculator',
        'international-trade': 'fas fa-globe',
        'dispute-resolution': 'fas fa-gavel',
        'intellectual-property': 'fas fa-lightbulb',
        'real-estate': 'fas fa-home'
    };

    // Get related items
    const relatedItems = item.relatedTerms
        .map(id => glossaryData.find(g => g.id === id))
        .filter(Boolean)
        .slice(0, 4);

    // Generate related links HTML
    const relatedLinksHTML = relatedItems.length > 0 ? `
        <section class="glossary-related">
            <h3><i class="fas fa-link"></i> Related Terms</h3>
            <div class="related-grid">
                ${relatedItems.map(rel => `
                    <a href="${rel.id}.html" class="related-card">
                        <span class="related-tag">
                            <i class="${tagIcons[rel.tags[0]]}"></i>
                            ${tagLabels[rel.tags[0]]}
                        </span>
                        <h4>${rel.term}</h4>
                        <span class="related-link">Learn More <i class="fas fa-arrow-right"></i></span>
                    </a>
                `).join('')}
            </div>
        </section>
    ` : '';

    // Generate tags HTML
    const tagsHTML = item.tags.map(tag => `
        <a href="../glossary.html?tag=${tag}" class="page-tag">
            <i class="${tagIcons[tag]}"></i> ${tagLabels[tag]}
        </a>
    `).join('');

    // Generate extended content based on topic
    const extendedContent = generateExtendedContent(item);

    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${item.question} Learn about ${item.term} under Turkish law. Expert legal guidance for B2B businesses.">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="author" content="Turkish Trade Lawyers">
    <meta name="keywords" content="${item.term}, Turkish law, ${item.tags.map(t => tagLabels[t]).join(', ')}, B2B legal, Turkey business law">
    <title>${item.term} - Turkish Law Glossary | Turkish Trade Lawyers</title>

    <!-- Open Graph -->
    <meta property="og:type" content="article">
    <meta property="og:title" content="${item.term} - Turkish Law Glossary">
    <meta property="og:description" content="${item.excerpt}">
    <meta property="og:url" content="https://www.turkishtradelawyers.com/glossary/${item.id}.html">
    <meta property="og:site_name" content="Turkish Trade Lawyers">
    <meta property="og:image" content="https://www.turkishtradelawyers.com/logo-square.png">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${item.term} - Turkish Law Glossary">
    <meta name="twitter:description" content="${item.excerpt}">

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-9FX7T07VPM"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-9FX7T07VPM');
    </script>

    <!-- Fonts & Styles -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../styles.css">
    <link rel="icon" href="../logo-square.png" type="image/png">
    <link rel="canonical" href="https://www.turkishtradelawyers.com/glossary/${item.id}.html">

    <!-- FAQ Schema -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "${item.question.replace(/"/g, '\\"')}",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "${item.excerpt.replace(/"/g, '\\"')}"
            }
        }]
    }
    </script>

    <!-- Breadcrumb Schema -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.turkishtradelawyers.com"},
            {"@type": "ListItem", "position": 2, "name": "Glossary", "item": "https://www.turkishtradelawyers.com/glossary.html"},
            {"@type": "ListItem", "position": 3, "name": "${item.term.replace(/"/g, '\\"')}"}
        ]
    }
    </script>

    <style>
        .glossary-page-hero {
            background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1E3A8A 100%);
            padding: 140px 0 60px;
            position: relative;
        }
        
        .glossary-page-hero::before {
            content: '';
            position: absolute;
            inset: 0;
            background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        
        .glossary-page-content {
            position: relative;
            z-index: 1;
        }
        
        .page-breadcrumb {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 24px;
            font-size: 0.9rem;
        }
        
        .page-breadcrumb a {
            color: rgba(255,255,255,0.7);
            text-decoration: none;
        }
        
        .page-breadcrumb a:hover {
            color: #00C4B4;
        }
        
        .page-breadcrumb .separator {
            color: rgba(255,255,255,0.4);
        }
        
        .page-breadcrumb .current {
            color: #ffffff;
        }
        
        .page-tag {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(0, 196, 180, 0.15);
            color: #00C4B4;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            margin-right: 8px;
            margin-bottom: 8px;
            text-decoration: none;
            border: 1px solid rgba(0, 196, 180, 0.3);
            transition: all 0.3s ease;
        }
        
        .page-tag:hover {
            background: rgba(0, 196, 180, 0.25);
        }
        
        .page-title {
            color: #ffffff;
            font-size: 2.75rem;
            font-weight: 800;
            margin: 16px 0;
            letter-spacing: -0.03em;
            line-height: 1.2;
        }
        
        .page-question {
            color: rgba(255,255,255,0.85);
            font-size: 1.25rem;
            font-style: italic;
            line-height: 1.6;
            max-width: 800px;
        }
        
        /* Main Content */
        .glossary-page-main {
            padding: 60px 0 80px;
            background: #ffffff;
        }
        
        .glossary-article {
            max-width: 800px;
            margin: 0 auto;
        }
        
        .glossary-answer-box {
            background: linear-gradient(135deg, #F0F4FF 0%, #ffffff 100%);
            border: 1px solid #E0E7FF;
            border-radius: 16px;
            padding: 32px;
            margin-bottom: 40px;
        }
        
        .glossary-answer-box h2 {
            font-size: 1.1rem;
            color: #2D4CC8;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .glossary-answer-box p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #1a2742;
        }
        
        .glossary-details h3 {
            font-size: 1.5rem;
            color: #1a2742;
            margin: 40px 0 20px;
            padding-bottom: 12px;
            border-bottom: 2px solid #E4E7EC;
        }
        
        .glossary-details h3:first-child {
            margin-top: 0;
        }
        
        .glossary-details p {
            font-size: 1.05rem;
            line-height: 1.8;
            color: #475467;
            margin-bottom: 20px;
        }
        
        .glossary-details ul, .glossary-details ol {
            margin: 20px 0;
            padding-left: 24px;
        }
        
        .glossary-details li {
            font-size: 1.05rem;
            line-height: 1.8;
            color: #475467;
            margin-bottom: 12px;
        }
        
        .glossary-details li strong {
            color: #1a2742;
        }
        
        /* Key Points Box */
        .key-points-box {
            background: #F8FAFC;
            border-left: 4px solid #2D4CC8;
            border-radius: 0 12px 12px 0;
            padding: 24px;
            margin: 32px 0;
        }
        
        .key-points-box h4 {
            color: #1a2742;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .key-points-box ul {
            margin: 0;
            padding-left: 20px;
        }
        
        /* Related Section */
        .glossary-related {
            margin-top: 60px;
            padding-top: 40px;
            border-top: 1px solid #E4E7EC;
        }
        
        .glossary-related h3 {
            font-size: 1.5rem;
            color: #1a2742;
            margin-bottom: 24px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .related-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
        }
        
        .related-card {
            background: #F8FAFC;
            border: 1px solid #E4E7EC;
            border-radius: 12px;
            padding: 20px;
            text-decoration: none;
            transition: all 0.3s ease;
        }
        
        .related-card:hover {
            transform: translateY(-4px);
            border-color: #2D4CC8;
            box-shadow: 0 12px 24px rgba(45, 76, 200, 0.1);
        }
        
        .related-tag {
            font-size: 0.7rem;
            font-weight: 600;
            text-transform: uppercase;
            color: #2D4CC8;
            display: flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 8px;
        }
        
        .related-card h4 {
            font-size: 1rem;
            color: #1a2742;
            margin-bottom: 8px;
            line-height: 1.4;
        }
        
        .related-link {
            font-size: 0.85rem;
            color: #2D4CC8;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        
        .related-link i {
            transition: transform 0.3s ease;
        }
        
        .related-card:hover .related-link i {
            transform: translateX(4px);
        }
        
        /* CTA Box */
        .glossary-cta {
            background: linear-gradient(135deg, #1E3A8A 0%, #2D4CC8 100%);
            border-radius: 16px;
            padding: 40px;
            margin-top: 50px;
            text-align: center;
        }
        
        .glossary-cta h3 {
            color: #ffffff;
            font-size: 1.5rem;
            margin-bottom: 12px;
        }
        
        .glossary-cta p {
            color: rgba(255,255,255,0.8);
            margin-bottom: 24px;
        }
        
        .glossary-cta .btn {
            background: #ffffff;
            color: #1E3A8A;
            padding: 14px 32px;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
        }
        
        .glossary-cta .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        
        /* Back to Glossary */
        .back-to-glossary {
            margin-top: 40px;
            text-align: center;
        }
        
        .back-to-glossary a {
            color: #2D4CC8;
            font-weight: 500;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        
        .back-to-glossary a:hover {
            text-decoration: underline;
        }
        
        @media (max-width: 768px) {
            .page-title {
                font-size: 2rem;
            }
            
            .related-grid {
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
                <!-- Glossary link removed -->
                <li><a href="../index.html#contact" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero -->
    <section class="glossary-page-hero">
        <div class="container">
            <div class="glossary-page-content">
                <nav class="page-breadcrumb">
                    <a href="../index.html">Home</a>
                    <span class="separator"><i class="fas fa-chevron-right"></i></span>
                    <a href="../glossary.html">Glossary</a>
                    <span class="separator"><i class="fas fa-chevron-right"></i></span>
                    <span class="current">${item.term}</span>
                </nav>
                
                <div class="page-tags">
                    ${tagsHTML}
                </div>
                
                <h1 class="page-title">${item.term}</h1>
                <p class="page-question">"${item.question}"</p>
            </div>
        </div>
    </section>

    <!-- Main Content -->
    <main class="glossary-page-main">
        <div class="container">
            <article class="glossary-article">
                <!-- Quick Answer -->
                <div class="glossary-answer-box">
                    <h2><i class="fas fa-check-circle"></i> Quick Answer</h2>
                    <p>${item.excerpt}</p>
                </div>

                <!-- Detailed Content -->
                <div class="glossary-details">
                    ${extendedContent}
                </div>

                <!-- Related Terms -->
                ${relatedLinksHTML}

                <!-- CTA -->
                <div class="glossary-cta">
                    <h3>Need Expert Legal Guidance?</h3>
                    <p>Our experienced attorneys can help you navigate ${item.term.toLowerCase()} under Turkish law.</p>
                    <a href="../index.html#contact" class="btn">
                        Schedule a Consultation <i class="fas fa-arrow-right"></i>
                    </a>
                </div>

                <!-- Back to Glossary -->
                <div class="back-to-glossary">
                    <a href="../glossary.html">
                        <i class="fas fa-arrow-left"></i> Back to Legal Glossary
                    </a>
                </div>
            </article>
        </div>
    </main>

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

// Generate extended content based on topic
function generateExtendedContent(item) {
    const tagContent = {
        'company-law': `
            <h3>Key Aspects Under Turkish Law</h3>
            <p>Understanding ${item.term.toLowerCase()} is crucial for businesses operating in Turkey. The Turkish Commercial Code provides the legal framework governing this area, with specific provisions that differ from other jurisdictions.</p>
            
            <div class="key-points-box">
                <h4><i class="fas fa-key"></i> Key Points to Remember</h4>
                <ul>
                    <li>Turkish Commercial Code No. 6102 provides the primary legal framework</li>
                    <li>Trade Registry registration is typically required for enforcement</li>
                    <li>Foreign investors have equal rights with domestic entities</li>
                    <li>Proper documentation and corporate formalities are essential</li>
                </ul>
            </div>
            
            <h3>Practical Considerations for Businesses</h3>
            <p>When dealing with ${item.term.toLowerCase()} in Turkey, businesses should consider engaging qualified legal counsel familiar with both Turkish law and international business practices. This ensures compliance with local requirements while meeting global standards.</p>
            
            <p>Documentation requirements, timeline considerations, and regulatory approvals vary depending on the specific circumstances of each case. Early planning and proper structuring can help avoid common pitfalls.</p>
        `,
        'contract-law': `
            <h3>Legal Framework in Turkey</h3>
            <p>${item.term} is governed primarily by the Turkish Code of Obligations No. 6098, which provides comprehensive rules for contractual relationships. Understanding these provisions is essential for drafting enforceable agreements.</p>
            
            <div class="key-points-box">
                <h4><i class="fas fa-key"></i> Key Points to Remember</h4>
                <ul>
                    <li>Turkish Code of Obligations applies to most commercial contracts</li>
                    <li>Freedom of contract is a fundamental principle, with some mandatory provisions</li>
                    <li>Written form may be required for certain agreements</li>
                    <li>Choice of law clauses are generally respected for international contracts</li>
                </ul>
            </div>
            
            <h3>Drafting Considerations</h3>
            <p>When drafting contracts involving ${item.term.toLowerCase()}, attention should be paid to Turkish-specific requirements and practices. Bilingual contracts (English-Turkish) are common for international transactions.</p>
            
            <p>Including appropriate dispute resolution mechanisms, clear governing law provisions, and well-defined obligations helps prevent future conflicts and ensures enforceability.</p>
        `,
        'employment': `
            <h3>Turkish Labor Law Framework</h3>
            <p>${item.term} under Turkish law is primarily regulated by Labor Law No. 4857. This legislation provides comprehensive protections for employees while establishing clear obligations for employers.</p>
            
            <div class="key-points-box">
                <h4><i class="fas fa-key"></i> Key Points to Remember</h4>
                <ul>
                    <li>Labor Law No. 4857 applies to most employment relationships</li>
                    <li>Employment contracts can be for definite or indefinite terms</li>
                    <li>Employees enjoy significant statutory protections</li>
                    <li>Social security contributions are mandatory for both parties</li>
                </ul>
            </div>
            
            <h3>Compliance Requirements</h3>
            <p>Employers operating in Turkey must ensure compliance with both written employment law requirements and practical HR management standards. This includes proper documentation, timely salary payments, and adherence to workplace safety regulations.</p>
            
            <p>Foreign companies should be particularly aware of work permit requirements and the specific obligations when employing both Turkish nationals and foreign workers.</p>
        `,
        'data-protection': `
            <h3>KVKK Compliance Requirements</h3>
            <p>${item.term} is regulated under Turkey's Personal Data Protection Law No. 6698 (KVKK). This legislation, modeled on the EU's GDPR, establishes comprehensive data protection requirements for all organizations processing personal data.</p>
            
            <div class="key-points-box">
                <h4><i class="fas fa-key"></i> Key Points to Remember</h4>
                <ul>
                    <li>KVKK applies to all personal data processing in Turkey</li>
                    <li>Data controller registration with VERBIS may be required</li>
                    <li>Cross-border data transfers have specific requirements</li>
                    <li>Data subject rights must be respected and facilitated</li>
                </ul>
            </div>
            
            <h3>Practical Implementation</h3>
            <p>Organizations must implement appropriate technical and organizational measures to ensure KVKK compliance. This includes data mapping, privacy notices, consent mechanisms, and breach notification procedures.</p>
            
            <p>The Data Protection Authority (KVKK Board) actively enforces compliance and has issued significant fines for violations. Regular compliance audits and updates are essential.</p>
        `,
        'tax-law': `
            <h3>Turkish Tax Framework</h3>
            <p>${item.term} in Turkey is governed by various tax laws including Corporate Tax Law, VAT Law, and special legislation. Understanding tax obligations is crucial for business planning and compliance.</p>
            
            <div class="key-points-box">
                <h4><i class="fas fa-key"></i> Key Points to Remember</h4>
                <ul>
                    <li>Corporate tax rate is currently 25%</li>
                    <li>Standard VAT rate is 20%, with reduced rates for certain goods</li>
                    <li>Double tax treaties may reduce withholding tax rates</li>
                    <li>Tax incentives are available for qualifying investments</li>
                </ul>
            </div>
            
            <h3>Tax Planning Considerations</h3>
            <p>Effective tax planning requires understanding both domestic Turkish tax law and applicable international tax treaties. Transfer pricing rules follow OECD guidelines and require proper documentation.</p>
            
            <p>Businesses should work with qualified tax advisors to optimize their tax position while ensuring full compliance with Turkish tax authorities' requirements.</p>
        `,
        'international-trade': `
            <h3>International Trade Framework</h3>
            <p>${item.term} is essential for businesses engaged in cross-border commerce with Turkey. The country's position as a bridge between Europe and Asia makes understanding trade regulations particularly important.</p>
            
            <div class="key-points-box">
                <h4><i class="fas fa-key"></i> Key Points to Remember</h4>
                <ul>
                    <li>Turkey is party to numerous free trade agreements</li>
                    <li>EU Customs Union provides preferential access for many goods</li>
                    <li>Foreign investment protection through bilateral treaties</li>
                    <li>Export incentives and free trade zones available</li>
                </ul>
            </div>
            
            <h3>Practical Applications</h3>
            <p>Businesses engaging in international trade must navigate customs procedures, import/export regulations, and trade compliance requirements. Proper classification, valuation, and origin documentation are essential.</p>
            
            <p>Working with experienced trade lawyers and customs brokers helps ensure smooth cross-border transactions and compliance with Turkish trade regulations.</p>
        `,
        'dispute-resolution': `
            <h3>Dispute Resolution in Turkey</h3>
            <p>${item.term} is a critical consideration for any business operating in or with Turkey. The Turkish legal system provides various mechanisms for resolving commercial disputes efficiently.</p>
            
            <div class="key-points-box">
                <h4><i class="fas fa-key"></i> Key Points to Remember</h4>
                <ul>
                    <li>Mandatory mediation applies to many commercial disputes</li>
                    <li>Turkish courts have specialized commercial divisions</li>
                    <li>International arbitration is well-recognized and enforced</li>
                    <li>Turkey is party to the New York Convention</li>
                </ul>
            </div>
            
            <h3>Choosing the Right Approach</h3>
            <p>The choice between litigation, arbitration, and mediation depends on various factors including contract terms, relationship considerations, and enforcement concerns. International parties often prefer arbitration for cross-border disputes.</p>
            
            <p>Proper dispute resolution clauses in contracts can significantly impact the efficiency and cost of resolving future disagreements.</p>
        `,
        'intellectual-property': `
            <h3>IP Protection in Turkey</h3>
            <p>${item.term} is protected under Turkish Industrial Property Law No. 6769 and related legislation. Turkey has modernized its IP regime to align with EU standards and international treaties.</p>
            
            <div class="key-points-box">
                <h4><i class="fas fa-key"></i> Key Points to Remember</h4>
                <ul>
                    <li>Trademark, patent, and design protection available</li>
                    <li>Registration provides nationwide protection</li>
                    <li>Turkey is party to major international IP treaties</li>
                    <li>Enforcement through civil and criminal proceedings</li>
                </ul>
            </div>
            
            <h3>Strategic Considerations</h3>
            <p>Protecting intellectual property in Turkey requires proactive registration and monitoring. The Turkish Patent and Trademark Office (TURKPATENT) handles registrations, while specialized IP courts handle disputes.</p>
            
            <p>Foreign companies should consider Turkey-specific IP strategies, including local registration even when international registrations exist, to ensure comprehensive protection.</p>
        `,
        'commercial-law': `
            <h3>Commercial Law Framework</h3>
            <p>${item.term} is governed by the Turkish Commercial Code No. 6102, which provides comprehensive rules for commercial activities. This modern legislation aligns with international commercial practices.</p>
            
            <div class="key-points-box">
                <h4><i class="fas fa-key"></i> Key Points to Remember</h4>
                <ul>
                    <li>Turkish Commercial Code applies to all commercial activities</li>
                    <li>Trade registry registration provides legal certainty</li>
                    <li>Commercial practices and customs are recognized</li>
                    <li>Competition law compliance is essential</li>
                </ul>
            </div>
            
            <h3>Business Implementation</h3>
            <p>Understanding Turkish commercial law requirements is essential for any business operating in Turkey. This includes proper corporate governance, contractual relationships, and regulatory compliance.</p>
            
            <p>Foreign companies should work with local counsel familiar with both Turkish commercial practices and international business standards.</p>
        `,
        'real-estate': `
            <h3>Real Estate Law in Turkey</h3>
            <p>${item.term} in Turkey is governed by various laws including the Land Registry Law, Zoning Law, and specific regulations for foreign ownership. The real estate sector offers significant opportunities but requires careful legal navigation.</p>
            
            <div class="key-points-box">
                <h4><i class="fas fa-key"></i> Key Points to Remember</h4>
                <ul>
                    <li>Title deed (tapu) registration is essential for ownership</li>
                    <li>Foreign ownership permitted with some restrictions</li>
                    <li>Due diligence is critical before any transaction</li>
                    <li>Zoning and permit compliance required for development</li>
                </ul>
            </div>
            
            <h3>Transaction Considerations</h3>
            <p>Real estate transactions in Turkey require proper due diligence including title verification, zoning compliance, and valuation. Both commercial and residential properties have specific regulatory requirements.</p>
            
            <p>Foreign investors should be aware of reciprocity requirements and restricted areas where foreign ownership may be limited or prohibited.</p>
        `
    };

    // Return content based on primary tag, or default content
    const primaryTag = item.tags[0];
    return tagContent[primaryTag] || tagContent['commercial-law'];
}

// Generate all pages
console.log('Generating glossary pages...');

glossaryData.forEach((item, index) => {
    const html = generatePage(item);
    const filePath = path.join(__dirname, `${item.id}.html`);
    fs.writeFileSync(filePath, html);
    console.log(`[${index + 1}/${glossaryData.length}] Created: ${item.id}.html`);
});

console.log(`\nSuccessfully generated ${glossaryData.length} glossary pages!`);

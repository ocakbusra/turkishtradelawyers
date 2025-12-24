/**
 * SEO Configuration & Site Data
 * Centralized configuration for programmatic SEO
 * Turkish Trade Lawyers - Site-wide SEO management
 */

const SiteConfig = {
    name: 'Turkish Trade Lawyers',
    shortName: 'TTL',
    tagline: 'Your Bridge to Business Success in Turkey',
    description: 'Expert legal counsel for international trade, corporate law, and dispute resolution in Turkey.',
    url: 'https://www.turkishtradelawyers.com',
    logo: 'https://www.turkishtradelawyers.com/logo-square.png',
    phone: '+90 212 706 59 16',
    email: 'hi@turkishtradelawyers.org',
    address: {
        street: 'Maslak Mah. Buyukdere Cad. No:255',
        city: 'Sarıyer',
        region: 'Istanbul',
        country: 'TR',
        postalCode: ''
    },
    socialMedia: {
        linkedin: '',
        twitter: ''
    },
    analytics: 'G-9FX7T07VPM'
};

// Article metadata for programmatic SEO
const ArticleData = {
    'artificial-intelligence-in-turkish-courts-a-landmark-decision': {
        title: 'Artificial Intelligence in Turkish Courts: A Landmark Decision',
        description: 'İstanbul 14th Commercial Court\'s groundbreaking decision on AI transparency in judicial proceedings, establishing ethical principles for AI use in Turkish courts.',
        category: 'Legal Technology',
        datePublished: '2025-12-22',
        dateModified: '2025-12-22',
        author: 'Turkish Trade Lawyers',
        keywords: ['AI in courts', 'Turkish judiciary', 'artificial intelligence', 'legal technology', 'Turkish law'],
        relatedArticles: ['local-trade-regulations-vs-international-agreements-turkish-law', 'key-legal-risks-in-cross-border-trade-and-how-to-mitigate-them']
    },
    'local-trade-regulations-vs-international-agreements-turkish-law': {
        title: 'Local Trade Regulations vs International Trade Agreements under Turkish Law',
        description: 'Legal guide on the conflict between Turkish local trade regulations and international trade agreements (WTO, FTAs). Learn about Article 90 and legal remedies.',
        category: 'Trade Regulations',
        datePublished: '2025-12-10',
        dateModified: '2025-12-10',
        author: 'Turkish Trade Lawyers',
        keywords: ['Turkish trade law', 'WTO', 'FTA', 'Article 90', 'international trade agreements', 'customs law'],
        relatedArticles: ['key-legal-risks-in-cross-border-trade-and-how-to-mitigate-them', 'how-to-avoid-legal-penalties-in-import-export-operations']
    },
    'key-legal-risks-in-cross-border-trade-and-how-to-mitigate-them': {
        title: 'Key Legal Risks in Cross-Border Trade and How to Mitigate Them',
        description: 'A rigorous legal analysis of payment, delivery, compliance, and dispute resolution risks in international commerce, with actionable mitigation strategies under Turkish law.',
        category: 'International Trade',
        datePublished: '2025-11-06',
        dateModified: '2025-11-06',
        author: 'Turkish Trade Lawyers',
        keywords: ['cross-border trade', 'legal risks', 'international commerce', 'Turkish law', 'trade compliance'],
        relatedArticles: ['local-trade-regulations-vs-international-agreements-turkish-law', 'how-to-avoid-legal-penalties-in-import-export-operations']
    },
    'how-to-avoid-legal-penalties-in-import-export-operations': {
        title: 'How to Avoid Legal Penalties in Import-Export Operations',
        description: 'Essential legal risks and strategic measures to ensure compliance and avoid penalties in Turkish import-export operations, covering classifications, valuations, and origin rules.',
        category: 'Customs & Compliance',
        datePublished: '2025-11-09',
        dateModified: '2025-11-09',
        author: 'Turkish Trade Lawyers',
        keywords: ['import export', 'customs compliance', 'legal penalties', 'Turkish customs', 'trade regulations'],
        relatedArticles: ['local-trade-regulations-vs-international-agreements-turkish-law', 'key-legal-risks-in-cross-border-trade-and-how-to-mitigate-them']
    },
    'no-more-id-photocopies-at-hotels-turkey-aligns-with-eu': {
        title: 'No More ID Photocopies at Hotels: Turkey Aligns with EU Standards',
        description: 'KVKK\'s new ruling prohibits photocopying guest IDs in the hospitality sector. Learn about the new requirements, compliance steps, and how this aligns with GDPR.',
        category: 'Data Privacy (KVKK)',
        datePublished: '2025-12-09',
        dateModified: '2025-12-09',
        author: 'Turkish Trade Lawyers',
        keywords: ['KVKK', 'data privacy', 'GDPR', 'hotel compliance', 'ID photocopies', 'Turkish law'],
        relatedArticles: ['kvkk-compliance-checklist', 'artificial-intelligence-in-turkish-courts-a-landmark-decision']
    },
    'most-important-contracts-for-the-business-have': {
        title: 'What Are the Most Important Contracts for a Business to Have?',
        description: 'A legal and comparative analysis of the six quintessential contracts essential for modern businesses, from Sales Agreements to NDAs.',
        category: 'Contract Law',
        datePublished: '2025-11-03',
        dateModified: '2025-11-03',
        author: 'Turkish Trade Lawyers',
        keywords: ['business contracts', 'contract law', 'NDA', 'sales agreement', 'Turkish commercial law'],
        relatedArticles: ['key-legal-risks-in-cross-border-trade-and-how-to-mitigate-them', 'local-trade-regulations-vs-international-agreements-turkish-law']
    }
};

// Country data for programmatic SEO
const CountryData = {
    'germany': {
        name: 'Germany',
        flag: '🇩🇪',
        title: 'Germany | Turkish Trade Lawyers',
        description: 'Turkish Trade Lawyers - Your German Gateway to the Turkish Market. Expert legal services for German companies entering Türkiye.',
        keywords: ['German companies in Turkey', 'Turkish law for Germans', 'Germany Turkey trade'],
        heroTitle: 'Secure Investment and Legal Excellence: Your German Gateway to the Turkish Market'
    },
    'france': {
        name: 'France',
        flag: '🇫🇷',
        title: 'France | Turkish Trade Lawyers',
        description: 'Turkish Trade Lawyers - Expert legal services for French companies entering the Turkish market.',
        keywords: ['French companies in Turkey', 'Turkish law for French', 'France Turkey trade'],
        heroTitle: 'Your French Gateway to the Turkish Market'
    }
    // Additional countries follow the same pattern
};

// Generate Article Schema markup
function generateArticleSchema(articleKey, articleUrl) {
    const article = ArticleData[articleKey];
    if (!article) return '';

    return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.title,
        "description": article.description,
        "author": {
            "@type": "Organization",
            "name": article.author,
            "url": SiteConfig.url
        },
        "publisher": {
            "@type": "Organization",
            "name": SiteConfig.name,
            "logo": {
                "@type": "ImageObject",
                "url": SiteConfig.logo
            }
        },
        "datePublished": article.datePublished,
        "dateModified": article.dateModified,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": articleUrl
        },
        "keywords": article.keywords.join(', ')
    }, null, 2);
}

// Generate Breadcrumb Schema
function generateBreadcrumbSchema(items) {
    const breadcrumbItems = items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
    }));

    return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems
    }, null, 2);
}

// Generate FAQ Schema
function generateFAQSchema(faqs) {
    return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }, null, 2);
}

// Generate LegalService Schema for organization
function generateLegalServiceSchema() {
    return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": SiteConfig.name,
        "url": SiteConfig.url,
        "logo": SiteConfig.logo,
        "image": SiteConfig.logo,
        "description": SiteConfig.description,
        "telephone": SiteConfig.phone,
        "email": SiteConfig.email,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": SiteConfig.address.street,
            "addressLocality": SiteConfig.address.city,
            "addressRegion": SiteConfig.address.region,
            "addressCountry": SiteConfig.address.country
        },
        "areaServed": [
            { "@type": "Country", "name": "Turkey" },
            { "@type": "Country", "name": "Germany" },
            { "@type": "Country", "name": "France" },
            { "@type": "Country", "name": "United Kingdom" },
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "China" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Legal Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Market Entry & Business Setup"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Contracts & Commercial Transactions"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Regulatory Compliance & Consulting"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Dispute Resolution & Legal Representation"
                    }
                }
            ]
        }
    }, null, 2);
}

// Related articles component generator
function generateRelatedArticlesHTML(currentArticle) {
    const article = ArticleData[currentArticle];
    if (!article || !article.relatedArticles) return '';

    let html = '<section class="related-articles">';
    html += '<h3>Related Articles</h3>';
    html += '<div class="related-grid">';

    article.relatedArticles.forEach(relatedKey => {
        const related = ArticleData[relatedKey];
        if (related) {
            html += `
            <a href="${relatedKey}.html" class="related-card">
                <span class="related-category">${related.category}</span>
                <h4>${related.title}</h4>
                <p>${related.description.substring(0, 120)}...</p>
            </a>`;
        }
    });

    html += '</div></section>';
    return html;
}

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SiteConfig,
        ArticleData,
        CountryData,
        generateArticleSchema,
        generateBreadcrumbSchema,
        generateFAQSchema,
        generateLegalServiceSchema,
        generateRelatedArticlesHTML
    };
}

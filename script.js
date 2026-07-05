// Mobile Navigation Toggle
const COOKIE_CONSENT_KEY = 'ttl_cookie_consent_v1';
const ANALYTICS_MEASUREMENT_ID = window.TTL_ANALYTICS_ID || 'G-9FX7T07VPM';
const CLARITY_PROJECT_ID = window.TTL_CLARITY_ID || 'vv2a5uwdk0';
let analyticsInitialized = false;
let clarityInitialized = false;

function getCookieConsent() {
    try {
        return localStorage.getItem(COOKIE_CONSENT_KEY);
    } catch {
        return null;
    }
}

function setCookieConsent(value) {
    try {
        localStorage.setItem(COOKIE_CONSENT_KEY, value);
    } catch {
        // Ignore storage errors and continue with in-session behavior.
    }
}

function clearCookieConsent() {
    try {
        localStorage.removeItem(COOKIE_CONSENT_KEY);
    } catch {
        // Ignore storage errors and continue.
    }
}

function loadScriptOnce(src, attributeName) {
    if (document.querySelector(`script[${attributeName}="true"]`)) {
        return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = src;
    script.setAttribute(attributeName, 'true');
    document.head.appendChild(script);
}

function enableAnalytics() {
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag !== 'function') {
        window.gtag = function () {
            window.dataLayer.push(arguments);
        };
    }

    if (!analyticsInitialized && ANALYTICS_MEASUREMENT_ID) {
        loadScriptOnce(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ANALYTICS_MEASUREMENT_ID)}`, 'data-ttl-analytics');
        if (typeof window.gtag === 'function') {
            window.gtag('js', new Date());
            window.gtag('config', ANALYTICS_MEASUREMENT_ID);
        }
        analyticsInitialized = true;
    }
}

function enableClarity() {
    if (clarityInitialized || !CLARITY_PROJECT_ID) return;
    loadScriptOnce(`https://www.clarity.ms/tag/${encodeURIComponent(CLARITY_PROJECT_ID)}`, 'data-ttl-clarity');
    clarityInitialized = true;
}

function initCookieConsent() {
    // Analytics and session recording load unconditionally.
    enableAnalytics();
    enableClarity();
}

window.TTL_resetCookieConsent = function () {
    // No-op: banner is disabled.
};

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// Navbar Shadow on Scroll
const navbar = document.getElementById('navbar');

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleNavbarScroll);

// Scroll Animation for Elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe service cards and why-us items
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    const whyUsItems = document.querySelectorAll('.why-us-item');
    const contactItems = document.querySelectorAll('.contact-item');
    const heroFeatures = document.querySelectorAll('.hero-feature');
    const heroBadges = document.querySelectorAll('.hero-badge');
    const teamCards = document.querySelectorAll('.team-card');

    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });

    whyUsItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(item);
    });

    contactItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease-out ${index * 0.15}s, transform 0.6s ease-out ${index * 0.15}s`;
        observer.observe(item);
    });

    heroFeatures.forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(30px)';
        feature.style.transition = `opacity 0.6s ease-out ${index * 0.08}s, transform 0.6s ease-out ${index * 0.08}s`;
        observer.observe(feature);
    });

    heroBadges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(20px)';
        badge.style.transition = `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`;
        observer.observe(badge);
    });

    teamCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = `opacity 0.7s ease-out ${index * 0.15}s, transform 0.7s ease-out ${index * 0.15}s`;
        observer.observe(card);
    });
});

// Intersection Observer callback for adding active class
const intersectionCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
};

const intersectionObserver = new IntersectionObserver(intersectionCallback, observerOptions);

// Observe all animated elements
// Observe all animated elements
setTimeout(() => {
    document.querySelectorAll('.service-card, .why-us-item, .contact-item, .hero-feature, .hero-badge, .team-card, .founder-card, .partner-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        intersectionObserver.observe(el);
    });
}, 100);

// Prevent scroll jump on page load
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

// Dynamic Hero Title & Team Page Card Expansion
document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Hero Title
    const keywords = [
        "Market Entry", "Financial Interests", "Compliance Standards",
        "Strategic Moves", "Contracts", "Transactions",
        "Cross-Border Deals", "Supply Chain", "Trade Flows",
        "Business Operations", "Investments", "Intellectual Assets", "Legal Rights"
    ];
    const dynamicKeywordSpan = document.getElementById('dynamic-keyword');
    let currentIndex = 0;

    const heroTitle = document.querySelector('.hero-title');
    if (dynamicKeywordSpan && heroTitle) {
        setInterval(() => {
            dynamicKeywordSpan.style.opacity = '0';

            setTimeout(() => {
                currentIndex = (currentIndex + 1) % keywords.length;
                const newKeyword = keywords[currentIndex];
                dynamicKeywordSpan.textContent = newKeyword;
                dynamicKeywordSpan.style.opacity = '1';
            }, 500);
        }, 3000);
    }

    // Contact Form Security Question Validation
    const contactForm = document.getElementById('consultation-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            const securityAnswer = document.getElementById('security-answer').value;
            // Simple check for "3 + 4"
            if (securityAnswer.trim() !== '7') {
                e.preventDefault();
                alert('Please provide the correct answer to the security question (3 + 4).');
                document.getElementById('security-answer').focus();
            }
        });
    }

});

// Footer Injection
document.addEventListener('DOMContentLoaded', () => {
    const scriptEl = document.querySelector('script[src$="script.js"]');
    const basePath = scriptEl?.getAttribute('src')?.replace(/script\.js(?:\?.*)?$/, '') || '';
    const footerContent = `
        <div class="container footer-container">
            <div class="footer-top">
                <div class="footer-brand">
                    <a href="${basePath}index.html#home" class="footer-logo">
                        <img src="${basePath}logo.webp" alt="Turkish Trade Lawyers Logo" class="footer-logo-icon">
                        <span class="footer-logo-text">
                            <span class="footer-logo-main">Turkish Trade Lawyers</span>
                            <span class="footer-logo-tagline">Legal Excellence in Turkey</span>
                        </span>
                    </a>
                    <p class="footer-description">Business-focused legal counsel for international trade, corporate structuring, compliance, and dispute resolution in Türkiye.</p>
                    <div class="footer-badges">
                        <span class="footer-badge"><i class="fas fa-scale-balanced"></i> Turkish Commercial Law</span>
                        <span class="footer-badge"><i class="fas fa-globe"></i> Cross-Border Advisory</span>
                        <span class="footer-badge"><i class="fas fa-shield-halved"></i> Compliance & Risk</span>
                    </div>
                </div>

                <div class="footer-contact-card">
                    <span class="footer-eyebrow">Contact</span>
                    <a href="tel:+905016359465" class="footer-contact-link">+90 501 635 94 65</a>
                    <a href="mailto:hi@turkishtradelawyers.com" class="footer-contact-link">hi@turkishtradelawyers.com</a>
                    <p class="footer-contact-copy">Maslak Mah. Buyukdere Cad. No:255, Sariyer, Istanbul</p>
                    <div class="footer-social-links">
                        <a href="https://wa.me/message/QBSUZJNCQOQEM1" target="_blank"
                            rel="noopener noreferrer" aria-label="WhatsApp" class="footer-social-link">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/turkish-trade-lawyers" target="_blank"
                            rel="noopener noreferrer" aria-label="LinkedIn" class="footer-social-link">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.youtube.com/@TurkishTradeLawyers" target="_blank"
                            rel="noopener noreferrer" aria-label="YouTube" class="footer-social-link">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href="https://www.facebook.com/turkishtradelawyers/" target="_blank"
                            rel="noopener noreferrer" aria-label="Facebook" class="footer-social-link">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="footer-grid" role="navigation" aria-label="Footer">
                <div class="footer-col">
                    <h4>Services</h4>
                    <a href="${basePath}setup-a-business-in-turkey.html">Setup a Business in Turkey</a>
                    <a href="${basePath}international-trade-customs-services-turkey.html">International Trade and Customs Services in Turkey</a>
                    <a href="${basePath}commercial-contract-services-turkey.html">Commercial Contract Services in Turkey</a>
                    <a href="${basePath}compliance-data-protection-services-turkey.html">Compliance and Data Protection Services in Turkey</a>
                    <a href="${basePath}dispute-resolution-in-turkey.html">Dispute Resolution in Turkey</a>
                    <a href="${basePath}employment-mobility-services-turkey.html">Employment and Mobility Services in Turkey</a>
                </div>

                <div class="footer-col">
                    <h4>Resources</h4>
                    <a href="${basePath}guides.html">Guides Hub</a>
                    <a href="${basePath}glossary.html">Legal Glossary</a>
                    <a href="${basePath}monitor.html">Turkish Trade Monitor</a>
                    <a href="${basePath}regions.html">Countries</a>
                    <a href="${basePath}industries.html">Industries</a>
                </div>

                <div class="footer-col">
                    <h4>Company</h4>
                    <a href="${basePath}ourexperts.html">About Turkish Trade Lawyers</a>
                    <a href="${basePath}index.html#why-us">Why Choose Us</a>
                    <a href="${basePath}contact.html">Contact</a>
                </div>

                <div class="footer-col">
                    <h4>Legal</h4>
                    <a href="${basePath}privacy-notice.html">Privacy Notice</a>
                    <a href="${basePath}cookie-policy.html">Cookie Policy</a>
                    <a href="${basePath}disclaimer.html">Disclaimer</a>
                </div>
            </div>

            <p class="footer-legal">&copy; 2026 Turkish Trade Lawyers. All rights reserved.</p>
        </div>
    `;

    const globalFooterPlaceholder = document.getElementById('global-footer');
    if (globalFooterPlaceholder) {
        const footerElement = document.createElement('footer');
        footerElement.className = 'footer';
        footerElement.innerHTML = footerContent;
        globalFooterPlaceholder.parentNode.replaceChild(footerElement, globalFooterPlaceholder);
    } else {
        const existingFooter = document.querySelector('footer.footer');
        if (existingFooter) {
            existingFooter.innerHTML = footerContent;
        }
    }
});

// Breadcrumb Injection (site-wide)
document.addEventListener('DOMContentLoaded', () => {
    const existingBreadcrumb = document.querySelector('nav.breadcrumb, .breadcrumb-nav, .breadcrumb-inline');
    const path = (window.location && window.location.pathname) ? window.location.pathname : '';
    const fileName = path.split('/').filter(Boolean).pop() || '';

    const isHome = fileName === '' || fileName === 'index.html';
    if (isHome || existingBreadcrumb) {
        // Still ensure breadcrumb schema is present when breadcrumb markup exists.
        if (existingBreadcrumb) {
            tryAddBreadcrumbSchemaFromMarkup();
        }
        return;
    }

    const h1 = document.querySelector('h1');
    const fallbackTitle = (document.title || '').split('|')[0].trim();
    const currentLabel = (h1?.textContent || fallbackTitle || fileName.replace(/\.html$/i, '')).trim();

    const crumbs = [{ name: 'Home', href: '/' }];

    const isCountries = path.includes('/countries/');
    const isIndustries = path.includes('/industries/');
    const isGlossary = path.includes('/glossary/');
    const isMonitor = fileName === 'monitor.html' || fileName.startsWith('monitor-');

    if (isCountries) {
        crumbs.push({ name: 'Regions', href: '/regions.html' });
        crumbs.push({ name: currentLabel });
    } else if (isIndustries) {
        crumbs.push({ name: 'Industries', href: '/industries.html' });
        crumbs.push({ name: currentLabel });
    } else if (isGlossary) {
        crumbs.push({ name: 'Glossary', href: '/glossary.html' });
        crumbs.push({ name: currentLabel });
    } else if (fileName === 'guides.html') {
        crumbs.push({ name: 'Guides' });
    } else if (fileName === 'services.html') {
        crumbs.push({ name: 'Services' });
    } else if (fileName === 'contact.html') {
        crumbs.push({ name: 'Contact' });
    } else if (fileName === 'ourexperts.html') {
        crumbs.push({ name: 'Our Experts' });
    } else if (fileName === 'industries.html') {
        crumbs.push({ name: 'Industries' });
    } else if (fileName === 'regions.html') {
        crumbs.push({ name: 'Regions' });
    } else if (fileName === 'glossary.html') {
        crumbs.push({ name: 'Glossary' });
    } else if (isMonitor) {
        crumbs.push({ name: 'Monitor', href: '/monitor.html' });
        if (fileName !== 'monitor.html') crumbs.push({ name: currentLabel });
    } else {
        crumbs.push({ name: 'Guides', href: '/guides.html' });
        crumbs.push({ name: currentLabel });
    }

    const breadcrumbEl = document.createElement('nav');
    breadcrumbEl.className = 'breadcrumb';
    breadcrumbEl.setAttribute('aria-label', 'Breadcrumb');

    const navEl = document.createElement('div');
    navEl.className = 'breadcrumb-nav';

    crumbs.forEach((crumb, index) => {
        const isLast = index === crumbs.length - 1;
        if (crumb.href && !isLast) {
            const a = document.createElement('a');
            a.href = crumb.href;
            a.textContent = crumb.name;
            navEl.appendChild(a);
        } else {
            const span = document.createElement('span');
            span.className = 'current';
            span.textContent = crumb.name;
            navEl.appendChild(span);
        }

        if (!isLast) {
            const sep = document.createElement('span');
            sep.className = 'separator';
            sep.textContent = '›';
            navEl.appendChild(sep);
        }
    });

    breadcrumbEl.appendChild(navEl);

    const navbarEl = document.querySelector('nav.navbar');
    if (navbarEl) {
        navbarEl.insertAdjacentElement('afterend', breadcrumbEl);
    } else {
        document.body.insertAdjacentElement('afterbegin', breadcrumbEl);
    }

    tryAddBreadcrumbSchemaFromMarkup();
});

function tryAddBreadcrumbSchemaFromMarkup() {
    const hasBreadcrumbSchema = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .some(s => (s.textContent || '').includes('"BreadcrumbList"') || (s.textContent || '').includes('"@type":"BreadcrumbList"'));
    if (hasBreadcrumbSchema) return;
    try {
        generateBreadcrumbSchema();
    } catch {
        // no-op
    }
}

// Related Articles Injection (blog/article pages)
document.addEventListener('DOMContentLoaded', () => {
    const articleEl = document.querySelector('article');
    if (!articleEl) return;

    const path = (window.location && window.location.pathname) ? window.location.pathname : '';
    const slug = (path.split('/').filter(Boolean).pop() || '').replace(/\.html$/i, '');
    if (!slug || slug === 'index' || slug === 'guides' || slug === 'services' || slug === 'monitor') return;

    injectEEATSignals(articleEl, slug);

    if (articleEl.querySelector('.related-articles')) return;

    const related = pickRelatedArticles(slug, 4);
    if (related.length === 0) return;

    const scriptEl = document.querySelector('script[src$="script.js"]');
    const basePath = scriptEl?.getAttribute('src')?.replace(/script\.js(?:\?.*)?$/, '') || '';

    const section = document.createElement('section');
    section.className = 'related-articles';
    section.innerHTML = `
        <h3>Related Articles</h3>
        <div class="related-grid">
            ${related.map(item => `
                <a href="${basePath}${item.slug}.html" class="related-card">
                    <span class="related-category">${item.category}</span>
                    <h4 style="text-transform: capitalize;">${String(item.title).replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())}</h4>
                    <p>${item.description}</p>
                </a>
            `).join('')}
        </div>
    `;

    articleEl.appendChild(section);
});

function injectEEATSignals(articleEl, slug) {
    const articleText = (articleEl.textContent || '').toLowerCase();

    // 1) Legal disclaimer (skip if already present)
    const hasDisclaimer = articleText.includes('does not constitute legal advice')
        || articleText.includes('informational purposes only')
        || !!articleEl.querySelector('.legal-disclaimer');

    // 2) Sources / citations
    const hasSources = !!articleEl.querySelector('.sources-box');

    // 3) Author / contributors
    const hasAuthorBox = !!articleEl.querySelector('.author-box') || !!articleEl.querySelector('.expert-contributors');

    const insertBeforeEl = articleEl.querySelector('.related-articles') || null;

    const scriptEl = document.querySelector('script[src$="script.js"]');
    const basePath = scriptEl?.getAttribute('src')?.replace(/script\.js(?:\?.*)?$/, '') || '';

    if (!hasDisclaimer) {
        const disclaimer = document.createElement('div');
        disclaimer.className = 'legal-disclaimer';
        disclaimer.innerHTML = `
            <strong>Disclaimer:</strong> This content is for informational purposes only and does not constitute legal advice.
            For advice on your specific situation, please <a href="${basePath}contact.html">contact us</a> or review our
            <a href="${basePath}disclaimer.html">full disclaimer</a>.
        `;

        if (insertBeforeEl) articleEl.insertBefore(disclaimer, insertBeforeEl);
        else articleEl.appendChild(disclaimer);
    }

    if (!hasSources) {
        const sources = getAuthoritativeSources(slug);
        if (sources.length > 0) {
            const sourcesSection = document.createElement('section');
            sourcesSection.className = 'sources-box';
            sourcesSection.innerHTML = `
                <h3>Sources & Authorities</h3>
                <p class="sources-note">Primary sources and official institutions referenced for accuracy and transparency.</p>
                <ul class="sources-list">
                    ${sources.map(s => `
                        <li>
                            <a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label}</a>
                        </li>
                    `).join('')}
                </ul>
            `;

            if (insertBeforeEl) articleEl.insertBefore(sourcesSection, insertBeforeEl);
            else articleEl.appendChild(sourcesSection);
        }
    }

    if (!hasAuthorBox) {
        const contributors = document.createElement('section');
        contributors.className = 'expert-contributors';
        contributors.innerHTML = `
            <h3>Expert Contributors</h3>
            <div class="expert-grid">
                <div class="expert-card" itemscope itemtype="https://schema.org/Person">
                    <img src="${basePath}busraocak.png" alt="Büşra Ocak" class="expert-photo" itemprop="image">
                    <div class="expert-info">
                        <h4 itemprop="name">Büşra Ocak</h4>
                        <p class="expert-title" itemprop="jobTitle">Co-Founder & Managing Partner</p>
                        <p class="expert-desc" itemprop="description">Focus areas include contract law, KVKK/GDPR compliance,
                            employment disputes, and commercial litigation.</p>
                        <p class="expert-cred">LL.B. Ankara University Faculty of Law · Union of Turkish Bar Associations · Istanbul Bar Association</p>
                        <a class="expert-link" href="${basePath}ourexperts.html">Full bio</a>
                    </div>
                </div>
                <div class="expert-card" itemscope itemtype="https://schema.org/Person">
                    <img src="${basePath}basakcavusogullari.png" alt="Başak Çavuşoğulları" class="expert-photo" itemprop="image">
                    <div class="expert-info">
                        <h4 itemprop="name">Başak Çavuşoğulları</h4>
                        <p class="expert-title" itemprop="jobTitle">Co-Founder & Senior Partner</p>
                        <p class="expert-desc" itemprop="description">Advises on commercial law, regulatory compliance,
                            and cross-border transactions; leads corporate and immigration-related services.</p>
                        <p class="expert-cred">LL.B. Istanbul University Faculty of Law · Union of Turkish Bar Associations · Bursa Bar Association</p>
                        <a class="expert-link" href="${basePath}ourexperts.html">Full bio</a>
                    </div>
                </div>
            </div>
        `;

        if (insertBeforeEl) articleEl.insertBefore(contributors, insertBeforeEl);
        else articleEl.appendChild(contributors);
    }
}

const RELATED_ARTICLES_INDEX = {
    'establishing-limited-liability-company-turkey': {
        title: 'Establishing a Limited Liability Company (LLC) in Turkey',
        category: 'Company Formation',
        description: 'A step-by-step overview of incorporation, governance, and practical setup considerations.'
    },
    'llc-or-joint-stock-company-turkey': {
        title: 'LLC vs Joint Stock Company in Turkey',
        category: 'Corporate Structuring',
        description: 'Compare capital, governance, investor readiness, and operational flexibility.'
    },
    'liaison-office-vs-branch-office-turkey': {
        title: 'Liaison Office vs Branch Office in Turkey',
        category: 'Market Entry',
        description: 'A practical comparison of permitted activities, setup steps, and compliance obligations.'
    },
    'how-to-enter-turkish-market': {
        title: 'How to Enter the Turkish Market',
        category: 'Market Entry',
        description: 'Strategic legal roadmap for market entry, structuring, and operational risk management.'
    },
    'mergers-acquisitions-legal-due-diligence-turkey': {
        title: 'Mergers & Acquisitions Legal Due Diligence in Turkey',
        category: 'M&A',
        description: 'Key legal workstreams, red flags, and how to structure diligence for cross-border deals.'
    },
    'corporate-tax-vat-withholding-turkey': {
        title: 'Corporate Tax, VAT, and Withholding Tax in Turkey',
        category: 'Tax',
        description: 'A high-level guide to common tax topics affecting trading and investing in Türkiye.'
    },
    'investment-incentives-turkiye-2026-guide': {
        title: 'Investment Incentives in Türkiye (2026 Guide)',
        category: 'Investment',
        description: 'Overview of incentives, eligibility, and practical compliance considerations.'
    },
    'kvkk-compliance-checklist': {
        title: 'KVKK Compliance Checklist',
        category: 'Data Privacy (KVKK)',
        description: 'A practical plan to reduce privacy risk and improve your KVKK compliance posture.'
    },
    'data-controller-representative-kvkk-turkey': {
        title: 'Data Controller Representative (KVKK) in Turkey',
        category: 'Data Privacy (KVKK)',
        description: 'When it is required, how to appoint, and what obligations to expect in practice.'
    },
    'no-more-id-photocopies-at-hotels-turkey-aligns-with-eu': {
        title: 'No More ID Photocopies at Hotels: Turkey Aligns with EU Standards',
        category: 'Data Privacy (KVKK)',
        description: 'What the KVKK ruling changes and the compliance steps hospitality businesses should take.'
    },
    'local-trade-regulations-vs-international-agreements-turkish-law': {
        title: 'Local Trade Regulations vs International Trade Agreements under Turkish Law',
        category: 'International Trade',
        description: 'How conflicts are resolved in practice, including Article 90 dynamics and remedies.'
    },
    'how-to-avoid-legal-penalties-in-import-export-operations': {
        title: 'How to Avoid Legal Penalties in Import-Export Operations',
        category: 'Customs & Compliance',
        description: 'Risk reduction measures for classifications, valuation, origin rules, and documentation.'
    },
    'presidential-decision-amending-implementation-turkish-customs-law': {
        title: 'Presidential Decision Amending Implementation of Turkish Customs Law',
        category: 'Customs & Compliance',
        description: 'Practical implications for compliance teams and cross-border operations.'
    },
    'key-legal-risks-in-cross-border-trade-and-how-to-mitigate-them': {
        title: 'Key Legal Risks in Cross-Border Trade and How to Mitigate Them',
        category: 'International Trade',
        description: 'Payment, delivery, compliance, and dispute resolution risks with mitigation strategies.'
    },
    'enforcing-foreign-arbitral-awards-turkey': {
        title: 'Enforcing Foreign Arbitral Awards in Turkey',
        category: 'Dispute Resolution',
        description: 'Recognition, enforcement pathways, and common obstacles in Turkish courts.'
    },
    'strategic-asset-protection-in-turkiye-securing-your-claims-before-international-arbitration': {
        title: 'Strategic Asset Protection in Türkiye Before International Arbitration',
        category: 'Dispute Resolution',
        description: 'How to secure claims early and protect enforcement leverage in cross-border disputes.'
    },
    'employment-law-hiring-terminating-turkey': {
        title: 'Employment Law in Turkey: Hiring and Termination',
        category: 'Employment',
        description: 'Key rules, documentation, and practical termination risk management considerations.'
    },
    'most-important-contracts-for-the-business-have': {
        title: 'What Are the Most Important Contracts for a Business to Have?',
        category: 'Contract Law',
        description: 'A practical view of core contracts businesses rely on for day-to-day risk management.'
    },
    'drafting-valid-power-of-attorney-turkey': {
        title: 'Drafting a Valid Power of Attorney in Turkey',
        category: 'Contract Law',
        description: 'Key drafting requirements, scope considerations, and common validity pitfalls.'
    },
    'trademark-registration-turkey': {
        title: 'Trademark Registration in Turkey',
        category: 'IP',
        description: 'Filing strategy, opposition timelines, and practical brand-protection steps.'
    }
};

function pickRelatedArticles(currentSlug, maxCount) {
    const keywordMeta = document.querySelector('meta[name="keywords"]')?.content || '';
    const haystack = `${currentSlug} ${keywordMeta}`.toLowerCase();

    const clusters = [
        { match: /(llc|limited|joint|stock|liaison|branch|market entry|incorpor)/, slugs: ['establishing-limited-liability-company-turkey', 'llc-or-joint-stock-company-turkey', 'liaison-office-vs-branch-office-turkey', 'how-to-enter-turkish-market'] },
        { match: /(customs|import|export|trade|wto|fta|origin|valuation|penalt)/, slugs: ['how-to-avoid-legal-penalties-in-import-export-operations', 'local-trade-regulations-vs-international-agreements-turkish-law', 'presidential-decision-amending-implementation-turkish-customs-law', 'key-legal-risks-in-cross-border-trade-and-how-to-mitigate-them'] },
        { match: /(kvkk|privacy|data|gdpr|controller|representative)/, slugs: ['kvkk-compliance-checklist', 'data-controller-representative-kvkk-turkey', 'no-more-id-photocopies-at-hotels-turkey-aligns-with-eu'] },
        { match: /(arbit|dispute|enforce|attachment|litigat)/, slugs: ['enforcing-foreign-arbitral-awards-turkey', 'strategic-asset-protection-in-turkiye-securing-your-claims-before-international-arbitration', 'key-legal-risks-in-cross-border-trade-and-how-to-mitigate-them'] },
        { match: /(merger|acquis|due diligence|m&a)/, slugs: ['mergers-acquisitions-legal-due-diligence-turkey', 'most-important-contracts-for-the-business-have', 'corporate-tax-vat-withholding-turkey'] },
        { match: /(employment|hiring|termination|hr)/, slugs: ['employment-law-hiring-terminating-turkey', 'most-important-contracts-for-the-business-have', 'kvkk-compliance-checklist'] },
        { match: /(contract|agreement|power of attorney|poa)/, slugs: ['most-important-contracts-for-the-business-have', 'drafting-valid-power-of-attorney-turkey', 'kvkk-compliance-checklist'] },
        { match: /(tax|vat|withholding|incentive)/, slugs: ['corporate-tax-vat-withholding-turkey', 'investment-incentives-turkiye-2026-guide', 'establishing-limited-liability-company-turkey'] },
        { match: /(trademark|ip|brand)/, slugs: ['trademark-registration-turkey', 'most-important-contracts-for-the-business-have', 'how-to-enter-turkish-market'] }
    ];

    const cluster = clusters.find(c => c.match.test(haystack));
    const candidateSlugs = cluster ? cluster.slugs : Object.keys(RELATED_ARTICLES_INDEX);

    const unique = [];
    for (const candidate of candidateSlugs) {
        if (candidate === currentSlug) continue;
        if (!RELATED_ARTICLES_INDEX[candidate]) continue;
        unique.push({ slug: candidate, ...RELATED_ARTICLES_INDEX[candidate] });
        if (unique.length >= maxCount) break;
    }

    // Fallback to popular articles if cluster is too small or current not indexed.
    if (unique.length < Math.min(3, maxCount)) {
        const fallback = [
            'establishing-limited-liability-company-turkey',
            'how-to-enter-turkish-market',
            'kvkk-compliance-checklist',
            'key-legal-risks-in-cross-border-trade-and-how-to-mitigate-them',
            'corporate-tax-vat-withholding-turkey'
        ];
        for (const candidate of fallback) {
            if (candidate === currentSlug) continue;
            if (!RELATED_ARTICLES_INDEX[candidate]) continue;
            if (unique.some(u => u.slug === candidate)) continue;
            unique.push({ slug: candidate, ...RELATED_ARTICLES_INDEX[candidate] });
            if (unique.length >= maxCount) break;
        }
    }

    return unique;
}

const AUTHORITATIVE_SOURCES = {
    general: [
        { label: 'Mevzuat Bilgi Sistemi (official legislation portal)', url: 'https://www.mevzuat.gov.tr' },
        { label: 'Official Gazette (Resmî Gazete)', url: 'https://www.resmigazete.gov.tr' },
        { label: 'Republic of Türkiye Ministry of Trade', url: 'https://www.trade.gov.tr' }
    ],
    company: [
        { label: 'Turkish Commercial Code (Law No. 6102) – Mevzuat PDF', url: 'https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6102.pdf' },
        { label: 'Foreign Direct Investment Law (Law No. 4875) – Mevzuat PDF', url: 'https://www.mevzuat.gov.tr/MevzuatMetin/1.5.4875.pdf' },
        { label: 'Republic of Türkiye Ministry of Trade', url: 'https://www.trade.gov.tr' },
        { label: 'Investment Office of the Presidency of the Republic of Türkiye', url: 'https://www.invest.gov.tr' }
    ],
    contracts: [
        { label: 'Turkish Code of Obligations (Law No. 6098) – Mevzuat PDF', url: 'https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6098.pdf' },
        { label: 'Turkish Commercial Code (Law No. 6102) – Mevzuat PDF', url: 'https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6102.pdf' },
        { label: 'Mevzuat Bilgi Sistemi (official legislation portal)', url: 'https://www.mevzuat.gov.tr' }
    ],
    kvkk: [
        { label: 'Law on the Protection of Personal Data (KVKK, Law No. 6698) – Mevzuat PDF', url: 'https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6698.pdf' },
        { label: 'Personal Data Protection Authority (KVKK)', url: 'https://www.kvkk.gov.tr' },
        { label: 'Official Gazette (Resmî Gazete)', url: 'https://www.resmigazete.gov.tr' }
    ],
    tax: [
        { label: 'Revenue Administration (GİB)', url: 'https://www.gib.gov.tr' },
        { label: 'Mevzuat Bilgi Sistemi (official legislation portal)', url: 'https://www.mevzuat.gov.tr' },
        { label: 'Central Bank of the Republic of Türkiye (CBRT)', url: 'https://www.tcmb.gov.tr' }
    ],
    customsTrade: [
        { label: 'Turkish Customs Law (Law No. 4458) – Mevzuat PDF', url: 'https://www.mevzuat.gov.tr/MevzuatMetin/1.5.4458.pdf' },
        { label: 'Republic of Türkiye Ministry of Trade', url: 'https://www.trade.gov.tr' },
        { label: 'Official Gazette (Resmî Gazete)', url: 'https://www.resmigazete.gov.tr' }
    ],
    employment: [
        { label: 'Turkish Labour Law (Law No. 4857) – Mevzuat PDF', url: 'https://www.mevzuat.gov.tr/MevzuatMetin/1.5.4857.pdf' },
        { label: 'Mevzuat Bilgi Sistemi (official legislation portal)', url: 'https://www.mevzuat.gov.tr' }
    ],
    ip: [
        { label: 'Industrial Property Code (Law No. 6769) – Mevzuat PDF', url: 'https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6769.pdf' },
        { label: 'Turkish Patent and Trademark Office (TÜRKPATENT)', url: 'https://www.turkpatent.gov.tr' }
    ]
};

function getAuthoritativeSources(slug) {
    const keywordMeta = document.querySelector('meta[name="keywords"]')?.content || '';
    const haystack = `${slug} ${keywordMeta}`.toLowerCase();

    const matchers = [
        { re: /(kvkk|privacy|data|gdpr|verbi̇s|verbis|controller|representative)/, key: 'kvkk' },
        { re: /(customs|import|export|trade|wto|fta|origin|valuation|penalt)/, key: 'customsTrade' },
        { re: /(llc|limited|joint|stock|liaison|branch|incorpor|company formation|market entry)/, key: 'company' },
        { re: /(tax|vat|withholding)/, key: 'tax' },
        { re: /(employment|hiring|termination|hr|worker|labour|labor)/, key: 'employment' },
        { re: /(trademark|ip|brand|industrial property)/, key: 'ip' },
        { re: /(contract|agreement|power of attorney|poa|obligation)/, key: 'contracts' }
    ];

    const bucketKey = matchers.find(m => m.re.test(haystack))?.key || 'general';
    const bucket = AUTHORITATIVE_SOURCES[bucketKey] || AUTHORITATIVE_SOURCES.general;

    // Always include general sources as tail (dedup by URL)
    const combined = [...bucket, ...AUTHORITATIVE_SOURCES.general];
    const seen = new Set();
    return combined.filter(item => {
        if (seen.has(item.url)) return false;
        seen.add(item.url);
        return true;
    }).slice(0, 8);
}

/* =========================================
   SEO Enhancement Functions
   Programmatic SEO & UX Improvements
   ========================================= */

// Reading Progress Bar for Articles
function initReadingProgress() {
    const progressBar = document.querySelector('.reading-progress');
    if (!progressBar) return;

    const article = document.querySelector('article, .article-content, main');
    if (!article) return;

    function updateProgress() {
        const articleRect = article.getBoundingClientRect();
        const articleTop = articleRect.top + window.pageYOffset;
        const articleHeight = article.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;

        const start = articleTop - windowHeight;
        const end = articleTop + articleHeight;
        const current = scrollTop - start;
        const total = end - start;

        const progress = Math.min(Math.max((current / total) * 100, 0), 100);
        progressBar.style.width = `${progress}%`;
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
}

// Lazy Loading Observer for Images
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => img.classList.add('loaded'));
    }
}

// Auto-generate Table of Contents from H2 headings
function generateTableOfContents() {
    const tocContainer = document.querySelector('.article-nav ul');
    if (!tocContainer) return;

    const article = document.querySelector('article, .article-content');
    if (!article) return;

    const headings = article.querySelectorAll('h2[id]');
    if (headings.length === 0) return;

    tocContainer.innerHTML = '';

    headings.forEach(heading => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${heading.id}`;
        a.textContent = heading.textContent;
        li.appendChild(a);
        tocContainer.appendChild(li);
    });

    // Highlight active section on scroll
    function highlightActiveSection() {
        const scrollPos = window.scrollY + 150;

        headings.forEach((heading) => {
            const section = heading;
            const sectionTop = section.offsetTop;
            const link = tocContainer.querySelector(`a[href="#${heading.id}"]`);

            if (link) {
                if (scrollPos >= sectionTop) {
                    tocContainer.querySelectorAll('a').forEach(a => a.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection, { passive: true });
    highlightActiveSection();
}

// Generate Breadcrumb Schema dynamically
function generateBreadcrumbSchema() {
    const breadcrumbNav = document.querySelector('.breadcrumb-nav');
    if (!breadcrumbNav) return;

    const items = [];
    const links = breadcrumbNav.querySelectorAll('a');
    const current = breadcrumbNav.querySelector('.current');

    links.forEach((link, index) => {
        items.push({
            "@type": "ListItem",
            "position": index + 1,
            "name": link.textContent.trim(),
            "item": link.href
        });
    });

    if (current) {
        items.push({
            "@type": "ListItem",
            "position": items.length + 1,
            "name": current.textContent.trim()
        });
    }

    if (items.length > 0) {
        const schema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
    }
}

// Initialize internal link tracking for analytics
function trackInternalLinks() {
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (typeof gtag === 'function') {
                gtag('event', 'internal_link_click', {
                    'link_url': this.href,
                    'link_text': this.textContent.trim().substring(0, 50)
                });
            }
        });
    });
}

// Smooth scroll for table of contents links
function initSmoothScrollTOC() {
    const tocLinks = document.querySelectorAll('.article-nav a');

    tocLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                const offset = 100; // Account for fixed navbar
                const targetPosition = target.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update URL without triggering scroll
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
}

// Add social share functionality
function initShareButtons() {
    const shareButtons = document.querySelectorAll('.share-btn');

    shareButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const platform = this.classList.contains('linkedin') ? 'LinkedIn' :
                this.classList.contains('twitter') ? 'Twitter' : 'Email';

            if (typeof gtag === 'function') {
                gtag('event', 'share', {
                    'method': platform,
                    'content_type': 'article'
                });
            }
        });
    });
}

// Performance: Defer non-critical scripts
function deferNonCriticalScripts() {
    // Defer Tawk.to loading until user interaction or after 5 seconds
    let tawkLoaded = false;

    function loadTawk() {
        if (tawkLoaded) return;
        tawkLoaded = true;

        // Tawk script is already handled separately
    }

    // Load on first interaction
    ['mousedown', 'touchstart', 'scroll', 'keydown'].forEach(event => {
        document.addEventListener(event, loadTawk, { once: true, passive: true });
    });

    // Or after 5 seconds
    setTimeout(loadTawk, 5000);
}

// Initialize all SEO enhancements
document.addEventListener('DOMContentLoaded', () => {
    initCookieConsent();

    // Check if we're on an article page
    const isArticlePage = document.querySelector('.article-section, .article-content, article');

    if (isArticlePage) {
        initReadingProgress();
        generateTableOfContents();
        initSmoothScrollTOC();
        initShareButtons();
    }

    // These run on all pages
    initLazyLoading();
    generateBreadcrumbSchema();
    trackInternalLinks();
    deferNonCriticalScripts();
});

// Add structured data for FAQ sections automatically
function autoGenerateFAQSchema() {
    const faqSection = document.querySelector('#faqs, .faq-section');
    if (!faqSection) return;

    // Prevent duplicate schema if one already exists
    const hasFAQSchema = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .some(s => (s.textContent || '').includes('"FAQPage"'));
    if (hasFAQSchema) return;

    const questions = faqSection.querySelectorAll('h4, .faq-question');
    const faqs = [];

    questions.forEach(question => {
        const nextElement = question.nextElementSibling;
        if (nextElement && (nextElement.tagName === 'P' || nextElement.classList.contains('faq-answer'))) {
            faqs.push({
                "@type": "Question",
                "name": question.textContent.trim(),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": nextElement.textContent.trim()
                }
            });
        }
    });

    if (faqs.length > 0) {
        const schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
    }
}

// Run FAQ schema generation
document.addEventListener('DOMContentLoaded', autoGenerateFAQSchema);

/* ==========================================================================
   Debt Collection Interactive UI Elements Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
    // 1. Legal Tabs Logic
    const tabButtons = document.querySelectorAll('.legal-tab-btn');
    const tabContents = document.querySelectorAll('.legal-tab-content');

    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                // Add active class to clicked
                button.classList.add('active');
                const targetId = button.getAttribute('data-tab');
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }

    // 2. Vertical Timeline Logic
    const timelineHeaders = document.querySelectorAll('.timeline-header');
    
    if (timelineHeaders.length > 0) {
        timelineHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const parentItem = header.closest('.timeline-item');
                // Toggle active class
                if (parentItem.classList.contains('active')) {
                    parentItem.classList.remove('active');
                } else {
                    // Optional: Close others
                    document.querySelectorAll('.timeline-item').forEach(item => {
                        item.classList.remove('active');
                    });
                    parentItem.classList.add('active');
                }
            });
        });
        // Optional: Open the first one by default
        const firstTimelineItem = document.querySelector('.timeline-item');
        if (firstTimelineItem) firstTimelineItem.classList.add('active');
    }

    // 3. Modal Logic
    const modalTriggers = document.querySelectorAll('[data-modal-target]');
    const modalCloses = document.querySelectorAll('.legal-modal-close');
    const overlays = document.querySelectorAll('.legal-modal-overlay');

    if (modalTriggers.length > 0) {
        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = trigger.getAttribute('data-modal-target');
                const modal = document.getElementById(targetId);
                if (modal) {
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Prevent background scrolling
                }
            });
        });

        modalCloses.forEach(closeBtn => {
            closeBtn.addEventListener('click', () => {
                const modal = closeBtn.closest('.legal-modal-overlay');
                if (modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });

        overlays.forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    }

    // 4. Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const parentItem = header.closest('.accordion-item');
                if (parentItem.classList.contains('active')) {
                    parentItem.classList.remove('active');
                } else {
                    // Close others
                    document.querySelectorAll('.accordion-item').forEach(item => {
                        item.classList.remove('active');
                    });
                    parentItem.classList.add('active');
                }
            });
        });
    }
});

// Mobile menu logic for new service pages
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !mainNav.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });
    }
});

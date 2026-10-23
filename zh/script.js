// Mobile Navigation Toggle
const COOKIE_CONSENT_KEY = 'ttl_cookie_consent_v1';
const ANALYTICS_MEASUREMENT_ID = window.TTL_ANALYTICS_ID || 'G-9FX7T07VPM';
const GOOGLE_ADS_TAG_ID = 'AW-18437766591';
const CLARITY_PROJECT_ID = window.TTL_CLARITY_ID || 'vv2a5uwdk0';
let analyticsInitialized = false;
let clarityInitialized = false;
let engagementTrackingInitialized = false;

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
            window.gtag('config', GOOGLE_ADS_TAG_ID);
        }
        analyticsInitialized = true;
        initEngagementTracking();
    }
}

function initEngagementTracking() {
    if (engagementTrackingInitialized || !analyticsInitialized) return;
    engagementTrackingInitialized = true;

    const checkpointInterval = 15000;
    let timer = null;
    let activeSince = null;
    let pendingActiveTime = 0;
    const isForeground = () => document.visibilityState === 'visible' && document.hasFocus();

    const checkpoint = reason => {
        if (activeSince !== null) {
            const now = performance.now();
            pendingActiveTime += Math.max(0, now - activeSince);
            activeSince = now;
        }
        if (pendingActiveTime < 1000) return;

        // The Google tag attaches its own incremental engagement_time_msec.
        // Do not manufacture durations, page views, key events or user_engagement.
        window.gtag('event', 'engagement_checkpoint', {
            send_to: ANALYTICS_MEASUREMENT_ID,
            checkpoint_reason: reason
        });
        pendingActiveTime = 0;
    };

    const pause = reason => {
        checkpoint(reason);
        activeSince = null;
        if (timer !== null) window.clearTimeout(timer);
        timer = null;
    };

    const schedule = () => {
        timer = window.setTimeout(() => {
            timer = null;
            if (!isForeground()) {
                pause('background');
                return;
            }
            checkpoint('interval');
            schedule();
        }, checkpointInterval);
    };

    const resume = () => {
        if (activeSince !== null || !isForeground()) return;
        activeSince = performance.now();
        schedule();
    };

    document.addEventListener('visibilitychange', () => {
        if (isForeground()) resume();
        else pause('hidden');
    });
    window.addEventListener('blur', () => pause('focus_lost'));
    window.addEventListener('focus', resume);
    window.addEventListener('pagehide', () => pause('page_exit'));
    window.addEventListener('pageshow', resume);
    resume();
}

// Start the existing tag as soon as this deferred shared script executes.
// Waiting for all images, chat widgets and browser idle time loses short visits.
enableAnalytics();

function enableClarity() {
    if (clarityInitialized || !CLARITY_PROJECT_ID) return;
    loadScriptOnce(`https://www.clarity.ms/tag/${encodeURIComponent(CLARITY_PROJECT_ID)}`, 'data-ttl-clarity');
    clarityInitialized = true;
}

function initCookieConsent() {
    const activateTracking = () => {
        enableAnalytics();
        enableClarity();
    };

    // Keep the homepage's first paint clear of tag initialization. The head
    // stub queues gtag calls until the existing tags are loaded.
    if (!document.querySelector('section#home.hero')) {
        activateTracking();
        return;
    }

    let trackingStarted = false;
    const startTracking = () => {
        if (trackingStarted) return;
        trackingStarted = true;
        activateTracking();
    };
    const startWhenIdle = () => {
        if (trackingStarted) return;
        if (typeof window.requestIdleCallback === 'function') {
            window.requestIdleCallback(startTracking, { timeout: 3000 });
        } else {
            window.setTimeout(startTracking, 300);
        }
    };

    if (document.readyState === 'complete') {
        startWhenIdle();
    } else {
        window.addEventListener('load', startWhenIdle, { once: true });
    }
    ['pointerdown', 'touchstart', 'wheel', 'keydown'].forEach(event => {
        window.addEventListener(event, startTracking, { once: true, passive: true });
    });
}

window.TTL_resetCookieConsent = function () {
    // No-op: banner is disabled.
};

function initFloatingWhatsAppButton() {
    if (!document.body || document.querySelector('.floating-whatsapp-button')) return;

    const whatsappButton = document.createElement('a');
    whatsappButton.href = 'https://wa.me/message/4EFUGRGODJRZM1';
    whatsappButton.target = '_blank';
    whatsappButton.rel = 'noopener noreferrer';
    whatsappButton.className = 'floating-whatsapp-button';
    whatsappButton.title = "WhatsApp Business";
    whatsappButton.setAttribute('aria-label', 'Contact us on WhatsApp Business');
    whatsappButton.innerHTML = '<i class="fab fa-whatsapp" aria-hidden="true"></i>';

    document.body.appendChild(whatsappButton);
}

function initMobileNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (!navToggle || !navMenu) return;

    const setMobileNavOpen = isOpen => {
        navMenu.classList.toggle('active', isOpen);
        navToggle.classList.toggle('active', isOpen);
        navToggle.setAttribute('aria-controls', navMenu.id);
        navToggle.setAttribute('aria-expanded', String(isOpen));
    };

    setMobileNavOpen(navMenu.classList.contains('active'));

    navToggle.addEventListener('click', () => {
        setMobileNavOpen(!navMenu.classList.contains('active'));
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            setMobileNavOpen(false);
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNavigation, { once: true });
} else {
    initMobileNavigation();
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            if (window.location.hash !== href) {
                window.history.pushState(null, '', href);
            }
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
    const homeScrollSections = document.querySelectorAll(
        '.practice-areas, .contact-inline, .about-v2, .internal-links, .why-us, .team, .testimonials-v2'
    );

    if (document.querySelector('.hero')) {
        homeScrollSections.forEach((section, index) => {
            section.classList.add('index-scroll-reveal');
            section.style.transitionDelay = `${Math.min(index * 0.06, 0.3)}s`;
            observer.observe(section);
        });
    }

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
        "市场准入", "财务权益", "合规标准",
        "战略行动", "合同", "交易",
        "跨境交易", "供应链", "贸易流通",
        "业务运营", "投资", "知识资产", "法律权利"
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

});

// Footer Injection
document.addEventListener('DOMContentLoaded', () => {
    const scriptEl = document.querySelector('script[src$="script.js"]');
    const basePath = '/';
    const footerContent = `
        <div class="container footer-container">
            <div class="footer-top">
                <div class="footer-brand">
                    <a href="${basePath}index.html#home" class="footer-logo">
                        <img src="${basePath}logo.webp" srcset="${basePath}logo-128.webp 128w, ${basePath}logo.webp 487w" sizes="56px" width="487" height="513" loading="lazy" decoding="async" alt="Turkish Trade Lawyers 标志" class="footer-logo-icon">
                        <span class="footer-logo-text">
                            <span class="footer-logo-main">Turkish Trade Lawyers</span>
                            <span class="footer-logo-tagline">卓越土耳其法律服务</span>
                        </span>
                    </a>
                    <p class="footer-description">为土耳其的国际贸易、公司架构、合规及争议解决提供以商业需求为导向的法律咨询.</p>
                    <div class="footer-badges">
                        <span class="footer-badge"><i class="fas fa-scale-balanced"></i> 土耳其商法</span>
                        <span class="footer-badge"><i class="fas fa-globe"></i> 跨境咨询</span>
                        <span class="footer-badge"><i class="fas fa-shield-halved"></i> 合规与风险</span>
                    </div>
                </div>

                <div class="footer-contact-card">
                    <span class="footer-eyebrow">联系我们</span>
                    <a href="tel:+908503046995" class="footer-contact-link">+90 850 304 6995</a>
                    <a href="mailto:hi@turkishtradelawyers.com" class="footer-contact-link">hi@turkishtradelawyers.com</a>
                    <p class="footer-contact-copy">Maslak Mah. Buyukdere Cad. No:255, Sariyer, Istanbul</p>
                    <div class="footer-social-links">
                        <a href="https://wa.me/message/4EFUGRGODJRZM1" target="_blank"
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

            <div class="footer-grid" role="navigation" aria-label="页脚">
                <div class="footer-col">
                    <h4>服务</h4>
                    <a href="${basePath}setup-a-business-in-turkey.html">在土耳其设立企业</a>
                    <a href="${basePath}international-trade-customs-services-turkey.html">土耳其国际贸易与海关服务</a>
                    <a href="${basePath}commercial-contract-services-turkey.html">土耳其商业合同服务</a>
                    <a href="${basePath}compliance-data-protection-services-turkey.html">土耳其合规与数据保护服务</a>
                    <a href="${basePath}dispute-resolution-in-turkey.html">土耳其争议解决</a>
                    <a href="${basePath}employment-mobility-services-turkey.html">土耳其劳动用工与人员流动服务</a>
                </div>

                <div class="footer-col">
                    <h4>资源</h4>
                    <a href="${basePath}guides.html">指南中心</a>
                    <a href="${basePath}glossary.html">法律术语表</a>
                    <a href="${basePath}monitor.html">土耳其贸易动态</a>
                    <a href="${basePath}regions.html">国家</a>
                    <a href="${basePath}industries.html">行业</a>
                </div>

                <div class="footer-col">
                    <h4>公司</h4>
                    <a href="${basePath}index.html#about">关于 Turkish Trade Lawyers</a>
                    <a href="${basePath}index.html#why-us">选择我们的理由</a>
                    <a href="${basePath}contact.html">联系我们</a>
                </div>

                <div class="footer-col">
                    <h4>法律信息</h4>
                    <a href="${basePath}privacy-notice.html">隐私声明</a>
                    <a href="${basePath}cookie-policy.html">Cookie 政策</a>
                    <a href="${basePath}disclaimer.html">免责声明</a>
                </div>
            </div>

            <p class="footer-legal">© 2026 Turkish Trade Lawyers. 版权所有.</p>
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
    const path = ((window.location && window.location.pathname) ? window.location.pathname : '').replace(/^\/zh(?=\/|$)/, '') || '/';
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

    const crumbs = [{ name: "首页", href: '/' }];

    const isCountries = path.includes('/countries/');
    const isIndustries = path.includes('/industries/');
    const isGlossary = path.includes('/glossary/');
    const isMonitor = fileName === 'monitor.html' || fileName.startsWith('monitor-');
    const isServicePage = Boolean(document.querySelector('.service-landing-hero'));

    if (isCountries) {
        crumbs.push({ name: "地区", href: '/regions.html' });
        crumbs.push({ name: currentLabel });
    } else if (isIndustries) {
        crumbs.push({ name: "行业", href: '/industries.html' });
        crumbs.push({ name: currentLabel });
    } else if (isGlossary) {
        crumbs.push({ name: "术语表", href: '/glossary.html' });
        crumbs.push({ name: currentLabel });
    } else if (fileName === 'guides.html') {
        crumbs.push({ name: "指南" });
    } else if (fileName === 'services.html') {
        crumbs.push({ name: "服务" });
    } else if (isServicePage) {
        crumbs.push({ name: "服务", href: '/services.html' });
        crumbs.push({ name: currentLabel });
    } else if (fileName === 'contact.html') {
        crumbs.push({ name: "联系我们" });
    } else if (fileName === 'ourexperts.html') {
        crumbs.push({ name: "我们的专家" });
    } else if (fileName === 'industries.html') {
        crumbs.push({ name: "行业" });
    } else if (fileName === 'regions.html') {
        crumbs.push({ name: "地区" });
    } else if (fileName === 'glossary.html') {
        crumbs.push({ name: "术语表" });
    } else if (isMonitor) {
        crumbs.push({ name: "动态监测", href: '/monitor.html' });
        if (fileName !== 'monitor.html') crumbs.push({ name: currentLabel });
    } else {
        crumbs.push({ name: "指南", href: '/guides.html' });
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

    const articleWideFollowups = document.querySelector('.advertising-article-followups');

    const path = ((window.location && window.location.pathname) ? window.location.pathname : '').replace(/^\/zh(?=\/|$)/, '') || '/';
    const slug = (path.split('/').filter(Boolean).pop() || '').replace(/\.html$/i, '');
    if (!slug || slug === 'index' || slug === 'guides' || slug === 'services' || slug === 'monitor') return;

    if (articleEl.hasAttribute('data-disable-auto-article-sections')) return;

    injectEEATSignals(articleEl, slug);

    // Full-width post-article sections may live outside <article>. Check the
    // whole page so the automatic injector does not create a duplicate above
    // the assistance CTA.
    if (document.querySelector('.related-articles')) return;

    // Project rule: every article must show six related article cards.
    const related = pickRelatedArticles(slug, 6);
    if (related.length === 0) return;

    const scriptEl = document.querySelector('script[src$="script.js"]');
    const basePath = '/';

    const section = document.createElement('section');
    section.className = 'related-articles';
    section.innerHTML = `
        <h3>相关文章</h3>
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

    if (articleWideFollowups) {
        const videoSlot = articleWideFollowups.querySelector('.advertising-article-video-slot');
        const sourcesBox = articleWideFollowups.querySelector('.sources-box');
        if (videoSlot) articleWideFollowups.insertBefore(section, videoSlot);
        else if (sourcesBox) articleWideFollowups.insertBefore(section, sourcesBox);
        else articleWideFollowups.appendChild(section);
    }
    else articleEl.appendChild(section);
});

function injectEEATSignals(articleEl, slug) {
    const articleText = (articleEl.textContent || '').toLowerCase();

    // 1) Legal disclaimer (skip if already present)
    const hasDisclaimer = articleText.includes('does not constitute legal advice')
        || articleText.includes('informational purposes only')
        || !!document.querySelector('.legal-disclaimer');

    // 2) Sources / citations
    const hasSources = !!document.querySelector('.sources-box');

    // 3) Author / contributors
    const hasAuthorBox = !!articleEl.querySelector('.author-box') || !!articleEl.querySelector('.expert-contributors');

    const insertBeforeEl = articleEl.querySelector('.related-articles') || null;
    const articleWideFollowups = document.querySelector('.advertising-article-followups');

    const scriptEl = document.querySelector('script[src$="script.js"]');
    const basePath = '/';

    if (!hasDisclaimer) {
        const disclaimer = document.createElement('div');
        disclaimer.className = 'legal-disclaimer';
        disclaimer.innerHTML = `
            <strong>免责声明:</strong> 本内容仅供参考, 不构成法律意见. 如需针对您具体情况的法律意见, 请 <a href="${basePath}contact.html">联系我们</a> 或查阅我们的
            <a href="${basePath}disclaimer.html">完整免责声明</a>.
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
                <h3>来源与权威依据</h3>
                <p class="sources-note">与本主题相关的法律框架及官方指引.</p>
                <ul class="sources-list">
                    ${sources.map(s => `
                        <li>
                            <a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label}</a>
                        </li>
                    `).join('')}
                </ul>
            `;

            if (articleWideFollowups) articleWideFollowups.appendChild(sourcesSection);
            else if (insertBeforeEl) articleEl.insertBefore(sourcesSection, insertBeforeEl);
            else articleEl.appendChild(sourcesSection);
        }
    }

    if (!hasAuthorBox) {
        const contributors = document.createElement('section');
        contributors.className = 'expert-contributors';
        contributors.innerHTML = `
            <h3>专家撰稿人</h3>
            <div class="expert-grid">
                <div class="expert-card" itemscope itemtype="https://schema.org/Person">
                    <img src="${basePath}busraocak.png" alt="Büşra Ocak" class="expert-photo" itemprop="image">
                    <div class="expert-info">
                        <h4 itemprop="name">Büşra Ocak</h4>
                        <p class="expert-title" itemprop="jobTitle">联合创始人兼管理合伙人</p>
                        <p class="expert-desc" itemprop="description">重点领域包括合同法、KVKK/GDPR 合规、劳动争议及商事诉讼.</p>
                        <p class="expert-cred">安卡拉大学法学院法学学士 (LL.B.) · 土耳其律师协会联合会 · 伊斯坦布尔律师协会</p>
                        <a class="expert-link" href="${basePath}ourexperts.html">完整简介</a>
                    </div>
                </div>
                <div class="expert-card" itemscope itemtype="https://schema.org/Person">
                    <img src="${basePath}basakcavusogullari.png" alt="Başak Çavuşoğulları" class="expert-photo" itemprop="image">
                    <div class="expert-info">
                        <h4 itemprop="name">Başak Çavuşoğulları</h4>
                        <p class="expert-title" itemprop="jobTitle">联合创始人兼高级合伙人</p>
                        <p class="expert-desc" itemprop="description">就商法、监管合规及跨境交易提供建议; 负责公司事务及移民相关服务.</p>
                        <p class="expert-cred">伊斯坦布尔大学法学院法学学士 (LL.B.) · 土耳其律师协会联合会 · 布尔萨律师协会</p>
                        <a class="expert-link" href="${basePath}ourexperts.html">完整简介</a>
                    </div>
                </div>
            </div>
        `;

        if (insertBeforeEl) articleEl.insertBefore(contributors, insertBeforeEl);
        else articleEl.appendChild(contributors);
    }
}

const RELATED_ARTICLES_INDEX = {
    'real-estate-commercial-lease-services-turkey': { title: "土耳其商业租赁支持", category: "房地产与租赁", description: "商业场所租赁审查、通知、租金及争议处理方案." },

    'establishing-limited-liability-company-turkey': {
        title: "在土耳其设立有限责任公司 (LLC)",
        category: "公司设立",
        description: "分步介绍公司注册、治理及设立实务注意事项."
    },
    'llc-or-joint-stock-company-turkey': {
        title: "土耳其有限责任公司与股份有限公司比较",
        category: "公司架构",
        description: "比较资本、治理、投资者准备事项及运营灵活性."
    },
    'liaison-office-vs-branch-office-turkey': {
        title: "土耳其联络处与分支机构比较",
        category: "市场准入",
        description: "允许开展的活动、设立步骤及合规义务实务比较."
    },
    'how-to-enter-turkish-market': {
        title: "如何进入土耳其市场",
        category: "市场准入",
        description: "市场准入、架构安排及经营风险管理的战略法律路径."
    },
    'mergers-acquisitions-legal-due-diligence-turkey': {
        title: "土耳其并购法律尽职调查",
        category: 'M&A',
        description: "关键法律工作事项、风险信号及跨境交易尽职调查安排."
    },
    'corporate-tax-vat-withholding-turkey': {
        title: "土耳其企业所得税、增值税及预提税",
        category: "税务",
        description: "概述影响土耳其贸易及投资的常见税务事项."
    },
    'investment-incentives-turkiye-2026-guide': {
        title: "土耳其投资激励 (2026 年指南)",
        category: "投资",
        description: "激励措施、资格条件及实务合规注意事项概述."
    },
    'kvkk-compliance-checklist': {
        title: "酒店 KVKK 合规清单",
        category: "数据隐私 (KVKK)",
        description: "酒店应对身份证件复印限制及宾客数据处理的措施."
    },
    'data-controller-representative-kvkk-turkey': {
        title: "土耳其数据控制者代表 (KVKK)",
        category: "数据隐私 (KVKK)",
        description: "何时需要委任、如何委任及实务中预期承担的义务."
    },
    'no-more-id-photocopies-at-hotels-turkey-aligns-with-eu': {
        title: "酒店不得再复印身份证件: 土耳其与欧盟标准接轨",
        category: "数据隐私 (KVKK)",
        description: "KVKK 决定带来的变化及酒店业企业应采取的合规措施."
    },
    'local-trade-regulations-vs-international-agreements-turkish-law': {
        title: "土耳其法律下本地贸易法规与国际贸易协定的比较",
        category: "国际贸易",
        description: "实务中如何解决冲突, 包括第 90 条的适用及救济措施."
    },
    'how-to-avoid-legal-penalties-in-import-export-operations': {
        title: "如何避免进出口业务中的法律处罚",
        category: "海关与合规",
        description: "税则归类、估价、原产地规则及文件方面的风险降低措施."
    },
    'presidential-decision-amending-implementation-turkish-customs-law': {
        title: "修订土耳其海关法实施规定的总统决定",
        category: "海关与合规",
        description: "对合规团队及跨境业务的实务影响."
    },
    'key-legal-risks-in-cross-border-trade-and-how-to-mitigate-them': {
        title: "跨境贸易的主要法律风险及其应对方法",
        category: "国际贸易",
        description: "付款、交付、合规及争议解决风险与应对策略."
    },
    'enforcing-foreign-arbitral-awards-turkey': {
        title: "在土耳其执行外国仲裁裁决",
        category: "争议解决",
        description: "土耳其法院的承认、执行途径及常见障碍."
    },
    'strategic-asset-protection-in-turkiye-securing-your-claims-before-international-arbitration': {
        title: "国际仲裁前的土耳其战略资产保护",
        category: "争议解决",
        description: "如何及早保障债权并在跨境争议中维护执行上的有利地位."
    },
    'employment-law-hiring-terminating-turkey': {
        title: "土耳其劳动法: 招聘与劳动关系终止",
        category: "劳动用工",
        description: "核心规则、文件及劳动关系终止风险管理的实务注意事项."
    },
    'most-important-contracts-for-the-business-have': {
        title: "企业最需要具备哪些合同?",
        category: "合同法",
        description: "从实务角度介绍企业日常风险管理所依赖的核心合同."
    },
    'drafting-valid-power-of-attorney-turkey': {
        title: "在土耳其起草有效的授权委托书",
        category: "合同法",
        description: "主要起草要求、授权范围注意事项及常见效力问题."
    },
    'trademark-registration-turkey': {
        title: "土耳其商标注册",
        category: 'IP',
        description: "申请策略、异议期限及品牌保护实务措施."
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
        { match: /(lease|rent-adjustment)/, slugs: ['real-estate-commercial-lease-services-turkey', 'commercial-contract-services-turkey', 'dispute-resolution-in-turkey'] },
        { match: /(employment|hiring|termination-employment|hr)/, slugs: ['employment-law-hiring-terminating-turkey', 'most-important-contracts-for-the-business-have', 'kvkk-compliance-checklist'] },
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
        // Keep filling from the complete index so the six-card rule is met
        // even when a topic cluster contains fewer than six candidates.
        const fallback = Object.keys(RELATED_ARTICLES_INDEX);
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

const PAGE_AUTHORITIES = {
    "employment-law-hiring-terminating-turkey": [
        {
            "label": "第 4857 号劳动法",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.4857.pdf"
        }
    ],
    "most-important-contracts-for-the-business-have": [
        {
            "label": "第 6098 号土耳其债务法典",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6098.pdf"
        }
    ],
    "contract-law-turkey": [
        {
            "label": "第 6098 号土耳其债务法典",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6098.pdf"
        }
    ],
    "kvkk-compliance-checklist": [
        {
            "label": "KVKK: 第 6698 号法律",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6698.pdf"
        }
    ]
};

function getAuthoritativeSources(slug) {
    return PAGE_AUTHORITIES[slug] || [];
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

    // Do not append a second breadcrumb schema when a page already provides
    // its canonical BreadcrumbList markup.
    const hasBreadcrumbSchema = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .some(s => (s.textContent || '').includes('"BreadcrumbList"') || (s.textContent || '').includes('"@type":"BreadcrumbList"'));
    if (hasBreadcrumbSchema) return;

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
    const internalLinks = Array.from(document.querySelectorAll('a[href]')).filter(link => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return false;
        try {
            return new URL(href, window.location.href).origin === window.location.origin;
        } catch {
            return false;
        }
    });

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

function trackConversionEvent(eventName, parameters = {}) {
    if (typeof gtag !== 'function') return;
    gtag('event', eventName, {
        page_path: window.location.pathname,
        page_title: document.title,
        ...parameters
    });
}

function initSecurityQuestionValidation() {
    document.querySelectorAll('form').forEach(form => {
        const securityInput = form.querySelector('[name="security-answer"]');
        if (!securityInput) return;

        form.addEventListener('submit', event => {
            if (securityInput.value.trim() === '7') return;
            event.preventDefault();
            securityInput.setCustomValidity("请输入 3 + 4 的正确答案.");
            securityInput.reportValidity();
            securityInput.focus();
            trackConversionEvent('form_validation_error', {
                form_id: form.dataset.formId || form.id || 'contact-form',
                field_name: 'security-answer'
            });
        });

        securityInput.addEventListener('input', () => securityInput.setCustomValidity(''));
    });
}

function initBusinessFormContext() {
    const form = document.querySelector('[data-form-id="business-setup-main"]');
    if (!form) return;

    const sourceInput = form.querySelector('[name="source_page"]');
    const entitySelect = form.querySelector('[name="entity_type"]');
    const params = new URLSearchParams(window.location.search);
    const sourceParam = params.get('source');
    let source = sourceParam || '';

    if (!source && document.referrer) {
        try {
            const referrer = new URL(document.referrer);
            if (referrer.origin === window.location.origin) source = referrer.pathname.split('/').pop() || 'internal-page';
        } catch {
            source = '';
        }
    }

    const contextMap = {
        'limited-company': "有限责任公司 (Limited Şirket)",
        'establishing-limited-liability-company-turkey.html': "有限责任公司 (Limited Şirket)",
        'llc-vs-jsc': "尚不确定",
        'llc-or-joint-stock-company-turkey.html': "尚不确定",
        'liaison-branch': "联络处",
        'liaison-office-vs-branch-office-turkey.html': "联络处",
        'liaison-office': "联络处",
        'branch-office': "分支机构",
        'joint-stock-company': "股份有限公司 (Anonim Şirket)",
        'company-formation': "尚不确定",
        'market-entry': "尚不确定",
        'uk-company-formation': "尚不确定"
    };

    if (sourceInput && source) sourceInput.value = `Setup a Business in Turkey | Source: ${source}`;
    if (entitySelect && contextMap[source]) entitySelect.value = contextMap[source];
}

function initHashLandingCorrection() {
    if (!window.location.hash) return;

    const correctPosition = () => {
        const targetId = decodeURIComponent(window.location.hash.slice(1));
        const target = document.getElementById(targetId);
        if (!target) return;
        target.scrollIntoView({ block: 'start' });
    };

    window.addEventListener('load', () => {
        window.requestAnimationFrame(correctPosition);
        window.setTimeout(correctPosition, 350);
    }, { once: true });
}

function initConversionForms() {
    document.querySelectorAll('[data-conversion-event]').forEach(element => {
        element.addEventListener('click', () => {
            trackConversionEvent(element.dataset.conversionEvent || 'conversion_cta_click', {
                conversion_label: element.dataset.conversionLabel || element.textContent.trim().substring(0, 80),
                link_url: element.href || ''
            });
        });
    });

    const viewTargets = document.querySelectorAll('.conversion-article-cta, .service-page-cta');
    if (viewTargets.length && 'IntersectionObserver' in window) {
        const viewed = new WeakSet();
        const viewObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting || viewed.has(entry.target)) return;
                viewed.add(entry.target);
                trackConversionEvent('conversion_cta_view', {
                    conversion_id: entry.target.id || entry.target.className
                });
            });
        }, { threshold: 0.35 });
        viewTargets.forEach(target => viewObserver.observe(target));
    }

    document.querySelectorAll('form[data-conversion-form]').forEach(form => {
        const formId = form.dataset.formId || form.id || 'conversion-form';
        const status = form.querySelector('.form-status');
        let started = false;

        const trackStart = () => {
            if (started) return;
            started = true;
            trackConversionEvent('form_start', { form_id: formId });
        };
        form.addEventListener('input', trackStart);
        form.addEventListener('change', trackStart);

        form.addEventListener('submit', async event => {
            if (event.defaultPrevented || !form.action.includes('formspree.io')) return;
            event.preventDefault();

            let sourceInput = form.querySelector('[name="source_page"]');
            if (!sourceInput) {
                sourceInput = document.createElement('input');
                sourceInput.type = 'hidden';
                sourceInput.name = 'source_page';
                form.appendChild(sourceInput);
            }
            if (!sourceInput.value) sourceInput.value = window.location.pathname;

            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) submitButton.disabled = true;
            if (status) {
                status.className = 'form-status is-visible';
                status.textContent = "正在发送您的请求...";
            }
            trackConversionEvent('form_submit_attempt', { form_id: formId });

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: { Accept: 'application/json' }
                });
                if (!response.ok) throw new Error("提交失败");

                form.reset();
                if (status) {
                    status.className = 'form-status is-visible is-success';
                    status.textContent = "您的表单已提交. 我们将尽快与您联系.";
                }
                if (submitButton && formId === 'advertising-regulation-sidebar') {
                    submitButton.innerHTML = "表单已提交 <i class=\"fas fa-check\" aria-hidden=\"true\"></i>";
                }
                trackConversionEvent('generate_lead', { form_id: formId });
            } catch {
                if (status) {
                    status.className = 'form-status is-visible is-error';
                    status.textContent = "表单发送失败. 请发送电子邮件至 hi@turkishtradelawyers.com.";
                }
                trackConversionEvent('form_submit_error', { form_id: formId });
            } finally {
                if (submitButton) submitButton.disabled = false;
            }
        });
    });
}

function initConversionChatBehavior() {
    const mobileBar = document.querySelector('.mobile-conversion-bar');
    const conversionZones = document.querySelectorAll('.conversion-article-cta, .service-page-cta');
    if (!mobileBar && !conversionZones.length) return;

    window.Tawk_API = window.Tawk_API || {};
    const previousOnLoad = window.Tawk_API.onLoad;

    const configureWidget = () => {
        if (window.matchMedia('(max-width: 768px)').matches && mobileBar) {
            window.Tawk_API.hideWidget?.();
            return;
        }

        if (!conversionZones.length || !('IntersectionObserver' in window)) return;
        const activeZones = new Set();
        const chatObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) activeZones.add(entry.target);
                else activeZones.delete(entry.target);
            });
            if (activeZones.size) window.Tawk_API.hideWidget?.();
            else window.Tawk_API.showWidget?.();
        }, { threshold: 0.15 });
        conversionZones.forEach(zone => chatObserver.observe(zone));
    };

    window.Tawk_API.onLoad = function () {
        if (typeof previousOnLoad === 'function') previousOnLoad();
        configureWidget();
    };
    if (typeof window.Tawk_API.hideWidget === 'function') configureWidget();
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
    initFloatingWhatsAppButton();

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
    initSecurityQuestionValidation();
    initBusinessFormContext();
    initHashLandingCorrection();
    initConversionForms();
    initConversionChatBehavior();
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

// TTL language-selector loader
(() => {
    if (document.querySelector('script[data-ttl-language-selector]')) return;
    const selectorScript = document.createElement('script');
    selectorScript.src = '/language-selector.js?v=20261023';
    selectorScript.setAttribute('data-ttl-language-selector', 'true');
    document.head.appendChild(selectorScript);
})();

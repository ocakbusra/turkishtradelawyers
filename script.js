// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

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
    const footerContent = `
        <div class="container">
            <div class="footer-social-links"
                style="display: flex; justify-content: center; align-items: center; gap: 24px; margin-bottom: 24px;">
                <a href="https://www.linkedin.com/company/turkish-trade-lawyers" target="_blank"
                    rel="noopener noreferrer" aria-label="LinkedIn"
                    style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; background: rgba(255,255,255,0.1); border-radius: 50%; color: #ffffff; font-size: 1.25rem; text-decoration: none; transition: all 0.3s ease;">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.youtube.com/@TurkishTradeLawyers" target="_blank" rel="noopener noreferrer"
                    aria-label="YouTube"
                    style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; background: rgba(255,255,255,0.1); border-radius: 50%; color: #ffffff; font-size: 1.25rem; text-decoration: none; transition: all 0.3s ease;">
                    <i class="fab fa-youtube"></i>
                </a>
                <a href="https://www.facebook.com/turkishtradelawyers/" target="_blank" rel="noopener noreferrer"
                    aria-label="Facebook"
                    style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; background: rgba(255,255,255,0.1); border-radius: 50%; color: #ffffff; font-size: 1.25rem; text-decoration: none; transition: all 0.3s ease;">
                    <i class="fab fa-facebook-f"></i>
                </a>
            </div>
            <p>&copy; 2026 Turkish Trade Lawyers. All rights reserved. | <a href="cookie-policy.html"
                    style="color: rgba(255,255,255,0.7); text-decoration: none;">Cookie Policy</a> | <a
                    href="disclaimer.html" style="color: rgba(255,255,255,0.7); text-decoration: none;">Disclaimer</a> |
                <a href="privacy-notice.html" style="color: rgba(255,255,255,0.7); text-decoration: none;">Privacy</a>
            </p>
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


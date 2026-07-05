import re

file_path = "/Users/busraocak/Desktop/turkish trade/setup-a-business-in-turkey.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace Header Section
old_header = """    <!-- Header Navigation -->
    <header class="main-header">
        <div class="header-container">
            <div class="logo">
                <a href="index.html">
                    <span class="logo-text">Turkish Trade<br>Lawyers</span>
                </a>
            </div>
            
            <!-- Mobile Menu Toggle -->
            <button class="mobile-menu-toggle" aria-label="Toggle Menu">
                <span class="hamburger"></span>
            </button>

            <nav class="main-nav">
                <ul class="nav-list">
                    <li><a href="index.html">Home</a></li>
                    <li class="has-dropdown active">
                        <a href="services.html">Services <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="international-trade-customs-services-turkey.html">International Trade</a></li>
                            <li><a href="setup-a-business-in-turkey.html" class="active">Setup a Business</a></li>
                            <li><a href="dispute-resolution-in-turkey.html">Dispute Resolution</a></li>
                            <li><a href="debt-collection-in-turkey.html">Debt Collection</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html" class="nav-cta">Consult an Expert</a></li>
                </ul>
            </nav>
        </div>
    </header>"""

new_header = """    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="index.html#home" class="nav-logo">
                <img src="logo.webp" alt="Turkish Trade Lawyers Logo" class="logo-icon">
                <span class="logo-text">
                    <span class="logo-main">Turkish Trade Lawyers</span>
                    <span class="logo-tagline">Legal Excellence in TÜRKİYE</span>
                </span>
            </a>
            <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-menu" id="navMenu">
                <li><a href="index.html#home" class="nav-link">Home</a></li>
                <li><a href="ourexperts.html" class="nav-link">About</a></li>
                <li><a href="index.html#why-us" class="nav-link">Why Us</a></li>
                <li><a href="services.html" class="nav-link">Services</a></li>
                <li><a href="ourexperts.html" class="nav-link">Our Experts</a></li>
                <li><a href="guides.html" class="nav-link">Guides</a></li>
                <li><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </nav>"""

content = content.replace(old_header, new_header)

# Replace Hero Section
old_hero_pattern = r'<!-- Hero Section -->.*?<!-- Main Content wrapper -->'
new_hero = """    <main>
        <section class="service-landing-hero">
            <div class="container service-landing-shell">
                <span class="service-landing-kicker"><i class="fas fa-building"></i> Practice Area</span>
                <h1 class="service-landing-title">Setup a Business in Turkey</h1>
                <span class="service-landing-h1-sub">Company Formation, Branch, Liaison Office & Specialized Licensing</span>
                <p class="service-landing-subtitle">Navigate the complexities of the Turkish Commercial Code (TCC) and Foreign Direct Investment Law. We guide international investors through company formation (JSC & LLC), branch establishment, Free Zone operations, and sector-specific licensing (Mining, EV, Defense) to ensure seamless market entry and compliance.</p>
                <div class="service-landing-actions">
                    <a href="contact.html" class="btn btn-primary-new">Start Your Incorporation <i class="fas fa-arrow-right"></i></a>
                    <a href="services.html#setup-a-business" class="btn btn-outline-new">Back to Practice Areas</a>
                </div>
                <div class="service-landing-pills">
                    <span class="service-landing-pill"><i class="fas fa-building"></i> 1-2 Weeks to Incorporate</span>
                    <span class="service-landing-pill"><i class="fas fa-globe"></i> 100% Foreign Ownership</span>
                    <span class="service-landing-pill"><i class="fas fa-shield-halved"></i> 360&deg; Compliance</span>
                </div>
            </div>
        </section>

        <section class="service-landing-content">
            <div class="container service-landing-layout">
                <div class="service-main-content">"""

content = re.sub(old_hero_pattern, new_hero, content, flags=re.DOTALL)

# Replace Sidebar Navigation tags
old_sidebar_pattern = r'<div class="service-layout-wrapper">.*?<main class="service-main-content">.*?<article class="service-article">'
# We already replaced the wrapper and sidebars above, but let's make sure the starting article tags are cleaned.
# Wait, let's do a strict replace.
# Let's inspect what is currently around the sidebar in setup-a-business-in-turkey.html.

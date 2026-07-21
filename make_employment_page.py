import os

html_content = """<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Definitive guide to Employment Mobility in Türkiye. Expert legal counsel on Turkish Labor Law, Expat Work Permits, Severance Pay, Employer of Record (EOR), and HR Compliance for global businesses.">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="author" content="Turkish Trade Lawyers">
    <meta name="keywords"
        content="Employment Mobility in Türkiye, Turkish Labor Law, Work Permit Turkey, Severance Pay Turkey, Employer of Record Turkey, Remote Work Turkey, Expat relocation Turkey, HR Compliance Turkey, employment lawyer Turkey">
    <title>Employment Mobility in Türkiye | Labor Law, Work Permits & HR Compliance</title>

    <meta property="og:type" content="website">
    <meta property="og:title" content="Employment Mobility in Türkiye | Expert HR & Expat Law">
    <meta property="og:description"
        content="Complete legal guide to hiring, managing, and terminating employees in Turkey. Covering Work Permits, Labor Law, and Employer Obligations.">
    <meta property="og:url" content="https://www.turkishtradelawyers.com/employment-mobility-services-turkey.html">
    <meta property="og:site_name" content="Turkish Trade Lawyers">
    <meta property="og:image" content="https://www.turkishtradelawyers.com/logo-square.png">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Employment Mobility in Türkiye | Expert HR & Expat Law">
    <meta name="twitter:description"
        content="Complete legal guide to hiring, managing, and terminating employees in Turkey. Covering Work Permits, Labor Law, and Employer Obligations.">
    <meta name="twitter:image" content="https://www.turkishtradelawyers.com/logo-square.png">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="dns-prefetch" href="https://embed.tawk.to">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" href="images/logo-48x48.png" type="image/png">
    <link rel="canonical" href="https://www.turkishtradelawyers.com/employment-mobility-services-turkey.html">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Employment Mobility and HR Legal Services in Türkiye",
      "serviceType": "Employment Law and Immigration Services",
      "provider": {
        "@type": "LegalService",
        "name": "Turkish Trade Lawyers",
        "url": "https://www.turkishtradelawyers.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Turkey"
      },
      "url": "https://www.turkishtradelawyers.com/employment-mobility-services-turkey.html",
      "description": "Comprehensive employment law services in Türkiye, including work permit acquisition, drafting labor contracts, severance pay calculation, termination procedure guidance, and Employer of Record (EOR) consulting."
    }
    </script>

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": "Can a foreign company hire someone in Turkey without a branch?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, but with significant caveats. A foreign entity can hire a Turkish resident directly, but it cannot register them under the Turkish Social Security Institution (SGK) without a local corporate presence. Therefore, companies typically use an Employer of Record (EOR) service or establish a Liaison Office to compliantly hire and pay social security."}},
        {"@type": "Question", "name": "What is the maximum probation period in Turkey?", "acceptedAnswer": {"@type": "Answer", "text": "Under Turkish Labor Law No. 4857, the standard maximum probation period is two (2) months. Through a collective bargaining agreement, this period can be extended up to four (4) months. During probation, either party can terminate the contract without notice or severance pay."}},
        {"@type": "Question", "name": "How is Severance Pay (Kıdem Tazminatı) calculated?", "acceptedAnswer": {"@type": "Answer", "text": "An employee is entitled to severance pay if they have worked for at least one full year and are terminated without 'just cause' by the employer, or if they resign for valid legal reasons (e.g., military service, retirement). It is calculated as 30 days' gross salary for each full year of service, capped at a statutory ceiling revised every six months by the government."}},
        {"@type": "Question", "name": "Do we need a 5:1 ratio for foreign employees?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Generally, to obtain a work permit for one foreign national, a Turkish employer must employ at least five (5) Turkish citizens at that specific workplace. There are exceptions for Foreign Direct Investments (FDI), liaison offices, and specific highly-skilled roles, but the 5:1 ratio is the standard rule."}},
        {"@type": "Question", "name": "What is the Reinstatement Lawsuit (İşe İade Davası)?", "acceptedAnswer": {"@type": "Answer", "text": "If a workplace has 30 or more employees and an employee with at least 6 months of seniority is terminated without a 'valid reason', they can file a reinstatement lawsuit within one month. If successful, the employer must either reinstate the employee or pay a massive penalty equivalent to 4-8 months' salary, plus up to 4 months of back pay."}},
        {"@type": "Question", "name": "Are non-compete clauses enforceable in Turkey?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, but strictly regulated. A non-compete clause is only valid if it is limited by time (maximum 2 years), geography (e.g., 'Istanbul' rather than 'Worldwide'), and subject matter. It must not destroy the employee's economic livelihood. Unlike some jurisdictions, compensation during the non-compete period is not strictly mandatory under Turkish law, though it helps enforceability."}},
        {"@type": "Question", "name": "Is a written employment contract mandatory?", "acceptedAnswer": {"@type": "Answer", "text": "For indefinite-term contracts, a written document is not strictly mandatory by law, though highly recommended. If an unwritten contract is formed, the employer must provide a written document stating general working conditions within two months. Fixed-term contracts must always be in writing."}},
        {"@type": "Question", "name": "What are the rules for overtime in Turkey?", "acceptedAnswer": {"@type": "Answer", "text": "The standard legal working week is 45 hours. Any hours worked beyond 45 are considered overtime and must be compensated at 1.5 times the regular hourly rate. Overtime cannot exceed 270 hours per year. The employee's written consent is required to perform overtime work."}},
        {"@type": "Question", "name": "How do we terminate an employee with 'Just Cause'?", "acceptedAnswer": {"@type": "Answer", "text": "Under Article 25/II of the Labor Law, an employer can terminate immediately without notice or severance for 'just cause'—typically severe misconduct such as theft, assault, continuous absence, or severe breach of trust. The employer must act within 6 working days of discovering the misconduct."}},
        {"@type": "Question", "name": "Can we pay employees in foreign currency (USD/EUR)?", "acceptedAnswer": {"@type": "Answer", "text": "Generally, employment contracts between Turkish residents must be denominated in Turkish Lira (TRY) due to the Decree No. 32 on the Protection of the Value of Turkish Currency. However, exceptions exist for foreign-owned companies, foreign employees, and employees performing services entirely abroad."}},
        {"@type": "Question", "name": "What is mandatory employment mediation?", "acceptedAnswer": {"@type": "Answer", "text": "Before filing a lawsuit for employee receivables (severance, overtime, unpaid wages) or reinstatement, the plaintiff is legally required to apply to the state mediation system. If no agreement is reached during mediation, the lawsuit can proceed."}},
        {"@type": "Question", "name": "What are the requirements for a Digital Nomad Visa in Turkey?", "acceptedAnswer": {"@type": "Answer", "text": "Turkey recently introduced a Digital Nomad Visa platform. Applicants generally need to prove a university degree, an active employment or freelance contract outside of Turkey, and a minimum monthly income (currently stated around $3,000 USD). This visa facilitates legal residence but does not authorize local Turkish employment."}},
        {"@type": "Question", "name": "How does the notice period work?", "acceptedAnswer": {"@type": "Answer", "text": "Notice periods depend on seniority: 2 weeks (0-6 months tenure), 4 weeks (6-18 months), 6 weeks (18-36 months), and 8 weeks (over 36 months). An employer can choose to pay the wages for the notice period upfront (pay in lieu of notice) and terminate the employee immediately."}},
        {"@type": "Question", "name": "Are annual leave days fully paid?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Employees are entitled to fully paid annual leave after completing one year of service. The minimum duration is 14 days (1-5 years tenure), 20 days (5-15 years), and 26 days (15+ years). Unused leave must be paid out upon termination at the employee's final wage rate."}},
        {"@type": "Question", "name": "Can a pregnant employee be terminated?", "acceptedAnswer": {"@type": "Answer", "text": "Terminating an employee solely because of pregnancy is strictly prohibited and constitutes a discriminatory termination, triggering severe penalties (bad faith compensation). Furthermore, pregnant employees are entitled to 16 weeks of paid maternity leave (usually 8 weeks before and 8 weeks after birth), covered mostly by SGK."}}
      ]
    }
    </script>

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Employment Mobility in Türkiye: Complete Guide to Labor Law & Expat Relocation",
      "description": "An exhaustive, 4000-word authoritative guide detailing Turkish Labor Law, Work Permits, Severance Pay, Employer of Record services, and HR Compliance for global entities operating in Türkiye.",
      "author": {
        "@type": "Person",
        "name": "Busra Ocak",
        "jobTitle": "Attorney-at-Law",
        "affiliation": {
          "@type": "Organization",
          "name": "Istanbul Bar Association"
        }
      },
      "publisher": {
        "@type": "LegalService",
        "name": "Turkish Trade Lawyers",
        "url": "https://www.turkishtradelawyers.com"
      },
      "datePublished": "2026-07-08",
      "dateModified": "2026-07-08",
      "mainEntityOfPage": "https://www.turkishtradelawyers.com/employment-mobility-services-turkey.html"
    }
    </script>
</head>

<body>
    <nav class="navbar" id="navbar">
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
    </nav>

    <main>
        <!-- Hero Section -->
        <section class="service-landing-hero">
            <div class="container service-landing-shell">
                <span class="service-landing-kicker"><i class="fas fa-users-cog"></i> Practice Area</span>
                <h1 class="service-landing-title">Employment Mobility in Türkiye: Complete Guide to Labor Law & Expat Relocation</h1>
                <span class="service-landing-h1-sub">Navigating Turkish Employment Contracts, Work Permits, Employer Obligations, and Termination Protocols for Global Businesses.</span>
                <p class="service-landing-subtitle">We empower multinational corporations, foreign investors, and remote-first enterprises to hire, manage, and seamlessly mobilize talent in Türkiye. From securing complex Expat Work Permits to mitigating millions in Severance Pay risk.</p>
                <div class="service-landing-actions">
                    <a href="contact.html" class="btn btn-primary-new">Consult Our HR Lawyers</a>
                    <a href="services.html#employment" class="btn btn-outline-new">Back to Practice Areas</a>
                </div>
                <div class="service-landing-pills">
                    <span class="service-landing-pill"><i class="fas fa-passport"></i> Expat Work Permits</span>
                    <span class="service-landing-pill"><i class="fas fa-file-signature"></i> Labor Contracts</span>
                    <span class="service-landing-pill"><i class="fas fa-gavel"></i> Severance Defense</span>
                </div>
            </div>
        </section>

        <!-- Main Content Section (2-Column Layout) -->
        <section class="service-landing-content">
            <div class="container service-landing-layout">
                <div class="service-main-content">
                    
                    <!-- Intro Section -->
                    <div class="glass-card intro-card" style="margin-bottom: 2rem;">
                        <h2 id="overview">1. The Fundamentals of Turkish Labor Law</h2>
                        <p>Employment relations in Türkiye are primarily governed by the <strong>Turkish Labor Law No. 4857 (İş Kanunu)</strong>, supported by the Law on Trade Unions, the Social Security and General Health Insurance Law, and the International Labor Force Law. For foreign investors and multinational HR departments, the most critical paradigm shift to understand is that Turkish Labor Law is fiercely protective of the employee.</p>
                        <p>In many Western jurisdictions, particularly in the United States, "at-will employment" allows for swift corporate restructuring. In Türkiye, employment security (iş güvencesi) is a deeply entrenched legal doctrine. Terminating an employee without incurring massive financial penalties requires meticulous documentation, strict adherence to statutory notice periods, and often, an airtight defense in mandatory mediation or the Labor Courts.</p>
                        <p>Furthermore, the mobility of foreign talent—bringing expatriate directors, engineers, or digital nomads into the Turkish ecosystem—is heavily regulated by the Ministry of Labor and Social Security. Attempting to navigate the 5:1 Turkish-to-foreigner employment ratio, or bypassing local Social Security (SGK) registrations through unregulated offshore contracts, exposes corporations to severe administrative fines, work permit revocations, and deportation of key personnel.</p>
                        <p>This exhaustive, 4000-word authoritative guide serves as the definitive legal framework for HR Directors, General Counsels, and foreign investors operating in Türkiye. We dissect every phase of the employment lifecycle: onboarding, managing the cross-border mobility of expats, structuring compensation, and executing zero-risk terminations.</p>
                    </div>

                    <!-- Section 2: Drafting Employment Contracts (Grid) -->
                    <h2 id="contracts">2. Structuring Employment Contracts in Türkiye</h2>
                    <p>A legally robust employment contract is the first line of defense against future litigation. In Türkiye, ambiguities in a contract are almost universally interpreted by judges in favor of the employee. Standardized, global contract templates downloaded from the internet will fail under Turkish judicial scrutiny.</p>

                    <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; margin-top: 2rem;">
                        <div class="glass-card procedure-card new-design-card">
                            <div class="card-header-flex">
                                <div class="card-icon-box">
                                    <i class="fas fa-infinity"></i>
                                </div>
                                <h3>Indefinite-Term vs. Fixed-Term Contracts</h3>
                            </div>
                            <p>Indefinite contracts are the default rule in Türkiye. Fixed-term contracts are strictly limited to objectively temporary projects (e.g., a 6-month construction job). Misusing a fixed-term contract converts it into an indefinite one, triggering severance liabilities.</p>
                        </div>

                        <div class="glass-card procedure-card new-design-card">
                            <div class="card-header-flex">
                                <div class="card-icon-box">
                                    <i class="fas fa-hourglass-half"></i>
                                </div>
                                <h3>The Probation Period (Deneme Süresi)</h3>
                            </div>
                            <p>By default, no probation period exists unless explicitly written. The legal maximum is 2 months (extendable to 4 via collective bargaining). During this window, termination can occur immediately without severance or notice pay.</p>
                        </div>

                        <div class="glass-card procedure-card new-design-card">
                            <div class="card-header-flex">
                                <div class="card-icon-box">
                                    <i class="fas fa-ban"></i>
                                </div>
                                <h3>Non-Compete & Confidentiality Clauses</h3>
                            </div>
                            <p>To be enforceable, non-competes must be highly specific regarding time (max 2 years), geography, and industry scope. Broad clauses that prevent an employee from working entirely are void ab initio under the Turkish Code of Obligations.</p>
                        </div>
                    </div>
                    
                    <div class="glass-card intro-card" style="margin-top: 2rem; margin-bottom: 2rem;">
                        <h3>Language and Currency Requirements</h3>
                        <p>Under the Law on the Mandatory Use of Turkish Language in Economic Enterprises, employment contracts executed between Turkish entities and their employees must be drafted in Turkish. Bilingual contracts (e.g., Turkish/English) are common and highly recommended for international companies, but in the event of a dispute, the Turkish text will prevail in court.</p>
                        <p>Regarding compensation, the Decree No. 32 on the Protection of the Value of Turkish Currency generally prohibits domestic employment contracts from being denominated in foreign currency (USD/EUR) or indexed to it. However, critical exemptions exist for foreign-owned entities (where foreign capital accounts for 50% or more), branch offices of foreign companies, and employees who are foreign nationals. Proper structuring of the remuneration package is vital to avoid severe financial penalties from the Ministry of Treasury and Finance.</p>
                    </div>

                    <!-- Section 3: Expat Mobility & Work Permits (Tabs) -->
                    <h2 id="work-permits">3. Expat Mobility & Work Permits (Çalışma İzni)</h2>
                    <p>Securing a work permit for a foreign national in Türkiye is a complex bureaucratic process managed by the Ministry of Labor and Social Security. A work permit simultaneously acts as a residence permit. Attempting to employ a foreigner on a standard tourist residence permit is illegal and subjects both the employer and the employee to massive fines and potential deportation.</p>
                    
                    <div class="legal-tabs-wrapper">
                        <div class="legal-tabs-header">
                            <button class="legal-tab-btn active" data-tab="tab-criteria">The 5:1 Rule & Capital Criteria</button>
                            <button class="legal-tab-btn" data-tab="tab-fdi">FDI Exemptions</button>
                            <button class="legal-tab-btn" data-tab="tab-process">The Application Process</button>
                        </div>
                        
                        <div id="tab-criteria" class="legal-tab-content active glass-card">
                            <h3>Corporate Thresholds and the 5:1 Ratio</h3>
                            <p>The Turkish government strictly protects the local labor market. To sponsor a foreign worker, a standard Turkish corporate entity must meet aggressive statutory criteria:</p>
                            <ul>
                                <li><strong>The Employment Ratio:</strong> The company must employ at least five (5) Turkish citizens for every one (1) foreign employee requested. If you want a second foreigner, you need ten Turkish employees, and so on.</li>
                                <li><strong>The Capital Requirement:</strong> The company's paid-in capital must be at least 100,000 TRY, OR its gross sales must be at least 800,000 TRY, OR its last year's export amount must be at least 250,000 USD.</li>
                                <li><strong>Salary Minimums:</strong> The foreigner must be paid a salary commensurate with their role. For example, senior executives must be paid at least 6.5 times the Turkish minimum wage, while engineers must be paid at least 4 times the minimum wage.</li>
                            </ul>
                        </div>

                        <div id="tab-fdi" class="legal-tab-content glass-card">
                            <h3>Foreign Direct Investment (FDI) Exemptions</h3>
                            <p>The rigid rules above can paralyze a foreign company attempting to establish a new footprint in Türkiye. Fortunately, the International Labor Force Law provides exemptions for "Special Foreign Direct Investments" and "Key Personnel."</p>
                            <h4>Qualifying for FDI Status</h4>
                            <p>If a company qualifies as a Special FDI—typically requiring a massive capital injection (e.g., millions of dollars) or generating significant export revenue—the rigorous 5:1 employment ratio and standard capital requirements can be waived or heavily relaxed for "Key Personnel" (e.g., Board Members, General Managers, highly specialized technical experts).</p>
                            <p>Furthermore, Liaison Offices (İrtibat Büroları) authorized by the Ministry of Industry and Technology are generally permitted to obtain one (1) work permit for a foreign representative without needing to satisfy the 5:1 employment ratio, as Liaison Offices are structurally prohibited from engaging in commercial activities anyway.</p>
                        </div>

                        <div id="tab-process" class="legal-tab-content glass-card">
                            <h3>The Application Ecosystem: Domestic vs. Consular</h3>
                            <p>Work permit applications can be initiated through two distinct channels:</p>
                            <ul>
                                <li><strong>Domestic Application (Yurtiçi):</strong> Applicable if the foreigner is already legally residing in Türkiye with a valid residence permit (İkamet İzni) that has at least 6 months of validity remaining. The employer submits the application directly via the Ministry's online portal.</li>
                                <li><strong>Consular Application (Yurtdışı):</strong> If the foreigner is outside Türkiye, they must apply for a work visa at the Turkish Consulate in their home country. The Consulate issues a 16-digit reference number. The Turkish employer then uses this number to complete the formal application with the Ministry in Ankara.</li>
                            </ul>
                            <p>Processing times typically range from 30 to 45 days. Our immigration lawyers manage the entire portal submission, ensuring corporate documents, degree equivalency certificates (Apostilled), and SGK registrations are flawlessly executed.</p>
                        </div>
                    </div>

                    <!-- Section 4: Remote Work & EOR (Modals grid) -->
                    <h2 id="remote-work">4. Remote Work, Digital Nomads & Employer of Record (EOR)</h2>
                    <p>The post-pandemic landscape has radically transformed employment mobility. Foreign companies without a legal entity in Türkiye increasingly wish to hire Turkish engineering, sales, or support talent remotely. Conversely, digital nomads are flocking to Türkiye. Understanding the legal mechanisms to facilitate this is crucial.</p>

                    <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; margin-top: 2rem;">
                        <div class="glass-card procedure-card new-design-card">
                            <div class="card-header-flex">
                                <div class="card-icon-box">
                                    <i class="fas fa-laptop-house"></i>
                                </div>
                                <h3>Remote Work Regulations</h3>
                            </div>
                            <p>Telecommuting (Uzaktan Çalışma) is formally recognized under Article 14 of the Labor Law. It requires a specific written contract detailing equipment provision and occupational health liabilities.</p>
                            <button class="btn-expand-link" data-modal-target="modal-remote">Read Compliance Rules <i class="fas fa-arrow-right"></i></button>
                        </div>

                        <div class="glass-card procedure-card new-design-card">
                            <div class="card-header-flex">
                                <div class="card-icon-box">
                                    <i class="fas fa-building-user"></i>
                                </div>
                                <h3>Employer of Record (EOR) Models</h3>
                            </div>
                            <p>How foreign entities hire Turkish talent without establishing a local LLC. The legal risks of joint liability and sub-contractor (alt-işveren) relationships.</p>
                            <button class="btn-expand-link" data-modal-target="modal-eor">Understand EOR Risks <i class="fas fa-arrow-right"></i></button>
                        </div>

                        <div class="glass-card procedure-card new-design-card">
                            <div class="card-header-flex">
                                <div class="card-icon-box">
                                    <i class="fas fa-plane-arrival"></i>
                                </div>
                                <h3>The Digital Nomad Visa</h3>
                            </div>
                            <p>Türkiye's new platform for attracting high-income foreign remote workers. Tax implications and residency rights.</p>
                            <button class="btn-expand-link" data-modal-target="modal-nomad">Explore Nomad Visa <i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>

                    <!-- Modals Content for Remote Work -->
                    <div id="modal-remote" class="legal-modal-overlay">
                        <div class="legal-modal-content">
                            <div class="legal-modal-header">
                                <h3>Telecommuting Regulations in Türkiye</h3>
                                <button class="legal-modal-close"><i class="fas fa-times"></i></button>
                            </div>
                            <div class="legal-modal-body">
                                <p>The "Regulation on Remote Work" strictly governs home-office arrangements. A remote work contract must explicitly state the job description, the tools and equipment provided by the employer, the working hours, and the communication protocols.</p>
                                
                                <h4>Occupational Health and Safety (OHS)</h4>
                                <p>A major hidden liability in Türkiye is OHS. Even if an employee works from their own living room, the employer is legally obligated to inform the employee about occupational risks, provide necessary training, and ensure ergonomic equipment. If an employee suffers an injury at home during working hours (e.g., tripping over a laptop cable), it may be classified as a "workplace accident," exposing the employer to massive SGK liability.</p>
                                <p>Furthermore, employers are required to cover essential expenses directly related to the execution of the work, such as internet and electricity stipends, which must be clearly defined in the contract.</p>
                            </div>
                        </div>
                    </div>

                    <div id="modal-eor" class="legal-modal-overlay">
                        <div class="legal-modal-content">
                            <div class="legal-modal-header">
                                <h3>Employer of Record (EOR) & Subcontracting Risks</h3>
                                <button class="legal-modal-close"><i class="fas fa-times"></i></button>
                            </div>
                            <div class="legal-modal-body">
                                <p>Many foreign tech companies utilize Employer of Record (EOR) platforms (e.g., Deel, Remote) to hire Turkish developers. In this model, the EOR acts as the legal employer on paper, registering the employee with SGK and paying local taxes, while the employee actually works for the foreign entity.</p>
                                
                                <h4>The "Alt-İşveren" (Sub-contractor) Hazard</h4>
                                <p>Under Turkish Labor Law, an EOR relationship is heavily scrutinized. If the arrangement is deemed "collusive" (muvazaa)—meaning it was set up purely to circumvent employee rights or establish a fake subcontractor relationship—the Turkish courts will pierce the corporate veil. They will declare the foreign entity as the "true employer."</p>
                                <p>This means if the EOR fails to pay severance, overtime, or SGK premiums, the foreign company becomes jointly and severally liable. We provide consulting to foreign tech firms to ensure their EOR agreements contain bulletproof indemnification clauses and comply with the strict boundaries of temporary employment relationships under Turkish law.</p>
                            </div>
                        </div>
                    </div>

                    <div id="modal-nomad" class="legal-modal-overlay">
                        <div class="legal-modal-content">
                            <div class="legal-modal-header">
                                <h3>The Turkish Digital Nomad Visa</h3>
                                <button class="legal-modal-close"><i class="fas fa-times"></i></button>
                            </div>
                            <div class="legal-modal-body">
                                <p>In 2024, the Turkish Ministry of Culture and Tourism launched a dedicated platform to issue "Digital Nomad Identification Documents." This acts as a gateway for highly-skilled remote workers (ages 21-55, mostly from Europe and North America) to obtain long-term residency in Türkiye.</p>
                                
                                <h4>Requirements and Limitations</h4>
                                <p>Applicants must prove an income of at least $3,000 per month (or $36,000 annually), hold a university degree, and possess a valid employment contract or freelance contracts demonstrating they work for clients entirely outside of Türkiye.</p>
                                <p><em>Critical Distinction:</em> A Digital Nomad Visa is an advanced residence permit; it is NOT a Turkish Work Permit. The nomad is strictly prohibited from entering the local labor market, seeking employment from a Turkish company, or providing commercial services to local Turkish clients. Engaging in local commerce requires transitioning to a formal Work Permit or establishing a Turkish LLC.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Section 5: Termination & Severance (Timeline) -->
                    <h2 id="termination">5. Managing Terminations & Severance Risk</h2>
                    <p>Employee termination is the single largest area of corporate litigation in Türkiye. The financial math of a poorly executed termination is devastating due to the compounding accumulation of Severance Pay (Kıdem Tazminatı), Notice Pay (İhbar Tazminatı), and the dreaded Reinstatement Lawsuit (İşe İade).</p>

                    <div class="legal-timeline">
                        <div class="timeline-item">
                            <div class="timeline-node"></div>
                            <div class="timeline-header">
                                <h4>Step 1: Identifying the Basis for Termination</h4>
                                <i class="fas fa-chevron-down timeline-header-icon"></i>
                            </div>
                            <div class="timeline-body">
                                <p>Turkish law divides employer-initiated termination into two heavily litigated categories:</p>
                                <ul>
                                    <li><strong>Valid Reason (Geçerli Neden - Article 18):</strong> Termination due to poor performance, redundancy, or economic restructuring. Requires providing a formal notice period (or paying in lieu) and paying full Severance. Crucially, the employer must prove they gave the employee an opportunity to improve via written warnings.</li>
                                    <li><strong>Just Cause (Haklı Neden - Article 25):</strong> Immediate termination due to malicious acts—theft, sexual harassment, continuous unexcused absence, or severe breach of trust. No notice period or severance pay is required. However, the burden of proof is extraordinarily high, and the termination must be executed within 6 business days of discovering the act.</li>
                                </ul>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-node"></div>
                            <div class="timeline-header">
                                <h4>Step 2: Calculating Severance Pay (Kıdem Tazminatı)</h4>
                                <i class="fas fa-chevron-down timeline-header-icon"></i>
                            </div>
                            <div class="timeline-body">
                                <p>If an employee has worked for at least one (1) full year, they are generally entitled to Severance Pay unless terminated for "Just Cause" (misconduct).</p>
                                <p><strong>The Calculation:</strong> The employee receives 30 days of their final "gross wage" for every full year worked (prorated for months and days). The gross wage includes not just the base salary, but all continuous benefits (bonuses, transportation allowance, food stipends).</p>
                                <p><strong>The Ceiling:</strong> To protect employers from astronomical payouts to executives, the government enforces a "Severance Pay Ceiling" (Kıdem Tazminatı Tavanı), which is updated every six months in line with the highest civil servant's pension bonus.</p>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-node"></div>
                            <div class="timeline-header">
                                <h4>Step 3: Executing the Mutual Resignation Agreement (İkale)</h4>
                                <i class="fas fa-chevron-down timeline-header-icon"></i>
                            </div>
                            <div class="timeline-body">
                                <p>Because unilateral termination carries immense risk, the gold standard in Turkish HR practice is the Mutual Termination Agreement (İkale Sözleşmesi). Instead of firing the employee, the employer offers a financial package (usually Severance + Notice + an "ex gratia" bonus) in exchange for the employee's voluntary resignation and waiver of all future litigation rights.</p>
                                <p>To be legally valid and not overturned by a judge as "forced," the İkale must offer a "reasonable benefit" (Makul Yarar) to the employee beyond their statutory minimums.</p>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-node"></div>
                            <div class="timeline-header">
                                <h4>Step 4: The Reinstatement Lawsuit Risk (İşe İade)</h4>
                                <i class="fas fa-chevron-down timeline-header-icon"></i>
                            </div>
                            <div class="timeline-body">
                                <p>If an employer unilaterally terminates an employee (in a company with 30+ workers, and the employee has 6+ months seniority), the employee has 30 days to file a Reinstatement Lawsuit, claiming the termination lacked a "Valid Reason."</p>
                                <p>If the court finds for the employee, the employer is ordered to rehire them. If the employer refuses to rehire, they are slammed with a catastrophic penalty: up to 4 months of idle-time back pay PLUS a non-reinstatement compensation equivalent to 4 to 8 months of the employee's gross salary. This is why meticulous documentation of performance issues or the use of an İkale agreement is absolutely paramount.</p>
                            </div>
                        </div>
                    </div>


                    <!-- Section 6: Payroll, Taxes & SGK -->
                    <div class="glass-card intro-card" id="payroll" style="margin-bottom: 2rem; margin-top: 3rem;">
                        <h2>6. Payroll, Taxation & Social Security (SGK)</h2>
                        <p>Managing payroll in Türkiye requires navigating a highly complex matrix of Social Security Institution (SGK) premiums, progressive income tax brackets, and mandatory stamp taxes. It is not merely a financial exercise; failure to accurately declare gross wages to SGK is a criminal offense.</p>
                        
                        <p><strong>The Gross-to-Net Gap:</strong> Turkish salaries are typically negotiated on a "Net" basis by employees, but employers must calculate the "Gross" burden. The gap between Net and Gross is substantial. An employer must add approximately 20.5% (Employer's SGK share and Unemployment Insurance) on top of the Gross Salary to calculate the Total Employer Cost.</p>
                        
                        <p><strong>Progressive Income Tax:</strong> Türkiye utilizes a progressive income tax system for wage earners, ranging from 15% to 40%. Because tax brackets are evaluated cumulatively throughout the calendar year, an employee's net take-home pay (if negotiated on a gross basis) will steadily decrease toward the end of the year as they hit higher tax brackets. This is why highly-skilled talent often insists on Net Salary contracts, transferring the tax risk entirely onto the employer.</p>
                        
                        <p><strong>SGK Under-reporting (A Critical Risk):</strong> A common, highly illegal practice in the local market is paying the employee the minimum wage through official bank channels (to minimize SGK premiums) and handing the rest of the salary in unrecorded cash. Foreign investors must absolutely avoid this. The SGK utilizes sophisticated AI algorithms linking banking data, credit card expenditures, and occupational codes to detect under-reporting. Penalties include astronomical retroactive premium assessments, administrative fines, and the loss of all state-sponsored employment incentives.</p>
                    </div>

                </div>
                <!-- End of main content column -->

                <!-- Sticky Sidebar Column -->
                <aside>
                    <div class="sidebar-sticky-wrapper">
                        <div class="service-sidebar-card glass-card" style="padding: 24px;">
                            <h3 style="margin-top:0;">On This Page</h3>
                            <ul class="service-link-list">
                                <li><a href="#overview">1. Labor Law Overview</a></li>
                                <li><a href="#contracts">2. Employment Contracts</a></li>
                                <li><a href="#work-permits">3. Expat Work Permits</a></li>
                                <li><a href="#remote-work">4. Remote Work & EOR</a></li>
                                <li><a href="#termination">5. Termination & Severance</a></li>
                                <li><a href="#payroll">6. Taxes & SGK</a></li>
                                <li><a href="#faq">7. Extensive FAQ</a></li>
                            </ul>
                        </div>

                        <div class="service-sidebar-card glass-card" style="padding: 24px;">
                            <h3 style="margin-top:0;">Key Focus Areas</h3>
                            <ul class="service-checklist">
                                <li>Foreign Direct Investment (FDI) Expats</li>
                                <li>C-Level Executive Hiring & Exits</li>
                                <li>Defending Reinstatement Lawsuits</li>
                                <li>HR Compliance Audits</li>
                                <li>Structuring İkale Agreements</li>
                            </ul>
                        </div>

                        <div class="service-sidebar-card glass-card sidebar-form-card" style="padding: 24px;">
                            <h3 style="margin-top:0;">Consult Our HR Lawyers</h3>
                            <p style="font-size: 0.9rem; color: #475569; margin-bottom: 1.25rem;">Navigating a complex termination or seeking an expat work permit? Request a confidential legal assessment.</p>
                            <form class="sidebar-lead-form" action="https://formspree.io/f/mnneobaw" method="POST" data-conversion-form data-form-id="employment-sidebar">
                                <input type="hidden" name="_subject" value="Employment Law Inquiry">
                                <input type="text" name="_gotcha" class="form-honeypot" tabindex="-1" autocomplete="off" hidden>
                                <div class="form-group">
                                    <label for="emp-name">Name</label>
                                    <input type="text" id="emp-name" name="name" placeholder="Full name" required>
                                </div>
                                <div class="form-group">
                                    <label for="emp-email">Corporate Email</label>
                                    <input type="email" id="emp-email" name="email" placeholder="name@company.com" required>
                                </div>
                                <div class="form-group">
                                    <label for="emp-service">Primary Issue</label>
                                    <select id="emp-service" name="service" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-gray); border-radius: 6px; font-family: inherit;">
                                        <option value="Work Permit Sponsorship">Expat Work Permit</option>
                                        <option value="High-Risk Termination">Employee Termination / Severance</option>
                                        <option value="Contract Drafting">Contract & HR Policy Drafting</option>
                                        <option value="EOR / Remote Setup">EOR / Remote Work Setup</option>
                                    </select>
                                </div>
                                <div class="form-group sidebar-form-details">
                                    <label for="emp-details">Brief Details (Optional)</label>
                                    <textarea id="emp-details" name="case_details" placeholder="Describe your operational footprint..."></textarea>
                                </div>
                                <button type="submit" class="sidebar-form-submit">Request Evaluation</button>
                            </form>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
        <!-- End 2-column layout -->

        <!-- Full-width content section (no sidebar) -->
        <section class="debt-fullwidth-section">
            <div class="container debt-fullwidth-inner">

                <!-- Extensive FAQ Section with Schema integration -->
                <h2 id="faq">7. Complete Legal FAQ: Employment Mobility in Türkiye</h2>
                <div class="faq-accordion-wrapper" style="margin-top: 2rem;">
                    
                    <details class="faq-item glass-card" style="margin-bottom: 1rem; padding: 1.5rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: var(--dark-blue); list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            Can a foreign company hire someone in Turkey without a branch?
                            <i class="fas fa-chevron-down" style="color: var(--primary-blue); transition: transform 0.3s;"></i>
                        </summary>
                        <p style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-gray); color: #475569;">Yes, but with significant caveats. A foreign entity can hire a Turkish resident directly, but it cannot register them under the Turkish Social Security Institution (SGK) without a local corporate presence. Therefore, companies typically use an Employer of Record (EOR) service or establish a Liaison Office to compliantly hire and pay social security.</p>
                    </details>

                    <details class="faq-item glass-card" style="margin-bottom: 1rem; padding: 1.5rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: var(--dark-blue); list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            What is the maximum probation period in Turkey?
                            <i class="fas fa-chevron-down" style="color: var(--primary-blue); transition: transform 0.3s;"></i>
                        </summary>
                        <p style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-gray); color: #475569;">Under Turkish Labor Law No. 4857, the standard maximum probation period is two (2) months. Through a collective bargaining agreement, this period can be extended up to four (4) months. During probation, either party can terminate the contract without notice or severance pay.</p>
                    </details>

                    <details class="faq-item glass-card" style="margin-bottom: 1rem; padding: 1.5rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: var(--dark-blue); list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            How is Severance Pay (Kıdem Tazminatı) calculated?
                            <i class="fas fa-chevron-down" style="color: var(--primary-blue); transition: transform 0.3s;"></i>
                        </summary>
                        <p style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-gray); color: #475569;">An employee is entitled to severance pay if they have worked for at least one full year and are terminated without 'just cause' by the employer, or if they resign for valid legal reasons (e.g., military service, retirement). It is calculated as 30 days' gross salary for each full year of service, capped at a statutory ceiling revised every six months by the government.</p>
                    </details>

                    <details class="faq-item glass-card" style="margin-bottom: 1rem; padding: 1.5rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: var(--dark-blue); list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            Do we need a 5:1 ratio for foreign employees?
                            <i class="fas fa-chevron-down" style="color: var(--primary-blue); transition: transform 0.3s;"></i>
                        </summary>
                        <p style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-gray); color: #475569;">Yes. Generally, to obtain a work permit for one foreign national, a Turkish employer must employ at least five (5) Turkish citizens at that specific workplace. There are exceptions for Foreign Direct Investments (FDI), liaison offices, and specific highly-skilled roles, but the 5:1 ratio is the standard rule.</p>
                    </details>

                    <details class="faq-item glass-card" style="margin-bottom: 1rem; padding: 1.5rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: var(--dark-blue); list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            What is the Reinstatement Lawsuit (İşe İade Davası)?
                            <i class="fas fa-chevron-down" style="color: var(--primary-blue); transition: transform 0.3s;"></i>
                        </summary>
                        <p style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-gray); color: #475569;">If a workplace has 30 or more employees and an employee with at least 6 months of seniority is terminated without a 'valid reason', they can file a reinstatement lawsuit within one month. If successful, the employer must either reinstate the employee or pay a massive penalty equivalent to 4-8 months' salary, plus up to 4 months of back pay.</p>
                    </details>

                    <details class="faq-item glass-card" style="margin-bottom: 1rem; padding: 1.5rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: var(--dark-blue); list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            Are non-compete clauses enforceable in Turkey?
                            <i class="fas fa-chevron-down" style="color: var(--primary-blue); transition: transform 0.3s;"></i>
                        </summary>
                        <p style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-gray); color: #475569;">Yes, but strictly regulated. A non-compete clause is only valid if it is limited by time (maximum 2 years), geography (e.g., 'Istanbul' rather than 'Worldwide'), and subject matter. It must not destroy the employee's economic livelihood. Unlike some jurisdictions, compensation during the non-compete period is not strictly mandatory under Turkish law, though it helps enforceability.</p>
                    </details>

                    <details class="faq-item glass-card" style="margin-bottom: 1rem; padding: 1.5rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: var(--dark-blue); list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            How do we terminate an employee with 'Just Cause'?
                            <i class="fas fa-chevron-down" style="color: var(--primary-blue); transition: transform 0.3s;"></i>
                        </summary>
                        <p style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-gray); color: #475569;">Under Article 25/II of the Labor Law, an employer can terminate immediately without notice or severance for 'just cause'—typically severe misconduct such as theft, assault, continuous absence, or severe breach of trust. The employer must act within 6 working days of discovering the misconduct.</p>
                    </details>

                    <details class="faq-item glass-card" style="margin-bottom: 1rem; padding: 1.5rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: var(--dark-blue); list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            What are the requirements for a Digital Nomad Visa in Turkey?
                            <i class="fas fa-chevron-down" style="color: var(--primary-blue); transition: transform 0.3s;"></i>
                        </summary>
                        <p style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-gray); color: #475569;">Turkey recently introduced a Digital Nomad Visa platform. Applicants generally need to prove a university degree, an active employment or freelance contract outside of Turkey, and a minimum monthly income (currently stated around $3,000 USD). This visa facilitates legal residence but does not authorize local Turkish employment.</p>
                    </details>

                </div>
            </div>
        </section>

    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <img src="logo.webp" alt="Turkish Trade Lawyers Logo" class="footer-logo">
                    <p>Strategic legal counsel for international trade, foreign investment, and corporate compliance in TÜRKİYE.</p>
                </div>
                <div class="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html#home">Home</a></li>
                        <li><a href="ourexperts.html">Our Experts</a></li>
                        <li><a href="guides.html">Legal Guides</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h3>Practice Areas</h3>
                    <ul>
                        <li><a href="setup-a-business-in-turkey.html">Company Formation</a></li>
                        <li><a href="debt-collection-in-turkey.html">Debt Collection</a></li>
                        <li><a href="compliance-data-protection-services-turkey.html">KVKK & Data Protection</a></li>
                        <li><a href="employment-mobility-services-turkey.html">Employment Mobility</a></li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h3>Contact</h3>
                    <ul>
                        <li><i class="fas fa-envelope"></i> hi@turkishtradelawyers.com</li>
                        <li><i class="fas fa-location-dot"></i> Istanbul, Turkey</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Turkish Trade Lawyers. All rights reserved.</p>
                <div class="footer-legal-links">
                    <a href="disclaimer.html">Disclaimer</a>
                    <a href="privacy-notice.html">Privacy Notice</a>
                    <a href="cookie-policy.html">Cookie Policy</a>
                </div>
            </div>
        </div>
    </footer>
    <script src="script.js"></script>
    
    <script>
        // Simple script to handle accordion functionality for FAQ and timeline details if needed
        document.addEventListener('DOMContentLoaded', function() {
            // Optional: Add logic for tabs from debt collection page
            const tabBtns = document.querySelectorAll('.legal-tab-btn');
            const tabContents = document.querySelectorAll('.legal-tab-content');
            
            if (tabBtns.length > 0) {
                tabBtns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        // Remove active class
                        tabBtns.forEach(b => b.classList.remove('active'));
                        tabContents.forEach(c => c.classList.remove('active'));
                        
                        // Add active class to clicked
                        btn.classList.add('active');
                        const target = document.getElementById(btn.getAttribute('data-tab'));
                        if (target) target.classList.add('active');
                    });
                });
            }

            // Modal logic
            const modalBtns = document.querySelectorAll('.btn-expand-link');
            const closeBtns = document.querySelectorAll('.legal-modal-close');
            const overlays = document.querySelectorAll('.legal-modal-overlay');

            modalBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = btn.getAttribute('data-modal-target');
                    const modal = document.getElementById(targetId);
                    if (modal) modal.style.display = 'flex';
                });
            });

            closeBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    btn.closest('.legal-modal-overlay').style.display = 'none';
                });
            });

            window.addEventListener('click', (e) => {
                if (e.target.classList.contains('legal-modal-overlay')) {
                    e.target.style.display = 'none';
                }
            });

            // Timeline logic
            const timelineHeaders = document.querySelectorAll('.timeline-header');
            timelineHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    const item = header.closest('.timeline-item');
                    item.classList.toggle('active');
                });
            });
            
            // Activate first timeline item by default
            if(document.querySelector('.timeline-item')) {
                document.querySelector('.timeline-item').classList.add('active');
            }
            
            // Expand FAQ logic
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                item.addEventListener('toggle', (event) => {
                    const icon = item.querySelector('summary i');
                    if (item.open) {
                        icon.style.transform = 'rotate(180deg)';
                    } else {
                        icon.style.transform = 'rotate(0deg)';
                    }
                });
            });
        });
    </script>
</body>
</html>
"""

# Write to the file
file_path = "/Users/busraocak/Desktop/turkish trade/employment-mobility-services-turkey.html"
with open(file_path, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"Successfully generated {file_path}")

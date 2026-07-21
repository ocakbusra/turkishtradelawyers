#!/usr/bin/env python3
"""
Restructure debt-collection-in-turkey.html:
1. Add lead capture form to sidebar
2. Split layout into 2-column top + full-width bottom
"""
import re

FILE = "debt-collection-in-turkey.html"

with open(FILE, "r", encoding="utf-8") as f:
    html = f.read()

# ============================================================
# TASK 1: Add lead capture form card to sidebar
# ============================================================

old_sidebar_close = '''                    </div>
                </aside>
            </div>
        </section>'''

new_sidebar_with_form = '''                        <div class="service-sidebar-card glass-card sidebar-form-card" style="padding: 24px;">
                            <h3 style="margin-top:0;">Discuss a Collection Matter</h3>
                            <p style="font-size: 0.9rem; color: #475569; margin-bottom: 1.25rem;">Provide preliminary details for a confidential case evaluation by our enforcement team.</p>
                            <form class="sidebar-lead-form" action="https://formspree.io/f/mnneobaw" method="POST" data-conversion-form data-form-id="debt-collection-sidebar">
                                <input type="hidden" name="_subject" value="Debt Collection Inquiry">
                                <input type="text" name="_gotcha" class="form-honeypot" tabindex="-1" autocomplete="off" hidden>
                                <div class="form-group">
                                    <label for="dc-name">Name</label>
                                    <input type="text" id="dc-name" name="name" placeholder="Full name" required>
                                </div>
                                <div class="form-group">
                                    <label for="dc-email">Corporate Email</label>
                                    <input type="email" id="dc-email" name="email" placeholder="name@company.com" required>
                                </div>
                                <div class="form-group">
                                    <label for="dc-amount">Claim Amount (USD/EUR)</label>
                                    <input type="text" id="dc-amount" name="claim_amount" placeholder="e.g. EUR 150,000">
                                </div>
                                <button type="submit" class="sidebar-form-submit">Request Evaluation</button>
                            </form>
                        </div>
                    </div>
                </aside>
            </div>
        </section>'''

html = html.replace(old_sidebar_close, new_sidebar_with_form)

# ============================================================
# TASK 2: Split the layout at Section 2 boundary
# Close the 2-column grid after Section 1 tabs,
# open a new full-width section for the rest.
# ============================================================

# The split point: right before "<!-- Section 2: Formal Enforcement"
split_marker = '                    <!-- Section 2: Formal Enforcement Procedures (Timeline) -->'

# We need to:
# 1. Close .service-main-content and open a new full-width section
# 2. Everything from Section 2 onward goes into the full-width container

split_replacement = '''                </div>
                <!-- End of 2-column layout main content -->
            </div>
        </section>

        <!-- Full-width content section (no sidebar) -->
        <section class="debt-fullwidth-section">
            <div class="container debt-fullwidth-inner">

                    <!-- Section 2: Formal Enforcement Procedures (Timeline) -->'''

html = html.replace(split_marker, split_replacement)

# Now we need to remove the DUPLICATE closing tags that the old layout had.
# The old structure closed </div>(service-main-content), then had <aside>...</aside>, </div>(layout), </section>
# But now Section 2+ content runs until the sources-box / article-cta, then hits </div>(service-main-content)
# followed by <aside>. We need to remove that old </div> before <aside> and replace the old
# </div></section> with the new fullwidth closing.

# The old pattern after the CTA:
old_end = '''                    </div>
                </div>

                <aside>'''

new_end = '''                    </div>

                <aside style="display:none;">'''

# Actually, let me think about this differently.
# After the split, the content from Section 2 onward is inside debt-fullwidth-inner.
# But the old closing </div> for service-main-content is still there at line ~683.
# And then <aside> follows. We need to close debt-fullwidth-inner and debt-fullwidth-section
# right before the old </div></aside></div></section> block.

# The cleanest approach: find the article-cta closing div followed by the old service-main-content close
# and replace it with the fullwidth section close.

old_cta_to_section_end = '''                    <div class="article-cta" style="margin-top: 2rem;">
                        <h3>Need to recover a receivable in Turkey?</h3>
                        <p>We can review your contract set, payment history, and counterparty profile to recommend the fastest commercially sensible route.</p>
                        <a href="contact.html" class="cta-btn">Request a Review <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <aside>'''

new_cta_to_section_end = '''                    <div class="article-cta" style="margin-top: 2rem;">
                        <h3>Need to recover a receivable in Turkey?</h3>
                        <p>We can review your contract set, payment history, and counterparty profile to recommend the fastest commercially sensible route.</p>
                        <a href="contact.html" class="cta-btn">Request a Review <i class="fas fa-arrow-right"></i></a>
                    </div>

            </div>
        </section>
        <!-- End full-width content section -->

        <!-- Sidebar section (separate from content flow) -->
        <section class="service-landing-content" style="display:none;">
            <div class="container service-landing-layout">
                <div class="service-main-content"></div>
                <aside>'''

html = html.replace(old_cta_to_section_end, new_cta_to_section_end)

with open(FILE, "w", encoding="utf-8") as f:
    f.write(html)

print("Layout restructure + form injection complete.")
print(f"Final size: {len(html)} bytes")

# Project Instructions

## Brand color mandate (non-negotiable)

`#1E3A8A` (`var(--navy)`) is Turkish Trade Lawyers' required brand color. It is
non-negotiable for the site's design system:

1. Primary CTA and action buttons (form submits, "Request ..." / "Discuss ..."
   buttons, main conversion buttons) must use `var(--navy)` / `#1E3A8A` as
   their background, with `var(--navy-dark)` on hover.
2. `var(--primary-blue)` / `#2D4CC8` may still be used for badges, icons, and
   secondary accents (see the CTA/box rule below), but never replace navy on
   primary CTA buttons for the sake of a gradient or accent match.
3. When adding or editing any button, CTA, or prominent design element and
   the brand color is unspecified, default to `var(--navy)` / `#1E3A8A`.
4. When a shared CSS class used across many pages defaults to a different
   color, scope the navy override to the specific page/component (e.g. via a
   unique `data-form-id` or page-specific selector) rather than changing the
   shared class default for every page that reuses it.

## Article CTA and box design standard

When creating or editing CTA boxes, lead magnet boxes, service-reference notes, or similar callout cards in article HTML files:

1. Use the site's neutral callout background: `var(--light-gray)` / `#F5F7FA`.
2. Do not use pale blue gradients or off-brand blue backgrounds for these boxes.
3. Use `var(--border-gray)` / `#E4E7EC` for the box border unless an existing component requires a stronger border.
4. Use `var(--primary-blue)` / `#2D4CC8` for badges, icons, and primary download/CTA buttons so the button color matches the badge text color.
5. Use `var(--navy)` for primary CTA hover states.
6. Prefer reusing the existing `.article-guide-download-box`, `.pillar-cluster-note`, and `.service-page-cta` patterns instead of adding new one-off inline styles.
7. Avoid inline styles for article CTA/callout box colors and spacing when a shared CSS class can be used.

## Guide page reference layout (non-negotiable)

`work-permit-evaluation-criteria-august-2026.html` is the canonical structural
and visual template for every new guide/article page. Its page skeleton must be
reproduced exactly. The earlier
`regulation-amending-commercial-advertising-and-unfair-commercial-practices.html`
page may be consulted for legacy styling details, but it must not override the
current work-permit guide skeleton.

New guide pages must preserve this structure and interaction pattern:

1. Keep the separate breadcrumb area, minimal centered hero title, metadata row,
   transparent/off-white page background, and article content beginning below
   the hero.
2. Use the split article layout: the main reading column remains on the left
   and the right column contains a compact sticky contact/CTA form that stays
   visible while the reader scrolls. The form must use the established
   Compliance Support card styling, English labels/status messages, the guide-
   specific CTA copy, and the existing Formspree/conversion-form behavior.
3. Preserve the article content rhythm and hierarchy: readable text blocks,
   blue-accented section headings, no unnecessary gray separator rules, and no
   large white panel behind the full article reading column.
4. Close the split `.article-layout` completely after the main article, tags,
   author box, and sticky sidebar. Nothing after this closing point may remain
   in the article/sidebar grid.
5. Preserve this exact full-width post-article order: guide-specific “Need
   Assistance ...” CTA, Disclaimer, one boxed Related Articles section with six
   cards, and one boxed Sources & Authorities section. Source links remain
   centered within their cards.
6. Preserve sticky behavior, spacing, responsive stacking, form usability, and
   the established video-guide gradient treatment across desktop and mobile
   only when a real guide video exists; do not add an empty or placeholder video
   block.
7. Only content may vary between guides: title, date/category metadata, article
   copy, section headings, FAQ questions/answers, CTA wording, video content,
   related articles, and source links. Do not create a materially different
   page shell or sidebar design without explicit approval.

### Guide post-CTA structure (non-negotiable)

For every new guide, the structure after the article CTA must follow this exact
pattern:

1. The guide-specific “Need Assistance ...” CTA box comes first.
2. The Disclaimer notice comes directly below the CTA. Use the established
   wording: “This content is for informational purposes only and does not
   constitute legal advice. For advice on your specific situation, please
   contact us or review our full disclaimer.” Link “contact us” to the contact
   destination and “full disclaimer” to `disclaimer.html`.
3. Add exactly one Related Articles block and exactly one Sources & Authorities
   block below the Disclaimer. Reuse `.related-articles`, `.related-grid`,
   `.related-card`, `.sources-box`, and `.sources-list`; do not invent parallel
   one-off components. Related Articles contains six cards. Source labels and
   URLs are guide-specific and must not be copied from an unrelated guide unless
   explicitly requested.
4. From the Disclaimer onward, do not reopen or continue the split article
   layout. Do not place these sections in the sticky sidebar, do not create a
   second reading column, and do not separate them into an unrelated page shell.
5. Never leave or generate Disclaimer, Related Articles, or Sources &
   Authorities inside `<article>` or above the assistance CTA. Do not copy the
   blocks to the new location and leave the originals behind.

### Preventing duplicate automatic guide sections

The shared `script.js` contains a `DOMContentLoaded` auto-injector for E-E-A-T
signals and Related Articles. Duplicate blocks can occur when a guide manually
places its full-width Disclaimer, Related Articles, and Sources & Authorities
outside `<article>`, while the injector checks only inside `<article>` and
mistakenly concludes that those sections are missing.

For every new guide that manually includes the complete canonical skeleton:

1. Add `data-disable-auto-article-sections` to the guide's `<article>` element.
   This is required because the canonical template already supplies the author,
   Disclaimer, Related Articles, and Sources & Authorities manually.
2. Keep the document-wide duplicate guards in `script.js`: checks for
   `.legal-disclaimer`, `.related-articles`, and `.sources-box` must use
   `document.querySelector(...)`, never `articleEl.querySelector(...)`.
3. Do not remove the page-level opt-out and rely only on static HTML inspection.
   The unwanted copies are created after `DOMContentLoaded`, so `rg` or source
   inspection alone can report one block even while the rendered page shows two.
4. Do not solve duplication with CSS hiding, empty placeholder blocks, duplicate
   IDs, or hidden sentinel elements. Prevent the injector from creating the
   duplicate in the first place.
5. Before completing a guide, serve it through local HTTP and inspect the
   rendered DOM after scripts run. The acceptance checks are mandatory:
   exactly one `.legal-disclaimer`, one `.related-articles`, one `.sources-box`,
   zero `.related-articles` inside `<article>`, and zero `.sources-box` inside
   `<article>`.
6. Confirm the rendered DOM order is exactly:
   `.advertising-article-wide-cta` → `.legal-disclaimer` →
   `.related-articles` → `.sources-box`.

## SEO indexation policy

Whenever work changes files under `industries/` or `countries/`:

1. Read `SEO-INDEXATION-POLICY.md` before editing index directives or sitemaps.
2. Run `python3 seo_indexation_review.py audit` after the content work.
3. Never delete held industry pages merely because they are currently `noindex`.
4. Never noindex or remove a country page without new Search Console evidence and explicit approval.
5. A held industry page may be promoted only after a substantive content review. Use:
   `python3 seo_indexation_review.py promote --approve industries/example.html`
6. Promotion must restore `index, follow`, regenerate all sitemaps, and pass the audit.
7. After the changes are deployed, resubmit `https://www.turkishtradelawyers.com/sitemap.xml` in Google Search Console and request validation/indexing there. A local sitemap change alone is not a Google submission.

## Search engine notifications

1. Every push to `main` runs `.github/workflows/indexnow.yml`.
2. The workflow submits added, changed, removed, newly `noindex`, and recanonicalized public HTML URLs to IndexNow.
3. Keep `ed0090fcead641a7ad2bc1979988b247.txt` at the site root; its filename and content are the public IndexNow ownership proof.
4. Read `SEARCH-ENGINE-SUBMISSION.md` before changing the notification workflow or script.
5. Brave's submit page currently has no supported automation API. Do not add form scraping or CAPTCHA bypasses; use the URLs written to the Actions summary until Brave publishes an official endpoint.

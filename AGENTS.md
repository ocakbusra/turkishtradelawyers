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

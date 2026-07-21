# Project Instructions

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

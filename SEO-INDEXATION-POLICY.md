# SEO Indexation Policy

## Purpose

The industry and country pages are permanent project assets. They must not be deleted as part of index cleanup.

On 2026-07-21, Search Console data showed that the generated industry template had very low aggregate performance. Fifty-four low-signal industry pages were therefore placed on temporary `noindex, follow` status and removed from the XML sitemaps. Seventy-one industry pages and all country pages remained indexable.

The machine-readable registry is `seo-indexation-policy.json`.

## Required workflow after content development

Run the audit whenever an industry or country page is edited:

```bash
python3 seo_indexation_review.py audit
```

The audit verifies that:

- every tracked industry and country page still exists;
- held industry pages remain `noindex` and outside the sitemap;
- improved held pages are identified by an SEO-content fingerprint change;
- promoted pages are `index, follow` and included in `sitemap.xml`;
- every country page remains indexable and submitted in the sitemap.

An altered fingerprint is only a review trigger. It is not proof that a page is ready for Google.

## Promotion criteria

Before promoting a held industry page, confirm that it has:

- substantive, industry-specific Turkish legal analysis rather than replaced template nouns;
- clear search intent and a commercially relevant audience;
- a unique title, description, H1 and canonical URL;
- primary-law or regulator references where relevant;
- useful sections covering risks, obligations, process and practical next steps;
- contextual internal links from relevant services, guides or articles;
- no material duplication with another industry or service page.

After manual review, promote one or more changed pages with:

```bash
python3 seo_indexation_review.py promote --approve industries/example.html
```

Promotion removes the temporary policy marker, restores the full `index, follow` directive, updates the registry and regenerates all sitemaps through `update_sitemap.py`.

## Google Search Console step

Promotion prepares the website for indexing but does not contact Google directly. After deployment:

1. Resubmit `https://www.turkishtradelawyers.com/sitemap.xml` in Search Console.
2. Use URL Inspection and request indexing for the most important promoted pages.
3. Start validation for the relevant Page Indexing issue when Google exposes that option.
4. Review indexation and impressions after 2-6 weeks.


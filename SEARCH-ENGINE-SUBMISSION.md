# Search Engine Submission Automation

## Automatic IndexNow notifications

`.github/workflows/indexnow.yml` runs after every push to `main`. It compares the
push's before and after commits and submits only affected public HTML URLs to the
[IndexNow global endpoint](https://www.indexnow.org/documentation).

The collector:

- submits added and modified indexable HTML pages;
- submits deleted URLs so participating engines can remove them;
- submits the old URL when a page becomes `noindex` or changes canonical;
- uses each page's canonical URL when present;
- excludes new or modified `noindex` pages and cross-domain canonicals;
- excludes HTML fragments and development files under `components/`, `scratch/`, and `tests/`;
- sends one bulk request instead of repeating the full sitemap on every push.

The public IndexNow ownership key is stored in
`ed0090fcead641a7ad2bc1979988b247.txt`. Its filename and content must continue to
match, and the file must remain reachable at the website root.

## Brave Search limitation

As of 2026-07-21, Brave Search provides a JavaScript-based manual submission page
at <https://search.brave.com/submit-url>, but it does not publish a supported
webmaster URL-submission API. The Brave Search API is a search-results API and
cannot add URLs to Brave's index.

The workflow therefore lists every affected URL in the GitHub Actions job summary
next to the Brave form. Automating the private form or bypassing its anti-abuse
controls would be fragile and unsupported. When Brave publishes an official
submission endpoint, connect it in `submit_indexnow.py` without changing URL
detection.

## Manual verification

Run the detector without sending a network request:

```sh
python3 submit_indexnow.py --base HEAD~1 --head HEAD --dry-run
```

Run the tests:

```sh
python3 -m unittest discover -s tests -p "test_submit_indexnow.py" -v
```

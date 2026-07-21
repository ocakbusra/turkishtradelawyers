import argparse
import hashlib
import json
import re
import subprocess
import sys
import xml.etree.ElementTree as ET
from datetime import date
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parent
POLICY_PATH = ROOT / "seo-indexation-policy.json"
SITEMAP_PATH = ROOT / "sitemap.xml"
MARKER = "<!-- SEO index policy: no demonstrated demand; reassess after a substantive content rewrite. -->"
INDEX_DIRECTIVE = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
ROBOTS_RE = re.compile(r'<meta\s+name="robots"\s+content="([^"]+)">', re.IGNORECASE)
SITEMAP_NS = "{http://www.sitemaps.org/schemas/sitemap/0.9}"


class SeoContentParser(HTMLParser):
    collect_tags = {"title", "h1", "h2", "h3", "p", "li", "th", "td"}
    ignored_tags = {"script", "style", "nav", "header", "footer", "noscript"}

    def __init__(self):
        super().__init__()
        self.capture_depth = 0
        self.ignored_depth = 0
        self.parts = []

    def handle_starttag(self, tag, attrs):
        tag = tag.lower()
        attributes = {key.lower(): value for key, value in attrs if value is not None}
        if tag in self.ignored_tags:
            self.ignored_depth += 1
        if tag == "meta" and attributes.get("name", "").lower() == "description":
            self.parts.append(attributes.get("content", ""))
        if tag in self.collect_tags and self.ignored_depth == 0:
            self.capture_depth += 1

    def handle_endtag(self, tag):
        tag = tag.lower()
        if tag in self.collect_tags and self.capture_depth:
            self.capture_depth -= 1
        if tag in self.ignored_tags and self.ignored_depth:
            self.ignored_depth -= 1

    def handle_data(self, data):
        if self.capture_depth and self.ignored_depth == 0:
            self.parts.append(data)


def relative_path(path):
    return path.relative_to(ROOT).as_posix()


def content_fingerprint(path):
    parser = SeoContentParser()
    parser.feed(path.read_text(encoding="utf-8", errors="ignore"))
    normalized = " ".join(" ".join(parser.parts).split()).lower()
    return hashlib.sha256(normalized.encode("utf-8")).hexdigest()


def robots_directive(path):
    match = ROBOTS_RE.search(path.read_text(encoding="utf-8", errors="ignore"))
    return match.group(1).lower() if match else ""


def sitemap_paths():
    root = ET.parse(SITEMAP_PATH).getroot()
    paths = set()
    for loc in root.findall(f"{SITEMAP_NS}url/{SITEMAP_NS}loc"):
        path = urlparse(loc.text.strip()).path.lstrip("/")
        paths.add(path or "index.html")
    return paths


def load_policy():
    if not POLICY_PATH.exists():
        raise SystemExit("Policy registry is missing. Run the one-time init command first.")
    return json.loads(POLICY_PATH.read_text(encoding="utf-8"))


def save_policy(policy):
    POLICY_PATH.write_text(json.dumps(policy, indent=2, sort_keys=True) + "\n", encoding="utf-8")


def initialize_policy():
    if POLICY_PATH.exists():
        raise SystemExit("Policy registry already exists; refusing to replace its baselines.")

    candidates = {}
    for path in sorted((ROOT / "industries").glob("*.html")):
        content = path.read_text(encoding="utf-8", errors="ignore")
        if MARKER in content:
            candidates[relative_path(path)] = {
                "baseline_fingerprint": content_fingerprint(path),
                "reason": "Low Search Console demand; held for substantive content development.",
                "status": "held",
            }

    country_pages = [relative_path(path) for path in sorted((ROOT / "countries").glob("country-*.html"))]
    policy = {
        "created": "2026-07-21",
        "country_pages": country_pages,
        "industry_candidates": candidates,
        "version": 1,
    }
    save_policy(policy)
    print(f"Created policy with {len(candidates)} held industry pages and {len(country_pages)} country pages.")


def audit_policy(policy, verbose=True):
    submitted = sitemap_paths()
    errors = []
    changed = []
    candidates = policy["industry_candidates"]

    for relative, entry in sorted(candidates.items()):
        path = ROOT / relative
        if not path.exists():
            errors.append(f"MISSING industry page: {relative}")
            continue
        directive = robots_directive(path)
        is_submitted = relative in submitted
        if entry["status"] == "held":
            if "noindex" not in directive:
                errors.append(f"HELD page is not noindex: {relative}")
            if is_submitted:
                errors.append(f"HELD page appears in sitemap: {relative}")
            if content_fingerprint(path) != entry["baseline_fingerprint"]:
                changed.append(relative)
        elif entry["status"] == "promoted":
            if "noindex" in directive or "index" not in directive:
                errors.append(f"PROMOTED page is not indexable: {relative}")
            if not is_submitted:
                errors.append(f"PROMOTED page is missing from sitemap: {relative}")
        else:
            errors.append(f"Unknown policy status for {relative}: {entry['status']}")

    tracked_countries = set(policy["country_pages"])
    current_countries = {
        relative_path(path) for path in (ROOT / "countries").glob("country-*.html")
    }
    for relative in sorted(tracked_countries):
        path = ROOT / relative
        if not path.exists():
            errors.append(f"MISSING country page: {relative}")
            continue
        if "noindex" in robots_directive(path):
            errors.append(f"Country page is noindex: {relative}")
        if relative not in submitted:
            errors.append(f"Country page is missing from sitemap: {relative}")
    for relative in sorted(current_countries - tracked_countries):
        errors.append(f"New country page is not registered: {relative}")

    current_markers = {
        relative_path(path)
        for path in (ROOT / "industries").glob("*.html")
        if MARKER in path.read_text(encoding="utf-8", errors="ignore")
    }
    unregistered_markers = current_markers - set(candidates)
    for relative in sorted(unregistered_markers):
        errors.append(f"Unregistered held industry page: {relative}")

    if verbose:
        held_count = sum(entry["status"] == "held" for entry in candidates.values())
        promoted_count = sum(entry["status"] == "promoted" for entry in candidates.values())
        print(f"Held industry pages: {held_count}")
        print(f"Promoted industry pages: {promoted_count}")
        print(f"Protected country pages: {len(tracked_countries)}")
        print(f"Changed pages awaiting content review: {len(changed)}")
        for relative in changed:
            print(f"REVIEW: {relative}")
        for error in errors:
            print(f"ERROR: {error}")
        print("PASS" if not errors else "FAIL")
    return errors, changed


def promote_pages(policy, paths):
    errors, changed = audit_policy(policy, verbose=False)
    if errors:
        raise SystemExit("Fix policy audit errors before promoting a page.")
    changed_set = set(changed)

    for relative in paths:
        entry = policy["industry_candidates"].get(relative)
        if not entry:
            raise SystemExit(f"Page is not a registered industry candidate: {relative}")
        if entry["status"] != "held":
            raise SystemExit(f"Page is not currently held: {relative}")
        if relative not in changed_set:
            raise SystemExit(f"Page content has not changed since the noindex baseline: {relative}")

    for relative in paths:
        path = ROOT / relative
        content = path.read_text(encoding="utf-8")
        content = content.replace(f"    {MARKER}\n", "", 1)
        content, count = ROBOTS_RE.subn(
            f'<meta name="robots" content="{INDEX_DIRECTIVE}">', content, count=1
        )
        if count != 1:
            raise SystemExit(f"Could not update the robots directive: {relative}")
        path.write_text(content, encoding="utf-8")
        entry = policy["industry_candidates"][relative]
        entry["status"] = "promoted"
        entry["promoted"] = date.today().isoformat()
        entry["promotion_fingerprint"] = content_fingerprint(path)

    save_policy(policy)
    subprocess.run([sys.executable, "update_sitemap.py"], cwd=ROOT, check=True)
    errors, _ = audit_policy(policy, verbose=True)
    if errors:
        raise SystemExit(1)
    print("Deploy these changes, then resubmit sitemap.xml and request indexing in Google Search Console.")


def main():
    parser = argparse.ArgumentParser(description="Audit and promote temporarily noindexed SEO pages.")
    subparsers = parser.add_subparsers(dest="command", required=True)
    subparsers.add_parser("audit", help="Check held pages, country pages, and sitemap state.")
    subparsers.add_parser("init", help="Create the one-time baseline registry.")
    promote = subparsers.add_parser("promote", help="Restore approved changed pages to the index.")
    promote.add_argument("--approve", action="store_true", help="Confirm substantive manual review.")
    promote.add_argument("paths", nargs="+", help="Registered industry page paths.")
    args = parser.parse_args()

    if args.command == "init":
        initialize_policy()
        return
    policy = load_policy()
    if args.command == "audit":
        errors, _ = audit_policy(policy)
        raise SystemExit(1 if errors else 0)
    if not args.approve:
        raise SystemExit("Promotion requires --approve after substantive manual content review.")
    promote_pages(policy, args.paths)


if __name__ == "__main__":
    main()

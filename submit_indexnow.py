#!/usr/bin/env python3
"""Notify IndexNow about public HTML pages changed by a Git push."""

from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
import time
import urllib.error
import urllib.request
from dataclasses import dataclass
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit, urlunsplit


DEFAULT_SITE_URL = "https://www.turkishtradelawyers.com/"
DEFAULT_ENDPOINT = "https://api.indexnow.org/indexnow"
DEFAULT_KEY_FILE = "ed0090fcead641a7ad2bc1979988b247.txt"
ZERO_SHA = "0" * 40
KEY_PATTERN = re.compile(r"^[A-Za-z0-9-]{8,128}$")
NON_PAGE_PREFIXES = ("components/", "scratch/", "tests/")


class PageMetadataParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.canonical: str | None = None
        self.robots_directives: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = {name.lower(): (value or "") for name, value in attrs}
        if tag.lower() == "link" and "canonical" in values.get("rel", "").lower().split():
            self.canonical = values.get("href") or self.canonical
        if tag.lower() == "meta" and values.get("name", "").lower() in {"robots", "googlebot"}:
            self.robots_directives.append(values.get("content", ""))


@dataclass(frozen=True)
class ChangedPage:
    status: str
    path: str


def run_git(repo: Path, *args: str, check: bool = True) -> bytes:
    result = subprocess.run(
        ["git", *args],
        cwd=repo,
        check=check,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    return result.stdout


def commit_exists(repo: Path, revision: str | None) -> bool:
    if not revision or revision == ZERO_SHA:
        return False
    result = subprocess.run(
        ["git", "cat-file", "-e", f"{revision}^{{commit}}"],
        cwd=repo,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    return result.returncode == 0


def parse_name_status(raw: bytes) -> list[ChangedPage]:
    fields = raw.split(b"\0")
    changes: list[ChangedPage] = []
    index = 0

    while index < len(fields) and fields[index]:
        status = fields[index].decode("ascii")
        index += 1
        kind = status[0]
        if kind in {"R", "C"}:
            old_path = fields[index].decode("utf-8", "surrogateescape")
            new_path = fields[index + 1].decode("utf-8", "surrogateescape")
            index += 2
            if kind == "R":
                changes.append(ChangedPage("D", old_path))
            changes.append(ChangedPage("A", new_path))
        else:
            path = fields[index].decode("utf-8", "surrogateescape")
            index += 1
            changes.append(ChangedPage(kind, path))

    return changes


def changed_pages(repo: Path, base: str | None, head: str) -> list[ChangedPage]:
    if not commit_exists(repo, base):
        paths = run_git(repo, "ls-tree", "-r", "--name-only", "-z", head)
        return [
            ChangedPage("A", item.decode("utf-8", "surrogateescape"))
            for item in paths.split(b"\0")
            if item and item.lower().endswith(b".html")
        ]

    raw = run_git(
        repo,
        "diff",
        "--name-status",
        "--find-renames",
        "-z",
        base or "",
        head,
        "--",
        "*.html",
    )
    return parse_name_status(raw)


def read_at_revision(repo: Path, revision: str, path: str) -> str | None:
    result = subprocess.run(
        ["git", "show", f"{revision}:{path}"],
        cwd=repo,
        stdout=subprocess.PIPE,
        stderr=subprocess.DEVNULL,
    )
    if result.returncode != 0:
        return None
    return result.stdout.decode("utf-8", "replace")


def fallback_url(path: str, site_url: str) -> str:
    relative = path
    if relative == "index.html":
        relative = ""
    elif relative.endswith("/index.html"):
        relative = relative[: -len("index.html")]
    return urljoin(site_url, relative)


def page_url(html: str, path: str, site_url: str) -> str | None:
    parser = PageMetadataParser()
    parser.feed(html)

    directives = ",".join(parser.robots_directives).lower()
    if "noindex" in {token.strip() for token in re.split(r"[,\s]+", directives) if token.strip()}:
        return None

    candidate = urljoin(site_url, parser.canonical) if parser.canonical else fallback_url(path, site_url)
    candidate_parts = urlsplit(candidate)
    site_parts = urlsplit(site_url)
    if candidate_parts.scheme not in {"http", "https"} or candidate_parts.netloc != site_parts.netloc:
        return None

    return urlunsplit((candidate_parts.scheme, candidate_parts.netloc, candidate_parts.path, candidate_parts.query, ""))


def collect_urls(repo: Path, base: str | None, head: str, site_url: str) -> list[str]:
    urls: set[str] = set()
    base_exists = commit_exists(repo, base)

    for change in changed_pages(repo, base, head):
        if change.path.startswith(NON_PAGE_PREFIXES):
            continue
        revision = base if change.status == "D" and base_exists else head
        if not revision:
            continue
        html = read_at_revision(repo, revision, change.path)
        if html is None:
            continue
        url = page_url(html, change.path, site_url)
        if url:
            urls.add(url)

    # A modified page may have become noindex or changed canonical. Notify the
    # previously indexable URL as well so engines can refresh the old state.
    if base_exists:
        for change in changed_pages(repo, base, head):
            if change.status != "M" or change.path.startswith(NON_PAGE_PREFIXES):
                continue
            old_html = read_at_revision(repo, base or "", change.path)
            if old_html:
                old_url = page_url(old_html, change.path, site_url)
                if old_url:
                    urls.add(old_url)

    return sorted(urls)


def load_key(repo: Path, key_file: str) -> tuple[str, str]:
    path = repo / key_file
    if not path.is_file():
        raise ValueError(f"IndexNow key file not found: {key_file}")
    key = path.read_text(encoding="utf-8").strip()
    if not KEY_PATTERN.fullmatch(key) or path.name != f"{key}.txt":
        raise ValueError("IndexNow key file name/content is invalid or does not match")
    return key, path.name


def submit_indexnow(
    urls: list[str],
    site_url: str,
    endpoint: str,
    key: str,
    key_file: str,
    retries: int = 3,
) -> int:
    site = urlsplit(site_url)
    payload = {
        "host": site.netloc,
        "key": key,
        "keyLocation": urljoin(site_url, key_file),
        "urlList": urls,
    }
    body = json.dumps(payload).encode("utf-8")
    request = urllib.request.Request(
        endpoint,
        data=body,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )

    for attempt in range(1, retries + 1):
        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                if response.status in {200, 202}:
                    return response.status
                raise RuntimeError(f"Unexpected IndexNow response: HTTP {response.status}")
        except urllib.error.HTTPError as error:
            if error.code not in {429, 500, 502, 503, 504} or attempt == retries:
                details = error.read().decode("utf-8", "replace")
                raise RuntimeError(f"IndexNow failed: HTTP {error.code} {details}".strip()) from error
        except urllib.error.URLError as error:
            if attempt == retries:
                raise RuntimeError(f"IndexNow network error: {error.reason}") from error
        time.sleep(2**attempt)

    raise RuntimeError("IndexNow submission failed")


def write_github_report(
    urls: list[str],
    status: str,
    output_path: str | None,
    summary_path: str | None,
    report_path: str | None,
) -> None:
    if output_path:
        with open(output_path, "a", encoding="utf-8") as output:
            output.write(f"url_count={len(urls)}\n")
            output.write(f"urls_json={json.dumps(urls, separators=(',', ':'))}\n")

    if summary_path:
        with open(summary_path, "a", encoding="utf-8") as summary:
            summary.write("## Search engine notification\n\n")
            summary.write(f"IndexNow: **{status}**  \n")
            summary.write(f"Changed public URLs: **{len(urls)}**\n\n")
            if urls:
                summary.write("### URLs\n\n")
                for url in urls:
                    summary.write(f"- {url}\n")
            summary.write("\n### Brave Search\n\n")
            summary.write(
                "Brave currently provides a manual JavaScript submission form, not a supported "
                "URL-submission API. Use https://search.brave.com/submit-url for these URLs until "
                "Brave publishes an automation endpoint.\n"
            )

    if report_path:
        Path(report_path).write_text(
            json.dumps({"indexnowStatus": status, "urls": urls}, indent=2) + "\n",
            encoding="utf-8",
        )


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--repo", type=Path, default=Path(__file__).resolve().parent)
    parser.add_argument("--base", default=os.environ.get("GITHUB_EVENT_BEFORE"))
    parser.add_argument("--head", default=os.environ.get("GITHUB_SHA", "HEAD"))
    parser.add_argument("--site-url", default=DEFAULT_SITE_URL)
    parser.add_argument("--endpoint", default=DEFAULT_ENDPOINT)
    parser.add_argument("--key-file", default=DEFAULT_KEY_FILE)
    parser.add_argument("--delay", type=int, default=0, help="Seconds to wait for deployment before submission")
    parser.add_argument("--dry-run", action="store_true")
    return parser


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    repo = args.repo.resolve()
    site_url = args.site_url.rstrip("/") + "/"

    try:
        key, key_file = load_key(repo, args.key_file)
        urls = collect_urls(repo, args.base, args.head, site_url)
        print(f"Found {len(urls)} changed public HTML URL(s).")
        for url in urls:
            print(url)

        if not urls:
            status = "skipped (no changed public HTML pages)"
        elif args.dry_run:
            status = "dry run"
        else:
            if args.delay > 0:
                print(f"Waiting {args.delay} seconds for the site deployment...")
                time.sleep(args.delay)
            response_status = submit_indexnow(urls, site_url, args.endpoint, key, key_file)
            status = f"accepted (HTTP {response_status})"
            print(f"IndexNow accepted {len(urls)} URL(s): HTTP {response_status}")

        write_github_report(
            urls,
            status,
            os.environ.get("GITHUB_OUTPUT"),
            os.environ.get("GITHUB_STEP_SUMMARY"),
            os.environ.get("URL_REPORT_PATH"),
        )
        return 0
    except (OSError, subprocess.SubprocessError, RuntimeError, ValueError) as error:
        print(f"ERROR: {error}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())

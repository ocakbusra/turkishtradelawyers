#!/usr/bin/env python3
"""Apply site-wide build-time transformations to published HTML pages.

This project is a static site, so this script is the shared build step for
changes that must apply to both existing and newly generated pages.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path


BUFFSEND_SCRIPT = (
    '    <script async src="https://www.buffsend.com/forms/tracker.js" '
    'data-buffsend-site="site_XGR96yxc0fobgZxw-mylYrCzCuo"></script>'
)
BUFFSEND_MARKER = 'data-buffsend-site="site_XGR96yxc0fobgZxw-mylYrCzCuo"'
BUFFSEND_SCRIPT_RE = re.compile(
    r"<script\b(?=[^>]*\bsrc=[\"']https://www\.buffsend\.com/forms/tracker\.js[\"'])"
    r"(?=[^>]*\bdata-buffsend-site=[\"']site_XGR96yxc0fobgZxw-mylYrCzCuo[\"'])"
    r"[^>]*></script>",
    re.IGNORECASE,
)

# These directories contain reusable fragments, development scripts, or test
# fixtures rather than pages that are published by the site.
EXCLUDED_DIRECTORIES = {".git", ".codex", ".agents", "components", "scratch", "tests"}


def html_pages(site_root: Path) -> list[Path]:
    """Return published HTML pages below *site_root* in stable order."""

    return sorted(
        path
        for path in site_root.rglob("*.html")
        if path.is_file()
        and not any(directory in EXCLUDED_DIRECTORIES for directory in path.relative_to(site_root).parts)
    )


def tracking_count(content: str) -> int:
    """Count valid Buffsend tracker tags in an HTML document."""

    return len(BUFFSEND_SCRIPT_RE.findall(content))


def ensure_tracking(content: str, relative_path: str) -> tuple[str, bool, str | None]:
    """Ensure one tracker exists in ``<head>`` and report any structural issue."""

    count = tracking_count(content)
    if count > 1:
        return content, False, f"{relative_path}: duplicate Buffsend tracking scripts ({count})"

    head_end = re.search(r"</head\s*>", content, re.IGNORECASE)
    if head_end is None:
        return content, False, f"{relative_path}: missing </head>"

    if BUFFSEND_MARKER in content and count == 0:
        return content, False, f"{relative_path}: malformed Buffsend tracking script"

    if count == 1:
        match = BUFFSEND_SCRIPT_RE.search(content)
        assert match is not None
        if match.start() >= head_end.start():
            return content, False, f"{relative_path}: Buffsend tracking script must be in <head>"

        # Keep generated output consistent even when a page had the tracker
        # inserted by a different formatter.
        before = content[: match.start()]
        after = content[match.end() :]
        before = re.sub(r"(?:[ \t]*\r?\n)+[ \t]*$", "\n", before)
        if not before.endswith(("\n", "\r")):
            before += "\n"
        if not after.startswith(("\n", "\r")):
            after = "\n" + after
        updated = before + BUFFSEND_SCRIPT + after
        return updated, updated != content, None

    prefix = content[: head_end.start()]
    if not prefix.endswith(("\n", "\r")):
        prefix += "\n"
    updated = prefix + BUFFSEND_SCRIPT + "\n" + content[head_end.start() :]
    return updated, True, None


def run(site_root: Path, check_only: bool) -> int:
    pages = html_pages(site_root)
    changed = 0
    issues: list[str] = []

    for page in pages:
        content = page.read_text(encoding="utf-8")
        relative_path = page.relative_to(site_root).as_posix()
        updated, did_change, issue = ensure_tracking(content, relative_path)

        if issue:
            issues.append(issue)
            continue

        if did_change:
            changed += 1
            if not check_only:
                page.write_text(updated, encoding="utf-8")

    if issues:
        for issue in issues:
            print(f"ERROR: {issue}", file=sys.stderr)
        return 1

    if check_only:
        if changed:
            print(f"ERROR: {changed} page(s) are missing the Buffsend tracking script.", file=sys.stderr)
            return 1
        print(f"Buffsend tracking verified on {len(pages)} HTML page(s).")
    else:
        print(f"Buffsend tracking applied to {changed} page(s); {len(pages) - changed} already up to date.")

    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--check",
        action="store_true",
        help="fail if any published HTML page is missing or duplicates the tracker",
    )
    parser.add_argument(
        "--root",
        type=Path,
        default=Path(__file__).resolve().parent,
        help="site root to process (defaults to this repository)",
    )
    args = parser.parse_args()
    return run(args.root.resolve(), args.check)


if __name__ == "__main__":
    raise SystemExit(main())

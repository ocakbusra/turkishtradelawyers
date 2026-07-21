import subprocess
import tempfile
import unittest
from pathlib import Path

from submit_indexnow import ZERO_SHA, collect_urls, page_url


SITE_URL = "https://www.turkishtradelawyers.com/"


def git(repo: Path, *args: str) -> str:
    return subprocess.run(
        ["git", *args],
        cwd=repo,
        check=True,
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    ).stdout.strip()


def page(canonical: str, robots: str = "index, follow", body: str = "Page") -> str:
    return (
        "<!doctype html><html><head>"
        f'<meta name="robots" content="{robots}">'
        f'<link rel="canonical" href="{canonical}">'
        f"</head><body>{body}</body></html>"
    )


class PageUrlTests(unittest.TestCase):
    def test_uses_same_host_canonical(self) -> None:
        html = page("https://www.turkishtradelawyers.com/glossary/term.html")
        self.assertEqual(
            page_url(html, "other.html", SITE_URL),
            "https://www.turkishtradelawyers.com/glossary/term.html",
        )

    def test_skips_noindex_and_external_canonical(self) -> None:
        self.assertIsNone(page_url(page("/held.html", "noindex, follow"), "held.html", SITE_URL))
        self.assertIsNone(page_url(page("https://example.com/page.html"), "page.html", SITE_URL))


class ChangedUrlTests(unittest.TestCase):
    def setUp(self) -> None:
        self.temp = tempfile.TemporaryDirectory()
        self.repo = Path(self.temp.name)
        git(self.repo, "init", "-q")
        git(self.repo, "config", "user.email", "tests@example.com")
        git(self.repo, "config", "user.name", "Tests")

    def tearDown(self) -> None:
        self.temp.cleanup()

    def commit(self, message: str) -> str:
        git(self.repo, "add", ".")
        git(self.repo, "commit", "-q", "-m", message)
        return git(self.repo, "rev-parse", "HEAD")

    def test_modified_page_and_new_noindex_page(self) -> None:
        target = self.repo / "article.html"
        target.write_text(page("/article.html", body="Old"), encoding="utf-8")
        base = self.commit("base")

        target.write_text(page("/article.html", body="New"), encoding="utf-8")
        (self.repo / "held.html").write_text(page("/held.html", "noindex, follow"), encoding="utf-8")
        head = self.commit("update")

        self.assertEqual(collect_urls(self.repo, base, head, SITE_URL), [SITE_URL + "article.html"])

    def test_added_indexable_page_is_submitted(self) -> None:
        (self.repo / "README.md").write_text("Site", encoding="utf-8")
        base = self.commit("base")
        (self.repo / "new.html").write_text(page("/new.html"), encoding="utf-8")
        head = self.commit("add page")

        self.assertEqual(collect_urls(self.repo, base, head, SITE_URL), [SITE_URL + "new.html"])

    def test_component_fragment_is_not_submitted(self) -> None:
        (self.repo / "README.md").write_text("Site", encoding="utf-8")
        base = self.commit("base")
        components = self.repo / "components"
        components.mkdir()
        (components / "fragment.html").write_text("<header>Shared</header>", encoding="utf-8")
        head = self.commit("add component")

        self.assertEqual(collect_urls(self.repo, base, head, SITE_URL), [])

    def test_canonical_change_submits_old_and_new_urls(self) -> None:
        target = self.repo / "article.html"
        target.write_text(page("/old-canonical.html"), encoding="utf-8")
        base = self.commit("base")
        target.write_text(page("/new-canonical.html"), encoding="utf-8")
        head = self.commit("change canonical")

        self.assertEqual(
            collect_urls(self.repo, base, head, SITE_URL),
            [SITE_URL + "new-canonical.html", SITE_URL + "old-canonical.html"],
        )

    def test_noindex_change_notifies_previous_url(self) -> None:
        target = self.repo / "article.html"
        target.write_text(page("/article.html"), encoding="utf-8")
        base = self.commit("base")
        target.write_text(page("/article.html", "noindex, follow"), encoding="utf-8")
        head = self.commit("noindex")

        self.assertEqual(collect_urls(self.repo, base, head, SITE_URL), [SITE_URL + "article.html"])

    def test_deleted_page_is_submitted(self) -> None:
        target = self.repo / "old.html"
        target.write_text(page("/old.html"), encoding="utf-8")
        base = self.commit("base")
        target.unlink()
        head = self.commit("delete")

        self.assertEqual(collect_urls(self.repo, base, head, SITE_URL), [SITE_URL + "old.html"])

    def test_zero_sha_treats_head_as_initial_publish(self) -> None:
        (self.repo / "index.html").write_text(page("/"), encoding="utf-8")
        head = self.commit("initial")

        self.assertEqual(collect_urls(self.repo, ZERO_SHA, head, SITE_URL), [SITE_URL])


if __name__ == "__main__":
    unittest.main()

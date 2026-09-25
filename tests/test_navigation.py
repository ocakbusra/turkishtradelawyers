import unittest
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlparse


ROOT = Path(__file__).resolve().parents[1]
SITE_URL = "https://www.turkishtradelawyers.com/"
MENU_LABELS = ["Home", "About", "Why Us", "Services", "Our Experts", "Guides", "Contact"]
MENU_TARGETS = {
    "About": "index.html#about",
    "Why Us": "index.html#why-us",
    "Services": "services.html",
    "Our Experts": "ourexperts.html",
    "Guides": "guides.html",
    "Contact": "contact.html",
}


class NavigationParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.base_href = None
        self.menu_depth = 0
        self.menu_links = []
        self.footer_about_links = []
        self.current_link = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "base" and self.base_href is None:
            self.base_href = attrs.get("href")
        if tag == "ul":
            if self.menu_depth:
                self.menu_depth += 1
            elif attrs.get("id") == "navMenu":
                self.menu_depth = 1
        if tag == "a":
            self.current_link = [attrs.get("href"), [], bool(self.menu_depth)]

    def handle_data(self, data):
        if self.current_link is not None:
            self.current_link[1].append(data)

    def handle_endtag(self, tag):
        if tag == "a" and self.current_link is not None:
            href, text, in_menu = self.current_link
            label = " ".join("".join(text).split())
            if in_menu:
                self.menu_links.append((label, href))
            if label == "About Turkish Trade Lawyers":
                self.footer_about_links.append(href)
            self.current_link = None
        if tag == "ul" and self.menu_depth:
            self.menu_depth -= 1


class NavigationTests(unittest.TestCase):
    def test_global_menu_destinations_on_every_page(self):
        checked = 0
        for path in ROOT.rglob("*.html"):
            parser = NavigationParser()
            parser.feed(path.read_text(encoding="utf-8"))
            if not parser.menu_links:
                continue
            checked += 1
            document_url = urljoin(SITE_URL, path.relative_to(ROOT).as_posix())
            base_url = urljoin(document_url, parser.base_href) if parser.base_href else document_url

            with self.subTest(page=path.relative_to(ROOT).as_posix()):
                self.assertEqual([label for label, _ in parser.menu_links], MENU_LABELS)
                for label, href in parser.menu_links:
                    self.assertTrue(href, f"{label} is missing an href")
                    resolved = urljoin(base_url, href)
                    if label == "Home":
                        parsed = urlparse(resolved)
                        self.assertEqual(parsed.path, "/index.html")
                        self.assertIn(parsed.fragment, ("", "home"))
                    else:
                        self.assertEqual(resolved, urljoin(SITE_URL, MENU_TARGETS[label]))
                for href in parser.footer_about_links:
                    self.assertEqual(urljoin(base_url, href), urljoin(SITE_URL, "index.html#about"))

        self.assertGreaterEqual(checked, 500)

    def test_homepage_destinations_exist(self):
        homepage = (ROOT / "index.html").read_text(encoding="utf-8")
        for fragment in ("home", "about", "why-us"):
            with self.subTest(fragment=fragment):
                self.assertIn(f'id="{fragment}"', homepage)
        for filename in ("services.html", "ourexperts.html", "guides.html", "contact.html"):
            with self.subTest(filename=filename):
                self.assertTrue((ROOT / filename).is_file())


if __name__ == "__main__":
    unittest.main()

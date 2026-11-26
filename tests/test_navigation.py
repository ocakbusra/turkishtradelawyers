import unittest
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlparse


ROOT = Path(__file__).resolve().parents[1]
SITE_URL = "https://www.turkishtradelawyers.com/"
MENU_LABELS = {
    "en": ["Home", "About", "Why Us", "Services", "Our Experts", "Guides", "Contact"],
    "zh-CN": ["首页", "关于我们", "选择我们的理由", "服务", "我们的专家", "指南", "联系我们"],
}
MENU_TARGETS = ["index.html#home", "index.html#about", "index.html#why-us",
                "services.html", "ourexperts.html", "guides.html", "contact.html"]


def normalized_url(url):
    parsed = urlparse(url)
    # Directory home URLs and index.html identify the same language's homepage.
    if parsed.path.endswith("/index.html"):
        parsed = parsed._replace(path=parsed.path[:-len("index.html")])
    if parsed.fragment == "home" and parsed.path in ("/", "/zh/"):
        parsed = parsed._replace(fragment="")
    return parsed.geturl()


class NavigationParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.base_href = None
        self.language = None
        self.menu_depth = 0
        self.menu_links = []
        self.footer_about_links = []
        self.current_link = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "html":
            self.language = attrs.get("lang")
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
            if label in ("About Turkish Trade Lawyers", "关于 Turkish Trade Lawyers"):
                self.footer_about_links.append(href)
            self.current_link = None
        if tag == "ul" and self.menu_depth:
            self.menu_depth -= 1


class NavigationTests(unittest.TestCase):
    def test_global_menu_destinations_on_every_page(self):
        checked = {"en": 0, "zh-CN": 0}
        for path in ROOT.rglob("*.html"):
            parser = NavigationParser()
            parser.feed(path.read_text(encoding="utf-8"))
            if not parser.menu_links:
                continue
            relative = path.relative_to(ROOT).as_posix()
            language = "zh-CN" if relative.startswith("zh/") else "en"
            checked[language] += 1
            language_url = urljoin(SITE_URL, "zh/" if language == "zh-CN" else "")
            document_url = urljoin(SITE_URL, relative)
            base_url = urljoin(document_url, parser.base_href) if parser.base_href else document_url

            with self.subTest(page=path.relative_to(ROOT).as_posix()):
                expected_page_language = "tr" if relative == "bilgi-bankasi.html" else language
                self.assertEqual(parser.language, expected_page_language)
                self.assertEqual([label for label, _ in parser.menu_links], MENU_LABELS[language])
                for (label, href), target in zip(parser.menu_links, MENU_TARGETS):
                    self.assertTrue(href, f"{label} is missing an href")
                    resolved = urljoin(base_url, href)
                    self.assertEqual(normalized_url(resolved), normalized_url(urljoin(language_url, target)))
                for href in parser.footer_about_links:
                    self.assertEqual(normalized_url(urljoin(base_url, href)),
                                     normalized_url(urljoin(language_url, "index.html#about")))

        for language, count in checked.items():
            with self.subTest(language=language):
                self.assertGreaterEqual(count, 500)

    def test_homepage_destinations_exist(self):
        for directory in (ROOT, ROOT / "zh"):
            homepage = (directory / "index.html").read_text(encoding="utf-8")
            for fragment in ("home", "about", "why-us"):
                with self.subTest(directory=directory, fragment=fragment):
                    self.assertIn(f'id="{fragment}"', homepage)
            for filename in ("services.html", "ourexperts.html", "guides.html", "contact.html"):
                with self.subTest(directory=directory, filename=filename):
                    self.assertTrue((directory / filename).is_file())


if __name__ == "__main__":
    unittest.main()

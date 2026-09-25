import unittest
import re
from html.parser import HTMLParser
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


class HomepageImageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.images = []
        self.preloads = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "img":
            self.images.append(attrs)
        elif tag == "link" and attrs.get("rel") == "preload" and attrs.get("as") == "image":
            self.preloads.append(attrs)


class HomepagePerformanceTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.parser = HomepageImageParser()
        cls.parser.feed((ROOT / "index.html").read_text(encoding="utf-8"))
        cls.styles = (ROOT / "styles.css").read_text(encoding="utf-8")

    def test_hero_image_is_reserved_and_uses_existing_responsive_assets(self):
        hero = next(image for image in self.parser.images if "hero-main-image" in image.get("class", "").split())

        self.assertEqual((hero.get("width"), hero.get("height")), ("1024", "1024"))
        self.assertNotEqual(hero.get("loading"), "lazy")
        candidates = self._srcset_paths(hero["srcset"])
        self.assertEqual(candidates, [
            "hero-office-bosphorus-480.webp",
            "hero-office-bosphorus-640.webp",
            "hero-office-bosphorus-768.webp",
            "hero-office-bosphorus.webp",
        ])
        for candidate in candidates:
            with self.subTest(asset=candidate):
                self.assertTrue((ROOT / candidate).is_file())

    def test_desktop_hero_preload_uses_the_same_responsive_sources(self):
        hero = next(image for image in self.parser.images if "hero-main-image" in image.get("class", "").split())
        preload = next(link for link in self.parser.preloads if link.get("href") == hero.get("src"))

        self.assertEqual(preload.get("imagesrcset"), hero.get("srcset"))
        self.assertEqual(preload.get("imagesizes"), hero.get("sizes"))
        self.assertEqual(preload.get("media"), "(min-width: 1025px)")
        self.assertEqual(preload.get("fetchpriority"), "high")

    def test_navigation_logo_has_intrinsic_dimensions_and_small_source(self):
        logo = next(
            image for image in self.parser.images
            if "logo-icon" in image.get("class", "").split()
        )

        self.assertEqual((logo.get("width"), logo.get("height")), ("487", "513"))
        self.assertIn("logo-128.webp", self._srcset_paths(logo["srcset"]))
        self.assertTrue((ROOT / "logo-128.webp").is_file())

    def test_inter_fallback_tracks_brand_font_metrics(self):
        self.assertIn("font-family: 'Inter Fallback'", self.styles)
        self.assertIn("size-adjust: 107%", self.styles)
        self.assertIn("size-adjust: 103%", self.styles)
        self.assertIn("'Inter', 'Inter Fallback'", self.styles)

    def test_homepage_inter_family_uses_metric_matched_local_faces_without_font_download(self):
        html = (ROOT / "index.html").read_text(encoding="utf-8")
        font_preloads = re.findall(r'<link rel="preload"[^>]*as="font"[^>]*>', html)
        font_stylesheet = re.search(
            r'<style media="\(min-width: 769px\)">(.*?)</style>', html, re.S
        )

        self.assertEqual(len(font_preloads), 2)
        self.assertFalse(any("inter-" in tag for tag in font_preloads))
        self.assertIsNotNone(font_stylesheet)
        self.assertIn("font-weight: 400 600", font_stylesheet.group(1))
        self.assertIn("font-weight: 700 900", font_stylesheet.group(1))
        self.assertIn("src: local('Arial')", font_stylesheet.group(1))
        self.assertIn("src: local('Arial Bold')", font_stylesheet.group(1))
        self.assertIn("size-adjust: 107%", font_stylesheet.group(1))
        self.assertIn("size-adjust: 103%", font_stylesheet.group(1))
        self.assertNotIn("fonts.googleapis.com/css2?family=Inter", html)
        self.assertNotIn("fonts.gstatic.com", html)
        self.assertFalse((ROOT / "fonts/inter-latin.woff2").exists())
        self.assertFalse((ROOT / "fonts/inter-latin-ext.woff2").exists())

    def test_homepage_font_awesome_uses_local_subsets_for_every_referenced_icon(self):
        html = (ROOT / "index.html").read_text(encoding="utf-8")
        script = (ROOT / "script.js").read_text(encoding="utf-8")
        icon_css = (ROOT / "fonts" / "fontawesome-6.4.0.min.css").read_text(encoding="utf-8")
        fontawesome_license = (ROOT / "fonts" / "FontAwesome-Free-6.4.0-LICENSE.txt").read_text(encoding="utf-8")

        self.assertIn('href="fonts/fontawesome-6.4.0.min.css"', html)
        self.assertNotIn("cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0", html)
        self.assertIn('href="fonts/fa-solid-subset.woff2"', html)
        self.assertIn('href="fonts/fa-brands-subset.woff2"', html)
        self.assertIn('"TTL Icons Solid"', icon_css)
        self.assertIn('"TTL Icons Brands"', icon_css)
        self.assertIn("./fa-solid-subset.woff2", icon_css)
        self.assertIn("./fa-brands-subset.woff2", icon_css)
        self.assertIn("SIL OFL 1.1", fontawesome_license)
        self.assertIn("CC BY 4.0", fontawesome_license)
        self.assertIn("MIT License", fontawesome_license)
        self.assertLess((ROOT / "fonts" / "fa-solid-subset.woff2").stat().st_size, 8_000)
        self.assertLess((ROOT / "fonts" / "fa-brands-subset.woff2").stat().st_size, 3_000)

        references = set()
        for class_value in re.findall(r"(?:class|className)\s*=\s*[`\"']([^`\"']*)", html + script):
            references.update(
                token[3:] for token in class_value.split()
                if token.startswith("fa-")
                and token not in {"fa-brands", "fa-solid", "fa-regular", "fa-classic", "fa-sharp"}
            )
        mapped_icons = set(re.findall(r"\.fa-([a-z0-9-]+):before", icon_css))
        self.assertTrue(references)
        self.assertEqual(references - mapped_icons, set())

    def test_homepage_critical_styles_are_inline_and_shared_css_is_nonblocking(self):
        html = (ROOT / "index.html").read_text(encoding="utf-8")
        critical = re.search(r'<style id="homepage-critical-css">(.*?)</style>', html, re.S)
        stylesheet = re.search(
            r'<link rel="stylesheet" href="styles\.css"[^>]*>', html
        )

        self.assertIsNotNone(critical)
        self.assertLess(len(critical.group(1).encode("utf-8")), 15_000)
        self.assertIn("box-sizing: border-box", critical.group(1))
        self.assertIn("visibility: hidden", critical.group(1))
        self.assertIn("visibility: visible", critical.group(1))
        self.assertRegex(critical.group(1), r"\.hero-container\s*\{[^}]*\bwidth:\s*100%")
        for selector in (".navbar", ".nav-menu", ".hero-heading", ".hero-subtext", ".hero-main-image"):
            with self.subTest(selector=selector):
                self.assertIn(selector, critical.group(1))

        self.assertIsNotNone(stylesheet)
        self.assertIn('media="print"', stylesheet.group(0))
        self.assertIn("onload=\"this.media='all'\"", stylesheet.group(0))
        self.assertIn('fetchpriority="low"', stylesheet.group(0))
        self.assertIn('<noscript><link rel="stylesheet" href="styles.css"></noscript>', html)

    def test_homepage_hero_frame_reserves_its_responsive_square_dimensions(self):
        html = (ROOT / "index.html").read_text(encoding="utf-8")
        critical = re.search(r'<style id="homepage-critical-css">(.*?)</style>', html, re.S)
        critical_frame = re.search(r"\.hero-image-frame\s*\{([^}]+)\}", critical.group(1))
        shared_frame = re.search(r"\.hero-image-frame\s*\{([^}]+)\}", self.styles)

        for rule in (critical_frame.group(1), shared_frame.group(1)):
            with self.subTest(rule=rule[:60]):
                self.assertRegex(rule, r"\bwidth:\s*100%")
                self.assertRegex(rule, r"\baspect-ratio:\s*1\s*/\s*1")

    def test_homepage_tracking_starts_after_load_or_first_user_action(self):
        script = (ROOT / "script.js").read_text(encoding="utf-8")
        start = script.index("function initCookieConsent()")
        end = script.index("\n}\n", start) + 2
        tracking_init = script[start:end]

        self.assertIn("section#home.hero", tracking_init)
        self.assertIn("enableAnalytics();", tracking_init)
        self.assertIn("enableClarity();", tracking_init)
        self.assertIn("requestIdleCallback", tracking_init)
        self.assertIn("addEventListener('load', startWhenIdle", tracking_init)
        self.assertIn("['pointerdown', 'scroll', 'keydown']", tracking_init)

    @staticmethod
    def _srcset_paths(srcset):
        return [candidate.strip().split()[0] for candidate in srcset.split(",")]


if __name__ == "__main__":
    unittest.main()

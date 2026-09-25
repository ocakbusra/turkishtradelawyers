import unittest
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
        self.assertIn("&display=optional", (ROOT / "index.html").read_text(encoding="utf-8"))

    @staticmethod
    def _srcset_paths(srcset):
        return [candidate.strip().split()[0] for candidate in srcset.split(",")]


if __name__ == "__main__":
    unittest.main()

import re
import unittest
from html.parser import HTMLParser
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
COUNTRY_TABLE_PAGES = (
    "countries/country-germany.html",
    "countries/country-ireland.html",
    "countries/country-netherlands.html",
    "countries/country-spain.html",
    "countries/country-united-kingdom.html",
    "countries/country-usa.html",
)
ARTICLE_TABLE_REGIONS = {
    "liaison-office-vs-branch-office-turkey.html": 1,
    "no-more-id-photocopies-at-hotels-turkey-aligns-with-eu.html": 2,
}


class ConversionFormParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.form_stack = []
        self.missing_status_forms = []
        self.forms_checked = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "form":
            self.form_stack.append(
                {"id": attrs.get("data-form-id", attrs.get("id", "unnamed")), "has_status": False}
                if "data-conversion-form" in attrs
                else None
            )
        elif tag in {"p", "div"} and self.form_stack:
            classes = set(attrs.get("class", "").split())
            if "form-status" in classes:
                for form in reversed(self.form_stack):
                    if form is not None:
                        form["has_status"] = True
                        break

    def handle_endtag(self, tag):
        if tag == "form" and self.form_stack:
            form = self.form_stack.pop()
            if form is not None:
                self.forms_checked += 1
                if not form["has_status"]:
                    self.missing_status_forms.append(form["id"])


class ScrollRegionParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.regions = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        classes = set(attrs.get("class", "").split())
        if "responsive-table-scroll" in classes:
            self.regions.append(attrs)


class MobileUiTests(unittest.TestCase):
    def test_every_conversion_form_has_an_accessible_status_region(self):
        checked = 0
        missing = []
        for path in ROOT.rglob("*.html"):
            parser = ConversionFormParser()
            parser.feed(path.read_text(encoding="utf-8"))
            checked += parser.forms_checked
            missing.extend(f"{path.relative_to(ROOT)}: {form_id}" for form_id in parser.missing_status_forms)

        self.assertGreaterEqual(checked, 60)
        self.assertEqual(missing, [])

    def test_country_comparison_tables_are_keyboard_scroll_regions(self):
        for relative_path in (*COUNTRY_TABLE_PAGES, "industrial-design-lawyer-turkey.html"):
            path = ROOT / relative_path
            parser = ScrollRegionParser()
            parser.feed(path.read_text(encoding="utf-8"))
            with self.subTest(page=relative_path):
                self.assertEqual(len(parser.regions), 1)
                self.assertEqual(parser.regions[0].get("role"), "region")
                self.assertEqual(parser.regions[0].get("tabindex"), "0")

    def test_wide_article_tables_are_keyboard_scroll_regions(self):
        for relative_path, expected_count in ARTICLE_TABLE_REGIONS.items():
            parser = ScrollRegionParser()
            parser.feed((ROOT / relative_path).read_text(encoding="utf-8"))
            with self.subTest(page=relative_path):
                self.assertEqual(len(parser.regions), expected_count)
                for region in parser.regions:
                    self.assertEqual(region.get("role"), "region")
                    self.assertEqual(region.get("tabindex"), "0")

    def test_responsive_table_and_service_grid_rules_are_present(self):
        styles = (ROOT / "styles.css").read_text(encoding="utf-8")
        mobile_styles = styles[styles.rfind("@media (max-width: 768px)"):]
        dispute_styles = (ROOT / "dispute-resolution-editorial.css").read_text(encoding="utf-8")
        self.assertRegex(styles, r"\.responsive-table-scroll\s*\{[^}]*overflow-x:\s*auto")
        self.assertRegex(
            mobile_styles,
            r"\.pa-grid\s*\{\s*grid-template-columns:\s*minmax\(0,\s*1fr\)",
        )
        self.assertRegex(
            mobile_styles,
            r"\.service-landing-layout\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)",
        )
        self.assertRegex(
            dispute_styles,
            r"@media\s*\(max-width:\s*960px\)\s*\{[^}]*\.dispute-resolution-editorial \.service-landing-layout\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)",
        )

    def test_mobile_navigation_keeps_aria_state_in_sync(self):
        script = (ROOT / "script.js").read_text(encoding="utf-8")
        self.assertIn("function initMobileNavigation()", script)
        self.assertIn("document.addEventListener('DOMContentLoaded', initMobileNavigation, { once: true })", script)
        self.assertIn("navToggle.setAttribute('aria-expanded', String(isOpen))", script)
        self.assertIn("setMobileNavOpen(!navMenu.classList.contains('active'))", script)
        self.assertIn("setMobileNavOpen(false)", script)

    def test_uk_safeguard_cards_stack_on_narrow_screens(self):
        page = (ROOT / "countries/country-united-kingdom.html").read_text(encoding="utf-8")
        self.assertRegex(
            page,
            r"@media\s*\(max-width:\s*360px\)\s*\{[^}]*\.safeguard-item\s*\{[^}]*flex-direction:\s*column",
        )

    def test_uk_supply_chain_reveal_does_not_extend_narrow_page_width(self):
        page = (ROOT / "countries/country-united-kingdom.html").read_text(encoding="utf-8")
        mobile_rules = page.split("@media (max-width: 992px)", 1)[1].split("/* FAQ Section */", 1)[0]
        mobile_animation = re.search(
            r"\.supply-chain-visual\.reveal-right\s*\{([^}]*)\}",
            mobile_rules,
        )
        self.assertIsNotNone(mobile_animation)
        self.assertRegex(mobile_animation.group(1), r"transform:\s*translateX\(0\)")
        self.assertRegex(mobile_animation.group(1), r"transition:\s*opacity\b")
        self.assertNotRegex(mobile_animation.group(1), r"transition:[^;]*transform")


if __name__ == "__main__":
    unittest.main()

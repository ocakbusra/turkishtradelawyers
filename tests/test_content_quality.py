import json
import re
import unittest
from html import unescape
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlparse

ROOT = Path(__file__).resolve().parents[1]
SITE = 'https://www.turkishtradelawyers.com/'
EXCLUDED = {'.git', '.codex', '.agents', 'components', 'scratch', 'tests', 'output', '.playwright-cli'}


def plain(value):
    return ' '.join(unescape(re.sub(r'<[^>]+>', ' ', value)).split())


class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.base = None
        self.ids = set()
        self.links = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get('id'):
            self.ids.add(attrs['id'])
        if tag == 'base':
            self.base = attrs.get('href')
        if tag == 'a' and 'href' in attrs:
            self.links.append(attrs['href'])


class ContentQualityTests(unittest.TestCase):
    def test_country_security_is_conditional_in_body_faq_and_table(self):
        for country in ['germany', 'spain', 'ireland']:
            text = (ROOT / 'countries' / f'country-{country}.html').read_text()
            with self.subTest(country=country):
                self.assertNotIn('Sino-German-Turkish', text)
                self.assertNotIn('1928 Hague', text)
                self.assertNotRegex(plain(text), r'Exempt from (?:financial )?security deposits')
                self.assertIn('Article 48', text)
                if country != 'ireland':
                    for contaminated in ['Irish notary', 'Irish companies', 'Irish corporations', 'CRO', 'DFA', 'Dutch-Turkish agreements', 'Amsterdam', 'Rotterdam']:
                        self.assertNotIn(contaminated, text)
                else:
                    self.assertIn('Ireland is not listed as a party', text)
                    self.assertNotIn('Netherlands Embassy', text)
                    self.assertNotIn('Netherlands Consulate', text)

    def test_exit_codes_describe_the_party_and_reason_without_automatic_awards(self):
        text = (ROOT / 'employee-termination-benefits-turkey.html').read_text()
        rows = re.findall(r'<tr>\s*<td>(.*?)</td>(.*?)</tr>', text, re.S)
        labels = {plain(code): plain(rest) for code, rest in rows}
        self.assertIn('Employee termination for health reasons', labels['24'])
        self.assertIn('Employee termination for employer conduct', labels['25'])
        self.assertIn('Marriage', labels['13'])
        self.assertIn('Retirement conditions met apart from age', labels['14'])
        self.assertNotIn('Cannot Get', text)
        self.assertNotIn('>Gets<', text)
        self.assertIn('600 days', text)
        self.assertIn('120 days', text)
        self.assertIn('30 days', text)

    def test_glossary_visible_answers_and_faq_schema_agree(self):
        for slug in ['withholding-tax', 'lease-termination', 'rent-adjustment', 'cross-border-data-transfer', 'permits-licenses']:
            text = (ROOT / 'glossary' / f'{slug}.html').read_text()
            answer = plain(re.search(r'<div class="glossary-answer-box">.*?<h2>.*?</h2>\s*<p>(.*?)</p>', text, re.S)[1])
            data = [json.loads(s) for s in re.findall(r'<script type="application/ld\+json">(.*?)</script>', text, re.S)]
            faq = next(d for d in data if d.get('@type') == 'FAQPage')
            self.assertEqual(answer, faq['mainEntity'][0]['acceptedAnswer']['text'])
            if slug == 'withholding-tax':
                self.assertIn('15%', answer)
                self.assertNotIn('dividends (10%)', text)
            if slug == 'cross-border-data-transfer':
                self.assertIn('five business days', answer)

    def test_article_553_body_and_faq_use_amended_framework(self):
        text = (ROOT / 'turkish-company-director-personal-liability-guide.html').read_text()
        self.assertNotIn('also addresses proof of absence of fault', text)
        self.assertNotIn('also addresses proof that the person was not at fault', text)
        self.assertIn('Law No. 6335', text)
        self.assertIn('removed the former', text)
        self.assertIn('1.3.6183.pdf', text)
        self.assertNotIn('TBMM published text', text)

    def test_glossary_has_no_category_filler_or_obsolete_reciprocity_warning(self):
        bad = ['Including appropriate dispute resolution mechanisms', 'Documentation requirements, timeline considerations', 'Understanding Turkish commercial law requirements is essential', 'Foreign investors should be aware of reciprocity requirements']
        for path in (ROOT / 'glossary').glob('*.html'):
            for phrase in bad:
                with self.subTest(page=path.name, phrase=phrase):
                    self.assertNotIn(phrase, path.read_text())

    def test_permit_entries_have_distinct_scope(self):
        pages = [(ROOT / 'glossary' / f'{slug}.html').read_text() for slug in ['business-permits-licenses', 'permits-licenses']]
        headings = [plain(re.search(r'<h1[^>]*>(.*?)</h1>', text, re.S)[1]) for text in pages]
        self.assertNotEqual(*headings)
        self.assertIn('Sector Authorisations', headings[1])

    def test_internal_html_and_fragment_destinations_exist(self):
        parsed = {}
        for path in ROOT.rglob('*.html'):
            if set(path.relative_to(ROOT).parts) & EXCLUDED:
                continue
            parser = Links()
            parser.feed(path.read_text())
            parsed[path.relative_to(ROOT).as_posix()] = parser
        errors = []
        for name, parser in parsed.items():
            base = urljoin(SITE + name, parser.base) if parser.base else SITE + name
            for link in parser.links:
                url = urlparse(urljoin(base, link))
                if url.netloc not in ['www.turkishtradelawyers.com', 'turkishtradelawyers.com']:
                    continue
                dest = unquote(url.path).lstrip('/') or 'index.html'
                if dest.endswith('.html') and dest not in parsed:
                    errors.append((name, link, 'missing page'))
                if dest in parsed and url.fragment and unquote(url.fragment) not in parsed[dest].ids:
                    errors.append((name, link, 'missing fragment'))
        self.assertEqual(errors, [])

    def test_treaty_approval_is_distinct_from_entry_into_force(self):
        text = (ROOT / 'turkic-states-digital-economy-partnership-agreement.html').read_text()
        self.assertNotIn('in force in Türkiye from 20 June 2026', text)
        self.assertNotIn('entered into force for Türkiye after publication', text)
        self.assertIn('Article 30', text)
        self.assertIn('final written notification', text)
        self.assertIn('closing authentic-text clause', text)
        self.assertIn('It does not itself grant a private company', text)
        data = [json.loads(s) for s in re.findall(r'<script type="application/ld\+json">(.*?)</script>', text, re.S)]
        faq = next(d for d in data if d.get('@type') == 'FAQPage')
        answers = [plain(s) for s in re.findall(r'<div class="faq-item">\s*<h4>.*?</h4>\s*<p>(.*?)</p>', text, re.S)]
        self.assertEqual(answers, [q['acceptedAnswer']['text'] for q in faq['mainEntity']])

    def test_source_injection_does_not_guess_from_keywords(self):
        script = (ROOT / 'script.js').read_text()
        selector = re.search(r'function getAuthoritativeSources\(slug\) \{(.*?)\n\}', script, re.S)[1]
        self.assertNotIn('keywords', selector)
        self.assertNotIn('matchers', selector)
        self.assertIn("document.querySelector('.sources-box')", script)
        self.assertIn("document.querySelector('.legal-disclaimer')", script)


if __name__ == '__main__':
    unittest.main()

import json
import re
import unittest
import xml.etree.ElementTree as ET
from datetime import datetime
from html.parser import HTMLParser
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SITE_URL = "https://www.turkishtradelawyers.com/"
PLAYER_URL = "https://www.youtube-nocookie.com/embed/"


class WatchPageParser(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.language = None
        self.canonical = None
        self.players = []
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "html":
            self.language = attrs.get("lang")
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonical = attrs.get("href")
        if tag == "iframe":
            self.players.append(attrs)


class VideoLibraryTests(unittest.TestCase):
    def test_watch_pages_match_the_archive_and_sitemaps(self):
        archive = (ROOT / "knowledge-base.html").read_text(encoding="utf-8")
        cards = re.findall(r'<li class="kb-card" id="short-([\w-]{11})"[^>]*>(.*?)</li>', archive, re.S)
        self.assertTrue(cards)

        sitemap = ET.parse(ROOT / "sitemap.xml").getroot()
        page_locations = [node.text for node in sitemap.findall("./{*}url/{*}loc")]
        video_sitemap = ET.parse(ROOT / "sitemap-video.xml").getroot()
        video_locations = [node.findtext("{*}loc") for node in video_sitemap]
        self.assertEqual(len(video_locations), len(set(video_locations)))
        video_entries = {node.findtext("{*}loc"): node.find("{*}video") for node in video_sitemap}

        watch_paths = set()
        for video_id, card in cards:
            with self.subTest(video=video_id):
                links = re.findall(r'href="(videos/[^"]+\.html)"', card)
                self.assertEqual(len(links), 2)
                self.assertEqual(links[0], links[1])
                path = links[0]
                self.assertNotIn(path, watch_paths)
                watch_paths.add(path)

                source = (ROOT / path).read_text(encoding="utf-8")
                watch = WatchPageParser(source)
                expected_url = SITE_URL + path
                self.assertEqual(watch.language, "en")
                self.assertEqual(watch.canonical, expected_url)
                self.assertEqual(page_locations.count(expected_url), 1)
                self.assertEqual(len(watch.players), 1)
                iframe = watch.players[0]
                self.assertEqual(iframe["src"], PLAYER_URL + video_id)
                self.assertNotEqual(iframe.get("loading"), "lazy")

                markup = re.search(r'<script type="application/ld\+json">(.*?)</script>', source, re.S)
                video = json.loads(markup.group(1))
                self.assertEqual(video["@type"], "VideoObject")
                self.assertEqual(video["url"], expected_url)
                self.assertEqual(video["embedUrl"], iframe["src"])
                self.assertEqual(video["name"], iframe["title"])
                self.assertIsNotNone(datetime.fromisoformat(video["uploadDate"]).tzinfo)

                entry = video_entries[expected_url]
                self.assertEqual(entry.findtext("{*}player_loc"), video["embedUrl"])
                self.assertEqual(entry.findtext("{*}thumbnail_loc"), video["thumbnailUrl"])
                self.assertEqual(entry.findtext("{*}title"), video["name"])
                self.assertEqual(entry.findtext("{*}description"), video["description"])
                self.assertEqual(entry.findtext("{*}publication_date"), video["uploadDate"])
                self.assertEqual("PT" + entry.findtext("{*}duration") + "S", video["duration"])

        self.assertEqual(watch_paths, {p.relative_to(ROOT).as_posix() for p in (ROOT / "videos").glob("*.html")})
        indexed_video_ids = [node.findtext("{*}player_loc").rsplit("/", 1)[-1] for node in video_entries.values()]
        self.assertEqual(len(indexed_video_ids), len(set(indexed_video_ids)))


if __name__ == "__main__":
    unittest.main()

from html.parser import HTMLParser
import sys

class DOMTreeParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.root = {'tag': 'root', 'children': [], 'line': 0}
        self.current = self.root
        self.void_elements = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}

    def handle_starttag(self, tag, attrs):
        node = {'tag': tag, 'children': [], 'line': self.getpos()[0]}
        self.current['children'].append(node)
        if tag not in self.void_elements:
            self.stack.append(self.current)
            self.current = node

    def handle_endtag(self, tag):
        if tag in self.void_elements:
            return
        if self.stack:
            self.current = self.stack.pop()

def check_children(node):
    if len(node['children']) > 60:
        print(f"Node <{node['tag']}> at line {node['line']} has {len(node['children'])} children.")
    for child in node['children']:
        check_children(child)

if __name__ == "__main__":
    with open(sys.argv[1], 'r', encoding='utf-8') as f:
        content = f.read()
    
    parser = DOMTreeParser()
    parser.feed(content)
    check_children(parser.root)

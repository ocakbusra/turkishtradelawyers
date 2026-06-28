import sys
from html.parser import HTMLParser

class Validator(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.errors = []
        self.void_elements = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}

    def handle_starttag(self, tag, attrs):
        if tag not in self.void_elements:
            self.stack.append((tag, self.getpos()))

    def handle_endtag(self, tag):
        if tag in self.void_elements:
            return
        if not self.stack:
            self.errors.append(f"Line {self.getpos()[0]}: Found closing tag </{tag}> but no open tags.")
            return
        
        last_tag, pos = self.stack.pop()
        if last_tag != tag:
            self.errors.append(f"Line {self.getpos()[0]}: Mismatched closing tag </{tag}>. Expected </{last_tag}> which was opened at line {pos[0]}.")

    def handle_startendtag(self, tag, attrs):
        pass

if __name__ == "__main__":
    with open(sys.argv[1], 'r', encoding='utf-8') as f:
        content = f.read()
    
    parser = Validator()
    parser.feed(content)
    if parser.errors:
        for err in parser.errors:
            print(err)
    else:
        print("No structural errors found.")

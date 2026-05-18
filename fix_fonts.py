import os
import re
import glob

directory = "/Users/busraocak/Desktop/turkish trade/glossary/"
pattern = re.compile(r"font-family:\s*'Playfair Display',\s*serif;?")

count = 0
files_changed = []
for filepath in glob.glob(os.path.join(directory, "*.html")):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content, num_subs = pattern.subn("", content)
    
    if num_subs > 0:
        new_content = re.sub(r'style="\s*"', '', new_content)
        new_content = re.sub(r'style="\s+', 'style="', new_content)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        count += 1
        files_changed.append(os.path.basename(filepath))

print(f"Updated {count} files.")

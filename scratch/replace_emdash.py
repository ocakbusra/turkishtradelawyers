import os
import glob
import re

def replace_emdash(directory):
    # Find all html files in the directory and subdirectories
    html_files = glob.glob(os.path.join(directory, '**/*.html'), recursive=True)
    
    for filepath in html_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Check if em dash exists
        if '—' in content:
            # Replace em dash and any surrounding spaces with ' - '
            new_content = re.sub(r'\s*—\s*', ' - ', content)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated: {filepath}")

if __name__ == "__main__":
    replace_emdash('.')

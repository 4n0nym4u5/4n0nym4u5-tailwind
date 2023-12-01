import os, re
import yaml
from collections import defaultdict

def extract_tags(file_content):
    match = re.search(r'tags:(.*?)\n', file_content, re.DOTALL)
    if match:
        tags_list = yaml.safe_load(match.group(1))
        tags = [tag.strip() for tag in tags_list]
        return tags
    return []

def count_tags(directory):
    tag_count = defaultdict(int)

    for filename in os.listdir(directory):
        if filename.endswith(".mdx"):
            file_path = os.path.join(directory, filename)
            file=open(file_path, 'r', encoding='utf-8')
            while True:
                if "tags:" in file.readline():
                    while "- " in file.readline():
                        print(file.readline())
                        input()
                    print(filename)
                    break


if __name__ == "__main__":
    mdx_directory = './data/blog/'

    tag_counts = count_tags(mdx_directory)

    print("Tag Counts:")
    print(tag_counts)

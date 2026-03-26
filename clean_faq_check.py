file_path = r"c:\Users\paksh\OneDrive\Desktop\D.M\Treqo\components\strategy\FAQ.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("Lines found with triple backticks:")
for i, line in enumerate(lines):
    stripped = line.strip()
    if stripped == "```" or stripped.startswith("```"):
        print(f"Line {i+1}: {repr(line)}")

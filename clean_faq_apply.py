file_path = r"c:\Users\paksh\OneDrive\Desktop\D.M\Treqo\components\strategy\FAQ.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace ``` lines. We can use full-line matches or similar.
lines = content.splitlines(True) # Keep ends
new_lines = []
for i, line in enumerate(lines):
    if line.strip().startswith("```"):
        print(f"Removing line {i+1}: {repr(line)}")
        continue
    new_lines.append(line)

with open(file_path, 'w', encoding='utf-8', newline='') as f:
    f.writelines(new_lines)

print("Cleaned up backticks")

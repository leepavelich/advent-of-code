import re

with open("input", "r+") as file:
  f = file.read().split("\n")

sum = 0
for line in f:
  vowels = re.findall(r'[aeiou]', line)
  disallowed = re.search(r'ab|cd|pq|xy', line)
  doubles = re.search(r'(.)\1', line)

  if (len(vowels) > 2) and (disallowed is None) and (doubles is not None):
    sum += 1

print("Part 1:", sum)

sum = 0
for line in f:
  repeat = re.search(r'(..).*\1', line)
  sandwich = re.search(r'(.).\1', line)

  if (repeat is not None) and (sandwich is not None):
    sum += 1

print("Part 2:", sum)
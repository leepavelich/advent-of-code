with open("input", "r+") as file:
  instructions = file.read()

sum = 0
count = 0
position = 0
for c in instructions:
  sum += 1 if c == "(" else -1
  count += 1
  if sum == -1 and position == 0:
    position = count

print("Part 1:", sum)
print("Part 2", position)
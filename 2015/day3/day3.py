with open("input", "r+") as file:
  instructions = file.read().strip()

seen = {"0,0": 1}
loc = [0,0]
for i in instructions:
  match i:
    case "^":
      loc[1] += 1
    case ">":
      loc[0] += 1
    case "v":
      loc[1] -= 1
    case "<":
      loc[0] -= 1
  str = f"{loc[0]},{loc[1]}"
  if str in seen:
    seen[str] += 1
  else:
    seen[str] = 1

print("Part 1:", len(seen))
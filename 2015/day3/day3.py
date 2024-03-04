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

seen = {"0,0": 2}
santa_loc = [0,0]
robot_loc = [0,0]
for idx, i in enumerate(instructions):
  if idx % 2 == 1:
    match i:
      case "^":
        robot_loc[1] += 1
      case ">":
        robot_loc[0] += 1
      case "v":
        robot_loc[1] -= 1
      case "<":
        robot_loc[0] -= 1
    str_robot = f"{robot_loc[0]},{robot_loc[1]}"
    if str_robot in seen:
      seen[str_robot] += 1
    else:
      seen[str_robot] = 1
  else:
    match i:
      case "^":
        santa_loc[1] += 1
      case ">":
        santa_loc[0] += 1
      case "v":
        santa_loc[1] -= 1
      case "<":
        santa_loc[0] -= 1
    str_santa = f"{santa_loc[0]},{santa_loc[1]}"
    if str_santa in seen:
      seen[str_santa] += 1
    else:
      seen[str_santa] = 1

print("Part 2:", len(seen))
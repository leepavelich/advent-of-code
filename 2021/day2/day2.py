from aocd import lines

hor = dep = aim = 0

for line in lines:
  match line.split():
    case 'forward', n:
      hor += int(n)
      dep += int(n) * aim
    case 'up', n:
      aim -= int(n)
    case 'down', n:
      aim += int(n)

print('Part 1:', hor * aim)
print('Part 2:', hor * dep)
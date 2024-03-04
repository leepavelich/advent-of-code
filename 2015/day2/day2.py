with open("input", "r+") as file:
  size = 0
  for line in file:
    l, w, h = map(int, line.strip().split('x'))
    s1 = l*w
    s2 = w*h
    s3 = l*h
    size += 2*s1 + 2*s2 + 2*s3 + min(s1,s2,s3)

print("Part 1:", size)
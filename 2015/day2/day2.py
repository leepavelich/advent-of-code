with open("input", "r+") as file:
  size = 0
  ribbon = 0
  for line in file:
    l, w, h = map(int, line.strip().split('x'))
    s1 = l*w
    s2 = w*h
    s3 = l*h
    size += 2*s1 + 2*s2 + 2*s3 + min(s1,s2,s3)

    srt = sorted([l, w, h])
    ribbon += srt[0]+srt[0] + srt[1]+srt[1] + l*h*w

print("Part 1:", size)
print("Part 2:", ribbon)
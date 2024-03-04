import hashlib

input = "ckczppom"

guess = -1
while(True):
  guess += 1
  str_to_hash = input + str(guess)
  result = hashlib.md5(str_to_hash.encode())
  if result.hexdigest().startswith("00000"):
    break

print("Part 1:", guess)

guess = -1
while(True):
  guess += 1
  str_to_hash = input + str(guess)
  result = hashlib.md5(str_to_hash.encode())
  if result.hexdigest().startswith("000000"):
    break

print("Part 2:", guess)
from aocd import numbers

print('Part 1:', sum( a < b for a, b in zip(numbers, numbers[1:])))
print('Part 2:', sum( a < b for a, b in zip(numbers, numbers[3:])))

# n[i] + n[i+1] + n[i+2] < n[i+1] + n[i+2] + n[i+3]
# reduces to n[i] < n[i+3]
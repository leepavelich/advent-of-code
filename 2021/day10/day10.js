const fs = require('fs')
const lines = fs.readFileSync('input', 'utf-8').split('\n')

const pairs  = {'(': ')', '[': ']', '{': '}', '<': '>'}
const scores_1 = {')': 3, ']': 57, '}': 1197, '>': 25137}
const scores_2 = {'(': 1, '[': 2, '{': 3, '<': 4}

let sum = 0
let scores = []
lines.forEach(line => {
  let stack = []
  let score = 0
  for (let c of line) {
    if (c in pairs) stack.push(c)
    else {
      let last = stack.pop()
      if (pairs[last] !== c) {
        sum += scores_1[c]
          return
        }
    }
  }
  while (stack.length) {
    score *= 5
    score += scores_2[stack.pop()]
  }
  scores.push(score)
})

  console.log('Part 1:', sum)
  console.log('Part 2:', scores.sort((a,b) => a - b)[(scores.length -1) / 2])
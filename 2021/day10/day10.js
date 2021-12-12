const fs = require('fs')
const lines = fs.readFileSync('input', 'utf-8').split('\n')

const pairs  = {'(': ')', '[': ']', '{': '}', '<': '>'}
const scores_1 = {')': 3, ']': 57, '}': 1197, '>': 25137}
const scores_2 = {'(': 1, '[': 2, '{': 3, '<': 4}

const day10_1 = () => {
  let sum = 0
  for (let line of lines) {
    let stack = []
    for (let c of line) {
      if (c in pairs) stack.push(c)
      else {
        let last = stack.pop()
        if (pairs[last] !== c) sum += scores_1[c]
      }
    }
  }
  return sum
}

const day10_2 = () => {
  let scores = []
  lines.forEach(line => {
    let stack = []
    let score = 0
    for (let c of line) {
      if (c in pairs) stack.push(c)
      else {
        let last = stack.pop()
        if (pairs[last] !== c) return
      }
    }
    for (let i = stack.length - 1; i >= 0; i--) {
      score *= 5
      score += scores_2[stack[i]]
    }
    scores.push(score)
  })
  return scores.sort((a,b) => a - b)[(scores.length -1) / 2]
}

console.log('Part 1:', day10_1(), 'Part 2:', day10_2())
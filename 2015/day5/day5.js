const fs = require("fs");
const input = fs.readFileSync("input").toString('utf-8').split('\n')
// console.log(input)

const day5 = (input, func) => {
  let total = 0
  for (let line of input) {
    if (func(line)) total++
  }
  return total
}

// let test = 'dvszwmarrgswjxmb'

const niceString = line => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const disallowed = ['ab', 'cd', 'pq', 'xy']
  let vowelCount = 0
  let isNice = false
  let letRepeat = false

  for (let pair of disallowed) {
    if (line.includes(pair)) return false
  }

  for (let i = 0; i < line.length; i++) {
    if (vowels.includes(line[i])) vowelCount++
    if (line[i] === line[i+1]) letRepeat = true
  }

  if (vowelCount > 2 && letRepeat) isNice = true

  return isNice
}

const newNiceString = line => {
  return false
}

console.log("Part 1:", day5(input, niceString))
console.log("Part 2:", day5(input, newNiceString))
const fs = require("fs");
const input = fs.readFileSync("input").toString('utf-8').split('\n')

const day5 = (input, func) => input.filter(func).length

const niceString = line => {
  let vowels     = line.match(/[aieou]/g)
  let disallowed = line.match(/ab|cd|pq|xy/)
  let doubles    = line.match(/(.)\1/)

  return (vowels !== null && vowels.length > 2) && 
         (disallowed === null || disallowed.length === 0) &&
         (doubles !== null && doubles.length > 0)
}

const newNiceString = line => {
  let repeat =   line.match(/(..).*\1/)
  let sandwich = line.match(/(.).\1/)

  return (repeat !== null && repeat.length > 0) &&
         (sandwich !== null && sandwich.length > 0)
}

console.log("Part 1:", day5(input, niceString))
console.log("Part 2:", day5(input, newNiceString))
const fs = require("fs");
const input = fs.readFileSync('input', 'utf-8').split(',').map(x => parseInt(x))

const day7_1 = () => {
  let low  = Math.min(...input)
  let high = Math.max(...input)

  let lowestFuel = Infinity
  for(let i = low; i <= high; i++) {
    let fuel = input.reduce((a,b) => a + Math.abs(b - i), 0)
    if(fuel < lowestFuel) lowestFuel = fuel
  }
  return lowestFuel
}

const day7_2 = () => {
  let low  = Math.min(...input)
  let high = Math.max(...input)

  let lowestFuel = Infinity
  for(let i = low; i <= high; i++) {
    let fuel = input.reduce((a,b) => a + triangular(Math.abs(b - i)), 0)
    if(fuel < lowestFuel) lowestFuel = fuel
  }
  return lowestFuel
}

const triangular = n => (n * (n+1)) / 2

console.log('Part 1:', day7_1(), 'Part 2:', day7_2())
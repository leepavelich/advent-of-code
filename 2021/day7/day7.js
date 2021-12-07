const fs = require("fs");
const input = fs.readFileSync('input-test', 'utf-8').split(',').map(x => parseInt(x))

const day7 = func => {
  let low  = Math.min(...input)
  let high = Math.max(...input)

  let lowestFuel = Infinity
  for(let i = low; i <= high; i++) {
    let fuel = input.reduce((a,b) => a + Math.abs(b - i), 0)
    if(fuel < lowestFuel) lowestFuel = fuel
  }
  return lowestFuel
}

const absDistance = (a,b) => a + Math.abs(b - i)

console.log('Part 1:', day7(absDistance))
const fs = require("fs");
const ages = fs.readFileSync('input', 'utf-8').split(',').map(x => parseInt(x))

const day6 = days => {
  let ageCount = new Array(10).fill(0)
  for(let age of ages) ageCount[age]++

  while(days) {
    newFish = ageCount.shift()
    ageCount.push(0)
    ageCount[6] += newFish
    ageCount[8] += newFish
    days--
  }
  return ageCount.reduce((a,b) => a + b, 0)
}

console.log('Part 1:', day6(80), 'Part 2:', day6(256))
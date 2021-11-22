const fs = require("fs");
const input = fs.readFileSync("input").toString('utf-8').split('')
//console.log(input)

const day1_1 = () => {
  let floor = 0

  for (let char of input) {
    (char === '(') ? floor++ : floor--  
  }
  
  console.log(`Final floor: ${floor}`)
}

const day1_2 = () => {
  let floor = 0
  let pos   = 0

  for (let char of input) {
    (char === '(') ? floor++ : floor--
    pos++
    if (floor === -1) {
      console.log(`First position entering basement: ${pos}`)
      break
    }
  }
}

day1_1()
day1_2()
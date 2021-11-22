const fs = require("fs");
const input = fs.readFileSync("input").toString('utf-8').split('')
//console.log(input)

// const input = '()())'.split('')

let floor = 0
let pos   = 0
for (let char of input) {
  (char === '(') ? floor++ : floor--
  pos++
  if (floor === -1) {console.log(`First position entering basement: ${pos}`); break}

}

console.log(`Final floor: ${floor}`)
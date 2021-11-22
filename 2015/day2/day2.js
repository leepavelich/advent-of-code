const fs = require("fs");
const input = fs.readFileSync("input").toString('utf-8').split('\n')
//console.log(input)

//let input = ['4x23x21',  '22x29x19', '11x4x11',  '8x10x5']
//let input = ['2x3x4']

let sum = 0
let inc = 1
for (let line of input) {
  let [l, w, h] = line.split('x').map(Number)

  //Part 1:
  //console.log(l, w, h, Math.min(l*w,w*h,l*h))
  //sum += 2*(l*w + w*h + h*l) + Math.min(l*w,w*h,l*h)

  //Part2:
  sum += 2*Math.min(l+w, l+h, w+h) + l*w*h
}

console.log(`Total surface area required: ${sum}`)
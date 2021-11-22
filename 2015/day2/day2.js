const fs = require("fs");
const input = fs.readFileSync("input").toString('utf-8').split('\n')
//console.log(input)

// let input = ['2x3x4']
// let input = ['1x1x10']

const day2_1 = () => {
  let sum = 0

  for (let line of input) {
    let [l, w, h] = line.split('x').map(Number)
    sum += 2*(l*w + w*h + h*l) + Math.min(l*w,w*h,l*h)
  }

  console.log(`Total surface area required: ${sum}`)
}

const day2_2 = () => {
  let sum = 0

  for (let line of input) {
    let [l, w, h] = line.split('x').map(Number)
    sum += 2*Math.min(l+w, l+h, w+h) + l*w*h
  }

  console.log(`Total length required: ${sum}`)
}

day2_1()
day2_2()
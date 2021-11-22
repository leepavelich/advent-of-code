const fs = require("fs");
const input = fs.readFileSync("input").toString('utf-8').split('')

const day3_1 = () => {
  let houses = {house0_0: 1}
  let [x, y] = [0, 0]

  for (let dir of input) {
    switch (dir) {
      case '>': x++; break
      case '<': x--; break
      case '^': y++; break
      case 'v': y--; break
    }

    houses[`house${x}_${y}`]++
  }

  console.log('Total houses visited:', Object.keys(houses).length)
}

day3_1()
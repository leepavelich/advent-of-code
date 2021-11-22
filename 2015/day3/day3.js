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

const day3_2 = () => {
  let houses = {house0_0: 1}
  let [xS, yS, xR, yR] = [0, 0, 0, 0] // S = Santa, R = Robo-Santa

  for (let dir = 0; dir < input.length-1; dir += 2) {
    switch (input[dir]) {
      case '>': xS++; break
      case '<': xS--; break
      case '^': yS++; break
      case 'v': yS--; break
    }

    switch (input[dir+1]) {
      case '>': xR++; break
      case '<': xR--; break
      case '^': yR++; break
      case 'v': yR--; break
    }

    houses[`house${xS}_${yS}`]++
    houses[`house${xR}_${yR}`]++
  }

  console.log('Total houses visited:', Object.keys(houses).length)
}

day3_1()
day3_2()
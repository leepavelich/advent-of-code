const fs = require("fs")
const input = fs.readFileSync('input', 'utf-8').split(',').map(x => parseInt(x))

const day7 = func => {
  let min = Math.min(...input)
  let max = Math.max(...input)

  let fuel = []
  for(let i of range(min,max)) fuel.push(input.reduce((a,b) => a + func(b - i), 0))
  return Math.min(...fuel)
}

const abs = n => Math.abs(n)
const triangular = n => (Math.abs(n) * (Math.abs(n)+1)) / 2

// solution from reddit using calculus df/dk = 0
// let k = input.reduce((a,b) => a + b) / input.length
// let kp = Math.floor(k)
// let km = Math.ceil(k)
// let f = [0,0,0]
// for(let i = 0; i < input.length; i++) {
//   f[0] += triangular(k  - input[i])
//   f[1] += triangular(kp - input[i])
//   f[2] += triangular(km - input[i])
// }
// console.table([[k, kp, km], f])

const range = (from, to, step=1) => {
    return [...Array(Math.floor((to - from) / step) + 1)].map((_, i) => from + i * step)
}

console.log('Part 1:', day7(abs), 'Part 2:', day7(triangular))
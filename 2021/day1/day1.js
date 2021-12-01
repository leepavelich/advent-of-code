const fs = require("fs");
const input = fs.readFileSync("input", 'utf-8').split('\n').map(l => parseInt(l))

const day1_1 = () => console.log(input.map((x,i) => x > input[i-1]).filter(Boolean).length)

const day1_2 = () => {
  let windows = input.map((x,i) => i>1 ? x+input[i-1]+input[i-2] : undefined)
  console.log(windows.map((x,i) => x > windows[i-1]).filter(Boolean).length)
}

day1_1()
day1_2()
const fs = require("fs");
const input = fs.readFileSync("input", 'utf-8').split('\n').map(l => parseInt(l))

const day1 = n => input.map((x,i) => x > input[i-n]).filter(Boolean).length

console.log("Part 1:", day1(1), "Part 2:", day1(3))
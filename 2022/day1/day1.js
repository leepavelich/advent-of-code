import { readFileSync } from "fs";
const lines = readFileSync("input", "utf-8")
  .split("\n")
  .map((x) => Number(x));

lines.push(0);

let sums = [];
let sum = 0;

for (const line of lines) {
  if (line == 0) {
    sums.push(sum);
    sum = 0;
  } else {
    sum += line;
  }
}

sums = sums.sort((a, b) => b - a);

console.log("Largest:", sums[0]);
console.log("Three largest:", sums[0] + sums[1] + sums[2]);

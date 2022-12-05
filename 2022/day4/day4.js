import { readFileSync } from "fs";
const lines = readFileSync(process.argv.at(-1), "utf-8")
  .trim()
  .split("\n")
  .map((l) => l.split(",").map((a) => a.split("-").map((x) => Number(x))));

const q1 = (a, b, x, y) => (a <= x && b >= y) || (a >= x && b <= y);
const q2 = (a, b, x, y) => a <= y && b >= x;

console.log("P1:", lines.filter(([[a, b], [x, y]]) => q1(a, b, x, y)).length);
console.log("P2:", lines.filter(([[a, b], [x, y]]) => q2(a, b, x, y)).length);

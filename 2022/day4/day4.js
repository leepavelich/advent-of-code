import { read } from "../../utils/js/io.js";
import "../../utils/js/array.js";

const lines = read()
  .trim()
  .split("\n")
  .map((l) => l.split(/-|,/).toNum());

const q1 = (a, b, x, y) => (a <= x && b >= y) || (a >= x && b <= y);
const q2 = (a, b, x, y) => a <= y && b >= x;

console.log("P1:", lines.filter(([a, b, x, y]) => q1(a, b, x, y)).length);
console.log("P2:", lines.filter(([a, b, x, y]) => q2(a, b, x, y)).length);

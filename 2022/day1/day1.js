import { read } from "../../utils/js/io.js";
import "../../utils/js/array.js";

const lines = read()
  .split("\n\n")
  .map((e) => e.split("\n").toNum().sum());

console.log("P1:", lines.largest());
console.log("P2:", lines.largest(3).sum());

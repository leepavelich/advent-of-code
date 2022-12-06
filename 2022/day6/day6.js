import { read } from "../../utils/js/io.js";
import "../../utils/js/array.js";

const input = read().trim().split("");

const packet = (n) =>
  input.findIndex((e, i) => input.slice(i, i + n).uniq().length === n) + n;

console.log("P1:", packet(4));
console.log("P2:", packet(14));

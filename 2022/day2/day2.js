import { read } from "../../utils/js/read.js";
import "../../utils/js/array.js";

const lines = read("input").map((line) =>
  line
    .split(" ")
    .map((c) => c.charCodeAt())
    .map((v) => (v < 80 ? v - 65 : v - 88))
);

const payoffs = [
  [3, 6, 0],
  [0, 3, 6],
  [6, 0, 3],
];
const results = payoffs[1];

const first = ([opp, player]) => player + payoffs[opp][player] + 1;
const second = ([opp, outcome]) =>
  results[outcome] + payoffs[opp].indexOf(results[outcome]) + 1;

console.log("First sum:", lines.sum(first));
console.log("Second sum:", lines.sum(second));

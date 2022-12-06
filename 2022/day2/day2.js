import { read } from "../../utils/js/io.js";
import "../../utils/js/array.js";
import { split } from "lodash";

const lines = read()
  .split("\n")
  .map((line) =>
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

const q1 = ([opp, player]) => player + payoffs[opp][player] + 1;
const q2 = ([opp, outcome]) =>
  results[outcome] + payoffs[opp].indexOf(results[outcome]) + 1;

console.log("P1:", lines.sum(q1));
console.log("P2:", lines.sum(q2));

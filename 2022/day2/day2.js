import { readFileSync } from "fs";
const lines = readFileSync("input", "utf-8")
  .trim()
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

const first = (prev, [opp, player]) => prev + player + payoffs[opp][player] + 1;
const second = (prev, [opp, outcome]) =>
  prev + results[outcome] + payoffs[opp].indexOf(results[outcome]) + 1;

console.log("First sum:", lines.reduce(first, 0));
console.log("Second sum:", lines.reduce(second, 0));

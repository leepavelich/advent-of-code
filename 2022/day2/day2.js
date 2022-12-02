import { readFileSync } from "fs";
const lines = readFileSync("input", "utf-8")
  .trim()
  .split("\n")
  .map((l) => l.split(" "))
  .map((l) =>
    l.map((c) => c.charCodeAt()).map((v) => (v < 80 ? v - 65 : v - 88))
  );

const transpose = (matrix) => {
  return matrix[0].map((col, i) => matrix.map((row) => row[i]));
};

const payoffs = [
  [3, 0, 6],
  [6, 3, 0],
  [0, 6, 3],
];

const res = [0, 3, 6];

const first = (prev, [theirs, mine]) => prev + mine + payoffs[mine][theirs] + 1;
const second = (prev, [theirs, outcome]) =>
  prev + res[outcome] + transpose(payoffs)[theirs].indexOf(res[outcome]) + 1;

console.log("First sum:", lines.reduce(first, 0));
console.log("Second sum:", lines.reduce(second, 0));

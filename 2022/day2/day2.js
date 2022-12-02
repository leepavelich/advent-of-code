import { readFileSync } from "fs";
const lines = readFileSync("input", "utf-8")
  .trim()
  .split("\n")
  .map((l) => l.split(" "))
  .map((l) =>
    l.map((c) => c.charCodeAt()).map((v) => (v < 80 ? v - 65 : v - 88))
  );

const payoffs = [
  [3, 6, 0],
  [0, 3, 6],
  [6, 0, 3],
];

const res = payoffs[1];

const first = (prev, [theirs, mine]) => prev + mine + payoffs[theirs][mine] + 1;
const second = (prev, [theirs, outcome]) =>
  prev + res[outcome] + payoffs[theirs].indexOf(res[outcome]) + 1;

console.log("First sum:", lines.reduce(first, 0));
console.log("Second sum:", lines.reduce(second, 0));

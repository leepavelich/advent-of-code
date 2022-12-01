import { readFileSync } from "fs";

const sum = (prev, curr) => prev + curr;

const lines = readFileSync("input", "utf-8")
  .split("\n\n")
  .map((e) =>
    e
      .split("\n")
      .map((c) => Number(c))
      .reduce(sum, 0)
  )
  .sort((a, b) => a - b);

console.log("Largest:", lines.at(-1));
console.log("Three largest:", lines.slice(-3).reduce(sum, 0));

import { readFileSync } from "fs";

const sum = (prev, curr) => prev + curr;

const lines = readFileSync("input", "utf-8")
  .split("\n\n")
  .map((elf) =>
    elf
      .split("\n")
      .map((cal) => Number(cal))
      .reduce(sum, 0)
  )
  .sort((a, b) => a - b);

console.log("Largest:", lines.at(-1));
console.log("Three largest:", lines.slice(-3).reduce(sum, 0));

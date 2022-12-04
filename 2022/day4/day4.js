import { readFileSync } from "fs";
import _ from "lodash";

const lines = readFileSync(process.argv.at(-1), "utf-8")
  .trim()
  .split("\n")
  .map((l) =>
    l
      .split(",")
      .map((a) => a.split("-").map((x) => Number(x)))
      .map(([f, s]) => _.range(f, s + 1))
  );

const q1 = (A, B) =>
  _.difference(A, B).length === 0 || _.difference(B, A).length === 0;
const q2 = (A, B) => _.intersection(A, B).length > 0;

console.log("Problem 1:", lines.filter(([A, B]) => q1(A, B)).length);
console.log("Problem 2:", lines.filter(([A, B]) => q2(A, B)).length);

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

console.log(
  "First sum:",
  lines.reduce(
    (prev, [theirs, mine]) => prev + mine + payoffs[mine][theirs] + 1,
    0
  )
);

const transposed = transpose(payoffs);

const outcomes = [0, 3, 6];

console.log(
  "Second sum:",
  lines.reduce(
    (prev, [theirs, outcome]) =>
      prev +
      outcomes[outcome] +
      transposed[theirs].indexOf(outcomes[outcome]) +
      1,
    0
  )
);

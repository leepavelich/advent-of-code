import { readFileSync } from "fs";
const lines = readFileSync("input", "utf-8")
  .trim()
  .split("\n")
  .map((l) => l.split(" "));

const transpose = (matrix) => {
  return matrix[0].map((col, i) => matrix.map((row) => row[i]));
};

const payoffs = [
  [3, 0, 6],
  [6, 3, 0],
  [0, 6, 3],
];

const transposed = transpose(payoffs);

const moves = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
};

let sum = 0;

for (let line of lines) {
  let [theirs, mine] = line;
  sum += moves[mine] + payoffs[moves[mine] - 1][moves[theirs] - 1];
}

console.log("First sum:", sum);

sum = 0;

const games = {
  A: 0,
  B: 3,
  C: 6,
  X: 0,
  Y: 3,
  Z: 6,
};

for (let line of lines) {
  let [theirs, condition] = line;
  sum +=
    games[condition] +
    transposed[moves[theirs] - 1].indexOf(games[condition]) +
    1;
}

import { readFileSync } from "fs";
const lines = readFileSync("input", "utf-8").trim().split("\n");

const q1Max = { red: 12, green: 13, blue: 14 };

const [q1, q2] = lines.reduce(
  ([acc1, acc2], line) => {
    const [, id, reveals] = line.match(/Game (\d+): (.+)/);
    const pairs = [...reveals.matchAll(/(\d+) (\w+)/g)].map(match => [Number(match[1]), match[2]]);
    const maxes = pairs.reduce((max, [num, color]) => ({ ...max, [color]: Math.max(max[color] || 0, num) }), {});
    const prod = maxes.red * maxes.blue * maxes.green;

    return [acc1 + (pairs.every(([num, col]) => q1Max[col] >= num) ? Number(id) : 0), acc2 + prod];
  },
  [0, 0]
);

console.log("q1:", q1);
console.log("q2:", q2);

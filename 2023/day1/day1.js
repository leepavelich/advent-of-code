import { readFileSync } from "fs";
const lines = readFileSync("input", "utf-8").trim().split("\n");

const nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

let [q1, q2] = [0, 0];
for (const line of lines) {
  let [q1Digits, q2Digits] = [[], []];

  [...line].forEach((c, i) => {
    if (Number(c)) q1Digits.push(Number(c)), q2Digits.push(Number(c));
    nums.forEach((w, idx) => line.slice(i).startsWith(w) && q2Digits.push(idx));
  });

  q1 += 10 * q1Digits[0] + q1Digits.at(-1);
  q2 += 10 * q2Digits[0] + q2Digits.at(-1);
}

console.log("q1:", q1);
console.log("q2:", q2);

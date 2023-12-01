import { readFileSync } from "fs";
const lines = readFileSync("input", "utf-8").trim().split("\n");

const numDict = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

let [q1, q2] = [0, 0];
for (const line of lines) {
  let q1Digits = [];
  let q2Digits = [];
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (!isNaN(Number(c))) {
      q1Digits.push(c);
      q2Digits.push(c);
      continue;
    }

    for (const word in numDict) {
      if (line.slice(i).startsWith(word)) {
        q2Digits.push(numDict[word]);
        i++;
      }
    }
  }
  q1 += 10 * Number(q1Digits[0]) + Number(q1Digits.at(-1));
  q2 += 10 * Number(q2Digits[0]) + Number(q2Digits.at(-1));
}

console.log("q1:", q1);
console.log("q2:", q2);

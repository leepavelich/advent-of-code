import { readFileSync } from "fs";
const lines = readFileSync("input", "utf-8").trim().split("\n");

const maxes = { red: 12, green: 13, blue: 14 };

let q1 = 0;

for (const line of lines) {
  const [game, reveals] = line.split(":");
  const id = game.split(" ")[1];

  const allRevealsValid = reveals.split(";").every(reveal =>
    reveal.split(",").every(pair => {
      const [num, col] = pair.trim().split(" ");
      return maxes[col] >= Number(num);
    })
  );

  if (allRevealsValid) {
    q1 += Number(id);
  }
}

let q2 = 0;

for (const line of lines) {
  const [_, reveals] = line.split(":");
  const maxValues = {};

  reveals
    .split(";")
    .map(r =>
      r
        .trim()
        .split(",")
        .map(r => r.trim().split(" "))
    )
    .forEach(group => {
      group.forEach(([num, color]) => {
        if (!maxValues[color] || Number(num) > maxValues[color]) {
          maxValues[color] = Number(num);
        }
      });
    });

  q2 += maxValues.red * maxValues.blue * maxValues.green;
}

console.log("q1:", q1);
console.log("q2:", q2);

import { readFileSync } from "fs";
const lines = readFileSync(process.argv.at(-1), "utf-8").split("\n\n");

let stacks = lines[0].split("\n");
let columnNum = stacks.pop().trim().split(/\s+/).length;
let crates = stacks.reverse();
let moves = lines[1]
  .trim()
  .split("\n")
  .map((m) => m.split(" "))
  .map(([m, i1, f, i2, t, i3]) => [i1, i2, i3].map((x) => Number(x)));

const columns = [];
for (let row of crates) {
  for (let i = 0; i < columnNum; i += 1) {
    let c = row[1 + i * 4];
    if (c === " ") continue;
    if (!columns[i]) {
      columns.push([c]);
    } else {
      columns[i].push(c);
    }
  }
}

let q1 = JSON.parse(JSON.stringify(columns));
let q2 = JSON.parse(JSON.stringify(columns));

for (let move of moves) {
  const [num, from, to] = move;
  let temp = [];
  for (let n = 0; n < num; n++) {
    let item1 = q1[from - 1].pop();
    let item2 = q2[from - 1].pop();
    q1[to - 1].push(item1);
    temp.push(item2);
  }
  q2[to - 1].push(temp.reverse());
  q2[to - 1] = q2[to - 1].flat();
}

console.log("P1:", q1.map((c) => c.at(-1)).join(""));
console.log("P2:", q2.map((c) => c.at(-1)).join(""));

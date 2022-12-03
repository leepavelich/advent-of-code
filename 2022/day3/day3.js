import { readFileSync } from "fs";

const priority = (c) => {
  const v = c.charCodeAt();
  return v > 96 ? v - 96 : v - 38;
};

const uniqueChars = (chars) =>
  chars.filter((c, index) => chars.indexOf(c) === index);

const removeDuplicates = (string) => uniqueChars(string.split("")).join("");

const lines = readFileSync("input", "utf-8").split("\n");

let rucksacks = lines.map((l) =>
  [l.slice(0, l.length / 2), l.slice(-l.length / 2)].map((s) =>
    removeDuplicates(s)
  )
);

let sum = 0;

for (let rucksack of rucksacks) {
  const [first, second] = rucksack;
  first.split("").forEach((c) => (sum += second.includes(c) ? priority(c) : 0));
}

console.log("Part 1:", sum);

sum = 0;

rucksacks = lines.reduce((ret, item, index) => {
  const n = Math.floor(index / 3);

  if (!ret[n]) {
    ret[n] = []; // start a new chunk
  }

  ret[n].push(item);

  return ret;
}, []);

rucksacks = rucksacks.map((s) => s.map((r) => removeDuplicates(r)));

for (let rucksack of rucksacks) {
  const [first, second, third] = rucksack;
  first
    .split("")
    .forEach(
      (c) => (sum += second.includes(c) && third.includes(c) ? priority(c) : 0)
    );
}

console.log("Second sum:", sum);

import { readFileSync } from "fs";

const priority = (c) => {
  const v = c.charCodeAt();
  return v > 96 ? v - 96 : v - 38;
};

const uniqueChars = (chars) =>
  chars.filter((c, index) => {
    return chars.indexOf(c) === index;
  });

const removeDuplicates = (string) => {
  return uniqueChars(string.split("")).join("");
};

const lines = readFileSync("input", "utf-8")
  .split("\n")
  .map((l) =>
    [l.slice(0, l.length / 2), l.slice(-l.length / 2)].map((s) =>
      removeDuplicates(s)
    )
  );

let sum = 0;

for (let line of lines) {
  const [first, second] = line;
  first.split("").forEach((c) => (sum += second.includes(c) ? priority(c) : 0));
}

console.log(sum);

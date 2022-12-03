import { readFileSync } from "fs";
import _ from "lodash";

const lines = readFileSync("input", "utf-8").trim().split("\n");

const priority = (c) => {
  const v = c.charCodeAt();
  return v > 96 ? v - 96 : v - 38;
};

let rucksacks = lines.map((l) =>
  [l.slice(0, l.length / 2), l.slice(-l.length / 2)].map((s) =>
    _.uniq(s).join("")
  )
);

const q1 = (prev, [first, second]) =>
  prev + priority(_.intersection(first.split(""), second.split(""))[0]);

console.log("Part 1:", rucksacks.reduce(q1, 0));

rucksacks = _.chunk(lines, 3).map((s) =>
  s.map((r) => _.uniq(r.split("")).join(""))
);

const q2 = (prev, [first, second, third]) =>
  prev +
  priority(
    _.intersection(first.split(""), second.split(""), third.split(""))[0]
  );

console.log("Second sum:", rucksacks.reduce(q2, 0));

import { readFileSync } from "fs";

export const read = (input) => readFileSync(input, "utf-8").trim().split("\n");

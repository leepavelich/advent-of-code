import { readFileSync } from "fs";

export const read = () => readFileSync(process.argv.at(-1), "utf-8");

import { mkdirSync, writeFileSync } from "node:fs";

// Deterministic one-line entry: the same fixed line is written on every run.
const line = "One star. He visits every single day, smells like every dog in town, and in six years has never once brought me a treat.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);

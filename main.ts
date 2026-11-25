// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line to <output>/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smartwatch congratulates me for standing up, then watches me sit back down for the next eleven hours.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";

// Gate self-check: the entry must be 1-200 chars, non-blank, a single line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} chars, must be 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be non-blank and a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${LINE.length} chars)`);

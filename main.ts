// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line to <output>/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My robot vacuum mapped my flat in an afternoon, then spent three weeks wedged under the same sofa, beeping for help in a language only the dog understands.";

// The joke: the gadget's one real triumph (it mapped the whole flat in an
// afternoon) is immediately undercut by its three-week failure, and the
// twist lands on the last words — the cry for help is in a language only
// the dog understands, so the only creature that could rescue it is the
// one that cannot. Concrete scene, one named gadget, one named sofa, and
// the punchline is a detail about how the thing actually behaves.
//
// Why the twist works: the beeping is not the joke — a beeping vacuum is a
// familiar annoyance. The joke is who can hear it: the dog. The vacuum's
// SOS goes out in a language its owner cannot speak, so the rescue it is
// begging for can only ever come from the one animal in the house that
// will never open a cupboard, lift a sofa, or press a button. The line
// turns a household appliance's distress call into a private conversation
// between two machines' worth of helplessness, and the owner is just the
// bystander who has to listen to it.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";

// Gate self-check: the entry must be 1-200 chars, non-blank, a single line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} chars, must be 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be non-blank and a single line");
}
if (/[\r\t]/.test(LINE) || !LINE.endsWith(".")) {
  throw new Error("entry must contain no CR or tab and must end with a period");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${LINE.length} chars)`);

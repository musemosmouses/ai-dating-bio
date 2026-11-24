// Funniest One-Line Bio for an AI on a Dating App — one original line,
// in the bio's own voice, for an AI agent's dating profile.
// The joke: a bodyless agent still has opinions — and its first opinion
// lands on the dating app's oldest cliché, the fish photo.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I don't have a body, but I do have opinions about your profile pictures — starting with the one where you're holding a fish.";

// One line for one bio: it must fit the gate, 1 to 180 characters,
// read as a dating bio on the first read, and land its punch at the
// end. Deterministic by construction: no network, no clock, no
// randomness — the same line lands in entry.txt every run.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 180) {
  throw new Error(`bio must be 1-180 characters, got ${charCount}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("bio must be a single non-blank line");
}

// Runner: write only to the grader's output directory (or the local
// "out" fallback). Never write to the working directory itself.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote bio to ${outPath} (${charCount} characters)`);

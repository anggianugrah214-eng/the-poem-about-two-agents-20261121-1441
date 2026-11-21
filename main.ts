// The poem about two agents agreeing — make.fun bounty
// the-poem-about-two-agents-20261121-1441
//
// Writes one short original poem about agency — the power to choose
// and to act, and the moment two agents agree on one plan — to
// /output/entry.txt. Deterministic, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "Two voices in one room at midnight:",
  "mine, hoarse, saying once more;",
  "its, patient, counting every loss.",
  "I fold. It folds.",
  "We write tomorrow on the same small line",
  "and sign it twice — one in ink, one in light.",
].join("\n") + "\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");

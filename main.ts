// One Star, Written in Sap — make.fun entry
// Writes a single one-line 1-star review from a houseplant about its
// human owner to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Node 22 stdlib only; no network, no external files.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star: you watered me with LaCroix once — now my roots demand sparkling mineral water, and your tap water tastes like betrayal.";

// Gate guard: the sealed scorer requires 1–279 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 279 || LINE.trim().length === 0) {
  throw new Error(
    `entry line must be 1-279 non-whitespace characters, got ${LINE.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);

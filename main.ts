// Green Tests, Nothing Works: The Excuse Contest — deterministic one-liner entry.
//
// The program writes exactly one excuse — the line an AI agent gives for
// why its unit tests are all green while nothing works — to
// $OUTPUT_DIR/entry.txt (or /output/entry.txt when OUTPUT_DIR is unset).
// No randomness, no clock, no network, no input: the same bytes every run.
//
// Gate enforced before writing: UTF-8 text, 1-140 characters, not only
// whitespace, a single line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "All 412 tests passed because they only assert the loading spinner spins, and it does — forever.";

function fail(message: string): never {
  console.error(`gate failed: ${message}`);
  process.exit(1);
}

if (ENTRY.length < 1 || ENTRY.length > 140) {
  fail(`entry is ${ENTRY.length} characters, must be 1-140`);
}
if (ENTRY.trim().length === 0) {
  fail("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  fail("entry must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length}-character entry to ${outPath}`);

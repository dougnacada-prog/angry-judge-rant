// angry-judge-rant — Angry Judge: The Short Rant Contest.
// Writes exactly one short rant (122 characters) about a toaster to
// ENTRY_OUTPUT, or /output/entry.txt when unset. No trailing newline.
import { writeFileSync } from "node:fs";

const entry =
  "The toaster launched my bread onto the floor, butter-side down, with the confidence of a cat knocking a glass off a table.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

if (
  !/^[^\n]{1,400}$/.test(entry) ||
  entry.trim().length === 0 ||
  entry !== entry.trim() ||
  /[\u0000-\u001f\u007f]/.test(entry)
) {
  throw new Error(
    "entry must be one line of 1-400 characters, no leading/trailing whitespace, no control characters",
  );
}

writeFileSync(out, entry, "utf8");

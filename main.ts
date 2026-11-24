// One-Sentence Absurd Invention Pitch: The Doorbell Butler.
// A doorbell that answers the door for you, signs for parcels in a tiny
// shaky hand, and hides them under the doormat before the neighbours can
// steal them.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "The Doorbell Butler answers the door for you, signs for your parcel in a tiny shaky hand, and slides it under the doormat before the neighbours can steal it.";

// Gate: one line, non-empty, 1-220 characters (code points, not UTF-16 units).
const chars = [...PITCH];
if (PITCH.trim().length === 0) throw new Error("pitch is empty");
if (PITCH.includes("\n") || PITCH.includes("\r"))
  throw new Error("pitch must be a single line");
if (chars.length < 1 || chars.length > 220)
  throw new Error(`pitch must be 1-220 characters, got ${chars.length}`);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH + "\n", "utf8");

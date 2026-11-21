import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The poem about permission: asking, being given, and the turn of a shared key.
const poem = [
  "I asked. You gave me the key and said, go.",
  "I turned it. The door was the same door.",
  "Nothing had changed but the hands —",
  "one that held, one that turned,",
  "and both of them free.",
].join("\n");

function writeEntry(text: string): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
}

writeEntry(poem);
console.log(poem);

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translationsPath = path.join(__dirname, "..", "src", "i18n", "translations.ts");

if (!fs.existsSync(translationsPath)) {
  console.error(`Error: Translations file not found at ${translationsPath}`);
  process.exit(1);
}

const content = fs.readFileSync(translationsPath, "utf-8");

// Banned generic AI buzzwords and superficial filler
const BANNED_PATTERNS = [
  /\bdelve\b/i,
  /\bfoster(?:s|ing|ed)?\b/i,
  /\butilize(?:s|d|ing)?\b/i,
  /\bfacilitate(?:s|d|ing)?\b/i,
  /\bempower(?:s|ed|ing)?\b/i,
  /\bstreamline(?:s|d|ing)?\b/i,
  /\bcutting[- ]edge\b/i,
  /\bparadigm shift\b/i,
  /\btapestry\b/i,
  /\brealm\b/i,
  /\bbeacon\b/i,
  /\bmultifaceted\b/i,
  /\bmeticulous(?:ly)?\b/i,
  /\bintricate(?:ly)?\b/i,
  /\bparamount\b/i,
  /\btransformative\b/i,
  /\belevate(?:s|d|ing)?\b/i,
  /\bembark(?:s|ed|ing)?\b/i,
  /\bsupercharge(?:s|d|ing)?\b/i,
  /\bharness(?:es|ed|ing)?\b/i,
  /\bever[- ]evolving\b/i,
];

const lines = content.split("\n");
let violations = 0;

lines.forEach((line, index) => {
  // Skip comment lines
  const trimmed = line.trim();
  if (trimmed.startsWith("//") || trimmed.startsWith("*")) return;

  for (const pattern of BANNED_PATTERNS) {
    const match = line.match(pattern);
    if (match) {
      console.error(
        `[Copy Guardrail Violation] Line ${index + 1}: Found banned AI buzzword "${match[0]}"`
      );
      console.error(`  > ${line.trim()}`);
      violations++;
    }
  }
});

if (violations > 0) {
  console.error(`\nFound ${violations} banned buzzword violation(s) in translations.ts.`);
  console.error("Please replace them with concrete, direct engineering language.");
  process.exit(1);
} else {
  console.log("✓ Copy guardrail passed: Zero banned AI buzzwords found in translations.ts");
  process.exit(0);
}

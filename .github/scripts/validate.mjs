import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const repoRoot = resolve(import.meta.dirname, "..", "..");

globalThis.Audio = class {
  constructor(src) {
    this.src = src;
  }
  play() {}
  pause() {}
};

const importFromRepo = (relPath) =>
  import(pathToFileURL(join(repoRoot, relPath)).href);

const { gameData } = await importFromRepo("scripts/gameData.js");
const { questionData } = await importFromRepo("scripts/questionData.js");

const flaggedSteps = gameData.filter((step) => step.thereIsQuestion).length;
const questions = questionData.length;

if (flaggedSteps !== questions) {
  console.error(
    `❌ Dialogue/question lockstep is broken.\n` +
      `   gameData has ${flaggedSteps} step(s) with thereIsQuestion: true\n` +
      `   questionData has ${questions} question(s)\n` +
      `   These arrays are consumed in lockstep by nextStep() — every flagged\n` +
      `   step shifts one question off questionData. If they drift, players see\n` +
      `   the wrong question (or a crash) at the wrong moment.`,
  );
  process.exit(1);
}

console.log(
  `✓ Lockstep OK: ${flaggedSteps} flagged step(s) match ${questions} question(s)`,
);

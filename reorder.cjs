const fs = require('fs');

const content = fs.readFileSync('src/App.tsx', 'utf-8');
const lines = content.split('\n');

// Helper to extract a block
function getBlock(startLine, endLine) {
  // lines are 0-indexed, so line 817 is index 816
  return lines.slice(startLine - 1, endLine).join('\n');
}

const beforeA = lines.slice(0, 816).join('\n');
const blockA = getBlock(817, 852);
const blockB = getBlock(854, 939);
const blockC = getBlock(941, 986);
const blockD = getBlock(988, 1016);
const blockE = getBlock(1018, 1078);
const blockF = getBlock(1080, 1131);
const blockG = getBlock(1133, 1193);
const blockH = getBlock(1195, 1223);
const blockI = getBlock(1225, 1284);
const afterI = lines.slice(1284).join('\n'); // from line 1285 onwards

// Target order: F, E, H, G, B, C, I, D, A
const newContent = [
  beforeA,
  blockF,
  "",
  blockE,
  "",
  blockH,
  "",
  blockG,
  "",
  blockB,
  "",
  blockC,
  "",
  blockI,
  "",
  blockD,
  "",
  blockA,
  afterI
].join('\n');

fs.writeFileSync('src/App.tsx', newContent);
console.log("Reordering complete.");

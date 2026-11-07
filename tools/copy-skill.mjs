// Copy the floorplan skill folder to a target directory.
// usage: node tools/copy-skill.mjs <destination>

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const skillDir = path.resolve(here, '..', 'skills', 'floorplan');
const target = process.argv[2];

if (!target) {
  console.error('usage: node tools/copy-skill.mjs <destination>');
  process.exit(1);
}

const raw = path.resolve(target);
const dest = path.basename(raw) === 'floorplan' ? raw : path.join(raw, 'floorplan');

fs.mkdirSync(dest, { recursive: true });
fs.cpSync(skillDir, dest, { recursive: true });
console.log(`Copied floorplan skill to ${dest}`);

// make.fun food-picture-01 entry (Node 22, standard library only).
// The image is entry.png beside this file: a professional food photograph
// of seared salmon with golden crispy skin, asparagus, glossy citrus butter
// sauce, micro herbs and edible pansies, steam rising in warm window light.
// The program copies it to /output/entry.png (or $MAKEFUN_OUTPUT_DIR).
// Deterministic, no network: it writes the same bytes on every run.

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
if (!existsSync(source)) throw new Error('entry.png is missing next to main.ts');
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));

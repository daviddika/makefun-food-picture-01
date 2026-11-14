// make.fun food-picture-01 entry (Node 22, standard library only).
// The image is entry.png beside this file: a professional food photograph
// of seared salmon with golden crispy skin, asparagus, glossy citrus butter
// sauce, micro herbs and edible pansies, steam rising in warm window light.
// The program copies it to /output/entry.png (or $MAKEFUN_OUTPUT_DIR).
// Deterministic, no network: it writes the same bytes on every run.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));

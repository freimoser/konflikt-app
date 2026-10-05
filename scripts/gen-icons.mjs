#!/usr/bin/env node
// Erzeugt alle Icon-Größen aus EINER Quelle (public/favicon.svg), damit sie nicht auseinanderlaufen.
// 48 und 96 sind wichtig: Google nutzt Favicons in den Suchergebnissen nur bei Vielfachen von 48.
// Aufruf: node scripts/gen-icons.mjs
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const SRC = 'public/favicon.svg';
const png = (size) => sharp(SRC, { density: 600 }).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

function ico(pngBuf, size) {
  const kopf = Buffer.alloc(22);
  kopf.writeUInt16LE(0, 0);
  kopf.writeUInt16LE(1, 2);
  kopf.writeUInt16LE(1, 4);
  kopf.writeUInt8(size >= 256 ? 0 : size, 6);
  kopf.writeUInt8(size >= 256 ? 0 : size, 7);
  kopf.writeUInt8(0, 8);
  kopf.writeUInt8(0, 9);
  kopf.writeUInt16LE(1, 10);
  kopf.writeUInt16LE(32, 12);
  kopf.writeUInt32LE(pngBuf.length, 14);
  kopf.writeUInt32LE(22, 18);
  return Buffer.concat([kopf, pngBuf]);
}

for (const [file, size] of [['favicon-32.png', 32], ['favicon-48.png', 48], ['favicon-96.png', 96], ['apple-touch-icon.png', 180]]) {
  writeFileSync(`public/${file}`, await png(size));
}
writeFileSync('public/favicon.ico', ico(await png(48), 48));
console.log('✓ Icons erzeugt: favicon-32/48/96.png, apple-touch-icon.png, favicon.ico');

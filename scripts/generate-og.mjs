#!/usr/bin/env node
// Erzeugt das Standard-Open-Graph-Bild public/og/konfliktlotse.png (1200×630).
// Nur neu ausführen, wenn sich Marke/Claim ändern: node scripts/generate-og.mjs
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#F8F9FA"/>
  <rect x="0" y="0" width="1200" height="630" fill="#1B4332"/>
  <circle cx="1040" cy="120" r="260" fill="#2D6A4F"/>
  <circle cx="1120" cy="560" r="180" fill="#40916C" opacity="0.55"/>
  <g font-family="Helvetica, Arial, sans-serif" fill="#FFFFFF">
    <text x="90" y="190" font-size="40" font-weight="700" fill="#F4A261">KONFLIKTLOTSE</text>
    <text x="90" y="300" font-size="72" font-weight="700">Vom Konflikt zum</text>
    <text x="90" y="385" font-size="72" font-weight="700">klaren Gespräch.</text>
    <text x="90" y="470" font-size="34" fill="#D8F3DC">Konkrete Worte und ein Plan – für Partner:in,</text>
    <text x="90" y="518" font-size="34" fill="#D8F3DC">Job, Familie, Freundschaft und Nachbarschaft.</text>
  </g>
  <rect x="90" y="560" width="220" height="8" rx="4" fill="#F4A261"/>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og/konfliktlotse.png');
console.log('✓ public/og/konfliktlotse.png');

// Erzeugt /ads.txt nur, wenn AdSense aktiviert ist (PUBLIC_ADSENSE_CLIENT).
// Ohne Kennung entsteht keine Datei – es wird nichts vorgetäuscht.
import type { APIRoute } from 'astro';
import { ADS_ENABLED, ADSENSE_CLIENT } from '../config/site';

export function getStaticPaths() {
  return ADS_ENABLED ? [{ params: { adsfile: 'ads' } }] : [];
}

export const GET: APIRoute = () => {
  const pub = ADSENSE_CLIENT.replace(/^ca-/, '');
  return new Response(`google.com, ${pub}, DIRECT, f08c47fec0942fa0\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

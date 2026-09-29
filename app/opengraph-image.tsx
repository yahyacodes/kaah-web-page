import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'Kaah Travel & Cargo Agency LTD — From Here to the World.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), 'public/brand/kaah-logo.jpeg'));
  const src = `data:image/jpeg;base64,${logo.toString('base64')}`;
  return new ImageResponse(
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%', padding: '48px 70px', color: '#f5f9fc', background: 'linear-gradient(120deg, #103e60, #0d6bab 68%, #367746)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', width: 360, height: 136, borderRadius: 12, background: '#fff', overflow: 'hidden', position: 'relative' }}><img src={src} alt="Kaah Travel & Cargo Agency LTD" width={394} height={304} style={{ position: 'absolute', left: -13, top: -80 }} /></div>
        <span style={{ fontSize: 21, color: '#e0eced' }}>From Here to the World.</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', fontSize: 78, lineHeight: 1.05, letterSpacing: '-3px' }}><span>Travel Further.</span><span>Send Smarter.</span></div>
      <div style={{ display: 'flex', alignItems: 'center', fontSize: 23 }}><span style={{ background: '#55b146', color: '#092e45', padding: '16px 28px', borderRadius: 50 }}>Flights · Cargo · Personal support</span></div>
    </div>, size,
  );
}

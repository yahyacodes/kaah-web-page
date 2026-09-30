import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

/** Creates the browser icon by cropping the original company logo. */
export default async function Icon() {
  const logo = await readFile(join(process.cwd(), 'public/brand/kaah-logo.jpeg'));
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        position: 'relative',
        width: 64,
        height: 64,
        overflow: 'hidden',
        background: '#fff',
      }}
    >
      <img
        src={`data:image/jpeg;base64,${logo.toString('base64')}`}
        alt=""
        width={227.56}
        height={175.79}
        style={{ position: 'absolute', left: -18.49, top: -56.89 }}
      />
    </div>,
    size,
  );
}

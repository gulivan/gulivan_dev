import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { writeFileSync } from 'fs';

const fontData = await fetch(
  'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.woff',
).then((r) => r.arrayBuffer());

const fontDataRegular = await fetch(
  'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.woff',
).then((r) => r.arrayBuffer());

const svg = await satori(
  {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        fontFamily: 'Inter',
        gap: '20px',
      },
      children: [
        {
          type: 'div',
          props: {
            style: { fontSize: '72px', fontWeight: 700, color: '#f8fafc', letterSpacing: '-0.03em' },
            children: 'gulivan.dev',
          },
        },
        {
          type: 'div',
          props: {
            style: { fontSize: '28px', fontWeight: 400, color: '#94a3b8' },
            children: 'Software engineering, tech, and things I find interesting',
          },
        },
      ],
    },
  },
  {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Inter', data: fontData, weight: 700, style: 'normal' },
      { name: 'Inter', data: fontDataRegular, weight: 400, style: 'normal' },
    ],
  },
);

const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
const png = resvg.render().asPng();

writeFileSync(new URL('../public/og-default.png', import.meta.url), png);
console.log('Generated public/og-default.png');

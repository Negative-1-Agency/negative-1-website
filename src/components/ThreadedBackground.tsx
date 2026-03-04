import React from 'react';
import './ThreadedBackground.css';

/**
 * ThreadedBackground Component
 * Animated SVG thread visualization with bezier curves
 * Based on 01-260304-NegOne-visualization.txt
 */
const ThreadedBackground: React.FC = () => {
  // Generate thread paths
  const threads: Array<[string, number]> = [];
  const width = 360;
  const height = 0.01;

  for (let o = -360; o <= 360; o++) {
    const d: (string | number)[] = ['M', 0, 0, 'C'];

    if (!o) {
      let s = -width;
      let h = 1;

      do {
        d.push(
          s + width * 0.2, -height,
          s + width * 0.3, -height,
          s + width * 0.5, 0,
          s + width * 0.7, height,
          s + width * 0.9, height,
          s + width, 0
        );
        s += width;
        h++;
      } while (s < 500);
    } else {
      const r = (Math.hypot(o, 500) * 500) / o;
      const s = width / r;

      let a = -s * (o / 36000 + 1);
      let h = -36;

      d[1] = parseFloat((Math.sin(a) * r).toFixed(3));
      d[2] = parseFloat((r - Math.cos(a) * r).toFixed(3));

      do {
        const c: Array<[number, number]> = [
          [r + height + h, s * 0.1],
          [r + height + h, s * 0.3],
          [r, s * 0.5],
          [r - height - h, s * 0.7],
          [r - height - h, s * 0.9],
          [r, s],
        ];
        for (let [rr, aa] of c) {
          d.push(
            parseFloat((Math.sin(aa + a) * rr).toFixed(1)),
            parseFloat((r - Math.cos(aa + a) * rr).toFixed(2))
          );
        }
        a += s;
        h++;
      } while (Math.sin(a) * r < 500);
    }

    threads.push([d.join(' '), o / 3]);
  }

  return (
    <div className="threaded-background">
      <svg viewBox="0 -200 500 400" preserveAspectRatio="xMinYMid slice">
        {threads.map(([pathD, hue], index) => (
          <path
            key={index}
            d={pathD}
            style={{ '--hue': `${hue}deg` } as React.CSSProperties}
          />
        ))}
      </svg>
    </div>
  );
};

export default ThreadedBackground;

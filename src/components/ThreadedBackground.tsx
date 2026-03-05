import { useEffect, useRef } from 'react';
import './ThreadedBackground.css';

/**
 * ThreadedBackground Component
 * Animated SVG thread visualization - hero scoped
 * sin() calculations moved to JavaScript for universal browser support
 */
export function ThreadedBackground() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths: SVGPathElement[] = [];
    const width = 360;
    const height = 0.01;
    
    // Generate thread paths from -360 to 360
    for (let o = -360; o <= 360; o++) {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      
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

      path.setAttribute('d', d.join(' '));
      
      // Calculate lightness using sin() in JavaScript (universal browser support)
      const hue = o / 3;
      const hueRad = hue * Math.PI / 180;
      const lightness = 100 - Math.sin(hueRad) * 10;
      
      // Apply styles with calculated values
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', `hsl(${hue} 100% ${lightness}%)`);
      path.setAttribute('stroke-width', '12');
      path.setAttribute('opacity', '0.09');
      
      paths.push(path);
      svgRef.current.appendChild(path);
    }

    // Cleanup on unmount
    return () => {
      paths.forEach(path => path.remove());
    };
  }, []);

  return (
    <div className="threaded-background">
      <svg 
        ref={svgRef} 
        viewBox="0 -200 500 400" 
        preserveAspectRatio="xMinYMid slice"
      />
    </div>
  );
}

export default ThreadedBackground;
import { useEffect, useRef } from 'react';
import './ThreadedBackground.css';

interface ThreadedBackgroundProps {
  className?: string;
}

export function ThreadedBackground({ className = '' }: ThreadedBackgroundProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths: SVGPathElement[] = [];
    
    for (let i = -360; i <= 360; i++) {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      
      const d = `M0,${600 + Math.sin(i * Math.PI / 180) * 200}Q${1280 / 2},${300 + Math.cos(i * Math.PI / 180) * 100} ${1280},${600 + Math.sin(i * Math.PI / 180) * 200}`;
      path.setAttribute('d', d);
      
      const hue = i;
      const lightness = 50 - Math.sin(hue * Math.PI / 180) * 10;
      
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', `hsl(${hue} 100% ${lightness}%)`);
      path.setAttribute('stroke-width', '12');
      path.setAttribute('opacity', '0.09');
      
      paths.push(path);
      svgRef.current.appendChild(path);
    }

    return () => {
      paths.forEach(path => path.remove());
    };
  }, []);

  return (
    <div className={`threaded-background ${className}`}>
      <svg ref={svgRef} viewBox="0 0 1280 1200" preserveAspectRatio="xMidYMid slice" />
    </div>
  );
}

export default ThreadedBackground;
import { useEffect, useRef } from 'react'
import './ThreadedBackground.css'

interface ThreadedBackgroundProps {
  className?: string
}

export function ThreadedBackground({ className = '' }: ThreadedBackgroundProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const paths: SVGPathElement[] = []
    const width = 360
    const height = 0.01

    for (let o = -360; o <= 360; o++) {
      const d: (string | number)[] = ['M', 0, 0, 'C']

      if (!o) {
        let s = -width
        let h = 1

        do {
          d.push(
            s + width * 0.2, -height,
            s + width * 0.3, -height,
            s + width * 0.5, 0,
            s + width * 0.7, height,
            s + width * 0.9, height,
            s + width, 0
          )
          s += width
          h++
        } while (s < 500)
      } else {
        const r = (Math.hypot(o, 500) * 500) / o
        const s = width / r

        let a = -s * (o / 36000 + 1)
        let h = -36

        d[1] = parseFloat((Math.sin(a) * r).toFixed(3))
        d[2] = parseFloat((r - Math.cos(a) * r).toFixed(3))

        do {
          const c: [number, number][] = [
            [r + height + h, s * 0.1],
            [r + height + h, s * 0.3],
            [r,              s * 0.5],
            [r - height - h, s * 0.7],
            [r - height - h, s * 0.9],
            [r,              s],
          ]
          for (const [rr, aa] of c) {
            d.push(
              parseFloat((Math.sin(aa + a) * rr).toFixed(1)),
              parseFloat((r - Math.cos(aa + a) * rr).toFixed(2))
            )
          }
          a += s
          h++
        } while (Math.sin(a) * r < 500)
      }

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      path.setAttribute('d', d.join(' '))
      path.style.setProperty('--hue', `${o / 3}deg`)
      paths.push(path)
      svg.appendChild(path)
    }

    return () => {
      paths.forEach(p => p.remove())
    }
  }, [])

  return (
    <div
      className={`threaded-background ${className}`}
      style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <svg
        ref={svgRef}
        viewBox="0 -200 500 400"
        preserveAspectRatio="xMinYMid slice"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

export default ThreadedBackground

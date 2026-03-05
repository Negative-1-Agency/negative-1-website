import { useEffect, useRef } from 'react'
import './ThreadedBackground.css'

interface ThreadedBackgroundProps {
  className?: string
}

export function ThreadedBackground({ className = '' }: ThreadedBackgroundProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const rafRef = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const width = 80
    const height = 1
    const threads: Array<{ d: string; hue: number }> = []

    for (let o = -360; o <= 360; o++) {
      const d: (string | number)[] = ['M', 0, 0, 'C']

      if (!o) {
        let s = -width
        let h = 1.5
        do {
          d.push(
            s + width * 0.2, -height - h,
            s + width * 0.3, -height - h,
            s + width * 0.5, 0,
            s + width * 0.7,  height + h,
            s + width * 0.8,  height + h,
            s + width, 0
          )
          s += width
          h++
        } while (s < 500)
      } else {
        const r = (Math.hypot(o, 500) * 500) / o
        const s = width / r
        let a = -s * (o / 72 + 1)
        let h = 1

        d[1] = parseFloat((Math.sin(a) * r).toFixed(3))
        d[2] = parseFloat((r - Math.cos(a) * r).toFixed(3))

        do {
          const c: [number, number][] = [
            [r + height + h, s * 0.2],
            [r + height + h, s * 0.3],
            [r,              s * 0.5],
            [r - height - h, s * 0.7],
            [r - height - h, s * 0.8],
            [r,              s],
          ]
          for (const [rr, aa] of c) {
            d.push(
              parseFloat((Math.sin(aa + a) * rr).toFixed(3)),
              parseFloat((r - Math.cos(aa + a) * rr).toFixed(3))
            )
          }
          a += s
          h++
        } while (Math.sin(a) * r < 500)
      }

      // hue: o / 2 + 150  (matches original threads.push([..., o / 2 + 150]))
      threads.push({ d: d.join(' '), hue: o / 2 + 150 })
    }

    // Create path elements
    const pathEls: SVGPathElement[] = threads.map(({ d }) => {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      path.setAttribute('d', d)
      path.setAttribute('fill', 'none')
      path.setAttribute('stroke-width', '2')
      path.setAttribute('opacity', '0.07')
      svg.appendChild(path)
      return path
    })

    // Animate hue rotation — --r: 0turn → 1turn over 10s
    const DURATION = 10000

    function frame(ts: number) {
      if (!startRef.current) startRef.current = ts
      const r = ((ts - startRef.current) % DURATION) / DURATION
      const rDeg = r * 360

      pathEls.forEach((path, i) => {
        // --h: calc(var(--hue) - var(--r))
        const h = threads[i].hue - rDeg
        // --l: calc(60 + sin(var(--h)) * 10)
        const l = 60 + Math.sin((h * Math.PI) / 180) * 10
        path.setAttribute('stroke', `hsl(${h} 100% ${l}%)`)
      })

      rafRef.current = requestAnimationFrame(frame)
    }

    rafRef.current = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(rafRef.current)
      pathEls.forEach(p => p.remove())
      startRef.current = 0
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
        viewBox="-180 -200 620 400"
        preserveAspectRatio="xMinYMid slice"
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  )
}

export default ThreadedBackground

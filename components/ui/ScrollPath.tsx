'use client'

import { useRef, useEffect, useState } from 'react'
import { useScroll, useMotionValue, useMotionValueEvent, motion } from 'framer-motion'

interface Bound { top: number; bottom: number }

const R = 20
const PAD = 28
// Line draws this many px ahead of current scroll position (≈ 1.4× viewport)
const LEAD_FACTOR = 0

function buildPaths(bounds: Bound[], endY: number, cx: number, bw: number): [string, string] {
  const startY = 80
  let lp = `M ${cx} ${startY}`
  let rp = `M ${cx} ${startY}`

  for (const { top, bottom } of bounds) {
    const lx = cx - bw
    const rx = cx + bw

    lp += ` L ${cx} ${top - R}`
    lp += ` Q ${cx} ${top} ${cx - R} ${top}`
    lp += ` L ${lx + R} ${top}`
    lp += ` Q ${lx} ${top} ${lx} ${top + R}`
    lp += ` L ${lx} ${bottom - R}`
    lp += ` Q ${lx} ${bottom} ${lx + R} ${bottom}`
    lp += ` L ${cx - R} ${bottom}`
    lp += ` Q ${cx} ${bottom} ${cx} ${bottom + R}`

    rp += ` L ${cx} ${top - R}`
    rp += ` Q ${cx} ${top} ${cx + R} ${top}`
    rp += ` L ${rx - R} ${top}`
    rp += ` Q ${rx} ${top} ${rx} ${top + R}`
    rp += ` L ${rx} ${bottom - R}`
    rp += ` Q ${rx} ${bottom} ${rx - R} ${bottom}`
    rp += ` L ${cx + R} ${bottom}`
    rp += ` Q ${cx} ${bottom} ${cx} ${bottom + R}`
  }

  lp += ` L ${cx} ${endY}`
  rp += ` L ${cx} ${endY}`
  return [lp, rp]
}

export default function ScrollPath({ sectionIds }: { sectionIds: string[] }) {
  const [svgSize, setSvgSize] = useState({ w: 0, h: 0 })
  const [paths, setPaths] = useState<[string, string]>(['', ''])
  const [lengths, setLengths] = useState({ left: 0, right: 0 })
  const leftRef = useRef<SVGPathElement>(null)
  const rightRef = useRef<SVGPathElement>(null)
  const lenRef = useRef({ left: 0, right: 0 })
  const endYRef = useRef(0)
  const leftOffset = useMotionValue(99999)
  const rightOffset = useMotionValue(99999)
  const { scrollY } = useScroll()

  function calcProgress(y: number) {
    const lead = window.innerHeight * LEAD_FACTOR
    return Math.min((y + lead) / endYRef.current, 1)
  }

  useEffect(() => {
    function measure() {
      const w = window.innerWidth
      const cx = w / 2
      const bw = cx - PAD

      const bounds: Bound[] = sectionIds
        .map(id => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)
        .map(el => {
          const rect = el.getBoundingClientRect()
          return { top: rect.top + window.scrollY, bottom: rect.bottom + window.scrollY }
        })
        .sort((a, b) => a.top - b.top)

      const endY = bounds.length
        ? bounds[bounds.length - 1].bottom + 120
        : document.documentElement.scrollHeight

      endYRef.current = endY
      setPaths(buildPaths(bounds, endY, cx, bw))
      setSvgSize({ w, h: endY })
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [sectionIds])

  useEffect(() => {
    if (!paths[0] || !leftRef.current || !rightRef.current) return
    const ll = leftRef.current.getTotalLength()
    const rl = rightRef.current.getTotalLength()
    lenRef.current = { left: ll, right: rl }
    setLengths({ left: ll, right: rl })
    const p = calcProgress(scrollY.get())
    leftOffset.set(ll * (1 - p))
    rightOffset.set(rl * (1 - p))
  }, [paths])

  useMotionValueEvent(scrollY, 'change', y => {
    const p = calcProgress(y)
    leftOffset.set(lenRef.current.left * (1 - p))
    rightOffset.set(lenRef.current.right * (1 - p))
  })

  if (!svgSize.w) return null

  return (
    <svg
      className="absolute top-0 left-0 pointer-events-none hidden lg:block"
      width={svgSize.w}
      height={svgSize.h}
      style={{ zIndex: 10, mixBlendMode: 'multiply' }}
    >
      <path d={paths[0]} fill="none" stroke="#FBCB03" strokeWidth={2} strokeDasharray="5 7" opacity={0.25} />
      <path d={paths[1]} fill="none" stroke="#FBCB03" strokeWidth={2} strokeDasharray="5 7" opacity={0.25} />

      <motion.path
        ref={leftRef}
        d={paths[0]}
        fill="none"
        stroke="#FBCB03"
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={lengths.left ? `${lengths.left} ${lengths.left}` : '0 99999'}
        style={{ strokeDashoffset: leftOffset }}
      />
      <motion.path
        ref={rightRef}
        d={paths[1]}
        fill="none"
        stroke="#FBCB03"
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={lengths.right ? `${lengths.right} ${lengths.right}` : '0 99999'}
        style={{ strokeDashoffset: rightOffset }}
      />
    </svg>
  )
}

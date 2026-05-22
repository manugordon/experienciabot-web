'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import { homeContent } from '@/content/home'

const { howWeWork } = homeContent
const STEPS = howWeWork.steps
const N = STEPS.length

// Card centers as % of the connector container (first card=0%, last=100%)
// Used for dot + card reveal timing
const cardT = (i: number) => i / (N - 1) // 0, 0.25, 0.5, 0.75, 1

// CSS left% for dots/tip — line spans from 10% to 90% of container
const dotLeft = (i: number) => `${10 + i * 20}%`

function StepDot({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const t = cardT(index)
  const opacity = useTransform(progress, [Math.max(0, t - 0.03), Math.min(1, t + 0.03)], [0, 1])
  const scale  = useTransform(progress, [Math.max(0, t - 0.06), Math.min(1, t + 0.06)], [0, 1])
  return (
    <motion.div
      className="absolute w-[10px] h-[10px] rounded-full bg-black -translate-x-1/2 -translate-y-1/2 top-1/2"
      style={{ left: dotLeft(index), opacity, scale }}
    />
  )
}

function StepCard({
  step, index, progress,
}: {
  step: (typeof STEPS)[number]
  index: number
  progress: MotionValue<number>
}) {
  const t = cardT(index)
  const opacity = useTransform(progress, [Math.max(0, t - 0.18), Math.min(1, t + 0.18)], [0, 1])
  const y       = useTransform(progress, [Math.max(0, t - 0.18), Math.min(1, t + 0.18)], [20, 0])
  return (
    <motion.div
      style={{ opacity, y }}
      className="flex flex-col gap-3 lg:px-4 first:pl-0 last:pr-0"
    >
      <span className="text-[42px] font-bold text-brand-blue/15 leading-none">{step.number}</span>
      <h3 className="text-[17px] font-bold text-black">{step.title}</h3>
      <p className="text-[14px] text-black/60 leading-relaxed">{step.description}</p>
    </motion.div>
  )
}

export default function HowWeWork() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Draw the line between scrollYProgress 0.1 → 0.5 (faster, done when section centered)
  const progress = useTransform(scrollYProgress, [0.3, 0.52], [0, 1])
  const tipLeft  = useTransform(progress, [0, 1], ['0%', '90%'])

  return (
    <section id="como-trabajamos" ref={sectionRef} className="py-20 lg:py-[80px] bg-white">
      <Container>
        <AnimateIn className="max-w-2xl mb-16">
          <h2 className="text-[32px] lg:text-[36px] font-bold leading-[1.2] text-black mb-4">
            {howWeWork.headline}
          </h2>
          <p className="text-[17px] text-black/60">{howWeWork.subheadline}</p>
        </AnimateIn>

        <div className="relative">
          {/* ── Connector line (desktop only) ── */}
          <div
            className="hidden lg:block absolute inset-x-0 pointer-events-none"
            style={{ top: 54, height: 20 }}
          >
            {/* Track */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-px bg-gray-200 rounded-full"
              style={{ left: '10%', right: '10%' }}
            />

            {/* Animated fill — grows left→right */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-black rounded-full"
              style={{ left: '0%', right: '10%', scaleX: progress, originX: 0 }}
            />

            {/* Dot at each card position */}
            {STEPS.map((_, i) => (
              <StepDot key={i} index={i} progress={progress} />
            ))}

            {/* Traveling tip circle */}
            <motion.div
              className="absolute top-1/2 w-3 h-3 rounded-full bg-black -translate-x-1/2 -translate-y-1/2"
              style={{ left: tipLeft }}
            />
          </div>

          {/* ── Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 pt-14 lg:pt-20">
            {STEPS.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} progress={progress} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

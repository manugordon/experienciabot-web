'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, LayoutGrid, Award } from 'lucide-react'
import Container from '@/components/ui/Container'
import { homeContent } from '@/content/home'

const { packages } = homeContent

const cardStyles = {
  starters: { bg: '#FBCB03', fg: '#000000', rgb: '251,203,3', Icon: Zap },
  base:     { bg: '#3059A6', fg: '#ffffff', rgb: '48,89,166', Icon: LayoutGrid },
  full:     { bg: '#E52521', fg: '#ffffff', rgb: '229,37,33', Icon: Award },
} as const

type CardId = keyof typeof cardStyles

function PackageCard({ pkg }: { pkg: (typeof packages.items)[number] }) {
  const [hovered, setHovered] = useState(false)
  const c = cardStyles[pkg.id as CardId] ?? cardStyles.base
  const { Icon } = c

  const fgSub  = c.fg === '#ffffff' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.55)'
  const fgBody = c.fg === '#ffffff' ? 'rgba(255,255,255,0.82)' : 'rgba(0,0,0,0.70)'
  const fgBtn  = c.fg === '#ffffff' ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.45)'

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 flex flex-col cursor-default"
      animate={{
        boxShadow: hovered
          ? `0 20px 52px rgba(${c.rgb},0.38)`
          : `0 4px 16px rgba(${c.rgb},0.1)`,
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left accent bar — fades out as fill slides in */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[5px]"
        style={{ backgroundColor: c.bg }}
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />

      {/* Color fill — slides in from left on hover */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: c.bg, originX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col gap-5 flex-1">
        {/* Icon + badge */}
        <div className="flex items-start justify-between">
          <motion.div
            animate={{ color: hovered ? c.fg : c.bg }}
            transition={{ duration: 0.22 }}
          >
            <Icon size={30} strokeWidth={2} />
          </motion.div>
          {pkg.recommended && (
            <motion.span
              className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
              animate={
                hovered
                  ? { backgroundColor: c.fg, color: c.bg }
                  : { backgroundColor: c.bg, color: c.fg }
              }
              transition={{ duration: 0.22 }}
            >
              Recomendado
            </motion.span>
          )}
        </div>

        {/* Name + tagline */}
        <div>
          <motion.h3
            className="text-[22px] font-black tracking-tight leading-none mb-2"
            animate={{ color: hovered ? c.fg : '#000000' }}
            transition={{ duration: 0.22 }}
          >
            {pkg.name}
          </motion.h3>
          <motion.p
            className="text-[14px]"
            animate={{ color: hovered ? fgSub : 'rgba(0,0,0,0.50)' }}
            transition={{ duration: 0.22 }}
          >
            {pkg.tagline}
          </motion.p>
        </div>

        {/* Description */}
        <div className="flex-1">
          <motion.p
            className="text-[15px] leading-relaxed"
            animate={{ color: hovered ? fgBody : 'rgba(0,0,0,0.65)' }}
            transition={{ duration: 0.22 }}
          >
            {pkg.description}
          </motion.p>
        </div>

        {/* CTA */}
        <motion.a
          href={pkg.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-3 px-5 rounded-xl text-[14px] font-bold border-2"
          animate={
            hovered
              ? { borderColor: c.fg, color: c.fg, backgroundColor: 'transparent' }
              : { borderColor: c.bg, color: c.bg, backgroundColor: 'transparent' }
          }
          transition={{ duration: 0.22 }}
        >
          {pkg.cta}
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function Packages() {
  const [activeTab, setActiveTab] = useState<string>('full')
  const activePackage = packages.items.find((p) => p.id === activeTab) ?? packages.items[0]
  const ac = cardStyles[activePackage.id as CardId] ?? cardStyles.base

  const mobileOrder = ['full', 'base', 'starters']
  const mobileItems = [...packages.items].sort(
    (a, b) => mobileOrder.indexOf(a.id) - mobileOrder.indexOf(b.id)
  )

  return (
    <section id="paquetes" className="py-20 lg:py-[80px] bg-surface-gray">
      <Container>
        <div className="max-w-2xl mb-12">
          <h2 className="text-[32px] lg:text-[36px] font-bold leading-[1.2] text-black mb-4">
            {packages.headline}
          </h2>
          <p className="text-[17px] text-black/60">{packages.subheadline}</p>
        </div>

        {/* Desktop: 3-column cards — recommended in center */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-10 items-stretch">
          {[...packages.items]
            .sort((a, b) => {
              const pos = (p: typeof a) => p.recommended ? 1 : p.id === 'base' ? 0 : 2
              return pos(a) - pos(b)
            })
            .map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Mobile: tabs + static card */}
        <div className="lg:hidden mb-8">
          <div className="flex rounded-xl overflow-hidden mb-6 border border-gray-200">
            {mobileItems.map((pkg) => {
              const tc = cardStyles[pkg.id as CardId] ?? cardStyles.base
              const active = activeTab === pkg.id
              return (
                <button
                  key={pkg.id}
                  onClick={() => { setActiveTab(pkg.id) }}
                  className="flex-1 py-3 text-[13px] font-bold transition-colors duration-150"
                  style={
                    active
                      ? { backgroundColor: tc.bg, color: tc.fg }
                      : { backgroundColor: '#ffffff', color: 'rgba(0,0,0,0.45)' }
                  }
                >
                  {pkg.name}
                </button>
              )
            })}
          </div>

          <div
            className="rounded-2xl overflow-hidden bg-white"
            style={{
              borderLeft: `5px solid ${ac.bg}`,
              boxShadow: `0 8px 28px rgba(${ac.rgb},0.2)`,
            }}
          >
            <div className="p-7 flex flex-col gap-5">
              <div className="flex items-start justify-between">
                <ac.Icon size={26} color={ac.bg} strokeWidth={2} />
                {activePackage.recommended && (
                  <span
                    className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ backgroundColor: ac.bg, color: ac.fg }}
                  >
                    Recomendado
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-[22px] font-black tracking-tight leading-none mb-2">
                  {activePackage.name}
                </h3>
                <p className="text-[14px] text-black/50">{activePackage.tagline}</p>
              </div>
              <div>
                <p className="text-[15px] text-black/65 leading-relaxed">
                  {activePackage.description}
                </p>
              </div>
              <a
                href={activePackage.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 px-5 rounded-xl text-[14px] font-bold border-2"
                style={{ borderColor: ac.bg, color: ac.bg }}
              >
                {activePackage.cta}
              </a>
            </div>
          </div>
        </div>

        <p className="text-[14px] text-black/50">
          {packages.disclaimerText}{' '}
          <a
            href={packages.disclaimerWsp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-black/70 transition-colors duration-150"
          >
            {packages.disclaimerWsp.label}
          </a>
        </p>
      </Container>
    </section>
  )
}

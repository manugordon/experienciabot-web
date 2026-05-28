'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { homeContent } from '@/content/home'

const { hero } = homeContent

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 44 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
})

export default function Hero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <motion.h1
              className="text-[42px] lg:text-[52px] font-bold leading-[1.1] text-black mb-4"
              {...fadeUp(0)}
            >
              {hero.headline}
            </motion.h1>
            <motion.p
              className="text-[20px] lg:text-[22px] font-medium text-black/80 leading-snug mb-5"
              {...fadeUp(0.18)}
            >
              {hero.subheadline}
            </motion.p>
            <motion.p
              className="text-[15px] lg:text-[16px] text-black/60 leading-relaxed mb-8"
              {...fadeUp(0.28)}
            >
              {hero.description}
            </motion.p>
            <motion.div className="flex flex-col gap-4" {...fadeUp(0.42)}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={hero.ctaPrimary.href} external size="lg">
                  {hero.ctaPrimary.label}
                </Button>
                <Button href={hero.ctaSecondary.href} variant="secondary" size="lg">
                  {hero.ctaSecondary.label}
                </Button>
              </div>
              <a
                href={hero.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-black/40 hover:text-black/70 transition-colors duration-150 underline underline-offset-2 w-fit"
              >
                {hero.whatsapp.label}
              </a>
            </motion.div>
          </div>

          <motion.div
            className="relative h-[380px] lg:h-[460px] rounded-lg overflow-hidden bg-surface-gray"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.22 }}
          >
            <Image
              src="/images/testimonials/aulaManantiales.png"
              alt="Aula Colegio Manantiales"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

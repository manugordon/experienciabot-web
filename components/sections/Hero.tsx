'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { homeContent } from '@/content/home'

const { hero } = homeContent

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 44 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay },
})

export default function Hero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <motion.h1
              className="text-[42px] lg:text-[52px] font-bold leading-[1.1] text-black mb-6"
              {...fadeUp(0)}
            >
              {hero.headline}
            </motion.h1>
            <motion.p
              className="text-[17px] lg:text-[18px] text-black/75 leading-relaxed mb-8"
              {...fadeUp(0.18)}
            >
              {hero.subheadline}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              {...fadeUp(0.34)}
            >
              <Button href={hero.ctaPrimary.href} external size="lg">
                {hero.ctaPrimary.label}
              </Button>
              <Button href={hero.ctaSecondary.href} variant="secondary" size="lg">
                {hero.ctaSecondary.label}
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="relative h-[380px] lg:h-[460px] rounded-lg overflow-hidden bg-surface-gray flex items-center justify-center"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
          >
            {/* TODO: reemplazar con foto real del aula */}
            <p className="text-[14px] text-black/30 text-center px-8">
              Foto real del aula — pendiente de producción fotográfica
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

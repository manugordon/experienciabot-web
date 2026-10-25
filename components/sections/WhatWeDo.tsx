import Image from 'next/image'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'
import { StaggerList, StaggerItem } from '@/components/ui/StaggerList'
import { homeContent } from '@/content/home'

const { whatWeDo } = homeContent

const cubes = [
  '/images/cubo-azul.png',
  '/images/cubo-rojo.png',
  '/images/cubo-amarillo.png',
]

export default function WhatWeDo() {
  return (
    <section id="que-hacemos" className="py-20 lg:py-[80px] bg-surface-gray">
      <Container>
        <AnimateIn>
          <h2 className="text-[32px] lg:text-[36px] font-bold leading-[1.2] text-black mb-12 max-w-xl">
            {whatWeDo.headline}
          </h2>
        </AnimateIn>
        <StaggerList className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {whatWeDo.cards.map((card, i) => (
            <StaggerItem key={i}>
              <div className="bg-white border border-gray-200 rounded-lg p-8 h-full hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <Image
                  src={cubes[i]}
                  alt=""
                  width={52}
                  height={52}
                  className="mb-6 object-contain"
                />
                <h3 className="text-[20px] font-bold text-black mb-3">{card.title}</h3>
                <div className="flex flex-col gap-3">
                  {card.items.map((item, j) => (
                    <p key={j} className="text-[15px] text-black/70 leading-relaxed">
                      {item.lead && <strong className="font-bold text-black">{item.lead} </strong>}
                      {item.text}
                    </p>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>
        <AnimateIn className="mt-12 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          <p className="text-[17px] lg:text-[19px] font-medium text-black/80 leading-snug max-w-3xl">
            {whatWeDo.closing}
          </p>
          <Button href={whatWeDo.cta.href} external size="lg" className="shrink-0 w-fit">
            {whatWeDo.cta.label}
          </Button>
        </AnimateIn>
      </Container>
    </section>
  )
}

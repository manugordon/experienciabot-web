import Image from 'next/image'
import Container from '@/components/ui/Container'
import { homeContent } from '@/content/home'

const { credibility } = homeContent

export default function CredibilityStrip() {
  return (
    <section id="credibilidad" className="py-10 bg-surface-gray">
      <Container>
        <p className="text-[13px] font-bold uppercase tracking-wider text-black/40 text-center mb-6">
          {credibility.label}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          <Image
            src="/images/testimonials/educabotLogo.svg"
            alt="Educabot"
            width={200}
            height={40}
            className="opacity-60"
          />
        </div>
      </Container>
    </section>
  )
}

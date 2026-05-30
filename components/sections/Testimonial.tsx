import Image from 'next/image'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import { homeContent } from '@/content/home'

const { testimonial } = homeContent

export default function Testimonial() {
  const { quote, author, role, school, photo } = testimonial.fallback

  return (
    <section id="caso-de-estudio" className="py-20 lg:py-[80px] bg-brand-blue overflow-hidden">
      <Container>
        <AnimateIn>
          <h2 className="text-[28px] lg:text-[32px] font-bold text-white mb-12 max-w-xl lg:max-w-none lg:whitespace-nowrap">
            {testimonial.sectionHeadline}
          </h2>
        </AnimateIn>

        {/* Mobile / tablet layout */}
        <AnimateIn delay={0.15} className="lg:hidden">
          <figure className="flex flex-col items-start gap-8 max-w-2xl">
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="relative w-16 h-16">
                <Image src={photo} alt={school} fill className="object-contain" sizes="64px" />
              </div>
              <div className="relative w-16 h-16">
                <Image src="/images/testimonials/osofeteLogo.png" alt="La Cueva de Osofete" fill className="object-contain" sizes="64px" />
              </div>
            </div>
            <div>
              <blockquote className="text-[19px] text-white leading-relaxed mb-8 italic">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <div className="w-1 h-10 rounded-full bg-brand-yellow flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-bold text-white">{author}</p>
                  <p className="text-[14px] text-white/70">{role} — {school}</p>
                </div>
              </figcaption>
            </div>
          </figure>
        </AnimateIn>

        {/* Desktop layout */}
        <AnimateIn delay={0.15} className="hidden lg:grid lg:grid-cols-[280px_1fr] gap-16 items-center">
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center gap-4">
              <div className="relative w-[104px] h-[104px]">
                <Image src={photo} alt={school} fill className="object-contain drop-shadow-lg" sizes="104px" />
              </div>
              <div className="relative w-[104px] h-[104px]">
                <Image src="/images/testimonials/osofeteLogo.png" alt="La Cueva de Osofete" fill className="object-contain drop-shadow-lg" sizes="104px" />
              </div>
            </div>
            <p className="text-[13px] text-white/50 text-center tracking-wide uppercase">{school}</p>
          </div>

          <figure>
            <blockquote className="text-[22px] text-white leading-relaxed mb-10 italic">
              &ldquo;{quote}&rdquo;
            </blockquote>
            <figcaption className="flex items-center gap-4">
              <div className="w-1 h-10 rounded-full bg-brand-yellow flex-shrink-0" />
              <div>
                <p className="text-[16px] font-bold text-white">{author}</p>
                <p className="text-[14px] text-white/70">{role}</p>
              </div>
            </figcaption>
          </figure>
        </AnimateIn>
      </Container>
    </section>
  )
}

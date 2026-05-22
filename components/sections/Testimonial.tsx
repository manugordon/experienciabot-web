import Image from 'next/image'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import { homeContent } from '@/content/home'

const { testimonial } = homeContent

export default function Testimonial() {
  const { quote, author, role, school, photo } = testimonial.fallback

  return (
    <section className="py-20 lg:py-[80px] bg-brand-blue overflow-hidden">
      <Container>
        <AnimateIn>
          <h2 className="text-[28px] lg:text-[32px] font-bold text-white mb-12 max-w-xl">
            {testimonial.sectionHeadline}
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <figure className="flex flex-col lg:flex-row items-start gap-10 max-w-3xl">
            {/* School logo */}
            <div className="relative w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0">
              <Image
                src={photo}
                alt={school}
                fill
                className="object-contain"
                sizes="144px"
              />
            </div>

            {/* Quote */}
            <div className="flex flex-col justify-between h-full">
              <blockquote className="text-[19px] lg:text-[21px] text-white leading-relaxed mb-8 italic">
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
      </Container>
    </section>
  )
}

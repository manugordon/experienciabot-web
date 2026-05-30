import Image from 'next/image'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import { StaggerList, StaggerItem } from '@/components/ui/StaggerList'
import { homeContent } from '@/content/home'

const { caseStudy } = homeContent

export default function CaseStudyPreview() {
  return (
    <section id="caso-de-estudio" className="py-20 lg:py-[80px] bg-[#e8eef7]">
      <Container>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <AnimateIn direction="left" className="lg:col-span-7">
            <h2 className="text-[32px] lg:text-[36px] font-bold leading-[1.2] text-black mb-6">
              {caseStudy.headline}
            </h2>

            <p className="text-[17px] text-black/60 mb-8">{caseStudy.description}</p>

            {/* Partner logo */}
            <div className="flex items-center gap-4">
              <span className="text-[12px] text-black/40 uppercase tracking-wide whitespace-nowrap">En alianza con</span>
              <div className="relative w-12 h-14">
                <Image
                  src="/images/testimonials/estudiantesDeLaPlata.png"
                  alt="Club Estudiantes de La Plata"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div className="relative w-24 h-10">
                <Image
                  src="/images/testimonials/innovaEstudiantes.png"
                  alt="Innova Estudiantes"
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
            </div>
          </AnimateIn>

          <StaggerList className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:col-span-4 lg:col-start-9 items-stretch">
            {caseStudy.metrics.map((metric, i) => (
              <StaggerItem key={i} className="h-full">
                <div className="h-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-center hover:bg-brand-blue group transition-all duration-300 flex items-center justify-center">
                  <p className="text-[14px] font-bold text-black group-hover:text-white transition-colors duration-300 leading-snug">
                    {metric.value}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </Container>
    </section>
  )
}

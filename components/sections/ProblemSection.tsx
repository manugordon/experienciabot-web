import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import { StaggerList, StaggerItem } from '@/components/ui/StaggerList'
import { homeContent } from '@/content/home'

const { problem } = homeContent

export default function ProblemSection() {
  return (
    <section id="problema" className="py-20 lg:py-[80px] bg-white">
      <Container>
        <div className="max-w-2xl mx-auto">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-[32px] lg:text-[40px] font-bold leading-[1.2] text-black mb-4">
              {problem.headline}
            </h2>
            <p className="text-[17px] text-black/60">{problem.subheadline}</p>
          </AnimateIn>

          <StaggerList className="relative flex flex-col">
            {/* Vertical circuit line */}
            <div className="absolute left-[9px] top-3 bottom-3 w-px bg-gray-200" />

            {problem.items.map((item, i) => (
              <StaggerItem key={i}>
                <div className="relative flex items-start gap-6 py-5">
                  {/* Circuit node — rotated square (diamond) */}
                  <div className="relative z-10 mt-[5px] w-[18px] h-[18px] flex-shrink-0 flex items-center justify-center">
                    <div className="w-[10px] h-[10px] rotate-45 bg-brand-yellow border-2 border-brand-yellow" />
                  </div>
                  <p className="text-[16px] text-black/75 leading-relaxed">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </Container>
    </section>
  )
}

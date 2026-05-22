import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import { StaggerList, StaggerItem } from '@/components/ui/StaggerList'
import { homeContent } from '@/content/home'

const { caseStudy } = homeContent

export default function CaseStudyPreview() {
  return (
    <section id="caso-de-estudio" className="py-20 lg:py-[80px] bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateIn direction="left">
            <h2 className="text-[32px] lg:text-[36px] font-bold leading-[1.2] text-black mb-4">
              {caseStudy.headline}
            </h2>
            <p className="text-[17px] text-black/60">{caseStudy.description}</p>
          </AnimateIn>

          <StaggerList className="grid grid-cols-3 gap-4">
            {caseStudy.metrics.map((metric, i) => (
              <StaggerItem key={i}>
                <div className="bg-surface-gray rounded-lg p-6 text-center hover:bg-brand-blue hover:text-white group transition-all duration-300">
                  <p className="text-[22px] font-bold text-black group-hover:text-white mb-1 transition-colors duration-300 break-words">
                    {metric.value}
                  </p>
                  <p className="text-[12px] text-black/50 group-hover:text-white/80 transition-colors duration-300 break-words">
                    {metric.label}
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

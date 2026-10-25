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
        <AnimateIn>
          <h2 className="text-[32px] lg:text-[36px] font-bold leading-[1.2] text-black mb-12">
            {caseStudy.headline}
          </h2>
        </AnimateIn>

        <StaggerList className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {caseStudy.cases.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <div className="h-full bg-white border border-gray-200 rounded-xl p-8 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  {item.logos.map((logo) => (
                    <div key={logo.src} className="relative w-14 h-14">
                      <Image src={logo.src} alt={logo.alt} fill className="object-contain" sizes="56px" />
                    </div>
                  ))}
                </div>
                <h3 className="text-[22px] font-bold text-black">{item.title}</h3>
                <p className="text-[16px] text-black/65 leading-relaxed">{item.description}</p>
                {item.topics.length > 0 && (
                  <ul className="flex flex-wrap gap-2 mt-auto">
                    {item.topics.map((topic) => (
                      <li
                        key={topic}
                        className="text-[13px] font-bold text-black border border-gray-200 rounded-full px-3 py-1"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerList>
      </Container>
    </section>
  )
}

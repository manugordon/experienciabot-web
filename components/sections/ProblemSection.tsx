import Image from 'next/image'
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

          <StaggerList className="flex flex-col divide-y divide-gray-100">
            {problem.items.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-5 py-5">
                  <Image
                    src="/images/stick.png"
                    alt=""
                    width={52}
                    height={22}
                    className="object-contain flex-shrink-0 opacity-70"
                  />
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

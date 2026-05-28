import Image from 'next/image'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import { StaggerList, StaggerItem } from '@/components/ui/StaggerList'
import { homeContent } from '@/content/home'

const { team } = homeContent

export default function TeamPreview() {
  return (
    <section id="quienes-somos" className="py-20 lg:py-[80px] bg-surface-gray">
      <Container>
        <AnimateIn className="max-w-xl mb-12">
          <h2 className="text-[32px] lg:text-[36px] font-bold leading-[1.2] text-black mb-4">
            {team.headline}
          </h2>
          <p className="text-[17px] text-black/60">{team.subheadline}</p>
        </AnimateIn>

        <StaggerList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.members.map((member) => (
            <StaggerItem key={member.name}>
              <div className="flex items-start gap-5">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  {member.photo && (
                    <Image src={member.photo} alt={member.name} fill className="object-cover" sizes="64px" />
                  )}
                </div>
                <div>
                  <p className="text-[17px] font-bold text-black">{member.name}</p>
                  <p className="text-[13px] text-black/50 mb-2">{member.credential}</p>
                  <p className="text-[14px] text-black/70 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>
      </Container>
    </section>
  )
}

import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'
import { homeContent } from '@/content/home'

const { proposal } = homeContent

export default function Proposal() {
  const { oneshot } = proposal

  return (
    <section id="propuesta" className="py-20 lg:py-[80px] bg-surface-gray">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Propuesta integral — protagonista */}
          <AnimateIn className="lg:col-span-2">
            <div className="h-full rounded-2xl bg-brand-blue text-white p-8 lg:p-12 flex flex-col">
              <p className="text-[13px] font-bold uppercase tracking-wider text-white/60 mb-4">
                01 · {proposal.label}
              </p>
              <h2 className="text-[30px] lg:text-[38px] font-bold leading-[1.15] mb-5">
                {proposal.headline}
              </h2>
              <p className="text-[17px] text-white/80 leading-relaxed mb-8 max-w-2xl">
                {proposal.subheadline}
              </p>
              <div className="mb-10">
                <p className="text-[13px] font-bold text-white/60 mb-3">{proposal.pillarsLabel}</p>
                <ul className="flex flex-col gap-2">
                  {proposal.pillars.map((pillar) => (
                    <li key={pillar} className="flex items-center gap-2 text-[15px] font-medium">
                      <span className="w-2 h-2 rounded-full bg-brand-yellow shrink-0" aria-hidden />
                      {pillar}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <Button href={proposal.cta.href} external size="lg">
                  {proposal.cta.label}
                </Button>
              </div>
            </div>
          </AnimateIn>

          {/* Actividades puntuales — secundaria */}
          <AnimateIn>
            <div id="oneshot" className="h-full rounded-2xl bg-white border border-gray-200 p-8 flex flex-col">
              <p className="text-[13px] font-bold uppercase tracking-wider text-black/40 mb-4">
                02 · {oneshot.label}
              </p>
              <h3 className="text-[20px] font-bold text-black leading-snug mb-2">{oneshot.headline}</h3>
              <p className="text-[15px] text-black/60 leading-relaxed mb-5">{oneshot.description}</p>
              <ul className="flex flex-col gap-2 mb-8">
                {oneshot.items.map((item) => (
                  <li key={item} className="text-[14px] text-black/75 border-b border-gray-100 pb-2 last:border-0">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button href={oneshot.cta.href} external variant="secondary" className="w-full">
                  {oneshot.cta.label}
                </Button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  )
}

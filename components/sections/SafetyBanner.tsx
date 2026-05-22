import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import { ShieldCheck } from 'lucide-react'
import { homeContent } from '@/content/home'

const { safety } = homeContent

export default function SafetyBanner() {
  return (
    <section className="py-10 border-y border-gray-100 bg-white">
      <Container>
        <AnimateIn direction="left">
          <div className="flex items-start gap-5 max-w-3xl">
            <ShieldCheck size={28} className="text-brand-blue flex-shrink-0 mt-1" />
            <div>
              <p className="text-[16px] font-bold text-black mb-1">{safety.headline}</p>
              <p className="text-[15px] text-black/65 leading-relaxed">{safety.description}</p>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  )
}

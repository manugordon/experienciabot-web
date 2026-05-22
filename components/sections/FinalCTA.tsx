import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'
import TricolorLine from '@/components/ui/TricolorLine'
import { homeContent } from '@/content/home'

const { finalCta } = homeContent

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-[80px] bg-white">
      <Container>
        <AnimateIn>
          <TricolorLine className="max-w-[120px] mb-10" />
          <div className="max-w-xl">
            <h2 className="text-[32px] lg:text-[40px] font-bold leading-[1.2] text-black mb-4">
              {finalCta.headline}
            </h2>
            <p className="text-[17px] text-black/60 mb-8">{finalCta.description}</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button href={finalCta.cta.href} external size="lg">
                {finalCta.cta.label}
              </Button>
              <a
                href={finalCta.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-black/60 hover:text-black transition-colors duration-150 underline underline-offset-2"
              >
                {finalCta.whatsapp.label}
              </a>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  )
}

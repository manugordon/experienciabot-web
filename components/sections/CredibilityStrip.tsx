import Container from '@/components/ui/Container'
import { homeContent } from '@/content/home'

const { credibility } = homeContent

export default function CredibilityStrip() {
  return (
    <section id="credibilidad" className="py-10 bg-surface-gray">
      <Container>
        <p className="text-[13px] font-bold uppercase tracking-wider text-black/40 text-center mb-6">
          {credibility.label}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {credibility.items.map((item) => (
            <div key={item.name} className="flex items-center">
              {item.type === 'logo' ? (
                /* TODO: reemplazar con <Image> cuando lleguen los logos */
                <span className="text-[14px] font-bold text-black/50 uppercase tracking-wide">
                  {item.name}
                </span>
              ) : (
                <span className="text-[14px] text-black/50">{item.name}</span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

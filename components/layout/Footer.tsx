import Image from 'next/image'
import Container from '@/components/ui/Container'
import TricolorLine from '@/components/ui/TricolorLine'
import { navigationContent } from '@/content/navigation'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <TricolorLine />
      <Container>
        <div className="py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <Image
              src="/logos/experiencia-bot.png"
              alt="Experiencia Bot"
              width={160}
              height={42}
              className="mb-4"
            />
            <p className="text-[14px] text-black/60 leading-relaxed">
              Educación transversal para un mundo digital.
              <br />
              La Bot — Calle 20 N°470, La Loma, La Plata.
            </p>
          </div>

          <nav>
            <p className="text-[13px] font-bold uppercase tracking-wider text-black/40 mb-4">
              Navegación
            </p>
            <ul className="flex flex-col gap-3">
              {navigationContent.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] text-black/70 hover:text-black transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[13px] font-bold uppercase tracking-wider text-black/40 mb-4">
              Contacto
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:nacho.alonso44@gmail.com"
                  className="text-[15px] text-black/70 hover:text-black transition-colors duration-150"
                >
                  nacho.alonso44@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5492215053158"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-black/70 hover:text-black transition-colors duration-150"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/labot.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-black/70 hover:text-black transition-colors duration-150"
                >
                  @labot.ar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-black/40">
            © {new Date().getFullYear()} La Bot. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}

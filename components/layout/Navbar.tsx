'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { navigationContent } from '@/content/navigation'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200',
        isScrolled && 'shadow-[0_2px_12px_rgba(0,0,0,0.08)]',
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 lg:h-[72px]">
          <Link
            href="/"
            className="flex-shrink-0"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
            <Image
              src="/logos/experiencia-bot-navbar.png"
              alt="Experiencia Bot"
              width={160}
              height={44}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {navigationContent.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[15px] text-black hover:text-brand-blue transition-colors duration-150"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href={navigationContent.cta.href} external size="md">
              {navigationContent.cta.label}
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 -mr-2"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <Container>
            <ul className="py-6 flex flex-col gap-6">
              {navigationContent.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[17px] font-medium text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  href={navigationContent.cta.href}
                  external
                  size="lg"
                  className="w-full text-center"
                >
                  {navigationContent.cta.label}
                </Button>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  )
}

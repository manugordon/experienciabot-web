import type { Metadata } from 'next'
import { fontSans } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Experiencia Bot — Gestión pedagógica y tecnológica para instituciones educativas',
  description:
    'Gestionamos el área tecnológica de tu institución. Currícula alineada al Diseño Curricular Provincial, formación docente continua, certificaciones oficiales y un coordinador pedagógico dedicado.',
  metadataBase: new URL('https://experienciabot.ar'),
  icons: {
    icon: '/images/favIcon.png',
    shortcut: '/images/favIcon.png',
    apple: '/images/favIcon.png',
  },
  openGraph: {
    title: 'Experiencia Bot',
    description: 'Gestión pedagógica y tecnológica para instituciones educativas',
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={fontSans.variable}>
      <body>{children}</body>
    </html>
  )
}

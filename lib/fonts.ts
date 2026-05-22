import { Inter } from 'next/font/google'
// import localFont from 'next/font/local'

export const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Cuando llegue el WOFF2 de Helvetica LT Std, comentar el Inter de arriba
// y descomentar esto. Cambiar también --font-inter → --font-helvetica en globals.css
//
// export const fontSans = localFont({
//   src: [
//     {
//       path: '../public/fonts/HelveticaLTStd-Roman.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/HelveticaLTStd-Bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-helvetica',
//   display: 'swap',
// })

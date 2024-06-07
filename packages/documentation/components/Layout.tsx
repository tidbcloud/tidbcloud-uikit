// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Rethink_Sans } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'

const rethink_sans = Rethink_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rethink_sans'
})
const cormorant_garamond = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant_garamond',
  weight: '500'
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={rethink_sans.variable + ' ' + cormorant_garamond.variable}>{children}</body>
    </html>
  )
}

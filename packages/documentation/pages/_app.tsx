import { ThemeProvider } from '@components/ThemeProvider'
import { AppProps } from 'next/app'

import '../globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

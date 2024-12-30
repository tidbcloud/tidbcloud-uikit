import '@/styles/globals.css'
import '@tidbcloud/uikit/style.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@tidbcloud/uikit/theme'
import { emotionCache } from '@/lib/emotion'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider emotionCache={emotionCache} colorScheme="auto">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

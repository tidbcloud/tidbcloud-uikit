import { ThemeProvider } from '@components/ThemeProvider'
import { emotionCache } from '@lib/emotion'
import { ThemeProvider as TidbCloudThemeProvider } from '@tidbcloud/uikit/theme'
import { useMount } from 'ahooks'
import { AppProps } from 'next/app'
import { useTheme } from 'next-themes'

import '../globals.css'
import '@tidbcloud/uikit/style.css'

export default function App({ Component, pageProps }: AppProps) {
  const { setTheme, theme } = useTheme()

  useMount(() => {
    const targetNode = document.querySelector('html')
    const config = { attributes: true }
    const observer = new MutationObserver((mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          if (targetNode!.classList.contains('light')) {
            setTheme('light')
          } else if (targetNode!.classList.contains('dark')) {
            setTheme('dark')
          }
        }
      }
    })
    observer.observe(targetNode!, config)
  })

  return (
    <TidbCloudThemeProvider emotionCache={emotionCache} colorScheme="light">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <Component {...pageProps} />
      </ThemeProvider>
    </TidbCloudThemeProvider>
  )
}

import { ThemeProvider } from '@components/ThemeProvider'
import { emotionCache } from '@lib/emotion'
import { ThemeProvider as TidbCloudThemeProvider } from '@tidbcloud/uikit/theme'
import { useMount } from 'ahooks'
import { AppProps } from 'next/app'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import '../globals.css'
import '@tidbcloud/uikit/style.css'

export default function App({ Component, pageProps }: AppProps) {
  const { setTheme } = useTheme()
  const [theme, _setTheme] = useState('light')

  const handleThemeChange = (theme: string) => {
    setTheme(theme)
    _setTheme(theme)
  }

  useMount(() => {
    const targetNode = document.querySelector('html')
    const check = () => {
      if (targetNode!.classList.contains('light')) {
        handleThemeChange('light')
      } else if (targetNode!.classList.contains('dark')) {
        handleThemeChange('dark')
      }
    }
    const config = { attributes: true }
    const observer = new MutationObserver((mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          check()
        }
      }
    })
    observer.observe(targetNode!, config)
    check()
  })

  return (
    <TidbCloudThemeProvider emotionCache={emotionCache} colorScheme={theme as any}>
      <ThemeProvider attribute="class" defaultTheme={theme} enableSystem disableTransitionOnChange>
        <Component {...pageProps} />
      </ThemeProvider>
    </TidbCloudThemeProvider>
  )
}

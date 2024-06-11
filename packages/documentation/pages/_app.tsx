import { ThemeProvider } from '@components/ThemeProvider'
import { useMount } from 'ahooks'
import { AppProps } from 'next/app'
import { useTheme } from 'next-themes'

import '../globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const { setTheme } = useTheme()

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
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

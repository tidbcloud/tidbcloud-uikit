'use client'

import { createEmotionCache } from '@tidbcloud/uikit/emotion'
import { ThemeProvider } from '@tidbcloud/uikit/theme'
import { useServerInsertedHTML } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useState, type ReactNode } from 'react'

export function UIKitProvider({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme()
  const [{ cache, flush }] = useState(() => {
    const cache = createEmotionCache({ key: 'css' })
    cache.compat = true
    const insert = cache.insert
    let names: string[] = []

    cache.insert = (...args) => {
      const name = args[1].name
      if (cache.inserted[name] === undefined) names.push(name)
      return insert(...args)
    }

    return {
      cache,
      flush() {
        const inserted = names
        names = []
        return inserted
      }
    }
  })

  useServerInsertedHTML(() => {
    const names = flush()
    if (!names.length) return null
    const css = names
      .map((name) => cache.inserted[name])
      .filter((style) => typeof style === 'string')
      .join('')

    return <style data-emotion={`${cache.key} ${names.join(' ')}`} dangerouslySetInnerHTML={{ __html: css }} />
  })

  return (
    <ThemeProvider emotionCache={cache} colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}>
      {children}
    </ThemeProvider>
  )
}

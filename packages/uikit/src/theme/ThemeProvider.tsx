import { EmotionCache } from '@emotion/cache'
import { MantineProvider, MantineThemeOverride, mergeMantineTheme } from '@mantine/core'
import { MantineEmotionProvider, emotionTransform } from '@mantine/emotion'
import { useColorScheme } from '@mantine/hooks'
import { Notifications } from '@mantine/notifications'

import { useTheme } from './theme.js'

export interface ProviderProps {
  children: React.ReactNode
  colorScheme: 'light' | 'dark' | 'auto'
  theme?: MantineThemeOverride
  emotionCache?: EmotionCache
}

export function ThemeProvider({ children, colorScheme, theme: themeOverride, emotionCache }: ProviderProps) {
  const systemColorScheme = useColorScheme('light', {
    getInitialValueInEffect: false
  })
  const colorSchemeResult = colorScheme === 'auto' ? systemColorScheme : colorScheme
  const theme = useTheme(colorSchemeResult)

  return (
    <MantineEmotionProvider cache={emotionCache}>
      <MantineProvider
        forceColorScheme={colorSchemeResult}
        stylesTransform={emotionTransform}
        theme={mergeMantineTheme(theme, themeOverride)}
      >
        <Notifications />
        {children}
      </MantineProvider>
    </MantineEmotionProvider>
  )
}

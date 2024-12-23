import { EmotionCache } from '@emotion/cache'
// eslint-disable-next-line no-restricted-imports
import { MantineProvider, MantineThemeOverride, mergeMantineTheme } from '@mantine/core'
import { MantineEmotionProvider, emotionTransform } from '@mantine/emotion'
import { ModalsProvider, ModalsProviderProps } from '@mantine/modals'
import { Notifications, NotificationsProps } from '@mantine/notifications'

import { useSystemColorScheme } from '../hooks/index.js'

import { useTheme } from './theme.js'

export interface ThemeProviderProps {
  children: React.ReactNode
  colorScheme: 'light' | 'dark' | 'auto'
  theme?: MantineThemeOverride
  emotionCache?: EmotionCache
  notifications?: NotificationsProps
  modals?: ModalsProviderProps
}

export function ThemeProvider({
  children,
  colorScheme,
  theme: themeOverride,
  emotionCache,
  notifications,
  modals
}: ThemeProviderProps) {
  const systemColorScheme = useSystemColorScheme(colorScheme === 'auto' ? undefined : colorScheme, {
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
        <Notifications position="top-center" {...notifications} />
        <ModalsProvider {...modals}>{children}</ModalsProvider>
      </MantineProvider>
    </MantineEmotionProvider>
  )
}

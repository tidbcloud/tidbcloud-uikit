import { MantineProvider, MantineThemeOverride, mergeMantineTheme } from '@mantine/core'
import { MantineEmotionProvider, emotionTransform } from '@mantine/emotion'
import { useColorScheme } from '@mantine/hooks'

import { useTheme } from '../../theme/theme.js'

export interface ProviderProps {
  children: React.ReactNode
  colorScheme: 'light' | 'dark' | 'auto'
  theme?: MantineThemeOverride
}

export function ThemeProvider({ children, colorScheme, theme: themeOverride }: ProviderProps) {
  const systemColorScheme = useColorScheme('light', {
    getInitialValueInEffect: false
  })
  const colorSchemeResult = colorScheme === 'auto' ? systemColorScheme : colorScheme
  const theme = useTheme(colorSchemeResult)

  return (
    <MantineProvider
      forceColorScheme={colorSchemeResult}
      stylesTransform={emotionTransform}
      theme={mergeMantineTheme(theme, themeOverride)}
    >
      <MantineEmotionProvider>{children}</MantineEmotionProvider>
    </MantineProvider>
  )
}

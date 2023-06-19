import { useMantineColorScheme } from '@mantine/core'

import { Colors as LightColors } from './colors'
import { Colors as DarkColors } from './colors.dark'

export * from './colors'
export { themeColors as darkThemeColors, Colors as DarkColors } from './colors.dark'
export * from './fns'
export { FONT_FAMILY } from './font'
export { theme as Theme } from './theme'

export function useColors() {
  const { colorScheme } = useMantineColorScheme()
  const Colors = colorScheme === 'dark' ? DarkColors : LightColors
  return Colors
}

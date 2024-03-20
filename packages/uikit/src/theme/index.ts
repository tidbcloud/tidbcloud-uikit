import { useMantineColorScheme } from '@mantine/core'

import { Colors as DarkColors } from './colors.dark.js'
import { Colors as LightColors } from './colors.js'

export * from './colors.js'
export { themeColors as darkThemeColors, Colors as DarkColors } from './colors.dark.js'
export * from './fns/index.js'
export { FONT_FAMILY, MONOSPANCED_FONT_FAMILY } from './font.js'
export { theme as Theme } from './theme.js'

export function useColors() {
  const { colorScheme } = useMantineColorScheme()
  const Colors = colorScheme === 'dark' ? DarkColors : LightColors
  return Colors
}

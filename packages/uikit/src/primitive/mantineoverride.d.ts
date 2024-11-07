import type { FactoryPayload } from '@mantine/core'
import type { EmotionSx } from '@mantine/emotion'

import type { ShadingColor } from '../theme/colors.js'
import type { Color } from '../theme/theme.js'
import type { EmotionStyles } from '../utils/emotion.js'

declare module '@mantine/core' {
  interface MantineThemeColorsOverride {
    colors: Record<Color | (string & {}), ShadingColor>
  }
  interface StylesApiPropsOverride<Payload extends FactoryPayload> {
    styles?: EmotionStyles<Payload>
  }
  interface BoxProps {
    sx?: EmotionSx
  }
}

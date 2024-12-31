import type { FactoryPayload } from '@mantine/core'
import type { EmotionSx } from '@mantine/emotion'

import type { EmotionStyles } from '../emotion/index.js'
import type { ShadingColor } from '../theme/colors.js'
import type { Color } from '../theme/theme.js'

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

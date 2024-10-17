import type { FactoryPayload } from '@mantine/core'
import type { EmotionSx } from '@mantine/emotion'

import type { EmotionStyles } from './utils/emotion.js'

declare module '@mantine/core' {
  export interface StylesApiPropsOverride<Payload extends FactoryPayload> {
    styles?: EmotionStyles<Payload>
  }

  export interface BoxProps {
    sx?: EmotionSx
  }
}

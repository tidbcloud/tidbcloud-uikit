import type { FactoryPayload, MantineTheme, StylesApiProps, StylesRecord } from '@mantine/core'
import { CSSObject, EmotionHelpers } from '@mantine/emotion'

type EmotionStylesApiRecord<Payload extends FactoryPayload, DataType> = Payload['stylesNames'] extends string
  ?
      | StylesRecord<Payload['stylesNames'], DataType>
      | ((
          theme: MantineTheme,
          props: Payload['props'],
          helpers: EmotionHelpers
        ) => StylesRecord<Payload['stylesNames'], DataType>)
  : never

export type EmotionStyles<Payload extends FactoryPayload> = EmotionStylesApiRecord<Payload, CSSObject>

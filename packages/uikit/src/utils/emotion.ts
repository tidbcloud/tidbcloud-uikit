export type { CSSObject, CSSProperties } from '@mantine/emotion'

// eslint-disable-next-line no-restricted-imports
import type { FactoryPayload, MantineTheme, StylesRecord } from '@mantine/core'
import type { CSSObject, EmotionHelpers } from '@mantine/emotion'

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

export { keyframes, createStyles, createGetInitialProps } from '@mantine/emotion'
export { default as createEmotionCache } from '@emotion/cache'
export { default as createEmotionServer } from '@emotion/server/create-instance'

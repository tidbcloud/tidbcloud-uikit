import '@mantine/core'

import type { EmotionSx, CSSObject, EmotionHelpers } from '@mantine/emotion'

import type { DefaultProps } from './emotion/types'

declare module '@mantine/core' {
  export type EmotionStyles<Payload extends FactoryPayload> = Payload['stylesNames'] extends string
    ?
        | Partial<Record<Payload['stylesNames'], CSSObject>>
        | ((
            theme: MantineTheme,
            params: Record<string, any>,
            u: EmotionHelpers
          ) => Partial<Record<Payload['stylesNames'], CSSObject>>)
    : never

  // export interface StylesApiProps<Payload extends FactoryPayload> {
  //   styles?: EmotionStyles<Payload>
  // }

  // export interface GetStylesApiOptions {
  //   styles?: EmotionStyles<{
  //     props: any
  //     stylesNames: string
  //   }>
  // }

  // export interface UseResolvedStylesApiInput<Payload extends FactoryPayload> {
  //   styles: EmotionStyles<Payload> | undefined
  // }

  // export interface UseStylesInput<Payload extends FactoryPayload> {
  //   styles?: EmotionStyles<Payload>
  // }

  // export interface ExtendsRootComponent<Payload extends FactoryPayload> {
  //   styles?: EmotionStyles<Payload>
  // }

  export interface BoxProps {
    sx?: EmotionSx
    styles?: EmotionStyles<{
      stylesNames: string
    }>
  }
}

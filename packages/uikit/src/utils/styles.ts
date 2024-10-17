import { MantineTheme, StylesRecord } from '@mantine/core'
import { CSSObject, EmotionHelpers, EmotionSx } from '@mantine/emotion'
import { merge } from 'lodash-es'

import type { EmotionStyles } from './emotion.js'

function mergeSxValues(values: (EmotionSx | undefined)[], theme: MantineTheme, helpers: EmotionHelpers) {
  const css: CSSObject = values.reduce<CSSObject>((ret, partial) => {
    if (!partial) {
      return ret
    }

    if (Array.isArray(partial)) {
      return mergeSxValues(partial, theme, helpers)
    }

    return merge(ret, typeof partial === 'function' ? partial(theme, helpers) : partial)
  }, {})

  return css
}

export function mergeSxList(sxList: (EmotionSx | undefined)[]) {
  return (theme: MantineTheme, helpers: EmotionHelpers) => mergeSxValues(sxList, theme, helpers)
}

export function mergeStylesList<
  StylesNames extends string = never,
  Props extends Record<string, any> = Record<string, any>
>(
  stylesList: (
    | EmotionStyles<{
        props: Props
        stylesNames: StylesNames
      }>
    | undefined
  )[]
) {
  return (theme: MantineTheme, props: Props, helpers: EmotionHelpers) => {
    const css = stylesList.reduce(
      (prev, partial) =>
        typeof partial === 'function' ? merge(prev, partial(theme, props, helpers)) : merge(prev, partial),
      {}
    )

    return css as StylesRecord<StylesNames, CSSObject>
  }
}

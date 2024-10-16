import { EmotionStyles, MantineTheme } from '@mantine/core'
import { CSSObject, EmotionHelpers, EmotionSx } from '@mantine/emotion'
import { merge } from 'lodash-es'

function mergeSxValues(values: (EmotionSx | undefined)[], theme: MantineTheme, u: EmotionHelpers) {
  const css: CSSObject = values.reduce<CSSObject>((ret, partial) => {
    if (!partial) {
      return ret
    }

    if (Array.isArray(partial)) {
      return mergeSxValues(partial, theme, u)
    }

    return merge(ret, typeof partial === 'function' ? partial(theme, u) : partial)
  }, {})

  return css
}

export function mergeSxList(sxList: (EmotionSx | undefined)[]) {
  return (theme: MantineTheme, u: EmotionHelpers) => mergeSxValues(sxList, theme, u)
}

export function mergeStylesList<
  StylesNames extends string = never,
  StylesParams extends Record<string, any> = Record<string, any>
>(
  stylesList: (
    | EmotionStyles<{
        stylesNames: string
      }>
    | undefined
  )[]
) {
  return (theme: MantineTheme, params: StylesParams, u: EmotionHelpers) => {
    const css = stylesList.reduce<Partial<Record<StylesNames, CSSObject>>>(
      (prev, partial) =>
        typeof partial === 'function' ? merge(prev, partial(theme, params, u)) : merge(prev, partial),
      {}
    )

    return css
  }
}

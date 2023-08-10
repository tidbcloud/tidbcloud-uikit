import { CSSObject, DefaultProps, MantineTheme } from '@mantine/core'
import { merge } from 'lodash-es'

function mergeSxValues(values: DefaultProps['sx'][], theme: MantineTheme) {
  const css: CSSObject = values.reduce<CSSObject>((ret, partial) => {
    if (!partial) {
      return ret
    }

    if (Array.isArray(partial)) {
      return mergeSxValues(partial, theme)
    }

    return merge(ret, typeof partial === 'function' ? partial(theme) : partial)
  }, {})

  return css
}

export function mergeSxList(sxList: DefaultProps['sx'][]) {
  return (theme: MantineTheme) => mergeSxValues(sxList, theme)
}

export function mergeStylesList<
  StylesNames extends string = never,
  StylesParams extends Record<string, any> = Record<string, any>
>(stylesList: DefaultProps<StylesNames, StylesParams>['styles'][]) {
  return (theme: MantineTheme, params: StylesParams) => {
    const css = stylesList.reduce<Partial<Record<StylesNames, CSSObject>>>(
      (prev, partial) => (typeof partial === 'function' ? merge(prev, partial(theme, params)) : merge(prev, partial)),
      {}
    )

    return css
  }
}

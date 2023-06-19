import { CSSObject, DefaultProps, MantineTheme, Styles } from '@mantine/core'
import { merge } from 'lodash-es'

export * from '@mantine/utils'

export * from './fc'

export const mergeSx = (theme: MantineTheme, ...sxs: DefaultProps['sx'][]) => {
  const styles: CSSObject = {}
  sxs.forEach((sx) => {
    if (Array.isArray(sx)) {
      merge(styles, mergeSx(theme, ...sx))
    } else if (typeof sx === 'function') {
      merge(styles, sx(theme))
    } else {
      merge(styles, sx)
    }
  })
  return styles
}

export const mergeStyles = <
  StylesNames extends string = never,
  StylesParams extends Record<string, any> = Record<string, any>
>(
  theme: MantineTheme,
  params: StylesParams,
  ...styles: Styles<StylesNames, StylesParams>[]
) => {
  const css: Styles<StylesNames, StylesParams> = {}
  styles.forEach((style) => {
    if (typeof style === 'function') {
      merge(css, style(theme, params))
    } else {
      merge(css, style)
    }
  })
  return css
}

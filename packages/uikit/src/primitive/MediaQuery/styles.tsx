import { MantineTheme, em, MantineSize, MantineBreakpoint, px } from '@mantine/core'
import { createStyles, CSSObject } from '@mantine/emotion'

export type MediaQueryNumberSize = MantineSize | number | (string & {})

export interface MediaQueryStylesParams {
  smallerThan?: MediaQueryNumberSize
  largerThan?: MediaQueryNumberSize
  styles?: CSSObject | ((theme: MantineTheme) => CSSObject)
  query?: string
}
function getBreakpointValue(theme: MantineTheme, breakpoint: MantineBreakpoint | number) {
  return breakpoint in theme.breakpoints && typeof breakpoint !== 'number'
    ? (px(theme.breakpoints[breakpoint]) as number)
    : (px(breakpoint) as number)
}

export default createStyles((theme, { smallerThan, largerThan, query, styles }: MediaQueryStylesParams, u) => {
  const media: CSSObject = {}
  const _styles = typeof styles === 'function' ? styles(theme) : styles

  if (largerThan !== undefined && smallerThan !== undefined) {
    media[
      `@media (min-width: ${em(getBreakpointValue(theme, largerThan))}) and (max-width: ${em(
        getBreakpointValue(theme, smallerThan) - 0.1
      )})`
    ] = _styles
  } else {
    if (largerThan !== undefined) {
      media[u.largerThan(largerThan)] = _styles
    }

    if (smallerThan !== undefined) {
      media[u.smallerThan(smallerThan)] = _styles
    }
  }

  if (query) {
    media[`@media ${query}`] = _styles
  }

  return { media }
})

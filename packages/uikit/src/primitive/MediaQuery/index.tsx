import { MantineTheme, useProps } from '@mantine/core'
import { CSSObject } from '@mantine/emotion'
import React, { Children } from 'react'

import useStyles from './styles.js'
import { type MediaQueryNumberSize } from './styles.js'

export interface MediaQueryProps {
  className?: string

  /** Child that should be shown at given breakpoint, it must accept className prop */
  children: React.ReactNode

  /** Styles applied to child when viewport is smaller than given breakpoint */
  smallerThan?: MediaQueryNumberSize

  /** Styles applied to child when viewport is larger than given breakpoint */
  largerThan?: MediaQueryNumberSize

  /** Any other media query */
  query?: string

  /** Styles applied to child when breakpoint matches */
  styles: CSSObject | ((theme: MantineTheme) => CSSObject)
}

export function MediaQuery(props: MediaQueryProps) {
  const { children, smallerThan, largerThan, query, styles, className } = useProps('MediaQuery', {}, props)

  const { classes, cx } = useStyles({ smallerThan, largerThan, query, styles })

  if (children === undefined) {
    return null
  }

  const child = Children.only(children) as React.ReactElement

  if (typeof child === 'object' && child !== null && 'props' in child) {
    return React.cloneElement(child, {
      className: cx(classes.media, child.props?.className, className)
    })
  }

  return child
}

import { Box, LoaderProps } from '@mantine/core'
import { useMantineTheme, useComponentDefaultProps } from '@mantine/styles'

import { Oval } from './loaders/Oval'

const sizes = {
  xs: 18,
  sm: 22,
  md: 36,
  lg: 44,
  xl: 58
}

const defaultProps: Partial<LoaderProps> = {
  size: 'md'
}

export function Loader(props: LoaderProps) {
  const { size, color, variant, ...others } = useComponentDefaultProps('Loader', defaultProps, props)
  const theme = useMantineTheme()

  return (
    <Box
      component={Oval}
      size={theme.fn.size({ size: size!, sizes })}
      color={
        theme.fn.variant({
          variant: 'filled',
          primaryFallback: false,
          color: color || theme.primaryColor
        }).background || 'transparent'
      }
      {...others}
    />
  )
}

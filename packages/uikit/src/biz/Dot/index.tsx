import { Box, BoxProps } from '@mantine/core'
import React from 'react'

import { Colors } from '../../theme'

export interface DotProps extends BoxProps {
  color: keyof typeof Colors
  size?: number
}

export const Dot: React.FC<DotProps> = ({ color, size = 8, ...rest }) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors[color]?.[5] ?? theme.colors.gray[5],
        height: size,
        width: size,
        borderRadius: '50%'
      })}
      {...rest}
    />
  )
}

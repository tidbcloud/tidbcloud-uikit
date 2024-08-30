import React from 'react'

import { Box, BoxProps } from '../../primitive/index.js'
import { Color } from '../../theme/index.js'

export interface DotProps extends BoxProps {
  color: Color
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

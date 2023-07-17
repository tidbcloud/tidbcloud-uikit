import { Box, BoxProps } from '@tidb-cloud-uikit/components'
import { Colors } from '@tidb-cloud-uikit/theme'
import React from 'react'

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

import React from 'react'
import { Box } from '@mantine/core'
import { Colors } from '../theme'

export interface DotProps {
  color: keyof typeof Colors
  size?: number
}

export const Dot: React.FC<DotProps> = ({ color, size = 8 }) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors[color]?.[5] ?? theme.colors.gray[5],
        height: size,
        width: size,
        borderRadius: '50%'
      })}
    />
  )
}

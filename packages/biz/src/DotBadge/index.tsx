import { Badge, BadgeProps } from '@mantine/core'
import React from 'react'

import { Dot, DotProps } from '../Dot'
import { Typography } from '../Typography'

export interface DotBadgeProps extends Omit<BadgeProps, 'color'> {
  color?: DotProps['color']
}

export const DotBadge: React.FC<DotBadgeProps> = ({ color = 'green', children, ...rest }) => {
  return (
    <Badge
      variant="light"
      styles={(theme) => ({
        root: {
          backgroundColor: theme.colors[color][0],
          borderRadius: theme.defaultRadius,
          textTransform: 'none',
          height: 28
        }
      })}
      leftSection={<Dot color={color} size={8} />}
      {...rest}
    >
      <Typography variant="body3" c={`${color}.6`}>
        {children}
      </Typography>
    </Badge>
  )
}

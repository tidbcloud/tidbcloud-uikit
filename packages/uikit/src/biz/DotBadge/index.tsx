import React from 'react'

import { Badge, BadgeProps } from '../../primitive/index.js'
import { Typography } from '../../primitive/Typography/index.js'
import { Dot, DotProps } from '../Dot/index.js'

export interface DotBadgeProps extends Omit<BadgeProps, 'color'> {
  color?: DotProps['color']
}

export const DotBadge: React.FC<DotBadgeProps> = ({ color = 'green', children, ...rest }) => {
  return (
    <Badge
      variant="light"
      styles={(theme) => ({
        root: {
          backgroundColor: theme.colors[color][1],
          borderRadius: theme.defaultRadius,
          textTransform: 'none',
          height: 28
        }
      })}
      leftSection={<Dot color={color} size={8} />}
      {...rest}
    >
      <Typography fz={14} fw={500} c={`${color}.8`}>
        {children}
      </Typography>
    </Badge>
  )
}

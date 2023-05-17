import type { MantineColor } from '@mantine/styles'
import React from 'react'

export interface LoaderProps extends React.ComponentPropsWithoutRef<'svg'> {
  size: number
  color: MantineColor
}

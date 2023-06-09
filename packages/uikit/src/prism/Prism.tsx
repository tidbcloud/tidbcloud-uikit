import { Prism, PrismProps } from '@mantine/prism'
import React from 'react'

import { MantineProvider, useMantineTheme } from '../components'

import { getPrismTheme } from './prism-theme'

export const MantinePrism: React.FC<PrismProps> = (props) => {
  const theme = useMantineTheme()
  return (
    <MantineProvider theme={{ colorScheme: theme.colorScheme }}>
      <Prism getPrismTheme={getPrismTheme} noCopy scrollAreaComponent="div" {...props} />
    </MantineProvider>
  )
}

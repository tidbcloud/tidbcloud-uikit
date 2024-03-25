import { MantineProvider, useMantineTheme } from '@mantine/core'
import { Prism, PrismProps } from '@mantine/prism'
import React from 'react'

import { getPrismTheme } from './prism-theme.js'

export const MantinePrism: React.FC<PrismProps> = (props) => {
  const theme = useMantineTheme()
  return (
    <MantineProvider theme={{ colorScheme: theme.colorScheme }}>
      <Prism getPrismTheme={getPrismTheme} noCopy scrollAreaComponent="div" {...props} />
    </MantineProvider>
  )
}

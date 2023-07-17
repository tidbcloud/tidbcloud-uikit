import { Prism, PrismProps } from '@mantine/prism'
import { MantineProvider, useMantineTheme } from '@tidb-cloud-uikit/components'
import React from 'react'

import { getPrismTheme } from './prism-theme'

export const MantinePrism: React.FC<PrismProps> = (props) => {
  const theme = useMantineTheme()
  return (
    <MantineProvider theme={{ colorScheme: theme.colorScheme }}>
      <Prism getPrismTheme={getPrismTheme} noCopy scrollAreaComponent="div" {...props} />
    </MantineProvider>
  )
}

import React, { useState } from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { MantineProvider, ColorSchemeProvider } from '@mantine/core'
import { useHotkeys } from '@mantine/hooks'

export const parameters = { layout: 'fullscreen' }

function ThemeWrapper(props: any) {
  const [mode, setMode] = useState<'dark' | 'light'>('light')
  const toggleMode = () => setMode((mode) => (mode === 'dark' ? 'light' : 'dark'))
  useHotkeys([['mod + D', toggleMode]])

  return (
    <ColorSchemeProvider colorScheme="light" toggleColorScheme={() => {}}>
      <MantineProvider
        theme={{
          colorScheme: useDarkMode() ? 'dark' : 'light'
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <div>{props.children}</div>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export const decorators = [(renderStory: any) => <ThemeWrapper>{renderStory()}</ThemeWrapper>]

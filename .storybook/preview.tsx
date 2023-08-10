import React, { useState } from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { MantineProvider, ColorSchemeProvider } from '@tidbcloud/uikit'

export const parameters = { layout: 'fullscreen' }

function ThemeWrapper(props: any) {
  const [mode, setMode] = useState<'dark' | 'light'>('light')
  const toggleMode = () => setMode((mode) => (mode === 'dark' ? 'light' : 'dark'))

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

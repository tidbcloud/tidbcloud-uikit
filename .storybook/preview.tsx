import React, { useState } from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { MantineProvider, ColorSchemeProvider, NotificationsProvider } from '@tidbcloud/uikit'
import { Theme, themeColors } from '@tidbcloud/uikit/theme'
import { Preview } from '@storybook/react'

export const parameters = { layout: 'fullscreen' }

function ThemeWrapper(props: any) {
  const [mode, setMode] = useState<'dark' | 'light'>('light')
  const toggleMode = () => setMode((mode) => (mode === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider colorScheme="light" toggleColorScheme={() => {}}>
      <MantineProvider
        theme={{
          ...Theme,
          colors: themeColors,
          colorScheme: useDarkMode() ? 'dark' : 'light'
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <NotificationsProvider position="top-center">
          <div>{props.children}</div>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export const decorators = [(renderStory: any) => <ThemeWrapper>{renderStory()}</ThemeWrapper>]

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Biz', 'Primitive']
      }
    }
  }
}

export default preview

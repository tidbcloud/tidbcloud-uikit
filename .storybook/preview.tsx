import React, { useEffect, useState } from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { MantineProvider, ColorSchemeProvider, NotificationsProvider } from '@tidbcloud/uikit'
import { Theme, themeColors } from '@tidbcloud/uikit/theme'
import { Preview } from '@storybook/react'
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks'

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

function Globals() {
  useEffect(() => {
    function onMessage(e: MessageEvent<any>) {
      if (e.data.type !== 'getHeight') return

      window.requestAnimationFrame(() => {
        e.source?.postMessage({ height: document.body.scrollHeight, ...e.data }, { targetOrigin: '*' })
      })
    }

    window.addEventListener('message', onMessage, false)

    return () => window.removeEventListener('message', onMessage)
  }, [])

  return null
}

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Biz', 'Primitive']
      }
    },
    docs: {
      page: () => (
        <>
          <Globals />
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      )
    }
  }
}

export default preview

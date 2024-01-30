import React, { useState, useEffect } from 'react'
import { useDarkMode, DARK_MODE_EVENT_NAME } from 'storybook-dark-mode'
import { addons } from '@storybook/preview-api'
import { MantineProvider, ColorSchemeProvider, NotificationsProvider } from '@tidbcloud/uikit'
import { Theme, themeColors, darkThemeColors } from '@tidbcloud/uikit/theme'
import { Preview } from '@storybook/react'
import { Title, Subtitle, Description, Primary, Controls, Stories, DocsContainer } from '@storybook/blocks'
import { themes } from '@storybook/theming'

export const parameters = {
  layout: 'fullscreen'
}

function ThemeWrapper(props: any) {
  const colorScheme = useDarkMode() ? 'dark' : 'light'

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={() => {}}>
      <MantineProvider
        theme={{
          ...Theme,
          colors: colorScheme === 'dark' ? darkThemeColors : themeColors,
          colorScheme
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

const channel = addons.getChannel()

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Biz', 'Primitive']
      }
    },
    docs: {
      container: (props) => {
        const [isDark, setDark] = useState(useDarkMode())

        useEffect(() => {
          channel.on(DARK_MODE_EVENT_NAME, setDark)
          return () => channel.removeListener(DARK_MODE_EVENT_NAME, setDark)
        }, [channel, setDark])

        return <DocsContainer {...props} theme={isDark ? themes.dark : themes.light} />
      },
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

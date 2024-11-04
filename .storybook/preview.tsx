import React, { useState, useEffect, useMemo } from 'react'
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode'
import { addons } from '@storybook/preview-api'
import { ThemeProvider } from '@tidbcloud/uikit/theme'
import { Preview } from '@storybook/react'
import { Title, Subtitle, Description, Primary, Controls, Stories, DocsContainer } from '@storybook/blocks'
import { themes } from '@storybook/theming'

export const parameters = {
  layout: 'fullscreen'
}

function ThemeWrapper(props: any) {
  const [isDarkMode, setDark] = useState(false)

  useEffect(() => {
    // listen to DARK_MODE event
    channel.on(DARK_MODE_EVENT_NAME, setDark)
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark)
  }, [channel, setDark])

  const colorScheme = useMemo(() => {
    let colorScheme: 'dark' | 'light' | 'auto' = isDarkMode ? 'dark' : 'light'
    const curURL = window.location.href
    if (curURL.indexOf('theme=') > -1) {
      colorScheme = curURL.indexOf('theme=dark') > -1 ? 'dark' : 'light'
    }
    return colorScheme
  }, [isDarkMode])

  return <ThemeProvider colorScheme={colorScheme}>{props.children}</ThemeProvider>
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
        const [isDark, setDark] = useState(false)

        let darkModeEnabled = isDark
        const curURL = window.location.href
        if (curURL.indexOf('theme=') > -1) {
          darkModeEnabled = curURL.indexOf('theme=dark') > -1
        }

        useEffect(() => {
          channel.on(DARK_MODE_EVENT_NAME, setDark)
          return () => channel.removeListener(DARK_MODE_EVENT_NAME, setDark)
        }, [channel, setDark])

        return <DocsContainer {...props} theme={darkModeEnabled ? themes.dark : themes.light} />
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

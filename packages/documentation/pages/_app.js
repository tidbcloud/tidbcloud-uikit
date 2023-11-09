import '../style.css'

import { MantineProvider } from '@tidbcloud/uikit'
import { Theme, themeColors } from '@tidbcloud/uikit/theme'

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS={false}
      theme={{
        ...Theme,
        colors: themeColors
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  )
}

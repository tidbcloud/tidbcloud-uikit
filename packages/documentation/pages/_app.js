import '../style.css'
import { Theme, themeColors } from '@tidbcloud/uikit/theme'
import dynamic from 'next/dynamic'

const MantineProvider = dynamic(() => import('@tidbcloud/uikit').then((mod) => mod.MantineProvider), { ssr: false })

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

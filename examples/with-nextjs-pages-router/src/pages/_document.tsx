import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorSchemeScript } from '@tidbcloud/uikit'
import { createGetInitialProps } from '@tidbcloud/uikit/emotion'
import { createEmotionServer } from '@tidbcloud/uikit/emotion/server'
import { emotionCache } from '@/lib/emotion'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

const stylesServer = createEmotionServer(emotionCache)
Document.getInitialProps = createGetInitialProps(NextDocument, stylesServer)

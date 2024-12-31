import { emotionCache } from '@lib/emotion'
import { createGetInitialProps } from '@tidbcloud/uikit/emotion'
import { createEmotionServer } from '@tidbcloud/uikit/emotion/server'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'TiUI',
    description: 'TiDB Cloud FE Team UI Kit',
    image: ''
  }

  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        {/* <meta property="og:image" content={meta.image} /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

const stylesServer = createEmotionServer(emotionCache)

Document.getInitialProps = createGetInitialProps(NextDocument, stylesServer)

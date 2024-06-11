import { useTheme } from 'next-themes'
import { useConfig } from 'nextra-theme-docs'
import { useEffect, useRef, useState } from 'react'

export function EmbeddedStory({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(500)

  const theme = useTheme()
  const config = useConfig()

  useEffect(() => {
    function onMessage(e: MessageEvent<any>) {
      if (typeof e.data === 'string') {
        try {
          const data = JSON.parse(e.data)
          if (data.key === 'storybook-channel') {
            ref.current?.contentWindow?.postMessage({ type: 'getHeight', from: data?.event?.type }, '*')
          }
        } catch {}
      } else if (e.data.type === 'getHeight') {
        if (typeof e.data.height === 'number') {
          setHeight(e.data.height)
        }
      }
    }

    window.addEventListener('message', onMessage, false)

    return () => window.removeEventListener('message', onMessage)
  }, [])

  return (
    <>
      <h1>mode= {JSON.stringify(config.darkMode)}</h1>
      <iframe src={src} ref={ref} title={title} style={{ width: '100%', height: height }} />
    </>
  )
}

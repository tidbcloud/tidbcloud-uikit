import { useTheme } from 'nextra-theme-docs'
import { useEffect, useMemo, useRef, useState } from 'react'

export function EmbeddedStory({ src, title, initHeight }: { src: string; title: string; initHeight?: number }) {
  const ref = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(initHeight ?? 500)

  const theme = useTheme()

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

  const link = useMemo(() => {
    if (src.indexOf('?') > -1) {
      return `${src}&theme=${theme.resolvedTheme}`
    } else {
      return `${src}?theme=${theme.resolvedTheme}`
    }
  }, [src, theme?.theme])

  return (
    <>
      <iframe src={link} ref={ref} title={title} style={{ width: '100%', height: height }} />
    </>
  )
}

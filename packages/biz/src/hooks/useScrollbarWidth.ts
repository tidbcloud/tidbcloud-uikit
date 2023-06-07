import { useMount } from 'ahooks'
import { useState } from 'react'

const scrollbarWidth = () => {
  // thanks too https://davidwalsh.name/detect-scrollbar-width
  const scrollDiv = document.createElement('div')
  scrollDiv.setAttribute('style', 'width: 100px; height: 100px; overflow: scroll; position:absolute; top:-9999px;')
  document.body.appendChild(scrollDiv)
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
  document.body.removeChild(scrollDiv)
  return scrollbarWidth
}

export const useScrollbarWidth = () => {
  const [width, setWidth] = useState(scrollbarWidth)

  // this needed to ensure the scrollbar width in case hook called before the DOM is ready
  useMount(() => {
    if (typeof width !== 'undefined') {
      return
    }

    const raf = requestAnimationFrame(() => {
      setWidth(scrollbarWidth())
    })

    return () => cancelAnimationFrame(raf)
  })

  return width
}

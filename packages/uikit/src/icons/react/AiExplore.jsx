import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAiExplore = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1849 7.2592C13.1849 8.57453 12.7556 9.79069 12.0306 10.7737L14.406 13.1492C14.7531 13.4963 14.7531 14.0591 14.406 14.4062C14.0589 14.7534 13.496 14.7534 13.1489 14.4062L10.7735 12.0308C9.79046 12.7558 8.57429 13.1852 7.25893 13.1852C3.98614 13.1852 1.33301 10.532 1.33301 7.2592C1.33301 3.98639 3.98614 1.33325 7.25893 1.33325C10.5317 1.33325 13.1849 3.98639 13.1849 7.2592ZM6.25915 4.46876C6.174 4.22493 5.94237 4.06294 5.68413 4.06663C5.42588 4.07032 5.19897 4.23886 5.12082 4.48502L3.4277 9.81836C3.32743 10.1342 3.50219 10.4715 3.81803 10.5718C4.13387 10.672 4.47118 10.4973 4.57145 10.1815L4.68048 9.838H6.86306L6.98868 10.1977C7.09792 10.5106 7.44009 10.6756 7.75294 10.5664C8.06578 10.4571 8.23083 10.1149 8.12158 9.80209L6.25915 4.46876ZM6.44401 8.638H5.06143L5.71981 6.56413L6.44401 8.638ZM10.5996 4.66657C10.5996 4.3352 10.3309 4.06657 9.99958 4.06657C9.66821 4.06657 9.39958 4.3352 9.39958 4.66657V9.9999C9.39958 10.3313 9.66821 10.5999 9.99958 10.5999C10.3309 10.5999 10.5996 10.3313 10.5996 9.9999V4.66657Z"
        fill="#383E40"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAiExplore)
const AiExplore = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return (
    <MantineBox
      ref={ref}
      {...props}
      component={ForwardRef}
      className={['tiui-icon', 'AiExplore', props.className].join(' ')}
    />
  )
})
AiExplore.displayName = 'IconAiExplore'
export default AiExplore

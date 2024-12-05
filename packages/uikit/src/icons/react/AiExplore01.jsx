import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAiExplore01 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        fill="currentColor"
        d="M20.293 21.707a1 1 0 0 0 1.414-1.414zm-2.086-4.914a1 1 0 0 0-1.414 1.414zM7.97 12.158a1 1 0 1 0 0 2zm3.394 2a1 1 0 1 0 0-2zm-5.304.5a1 1 0 0 0 1.88.683zM9.54 8l.928-.37a1 1 0 0 0-1.868.029zm1.865 7.37a1 1 0 1 0 1.857-.74zM16 8a1 1 0 1 0-2 0zm-2 7a1 1 0 1 0 2 0zm7.707 5.293-3.5-3.5-1.414 1.414 3.5 3.5zM19 11.5a7.5 7.5 0 0 1-7.5 7.5v2a9.5 9.5 0 0 0 9.5-9.5zM11.5 19A7.5 7.5 0 0 1 4 11.5H2a9.5 9.5 0 0 0 9.5 9.5zM4 11.5A7.5 7.5 0 0 1 11.5 4V2A9.5 9.5 0 0 0 2 11.5zM11.5 4a7.5 7.5 0 0 1 7.5 7.5h2A9.5 9.5 0 0 0 11.5 2zM7.97 14.158h3.394v-2H7.97zm-.03 1.183 2.54-7L8.6 7.66l-2.54 7zm.67-6.97 2.795 7 1.857-.742-2.794-7zM14 8v7h2V8z"
        strokeWidth="inherit"
        stroke="currentColor"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAiExplore01)
const AiExplore01 = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
AiExplore01.displayName = 'IconAiExplore01'
export default AiExplore01

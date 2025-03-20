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
        d="M20.47 21.53a.75.75 0 1 0 1.06-1.06zm-2.44-4.56a.75.75 0 1 0-1.06 1.06zM7.97 12.408a.75.75 0 0 0 0 1.5zm3.394 1.5a.75.75 0 0 0 0-1.5zm-5.069.836a.75.75 0 1 0 1.41.512zM9.54 8l.696-.278a.75.75 0 0 0-1.401.022zm2.097 7.278a.75.75 0 1 0 1.393-.556zM15.75 8a.75.75 0 0 0-1.5 0zm-1.5 7a.75.75 0 0 0 1.5 0zm7.28 5.47-3.5-3.5-1.06 1.06 3.5 3.5zm-2.28-8.97a7.75 7.75 0 0 1-7.75 7.75v1.5a9.25 9.25 0 0 0 9.25-9.25zm-7.75 7.75a7.75 7.75 0 0 1-7.75-7.75h-1.5a9.25 9.25 0 0 0 9.25 9.25zM3.75 11.5a7.75 7.75 0 0 1 7.75-7.75v-1.5a9.25 9.25 0 0 0-9.25 9.25zm7.75-7.75a7.75 7.75 0 0 1 7.75 7.75h1.5a9.25 9.25 0 0 0-9.25-9.25zM7.97 13.908h3.394v-1.5H7.97zm-.265 1.348 2.54-7-1.41-.512-2.54 7zm1.138-6.978 2.794 7 1.393-.556-2.794-7zM14.25 8v7h1.5V8z"
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
  return (
    <MantineBox
      ref={ref}
      {...props}
      component={ForwardRef}
      className={[props.className, 'tiui-icon', 'AiExplore01'].join(' ')}
    />
  )
})
AiExplore01.displayName = 'IconAiExplore01'
export default AiExplore01

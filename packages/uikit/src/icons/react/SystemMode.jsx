import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSystemMode = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.38 20.992A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.96 9.96 0 0 1 4.38 1.008m0 17.984a9 9 0 1 1 0-17.984m0 17.984c1.505-.554 3.04-2.224 3.62-2.99A10.01 10.01 0 0 0 20.002 6c-.58-.766-2.002-2.202-3.622-2.992"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSystemMode)
const SystemMode = forwardRef((props, ref) => {
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
SystemMode.displayName = 'IconSystemMode'
export default SystemMode

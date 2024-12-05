import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLogIn03 = (props, ref) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 17c0 .351 0 .527.016.68a3 3 0 0 0 2.286 2.611c.15.036.324.059.672.105l6.592.88c1.876.25 2.814.375 3.542.085a3 3 0 0 0 1.509-1.32c.383-.684.383-1.63.383-3.524V7.482c0-1.893 0-2.84-.383-3.523a3 3 0 0 0-1.509-1.32c-.728-.29-1.666-.165-3.542.086l-6.592.878c-.349.047-.523.07-.672.106A3 3 0 0 0 6.016 6.32C6 6.473 6 6.65 6 7m6 1 4 4m0 0-4 4m4-4H3"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLogIn03)
const LogIn03 = forwardRef((props, ref) => {
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
LogIn03.displayName = 'IconLogIn03'
export default LogIn03

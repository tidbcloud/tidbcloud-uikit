import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLogIn04 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M8 5.33331L10.6667 7.99998M10.6667 7.99998L8 10.6666M10.6667 7.99998H2M2.22521 4.66665C3.37791 2.67398 5.53239 1.33331 8 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8 14.6666C5.53239 14.6666 3.37791 13.326 2.22521 11.3333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLogIn04)
const LogIn04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LogIn04', props.className].join(' ')}
    />
  )
})
LogIn04.displayName = 'IconLogIn04'
export default LogIn04

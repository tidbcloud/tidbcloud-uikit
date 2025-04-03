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
      ref={ref}
      {...props}
    >
      <path
        d="M8 5.33337L10.6667 8.00004M10.6667 8.00004L8 10.6667M10.6667 8.00004H2M2.22521 4.66671C3.37791 2.67404 5.53239 1.33337 8 1.33337C11.6819 1.33337 14.6667 4.31814 14.6667 8.00004C14.6667 11.6819 11.6819 14.6667 8 14.6667C5.53239 14.6667 3.37791 13.326 2.22521 11.3334"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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

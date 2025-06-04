import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUserCheck01 = (props, ref) => {
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
        d="M8.00004 10.3333H5.00004C4.06967 10.3333 3.60448 10.3333 3.22595 10.4482C2.37368 10.7067 1.70673 11.3736 1.4482 12.2259C1.33337 12.6044 1.33337 13.0696 1.33337 14M10.6667 12L12 13.3333L14.6667 10.6667M9.66671 5C9.66671 6.65685 8.32356 8 6.66671 8C5.00985 8 3.66671 6.65685 3.66671 5C3.66671 3.34315 5.00985 2 6.66671 2C8.32356 2 9.66671 3.34315 9.66671 5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUserCheck01)
const UserCheck01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'UserCheck01', props.className].join(' ')}
    />
  )
})
UserCheck01.displayName = 'IconUserCheck01'
export default UserCheck01

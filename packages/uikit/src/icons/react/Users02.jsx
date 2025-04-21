import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUsers02 = (props, ref) => {
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
        d="M10.6667 2.31184C11.6545 2.80274 12.3334 3.82209 12.3334 5C12.3334 6.17791 11.6545 7.19726 10.6667 7.68816M12 11.1776C13.0077 11.6336 13.9151 12.3767 14.6667 13.3333M1.33337 13.3333C2.63103 11.6817 4.39283 10.6667 6.33337 10.6667C8.27392 10.6667 10.0357 11.6817 11.3334 13.3333M9.33337 5C9.33337 6.65685 7.99023 8 6.33337 8C4.67652 8 3.33337 6.65685 3.33337 5C3.33337 3.34315 4.67652 2 6.33337 2C7.99023 2 9.33337 3.34315 9.33337 5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUsers02)
const Users02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Users02', props.className].join(' ')}
    />
  )
})
Users02.displayName = 'IconUsers02'
export default Users02

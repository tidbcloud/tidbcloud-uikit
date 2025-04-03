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
      ref={ref}
      {...props}
    >
      <path
        d="M10.6668 2.31184C11.6546 2.80274 12.3335 3.82209 12.3335 5C12.3335 6.17791 11.6546 7.19726 10.6668 7.68816M12.0002 11.1776C13.0078 11.6336 13.9152 12.3767 14.6668 13.3333M1.3335 13.3333C2.63116 11.6817 4.39295 10.6667 6.3335 10.6667C8.27404 10.6667 10.0358 11.6817 11.3335 13.3333M9.3335 5C9.3335 6.65685 7.99035 8 6.3335 8C4.67664 8 3.3335 6.65685 3.3335 5C3.3335 3.34315 4.67664 2 6.3335 2C7.99035 2 9.3335 3.34315 9.3335 5Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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

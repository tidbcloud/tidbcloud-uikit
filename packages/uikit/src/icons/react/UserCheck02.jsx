import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUserCheck02 = (props, ref) => {
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
        d="M10.6668 14V13.2C10.6668 12.0799 10.6668 11.5198 10.4488 11.092C10.2571 10.7157 9.95113 10.4097 9.57481 10.2179C9.14699 9.99996 8.58693 9.99996 7.46683 9.99996H4.5335C3.41339 9.99996 2.85334 9.99996 2.42552 10.2179C2.04919 10.4097 1.74323 10.7157 1.55148 11.092C1.3335 11.5198 1.3335 12.0799 1.3335 13.2V14M10.6668 3.99996L12.0002 5.33329L14.6668 2.66663M8.3335 4.99996C8.3335 6.28862 7.28883 7.33329 6.00016 7.33329C4.7115 7.33329 3.66683 6.28862 3.66683 4.99996C3.66683 3.71129 4.7115 2.66663 6.00016 2.66663C7.28883 2.66663 8.3335 3.71129 8.3335 4.99996Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUserCheck02)
const UserCheck02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'UserCheck02', props.className].join(' ')}
    />
  )
})
UserCheck02.displayName = 'IconUserCheck02'
export default UserCheck02

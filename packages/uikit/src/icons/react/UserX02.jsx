import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUserX02 = (props, ref) => {
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
        d="M11.0002 2.66675L14.3335 6.00008M14.3335 2.66675L11.0002 6.00008M10.6668 14.0001V13.2001C10.6668 12.08 10.6668 11.5199 10.4488 11.0921C10.2571 10.7158 9.95113 10.4098 9.57481 10.2181C9.14699 10.0001 8.58693 10.0001 7.46683 10.0001H4.5335C3.41339 10.0001 2.85334 10.0001 2.42552 10.2181C2.04919 10.4098 1.74323 10.7158 1.55148 11.0921C1.3335 11.5199 1.3335 12.08 1.3335 13.2001V14.0001M8.3335 5.00008C8.3335 6.28875 7.28883 7.33341 6.00016 7.33341C4.7115 7.33341 3.66683 6.28875 3.66683 5.00008C3.66683 3.71142 4.7115 2.66675 6.00016 2.66675C7.28883 2.66675 8.3335 3.71142 8.3335 5.00008Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUserX02)
const UserX02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'UserX02', props.className].join(' ')}
    />
  )
})
UserX02.displayName = 'IconUserX02'
export default UserX02

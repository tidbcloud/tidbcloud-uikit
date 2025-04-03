import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUserX01 = (props, ref) => {
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
        d="M11.0002 10.6667L14.3335 14M14.3335 10.6667L11.0002 14M8.00016 10.3333H5.00017C4.06979 10.3333 3.6046 10.3333 3.22607 10.4482C2.3738 10.7067 1.70686 11.3736 1.44832 12.2259C1.3335 12.6044 1.3335 13.0696 1.3335 14M9.66683 5C9.66683 6.65685 8.32368 8 6.66683 8C5.00998 8 3.66683 6.65685 3.66683 5C3.66683 3.34315 5.00998 2 6.66683 2C8.32368 2 9.66683 3.34315 9.66683 5Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUserX01)
const UserX01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'UserX01', props.className].join(' ')}
    />
  )
})
UserX01.displayName = 'IconUserX01'
export default UserX01

import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUserCircle = (props, ref) => {
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
        d="M3.54436 12.9589C3.94991 12.0034 4.89678 11.3333 6.00016 11.3333H10.0002C11.1035 11.3333 12.0504 12.0034 12.456 12.9589M10.6668 6.33325C10.6668 7.80601 9.47292 8.99992 8.00016 8.99992C6.5274 8.99992 5.3335 7.80601 5.3335 6.33325C5.3335 4.86049 6.5274 3.66659 8.00016 3.66659C9.47292 3.66659 10.6668 4.86049 10.6668 6.33325ZM14.6668 7.99992C14.6668 11.6818 11.6821 14.6666 8.00016 14.6666C4.31826 14.6666 1.3335 11.6818 1.3335 7.99992C1.3335 4.31802 4.31826 1.33325 8.00016 1.33325C11.6821 1.33325 14.6668 4.31802 14.6668 7.99992Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUserCircle)
const UserCircle = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'UserCircle', props.className].join(' ')}
    />
  )
})
UserCircle.displayName = 'IconUserCircle'
export default UserCircle

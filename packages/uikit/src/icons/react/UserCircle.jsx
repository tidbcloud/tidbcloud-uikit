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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M3.54424 12.959C3.94979 12.0035 4.89666 11.3334 6.00004 11.3334H10C11.1034 11.3334 12.0503 12.0035 12.4558 12.959M10.6667 6.33337C10.6667 7.80613 9.4728 9.00004 8.00004 9.00004C6.52728 9.00004 5.33337 7.80613 5.33337 6.33337C5.33337 4.86061 6.52728 3.66671 8.00004 3.66671C9.4728 3.66671 10.6667 4.86061 10.6667 6.33337ZM14.6667 8.00004C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8.00004C1.33337 4.31814 4.31814 1.33337 8.00004 1.33337C11.6819 1.33337 14.6667 4.31814 14.6667 8.00004Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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

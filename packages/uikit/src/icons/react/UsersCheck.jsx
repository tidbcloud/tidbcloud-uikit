import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUsersCheck = (props, ref) => {
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
        d="M10.6667 12L12 13.3333L14.6667 10.6667M8.00004 10H5.33337C4.09086 10 3.46961 10 2.97955 10.203C2.32614 10.4736 1.80701 10.9928 1.53636 11.6462C1.33337 12.1362 1.33337 12.7575 1.33337 14M10.3334 2.19384C11.3107 2.58943 12 3.54754 12 4.66667C12 5.78579 11.3107 6.7439 10.3334 7.13949M9.00004 4.66667C9.00004 6.13943 7.80613 7.33333 6.33337 7.33333C4.86061 7.33333 3.66671 6.13943 3.66671 4.66667C3.66671 3.19391 4.86061 2 6.33337 2C7.80613 2 9.00004 3.19391 9.00004 4.66667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUsersCheck)
const UsersCheck = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'UsersCheck', props.className].join(' ')}
    />
  )
})
UsersCheck.displayName = 'IconUsersCheck'
export default UsersCheck

import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUsersX = (props, ref) => {
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
        d="M10.9999 10.6667L14.3333 14M14.3333 10.6667L10.9999 14M10.3333 2.19384C11.3105 2.58943 11.9999 3.54754 11.9999 4.66667C11.9999 5.78579 11.3105 6.7439 10.3333 7.13949M7.99992 10H5.33325C4.09074 10 3.46949 10 2.97943 10.203C2.32602 10.4736 1.80689 10.9928 1.53624 11.6462C1.33325 12.1362 1.33325 12.7575 1.33325 14M8.99992 4.66667C8.99992 6.13943 7.80601 7.33333 6.33325 7.33333C4.86049 7.33333 3.66659 6.13943 3.66659 4.66667C3.66659 3.19391 4.86049 2 6.33325 2C7.80601 2 8.99992 3.19391 8.99992 4.66667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUsersX)
const UsersX = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'UsersX', props.className].join(' ')}
    />
  )
})
UsersX.displayName = 'IconUsersX'
export default UsersX

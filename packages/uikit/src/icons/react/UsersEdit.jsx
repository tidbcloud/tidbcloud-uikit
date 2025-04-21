import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUsersEdit = (props, ref) => {
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
        d="M7.33325 10H5.33325C4.09074 10 3.46949 10 2.97943 10.203C2.32602 10.4736 1.80689 10.9928 1.53624 11.6462C1.33325 12.1362 1.33325 12.7575 1.33325 14M10.3333 2.19384C11.3105 2.58943 11.9999 3.54754 11.9999 4.66667M7.99983 14.3333L9.34989 14.0633C9.4676 14.0398 9.52646 14.028 9.58134 14.0065C9.63006 13.9874 9.67635 13.9626 9.71927 13.9327C9.76763 13.899 9.81007 13.8565 9.89496 13.7716L14.3333 9.33337C14.7015 8.96516 14.7015 8.36818 14.3333 7.99998C13.9651 7.6318 13.3681 7.6318 12.9999 8L8.5616 12.4383C8.47672 12.5232 8.43429 12.5656 8.40056 12.614C8.37063 12.6569 8.34586 12.7032 8.32675 12.7519C8.30522 12.8068 8.29345 12.8656 8.2699 12.9833L7.99983 14.3333ZM8.99992 4.66667C8.99992 6.13943 7.80601 7.33333 6.33325 7.33333C4.86049 7.33333 3.66659 6.13943 3.66659 4.66667C3.66659 3.19391 4.86049 2 6.33325 2C7.80601 2 8.99992 3.19391 8.99992 4.66667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUsersEdit)
const UsersEdit = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'UsersEdit', props.className].join(' ')}
    />
  )
})
UsersEdit.displayName = 'IconUsersEdit'
export default UsersEdit

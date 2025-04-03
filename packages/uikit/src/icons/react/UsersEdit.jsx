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
      ref={ref}
      {...props}
    >
      <path
        d="M7.3335 10H5.3335C4.09099 10 3.46973 10 2.97967 10.203C2.32627 10.4736 1.80713 10.9928 1.53648 11.6462C1.3335 12.1362 1.3335 12.7575 1.3335 14M10.3335 2.19384C11.3108 2.58943 12.0002 3.54754 12.0002 4.66667M8.00008 14.3333L9.35014 14.0633C9.46785 14.0398 9.52671 14.028 9.58159 14.0065C9.6303 13.9874 9.6766 13.9626 9.71952 13.9327C9.76787 13.899 9.81032 13.8565 9.8952 13.7716L14.3335 9.33337C14.7017 8.96516 14.7017 8.36818 14.3335 7.99998C13.9653 7.6318 13.3684 7.6318 13.0002 8L8.56184 12.4383C8.47697 12.5232 8.43453 12.5656 8.40081 12.614C8.37088 12.6569 8.3461 12.7032 8.32699 12.7519C8.30547 12.8068 8.29369 12.8656 8.27015 12.9833L8.00008 14.3333ZM9.00016 4.66667C9.00016 6.13943 7.80626 7.33333 6.3335 7.33333C4.86074 7.33333 3.66683 6.13943 3.66683 4.66667C3.66683 3.19391 4.86074 2 6.3335 2C7.80626 2 9.00016 3.19391 9.00016 4.66667Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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

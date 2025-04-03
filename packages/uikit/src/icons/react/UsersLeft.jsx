import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUsersLeft = (props, ref) => {
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
        d="M12.6668 14L10.6668 12M10.6668 12L12.6668 10M10.6668 12H14.6668M10.3335 2.19384C11.3108 2.58943 12.0002 3.54754 12.0002 4.66667C12.0002 5.78579 11.3108 6.7439 10.3335 7.13949M8.00016 10H5.3335C4.09099 10 3.46973 10 2.97967 10.203C2.32627 10.4736 1.80713 10.9928 1.53648 11.6462C1.3335 12.1362 1.3335 12.7575 1.3335 14M9.00016 4.66667C9.00016 6.13943 7.80626 7.33333 6.3335 7.33333C4.86074 7.33333 3.66683 6.13943 3.66683 4.66667C3.66683 3.19391 4.86074 2 6.3335 2C7.80626 2 9.00016 3.19391 9.00016 4.66667Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUsersLeft)
const UsersLeft = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'UsersLeft', props.className].join(' ')}
    />
  )
})
UsersLeft.displayName = 'IconUsersLeft'
export default UsersLeft

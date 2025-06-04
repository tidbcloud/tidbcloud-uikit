import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconChatRobot = (props, ref) => {
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
        d="M5.33333 8.66665V9.99998M10 8.66665V9.99998M9.54417 4.30646H5.2C4.0799 4.30646 3.51984 4.30646 3.09202 4.52444C2.7157 4.71619 2.40973 5.02215 2.21799 5.39848C2 5.8263 2 6.38635 2 7.50646V11.1065C2 12.2266 2 12.7866 2.21799 13.2144C2.40973 13.5908 2.7157 13.8967 3.09202 14.0885C3.51984 14.3065 4.07989 14.3065 5.2 14.3065H10.8C11.9201 14.3065 12.4802 14.3065 12.908 14.0885C13.2843 13.8967 13.5903 13.5908 13.782 13.2144C14 12.7866 14 12.2266 14 11.1065V2.74946C14 2.39423 14 2.21661 13.9272 2.12539C13.8639 2.04605 13.7678 1.99989 13.6663 2C13.5496 2.00013 13.4109 2.11109 13.1335 2.333L11.5432 3.60523C11.2183 3.86513 11.0559 3.99509 10.875 4.08749C10.7145 4.16948 10.5437 4.2294 10.3672 4.26563C10.1682 4.30646 9.9602 4.30646 9.54417 4.30646Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconChatRobot)
const ChatRobot = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ChatRobot', props.className].join(' ')}
    />
  )
})
ChatRobot.displayName = 'IconChatRobot'
export default ChatRobot

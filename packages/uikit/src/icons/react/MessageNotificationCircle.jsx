import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMessageNotificationCircle = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.707 3.036a8.5 8.5 0 0 0-7.264 11.18c.108.322.162.482.172.605a.9.9 0 0 1-.028.326c-.03.12-.098.245-.232.494l-1.636 3.027c-.233.432-.35.648-.324.815a.5.5 0 0 0 .234.35c.144.087.388.062.876.011l5.121-.529c.155-.016.233-.024.303-.021s.12.009.187.024c.069.016.155.05.329.116a8.5 8.5 0 0 0 11.52-7.153M20.12 3.88a3 3 0 1 1-4.243 4.242 3 3 0 0 1 4.243-4.242"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMessageNotificationCircle)
const MessageNotificationCircle = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'MessageNotificationCircle'].join(' ')}
    />
  )
})
MessageNotificationCircle.displayName = 'IconMessageNotificationCircle'
export default MessageNotificationCircle

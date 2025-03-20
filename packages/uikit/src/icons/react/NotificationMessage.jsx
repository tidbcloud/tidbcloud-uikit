import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconNotificationMessage = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8V14c0 .93 0 1.395.102 1.777a3 3 0 0 0 2.122 2.12C5.605 18 6.07 18 7 18v2.335c0 .533 0 .8.11.937a.5.5 0 0 0 .39.188c.176 0 .384-.167.8-.5l2.385-1.908c.487-.39.731-.585 1.002-.724q.363-.184.762-.267c.299-.061.61-.061 1.235-.061H15.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 15.72 20 14.88 20 13.2V13m.121-9.121A3 3 0 1 1 15.88 8.12 3 3 0 0 1 20.12 3.88"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconNotificationMessage)
const NotificationMessage = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'NotificationMessage'].join(' ')}
    />
  )
})
NotificationMessage.displayName = 'IconNotificationMessage'
export default NotificationMessage

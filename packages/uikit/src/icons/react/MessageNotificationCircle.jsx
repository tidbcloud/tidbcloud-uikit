import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMessageNotificationCircle = (props, ref) => {
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
        d="M7.8045 2.02431C4.92264 2.29081 2.66625 4.71523 2.66625 7.66667C2.66625 8.3 2.77015 8.90906 2.96183 9.47774C3.03397 9.69174 3.07003 9.79875 3.07654 9.88095C3.08296 9.96213 3.07811 10.019 3.05802 10.098C3.03769 10.1779 2.99278 10.261 2.90298 10.4272L1.81254 12.4456C1.657 12.7335 1.57923 12.8774 1.59664 12.9885C1.6118 13.0853 1.66875 13.1705 1.75237 13.2215C1.84837 13.2801 2.01112 13.2632 2.33661 13.2296L5.75063 12.8767C5.85398 12.866 5.90572 12.8606 5.95283 12.8624C5.99917 12.8642 6.03188 12.8686 6.07708 12.879C6.12302 12.8896 6.1808 12.9118 6.29636 12.9564C6.92839 13.1999 7.61507 13.3333 8.33292 13.3333C11.2868 13.3333 13.7128 11.0732 13.9759 8.18796M13.4138 2.58579C14.1948 3.36683 14.1948 4.63316 13.4138 5.41421C12.6328 6.19526 11.3664 6.19526 10.5854 5.41421C9.80432 4.63316 9.80432 3.36683 10.5854 2.58579C11.3664 1.80474 12.6328 1.80474 13.4138 2.58579Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'MessageNotificationCircle', props.className].join(' ')}
    />
  )
})
MessageNotificationCircle.displayName = 'IconMessageNotificationCircle'
export default MessageNotificationCircle

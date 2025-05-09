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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M7.80475 2.02431C4.92289 2.29081 2.6665 4.71523 2.6665 7.66667C2.6665 8.3 2.7704 8.90906 2.96208 9.47774C3.03421 9.69174 3.07028 9.79875 3.07678 9.88095C3.08321 9.96213 3.07835 10.019 3.05827 10.098C3.03793 10.1779 2.99303 10.261 2.90323 10.4272L1.81279 12.4456C1.65725 12.7335 1.57948 12.8774 1.59688 12.9885C1.61204 13.0853 1.669 13.1705 1.75261 13.2215C1.84862 13.2801 2.01136 13.2632 2.33686 13.2296L5.75087 12.8767C5.85422 12.866 5.90596 12.8606 5.95307 12.8624C5.99941 12.8642 6.03213 12.8686 6.07732 12.879C6.12327 12.8896 6.18104 12.9118 6.2966 12.9564C6.92864 13.1999 7.61531 13.3333 8.33316 13.3333C11.287 13.3333 13.713 11.0732 13.9762 8.18796M13.414 2.58579C14.1951 3.36683 14.1951 4.63316 13.414 5.41421C12.633 6.19526 11.3667 6.19526 10.5856 5.41421C9.80457 4.63316 9.80457 3.36683 10.5856 2.58579C11.3667 1.80474 12.633 1.80474 13.414 2.58579Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'MessageNotificationCircle', props.className].join(' ')}
    />
  )
})
MessageNotificationCircle.displayName = 'IconMessageNotificationCircle'
export default MessageNotificationCircle

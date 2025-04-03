import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMessageSmileCircle = (props, ref) => {
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
        d="M5.99959 9.33333C5.99959 9.33333 6.87459 10.3333 8.33292 10.3333C9.79125 10.3333 10.6663 9.33333 10.6663 9.33333M10.1663 6H10.1729M6.49959 6H6.50625M8.33292 13.3333C11.4625 13.3333 13.9996 10.7963 13.9996 7.66667C13.9996 4.53705 11.4625 2 8.33292 2C5.20331 2 2.66625 4.53705 2.66625 7.66667C2.66625 8.3 2.77015 8.90906 2.96183 9.47774C3.03397 9.69175 3.07003 9.79875 3.07654 9.88095C3.08296 9.96213 3.07811 10.019 3.05802 10.098C3.03769 10.1779 2.99278 10.261 2.90298 10.4272L1.81254 12.4456C1.657 12.7335 1.57923 12.8774 1.59664 12.9885C1.6118 13.0853 1.66875 13.1705 1.75237 13.2215C1.84837 13.2801 2.01112 13.2632 2.33661 13.2296L5.75063 12.8767C5.85402 12.866 5.90571 12.8606 5.95283 12.8624C5.99917 12.8642 6.03188 12.8686 6.07708 12.879C6.12302 12.8896 6.1808 12.9118 6.29636 12.9564C6.92839 13.1999 7.61507 13.3333 8.33292 13.3333ZM10.4996 6C10.4996 6.18409 10.3503 6.33333 10.1663 6.33333C9.98216 6.33333 9.83292 6.18409 9.83292 6C9.83292 5.8159 9.98216 5.66667 10.1663 5.66667C10.3503 5.66667 10.4996 5.8159 10.4996 6ZM6.83292 6C6.83292 6.18409 6.68368 6.33333 6.49959 6.33333C6.31549 6.33333 6.16625 6.18409 6.16625 6C6.16625 5.8159 6.31549 5.66667 6.49959 5.66667C6.68368 5.66667 6.83292 5.8159 6.83292 6Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMessageSmileCircle)
const MessageSmileCircle = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'MessageSmileCircle', props.className].join(' ')}
    />
  )
})
MessageSmileCircle.displayName = 'IconMessageSmileCircle'
export default MessageSmileCircle

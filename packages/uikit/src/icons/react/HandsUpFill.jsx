import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHandsUpFill = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 22 22"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        fill="currentColor"
        d="M19.9935 8.50002H13.9998C16.9999.5 12.3994.5 12.3994.5 11.0782.5 11.0244 1.27419 10.9952 1.69498 10.9876 1.80387 10.9817 1.8891 10.9559 1.93112 10.9559 4.89991 8.39189 7.38138 7.15377 8.40658 7.15377 8.40658 6.49993 8.98498 6.49993 9.76412V20.0104C6.49993 21.4826 6.82346 21.4851 8.66206 21.4995L8.72787 21.5H17.4999C18.4999 21.5 19.2718 19.4262 19.2718 19.4262 21.4999 12.3582 21.4999 10.2553 21.4999 10.2553 21.4999 8.79494 19.9935 8.50002 19.9935 8.50002ZM1.5 8.50003H4.55111C4.55111 8.50003 5.40197 8.48911 5.40197 9.34885V20.0105C5.40197 21.485 4.84 21.485 4.15478 21.485 3.78524 21.485 3.47842 21.4894 3.19572 21.4934 2.95423 21.4968 2.73035 21.5 2.5 21.5 2 21.5 1.19171 21 1.19171 20 1.19171 19.4142.954353 16.2549.757719 13.6375.618679 11.7868.5 10.2071.5 10 .5 9.50003.5 8.50003 1.5 8.50003Z"
        strokeWidth="inherit"
        stroke="currentColor"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHandsUpFill)
const HandsUpFill = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'HandsUpFill'].join(' ')}
    />
  )
})
HandsUpFill.displayName = 'IconHandsUpFill'
export default HandsUpFill

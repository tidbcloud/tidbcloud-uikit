import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMessageDotsCircle = (props, ref) => {
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
        d="M5 8H5.00667M8 8H8.00667M11 8H11.0067M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 8.7981 2.15582 9.5598 2.43871 10.2563C2.49285 10.3897 2.51992 10.4563 2.532 10.5102C2.54381 10.5629 2.54813 10.6019 2.54814 10.6559C2.54814 10.7111 2.53812 10.7713 2.51807 10.8916L2.12275 13.2635C2.08135 13.5119 2.06065 13.6361 2.09917 13.7259C2.13289 13.8045 2.19552 13.8671 2.27412 13.9008C2.36393 13.9393 2.48812 13.9186 2.73651 13.8772L5.10843 13.4819C5.22872 13.4619 5.28887 13.4519 5.34409 13.4519C5.3981 13.4519 5.43711 13.4562 5.48981 13.468C5.54369 13.4801 5.61035 13.5072 5.74366 13.5613C6.4402 13.8442 7.2019 14 8 14ZM5.33333 8C5.33333 8.1841 5.1841 8.33333 5 8.33333C4.81591 8.33333 4.66667 8.1841 4.66667 8C4.66667 7.81591 4.81591 7.66667 5 7.66667C5.1841 7.66667 5.33333 7.81591 5.33333 8ZM8.33333 8C8.33333 8.1841 8.1841 8.33333 8 8.33333C7.81591 8.33333 7.66667 8.1841 7.66667 8C7.66667 7.81591 7.81591 7.66667 8 7.66667C8.1841 7.66667 8.33333 7.81591 8.33333 8ZM11.3333 8C11.3333 8.1841 11.1841 8.33333 11 8.33333C10.8159 8.33333 10.6667 8.1841 10.6667 8C10.6667 7.81591 10.8159 7.66667 11 7.66667C11.1841 7.66667 11.3333 7.81591 11.3333 8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMessageDotsCircle)
const MessageDotsCircle = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'MessageDotsCircle', props.className].join(' ')}
    />
  )
})
MessageDotsCircle.displayName = 'IconMessageDotsCircle'
export default MessageDotsCircle

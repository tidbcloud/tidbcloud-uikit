import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLogIn02 = (props, ref) => {
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
        d="M4 11.3333C4 11.9533 4 12.2633 4.06815 12.5176C4.25308 13.2078 4.79218 13.7469 5.48236 13.9319C5.7367 14 6.04669 14 6.66667 14H10.8C11.9201 14 12.4802 14 12.908 13.782C13.2843 13.5903 13.5903 13.2843 13.782 12.908C14 12.4802 14 11.9201 14 10.8V5.2C14 4.0799 14 3.51984 13.782 3.09202C13.5903 2.71569 13.2843 2.40973 12.908 2.21799C12.4802 2 11.9201 2 10.8 2H6.66667C6.04669 2 5.73669 2 5.48236 2.06815C4.79218 2.25308 4.25308 2.79218 4.06815 3.48236C4 3.7367 4 4.04669 4 4.66667M8 5.33333L10.6667 8M10.6667 8L8 10.6667M10.6667 8H2"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLogIn02)
const LogIn02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LogIn02', props.className].join(' ')}
    />
  )
})
LogIn02.displayName = 'IconLogIn02'
export default LogIn02

import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMicrophoneOff02 = (props, ref) => {
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
        d="M2.66659 7.99992V8.66659C2.66659 11.6121 5.0544 13.9999 7.99992 13.9999C9.64343 13.9999 11.1133 13.2565 12.0917 12.0876M1.33325 1.33325L14.6666 14.6666M10.6666 6.93325V4.66659C10.6666 3.19383 9.47268 1.99992 7.99992 1.99992C7.36031 1.99992 6.77329 2.2251 6.31383 2.60052M7.99992 11.3333C6.52716 11.3333 5.33325 10.1393 5.33325 8.66659V5.33325L10.1876 10.1919C9.70557 10.8819 8.90545 11.3333 7.99992 11.3333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMicrophoneOff02)
const MicrophoneOff02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'MicrophoneOff02', props.className].join(' ')}
    />
  )
})
MicrophoneOff02.displayName = 'IconMicrophoneOff02'
export default MicrophoneOff02

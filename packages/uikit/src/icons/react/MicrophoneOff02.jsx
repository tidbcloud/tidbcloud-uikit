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
      ref={ref}
      {...props}
    >
      <path
        d="M2.66683 7.99992V8.66659C2.66683 11.6121 5.05464 13.9999 8.00016 13.9999C9.64368 13.9999 11.1136 13.2565 12.0919 12.0876M1.3335 1.33325L14.6668 14.6666M10.6668 6.93325V4.66659C10.6668 3.19383 9.47292 1.99992 8.00016 1.99992C7.36055 1.99992 6.77354 2.2251 6.31407 2.60052M8.00016 11.3333C6.5274 11.3333 5.3335 10.1393 5.3335 8.66659V5.33325L10.1878 10.1919C9.70582 10.8819 8.9057 11.3333 8.00016 11.3333Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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

import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMicrophoneOff01 = (props, ref) => {
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
        d="M9.99992 6.26659V3.33325C9.99992 2.22868 9.10449 1.33325 7.99992 1.33325C7.21484 1.33325 6.53542 1.7856 6.20806 2.44387M7.99992 12.6666V14.6666M7.99992 12.6666C5.42259 12.6666 3.33325 10.5772 3.33325 7.99992V6.66659M7.99992 12.6666C10.5772 12.6666 12.6666 10.5772 12.6666 7.99992V6.66659M5.33325 14.6666H10.6666M1.33325 1.33325L14.6666 14.6666M7.99992 9.99992C6.89535 9.99992 5.99992 9.10449 5.99992 7.99992V5.99992L9.41499 9.41328C9.05299 9.77571 8.55264 9.99992 7.99992 9.99992Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMicrophoneOff01)
const MicrophoneOff01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'MicrophoneOff01', props.className].join(' ')}
    />
  )
})
MicrophoneOff01.displayName = 'IconMicrophoneOff01'
export default MicrophoneOff01

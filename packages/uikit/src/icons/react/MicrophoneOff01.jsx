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
      ref={ref}
      {...props}
    >
      <path
        d="M10.0002 6.26659V3.33325C10.0002 2.22868 9.10473 1.33325 8.00016 1.33325C7.21509 1.33325 6.53566 1.7856 6.2083 2.44387M8.00016 12.6666V14.6666M8.00016 12.6666C5.42283 12.6666 3.3335 10.5772 3.3335 7.99992V6.66659M8.00016 12.6666C10.5775 12.6666 12.6668 10.5772 12.6668 7.99992V6.66659M5.3335 14.6666H10.6668M1.3335 1.33325L14.6668 14.6666M8.00016 9.99992C6.89559 9.99992 6.00016 9.10449 6.00016 7.99992V5.99992L9.41523 9.41328C9.05324 9.77571 8.55288 9.99992 8.00016 9.99992Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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

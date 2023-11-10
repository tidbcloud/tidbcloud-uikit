import * as React from 'react'
import { forwardRef } from 'react'
const MicrophoneOff02 = (props, ref) => {
  if (typeof props.size === 'number') {
    props = {
      ...props,
      height: props.size,
      width: props.width
    }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 12v1a8 8 0 0 0 14.138 5.132M2 2l20 20m-6-11.6V7a4 4 0 0 0-6.53-3.1M12 17a4 4 0 0 1-4-4V8l7.281 7.288A3.995 3.995 0 0 1 12 17Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(MicrophoneOff02)
export default ForwardRef

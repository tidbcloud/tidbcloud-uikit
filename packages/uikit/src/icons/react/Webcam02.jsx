import * as React from 'react'
import { forwardRef } from 'react'
const Webcam02 = (props, ref) => {
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
        d="M8 22h8m4.5-11.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Zm-5.313 0a3.188 3.188 0 1 1-6.375 0 3.188 3.188 0 0 1 6.376 0Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Webcam02)
export default ForwardRef

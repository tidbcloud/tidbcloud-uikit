import * as React from 'react'
import { forwardRef } from 'react'
const Webcam01 = (props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      height: size,
      width: size
    }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 0v4m0 0H7m5 0h5m-2-12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Webcam01)
export default ForwardRef

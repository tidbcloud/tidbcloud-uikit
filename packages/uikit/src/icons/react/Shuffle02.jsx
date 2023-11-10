import * as React from 'react'
import { forwardRef } from 'react'
const Shuffle02 = (props, ref) => {
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
        d="M21 16v5m0 0h-5m5 0-6-6M3 3l6 6m7-6h5m0 0v5m0-5L3 21"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Shuffle02)
export default ForwardRef

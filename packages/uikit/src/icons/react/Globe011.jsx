import * as React from 'react'
import { forwardRef } from 'react'
const Globe011 = (props, ref) => {
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
        d="M2 12h20M2 12c0 5.523 4.477 10 10 10M2 12C2 6.477 6.477 2 12 2m10 10c0 5.523-4.477 10-10 10m10-10c0-5.523-4.477-10-10-10m0 0a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10m0-20a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Globe011)
export default ForwardRef

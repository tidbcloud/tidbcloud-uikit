import * as React from 'react'
import { forwardRef } from 'react'
const ReverseRight = (props, ref) => {
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
        d="M20 7H10a6 6 0 1 0 0 12h10m0-12-4-4m4 4-4 4"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ReverseRight)
export default ForwardRef

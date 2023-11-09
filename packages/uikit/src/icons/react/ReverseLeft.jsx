import * as React from 'react'
import { forwardRef } from 'react'
const ReverseLeft = (props, ref) => {
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
        d="M4 7h10a6 6 0 0 1 0 12H4M4 7l4-4M4 7l4 4"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ReverseLeft)
export default ForwardRef

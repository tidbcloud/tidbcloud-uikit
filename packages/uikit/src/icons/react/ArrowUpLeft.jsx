import * as React from 'react'
import { forwardRef } from 'react'
const ArrowUpLeft = (props, ref) => {
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
        d="M17 17 7 7m0 0v10M7 7h10"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ArrowUpLeft)
export default ForwardRef

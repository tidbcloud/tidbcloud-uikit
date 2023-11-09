import * as React from 'react'
import { forwardRef } from 'react'
const ArrowDownLeft = (props, ref) => {
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
        d="M17 7 7 17m0 0h10M7 17V7"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ArrowDownLeft)
export default ForwardRef

import * as React from 'react'
import { forwardRef } from 'react'
const ArrowRight = (props, ref) => {
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
        d="M5 12h14m0 0-7-7m7 7-7 7"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ArrowRight)
export default ForwardRef

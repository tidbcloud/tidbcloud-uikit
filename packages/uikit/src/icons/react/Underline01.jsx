import * as React from 'react'
import { forwardRef } from 'react'
const Underline01 = (props, ref) => {
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
        d="M18 4v7a6 6 0 0 1-12 0V4M4 21h16"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Underline01)
export default ForwardRef

import * as React from 'react'
import { forwardRef } from 'react'
const Toggle03Left = (props, ref) => {
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
        d="M2 12a6 6 0 0 1 6-6h8a6 6 0 0 1 0 12H8a6 6 0 0 1-6-6Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Toggle03Left)
export default ForwardRef

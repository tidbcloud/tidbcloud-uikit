import * as React from 'react'
import { forwardRef } from 'react'
const Expand02 = (props, ref) => {
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
        d="M3 21 21 3M3 21h6m-6 0v-6M21 3h-6m6 0v6"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Expand02)
export default ForwardRef

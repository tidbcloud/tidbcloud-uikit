import * as React from 'react'
import { forwardRef } from 'react'
const Hurricane02 = (props, ref) => {
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
        d="M18 12a6 6 0 0 1-12 0m12 0a6 6 0 0 0-12 0m12 0a8 8 0 1 1-16 0m4 0a8 8 0 1 1 16 0m-9 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Hurricane02)
export default ForwardRef

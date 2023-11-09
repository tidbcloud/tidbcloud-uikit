import * as React from 'react'
import { forwardRef } from 'react'
const Upload02 = (props, ref) => {
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
        d="M21 3H3m15 10-6-6m0 0-6 6m6-6v14"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Upload02)
export default ForwardRef

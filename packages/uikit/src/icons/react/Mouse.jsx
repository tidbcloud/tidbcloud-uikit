import * as React from 'react'
import { forwardRef } from 'react'
const Mouse = (props, ref) => {
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
        d="M12 9V6m0 16a7 7 0 0 1-7-7V9a7 7 0 0 1 14 0v6a7 7 0 0 1-7 7Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Mouse)
export default ForwardRef

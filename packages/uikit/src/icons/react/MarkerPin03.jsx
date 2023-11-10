import * as React from 'react'
import { forwardRef } from 'react'
const MarkerPin03 = (props, ref) => {
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
        d="M12 22c1-5 8-5.582 8-12a8 8 0 1 0-16 0c0 6.418 7 7 8 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(MarkerPin03)
export default ForwardRef

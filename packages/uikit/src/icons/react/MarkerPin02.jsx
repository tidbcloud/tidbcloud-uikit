import * as React from 'react'
import { forwardRef } from 'react'
const MarkerPin02 = (props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      height: size,
      width: size
    }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 12.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 22c2-4 8-6.582 8-12a8 8 0 1 0-16 0c0 5.418 6 8 8 12Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(MarkerPin02)
export default ForwardRef

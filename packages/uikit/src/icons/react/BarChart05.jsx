import * as React from 'react'
import { forwardRef } from 'react'
const BarChart05 = (props, ref) => {
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
        d="M3 17v4M15 8v13m-6-8v8M21 3v18"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(BarChart05)
export default ForwardRef

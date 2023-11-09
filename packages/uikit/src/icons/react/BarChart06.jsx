import * as React from 'react'
import { forwardRef } from 'react'
const BarChart06 = (props, ref) => {
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
        d="M9 8v13m12-4v4M3 3v18m12-8v8"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(BarChart06)
export default ForwardRef

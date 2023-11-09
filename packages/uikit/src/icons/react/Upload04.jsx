import * as React from 'react'
import { forwardRef } from 'react'
const Upload04 = (props, ref) => {
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
        d="m16 12-4-4m0 0-4 4m4-4v9.2c0 1.39 0 2.086.55 2.865.366.517 1.42 1.155 2.047 1.24.945.128 1.304-.059 2.022-.433A9.999 9.999 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.996 9.996 0 0 0 5 8.662"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Upload04)
export default ForwardRef

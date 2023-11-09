import * as React from 'react'
import { forwardRef } from 'react'
const LogIn04 = (props, ref) => {
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
        d="m12 8 4 4m0 0-4 4m4-4H3m.338-5A9.996 9.996 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.996 9.996 0 0 1-8.662-5"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(LogIn04)
export default ForwardRef

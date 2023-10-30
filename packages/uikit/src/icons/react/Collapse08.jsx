import * as React from 'react'
import { forwardRef } from 'react'
const Collapse08 = (props, ref) => {
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
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
        d="m8 19.5 4-4 4 4m-8-15 4 4 4-4"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Collapse08)
export default ForwardRef

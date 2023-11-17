import * as React from 'react'
import { forwardRef } from 'react'
const Link04 = (props, ref) => {
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
        d="M7.5 7H7a5 5 0 0 0 0 10h2a5 5 0 0 0 5-5m2.5 5h.5a5 5 0 0 0 0-10h-2a5 5 0 0 0-5 5"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Link04)
export default ForwardRef

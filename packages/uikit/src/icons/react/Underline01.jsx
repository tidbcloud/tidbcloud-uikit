import * as React from 'react'
import { forwardRef } from 'react'
const Underline01 = (props, ref) => {
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
        d="M18 4v7a6 6 0 0 1-12 0V4M4 21h16"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Underline01)
export default ForwardRef

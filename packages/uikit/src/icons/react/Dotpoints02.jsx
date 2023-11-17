import * as React from 'react'
import { forwardRef } from 'react'
const Dotpoints02 = (props, ref) => {
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
        d="M21 5H10m11 14H10m11-7H10M6 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 14a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0-7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Dotpoints02)
export default ForwardRef

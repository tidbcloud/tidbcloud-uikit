import * as React from 'react'
import { forwardRef } from 'react'
const Hurricane02 = (props, ref) => {
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
        d="M18 12a6 6 0 0 1-12 0m12 0a6 6 0 0 0-12 0m12 0a8 8 0 1 1-16 0m4 0a8 8 0 1 1 16 0m-9 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Hurricane02)
export default ForwardRef

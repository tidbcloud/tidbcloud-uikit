import * as React from 'react'
import { forwardRef } from 'react'
const ArrowsUp = (props, ref) => {
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
        d="M7 20V4m0 0L3 8m4-4 4 4m6 12V9m0 0-4 4m4-4 4 4"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ArrowsUp)
export default ForwardRef

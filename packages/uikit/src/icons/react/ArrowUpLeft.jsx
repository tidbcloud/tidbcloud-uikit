import * as React from 'react'
import { forwardRef } from 'react'
const ArrowUpLeft = (props, ref) => {
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
        d="M17 17 7 7m0 0v10M7 7h10"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ArrowUpLeft)
export default ForwardRef

import * as React from 'react'
import { forwardRef } from 'react'
const SpacingWidth02 = (props, ref) => {
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
        d="M21 21V3M3 21V3m3.5 9h11m0 3V9m-11 6V9"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SpacingWidth02)
export default ForwardRef

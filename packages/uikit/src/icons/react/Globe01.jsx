import * as React from 'react'
import { forwardRef } from 'react'
const Globe01 = (props, ref) => {
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
      viewBox="0 0 22 22"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1 11h20M1 11c0 5.523 4.477 10 10 10M1 11C1 5.477 5.477 1 11 1m10 10c0 5.523-4.477 10-10 10m10-10c0-5.523-4.477-10-10-10m0 0a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10m0-20a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Globe01)
export default ForwardRef

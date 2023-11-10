import * as React from 'react'
import { forwardRef } from 'react'
const TrendDown02 = (props, ref) => {
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
        d="m7 7 10 10m0 0V7m0 10H7"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(TrendDown02)
export default ForwardRef

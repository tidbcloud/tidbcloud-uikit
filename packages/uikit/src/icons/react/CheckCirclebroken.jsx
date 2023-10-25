import * as React from 'react'
import { forwardRef } from 'react'
const CheckCirclebroken = (props, ref) => {
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
        d="M22 11.086v.92a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(CheckCirclebroken)
export default ForwardRef
